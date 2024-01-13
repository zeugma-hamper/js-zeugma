
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { PlatonicMaes } from "./PlatonicMaes.js";

import { ZESpatialMoveEvent } from "./ZESpatialMoveEvent.js";
import { ZESpatialHardenEvent } from "./ZESpatialHardenEvent.js";
import { ZESpatialSoftenEvent } from "./ZESpatialSoftenEvent.js";

import { ZESpatialCaressEvent } from "./ZESpatialCaressEvent.js";
import { ZESpatialCaressAppearEvent } from "./ZESpatialCaressAppearEvent.js";
import { ZESpatialCaressVanishEvent } from "./ZESpatialCaressVanishEvent.js";


export class ViveWandEventSynth  extends Zeubject
{ //
  constructor ()
    { super ();
      this.state_by_prov = new Map ();
    }

  InterpretRawWandishWithMaesGeom (pntr_nm, bbits, crsarr,
                                   p, a, o,
                                   maes, cam, hit)
    { }

  InterpretRawWandishWithMaesSource (maes_src,
                                     pntr_nm, bbits, crsarr,
                                     p, a, o)
    { let crs_sta;
      let spatst = this.state_by_prov . get (pntr_nm);
      if (spatst == undefined)
        this.state_by_prov . set (pntr_nm, spatst = [ 0x00, false,
                                                      crs_sta = new Set () ]);
      else
        crs_sta = spatst[2];

      const smev = new ZESpatialMoveEvent (pntr_nm);
      smev . SetLoc (p) . SetAim (a) . SetOver (o);
      let butts = bbits, mask = 0x01;
      while (butts != 0)
        { if ((butts & mask)  !=  0)
            { smev . SetPressureFor (mask, 1.0);
              butts ^= mask;
            }
          mask <<= 1;
        }

      if (maes_src != null)
        { const mah = PlatonicMaes.ClosestAmong (maes_src . Maeses (),
                                                 p, a, true);
          smev . SetMaesAndHit (mah);
          if (mah != null)
            { const [ma, ht] = mah;
              const canv = maes_src . GraphicsCorrelateForMaes (ma);
              if (canv != null)
                { const canvxy = maes_src . CanvasXY (ht, ma, canv);
                  smev.canvasX = canvxy[0];
                  smev.canvasY = canvxy[1];
                }
              const wind = maes_src . WindowForMaes (ma);
              if (wind != null)
                { const windxy = maes_src . WindowXY (ht, ma, wind);
                  smev.windowX = smev.clientX = windxy[0];
                  smev.windowY = smev.clientY = windxy[1];
                }
            }
        }

      const out_evs = new Array ();
      out_evs . push (smev);

      let prevb = spatst[0];
      if (prevb != bbits)
        { butts = bbits;  mask = 0x01;
          while ((prevb ^ butts)  !=  0)
            { const curstate = butts & mask;
              const oldstate = prevb & mask;
              // if (prevb & mask  !=  curstate)  // what in the actual ass...
              if (curstate != oldstate)
                { const spev = ((curstate > 0)
                                ?  new ZESpatialHardenEvent (pntr_nm)
                                :  new ZESpatialSoftenEvent (pntr_nm));
                  spev . AdoptParticulars (smev);
                  spev . SetPressorIDAndPressureValue (mask, 0.0 + curstate);
                  if (smev.canvasX)
                    { spev.canvasX = smev.canvasX;
                      spev.canvasY = smev.canvasY;
                    }
                  if (smev.windowX)
                    { spev.windowX = spev.clientX = smev.windowX;
                      spev.windowY = spev.clientY = smev.windowY;
                    }
                  out_evs . push (spev);

                  prevb ^= (prevb & mask);
                  butts ^= (butts & mask);
                }
              mask <<= 1;
            }
        }

      // hey! what about caresses?
      let crsid;
      const novo_crs_sta = new Set ();
      if (crsarr)
        { const cnt = crsarr.length;
          for (let q = 0  ;  q < cnt  ;  ++q)
            { const cent = crsarr . at (q);
              if (cent)
                { const scev = new ZESpatialCaressEvent (pntr_nm);
                  scev . SetWhichCaressor (crsid = cent[0]);
                  scev . SetCaressDeviceIlk (cent[1]);
                  scev . SetCaressValue (cent[2]);
                  scev . SetAssociatedPointingEvent (smev);

                  if (! crs_sta . has (crsid))
                    { const scaev = new ZESpatialCaressAppearEvent (pntr_nm);
                      scaev . AdoptParticulars (scev);
                      out_evs . push (scaev);
                    }
                  else
                    crs_sta . delete (crsid);
                  novo_crs_sta . add (crsid);

                  out_evs . push (scev);
                }
            }
        }

      for (const van  of  crs_sta . values ())
        { const scvev = new ZESpatialCaressVanishEvent (pntr_nm);
          scvev . SetWhichCaressor (van);
          out_evs . push (scvev);
        }

      this.state_by_prov . set (pntr_nm, [ bbits, true, novo_crs_sta ]);
      return out_evs;
    }

  InterpretRawWandish (pntr_nm, bbits, crsarr, pnt, aim, ovr)
    { return this.InterpretRawWandishWithMaesGeom (pntr_nm, bbits, crsarr,
                                                   pnt, aim, ovr,
                                                   null, null, null);
    }
//
}

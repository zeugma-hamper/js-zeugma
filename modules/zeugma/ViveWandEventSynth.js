
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js";  // git us all the events


export class ViveWandEventSynth  extends Zeubject
{ //
  constructor ()
    { super ();
      this.state_by_prov = new Map ();
    }

  InterpretRawWandishWithMaesGeom (pntr_nm, bbits, crsdct,
                                   p, a, o,
                                   maes, cam, hit)
    { }

  InterpretRawWandishWithMaesArray (pntr_nm, bbits, crsdct,
                                    p, a, o, maes_src)
    { let spatst = this.state_by_prov . get (pntr_nm);
      if (spatst == undefined)
        this.state_by_prov . set (pntr_nm, spatst = [ 0x00, false ]);

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
                  smev.clientX = canvxy[0];
                  smev.clientY = canvxy[1];
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
                  if (smev.clientX != undefined)
                    { spev.clientX = smev.clientX;
                      spev.clientY = smev.clientY;
                    }
                  out_evs . push (spev);

                  prevb ^= (prevb & mask);
                  butts ^= (butts & mask);
                }
              mask <<= 1;
            }
        }

      // hey! what about caresses?

      this.state_by_prov . set (pntr_nm, [ bbits, true ]);
      return out_evs;
    }

  InterpretRawWandish (pntr_nm, bbits, crsdct, pnt, aim, ovr)
    { return this.InterpretRawWandishWithMaesGeom (pntr_nm, bbits, crsdct,
                                                   pnt, aim, ovr,
                                                   null, null, null);
    }
//
}

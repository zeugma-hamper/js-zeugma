
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
    { let spatst = this.state_by_prov . get (pntr_nm);
      if (spatst == undefined)
        this.state_by_prov . set (pntr_nm, spatst = [ 0x00, false ]);

      let smev = new ZESpatialMoveEvent (pntr_nm);
      smev . SetLoc (p) . SetAim (a) . SetOver (o);
      let butts = bbits, mask = 0x01;
      while (butts != 0)
        { if (butts & mask  !=  0)
            { smev . SetPressureFor (mask, 1.0);
              butts ^= mask;
            }
          mask <<= 1;
        }

      let out_evs = new Array ();
      out_evs . push (smev);

      let prevb = spatst[0];
      if (prevb != bbits)
        { butts = bbits;  mask = 0x01;
          while (prevb ^ butts  !=  0)
            { let curstate = butts & mask;
              let oldstate = prevb & mask;
              // if (prevb & mask  !=  curstate)  // what in the actual ass...
              if (curstate != oldstate)
                { let spev = ((curstate > 0)
                              ?  new ZESpatialHardenEvent (pntr_nm)
                              :  new ZESpatialSoftenEvent (pntr_nm));
                  spev . AdoptParticulars (smev);
                  spev . SetPressorIDAndPressureValue (mask, 0.0 + curstate);
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

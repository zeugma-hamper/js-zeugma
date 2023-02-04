
//
// (c) treadle & loam, provisioners llc
//


import { SpaceThing } from "./SpaceThing.js";

import { SinuZoft } from "./SinuZoft.js";


export class Cursoresque  extends SpaceThing
{ //
  constructor (sz, nv)
    { super ();

      this.vs_lrg = new Array ();
      this.vs_sml = new Array ();
      this.cur_maes = null;
      for (let w = 0  ;  w < 2  ;  ++w)
        for (let q = 0  ;  q < nv  ;  ++q)
          { let theeta = Math.PI * (2.0 * q / nv + w);
            let radial = (Vect.xaxis . Sca (Math.cos (theeta))
                          . Add (Vect.yaxis . Sca (Math.sin (theeta))))
                . Sca (0.5 * (1.0 + w));
            let arm = SinuZoft.NewWith (radial . Sca (sz * 0.065),
                                        0.8  +  0.11 * Math.random (),
                                        radial . Sca (sz * 0.24
                                                      * (1.0 + 3.0 * (q % 2))));
            ((w > 0) ? this.vs_lrg : this.vs_sml) . push (arm);
          }

    }

  DrawSelf (ratch, cm, adjc, bonus)
    { let mm = cm.pmat . Mul (cm.ipmat);
      return 0;
    }
}

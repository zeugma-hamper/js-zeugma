
//
// (c) treadle & loam, provisioners llc
//


import { PolygonPile } from "./PolygonPile.js";

import { SinuZoft } from "./SinuZoft.js";


export class Cursoresque  extends PolygonPile
{ //
  constructor (sz, nv)
    { super ();

      this.cur_maes = null;
      for (let w = 0  ;  w < 2  ;  ++w)
        { let vs = this.NewPoly ();
          for (let q = 0  ;  q < nv  ;  ++q)
            { let theeta = Math.PI * (2.0 * q / nv + w);
              let radial = (Vect.xaxis . Sca (Math.cos (theeta))
                            . Add (Vect.yaxis . Sca (Math.sin (theeta))))
                  . Sca (0.5 * (1.0 + w));
              let arm = SinuZoft.NewWith (radial . Sca (sz * 0.065),
                                          0.8  +  0.11 * Math.random (),
                                          radial . Sca (sz * 0.24
                                                     * (1.0 + 3.0 * (q % 2))));
              vs . push (arm);
            }
        }
      let rog = new RoGrappler () . SetName ("schpin");
      //this.PrependGrappler (rog);
      rog . InstallAngle (SinuZoft.NewWith (Math.PI, 0.5));
      //rog . InstallAngle (LoopZoft.NewWith (0.0, Math.PI / 2.5, 5.0));
    }

  CurrentMaes ()
    { return this.cur_maes; }

  SetCurrentMaes (ma)
    { this.cur_maes = ma;  return this; }
//
}

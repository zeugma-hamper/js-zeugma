
//
// (c) treadle & loam, provisioners llc
//


import { PolygonPile } from "./PolygonPile.js";

import { SinuZoft } from "./SinuZoft.js";

import { Vect } from "./Vect.js";

import { ZeColor } from "./ZeColor.js";


export class Cursoresque  extends PolygonPile
{ //
//  static default_cuss_hue = new ZeColor (0.5, 0.5, 0.0, 0.5);
  static InitializeClassHaplessly ()
    { //
      this.default_cuss_hue = new ZeColor (0.5, 0.5, 0.0, 0.5);
    }

  //
  constructor (sz, nv)
    { super ();

      this.cur_maes = null;
      for (let w = 0  ;  w < 2  ;  ++w)
        { const vs = this.NewPoly ();
          for (let q = 0  ;  q < nv  ;  ++q)
            { const theeta = Math.PI * (2.0 * q / nv + w);
              const radial = (Vect.xaxis . Sca (Math.cos (theeta))
                              . Add (Vect.yaxis . Sca (Math.sin (theeta))))
                  . Sca (0.5 * (2.0 - w));
              const arm = SinuZoft.NewWith (radial . Sca (sz * 0.065),
                                            0.8  +  0.11 * Math.random (),
                                            radial . Sca (sz * 0.24
                                                      * (1.0 + 3.0 * (q % 2))));
              vs . push (arm);
            }
        }
      this.SetFillColor (Cursoresque.default_cuss_hue);
    }

  CurrentMaes ()
    { return this.cur_maes; }

  SetCurrentMaes (ma)
    { this.cur_maes = ma;  return this; }
//
}


//
///
//

Cursoresque.InitializeClassHaplessly ();

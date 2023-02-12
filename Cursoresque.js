
//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { SinuZoft } from "./SinuZoft.js";


export class Cursoresque  extends Alignifer
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
      // let rog = new RoGrappler () . SetName ("schpin");
      // this.PrependGrappler (rog);
      // rog . InstallAngle (LoopZoft.NewWith (0.0, Math.PI / 2.5, 5.0));
    }


  CurrentMaes ()
    { return this.cur_maes; }

  SetCurrentMaes (ma)
    { this.cur_maes = ma;  return this; }


  DrawSelf (ratch, cm, adjc, bonus)
    { let lcnt = this.vs_lrg.length, scnt = this.vs_sml.length;
      let vecarr = new Array ();
      for (let zo of this.vs_lrg)
        vecarr . push (zo . Val ());
      for (let zo of this.vs_sml)
        vecarr . push (zo . Val ());

      let corr = bonus[0];
      let cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      let mat = bonus[2] == null  ?  cyoom  :  cyoom . Mul (bonus[2]);
      if (mat != null)
        vecarr = mat . TransformVectArray (vecarr);
      if (corr != null)
        { let hlfw = 0.5 * corr.width;
          let hlfh = 0.5 * corr.height;
          for (let vec of vecarr)
            { vec.x = hlfw * (1.0 + vec.x / vec.z);
              vec.y = hlfh * (1.0 - vec.y / vec.z);
            }
        }
      let ctx = bonus[1];
      let q = 0;
      if (ctx != null)
        { ctx.fillStyle = "#80800080";
          for (let vec of vecarr)
            { if (q == 0  ||  q == lcnt)
                ctx . beginPath ();
              ctx . lineTo (vec.x, vec.y);
              ++q;
              if (q == lcnt  ||  q == vecarr.length)
                { ctx.closePath ();
                  ctx.fill ();
                }
            }
        }
      return 0;
    }
}

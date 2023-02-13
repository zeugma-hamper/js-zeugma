
//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { SinuZoft } from "./SinuZoft.js";


export class PolygonPile  extends Alignifer
{ //
  constructor (sz, nv)
    { super ();
      this.poly_arr = new Array ();
    }

  NumPolys ()
    { return this.poly_arr.length; }
  NthPoly (ind)
    { if (ind < 0  ||  ind >= this.poly_arr.length)
        return null;
      return this.poly_arr[ind];
    }
  NewPoly ()
    { let parr = new Array ();
      this.poly_arr . push (parr);
      return parr;
    }

  TransformedVertexArrays (cm, vp_mat, corr)
    { let outarr = new Array ();
      let hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      let hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      let cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      let mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      for (let verts of this.poly_arr)
        { let vecarr = mat . TransformVectArray (verts);
          for (let vec of vecarr)
            { vec.x = hlfw * (1.0 + vec.x / vec.z);
              vec.y = hlfh * (1.0 - vec.y / vec.z);
            }
          outarr . push (vecarr);
        }
      return outarr;
    }

  DrawSelf (ratch, cm, adjc, bonus)
    { let ctx = bonus[1];
      let polys = this.TransformedVertexArrays (cm, bonus[2], bonus[0]);
      if (ctx == null)
        return 0;
      ctx.fillStyle = "#80800080";
        for (let vecarr of polys)
          { let q = 0;
            for (let vec of vecarr)
              { if (q == 0)
                  ctx . beginPath ();
                ctx . lineTo (vec.x, vec.y);
                ++q;
              }
            ctx.closePath ();
            ctx.fill ();
          }
      return 0;
    }
//
}


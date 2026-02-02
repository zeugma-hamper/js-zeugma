
//
// (c) treadle & loam, provisioners llc
//


import { Matrix44 } from "./Matrix44.js";

import { Vect } from "./Vect.js";

import { ZeColor } from "./ZeColor.js";



export const Limnable = (supah) => class extends supah
{ //
  IsZeugmallyLimnable ()
    { return true; }

  UnsecuredGrapplerPile ()
    { return null; }

  CurrentCumuMats ()
    { return null; }

  DependCumuMatsFrom (cm_above)
    { return cm_above; }


  AdjColor ()
    { return ZeColor.white; }
  AdjColorZoft ()
    { return null; }
  SetAdjColor (ac)
    { const ziro = this.AdjColorZoft ();
      if (ziro != null)
        ziro . Set (ac);
      return this;
    }
  InstallAdjColor (ac_zo)
    { return this; }


  QueryShouldDraw ()
    { return true; }
  QueryShouldDrawBeforeChildren ()
    { return true; }
  QueryShouldDrawChildrenEvenIfNotSelf ()
    { return false; }
  QueryShouldCalcCumuMatsEvenIfNotDrawing ()
    { return false; }


  _CanvProjBundle (cm, vp_mat, canv)
    { const hlfw = (canv == null)  ?  0.5  :  0.5 * canv.width;
      const hlfh = (canv == null)  ?  0.5  :  0.5 * canv.height;
      const cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      const mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      return { mat, hlfw, hlfh };
    }

  CanvasProjectVertex (cm, vp_mat, canv, vtx)
    { const { mat, hlfw, hlfh } = this._CanvProjBundle (cm, vp_mat, canv);
      const vec = mat . TransformVect (vtx);
      if (vec.z != 0.0)
        { vec.x = hlfw * (1.0 + vec.x / vec.z);
          vec.y = hlfh * (1.0 - vec.y / vec.z);
        }
      return vec;
    }

  CanvasProjectVertexArray (cm, vp_mat, canv, varr)
    { const { mat, hlfw, hlfh } = this._CanvProjBundle (cm, vp_mat, canv);
      const outarr = mat . TransformVectArray (varr);
      for (const vec of outarr)
        if (vec.z != 0.0)
          { vec.x = hlfw * (1.0 + vec.x / vec.z);
            vec.y = hlfh * (1.0 - vec.y / vec.z);
          }
      return outarr;
    }

  CanvasProjectVertexArrays (cm, vp_mat, canv, varrs)
    { const { mat, hlfw, hlfh } = this._CanvProjBundle (cm, vp_mat, canv);
      const outarr = new Array ();
      for (const verts of varrs)
        { const vecarr = mat . TransformVectArray (verts);
          for (const vec of vecarr)
            if (vec.z != 0.0)
              { vec.x = hlfw * (1.0 + vec.x / vec.z);
                vec.y = hlfh * (1.0 - vec.y / vec.z);
              }
          outarr . push (vecarr);
        }
      return outarr;
    }

  CanvasProjectSixDOFRotationAngle (cm, vp_mat, canv)
    { const pr = this.CanvasProjectVertexArray (cm, vp_mat, canv,
                                                [Vect.zerov, Vect.xaxis]);
      const proj_xax = pr[1] . Sub (pr[0]);
      if (proj_xax . IsZero ())
        return 0.0;
      const ang = Vect.xaxis . AngleWith (proj_xax);
      return (proj_xax . Y ()  >  0.0)  ?  ang  :  -ang;
    }


/**
   the `geombndl` argument is an object (Object) whose elements are
   "canv" | 0: the 'graphics correlate'; in the browser this is the HTML5 canvas
   "gctx" | 1: the 'graphics context', the object that can execute draw commands
   "vpmat" | 2: the view-projection matrix
   "cam": the camera (Bolex instance) object
*/

  DrawSelf (ratch, cm, adjc, geombndl)
    { return 0; }
};


//
// (c) treadle & loam, provisioners llc
//


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

  CurrentAdjColor ()
    { return ZeColor.white; }


  QueryShouldDraw ()
    { return true; }
  QueryShouldDrawBeforeChildren ()
    { return true; }
  QueryShouldDrawChildrenEvenIfNotSelf ()
    { return false; }
  QueryShouldCalcCumuMatsEvenIfNotDrawing ()
    { return false; }


  CanvasProjectVertexArrays (cm, vp_mat, corr, vtx)
    { let hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      let hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      let cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      let mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      let vec = mat . TransformVect (vtx);
      vec.x = hlfw * (1.0 + vec.x / vec.z);
      vec.y = hlfh * (1.0 - vec.y / vec.z);
      return vec;
    }

  CanvasProjectVertexArray (cm, vp_mat, corr, varr)
    { let hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      let hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      let cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      let mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      let outarr = mat . TransformVectArray (varr);
      for (let vec of outarr)
        { vec.x = hlfw * (1.0 + vec.x / vec.z);
          vec.y = hlfh * (1.0 - vec.y / vec.z);
        }
      return outarr;
    }

  CanvasProjectVertexArrays (cm, vp_mat, corr, varrs)
    { let outarr = new Array ();
      let hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      let hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      let cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      let mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      for (let verts of varrs)
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
    { return 0; }
}


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


  CanvasProjectVertex (cm, vp_mat, corr, vtx)
    { const hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      const hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      const cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      const mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      const vec = mat . TransformVect (vtx);
      if (vec.z != 0.0)
        { vec.x = hlfw * (1.0 + vec.x / vec.z);
          vec.y = hlfh * (1.0 - vec.y / vec.z);
        }
      return vec;
    }

  CanvasProjectVertexArray (cm, vp_mat, corr, varr)
    { const hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      const hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      const cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      const mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
      const outarr = mat . TransformVectArray (varr);
      for (const vec of outarr)
        if (vec.z != 0.0)
          { vec.x = hlfw * (1.0 + vec.x / vec.z);
            vec.y = hlfh * (1.0 - vec.y / vec.z);
          }
      return outarr;
    }

  CanvasProjectVertexArrays (cm, vp_mat, corr, varrs)
    { const outarr = new Array ();
      const hlfw = (corr == null)  ?  0.5  :  0.5 * corr.width;
      const hlfh = (corr == null)  ?  0.5  :  0.5 * corr.height;
      const cyoom = cm.pmat == null  ?  Matrix44.idmat  :  cm.pmat;
      const mat = vp_mat == null  ?  cyoom  :  cyoom . Mul (vp_mat);
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

  CanvasProjectSixDOFRotationAngle (cm, vp_mat, corr)
    { const pr = this.CanvasProjectVertexArray (cm, vp_mat, corr,
                                                [Vect.zerov, Vect.xaxis]);
      const proj_xax = pr[1] . Sub (pr[0])
      if (proj_xax . IsZero ())
        return 0.0;
      const ang = Vect.xaxis . AngleWith (proj_xax);
      return (proj_xax . Y ()  >  0.0)  ?  ang  :  -ang;
    }


  DrawSelf (ratch, cm, adjc, bonus)
    { return 0; }
}

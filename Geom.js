
//
// (c) treadle & loam, provisioners llc
//


import { Vect } from "./Vect.js";


class PolarHit
{ constructor (pt, rd, ph)  // vect, float, float
    { this.pnt = pt;  this.rad = rd;  this.phi = ph; }
}


export class Geom
{ //

  static PointOntoPlaneProjection (pnt, pl_cnt, pl_nrm)  // Vects all...
    { let n = pl_nrm . Norm ();
      let prj = pnt . Sub (n . Sca (n . Dot (pnt . Sub (pl_cnt))));
      return prj;
    }


  static PointOntoLineProjection (pnt, ln_pnt, ln_dir)
    { let d = ln_dir . Norm ();
      let prj = ln_pnt . Add (d . Sca (d . Dot (pnt . Sub (ln_pnt))));
      return prj;
    }


  static RayPlaneIntersection (frm, aim, pl_pnt, pl_nrm)
    { let t = aim . Dot (pl_nrm);
      if (t  ==  0.0)
        return  null;
      t = (pl_pnt . Sub (frm)) . Dot (pl_nrm) / t;
      if (t  <  0.0)  // that'd be behind you, Chet.
        return null;
      return frm . Add (aim . Sca (t));
    }


  static LinePlaneIntersection (ln_pnt, ln_dir, pl_pnt, pl_nrm)
    { let t = ln_dir . Dot (pl_nrm);
      if (t  ==  0.0)
          return  null;
      t = (pl_pnt . Sub (ln_pnt)) . Dot (pl_nrm) / t;
      return ln_pnt . Add (ln_dir . Sca (t));
    }

  static RayRectIntersection (frm, aim, cnt, ovr, upp, wid, hei) // vvvvvff
    { let pee = RayPlaneIntersection (frm, aim, cnt, ovr . Cross (upp));
      if (pee == null)
        return null;
      p = pee . Sub (cnt);
      let t = 2.0 * p . Dot (ovr);
      if (t < -wid  ||  t > wid)
        return null;
      t = 2.0 * p . Dot (upp);
      if (t < -hei  ||  t > hei)
        return null;
      return pee;
    }


  static RayAnnulusIntersectionPolar (frm, aim, cnt, e0, e1, r1, r2)
    { let hit = RayPlaneIntersection (frm, aim, cnt, e0 . Cross (e1));
      if (hit == null)
        return null;
      let h = hit . Sub (cnt);
      let arr_sq = h . AutoDot ();
      if (arr_sq  <  r1 * r1  ||  arr_sq  >  r2 * r2)
        return null;
      return new PolarHit (hit, Math.sqrt (arr_sq),
                           Math.atan2 (e1 . Dot (h), e0 . Dot (h)));
    }

  static RayAnnulusIntersection (frm, aim, cnt, e0, e1, r1, r2)
    { let hit = RayPlaneIntersection (frm, aim, cnt, e0 . Cross (e1));
      if (hit == null)
        return null;
      let arr_sq = (hit . Sub (cnt)) . AutoDot ();
      if (arr_sq  <  r1 * r1  ||  arr_sq  >  r2 * r2)
        return null;
      return hit;
    }

  static RayDiskIntersectionPolar (frm, aim, cnt, e0, e1, r)
    { return RayAnnulusIntersectionPolar (frm, aim, cnt, e0, e1, 0.0, r); }

  static RayDiskIntersection (frm, aim, cnt, e0, e1, r)
    { return RayAnnulusIntersection (frm, aim, cnt, e0, e1, 0.0, r); }


  static LineAnnulusIntersectionPolar (ln_pnt, ln_dir, cnt, e0, e1, r1, r2)
    { let hit = LinePlaneIntersection (ln_pnt, ln_dir, cnt, e0 . Cross (e1));
      if (hit == null)
        return null;
      let h = hit . Sub (cnt);
      let arr_sq = h . AutoDot ();
      if (arr_sq  <  r1 * r1  ||  arr_sq  >  r2 * r2)
        return null;
      return new PolarHit (hit, Math.sqrt (arr_sq),
                           Math.atan2 (e1 . Dot (h), e0 . Dot (h)));
    }

  static LineAnnulusIntersection (ln_pnt, ln_dir, cnt, e0, e1, r1, r2)
    { let hit = LinePlaneIntersection (ln_pnt, ln_dir, cnt, e0 . Cross (e1));
      if (hit == null)
        return null;
      let arr_sq = (hit . Sub (cnt)) . AutoDot ();
      if (arr_sq  <  r1 * r1  ||  arr_sq  >  r2 * r2)
        return null;
      return hit;
    }

  static LineDiskIntersectionPolar (ln_pnt, ln_dir, cnt, e0, e1, r)
    { return LineAnnulusIntersectionPolar (ln_pnt, ln_dir,
                                           cnt, e0, e1, 0.0, r);
    }

  static LineDiskIntersection (ln_pnt, ln_dir, cnt, e0, e1, r)
    { return LineAnnulusIntersection (ln_pnt, ln_dir, cnt, e0, e1, 0.0, r); }


  static _RaySphereIntersectionSolutions (frm, aim, cnt, rad)
    { let v = frm . Sub (cnt);
      let a = aim . AutoDot ();
      if (a == 0.0)
        return null;
      let b = 2.0 * v . Dot (aim);
      let c = v . AutoDot () - rad * rad;
      let unroo = b * b - 4.0 * a * c;
      let emit = [null, null];
      if (unroo < 0.0)
        return emit;
      a = 0.5 / a;
      if (unroo == 0.0)
        emit[0] = -b * a;
      else
        { let roo = Math.sqrt (unroo);
          emit[0] = (-b - roo) * a;
          emit[1] = (-b + roo) * a;
        }
      return emit;
    }

  static RaySphereIntersections (frm, aim, cnt, rad)
    { let solns
        = _RaySphereIntersectionSolutions (frm, aim, cnt, rad);
      if (solns[0] == null)
        return null;
      emit = [null, null];
      emit[0] = frm . Add (aim . Sca (solns[0]));
      if (solns[1] != null)
        emit[1] = frm . Add (aim . Sca (solns[0]));
      return emit;
    }

  static RaySphereForwardIntersections (frm, aim, cnt, rad)
    { let solns
        = _RaySphereIntersectionSolutions (frm, aim, cnt, rad);
      if (solns[0] == null
          ||  (solns[0] < 0.0  &&  (solns[1] == null || solns[1] < 0.0)))
        return null;
      let emit = [null, null];
      if (solns[0] < 0.0)
        { emit[0] = frm . Add (aim . Sca (solns[1]));
          emit[1] = null;
        }
      else
        { emit[0] = frm . Add (aim . Sca (solns[0]));
          emit[1] = frm . Add (aim . Sca (solns[1]));
        }
      return emit;
    }


  static ProjectivePointRectContainment (p, cnt, ovr, upp, wid, hei)
    { let o = ovr . Norm ();
      let u = upp . Norm ();
      let nrm = o . Cross (u);
      let t = (p . Sub (cnt)) . Dot (nrm);
      let prj = p . Sub (nrm . Sca (t));

      let pp = prj . Sub (cnt);
      t = 2.0 * pp . Dot (o);
      if (t < -wid  ||  t > wid)
        return null;
      t = 2.0 * pp . Dot (u);
      if (t < -hei  ||  t > hei)
        return null;
      return prj;
    }
}

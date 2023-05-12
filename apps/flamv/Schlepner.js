
//
// (c) treadle & loam, provisioners llc
//


import { base_class,
         ImageSplatter, ZESpatialPhagy,
         Vect, Geom, PlatonicMaes } from "/modules/zeugma/zeugma-lib.js";



export class Schlepner
       extends base_class (ImageSplatter) . and_interfaces (ZESpatialPhagy)
{ //
  constructor (im, whole_shebang)
    { super (im);
      this.bang  = whole_shebang;
      this.grab_prov = null;
      this.cur_maes = null;
      this.grab_off = Vect.zerov . Dup ();
    }

  ZESpatialHarden (e)
    { if (this.grab_prov != null)
        return 0;
      //let hit = this.SelfWhack (e);

      let cm = this.CurrentCumuMats ();
      if (cm == null)
        return 0;
      let cnt = cm.pmat . TransformVect (Vect.zerov);
      let o = cm.nmat . TransformVect (Vect.xaxis);
      let u = cm.nmat . TransformVect (Vect.yaxis);
      let w = (this.asp_rat < 1.0)  ?  1.0  :  1.0 / this.asp_rat;
      let h = (this.asp_rat < 1.0)  ?  this.asp_rat  :  1.0;
      w = cm.pmat . TransformVect (Vect.xaxis . Sca (w)) . Sub (cnt) . Mag ();
      h = cm.pmat . TransformVect (Vect.yaxis . Sca (h)) . Sub (cnt) . Mag ();
      let hit = Geom.RayRectIntersection (e.loc, e.aim, cnt, o, u, w, h);

      if (hit == null)
        return 0;

      this.grab_prov = e . Provenance ();
      let offset = hit . Sub (this.CurLoc ());
      this.grab_off.x = offset . Dot (o);
      this.grab_off.y = offset . Dot (u);
      return 0;
    }

  ZESpatialSoften (e)
    { if (this.grab_prov != null  &&  this.grab_prov == e . Provenance ())
        this.grab_prov = null;
      return 0;
    }

  SelfWhack (e)
    { let cm = this.CurrentCumuMats ();
      if (cm == null)
        return 0;
      let cnt = cm.pmat . TransformVect (Vect.zerov);
      let o = cm.nmat . TransformVect (Vect.xaxis);
      let u = cm.nmat . TransformVect (Vect.yaxis);
      let w = (this.asp_rat < 1.0)  ?  1.0  :  1.0 / this.asp_rat;
      let h = (this.asp_rat < 1.0)  ?  this.asp_rat  :  1.0;
      w = cm.pmat . TransformVect (Vect.xaxis . Sca (w)) . Sub (cnt) . Mag ();
      h = cm.pmat . TransformVect (Vect.yaxis . Sca (h)) . Sub (cnt) . Mag ();
      let hit = Geom.RayRectIntersection (e.loc, e.aim, cnt, o, u, w, h);
      return hit;
    }

  ZESpatialMove (e)
    { let prov = e . Provenance ();
      if (this.grab_prov == null  ||  this.grab_prov != prov)
        return 0;

      let mah = PlatonicMaes.ClosestAmong (this.bang . Maeses (),
                                           e.loc, e.aim, true);
      if (mah == null)
        return 0;
      const [maes, hit] = mah;
      if (maes != this.cur_maes)
        this.AlignToMaes (this.cur_maes = maes);
      let cm = this.CurrentCumuMats ();
      if (cm != null)
        { let o = cm.nmat . TransformVect (Vect.xaxis);
          let u = cm.nmat . TransformVect (Vect.yaxis);
          hit
            . SubAcc (o . Sca (this.grab_off.x))
            . SubAcc (u . Sca (this.grab_off.y));
        }
      this.SetLoc (hit);
      return 0;
    }
//
}


//
// (c) treadle & loam, provisioners llc
//


import { SpaceThing } from "./SpaceThing.js";

import { Matrix44 } from "./Matrix44.js";

import { Zoft } from "./Zoft.js";

import { Vect } from "./Vect.js";


export class Bolex  extends SpaceThing
{ //
  // static ProjType = { PERSPECTIVE: "perspective",
  //                     ORTHOGRAPHIC: "orthographic"
  //                   };
  static InitializeClassHaplessly ()
    { this.ProjType =  { PERSPECTIVE: "perspective",
                         ORTHOGRAPHIC: "orthographic"
                       };
    }

  //
  constructor ()
    { super ();

      this.z_view_loc = Zoft.NewWith (new Vect (0.0, 0.0, 100.0));
      this.z_view_aim = Zoft.NewWith (Vect.negzaxis);
      this.z_view_upp = Zoft.NewWith (Vect.yaxis);

      this.z_view_dist = Zoft.NewWith (100.0);

      this.z_view_hrz_ang_d = Zoft.NewWith (75.0);
      this.z_view_hrz_ang_d = Zoft.NewWith (46.69);
      this.z_view_ortho_wid = Zoft.NewWith (160.0);
      this.z_view_ortho_hei = Zoft.NewWith (90.0);

      this.z_view_pln_off = Zoft.NewWith (Vect.zerov);

      this.prj_typ = Bolex.ProjType.PERSPECTIVE;
      this.z_near_clip_dst = Zoft.NewWith (0.1);
      this.z_far_clip_dst = Zoft.NewWith (1000.0);
    }


  LocalViewLoc ()
    { return this.z_view_loc . Val (); }
  LocalViewAim ()
    { return this.z_view_aim . Val (); }
  LocalViewUp ()
    { return this.z_view_upp . Val (); }
  LocalViewCOI ()
    { return this.z_view_loc . Val ()
               . Add (this.z_view_aim . Val ()
                      . Sca (this.z_view_dist . Val ()));
    }

  ViewLoc (ratch = null)
    { let v = this.LocalViewLoc ();
      return v;
    }
  ViewAim (ratch = null)
    { let v = this.LocalViewAim ();
      return v;
    }
  ViewUp (ratch = null)
    { let v = this.LocalViewUp ();
      return v;
    }
  ViewCOI (ratch = null)
    { let v = this.ViewLoc (ratch)
                . Add (this.ViewAim (ratch) . Sca (this.ViewDist (ratch)));
      return v;
    }

  ViewDist ()
    { return this.z_view_dist . Val (); }
  ViewHorizAngleD ()
    { return this.z_view_hrz_ang_d . Val (); }
  ViewVertAngleD ()
    { return this.z_view_vrt_ang_d . Val (); }
  ViewHorizAngle ()
    { return this.z_view_hrz_ang_d . Val () * Math.PI / 180.0; }
  ViewVertAngle ()
    { return this.z_view_vrt_ang_d . Val () * Math.PI / 180.0; }
  ViewOrthoWid ()
    { return this.z_view_ortho_wid . Val (); }
  ViewOrthoHei ()
    { return this.z_view_ortho_hei . Val (); }

  ViewPlaneOffset ()
    { return this.z_view_pln_off . Val (); }
  ViewPlaneHorizOffset ()
    { return this.z_view_pln_off . Val () . X (); }
  ViewPlaneVertOffset ()
    { return this.z_view_pln_off . Val () . Y (); }

  ViewPlaneWidth ()
    { if (this.ProjectionTypeIsOrthographic ())
        return this.ViewOrthoWid ();
      return this.ViewDist () * 2.0 * Math.tan (0.5 * this.ViewHorizAngle ());
    }
  ViewPlaneHeight ()
    { if (this.ProjectionTypeIsOrthographic ())
        return this.ViewOrthoHei ();
      return this.ViewDist () * 2.0 * Math.tan (0.5 * this.ViewVertAngle ());
    }

  ProjectionType ()
    { return this.prj_typ; }
  ProjectionTypeIsPerspective ()
    { return (this.prj_typ === Bolex.ProjType.PERSPECTIVE); }
  ProjectionTypeIsOrthographic ()
    { return (this.prj_typ === Bolex.ProjType.ORTHOGRAPHIC); }

  NearClipDist ()
    { return this.z_near_clip_dst . Val (); }
  FarClipDist ()
    { return this.z_far_clip_dst . Val (); }

//
///
//

  ViewLocZoft ()
    { return this.z_view_loc; }
  ViewAimZoft ()
    { return this.z_view_aim; }
  ViewUpZoft ()
    { return this.z_view_upp; }

  ViewDistZoft ()
    { return this.z_view_dist; }

  ViewHorizAngleDZoft ()
    { return this.z_view_hrz_ang_d; }
  ViewVertAngleDZoft ()
    { return this.z_view_vrt_ang_d; }

  ViewOrthoWidZoft ()
    { return this.z_view_ortho_wid; }
  ViewOrthoHeiZoft ()
    { return this.z_view_ortho_hei; }

  ViewPlaneOffsetZoft ()
    { return this.z_view_pln_off; }

  NearClipDistZoft ()
    { return this.z_near_clip_dst; }
  FarClipDistZoft ()
    { return this.z_far_clip_dst; }

//
///
//

  SetViewLoc (loc)
    { this.z_view_loc = Zoft.NewWith (loc);  return this; }

  SetViewAim (aim)
    { this.z_view_aim = Zoft.NewWith (aim);  return this; }

  SetViewCOI (coi)
    { this.z_view_aim = Zoft.NewWith (coi . Sub (this.ViewLoc ()) . Norm ());
      return this;
    }

  SetViewUp (up)
    { this.z_view_upp = Zoft.NewWith (up);  return this; }


  SetViewDist (dst)
    { this.z_view_dist = Zoft.NewWith (dst);  return this; }

  SetViewHorizAngleD (hdeg)
    { this.z_view_hrz_ang_d = Zoft.NewWith (hdeg);  return this; }

  SetViewVertAngleD (vdeg)
    { this.z_view_vrt_ang_d = Zoft.NewWith (vdeg);  return this; }

  SetViewHorizAngle (hrad)
    { this.z_view_hrz_ang_d = Zoft.NewWith (hrad * 180.0 / Math.PI);
      return this;
    }
  SetViewVertAngle (vrad)
    { this.z_view_vrt_ang_d = Zoft.NewWith (vrad * 180.0 / Math.PI);
      return this;
    }

  SetViewOrthoWid (owid)
    { this.z_view_ortho_wid = Zoft.NewWith (owid);  return this; }

  SetViewOrthoHei (ohei)
    { this.z_view_ortho_hei = Zoft.NewWith (ohei);  return this; }


  SetViewPlaneOffset (off)  // a Vect, y'see...
    { this.z_view_pln_off = Zoft.NewWith (off);  return this; }

  SetViewPlaneHorizOffset (hoff)
    { const off = Vect.NewWith (hoff, this.ViewPlaneOffset () . Y (), 0.0);
      return this.SetViewPlaneOffset (off);
    }

  SetViewPlaneVertOffset (voff)
    { const off = Vect.NewWith (this.ViewPlaneOffset () . X (), voff, 0.0);
      return this.SetViewPlaneOffset (off);
    }


  SetProjectionType (pt)
    { if (! Object.values (Bolex.ProjType) . includes (pt))
        throw new Error ("hey now: from Bolex.SetProjectionType(), " + pt +
                         " is not a valid, you know, projection type.");
      this.prj_typ = pt;
      return this;
    }


  SetNearClipDist (n_dst)
    { this.z_near_clip_dst = Zoft.NewWith (n_dst);  return this; }

  SetFarClipDist (f_dst)
    { this.z_far_clip_dst = Zoft.NewWith (f_dst);  return this; }

  SetNearAndFarClipDist (n_dst, f_dst)
    { this.z_near_clip_dst = Zoft.NewWith (n_dst);
      this.z_far_clip_dst = Zoft.NewWith (f_dst);
      return this;
    }

//
///
//
  LoadViewMatrixInto (vmat)
    { if (vmat == null)
        return vmat;

      vmat . LoadTranslation (this.z_view_loc . Val () . Neg ());

      const aim = this.z_view_aim . Val () . Norm ();
      let uup = this.z_view_upp . Val () . Norm ();
      if (aim . Dot (uup)  >  0.9999999)
        throw new Error (
            "well, heck: camera's aim and up vectors can't be parallel."
        );

      const ovr = aim . Cross (uup) . Norm ();
      uup = ovr . Cross (aim);

      const cootr = new Matrix44 () .
            LoadBackwardCoordTransformPreNormed (ovr, uup, aim . Neg ());
      vmat . MulSelfBy (cootr);
      return vmat;
    }

  ViewMatrix ()
    { const outm = new Matrix44 ();
      return this.LoadViewMatrixInto (outm);
    }

  LoadProjectionMatrixInto (pmat)
    { if (pmat == null)
        return pmat;
      const vdst = this.ViewDist ();
      let wid, hei;
      if (this.ProjectionTypeIsOrthographic ())
        { wid = this.ViewOrthoWid ();
          hei = this.ViewOrthoHei ();
        }
      else
        { wid = 2.0 * vdst * Math.tan (0.5 * this.ViewHorizAngle ());
          hei = 2.0 * vdst * Math.tan (0.5 * this.ViewVertAngle ());
        }
      const poff = this.ViewPlaneOffset ();
      pmat . LoadShear (0.0, poff . X () / vdst,
                        0.0, poff . Y () / vdst,
                        0.0, 0.0);

      const emm = new Matrix44 ();
      emm . LoadScaleXYZ (2.0 / wid, 2.0 / hei, -1.0 / vdst);
      pmat . MulSelfBy (emm);
      return pmat;
    }

  ProjectionMatrix ()
    { const outm = new Matrix44 ();
      return this.LoadProjectionMatrixInto (outm);
    }

  VPMatrix ()
    { return this.ViewMatrix () . Mul (this.ProjectionMatrix ()); }

//
//


  // returns [ tl, bl, br, tr ], see.
  //
  ProjectionCornerRays (ratch = null)
    { const loc = this.ViewLoc (ratch);
      const aim = this.ViewAim (ratch);
      let upp = this.ViewUp (ratch);
      const ovr = aim . Cross (upp) . Norm ();
      upp = ovr . Cross (aim) . Norm ();

      const poff = this.ViewPlaneOffset ();
      const vdst = this.ViewDist (ratch);

      const out_arr = new Array ();
      if (this.ProjectionTypeIsOrthographic ())
        { const wid = ovr . Sca (this.ViewOrthoWid ());
          const hei = upp . Sca (this.ViewOrthoHei ());
          const longaim = aim . Sca (vdst);
          let vtx = loc
            . Sub (wid . Sca (0.5) . Add (ovr . Sca (poff . X ())))
            . Add (hei . Sca (0.5) . Add (upp . Sca (poff . Y ())));

          out_arr . push ( [vtx, aim, vtx . Add (longaim)] );
          vtx = vtx . Sub (hei);
          out_arr . push ( [vtx, aim, vtx . Add (longaim)] );
          vtx = vtx . Add (wid);
          out_arr . push ( [vtx, aim, vtx . Add (longaim)] );
          vtx = vtx . Add (hei);
          out_arr . push ( [vtx, aim, vtx . Add (longaim)] );
        }
      else  // oh Susanna. it's perspective, don't you know.
        { const coi = loc . Add (aim . Sca (vdst));
          let wid = 2.0 * vdst * Math.tan (0.5 * this.ViewHorizAngle (ratch));
          let hei = 2.0 * vdst * Math.tan (0.5 * this.ViewVertAngle (ratch));
          wid = ovr . Sca (wid);
          hei = upp . Sca (hei);
          let vtx = coi
            . Sub (wid . Sca (0.5) . Add (ovr . Sca (poff . X ())))
            . Add (hei . Sca (0.5) . Add (upp . Sca (poff . Y ())));

          out_arr . push ( [loc, vtx . Sub (loc) . Norm (), vtx] );
          vtx = vtx . Sub (hei);
          out_arr . push ( [loc, vtx . Sub (loc) . Norm (), vtx] );
          vtx = vtx . Add (wid);
          out_arr . push ( [loc, vtx . Sub (loc) . Norm (), vtx] );
          vtx = vtx . Add (hei);
          out_arr . push ( [loc, vtx . Sub (loc) . Norm (), vtx] );
        }

      return out_arr;
    }
}

//
///
//

Bolex.InitializeClassHaplessly ();

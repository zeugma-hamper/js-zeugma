
//
// (c) treadle & loam, provisioners llc
//


import { SpaceThing } from "./SpaceThing.js";

import { Zoft } from "./Zoft.js";

import { Matrix44 } from "./Matrix44.js";


export class Bolex  extends SpaceThing
{ //
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

      this.prj_typ = 'perspective';
      this.z_near_clip_dst = Zoft.NewWith (0.1);
      this.z_far_clip_dst = Zoft.NewWith (1000.0);
    }


  ViewLoc ()
    { return this.z_view_loc . Val (); }
  ViewAim ()
    { return this.z_view_aim . Val (); }
  ViewUp ()
    { return this.z_view_upp . Val (); }
  ViewCOI ()
    { return this.z_view_loc . Val ()
               . Add (view_aim . Val () . Mul (view_dist . Val ()));
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

  ProjectionType ()
    { return this.prj_typ; }
  ProjectionTypeIsPerspective ()
    { let c = this.prj_typ[0];  return (c == 'p'  ||  c == 'P'); }
  ProjectionTypeIsOrthographic ()
    { return ! this.ProjectionTypeIsPerspective (); }

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

  ViewPlaneOffset ()
    { return this.z_view_pln_off; }

  NearClipDistZoft ()
    { return this.z_near_clip_dst; }
  FarClipDistZoft ()
    { return this.z_far_clip_dst; }

//
///
//

  LoadViewMatrixInto (vmat)
    { if (vmat == null)
        return vmat;

      vmat . LoadTranslation (this.z_view_loc . Val () . Neg ());

      let aim = this.z_view_aim . Val () . Norm ();
      let uup = this.z_view_upp . Val () . Norm ();
      if (aim . Dot (uup)  >  0.9999999)
        throw new Error (
            "well, heck: camera's aim and up vectors can't be parallel."
        );

      let ovr = aim . Cross (uup) . Norm ();
      uup = ovr . Cross (aim);

      let cootr = new Matrix44 () .
            LoadBackwardCoordTransformPreNormed (ovr, uup, aim . Neg ());
      vmat . MulSelfBy (cootr);
      return vmat;
    }

  ViewMatrix ()
    { let outm = new Matrix44 ();
      return this.LoadViewMatrixInto (outm);
    }

  LoadProjectionMatrixInto (pmat)
    { if (pmat == null)
        return pmat;
      let vdst = this.ViewDist ();
      let wid, hei;
      if (this.ProjectionTypeIsOrthographic ())
        { wid = this.ViewOrthoWid ();
          hei = this.ViewOrthoHei ();
        }
      else
        { wid = 2.0 * vdst
            * Math.tan (0.5 * Math.PI / 180.0 * this.ViewHorizAngle ());
          hei = 2.0 * vdst
            * Math.tan (0.5 * Math.PI / 180.0 * this.ViewVertAngle ());
        }
      let poff = this.ViewPlaneOffset ();
      pmat . LoadShear (0.0, poff . X () / vdst,
                        0.0, poff . Y () / vdst,
                        0.0, 0.0);

      let emm = new Matrix44 ();
      emm . LoadScale (2.0 / wid, 2.0 / hei, -1.0 / vdst);
      pmat . MulSelfBy (emm);
      return pmat;
    }

  ProjectionMatrix ()
    { let outm = new Matrix44 ();
      return LoadProjectionMatrixInto (outm);
    }
}

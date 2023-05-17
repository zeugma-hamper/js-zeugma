
//
// (c) treadle & loam, provisioners llc
//


import { SpaceThing } from "./SpaceThing.js";

import { Bolex } from "./Bolex.js";

import { Zoft } from "./Zoft.js";

import { Geom } from "./Geom.js";

import { Vect } from "./Vect.js";

import { ZeColor } from "./ZeColor.js";


export class PlatonicMaes  extends SpaceThing
{ //
  constructor ()
    { super ();

      this.loc = Zoft.NewWith (Vect.zerov);
      this.ovr = Zoft.NewWith (Vect.xaxis);
      this.upp = Zoft.NewWith (Vect.yaxis);
      this.wid = Zoft.NewWith (640.0);
      this.hei = Zoft.NewWith (360.0);

      this.eigen_cam = null;

      this.bg_iro = Zoft.NewWith (new ZeColor (40.0/255.0, 1.0));
      this.adj_iro = Zoft.NewWith (ZeColor.white);

      this.layers = new Array ();
    }

//
  Loc ()
    { return this.loc . Val (); }
  Over ()
    { return this.ovr . Val (); }
  Up ()
    { return this.upp . Val (); }
  Norm ()
    { return this.ovr . Val () . Cross (this.upp . Val ()); }

  Width ()
    { return this.wid . Val (); }
  Height ()
    { return this.hei . Val (); }

//
  LocZoft ()
    { return this.loc; }
  OverZoft ()
    { return this.ovr; }
  UpZoft ()
    { return this.upp; }

  WidthZoft ()
    { return this.wid; }
  HeightZoft ()
    { return this.hei; }

//
  SetLoc (l)
    { this.loc . Set (l);  this.loc . _SetVal (l);  return this; }
  SetOver (o)
    { this.ovr . Set (o);  this.ovr . _SetVal (o);  return this; }
  SetUp (u)
    { this.upp . Set (u);  this.upp . _SetVal (u);  return this; }

  SetWidth (w)
    { this.wid . Set (w);  this.wid . _SetVal (w);  return this; }
  SetHeight (h)
    { this.hei . Set (h);  this.hei . _SetVal (h);  return this; }


  CornerBL ()
    { return this.Loc () .
               Add (this.Over () . Sca (-0.5 * this.Width ()) .
                    Add (this.Up () . Sca (-0.5 * this.Height ())));
    }
  CornerTL ()
    { return this.Loc () .
               Add (this.Over () . Sca (-0.5 * this.Width ()) .
                    Add (this.Up () . Sca (0.5 * this.Height ())));
    }
  CornerTR ()
    { return this.Loc () .
               Add (this.Over () . Sca (0.5 * this.Width ()) .
                    Add (this.Up () . Sca (0.5 * this.Height ())));
    }
  CornerBR ()
    { return this.Loc () .
               Add (this.Over () . Sca (0.5 * this.Width ()) .
                    Add (this.Up () . Sca (-0.5 * this.Height ())));
    }


  BackgroundColor ()
    { return this.bg_iro . Val (); }
  BackgroundColorZoft ()
    { return this.bg_iro; }
  SetBackgroundColor (col)
    { this.bg_iro . Set (col); }
  InstallBackgroundColor (bgc_zo)
    { if (bgc_zo != null  &&  bgc_zo !== this.bg_iro)
        this.bg_iro . BecomeLike (bgc_zo);
      return this;
    }


  Layers ()
    { return this.layers; }

  NumLayers ()
    { return this.layers.length; }

  NthLayer (ind)
    { if (ind < 0  ||  ind >= this.layers.length)
        return null;
      return this.layers[ind];
    }

  IndexOfLayer (z)
    { return this.layers . indexOf (z); }

  FindLayer (nm)
    { return this.layers . find ((el) => (el . Name () == nm)); }

  AppendLayer (z)
    { if (z == null)
        return false;
      this.layers . push (z);
      return true;
    }

  InsertLayer (z, ind)
    { if (z == null)
        return false;
      if (ind < 0)
        ind = 0;
      else if (ind > this.layers.length)
        ind = this.layers.length;
      this.layers . splice (ind, 0, z);
      return true;
    }

  RemoveLayer (z)
    { const ind = this.IndexOfLayer (z);
      if (ind < 0)
        return false;
      this.layers . splice (ind, 1);
      return true;
    }

  InstallCameraFromSelfGeom ()
    { this.eigen_cam = this.constructor.CameraFromMaes (this); }

  EigenCamera ()
    { return this.eigen_cam; }
  SetEigenCamera (ec)
    { this.eigen_cam = ec;  return this; }

//
  static NewFromJSON (j)
    { const ma = new PlatonicMaes ();
      ma . SetName (j.name);
      ma . SetLoc (Vect.NewFromArr (j.location));
      ma . SetOver (Vect.NewFromArr (j.over));
      ma . SetUp (Vect.NewFromArr (j.up));
      ma . SetWidth (j.width);
      ma . SetHeight (j.height);
      return ma;
    }

  static CameraFromMaes (m)
    { const cam = new Bolex ();

      const nrm = m . Over () . Cross (m . Up ()) . Norm ();
      const dst = 0.8 * m . Width ();

      cam . SetViewDist (dst);
      cam . SetViewLoc (m . Loc () . Add (nrm . Sca (dst)));
      cam . SetViewCOI (m . Loc ());
      cam . SetViewUp (m . Up ());

      cam . SetProjectionType (Bolex.ProjType.PERSPECTIVE);

      cam . SetViewHorizAngle (2.0 * Math.atan (0.5 * m . Width () / dst));
      cam . SetViewVertAngle (2.0 * Math.atan (0.5 * m . Height () / dst));

      cam . SetNearAndFarClipDist (0.1, 10.0 * dst);
      return cam;
    }

  static ClosestAmong (mcoll, frm, aim, restrict_to_maes_extent)
    { if (mcoll == null)
        return;

      let cls_hit = null;
      let cls_maes = null;
      let cls_dst = -1.0;
      for (const ma of mcoll)
        if (ma != null)
          { const use_w = ma . Width ();
            const use_h = ma . Height ();
            let hit;
            if (restrict_to_maes_extent == true)
              hit = Geom.RayRectIntersection (frm, aim, ma . Loc (),
                                              ma . Over (), ma . Up (),
                                              use_w, use_h);
            else
              hit = Geom.RayPlaneIntersection (frm, aim, ma . Loc (),
                                               ma . Over ()
                                                      . Cross (ma . Up ()));
            if (hit != null)
              { const d = hit . Sub (frm) . AutoDot ();
                if (cls_dst < 0.0  ||  d < cls_dst)
                  { cls_dst = d;  cls_hit = hit;  cls_maes = ma; }
              }
          }
      return (cls_maes == null)  ?  null  :  [ cls_maes, cls_hit ];
    }

//
///
//
  static SampleMaesConfigJSON ()
    { return [ { "name" : "front",
                 "location" : [0.0, 2186.0, -2670.0],
                 "over" : [1.0, 0.0, 0.0],
                 "up" : [0.0, 1.0, 0.0],
                 "width" : 7772.4,
                 "height" : 4372.0,
                 "ideal-pixwid" : 3840,
                 "ideal-pixhei" : 2160
               },

               { "name" : "left",
                 "location" : [-3886.2, 1502.0, 0.0],
                 "over" : [0.0, 0.0, -1.0],
                 "up" : [0.0, 1.0, 0.0],
                 "width" : 5340.0,
                 "height" : 3004.0,
                 "ideal-pixwid" : 3840,
                 "ideal-pixhei" : 2160
               },

               { "name" : "table",
                 "location" : [0.0, 1028.0, -60.0],
                 "over" : [1.0, 0.0, 0.0],
                 "up" : [0.0, 0.422618, -0.906308],
                 "width" : 1327.6,
                 "height" : 746.8,
                 "ideal-pixwid" : 3840,
                 "ideal-pixhei" : 2160
               }
             ];
    }
//
}

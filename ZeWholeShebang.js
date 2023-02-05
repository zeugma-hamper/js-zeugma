
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { Geom } from "./Geom.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";
import { ViveWandEventSynth } from "./ViveWandEventSynth.js";
import { OSCViveWandSump } from "./OSCViveWandSump.js";
import { ZESpatialPhagy } from "./ZESpatialPhagy.js";

import { NativeEventDialectCatcher } from "./NativeEventDialectCatcher.js";

import { RecursiveLimner } from "./RecursiveLimner.js";

import { base_class } from "./interface-ersatzer.js";


export class ZeWholeShebang  extends base_class (Zeubject)
                           . and_interfaces (ZESpatialPhagy, RecursiveLimner)
{ //
  static canonical_instance = null;

  //
  constructor ()
    { super ();
      //
      this.looper = new Loopervisor ();
      this.maeses = new Array ();
      this.gcorr_by_maes = new Map ();
      this.dcatcher_by_maes = new Map ();
      this.auto_attend = true;
      this.cursor_by_prov = new Map ();
    }


  Looper ()
    { return this.looper; }


  Maeses ()
    { return this.maeses; }

  NumMaeses ()
    { return this.maeses.length; }
  NthMaes (ind)
    { return Zeubject.CollNth (this.maeses, ind); }
  FindMaes (nm)
    { return Zeubject.CollFindByName (this.maeses, nm); }
  AppendMaes (ma)
    { return Zeubject.CollAppend (this.maeses, ma); }


  SetGraphicsCorrelateForMaes (m, g)
    { this.gcorr_by_maes . set (m, g);  return this; }

  GraphicsCorrelateForMaes (m)
    { return this.gcorr_by_maes . get (m); }


  SetDialectCatcherForMaes (m, dc)
    { this.dcatcher_by_maes . set (m, dc);  return this; }

  UnsecuredDialectCatcherForMaes (m)
    { return this.dcatcher_by_maes . get (m); }

  AssuredDialectCatcherForMaes (m)
    { let dc = this.dcatcher_by_maes . get (m);
      if (dc == null)
        { dc = new NativeEventDialectCatcher (m, this);
          this.dcatcher_by_maes . set (m, dc);
        }
      return dc;
    }


  PopulatefromMaesConfig (mconf)
    { for (let descobj of mconf)
        { let ma = PlatonicMaes.NewFromJSON (descobj);
          if (ma != null)
            { this.AppendMaes (ma);
              ma . InstallCameraFromSelfGeom ();
            }
        }
      return this;
    }


  DrawMaesLayers (ratch, thyme)
    { if (this.NumMaeses ()  <  1)
        return this;

      let lay, cm = new CumuMats ();
      for (let ma of this.maeses)
        if (ma != null)
          { let corr = this.GraphicsCorrelateForMaes (ma);
            if (corr == null)
              continue;
            let ctx = corr . getContext ("2d");
            if (ctx == null)
              continue;

            let cam = ma . EigenCamera ()
            let vpm = (cam == null )  ?  new Matrix44 ()  :  cam . VPMatrix ();
            let bonus = [ corr, ctx, vpm ];

//            ctx . clearRect (0, 0, corr.width, corr.height);
            ctx . fillStyle = "rgba(40,40,40)";
            ctx . fillRect (0, 0, corr.width, corr.height);
            ctx . save ();
            let cnt = ma.NumLayers ();
            for (let q = 0  ;  q < cnt  ;  ++q)
              if ((lay = ma . NthLayer (q))  !=  null)
                this.RecursivelyDraw (lay, ratch, thyme, cm, null, bonus);
            ctx . restore ();
          }
      return this;
    }


  AttendToIncomingComms ()
    { for (let smp of this.looper . Sumps ())
        if (smp != null)
          smp . AttendToIncoming ();
      return this;
    }

  SuspendIncomingCommsAttention ()
    { for (let smp of this.looper . Sumps ())
        if (smp != null)
          smp . SuspendAttention ();
      return this;
    }


  RunAndRun ()
    { return this.RunAndRunWithFrameDur (0.0333333); }

  RunAndRunWithFrameDur (fdur)
    { this.looper . SetTargetLoopDur (fdur);
      this.looper . SpinGloriously ();

      if (this.auto_attend == true)
        this.AttendToIncomingComms ();

      return this;
    }

  SkidToAHalt ()
    { if (this.auto_attend == true)
        this . SuspendIncomingCommsAttention ();

      this.looper . BrakeSpin ();

      return this;
    }


  Travail (ratch, thyme)
    { let self = this;
      globalThis.requestAnimationFrame (() =>
        { self.DrawMaesLayers (ratch, thyme); });
      return 0;
    }


  NativeMouseMoveOnMaes (e, x, y, prv, ma)
    { console.log (prv, " moyce: " + x + ", " + y);}

  NativeMouseDownOnMaes (e, prv, ma)
    { }

  NativeMouseUpOnMaes (e, prv, ma)
    { }


  PassTheBuckUpPhageHierarchy ()
    { return true; }

  ZESpatial (e)
    { if (this.cherd != null)
        e . ProfferAsQuaffTo (this.cherd);
      return 0;
    }
  ZESpatialMove (e)
    { let prv = e . Provenance ();
      let cur = this.cursor_by_prov . get (prv);
      let ma = this.FindMaes ("front");
      if (cur == null)
        { this.cursor_by_prov . set (prv, cur = new Cursoresque (200.0, 6));
          if (ma != null)
            { let lay = ma . FindLayer ("curseteria");
              if (lay == null)
                ma . AppendLayer (lay = new LimnyThing ()
                                  . SetName ("curseteria"));
              lay . AppendChild (cur);
            }
        }
      if (ma == null)
        return 0;
      let hit = Geom.RayPlaneIntersection (e . Loc (), e . Aim (),
                                           ma . Loc (), ma . Norm ());
      if (hit != null)
        cur . SetLoc (hit);
      return 0;
    }


  InstallSampleMaesConfig ()
    { let samp_maeses = PlatonicMaes.SampleMaesConfigJSON ();
      return this.PopulatefromMaesConfig (samp_maeses);
    }
//

//
///
//

  static CanonicalInstance ()
    { if (this.canonical_instance == null)
        this.canonical_instance = this.NewDefaultInstance ();
      return this.canonical_instance;
    }

  static NewDefaultInstance ()
    { let novo = new ZeWholeShebang ();

      let loo = novo . Looper ();
      let zolu = loo . AssuredZoftLung ();
      let delu = loo . AssuredDefaultLung ();
      Zoft.SetDefaultLung (zolu);

      novo . InstallSampleMaesConfig ();

      let spaq = new EventAqueduct ();
      spaq . SetName ("spatial-aqueduct");
      spaq . AppendPhage (novo);
      loo . AppendAqueduct (spaq);

      let owa = new OSCViveWandSump ();
      owa . SetName ("wand-sump");
      owa . InstallSampleViveWandTransform ();
      // owa . ForAddressAppendRawExtractor ("/events/spatial");
      // the foregoing and its kin already happen in owa's constructor...
      owa . ForAddressAppendAqueduct ("/events/spatial", spaq);
      loo . AppendSump (owa);

      loo . AppendToiler (novo);

      return novo;
    }
}

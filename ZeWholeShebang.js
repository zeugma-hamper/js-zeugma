
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
      this.generate_ze_events_from_mouse = true;
      this.recentest_synth_spat_evt_by_prov = new Map ();
    }


  Looper ()
    { return this.looper; }


  ShouldAutomaticallySwitchAttentionToInboundComms ()
    { return this.auto_attend; }
  SetShouldAutomaticallySwitchAttentionToInboundComms (tend)
    { this.auto_attend = tend;  return this; }

  ShouldGenerateZeEventsFromNativeMouse ()
    { return this.generate_ze_events_from_mouse; }
  SetShouldGenerateZeEventsFromNativeMouse (nera)
    { this.generate_ze_events_from_mouse = nera;  return this; }


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


  FlyOnTheirTerms ()
    { if (this.auto_attend == true)
        this.AttendToIncomingComms ();

      let self = this;
      if (this.looper.is_looping == true)
        return 0;
      this.looper.is_looping = true;

      let heave = function ()
        { self.looper . OneDelightfulTurn ();
          if (self.looper.is_looping == true)
            globalThis.requestAnimationFrame (heave);
          else
            { if (self.auto_attend == true)
                self . SuspendIncomingCommsAttention ();
            }
        }

      globalThis.requestAnimationFrame (heave);
      return this;
    }


  ProvisionWindowAndMaesWithCanvas (whin, maes)
    { let canv = whin.document . createElement ('canvas');
      this.SetGraphicsCorrelateForMaes (maes, canv);
      whin.document.body.style.margin = "0px";  // the horror... the horror...
      canv.width = whin.innerWidth;
      canv.height = whin.innerHeight;
      whin.document.body . appendChild (canv);
      let gctx = canv . getContext ("2d");
      if (gctx == null)
        console.warn ("Well, that simply won't do. We can't have a null gctx.");

      whin . addEventListener ('resize', () => {
          canv.width = whin.innerWidth;
          canv.height = whin.innerHeight;
      });

      let dcat = this.AssuredDialectCatcherForMaes (maes);
      if (dcat != null)
        dcat . HooverNativeEventsFrom (canv);

      return 0;
    }

  BurstFromTheGround ()
    { if (globalThis.window == undefined)
        return 0;
      let winny = globalThis.window;
      let ur_maes = this.NthMaes (0);
      if (ur_maes == null)
        return null;

      this.ProvisionWindowAndMaesWithCanvas (winny, ur_maes);

      // let dcat = this.AssuredDialectCatcherForMaes (ur_maes);
      // let cnvs = this.GraphicsCorrelateForMaes (ur_maes);
      // if (dcat != null  &&  cnvs != null)
      //   dcat . HooverNativeEventsFrom (cnvs);

      let ma, cnt = this.NumMaeses ();
      for (let q = 1  ;  q < cnt  ;  ++q)
        if ((ma = this.NthMaes (q))  !=  null)
          { let parawin = winny . open ();
            this.ProvisionWindowAndMaesWithCanvas (parawin, ma);
          }
      return this;
    }



//
///
//
  Travail (ratch, thyme)
    { // let self = this;
      // globalThis.requestAnimationFrame (() =>
      //   { self.DrawMaesLayers (ratch, thyme); });
      this.DrawMaesLayers (ratch, thyme);
      return 0;
    }


  NativeMouseMoveOnMaes (e, x, y, prv, ma)
    { if (! this.ShouldGenerateZeEventsFromNativeMouse ())
        return 0;

      let hit = ma . Loc () . Add (ma . Over () . Sca (x * ma . Width ())) .
          Add (ma . Up () . Sca (y * ma . Height ()));
      let frm = hit . Add (ma . Norm () . Sca (0.8 * ma . Width ()));
      let aim = ma . Norm () . Neg ();
      let ovr = aim . Cross (ma . Up ()) . Norm ();

      let smev = new ZESpatialMoveEvent (prv);
      smev . SetLoc (frm) . SetAim (aim) . SetOver (ovr);
      let duct = this . Looper () . FindAqueduct ("spatial-aqueduct");
      if (duct != null)
        duct . AppendDram (smev);
      this.recentest_synth_spat_evt_by_prov . set (prv, smev);
      return 0;
    }

  _NativePressureEventOnMaes (e, x, y, butt, prv, ma, evt_cls)
    { let smev = this.recentest_synth_spat_evt_by_prov . get (prv);
      let spev = new evt_cls (prv);
      if (smev != null)
        smev . InjectParticularsInto (spev);
      spev . SetWhichPressor (butt);
      let duct = this . Looper () . FindAqueduct ("spatial-aqueduct");
      if (duct != null)
        duct . AppendDram (spev);
      return 0;
    }

  NativeMouseDownOnMaes (e, x, y, butt, prv, ma)
    { if (! this.ShouldGenerateZeEventsFromNativeMouse ())
        return 0;
      return this._NativePressureEventOnMaes (e, x, y, butt, prv, ma,
                                              ZESpatialHardenEvent);
    }

  NativeMouseUpOnMaes (e, x, y, butt, prv, ma)
    { if (! this.ShouldGenerateZeEventsFromNativeMouse ())
        return 0;
      return this._NativePressureEventOnMaes (e, x, y, butt, prv, ma,
                                              ZESpatialSoftenEvent);
    }


//
//
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

      if (cur == null)
        { cur = new Cursoresque (140.0, 6);
          this.cursor_by_prov . set (prv, cur);
          for (let emm of this.maeses)
            if (emm != null)
              { let lay = emm . FindLayer ("curseteria");
                if (lay == null)
                  emm . AppendLayer (lay = new LimnyThing ()
                                     . SetName ("curseteria"));
                lay . AppendChild (cur);
              }
        }

      let mah = PlatonicMaes.ClosestAmong (this.Maeses (),
                                           e . Loc (), e . Aim (),
                                           true);
      if (mah == null)
        return 0;
      // let hit = Geom.RayPlaneIntersection (e . Loc (), e . Aim (),
      //                                      ma . Loc (), ma . Norm ());
      let emm = mah[0], hit = mah[1];
      if (hit != null)
        cur . SetLoc (hit);
      if (emm  !=  cur . CurrentMaes ())
        { cur . SetCurrentMaes (emm);
          cur . AlignTo (emm . Over () . Norm (), emm . Up () . Norm ());
        }
      return 0;
    }

  ZESpatialHarden (e)
    { console.log ("HARDEN! Truly, from provenance " + e . Provenance ()); }

//
//
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

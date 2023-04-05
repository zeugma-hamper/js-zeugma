
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { ZeColl } from "./ZeColl.js";

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
      this.winda_by_maes = new Map ();
      this.dcatcher_by_maes = new Map ();

      this.auto_attend = true;

      this.cursor_by_prov = new Map ();

      this.should_generate_ze_events_from_mouse = true;
      this.recentest_synth_spat_evt_by_prov = new Map ();

      this.should_synthesize_html_pointer_events = false;
      this.should_synthesize_even_for_native_originated_events = false;

      this.html_pointer_id_by_prov = new Map ();
      this.global_html_pointer_id = 1088801;

      this.should_deploy_stanalone_html_cursors = false;
      this.html_cursor_by_prov_by_window = new Map ();
    }


  Looper ()
    { return this.looper; }


  ShouldAutomaticallySwitchAttentionToInboundComms ()
    { return this.auto_attend; }
  SetShouldAutomaticallySwitchAttentionToInboundComms (tend)
    { this.auto_attend = tend;  return this; }

  ShouldGenerateZeEventsFromNativeMouse ()
    { return this.should_generate_ze_events_from_mouse; }
  SetShouldGenerateZeEventsFromNativeMouse (nera)
    { this.should_generate_ze_events_from_mouse = nera;  return this; }

  ShouldSynthesizeHTMLPointerEvents ()
    { return this.should_synthesize_html_pointer_events; }
  SetShouldSynthesizeHTMLPointerEvents (shpe)
    { this.should_synthesize_html_pointer_events = shpe;  return this; }

  ShouldSynthesizeEvenForNativeOriginatedEvents ()
    { return this.should_synthesize_even_for_native_originated_events; }
  SetShouldSynthesizeEvenForNativeOriginatedEvents (sefnoe)
    { this.should_synthesize_even_for_native_originated_events = sefnoe;
      return this;
    }

  ShouldDeployStandaloneHTMLCursors ()
    { return this.should_deploy_stanalone_html_cursors; }
  SetShouldDeployStandaloneHTMLCursors (dshc)
    { this.should_deploy_stanalone_html_cursors = dshc;  return this; }

  HTMLPointerIDForProv (prv)
    { let pntr_id = this.html_pointer_id_by_prov . get (prv);
      if (pntr_id == null)
        { pntr_id = this.global_html_pointer_id++;
          this.html_pointer_id_by_prov . set (prv, pntr_id);
        }
      return pntr_id;
    }


  Maeses ()
    { return this.maeses; }

  NumMaeses ()
    { return this.maeses.length; }
  NthMaes (ind)
    { return ZeColl.Nth (this.maeses, ind); }
  FindMaes (nm)
    { return ZeColl.FindByName (this.maeses, nm); }
  AppendMaes (ma)
    { return ZeColl.Append (this.maeses, ma); }


  SetGraphicsCorrelateForMaes (m, g)
    { this.gcorr_by_maes . set (m, g);  return this; }

  GraphicsCorrelateForMaes (m)
    { return this.gcorr_by_maes . get (m); }


  SetWindowForMaes (m, w)
    { this.winda_by_maes . set (m, w);  return this; }

  WindowForMaes (m)
    { return this.winda_by_maes . get (m); }


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
            let adjc = ma . AdjColor ();

            ctx . fillStyle = ma . BackgroundColor () . AsCSSString ();
            ctx . fillRect (0, 0, corr.width, corr.height);
            ctx . save ();
            let cnt = ma . NumLayers ();
            for (let q = 0  ;  q < cnt  ;  ++q)
              if ((lay = ma . NthLayer (q))  !=  null)
                this.RecursivelyDraw (lay, ratch, thyme, cm, adjc, bonus);
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


  AssociateWindowAndMaes (whin, maes)
    { this.SetWindowForMaes (maes, whin);
      let dcat = this.AssuredDialectCatcherForMaes (maes);
      if (dcat != null)
        dcat . HooverNativeEventsFrom (whin);
    }

  ProvisionWindowAndMaesWithCanvas (whin, maes)
    { let canv = whin.document . createElement ('canvas');
      this.SetGraphicsCorrelateForMaes (maes, canv);

      whin.document.body.style.margin = "0px";  // the horror... the horror...
      whin.document.body.style.overflow = "hidden";  // more horror...

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

whin . addEventListener ('pointermove',
                         (e) =>
                           { globalThis.winpvt = e; }
                        );
      return 0;
    }


  _BurstFromTheGround (canvasslessly)
    { if (globalThis.window == undefined)
        return 0;
      let winny = globalThis.window;
      let ur_maes = this.NthMaes (0);
      if (ur_maes == null)
        return null;

      this.AssociateWindowAndMaes (winny, ur_maes);
      if (! canvasslessly)
        this.ProvisionWindowAndMaesWithCanvas (winny, ur_maes);

      let ma, cnt = this.NumMaeses ();
      for (let q = 1  ;  q < cnt  ;  ++q)
        if ((ma = this.NthMaes (q))  !=  null)
          { let parawin = winny . open ();
            this.AssociateWindowAndMaes (parawin, ma);
            if (! canvasslessly)
              this.ProvisionWindowAndMaesWithCanvas (parawin, ma);
          }
      return this;
    }

  BurstFromTheGround ()
    { return this._BurstFromTheGround (false); }

  BurstFromTheGroundCanvasslessly ()
    { return this._BurstFromTheGround (true); }



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
      smev . SetMaesAndHit ([ma, hit]);
      smev . SetForebearEvent (e);
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
        { smev . InjectParticularsInto (spev);
          spev . SetMaesAndHit (smev . MaesAndHit ());
        }
      spev . SetWhichPressor (butt);
      spev . SetForebearEvent (e);
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

  CanvasXY (hit, emm, canv)
    { let x = hit . Sub (emm . Loc ()) . Dot (emm . Over () . Norm ());
      let y = hit . Sub (emm . Loc ()) . Dot (emm . Up () . Norm ());
      x = 0.5  +  x / emm . Width ();
      y = 0.5  -  y / emm . Height ();
      if (canv != null)
        { x *= (canv.width - 1.0);  y *= (canv.height - 1.0); }
      return [x, y];
    }

  CountenanceCursorVitality (zev)
    { const prv = zev . Provenance ();
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

      if (zev.maes_and_hit == null)
        return 0;
      const [emm, hit] = zev.maes_and_hit;

      if (hit != null)
        cur . SetLoc (hit);
      if (emm  !=  cur . CurrentMaes ())
        { cur . SetCurrentMaes (emm);
          cur . AlignToMaes (emm);
        }

      return this;
    }


  ExtrudeNewHTMLCursor (zev, wnd)
    { let cusser = wnd.document . createElement ("div");
      let canvoo = wnd.document . createElement ("div");
      cusser . appendChild (canvoo);

      cusser.style.position = "absolute";
      cusser.style.width = "60px";
      cusser.style.height = "60px";
      cusser.halfWid = cusser.halfHei = 30;
      cusser["style"]["pointer-events"] = "none";
      cusser.style.zIndex = 1073741824;  // that'd be 2^30, Mildred.

      canvoo.style.width = "100%";
      canvoo.style.height = "100%";
      canvoo.style.backgroundColor = "#20ff2050";

      return cusser;
    }

  CountenanceStandaloneHTMLCursorBrio (zev, w, x, y)
    { if (zev == null)
        return this;

      if (w == null)
        return this;

      let crsr_by_prov = this.html_cursor_by_prov_by_window . get (w);
      if (crsr_by_prov == null)
        this.html_cursor_by_prov_by_window . set (w, crsr_by_prov = new Map ());
      const prv = zev . Provenance ();
      let cusser = crsr_by_prov . get (prv);
      if (cusser == null)
        { crsr_by_prov . set (prv, cusser = this.ExtrudeNewHTMLCursor (zev, w))
          w.document.body . appendChild (cusser);
        }

      cusser.style.left = "" + (x - cusser.halfWid) + "px";
      cusser.style.top = "" + (y - cusser.halfHei) + "px";

      return this;
    }

  ZESpatialMove (e)
    { const prv = e . Provenance ();
      this.CountenanceCursorVitality (e);

      if (e.maes_and_hit == null)
        return 0;
      const [emm, hit] = e.maes_and_hit;
      let wnd = this.WindowForMaes (emm);

      if (wnd != null)
        { let x = hit . Sub (emm . Loc ()) . Dot (emm . Over () . Norm ());
          let y = hit . Sub (emm . Loc ()) . Dot (emm . Up () . Norm ());
          x = 0.5  +  x / emm . Width ();
          y = 0.5  -  y / emm . Height ();
          x *= (wnd.innerWidth - 1.0);
          y *= (wnd.innerHeight - 1.0);

          if (this.ShouldDeployStandaloneHTMLCursors ())
            this.CountenanceStandaloneHTMLCursorBrio (e, wnd, x, y);

          if (this.ShouldSynthesizeHTMLPointerEvents ()
              &&  (e . ForebearEvent ()  ==  null
                   ||  this.ShouldSynthesizeEvenForNativeOriginatedEvents ()))
            { let pntrid = this.HTMLPointerIDForProv (prv);

              let optns = { pointerId: pntrid, clientX: x, clientY: y };
              let pevt = new PointerEvent ('pointermove', optns);
              pevt['prov'] = prv;
              pevt['zeugma_evt'] = e;

              wnd . dispatchEvent (pevt);
            }
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

      let owa = new OSCViveWandSump (novo);
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

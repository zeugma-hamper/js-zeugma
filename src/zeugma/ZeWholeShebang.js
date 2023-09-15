
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { ZeColl } from "./ZeColl.js";

import { PlatonicMaes } from "./PlatonicMaes.js";

import { Cursoresque } from "./Cursoresque.js";

import { LimnyThing } from "./LimnyThing.js";

import { Zoft } from "./Zoft.js";

import { Geom } from "./Geom.js";
import { Matrix44 } from "./Matrix44.js";
import { CumuMats } from "./CumuMats.js";
import { Vect } from "./Vect.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";
import { OSCViveWandSump } from "./OSCViveWandSump.js";

import { ZESpatialMoveEvent } from "./ZESpatialMoveEvent.js";
import { ZESpatialHardenEvent } from "./ZESpatialHardenEvent.js";
import { ZESpatialSoftenEvent } from "./ZESpatialSoftenEvent.js";
import { ZESpatialPhagy } from "./ZESpatialPhagy.js";

import { NativeEventDialectCatcher } from "./NativeEventDialectCatcher.js";

import { RecursiveLimner } from "./RecursiveLimner.js";

import { base_class } from "./interface-ersatzer.js";



export class ZeWholeShebang  extends base_class (Zeubject)
                           . and_interfaces (ZESpatialPhagy, RecursiveLimner)
{ //
//  static canonical_instance = null;
  static InitializeClassHaplessly ()
    { this.canonical_instance = null; }

  //
  constructor ()
    { super ();
      //
      this.looper = new Loopervisor ();

      this.maeses = new Array ();

      let mca = PlatonicMaes.SampleMaesConfigJSON ();
      if (ZeWholeShebang . SingleShotDefaultMaesConfigArray ())
        { mca = ZeWholeShebang . SingleShotDefaultMaesConfigArray ();
          ZeWholeShebang . SetSingleShotDefaultMaesConfigArray (undefined);
        }
      else if (ZeWholeShebang . DefaultMaesConfigArray ())
        mca = ZeWholeShebang . DefaultMaesConfigArray ();
      this.maes_config_arr = mca;

      this.gcorr_by_maes = new Map ();
      this.winda_by_maes = new Map ();
      this.maes_by_winda = new Map ();
      this.dcatcher_by_maes = new Map ();

      this.auto_attend = true;

      this.cursor_by_prov = new Map ();

      this.should_generate_ze_events_from_mouse = true;
      this.recentest_synth_spat_evt_by_prov = new Map ();

      this.should_synthesize_html_pointer_events = false;
      this.should_synthesize_even_for_native_originated_events = false;

      this.cursor_prefix_guestlist = null;
      this.cursor_prefix_exilelist = null;

      this.html_pointer_id_by_prov = new Map ();
      this.global_html_pointer_id = 1088801;

      this.explicit_html_target_by_prov = new Map ();

      this.should_deploy_stanalone_html_cursors = false;
      this.html_cursor_by_prov_by_window = new Map ();
      this.html_cursor_window_by_prov = new Map ();
      this.null_cumumats = new CumuMats ();

      this.html_target_by_prov_by_window = new Map ();

      this.url_by_maes_name = new Map ();
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


  CursorPrefixGuestlist ()
    { return this.cursor_prefix_guestlist; }

  AppendToCursorPrefixGuestlist (prv)
    { if (! prv)
        return;
      if (! this.cursor_prefix_guestlist)
        this.cursor_prefix_guestlist = new Array ();
      if (! this.cursor_prefix_guestlist . includes (prv))
        this.cursor_prefix_guestlist . push (prv);
    }

  RemoveFromCursorPrefixGuestlist (prv)
    { if (! prv)
        return;
      if (! this.cursor_prefix_guestlist)
        return;
      const ind = this.cursor_prefix_guestlist . indexOf (prv);
      if (ind  >=  0)
        this.cursor_prefix_guestlist . splice (ind, 1);
    }

  CursorPrefixGuestlistAllowNone ()
    { this.cursor_prefix_guestlist = new Array (); }

  CursorPrefixGuestlistAllowAll ()
    { this.cursor_prefix_guestlist = null; }


  CursorPrefixExilelist ()
    { return this.cursor_prefix_exilelist; }

  AppendToCursorPrefixExilelist (prv)
    { if (! prv)
        return;
      if (! this.cursor_prefix_exilelist)
        this.cursor_prefix_exilelist = new Array ();
      if (! this.cursor_prefix_exilelist . includes (prv))
        this.cursor_prefix_exilelist . push (prv);
    }

  RemoveFromCursorPrefixExilelist (prv)
    { if (! prv)
        return;
      if (! this.cursor_prefix_exilelist)
        return;
      const ind = this.cursor_prefix_exilelist . indexOf (prv);
      if (ind  >=  0)
        this.cursor_prefix_exilelist . splice (ind, 1);
    }

  CursorPrefixExilelistEmpty ()
    { this.cursor_prefix_exilelist = null; }


  ValidateCursorWorthiness (prv)
    { if (! prv)
        return false;

      if (this.cursor_prefix_guestlist)
        { for (const gst of this.cursor_prefix_guestlist)
            if (prv . startsWith (gst))
              return true;
          return false;
        }
      if (this.cursor_prefix_exilelist)
        { for (const exl of this.cursor_prefix_exilelist)
            if (prv . startsWith (exl))
              return false;
        }
      return true;
    }


  HTMLTargetForProvenance (prv)
    { return this.explicit_html_target_by_prov . get (prv); }

  SetHTMLTargetForProvenance (prv, trg, optns)
    { if (this.explicit_html_target_by_prov . has (prv))
        return false;
      this.explicit_html_target_by_prov . set (prv, [trg, optns]);
      return true;
    }
  RemoveHTMLTargetForProvenance (prv)
    { if (! this.explicit_html_target_by_prov . has (prv))
        return false;
      this.explicit_html_target_by_prov . delete (prv);
      return true;
    }


  HTMLPointerIDForProv (prv)
    { let pntr_id = this.html_pointer_id_by_prov . get (prv);
      if (pntr_id == null)
        { pntr_id = this.global_html_pointer_id++;
          this.html_pointer_id_by_prov . set (prv, pntr_id);
        }
      return pntr_id;
    }


  MaesConfigArray ()
    { return this.maes_config_arr; }
  SetMaesConfigArray (mc_arr)
    { this.maes_config_arr = mc_arr;  return this; }

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
  RemoveNthMaes (ind)
    { return ZeColl.RemoveNth (this.maeses, ind); }
  RemoveAllMaeses ()
    { return ZeColl.RemoveAll (this.maeses); }


  StartupURLByMaesMap ()
    { return this.url_by_maes_name; }

  MergeIntoStartupURLByMaesNameMap (ubmn_map_or_obj)
    { if (! ubmn_map_or_obj)
        return this;
      const emm = (Object.getPrototypeOf (ubmn_map_or_obj) === Map.prototype)
              ?  ubmn_map_or_obj  :  new Map (Object.entries (ubmn_map_or_obj));

      emm . forEach ( (val, key) =>
                        { this.url_by_maes_name . set (key, val); }
                    );
      return this;
    }

  ClearStartupURLByMaesNameMap ()
    { this.url_by_maes_name . clear ();
      return this;
    }


  SetGraphicsCorrelateForMaes (m, g)
    { this.gcorr_by_maes . set (m, g);  return this; }

  GraphicsCorrelateForMaes (m)
    { return this.gcorr_by_maes . get (m); }


  SetWindowForMaes (m, w)
    { this.winda_by_maes . set (m, w);
      this.maes_by_winda . set (w, m);
      return this;
    }

  WindowForMaes (m)
    { return this.winda_by_maes . get (m); }

  MaesForWindow (w)
    { return this.maes_by_winda . get (w); }


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


  PopulateFromMaesConfig (mconf)
    { this.RemoveAllMaeses ();
      for (const descobj of mconf)
        { const ma = PlatonicMaes.NewFromJSON (descobj);
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

      let lay;
      const cm = new CumuMats ();
      for (const ma of this.maeses)
        if (ma != null)
          { const corr = this.GraphicsCorrelateForMaes (ma);
            if (corr == null)
              continue;
            const ctx = corr . getContext ("2d");
            if (ctx == null)
              continue;

            const cam = ma . EigenCamera ();
            const vpm = (cam == null )  ?  new Matrix44 ()  :  cam . VPMatrix ();
            const bonus = [ corr, ctx, vpm ];
            const adjc = ma . AdjColor ();

            ctx . fillStyle = ma . BackgroundColor () . AsCSSString ();
            ctx . fillRect (0, 0, corr.width, corr.height);
            ctx . save ();
            const cnt = ma . NumLayers ();
            for (let q = 0  ;  q < cnt  ;  ++q)
              if ((lay = ma . NthLayer (q))  !=  null)
                this.RecursivelyDraw (lay, ratch, thyme, cm, adjc, bonus);
            ctx . restore ();
          }
      return this;
    }


  AttendToIncomingComms ()
    { for (const smp of this.looper . Sumps ())
        if (smp != null)
          smp . AttendToIncoming ();
      return this;
    }

  SuspendIncomingCommsAttention ()
    { for (const smp of this.looper . Sumps ())
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
    { if (this.Looper () . IsLooping ())
        return this;

      if (this.auto_attend == true)
        this.AttendToIncomingComms ();

      const self = this;
      this.looper.is_looping = true;

      const helpernub = new Zeubject ();
      helpernub.Travail = function (ratch, thyme)
        { return self . CanvaslessTravail (ratch, thyme); };
      this.looper . AppendToiler (helpernub);

      const heave = function ()
        { self.looper . OneDelightfulTurn ();
          if (self.looper.is_looping == true)
            globalThis.requestAnimationFrame (heave);
          else
            { if (self.auto_attend == true)
                self . SuspendIncomingCommsAttention ();
              self.looper . RemoveToiler (helpernub);
            }
        };

      globalThis.requestAnimationFrame (heave);
      return this;
    }


  AssociateWindowAndMaes (whin, maes)
    { this.SetWindowForMaes (maes, whin);
      const dcat = this.AssuredDialectCatcherForMaes (maes);
      if (dcat != null)
        dcat . HooverNativeEventsFrom (whin);
    }

  ProvisionWindowAndMaesWithCanvas (whin, maes)
    { const canv = whin.document . createElement ('canvas');
      this.SetGraphicsCorrelateForMaes (maes, canv);

      whin.document.body.style.margin = "0px";  // the horror... the horror...
      whin.document.body.style.overflow = "hidden";  // more horror...

      canv.width = whin.innerWidth;
      canv.height = whin.innerHeight;
      whin.document.body . appendChild (canv);

      const gctx = canv . getContext ("2d");
      if (gctx == null)
        console.warn ("Well, that simply won't do. We can't have a null gctx.");

      // one might argue that doing the following in thie function is an
      // ill-considered placement; and one might sounds pretty good like that.
      whin . addEventListener ('resize', (e) => {
          const new_w = whin.innerWidth, new_h = whin.innerHeight
          canv.width = new_w;
          canv.height = new_h;
          maes . CountenanceResize (new_w, new_h, e, whin);
      });

whin . addEventListener ('pointermove',
                         (e) =>
                           { globalThis.winpvt = e; }
                        );
      return 0;
    }


  _BurstFromTheGround (canvasslessly)
    { const winny = globalThis.window;
      const ur_maes = this.NthMaes (0);
      if (winny === null  ||  winny === undefined
          ||  ur_maes === null  ||  ur_maes === undefined)
        return null;

      this.AssociateWindowAndMaes (winny, ur_maes);
      if (! canvasslessly)
        this.ProvisionWindowAndMaesWithCanvas (winny, ur_maes);

      let ma;
      const cnt = this.NumMaeses ();
      for (let q = 1  ;  q < cnt  ;  ++q)
        if ((ma = this.NthMaes (q))  !=  null)
          { const nm = ma . Name ();
            let url = this.url_by_maes_name . get (nm);
            if (! url)
              url = "";
            const parawin = winny . open (url, nm);
            if (parawin === null  ||  parawin === undefined)
              continue;
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

  CanvaslessTravail (ratch, thyme)
    { // anything besides the following?

      // render cursors
      if (this.should_deploy_stanalone_html_cursors)
        { //
          for (const cursors_by_prov
               of this.html_cursor_by_prov_by_window . values ())
            if (cursors_by_prov != null)
              for (const crsr of cursors_by_prov . values ())
                if (crsr != null)
                  { const gctx = crsr.canvoo . getContext ("2d");
                    // gctx . reset ();  // oops... reset's "experimental"...
                    gctx . resetTransform ();
                    gctx . clearRect (0, 0,
                                      crsr.canvoo.width,
                                      crsr.canvoo.height);
                    gctx . translate (0.5 * crsr.canvoo.width,
                                      0.5 * crsr.canvoo.height);
                    crsr.zeug_crsr . DrawSelf (ratch,
                                               this.null_cumumats,
                                               null,
                                               [crsr.canvoo, gctx, null]);
                  }
        }
    }


  NativeMouseMoveOnMaes (e, x, y, prv, ma)
    { if (! this.ShouldGenerateZeEventsFromNativeMouse ())
        return 0;

      if (e.zeugma_evt != undefined)
        return 0;

      const hit = ma . Loc () . Add (ma . Over () . Sca (x * ma . Width ())) .
        Add (ma . Up () . Sca (y * ma . Height ()));
      const frm = hit . Add (ma . Norm () . Sca (0.8 * ma . Width ()));
      const aim = ma . Norm () . Neg ();
      const ovr = aim . Cross (ma . Up ()) . Norm ();

      const smev = new ZESpatialMoveEvent (prv);
      smev . SetLoc (frm) . SetAim (aim) . SetOver (ovr);
      smev . SetMaesAndHit ([ma, hit]);
      smev . SetForebearEvent (e);
      const duct = this . Looper () . FindAqueduct ("spatial-aqueduct");
      if (duct != null)
        duct . AppendDram (smev);
      this.recentest_synth_spat_evt_by_prov . set (prv, smev);
      return 0;
    }

  _NativePressureEventOnMaes (e, x, y, butt, prv, ma, evt_cls)
    { const smev = this.recentest_synth_spat_evt_by_prov . get (prv);
      const spev = new evt_cls (prv);
      if (smev != null)
        { smev . InjectParticularsInto (spev);
          spev . SetMaesAndHit (smev . MaesAndHit ());
        }
      spev . SetWhichPressor (butt);
      spev . SetForebearEvent (e);
      const duct = this . Looper () . FindAqueduct ("spatial-aqueduct");
      if (duct != null)
        duct . AppendDram (spev);
      return 0;
    }

  NativeMouseDownOnMaes (e, x, y, butt, prv, ma)
    { if (! this.ShouldGenerateZeEventsFromNativeMouse ())
        return 0;
      if (e.zeugma_evt != undefined)
        return 0;
      return this._NativePressureEventOnMaes (e, x, y, butt, prv, ma,
                                              ZESpatialHardenEvent);
    }

  NativeMouseUpOnMaes (e, x, y, butt, prv, ma)
    { if (! this.ShouldGenerateZeEventsFromNativeMouse ())
        return 0;
      if (e.zeugma_evt != undefined)
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

  WindowXY (hit, emm, wind)
    { let x = hit . Sub (emm . Loc ()) . Dot (emm . Over () . Norm ());
      let y = hit . Sub (emm . Loc ()) . Dot (emm . Up () . Norm ());
      x = 0.5  +  x / emm . Width ();
      y = 0.5  -  y / emm . Height ();
      if (wind != null)
        { x *= (wind.innerWidth - 1.0);  y *= (wind.innerHeight - 1.0); }
      return [x, y];
    }

  CountenanceCursorVitality (zev)
    { const prv = zev . Provenance ();
      let cur = this.cursor_by_prov . get (prv);

      if (cur == null)
        { cur = new Cursoresque (140.0, 6);
          this.cursor_by_prov . set (prv, cur);
          for (const emm of this.maeses)
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
    { const cusser = wnd.document . createElement ("div");
      const canvoo = wnd.document . createElement ("canvas");
      cusser . appendChild (canvoo);
      cusser.canvoo = canvoo;
      cusser.zeug_crsr = new Cursoresque (30.0, 6);

      cusser.style.position = "absolute";
      cusser.style.width = "60px";
      cusser.style.height = "60px";
      cusser.halfWid = cusser.halfHei = 30;
      cusser["style"]["pointer-events"] = "none";
      cusser.style.zIndex = 1073741824;  // that'd be 2^30, Mildred.

      // canvoo.style.width = "100%";
      // canvoo.style.height = "100%";
      canvoo.width = 60.0;
      canvoo.height = 60.0;
      // canvoo.style.backgroundColor = "#20ff2050";

      return cusser;
    }

  CountenanceStandaloneHTMLCursorBrio (zev, w, x, y)
    { if (zev == null)
        return this;

      const prv = zev . Provenance ();
      const prev_win = this.html_cursor_window_by_prov . get (prv);

      let cusser = null;
      if (w != null)
        { let crsr_by_prov = this.html_cursor_by_prov_by_window . get (w);
          if (crsr_by_prov == null)
            this.html_cursor_by_prov_by_window . set
              (w, crsr_by_prov = new Map ());

          cusser = crsr_by_prov . get (prv);
          if (cusser == null)
            crsr_by_prov . set (prv,
                                cusser = this.ExtrudeNewHTMLCursor (zev, w));

          if (w  !=  prev_win)
            w.document.body . appendChild (cusser);

          cusser.style.left = "" + (x - cusser.halfWid) + "px";
          cusser.style.top = "" + (y - cusser.halfHei) + "px";
        }

      if (w  !=  prev_win)  // noting that w might in fact be null...
        { this.html_cursor_window_by_prov . set (prv, w);
          if (prev_win != null)
            { const otha_assoc
                = this.html_cursor_by_prov_by_window . get (prev_win);
              if (otha_assoc != null)
                { const otha_cuss = otha_assoc . get (prv);
                  if (otha_cuss != null)
                    otha_cuss . remove ();
                }
            }
        }

      return this;
    }


  WrestleWithDerivedSpatialEvents (prov, cur_trgt, wnd, opts, pntrid, zevt)
    { let tgt_by_prv = this.html_target_by_prov_by_window . get (wnd);
      if (tgt_by_prv == null)
        this.html_target_by_prov_by_window . set (wnd, tgt_by_prv = new Map ());

      const prev_tgt = tgt_by_prv . get (prov);
      if (prev_tgt == cur_trgt)
        return this;

      const pntr_opts = Object.assign ({}, opts);
      pntr_opts.pointerId = pntrid;

      // first, break the news to the freshly jilted:
      if (prev_tgt != null)
        { let leav_evt = new MouseEvent ('mouseleave', opts);
          leav_evt['prov'] = prov;
          leav_evt['zeugma_evt'] = zevt;
          prev_tgt . dispatchEvent (leav_evt);

          leav_evt = new PointerEvent ('pointerleave', pntr_opts);
          leav_evt['prov'] = prov;
          leav_evt['zeugma_evt'] = zevt;
          prev_tgt . dispatchEvent (leav_evt);
        }

      // and to the newly exalted:
      if (cur_trgt != null)
        { let entr_evt = new MouseEvent ('mouseenter', opts);
          entr_evt['prov'] = prov;
          entr_evt['zeugma_evt'] = zevt;
          cur_trgt . dispatchEvent (entr_evt);

          entr_evt = new PointerEvent ('pointerenter', pntr_opts);
          entr_evt['prov'] = prov;
          entr_evt['zeugma_evt'] = zevt;
          cur_trgt . dispatchEvent (entr_evt);
        }

      // and, nimoy to kelley, remember:
      tgt_by_prv . set (prov, cur_trgt);
      return this;
    }


  ZESpatialMove (e)
    { const prv = e . Provenance ();
      if (! this.ValidateCursorWorthiness (prv))
        return;

      this.CountenanceCursorVitality (e);

      if (e.maes_and_hit == null)
        return 0;
      const [emm, hit] = e.maes_and_hit;
      const wnd = this.WindowForMaes (emm);

      if (wnd != null)
        { let x = hit . Sub (emm . Loc ()) . Dot (emm . Over () . Norm ());
          let y = hit . Sub (emm . Loc ()) . Dot (emm . Up () . Norm ());
          x = 0.5  +  x / emm . Width ();
          y = 0.5  -  y / emm . Height ();
          x *= (wnd.innerWidth - 1.0);
          y *= (wnd.innerHeight - 1.0);
//x -= 75;  y -= 150;
          if (this.ShouldDeployStandaloneHTMLCursors ())
            this.CountenanceStandaloneHTMLCursorBrio (e, wnd, x, y);

          if (this.ShouldSynthesizeHTMLPointerEvents ()
              &&  (e . ForebearEvent ()  ==  null
                   ||  this.ShouldSynthesizeEvenForNativeOriginatedEvents ()))
            { const pntrid = this.HTMLPointerIDForProv (prv);

              let plic_tar = this.HTMLTargetForProvenance (prv);
              if (plic_tar)
                plic_tar = plic_tar[0];
              let tahgit = plic_tar  ?  plic_tar  :
                wnd.document . elementFromPoint (x, y);

              if (tahgit == null)
                { console.warn ("in ZESpatialMove() -- tahgit is null, with "
                                + "window = " + wnd + " at (x,y) = ("
                                + x + ", " + y + ")...");
                  tahgit = wnd;
                }
              let optns = { view: wnd,
                            clientX: x, clientY: y };
              this.WrestleWithDerivedSpatialEvents (prv, tahgit, wnd, optns,
                                                    pntrid, e);

              if (tahgit != null)
                { optns = { bubbles: true, view: wnd,
                            clientX: x, clientY: y };

                  let pevt = new MouseEvent ('mousemove', optns);
                  pevt['prov'] = prv;
                  pevt['zeugma_evt'] = e;
                  tahgit . dispatchEvent (pevt);

                  optns = { bubbles: true, view: wnd,
                            pointerId: pntrid, clientX: x, clientY: y };
                  pevt = new PointerEvent ('pointermove', optns);
                  pevt['prov'] = prv;
                  pevt['zeugma_evt'] = e;
                  tahgit . dispatchEvent (pevt);
                }
            }
        }

      return 0;
    }


  ZESpatialHarden (e)
    { const prv = e . Provenance ();
      if (! this.ValidateCursorWorthiness (prv))
        return;

      // this.CountenanceCursorVitality (e);

      if (e.maes_and_hit == null)
        return 0;
      const [emm, hit] = e.maes_and_hit;
      const wnd = this.WindowForMaes (emm);

      if (wnd != null)
        { let x = hit . Sub (emm . Loc ()) . Dot (emm . Over () . Norm ());
          let y = hit . Sub (emm . Loc ()) . Dot (emm . Up () . Norm ());
          x = 0.5  +  x / emm . Width ();
          y = 0.5  -  y / emm . Height ();
          x *= (wnd.innerWidth - 1.0);
          y *= (wnd.innerHeight - 1.0);

          if (this.ShouldSynthesizeHTMLPointerEvents ()
              &&  (e . ForebearEvent ()  ==  null
                   ||  this.ShouldSynthesizeEvenForNativeOriginatedEvents ()))
            { const pntrid = this.HTMLPointerIDForProv (prv);

              let optns = { bubbles: true, view: wnd,
                            clientX: x, clientY: y,
                            button: e . WhichPressor () };
//              let pevt = new PointerEvent ('pointerdown', optns);
              let pevt = new MouseEvent ('mousedown', optns);
              pevt['prov'] = prv;
              pevt['zeugma_evt'] = e;

              let plic_tar = this.HTMLTargetForProvenance (prv);
              if (plic_tar)
                plic_tar = plic_tar[0];
              let tahgit = plic_tar  ?  plic_tar  :
                wnd.document . elementFromPoint (x, y);

              if (tahgit == null)
                { console.warn ("in ZESpatialHarden() -- tahgit is null, with "
                                + "window = " + wnd + " at (x,y) = ("
                                + x + ", " + y + ")...");
                  tahgit = wnd;
                }
              tahgit . dispatchEvent (pevt);

              optns = { bubbles: true, view: wnd,
                        pointerId: pntrid, clientX: x, clientY: y,
                        button: e . WhichPressor () };
              pevt = new PointerEvent ('pointerdown', optns);
              pevt['prov'] = prv;
              pevt['zeugma_evt'] = e;

              tahgit . dispatchEvent (pevt);
            }
        }

      return 0;
    }


  ZESpatialSoften (e)
    { const prv = e . Provenance ();
      if (! this.ValidateCursorWorthiness (prv))
        return;

      // this.CountenanceCursorVitality (e);

      if (e.maes_and_hit == null)
        return 0;
      const [emm, hit] = e.maes_and_hit;
      const wnd = this.WindowForMaes (emm);

      if (wnd != null)
        { let x = hit . Sub (emm . Loc ()) . Dot (emm . Over () . Norm ());
          let y = hit . Sub (emm . Loc ()) . Dot (emm . Up () . Norm ());
          x = 0.5  +  x / emm . Width ();
          y = 0.5  -  y / emm . Height ();
          x *= (wnd.innerWidth - 1.0);
          y *= (wnd.innerHeight - 1.0);

          if (this.ShouldSynthesizeHTMLPointerEvents ()
              &&  (e . ForebearEvent ()  ==  null
                   ||  this.ShouldSynthesizeEvenForNativeOriginatedEvents ()))
            { const pntrid = this.HTMLPointerIDForProv (prv);

              let optns = { bubbles: true, view: wnd,
                            clientX: x, clientY: y,
                            button: e . WhichPressor () };
//              let pevt = new PointerEvent ('pointerup', optns);
              let pevt = new MouseEvent ('mouseup', optns);
              pevt['prov'] = prv;
              pevt['zeugma_evt'] = e;

              let plic_tar = this.HTMLTargetForProvenance (prv);
              if (plic_tar)
                plic_tar = plic_tar[0];
              let tahgit = plic_tar  ?  plic_tar  :
                wnd.document . elementFromPoint (x, y);

              if (tahgit == null)
                tahgit = wnd;
              tahgit . dispatchEvent (pevt);

              optns = { bubbles: true, view: wnd,
                        pointerId: pntrid, clientX: x, clientY: y,
                        button: e . WhichPressor () };
              pevt = new PointerEvent ('pointerup', optns);
              pevt['prov'] = prv;
              pevt['zeugma_evt'] = e;

              tahgit . dispatchEvent (pevt);
            }
        }

      return 0;
    }

//
//
  InstallSampleMaesConfig ()
    { const samp_maeses = PlatonicMaes.SampleMaesConfigJSON ();
      return this.PopulateFromMaesConfig (samp_maeses);
    }
//

//
///
//

  static DefaultMaesConfigArray (mca)
    { return this.default_maes_config_arr; }
  static SetDefaultMaesConfigArray (mca)
    { this.default_maes_config_arr = mca; }

  static SingleShotDefaultMaesConfigArray ()
    { return this.single_shot_default_maes_config_arr; }
  static SetSingleShotDefaultMaesConfigArray (ssmca)
    { this.single_shot_default_maes_config_arr = ssmca; }

  static CanonicalInstance ()
    { if (this.canonical_instance == null)
        this.canonical_instance = this.NewDefaultInstance ();
      return this.canonical_instance;
    }

  static NewDefaultInstance (maes_config)
    { const novo = new ZeWholeShebang ();

      const loo = novo . Looper ();
      const zolu = loo . AssuredZoftLung ();
      loo . AssuredDefaultLung ();  // for the glorious side effect of creation
      Zoft.SetDefaultLung (zolu);

      novo . PopulateFromMaesConfig (novo . MaesConfigArray ());

      const spaq = new EventAqueduct ();
      spaq . SetName ("spatial-aqueduct");
      spaq . AppendPhage (novo);
      loo . AppendAqueduct (spaq);

      const owa = new OSCViveWandSump (novo);
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


//
///
//

ZeWholeShebang.InitializeClassHaplessly ();


//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { ZEDisplacementEvent } from "./ZEDisplacementEvent.js";
import { ZEDisplacementAppearEvent } from "./ZEDisplacementAppearEvent.js";
import { ZEDisplacementVanishEvent } from "./ZEDisplacementVanishEvent.js";
import { ZEDisplacementMoveEvent } from "./ZEDisplacementMoveEvent.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js"

import { Vect } from "./Vect.js";
import { ZeColl } from "./ZeColl.js";

import { base_class } from "./interface-ersatzer.js";


class DState
{ constructor (prv)
    { this.prov = prv;
      this.nascent = false;
      this.factual = false;
      //this.engaged = false;
      this.est_loc = null;
      this.est_aim = null;
      this.est_ovr = null;
      this.est_nrm = null;
      this.prv_raw = null;
      this.prv_dsp = null;
      this.prv_ovr = null;
      this.accum_twst = 0.0;
      this.prv_twst = 0.0;
    }
}


const THRESH = 0.7;


export class DisplacementStill
       extends base_class (Zeubject) . and_interfaces (ZESpatialPhagy)
{ //
  static InitializeClassHaplessly ()
    {
    }

//
  constructor ()
    { super ();
      this.state_by_prov = new Map ();

      this.axis_0 = Vect.xaxis . Dup ();
      this.axis_1 = Vect.yaxis . Dup ();
      this.axis_2 = Vect.zaxis . Dup ();

      this.monaxial = false;
      this.dtnt_uni = -1.0;
      this.dtnt_0 = this.dtnt_1 = this.dtnt_2 = -1.0;
      this.dtnt_ang = -1.0;

      this.ducts = new Array ();
    }


  UniversalDetent ()
    { return this.dtnt_uni; }
  SetUniversalDetent (d)
    { this.dtnt_uni = d;
      if (d >= 0.0)
        this.dtnt_0 = this.dtnt_1 = this.dtnt_2 = -1.0;
      return this;
    }

  AxialDetents ()
    { return [ this.dtnt_0, this.dtnt_1, this.dtnt_2 ]; }
  SetAxialDetents (d0, d1, d2)
    { this.dtnt_0 = d0;
      this.dtnt_1 = d1;
      this.dtnt_2 = d2;
      if (d0 >= 0.0  ||  d1 >= 0.0  ||  d2 >= 0.0)
        this.dtnt_uni = -1.0;
      return this;
    }

  AngularDetent ()
    { return this.dtnt_ang; }
  AngularDetentDeg ()
    { return this.dtnt_ang * 180.0 / Math.PI; }
  SetAngularDetent (ang)
    { this.dtnt_ang = ang;  return this; }
  SetAngularDetentDeg (ang)
    { this.dtnt_ang = ang * Math.PI / 180.0;  return this; }

  AppendAqueduct (a)
    { return ZeColl.Append (this.ducts, a); }
  RemoveAqueduct (a)
    { return ZeColl.Remove (this.ducts, a); }
  IndexOfAqueduct (a)
    { return ZeColl.IndexOf (this.ducts, a); }
  FindAqueduct (nm)
    { return ZeColl.FindByName (this.ducts, nm); }
  AqueductCount ()
    { return this.ducts.length; }
  NthAqueduct (ind)
    { return ZeColl.Nth (this.ducts, ind); }

  // just below, the wand button's already being held down.
  OngoingMotionAssistron (e, prv, sta)
    { const dlt = e . Loc () . Sub (sta.est_loc);
      const raw0 = dlt . Dot (this.axis_0);
      const raw1 = dlt . Dot (this.axis_1);
      const raw2 = dlt . Dot (this.axis_2);

      let thr = (this.dtnt_uni >= 0)  ?  this.dtnt_uni  :  this.dtnt_0;
      let u = dlt . Dot (this.axis_0);
      let sgn = (u < 0.0)  ?  -1.0  :  1.0;
      const r0 = u;
      if (thr  >  0.0)
        u = (u * sgn  <  thr)  ?  0.0  :  (u - sgn * thr);
      const d0 = u;

      thr = (this.dtnt_uni >= 0)  ?  this.dtnt_uni  :  this.dtnt_1;
      u = dlt . Dot (this.axis_1);
      sgn = (u < 0.0)  ?  -1.0  :  1.0;
      const r1 = u;
      if (thr  >  0.0)
        u = (u * sgn  <  thr)  ?  0.0  :  (u - sgn * thr);
      const d1 = u;

      thr = (this.dtnt_uni >= 0)  ?  this.dtnt_uni  :  this.dtnt_2;
      u = dlt . Dot (this.axis_2);
      sgn = (u < 0.0)  ?  -1.0  :  1.0;
      const r2 = u;
      if (thr  >  0.0)
        u = (u * sgn  <  thr)  ?  0.0  :  (u - sgn * thr);
      const d2 = u;

      const raw_out = new Array (r0, r1, r2);
      const dsp_out = new Array (d0, d1, d2);

      const evt = new ZEDisplacementMoveEvent (prv);
      evt . SetAxes (this.axis_0, this.axis_1, this.axis_2);
      evt . SetEstabLoc (sta.est_loc);
      evt . SetPrevDisp (sta.prv_dsp);
      evt . SetPrevRaw (sta.prv_raw);
      evt . SetRawDisp (raw_out);
      evt . SetCurDisp (dsp_out);
      evt . SetForebearEvent (e);
      sta.prv_dsp = dsp_out;
      sta.prv_raw = raw_out;

      let ovr = e . Over ();
      ovr = ovr . RejectFrom (sta.est_aim) . Norm ();
      if (! ovr . IsZero ())
        { const prvo = sta.prv_ovr;
          const yish = sta.est_aim . Cross (prvo) . Norm ();
          let dang = ovr . AngleWith (prvo);
          let atw
            = sta.accum_twst + ((ovr . Dot (yish)  >=  0.0)  ?  dang  :  -dang);
          sgn = (atw < 0.0)  ?  -1.0  :  1.0;
          let tw = atw;
          thr = this.dtnt_ang;
          if (thr  >  0.0)
            tw = (tw * sgn  <  thr)  ?  0.0  :  (tw - sgn * thr);

          evt . SetPrevTwist (sta.prv_twst);
          evt . SetCurTwist (tw);
          sta.accum_twst = atw;
          sta.prv_ovr = ovr;
          sta.prv_twst = tw;
        }
      else
        { evt . SetPrevTwist (sta.prv_twst);
          evt . SetCurTwist (sta.prv_twst);
        }

      this . DispatchEvent (evt);
      return 1;
    }

  ZESpatialMove (e)
    { const prv = e . Provenance ();
      let sta = this.state_by_prov . get (prv);

      if (! sta)
        { if (Vect.yaxis . Dot (e . Aim ())  <  THRESH)
            return 0;
          this.state_by_prov . set (prv, sta = new DState (prv));
          sta.nascent = true;
          return 1;
        }

      if (sta.nascent)
        { if (Vect.yaxis . Dot (e . Aim ())  <  THRESH)
            { // presumably emit a farewell event of some to-be-defined ilk
              this.state_by_prov . delete (prv);
            }
          return 0;
        }

      if (! sta.factual)
        return 0;  // this'd be exceedingly odd...
      return this.OngoingMotionAssistron (e, prv, sta);
    }

  ZESpatialHarden (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov . get (prv);

      if (! sta)
        return 0;
      // immediately above, we're ignoring the possibility that e.g. the
      // wand's verticality could exceed the threshold at precisely the
      // same time that the button is depressed. hm...

      if (! sta.nascent  ||  sta.factual)
        return 0;  // weird indeed

      sta.nascent = false;
      sta.factual = true;
      sta.est_loc = e . Loc ();
      sta.est_aim = e . Aim ();
      sta.est_ovr = sta.prv_ovr = e . Over ();
      sta.est_nrm = sta.est_ovr . Cross (sta.est_aim);

      // emit ZEDisplacementAppearEvent
      const evt = new ZEDisplacementAppearEvent (prv);
      const nooz = Vect.zerov . Dup ();
      evt . SetAxes (this.axis_0, this.axis_1, this.axis_2);
      evt . SetEstabLoc (sta.est_loc);
      evt . SetPrevDisp (nooz);
      evt . SetPrevRaw (nooz);
      evt . SetRawDisp (nooz);
      evt . SetCurDisp (nooz);
      evt . SetPrevTwist (sta.prv_twst);
      evt . SetCurTwist (sta.prv_twst);
      evt . SetForebearEvent (e);

      sta.prv_dsp = nooz;
      sta.prv_raw = nooz;

      this . DispatchEvent (evt);
      return 1;
    }

  ZESpatialSoften (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov . get (prv);

      if (! sta)
        return 0;
      if (sta.nascent  ||  ! sta.factual)
        return 0;

      sta.factual = false;
      sta.nascent = true;

      // emit ZEDisplacementVanishEvent
      const evt = new ZEDisplacementVanishEvent (prv);
      evt . SetAxes (this.axis_0, this.axis_1, this.axis_2);
      evt . SetEstabLoc (sta.est_loc);
      evt . SetPrevDisp (sta.prv_dsp);
      evt . SetPrevRaw (sta.prv_raw);
      evt . SetRawDisp (sta.prv_raw);
      evt . SetCurDisp (sta.prv_dsp);
      evt . SetPrevTwist (sta.prv_twst);
      evt . SetCurTwist (sta.prv_twst);
      evt . SetForebearEvent (e);

      this . DispatchEvent (evt);

      this.state_by_prov . delete (prv);
      return 1;
    }


  DispatchEvent (e)
    { if (e)
        for (const d of this.ducts)
          d . AppendDram (e);
      return this;
    }
}


DisplacementStill.InitializeClassHaplessly ();

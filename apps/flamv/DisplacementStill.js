
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "/zeugma-lib.js";

import { ZEDisplacementEvent,
         ZEDisplacementAppearEvent,
         ZEDisplacementVanishEvent,
         ZEDisplacementMoveEvent } from "/zeugma-lib.js";

import { ZESpatialPhagy } from "/zeugma-lib.js";

import { Vect, ZeColl } from "/zeugma-lib.js";

import { base_class } from "/zeugma-lib.js";


class DState
{ constructor (prv)
    { this.prov = prv;
      this.nascent = false;
      this.factual = false;
      //this.engaged = false;
      this.est_loc = null;
      this.prv_raw = null;
      this.prv_dsp = null;
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

      // emit ZEDisplacementAppearEvent
      const evt = new ZEDisplacementAppearEvent (prv);
      const nooz = Vect.zerov . Dup ();
      evt . SetAxes (this.axis_0, this.axis_1, this.axis_2);
      evt . SetEstabLoc (sta.est_loc);
      evt . SetPrevDisp (nooz);
      evt . SetPrevRaw (nooz);
      evt . SetRawDisp (nooz);
      evt . SetCurDisp (nooz);
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
      evt . SetForebearEvent (e);

      this . DispatchEvent (evt);
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

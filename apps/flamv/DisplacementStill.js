
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "/zeugma-lib.js";

import { ZEDisplacementEvent,
         ZEDisplacementAppearEvent,
         ZEDisplacementVanishEvent,
         ZEDisplacementMoveEvent } from "/zeugma-lib.js";

import { ZESpatialPhagy } from "/zeugma-lib.js";

import { base_class } from "/zeugma-lib.js";


class DState
{ constructor (prv)
    { this.prov = prv;
      this.nascent = false;
      this.factual = false;
      //this.engaged = false;
      this.est_loc = null;
      this.prv_dsp = null;
    }
}


const THRESH = 0.7;


export class DisplacementStill  extends Zeubject
{ //
  static InitializeClassHaplessly ()
    {
    }

//
  constructor ()
    { this.state_by_prov = new Map ();

      this.axis_0 = Vect.xaxis . Dup ();
      this.axis_1 = Vect.yaxis . Dup ();
      this.axis_2 = Vect.zaxis . Dup ();

      this.monaxial = false;
      this.dtnt_uni = -1.0;
      this.dtnt_0 = this.dtnt_1 = this.dtnt_2 = -1.0;
    }

  // just below, the wand button's already being held down.
  OngoingMotionAssistron (e, p, s)
    { const dlt = e . Loc () - s.est_loc;
      const raw0 = dlt . Dot (this.axis_0);
      const raw1 = dlt . Dot (this.axis_1);
      const raw2 = dlt . Dot (this.axis_2);

      let thr = dtnt_uni >= 0  ?  dtnt_uni  :  dtnt_0;
      let u = dlt . Dot (this.axis_0);
      let sgn = (u < 0.0)  ?  -u  :  u;
      const r0 = 0;
      if (u * sgn  >  thr)
        u -= sgn * thr;
      const d0 = u;

      thr = dtnt_uni >= 0  ?  dtnt_uni  :  dtnt_1;
      let u = dlt . Dot (this.axis_1);
      let sgn = (u < 0.0)  ?  -u  :  u;
      const r1 = u;
      if (u * sgn  >  thr)
        u -= sgn * thr;
      const d1 = u;

      let thr = dtnt_uni >= 0  ?  dtnt_uni  :  dtnt_2;
      let u = dlt . Dot (this.axis_2);
      let sgn = (u < 0.0)  ?  -u  :  u;
      const r2 = u;
      if (u * sgn  >  thr)
        u -= sgn * thr;
      const d2 = u;

      const raw_out = new Array (r0, r1, r2);
      const dsp_out = new Array (d0, d1, d2);
    }

  ZESpatialMove (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov (prv);

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
      return OngoingMotionAssistron (e, prv, sta);
    }

  ZESpatialHarden (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov (prv);

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
      return 1;
    }

  ZESpatialSoften (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov (prv);

      if (! sta)
        return 0;
      if (sta.nascent  ||  ! sta.factual)
        return 0;

      sta.factual = false;
      sta.nascent = true;

      // emit ZEDisplacementVanishEvent
      return 1;
    }
}


DisplacementStill.InitializeClassHaplessly ();

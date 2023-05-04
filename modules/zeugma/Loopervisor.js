
//
// (c) treadle & loam, provisioners llc
//


import { MotherTime } from "./MotherTime.js";

import { Zeubject } from "./Zeubject.js";

import { ZeColl } from "./ZeColl.js";
import { ZeWeakColl } from "./ZeWeakColl.js";

import { IronLung } from "./IronLung.js";
import { CommsSump } from "./CommsSump.js";
import { EventAqueduct } from "./EventAqueduct.js";


export class Loopervisor  extends Zeubject
{ //
  static momma_t = new MotherTime ();

  //
  constructor ()
    { super ();

      this.grand_ratchet = 0;
      this.recentest_time = -1.0;

      this.active_sumps = new Array ();
      this.active_aqueducts = new Array ();
      this.active_lungs = new Array ();
      this.active_toilers = new Array ();

      this.target_loop_dur = 1.0 / 30.0;
      this.is_looping = false;
    }

  RecentestRatchet ()
    { return this.grand_ratchet; }
  RecentestTime ()
    { return this.recentest_time; }

  ElapsedTime ()
    { return this.constructor.momma_t . CurTime (); }


  FreshenTimestamps ()
    { this.grand_ratchet += 8;
      this.recentest_time = this.ElapsedTime ();
      return this;
    }

  OnceMoreUntoTheBreath ()
    { for (const ump of this.active_sumps)
        if (ump != null)
          ump . ProcessSump ();

      for (const qued of this.active_aqueducts)
        if (qued != null)
          qued . DrainReservoir ();

      this.FreshenTimestamps ();

      for (const ung of this.active_lungs)
        if (ung != null)
          ung . Inhale (this.grand_ratchet, this.recentest_time);

      return this;
    }

  OneDelightfulTurn ()
    { this.OnceMoreUntoTheBreath ();
      this.Travail (this.grand_ratchet, this.recentest_time);
      return this;
    }

  SpinGloriously ()
    { if (this.is_looping == true)
        return this;

      this.is_looping = true;
      const selfesque = this;
      const momty = this.constructor.momma_t;

      const _SpinGlo = function ()
        { const befo_t = momty . CurTime ();
          selfesque.OneDelightfulTurn ();
          let dt = momty . CurTime () - befo_t;
          dt = selfesque.target_loop_dur - dt;
          if (selfesque.is_looping)
            setTimeout (_SpinGlo,
                        (dt > 0)  ?  dt * 1000  :  0);
        }

      _SpinGlo ();
      return this;
    }

  BrakeSpin ()
    { this.is_looping = false; }
  BreakSpin ()
    { this.BrakeSpin (); }

  IsLooping ()
    { return this.is_looping; }

  TargetLoopDur ()
    { return this.target_loop_dur; }
  SetTargetLoopDur (tld)
    { this.target_loop_dur = tld;  return this; }


  Travail (ratch, thyme)
    { const cnt = this.active_toilers.length;
      let toi = null;
      let ded_cnt = 0;
      for (let q = 0  ;  q < cnt  ;  ++q)
        if ((toi = this.NthToiler (q))  ==  null)
          ++ded_cnt;
        else
          toi . Travail (ratch, thyme);
      if (ded_cnt > cnt / 2)
        { }  // cull nullified toilers from active_toilers
      return 0;
    }

//
  AssuredLungOfName (nm)
    { let ell = this.FindLung (nm);
      if (ell == null)
        { (ell = new IronLung ()) . SetName (nm);
          this.AppendLung (ell);
        }
      return ell;
    }

  AssuredZoftLung ()
    { return this.AssuredLungOfName ("velvet-lung"); }
  AssuredDefaultLung ()
    { return this.AssuredLungOfName ("omni-lung"); }

//
  Sumps ()
    { return this.active_sumps; }
  NumSumps ()
    { return this.active_sumps.length; }
  NthSump (ind)
    { return ZeColl.Nth (this.active_sumps, ind); }
  FindSump (nm)
    { return ZeColl.FindByName (this.active_sumps, nm); }
  IndexOfSump (ea)
    { return ZeColl.IndexOf (this.active_sumps, ea); }
  AppendSump (ea)
    { return ZeColl.Append (this.active_sumps, ea); }
  InsertSump (ea, ind)
    { return ZeColl.Insert (this.active_sumps, ind); }
  RemoveSump (ea)
    { return ZeColl.Remove (this.active_sumps, ea); }
  RemoveNthSump (ind)
    { return ZeColl.RemoveNth (this.active_sumps, ind); }


  Aqueducts ()
    { return this.active_aqueducts; }
  NumAqueducts ()
    { return this.active_aqueducts.length; }
  NthAqueduct (ind)
    { return ZeColl.Nth (this.active_aqueducts, ind); }
  FindAqueduct (nm)
    { return ZeColl.FindByName (this.active_aqueducts, nm); }
  IndexOfAqueduct (ea)
    { return ZeColl.IndexOf (this.active_aqueducts, ea); }
  AppendAqueduct (ea)
    { return ZeColl.Append (this.active_aqueducts, ea); }
  InsertAqueduct (ea, ind)
    { return ZeColl.Insert (this.active_aqueducts, ind); }
  RemoveAqueduct (ea)
    { return ZeColl.Remove (this.active_aqueducts, ea); }
  RemoveNthAqueduct (ind)
    { return ZeColl.RemoveNth (this.active_aqueducts, ind); }


  Lungs ()
    { return this.active_lungs; }
  NumLungs ()
    { return this.active_lungs.length; }
  NthLung (ind)
    { return ZeColl.Nth (this.active_lungs, ind); }
  FindLung (nm)
    { return ZeColl.FindByName (this.active_lungs, nm); }
  IndexOfLung (ea)
    { return ZeColl.IndexOf (this.active_lungs, ea); }
  AppendLung (ea)
    { return ZeColl.Append (this.active_lungs, ea); }
  InsertLung (ea, ind)
    { return ZeColl.Insert (this.active_lungs, ind); }
  RemoveLung (ea)
    { return ZeColl.Remove (this.active_lungs, ea); }
  RemoveNthLung (ind)
    { return ZeColl.RemoveNth (this.active_lungs, ind); }


  Toilers ()
    { return this.active_toilers; }
  NumToilers ()
    { return this.active_toilers.length; }
  NthToiler (ind)
    { return ZeWeakColl.Nth (this.active_toilers, ind); }
  FindToiler (nm)
    { return ZeWeakColl.FindByName (this.active_toilers, nm); }
  IndexOfToiler (ea)
    { return ZeWeakColl.IndexOf (this.active_toilers, ea); }
  AppendToiler (ea)
    { return ZeWeakColl.Append (this.active_toilers, ea); }
  InsertToiler (ea, ind)
    { return ZeWeakColl.Insert (this.active_toilers, ind); }
  RemoveToiler (ea)
    { return ZeWeakColl.Remove (this.active_toilers, ea); }
  RemoveNthToiler (ind)
    { return ZeWeakColl.RemoveNth (this.active_toilers, ind); }
}

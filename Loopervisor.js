
//
// (c) treadle & loam, provisioners llc
//


import { MotherTime } from "./MotherTime.js"

import { Zeubject } from "./Zeubject.js"

import { IronLung } from "./IronLung.js"
import { CommsSump } from "./CommsSump.js"
import { EventAqueduct } from "./EventAqueduct.js"


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
    }

  RecentestRatchet ()
    { return this.grand_ratchet; }
  RecentestTime ()
    { return this.recentest_time; }

  FreshenTimestamps ()
    { this.grand_ratchet += 8;
      this.recentest_time = this.constructor.momma_t . CurTime ();
      return this;
    }

  OnceMoreUntoTheBreath ()
    { for (let ump of this.active_sumps)
        if (ump != null)
          ump . ProcessSump ();

      for (let qued of this.active_aqueducts)
        if (qued != null)
          qued . DrainReservoir ();

      this.FreshenTimestamps ();

      for (let ung of this.active_lungs)
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
    {
    }

  TargetLoopDur ()
    { return this.target_loop_dur; }
  SetTargetLoopDur (tld)
    { this.target_loop_dur = rld;  return this; }


  Travail (ratch, thyme)
    { let cnt = this.active_toilers.length;
      let toi = null;
      let ded_cnt = 0;
      for (let q = 0  ;  q < cnt  ;  ++q)
        if ((toi = this.NthToiler (q))  ==  null)
          { ++ded_cnt; }
        else
          { console.log(toi); toi . Travail (ratch, thyme); }
      if (ded_cnt > cnt / 2)
        { }  // cull nullified toilers from active_toilers
      return 0;
    }

//
  NumSumps ()
    { return this.active_sumps.length; }
  NthSump (ind)
    { return Zeubject.CollNth (this.active_sumps, ind); }
  FindSump (nm)
    { return Zeubject.CollFindByName (this.active_sumps, nm); }
  IndexOfSump (ea)
    { return Zeubject.CollIndexOf (this.active_sumps, ea); }
  AppendSump (ea)
    { return Zeubject.CollAppend (this.active_sumps, ea); }
  InsertSump (ea, ind)
    { return Zeubject.CollInsert (this.active_sumps, ind); }
  RemoveSump (ea)
    { return Zeubject.CollRemove (this.active_sumps, ea); }
  RemoveNthSump (ind)
    { return Zeubject.CollRemoveNth (this.active_sumps, ind); }


  NumAqueducts ()
    { return this.active_aqueducts.length; }
  NthAqueduct (ind)
    { return Zeubject.CollNth (this.active_aqueducts, ind); }
  FindAqueduct (nm)
    { return Zeubject.CollFindByName (this.active_aqueducts, nm); }
  IndexOfAqueduct (ea)
    { return Zeubject.CollIndexOf (this.active_aqueducts, ea); }
  AppendAqueduct (ea)
    { return Zeubject.CollAppend (this.active_aqueducts, ea); }
  InsertAqueduct (ea, ind)
    { return Zeubject.CollInsert (this.active_aqueducts, ind); }
  RemoveAqueduct (ea)
    { return Zeubject.CollRemove (this.active_aqueducts, ea); }
  RemoveNthAqueduct (ind)
    { return Zeubject.CollRemoveNth (this.active_aqueducts, ind); }


  NumLungs ()
    { return this.active_lungs.length; }
  NthLung (ind)
    { return Zeubject.CollNth (this.active_lungs, ind); }
  FindLung (nm)
    { return Zeubject.CollFindByName (this.active_lungs, nm); }
  IndexOfLung (ea)
    { return Zeubject.CollIndexOf (this.active_lungs, ea); }
  AppendLung (ea)
    { return Zeubject.CollAppend (this.active_lungs, ea); }
  InsertLung (ea, ind)
    { return Zeubject.CollInsert (this.active_lungs, ind); }
  RemoveLung (ea)
    { return Zeubject.CollRemove (this.active_lungs, ea); }
  RemoveNthLung (ind)
    { return Zeubject.CollRemoveNth (this.active_lungs, ind); }


  NumToilers ()
    { return this.active_toilers.length; }
  NthToiler (ind)
    { return Zeubject.WeakCollNth (this.active_toilers, ind); }
  FindToiler (nm)
    { return Zeubject.WeakCollFindByName (this.active_toilers, nm); }
  IndexOfToiler (ea)
    { return Zeubject.WeakCollIndexOf (this.active_toilers, ea); }
  AppendToiler (ea)
    { return Zeubject.WeakCollAppend (this.active_toilers, ea); }
  InsertToiler (ea, ind)
    { return Zeubject.WeakCollInsert (this.active_toilers, ind); }
  RemoveToiler (ea)
    { return Zeubject.WeakCollRemove (this.active_toilers, ea); }
  RemoveNthToiler (ind)
    { return Zeubject.WeakCollRemoveNth (this.active_toilers, ind); }
}

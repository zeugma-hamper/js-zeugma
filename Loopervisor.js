
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
  constructor ()
    { super ();

      this.grand_ratchet = 0;
      this.recentest_time = -1.0;
      this.momma_tee = new MotherTime ();

      this.active_sumps = new Array ();
      this.active_aqueducts = new Array ();
      this.active_lungs = new Array ();
      this.active_toilers = new Array ();
    }

  RecentestRatchet ()
    { return this.grand_ratchet; }
  RecentestTime ()
    { return this.recentest_time; }

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
    }

  OneDelightfulTurn ()
    { this.OnceMoreUntoTheBreath ();
      this.Travail (this.grand_ratchet, this.recentest_time);
    }

  SpinGloriously ()
    {
    }

  TargetLoopDur ()
    { return this.target_loop_dur; }
  SetTargetLoopDur (tld)
    { this.target_loop_dur = rld;  return this; }


  NumSumps ()
    { return active_aqueducts.length; }
  NthSump (ind)
    { return Zeubject.CollNth (this.active_aqueducts, ind); }
  FindSump (nm)
    { return Zeubject.CollFindByName (this.active_aqueducts, nm); }
  IndexOfSump (ea)
    { return Zeubject.CollIndexOf (this.active_aqueducts, ea); }
  AppendSump (ea)
    { return Zeubject.CollAppend (this.active_aqueducts, ea); }
  InsertSump (ea, ind)
    { return Zeubject.CollInsert (this.active_aqueducts, ind); }
  RemoveSump (ea)
    { return Zeubject.CollRemove (this.active_aqueducts, ea); }
  RemoveNthSump (ind)
    { return Zeubject.CollRemoveNth (this.active_aqueducts, ind); }


  NumAqueducts ()
    { return active_aqueducts.length; }
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
    { return active_aqueducts.length; }
  NthLung (ind)
    { return Zeubject.CollNth (this.active_aqueducts, ind); }
  FindLung (nm)
    { return Zeubject.CollFindByName (this.active_aqueducts, nm); }
  IndexOfLung (ea)
    { return Zeubject.CollIndexOf (this.active_aqueducts, ea); }
  AppendLung (ea)
    { return Zeubject.CollAppend (this.active_aqueducts, ea); }
  InsertLung (ea, ind)
    { return Zeubject.CollInsert (this.active_aqueducts, ind); }
  RemoveLung (ea)
    { return Zeubject.CollRemove (this.active_aqueducts, ea); }
  RemoveNthLung (ind)
    { return Zeubject.CollRemoveNth (this.active_aqueducts, ind); }


  NumToilers ()
    { return active_aqueducts.length; }
  NthToiler (ind)
    { return Zeubject.CollNth (this.active_aqueducts, ind); }
  FindToiler (nm)
    { return Zeubject.CollFindByName (this.active_aqueducts, nm); }
  IndexOfToiler (ea)
    { return Zeubject.CollIndexOf (this.active_aqueducts, ea); }
  AppendToiler (ea)
    { return Zeubject.CollAppend (this.active_aqueducts, ea); }
  InsertToiler (ea, ind)
    { return Zeubject.CollInsert (this.active_aqueducts, ind); }
  RemoveToiler (ea)
    { return Zeubject.CollRemove (this.active_aqueducts, ea); }
  RemoveNthToiler (ind)
    { return Zeubject.CollRemoveNth (this.active_aqueducts, ind); }
}



//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js"
import { BinarithZoftGuts } from "./BinarithZoftGuts.js"


export class SumZoftGuts  extends BinarithZoftGuts
{ //
  constructor ()
    { super ();
      //
    }

  SummandAZoft ()
    { return this.ZoftA (); }
  SummandBZoft ()
    { return this.ZoftB (); }

  _InstallSummandAZoft (zft)
    { return this._InstallZoftA (zft); }
  _InstallSummandBZoft (zft)
    { return this._InstallZoftB (zft); }

  BinOp ()
    { return Zoft.OffalAdd; }
}


//
// (c) treadle & loam, provisioners llc
//


import { BinarithZoftGuts } from "./BinarithZoftGuts.js";
import { Zoft } from "./Zoft.js";


export class DiffZoftGuts  extends BinarithZoftGuts
{ //
  constructor ()
    { super ();
      //
    }

  MinuendZoft ()
    { return this.ZoftA (); }
  SubtrahendZoft ()
    { return this.ZoftB (); }

  _InstallMinuendZoft (zft)
    { return this._InstallZoftA (zft); }
  _InstallSubtrahendZoft (zft)
    { return this._InstallZoftB (zft); }

  BinOp ()
    { return Zoft.OffalSub; }
}

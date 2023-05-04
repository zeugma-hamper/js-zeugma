
//
// (c) treadle & loam, provisioners llc
//


import { BinarithZoftGuts } from "./BinarithZoftGuts.js"

import { Zoft } from "./Zoft.js"


export class ProdZoftGuts  extends BinarithZoftGuts
{ //
  constructor ()
    { super ();
      //
    }

  MultiplicandZoft ()
    { return this.ZoftA (); }
  MultiplierZoft ()
    { return this.ZoftB (); }

  _InstallMultiplicandZoft (zft)
    { return this._InstallZoftA (zft); }
  _InstallMultiplierZoft (zft)
    { return this._InstallZoftB (zft); }

  BinOp ()
    { return Zoft.OffalMul; }
}


//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js";
import { BinarithZoftGuts } from "./BinarithZoftGuts.js";


export class ScaleZoftGuts  extends BinarithZoftGuts
{ //
  constructor ()
    { super ();
      //
    }

  ScaleeZoft ()
    { return this.ZoftA (); }
  ScalerZoft ()
    { return this.ZoftB (); }

  _InstallScaleeZoft (zft)
    { return this._InstallZoftA (zft); }
  _InstallScalerZoft (zft)
    { return this._InstallZoftB (zft); }

  BinOp ()
    { return Zoft.OffalSca; }
}

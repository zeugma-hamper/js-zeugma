
//
// (c) treadle & loam, provisioners llc
//


import { ZoftGuts } from "./ZoftGuts.js"


export class BinarithZoftGuts  extends ZoftGuts
{ //
  constructor ()
    { super ();
      this.zoft_a = null;
      this.zoft_b = null;
    }

  ZoftA ()
    { return this.zoft_a; }
  ZoftB ()
    { return this.zoft_b; }

  _InstallZoftA (za)
    { this.zoft_a = za;  return this; }
  _InstallZoftB (zb)
    { this.zoft_b = zb;  return this; }
}

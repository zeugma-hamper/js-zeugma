//
// (c) treadle & loam, provisioners llc
//

import { ZoftGuts } from "./ZoftGuts.js";

export class LatchZoftGuts extends ZoftGuts {
  //
  constructor(v) {
    super();
    this.latch_val = v;
  }

  LatchVal() {
    return this.latch_val;
  }

  SetLatchVal(v) {
    this.latch_val = v;
    return this;
  }

  Set(v) {
    return this.SetLatchVal(v);
  }

  Inhale(ratch, _thyme) {
    if (this.IsFreshFor(ratch)) return 0;
    this.PuppeteerHosts(this.latch_val);
    this.SetRatchet(ratch);
    return 0;
  }
}

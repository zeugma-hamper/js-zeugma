//
// (c) treadle & loam, provisioners llc
//

import { Zoft } from "./Zoft.js";
import { ZoftGuts } from "./ZoftGuts.js";

export class LoopZoftGuts extends ZoftGuts {
  //
  constructor() {
    super();
    // this.prev_val = null;
    // this.prev_time = null;
    // this.loop_time = null;
    this.natal = true;
  }

  StartZoft() {
    return this.z_start;
  }
  DXDTZoft() {
    return this.z_dxdt;
  }
  LoopDurZoft() {
    return this.z_loop_dur;
  }

  _InstallStartZoft(sz) {
    this.z_start = sz;
    return this;
  }
  _InstallDXDTZoft(dx) {
    this.z_dxdt = dx;
    return this;
  }
  _InstallLoopDurZoft(ld) {
    this.z_loop_dur = ld;
    return this;
  }

  RestartLoop() {
    this.natal = true;
  }

  Inhale(ratch, thyme) {
    if (this.IsFreshFor(ratch)) return 0;

    if (this.natal) {
      this.prev_val = this.z_start.Val();
      this.prev_time = thyme;
      this.loop_time = 0.0;
      this.natal = false;
    }

    this.z_start.Inhale(ratch, thyme);
    this.z_dxdt.Inhale(ratch, thyme);
    this.z_loop_dur.Inhale(ratch, thyme);
    const dt = thyme - this.prev_time;
    this.prev_time = thyme;
    this.loop_time += dt;

    let v = this.z_loop_dur.Val();
    const dur = this.z_loop_dur.Val();

    if (dur <= 0.0 || this.loop_time <= dur)
      v = Zoft.OffalAdd(this.prev_val, Zoft.OffalSca(this.z_dxdt.Val(), dt));
    else if (dur > 0.0 && this.loop_time > dur) {
      do {
        this.loop_time -= dur;
      } while (this.loop_time > dur);
      v = Zoft.OffalAdd(
        this.z_start.Val(),
        Zoft.OffalSca(this.z_dxdt.Val(), this.loop_time)
      );
    }
    this.PuppeteerHosts((this.prev_val = v));
    this.SetRatchet(ratch);
    return 0;
  }
}

//
// (c) treadle & loam, provisioners llc
//

import { Vect } from "./Vect.js";
import { ZeEvent } from "./ZeEvent.js";

export class ZESpatialEvent extends ZeEvent {
  //
  constructor(pr) {
    super(pr);
    this.loc = new Vect(0.0, 0.0, 0.0);
    this.aim = Vect.zaxis.Neg();
    this.ovr = Vect.xaxis;
    this.pressures = null;
    this.caresses = null;
    this.maes_and_hit = null;
  }

  EventIlk() {
    return "ZESpatialEvent";
  }

  CopyPressuresFrom(spe) {
    const sures = spe.Pressures();
    if (sures == null) {
      this.pressures = null;
      return this;
    }
    this.pressures = new Map();
    for (const p of sures.entries()) this.SetPressureFor(p[0], p[1]);
    return this;
  }

  CopyCaressesFrom(spe) {
    const esses = spe.Caresses();
    if (esses == null) {
      this.caresses = null;
      return this;
    }
    this.caresses = new Map();
    for (const c of esses.entries()) this.SetCaressFor(c[0], c[1]);
    return this;
  }

  AdoptParticulars(spe) {
    super.AdoptParticulars(spe);
    this.loc = spe.Loc().Dup();
    this.aim = spe.Aim().Dup();
    this.ovr = spe.Over().Dup();
    this.CopyPressuresFrom(spe);
    this.CopyCaressesFrom(spe);
    this.maes_and_hit = spe.MaesAndHit();
    return this;
  }

  InjectParticularsInto(spe) {
    super.InjectParticularsInto(spe);
    spe.loc = this.Loc().Dup();
    spe.aim = this.Aim().Dup();
    spe.ovr = this.Over().Dup();
    spe.CopyPressuresFrom(this);
    spe.CopyCaressesFrom(this);
    spe.maes_and_hit = this.MaesAndHit();
    return this;
  }

  Loc() {
    return this.loc;
  }
  SetLoc(l) {
    this.loc = l;
    return this;
  }

  Aim() {
    return this.aim;
  }
  SetAim(a) {
    this.aim = a;
    return this;
  }

  Over() {
    return this.ovr;
  }
  SetOver(o) {
    this.ovr = o;
    return this;
  }

  Pressures() {
    return this.pressures;
  }
  PressureFor(id) {
    if (this.pressures == null) return 0.0;
    const pr = this.pressures.get(id);
    return pr == undefined ? 0.0 : pr;
  }
  SetPressureFor(id, pr) {
    if (this.pressures == null) this.pressures = new Map();
    this.pressures.set(id, pr);
    return this;
  }

  Caresses() {
    return this.caresses;
  }
  CaressFor(id) {
    if (this.caresses == null) return 0.0;
    const cr = this.caresses.get(id);
    return cr == undefined ? 0.0 : cr;
  }
  SetCaressFor(id, cr) {
    if (this.caresses == null) this.caresses = new Map();
    this.caresses.set(id, cr);
    return this;
  }

  MaesAndHit() {
    return this.maes_and_hit == null ? null : this.maes_and_hit;
  }
  SetMaesAndHit(mah) {
    this.maes_and_hit = mah;
    return this;
  }

  ProfferAsQuaffTo(zbj) {
    return zbj.ZESpatial(this);
  }
}

// faux-interface creamy goodness:
ZESpatialEvent.Phage = (supah) =>
  class extends supah {
    ZESpatial(
      e // arg's an event
    ) {
      if (this.PassTheBuckUpPhageHierarchy()) return this.Ze(e);
      return -1;
    }
  };

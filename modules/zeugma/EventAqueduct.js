//
// (c) treadle & loam, provisioners llc
//

import { ZeColl } from "./ZeColl.js";
import { Zeubject } from "./Zeubject.js";

export class EventAqueduct extends Zeubject {
  //
  constructor() {
    super();
    this.phages = new Array();
    this.drams = new Array();
  }

  DrainReservoir() {
    for (const evt of this.drams) if (evt != null) this.FlowToPhages(evt);
    this.drams = new Array();
    return this;
  }

  FlowToPhages(e) {
    let urn = 0;
    for (const ph of this.phages)
      if (ph != null) if ((urn = e.ProfferAsQuaffTo(ph)) > 1) return urn;
    return 0;
  }

  //
  NumPhages() {
    return this.phages.length;
  }
  NthPhage(ind) {
    return ZeColl.Nth(this.phages, ind);
  }
  FindPhage(nm) {
    return ZeColl.FindByName(this.phages, nm);
  }
  IndexOfPhage(ph) {
    return ZeColl.IndexOf(this.phages, ph);
  }
  AppendPhage(ph) {
    return ZeColl.Append(this.phages, ph);
  }
  InsertPhage(ph, ind) {
    return ZeColl.Insert(this.phages, ph, ind);
  }
  RemovePhage(ph) {
    return ZeColl.Remove(this.phages, ph);
  }

  //
  NumDrams() {
    return this.drams.length;
  }
  NthDram(ind) {
    return ZeColl.Nth(this.drams, ind);
  }
  FindDram(nm) {
    return ZeColl.FindByName(this.drams, nm);
  }
  IndexOfDram(ev) {
    return ZeColl.IndexOf(this.drams, ev);
  }
  AppendDram(ev) {
    return ZeColl.Append(this.drams, ev);
  }
  InsertDram(ev, ind) {
    return ZeColl.Insert(this.drams, ev, ind);
  }
  RemoveDram(ev) {
    return ZeColl.Remove(this.drams, ev);
  }
}

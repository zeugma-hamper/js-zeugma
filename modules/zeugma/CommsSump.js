//
// (c) treadle & loam, provisioners llc
//

import { Zeubject } from "./Zeubject.js";

export class CommsSump extends Zeubject {
  //
  constructor() {
    super();
    this.rawex_by_address = new Map();
    this.synth_by_address = new Map();
    this.ducts_by_address = new Map();
  }

  _InMapForAddressSetThingy(mapp, addr, ding) {
    mapp.set(addr, ding);
    return true;
  }

  _InMapForAddressAppendThingy(mapp, addr, ding) {
    let arr = mapp.get(addr);
    if (arr == undefined) mapp.set(addr, (arr = new Array()));
    if (arr.indexOf(ding) >= 0) return false;
    arr.push(ding);
    return true;
  }

  ForAddressAppendRawExtractor(addr, rawex) {
    const urn = this._InMapForAddressSetThingy(
      this.rawex_by_address,
      addr,
      rawex
    );
    return urn;
  }

  ForAddressAppendSynthFunc(addr, funq) {
    const urn = this._InMapForAddressSetThingy(
      this.synth_by_address,
      addr,
      funq
    );
    return urn;
  }

  ForAddressAppendAqueduct(addr, duct) {
    const urn = this._InMapForAddressAppendThingy(
      this.ducts_by_address,
      addr,
      duct
    );
    return urn;
  }

  RawExtractionViaAddress(addr, payload) {
    const rawex = this.rawex_by_address.get(addr);
    if (rawex != null) return rawex(payload);
    return payload;
  }

  SynthesizeEventsViaAddress(addr, argarr) {
    const synther = this.synth_by_address.get(addr);
    if (synther != null) return synther(argarr);
    return [];
  }

  DispatchEventViaAddress(addr, e) {
    const ductarr = this.ducts_by_address.get(addr);
    if (ductarr != null) for (const duct of ductarr) duct.AppendDram(e);
    return this;
  }

  // for subclasses to be the implenting of. da.
  ProcessSump() {
    throw new Error("ProcessSump() -- implement in subclass, please.");
  }
  AttendToIncoming() {
    throw new Error("AttendToIncoming() -- implement in subclass, please.");
  }
  SuspendAttention() {
    throw new Error("SuspendAttention() -- implement in subclass, please.");
  }
}

//
// (c) treadle & loam, provisioners llc
//

import { ZESpatialEvent } from "./ZESpatialEvent.js";

export class ZESpatialVanishEvent extends ZESpatialEvent {
  //
  constructor(pr) {
    super(pr);
  }

  EventIlk() {
    return "ZESpatialVanishEvent";
  }

  ProfferAsQuaffTo(zbj) {
    return zbj.ZESpatialVanish(this);
  }
}

// faux-interface excitement:
ZESpatialVanishEvent.Phage = (supah) =>
  class extends supah {
    ZESpatialVanish(
      e // arg's an event
    ) {
      if (this.PassTheBuckUpPhageHierarchy()) return this.ZESpatial(e);
      return -1;
    }
  };

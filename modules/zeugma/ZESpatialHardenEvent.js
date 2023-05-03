//
// (c) treadle & loam, provisioners llc
//

import { ZESpatialPressureEvent } from "./ZESpatialPressureEvent.js";

export class ZESpatialHardenEvent extends ZESpatialPressureEvent {
  //
  constructor(pr) {
    super(pr);
  }

  EventIlk() {
    return "ZESpatialHardenEvent";
  }

  ProfferAsQuaffTo(zbj) {
    return zbj.ZESpatialHarden(this);
  }
}

// well, it simply had to be faux-interface:
ZESpatialHardenEvent.Phage = (supah) =>
  class extends supah {
    ZESpatialHarden(
      e // arg's an event
    ) {
      if (this.PassTheBuckUpPhageHierarchy()) return this.ZESpatialPressure(e);
      return -1;
    }
  };

//
// (c) treadle & loam, provisioners llc
//

import { CommsSump } from "./CommsSump.js";
import { OSCFaker } from "./OSCFaker.js";

export class OSCSump extends CommsSump {
  //
  constructor() {
    super();
    this.oscerizer = new OSCFaker();
    this.port = -1;
  }

  Port() {
    return this.port;
  }
  SetPort(pint) {
    this.port = pint;
  }

  // note that all OSCish transactions below are essentially pseudocode,
  // pending selection and grafting of some particular OSC library.

  Oscerizer() {
    return this.oscerizer;
  }

  AttendToIncoming() {
    this.oscerizer.ReceiveContinuously();
    return this;
  }

  SuspendAttention() {
    this.oscerizer.PauseReception();
    return this;
  }

  ProcessSump() {
    if (this.oscerizer == null) return this;
    let cnt = this.oscerizer.MessageCount();
    while (cnt-- >= 0 && this.oscerizer.HasMessage()) {
      const mess = this.oscerizer.NextMessage();
      const addr = mess.Address();
      const args = this.RawExtractionViaAddress(addr, mess.Payload());
      const evts = this.SynthesizeEventsViaAddress(addr, args);
      for (const e of evts) this.DispatchEventViaAddress(addr, e);
    }
    return this;
  }
}

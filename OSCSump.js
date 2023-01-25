
//
// (c) treadle & loam, provisioners llc
//


import { CommsSump } from "./CommsSump.js"


export class OSCSump  extends CommsSump
{ //
  constructor ()
    { super ();
      this.oscerizer = null;
      this.port = -1;
    }

  Port ()
    { return this.port; }
  SetPort (pint)
    { this.port = pint; }

// note that all OSCish transactions below are essentially pseudocode,
// pending selection and grafting of some particular OSC library.
  AttendToIncoming ()
    { this.oscerizer . ReceiveContinuously ();
      return this;
    }

  SuspendAttention ()
    { this.oscerizer . PauseReception ();
      return this;
    }

  ProcessSump ()
    { if (this.oscerizer == null)
        return this;
      let cnt = this.oscerizer . MessageCount ();
      while (cnt-- >= 0  &&  this.oscerizer . HasMessage ())
        { let mess = this.oscerizer . NextMessage ();
          let addr = mess . Address ();
          let args = this . RawExtractionViaAddress (addr, mess . Payload ());
          let evts = this . SynthesizeEventViaAddress (addr, args);
          for (let e of evts)
            this . DispatchEventViaAddress (addr, e);
        }
      return this;
    }
}

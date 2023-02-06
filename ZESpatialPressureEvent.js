
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialEvent } from "./ZESpatialEvent.js";


export class ZESpatialPressureEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr);
      this.prs_id = -1;
      this.prs_val = 0.0;
    }

  EventIlk ()
    { return "ZESpatialPressureEvent"; }

  AdoptParticulars (spe)
    { super.AdoptParticulars (spe);
      this.SetWhichPressor (spe.prs_id);
      this.SetPressureValue (spe.prs_val);
      return this;
    }

  InjectParticularsInto (spe)
    { super.InjectParticularsInto (spe);
      spe.SetWhichPressor (this.prs_id);
      spe.SetPressureValue (this.prs_val);
      return this;
    }

  WhichPressor ()
    { return this.prs_id; }
  SetWhichPressor (pid)
    { this.prs_id = pid;  return this; }

  PressureValue ()
    { return this.prs_val; }
  SetPressureValue (pvl)  // a scalar here, is what one should.
    { this.prs_val = pvl;  return this; }

  SetPressorIDAndPressureValue (pid, pvl)
    { this.prs_id = pid;
      this.prs_val = pvl;
      return this;
    }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZESpatialPressure (this); }
}


// what's that you say? ah -- faux-interface:
ZESpatialPressureEvent.Phage = (supah) => class extends supah
{ ZESpatialPressure (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatial (e);
      return -1;
    }
}


//
// (c) treadle & loam, provisioners llc
//


import { Vect } from "./Vect.js";
import { Zeubject } from "./Zeubject.js";


class NonEvent  extends Zeubject
{ //
  constructor ()
    { super (); }
  EventIlk ()
    { return ""; }
}


export class ZeEvent  extends NonEvent
{ //
  constructor (pr)
    { super ();
      this.prov = pr;
      this.tstamp = -1.0;
      // this.tratch = -1;  // use Zeubject's rat_fresh, no?
      this.fore_evt = null;
	}

  AdoptParticulars (otha)
    { this.prov = (otha.prov == null)  ?  null  :  new String (otha.prov);
      this.tstamp = otha.tstamp;
      this.rat_fresh = otha.rat_fresh;
      this.fore_evt = otha.fore_evt;
      return this;
    }

  Provenance ()
    { return this.prov; }
  SetProvenance (pr)
    { this.prov = pr;  return this; }

  Timestamp ()
    { return this.tstamp; }
  SetTimestamp (ts)
    { this.tstamp = ts;  return this; }

  TimeRatchet ()
    { return this.rat_fresh; }
  SetTimeRatchet (tr)
    { this.rat_fresh = tr;  return this; }

  ForebearEvent ()
    { return this.fore_evt; }
  SetForebearEvent (fe)
    { this.fore_evt = fe;  return this; }

  EventIlk ()
    { return "ZeEvent"; }
  EventSuperIlk ()
    { return super . EventIlk (); }


  ProfferAsQuaffTo (zbj)
    { return zbj . Ze (this); }
}


// nota bene the faux-interface pattern hereinafter:
ZeEvent.Phage = (supah) => class extends supah
{ Ze (e)  // arg's an event
    { return -1; }
  PassTheBuckUpPhageHierarchy ()
    { return false; }
}

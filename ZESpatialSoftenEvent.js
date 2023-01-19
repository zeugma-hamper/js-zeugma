
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialPressureEvent } from "./ZESpatialPressureEvent.js";


export class ZESpatialSoftenEvent  extends ZESpatialPressureEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialSoftenEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialSoften (this); }
}


// the right faux-interface for the right occasion:
ZESpatialSoftenEvent.Phage = (supah) => class extends supah
{ ZESpatialSoften (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatialPressure (e);
      return -1;
    }
}

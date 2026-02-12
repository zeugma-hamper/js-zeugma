
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialCaressBaseEvent } from "./ZESpatialCaressBaseEvent.js";


export class ZESpatialCaressEvent  extends ZESpatialCaressBaseEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialCaressEvent"; }


  ProfferAsQuaffTo (zbj)
    { return (zbj ?. ZESpatialCaress ?. (this))  ??  0; }
}


// just in the nick of time, faux-interface:
ZESpatialCaressEvent.Phage = (supah) => class extends supah
{ ZESpatialCaress (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatialCaressBase (e);
      return -1;
    }
};

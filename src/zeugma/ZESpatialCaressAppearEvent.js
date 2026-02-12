
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialCaressBaseEvent } from "./ZESpatialCaressBaseEvent.js";


export class ZESpatialCaressAppearEvent  extends ZESpatialCaressBaseEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialCaressAppearEvent"; }


  ProfferAsQuaffTo (zbj)
    { return (zbj ?. ZESpatialCaressAppear ?. (this))  ??  0; }
}


// just in the nick of time, faux-interface:
ZESpatialCaressAppearEvent.Phage = (supah) => class extends supah
{ ZESpatialCaressAppear (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatialCaressBase (e);
      return -1;
    }
};

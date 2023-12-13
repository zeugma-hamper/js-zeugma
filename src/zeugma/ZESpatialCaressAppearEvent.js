
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialCaressEvent } from "./ZESpatialCaressEvent.js";


export class ZESpatialCaressAppearEvent  extends ZESpatialCaressEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialCaressAppearEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZESpatialCaressAppear (this); }
}


// just in the nick of time, faux-interface:
ZESpatialCaressAppearEvent.Phage = (supah) => class extends supah
{ ZESpatialCaressAppear (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatial (e);
      return -1;
    }
};

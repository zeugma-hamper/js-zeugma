
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialEvent } from "./ZESpatialEvent.js";


export class ZESpatialAppearEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialAppearEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialAppear (this); }
}


// the thrilling glint of faux-interface:
ZESpatialAppearEvent.Phage = (supah) => class extends supah
{ ZESpatialAppear (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatial (e);
      return -1;
    }
}

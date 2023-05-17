
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialEvent } from "./ZESpatialEvent.js";


export class ZESpatialMoveEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialMoveEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZESpatialMove (this); }
}


// faux-interface, now more than ever:
ZESpatialMoveEvent.Phage = (supah) => class extends supah
{ ZESpatialMove (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatial (e);
      return -1;
    }
};

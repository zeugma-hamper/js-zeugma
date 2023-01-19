
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialPressureEvent } from "./ZESpatialPressureEvent.js";


export class ZESpatialHardenEvent  extends ZESpatialPressureEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialHardenEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialHarden (this); }
}

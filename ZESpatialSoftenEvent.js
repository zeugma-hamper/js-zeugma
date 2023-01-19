
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

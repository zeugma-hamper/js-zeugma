
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
    { return zbj . ZeSpatialMove (this); }
}

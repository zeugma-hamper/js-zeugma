
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialEvent } from "./ZESpatialEvent.js";


export class ZESpatialVanishEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialVanishEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialVanish (this); }
}

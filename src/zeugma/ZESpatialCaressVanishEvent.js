
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialCaressEvent } from "./ZESpatialCaressEvent.js";


export class ZESpatialCaressVanishEvent  extends ZESpatialCaressEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialCaressVanishEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZESpatialCaressVanish (this); }
}


// just in the nick of time, faux-interface:
ZESpatialCaressVanishEvent.Phage = (supah) => class extends supah
{ ZESpatialCaressVanish (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatial (e);
      return -1;
    }
};

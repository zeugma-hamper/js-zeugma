
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialCaressBaseEvent } from "./ZESpatialCaressBaseEvent.js";


export class ZESpatialCaressVanishEvent  extends ZESpatialCaressBaseEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialCaressVanishEvent"; }


  ProfferAsQuaffTo (zbj)
    { return (zbj ?. ZESpatialCaressVanish ?. (this))  ??  0; }
}


// just in the nick of time, faux-interface:
ZESpatialCaressVanishEvent.Phage = (supah) => class extends supah
{ ZESpatialCaressVanish (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatialCaressBase (e);
      return -1;
    }
};

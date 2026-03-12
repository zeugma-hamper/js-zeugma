
//
// (c) treadle & loam, provisioners llc
//


import { ZEYowlEvent } from "./ZEYowlEvent.js";



export class ZEYowlVanishEvent  extends ZEYowlEvent
{ //
  constructor (pr, ustr = "")
    { super (pr, ustr); }


  ProfferAsQuaffTo (zbj)
    { return (zbj ?. ZEYowlVanish ?. (this))  ??  0; }
}


// faux-interface spectacularness:
ZEYowlVanishEvent.Phage = (supah) => class extends supah
{ ZEYowlVanish (e)
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZeYowl (e);
      return -1;
    }
};


//
// (c) treadle & loam, provisioners llc
//


import { ZEYowlEvent } from "./ZEYowlEvent.js";



export class ZEYowlAppearEvent  extends ZEYowlEvent
{ //
  constructor (pr, ustr = "")
    { super (pr, ustr); }


  ProfferAsQuaffTo (zbj)
    { return (zbj ?. ZEYowlAppear ?. (this))  ??  0; }
}


// faux-interface spectacularness:
ZEYowlAppearEvent.Phage = (supah) => class extends supah
{ ZEYowlAppear (e)
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZeYowl (e);
      return -1;
    }
};

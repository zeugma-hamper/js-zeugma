
//
// (c) treadle & loam, provisioners llc
//


import { ZeEvent } from "./ZeEvent.js";



export class ZEYowlEvent  extends ZeEvent
{ //
  constructor (pr, ustr = "", rep = 0)
    { super (pr);
      this.utt = ustr;   // utterance
      this.rept_ord = rep;
      this.assoc_spev = null;
    }


  Utterance ()
    { return this.utt; }
  SetUtterance (ance)
    { this.utt = ance;  return this; }

  RepeatOrdinal ()
    { return this.rept_ord; }
  SetRepeatOrdinal (ro)
    { this.rept_ord = ro;  return this; }


  AssociatedSpatialEvent ()
    { return this.assoc_spev; }
  SetAssociatedSpatialEvent (ase)
    { this.assoc_spev = ase;  return this; }


  ProfferAsQuaffTo (zbj)
    { return (zbj ?. ZEYowl ?. (this))  ??  0; }
}


// faux-interface spectacularness:
ZEYowlEvent.Phage = (supah) => class extends supah
{ ZEYowl (e)
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.Ze (e);
      return -1;
    }
};

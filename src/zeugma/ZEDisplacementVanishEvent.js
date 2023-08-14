
//
// (c) treadle & loam, provisioners llc
//


import { ZEDisplacementEvent } from "./ZEDisplacementEvent.js";


export class ZEDisplacementVanishEvent  extends ZEDisplacementEvent
{ //
  constructor (pr)
    { super (pr);

    }

  EventIlk ()
    { return "ZEDisplacementVanishEvent"; }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZEDisplacementVanish (this); }
}

// lip-smacking faux-interface delight
ZEDisplacementVanishEvent.Phage = (supah) => class extends supah
{ ZEDisplacementVanish (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZEDisplacement (e);
      return -1;
    }
};


//
// (c) treadle & loam, provisioners llc
//


import { ZEDisplacementEvent } from "./ZEDisplacementEvent.js";


export class ZEDisplacementAppearEvent  extends ZEDisplacementEvent
{ //
  constructor (pr)
    { super (pr);

    }

  EventIlk ()
    { return "ZEDisplacementAppearEvent"; }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZEDisplacementAppear (this); }
}

// lip-smacking faux-interface delight
ZEDisplacementAppearEvent.Phage = (supah) => class extends supah
{ ZEDisplacementAppear (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZEDisplacement (e);
      return -1;
    }
};

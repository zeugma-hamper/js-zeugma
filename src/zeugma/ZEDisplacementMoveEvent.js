
//
// (c) treadle & loam, provisioners llc
//


import { ZEDisplacementEvent } from "./ZEDisplacementEvent.js";


export class ZEDisplacementMoveEvent  extends ZEDisplacementEvent
{ //
  constructor (pr)
    { super (pr);

    }

  EventIlk ()
    { return "ZEDisplacementMoveEvent"; }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZEDisplacementMove (this); }
}

// lip-smacking faux-interface delight
ZEDisplacementMoveEvent.Phage = (supah) => class extends supah
{ ZEDisplacementMove (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZEDisplacement (e);
      return -1;
    }
};

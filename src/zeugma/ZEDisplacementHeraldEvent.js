
//
// (c) treadle & loam, provisioners llc
//


import { ZEDisplacementEvent } from "./ZEDisplacementEvent.js";


export class ZEDisplacementHeraldEvent  extends ZEDisplacementEvent
{ //
  constructor (pr)
    { super (pr);

    }

  EventIlk ()
    { return "ZEDisplacementHeraldEvent"; }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZEDisplacementHerald (this); }
}

// lip-smacking faux-interface delight
ZEDisplacementHeraldEvent.Phage = (supah) => class extends supah
{ ZEDisplacementHerald (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZEDisplacement (e);
      return -1;
    }
};

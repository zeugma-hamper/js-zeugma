
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js"

import { IContainMultitudes } from "./IContainMultitudes.js"


export class Zeubject
       extends base_class (Object) . and_interfaces (IContainMultitudes)
{ //
  constructor ()
    { super ();
      this.rat_fresh = -1;
    }

  IsZeugmallyLimnable ()
    { return false; }
  IsZeugmallyPouchful ()
    { return false; }


  Name ()
    { return (this.name == null)  ?  ""  :  this.name; }
  SetName (nm)
    { this.name = nm;  return this; }

  Breather ()
    { return this.irlu; }
  SetBreather (lung)
    { this.irlu = lung;  return this; }


  OughtToInhale (ratch)
    { if (ratch < 0)
        return true;
      if (this.rat_fresh >= ratch)
        return false;
      this.rat_fresh = ratch;
      return true;
    }

  Inhale (ratch, thyme)
    { return 0; }

  Travail (ratch, thyme)
    { return 0; }
//
}

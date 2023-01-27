
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js"

import { PouchyThing } from "./PouchyThing.js"
import { Limnable } from "./Limnable.js"


export class LimnyThing
       extends base_class (PouchyThing) . and_interfaces (Limnable)
{ //
  static breather_of_record = null;
  static BreatherOfRecord ()
    { return this.breather_of_record; }
  static SetBreatherOfRecord (lung)
    { this.breather_of_record = lung; }

  //
  constructor ()
    { super ();
      this.limn_flags = 0;
      this.cumu_mats = null;
      this.adj_iro = null;
      this.cumu_adjc = null;
    }

  CurrentCumuMats ()
    { return this.cumu_mats; }
  DependCumuMatsFrom (cm_above)
    { return (this.cumu_mats = cm_above); }
}

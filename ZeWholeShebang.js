
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { Loopervisor } from "./Loopervisor.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js"
import { RecursiveLimner } from "./RecursiveLimner.js"

import { base_class } from "./interface-ersatzer.js";


export class ZeWholeShebang  extends base_class (Zeubject)
                           . and_interfaces (ZESpatialPhagy, RecursiveLimner)
{ //
  constructor ()
    { super ();
      //
      this.looper = new Loopervisor ();
      this.maeses = new Array ();
      this.auto_attend = true;
    }


  Loopervisor ()
    { return this.looper; }


  Maeses ()
    { return this.maeses; }

  NumMaeses ()
    { return this.maeses.length; }
  NthMaes (ind)
    { return Zeubject.CollNth (this.maeses, ind); }
  AppendMaes (ma)
    { return Zeubject.CollAppend (this.maeses, ma); }
}

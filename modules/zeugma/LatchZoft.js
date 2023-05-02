
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js"

import { LatchZoftGuts } from "./LatchZoftGuts.js"


export class LatchZoft  extends Zoft
{ //
  static NewWith (plain_val)
    { let z = Zoft._PrivateNew ();
      let g = new LatchZoftGuts (plain_val);
      z . _SetGuts (g);
      z . _SetVal (plain_val);
      return z;
    }
}

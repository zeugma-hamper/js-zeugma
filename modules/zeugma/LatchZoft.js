//
// (c) treadle & loam, provisioners llc
//

import { LatchZoftGuts } from "./LatchZoftGuts.js";
import { Zoft } from "./Zoft.js";

export class LatchZoft extends Zoft {
  //
  static NewWith(plain_val) {
    const z = Zoft._PrivateNew();
    const g = new LatchZoftGuts(plain_val);
    z._SetGuts(g);
    z._SetVal(plain_val);
    return z;
  }
}

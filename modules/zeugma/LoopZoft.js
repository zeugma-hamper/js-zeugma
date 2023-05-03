//
// (c) treadle & loam, provisioners llc
//

import { LoopZoftGuts } from "./LoopZoftGuts.js";
import { Zoft } from "./Zoft.js";

export class LoopZoft extends Zoft {
  //
  static NewWith(strt, dxdt, ldur) {
    const z = Zoft._PrivateNew();
    const g = new LoopZoftGuts();
    g._InstallStartZoft(Zoft.NewWith(strt));
    g._InstallDXDTZoft(Zoft.NewWith(dxdt));
    g._InstallLoopDurZoft(Zoft.NewWith(ldur));
    z._SetGuts(g);
    return z;
  }
}

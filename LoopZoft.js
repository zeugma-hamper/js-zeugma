
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js"

import { LoopZoftGuts } from "./LoopZoftGuts.js"


export class LoopZoft  extends Zoft
{ //
  static NewWith (strt, dxdt, ldur)
    { let z = Zoft._PrivateNew ();
      let g = new LoopZoftGuts ();
      g . _InstallStartZoft (Zoft.NewWith (strt));
      g . _InstallDXDTZoft (Zoft.NewWith (dxdt));
      g . _InstallLoopDurZoft (Zoft.NewWith (ldur));
      z . _SetGuts (g);
      return z;
    }
}

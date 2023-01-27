
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
      g . _InstallSummandAZoft (Zoft.NewWith (a));
      g . _InstallSummandBZoft (Zoft.NewWith (b));
      z . _SetGuts (g);
      return z;
    }
}

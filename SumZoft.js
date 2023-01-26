
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js"

import { SumZoftGuts } from "./SumZoftGuts.js"


export class SumZoft  extends Zoft
{ //
  static NewWith (a, b)
    { let z = Zoft._PrivateNew ();
      let g = new SumZoftGuts ();
      g . _InstallSummandAZoft (Zoft.NewWith (a));
      g . _InstallSummandBZoft (Zoft.NewWith (b));
      z . _SetGuts (g);
      return z;
    }
}


//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js"

import { DiffZoftGuts } from "./DiffZoftGuts.js"


export class DiffZoft  extends Zoft
{ //
  static NewWith (a, b)
    { const z = Zoft._PrivateNew ();
      const g = new DiffZoftGuts ();
      g . _InstallMinuendZoft (Zoft.NewWith (a));
      g . _InstallSubtrahendZoft (Zoft.NewWith (b));
      z . _SetGuts (g);
      return z;
    }
}

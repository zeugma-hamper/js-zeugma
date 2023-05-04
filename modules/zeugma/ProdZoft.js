
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js";

import { ProdZoftGuts } from "./ProdZoftGuts.js";


export class ProdZoft  extends Zoft
{ //
  static NewWith (a, b)
    { const z = Zoft._PrivateNew ();
      const g = new ProdZoftGuts ();
      g . _InstallMultiplicandZoft (Zoft.NewWith (a));
      g . _InstallMultiplierZoft (Zoft.NewWith (b));
      z . _SetGuts (g);
      return z;
    }
}

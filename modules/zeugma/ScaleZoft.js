
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js";
import { ScaleZoftGuts } from "./ScaleZoftGuts.js";


export class ScaleZoft  extends Zoft
{ //
  static NewWith (a, b)
    { const z = Zoft._PrivateNew ();
      const g = new ScaleZoftGuts ();
      g . _InstallScaleeZoft (Zoft.NewWith (a));
      g . _InstallScalerZoft (Zoft.NewWith (b));
      z . _SetGuts (g);
      return z;
    }
}

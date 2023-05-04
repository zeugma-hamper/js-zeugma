
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js";

import { InterpZoftGuts } from "./InterpZoftGuts.js";


export class InterpZoft  extends Zoft
{ //
  static NewWith (a, b)
    { const z = Zoft._PrivateNew ();
      const g = new InterpZoftGuts ();
      g . _InstallPointAZoft (Zoft.NewWith (a));
      g . _InstallPointBZoft (Zoft.NewWith (b));
      z . _SetGuts (g);
      return z;
    }

//
///
//

  static JANUSIZE = (t, fl, fr) => (t < 0.5) ? 0.5 * fl (2.0 * t) : 0.5 * fr (2.0 * t - 1.0);
  static ASYMP_A = (t) => Math.exp (-7.62462 * (1.0 - t));
  static ASYMP_B = (t) => 1.0 - Math.exp (-7.62462 * t);

}

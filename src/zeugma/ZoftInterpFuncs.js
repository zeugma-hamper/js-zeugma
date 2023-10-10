
//
// (c) treadle & loam, provisioners llc
//


export class ZoftInterpFuncs
{ //
  static JANUSIZE (t, fl, fr)  { return ((t < 0.5)
                                         ?  0.5 * fl (2.0 * t)
                                         :  0.5  +  0.5 * fr (2.0 * t - 1.0));
                               }

  static LINEAR (t)  { return t; }

  static ASYMP_A (t)  { return Math.exp (-7.62462 * (1.0 - t)); }
  static ASYMP_B (t)  { return (1.0 - Math.exp (-7.62462 * t)); }
  static ASYMP_AB (t)
    { return ZoftInterpFuncs.JANUSIZE (t, ZoftInterpFuncs.ASYMP_A,
                                       ZoftInterpFuncs.ASYMP_B);
    }
  static ASYMP (t)  { return ZoftInterpFuncs.ASYMP_B (t); }

  static QUADRATIC_A (t)  { return (t * t); }
  static QUADRATIC_B (t)  { return (t * (2.0 - t)); }
  static QUADRATIC_AB (t)
    { return ZoftInterpFuncs.JANUSIZE (t, ZoftInterpFuncs.QUADRATIC_A,
                                       ZoftInterpFuncs.QUADRATIC_B);
    }
  static QUADRATIC (t)  { return ZoftInterpFuncs.QUADRATIC_B (t); }

  static CUBIC_A (t)  { return (t * t * t); }
  static CUBIC_B (t)  { return (t * (3.0 - (t * (3.0 - t)))); }
  static CUBIC_AB (t)
    { return ZoftInterpFuncs.JANUSIZE (t, ZoftInterpFuncs.CUBIC_A,
                                       ZoftInterpFuncs.CUBIC_B);
    }
  static CUBIC (t)  { return ZoftInterpFuncs.CUBIC_B (t); }
}

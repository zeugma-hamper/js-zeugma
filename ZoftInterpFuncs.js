
//
// (c) treadle & loam, provisioners llc
//


export class ZoftInterpFuncs
{ //
  static JANUSIZE = (t, fl, fr) => ((t < 0.5)
                                    ?  0.5 * fl (2.0 * t)
                                    :  0.5  +  0.5 * fr (2.0 * t - 1.0));

  static LINEAR = (t) => t;

  static ASYMP_A = (t) => Math.exp (-7.62462 * (1.0 - t));
  static ASYMP_B = (t) => 1.0 - Math.exp (-7.62462 * t);
  static ASYMP_AB = (t) => this.JANUSIZE (t, this.ASYMP_A, this.ASYMP_B);
  static ASYMP = this.ASYMP_B;

  static QUADRATIC_A = (t) => t * t;
  static QUADRATIC_B = (t) => t * (2.0 - t);
  static QUADRATIC_AB
    = (t) => this.JANUSIZE (t, this.QUADRATIC_A, this.QUADRATIC_B);
  static QUADRATIC = this.QUADRATIC_B;

  static CUBIC_A = (t) => t * t * t;
  static CUBIC_B = (t) => t * (3.0 - (t * (3.0 - t)));
  static CUBIC_AB = (t) => this.JANUSIZE (t, this.CUBIC_A, this.CUBIC_B);
  static CUBIC = this.CUBIC_B;
}

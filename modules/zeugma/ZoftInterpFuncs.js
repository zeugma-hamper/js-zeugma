//
// (c) treadle & loam, provisioners llc
//

export class ZoftInterpFuncs {
  //
  static JANUSIZE(t, fl, fr) {
    return t < 0.5 ? 0.5 * fl(2.0 * t) : 0.5 + 0.5 * fr(2.0 * t - 1.0);
  }

  static LINEAR(t) {
    return t;
  }

  static ASYMP_A(t) {
    Math.exp(-7.62462 * (1.0 - t));
  }
  static ASYMP_B(t) {
    return 1.0 - Math.exp(-7.62462 * t);
  }
  static ASYMP_AB(t) {
    return this.JANUSIZE(t, this.ASYMP_A, this.ASYMP_B);
  }
  static ASYMP(t) {
    return this.ASYMP_B(t);
  }

  static QUADRATIC_A(t) {
    return t * t;
  }
  static QUADRATIC_B(t) {
    return t * (2.0 - t);
  }
  static QUADRATIC_AB(t) {
    return this.JANUSIZE(t, this.QUADRATIC_A, this.QUADRATIC_B);
  }
  static QUADRATIC(t) {
    return this.QUADRATIC_B(t);
  }

  static CUBIC_A(t) {
    return t * t * t;
  }
  static CUBIC_B(t) {
    return t * (3.0 - t * (3.0 - t));
  }
  static CUBIC_AB(t) {
    return this.JANUSIZE(t, this.CUBIC_A, this.CUBIC_B);
  }
  static CUBIC(t) {
    return this.CUBIC_B(t);
  }
}

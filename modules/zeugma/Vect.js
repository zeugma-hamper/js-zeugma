//
// (c) treadle & loam, provisioners llc
//

export class Vect {
  //
  constructor(eks, wye, zee) {
    this.x = eks;
    this.y = wye;
    this.z = zee;
  }

  X() {
    return this.x;
  }
  Y() {
    return this.y;
  }
  Z() {
    return this.z;
  }

  Val() {
    return this;
  }

  Dup() {
    return new Vect(this.x, this.y, this.z);
  }

  Set(eks, wye, zee) {
    this.x = eks;
    this.y = wye;
    this.z = zee;
    return this;
  }

  Dot(v) {
    return v.x * this.x + v.y * this.y + v.z * this.z;
  }
  AutoDot() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  Mag() {
    return Math.sqrt(this.AutoDot());
  }

  Cross(v) {
    return new Vect(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  Neg() {
    return new Vect(-this.x, -this.y, -this.z);
  }
  NegSelf() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  Add(v) {
    return new Vect(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  AddAcc(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  Sub(v) {
    return new Vect(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  SubAcc(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  // the below used to be 'Mul()' and 'MulAcc()', but until we get
  // geometric algebra going that'd've been inaccurate naming. A vas
  // deferens between the idea of scaling and that of multiplication, see.
  Sca(sca) {
    return new Vect(this.x * sca, this.y * sca, this.z * sca);
  }
  ScaAcc(sca) {
    this.x *= sca;
    this.y *= sca;
    this.z *= sca;
    return this;
  }

  // similarly below... except that maybe we'll just nix the whole thing.
  // Div (sca)
  //   { return new Vect (this.x / sca, this.y / sca, this.z / sca)}
  // DivAcc (sca)
  //   { this.x /= sca;  this.y /= sca;  this.z /= sca;  return this; }

  DistFrom(p) {
    return Math.sqrt(this.Sub(p).AutoDot());
  }

  IsZero() {
    return this.x == 0.0 && this.y == 0.0 && this.z == 0.0;
  }
  Zero() {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    return this;
  }

  Norm() {
    let s = this.Mag();
    if (s == 0.0) return this;
    s = 1.0 / s;
    return this.Sca(s);
  }
  NormSelf() {
    let s = this.Mag();
    if (s == 0.0) return this;
    s = 1.0 / s;
    return this.ScaAcc(s);
  }
  NormSelfReturningMag() {
    const s = this.Mag();
    if (s != 0.0) this.ScaAcc(1.0 / s);
    return s;
  }

  AngleWith(v) {
    return Math.acos(this.Norm().Dot(v.Norm()));
  }
  DegAngleWith(v) {
    return (180.0 / Math.PI) * Math.acos(this.Norm().Dot(v.Norm()));
  }

  //
  /// reflections
  //
  ReflectInPlane(pl_nrml, cntr = null) {
    if (cntr == null) {
      return this.Sub(pl_nrml.Sca(2.0 * this.Dot(pl_nrml)));
    } else {
      const p = this.Sub(cntr);
      return cntr.Add(p.Sub(pl_nrml.Sca(2.0 * p.Dot(pl_nrml))));
    }
  }

  ReflectInPlaneUnnormed(pl_nrml, cntr = null) {
    return this.ReflectInPlane(pl_nrml.Norm(), cntr);
  }

  ReflectSelfInPlane(pl_nrml, cntr = null) {
    return Set(this.ReflectInPlane(pl_nrml, cntr));
  }

  ReflectSelfInPlaneUnnormed(pl_nrml, cntr = null) {
    return Set(this.ReflectInPlane(pl_nrml.Norm(), cntr));
  }

  //
  /// projection, rejection.
  //

  ProjectOnto(n) {
    return n.Sca(n.Dot(this));
  }
  ProjectOntoUnnormed(nun) {
    const n = nun.Norm();
    return n.Sca(n.Dot(this));
  }

  RejectFrom(n) {
    return this.Sub(n.Sca(n.Dot(this)));
  }
  RejectFromUnnormed(nun) {
    const n = nun.Norm();
    return this.Sub(n.Sca(n.Dot(this)));
  }

  //
  /// rotations
  //
  RotateSelfPreNormed(axis, rad_ang) {
    if (axis.IsZero()) return this;
    const a = axis;

    const co = Math.cos(rad_ang);
    const si = Math.sin(rad_ang);
    const omc = 1.0 - co;

    const m00 = co + a.x * a.x * omc;
    const m11 = co + a.y * a.y * omc;
    const m22 = co + a.z * a.z * omc;

    let t1 = a.x * a.y * omc;
    let t2 = a.z * si;
    const m10 = t1 - t2;
    const m01 = t1 + t2;

    t1 = a.x * a.z * omc;
    t2 = a.y * si;
    const m20 = t1 - t2;
    const m02 = t1 + t2;

    t1 = a.y * a.z * omc;
    t2 = a.x * si;
    const m21 = t1 - t2;
    const m12 = t1 + t2;

    t1 = m00 * this.x + m10 * this.y + m20 * this.z;
    t2 = m01 * this.x + m11 * this.y + m21 * this.z;
    const t3 = m02 * this.x + m12 * this.y + m22 * this.z;

    return Set(t1, t2, t3);
  }
  RotateSelf(axis, rad_ang) {
    return this.RotateSelfPreNormed(axis.Norm(), rad_ang);
  }

  RotatePreNormed(axis, rad_ang) {
    const out = this.Dup();
    return out.RotateSelfPreNormed(axis, rad_ang);
  }
  Rotate(axis, rad_ang) {
    const out = this.Dup();
    return out.RotateSelf(axis, rad_ang);
  }

  RotateAbout(axis, rad_ang, cent) {
    return cent.Add(this.Sub(cent).Rotate(axis, rad_ang));
  }
  RotateSelfAbout(axis, rad_ang, cent) {
    this.SubAcc(cent);
    this.RotateSelf(axis, rad_ang);
    return this.AddAcc(cent);
  }

  RotateAboutPreNormed(axis, rad_ang, cent) {
    return cent.Add(this.Sub(cent).RotatePreNormed(axis, rad_ang));
  }
  RotateSelfAboutPreNormed(axis, rad_ang, cent) {
    this.SubAcc(cent);
    this.RotateSelfPreNormed(axis, rad_ang);
    return this.AddAcc(cent);
  }

  //
  static NewFromArr(arr) {
    return new Vect(arr[0], arr[1], arr[2]);
  }

  //
  ///
  //
  static get zerov() {
    return new Vect(0.0, 0.0, 0.0);
  }
  static get onesv() {
    return new Vect(1.0, 1.0, 1.0);
  }

  static get xaxis() {
    return new Vect(1.0, 0.0, 0.0);
  }
  static get yaxis() {
    return new Vect(0.0, 1.0, 0.0);
  }
  static get zaxis() {
    return new Vect(0.0, 0.0, 1.0);
  }

  static get negxaxis() {
    return new Vect(-1.0, 0.0, 0.0);
  }
  static get negyaxis() {
    return new Vect(0.0, -1.0, 0.0);
  }
  static get negzaxis() {
    return new Vect(0.0, 0.0, -1.0);
  }
}

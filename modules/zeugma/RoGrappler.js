//
// (c) treadle & loam, provisioners llc
//

import { Grappler } from "./Grappler.js";
import { Matrix44 } from "./Matrix44.js";
import { Vect } from "./Vect.js";
import { Zoft } from "./Zoft.js";

export class RoGrappler extends Grappler {
  //
  constructor() {
    super();
    this.pm = new Matrix44();
    this.ipm = new Matrix44();
    this.nm = new Matrix44();
    this.inm = new Matrix44();

    this.z_axis = Zoft.NewWith(Vect.zaxis);
    this.z_angl = Zoft.NewWith(0.0);
    this.z_cent = Zoft.NewWith(Vect.zerov);
    this.z_phas = Zoft.NewWith(0.0);
  }

  PntMat() {
    return this.pm;
  }
  InvPntMat() {
    return this.ipm;
  }
  NrmMat() {
    return this.nm;
  }
  InvNrmMat() {
    return this.inm;
  }

  Axis() {
    return this.z_axis.Val();
  }
  Angle() {
    return this.z_angl.Val();
  }
  Center() {
    return this.z_cent.Val();
  }
  Phase() {
    return this.z_phas.Val();
  }

  AxisZoft() {
    return this.z_axis;
  }
  AngleZoft() {
    return this.z_angl;
  }
  CenterZoft() {
    return this.z_cent;
  }
  PhaseZoft() {
    return this.z_phas;
  }

  SetAxis(ax) {
    this.z_axis.Set(ax);
    return this;
  }
  SetAngle(an) {
    this.z_angl.Set(an);
    return this;
  }
  SetCenter(ce) {
    this.z_cent.Set(ce);
    return this;
  }
  SetPhase(ph) {
    this.z_phas.Set(ph);
    return this;
  }

  InstallAxis(ax_zo) {
    this.z_axis.BecomeLike(ax_zo);
    return this;
  }
  InstallAngle(an_zo) {
    this.z_angl.BecomeLike(an_zo);
    return this;
  }
  InstallCenter(ce_zo) {
    this.z_cent.BecomeLike(ce_zo);
    return this;
  }
  InstallPhase(ph_zo) {
    this.z_phas.BecomeLike(ph_zo);
    return this;
  }

  Inhale(_ratch, _thyme) {
    const ax = this.z_axis.Val();
    const an = this.z_angl.Val();
    const ce = this.z_cent.Val();
    const ph = this.z_phas.Val();

    this.nm.LoadRotationPreNormed(ax, an + ph);
    this.inm = this.nm.Transpose();

    const shimmy = new Matrix44();
    shimmy.m[12] = -ce.x;
    shimmy.m[13] = -ce.y;
    shimmy.m[14] = -ce.z;
    this.pm = shimmy.Mul(this.nm);
    this.ipm = shimmy.Mul(this.inm);

    shimmy.m[12] = ce.x;
    shimmy.m[13] = ce.y;
    shimmy.m[14] = ce.z;
    this.pm.MulSelfBy(shimmy);
    this.ipm.MulSelfBy(shimmy);
  }
  //
}

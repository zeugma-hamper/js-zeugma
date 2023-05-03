//
// (c) treadle & loam, provisioners llc
//

import { Grappler } from "./Grappler.js";
import { Matrix44 } from "./Matrix44.js";
import { Vect } from "./Vect.js";
import { Zoft } from "./Zoft.js";

export class ScGrappler extends Grappler {
  //
  constructor() {
    super();
    this.pm = new Matrix44();
    this.ipm = new Matrix44();
    this.nm = new Matrix44();
    this.inm = new Matrix44();
    this.z_sca = Zoft.NewWith(Vect.onesv);
    this.z_cnt = Zoft.NewWith(Vect.zerov);
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

  Scale() {
    return this.z_sca.Val();
  }
  SetScale(sca_or_zoft) {
    this.z_sca.BecomeLike(Zoft.NewWith(sca_or_zoft));
    return this;
  }
  ScaleZoft() {
    return this.z_sca;
  }
  InstallScale(scz) {
    this.z_sca.BecomeLike(scz);
    return this;
  }

  Center() {
    return this.z_cnt.Val();
  }
  SetCenter(cnt_or_zoft) {
    this.z_cnt.BecomeLike(Zoft.NewWith(cnt_or_zoft));
    return this;
  }
  CenterZoft() {
    return this.z_cnt;
  }
  InstallCenter(cnz) {
    this.z_cnt.BecomeLike(cnz);
    return this;
  }

  Inhale(_ratch, _thyme) {
    const s = this.z_sca.Val();
    const c = this.z_cnt.Val();
    this.pm.LoadScaleXYZAbout(s.x, s.y, s.z, c);
    this.ipm.LoadScaleXYZAbout(
      s.x == 0.0 ? 1.0 : 1.0 / s.x,
      s.y == 0.0 ? 1.0 : 1.0 / s.y,
      s.z == 0.0 ? 1.0 : 1.0 / s.z,
      c
    );
    // unthinkable things about distorting normals in the case of
    // anisotropic scaling...
    return 0;
  }
  //
}

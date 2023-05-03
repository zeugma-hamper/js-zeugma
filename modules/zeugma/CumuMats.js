//
// (c) treadle & loam, provisioners llc
//

import { Matrix44 } from "./Matrix44.js";

export class CumuMats {
  //
  constructor() {
    // super ();

    if (arguments.length == 1 && arguments[0] === false) {
      this.pmat = null;
      this.nmat = null;
      this.ipmat = null;
      this.inmat = null;
    } else if (arguments.length == 4) {
      this.pmat = arguments[0];
      this.nmat = arguments[1];
      this.ipmat = arguments[2];
      this.inmat = arguments[3];
    } else {
      this.pmat = new Matrix44();
      this.nmat = new Matrix44();
      this.ipmat = new Matrix44();
      this.inmat = new Matrix44();
    }
    this.rat_fresh = -1;
  }

  FreshenVia(pm, nm, ipm, inm) {
    this.pmat = pm;
    this.nmat = nm;
    this.ipmat = ipm;
    this.inmat = inm;
    return this;
  }

  XformPointWorldToLocal(p) {
    if (this.ipmat == null || this.inmat == null) return p.Dup();
    return this.this.ipmat.TransformVect(p);
  }

  XformPointLocalToWorld(p) {
    if (this.ipmat == null || this.inmat == null) return p.Dup();
    return this.pmat.TransformVect(p);
  }

  XformRayWorldToLocal(frm, aim) {
    if (this.ipmat == null || this.inmat == null)
      return [this.from.Dup(), aim.Dup()];
    return [this.ipmat.TransformVect(frm), this.inmat.TransformVect(aim)];
  }

  XformRayLocalToWorld(frm, aim) {
    if (this.ipmat == null || this.inmat == null)
      return [this.from.Dup(), aim.Dup()];
    return [this.pmat.TransformVect(frm), this.nmat.TransformVect(aim)];
  }
}

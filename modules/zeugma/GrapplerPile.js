//
// (c) treadle & loam, provisioners llc
//

import { Grappler } from "./Grappler.js";
import { Matrix44 } from "./Matrix44.js";

export class GrapplerPile extends Grappler {
  //
  constructor() {
    super();
    this.pnt_mat = new Matrix44();
    this.nrm_mat = new Matrix44();
    this.inv_pnt_mat = new Matrix44();
    this.inv_nrm_mat = new Matrix44();
    this.graps = new Array();
  }

  ClearMats() {
    this.pnt_mat.LoadIdent();
    this.nrm_mat.LoadIdent();
    this.inv_pnt_mat.LoadIdent();
    this.inv_nrm_mat.LoadIdent();
  }

  PntMat() {
    return this.pnt_mat;
  }
  NrmMat() {
    return this.nrm_mat;
  }
  InvPntMat() {
    return this.inv_pnt_mat;
  }
  InvNrmMat() {
    return this.inv_nrm_mat;
  }

  GrapplerCount() {
    return this.graps.length;
  }
  NthGrappler(ind) {
    if (ind < 0 || ind >= this.graps.length) return null;
    return this.graps[ind];
  }
  IndexForGrappler(g) {
    return this.graps.indexOf(g);
  }
  FindGrappler(nm) {
    return this.graps.find((g) => g.Name() == nm);
  }

  AppendGrappler(g) {
    if (g == null) return false;
    this.graps.push(g);
    return true;
  }
  PrependGrappler(g) {
    if (g == null) return false;
    this.graps.splice(0, 0, g);
    return true;
  }
  InsertGrappler(g, ind) {
    if (g == null) return false;
    if (ind < 0) ind = 0;
    else if (ind > this.graps.length) ind = this.graps.length;
    this.graps.splice(ind, 0, g);
    return true;
  }
  RemoveGrappler(g) {
    const ind = this.graps.indexOf(g);
    if (ind < 0) return false;
    this.graps.splice(ind, 1);
    if (this.graps.length < 1) this.ClearMats();
    return true;
  }
  RemoveNthGrappler(ind) {
    if (ind < 0 || ind >= this.graps.length) return false;
    this.graps.splice(ind, 1);
    if (this.graps.length < 1) this.ClearMats();
    return true;
  }
  RemoveAllGrapplers() {
    this.graps = new Array();
    this.ClearMats();
    return this;
  }

  Inhale(ratch, thyme) {
    const num = this.GrapplerCount();
    if (num < 1) return 0;

    let g = this.graps[0];
    g.Inhale(ratch, thyme);
    this.pnt_mat.Load(g.PntMat());
    this.nrm_mat.Load(g.NrmMat());
    this.inv_pnt_mat.Load(g.InvPntMat());
    this.inv_nrm_mat.Load(g.InvNrmMat());

    for (let q = 1; q < num; ++q) {
      g = this.graps[q];
      g.Inhale(ratch, thyme);
      this.pnt_mat.MulSelfBy(g.PntMat());
      this.nrm_mat.MulSelfBy(g.NrmMat());
      this.inv_pnt_mat.MulSelfBy(g.InvPntMat());
      this.inv_nrm_mat.MulSelfBy(g.InvNrmMat());
    }
    return 0;
  }
}

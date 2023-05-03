//
// (c) treadle & loam, provisioners llc
//

import { Matrix44 } from "./Matrix44.js";
import { Zeubject } from "./Zeubject.js";

export class Grappler extends Zeubject {
  static get ident_mat() {
    return Matrix44.idmat.Dup();
  }

  PntMat() {
    return this.constructor.ident_mat;
  }
  NrmMat() {
    return this.constructor.ident_mat;
  }
  InvPntMat() {
    return this.constructor.ident_mat;
  }
  InvNrmMat() {
    return this.constructor.ident_mat;
  }
}

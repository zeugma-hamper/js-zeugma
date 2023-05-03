//
// (c) treadle & loam, provisioners llc
//

import {
  SinuZoft,
  SpaceThing,
  TrGrappler,
  Vect,
} from "../../modules/zeugma/zeugma-lib.js";

export class ShimmyCrate extends SpaceThing {
  //
  constructor(wrds, sze, offset, shimax, freq) {
    super();
    this.mess = wrds; // string
    this.sz = sze; // float
    const iago = SinuZoft.NewWith(shimax, freq); // Vect, float
    let trg = new TrGrappler(iago);
    this.AppendGrappler(trg);
    trg = new TrGrappler(offset); // Vect
    this.AppendGrappler(trg);
  }

  DrawSelf(ratch, cm, adjc, bonus) {
    const ctx = bonus[1];
    if (ctx == null) return 0;

    const tl = new Vect(-0.5 * this.sz, 0.5 * this.sz, 0.0);
    const br = tl.Neg();
    const tr = new Vect(0.5 * this.sz, 0.5 * this.sz, 0.0);
    const bl = tr.Neg();
    const crn = this.CanvasProjectVertexArray(cm, bonus[2], bonus[0], [
      tl,
      bl,
      br,
      tr,
    ]);
    const x = crn[0].x,
      y = crn[0].y;
    const w = crn[3].DistFrom(crn[0]);
    const cnt = crn[0].Add(crn[1]).Add(crn[2]).Add(crn[3]).Sca(0.25);
    ctx.fillStyle = adjc.AsCSSString();

    const ang = this.CanvasProjectSixDOFRotationAngle(cm, bonus[2], bonus[0]);
    ctx.translate(cnt.x, cnt.y);
    ctx.rotate(ang);
    ctx.translate(-cnt.x, -cnt.y);

    ctx.fillRect(x, y, w, w);

    ctx.font = "25px sans-serif";
    ctx.fillText(this.mess, x + 0.5 * w, y + 0.5 * w);
  }
  //
}

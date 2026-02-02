
//
// (c) treadle & loam, provisioners llc
//


import { SpaceThing, TrGrappler,
         SinuZoft, Vect } from "zeugma/zeugma-lib.js";



export class ShimmyCrate  extends SpaceThing
{ //
  constructor (wrds, sze, offset, shimax, freq)
    { super ();
      this.mess = wrds;  // string
      this.sz = sze;     // float
      let iago = SinuZoft.NewWith (shimax, freq);  // Vect, float
      let trg = new TrGrappler (iago);
      this.AppendGrappler (trg);
      trg = new TrGrappler (offset);  // Vect
      this.AppendGrappler (trg);
    }

  DrawSelf (ratch, cm, adjc, geombndl)
    { const { canv, gctx, vpmat } = geombndl;

      if (gctx == null)
        return -1;

      let tl = new Vect (-0.5 * this.sz, 0.5 * this.sz, 0.0);
      let br = tl . Neg ();
      let tr = new Vect (0.5 * this.sz, 0.5 * this.sz, 0.0);
      let bl = tr . Neg ();
      let crn = this.CanvasProjectVertexArray (cm, vpmat, canv,
                                               [tl, bl, br, tr]);
      let x = crn[0].x, y = crn[0].y;
      let w = crn[3] . DistFrom (crn[0]);
      let cnt = crn[0] . Add (crn[1]) . Add (crn[2]) . Add (crn[3]) . Sca (0.25);
      gctx.fillStyle = adjc . AsCSSString ();

      let ang = this.CanvasProjectSixDOFRotationAngle (cm, vpmat, canv);
      gctx . translate (cnt.x, cnt.y);
      gctx . rotate (ang);
      gctx . translate (-cnt.x, -cnt.y);

      gctx . fillRect (x, y, w, w);

      gctx.font = '25px sans-serif';
      gctx . fillText (this.mess, x + 0.5 * w, y + 0.5 * w);

      return 0;
    }
//
}

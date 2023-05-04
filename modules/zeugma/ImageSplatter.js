
//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { Vect } from "./Vect.js";

import { ZeColor } from "./ZeColor.js";


export class ImageSplatter  extends Alignifer
{ //
  static default_back_color = new ZeColor (0.25, 0.0);

  //
  constructor (im)
    { super ();
      this.immy = im;
      this.asp_rat = (im == null)  ?  1.0  :  im.height / im.width;
      this.back_iro = ImageSplatter.default_back_color;
      this.brdr_iro = null;
    }


  BackgroundColor ()
    { return this.back_iro . Val (); }
  SetBackgroundColor (bc)
    { if (bc === this.back_iro)
        return this;
      if (this.back_iro == null  ||  bc == null)
        this.back_iro = bc;
      else
        this.back_iro . Set (bc);
      return this;
    }

  BorderColor ()
    { return this.brdr_iro . Val (); }
  SetBorderColor (bc)
    { if (bc === this.brdr_iro)
        return this;
      if (this.brdr_iro == null  ||  bc == null)
        this.brdr_iro = bc;
      else
        this.brdr_iro . Set (bc);
      return this;
    }


  DrawSelf (ratch, cm, adjc, bonus)
    { const ctx = bonus[1];
      if (ctx == null)
        return 0;

      let hw, hh;
      if (this.asp_rat  >  1.0)
        { hh = 0.5;  hw = 0.5 / this.asp_rat; }
      else
        { hw = 0.5;  hh = this.asp_rat; }
      const tl = new Vect (-hw, hh, 0.0);
      const br = tl . Neg ();
      const tr = new Vect (hw, hh, 0.0);
      const bl = tr . Neg ();
      const crn = this.CanvasProjectVertexArray (cm, bonus[2], bonus[0],
                                                 [tl, bl, br, tr]);
      const x = crn[0].x, y = crn[0].y;
      const w = crn[3] . DistFrom (crn[0]);
      const h = crn[1] . DistFrom (crn[0]);
      const cnt = crn[0] .
        Add (crn[1]) . Add (crn[2]) . Add (crn[3]) . Sca (0.25);

      const ang = this.CanvasProjectSixDOFRotationAngle (cm, bonus[2], bonus[0]);
      ctx . translate (cnt.x, cnt.y);
      ctx . rotate (ang);
      ctx . translate (-cnt.x, -cnt.y);

      if (this.back_iro != null)
        { let bc = this.back_iro . Val ();
          if (adjc != null)
            bc = bc . Mul (adjc);
          ctx.fillStyle = bc . AsCSSString ();
          ctx . fillRect (x, y, w, h);
        }

      if (this.immy != null)
        ctx . drawImage (this.immy, x, y, w, h);

      if (this.brdr_iro != null)
        { let bc = this.brdr_iro . Val ();
          if (adjc != null)
            bc = bc . Mul (adjc);
          ctx.strokeStyle = bc . AsCSSString ();
          ctx . strokeRect (x, y, w, h);
        }
      return 0;
    }
//
}


//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { ZeColor } from "./ZeColor.js";


export class ImageSplatter  extends Alignifer
{ //
  static default_back_color = new ZeColor (0.25, 0.1);

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
    { let ctx = bonus[1];
      if (ctx == null)
        return 0;

      let hw, hh;
      if (this.asp_rat  >  1.0)
        { hh = 0.5;  hw = 0.5 / this.asp_rat; }
      else
        { hw = 0.5;  hh = this.asp_rat; }
      let tl = new Vect (-hw, hh, 0.0);
      let br = tl . Neg ();
      let crnrs = this.CanvasProjectVertexArray (cm, bonus[2], bonus[0],
                                                 [tl, br]);
      let x = crnrs[0].x, y = crnrs[0].y;
      let w = Math.abs (crnrs[1].x - x);
      let h = Math.abs (crnrs[1].y - y);
      if (this.back_iro != null)
        { let bc = this.back_iro . Val ();
          if (adjc != null)
            bc . MulSelfBy (adjc);
          ctx.fillStyle = bc . AsCSSString ();
          ctx . fillRect (x, y, w, h);
        }

      if (this.immy != null)
        ctx . drawImage (this.immy, x, y, w, h);

      if (this.brdr_iro != null)
        { let bc = this.brdr_iro . Val ();
          if (adjc != null)
            bc . MulSelfBy (adjc);
          ctx.strokeStyle = bc . AsCSSString ();
          ctx . strokeRect (x, y, w, h);
        }
      return 0;
    }
//
}

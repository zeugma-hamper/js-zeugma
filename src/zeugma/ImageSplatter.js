
//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { Vect } from "./Vect.js";

import { ZeColor } from "./ZeColor.js";


export class ImageSplatter  extends Alignifer
{ //
//  static default_back_color = new ZeColor (0.25, 0.0);
  static InitializeClassHaplessly ()
    { this.default_back_color = new ZeColor (0.25, 0.0); }

  //
  constructor (im)
    { super ();
      this.immy = im;
      this.asp_rat = (im == null)  ?  1.0  :  im.height / im.width;
      this.back_iro = ImageSplatter.default_back_color;
      this.brdr_iro = null;
    }


  LocalFlatExtent ()
    { const hw = (this.asp_rat > 1.0)  ?  0.5 / this.asp_rat  :  0.5;
      const hh = (this.asp_rat > 1.0)  ?  0.5  :  this.asp_rat * 0.5;
      return [ [-hw, hw], [-hh, hh] ];
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


  DrawSelf (ratch, cm, adjc, geombndl)
    { const { canv, gctx, vpmat } = geombndl;

      if (gctx == null)
        return 0;

      const [[_smorf, hw], [_smarf, hh]] = this.LocalFlatExtent ();
      const tl = new Vect (-hw, hh, 0.0);
      const br = tl . Neg ();
      const tr = new Vect (hw, hh, 0.0);
      const bl = tr . Neg ();
      const crn = this.CanvasProjectVertexArray (cm, vpmat, canv,
                                                 [tl, bl, br, tr]);
      const x = crn[0].x, y = crn[0].y;
      const w = crn[3] . DistFrom (crn[0]);
      const h = crn[1] . DistFrom (crn[0]);
      const cnt = crn[0] .
        Add (crn[1]) . Add (crn[2]) . Add (crn[3]) . Sca (0.25);

      const ang = this.CanvasProjectSixDOFRotationAngle (cm, vpmat, canv);
      gctx . translate (cnt.x, cnt.y);
      gctx . rotate (ang);
      gctx . translate (-cnt.x, -cnt.y);

      if (this.back_iro != null)
        { let bc = this.back_iro . Val ();
          if (adjc != null)
            bc = bc . Mul (adjc);
          gctx.fillStyle = bc . AsCSSString ();
          gctx . fillRect (x, y, w, h);
        }

      if (this.immy != null)
        gctx . drawImage (this.immy, x, y, w, h);

      if (this.brdr_iro != null)
        { let bc = this.brdr_iro . Val ();
          if (adjc != null)
            bc = bc . Mul (adjc);
          gctx.strokeStyle = bc . AsCSSString ();
          gctx . strokeRect (x, y, w, h);
        }
      return 0;
    }
//
}


//
///
//

ImageSplatter.InitializeClassHaplessly ();

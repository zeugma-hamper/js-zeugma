
//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { ZeColor } from "./ZeColor.js";


export class PolygonPile  extends Alignifer
{ //
//  static default_fill_color = new ZeColor (0.5, 1.0);
  static InitializeClassHaplessly ()
    { this.default_fill_color = new ZeColor (0.5, 1.0); }

  //
  constructor (sz, nv)
    { super ();
      this.poly_arr = new Array ();
      this.fill_iro = PolygonPile.default_fill_color;
      this.strk_iro = null;
      this.closed = true;
    }

  IsClosed ()
    { return this.closed; }
  SetIsClosed (ic)
    { this.closed = ic;  return this; }

  FillColor ()
    { return (this.fill_iro == null)  ?  null  :  this.fill_iro . Val (); }
  SetFillColor (fc)
    { if (fc === this.fill_iro)
        return this;
      if (this.fill_iro == null  ||  fc == null)
        this.fill_iro = fc;
      else
        this.fill_iro . Set (fc);
      return this;
    }

  StrokeColor ()
    { return (this.strk_iro == null)  ?  null  :  this.strk_iro . Val (); }
  SetStrokeColor (sc)
    { if (sc === this.strk_iro)
        return this;
      if (this.strk_iro == null  ||  sc == null)
        this.strk_iro = sc;
      else
        this.strk_iro . Set (sc);
      return this;
    }


  NumPolys ()
    { return this.poly_arr.length; }
  NthPoly (ind)
    { if (ind < 0  ||  ind >= this.poly_arr.length)
        return null;
      return this.poly_arr[ind];
    }
  NewPoly ()
    { const parr = new Array ();
      this.poly_arr . push (parr);
      return parr;
    }

  DrawSelf (ratch, cm, adjc, geombndl)
    { const gctx = geombndl[1];
      if (gctx == null)
        return 0;

      const polys = this.CanvasProjectVertexArrays (cm,
                                                    geombndl["vpmat"],
                                                    geombndl["canv"],
                                                    this.poly_arr);
      if (gctx == null)
        return 0;
      if (this.fill_iro != null)
        { let fc = this.fill_iro . Val ();
          if (adjc != null)
            fc = fc . Mul (adjc);
          gctx.fillStyle = fc . AsCSSString ();
        }
      if (this.strk_iro != null)
        { let sc = this.strk_iro . Val ();
          if (adjc != null)
            sc = sc . Mul (adjc);
          gctx.strokeStyle = sc . AsCSSString ();
        }
      for (const poly of polys)
        { let q = 0;
          for (const vec of poly)
            { if (q == 0)
                gctx . beginPath ();
              gctx . lineTo (vec.x, vec.y);
              ++q;
            }
          if (this.closed)
            gctx . closePath ();
          if (this.fill_iro != null)
            gctx . fill ();
          if (this.strk_iro != null)
            gctx . stroke ();
        }
      return 0;
    }
//
}


//
///
//

PolygonPile.InitializeClassHaplessly ();

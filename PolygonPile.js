
//
// (c) treadle & loam, provisioners llc
//


import { Alignifer } from "./Alignifer.js";

import { ZeColor } from "./ZeColor.js";


export class PolygonPile  extends Alignifer
{ //
  static default_fill_color = new ZeColor (0.5, 1.0);

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
    { let parr = new Array ();
      this.poly_arr . push (parr);
      return parr;
    }

  DrawSelf (ratch, cm, adjc, bonus)
    { let ctx = bonus[1];
      if (ctx == null)
        return 0;

      let polys = this.CanvasProjectVertexArrays (cm, bonus[2], bonus[0],
                                                  this.poly_arr);
      if (ctx == null)
        return 0;
      if (this.fill_iro != null)
        { let fc = this.fill_iro . Val ();
          if (adjc != null)
            fc . MulSelfBy (adjc);
          ctx.fillStyle = fc . AsCSSString ();
        }
      if (this.strk_iro != null)
        { let sc = this.strk_iro . Val ();
          if (adjc != null)
            sc . MulSelfBy (adjc);
          ctx.strokeStyle = sc . AsCSSString ();
        }
      for (let poly of polys)
        { let q = 0;
          for (let vec of poly)
            { if (q == 0)
                ctx . beginPath ();
              ctx . lineTo (vec.x, vec.y);
              ++q;
            }
          if (this.closed)
            ctx . closePath ();
          if (this.fill_iro != null)
            ctx . fill ();
          if (this.strk_iro != null)
            ctx . stroke ();
        }
      return 0;
    }
//
}


//
// (c) treadle & loam, provisioners llc
//


export class ZeColor
{ //
  constructor ()
    { switch (arguments.length)
        { case 1:
            this.SetGray (arguments[0]);
            break;
          case 2:
            this.SetGrayAlpha (arguments[0], arguments[1]);
            break;
          case 3:
            this.SetRGB (arguments[0], arguments[1], arguments[2]);
            break;
          case 4:
            this.SetRGBA (arguments[0], arguments[1], arguments[2],
                          arguments[3]);
            break;
          default:
          this.SetGray (1.0);
        }
    }


  Val ()
    { return this; }

  Dup ()
    { return new ZeColor (this.r, this.g, this.b, this.a); }


  R ()  { return this.r; }
  G ()  { return this.g; }
  B ()  { return this.b; }
  A ()  { return this.a; }

  Equals (otha)
    { return (this.r == otha.r  &&  this.g == otha.g  &&
              this.b == otha.b  &&  this.a == otha.a);
    }

  Set (otha)
    { return this.SetRGBA (otha.r, otha.g, otha.b, otha.a); }


  SetRGB (arr, gee, bee)
    { this.r = arr;  this.g = gee;  this.b = bee;  this.a = 1.0;  return this; }
  SetRGBA (arr, gee, bee, alp)
    { this.r = arr;  this.g = gee;  this.b = bee;  this.a = alp;  return this; }
  SetRGBNoAlpha (arr, gee, bee)
    { this.r = arr;  this.g = gee;  this.b = bee;  return this; }


  SetGray (gra)
    { this.r = this.g = this.b = gra;  this.a = 1.0;  return this; }
  SetGrayNoAlpha (gra)
    { this.r = this.g = this.b = gra;  return this; }
  SetGrayAlpha (gra, alp)
    { this.r = this.g = this.b = gra;  this.a = alp;  return this; }


  Add (otha)
    { return new ZeColor (this.r + otha.r, this.g + otha.g,
                          this.b + otha.b, this.a + otha.a);
    }
  AddNoAlpha (otha)
    { return new ZeColor (this.r + otha.r, this.g + otha.g,
                          this.b + otha.b, this.a);
    }

  AddToSelf (otha)
    { this.r += otha.r;  this.g += otha.g;
      this.b += otha.b;  this.a += otha.a;
      return this;
    }
  AddToSelfNoAlpha (otha)
    { this.r += otha.r;  this.g += otha.g;  this.b += otha.b;  return this; }


  Sub (otha)
    { return new ZeColor (this.r - otha.r, this.g - otha.g,
                          this.b - otha.b, this.a - otha.a);
    }
  SubNoAlpha (otha)
    { return new ZeColor (this.r - otha.r, this.g - otha.g,
                          this.b - otha.b, this.a);
    }

  SubFromSelf (otha)
    { this.r -= otha.r;  this.g -= otha.g;
      this.b -= otha.b;  this.a -= otha.a;
      return this;
    }
  SubFromSelfNoAlpha (otha)
    { this.r -= otha.r;  this.g -= otha.g;  this.b -= otha.b;  return this; }

  Sca (s)
    { return new ZeColor (s * this.r, s * this.g, s * this.b, s * this.a ); }
  ScaNoAlpha (s)
    { return new ZeColor (s * this.r, s * this.g, s * this.b, this.a ); }

  ScaSelf (s)
    { this.r *= s;  this.g *= s;  this.b *= s;  this.a *= s;  return this; }
  ScaSelfNoAlpha (s)
    { this.r *= s;  this.g *= s;  this.b *= s;  return this; }


  Mul (otha)
    { return new ZeColor (this.r * otha.r, this.g * otha.g,
                          this.b * otha.b, this.a * otha.a);
    }
  MulNoAlpha (otha)
    { return new ZeColor (this.r * otha.r, this.g * otha.g,
                          this.b * otha.b, this.a);
    }

  MulSelfBy (otha)
    { this.r *= otha.r;  this.g *= otha.g;
      this.b *= otha.b;  this.a *= otha.a;
      return this;
    }
  MulSelfByNoAlpha (otha)
    { this.r *= otha.r;  this.g *= otha.g;  this.b *= otha.b;  return this;}


// oy.
  AsCSSString ()
    { return "rgba("  +  Math.floor (255.0 * this.r)
        +  ","  +  Math.floor (255.0 * this.g)
        +  ","  +  Math.floor (255.0 * this.b)
        +  ","  +  this.a  +  ")";
    }

//
///
//

  static white = new ZeColor ();
  static black = new ZeColor (0.0);
  static trnsp_wht = new ZeColor (1.0, 0.0);
  static trnsp_blk = new ZeColor (0.0, 0.0);
}

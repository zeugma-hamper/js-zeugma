
//
// (c) treadle & loam, provisioners llc
//

import { Vect } from "./Vect.js";


export class Matrix44
{ //
  static i10 = 4;

  constructor ()
    { //super ();
      this.LoadIdent ();
    }

  m00 ()  { return this.m[0]; }
  m01 ()  { return this.m[1]; }
  m02 ()  { return this.m[2]; }
  m03 ()  { return this.m[3]; }

  m10 ()  { return this.m[4]; }
  m11 ()  { return this.m[5]; }
  m12 ()  { return this.m[6]; }
  m13 ()  { return this.m[7]; }

  m20 ()  { return this.m[8]; }
  m21 ()  { return this.m[9]; }
  m22 ()  { return this.m[10]; }
  m23 ()  { return this.m[11]; }

  m30 ()  { return this.m[12]; }
  m31 ()  { return this.m[13]; }
  m32 ()  { return this.m[14]; }
  m33 ()  { return this.m[15]; }

  _SetGuts (marr)
    { this.m = marr;  return this; }

  LoadZero ()
    { this._SetGuts (new Float64Array (16)); }

  LoadIdent ()
    { this.m = new Float64Array (16);
      this.m[0] = this.m[5] = this.m[10] = this.m[15] = 1.0;
      return this;
    }

  LoadArr (marr)
    { return this._SetGuts (marr); }

  Load16 (a00, a01, a02, a03, a10, a11, a12, a13,
          a20, a21, a22, a23, a30, a31, a32, a33)
    { this.m[0]  = a00; this.m[1]  = a01; this.m[2]  = a02; this.m[3]  = a03;
      this.m[4]  = a10; this.m[5]  = a11; this.m[6]  = a12; this.m[7]  = a13;
      this.m[8]  = a20; this.m[9]  = a21; this.m[10] = a22; this.m[11] = a23;
      this.m[12] = a30; this.m[13] = a31; this.m[14] = a32; this.m[15] = a33;
      return this;
    }

  Load (otha)
    { return this._SetGuts (new Float64Array (otha.m)); }

  Dup ()
    { return new Matrix44 () . Load (this); }


//
/// arithmetic...
//
  Neg ()
    { let m = this.m, arr = new Float64Array (16);
      for (let q = 15  ;  q >= 0  ;  --q)
        arr[q] = -this.m[q];
      return new Matrix44 () . _SetGuts (arr);
    }

  NegSelf ()
    { for (let q = 15  ;  q >= 0  ;  --q)
        this.m[q] = -this.m[q];
      return this;
    }


  Add (otha)
    { let m = this, o = otha;
      return new Matrix44 () . Load16
        ( m.m[0]+o.m[0],   m.m[1]+o.m[1],   m.m[2]+o.m[2],   m.m[3]+o.m[3],
          m.m[4]+o.m[4],   m.m[5]+o.m[5],   m.m[6]+o.m[6],   m.m[7]+o.m[7],
          m.m[8]+o.m[8],   m.m[9]+o.m[9],   m.m[10]+o.m[10], m.m[11]+o.m[11],
          m.m[12]+o.m[12], m.m[13]+o.m[13], m.m[14]+o.m[14], m.m[15]+o.m[15]
        );
    }

  AddToSelf (otha)
    { let m = this, o = otha;
      m.m[0]+=o.m[0];   m.m[1]+=o.m[1];   m.m[2]+=o.m[2];   m.m[3]+=o.m[3];
      m.m[4]+=o.m[4];   m.m[5]+=o.m[5];   m.m[6]+=o.m[6];   m.m[7]+=o.m[7];
      m.m[8]+=o.m[8];   m.m[9]+=o.m[9];   m.m[10]+=o.m[10]; m.m[11]+=o.m[11];
      m.m[12]+=o.m[12]; m.m[13]+=o.m[13]; m.m[14]+=o.m[14]; m.m[15]+=o.m[15];
      return this;
    }

  Sub (otha)
    { let m = this, o = otha;
      return new Matrix44 () . Load16
        ( m.m[0]-o.m[0],   m.m[1]-o.m[1],   m.m[2]-o.m[2],   m.m[3]-o.m[3],
          m.m[4]-o.m[4],   m.m[5]-o.m[5],   m.m[6]-o.m[6],   m.m[7]-o.m[7],
          m.m[8]-o.m[8],   m.m[9]-o.m[9],   m.m[10]-o.m[10], m.m[11]-o.m[11],
          m.m[12]-o.m[12], m.m[13]-o.m[13], m.m[14]-o.m[14], m.m[15]-o.m[15]
        );
    }

  SubFromSelf (otha)
    { let m = this, o = otha;
      m.m[0]-=o.m[0];   m.m[1]-=o.m[1];   m.m[2]-=o.m[2];   m.m[3]-=o.m[3];
      m.m[4]-=o.m[4];   m.m[5]-=o.m[5];   m.m[6]-=o.m[6];   m.m[7]-=o.m[7];
      m.m[8]-=o.m[8];   m.m[9]-=o.m[9];   m.m[10]-=o.m[10]; m.m[11]-=o.m[11];
      m.m[12]-=o.m[12]; m.m[13]-=o.m[13]; m.m[14]-=o.m[14]; m.m[15]-=o.m[15];
      return this;
    }


  Mul (otha)
    { let m = this, o = otha;
      return new Matrix44 () . Load16
        ( m.m00() * o.m00()  +  m.m01() * o.m10()
           +  m.m02() * o.m20()  +  m.m03() * o.m30(),
          m.m00() * o.m01()  +  m.m01() * o.m11()
           +  m.m02() * o.m21()  +  m.m03() * o.m31(),
          m.m00() * o.m02()  +  m.m01() * o.m12()
           +  m.m02() * o.m22()  +  m.m03() * o.m32(),
          m.m00() * o.m03()  +  m.m01() * o.m13()
           +  m.m02() * o.m23()  +  m.m03() * o.m33(),

          m.m10() * o.m00()  +  m.m11() * o.m10()
           +  m.m12() * o.m20()  +  m.m13() * o.m30(),
          m.m10() * o.m01()  +  m.m11() * o.m11()
           +  m.m12() * o.m21()  +  m.m13() * o.m31(),
          m.m10() * o.m02()  +  m.m11() * o.m12()
           +  m.m12() * o.m22()  +  m.m13() * o.m32(),
          m.m10() * o.m03()  +  m.m11() * o.m13()
           +  m.m12() * o.m23()  +  m.m13() * o.m33(),

          m.m20() * o.m00()  +  m.m21() * o.m10()
           +  m.m22() * o.m20()  +  m.m23() * o.m30(),
          m.m20() * o.m01()  +  m.m21() * o.m11()
           +  m.m22() * o.m21()  +  m.m23() * o.m31(),
          m.m20() * o.m02()  +  m.m21() * o.m12()
           +  m.m22() * o.m22()  +  m.m23() * o.m32(),
          m.m20() * o.m03()  +  m.m21() * o.m13()
           +  m.m22() * o.m23()  +  m.m23() * o.m33(),

          m.m30() * o.m00()  +  m.m31() * o.m10()
           +  m.m32() * o.m20()  +  m.m33() * o.m30(),
          m.m30() * o.m01()  +  m.m31() * o.m11()
           +  m.m32() * o.m21()  +  m.m33() * o.m31(),
          m.m30() * o.m02()  +  m.m31() * o.m12()
           +  m.m32() * o.m22()  +  m.m33() * o.m32(),
          m.m30() * o.m03()  +  m.m31() * o.m13()
           +  m.m32() * o.m23()  +  m.m33() * o.m33()
        );
    }

  MulSelfBy (otha)
    { return this.Load (this . Mul (otha)); }

  PreMulSelfBy (otha)
    { return this.Load (otha . Mul (this)); }

  Transpose ()
    { let m = this;
      return new Matrix44 () . Load16
        ( m . m00 (),  m . m10 (),  m . m20 (),  m . m30 (),
          m . m01 (),  m . m11 (),  m . m21 (),  m . m31 (),
          m . m02 (),  m . m12 (),  m . m22 (),  m . m32 (),
          m . m03 (),  m . m13 (),  m . m23 (),  m . m33 ()
        );
    }

  TransposeSelf ()
    { let t, m = this;
      t = m.m[1];  m.m[1] = m.m[4];  m.m[4] = t;  // 01 <--> 10

      t = m.m[2];  m.m[2] = m.m[8];  m.m[8] = t;  // 02 <--> 20
      t = m.m[6];  m.m[6] = m.m[9];  m.m[9] = t;  // 12 <--> 21

      t = m.m[3];   m.m[3]  = m.m[12];  m.m[12] = t;  // 03 <--> 30
      t = m.m[7];   m.m[7]  = m.m[13];  m.m[13] = t;  // 13 <--> 31
      t = m.m[11];  m.m[11] = m.m[14];  m.m[14] = t;  // 23 <--> 32

      return this;
    }


//
/// matrix transformation: scaling
//
  LoadScaleXYZ (s0, s1, s2)
    { this.LoadZero ();
      this.m[0] = s0;  this.m[5] = s1;  this.m[10] = s2;  this.m[15] = 1.0;
      return this;
    }

  LoadScale (s)
    { this.LoadZero ();
      this.m[0] = this.m[5] = this.m[10] = s;  this.m[15] = 1.0;
      return this;
    }

  LoadScaleXYZAbout (s0, s1, s2, cnt)
    { this.LoadZero ();
      this.m[0] = s0;  this.m[5] = s1;  this.m[10] = s2;  this.m[15] = 1.0;
      this.m[12] = (1.0 - s0)  *  cnt . X ();
      this.m[13] = (1.0 - s1)  *  cnt . Y ();
      this.m[14] = (1.0 - s2)  *  cnt . Z ();
      return this;
    }

  LoadScaleAbout (s, cnt)
    { let oms = 1.0 - s;
      this.LoadZero ();
      this.m[0] = s;  this.m[5] = s;  this.m[10] = s;  this.m[15] = 1.0;
      this.m[12] = oms * cnt . X ();
      this.m[13] = oms * cnt . Y ();
      this.m[14] = oms * cnt . Z ();
      return this;
    }


//
/// matrix transformation: translatin'
//
  LoadTranslationXYZ (dx, dy, dz)
    { this.LoadIdent ();
      this.m[12] = dx;  this.m[13] = dy;  this.m[14] = dz;
      return this;
    }

  LoadTranslation (trv)
    { this.LoadIdent ();
      this.m[12] = trv . X ();  this.m[13] = trv . Y ();  this.m[14] = trv. Z ();
      return this;
    }


//
/// matrix transformation: nothing like a good rotation.
//
  LoadRotationPreNormed (axs, ang)
    { if (axs . IsZero ())
        return this.LoadIdent ();
      let co = Math.cos (ang);
      let si = Math.sin (ang);
      let omc = 1.0 - co;

      this.LoadZero ();

      this.m[0] = co  +  axs.X() * axs.X() * omc;  // 00
      this.m[5] = co  +  axs.Y() * axs.Y() * omc;  // 11
      this.m[10] = co  +  axs.Z() * axs.Z() * omc;  // 22

      let t1 = axs.X() * axs.Y() * omc;
      let t2 = axs.Z() * si;
      this.m[4] = t1 - t2;  // 10
      this.m[1] = t1 + t2;  // 01

      t1 = axs.X() * axs.Z() * omc;
      t2 = axs.Y() * si;
      this.m[8] = t1 + t2;  // 20
      this.m[2] = t1 - t2;  // 02

      t1 = axs.Y() * axs.Z() * omc;
      t2 = axs.X() * si;
      this.m[9] = t1 - t2;  // 21
      this.m[6] = t1 + t2;  // 12

      //m03 = m13 = m23 = m30 = m31 = m32 = 0.0;  // 03, 13, 23, 30, 31, 32
      this.m[15] = 1.0;
      return this;
    }

  LoadRotation (axs, ang)
    { return this.LoadRotationPreNormed (axs . Norm (), ang); }

  LoadRotationAboutPrenormed (axs, ang, cnt)
    { this.LoadTranslation (cnt . Neg ());
      let emm = new Matrix44 () . LoadRotationPreNormed (axs, ang);
      this.MulSelfBy (emm);
      emm . LoadTranslation (cnt);
      return this.MulSelfBy (emm);
    }

  LoadRotationAbout (axs, ang, cnt)
    { return this.LoadRotationAboutPrenormed (axs . Norm (), ang, cnt); }


//
/// matrix transformation: oh that shearing
//
  LoadShear (x_by_y, x_by_z,  y_by_x, y_by_z,  z_by_x, z_by_y)
    { this.LoadIdent ();
      this.m[4] = x_by_y;  this.m[1] = y_by_x;
      this.m[8] = x_by_z;  this.m[2] = z_by_x;
      this.m[9] = y_by_z;  this.m[6] = z_by_y;
      return this;
    }

  LoadShearAbout (x_by_y, x_by_z,  y_by_x, y_by_z,  z_by_x, z_by_y,  cnt)
    { this.LoadTranslation (cnt . Neg ());
      let emm = new Matrix44 ()
          . LoadShear (x_by_y, x_by_z,  y_by_x, y_by_z,  z_by_x, z_by_y);
      this.MulSelfBy (emm);
      emm . LoadTranslation (cnt);
      return this.MulSelfBy (emm);
    }


//
/// matrix transformation: coord transforms are surely da bomb
//
  LoadForwardCoordTransformPreNormed (o, u, n)  // Vects all, y'see.
    { this.LoadZero ();
      this.m[0] = o . X ();  this.m[1] = o . Y ();  this.m[2]  = o . Z ();
      this.m[4] = u . X ();  this.m[5] = u . Y ();  this.m[6]  = u . Z ();
      this.m[8] = n . X ();  this.m[9] = n . Y ();  this.m[10] = n . Z ();
      this.m[15] = 1.0;
      return this;
    }

  LoadForwardCoordTransformPreNormedOverUp (o, u)  // both Vects, don't you know.
    { return this.LoadForwardCoordTransformPreNormed (o, u, o . Cross (u)); }

  LoadForwardCoordTransform (o, u, n)  // still Vects, but not normalized. dig?
    { return this.LoadForwardCoordTransformPreNormed (o . Norm (), u . Norm (),
                                                      n . Norm ());
    }

  LoadForwardCoordTransformOverUp (o, u)  // them's, yep, Vects: normless.
    { return this.LoadForwardCoordTransformPreNormedOverUp
        (o . Norm (), u . Norm ());
    }


  LoadBackwardCoordTransformPreNormed (o, u, n)  // as above.
    { this.LoadZero ();
      this.m[0] = o . X ();  this.m[1] = u . X ();  this.m[2]  = n . X ();
      this.m[4] = o . Y ();  this.m[5] = u . Y ();  this.m[6]  = n . Y ();
      this.m[8] = o . Z ();  this.m[9] = u . Z ();  this.m[10] = n . Z ();
      this.m[15] = 1.0;
      return this;
    }

  LoadBackwardCoordTransformPreNormedOverUp (o, u)  // see the foreforegoing.
    { return this.LoadBackwardCoordTransformPreNormed (o, u, o . Cross (u)); }

  LoadBackwardCoordTransform (o, u, n)  // oh yes. look upward.
    { return this.LoadBackwardCoordTransformPreNormed (o . Norm (), u . Norm (),
                                                      n . Norm ());
    }

  LoadBackwardCoordTransformOverUp (o, u)  // plenty more of same.
    { return this.LoadBackwardCoordTransformPreNormedOverUp
        (o . Norm (), u . Norm ());
    }


//
/// and all for a little bit of vector transformation...
//

// note that, in the following two functions, doing "v = v . Val ()"
// means that the argument may be either a Vect or a Zoft (or, in the
// fullness of time, any other object that yields a Vect when Val() is
// called on it).

  TransformVect (v)
    { let m = this;
      v = v . Val ();
      let x = v.X (),  y = v.Y (),  z = v.Z ();
      return new Vect (x * m.m00()  +  y * m.m10()  +  z * m.m20()  +  m.m30(),
                       x * m.m01()  +  y * m.m11()  +  z * m.m21()  +  m.m31(),
                       x * m.m02()  +  y * m.m12()  +  z * m.m22()  +  m.m32());
    }

  TransformVectInPlace (v)
    { let m = this;
      v = v . Val ();
      let x = v.X (),  y = v.Y (),  z = v.Z ();
      return v . Set (x * m.m00()  +  y * m.m10()  +  z * m.m20()  +  m.m30(),
                      x * m.m01()  +  y * m.m11()  +  z * m.m21()  +  m.m31(),
                      x * m.m02()  +  y * m.m12()  +  z * m.m22()  +  m.m32());
    }

  TransformVectArray (varr)
    { let outarr = new Array ();
      if (varr != null)
        for (let vec of varr)
          outarr . push (this.TransformVect (vec));
      return outarr;
    }

  TransformVectArrayInPlace (varr)
    { if (varr != null)
        for (let vec of varr)
          this.TransformVectInPlace (vec);
      return varr;
    }

//
///
//
  static idmat = new Matrix44 ();
  static zeromat = new Matrix44 () . LoadZero ();
}

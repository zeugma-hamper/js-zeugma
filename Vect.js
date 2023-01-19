
//
// (c) treadle & loam, provisioners llc
//


export class Vect
{ //
  constructor (eks, wye, zee)
    { this.x = eks;
	    this.y = wye;
	    this.z = zee;
	  }

  X ()  { return this.x; }
  Y ()  { return this.y; }
  Z ()  { return this.z; }

  Dup ()
    { return new Vect (this.x, this.y, this.z); }

  Set (eks, wye, zee)
    { this.x = eks;  this.y = wye;  this.z = zee;  return this; }

  Dot (v)
    { return v.x * this.x  +  v.y * this.y  +  v.z * this.z; }
  AutoDot ()
    { return this.x * this.x  +  this.y * this.y  +  this.z * this.z; }
  Mag ()
    { return Math.sqrt (this.AutoDot ()); }

  Cross (v)
    { return new Vect (this.y * v.z - this.z * v.y,
                       this.z * v.x - this.x * v.z,
                       this.x * v.y - this.y * v.x);
    }

  Neg ()
    { return new Vect (-this.x, -this.y, -this.z); }
  NegSelf ()
    { this.x = -this.x;  this.y = -this.y;  this.z = -this.z;  return this; }

  Add (v)
    { return new Vect (this.x + v.x, this.y + v.y, this.z + v.z)}
  AddAcc (v)
    { this.x += v.x;  this.y += v.y;  this.z += v.z;  return this; }

  Sub (v)
    { return new Vect (this.x - v.x, this.y - v.y, this.z - v.z)}
  SubAcc (v)
    { this.x -= v.x;  this.y -= v.y;  this.z -= v.z;  return this; }

  Mul (sca)
    { return new Vect (this.x * sca, this.y * sca, this.z * sca)}
  MulAcc (sca)
    { this.x *= sca;  this.y *= sca;  this.z *= sca;  return this; }

  Div (sca)
    { return new Vect (this.x / sca, this.y / sca, this.z / sca)}
  DivAcc (sca)
    { this.x /= sca;  this.y /= sca;  this.z /= sca;  return this; }

  DistFrom (p)
    { return Math.sqrt (this.Sub (p) . AutoDot ()); }

  IsZero ()
    { return (this.x == 0.0  &&  this.y == 0.0  &&  this.z == 0.0); }
  Zero ()
    { this.x = 0.0;  this.y = 0.0;  this.z = 0.0;  return this; }

  Norm ()
    { let s = this . Mag ();
      if (s == 0.0)
        return this;
      s = 1.0 / s;
      return this . Mul (s);
    }
  NormSelf ()
    { let s = this . Mag ();
      if (s == 0.0)
        return this;
      s = 1.0 / s;
      return MulAcc (s);
    }
  NormSelfReturningMag ()
    { let s = this . Mag ();
      if (s != 0.0)
        MulAcc (1.0 / s);
      return s;
    }

  AngleWith (v)
    { return Math.acos (this . Norm () . Dot (v . Norm ())); }
  DegAngleWith (v)
    { return 180.0 / Math.PI * Math.acos (this . Norm () . Dot (v . Norm ())); }

//
/// reflections
//
  ReflectInPlane (pl_nrml)
    { return this . Sub (pl_nrml . Mul (2.0 * this . Dot (pl_nrml))); }
  ReflectInPlane (pl_nrml, cntr)
    { let p = this . Sub (cntr);
      return cntr . Add (p . Sub (pl_nrml . Mul (2.0 * p . Dot (pl_nrml))));
    }

  ReflectInPlaneUnnormed (pl_nrml)
    { return ReflectInPlane (pl_nrml . Norm ()); }
  ReflectInPlaneUnnormed (pl_nrml, cntr)
    { return ReflectInPlane (pl_nrml . Norm (), cntr); }


  ReflectSelfInPlane (pl_nrml)
    { return Set (ReflectInPlane (pl_nrml)); }
  ReflectSelfInPlane (pl_nrml, cntr)
    { return Set (ReflectInPlane (pl_nrml, cntr)); }

  ReflectSelfInPlaneUnnormed (pl_nrml)
    { return Set (ReflectInPlane (pl_nrml . Norm ())); }
  ReflectSelfInPlaneUnnormed (pl_nrml, cntr)
    { return Set (ReflectInPlane (pl_nrml . Norm (), cntr)); }


//
/// projection, rejection.
//

  ProjectOnto (n)
    { return n . Mul (n . Dot (this)); }
  ProjectOntoUnnormed (nun)
    { let n = nun . Norm ();
      return n . Mul (n . Dot (this));
    }

  RejectFrom (n)
    { return this . Sub (n . Mul (n . Dot (this))); }
  RejectFromUnnormed (nun)
    { let n = nun . Norm ();
      return this . Sub (n . Mul (n . Dot (this)));
    }


//
/// rotations
//
  RotateSelfPreNormed (axis, rad_ang)
    { if (axis . IsZero ())
        return this;
      let a = axis;

      let co = Math.cos (rad_ang);
      let si = Math.sin (rad_ang);
      let omc = 1.0 - co;

      let m00 = co  +  a.x * a.x * omc;
      let m11 = co  +  a.y * a.y * omc;
      let m22 = co  +  a.z * a.z * omc;

      let t1 = a.x * a.y * omc;
      let t3, t2 = a.z * si;
      let m10 = t1 - t2;
      let m01 = t1 + t2;

      t1 = a.x * a.z * omc;
      t2 = a.y * si;
      let m20 = t1 - t2;
      let m02 = t1 + t2;

      t1 = a.y * a.z * omc;
      t2 = a.x * si;
      let m21 = t1 - t2;
      let m12 = t1 + t2;

      t1 = m00 * this.x  +  m10 * this.y  +  m20 * this.z;
      t2 = m01 * this.x  +  m11 * this.y  +  m21 * this.z;
      t3 = m02 * this.x  +  m12 * this.y  +  m22 * this.z;

      return Set (t1, t2, t3);
    }
  RotateSelf (axis, rad_ang)
    { return RotateSelfPreNormed (axis . Norm (), rad_ang); }

  RotatePreNormed (axis, rad_ang)
    { let out = this.Dup ();
      return out . RotateSelfPreNormed (axis, rad_ang);
    }
  Rotate (axis, rad_ang)
    { let out = this.Dup ();
      return out . RotateSelf (axis, rad_ang);
    }

  RotateAbout (axis, rad_ang, cent)
    { return cent . Add (Sub (cent) . Rotate (axis, rad_ang)); }
  RotateSelfAbout (axis, rad_ang, cent)
    { this.SubAcc (cent);
      this.RotateSelf (axis, rad_ang);
      return this.AddAcc (cent);
    }

  RotateAboutPreNormed (axis, rad_ang, cent)
    { return cent . Add (Sub (cent) . RotatePreNormed (axis, rad_ang)); }
  RotateSelfAboutPreNormed (axis, rad_ang, cent)
    { this.SubAcc (cent);
      this.RotateSelfPreNormed (axis, rad_ang);
      return this.AddAcc (cent);
    }

//
///
//
  static zerov = new Vect (0.0, 0.0, 0.0);
  static onesv = new Vect (1.0, 1.0, 1.0);

  static xAxis = new Vect (1.0, 0.0, 0.0);
  static yAxis = new Vect (0.0, 1.0, 0.0);
  static zAxis = new Vect (0.0, 0.0, 1.0);
}

//export {Vect};

let munt = "muntiful";

console.log ("a beginning is a very delicate time...");

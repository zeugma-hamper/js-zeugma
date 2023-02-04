
//
// (c) treadle & loam, provisioners llc
//


export class CumuMats
{ //
  constructor ()
    { // super ();

      if (arguments.length == 1  &&  arguments[0] === false)
        { this.pmat = null;
          this.nmat = null;
          this.ipmat = null;
          this.inmat = null;
        }
      else if (arguments.length == 4)
        { this.pmat = arguments[0];
          this.nmat = arguments[1];
          this.ipmat = arguments[2];
          this.inmat = arguments[3];
        }
      else
        { this.pmat = new Matrix44 ();
          this.nmat = new Matrix44 ();
          this.ipmat = new Matrix44 ();
          this.inmat = new Matrix44 ();
        }
      this.rat_fresh = -1;
    }

  FreshenVia (pm, nm, ipm, inm)
    { this.pmat = pm;  this.nmat = nm;
      this.ipmat = ipm;  this.inmat = inm;
      return this;
    }


  XformPointWorldToLocal (p)
    { if (ipmat == null  ||  inmat == null)
        return p . Dup ();
      return ipmat . TransformVect (p);
    }

  XformPointLocalToWorld (p)
    { if (ipmat == null  ||  inmat == null)
        return p . Dup ();
      return pmat . TransformVect (p);
    }


  XformRayWorldToLocal (frm, aim)
    { if (ipmat == null  ||  inmat == null)
        return [from . Dup (), aim . Dup ()];
      return [ipmat . TransformVect (frm),
              inmat . TransformVect (aim)];
    }

  XformRayLocalToWorld (frm, aim)
    { if (ipmat == null  ||  inmat == null)
        return [from . Dup (), aim . Dup ()];
      return [pmat . TransformVect (frm),
              nmat . TransformVect (aim)];
    }
}

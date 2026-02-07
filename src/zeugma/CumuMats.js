
//
// (c) treadle & loam, provisioners llc
//


import { Matrix44 } from "./Matrix44.js";



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


  FwdPointMat ()
    { return this.pmat; }
  InvPointMat ()
    { return this.ipmat; }

  FwdDirecMat ()
    { return this.dmat; }
  InvDirecMat ()
    { return this.idmat; }


  FreshenVia (pm, dm, ipm, idm)
    { this.pmat = pm;  this.nmat = dm;
      this.ipmat = ipm;  this.inmat = idm;
      return this;
    }


  XformPointWorldToLocal (p)
    { if (this.ipmat == null  ||  this.inmat == null)
        return p . Dup ();
      return this.ipmat . TransformVect (p);
    }

  XformPointLocalToWorld (p)
    { if (this.ipmat == null  ||  this.inmat == null)
        return p . Dup ();
      return this.pmat . TransformVect (p);
    }


  XformRayWorldToLocal (frm, aim)
    { if (this.ipmat == null  ||  this.inmat == null)
        return [frm . Dup (), aim . Dup ()];
      return [this.ipmat . TransformVect (frm),
              this.inmat . TransformVect (aim)];
    }

  XformRayLocalToWorld (frm, aim)
    { if (this.ipmat == null  ||  this.inmat == null)
        return [frm . Dup (), aim . Dup ()];
      return [this.pmat . TransformVect (frm),
              this.nmat . TransformVect (aim)];
    }

//
//

  WorldToLocalXformPoint (p)
    { if (this.ipmat == null)
        return p . Dup ();
      return this.ipmat . TransformVect (p);
    }
  WorldToLocalXformDirec (d)
    { if (this.inmat == null)
        return d . Dup ();
      return this.inmat . TransformVect (d);
    }
  WorldToLocalXformRay (frm, aim)
    { if (this.ipmat == null  ||  this.inmat == null)
        return [frm . Dup (), aim . Dup ()];
      return [this.ipmat . TransformVect (frm),
              this.inmat . TransformVect (aim)];
    }

  WorldToLocalXformPointArray (parr)
    { const outarr = new Array ();
      if (this.ipmat == null)
        for (const p  of  parr)
          outarr . push (p . Dup ());
      else
        for (const p  of  parr)
          outarr . push (this.ipmat . TransformVect (p));
      return outarr;
    }
  WorldToLocalXformDirecArray (darr)
    { const outarr = new Array ();
      if (this.inmat == null)
        for (const d  of  darr)
          outarr . push (d . Dup ());
      else
        for (const d  of  darr)
          outarr . push (this.inmat . TransformVect (d));
      return outarr;
    }
  WorldToLocalXformRayArray (rarr)
    { const outarr = new Array ();
      if (this.ipmat == null  ||  this.inmat == null)
        for (const [frm, aim]  of  rarr)
          outarr . push ( [frm . Dup (), aim . Dup ()] );
      else
        for (const [frm, aim]  of  rarr)
          outarr . push ( [this.ipmat . TransformVect (frm),
                           this.inmat . TransformVect (aim)] );
      return outarr;
    }

//

  LocalToWorldXformPoint (p)
    { if (this.pmat == null)
        return p . Dup ();
      return this.pmat . TransformVect (p);
    }
  LocalToWorldXformDirec (d)
    { if (this.nmat == null)
        return d . Dup ();
      return this.nmat . TransformVect (d);
    }
  LocalToWorldXformRay (frm, aim)
    { if (this.pmat == null  ||  this.nmat == null)
        return [frm . Dup (), aim . Dup ()];
      return [this.pmat . TransformVect (frm),
              this.nmat . TransformVect (aim)];
    }

  LocalToWorldXformPointArray (parr)
    { const outarr = new Array ();
      if (this.pmat == null)
        for (const p  of  parr)
          outarr . push (p . Dup ());
      else
        for (const p  of  parr)
          outarr . push (this.pmat . TransformVect (p));
      return outarr;
    }
  LocalToWorldXformDirecArray (darr)
    { const outarr = new Array ();
      if (this.nmat == null)
        for (const d  of  darr)
          outarr . push (d . Dup ());
      else
        for (const d  of  darr)
          outarr . push (this.nmat . TransformVect (d));
      return outarr;
    }
  LocalToWorldXformRayArray (rarr)
    { const outarr = new Array ();
      if (this.pmat == null  ||  this.nmat == null)
        for (const [frm, aim]  of  rarr)
          outarr . push ( [frm . Dup (), aim . Dup ()] );
      else
        for (const [frm, aim]  of  rarr)
          outarr . push ( [this.pmat . TransformVect (frm),
                           this.nmat . TransformVect (aim)] );
      return outarr;
    }

}

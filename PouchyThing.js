
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"


export class PouchyThing  extends Zeubject
{ //
  constructor ()
    { super ();
      this.chirrens = null;
    }

  CanHoldChildren ()
    { return true; }

  Children ()
    { return this.chirrens; }

  NumChildren ()
    { return (this.chirrens == null)  ?  0  :  this.chirrens.length; }

  NthChild (ind)
    { return (this.chirrens == null)  ?  null  :  this.chirrens[ind]; }

  AppendChild (z)
    { if (z == null)
        return false;
      if (this.chirrens == null)
        this.chirrens = new Array ();
      else if (this.chirrens . includes (z))
        return false;
      this.chirrens . push (z);
      return true;
    }

  InsertChild (z, ind)
    { if (z == null)
        return false;
      if (this.chirrens == null)
        this.chirrens = new Array ();
      else if (chirrens . includes (z))
        return false;
      this.chirrens . splice (ind, 0, z);
      return true;
    }

  RemoveChild (z)
    { let ind = this.IndexForChild (z);
      if (ind < 0)
        return false;
      this.chirrens . splice (ind, 1);
      return true;
    }

  IndexForChild (z)
    { if (this.chirrens == null  ||  z == null)
        return -1;
      return this.chirrens . indexOf ((el) => (el === z));
    }

  FindChild (nm)  // a string. it's the naem, you dig?
    { if (this.chirrens == null  ||  z == null)
        return null;
      return this.chirrens . find ((el) => (el . Name () == nm));
    }
}

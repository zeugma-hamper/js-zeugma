
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js"

import { IContainMultitudes } from "./IContainMultitudes.js"


export class Zeubject
       extends base_class (Object) . and_interfaces (IContainMultitudes)
{ //
  constructor ()
	  { super ();
	    this.rat_fresh = -1;
	  }

  IsZeugmallyLimnable ()
    { return false; }
  IsZeugmallyPouchful ()
    { return false; }


  Name ()
    { return (this.name == null)  ?  ""  :  this.name; }
  SetName (nm)
    { this.name = nm;  return this; }

  Breather ()
    { return this.irlu; }
  SetBreather (lung)
    { this.irlu = lung;  return this; }


  OughtToInhale (ratch)
    { if (ratch < 0)
        return true;
      if (this.rat_fresh >= ratch)
      	return false;
      this.rat_fresh = ratch;
      return true;
    }

  Inhale (ratch, thyme)
    { return 0; }

  Travail (ratch, thyme)
    { return 0; }


//
/// generic utilities for named-method collection access
//
  static CollNth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return  null;
      return coll[ind];
    }

  static CollFindByName (coll, nm)
    { if (coll == null)
        return null;
      return coll . find ((el) => (el . Name () == nm));
    }

  static CollIndexOf (coll, z)
    { return (coll == null  ||  z == null)  ?  -1  :  coll . indexOf (z); }

  static CollAppend (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      if (coll . includes (z))
        return false;
      coll . push (z);
      return true;
    }

  static CollInsert (coll, z, ind)
    { if (coll == null  ||  z == null)
        return false;
      if (ind < 0  ||  ind > coll.length)
        return false;
      coll . splice (ind, 0, z);
      return true;
    }

  static CollRemove (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      let ind = coll . indexOf (z);
      if (ind < 0)
        return false;
      coll . splice (ind, 1);
      return true;
    }

  static CollRemoveNth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return false;
      coll . splice (ind, 1);
      return true;
    }


//
/// named-method weak collection utilitizificationers
//
  static WeakCollNth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return null;
      let dingus = coll[ind];
      if (dingus == null  ||  ((dingus = dingus.deref ()) == undefined))
        return null;
      return dingus;
    }

  static WeakCollFindByName (coll, nm)
    { if (coll == null)
        return null;
      let fndr = (el) => { el = el . deref ();
                           return (el != null  &&  el . Name () == nm); };
      return coll . find (fndr);
    }

  static WeakCollIndexOf (coll, z)
    { return (coll == null  ||  z == null)  ?  -1
        :  coll . findIndex ( (el) => { el = el . deref ();
                                        return (el != null  &&  el == z); } );
    }

  static WeakCollAppend (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      if (this.WeakCollIndexOf (coll, z)  >=  0)
        return false;
      coll . push (new WeakRef (z));
      return true;
    }

  static WeakCollInsert (coll, z, ind)
    { if (coll == null  ||  z == null)
        return false;
      if (ind < 0  ||  ind > coll.length)
        return false;
      coll . splice (ind, 0, new WeakRef (z));
      return true;
    }

  static WeakCollRemove (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      let ind = this.WeakCollIndexOf (coll, z);
      if (ind < 0)
        return false;
      coll . splice (ind, 1);
      return true;
    }

  static WeakCollRemoveNth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return false;
      coll . splice (ind, 1);
      return true;
    }
}

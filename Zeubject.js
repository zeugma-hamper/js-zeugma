
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


//
/// generic utilities for named-method collection access
//
  static CollNth (coll, ind)
    { if (coll == null ||  ind < 0  ||  ind >= coll.length)
        return  null;
      return  coll[ind];
    }

  static CollFindByName (coll, nm)
    { if (coll == null)
        return null;
      return coll . find ((el) => (el . Name () == nm));
    }

  static CollIndexOf (coll, z)
    { return (coll == null  ||  z == null)  ?  -1  :   coll . indexOf (z); }

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
      let ind = coll . idnexOf (z);
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
}

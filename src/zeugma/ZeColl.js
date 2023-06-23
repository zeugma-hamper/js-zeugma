
//
// (c) treadle & loam, provisioners llc
//


export class ZeColl
{ //

//
/// generic utilities for named-method collection access
//

  static Nth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return  null;
      return coll[ind];
    }

  static FindByName (coll, nm)
    { if (coll == null)
        return null;
      return coll . find ((el) => (el . Name () == nm));
    }

  static IndexOf (coll, z)
    { return (coll == null  ||  z == null)  ?  -1  :  coll . indexOf (z); }

  static Append (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      if (coll . includes (z))
        return false;
      coll . push (z);
      return true;
    }

  static Insert (coll, z, ind)
    { if (coll == null  ||  z == null)
        return false;
      if (ind < 0  ||  ind > coll.length)
        return false;
      coll . splice (ind, 0, z);
      return true;
    }

  static Remove (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      const ind = coll . indexOf (z);
      if (ind < 0)
        return false;
      coll . splice (ind, 1);
      return true;
    }

  static RemoveNth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return false;
      coll . splice (ind, 1);
      return true;
    }

  static RemoveAll (coll)
    { if (coll == null)
        return false;
      coll.length = 0;
      return true;
    }
//
}

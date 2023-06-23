
//
// (c) treadle & loam, provisioners llc
//


export class ZeWeakColl
{ //

//
/// named-method weak collection utilitizificationers
//

  static Nth (coll, ind)
    { if (coll == null  ||  ind < 0  ||  ind >= coll.length)
        return null;
      let dingus = coll[ind];
      if (dingus == null  ||  ((dingus = dingus.deref ()) == undefined))
        return null;
      return dingus;
    }

  static FindByName (coll, nm)
    { if (coll == null)
        return null;
      const fndr = (el) => { el = el . deref ();
                             return (el != null  &&  el . Name () == nm); };
      return coll . find (fndr);
    }

  static IndexOf (coll, z)
    { return (coll == null  ||  z == null)  ?  -1
        :  coll . findIndex ( (el) => { el = el . deref ();
                                        return (el != null  &&  el == z); } );
    }

  static Append (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      if (this.IndexOf (coll, z)  >=  0)
        return false;
      coll . push (new WeakRef (z));
      return true;
    }

  static Insert (coll, z, ind)
    { if (coll == null  ||  z == null)
        return false;
      if (ind < 0  ||  ind > coll.length)
        return false;
      coll . splice (ind, 0, new WeakRef (z));
      return true;
    }

  static Remove (coll, z)
    { if (coll == null  ||  z == null)
        return false;
      const ind = this.IndexOf (coll, z);
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

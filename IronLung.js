
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"


export class IronLung  extends Zeubject
{ //
  static global_iron_lungs = new Array ();

  //
  constructor ()
    { super ();
      this.breathees = new Array ();  // will be weak-ref'd, you see.
      this.aspirants = new Array ();
      this.expirees = new Array ();
    }

  Inhale (ratch, thyme)
    { if (this.expirees.length  >  0)
        { for (let z of this.expirees)
            if (this.IndexOfBreathee (z)  >=  0)
              this._RemoveNthBreathee (z);
          expirees = new Array ();
        }
      if (this.aspirants.length  >  0)
        { for (let z of this.aspirants)
            this._AppendBreathee (z);
          this.aspirants = new Array ();
        }

      let z, cnt = this.NumBreathees ();
      let ded_cnt = 0;
      for (let q = 0  ;  q < cnt  ;  ++q)
        if ((z = this.NthBreathee (q))  ==  null)
          ++ded_cnt;
        else
          z . Inhale (ratch, thyme);

      if (ded_cnt  >  this.NumBreathees () / 5)
        { }  // COMPACT!

      if (this.expirees.length  >  0)
        { for (let z of this.expirees)
            if (this.IndexOfBreathee (z)  >=  0)
              this._RemoveNthBreathee (z);
          expirees = new Array ();
        }
      if (this.aspirants.length  >  0)
        { for (let z of this.aspirants)
            this._AppendBreathee (z);
          this.aspirants = new Array ();
        }

      return 0;
    }


  //
  NumBreathees ()
    { return this.breathees.length; }
  NthBreathee (ind)
    { return Zeubject.WeakCollNth (this.breathees, ind); }
  FindBreathee (nm)
    { return Zeubject.WeakCollFindByName (this.breathees, nm); }
  IndexOfBreathee (z)
    { return Zeubject.WeakCollIndexOf (this.breathees, z); }
  _AppendBreathee (z)
    { return Zeubject.WeakCollAppend (this.breathees, z); }
  AppendBreathee (z, record_self_in_breathee)
    { if (z == null
          ||  this.aspirants . indexOf (z)  >=  0
          ||  this.IndexOfBreathee (z)  >=  0)
        return false;
      this.aspirants . push (z);
      if (record_self_in_breathee == undefined)
          record_self_in_breathee = true;
      if (record_self_in_breathee)
        z . SetBreather (this);
      return true;
    }
  InsertBreathee (z, ind)
    { return Zeubject.WeakCollInsert (this.breathees, z, ind); }
  _RemoveBreathee (z)
    { let urn = Zeubject.WeakCollRemove (this.breathees, z);
      if (urn  &&  z . Breather () != null)
        z . SetBreather (null);
      return urn;
    }
  RemoveBreathee (z)
    { if (z == null)
        return false;
      let ind = -1;
      let urn = false;
      if ((ind = this.aspirants.indexOf (z))  >=  0)
        { this.aspirants . splice (ind, 1);  urn = true; }
      if (this.expirees.indexOf (z)  <  0)
        { this.expirees.push (z);  urn = true; }
      return urn;
    }

  //
  static Globals ()
    { return this.global_iron_lungs; }
  static NumGlobals ()
    { return this.global_iron_lungs.length; }
  static NthGlobal (ind)
    { return Zeubject.CollNth (this.global_iron_lungs, ind); }
  static FindGlobal (nm)
    { return Zeubject.CollFindByName (this.global_iron_lungs, nm); }
  static IndexOfGlobal (irlu)
    { return Zeubject.CollIndexOf (this.global_iron_lungs, irlu); }
  static AppendGlobal (irlu)
    { return Zeubject.CollAppend (this.global_iron_lungs, irlu); }
  static InsertGlobal (irlu, ind)
    { return Zeubject.CollInsert (this.global_iron_lungs, irlu, ind); }
  static RemoveGlobal (irlu)
    { return Zeubject.CollRemove (this.global_iron_lungs, irlu); }
  static RemoveNthGlobal (ind)
    { return Zeubject.CollRemoveNth (this.global_iron_lungs, ind); }

//
///
//

// probably wire in the omni-lung stuff once the obelisk's shadow portends...
}


//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { ZeColl } from "./ZeColl.js";
import { ZeWeakColl } from "./ZeWeakColl.js";


export class IronLung  extends Zeubject
{ //
//  static global_iron_lungs = new Array ();
  static InitializeClassHaplessly ()
    { //
      this.global_iron_lungs = new Array ();
    }

  //
  constructor ()
    { super ();
      this.breathees = new Array ();  // will be weak-ref'd, you see.
      this.aspirants = new Array ();
      this.expirees = new Array ();
    }

  Inhale (ratch, thyme)
    { if (this.expirees.length  >  0)
        { for (const z of this.expirees)
            if (this.IndexOfBreathee (z)  >=  0)
              this._RemoveNthBreathee (z);
          this.expirees = new Array ();
        }
      if (this.aspirants.length  >  0)
        { for (const z of this.aspirants)
            this._AppendBreathee (z);
          this.aspirants = new Array ();
        }

      let z;
      const cnt = this.NumBreathees ();
      let ded_cnt = 0;
      for (let q = 0  ;  q < cnt  ;  ++q)
        if ((z = this.NthBreathee (q))  ==  null)
          ++ded_cnt;
        else
          z . Inhale (ratch, thyme);

      if (ded_cnt  >  this.NumBreathees () / 5)
        { }  // COMPACT!

      if (this.expirees.length  >  0)
        { for (const z of this.expirees)
            if (this.IndexOfBreathee (z)  >=  0)
              this._RemoveNthBreathee (z);
          this.expirees = new Array ();
        }
      if (this.aspirants.length  >  0)
        { for (const z of this.aspirants)
            this._AppendBreathee (z);
          this.aspirants = new Array ();
        }

      return 0;
    }


  //
  NumBreathees ()
    { return this.breathees.length; }
  NthBreathee (ind)
    { return ZeWeakColl.Nth (this.breathees, ind); }
  FindBreathee (nm)
    { return ZeWeakColl.FindByName (this.breathees, nm); }
  IndexOfBreathee (z)
    { return ZeWeakColl.IndexOf (this.breathees, z); }
  _AppendBreathee (z)
    { return ZeWeakColl.Append (this.breathees, z); }
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
    { return ZeWeakColl.Insert (this.breathees, z, ind); }
  _RemoveBreathee (z)
    { const urn = ZeWeakColl.Remove (this.breathees, z);
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
    { return ZeColl.Nth (this.global_iron_lungs, ind); }
  static FindGlobal (nm)
    { return ZeColl.FindByName (this.global_iron_lungs, nm); }
  static IndexOfGlobal (irlu)
    { return ZeColl.IndexOf (this.global_iron_lungs, irlu); }
  static AppendGlobal (irlu)
    { return ZeColl.Append (this.global_iron_lungs, irlu); }
  static InsertGlobal (irlu, ind)
    { return ZeColl.Insert (this.global_iron_lungs, irlu, ind); }
  static RemoveGlobal (irlu)
    { return ZeColl.Remove (this.global_iron_lungs, irlu); }
  static RemoveNthGlobal (ind)
    { return ZeColl.RemoveNth (this.global_iron_lungs, ind); }

//
///
//

// probably wire in the omni-lung stuff once the obelisk's shadow portends...
}


//
///
//

IronLung.InitializeClassHaplessly ();

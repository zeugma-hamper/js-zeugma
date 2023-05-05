
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { LatchZoftGuts } from "./LatchZoftGuts.js";


export class Zoft  extends Zeubject
{ //
//  static default_lung = null;
  static InitializeClassHaplessly ()
    { this.default_lung = null; }

  static DefaultLung ()
    { return this.default_lung; }
  static SetDefaultLung (pulmo)
    { this.default_lung = pulmo; }

  static NewWith (zft_or_plainval)
    { if (zft_or_plainval?.constructor?.name !== 'Zoft')
        return LatchZoft.NewWith (zft_or_plainval);

      return new _EchtZoft ()
        . BecomeLike (zft_or_plainval);
        //. _SetVal (zft_or_plainval . Val ());
    }

  static _PrivateNew ()
    { //
      return new _EchtZoft ();
    }

  //
  constructor ()
    { super ();
      if (this.constructor.name !== '_EchtZoft')
        throw new Error ("Say now: ye cannot instantiate a "
                         + this.constructor.name
                         + " with 'new'; use 'NewWith()' instead. Won't you?");
      this.val = null;
      // this.guts = null;
      const lng = this.constructor.DefaultLung ();
      if (lng != null)
        lng . AppendBreathee (this);
    }

  Val ()
    { return this.val; }
  _SetVal (v)
    { this.val = v;  return this; }

  Set (v)
    { if (this.guts == null)
        return this._SetVal (v);
      this.guts . Set (v);
      return this;
    }

  Guts ()
    { return this.guts; }
  _SetGuts (g)
    { this.guts = g;
      if (g != null)
        g . AppendHost (this);
      return this;
    }

  BecomeLike (zft)
    { if (zft == null  ||  zft == this)
        return this;
      const prevguts = this.guts,
        othaguts = zft . Guts ();
      if (othaguts  ==  this.guts)
        return this;
      this._SetGuts (othaguts);
      this._SetVal (zft . Val ());
      if (prevguts != null)
        prevguts . RemoveHost (this);
      return this;
    }

  Inhale (ratch, thyme)
    { if (this.guts != null)
        this.guts . Inhale (ratch, thyme);
      return 0;
    }
//
///
//

//
  static OffalAdd (aval, bval)
    { let v;
      if (aval == null  &&  bval == null)
        v = null;
      else if (Number.isFinite (aval)  &&  Number.isFinite (bval))
        v = aval + bval;
      else if (aval == null)
        v = bval;
      else if (bval == null)
        v = aval;
      else
        v = aval . Add (bval);
      return v;
    }

  static OffalSub (aval, bval)
    { let v;
      if (aval == null  &&  bval == null)
        v = null;
      else if (Number.isFinite (aval)  &&  Number.isFinite (bval))
        v = aval - bval;
      else if (aval == null)
        v = -bval;
      else if (bval == null)
        v = aval;
      else
        v = aval . Sub (bval);
      return v;
    }

  static OffalMul (aval, bval)
    { let v;
      if (aval == null  ||  bval == null)
        v = null;
      else if (Number.isFinite (aval)  &&  Number.isFinite (bval))
        v = aval * bval;
      // else if (aval == null)
      //   v = -bval;
      // else if (bval == null)
      //   v = aval;
      else
        v = aval . Mul (bval);
      return v;
    }

  static OffalSca (aval, bval)
    { let v;
      if (aval == null  ||  bval == null)
        v = null;
      else if (Number.isFinite (aval)  &&  Number.isFinite (bval))
        v = aval * bval;
      // else if (aval == null)
      //   v = -bval;
      // else if (bval == null)
      //   v = aval;
      else
        v = aval . Sca (bval);
      return v;
    }
}


//
/// the following lately moved over here from LatchZoft.js, in expiation
/// of an importish circular dependency problem...
//

export class LatchZoft  extends Zoft
{ //
  static NewWith (plain_val)
    { const z = Zoft._PrivateNew ();
      const g = new LatchZoftGuts (plain_val);
      z . _SetGuts (g);
      z . _SetVal (plain_val);
      return z;
    }
}


export class _EchtZoft  extends Zoft
{ //
  constructor ()
    { super ();
      this.__proto__ = Zoft.prototype;
    }
}


//
///
//

Zoft.InitializeClassHaplessly ();

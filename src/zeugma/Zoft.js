
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { LatchZoftGuts } from "./LatchZoftGuts.js";

import { IronLung } from "./IronLung.js";

import { Loopervisor } from "./Loopervisor.js";


export class Zoft  extends Zeubject
{ //
//  static default_lung = null;
  static InitializeClassHaplessly ()
    { this.default_lung = null;
      this.one_shot_lung = null;
    }


  static DefaultLung ()
    { return this.default_lung; }
  static SetDefaultLung (pulmo)
    { this.default_lung = pulmo; }

  static OneShotLung ()
    { return this.one_shot_lung; }
  static SetOneShotLung (otl)
    { this.one_shot_lung = otl;  return this; }

  static LungForImmediateUse ()
    { const lng = this.one_shot_lung;
      if (lng)
        { this.one_shot_lung = null;
          return lng;
        }
      if (! this.default_lung)   // this clause is a last resort...
        { const looper = Loopervisor.FirstBorn ();
          return looper . AssuredZoftLung ();
        }
      return this.default_lung;
    }

  // further to the last-resort comment above, the idea here is
  // that for any Zoft that gets created before the entire Z-machine
  // has gotten birthed, we'll still get a lung (via the first-born
  // Loopervisor, which in turn is the one that gets installed in
  // the first ZeWholeShebang (so it's the one we'll get anyway
  // once the rest of the system is intiialized and the shebang has
  // set the default lung on the Zoft class).


  static NewWith (zft_or_plainval, maybe_lung)
    { if (zft_or_plainval?.constructor  !==  Zoft)
        return LatchZoft.NewWith (zft_or_plainval);

      return new _EchtZoft (maybe_lung)
        . BecomeLike (zft_or_plainval);
        //. _SetVal (zft_or_plainval . Val ());
    }

  static _PrivateNew (maybe_lung)
    { //
      return new _EchtZoft (maybe_lung);
    }

  //
  constructor (maybe_lung)
    { super ();
      if (this.constructor  !==  _EchtZoft)
        throw new Error ("Say now: ye cannot instantiate a "
                         + this.constructor.name
                         + " with 'new'; use 'NewWith()' instead. Won't you?");
      this.val = null;
      // this.guts = null;
      let lng = maybe_lung instanceof IronLung  &&  maybe_lung;
      if (! lng)
        lng = this.constructor.LungForImmediateUse ();
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

  SetHard (v)
    { if (this.guts == null)
        return this._SetVal (v);
      this.guts . SetHard (v);
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
  constructor (maybe_lung)
    { super (maybe_lung);
      this.__proto__ = Zoft.prototype;
    }
}


//
///
//

Zoft.InitializeClassHaplessly ();

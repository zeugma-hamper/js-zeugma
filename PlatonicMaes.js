
//
// (c) treadle & loam, provisioners llc
//


import { Vect } from "./Vect.js";

import { SpaceThing } from "./SpaceThing.js"


export class PlatonicMaes  extends SpaceThing
{ //
  constructor ()
    { super ();

      this.loc = Vect.zerov . Dup ();
      this.ovr = Vect.xaxis . Dup ();
      this.upp = Vect.yaxis . Dup ();
      this.wid = 640.0;
      this.hei = 360.0;

      this.layers = new Array ();
    }

  Loc ()
    { return this.loc; }
  Over ()
    { return this.ovr; }
  Up ()
    { return this.up; }
  Norm ()
    { return this.ovr . Cross (this.upp); }

  Width ()
    { return this.wid; }
  Height ()
    { return this.hei; }

  SetLoc (l)
    { this.loc = l;  return this; }
  SetOver (u)
    { this.ovr = o;  return this; }
  SetUp (u)
    { this.upp = u;  return this; }

  SetWidth (w)
    { this.wid = w;  return this; }
  SetHeight (h)
    { this.hei = h;  return this; }



  NumLayers ()
    { return this.layers.length; }

  NthLayer (ind)
    { if (ind < 0  ||  ind >= this.layers.length)
        return null;
      return this.layers[ind];
    }

  IndexOfLayer (z)
    { return this.layers . indexOf (z); }

  FindLayer (nm)
    { return this.layers . find ((el) => (el . Name () == nm)); }

  AppendLayer (z)
    { if (z == null)
        return false;
      layers . push (z);
      return true;
    }

  InsertLayer (z, ind)
    { if (z == null)
        return false;
      if (ind < 0)
        ind = 0;
      else if (ind > layers.length)
        ind = this.layers.length
      this.layers . splice (ind, 0, z);
      return true;
    }

  RemoveLayer (z)
    { let ind = this.IndexOfLayer (z);
      if (ind < 0)
        return false;
      layers . splice (ind, 1);
      return true;
    }
}

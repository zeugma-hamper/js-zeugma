
//
// (c) treadle & loam, provisioners llc
//


class ZESpatialEvent  extends ZeEvent
{ //
  constructor (pr)
    { super (pr);
      this.loc = new Vect (0.0, 0.0, 0.0);
      this.aim = Vect.zAxis . Neg ();
      this.ovr = Vect.xAxis;
    }

  EventIlk ()
    { return "ZESpatialEvent"; }

  CopyPressuresFrom (spe)
    { }
  CopyCaressesFrom (spe)
    { }

  AdoptParticulars (spe)
    { super.AdoptParticulars (spe);
      this.loc = spe.loc . Dup ();
      this.aim = spe.aim . Dup ();
      this.ovr = spe.ovr . Dup ();
      this.CopyPressuresFrom (spe);
      this.CopyCaressesFrom (spe);
      return this;
}

  Loc ()
    { return this.loc; }
  SetLoc (l)
    { this.loc = l;  return this; }

  Aim ()
    { return this.aim; }
  SetAim (a)
    { this.aim = a;  return this; }

  Over ()
    { return this.ovr; }
  SetOver (o)
    { this.ovr = o;  return this; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatial (this); }
}

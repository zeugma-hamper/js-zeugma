
//
// (c) treadle & loam, provisioners llc
//


export class Zeubject  extends Object
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
}


//
// (c) treadle & loam, provisioners llc
//


import { Vect } from "./Vect.js";

import { GrapplerPile } from "./GrapplerPile.js";

import { LimnyThing } from "./LimnyThing.js";


export class SpaceThing  extends LimnyThing
{ //
  constructor ()
    { super ();
      this.gr_pile = null;
    }

  UnsecuredGrapplerPile ()
    { return this.gr_pile; }
  AssuredGrapplerPile ()
    { if (this.gr_pile == null)
        this.gr_pile = new GrapplerPile ();
      return this.gr_pile;
    }

  AppendGrappler (g)
    { if (g != null)
        this.AssuredGrapplerPile () . AppendGrappler (g);
      return this;
    }

  PrependGrappler (g)
    { if (g != null)
        this.AssuredGrapplerPile () . PrependGrappler (g);
      return this;
    }

  FindGrappler (nm)
    { const gp = this.UnsecuredGrapplerPile ();
      return (gp != null)  ?  gp . FindGrappler (nm)  :  null;
    }

  DependCumuMatsFrom (cm_above)
    { if (this.gr_pile == null)
        return (this.cumu_mats = cm_above);
      if (this.cumu_mats == null)
        this.cumu_mats = new CumuMats (false);
      if (cm_above == null)
        this.cumu_mats . FreshenVia (this.gr_pile.pnt_mat,
                                     this.gr_pile.nrm_mat,
                                     this.gr_pile.inv_pnt_mat,
                                     this.gr_pile.inv_nrm_mat);
      else
          this.cumu_mats
            . FreshenVia (this.gr_pile.pnt_mat . Mul (cm_above.pmat),
                          this.gr_pile.nrm_mat . Mul (cm_above.nmat),
                          cm_above.ipmat . Mul (this.gr_pile.inv_pnt_mat),
                          cm_above.inmat . Mul (this.gr_pile.inv_nrm_mat));
      return this.cumu_mats;
    }

  Inhale (ratch, thyme)
    { if (this.gr_pile != null)
        this.gr_pile . Inhale (ratch, thyme);
      return 0;
    }
}

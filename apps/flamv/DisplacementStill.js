
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "/zeugma-lib.js";

import { ZEDisplacementEvent,
         ZEDisplacementAppearEvent,
         ZEDisplacementVanishEvent,
         ZEDisplacementMoveEvent } from "/zeugma-lib.js";

import { ZESpatialPhagy } from "/zeugma-lib.js";

import { base_class } from "/zeugma-lib.js";


class DState
{ constructor (prv)
    { this.prov = prv;
      this.nascent = false;
      this.factual = false;
    }
}


const THRESH = 0.7;


export class DisplacementStill  extends Zeubject
{ //
  static InitializeClassHaplessly ()
    {
    }

//
  constructor ()
    { this.state_by_prov = new Map ();
    }

  EngagedMotionAssisty (e, p, s)
    { 
    }

  ZESpatialMove (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov (prv);

      if (! sta)
        { if (Vect.yaxis . Dot (e . Aim ())  <  THRESH)
            return 0;
          this.state_by_prov . set (prv, sta = new DState (prv));
          sta.nascent = true;
          return 1;
        }

      if (sta.nascent)
        { if (Vect.yaxis . Dot (e . Aim ())  <  THRESH)
            { // presumably emit a farewell event of some to-be-defined ilk
              this.state_by_prov . delete (prv);
            }
          return;
        }

      if (! sta.factual)
        return;  // this'd be exceedingly odd...
      return EngagedMotionAssisty (e, prv, sta);
    }

  ZESpatialHarden (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov (prv);

      if (! sta)
        return;
      // immediately foregoing, we're ignoring the possibility that e.g. the
      // wand's verticality could exceed the threshold at precisely the same
      // time that the button is depressed. hm...

      if (! sta.nascent  ||  sta.factual)
        return;  // weird indeed

      sta.nascent = false;
      sta.factual = true;
    }

  ZESpatialSoften (e)
    { const prv = e . Provenance ();
      const sta = this.state_by_prov (prv);

      if (! sta)
        return;
      if (sta.nascent  ||  ! sta.factual)
        return;

      sta.factual = false;
      sta.nascent = true;
    }
}


DisplacementStill.InitializeClassHaplessly ();

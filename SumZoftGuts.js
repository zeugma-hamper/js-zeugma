
//
// (c) treadle & loam, provisioners llc
//


import { BinarithZoftGuts } from "./BinarithZoftGuts.js"


export class SumZoftGuts  extends BinarithZoftGuts
{ //
  constructor ()
    { super ();
      //
    }

  SummandAZoft ()
    { return this.ZoftA (); }
  SummandBZoft ()
    { return this.ZoftB (); }

  _InstallSummandAZoft (zft)
    { return this._InstallZoftA (zft); }
  _InstallSummandBZoft (zft)
    { return this._InstallZoftB (zft); }

  Inhale (ratch, thyme)
    { if (this.IsFreshFor (ratch))
        return 0;

      let v, aval, bval;
      if (this.zoft_a != null)
        { this.zoft_a . Inhale (ratch, thyme);
          aval = this.zoft_a . Val ();
        }
      if (this.zoft_b != null)
        { this.zoft_b . Inhale (ratch, thyme);
          bval = this.zoft_b . Val ();
        }
      v = Zoft.OffalAdd (aval, bval);

      this.PuppeteerHosts (v);
      return 0;
    }
}

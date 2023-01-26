
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

      if (aval == null  &&  bval == null)
        return -1;
      else if (Number.isFinite (aval)  &&  Number.isFinite (bval))
        v = aval + bval;
      else if (aval == null)
        v = bval;
      else if (bval == null)
        v = aval;
      else
        v = aval . Add (bval);

      this.PuppeteerHosts (v);
      return 0;
    }
}


//
// (c) treadle & loam, provisioners llc
//


import { ZoftGuts } from "./ZoftGuts.js"


export class BinarithZoftGuts  extends ZoftGuts
{ //
  constructor ()
    { super ();
      this.zoft_a = null;
      this.zoft_b = null;
    }

  ZoftA ()
    { return this.zoft_a; }
  ZoftB ()
    { return this.zoft_b; }

  _InstallZoftA (za)
    { this.zoft_a = za;  return this; }
  _InstallZoftB (zb)
    { this.zoft_b = zb;  return this; }

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
      v = this.BinOp () (aval, bval);

      this.PuppeteerHosts (v);
      return 0;
    }
}

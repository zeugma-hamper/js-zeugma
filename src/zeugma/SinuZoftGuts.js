
//
// (c) treadle & loam, provisioners llc
//


import { Zoft } from "./Zoft.js";
import { ZoftGuts } from "./ZoftGuts.js";


export class SinuZoftGuts  extends ZoftGuts
{ //
  constructor ()
    { super ();
      // this.z_ampl = null;
      // this.z_freq = null;
      // this.z_cent = null;
      // this.z_phas = null;
    }

  AmplitudeZoft ()
    { return this.z_ampl; }
  FrequencyZoft ()
    { return this.z_freq; }
  CenterZoft ()
    { return this.z_cent; }
  PhaseZoft ()
    { return this.z_phas; }

  _InstallAmplitudeZoft (z)
    { this.z_ampl = z;  return this; }
  _InstallFrequencyZoft (z)
    { this.z_freq = z;  return this; }
  _InstallCenterZoft (z)
    { this.z_cent = z;  return this; }
  _InstallPhaseZoft (z)
    { this.z_phas = z;  return this; }

  Inhale (ratch, thyme)
    { if (this.IsFreshFor (ratch))
        return 0;

      this.z_ampl . Inhale (ratch, thyme);
      this.z_freq . Inhale (ratch, thyme);
      if (this.z_cent != null)
        this.z_cent . Inhale (ratch, thyme);
      if (this.z_phas != null)
        this.z_phas . Inhale (ratch, thyme);

      let v = thyme * this.z_freq . Val ();
      v -= Math.trunc (v);
      v *= 2.0 * Math.PI;
      if (this.z_phas)
        v += this.z_phas . Val ();
      v = Zoft.OffalSca (this.z_ampl . Val (), Math.sin (v));
      if (this.z_cent)
        v = Zoft.OffalAdd (v, this.z_cent . Val ());

      this.PuppeteerHosts (v);
      this.SetRatchet (ratch);
      return 0;
    }
}

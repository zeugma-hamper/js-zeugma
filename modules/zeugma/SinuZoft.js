//
// (c) treadle & loam, provisioners llc
//

import { SinuZoftGuts } from "./SinuZoftGuts.js";
import { Zoft } from "./Zoft.js";

export class SinuZoft extends Zoft {
  //
  static NewWith(amp, frq, ...cntandphs) {
    const z = Zoft._PrivateNew();
    const g = new SinuZoftGuts();
    g._InstallAmplitudeZoft(Zoft.NewWith(amp));
    g._InstallFrequencyZoft(Zoft.NewWith(frq));
    const cnt = cntandphs[0],
      phs = cntandphs[1];
    g._InstallCenterZoft(cnt == null ? null : Zoft.NewWith(cnt));
    g._InstallPhaseZoft(phs == null ? null : Zoft.NewWith(phs));
    z._SetGuts(g);
    return z;
  }
}

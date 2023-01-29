
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";
import { ViveWandEventSynth } from "./ViveWandEventSynth.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js"
import { RecursiveLimner } from "./RecursiveLimner.js"

import { base_class } from "./interface-ersatzer.js";


export class ZeWholeShebang  extends base_class (Zeubject)
                           . and_interfaces (ZESpatialPhagy, RecursiveLimner)
{ //
  constructor ()
    { super ();
      //
      this.looper = new Loopervisor ();
      this.maeses = new Array ();
      this.auto_attend = true;
    }


  Looper ()
    { return this.looper; }


  Maeses ()
    { return this.maeses; }

  NumMaeses ()
    { return this.maeses.length; }
  NthMaes (ind)
    { return Zeubject.CollNth (this.maeses, ind); }
  FindMaes (nm)
    { return Zeubject.CollFindByName (this.maeses, nm); }
  AppendMaes (ma)
    { return Zeubject.CollAppend (this.maeses, ma); }


  PopulatefromMaesConfig (mconf)
    { for (let descobj of mconf)
        { let ma = PlatonicMaes.NewFromJSON (descobj);
          if (ma != null)
            this.AppendMaes (ma);
        }
      return this;
    }


  InstallSampleMaesConfig ()
    { let samp_maeses = PlatonicMaes.SampleMaesConfigJSON ();
      return this.PopulatefromMaesConfig (samp_maeses);
    }
//

//
///
//

  NewDefaultInstance ()
    { let novo = new ZeWholeShebang ();
      novo . InstallSampleMaesConfig ();

      let loo = novo . Looper ();
      let zolu = loo . AssuredZoftLung ();
      let delu = loo . AssuredDefaultLung ();

      let spaq = new EventAqueduct ();
      spaq . SetName ("spatial-aqueduct");
      spaq . AppendPhage (novo);
      loo . AppendAqueduct (spaq);

      let owa = new OSCViveWandSump ();
      owa . SetName ("wand-sump");
      owa . InstallSampleViveWandTransform ();
      // owa . ForAddressAppendRawExtractor ("/events/spatial");
      // the foregoing and its kin already happen in owa's constructor...
      loo . AppendSump (owa);

      return novo;
    }
}

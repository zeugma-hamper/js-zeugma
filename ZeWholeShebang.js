
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";
import { ViveWandEventSynth } from "./ViveWandEventSynth.js";

import { OSCViveWandSump } from "./OSCViveWandSump.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js"
import { RecursiveLimner } from "./RecursiveLimner.js"

import { base_class } from "./interface-ersatzer.js";


export class ZeWholeShebang  extends base_class (Zeubject)
                           . and_interfaces (ZESpatialPhagy, RecursiveLimner)
{ //
  static canonical_instance = null;

  //
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


  DrawMaesLayers (ratch, thyme)
    { if (this.NumMaeses ()  <  1)
        return this;

      let lay, cm = new CumuMats ();
      for (let ma of this.maeses)
        if (ma != null)
          { let cnt = ma.NumLayers ();
            for (let q = 0  ;  q < cnt  ;  ++q)
              if ((lay = ma.NthLayer (q))  !=  null)
                this.RecursivelyDraw (lay, ratch, cm, null);
          }
      return this;
    }


  AttendToIncomingComms ()
    { for (let smp of this.looper . Sumps ())
        if (smp != null)
          smp . AttendToIncoming ();
      return this;
    }

  SuspendIncomingCommsAttention ()
    { for (let smp of this.looper . Sumps ())
        if (smp != null)
          smp . SuspendAttention ();
      return this;
    }


  RunAndRun ()
    { return this.RunAndRunWithFrameDur (0.0333333); }

  RunAndRunWithFrameDur (fdur)
    { this.looper . SetTargetLoopDur (fdur);
      this.looper . SpinGloriously ();

      if (this.auto_attend == true)
        this.AttendToIncomingComms ();

      return this;
    }


  Travail (ratch, thyme)
    { this.DrawMaesLayers (ratch, thyme);
      return 0;
    }


  InstallSampleMaesConfig ()
    { let samp_maeses = PlatonicMaes.SampleMaesConfigJSON ();
      return this.PopulatefromMaesConfig (samp_maeses);
    }
//

//
///
//

  static CanonicalInstance ()
    { if (this.canonical_instance == null)
        this.canonical_instance = this.NewDefaultInstance ();
      return this.canonical_instance;
    }

  static NewDefaultInstance ()
    { let novo = new ZeWholeShebang ();
      novo . InstallSampleMaesConfig ();

      let loo = novo . Looper ();
      let zolu = loo . AssuredZoftLung ();
      let delu = loo . AssuredDefaultLung ();
      Zoft.SetDefaultLung (zolu);

      let spaq = new EventAqueduct ();
      spaq . SetName ("spatial-aqueduct");
      spaq . AppendPhage (novo);
      loo . AppendAqueduct (spaq);

      let owa = new OSCViveWandSump ();
      owa . SetName ("wand-sump");
      owa . InstallSampleViveWandTransform ();
      // owa . ForAddressAppendRawExtractor ("/events/spatial");
      // the foregoing and its kin already happen in owa's constructor...
      owa . ForAddressAppendAqueduct ("/events/spatial", spaq);
      loo . AppendSump (owa);

      return novo;
    }
}

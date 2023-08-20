
//
// (c) treadle & loam, provisioners llc
//


import { ZeWholeShebang,
         SinuZoft, ZeColor,
         PlatonicMaes,
         DisplacementStill,
         ZEDisplacementPhagy,
         EventAqueduct,
         CheapOSCMessage,
         Zeubject,
         base_class
       } from "/zeugma-lib.js";

import { DisplacementDimpleOverseer } from "/zeugma-gimcracks-lib.js";

//import { io as SOCKIO } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { io as SOCKIO } from "/node_modules/socket.io/client-dist/socket.io.esm.min.js";
let socky = SOCKIO ();


let forsty = new Image ();
forsty.src = "/images/flamv/forster-fry-smaller.png";

let steiny = new Image ();
steiny.src = "/images/flamv/stein-picabia-smaller.png";


class Tattler
  extends base_class (Zeubject) . and_interfaces (ZEDisplacementPhagy)
{ constructor ()  { super (); }
  ZEDisplacementAppear (e)
    { console.log ("APPEAR! who? well, " + e . Provenance ()); }
  ZEDisplacementVanish (e)
    { console.log ("somebody VANISHed; probably " + e . Provenance ()); }
  ZEDisplacementMove (e)
    { const dsp = e . CurDisp ();
      const tw = e . CurTwistDeg ();
      //console.log (`MOVE -- yeah, like to (${dsp[0]}, ${dsp[1]}, ${dsp[2]})`);
      console.log (`MOVE -- yeah, like to TW=${tw} and skeeved by (${dsp[0]}, ${dsp[1]}, ${dsp[2]})` + tw);
    }
  ZEDisplacementHerald (e)
    { if (e.pseudo_maes_and_hit)
        console.log (`PSEUD: maes ${e.pseudo_maes_and_hit[0] . Name ()} at `
                     + `(${e.pseudo_client_xy[0]}, ${e.pseudo_client_xy[1]})`);
    }
}


const tat = new Tattler ();


const horque = function ()
{ const maes_conf = PlatonicMaes.SampleMaesConfigJSON ();
//  maes_conf . splice (1, 2);//maes_conf.length - 1);
  //ZeWholeShebang . SetSingleShotDefaultMaesConfigArray (maes_conf);
//  ZeWholeShebang . SetDefaultMaesConfigArray (maes_conf);
  globalThis.sheb = ZeWholeShebang.CanonicalInstance ();
//  sheb . MergeIntoStartupURLByMaesNameMap ( { "left" : "https://google.com" } );
  //sheb . PopulateFromMaesConfig (maes_conf);
  sheb . BurstFromTheGroundCanvasslessly ();

  console.log (socky);
  let fake_osc = sheb . Looper () . FindSump ("wand-sump") . Oscerizer ();
  socky . on ("/zeugmatic-osc", function (m)
                  { fake_osc . AppendMessage (new CheapOSCMessage (m)); });

  const ddimp_ovrsr = new DisplacementDimpleOverseer (sheb);

  const distil = new DisplacementStill ();
  distil . SetUniversalDetent (40.0);  // that's millimeters, darling.
  distil . SetAngularDetentDeg (20.0);  // degrees, don't you know.
  distil . SetIsMonaxial (true);
  const diaq = new EventAqueduct ();
  diaq . SetName ("displacement-aqueduct");
  distil . AppendAqueduct (diaq);
  sheb . Looper () . AppendAqueduct (diaq);
  diaq . AppendPhage (ddimp_ovrsr);
  diaq . AppendPhage (tat);

  const spaq = sheb . Looper () . FindAqueduct ("spatial-aqueduct");
  spaq . AppendPhage (distil);
  //spaq . AppendPhage (foim);

  let tbma = sheb . FindMaes ("table");
  let sc = SinuZoft . NewWith (new ZeColor (0.0, 0.5, 0.5, 0.0),
                               0.666, new ZeColor (1.0, 0.5, 0.5));
  if (tbma != null)
    tbma . InstallAdjColor (sc);

  let Ingressication = function (ev)
    { this.style.borderColor = "red";
      globalThis.lastentr = ev;
    }

  let Jigglification = function (ev)
    { globalThis.lastmove = ev; }

  let Egressication = function (ev)
    { this.style.borderColor = "rgba(1,1,1,0.0)";
      globalThis.lastleav = ev;
    }

  let Stankication = function (ev)
    { this.style.borderColor = "blue";
    }

  let Plodderizer  = function (ev)
    { if (ev.zeugma_evt == undefined)
        return null;
      let q = 666;
      ++q;
      return this;
    }

  let dawky = globalThis?.window?.document;
  let bahdy = dawky?.body;
  let strippy;

  let Moundify = function (immy)
    { strippy.appendChild (immy);
      immy.style.width = "auto";
      immy.style.height = "400px";
      immy.style.borderStyle = "solid";
      immy.style.borderWidth = "10px";
      immy . addEventListener ("mousemove", Jigglification);
      immy . addEventListener ("mouseenter", Ingressication);
      immy . addEventListener ("mouseleave", Egressication);
    }

  if (dawky != null)
    { strippy = dawky . createElement ('div');
      strippy.style.position = "absolute";
      strippy.style.left = "50px";
      strippy.style.top = "100px";
      bahdy . appendChild (strippy);
      Moundify (steiny);
      Moundify (forsty);
      forsty . addEventListener ("mousedown", Stankication);
      forsty . addEventListener ("mouseup", Ingressication);
    }

  sheb . FlyOnTheirTerms ();
  sheb . SetShouldDeployStandaloneHTMLCursors(true);

  console.log ("honk.");
};

//
/// now: do unto.
//

setTimeout (horque, 1000);

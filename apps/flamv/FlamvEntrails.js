
//
// (c) treadle & loam, provisioners llc
//


import { ZeWholeShebang, SpaceThing,
         RoGrappler, SinuZoft,
         ZEDisplacementPhagy,
         EventAqueduct,
         CheapOSCMessage,
         DisplacementStill,
         Vect, ZeColor,
         Zeubject, base_class } from "/zeugma-lib.js";

import { Schlepner } from "/apps/flamv/Schlepner.js";

import { ShimmyCrate } from "/apps/flamv/ShimmyCrate.js";

import { io as SOCKIO } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
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
      console.log (`MOVE -- yeah, like to ` + tw);
    }
  ZEDisplacementHerald (e)
    { if (e.pseudo_maes_and_hit)
        console.log (`PSEUD: maes ${e.pseudo_maes_and_hit[0] . Name ()} at `
                     + `(${e.pseudo_client_xy[0]}, ${e.pseudo_client_xy[1]})`);
    }
}


const tat = new Tattler ();


const horque = function ()
{ globalThis.sheb = ZeWholeShebang.CanonicalInstance ();
  sheb . BurstFromTheGround ();

  let frma = sheb . FindMaes ('front');
  //frma . InsertLayer (new SpaceThing () . SetName ("omnibus"), 0)
  for (let ma  of  sheb . Maeses ())
    ma . InsertLayer (new SpaceThing () . SetName ("omnibus"), 0)

  console.log (socky);
  let fake_osc = sheb . Looper () . FindSump ("wand-sump") . Oscerizer ();
  socky . on ("/zeugmatic-osc", function (m)
                  { fake_osc . AppendMessage (new CheapOSCMessage (m)); });

  let topshim
    = new ShimmyCrate ("      hints of imminent Mesopotamian eversion",
                       200.0,
                       frma . Loc (),
                       Vect.xaxis . Sub (Vect.negyaxis) . Sca (133.31),
                       0.3113);
  let shic
    = new ShimmyCrate ("    who but Blavatsky?",
                       100.0,
                       Vect.yaxis . Sca (-1250.0),
                       Vect.yaxis . Sca (80.0),
                       0.7);
  shic . AssuredGrapplerPile ()
    . PrependGrappler (new RoGrappler ()
                       . SetAngle (-30.0 * Math.PI / 180.0));
  topshim . AppendChild (shic);

  let ycra = new ShimmyCrate ("     and then the loudest glance...",
                              150.0,
                              Vect.yaxis . Sca (-850.0),
                              Vect.xaxis . Sca (90.0),
                              0.57);
  shic . AppendChild (ycra);

  frma . FindLayer ("omnibus") . AppendChild (topshim);

  globalThis.stim = new Schlepner (steiny, sheb);
  globalThis.foim = new Schlepner (forsty, sheb);
  stim . SetName ("stein") . SetScale (1500.0);
  foim . SetName ("forster") . SetScale (1500.0);
  stim . SetLoc (frma . Loc () . Sub (Vect.xaxis . Sca (1000.0)));
  foim . SetLoc (frma . Loc () . Add (Vect.xaxis . Sca (1000.0)));

  for (let ma  of  sheb . Maeses ())
    { ma . FindLayer ("omnibus") . AppendChild (stim);
      ma . FindLayer ("omnibus") . AppendChild (foim);
    }

  const distil = new DisplacementStill ();
  distil . SetUniversalDetent (40.0);  // that's millimeters, darling.
  const diaq = new EventAqueduct ();
  diaq . SetName ("displacement-aqueduct");
  distil . AppendAqueduct (diaq);
  sheb . Looper () . AppendAqueduct (diaq);
  diaq . AppendPhage (tat);

  const spaq = sheb . Looper () . FindAqueduct ("spatial-aqueduct");
  spaq . AppendPhage (distil);
  spaq . AppendPhage (stim);
  spaq . AppendPhage (foim);

  let tbma = sheb . FindMaes ("table");
  let sc = SinuZoft . NewWith (new ZeColor (0.0, 0.5, 0.5, 0.0),
                               .666, new ZeColor (1.0, 0.5, 0.5));
  if (tbma != null)
    tbma . InstallAdjColor (sc);

  ycra . InstallAdjColor (sc);

  sheb . FlyOnTheirTerms ();

  console.log ("prithee.");
};

//
/// now: do unto.
//

setTimeout (horque, 1000);

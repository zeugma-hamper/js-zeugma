
//
// (c) treadle & loam, provisioners llc
//


import { Schlepner } from "/apps/flamv/Schlepner.js";
import { ShimmyCrate } from "/apps/flamv/ShimmyCrate.js";

globalThis.Schlepner = Schlepner;
globalThis.ShimmyCrate = ShimmyCrate;


globalThis.forsty = new Image ();
forsty.src = "/images/flamv/forster-fry-smaller.png";

globalThis.steiny = new Image ();
steiny.src = "/images/flamv/stein-picabia-smaller.png";


const horque = function ()
{ globalThis.sheb = ZeWholeShebang.CanonicalInstance ();
  sheb . BurstFromTheGround ();

  globalThis.frma = sheb . FindMaes ('front');
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

  let spaq = sheb . Looper () . FindAqueduct ("spatial-aqueduct");
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

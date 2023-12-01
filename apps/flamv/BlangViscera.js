
//
// (c) treadle & loam, provisioners llc
//


import { ZeWholeShebang,
         SinuZoft, ZeColor,
         Matrix44,
         MotherTime,
         PlatonicMaes,
         CheapOSCMessage } from "/zeugma-lib.js";

//import { io as SOCKIO } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { io as SOCKIO } from "/node_modules/socket.io/client-dist/socket.io.esm.min.js";
let socky = SOCKIO ();


let should_transform_wand_coords = false;

let forsty = new Image ();
forsty.src = "/images/flamv/forster-fry-smaller.png";

let steiny = new Image ();
steiny.src = "/images/flamv/stein-picabia-smaller.png";


function EquipMaesWithNamedElementCanvas (ma, elnm, tmout = 60.0)
{ let succy = null, faily = null;
  const zeit = new MotherTime ();
  const shebby = ZeWholeShebang . CanonicalInstance ();

  function Writhe ()
    { if (succy  &&  faily)
        { if (! shebby)
            { faily ("no zeugma, Chet.");  return; }
          const win = shebby . WindowForMaes (ma);
          if (win)
            if (win.document)
              { const canv_cntnr = win.document . getElementById (elnm);
                if (canv_cntnr)
                  { const canv = win.document . createElement ("canvas");
                    canv.width = win.innerWidth;
                    canv.height = win.innerHeight;
                    canv_cntnr . appendChild (canv);
                    canv_cntnr . addEventListener ("pointerdown",
                                                   (e) => {
                                                     console.log ("DAUOON!");
                                                   } );
                    win . addEventListener
                      ("resize", (e) => { canv.width = win.innerWidth;
                                          canv.height = win.innerHeight;
                                        }
                      );
                    succy (canv);
                    return;
                  }
              }
          if (tmout > 0.0)
            if (zeit . CurTime ()  >  tmout)
              { faily ("timed out, like all the way out.");  return; }
        }
      setTimeout (Writhe, 20);
    }

  const prawm = new Promise ((s, f) => { succy = s;  faily = f; });
  Writhe ();
  return prawm;
}


const horque = async function ()
{ const maes_conf = PlatonicMaes.SampleMaesConfigJSON ();
  //maes_conf . splice (2, 1);//maes_conf.length - 1);
  //ZeWholeShebang . SetSingleShotDefaultMaesConfigArray (maes_conf);
  ZeWholeShebang . SetDefaultMaesConfigArray (maes_conf);
  globalThis.sheb = ZeWholeShebang.CanonicalInstance ();
  //sheb . MergeIntoStartupURLByMaesNameMap ( { "left" : "https://google.com" } );
  //sheb . PopulateFromMaesConfig (maes_conf);

  const subm_map = sheb . StartupURLByMaesMap ();
  const promarr = new Array ();
  for (const ma of sheb . Maeses ())
    if (ma)
      { const prom = EquipMaesWithNamedElementCanvas (ma, "windshield");
        promarr . push (prom);
        if (ma  &&  ma . Name ()  !=  "front")
          subm_map . set (ma . Name (), "./otha-zones.html");
      }

  sheb . BurstFromTheGroundCanvaslessly ();
  if (! should_transform_wand_coords)
    { const owa = sheb . Looper () . FindSump ("wand-sump");
      if (owa)
        { owa . SetPointMat (new Matrix44 ());
          owa . SetDirectionMat (new Matrix44 ());
        }
    }

  await Promise.allSettled (promarr);
  sheb . SetShouldHoardNativeMouseEvents (true);
  sheb . SetShouldSynthesizeEvenForNativeOriginatedEvents (true);

  console.log (socky);
  let fake_osc = sheb . Looper () . FindSump ("wand-sump") . Oscerizer ();
console.log("fake_osc: ", fake_osc, "  ... and socky: ", socky);
  socky . on ("/zeugmatic-osc", function (m)
                  { fake_osc . AppendMessage (new CheapOSCMessage (m)); });

  let spaq = sheb . Looper () . FindAqueduct ("spatial-aqueduct");
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

  let Plodderizer = function (ev)
    { if (ev.zeugma_evt == undefined)
        return null;
      let q = 666;
      ++q;
      return this;
    }

  let Desquamate = function (ev)
    { console.log ("CLACK! yes? YES. CLACK!", ev); }

  let dawky = globalThis?.window?.document;
  let bahdy = dawky?.body;
  let strippy;

  let windsh = dawky . getElementById ("windshield");

  let Moundify = function (immy)
    { strippy.appendChild (immy);
      immy.style.width = "auto";
      immy.style.height = "400px";
      immy.style.borderStyle = "solid";
      immy.style.borderWidth = "10px";
      immy . addEventListener ("pointermove", Jigglification);
      immy . addEventListener ("pointerenter", Ingressication);
      immy . addEventListener ("pointerleave", Egressication);
      immy . addEventListener ("click", Desquamate);
    }

  if (dawky != null)
    { strippy = dawky . createElement ('div');
      strippy.style.position = "absolute";
      strippy.style.left = "50px";
      strippy.style.top = "100px";
      //bahdy . appendChild (strippy);
      windsh . before (strippy);
      Moundify (steiny);
      Moundify (forsty);
      forsty . addEventListener ("pointerdown", Stankication);
      forsty . addEventListener ("pointerup", Ingressication);

      document . getElementById ("thweldge")
        . addEventListener ("click", (ev) =>
            { console.log ("CLICKETY CLIKLIQ: ", ev);
              const putty = document . getElementById ("slurp");
              let stuffs = putty.value;
              stuffs = stuffs + " zZ.";
              putty.value = stuffs;
              putty . addEventListener ("focus", (e) =>
                { console.log ("FO; FO CUS, right? ", e); }
              );
            } );
    }

  sheb . FlyOnTheirTerms ();
  sheb . SetShouldDeployStandaloneHTMLCursors (true);
  sheb . SetShouldSynthesizeHTMLPointerEvents (true);
  sheb . SetShouldSynthesizeClicks (true);
  sheb . SetSyntheticClickMaxInterval (0.5);

  console.log ("honk.");
};

//
/// now: do unto.
//

//setTimeout (horque, 1000);

globalThis.horque = horque;

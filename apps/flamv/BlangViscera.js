
//
// (c) treadle & loam, provisioners llc
//


globalThis.forsty = new Image ();
forsty.src = "/images/flamv/forster-fry-smaller.png";

globalThis.steiny = new Image ();
steiny.src = "/images/flamv/stein-picabia-smaller.png";


const horque = function ()
{ globalThis.sheb = ZeWholeShebang.CanonicalInstance ();
  sheb . BurstFromTheGroundCanvasslessly ();

  console.log (socky);
  let fake_osc = sheb . Looper () . FindSump ("wand-sump") . Oscerizer ();
  socky . on ("/zeugmatic-osc", function (m)
                  { fake_osc . AppendMessage (new CheapOSCMessage (m)); });

  let spaq = sheb . Looper () . FindAqueduct ("spatial-aqueduct");
  //spaq . AppendPhage (foim);

  let tbma = sheb . FindMaes ("table");
  let sc = SinuZoft . NewWith (new ZeColor (0.0, 0.5, 0.5, 0.0),
                               .666, new ZeColor (1.0, 0.5, 0.5));
  if (tbma != null)
    tbma . InstallAdjColor (sc);

  let Ingressication = function (ev)
    { this.style.borderColor = "red";
      this.style.borderWidth = "10px";
      globalThis.lastentr = ev;
    }

  let Jigglification = function (ev)
    { globalThis.lastmove = ev; }

  let Egressication = function (ev)
    { this.style.borderColor = "red";
      this.style.borderWidth = "0px";
      globalThis.lastleav = ev;
    }

  let Stankication = function (ev)
    { this.style.borderColor = "blue";
      this.style.borderWidth = "2px";
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
      steiny . addEventListener ("mousemove", Plodderizer);
      steiny . addEventListener ("pointerleave", Stankication);
      Moundify (forsty);
      forsty . addEventListener ("mousedown", Stankication);
    }

  globalThis.window . addEventListener ("mousemove", (ev) =>
    { let q = 1;
      ++q;
    } );

  console.log ("honk.");
};

//
/// now: do unto.
//

setTimeout (horque, 1000);

//
// (c) treadle & loam, provisioners llc
//

import {
  CheapOSCMessage,
  RoGrappler,
  SinuZoft,
  SpaceThing,
  Vect,
  ZeColor,
  ZeWholeShebang,
} from "../../modules/zeugma/zeugma-lib.js";

import { Schlepner } from "./Schlepner.js";
import { ShimmyCrate } from "./ShimmyCrate.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

globalThis.socky = io();

globalThis.Schlepner = Schlepner;
globalThis.ShimmyCrate = ShimmyCrate;

globalThis.forsty = new Image();
globalThis.forsty.src = "/images/flamv/forster-fry-smaller.png";

globalThis.steiny = new Image();
globalThis.steiny.src = "/images/flamv/stein-picabia-smaller.png";

const horque = function () {
  globalThis.sheb = ZeWholeShebang.CanonicalInstance();
  globalThis.sheb.BurstFromTheGround();

  globalThis.frma = globalThis.sheb.FindMaes("front");
  //globalThis.frma . InsertLayer (new SpaceThing () . SetName ("omnibus"), 0)
  for (const ma of globalThis.sheb.Maeses())
    ma.InsertLayer(new SpaceThing().SetName("omnibus"), 0);

  console.log(globalThis.socky);
  const fake_osc = globalThis.sheb.Looper().FindSump("wand-sump").Oscerizer();
  globalThis.socky.on("/zeugmatic-osc", function (m) {
    fake_osc.AppendMessage(new CheapOSCMessage(m));
  });

  const topshim = new ShimmyCrate(
    "      hints of imminent Mesopotamian eversion",
    200.0,
    globalThis.frma.Loc(),
    Vect.xaxis.Sub(Vect.negyaxis).Sca(133.31),
    0.3113
  );
  const shic = new ShimmyCrate(
    "    who but Blavatsky?",
    100.0,
    Vect.yaxis.Sca(-1250.0),
    Vect.yaxis.Sca(80.0),
    0.7
  );
  shic
    .AssuredGrapplerPile()
    .PrependGrappler(new RoGrappler().SetAngle((-30.0 * Math.PI) / 180.0));
  topshim.AppendChild(shic);

  const ycra = new ShimmyCrate(
    "     and then the loudest glance...",
    150.0,
    Vect.yaxis.Sca(-850.0),
    Vect.xaxis.Sca(90.0),
    0.57
  );
  shic.AppendChild(ycra);

  globalThis.frma.FindLayer("omnibus").AppendChild(topshim);

  globalThis.stim = new Schlepner(globalThis.steiny, globalThis.sheb);
  globalThis.foim = new Schlepner(globalThis.forsty, globalThis.sheb);
  globalThis.stim.SetName("stein").SetScale(1500.0);
  globalThis.foim.SetName("forster").SetScale(1500.0);
  globalThis.stim.SetLoc(globalThis.frma.Loc().Sub(Vect.xaxis.Sca(1000.0)));
  globalThis.foim.SetLoc(globalThis.frma.Loc().Add(Vect.xaxis.Sca(1000.0)));

  for (const ma of globalThis.sheb.Maeses()) {
    ma.FindLayer("omnibus").AppendChild(globalThis.stim);
    ma.FindLayer("omnibus").AppendChild(globalThis.foim);
  }

  const spaq = globalThis.sheb.Looper().FindAqueduct("spatial-aqueduct");
  spaq.AppendPhage(globalThis.stim);
  spaq.AppendPhage(globalThis.foim);

  const tbma = globalThis.sheb.FindMaes("table");
  const sc = SinuZoft.NewWith(
    new ZeColor(0.0, 0.5, 0.5, 0.0),
    0.666,
    new ZeColor(1.0, 0.5, 0.5)
  );
  if (tbma != null) tbma.InstallAdjColor(sc);

  ycra.InstallAdjColor(sc);

  globalThis.sheb.FlyOnTheirTerms();

  console.log("prithee.");
};

//
/// now: do unto.
//

setTimeout(horque, 1000);

//
// (c) treadle & loam, provisioners llc
//

import {
  CheapOSCMessage,
  SinuZoft,
  ZeColor,
  ZeWholeShebang,
} from "../../modules/zeugma/zeugma-lib.js";

import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

globalThis.socky = io();

globalThis.forsty = new Image();
globalThis.forsty.src = "/images/flamv/forster-fry-smaller.png";

globalThis.steiny = new Image();
globalThis.steiny.src = "/images/flamv/stein-picabia-smaller.png";

const horque = function () {
  globalThis.sheb = ZeWholeShebang.CanonicalInstance();
  globalThis.sheb.BurstFromTheGroundCanvasslessly();

  console.log(globalThis.socky);
  const fake_osc = globalThis.sheb.Looper().FindSump("wand-sump").Oscerizer();
  globalThis.socky.on("/zeugmatic-osc", function (m) {
    fake_osc.AppendMessage(new CheapOSCMessage(m));
  });

  // const spaq = globalThis.sheb.Looper().FindAqueduct("spatial-aqueduct");
  //spaq.AppendPhage(foim);

  const tbma = globalThis.sheb.FindMaes("table");
  const sc = SinuZoft.NewWith(
    new ZeColor(0.0, 0.5, 0.5, 0.0),
    0.666,
    new ZeColor(1.0, 0.5, 0.5)
  );
  if (tbma != null) tbma.InstallAdjColor(sc);

  const Ingressication = function (ev) {
    this.style.borderColor = "red";
    this.style.borderWidth = "10px";
    globalThis.lastentr = ev;
  };

  const Jigglification = function (ev) {
    globalThis.lastmove = ev;
  };

  const Egressication = function (ev) {
    this.style.borderColor = "red";
    this.style.borderWidth = "0px";
    globalThis.lastleav = ev;
  };

  const Stankication = function (_ev) {
    this.style.borderColor = "blue";
    this.style.borderWidth = "2px";
  };

  /* eslint no-unused-vars: 0 */
  const Plodderizer = function (ev) {
    if (ev.zeugma_evt == undefined) return null;
    let q = 666;
    ++q;
    return this;
  };

  const dawky = globalThis?.window?.document;
  const bahdy = dawky?.body;
  let strippy;

  const Moundify = function (immy) {
    strippy.appendChild(immy);
    immy.style.width = "auto";
    immy.style.height = "400px";
    immy.style.borderStyle = "solid";
    immy.addEventListener("mousemove", Jigglification);
    immy.addEventListener("mouseenter", Ingressication);
    immy.addEventListener("mouseleave", Egressication);
  };

  if (dawky != null) {
    strippy = dawky.createElement("div");
    strippy.style.position = "absolute";
    strippy.style.left = "50px";
    strippy.style.top = "100px";
    bahdy.appendChild(strippy);
    Moundify(globalThis.steiny);
    globalThis.steiny.addEventListener("mousemove", Plodderizer);
    globalThis.steiny.addEventListener("pointerleave", Stankication);
    Moundify(globalThis.forsty);
    globalThis.forsty.addEventListener("mousedown", Stankication);
  }

  /* eslint no-unused-vars: 0 */
  globalThis.window.addEventListener("mousemove", (_ev) => {
    let q = 1;
    ++q;
  });

  console.log("honk.");
};

//
/// now: do unto.
//

setTimeout(horque, 1000);

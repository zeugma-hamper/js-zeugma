//
// (c) treadle & loam, provisioners llc
//

import { Zeubject } from "./Zeubject.js";

export class NativeEventDialectCatcher extends Zeubject {
  //
  constructor(maes, conc) {
    super();
    this.helem = null;
    this.from_maes = maes;
    this.prov = "mouse-0";
    this.concentrator = conc;
  }

  HooverNativeEventsFrom(html_elem) {
    const self = this;
    this.helem = html_elem;
    html_elem.addEventListener("mousemove", (e) => {
      self.NativeMouseMove(e);
    });
    html_elem.addEventListener("mousedown", (e) => {
      self.NativeMouseDown(e);
    });
    html_elem.addEventListener("mouseup", (e) => {
      self.NativeMouseUp(e);
    });
  }

  static PropoXY(e, hel) {
    if (hel.innerWidth != undefined)
      // if hel's the window itself...
      return [
        -0.5 + e.clientX / (hel.innerWidth - 1.0),
        0.5 - e.clientY / (hel.innerHeight - 1.0),
      ];
    // otherwise it'd damn well better be a canvas.
    else
      return [
        -0.5 + e.clientX / (hel.width - 1.0),
        0.5 - e.clientY / (hel.height - 1.0),
      ];
  }

  NativeMouseMove(e) {
    const xy = this.constructor.PropoXY(e, this.helem);
    if (this.concentrator != null)
      this.concentrator.NativeMouseMoveOnMaes(
        e,
        xy[0],
        xy[1],
        this.prov,
        this.from_maes
      );
    return this;
  }

  NativeMouseDown(e) {
    const xy = this.constructor.PropoXY(e, this.helem);
    const b = e.button;
    if (this.concentrator != null)
      this.concentrator.NativeMouseDownOnMaes(
        e,
        xy[0],
        xy[1],
        b,
        this.prov,
        this.from_maes
      );
    return this;
  }

  NativeMouseUp(e) {
    const xy = this.constructor.PropoXY(e, this.helem);
    const b = e.button;
    if (this.concentrator != null)
      this.concentrator.NativeMouseUpOnMaes(
        e,
        xy[0],
        xy[1],
        b,
        this.prov,
        this.from_maes
      );
    return this;
  }
}

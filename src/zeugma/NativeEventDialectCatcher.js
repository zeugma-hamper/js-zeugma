
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js";


function Two_To_The (n)
{ if (n  >=  0)
    return (1 << n);
  return n;
}

export class NativeEventDialectCatcher  extends Zeubject
{ //
  constructor (maes, conc)
    { super ();
      this.helem = null;
      this.from_maes = maes;
      this.prov = "mouse-0";
      this.butt_xfrm_func = Two_To_The;
      this.concentrator = conc;
    }


  ButtonTransformFunc ()
    { return this.butt_xfrm_func; }
  SetButtonTransformFunc (bxf)
    { this.butt_xfrm_func = bxf;  return this; }

  HooverNativeEventsFrom (html_elem)
    { const self = this;
      this.helem = html_elem;
      html_elem . addEventListener ("mousemove",
                                    (e) => { self . NativeMouseMove (e); });
      html_elem . addEventListener ("mousedown",
                                    (e) => { self . NativeMouseDown (e); });
      html_elem . addEventListener ("mouseup",
                                    (e) => { self . NativeMouseUp (e); });
    }

  static PropoXY (e, hel)
    { if (hel.innerWidth != undefined)  // if hel's the window itself...
        return [ -0.5 + e.clientX / (hel.innerWidth - 1.0),
                  0.5 - e.clientY / (hel.innerHeight - 1.0) ];
      else  // otherwise it'd damn well better be a canvas.
        return [ -0.5 + e.clientX / (hel.width - 1.0),
                  0.5 - e.clientY / (hel.height - 1.0) ];
    }

  NativeMouseMove (e)
    { const xy = this.constructor.PropoXY (e, this.helem);
      if (this.concentrator != null)
        this.concentrator . NativeMouseMoveOnMaes (e, xy[0], xy[1], this.prov,
                                                   this.from_maes);
      return this;
    }

  NativeMouseDown (e)
    { const xy = this.constructor.PropoXY (e, this.helem);
      let b = e.button;
      if (this.butt_xfrm_func)
        b = this.butt_xfrm_func (b);

      if (this.concentrator != null)
        this.concentrator . NativeMouseDownOnMaes (e, xy[0], xy[1], b, this.prov,
                                                   this.from_maes);
        return this;
    }

  NativeMouseUp (e)
    { const xy = this.constructor.PropoXY (e, this.helem);
      let b = e.button;
      if (this.butt_xfrm_func)
        b = this.butt_xfrm_func (b);

      if (this.concentrator != null)
        this.concentrator . NativeMouseUpOnMaes (e, xy[0], xy[1], b, this.prov,
                                                 this.from_maes);
      return this;
    }
}

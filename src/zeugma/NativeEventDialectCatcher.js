
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js";




//
// so very much many badnesses. surely almost anything would be better?
//
const MOUSPRV = "mouse-0";



function Two_To_The (n)
{ if (n  >=  0)
    return (1 << n);
  return n;
}


function AdjudicatePropagation (e, decidotron)
{ let wellthen = true;  // true: keep propagatin', you know?

  if (typeof decidotron  ===  "boolean")
    { if (decidotron === false)
        wellthen = false;
    }
  else if (typeof decidotron  ===  "function")
    wellthen = decidotron (e);
  else if (typeof decidotron  ===  "object"
           &&  decidotron.ShouldHoardNativeMouseEvents)
    wellthen = decidotron.ShouldHoardNativeMouseEvents ()  &&  ! e.zeugma_evt;

  if (! wellthen)
    return;

  e . stopPropagation ();
  e . stopImmediatePropagation ();
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

  HooverNativeEventsFrom (html_elem, hog_evts = false)
    { const self = this;
      this.helem = html_elem;
      html_elem . addEventListener ("pointermove",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . NativeMouseMove (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("pointerdown",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . NativeMouseDown (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("pointerup",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . NativeMouseUp (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("click", (e) =>
                                      { AdjudicatePropagation (e, hog_evts); },
                                    true);
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
      e._provenance = MOUSPRV;
      if (this.concentrator != null)
        this.concentrator . NativeMouseMoveOnMaes (e, this.prov,
                                                   this.from_maes, xy[0], xy[1]);
      return this;
    }

  NativeMouseDown (e)
    { const xy = this.constructor.PropoXY (e, this.helem);
      e._provenance = MOUSPRV;
      let b = e.button;
      if (this.butt_xfrm_func)
        b = this.butt_xfrm_func (b);

      if (this.concentrator != null)
        this.concentrator . NativeMouseDownOnMaes (e, this.prov, b,
                                                   this.from_maes, xy[0], xy[1]);
      return this;
    }

  NativeMouseUp (e)
    { const xy = this.constructor.PropoXY (e, this.helem);
      e._provenance = MOUSPRV;
      let b = e.button;
      if (this.butt_xfrm_func)
        b = this.butt_xfrm_func (b);

      if (this.concentrator != null)
        this.concentrator . NativeMouseUpOnMaes (e, this.prov, b,
                                                 this.from_maes, xy[0], xy[1]);
      return this;
    }
}


//
// (c) treadle & loam, provisioners llc
//


import { Vect } from "./Vect.js";

import { Zeubject } from "./Zeubject.js";

import { Loopervisor } from "./Loopervisor.js";

import { EventAqueduct } from "./EventAqueduct.js";

import { ZESpatialPhagy } from "./ZESpatialPhagy.js";




//
// so very much many badnesses. surely almost anything would be better?
//
const MOUSPRV = "mouse-0";
const KEYBPRV = "keyboard-0";



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
      this.butt_xfrm_func = Two_To_The;
      this.whee_xfrm_func = null;
      this.key_xfrm_func = null;
      this.concentrator = conc;
    }


  ButtonTransformFunc ()
    { return this.butt_xfrm_func; }
  SetButtonTransformFunc (bxf)
    { this.butt_xfrm_func = bxf;  return this; }

  HooverNativeEventsFrom (html_elem, hog_evts_consultant = false)
    { const self = this;
      const hog_evts = hog_evts_consultant;
      this.helem = html_elem;
      html_elem . addEventListener ("pointermove",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . CatchNativeMouseMove (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("pointerdown",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . CatchNativeMouseDown (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("pointerup",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . CatchNativeMouseUp (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("keydown",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . CatchNativeKeyDown (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("keyup",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      self . CatchNativeKeyUp (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("wheel",
                                    (e) => {
                                      if (e.zeugma_evt)  return;
                                      console.log ("wheelishly: ", e);
                                      self . CatchNativeWheeling (e);
                                      AdjudicatePropagation (e, hog_evts);
                                    },
                                    true);
      html_elem . addEventListener ("click", (e) =>
                                      { AdjudicatePropagation (e, hog_evts); },
                                    true);
    }

  static PropoXY (e, hel)
    { if (hel.innerWidth != undefined)  // if hel's the window itself...
        return new Vect (-0.5 + e.clientX / (hel.innerWidth - 1.0),
                         0.5 - e.clientY / (hel.innerHeight - 1.0),
                         0.0);
      else  // otherwise it'd damn well better be a canvas.
        return new Vect (-0.5 + e.clientX / (hel.width - 1.0),
                         0.5 - e.clientY / (hel.height - 1.0),
                         0.0);
    }

  CatchNativeMouseMove (e)
    { const loc_v = this.constructor.PropoXY (e, this.helem);
      const prv = (e._provenance = MOUSPRV);
      if (this.concentrator != null)
        this.concentrator . NativeMouseMoveOnMaes (e, prv,
                                                   this.from_maes, loc_v);
      return this;
    }

  CatchNativeMouseDown (e)
    { const loc_v = this.constructor.PropoXY (e, this.helem);
      const prv = (e._provenance = MOUSPRV);
      let b = e.button;
      if (this.butt_xfrm_func)
        b = this.butt_xfrm_func (b);

      if (this.concentrator != null)
        this.concentrator . NativeMouseDownOnMaes (e, prv, b,
                                                   this.from_maes, loc_v);
      return this;
    }

  CatchNativeMouseUp (e)
    { const loc_v = this.constructor.PropoXY (e, this.helem);
      const prv = (e._provenance = MOUSPRV);
      let b = e.button;
      if (this.butt_xfrm_func)
        b = this.butt_xfrm_func (b);

      if (this.concentrator != null)
        this.concentrator . NativeMouseUpOnMaes (e, prv, b,
                                                 this.from_maes, loc_v);
      return this;
    }

  CatchNativeKeyDown (e)
    { const prv = (e._provenance = KEYBPRV);
      let k = e.key;
      if (this.key_xfrm_func)
        k = this.key_xfrm_func (k);

      if (this.concentrator != null)
        this.concentrator . NativeKeyDownOnMaes (e, prv, k,
                                                 this.from_maes);
      return this;
    }

  CatchNativeKeyUp (e)
    { const prv = (e._provenance = KEYBPRV);
      let k = e.key;
      if (this.key_xfrm_func)
        k = this.key_xfrm_func (k);

      if (this.concentrator != null)
        this.concentrator . NativeKeyUpOnMaes (e, prv, k,
                                               this.from_maes);
      return this;
    }

  CatchNativeWheeling (e)
    { const loc_v = this.constructor.PropoXY (e, this.helem);
      let rub_v = new Vect (e.deltaX, e.deltaY, e.deltaZ);
      const prv = (e._provenance = MOUSPRV);
console.log("WHEELIE: (" + e.clientX + ", " + e.clientY + ")");
      if (this.whee_xfrm_func)
        rub_v = this.whee_xfrm_func (rub_v);

      if (this.concentrator != null)
        this.concentrator . NativeWheelingOnMaes (e, prv,
                                                  this.from_maes, rub_v, loc_v);
      return this;
    }
}

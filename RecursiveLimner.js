
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js";


export let RecursiveLimner = (supcls) => class extends supcls
{ //
  RecursivelyDraw (zeub, ratch, cm_above, adjc_above)
    { if (zeub == null)
        return this;

      let cm = cm_above;
      let adjc = adjc_above;
      if (zeub . IsZeugmallyLimnable ())
        { cm = zeub . DependCumuMatsFrom (cm_above);
          zeub . DrawSelf (ratch, cm, adjc_above);
        }

      if (zeub . IsZeugmallyPouchful ())
        { let cnt = zeub . NumChildren ();
          for (let q = 0  ;  q < cnt  ;  ++q)
            this.RecursivelyDraw (zeub . NthChild (q), ratch, cm, adjc);
        }
      return this;
    }
}

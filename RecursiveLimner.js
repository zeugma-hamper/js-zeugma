
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js";


export let RecursiveLimner = (supcls) => class extends supcls
{ //
  RecursivelyDraw (zeub, ratch, thyme, cm_above, adjc_above, bonus)
    { if (zeub == null)
        return this;

      let cm = cm_above;
      let adjc = adjc_above;
      if (zeub . OughtToInhale (ratch))
        zeub . Inhale (ratch, thyme);

      if (zeub . IsZeugmallyLimnable ())
        { cm = zeub . DependCumuMatsFrom (cm_above);
          // accumulate adjustment colorness...
          zeub . DrawSelf (ratch, cm, adjc, bonus);
        }

      if (zeub . IsZeugmallyPouchful ())
        { let cnt = zeub . NumChildren ();
          let bon_inc = this.AdvanceLimnRecursionBonus (bonus);
          for (let q = 0  ;  q < cnt  ;  ++q)
            this.RecursivelyDraw (zeub . NthChild (q), ratch, cm, adjc, bon_inc);
        }
      return this;
    }

  AdvanceLimnRecursionBonus (bon)
    { return bon; }
}

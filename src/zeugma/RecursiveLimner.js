
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js";


export const RecursiveLimner = (supcls) => class extends supcls
{ //
  RecursivelyDraw (zeub, ratch, thyme, cm_above, adjc_above, geombndl)
    { if (zeub == null)
        return this;

      let cm = cm_above;
      let adjc = adjc_above;
      if (zeub . OughtToInhale (ratch))
        zeub . Inhale (ratch, thyme);

      if (zeub . IsZeugmallyLimnable ())
        { const { gctx } = geombndl;
          if (gctx != null)
            gctx . save ();

          cm = zeub . DependCumuMatsFrom (cm_above);
          adjc = adjc . Dup () . MulSelfBy (zeub . AdjColor ());
          zeub . DrawSelf (ratch, cm, adjc, geombndl);

          if (gctx != null)
            gctx . restore ();
        }

      if (zeub . IsZeugmallyPouchful ())
        { const cnt = zeub . NumChildren ();
          const bon_inc = this.AdvanceLimnRecursionGeomBundle (geombndl);
          for (let q = 0  ;  q < cnt  ;  ++q)
            this.RecursivelyDraw (zeub . NthChild (q), ratch, thyme,
                                  cm, adjc, bon_inc);
        }
      return this;
    }

  AdvanceLimnRecursionGeomBundle (bon)
    { return bon; }
};

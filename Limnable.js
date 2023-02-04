
//
// (c) treadle & loam, provisioners llc
//


export const Limnable = (supah) => class extends supah
{ //
  IsZeugmallyLimnable ()
    { return true; }

  UnsecuredGrapplerPile ()
    { return null; }

  CurrentCumuMats ()
    { return null; }

  DependCumuMatsFrom (cm_above)
    { return cm_above; }


  QueryShouldDraw ()
    { return true; }
  QueryShouldDrawBeforeChildren ()
    { return true; }
  QueryShouldDrawChildrenEvenIfNotSelf ()
    { return false; }
  QueryShouldCalcCumuMatsEvenIfNotDrawing ()
    { return false; }

  DrawSelf (ratch, cm, adjc, bonus)
    { return 0; }
}

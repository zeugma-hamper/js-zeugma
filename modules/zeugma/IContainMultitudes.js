
//
// (c) treadle & loam, provisioners llc
//


export const IContainMultitudes = (supah) => class extends supah
{ //
  IsZeugmallyPouchful ()
    { return true; }

  CanHoldChildren ()
    { return false; }

  Children ()
    { return null; }

  NumChildren ()
    { return 0; }

  NthChild (ind)
    { return null; }

  AppendChild (z)
    { return false; }

  InsertChild (z, ind)
    { return false; }

  RemoveChild (z)
    { return false; }

  IndexForChild (z)
    { return -1; }

  FindChild (nm)
    { return null; }
};

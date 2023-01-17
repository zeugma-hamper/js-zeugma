
//
// (c) treadle & loam, provisioners llc
//


class ZESpatialMoveEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialMoveEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialMove (this); }
}

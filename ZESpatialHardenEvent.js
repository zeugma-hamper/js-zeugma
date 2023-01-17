
//
// (c) treadle & loam, provisioners llc
//


class ZESpatialHardenEvent  extends ZESpatialPressureEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialHardenEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialHarden (this); }
}

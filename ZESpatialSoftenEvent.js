
//
// (c) treadle & loam, provisioners llc
//


class ZESpatialSoftenEvent  extends ZESpatialPressureEvent
{ //
  constructor (pr)
    { super (pr); }

  EventIlk ()
    { return "ZESpatialSoftenEvent"; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialSoften (this); }
}

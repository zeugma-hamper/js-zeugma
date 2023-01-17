
//
// (c) treadle & loam, provisioners llc
//


class ZESpatialCaressEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr);
      this.crs_id = -1;
      this.crs_val = Vect.zerov;
    }

  EventIlk ()
    { return "ZESpatialCaressEvent"; }

  AdoptParticulars (sce)
    { super.AdoptParticulars (sce);
      this.SetWhichCaressor (sce.crs_id);
      this.SetCaressValue (sce.crs_val);
      return this;
    }

  WhichCaressor ()
    { return this.crs_id; }
  SetWhichCaressor (cid)
    { this.crs_id = cid;  return this; }

  CaressValue ()
    { return this.crs_val; }
  SetCaressValue (cvl)  // a Vect, if you please.
    { this.crs_val = cvl;  return this; }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZeSpatialCaress (this); }
}

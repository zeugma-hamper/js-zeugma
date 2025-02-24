
//
// (c) treadle & loam, provisioners llc
//


import { ZESpatialEvent } from "./ZESpatialEvent.js";

import { Vect } from "./Vect.js";


export class ZESpatialCaressEvent  extends ZESpatialEvent
{ //
  constructor (pr)
    { super (pr);
      this.crs_id = -1;
      this.crs_devilk = "unknown";
      this.crs_val = Vect.zerov;
      this.assoc_pntg_evt = null;
    }

  EventIlk ()
    { return "ZESpatialCaressEvent"; }

  AdoptParticulars (sce)
    { super.AdoptParticulars (sce);
      this.SetWhichCaressor (sce.crs_id);
      this.SetCaressDeviceIlk (sce.crs_devilk);
      this.SetCaressValue (sce.crs_val);
      this.SetAssociatedPointingEvent (sce.assoc_pntg_evt);
      return this;
    }

  InjectParticularsInto (sce)
    { super.InjectParticularsInto (sce);
      sce . SetWhichCaressor (this.crs_id);
      sce . SetCaressDeviceIlk (this.crs_devilk);
      sce . SetCaressValue (this.crs_val);
      sce . SetAssociatedPointingEvent (this.assoc_pntg_evt);
      return this;
    }

  WhichCaressor ()
    { return this.crs_id; }
  SetWhichCaressor (cid)
    { this.crs_id = cid;  return this; }

  CaressDeviceIlk ()
    { return this.crs_devilk; }
  SetCaressDeviceIlk (cdi)
    { this.crs_devilk = cdi;  return this; }

  CaressValue ()
    { return this.crs_val; }
  SetCaressValue (cvl)  // a Vect, if you please.
    { this.crs_val = cvl;  return this; }

  AssociatedPointingEvent ()
    { return this.assoc_pntg_evt; }
  SetAssociatedPointingEvent (ape)
    { this.assoc_pntg_evt = ape;  return this; }


  ProfferAsQuaffTo (zbj)
    { return zbj . ZESpatialCaress (this); }
}


// just in the nick of time, faux-interface:
ZESpatialCaressEvent.Phage = (supah) => class extends supah
{ ZESpatialCaress (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.ZESpatial (e);
      return -1;
    }
};

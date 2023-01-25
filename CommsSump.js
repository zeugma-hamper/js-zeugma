
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"


export class CommsSump  extends Zeubject
{ //
  constructor ()
    { super ();
      this.rawex_by_address = new Map ();
      this.synth_by_address = new Map ();
      this.ducts_by_address = new Map ();
    }

  _InMapForAddressAppendThingy (mapp, addr, ding)
    { let arr = mapp . get (addr);
      if (arr == undefined)
        mapp . set (arr = new Array ());
      if (arr . indexOf (ding)  >=  0)
         return false;
      arr . push (ding);
      return true;
    }

  ForAddressAppendRawExtractor (addr, rawex)
    { return
        this._InMapForAddressAppendThingy (this.rawex_by_address, addr, rawex);
    }

  ForAddressAppendSynthFunc (addr, funq)
    { return
        this._InMapForAddressAppendThingy (this.synth_by_address, addr, funq);
    }

  ForAddressAppendAqueduct (addr, duct)
    { return
        this._InMapForAddressAppendThingy (this.ducts_by_address, addr, duct);
    }

  RawExtractionViaAddress (addr, payload)
    { let rawex = this.rawex_by_address . get (addr);
      if (rawex != null)
        return rawex (payload);
      return payload;
    }

  SynthesizeEventViaAddress (addr, argarr)
    { let synther = this.synth_by_address . get (addr);
      if (synther != null)
        return synther (argarr);
      return null;
    }

  DispatchEventViaAddress (addr, e)
    { let ductarr = this.ducts_by_address . get (addr);
      if (ductarr != null)
        for (let duct of ductarr)
          duct . AppendDram (e);
      return this;
    }

  // for subclasses to be the implenting of. da.
  ProcessSump ()
    { throw new Error ("ProcessSump() -- implement in subclass, please."); }
  AttendToIncoming ()
    { throw new Error ("AttendToIncoming() -- implement in subclass, please."); }
  SuspendAttention ()
    { throw new Error ("SuspendAttention() -- implement in subclass, please."); }
}

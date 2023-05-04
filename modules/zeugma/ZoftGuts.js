
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"

import { ZeWeakColl } from "./ZeWeakColl.js";


export class ZoftGuts
{ //
  constructor ()
    { this.rat_fresh = -1;
      this.zt_hosts = new Array ();
    }

  Set (v)
    { throw new Error ("alas, cannot use Set() when guts are of type " +
                       this.constructor.name + "...");
    }

  AppendHost (zft)
    { return ZeWeakColl.Append (this.zt_hosts, zft); }

  RemoveHost (zft)
    { return ZeWeakColl.Remove (this.zt_hosts, zft); }

  Hosts ()
    { let zft;
      const out_arr = new Array ();
      for (const wkel of this.zt_hosts)
        if (wkel != null  &&  (zft = wkel . deref ()) != null)
          out_arr . push (zft);
      return out_arr;
    }

  Ratchet ()
    { return this.rat_fresh; }
  SetRatchet (ratch)
    { this.rat_fresh = ratch;  return this; }

  IsFreshFor (ratch)
    { return (this.rat_fresh >= ratch); }

  PuppeteerHosts (val)
    { let zft;
      for (const wkel of this.zt_hosts)
        if (wkel != null  &&  (zft = wkel . deref ()) != null)
          zft . _SetVal (val);
      return this;
    }

  Inhale (ratch, thyme)
    { return 0; }
}


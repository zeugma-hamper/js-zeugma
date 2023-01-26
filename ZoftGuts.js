
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"


export class ZoftGuts
{ //
  constructor ()
    { this.rat_fresh = -1;
      this.zt_hosts = new Array ();
    }

  AppendHost (zft)
    { return Zeubject.WeakCollAppend (this.zt_hosts, zft); }

  RemoveHost (zft)
    { return Zeubject.WeakCollRemove (this.zt_hosts, zft); }

  Hosts ()
    { let zft, out_arr = new Array ();
      for (let wkel of this.zt_hosts)
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
      for (let wkel of this.zt_hosts)
        if (wkel != null  &&  (zft = wkel . deref ()) != null)
          zft . _SetVal (val);
      return this;
    }

  Inhale (ratch, thyme)
    { return 0; }
}



//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"


export class EventAqueduct  extends Zeubject
{ //
  constructor ()
    { super ();
      this.phages = new Array ();
      this.drams = new Array ();
    }

  DrainReservoir ()
    { for (let evt of this.drams)
        if (dr != null)
          this.FlowToPhages (evt);
      drams = new Array ();
      return this;
    }

  FlowToPhages (e)
    { let urn = 0;
      for (let ph of phages)
        if (ph != null)
          if ((urn = e . ProfferAsQuaffTo (ph))  >  1)
            return urn;
      return 0;
    }

  //
  NumPhages ()  { return this.phages.length; }
  NthPhage (ind)  { return Zeubject.CollNth (this.phages, ind); }
  FindPhage (nm)  { return Zeubject.CollFindByName (this.phages, nm); }
  IndexOfPhage (ph)  { return Zeubject.CollIndexOf (this.phages, ph); }
  AppendPhage (ph)  { return Zeubject.CollAppend (this.phages, ph); }
  InsertPhage (ph, ind)  { return Zeubject.CollInsert (this.phages, ph, ind); }
  RemovePhage (ph)  { return Zeubject.CollRemove (this.phages, ph); }

  //
  NumDrams ()  { return this.drams.length; }
  NthDram (ind)  { return Zeubject.CollNth (this.drams, ind); }
  FindDram (nm)  { return Zeubject.CollFindByName (this.drams, nm); }
  IndexOfDram (ev)  { return Zeubject.CollIndexOf (this.drams, ev); }
  AppendDram (ev)  { return Zeubject.CollAppend (this.drams, ev); }
  InsertDram (ev, ind)  { return Zeubject.CollInsert (this.drams, ev, ind); }
  RemoveDram (ev)  { return Zeubject.CollRemove (this.drams, ev); }
}

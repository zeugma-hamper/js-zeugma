
//
// (c) treadle & loam, provisioners llc
//


import { ZeEvent } from "./ZeEvent.js";

import { Vect } from "./Vect.js";


export class ZEDisplacementEvent  extends ZeEvent
{ //
  constructor (pr)
    { super (pr);

      this.estab_axs_0 = this.prev_axs_0 = this.cur_axs_0 = Vect.xaxis;
      this.estab_axs_1 = this.prev_axs_1 = this.cur_axs_1 = Vect.yaxis;
      this.estab_axs_2 = this.prev_axs_2 = this.cur_axs_2 = Vect.zaxis;
      this.estab_loc = new Array (0.0, 0.0, 0.0);
      this.prev_loc = new Array (0.0, 0.0, 0.0);
      this.cur_loc = new Array (0.0, 0.0, 0.0);
    }

  EventIlk ()
    { return "ZEDisplacementEvent"; }


  EstabAxis0 ()  { return this.estab_axs_0; }
  EstabAxis1 ()  { return this.estab_axs_1; }
  EstabAxis2 ()  { return this.estab_axs_2; }
  SetEstabAxes (ax0, ax1, ax2)
    { this.estab_axs_0 = ax0;  this.estab_axs_1 = ax1;
      this.estab_axs_2 = ax2;  return this;
    }

  PrevAxis0 ()  { return this.prev_axs_0; }
  PrevAxis1 ()  { return this.prev_axs_1; }
  PrevAxis2 ()  { return this.prev_axs_2; }
  SetPrevAxes (ax0, ax1, ax2)
    { this.prev_axs_0 = ax0;  this.prev_axs_1 = ax1;
      this.prev_axs_2 = ax2;  return this;
    }

  CurAxis0 ()  { return this.cur_axs_0; }
  CurAxis1 ()  { return this.cur_axs_1; }
  CurAxis2 ()  { return this.cur_axs_2; }
  SetCurAxes (ax0, ax1, ax2)
    { this.cur_axs_0 = ax0;  this.cur_axs_1 = ax1;
      this.cur_axs_2 = ax2;  return this;
    }

  EstabLoc ()  { return this.estab_loc; }
  EstabLoc0 ()  { return this.estab_loc[0]; }
  EstabLoc1 ()  { return this.estab_loc[1]; }
  EstabLoc2 ()  { return this.estab_loc[2]; }
  SetEstabLoc (a0, a1, a2)
    { this.estab_loc = new Array (a0, a1, a2);  return this; }

  PrevLoc ()  { return this.prev_loc; }
  PrevLoc0 ()  { return this.prev_loc[0]; }
  PrevLoc1 ()  { return this.prev_loc[1]; }
  PrevLoc2 ()  { return this.prev_loc[2]; }
  SetPrevLoc (a0, a1, a2)
    { this.prev_loc = new Array (a0, a1, a2);  return this; }

  CurLoc ()  { return this.cur_loc; }
  CurLoc0 ()  { return this.cur_loc[0]; }
  CurLoc1 ()  { return this.cur_loc[1]; }
  CurLoc2 ()  { return this.cur_loc[2]; }
  SetCurLoc (a0, a1, a2)
    { this.cur_loc = new Array (a0, a1, a2);  return this; }

  ProfferAsQuaffTo (zbj)
    { return zbj . ZEDisplacement (this); }
}

// lip-smacking faux-interface delight
ZEDisplacementEvent.Phage = (supah) => class extends supah
{ ZEDisplacement (e)  // arg's an event
    { if (this.PassTheBuckUpPhageHierarchy ())
        return this.Ze (e);
      return -1;
    }
};

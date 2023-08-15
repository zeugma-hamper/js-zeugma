
//
// (c) treadle & loam, provisioners llc
//


import { ZeEvent } from "./ZeEvent.js";

import { Vect } from "./Vect.js";


export class ZEDisplacementEvent  extends ZeEvent
{ //
  constructor (pr)
    { super (pr);

      this.axis_0 = Vect.xaxis . Dup ();
      this.axis_1 = Vect.yaxis . Dup ();
      this.axis_2 = Vect.zaxis . Dup ();
      this.estab_loc = Vect.zerov . Dup ();
      this.prev_disp = new Array (0.0, 0.0, 0.0);
      this.cur_disp = new Array (0.0, 0.0, 0.0);
      this.raw_disp = new Array (0.0, 0.0, 0.0);
    }

  EventIlk ()
    { return "ZEDisplacementEvent"; }


  Axis0 ()  { return this.estab_axs_0; }
  Axis1 ()  { return this.estab_axs_1; }
  Axis2 ()  { return this.estab_axs_2; }
  SetAxes (ax0, ax1, ax2)
    { this.axis_0 = ax0;  this.axis_1 = ax1;
      this.axis_2 = ax2;  return this;
    }

  EstabLoc ()  { return this.estab_loc; }
  SetEstabLoc (loc_v)
    { this.estab_disp = loc_v;  return this; }

  PrevDisp ()  { return this.prev_disp; }
  PrevDisp0 ()  { return this.prev_disp[0]; }
  PrevDisp1 ()  { return this.prev_disp[1]; }
  PrevDisp2 ()  { return this.prev_disp[2]; }
  SetPrevDisp (a0, a1, a2)
    { this.prev_disp = new Array (a0, a1, a2);  return this; }

  CurDisp ()  { return this.cur_disp; }
  CurDisp0 ()  { return this.cur_disp[0]; }
  CurDisp1 ()  { return this.cur_disp[1]; }
  CurDisp2 ()  { return this.cur_disp[2]; }
  SetCurDisp (a0, a1, a2)
    { this.cur_disp = new Array (a0, a1, a2);  return this; }

  RawDisp ()  { return this.raw_disp; }
  RawDisp0 ()  { return this.raw_disp[0]; }
  RawDisp1 ()  { return this.raw_disp[1]; }
  RawDisp2 ()  { return this.raw_disp[2]; }
  SetRawDisp (a0, a1, a2)
    { this.raw_disp = new Array (a0, a1, a2);  return this; }


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

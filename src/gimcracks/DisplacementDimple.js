

//
// (c) treadle & loam, provisioners llc
//


import { ZeWholeShebang,
         SinuZoft, ZeColor,
         PlatonicMaes,
         DisplacementStill,
         ZEDisplacementPhagy,
         EventAqueduct,
         CheapOSCMessage,
         Zeubject,
         base_class
       } from "/zeugma-lib.js";



export class DisplacementDimple
       extends base_class (Zeubject) . and_interfaces (ZEDisplacementPhagy)
{ //

  static InitializeClassHaplessly ()
    { //
      this.instance_cnt = 0;
    }

  static NextInstanceID ()
    { return ++this.instance_cnt; }
//
  constructor ()
    { super ();

      this.cur_maes = null;
      this.cur_wind = null;
      this.dom_elmt = null;
      this.inst_id = this.constructor . NextInstanceID ();
    }

  CurMaes ()
    { return this.cur_maes; }
  SetCurMaes (m)
    { this.cur_maes = m;  return this; }

  CurWindow ()
    { return this.cur_wind; }
  SetCurWindow (m)
    { this.cur_wind = m;  return this; }

  DomElement ()
    { if (! this.dom_elmt)
        { if (this.cur_wind)
            return null;
          let de = this.cur_wind.document . createElement ('div');
          de.id = "zeugma-displacement-dimple-" + this.inst_id;

          this.dom_elmt = de;
        }
      return this.dom_elmt;
    }
}


export class DisplacementDimpleOverseer
       extends base_class (Zeubject) . and_interfaces (ZEDisplacementPhagy)
{ //

  constructor (msrc)
    { super ();

      this.active_dimples_by_prov = new Map ();
      if (msrc)
        this . SetMaesSource (msrc);
      else
        this.maes_source = null;

    }

  MaesSource ()
    { return this.maes_source; }
  SetMaesSource (ms)
    { this.maes_source = ms;  return this; }


  ZEDisplacementHerald (e)
    { const prv = e . Provenance ();
      let dimp = this.active_dimples_by_prov . get (prv);
      if (! dimp)
        { dimp = new DisplacementDimple ();
          this.active_dimples_by_prov . set (prv, dimp);
        }
      const mah = e . MaesAndHit ();
      if (! mah  ||  ! this.maes_source)
        return;
      const ma = mah[0];
      const win = this.maes_source . WindowForMaes (mah);
      if (!ma  ||  ! win)
        return;

      if (ma  !=  dimp . CurMaes ())
        { // something something...
          dimp . SetCurMaes (ma);
        }

      
    }
}

//
///
//

DisplacementDimple.InitializeClassHaplessly ();

DisplacementDimpleOverseer.InitializeClassHaplessly ();

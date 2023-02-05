
//
// (c) treadle & loam, provisioners llc
//


import { Grappler } from "./Grappler.js"


export class TrGrappler  extends Grappler
{ //
  constructor (tr_vect_or_zoft)
    { super ();
      if (tr_vect_or_zoft == undefined)
        this.trans = Zoft.NewWith (Vect.zerov);
      else
        this.trans = Zoft.NewWith (tr_vect_or_zoft);
      this.pm = new Matrix44 ();
      this.ipm = new Matrix44 ();
    }

  Translation ()
    { return this.trans . Val (); }
  SetTranslation (tvect)
    { this.trans . Set (tvect);  return this; }

  TranslationZoft ()
    { return this.trans; }
  InstallTranslation (t_zft)
    { this.trans . BecomeLike (t_zft);  return this; }

  PntMat ()
    { return this.pm; }
  InvPntMat ()
    { return this.ipm; }

  Inhale (ratch, thyme)
    { let tr = this.trans . Val ();
      this.pm . LoadTranslation (tr);
      this.ipm . LoadTranslationXYZ (-tr.x, -tr.y, -tr.z);
      return 0;
    }
}

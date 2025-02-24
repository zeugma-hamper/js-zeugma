
//
// (c) treadle & loam, provisioners llc
//


import { SpaceThing } from "./SpaceThing.js";

import { CoGrappler } from "./CoGrappler.js";
import { ScGrappler } from "./ScGrappler.js";
import { TrGrappler } from "./TrGrappler.js";

import { Zoft } from "./Zoft.js";

import { Vect } from "./Vect.js";


export class Alignifer  extends SpaceThing
{ //
  constructor ()
    { super ();
      this.z_loc = Zoft.NewWith (Vect.zerov);
      this.z_sca = Zoft.NewWith (Vect.onesv);
      this.ovr = Vect.xaxis;
      this.upp = Vect.yaxis;
      this.nrm = Vect.zaxis;

      const cog = new CoGrappler ();
      cog . SetName ("alignment");
      this.AppendGrappler (cog);

      const scg = new ScGrappler () . InstallScale (this.z_sca);
      scg . SetName ("scale");
      this.AppendGrappler (scg);

      const trg = new TrGrappler () . InstallTranslation (this.z_loc);
      trg . SetName ("loc");
      this.AppendGrappler (trg);
    }

  AlignmentGrappler ()
    { return this.FindGrappler ("alignment"); }
  ScaleGrappler ()
    { return this.FindGrappler ("scale"); }
  LocGrappler ()
    { return this.FindGrappler ("loc"); }

  ScaleGrapplerScaZoft ()
    { const scg = this.ScaleGrappler ();
      return (scg != null)  ?  scg . ScaleZoft ()  :  null;
    }
  ScaleGrapplerCntZoft ()
    { const scg = this.ScaleGrappler ();
      return (scg != null)  ?  scg . CenterZoft ()  :  null;
    }

  LocGrapplerZoft ()
    { const trg = this.LocGrappler ();
      return (trg != null)  ?  trg . TranslationZoft ()  :  null;
    }


  InstallLocGrapplerZoft (lgzo)
    { const trg = this.LocGrappler ();
      if (trg == null)
        return false;
      trg . InstallTranslation (lgzo);
      this.z_loc . BecomeLike (lgzo);
      return true;
    }

  InstallScaleGrapplerZoft (sgzo)
    { const scg = this . ScaleGrappler ();
      if (scg == null)
        return false;
      scg . InstallScale (sgzo);
      this.z_sca . BecomeLike (sgzo);
      return true;
    }


  CurScale ()
    { return this.z_sca . Val (); }
  CurLoc ()
    { return this.z_loc . Val (); }

  ScaleZoft ()
    { return this.z_sca; }
  LocZoft ()
    { return this.z_loc; }


  SetScale (vec_or_sclr)
    { if ('number' == typeof vec_or_sclr)
        this.z_sca . Set (new Vect (vec_or_sclr, vec_or_sclr, vec_or_sclr));
      else
        this.z_sca . Set (vec_or_sclr);
      return this;
    }

  SetLoc (ell)
    { this.z_loc . Set (ell);  return this; }


  CurOver ()
    { return this.ovr; }
  CurUp ()
    { return this.upp; }
  CurNorm ()
    { return this.nrm; }


  AlignOverUp (ov, up)
    { const o = ov . Norm (),  u = up . Norm ();
      const n = o . Cross (u);

      const cgr = this.AlignmentGrappler ();
      if (cgr != null)
        cgr . SetViaNormalizedBasisVectors (o, u, n);

      this.ovr = o;  this.upp = u;  this.nrm = n;
      return this;
    }

  AlignToOther (afer)
    { if (afer != null)
        this.AlignOverUp (afer . CurOver (), afer . CurUp ());
      return this;
    }

  AlignToMaes (maes)
    { if (maes != null)
        this.AlignOverUp (maes . Over (), maes . Up ());
    }
//
}

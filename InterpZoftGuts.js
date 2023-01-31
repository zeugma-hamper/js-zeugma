
//
// (c) treadle & loam, provisioners llc
//


import { ZoftGuts } from "./ZoftGuts.js";

import  { ZoftInterpFuncs } from "./ZoftInterpFuncs.js";


export class InterpZoftGuts  extends ZoftGuts
{ //
  constructor ()
    { super ();
      // this.z_pnt_a = null;
      // this.z_pnt_b = null;
      this.interp_time = 1.0;
      this.interp_func = ZoftInterpFuncs.ASYMP;
      this.natal = true;
      this.replete = false;
      // this.start_time = ??
      // this.recent_time = ??
    }

  PointAZoft ()
    { return this.z_pnt_a; }
  PointBZoft ()
    { return this.z_pnt_b; }

  _InstallPointAZoft (z)
    { this.z_pnt_a = z;  return this; }
  _InstallPointBZoft (z)
    { this.z_pnt_b = z;  return this; }

  InterpTime ()
    { return this.interp_time; }
  SetInterpTime (t)
    { this.interp_time = t;  return this; }

  InterpFunc ()
    { return this.interp_func; }
  SetInterpFunc (f)
    { this.interp_func = f;  return this; }

//

  IsReplete ()
    { return this.replete; }

  Commence ()
    { this.natal = true;
      this.replete = false;
      this.recent_time = 0.0;
      return this;
    }

  Pause ()
    { this.recent_time = -Math.abs (this.recent_time);   return this; }

  Continue ()
    { this.recent_time = Math.abs (this.recent_time);   return this; }

  Finish ()
    { this.recent_time = this.interp_time;  return this; }

  Reverse ()
    { let tmp = this.z_pnt_a;
      this.z_pnt_a = this.z_pnt_b;
      this.z_pnt_b = tmp;
      if (this.replete)
        this.Commence ();
      else
        this.recent_time = this.interp_time - this.recent_time;
      return this;
    }

  ProceedTo (next_b)
    { this.z_pnt_a . BecomeLike (this.z_pnt_b);
      this.z_pnt_b . BecomeLike (Zoft.NewWith (next_b));
      return this;
    }


  SetGoal (goal_zoft_or_val)
    { this.ProceedTo (goal_zoft_or_val);  this.Commence ();  return this; }

  Set (goal_zoft_or_val)
    { return this.SetGoal (goal_zoft_or_val); }


  Inhale (ratch, thyme)
    { if (this.IsFreshFor (ratch))
        return 0;

      this.z_pnt_a . Inhale (ratch, thyme);
      this.z_pnt_b . Inhale (ratch, thyme);

      if (this.natal)
        { this.start_time = thyme;
          this.natal = false;
        }

      if (this.recent_time >= this.interp_time)
        { this.PuppeteerHosts (this.z_pnt_b . Val ());
          this.replete = true;
          return 0;
        }

      this.recent_time = thyme - this.start_time;

      let t = this.recent_time / this.interp_time;
      t = this.interp_func (t);
      if (t > 1.0)
        t = 1.0;
      let v = Zoft.OffalAdd (Zoft.OffalSca (this.z_pnt_a . Val (), (1.0 - t)),
                             Zoft.OffalSca (this.z_pnt_b . Val (), t));
      this.PuppeteerHosts (v);
      this.SetRatchet (ratch);
      return 0;
    }
//
}

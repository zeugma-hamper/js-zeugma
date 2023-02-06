
//
// (c) treadle & loam, provisioners llc
//


import { Grappler } from "./Grappler.js"


export class CoGrappler  extends Grappler
{ //
  constructor (tr_vect_or_zoft)
    { super ();
      this.nm = new Matrix44 ();
      this.inm = new Matrix44 ();
      this.z_ovr = null;
      this.z_upp = null;
      this.z_nrm = null;
    }

  PntMat ()
    { return nm; }
  InvPntMat ()
    { return inm; }
  NrmMat ()
    { return nm; }
  InvNrmMat ()
    { return inm; }


  InstallOver (zovr)
    { this.z_ovr = zovr;  return this; }
  InstallUp (zupp)
    { this.z_upp = zupp;  return this; }
  InstallNorm (znrm)
    { this.z_nrm = znrm;  return this; }

  OverZoft ()
    { return this.z_ovr; }
  UpZoft ()
    { return this.z_upp; }
  NormZoft ()
    { return this.z_nrm; }


  SetViaNormalizedBasisVectors (e0, e1, e2)
    { this.nm . Load (e0.x, e0.y, e0.z, 0.0,
                      e1.x, e1.y, e1.z, 0.0,
                      e2.x, e2.y, e2.z, 0.0,
                      0.0, 0.0, 0.0, 1.0);
      this.inm . Load (e0.x, e1.x, e2.x, 0.0,
                       e0.y, e1.y, e2.y, 0.0,
                       e0.z, e1.z, e2.z, 0.0,
                       0.0, 0.0, 0.0, 1.0);
      return this;
    }

  SetViaPreNormedOverAndUp (o, u)
    { let n = o . Cross (u);
      return this.SetViaNormalizedBasisVectors (o, u, n);
    }
  SetViaOverAndUp (o, u)
    { return this.SetViaPreNormedOverAndUp (o . Norm (), u . Norm ()); }

  SetViaPreNormedOverAndNorm (o, n)
    { let u = n . Cross (o);
      return this.SetViaNormalizedBasisVectors (o, u, n);
    }
  SetViaOverAndNorm (o, n)
    { return this.SetViaPreNormedOverAndNorm (o . Norm (), n . Norm ()); }

  SetViaPreNormedUpAndNorm (u, n)
    { let o = u . Cross (n);
      return this.SetViaNormalizedBasisVectors (o, u, n);
    }
  SetViaUpAndNorm (u, n)
    { return this.SetViaPreNormedUpAndNorm (u . Norm (), n . Norm ()); }


  Inhale (ratch, thyme)
    { let o, u, n;
      if (z_ovr == null)
        { if (z_upp == null  ||  z_nrm == null)
            return 0;
          z_upp . Inhale (ratch, thyme);
          z_nrm . Inhale (ratch, thyme);
          u = z_upp . Val () . Norm ();
          n = z_nrm . Val () . Norm ();
          o = u . Cross (n);
        }
      else
        { if (z_upp == null  &&  z_nrm == null)
            return 0;
          z_ovr . Inhale (ratch, thyme);
          o = z_ovr . Val () . Norm ();
          if (z_upp != null)
            { z_upp . Inhale (ratch, thyme);
              u = z_upp . Val . Norm ();
              n = o . Cross (u);
            }
          else
            { z_nrm . Inhale (ratch, thyme);
              n = z_nrm . Val () . Norm ();
              u = n . Cross (o);
            }
          this.SetViaNormalizedBasisVectors (o, u, n);
        }
      return 0;
    }
//
}

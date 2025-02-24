
//
// (c) treadle & loam, provisioners llc
//


import { OSCSump } from "./OSCSump.js";

import { ViveWandEventSynth } from "./ViveWandEventSynth.js";

import { Matrix44 } from "./Matrix44.js";

import { Vect } from "./Vect.js";



export class OSCViveWandSump  extends OSCSump
{ //
  constructor (maes_source)
    { super ();
      this.point_mat = null;
      this.direc_mat = null;
      this.synth_obj = new ViveWandEventSynth ();

      const self = this;
      this.ForAddressAppendRawExtractor
        ("/events/spatial",
         (oscarr) => { return self.OSCToWandArgs (oscarr); }
        );

      this.ForAddressAppendSynthFunc
        ("/events/spatial",
         (args) => { return (self.synth_obj . InterpretRawWandishWithMaesSource
                               (maes_source,
                                args[0], args[1], args[2],
                                args[3], args[4], args[5]));
                   }
        );
    }

  PointMat ()
    { return this.point_mat; }
  SetPointMat (pm)
    { this.point_mat = pm;  return this; }

  DirectionMat ()
    { return this.direc_mat; }
  SetDirectionMat (dm)
    { this.direc_mat = dm;  return this; }

  OSCToWandArgs (oscarr)
    { if (oscarr.length  <  12)
        return null;
      const prv = oscarr[0];
      const butts = oscarr[1].low;   // good god...
      const pos = new Vect (oscarr[2], oscarr[3], oscarr[4]);
      const aim = new Vect (oscarr[5], oscarr[6], oscarr[7]);
      const ovr = new Vect (oscarr[8], oscarr[9], oscarr[10]);

      if (this.point_mat != null  &&  this.direc_mat != null)
        { this.point_mat . TransformVectInPlace (pos);
          this.direc_mat . TransformVectInPlace (aim);
          this.direc_mat . TransformVectInPlace (ovr);
        }

      const crs_cnt = oscarr[11];
      const crsarr = new Array ();
      if (crs_cnt  &&  typeof (crs_cnt) === "number")  // here come the caresses
        { let ind = 12;
          for (let q = 0  ;  q < crs_cnt  ;  ++q)
            { const crsid = oscarr[ind++];
              const crsdilk = oscarr[ind++];
              const crsx = oscarr[ind++];
              const crsy = oscarr[ind++];
              if (crsid == null
                  ||  crsdilk == null
                  ||  crsx == null
                  ||  crsy == null)
                break;   // malformed input, so abandon post
              crsarr . push ( [crsid, crsdilk, new Vect (crsx, crsy, 0.0)] );
            }
        }

      const retarr = [prv, butts, crsarr,
                      pos, aim, ovr];
      return retarr;
    }


//
  InstallSampleViveWandTransform ()
    { const xforms = this.constructor . SampleViveWandTransformJSON ();
      this.SetPointMat (xforms.point_mat);
      this.SetDirectionMat (xforms.direc_mat);
    }
//
///
//

  static SampleViveWandTransformJSON ()
    { return { direc_mat:
               new Matrix44 () . LoadArr (
                   [ -0.999983,  0.004270,  0.003954,  0.000000,
                     0.004259,  0.999987,  -0.002680,  0.000000,
                     -0.003965,  -0.002663,  -0.999989,  0.000000,
                     0.000000,  0.000000,  0.000000,  1.000000
                   ]),
               point_mat:
               new Matrix44 () . LoadArr (
                   [ -0.999983,  0.004270,  0.003954,  0.000000,
                     0.004259,  0.999987,  -0.002680,  0.000000,
                     -0.003965,  -0.002663,  -0.999989,  0.000000,
                     122.249093,  -101.721171,  -961.508224,  1.000000
                   ])
             };
    }
}

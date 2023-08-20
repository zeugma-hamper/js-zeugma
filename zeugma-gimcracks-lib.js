
//
// (c) treadle & loam, provisioners llc
//


const gim = new Map ();

//
///
//

import { squirt_all_properties_from_unto,
         squirt_all_properties_from_unto_global }
  from "./src/zeugma/omni-squirter.js";

gim.squirt_all_properties_from_unto
  = squirt_all_properties_from_unto;

gim.squirt_all_properties_from_unto_global
  = squirt_all_properties_from_unto_global;

gim.squirt_zeugma_gimcracks_unto_global
  = function ()  { squirt_all_properties_from_unto_global (gim); };



//
///
//

import { DisplacementDimple, DisplacementDimpleOverseer }
   from "./src/gimcracks/DisplacementDimple.js";
export { DisplacementDimple, DisplacementDimpleOverseer }
  from "./src/gimcracks/DisplacementDimple.js";
gim.DisplacementDimple = DisplacementDimple;
gim.DisplacementDimpleOverseer = DisplacementDimpleOverseer;


//
///
//

export default gim;

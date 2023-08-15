
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js";

import { ZEDisplacementEvent } from "./ZEDisplacementEvent.js";
import { ZEDisplacementAppearEvent } from "./ZEDisplacementAppearEvent.js";
import { ZEDisplacementVanishEvent } from "./ZEDisplacementVanishEvent.js";
import { ZEDisplacementMoveEvent } from "./ZEDisplacementMoveEvent.js";


export const ZEDisplacementPhagy
  = ((supah) => base_class (supah)
       . and_interfaces (ZEDisplacementEvent.Phage,
                         ZEDisplacementAppearEvent.Phage,
                         ZEDisplacementVanishEvent.Phage,
                         ZEDisplacementMoveEvent.Phage)
    );

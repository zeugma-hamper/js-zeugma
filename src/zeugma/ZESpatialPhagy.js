
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js";

import { ZeEvent } from "./ZeEvent.js";
import { ZESpatialEvent } from "./ZESpatialEvent.js";
import { ZESpatialAppearEvent } from "./ZESpatialAppearEvent.js";
import { ZESpatialVanishEvent } from "./ZESpatialVanishEvent.js";
import { ZESpatialMoveEvent } from "./ZESpatialMoveEvent.js";
import { ZESpatialCaressEvent } from "./ZESpatialCaressEvent.js";
import { ZESpatialPressureEvent } from "./ZESpatialPressureEvent.js";
import { ZESpatialHardenEvent } from "./ZESpatialHardenEvent.js";
import { ZESpatialSoftenEvent } from "./ZESpatialSoftenEvent.js";


export const ZESpatialPhagy
  = ((supah) => base_class (supah)
       . and_interfaces (ZeEvent.Phage,
                         ZESpatialEvent.Phage,
                         ZESpatialAppearEvent.Phage,
                         ZESpatialVanishEvent.Phage,
                         ZESpatialMoveEvent.Phage,
                         ZESpatialCaressEvent.Phage,
                         ZESpatialPressureEvent.Phage,
                         ZESpatialHardenEvent.Phage,
                         ZESpatialSoftenEvent.Phage)
    );

//
// (c) treadle & loam, provisioners llc
//

import { ZESpatialAppearEvent } from "./ZESpatialAppearEvent.js";
import { ZESpatialCaressEvent } from "./ZESpatialCaressEvent.js";
import { ZESpatialEvent } from "./ZESpatialEvent.js";
import { ZESpatialHardenEvent } from "./ZESpatialHardenEvent.js";
import { ZESpatialMoveEvent } from "./ZESpatialMoveEvent.js";
import { ZESpatialPressureEvent } from "./ZESpatialPressureEvent.js";
import { ZESpatialSoftenEvent } from "./ZESpatialSoftenEvent.js";
import { ZESpatialVanishEvent } from "./ZESpatialVanishEvent.js";
import { ZeEvent } from "./ZeEvent.js";
import { base_class } from "./interface-ersatzer.js";

export const ZESpatialPhagy = (supah) =>
  base_class(supah).and_interfaces(
    ZeEvent.Phage,
    ZESpatialEvent.Phage,
    ZESpatialAppearEvent.Phage,
    ZESpatialVanishEvent.Phage,
    ZESpatialMoveEvent.Phage,
    ZESpatialCaressEvent.Phage,
    ZESpatialPressureEvent.Phage,
    ZESpatialHardenEvent.Phage,
    ZESpatialSoftenEvent.Phage
  );

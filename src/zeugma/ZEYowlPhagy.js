
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js";

import { ZeEvent } from "./ZeEvent.js";
import { ZEYowlEvent } from "./ZEYowlEvent.js";
import { ZEYowlAppearEvent } from "./ZEYowlAppearEvent.js";
import { ZEYowlVanishEvent } from "./ZEYowlVanishEvent.js";


export const ZEYowlPhagy
  = ((supah) => base_class (supah)
       . and_interfaces (ZeEvent.Phage,
                         ZEYowlEvent.Phage,
                         ZEYowlAppearEvent.Phage,
                         ZEYowlVanishEvent.Phage)
    );


//
// (c) treadle & loam, provisioners llc
//


let zeu = { };

//
///
//

import { squirt_all_properties_from_unto,
         squirt_all_properties_from_unto_global } from "./omni-squirter.js";

zeu.squirt_all_properties_from_unto
  = squirt_all_properties_from_unto;

zeu.squirt_all_properties_from_unto_global
  = squirt_all_properties_from_unto_global;

zeu.squirt_zeugma_unto_global
  = function ()  { squirt_all_properties_from_unto_global (zeu); };


//
///
//

import { Vect } from "./Vect.js";
import { Matrix44 } from "./Matrix44.js";
zeu.Vect = Vect;
zeu.Matrix44 = Matrix44;

import { Zeubject } from "/modules/zeugma/Zeubject.js";
zeu.Zeubject = Zeubject;

import { ZeEvent } from "/modules/zeugma/ZeEvent.js"
import { ZESpatialEvent } from "/modules/zeugma/ZESpatialEvent.js"
import { ZESpatialAppearEvent } from "/modules/zeugma/ZESpatialAppearEvent.js";
import { ZESpatialVanishEvent } from "/modules/zeugma/ZESpatialVanishEvent.js";
import { ZESpatialMoveEvent } from "/modules/zeugma/ZESpatialMoveEvent.js";
import { ZESpatialCaressEvent } from "/modules/zeugma/ZESpatialCaressEvent.js";
import { ZESpatialPressureEvent } from "/modules/zeugma/ZESpatialPressureEvent.js";
import { ZESpatialHardenEvent } from "/modules/zeugma/ZESpatialHardenEvent.js";
import { ZESpatialSoftenEvent } from "/modules/zeugma/ZESpatialSoftenEvent.js";
zeu.ZeEvent = ZeEvent;
zeu.ZESpatialEvent = ZESpatialEvent
zeu.ZESpatialAppearEvent = ZESpatialAppearEvent;
zeu.ZESpatialVanishEvent = ZESpatialVanishEvent;
zeu.ZESpatialMoveEvent = ZESpatialMoveEvent;
zeu.ZESpatialCaressEvent = ZESpatialCaressEvent;
zeu.ZESpatialPressureEvent = ZESpatialPressureEvent;
zeu.ZESpatialHardenEvent = ZESpatialHardenEvent;
zeu.ZESpatialSoftenEvent = ZESpatialSoftenEvent;


//
///
//

export default zeu;

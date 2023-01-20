
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

import { base_class } from "./interface-ersatzer.js";
zeu.base_class = base_class;


//
///
//

import { Vect } from "./Vect.js";
import { Matrix44 } from "./Matrix44.js";
import { Geom } from "./Geom.js"
zeu.Vect = Vect;
zeu.Matrix44 = Matrix44;
zeu.Geom = Geom;

import { Zeubject } from "/modules/zeugma/Zeubject.js";
import { IContainMultitudes } from "/modules/zeugma/IContainMultitudes.js";
import { PouchyThing } from "/modules/zeugma/PouchyThing.js";
zeu.Zeubject = Zeubject;
zeu.IContainMultitudes = IContainMultitudes;
zeu.PouchyThing = PouchyThing;

import { CumuMats } from "/modules/zeugma/CumuMats.js";
import { Grappler } from "/modules/zeugma/Grappler.js";
import { GrapplerPile } from "/modules/zeugma/GrapplerPile.js";
zeu.CumuMats = CumuMats;
zeu.Grappler = Grappler;
zeu.GrapplerPile = GrapplerPile;

import { Limnable } from "/modules/zeugma/Limnable.js";
import { LimnyThing } from "/modules/zeugma/LimnyThing.js";
import { SpaceThing } from "/modules/zeugma/SpaceThing.js";
import { PlatonicMaes } from "/modules/zeugma/PlatonicMaes.js";
zeu.Limnable = Limnable;
zeu.LimnyThing = LimnyThing;
zeu.SpaceThing = SpaceThing;
zeu.PlatonicMaes = PlatonicMaes;

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

import { ZESpatialPhagy } from "/modules/zeugma/ZESpatialPhagy.js";
zeu.ZESpatialPhagy = ZESpatialPhagy;


//
///
//

export default zeu;

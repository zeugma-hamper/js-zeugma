
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
import { Geom } from "./Geom.js";
import { MotherTime } from "./MotherTime.js";
zeu.Vect = Vect;
zeu.Matrix44 = Matrix44;
zeu.Geom = Geom;
zeu.MotherTime = MotherTime;

import { Zeubject } from "/modules/zeugma/Zeubject.js";
import { IContainMultitudes } from "/modules/zeugma/IContainMultitudes.js";
import { PouchyThing } from "/modules/zeugma/PouchyThing.js";
zeu.Zeubject = Zeubject;
zeu.IContainMultitudes = IContainMultitudes;
zeu.PouchyThing = PouchyThing;

import { IronLung } from "/modules/zeugma/IronLung.js";
import { CommsSump } from "/modules/zeugma/CommsSump.js";
import { OSCSump } from "/modules/zeugma/OSCSump.js";
import { OSCViveWandSump } from "/modules/zeugma/OSCViveWandSump.js";
import { ViveWandEventSynth } from "/modules/zeugma/ViveWandEventSynth.js";
import { EventAqueduct } from "/modules/zeugma/EventAqueduct.js";
zeu.IronLung = IronLung;
zeu.CommsSump = CommsSump;
zeu.EventAqueduct = EventAqueduct;

import { Loopervisor } from "/modules/zeugma/Loopervisor.js";
zeu.Loopervisor = Loopervisor;

import { Zoft } from "/modules/zeugma/Zoft.js";
import { LatchZoft } from "/modules/zeugma/LatchZoft.js";
import { SumZoft } from "/modules/zeugma/SumZoft.js";
import { DiffZoft } from "/modules/zeugma/DiffZoft.js";
import { ProdZoft } from "/modules/zeugma/ProdZoft.js";
import { ScaleZoft } from "/modules/zeugma/ScaleZoft.js";
zeu.Zoft = Zoft;
zeu.LatchZoft = LatchZoft;
zeu.SumZoft = SumZoft;
zeu.DiffZoft = DiffZoft;
zeu.ProdZoft = ProdZoft;
zeu.ScaleZoft = ScaleZoft;

import { CumuMats } from "/modules/zeugma/CumuMats.js";
import { Grappler } from "/modules/zeugma/Grappler.js";
import { TrGrappler } from "/modules/zeugma/TrGrappler.js";
import { GrapplerPile } from "/modules/zeugma/GrapplerPile.js";
zeu.CumuMats = CumuMats;
zeu.Grappler = Grappler;
zeu.TrGrappler = TrGrappler;
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

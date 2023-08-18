
//
// (c) treadle & loam, provisioners llc
//


const zeu = new Map ();

//
///
//

import { squirt_all_properties_from_unto,
         squirt_all_properties_from_unto_global }
  from "./src/zeugma/omni-squirter.js";

zeu.squirt_all_properties_from_unto
  = squirt_all_properties_from_unto;

zeu.squirt_all_properties_from_unto_global
  = squirt_all_properties_from_unto_global;

zeu.squirt_zeugma_unto_global
  = function ()  { squirt_all_properties_from_unto_global (zeu); };



//
///
//

import { base_class } from "./src/zeugma/interface-ersatzer.js";
export { base_class } from "./src/zeugma/interface-ersatzer.js";
zeu.base_class = base_class;


//
///
//

import { Vect } from "./src/zeugma/Vect.js";
export { Vect } from "./src/zeugma/Vect.js";
import { Matrix44 } from "./src/zeugma/Matrix44.js";
export { Matrix44 } from "./src/zeugma/Matrix44.js";
import { Geom } from "./src/zeugma/Geom.js";
export { Geom } from "./src/zeugma/Geom.js";
import { MotherTime } from "./src/zeugma/MotherTime.js";
export { MotherTime } from "./src/zeugma/MotherTime.js";
import { ZeColor } from "./src/zeugma/ZeColor.js";
export { ZeColor } from "./src/zeugma/ZeColor.js";
zeu.Vect = Vect;
zeu.Matrix44 = Matrix44;
zeu.Geom = Geom;
zeu.MotherTime = MotherTime;
zeu.ZeColor = ZeColor;

import { ZeColl } from "./src/zeugma/ZeColl.js";
export { ZeColl } from "./src/zeugma/ZeColl.js";
import { ZeWeakColl } from "./src/zeugma/ZeWeakColl.js";
export { ZeWeakColl } from "./src/zeugma/ZeWeakColl.js";
zeu.ZeColl = ZeColl;
zeu.ZeWeakColl = ZeWeakColl;

import { Zeubject } from "./src/zeugma/Zeubject.js";
export { Zeubject } from "./src/zeugma/Zeubject.js";
import { IContainMultitudes } from "./src/zeugma/IContainMultitudes.js";
export { IContainMultitudes } from "./src/zeugma/IContainMultitudes.js";
import { PouchyThing } from "./src/zeugma/PouchyThing.js";
export { PouchyThing } from "./src/zeugma/PouchyThing.js";
zeu.Zeubject = Zeubject;
zeu.IContainMultitudes = IContainMultitudes;
zeu.PouchyThing = PouchyThing;

import { IronLung } from "./src/zeugma/IronLung.js";
export { IronLung } from "./src/zeugma/IronLung.js";
import { CommsSump } from "./src/zeugma/CommsSump.js";
export { CommsSump } from "./src/zeugma/CommsSump.js";
import { OSCSump } from "./src/zeugma/OSCSump.js";
export { OSCSump } from "./src/zeugma/OSCSump.js";
import { OSCViveWandSump } from "./src/zeugma/OSCViveWandSump.js";
export { OSCViveWandSump } from "./src/zeugma/OSCViveWandSump.js";
import { ViveWandEventSynth } from "./src/zeugma/ViveWandEventSynth.js";
export { ViveWandEventSynth } from "./src/zeugma/ViveWandEventSynth.js";
import { DisplacementStill } from "./src/zeugma/DisplacementStill.js";
export { DisplacementStill } from "./src/zeugma/DisplacementStill.js";
import { EventAqueduct } from "./src/zeugma/EventAqueduct.js";
export { EventAqueduct } from "./src/zeugma/EventAqueduct.js";
zeu.IronLung = IronLung;
zeu.CommsSump = CommsSump;
zeu.OSCSump = OSCSump;
zeu.OSCViveWandSump = OSCViveWandSump;
zeu.ViveWandEventSynth = ViveWandEventSynth;
zeu.DisplacementStill = DisplacementStill;
zeu.EventAqueduct = EventAqueduct;

import { OSCFaker } from "./src/zeugma/OSCFaker.js";
export { OSCFaker } from "./src/zeugma/OSCFaker.js";
import { CheapOSCMessage } from "./src/zeugma/CheapOSCMessage.js";
export { CheapOSCMessage } from "./src/zeugma/CheapOSCMessage.js";
zeu.OSCFaker = OSCFaker;
zeu.CheapOSCMessage = CheapOSCMessage;

import { Loopervisor } from "./src/zeugma/Loopervisor.js";
export { Loopervisor } from "./src/zeugma/Loopervisor.js";
zeu.Loopervisor = Loopervisor;

import { Zoft } from "./src/zeugma/Zoft.js";
export { Zoft } from "./src/zeugma/Zoft.js";
import { LatchZoft } from "./src/zeugma/LatchZoft.js";
export { LatchZoft } from "./src/zeugma/LatchZoft.js";
import { SumZoft } from "./src/zeugma/SumZoft.js";
export { SumZoft } from "./src/zeugma/SumZoft.js";
import { DiffZoft } from "./src/zeugma/DiffZoft.js";
export { DiffZoft } from "./src/zeugma/DiffZoft.js";
import { ProdZoft } from "./src/zeugma/ProdZoft.js";
export { ProdZoft } from "./src/zeugma/ProdZoft.js";
import { ScaleZoft } from "./src/zeugma/ScaleZoft.js";
export { ScaleZoft } from "./src/zeugma/ScaleZoft.js";
import { LoopZoft } from "./src/zeugma/LoopZoft.js";
export { LoopZoft } from "./src/zeugma/LoopZoft.js";
import { SinuZoft } from "./src/zeugma/SinuZoft.js";
export { SinuZoft } from "./src/zeugma/SinuZoft.js";
import { InterpZoft } from "./src/zeugma/InterpZoft.js";
export { InterpZoft } from "./src/zeugma/InterpZoft.js";
import { ZoftInterpFuncs } from "./src/zeugma/ZoftInterpFuncs.js";
export { ZoftInterpFuncs } from "./src/zeugma/ZoftInterpFuncs.js";
zeu.Zoft = Zoft;
zeu.LatchZoft = LatchZoft;
zeu.SumZoft = SumZoft;
zeu.DiffZoft = DiffZoft;
zeu.ProdZoft = ProdZoft;
zeu.ScaleZoft = ScaleZoft;
zeu.LoopZoft = LoopZoft;
zeu.SinuZoft = SinuZoft;
zeu.InterpZoft = InterpZoft;
zeu.ZoftInterpFuncs = ZoftInterpFuncs;

import { CumuMats } from "./src/zeugma/CumuMats.js";
export { CumuMats } from "./src/zeugma/CumuMats.js";
import { Grappler } from "./src/zeugma/Grappler.js";
export { Grappler } from "./src/zeugma/Grappler.js";
import { CoGrappler } from "./src/zeugma/CoGrappler.js";
export { CoGrappler } from "./src/zeugma/CoGrappler.js";
import { TrGrappler } from "./src/zeugma/TrGrappler.js";
export { TrGrappler } from "./src/zeugma/TrGrappler.js";
import { ScGrappler } from "./src/zeugma/ScGrappler.js";
export { ScGrappler } from "./src/zeugma/ScGrappler.js";
import { RoGrappler } from "./src/zeugma/RoGrappler.js";
export { RoGrappler } from "./src/zeugma/RoGrappler.js";
import { GrapplerPile } from "./src/zeugma/GrapplerPile.js";
export { GrapplerPile } from "./src/zeugma/GrapplerPile.js";
zeu.CumuMats = CumuMats;
zeu.Grappler = Grappler;
zeu.CoGrappler = CoGrappler;
zeu.TrGrappler = TrGrappler;
zeu.ScGrappler = ScGrappler;
zeu.RoGrappler = RoGrappler;
zeu.GrapplerPile = GrapplerPile;

import { Limnable } from "./src/zeugma/Limnable.js";
export { Limnable } from "./src/zeugma/Limnable.js";
import { LimnyThing } from "./src/zeugma/LimnyThing.js";
export { LimnyThing } from "./src/zeugma/LimnyThing.js";
import { SpaceThing } from "./src/zeugma/SpaceThing.js";
export { SpaceThing } from "./src/zeugma/SpaceThing.js";
import { Alignifer } from "./src/zeugma/Alignifer.js";
export { Alignifer } from "./src/zeugma/Alignifer.js";
import { PolygonPile } from "./src/zeugma/PolygonPile.js";
export { PolygonPile } from "./src/zeugma/PolygonPile.js";
import { ImageSplatter } from "./src/zeugma/ImageSplatter.js";
export { ImageSplatter } from "./src/zeugma/ImageSplatter.js";
zeu.Limnable = Limnable;
zeu.LimnyThing = LimnyThing;
zeu.SpaceThing = SpaceThing;
zeu.Alignifer = Alignifer;
zeu.PolygonPile = PolygonPile;
zeu.ImageSplatter = ImageSplatter;

import { PlatonicMaes } from "./src/zeugma/PlatonicMaes.js";
export { PlatonicMaes } from "./src/zeugma/PlatonicMaes.js";
import { Bolex } from "./src/zeugma/Bolex.js";
export { Bolex } from "./src/zeugma/Bolex.js";
zeu.PlatonicMaes = PlatonicMaes;
zeu.Bolex = Bolex;

import { ZeEvent } from "./src/zeugma/ZeEvent.js";
export { ZeEvent } from "./src/zeugma/ZeEvent.js";
zeu.ZeEvent = ZeEvent;

import { ZESpatialEvent } from "./src/zeugma/ZESpatialEvent.js";
export { ZESpatialEvent } from "./src/zeugma/ZESpatialEvent.js";
import { ZESpatialAppearEvent } from "./src/zeugma/ZESpatialAppearEvent.js";
export { ZESpatialAppearEvent } from "./src/zeugma/ZESpatialAppearEvent.js";
import { ZESpatialVanishEvent } from "./src/zeugma/ZESpatialVanishEvent.js";
export { ZESpatialVanishEvent } from "./src/zeugma/ZESpatialVanishEvent.js";
import { ZESpatialMoveEvent } from "./src/zeugma/ZESpatialMoveEvent.js";
export { ZESpatialMoveEvent } from "./src/zeugma/ZESpatialMoveEvent.js";
import { ZESpatialCaressEvent } from "./src/zeugma/ZESpatialCaressEvent.js";
export { ZESpatialCaressEvent } from "./src/zeugma/ZESpatialCaressEvent.js";
import { ZESpatialPressureEvent } from "./src/zeugma/ZESpatialPressureEvent.js";
export { ZESpatialPressureEvent } from "./src/zeugma/ZESpatialPressureEvent.js";
import { ZESpatialHardenEvent } from "./src/zeugma/ZESpatialHardenEvent.js";
export { ZESpatialHardenEvent } from "./src/zeugma/ZESpatialHardenEvent.js";
import { ZESpatialSoftenEvent } from "./src/zeugma/ZESpatialSoftenEvent.js";
export { ZESpatialSoftenEvent } from "./src/zeugma/ZESpatialSoftenEvent.js";
import { ZESpatialPhagy } from "./src/zeugma/ZESpatialPhagy.js";
export { ZESpatialPhagy } from "./src/zeugma/ZESpatialPhagy.js";
zeu.ZESpatialEvent = ZESpatialEvent;
zeu.ZESpatialAppearEvent = ZESpatialAppearEvent;
zeu.ZESpatialVanishEvent = ZESpatialVanishEvent;
zeu.ZESpatialMoveEvent = ZESpatialMoveEvent;
zeu.ZESpatialCaressEvent = ZESpatialCaressEvent;
zeu.ZESpatialPressureEvent = ZESpatialPressureEvent;
zeu.ZESpatialHardenEvent = ZESpatialHardenEvent;
zeu.ZESpatialSoftenEvent = ZESpatialSoftenEvent;
zeu.ZESpatialPhagy = ZESpatialPhagy;

import { ZEDisplacementEvent } from "./src/zeugma/ZEDisplacementEvent.js";
export { ZEDisplacementEvent } from "./src/zeugma/ZEDisplacementEvent.js";
import { ZEDisplacementHeraldEvent }
  from "./src/zeugma/ZEDisplacementHeraldEvent.js";
export { ZEDisplacementHeraldEvent }
  from "./src/zeugma/ZEDisplacementHeraldEvent.js";
import { ZEDisplacementAppearEvent }
  from "./src/zeugma/ZEDisplacementAppearEvent.js";
export { ZEDisplacementAppearEvent }
  from "./src/zeugma/ZEDisplacementAppearEvent.js";
import { ZEDisplacementVanishEvent }
  from "./src/zeugma/ZEDisplacementVanishEvent.js";
export { ZEDisplacementVanishEvent }
  from "./src/zeugma/ZEDisplacementVanishEvent.js";
import { ZEDisplacementMoveEvent }
  from "./src/zeugma/ZEDisplacementMoveEvent.js";
export { ZEDisplacementMoveEvent }
  from "./src/zeugma/ZEDisplacementMoveEvent.js";
import { ZEDisplacementPhagy } from "./src/zeugma/ZEDisplacementPhagy.js";
export { ZEDisplacementPhagy } from "./src/zeugma/ZEDisplacementPhagy.js";
zeu.ZEDisplacementEvent = ZEDisplacementEvent;
zeu.ZEDisplacementHeraldEvent = ZEDisplacementHeraldEvent;
zeu.ZEDisplacementAppearEvent = ZEDisplacementAppearEvent;
zeu.ZEDisplacementVanishEvent = ZEDisplacementVanishEvent;
zeu.ZEDisplacementMoveEvent = ZEDisplacementMoveEvent;
zeu.ZEDisplacementPhagy = ZEDisplacementPhagy;

import { Cursoresque } from "./src/zeugma/Cursoresque.js";
export { Cursoresque } from "./src/zeugma/Cursoresque.js";
zeu.Cursoresque = Cursoresque;

import { ZeWholeShebang } from "./src/zeugma/ZeWholeShebang.js";
export { ZeWholeShebang } from "./src/zeugma/ZeWholeShebang.js";
zeu.ZeWholeShebang = ZeWholeShebang;


//
///
//

export default zeu;

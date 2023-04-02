
//
// (c) treadle & loam, provisioners llc
//


let zeu = new Map ();

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
import { ZeColor } from "./ZeColor.js";
zeu.Vect = Vect;
zeu.Matrix44 = Matrix44;
zeu.Geom = Geom;
zeu.MotherTime = MotherTime;
zeu.ZeColor = ZeColor;

import { ZeColl } from "./ZeColl.js";
import { ZeWeakColl } from "./ZeWeakColl.js";
zeu.ZeColl = ZeColl;
zeu.ZeWeakColl = ZeWeakColl;

import { Zeubject } from "./Zeubject.js";
import { IContainMultitudes } from "./IContainMultitudes.js";
import { PouchyThing } from "./PouchyThing.js";
zeu.Zeubject = Zeubject;
zeu.IContainMultitudes = IContainMultitudes;
zeu.PouchyThing = PouchyThing;

import { IronLung } from "./IronLung.js";
import { CommsSump } from "./CommsSump.js";
import { OSCSump } from "./OSCSump.js";
import { OSCViveWandSump } from "./OSCViveWandSump.js";
import { ViveWandEventSynth } from "./ViveWandEventSynth.js";
import { EventAqueduct } from "./EventAqueduct.js";
zeu.IronLung = IronLung;
zeu.CommsSump = CommsSump;
zeu.OSCSump = OSCSump;
zeu.OSCViveWandSump = OSCViveWandSump;
zeu.ViveWandEventSynth = ViveWandEventSynth;
zeu.EventAqueduct = EventAqueduct;

import { OSCFaker } from "./OSCFaker.js"
import { CheapOSCMessage } from "./CheapOSCMessage.js"
zeu.OSCFaker = OSCFaker;
zeu.CheapOSCMessage = CheapOSCMessage;

import { Loopervisor } from "./Loopervisor.js";
zeu.Loopervisor = Loopervisor;

import { Zoft } from "./Zoft.js";
import { LatchZoft } from "./LatchZoft.js";
import { SumZoft } from "./SumZoft.js";
import { DiffZoft } from "./DiffZoft.js";
import { ProdZoft } from "./ProdZoft.js";
import { ScaleZoft } from "./ScaleZoft.js";
import { LoopZoft } from "./LoopZoft.js";
import { SinuZoft } from "./SinuZoft.js";
import { InterpZoft } from "./InterpZoft.js";
import { ZoftInterpFuncs } from "./ZoftInterpFuncs.js";
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

import { CumuMats } from "./CumuMats.js";
import { Grappler } from "./Grappler.js";
import { CoGrappler } from "./CoGrappler.js";
import { TrGrappler } from "./TrGrappler.js";
import { ScGrappler } from "./ScGrappler.js";
import { RoGrappler } from "./RoGrappler.js";
import { GrapplerPile } from "./GrapplerPile.js";
zeu.CumuMats = CumuMats;
zeu.Grappler = Grappler;
zeu.CoGrappler = CoGrappler;
zeu.TrGrappler = TrGrappler;
zeu.ScGrappler = ScGrappler;
zeu.RoGrappler = RoGrappler;
zeu.GrapplerPile = GrapplerPile;

import { Limnable } from "./Limnable.js";
import { LimnyThing } from "./LimnyThing.js";
import { SpaceThing } from "./SpaceThing.js";
import { Alignifer } from "./Alignifer.js";
import { PolygonPile } from "./PolygonPile.js";
import { ImageSplatter } from "./ImageSplatter.js";
zeu.Limnable = Limnable;
zeu.LimnyThing = LimnyThing;
zeu.SpaceThing = SpaceThing;
zeu.Alignifer = Alignifer;
zeu.PolygonPile = PolygonPile;
zeu.ImageSplatter = ImageSplatter;

import { PlatonicMaes } from "./PlatonicMaes.js";
import { Bolex } from "./Bolex.js";
zeu.PlatonicMaes = PlatonicMaes;
zeu.Bolex = Bolex;

import { ZeEvent } from "./ZeEvent.js"
import { ZESpatialEvent } from "./ZESpatialEvent.js"
import { ZESpatialAppearEvent } from "./ZESpatialAppearEvent.js";
import { ZESpatialVanishEvent } from "./ZESpatialVanishEvent.js";
import { ZESpatialMoveEvent } from "./ZESpatialMoveEvent.js";
import { ZESpatialCaressEvent } from "./ZESpatialCaressEvent.js";
import { ZESpatialPressureEvent } from "./ZESpatialPressureEvent.js";
import { ZESpatialHardenEvent } from "./ZESpatialHardenEvent.js";
import { ZESpatialSoftenEvent } from "./ZESpatialSoftenEvent.js";
zeu.ZeEvent = ZeEvent;
zeu.ZESpatialEvent = ZESpatialEvent
zeu.ZESpatialAppearEvent = ZESpatialAppearEvent;
zeu.ZESpatialVanishEvent = ZESpatialVanishEvent;
zeu.ZESpatialMoveEvent = ZESpatialMoveEvent;
zeu.ZESpatialCaressEvent = ZESpatialCaressEvent;
zeu.ZESpatialPressureEvent = ZESpatialPressureEvent;
zeu.ZESpatialHardenEvent = ZESpatialHardenEvent;
zeu.ZESpatialSoftenEvent = ZESpatialSoftenEvent;

import { ZESpatialPhagy } from "./ZESpatialPhagy.js";
zeu.ZESpatialPhagy = ZESpatialPhagy;

import { Cursoresque } from "./Cursoresque.js";
zeu.Cursoresque = Cursoresque;

import { ZeWholeShebang } from "./ZeWholeShebang.js";
zeu.ZeWholeShebang = ZeWholeShebang;


//
///
//

export default zeu;

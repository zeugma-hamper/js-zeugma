
//
// (c) treadle & loam, provisioners llc
//


import { base_class } from "./interface-ersatzer.js"

import { PouchyThing } from "./PouchyThing.js"
import { Limnable } from "./Limnable.js"


export class LimnyThing
       extends base_class (PouchyThing) . and_interfaces (Limnable)
{
}


//
// (c) treadle & loam, provisioners llc
//


export function squirt_all_properties_from_unto (from, unto)
{ const erties = Object.getOwnPropertyNames (from);
  for (const p of erties)
    Object.defineProperty (unto, p, { value: from[p], writable: false });
// do the foregoing rather than the following ...
//    unto[p] = from[p];
// ... in order to make the squirted properties unmodifiable. Y'know?
  return true;
}

export function squirt_all_properties_from_unto_global (from)
{ return squirt_all_properties_from_unto (from, globalThis); }

//
// (c) treadle & loam, provisioners llc
//

// thanks greatly to
//   https://rasaturyan.medium.com/multiple-inheritance-in-javascript-es6-4999e4b6584c
// for the general direction.

class _ClassInheritochainer {
  constructor(sclass) {
    this.supah = sclass;
  }
  and_interfaces(...terfs) {
    return terfs.reduce((c, erf) => erf(c), this.supah);
  }
}

// the pointy end of the stick follows, down at the bottom.
//
// usage goes, oh, a little something like this:
//
//   class Shosty extends base_class (Mahler) . and_interfaces (Soviet, Grumpy)
//     { ... }
//
// while defining an interface follows a slightly wacky pattern, e.g.
//
//   let Soviet = (supcls) => class extends supcls
//     { photo_posing_face ()  { return "scowl"; }
//       gesture_to_stalin ()  { throw new Error ("nope; inheritor's job."); }
//     }
//

export const base_class = (supah) => new _ClassInheritochainer(supah);

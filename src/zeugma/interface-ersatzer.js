
//
// (c) treadle & loam, provisioners llc
//

// thanks greatly to
//   https://rasaturyan.medium.com/multiple-inheritance-in-javascript-es6-4999e4b6584c
// for the general direction.


class _ClassInheritochainer
{ constructor (sclass)
    { this.supah = sclass; }
  and_interfaces (...faces)
    { let chain = this.supah;
      for (const f  of  faces)
        chain = f (chain);
      return chain;
    }
/*
  // the short form of the 'and_interfaces()' method'd be something like this:
    { return faces . reduce ((c, erf) => erf (c), this.supah); }
*/
}

// the pointy end of the stick follows, down at the bottom.
//
// usage goes, oh, a little something like this:
//
//   class Shosty extends base_class (Mahler) . and_interfaces (Soviet, Grumpy)
//     { ... }
//
// while defining an interface must uemploy a specific (admittedly wacky) idiom:
//
//   let Soviet = (supcls) => class extends supcls
//     { photo_posing_face ()  { return "scowl"; }
//       gesture_to_stalin ()  { throw new Error ("nope; inheritor's job."); }
//     }
//
// note, won't you please, that the idiom foregoing works because in JS
// 'class' can be used in declaration mode (the usual syntactic form) or,
// excitingly, as an expression.
//

export function base_class (supah)
{ return new _ClassInheritochainer (supah); }

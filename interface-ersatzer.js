
//
// (c) treadle & loam, provisioners llc
//

// thanks greatly to
//   https://rasaturyan.medium.com/multiple-inheritance-in-javascript-es6-4999e4b6584c
// for the general direction.


class _ClassInheritochainer
{ constructor (sclass)
    { this.supah = sclass; }
  and_interfaces (...terfs)
    { return terfs . reduce ((c, erf) => erf (c), this.supah); }
}

// this will combine everything in one class
export const base_class = (supah) => new _ClassInheritochainer (supah);

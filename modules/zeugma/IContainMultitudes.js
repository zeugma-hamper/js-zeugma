//
// (c) treadle & loam, provisioners llc
//

export const IContainMultitudes = (supah) =>
  class extends supah {
    //
    IsZeugmallyPouchful() {
      return true;
    }

    CanHoldChildren() {
      return false;
    }

    Children() {
      return null;
    }

    NumChildren() {
      return 0;
    }

    NthChild(_ind) {
      return null;
    }

    AppendChild(_z) {
      return false;
    }

    InsertChild(_z, _ind) {
      return false;
    }

    RemoveChild(_z) {
      return false;
    }

    IndexForChild(_z) {
      return -1;
    }

    FindChild(_nm) {
      return null;
    }
  };

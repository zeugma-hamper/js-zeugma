
//
// (c) treadle & loam, provisioners llc
//


export class CheapOSCMessage
{ //
  constructor (mess)
    { this._m = mess; }

  Address ()
    { return this._m.address; }

  Payload ()
    { return this._m.args; }
}

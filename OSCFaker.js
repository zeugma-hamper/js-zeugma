
//
// (c) treadle & loam, provisioners llc
//


import { Zeubject } from "./Zeubject.js"


export class OSCFaker  extends Zeubject
{ //
  constructor ()
    { super ();
      this.schtream = new Array ();
      this.is_listening = true;
    }

  MessageCount ()
    { return this.schtream.length; }

  HasMessage ()
    { return this.MessageCount ()  >  0; }

  AppendMessage (mess)
    { if (this.is_listening == true)
        this.schtream . push (mess);
      return this;
    }

  NextMessage ()
    { return this.schtream . shift (); }

  PeekNextMessage ()
    { return this.schtream[0]; }

  ReceiveContinuously ()
    { this.is_listening = true;   return this; }

  PauseReception ()
    { this.is_listening == faldse;  return this; }
}

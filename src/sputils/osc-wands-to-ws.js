
//
// (c) treadle & loam, provisioners llc
//


import PROCESS from "process";

import { Server as SOCKIO_SRVR } from "socket.io";

import OSC from "osc";


export function ServeOSCWandsAsWS (WBSCK_PORT = 8008, kbd_ctrl = true)
{ let ootpootcoont = 0;
  let continuspew = false;

  console.log ("turning on OSC forwarding to provide the BLESSING OF WANDS.");

//    const WBSCK_PORT = 8008;
  const sio_srv = new SOCKIO_SRVR (WBSCK_PORT,
                                   { cors: { origin: true } });

  sio_srv . on ("connect", () => console.log ("CONNECTED, if you like."));


  console.log("OSC is, well, this: " + OSC);

  const osc_youdeepee = new OSC.UDPPort ({ localAddress: "0.0.0.0",
                                           localPort: 54345
                                         });

  osc_youdeepee . on ("error", function (err) {
      console.log (err);
  });

  osc_youdeepee . on ("message", function (oscMessage) {
    if (continuspew)
      console.log (oscMessage);
    else if (ootpootcoont > 0)
      { console.log (oscMessage);
        --ootpootcoont;
      }
    else
      ootpootcoont = 0;

    let args = oscMessage.args;

    sio_srv . emit ('/zeugmatic-osc', oscMessage);
  });

  osc_youdeepee . open ();


  if (kbd_ctrl)
    { const esc_as_string = String.fromCharCode (27);
      const ctrl_c_as_string = String.fromCharCode (3);

      const din = PROCESS.stdin;

      if (din.isTTY)
        din . setRawMode (true);
      else
        console.log ("stdin coming not from TTY, so declinin' to "
                     + "go all raw mode.");


      din . on ('data', (patty) =>
        { if (patty == esc_as_string  ||  patty == ctrl_c_as_string)
            process.exit ();
          let q = Number.parseInt (patty);
          if (patty == 's')
            continuspew = ! continuspew;
          else if (q != NaN)
            ootpootcoont = q;
        }
      );
    }
}


export default ServeOSCWandsAsWS;

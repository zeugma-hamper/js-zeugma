
const FS = require ('fs');
const HTTP = require ('http');
const PATH = require ('path');

const PROCESS = require ('process');

const OSC = require ('osc');

const { Server } = require ("socket.io");

const PORT = 8000;


const MIME_TYPES = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};


const STATIC_PATH = PATH.join(process.cwd(), './');

const toBool = [() => true, () => false];


const FileStreamFromURL = async function (url) {
  const path_chunks = [STATIC_PATH, url];
  if (url.endsWith('/'))
    path_chunks . push ('index.html');
  const file_path = PATH.join (...path_chunks);
  const path_traversal = ! file_path . startsWith (STATIC_PATH);
  const exists = await FS.promises . access (file_path) . then (...toBool);
  const found = ! path_traversal  &&  exists;
  if (! found)
    console.log ("well... " + file_path + " seems to be, you know, absent.");
  const stream_path = found ? file_path : STATIC_PATH + '/404.html';
  const ext = PATH.extname (stream_path) . substring (1) . toLowerCase ();
  const stream = FS.createReadStream (stream_path);
  return { found, ext, stream };
};


const FulfillFileRequest = async function (request, rspns_obj) {
  const strm_bndl = await FileStreamFromURL (request.url);
  const status_code = strm_bndl.found ? 200 : 404;
  const mime_type = MIME_TYPES[strm_bndl.ext] || MIME_TYPES.default;
  rspns_obj . writeHead (status_code, { 'Content-Type': mime_type });
  strm_bndl.stream . pipe (rspns_obj);
  console.log (`${request.method} ${request.url} ${status_code}`);
};

const http_server = HTTP.createServer (FulfillFileRequest);
http_server . listen (PORT);


const io = new Server (http_server);

io.on ("connect", () => console.log ("connected, in a way..."));

let ootpootcoont = 0;
let continuspew = false;

const din = PROCESS.stdin;
din . setRawMode (true);
din . on ('data', (patty) =>
                    { if (patty == '\033')
                        process.exit ();
                      let q = Number.parseInt (patty);
                      if (patty == 's')
                        continuspew = ! continuspew;
                      else if (q != NaN)
                        ootpootcoont = q;
                    });

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

    io.emit ('/zeugmatic-osc', oscMessage);
});

osc_youdeepee . open ();


console.log (`Server running at http://127.0.0.1:${PORT}/`);


const fs = require ('fs');
const http = require ('http');
const path = require ('path');

const process = require ('process');

const osc = require ('osc');

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


const STATIC_PATH = path.join(process.cwd(), './');

const toBool = [() => true, () => false];


const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith('/'))
    paths . push ('index.html');
  const filePath = path . join (...paths);
  const pathTraversal = ! filePath . startsWith (STATIC_PATH);
  const exists = await fs.promises . access (filePath) . then (...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = path.extname (streamPath) . substring (1) . toLowerCase ();
  const stream = fs.createReadStream (streamPath);
  return { found, ext, stream };
};


const server_conf = http.createServer (async (req, res) => {
  const file = await prepareFile (req.url);
  const statusCode = file.found ? 200 : 404;
  const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
  res . writeHead (statusCode, { 'Content-Type': mimeType });
  file . stream . pipe (res);
  console.log (`${req.method} ${req.url} ${statusCode}`);
}) . listen (PORT);


const io = new Server (server_conf);

io.on ("connect", () => console.log ("connected, in a way..."));

let ootpootcoont = 0;
let continuspew = false;

const din = process.stdin;
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

const osc_youdeepee = new osc.UDPPort ({ localAddress: "0.0.0.0",
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

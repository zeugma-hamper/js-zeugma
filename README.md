# js-zeugma

### Hearken unto the reading of this, that thou shalt have read:

in the root directory, run `npm install`

if in addition to merely gazing in wonder at the installed library you'd like to play with a living example, continue on thus:

-- venture into the wee demos directory: `cd apps/flamv`

-- install dependencies: `npm install`

-- link zeugma into place: `cd node_modules  &&  ln -s ../../../../js-zeugma ./zeugma  &&  cd ..`

-- goad the local web server into action: `npm run dev`

-- ... and now, friend, all is now in readiness. Direct thy blessed webwagon to [**http://localhost:5173/flamv.html**](http://localhost:5173/flamv.html)

~ ~ ~ ~

if your local system is equipped with wands and you've got [**vivebilk**](https://github.com/zeugma-hamper/vivebilk) running, you may introduce spatial control via the following, ideally undertaken as an earlier step:

-- descend from the root of this repository: `cd src/sputils`

-- run the waifish server that converts inbound wand events from OSC to websocket transport: `node serve-wands.js`

---

Notes:
- for a typically configured browser, the first run will falter as Zeugma attempts to open two
additional windows/tabs. These are the left wall and tilted display table surfaces (respectively),
in accordance with the physical display geometry that obtain at present in the Treadle & Loam lab.
Grant your wise permission for localhost-originated sites to open tabs, and rerun.
- tab-navigate back to the leftmost of the three. This is where most of the action is.
- if nonetheless you want to play with these surfaces, pluck their tabs sequentially from the
original window to make new standalone windows; the render & interaction cycle seems only to
work in that three-separate-windows configuration. You'll then see the mouse generate a cursor
on each (at apparently different scales... as required for them to show up at identical sizes
in the room).
- ideally the browser will have been pre-resized to a rough 16x9 aspect ratio before Zeugma starts up;
its geometric configuration will assume this irrespective of the actual aspect ratio, which can lead
to unsightly squeezings and stretchings.
- if you'd like to send the soothing motions of the system into comalike stasis, open the browser's
debugger console and issue `sheb . SkidToAHalt ()` ; you can restart same with `sheb . FlyOnTheirTerms ()`
- the global `sheb` object is the pseudo-psingleton instance of class `ZeWholeShebang` and is the
supervisory structure and access object for Zeugma.

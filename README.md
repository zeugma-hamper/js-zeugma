# js-zeugma-diaper

### Hearken unto the reading of this, that thou shalt have read:

in the root directory, run `npm install`

also just there, start the server: `node shovel.js`


Now, friend, all will be in readiness. Direct thy blessed webwagon to [**http://localhost:8000/apps/flamv/flamv.html**](http://localhost:8000/apps/flamv/flamv.html).

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
- if you'd like to send the soothing motions of the system into a comalike stasis, open the browser's
debugger console and issue `sheb . SkidToAHalt ()` ; you can restart same with `sheb . FlyOnTheirTerms ()`
- the global `sheb` object is the pseudo-psingleton instance of class `ZeWholeShebang` and is the
supervisory structure and access object for Zeugma.

 OnLoad('/modules/zeugma/zeugma', ['/utils/sim/sim_ui_core'], function($) {



  glob.FrontWall = {
    "name": "front",
    "location": [0.0, 2186.0, -2670.0],
    "over": [1.0, 0.0, 0.0],
    "up": [0.0, 1.0, 0.0],
    "width": 7772.4,
    "height": 4372.0,
    "ideal-pixwid": 3840,
    "ideal-pixhei": 2160
  };

  glob.makeEvent = function(type, x, y) {
    let pe = new PointerEvent(type, {
      pointerId: 1,
      bubbles: true,
      cancelable: true,
      pointerType: "mouse", // touch?  mouse?  pointer?
      width: 22,
      height: 22,
      isPrimary: true,
      screenX: x,
      screenY: y,
      clientX: x,
      clientY: y,
    });
    return pe;
  }

  glob.ConvertZeugma = function(data) {
    let goal_rect_w = Doh.win.w;
    let goal_rect_h = Doh.win.h;

    if (!data) {
      console.error('ConvertZeugma empty data');
      return;
    }

    let aim = data.aim;
    let loc = data.loc;
    let but_state = data.but_state;

    if (!aim) return;
    if (aim[2] >= 0) return; // wand pointing away from wall
    let dz = loc[2] - glob.FrontWall.location[2]; // dist from wand to wall (depth)
    let t = -dz / aim[2];
    let dx = t * aim[0];
    let dy = t * aim[1];
    let prjx = loc[0] + dx; // physical x on wall in mm
    let prjy = loc[1] + dy; // physical y on wall in mm
    let nx = (prjx - glob.FrontWall.location[0]) / glob.FrontWall.width; // norm -0.5 to 0.5
    let ny = (prjy - glob.FrontWall.location[1]) / glob.FrontWall.height;
    nx += 0.5;
    ny = 0.5 - ny; // invert y
    // now normalized 0-1
    return {
      x: nx * goal_rect_w,
      y: ny * goal_rect_h,
      prov: data.prov,
      but_state: but_state,
    };
  }




  glob.cursor0 = New('label', {
    css: {
      width: 8,
      height: 8,
      display: 'block',
      position: 'absolute',
      'background-color': 'purple',
      'z-index': 999,
      'border-radius': '4px',
    },
  });

  glob.cursor1 = New('label', {
    css: {
      width: 8,
      height: 8,
      display: 'block',
      position: 'absolute',
      'background-color': 'orange',
      'z-index': 999,
      'border-radius': '4px',
    },
  });


  glob.SubscribeToZeugmaEvents = function() {


    // zeugma_pointer_move -- handle mouse move events by converting them into generic 'mousemove' events

  glob.MainDatabaseClient.subscribe_id("zeugma_pointer_move", (data, callback) => {
    let screen_spot = glob.ConvertZeugma(data);
     //console.log('got zeugma_pointer_move',screen_spot);
   if (screen_spot) {
      let el = document.elementFromPoint(screen_spot.x, screen_spot.y);
      let pe = glob.makeEvent('mousemove', screen_spot.x, screen_spot.y);

      if (el)
        el.dispatchEvent(pe);

      // update most recent position, will be drawn by the animation loop
      if (screen_spot.prov == 'wand-0') {
        glob.cursor0.pos_x = screen_spot.x;
        glob.cursor0.pos_y = screen_spot.y;
      } else {
        glob.cursor1.pos_x = screen_spot.x;
        glob.cursor1.pos_y = screen_spot.y;
      }

    }
  }); // end of zeugma_pointer_move

  // zeugma_click -- handle click events by converting them into generic 'click' events
  // this needs to support multiple pointers

  glob.mouse_down_loc = {
    x: 0,
    y: 0
  };

  glob.MainDatabaseClient.subscribe_id("zeugma_click", (data, callback) => {
    console.log('got zeugma_click');
    let evt_type;
    let screen_spot = glob.ConvertZeugma(data);
    if (!screen_spot) return; // happens at boot?

    evt_type = data.but_state ? 'mousedown' : 'mouseup';
    //console.log('click!',evt_type);
    let el = document.elementFromPoint(screen_spot.x, screen_spot.y);

    if (data.but_state) {
      glob.mouse_down_loc.x = screen_spot.x;
      glob.mouse_down_loc.y = screen_spot.y;
    } else {
      if (Math.abs(screen_spot.x - glob.mouse_down_loc.x) < 12 && Math.abs(screen_spot.y - glob.mouse_down_loc.y) < 12) {
        console.log('make a click');

        let pe = glob.makeEvent('click', screen_spot.x, screen_spot.y);

        if (el)
          el.dispatchEvent(pe);

        //return;

      }
    }
    let pe = glob.makeEvent(evt_type, screen_spot.x, screen_spot.y);

    if (el)
      el.dispatchEvent(pe);

  }); // end of zeugma_click

}


  // animation loop to draw 2 cursors

  glob.draw_a_frame = function() {
    glob.cursor0.e.css({
      left: glob.cursor0.pos_x,
      top: glob.cursor0.pos_y
    });
    glob.cursor1.e.css({
      left: glob.cursor1.pos_x,
      top: glob.cursor1.pos_y
    });

    window.requestAnimationFrame(glob.draw_a_frame);
  }

  window.requestAnimationFrame(glob.draw_a_frame);

});

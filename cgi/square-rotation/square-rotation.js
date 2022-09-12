"use strict";

const RED = 114,
  GREEN = 103,
  BLUE = 98,
  WHITE = 119;
var w;
var h;

function rotationTransform2D(x, y, theta) {
  const cos = Math.cos;
  const sin = Math.sin;
  return {
    x: x * cos(theta) - y * sin(theta),
    y: y * cos(theta) + x * sin(theta),
  };
}

function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, callback);
  } else {
    element["on" + eventName] = callback;
  }
}

function mainEntrance() {
  var canvasElement = document.querySelector("#theCanvas");
  var ctx = canvasElement.getContext("2d");

  w = canvasElement.width;
  h = canvasElement.height;

  var rectSize = 100;
  var centerX = w / 2;
  var centerY = h / 2;

  var rotation = 0,
    degree = 0;

  var cx = 0,
    cy = 0,
    vx = 0,
    vy = 0;
  var color = RED;
  var changed = false;

  addEvent(document, "keypress", function (e) {
    e = e || window.event;
    if (e.keyCode != color) {
      color = e.keyCode;
      changed = true;
    }
  });

  const draw = () => {
    rotation -= 2;
    degree = rotation * (Math.PI / 360);

    if (color == RED) {
      vx = cx !== 0 ? -rectSize : 0;
      vy = cy !== 0 ? -rectSize : 0;
      cx = 0;
      cy = 0;
    } else if (color == GREEN) {
      vx = cx !== -rectSize ? rectSize : 0;
      vy = cy !== 0 ? -rectSize : 0;
      cx = -rectSize;
      cy = 0;
    } else if (color == BLUE) {
      vx = cx !== 0 ? -rectSize : 0;
      vy = cy !== -rectSize ? rectSize : 0;
      cx = 0;
      cy = -rectSize;
    } else if (color == WHITE) {
      vx = cx !== -rectSize ? rectSize : 0;
      vy = cy !== -rectSize ? rectSize : 0;
      cx = -rectSize;
      cy = -rectSize;
    }

    if (changed) {
      const { x: rx, y: ry } = rotationTransform2D(vx, vy, degree);
      centerX += rx;
      centerY += ry;
      changed = false;
    }

    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.translate(centerX, centerY);
    ctx.rotate(degree);

    ctx.fillStyle = "rgb(0, 204, 204)";
    ctx.fillRect(-rectSize, -rectSize, rectSize * 2, rectSize * 2);

    ctx.translate(cx, cy);

    var len = rectSize / 10;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        if (i == 0 && j == 0) ctx.fillStyle = "rgb(255, 0, 0)";
        else if (i == 0 && j == len - 1) ctx.fillStyle = "rgb(0, 255, 0)";
        else if (i == len - 1 && j == 0) ctx.fillStyle = "rgb(0, 0, 255)";
        else if (i == len - 1 && j == len - 1)
          ctx.fillStyle = "rgb(255, 255, 255)";
        else
          ctx.fillStyle =
            "rgb(" +
            Math.floor(255 - 42.5 * i) +
            "," +
            Math.floor(255 - 42.5 * j) +
            ",0)";

        ctx.fillRect(j * len, i * len, len, len);
      }
    }
    ctx.restore();
  };

  var runanimation = (() => {
    return () => {
      draw();
      requestAnimationFrame(runanimation);
    };
  })();

  runanimation();
}

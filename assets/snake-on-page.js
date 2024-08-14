import { jsxs as j, jsx as b } from "react/jsx-runtime";
import I, { useState as w } from "react";
var _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, M = {}, y = {}, f = {};
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), o.JoystickShape = void 0, function(i) {
    i.Circle = "circle", i.Square = "square", i.AxisY = "axisY", i.AxisX = "axisX";
  }(o.JoystickShape || (o.JoystickShape = {}));
})(f);
var v = {};
Object.defineProperty(v, "__esModule", { value: !0 });
v.shapeFactory = void 0;
var P = f, J = function(o, i) {
  switch (o) {
    case P.JoystickShape.Square:
      return {
        borderRadius: Math.sqrt(i)
      };
    case P.JoystickShape.Circle:
    default:
      return {
        borderRadius: i
      };
  }
};
v.shapeFactory = J;
var m = {};
Object.defineProperty(m, "__esModule", { value: !0 });
m.shapeBoundsFactory = void 0;
var g = f, z = function(o, i, e, t, r, s, a, n, p) {
  switch (o) {
    case g.JoystickShape.Square:
      return t = d(i - p.left - n / 2, n), r = d(e - p.top - n / 2, n), { relativeX: t, relativeY: r };
    case g.JoystickShape.AxisX:
      return t = d(i - p.left - n / 2, n), r = 0, { relativeX: t, relativeY: r };
    case g.JoystickShape.AxisY:
      return t = 0, r = d(e - p.top - n / 2, n), { relativeX: t, relativeY: r };
    default:
      return s > a && (t *= a / s, r *= a / s), { relativeX: t, relativeY: r };
  }
};
m.shapeBoundsFactory = z;
var d = function(o, i) {
  var e = i / 2;
  return o > e ? e : o < -e ? e * -1 : o;
}, O = _ && _.__extends || /* @__PURE__ */ function() {
  var o = function(i, e) {
    return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }, o(i, e);
  };
  return function(i, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    o(i, e);
    function t() {
      this.constructor = i;
    }
    i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  };
}(), l = _ && _.__assign || function() {
  return l = Object.assign || function(o) {
    for (var i, e = 1, t = arguments.length; e < t; e++) {
      i = arguments[e];
      for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i[r]);
    }
    return o;
  }, l.apply(this, arguments);
};
Object.defineProperty(y, "__esModule", { value: !0 });
y.Joystick = void 0;
var h = I, C = f, x = v, B = m, c;
(function(o) {
  o.PointerDown = "pointerdown", o.PointerMove = "pointermove", o.PointerUp = "pointerup";
})(c || (c = {}));
var u;
(function(o) {
  o[o.TopRight = 2.35619449] = "TopRight", o[o.TopLeft = -2.35619449] = "TopLeft", o[o.BottomRight = 0.785398163] = "BottomRight", o[o.BottomLeft = -0.785398163] = "BottomLeft";
})(u || (u = {}));
var T = (
  /** @class */
  function(o) {
    O(i, o);
    function i(e) {
      var t = o.call(this, e) || this;
      return t._stickRef = h.createRef(), t._baseRef = h.createRef(), t.frameId = null, t._pointerId = null, t._mounted = !1, t._pointerMove = function(r) {
        if (r.preventDefault(), t.state.dragging) {
          if (!t.props.followCursor && r.pointerId !== t._pointerId)
            return;
          var s = r.clientX, a = r.clientY, n = s - t._parentRect.left - t._radius, p = a - t._parentRect.top - t._radius, S = t._distance(n, p), k = (0, B.shapeBoundsFactory)(
            //@ts-ignore
            t.props.controlPlaneShape || t.props.baseShape,
            s,
            a,
            n,
            p,
            S,
            t._radius,
            t._baseSize,
            t._parentRect
          );
          n = k.relativeX, p = k.relativeY;
          var R = Math.atan2(n, p);
          t._updatePos({
            relativeX: n,
            relativeY: p,
            distance: t._distanceToPercentile(S),
            direction: t._getDirection(R),
            axisX: s - t._parentRect.left,
            axisY: a - t._parentRect.top
          });
        }
      }, t._pointerUp = function(r) {
        if (r.pointerId === t._pointerId) {
          var s = {
            dragging: !1
          };
          t.props.sticky || (s.coordinates = void 0), t.frameId = window.requestAnimationFrame(function() {
            t._mounted && t.setState(s);
          }), window.removeEventListener(c.PointerUp, t._pointerUp), window.removeEventListener(c.PointerMove, t._pointerMove), t._pointerId = null, t.props.stop && t.props.stop({
            type: "stop",
            // @ts-ignore
            x: t.props.sticky ? t.state.coordinates.relativeX * 2 / t._baseSize : null,
            // @ts-ignore
            y: t.props.sticky ? t.state.coordinates.relativeY * 2 / t._baseSize : null,
            // @ts-ignore
            direction: t.props.sticky ? t.state.coordinates.direction : null,
            // @ts-ignore
            distance: t.props.sticky ? t.state.coordinates.distance : null
          });
        }
      }, t.state = {
        dragging: !1
      }, t._throttleMoveCallback = /* @__PURE__ */ function() {
        var r = 0;
        return function(s) {
          var a = (/* @__PURE__ */ new Date()).getTime(), n = t.props.throttle || 0;
          if (!(a - r < n) && (r = a, t.props.move))
            return t.props.move(s);
        };
      }(), t;
    }
    return i.prototype.componentWillUnmount = function() {
      var e = this;
      this._mounted = !1, this.props.followCursor && window.removeEventListener(c.PointerMove, function(t) {
        return e._pointerMove(t);
      }), this.frameId !== null && window.cancelAnimationFrame(this.frameId);
    }, i.prototype.componentDidMount = function() {
      var e = this;
      this._mounted = !0, this.props.followCursor && (this._parentRect = this._baseRef.current.getBoundingClientRect(), this.setState({
        dragging: !0
      }), window.addEventListener(c.PointerMove, function(t) {
        return e._pointerMove(t);
      }), this.props.start && this.props.start({
        type: "start",
        x: null,
        y: null,
        distance: null,
        direction: null
      }));
    }, i.prototype._updatePos = function(e) {
      var t = this;
      this.frameId = window.requestAnimationFrame(function() {
        t._mounted && t.setState({
          coordinates: e
        });
      }), !(typeof this.props.minDistance == "number" && e.distance < this.props.minDistance) && this._throttleMoveCallback({
        type: "move",
        x: e.relativeX * 2 / this._baseSize,
        y: -(e.relativeY * 2 / this._baseSize),
        direction: e.direction,
        distance: e.distance
      });
    }, i.prototype._pointerDown = function(e) {
      this.props.disabled || this.props.followCursor || (this._parentRect = this._baseRef.current.getBoundingClientRect(), this.setState({
        dragging: !0
      }), window.addEventListener(c.PointerUp, this._pointerUp), window.addEventListener(c.PointerMove, this._pointerMove), this._pointerId = e.pointerId, this._stickRef.current.setPointerCapture(e.pointerId), this.props.start && this.props.start({
        type: "start",
        x: null,
        y: null,
        distance: null,
        direction: null
      }));
    }, i.prototype._getDirection = function(e) {
      return e > u.TopRight || e < u.TopLeft ? "FORWARD" : e < u.TopRight && e > u.BottomRight ? "RIGHT" : e < u.BottomLeft ? "LEFT" : "BACKWARD";
    }, i.prototype._distance = function(e, t) {
      return Math.hypot(e, t);
    }, i.prototype._distanceToPercentile = function(e) {
      var t = e / (this._baseSize / 2) * 100;
      return t > 100 ? 100 : t;
    }, i.prototype.getBaseShapeStyle = function() {
      var e = this.props.baseShape || C.JoystickShape.Circle;
      return (0, x.shapeFactory)(e, this._baseSize);
    }, i.prototype.getStickShapeStyle = function() {
      var e = this.props.stickShape || C.JoystickShape.Circle;
      return (0, x.shapeFactory)(e, this._baseSize);
    }, i.prototype._getBaseStyle = function() {
      var e = this.props.baseColor !== void 0 ? this.props.baseColor : "#000033", t = "".concat(this._baseSize, "px"), r = l(l({}, this.getBaseShapeStyle()), { height: t, width: t, background: e, display: "flex", justifyContent: "center", alignItems: "center" });
      return this.props.baseImage && (r.background = "url(".concat(this.props.baseImage, ")"), r.backgroundSize = "100%"), r;
    }, i.prototype._getStickStyle = function() {
      var e = this.props.stickColor !== void 0 ? this.props.stickColor : "#3D59AB", t = this._stickSize ? "".concat(this._stickSize, "px") : "".concat(this._baseSize / 1.5, "px"), r = l(l({}, this.getStickShapeStyle()), { background: e, cursor: "move", height: t, width: t, border: "none", flexShrink: 0, touchAction: "none" });
      return this.props.stickImage && (r.background = "url(".concat(this.props.stickImage, ")"), r.backgroundSize = "100%"), this.props.pos && (r = Object.assign({}, r, {
        position: "absolute",
        transform: "translate3d(".concat(this.props.pos.x * this._baseSize / 2, "px, ").concat(-(this.props.pos.y * this._baseSize) / 2, "px, 0)")
      })), this.state.coordinates !== void 0 && (r = Object.assign({}, r, {
        position: "absolute",
        transform: "translate3d(".concat(this.state.coordinates.relativeX, "px, ").concat(this.state.coordinates.relativeY, "px, 0)")
      })), r;
    }, i.prototype.render = function() {
      var e = this;
      this._baseSize = this.props.size || 100, this._stickSize = this.props.stickSize, this._radius = this._baseSize / 2;
      var t = this._getBaseStyle(), r = this._getStickStyle();
      return h.createElement(
        "div",
        { "data-testid": "joystick-base", className: this.props.disabled ? "joystick-base-disabled" : "", ref: this._baseRef, style: t },
        h.createElement("button", { ref: this._stickRef, disabled: this.props.disabled, onPointerDown: function(s) {
          return e._pointerDown(s);
        }, className: this.props.disabled ? "joystick-disabled" : "", style: r })
      );
    }, i;
  }(h.Component)
);
y.Joystick = T;
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), o.JoystickShape = o.Joystick = void 0;
  var i = y;
  Object.defineProperty(o, "Joystick", { enumerable: !0, get: function() {
    return i.Joystick;
  } });
  var e = f;
  Object.defineProperty(o, "JoystickShape", { enumerable: !0, get: function() {
    return e.JoystickShape;
  } });
})(M);
const F = () => {
  w(0);
  const [o, i] = w(0);
  return console.log(o), /* @__PURE__ */ j("div", { children: [
    /* @__PURE__ */ b("span", { style: { position: "fixed", zIndex: 999, top: 0, backgroundColor: "white" }, children: o }),
    /* @__PURE__ */ b("img", { src: "/foresee-revamp2/assets/mountain.jpg", alt: "My Image" })
  ] });
};
export {
  F as default
};

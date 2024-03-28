import { css as Gh, LitElement as Hh, html as Wh } from "lit";
import { property as Er, query as Dc, customElement as Xh } from "lit/decorators.js";
import { classMap as Oo } from "lit/directives/class-map.js";
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Xa = "148", oi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, li = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, qh = 0, No = 1, Yh = 2, Ic = 1, Jh = 2, lr = 3, $n = 0, Vt = 1, bs = 2, Lr = 3, Pn = 0, Oi = 1, zo = 2, Uo = 3, Bo = 4, Zh = 5, Ci = 100, $h = 101, Kh = 102, ko = 103, Vo = 104, jh = 200, Qh = 201, eu = 202, tu = 203, Fc = 204, Oc = 205, nu = 206, iu = 207, ru = 208, su = 209, au = 210, ou = 0, lu = 1, cu = 2, Ca = 3, hu = 4, uu = 5, fu = 6, du = 7, ws = 0, pu = 1, mu = 2, _n = 0, gu = 1, xu = 2, _u = 3, Nc = 4, vu = 5, qa = 300, Kn = 301, jn = 302, Ui = 303, gs = 304, Ar = 306, vn = 1e3, _t = 1001, mr = 1002, ut = 1003, La = 1004, fs = 1005, xt = 1006, zc = 1007, Qn = 1008, ei = 1009, yu = 1010, Mu = 1011, Uc = 1012, bu = 1013, Xn = 1014, $t = 1015, gn = 1016, wu = 1017, Su = 1018, Ni = 1020, Tu = 1021, Eu = 1022, Bt = 1023, Au = 1024, Cu = 1025, qn = 1026, Bi = 1027, Lu = 1028, Pu = 1029, Ru = 1030, Du = 1031, Iu = 1033, zs = 33776, Us = 33777, Bs = 33778, ks = 33779, Go = 35840, Ho = 35841, Wo = 35842, Xo = 35843, Fu = 36196, qo = 37492, Yo = 37496, Jo = 37808, Zo = 37809, $o = 37810, Ko = 37811, jo = 37812, Qo = 37813, el = 37814, tl = 37815, nl = 37816, il = 37817, rl = 37818, sl = 37819, al = 37820, ol = 37821, ll = 36492, xs = 2300, _s = 2301, Vs = 2302, cl = 2400, hl = 2401, ul = 2402, Ou = 2500, Dn = 3e3, Xe = 3001, Nu = 3200, zu = 3201, ii = 0, Uu = 1, jt = "srgb", gr = "srgb-linear", Gs = 7680, Bu = 519, Pa = 35044, fl = "300 es", Ra = 1035;
class ri {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, s = i.length; r < s; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let dl = 1234567;
const zi = Math.PI / 180, xr = 180 / Math.PI;
function Gt() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (bt[a & 255] + bt[a >> 8 & 255] + bt[a >> 16 & 255] + bt[a >> 24 & 255] + "-" + bt[e & 255] + bt[e >> 8 & 255] + "-" + bt[e >> 16 & 15 | 64] + bt[e >> 24 & 255] + "-" + bt[t & 63 | 128] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 255] + bt[t >> 24 & 255] + bt[n & 255] + bt[n >> 8 & 255] + bt[n >> 16 & 255] + bt[n >> 24 & 255]).toLowerCase();
}
function lt(a, e, t) {
  return Math.max(e, Math.min(t, a));
}
function Ya(a, e) {
  return (a % e + e) % e;
}
function ku(a, e, t, n, i) {
  return n + (a - e) * (i - n) / (t - e);
}
function Vu(a, e, t) {
  return a !== e ? (t - a) / (e - a) : 0;
}
function hr(a, e, t) {
  return (1 - t) * a + t * e;
}
function Gu(a, e, t, n) {
  return hr(a, e, 1 - Math.exp(-t * n));
}
function Hu(a, e = 1) {
  return e - Math.abs(Ya(a, e * 2) - e);
}
function Wu(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * (3 - 2 * a));
}
function Xu(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * a * (a * (a * 6 - 15) + 10));
}
function qu(a, e) {
  return a + Math.floor(Math.random() * (e - a + 1));
}
function Yu(a, e) {
  return a + Math.random() * (e - a);
}
function Ju(a) {
  return a * (0.5 - Math.random());
}
function Zu(a) {
  a !== void 0 && (dl = a);
  let e = dl += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function $u(a) {
  return a * zi;
}
function Ku(a) {
  return a * xr;
}
function Da(a) {
  return (a & a - 1) === 0 && a !== 0;
}
function Bc(a) {
  return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
}
function vs(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function ju(a, e, t, n, i) {
  const r = Math.cos, s = Math.sin, o = r(t / 2), l = s(t / 2), c = r((e + n) / 2), u = s((e + n) / 2), h = r((e - n) / 2), f = s((e - n) / 2), d = r((n - e) / 2), g = s((n - e) / 2);
  switch (i) {
    case "XYX":
      a.set(o * u, l * h, l * f, o * c);
      break;
    case "YZY":
      a.set(l * f, o * u, l * h, o * c);
      break;
    case "ZXZ":
      a.set(l * h, l * f, o * u, o * c);
      break;
    case "XZX":
      a.set(o * u, l * g, l * d, o * c);
      break;
    case "YXY":
      a.set(l * d, o * u, l * g, o * c);
      break;
    case "ZYZ":
      a.set(l * g, l * d, o * u, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function xn(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Qe(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var en = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: zi,
  RAD2DEG: xr,
  generateUUID: Gt,
  clamp: lt,
  euclideanModulo: Ya,
  mapLinear: ku,
  inverseLerp: Vu,
  lerp: hr,
  damp: Gu,
  pingpong: Hu,
  smoothstep: Wu,
  smootherstep: Xu,
  randInt: qu,
  randFloat: Yu,
  randFloatSpread: Ju,
  seededRandom: Zu,
  degToRad: $u,
  radToDeg: Ku,
  isPowerOfTwo: Da,
  ceilPowerOfTwo: Bc,
  floorPowerOfTwo: vs,
  setQuaternionFromProperEuler: ju,
  normalize: Qe,
  denormalize: xn
});
class j {
  constructor(e = 0, t = 0) {
    j.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, s = this.y - e.y;
    return this.x = r * n - s * i + e.x, this.y = r * i + s * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ct {
  constructor() {
    Ct.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, s, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = s, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], o = n[3], l = n[6], c = n[1], u = n[4], h = n[7], f = n[2], d = n[5], g = n[8], m = i[0], p = i[3], y = i[6], M = i[1], x = i[4], v = i[7], w = i[2], b = i[5], E = i[8];
    return r[0] = s * m + o * M + l * w, r[3] = s * p + o * x + l * b, r[6] = s * y + o * v + l * E, r[1] = c * m + u * M + h * w, r[4] = c * p + u * x + h * b, r[7] = c * y + u * v + h * E, r[2] = f * m + d * M + g * w, r[5] = f * p + d * x + g * b, r[8] = f * y + d * v + g * E, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * s * u - t * o * c - n * r * u + n * o * l + i * r * c - i * s * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = u * s - o * c, f = o * l - u * r, d = c * r - s * l, g = t * h + n * f + i * d;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / g;
    return e[0] = h * m, e[1] = (i * c - u * n) * m, e[2] = (o * n - i * s) * m, e[3] = f * m, e[4] = (u * t - i * l) * m, e[5] = (i * r - o * t) * m, e[6] = d * m, e[7] = (n * l - c * t) * m, e[8] = (s * t - n * r) * m, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, s, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * s + c * o) + s + e,
      -i * c,
      i * l,
      -i * (-c * s + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(Hs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Hs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Hs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Hs = /* @__PURE__ */ new Ct();
function kc(a) {
  for (let e = a.length - 1; e >= 0; --e)
    if (a[e] >= 65535)
      return !0;
  return !1;
}
const Qu = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function Li(a, e) {
  return new Qu[a](e);
}
function _r(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
function Yn(a) {
  return a < 0.04045 ? a * 0.0773993808 : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function ds(a) {
  return a < 31308e-7 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
const Ws = {
  [jt]: { [gr]: Yn },
  [gr]: { [jt]: ds }
}, Tt = {
  legacyMode: !0,
  get workingColorSpace() {
    return gr;
  },
  set workingColorSpace(a) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(a, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return a;
    if (Ws[e] && Ws[e][t] !== void 0) {
      const n = Ws[e][t];
      return a.r = n(a.r), a.g = n(a.g), a.b = n(a.b), a;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(a, e) {
    return this.convert(a, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(a, e) {
    return this.convert(a, e, this.workingColorSpace);
  }
}, Vc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, ht = { r: 0, g: 0, b: 0 }, Ht = { h: 0, s: 0, l: 0 }, Pr = { h: 0, s: 0, l: 0 };
function Xs(a, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? a + (e - a) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? a + (e - a) * 6 * (2 / 3 - t) : a;
}
function Rr(a, e) {
  return e.r = a.r, e.g = a.g, e.b = a.b, e;
}
class Me {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = jt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Tt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Tt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Tt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Tt.workingColorSpace) {
    if (e = Ya(e, 1), t = lt(t, 0, 1), n = lt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
      this.r = Xs(s, r, e + 1 / 3), this.g = Xs(s, r, e), this.b = Xs(s, r, e - 1 / 3);
    }
    return Tt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = jt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let r;
      const s = i[1], o = i[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, Tt.toWorkingColorSpace(this, t), n(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, Tt.toWorkingColorSpace(this, t), n(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            const l = parseFloat(r[1]) / 360, c = parseFloat(r[2]) / 100, u = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], s = r.length;
      if (s === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, Tt.toWorkingColorSpace(this, t), this;
      if (s === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, Tt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = jt) {
    const n = Vc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Yn(e.r), this.g = Yn(e.g), this.b = Yn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ds(e.r), this.g = ds(e.g), this.b = ds(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = jt) {
    return Tt.fromWorkingColorSpace(Rr(this, ht), e), lt(ht.r * 255, 0, 255) << 16 ^ lt(ht.g * 255, 0, 255) << 8 ^ lt(ht.b * 255, 0, 255) << 0;
  }
  getHexString(e = jt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Tt.workingColorSpace) {
    Tt.fromWorkingColorSpace(Rr(this, ht), t);
    const n = ht.r, i = ht.g, r = ht.b, s = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const u = (o + s) / 2;
    if (o === s)
      l = 0, c = 0;
    else {
      const h = s - o;
      switch (c = u <= 0.5 ? h / (s + o) : h / (2 - s - o), s) {
        case n:
          l = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / h + 2;
          break;
        case r:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Tt.workingColorSpace) {
    return Tt.fromWorkingColorSpace(Rr(this, ht), t), e.r = ht.r, e.g = ht.g, e.b = ht.b, e;
  }
  getStyle(e = jt) {
    return Tt.fromWorkingColorSpace(Rr(this, ht), e), e !== jt ? `color(${e} ${ht.r} ${ht.g} ${ht.b})` : `rgb(${ht.r * 255 | 0},${ht.g * 255 | 0},${ht.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ht), Ht.h += e, Ht.s += t, Ht.l += n, this.setHSL(Ht.h, Ht.s, Ht.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Ht), e.getHSL(Pr);
    const n = hr(Ht.h, Pr.h, t), i = hr(Ht.s, Pr.s, t), r = hr(Ht.l, Pr.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Me.NAMES = Vc;
let ci;
class Gc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ci === void 0 && (ci = _r("canvas")), ci.width = e.width, ci.height = e.height;
      const n = ci.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ci;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = _r("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let s = 0; s < r.length; s++)
        r[s] = Yn(r[s] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Yn(t[n] / 255) * 255) : t[n] = Yn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Pi {
  constructor(e = null) {
    this.isSource = !0, this.uuid = Gt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let s = 0, o = i.length; s < o; s++)
          i[s].isDataTexture ? r.push(qs(i[s].image)) : r.push(qs(i[s]));
      } else
        r = qs(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function qs(a) {
  return typeof HTMLImageElement < "u" && a instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && a instanceof ImageBitmap ? Gc.getDataURL(a) : a.data ? {
    data: Array.from(a.data),
    width: a.width,
    height: a.height,
    type: a.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ef = 0;
class rt extends ri {
  constructor(e = rt.DEFAULT_IMAGE, t = rt.DEFAULT_MAPPING, n = _t, i = _t, r = xt, s = Qn, o = Bt, l = ei, c = rt.DEFAULT_ANISOTROPY, u = Dn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ef++ }), this.uuid = Gt(), this.name = "", this.source = new Pi(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new j(0, 0), this.repeat = new j(1, 1), this.center = new j(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== qa)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case vn:
          e.x = e.x - Math.floor(e.x);
          break;
        case _t:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case mr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case vn:
          e.y = e.y - Math.floor(e.y);
          break;
        case _t:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case mr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
rt.DEFAULT_IMAGE = null;
rt.DEFAULT_MAPPING = qa;
rt.DEFAULT_ANISOTROPY = 1;
class Ye {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ye.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], d = l[5], g = l[9], m = l[2], p = l[6], y = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - m) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + m) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + d + y - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2, v = (d + 1) / 2, w = (y + 1) / 2, b = (u + f) / 4, E = (h + m) / 4, _ = (g + p) / 4;
      return x > v && x > w ? x < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(x), i = b / n, r = E / n) : v > w ? v < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(v), n = b / i, r = _ / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(w), n = E / r, i = _ / r), this.set(n, i, r, t), this;
    }
    let M = Math.sqrt((p - g) * (p - g) + (h - m) * (h - m) + (f - u) * (f - u));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (p - g) / M, this.y = (h - m) / M, this.z = (f - u) / M, this.w = Math.acos((c + d + y - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class ti extends ri {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ye(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ye(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new rt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : xt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Pi(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Hc extends rt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ut, this.minFilter = ut, this.wrapR = _t, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class tf extends rt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ut, this.minFilter = ut, this.wrapR = _t, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class kt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, s, o) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const f = r[s + 0], d = r[s + 1], g = r[s + 2], m = r[s + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = g, e[t + 3] = m;
      return;
    }
    if (h !== m || l !== f || c !== d || u !== g) {
      let p = 1 - o;
      const y = l * f + c * d + u * g + h * m, M = y >= 0 ? 1 : -1, x = 1 - y * y;
      if (x > Number.EPSILON) {
        const w = Math.sqrt(x), b = Math.atan2(w, y * M);
        p = Math.sin(p * b) / w, o = Math.sin(o * b) / w;
      }
      const v = o * M;
      if (l = l * p + f * v, c = c * p + d * v, u = u * p + g * v, h = h * p + m * v, p === 1 - o) {
        const w = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= w, c *= w, u *= w, h *= w;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, s) {
    const o = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = r[s], f = r[s + 1], d = r[s + 2], g = r[s + 3];
    return e[t] = o * g + u * h + l * d - c * f, e[t + 1] = l * g + u * f + c * h - o * d, e[t + 2] = c * g + u * d + o * f - l * h, e[t + 3] = u * g - o * h - l * f - c * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(i / 2), h = o(r / 2), f = l(n / 2), d = l(i / 2), g = l(r / 2);
    switch (s) {
      case "XYZ":
        this._x = f * u * h + c * d * g, this._y = c * d * h - f * u * g, this._z = c * u * g + f * d * h, this._w = c * u * h - f * d * g;
        break;
      case "YXZ":
        this._x = f * u * h + c * d * g, this._y = c * d * h - f * u * g, this._z = c * u * g - f * d * h, this._w = c * u * h + f * d * g;
        break;
      case "ZXY":
        this._x = f * u * h - c * d * g, this._y = c * d * h + f * u * g, this._z = c * u * g + f * d * h, this._w = c * u * h - f * d * g;
        break;
      case "ZYX":
        this._x = f * u * h - c * d * g, this._y = c * d * h + f * u * g, this._z = c * u * g - f * d * h, this._w = c * u * h + f * d * g;
        break;
      case "YZX":
        this._x = f * u * h + c * d * g, this._y = c * d * h + f * u * g, this._z = c * u * g - f * d * h, this._w = c * u * h - f * d * g;
        break;
      case "XZY":
        this._x = f * u * h - c * d * g, this._y = c * d * h - f * u * g, this._z = c * u * g + f * d * h, this._w = c * u * h + f * d * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], o = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = n + o + h;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (u - l) * d, this._y = (r - c) * d, this._z = (s - i) * d;
    } else if (n > o && n > h) {
      const d = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - l) / d, this._x = 0.25 * d, this._y = (i + s) / d, this._z = (r + c) / d;
    } else if (o > h) {
      const d = 2 * Math.sqrt(1 + o - n - h);
      this._w = (r - c) / d, this._x = (i + s) / d, this._y = 0.25 * d, this._z = (l + u) / d;
    } else {
      const d = 2 * Math.sqrt(1 + h - n - o);
      this._w = (s - i) / d, this._x = (r + c) / d, this._y = (l + u) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(lt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + s * o + i * c - r * l, this._y = i * u + s * l + r * o - n * c, this._z = r * u + s * c + n * l - i * o, this._w = s * u - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, r = this._z, s = this._w;
    let o = s * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = s, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * s + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = s * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = r * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(pl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(pl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, s = e.y, o = e.z, l = e.w, c = l * t + s * i - o * n, u = l * n + o * t - r * i, h = l * i + r * n - s * t, f = -r * t - s * n - o * i;
    return this.x = c * l + f * -r + u * -o - h * -s, this.y = u * l + f * -s + h * -r - c * -o, this.z = h * l + f * -o + c * -s - u * -r, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, s = t.x, o = t.y, l = t.z;
    return this.x = i * l - r * o, this.y = r * s - n * l, this.z = n * o - i * s, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ys.copy(this).projectOnVector(e), this.sub(Ys);
  }
  reflect(e) {
    return this.sub(Ys.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ys = /* @__PURE__ */ new L(), pl = /* @__PURE__ */ new kt();
class Gi {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l], h = e[l + 1], f = e[l + 2];
      u < t && (t = u), h < n && (n = h), f < i && (i = f), u > r && (r = u), h > s && (s = h), f > o && (o = f);
    }
    return this.min.set(t, n, i), this.max.set(r, s, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l), h = e.getY(l), f = e.getZ(l);
      u < t && (t = u), h < n && (n = h), f < i && (i = f), u > r && (r = u), h > s && (s = h), f > o && (o = f);
    }
    return this.min.set(t, n, i), this.max.set(r, s, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Un.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let s = 0, o = r.count; s < o; s++)
          Un.fromBufferAttribute(r, s).applyMatrix4(e.matrixWorld), this.expandByPoint(Un);
      } else
        n.boundingBox === null && n.computeBoundingBox(), Js.copy(n.boundingBox), Js.applyMatrix4(e.matrixWorld), this.union(Js);
    const i = e.children;
    for (let r = 0, s = i.length; r < s; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Un), Un.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter($i), Dr.subVectors(this.max, $i), hi.subVectors(e.a, $i), ui.subVectors(e.b, $i), fi.subVectors(e.c, $i), bn.subVectors(ui, hi), wn.subVectors(fi, ui), Bn.subVectors(hi, fi);
    let t = [
      0,
      -bn.z,
      bn.y,
      0,
      -wn.z,
      wn.y,
      0,
      -Bn.z,
      Bn.y,
      bn.z,
      0,
      -bn.x,
      wn.z,
      0,
      -wn.x,
      Bn.z,
      0,
      -Bn.x,
      -bn.y,
      bn.x,
      0,
      -wn.y,
      wn.x,
      0,
      -Bn.y,
      Bn.x,
      0
    ];
    return !Zs(t, hi, ui, fi, Dr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Zs(t, hi, ui, fi, Dr)) ? !1 : (Ir.crossVectors(bn, wn), t = [Ir.x, Ir.y, Ir.z], Zs(t, hi, ui, fi, Dr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Un.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(Un).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (cn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), cn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), cn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), cn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), cn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), cn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), cn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), cn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(cn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const cn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Un = /* @__PURE__ */ new L(), Js = /* @__PURE__ */ new Gi(), hi = /* @__PURE__ */ new L(), ui = /* @__PURE__ */ new L(), fi = /* @__PURE__ */ new L(), bn = /* @__PURE__ */ new L(), wn = /* @__PURE__ */ new L(), Bn = /* @__PURE__ */ new L(), $i = /* @__PURE__ */ new L(), Dr = /* @__PURE__ */ new L(), Ir = /* @__PURE__ */ new L(), kn = /* @__PURE__ */ new L();
function Zs(a, e, t, n, i) {
  for (let r = 0, s = a.length - 3; r <= s; r += 3) {
    kn.fromArray(a, r);
    const o = i.x * Math.abs(kn.x) + i.y * Math.abs(kn.y) + i.z * Math.abs(kn.z), l = e.dot(kn), c = t.dot(kn), u = n.dot(kn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const nf = /* @__PURE__ */ new Gi(), Ki = /* @__PURE__ */ new L(), $s = /* @__PURE__ */ new L();
class Hi {
  constructor(e = new L(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : nf.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, s = e.length; r < s; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ki.subVectors(e, this.center);
    const t = Ki.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ki, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : ($s.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ki.copy(e.center).add($s)), this.expandByPoint(Ki.copy(e.center).sub($s))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hn = /* @__PURE__ */ new L(), Ks = /* @__PURE__ */ new L(), Fr = /* @__PURE__ */ new L(), Sn = /* @__PURE__ */ new L(), js = /* @__PURE__ */ new L(), Or = /* @__PURE__ */ new L(), Qs = /* @__PURE__ */ new L();
class Ja {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, hn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = hn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (hn.copy(this.direction).multiplyScalar(t).add(this.origin), hn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ks.copy(e).add(t).multiplyScalar(0.5), Fr.copy(t).sub(e).normalize(), Sn.copy(this.origin).sub(Ks);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(Fr), o = Sn.dot(this.direction), l = -Sn.dot(Fr), c = Sn.lengthSq(), u = Math.abs(1 - s * s);
    let h, f, d, g;
    if (u > 0)
      if (h = s * l - o, f = s * o - l, g = r * u, h >= 0)
        if (f >= -g)
          if (f <= g) {
            const m = 1 / u;
            h *= m, f *= m, d = h * (h + s * f + 2 * o) + f * (s * h + f + 2 * l) + c;
          } else
            f = r, h = Math.max(0, -(s * f + o)), d = -h * h + f * (f + 2 * l) + c;
        else
          f = -r, h = Math.max(0, -(s * f + o)), d = -h * h + f * (f + 2 * l) + c;
      else
        f <= -g ? (h = Math.max(0, -(-s * r + o)), f = h > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -h * h + f * (f + 2 * l) + c) : f <= g ? (h = 0, f = Math.min(Math.max(-r, -l), r), d = f * (f + 2 * l) + c) : (h = Math.max(0, -(s * r + o)), f = h > 0 ? r : Math.min(Math.max(-r, -l), r), d = -h * h + f * (f + 2 * l) + c);
    else
      f = s > 0 ? -r : r, h = Math.max(0, -(s * f + o)), d = -h * h + f * (f + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Fr).multiplyScalar(f).add(Ks), d;
  }
  intersectSphere(e, t) {
    hn.subVectors(e.center, this.origin);
    const n = hn.dot(this.direction), i = hn.dot(hn) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const s = Math.sqrt(r - i), o = n - s, l = n + s;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, s, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), u >= 0 ? (r = (e.min.y - f.y) * u, s = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, s = (e.min.y - f.y) * u), n > s || r > i || ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h >= 0 ? (o = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (o = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, hn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    js.subVectors(t, e), Or.subVectors(n, e), Qs.crossVectors(js, Or);
    let s = this.direction.dot(Qs), o;
    if (s > 0) {
      if (i)
        return null;
      o = 1;
    } else if (s < 0)
      o = -1, s = -s;
    else
      return null;
    Sn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Or.crossVectors(Sn, Or));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(js.cross(Sn));
    if (c < 0 || l + c > s)
      return null;
    const u = -o * Sn.dot(Qs);
    return u < 0 ? null : this.at(u / s, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ye {
  constructor() {
    ye.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, s, o, l, c, u, h, f, d, g, m, p) {
    const y = this.elements;
    return y[0] = e, y[4] = t, y[8] = n, y[12] = i, y[1] = r, y[5] = s, y[9] = o, y[13] = l, y[2] = c, y[6] = u, y[10] = h, y[14] = f, y[3] = d, y[7] = g, y[11] = m, y[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ye().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / di.setFromMatrixColumn(e, 0).length(), r = 1 / di.setFromMatrixColumn(e, 1).length(), s = 1 / di.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, s = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const f = s * u, d = s * h, g = o * u, m = o * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = d + g * c, t[5] = f - m * c, t[9] = -o * l, t[2] = m - f * c, t[6] = g + d * c, t[10] = s * l;
    } else if (e.order === "YXZ") {
      const f = l * u, d = l * h, g = c * u, m = c * h;
      t[0] = f + m * o, t[4] = g * o - d, t[8] = s * c, t[1] = s * h, t[5] = s * u, t[9] = -o, t[2] = d * o - g, t[6] = m + f * o, t[10] = s * l;
    } else if (e.order === "ZXY") {
      const f = l * u, d = l * h, g = c * u, m = c * h;
      t[0] = f - m * o, t[4] = -s * h, t[8] = g + d * o, t[1] = d + g * o, t[5] = s * u, t[9] = m - f * o, t[2] = -s * c, t[6] = o, t[10] = s * l;
    } else if (e.order === "ZYX") {
      const f = s * u, d = s * h, g = o * u, m = o * h;
      t[0] = l * u, t[4] = g * c - d, t[8] = f * c + m, t[1] = l * h, t[5] = m * c + f, t[9] = d * c - g, t[2] = -c, t[6] = o * l, t[10] = s * l;
    } else if (e.order === "YZX") {
      const f = s * l, d = s * c, g = o * l, m = o * c;
      t[0] = l * u, t[4] = m - f * h, t[8] = g * h + d, t[1] = h, t[5] = s * u, t[9] = -o * u, t[2] = -c * u, t[6] = d * h + g, t[10] = f - m * h;
    } else if (e.order === "XZY") {
      const f = s * l, d = s * c, g = o * l, m = o * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + m, t[5] = s * u, t[9] = d * h - g, t[2] = g * h - d, t[6] = o * u, t[10] = m * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(rf, e, sf);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Dt.subVectors(e, t), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), Tn.crossVectors(n, Dt), Tn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), Tn.crossVectors(n, Dt)), Tn.normalize(), Nr.crossVectors(Dt, Tn), i[0] = Tn.x, i[4] = Nr.x, i[8] = Dt.x, i[1] = Tn.y, i[5] = Nr.y, i[9] = Dt.y, i[2] = Tn.z, i[6] = Nr.z, i[10] = Dt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], o = n[4], l = n[8], c = n[12], u = n[1], h = n[5], f = n[9], d = n[13], g = n[2], m = n[6], p = n[10], y = n[14], M = n[3], x = n[7], v = n[11], w = n[15], b = i[0], E = i[4], _ = i[8], S = i[12], C = i[1], I = i[5], H = i[9], O = i[13], D = i[2], B = i[6], J = i[10], ee = i[14], W = i[3], te = i[7], Q = i[11], G = i[15];
    return r[0] = s * b + o * C + l * D + c * W, r[4] = s * E + o * I + l * B + c * te, r[8] = s * _ + o * H + l * J + c * Q, r[12] = s * S + o * O + l * ee + c * G, r[1] = u * b + h * C + f * D + d * W, r[5] = u * E + h * I + f * B + d * te, r[9] = u * _ + h * H + f * J + d * Q, r[13] = u * S + h * O + f * ee + d * G, r[2] = g * b + m * C + p * D + y * W, r[6] = g * E + m * I + p * B + y * te, r[10] = g * _ + m * H + p * J + y * Q, r[14] = g * S + m * O + p * ee + y * G, r[3] = M * b + x * C + v * D + w * W, r[7] = M * E + x * I + v * B + w * te, r[11] = M * _ + x * H + v * J + w * Q, r[15] = M * S + x * O + v * ee + w * G, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], s = e[1], o = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], d = e[14], g = e[3], m = e[7], p = e[11], y = e[15];
    return g * (+r * l * h - i * c * h - r * o * f + n * c * f + i * o * d - n * l * d) + m * (+t * l * d - t * c * f + r * s * f - i * s * d + i * c * u - r * l * u) + p * (+t * c * h - t * o * d - r * s * h + n * s * d + r * o * u - n * c * u) + y * (-i * o * u - t * l * h + t * o * f + i * s * h - n * s * f + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], d = e[11], g = e[12], m = e[13], p = e[14], y = e[15], M = h * p * c - m * f * c + m * l * d - o * p * d - h * l * y + o * f * y, x = g * f * c - u * p * c - g * l * d + s * p * d + u * l * y - s * f * y, v = u * m * c - g * h * c + g * o * d - s * m * d - u * o * y + s * h * y, w = g * h * l - u * m * l - g * o * f + s * m * f + u * o * p - s * h * p, b = t * M + n * x + i * v + r * w;
    if (b === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / b;
    return e[0] = M * E, e[1] = (m * f * r - h * p * r - m * i * d + n * p * d + h * i * y - n * f * y) * E, e[2] = (o * p * r - m * l * r + m * i * c - n * p * c - o * i * y + n * l * y) * E, e[3] = (h * l * r - o * f * r - h * i * c + n * f * c + o * i * d - n * l * d) * E, e[4] = x * E, e[5] = (u * p * r - g * f * r + g * i * d - t * p * d - u * i * y + t * f * y) * E, e[6] = (g * l * r - s * p * r - g * i * c + t * p * c + s * i * y - t * l * y) * E, e[7] = (s * f * r - u * l * r + u * i * c - t * f * c - s * i * d + t * l * d) * E, e[8] = v * E, e[9] = (g * h * r - u * m * r - g * n * d + t * m * d + u * n * y - t * h * y) * E, e[10] = (s * m * r - g * o * r + g * n * c - t * m * c - s * n * y + t * o * y) * E, e[11] = (u * o * r - s * h * r - u * n * c + t * h * c + s * n * d - t * o * d) * E, e[12] = w * E, e[13] = (u * m * i - g * h * i + g * n * f - t * m * f - u * n * p + t * h * p) * E, e[14] = (g * o * i - s * m * i - g * n * l + t * m * l + s * n * p - t * o * p) * E, e[15] = (s * h * i - u * o * i + u * n * l - t * h * l - s * n * f + t * o * f) * E, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, s = e.x, o = e.y, l = e.z, c = r * s, u = r * o;
    return this.set(
      c * s + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      u * o + n,
      u * l - i * s,
      0,
      c * l - i * o,
      u * l + i * s,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, s) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      s,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, s = t._y, o = t._z, l = t._w, c = r + r, u = s + s, h = o + o, f = r * c, d = r * u, g = r * h, m = s * u, p = s * h, y = o * h, M = l * c, x = l * u, v = l * h, w = n.x, b = n.y, E = n.z;
    return i[0] = (1 - (m + y)) * w, i[1] = (d + v) * w, i[2] = (g - x) * w, i[3] = 0, i[4] = (d - v) * b, i[5] = (1 - (f + y)) * b, i[6] = (p + M) * b, i[7] = 0, i[8] = (g + x) * E, i[9] = (p - M) * E, i[10] = (1 - (f + m)) * E, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = di.set(i[0], i[1], i[2]).length();
    const s = di.set(i[4], i[5], i[6]).length(), o = di.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Wt.copy(this);
    const c = 1 / r, u = 1 / s, h = 1 / o;
    return Wt.elements[0] *= c, Wt.elements[1] *= c, Wt.elements[2] *= c, Wt.elements[4] *= u, Wt.elements[5] *= u, Wt.elements[6] *= u, Wt.elements[8] *= h, Wt.elements[9] *= h, Wt.elements[10] *= h, t.setFromRotationMatrix(Wt), n.x = r, n.y = s, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, s) {
    const o = this.elements, l = 2 * r / (t - e), c = 2 * r / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), f = -(s + r) / (s - r), d = -2 * s * r / (s - r);
    return o[0] = l, o[4] = 0, o[8] = u, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = f, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, s) {
    const o = this.elements, l = 1 / (t - e), c = 1 / (n - i), u = 1 / (s - r), h = (t + e) * l, f = (n + i) * c, d = (s + r) * u;
    return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -f, o[2] = 0, o[6] = 0, o[10] = -2 * u, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const di = /* @__PURE__ */ new L(), Wt = /* @__PURE__ */ new ye(), rf = /* @__PURE__ */ new L(0, 0, 0), sf = /* @__PURE__ */ new L(1, 1, 1), Tn = /* @__PURE__ */ new L(), Nr = /* @__PURE__ */ new L(), Dt = /* @__PURE__ */ new L(), ml = /* @__PURE__ */ new ye(), gl = /* @__PURE__ */ new kt();
class Ot {
  constructor(e = 0, t = 0, n = 0, i = Ot.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], s = i[4], o = i[8], l = i[1], c = i[5], u = i[9], h = i[2], f = i[6], d = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(lt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-lt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(lt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-lt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-s, c));
        break;
      case "YZX":
        this._z = Math.asin(lt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-lt(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ml.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ml, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return gl.setFromEuler(this), this.setFromQuaternion(gl, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
Ot.DefaultOrder = "XYZ";
Ot.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Wc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let af = 0;
const xl = /* @__PURE__ */ new L(), pi = /* @__PURE__ */ new kt(), un = /* @__PURE__ */ new ye(), zr = /* @__PURE__ */ new L(), ji = /* @__PURE__ */ new L(), of = /* @__PURE__ */ new L(), lf = /* @__PURE__ */ new kt(), _l = /* @__PURE__ */ new L(1, 0, 0), vl = /* @__PURE__ */ new L(0, 1, 0), yl = /* @__PURE__ */ new L(0, 0, 1), cf = { type: "added" }, Ml = { type: "removed" };
class $e extends ri {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: af++ }), this.uuid = Gt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = $e.DefaultUp.clone();
    const e = new L(), t = new Ot(), n = new kt(), i = new L(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function s() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(s), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ye()
      },
      normalMatrix: {
        value: new Ct()
      }
    }), this.matrix = new ye(), this.matrixWorld = new ye(), this.matrixAutoUpdate = $e.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = $e.DefaultMatrixWorldAutoUpdate, this.layers = new Wc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return pi.setFromAxisAngle(e, t), this.quaternion.multiply(pi), this;
  }
  rotateOnWorldAxis(e, t) {
    return pi.setFromAxisAngle(e, t), this.quaternion.premultiply(pi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(_l, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(vl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(yl, e);
  }
  translateOnAxis(e, t) {
    return xl.copy(e).applyQuaternion(this.quaternion), this.position.add(xl.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(_l, e);
  }
  translateY(e) {
    return this.translateOnAxis(vl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(yl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(un.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? zr.copy(e) : zr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ji.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? un.lookAt(ji, zr, this.up) : un.lookAt(zr, ji, this.up), this.quaternion.setFromRotationMatrix(un), i && (un.extractRotation(i.matrixWorld), pi.setFromRotationMatrix(un), this.quaternion.premultiply(pi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(cf)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ml)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Ml);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), un.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), un.multiply(e.parent.matrixWorld)), e.applyMatrix4(un), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const s = this.children[n].getObjectByProperty(e, t);
      if (s !== void 0)
        return s;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, r = this.children.length; i < r; i++) {
      const s = this.children[i].getObjectsByProperty(e, t);
      s.length > 0 && (n = n.concat(s));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ji, e, of), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ji, lf, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++) {
        const o = i[r];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            r(e.shapes, h);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = s(e.geometries), l = s(e.materials), c = s(e.textures), u = s(e.images), h = s(e.shapes), f = s(e.skeletons), d = s(e.animations), g = s(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function s(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
$e.DefaultUp = /* @__PURE__ */ new L(0, 1, 0);
$e.DefaultMatrixAutoUpdate = !0;
$e.DefaultMatrixWorldAutoUpdate = !0;
const Xt = /* @__PURE__ */ new L(), fn = /* @__PURE__ */ new L(), ea = /* @__PURE__ */ new L(), dn = /* @__PURE__ */ new L(), mi = /* @__PURE__ */ new L(), gi = /* @__PURE__ */ new L(), bl = /* @__PURE__ */ new L(), ta = /* @__PURE__ */ new L(), na = /* @__PURE__ */ new L(), ia = /* @__PURE__ */ new L();
class Zt {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Xt.subVectors(e, t), i.cross(Xt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Xt.subVectors(i, t), fn.subVectors(n, t), ea.subVectors(e, t);
    const s = Xt.dot(Xt), o = Xt.dot(fn), l = Xt.dot(ea), c = fn.dot(fn), u = fn.dot(ea), h = s * c - o * o;
    if (h === 0)
      return r.set(-2, -1, -1);
    const f = 1 / h, d = (c * l - o * u) * f, g = (s * u - o * l) * f;
    return r.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, dn), dn.x >= 0 && dn.y >= 0 && dn.x + dn.y <= 1;
  }
  static getUV(e, t, n, i, r, s, o, l) {
    return this.getBarycoord(e, t, n, i, dn), l.set(0, 0), l.addScaledVector(r, dn.x), l.addScaledVector(s, dn.y), l.addScaledVector(o, dn.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return Xt.subVectors(n, t), fn.subVectors(e, t), Xt.cross(fn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Xt.subVectors(this.c, this.b), fn.subVectors(this.a, this.b), Xt.cross(fn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Zt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let s, o;
    mi.subVectors(i, n), gi.subVectors(r, n), ta.subVectors(e, n);
    const l = mi.dot(ta), c = gi.dot(ta);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    na.subVectors(e, i);
    const u = mi.dot(na), h = gi.dot(na);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return s = l / (l - u), t.copy(n).addScaledVector(mi, s);
    ia.subVectors(e, r);
    const d = mi.dot(ia), g = gi.dot(ia);
    if (g >= 0 && d <= g)
      return t.copy(r);
    const m = d * c - l * g;
    if (m <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(gi, o);
    const p = u * g - d * h;
    if (p <= 0 && h - u >= 0 && d - g >= 0)
      return bl.subVectors(r, i), o = (h - u) / (h - u + (d - g)), t.copy(i).addScaledVector(bl, o);
    const y = 1 / (p + m + f);
    return s = m * y, o = f * y, t.copy(n).addScaledVector(mi, s).addScaledVector(gi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let hf = 0;
class yt extends ri {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: hf++ }), this.uuid = Gt(), this.name = "", this.type = "Material", this.blending = Oi, this.side = $n, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Fc, this.blendDst = Oc, this.blendEquation = Ci, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ca, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Bu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gs, this.stencilZFail = Gs, this.stencilZPass = Gs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Oi && (n.blending = this.blending), this.side !== $n && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const s = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, s.push(l);
      }
      return s;
    }
    if (t) {
      const r = i(e.textures), s = i(e.images);
      r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Za extends yt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ws, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ot = /* @__PURE__ */ new L(), Ur = /* @__PURE__ */ new j();
class ct {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Pa, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ur.fromBufferAttribute(this, t), Ur.applyMatrix3(e), this.setXY(t, Ur.x, Ur.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t), ot.applyMatrix3(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Pa && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class $a extends ct {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Xc extends ct {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Se extends ct {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let uf = 0;
const zt = /* @__PURE__ */ new ye(), ra = /* @__PURE__ */ new $e(), xi = /* @__PURE__ */ new L(), It = /* @__PURE__ */ new Gi(), Qi = /* @__PURE__ */ new Gi(), gt = /* @__PURE__ */ new L();
class Je extends ri {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: uf++ }), this.uuid = Gt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (kc(e) ? Xc : $a)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ct().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this;
  }
  rotateX(e) {
    return zt.makeRotationX(e), this.applyMatrix4(zt), this;
  }
  rotateY(e) {
    return zt.makeRotationY(e), this.applyMatrix4(zt), this;
  }
  rotateZ(e) {
    return zt.makeRotationZ(e), this.applyMatrix4(zt), this;
  }
  translate(e, t, n) {
    return zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this;
  }
  scale(e, t, n) {
    return zt.makeScale(e, t, n), this.applyMatrix4(zt), this;
  }
  lookAt(e) {
    return ra.lookAt(e), ra.updateMatrix(), this.applyMatrix4(ra.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(xi).negate(), this.translate(xi.x, xi.y, xi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Se(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Gi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          It.setFromBufferAttribute(r), this.morphTargetsRelative ? (gt.addVectors(this.boundingBox.min, It.min), this.boundingBox.expandByPoint(gt), gt.addVectors(this.boundingBox.max, It.max), this.boundingBox.expandByPoint(gt)) : (this.boundingBox.expandByPoint(It.min), this.boundingBox.expandByPoint(It.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Hi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (It.setFromBufferAttribute(e), t)
        for (let r = 0, s = t.length; r < s; r++) {
          const o = t[r];
          Qi.setFromBufferAttribute(o), this.morphTargetsRelative ? (gt.addVectors(It.min, Qi.min), It.expandByPoint(gt), gt.addVectors(It.max, Qi.max), It.expandByPoint(gt)) : (It.expandByPoint(Qi.min), It.expandByPoint(Qi.max));
        }
      It.getCenter(n);
      let i = 0;
      for (let r = 0, s = e.count; r < s; r++)
        gt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(gt));
      if (t)
        for (let r = 0, s = t.length; r < s; r++) {
          const o = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            gt.fromBufferAttribute(o, c), l && (xi.fromBufferAttribute(e, c), gt.add(xi)), i = Math.max(i, n.distanceToSquared(gt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, r = t.normal.array, s = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ct(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let C = 0; C < o; C++)
      c[C] = new L(), u[C] = new L();
    const h = new L(), f = new L(), d = new L(), g = new j(), m = new j(), p = new j(), y = new L(), M = new L();
    function x(C, I, H) {
      h.fromArray(i, C * 3), f.fromArray(i, I * 3), d.fromArray(i, H * 3), g.fromArray(s, C * 2), m.fromArray(s, I * 2), p.fromArray(s, H * 2), f.sub(h), d.sub(h), m.sub(g), p.sub(g);
      const O = 1 / (m.x * p.y - p.x * m.y);
      !isFinite(O) || (y.copy(f).multiplyScalar(p.y).addScaledVector(d, -m.y).multiplyScalar(O), M.copy(d).multiplyScalar(m.x).addScaledVector(f, -p.x).multiplyScalar(O), c[C].add(y), c[I].add(y), c[H].add(y), u[C].add(M), u[I].add(M), u[H].add(M));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: n.length
    }]);
    for (let C = 0, I = v.length; C < I; ++C) {
      const H = v[C], O = H.start, D = H.count;
      for (let B = O, J = O + D; B < J; B += 3)
        x(
          n[B + 0],
          n[B + 1],
          n[B + 2]
        );
    }
    const w = new L(), b = new L(), E = new L(), _ = new L();
    function S(C) {
      E.fromArray(r, C * 3), _.copy(E);
      const I = c[C];
      w.copy(I), w.sub(E.multiplyScalar(E.dot(I))).normalize(), b.crossVectors(_, I);
      const O = b.dot(u[C]) < 0 ? -1 : 1;
      l[C * 4] = w.x, l[C * 4 + 1] = w.y, l[C * 4 + 2] = w.z, l[C * 4 + 3] = O;
    }
    for (let C = 0, I = v.length; C < I; ++C) {
      const H = v[C], O = H.start, D = H.count;
      for (let B = O, J = O + D; B < J; B += 3)
        S(n[B + 0]), S(n[B + 1]), S(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new ct(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, d = n.count; f < d; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new L(), r = new L(), s = new L(), o = new L(), l = new L(), c = new L(), u = new L(), h = new L();
      if (e)
        for (let f = 0, d = e.count; f < d; f += 3) {
          const g = e.getX(f + 0), m = e.getX(f + 1), p = e.getX(f + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, m), s.fromBufferAttribute(t, p), u.subVectors(s, r), h.subVectors(i, r), u.cross(h), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, m), c.fromBufferAttribute(n, p), o.add(u), l.add(u), c.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, d = t.count; f < d; f += 3)
          i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), s.fromBufferAttribute(t, f + 2), u.subVectors(s, r), h.subVectors(i, r), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      gt.fromBufferAttribute(e, t), gt.normalize(), e.setXYZ(t, gt.x, gt.y, gt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, f = new c.constructor(l.length * u);
      let d = 0, g = 0;
      for (let m = 0, p = l.length; m < p; m++) {
        o.isInterleavedBufferAttribute ? d = l[m] * o.data.stride + o.offset : d = l[m] * u;
        for (let y = 0; y < u; y++)
          f[g++] = c[d++];
      }
      return new ct(f, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Je(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], d = e(f, n);
        l.push(d);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let o = 0, l = s.length; o < l; o++) {
      const c = s[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], h = r[c];
      for (let f = 0, d = h.length; f < d; f++)
        u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const wl = /* @__PURE__ */ new ye(), _i = /* @__PURE__ */ new Ja(), sa = /* @__PURE__ */ new Hi(), er = /* @__PURE__ */ new L(), tr = /* @__PURE__ */ new L(), nr = /* @__PURE__ */ new L(), aa = /* @__PURE__ */ new L(), Br = /* @__PURE__ */ new L(), kr = /* @__PURE__ */ new j(), Vr = /* @__PURE__ */ new j(), Gr = /* @__PURE__ */ new j(), oa = /* @__PURE__ */ new L(), Hr = /* @__PURE__ */ new L();
class vt extends $e {
  constructor(e = new Je(), t = new Za()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, s = i.length; r < s; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Br.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = o[l], h = r[l];
        u !== 0 && (aa.fromBufferAttribute(h, e), s ? Br.addScaledVector(aa, u) : Br.addScaledVector(aa.sub(t), u));
      }
      t.add(Br);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), sa.copy(n.boundingSphere), sa.applyMatrix4(r), e.ray.intersectsSphere(sa) === !1) || (wl.copy(r).invert(), _i.copy(e.ray).applyMatrix4(wl), n.boundingBox !== null && _i.intersectsBox(n.boundingBox) === !1))
      return;
    let s;
    const o = n.index, l = n.attributes.position, c = n.attributes.uv, u = n.attributes.uv2, h = n.groups, f = n.drawRange;
    if (o !== null)
      if (Array.isArray(i))
        for (let d = 0, g = h.length; d < g; d++) {
          const m = h[d], p = i[m.materialIndex], y = Math.max(m.start, f.start), M = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
          for (let x = y, v = M; x < v; x += 3) {
            const w = o.getX(x), b = o.getX(x + 1), E = o.getX(x + 2);
            s = Wr(this, p, e, _i, c, u, w, b, E), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = m.materialIndex, t.push(s));
          }
        }
      else {
        const d = Math.max(0, f.start), g = Math.min(o.count, f.start + f.count);
        for (let m = d, p = g; m < p; m += 3) {
          const y = o.getX(m), M = o.getX(m + 1), x = o.getX(m + 2);
          s = Wr(this, i, e, _i, c, u, y, M, x), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let d = 0, g = h.length; d < g; d++) {
          const m = h[d], p = i[m.materialIndex], y = Math.max(m.start, f.start), M = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
          for (let x = y, v = M; x < v; x += 3) {
            const w = x, b = x + 1, E = x + 2;
            s = Wr(this, p, e, _i, c, u, w, b, E), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = m.materialIndex, t.push(s));
          }
        }
      else {
        const d = Math.max(0, f.start), g = Math.min(l.count, f.start + f.count);
        for (let m = d, p = g; m < p; m += 3) {
          const y = m, M = m + 1, x = m + 2;
          s = Wr(this, i, e, _i, c, u, y, M, x), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
        }
      }
  }
}
function ff(a, e, t, n, i, r, s, o) {
  let l;
  if (e.side === Vt ? l = n.intersectTriangle(s, r, i, !0, o) : l = n.intersectTriangle(i, r, s, e.side === $n, o), l === null)
    return null;
  Hr.copy(o), Hr.applyMatrix4(a.matrixWorld);
  const c = t.ray.origin.distanceTo(Hr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Hr.clone(),
    object: a
  };
}
function Wr(a, e, t, n, i, r, s, o, l) {
  a.getVertexPosition(s, er), a.getVertexPosition(o, tr), a.getVertexPosition(l, nr);
  const c = ff(a, e, t, n, er, tr, nr, oa);
  if (c) {
    i && (kr.fromBufferAttribute(i, s), Vr.fromBufferAttribute(i, o), Gr.fromBufferAttribute(i, l), c.uv = Zt.getUV(oa, er, tr, nr, kr, Vr, Gr, new j())), r && (kr.fromBufferAttribute(r, s), Vr.fromBufferAttribute(r, o), Gr.fromBufferAttribute(r, l), c.uv2 = Zt.getUV(oa, er, tr, nr, kr, Vr, Gr, new j()));
    const u = {
      a: s,
      b: o,
      c: l,
      normal: new L(),
      materialIndex: 0
    };
    Zt.getNormal(er, tr, nr, u.normal), c.face = u;
  }
  return c;
}
class Wi extends Je {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, s = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: s
    };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
    const l = [], c = [], u = [], h = [];
    let f = 0, d = 0;
    g("z", "y", "x", -1, -1, n, t, e, s, r, 0), g("z", "y", "x", 1, -1, n, t, -e, s, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, s, 2), g("x", "z", "y", 1, -1, e, n, -t, i, s, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Se(c, 3)), this.setAttribute("normal", new Se(u, 3)), this.setAttribute("uv", new Se(h, 2));
    function g(m, p, y, M, x, v, w, b, E, _, S) {
      const C = v / E, I = w / _, H = v / 2, O = w / 2, D = b / 2, B = E + 1, J = _ + 1;
      let ee = 0, W = 0;
      const te = new L();
      for (let Q = 0; Q < J; Q++) {
        const G = Q * I - O;
        for (let k = 0; k < B; k++) {
          const ae = k * C - H;
          te[m] = ae * M, te[p] = G * x, te[y] = D, c.push(te.x, te.y, te.z), te[m] = 0, te[p] = 0, te[y] = b > 0 ? 1 : -1, u.push(te.x, te.y, te.z), h.push(k / E), h.push(1 - Q / _), ee += 1;
        }
      }
      for (let Q = 0; Q < _; Q++)
        for (let G = 0; G < E; G++) {
          const k = f + G + B * Q, ae = f + G + B * (Q + 1), re = f + (G + 1) + B * (Q + 1), le = f + (G + 1) + B * Q;
          l.push(k, ae, le), l.push(ae, re, le), W += 6;
        }
      o.addGroup(d, W, S), d += W, f += ee;
    }
  }
  static fromJSON(e) {
    return new Wi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ki(a) {
  const e = {};
  for (const t in a) {
    e[t] = {};
    for (const n in a[t]) {
      const i = a[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function At(a) {
  const e = {};
  for (let t = 0; t < a.length; t++) {
    const n = ki(a[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function df(a) {
  const e = [];
  for (let t = 0; t < a.length; t++)
    e.push(a[t].clone());
  return e;
}
function qc(a) {
  return a.getRenderTarget() === null && a.outputEncoding === Xe ? jt : gr;
}
const pf = { clone: ki, merge: At };
var mf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class yn extends yt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = mf, this.fragmentShader = gf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ki(e.uniforms), this.uniformsGroups = df(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const s = this.uniforms[i].value;
      s && s.isTexture ? t.uniforms[i] = {
        type: "t",
        value: s.toJSON(e).uuid
      } : s && s.isColor ? t.uniforms[i] = {
        type: "c",
        value: s.getHex()
      } : s && s.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: s.toArray()
      } : s && s.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: s.toArray()
      } : s && s.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: s.toArray()
      } : s && s.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: s.toArray()
      } : s && s.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: s.toArray()
      } : t.uniforms[i] = {
        value: s
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Yc extends $e {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ye(), this.projectionMatrix = new ye(), this.projectionMatrixInverse = new ye();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Yc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = xr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(zi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return xr * 2 * Math.atan(
      Math.tan(zi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(zi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = s.fullWidth, c = s.fullHeight;
      r += s.offsetX * i / l, t -= s.offsetY * n / c, i *= s.width / l, n *= s.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const vi = -90, yi = 1;
class xf extends $e {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new wt(vi, yi, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new wt(vi, yi, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
    const s = new wt(vi, yi, e, t);
    s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(0, 1, 0), this.add(s);
    const o = new wt(vi, yi, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(0, -1, 0), this.add(o);
    const l = new wt(vi, yi, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new wt(vi, yi, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, -1), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, r, s, o, l, c] = this.children, u = e.getRenderTarget(), h = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = _n, e.xr.enabled = !1;
    const d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, s), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.toneMapping = h, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class Ka extends rt {
  constructor(e, t, n, i, r, s, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Kn, super(e, t, n, i, r, s, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class _f extends ti {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Ka(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : xt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new Wi(5, 5, 5), r = new yn({
      name: "CubemapFromEquirect",
      uniforms: ki(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Vt,
      blending: Pn
    });
    r.uniforms.tEquirect.value = t;
    const s = new vt(i, r), o = t.minFilter;
    return t.minFilter === Qn && (t.minFilter = xt), new xf(1, 10, this).update(e, s), t.minFilter = o, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const la = /* @__PURE__ */ new L(), vf = /* @__PURE__ */ new L(), yf = /* @__PURE__ */ new Ct();
class Gn {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = la.subVectors(n, t).cross(vf.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(la), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || yf.getNormalMatrix(e), i = this.coplanarPoint(la).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mi = /* @__PURE__ */ new Hi(), Xr = /* @__PURE__ */ new L();
class ja {
  constructor(e = new Gn(), t = new Gn(), n = new Gn(), i = new Gn(), r = new Gn(), s = new Gn()) {
    this.planes = [e, t, n, i, r, s];
  }
  set(e, t, n, i, r, s) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(s), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], r = n[1], s = n[2], o = n[3], l = n[4], c = n[5], u = n[6], h = n[7], f = n[8], d = n[9], g = n[10], m = n[11], p = n[12], y = n[13], M = n[14], x = n[15];
    return t[0].setComponents(o - i, h - l, m - f, x - p).normalize(), t[1].setComponents(o + i, h + l, m + f, x + p).normalize(), t[2].setComponents(o + r, h + c, m + d, x + y).normalize(), t[3].setComponents(o - r, h - c, m - d, x - y).normalize(), t[4].setComponents(o - s, h - u, m - g, x - M).normalize(), t[5].setComponents(o + s, h + u, m + g, x + M).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Mi);
  }
  intersectsSprite(e) {
    return Mi.center.set(0, 0, 0), Mi.radius = 0.7071067811865476, Mi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Mi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Xr.x = i.normal.x > 0 ? e.max.x : e.min.x, Xr.y = i.normal.y > 0 ? e.max.y : e.min.y, Xr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Xr) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Jc() {
  let a = null, e = !1, t = null, n = null;
  function i(r, s) {
    t(r, s), n = a.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = a.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      a.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      a = r;
    }
  };
}
function Mf(a, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, u) {
    const h = c.array, f = c.usage, d = a.createBuffer();
    a.bindBuffer(u, d), a.bufferData(u, h, f), c.onUploadCallback();
    let g;
    if (h instanceof Float32Array)
      g = 5126;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (h instanceof Int16Array)
      g = 5122;
    else if (h instanceof Uint32Array)
      g = 5125;
    else if (h instanceof Int32Array)
      g = 5124;
    else if (h instanceof Int8Array)
      g = 5120;
    else if (h instanceof Uint8Array)
      g = 5121;
    else if (h instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: d,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function r(c, u, h) {
    const f = u.array, d = u.updateRange;
    a.bindBuffer(h, c), d.count === -1 ? a.bufferSubData(h, 0, f) : (t ? a.bufferSubData(
      h,
      d.offset * f.BYTES_PER_ELEMENT,
      f,
      d.offset,
      d.count
    ) : a.bufferSubData(
      h,
      d.offset * f.BYTES_PER_ELEMENT,
      f.subarray(d.offset, d.offset + d.count)
    ), d.count = -1), u.onUploadCallback();
  }
  function s(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (a.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (r(h.buffer, c, u), h.version = c.version);
  }
  return {
    get: s,
    remove: o,
    update: l
  };
}
class Ss extends Je {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, s = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, u = l + 1, h = e / o, f = t / l, d = [], g = [], m = [], p = [];
    for (let y = 0; y < u; y++) {
      const M = y * f - s;
      for (let x = 0; x < c; x++) {
        const v = x * h - r;
        g.push(v, -M, 0), m.push(0, 0, 1), p.push(x / o), p.push(1 - y / l);
      }
    }
    for (let y = 0; y < l; y++)
      for (let M = 0; M < o; M++) {
        const x = M + c * y, v = M + c * (y + 1), w = M + 1 + c * (y + 1), b = M + 1 + c * y;
        d.push(x, v, b), d.push(v, w, b);
      }
    this.setIndex(d), this.setAttribute("position", new Se(g, 3)), this.setAttribute("normal", new Se(m, 3)), this.setAttribute("uv", new Se(p, 2));
  }
  static fromJSON(e) {
    return new Ss(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var bf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, wf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Sf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Tf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ef = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Af = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Cf = "vec3 transformed = vec3( position );", Lf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Pf = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Rf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Df = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, If = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Ff = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Of = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Nf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Uf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Bf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, kf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Vf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Gf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Hf = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Wf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Xf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, qf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Yf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Jf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, $f = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Kf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, jf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Qf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ed = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, td = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, nd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, id = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, rd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, sd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ad = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, od = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ld = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, cd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, hd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, ud = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, fd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, dd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, pd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, md = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, gd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, xd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, _d = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, vd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, yd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Md = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, bd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Sd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Td = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ed = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Ad = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Cd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ld = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Pd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Rd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Dd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Id = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Fd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Od = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Nd = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, zd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ud = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Bd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, kd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Vd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Gd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Hd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Wd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Xd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, qd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Yd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Jd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Zd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, $d = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Kd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, jd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Qd = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ep = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, tp = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, np = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, ip = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, rp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, sp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ap = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, op = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, lp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, cp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, hp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, up = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, fp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, dp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, pp = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, mp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, gp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, xp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, _p = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, vp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const yp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Mp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, bp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, wp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Sp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Tp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ep = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Ap = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Cp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Lp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Pp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Rp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Dp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ip = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Fp = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Op = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Np = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Up = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Bp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Vp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Gp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Xp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Zp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, $p = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Kp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, jp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Qp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Fe = {
  alphamap_fragment: bf,
  alphamap_pars_fragment: wf,
  alphatest_fragment: Sf,
  alphatest_pars_fragment: Tf,
  aomap_fragment: Ef,
  aomap_pars_fragment: Af,
  begin_vertex: Cf,
  beginnormal_vertex: Lf,
  bsdfs: Pf,
  iridescence_fragment: Rf,
  bumpmap_pars_fragment: Df,
  clipping_planes_fragment: If,
  clipping_planes_pars_fragment: Ff,
  clipping_planes_pars_vertex: Of,
  clipping_planes_vertex: Nf,
  color_fragment: zf,
  color_pars_fragment: Uf,
  color_pars_vertex: Bf,
  color_vertex: kf,
  common: Vf,
  cube_uv_reflection_fragment: Gf,
  defaultnormal_vertex: Hf,
  displacementmap_pars_vertex: Wf,
  displacementmap_vertex: Xf,
  emissivemap_fragment: qf,
  emissivemap_pars_fragment: Yf,
  encodings_fragment: Jf,
  encodings_pars_fragment: Zf,
  envmap_fragment: $f,
  envmap_common_pars_fragment: Kf,
  envmap_pars_fragment: jf,
  envmap_pars_vertex: Qf,
  envmap_physical_pars_fragment: ud,
  envmap_vertex: ed,
  fog_vertex: td,
  fog_pars_vertex: nd,
  fog_fragment: id,
  fog_pars_fragment: rd,
  gradientmap_pars_fragment: sd,
  lightmap_fragment: ad,
  lightmap_pars_fragment: od,
  lights_lambert_fragment: ld,
  lights_lambert_pars_fragment: cd,
  lights_pars_begin: hd,
  lights_toon_fragment: fd,
  lights_toon_pars_fragment: dd,
  lights_phong_fragment: pd,
  lights_phong_pars_fragment: md,
  lights_physical_fragment: gd,
  lights_physical_pars_fragment: xd,
  lights_fragment_begin: _d,
  lights_fragment_maps: vd,
  lights_fragment_end: yd,
  logdepthbuf_fragment: Md,
  logdepthbuf_pars_fragment: bd,
  logdepthbuf_pars_vertex: wd,
  logdepthbuf_vertex: Sd,
  map_fragment: Td,
  map_pars_fragment: Ed,
  map_particle_fragment: Ad,
  map_particle_pars_fragment: Cd,
  metalnessmap_fragment: Ld,
  metalnessmap_pars_fragment: Pd,
  morphcolor_vertex: Rd,
  morphnormal_vertex: Dd,
  morphtarget_pars_vertex: Id,
  morphtarget_vertex: Fd,
  normal_fragment_begin: Od,
  normal_fragment_maps: Nd,
  normal_pars_fragment: zd,
  normal_pars_vertex: Ud,
  normal_vertex: Bd,
  normalmap_pars_fragment: kd,
  clearcoat_normal_fragment_begin: Vd,
  clearcoat_normal_fragment_maps: Gd,
  clearcoat_pars_fragment: Hd,
  iridescence_pars_fragment: Wd,
  output_fragment: Xd,
  packing: qd,
  premultiplied_alpha_fragment: Yd,
  project_vertex: Jd,
  dithering_fragment: Zd,
  dithering_pars_fragment: $d,
  roughnessmap_fragment: Kd,
  roughnessmap_pars_fragment: jd,
  shadowmap_pars_fragment: Qd,
  shadowmap_pars_vertex: ep,
  shadowmap_vertex: tp,
  shadowmask_pars_fragment: np,
  skinbase_vertex: ip,
  skinning_pars_vertex: rp,
  skinning_vertex: sp,
  skinnormal_vertex: ap,
  specularmap_fragment: op,
  specularmap_pars_fragment: lp,
  tonemapping_fragment: cp,
  tonemapping_pars_fragment: hp,
  transmission_fragment: up,
  transmission_pars_fragment: fp,
  uv_pars_fragment: dp,
  uv_pars_vertex: pp,
  uv_vertex: mp,
  uv2_pars_fragment: gp,
  uv2_pars_vertex: xp,
  uv2_vertex: _p,
  worldpos_vertex: vp,
  background_vert: yp,
  background_frag: Mp,
  backgroundCube_vert: bp,
  backgroundCube_frag: wp,
  cube_vert: Sp,
  cube_frag: Tp,
  depth_vert: Ep,
  depth_frag: Ap,
  distanceRGBA_vert: Cp,
  distanceRGBA_frag: Lp,
  equirect_vert: Pp,
  equirect_frag: Rp,
  linedashed_vert: Dp,
  linedashed_frag: Ip,
  meshbasic_vert: Fp,
  meshbasic_frag: Op,
  meshlambert_vert: Np,
  meshlambert_frag: zp,
  meshmatcap_vert: Up,
  meshmatcap_frag: Bp,
  meshnormal_vert: kp,
  meshnormal_frag: Vp,
  meshphong_vert: Gp,
  meshphong_frag: Hp,
  meshphysical_vert: Wp,
  meshphysical_frag: Xp,
  meshtoon_vert: qp,
  meshtoon_frag: Yp,
  points_vert: Jp,
  points_frag: Zp,
  shadow_vert: $p,
  shadow_frag: Kp,
  sprite_vert: jp,
  sprite_frag: Qp
}, he = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Ct() },
    uv2Transform: { value: /* @__PURE__ */ new Ct() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new j(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Me(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ct() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new j(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ct() }
  }
}, Qt = {
  basic: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.specularmap,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) },
        specular: { value: /* @__PURE__ */ new Me(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.envmap,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.roughnessmap,
      he.metalnessmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.aomap,
      he.lightmap,
      he.emissivemap,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.gradientmap,
      he.fog,
      he.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      he.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ At([
      he.points,
      he.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.bumpmap,
      he.normalmap,
      he.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ At([
      he.sprite,
      he.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ct() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ At([
      he.common,
      he.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ At([
      he.lights,
      he.fog,
      {
        color: { value: /* @__PURE__ */ new Me(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
Qt.physical = {
  uniforms: /* @__PURE__ */ At([
    Qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new j(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Me(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new j() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Me(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Me(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const qr = { r: 0, b: 0, g: 0 };
function em(a, e, t, n, i, r, s) {
  const o = new Me(0);
  let l = r === !0 ? 0 : 1, c, u, h = null, f = 0, d = null;
  function g(p, y) {
    let M = !1, x = y.isScene === !0 ? y.background : null;
    x && x.isTexture && (x = (y.backgroundBlurriness > 0 ? t : e).get(x));
    const v = a.xr, w = v.getSession && v.getSession();
    w && w.environmentBlendMode === "additive" && (x = null), x === null ? m(o, l) : x && x.isColor && (m(x, 1), M = !0), (a.autoClear || M) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), x && (x.isCubeTexture || x.mapping === Ar) ? (u === void 0 && (u = new vt(
      new Wi(1, 1, 1),
      new yn({
        name: "BackgroundCubeMaterial",
        uniforms: ki(Qt.backgroundCube.uniforms),
        vertexShader: Qt.backgroundCube.vertexShader,
        fragmentShader: Qt.backgroundCube.fragmentShader,
        side: Vt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(b, E, _) {
      this.matrixWorld.copyPosition(_.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = x, u.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, u.material.toneMapped = x.encoding !== Xe, (h !== x || f !== x.version || d !== a.toneMapping) && (u.material.needsUpdate = !0, h = x, f = x.version, d = a.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new vt(
      new Ss(2, 2),
      new yn({
        name: "BackgroundMaterial",
        uniforms: ki(Qt.background.uniforms),
        vertexShader: Qt.background.vertexShader,
        fragmentShader: Qt.background.fragmentShader,
        side: $n,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = x.encoding !== Xe, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (h !== x || f !== x.version || d !== a.toneMapping) && (c.material.needsUpdate = !0, h = x, f = x.version, d = a.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(p, y) {
    p.getRGB(qr, qc(a)), n.buffers.color.setClear(qr.r, qr.g, qr.b, y, s);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(p, y = 1) {
      o.set(p), l = y, m(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, m(o, l);
    },
    render: g
  };
}
function tm(a, e, t, n) {
  const i = a.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), s = n.isWebGL2 || r !== null, o = {}, l = p(null);
  let c = l, u = !1;
  function h(D, B, J, ee, W) {
    let te = !1;
    if (s) {
      const Q = m(ee, J, B);
      c !== Q && (c = Q, d(c.object)), te = y(D, ee, J, W), te && M(D, ee, J, W);
    } else {
      const Q = B.wireframe === !0;
      (c.geometry !== ee.id || c.program !== J.id || c.wireframe !== Q) && (c.geometry = ee.id, c.program = J.id, c.wireframe = Q, te = !0);
    }
    W !== null && t.update(W, 34963), (te || u) && (u = !1, _(D, B, J, ee), W !== null && a.bindBuffer(34963, t.get(W).buffer));
  }
  function f() {
    return n.isWebGL2 ? a.createVertexArray() : r.createVertexArrayOES();
  }
  function d(D) {
    return n.isWebGL2 ? a.bindVertexArray(D) : r.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? a.deleteVertexArray(D) : r.deleteVertexArrayOES(D);
  }
  function m(D, B, J) {
    const ee = J.wireframe === !0;
    let W = o[D.id];
    W === void 0 && (W = {}, o[D.id] = W);
    let te = W[B.id];
    te === void 0 && (te = {}, W[B.id] = te);
    let Q = te[ee];
    return Q === void 0 && (Q = p(f()), te[ee] = Q), Q;
  }
  function p(D) {
    const B = [], J = [], ee = [];
    for (let W = 0; W < i; W++)
      B[W] = 0, J[W] = 0, ee[W] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: J,
      attributeDivisors: ee,
      object: D,
      attributes: {},
      index: null
    };
  }
  function y(D, B, J, ee) {
    const W = c.attributes, te = B.attributes;
    let Q = 0;
    const G = J.getAttributes();
    for (const k in G)
      if (G[k].location >= 0) {
        const re = W[k];
        let le = te[k];
        if (le === void 0 && (k === "instanceMatrix" && D.instanceMatrix && (le = D.instanceMatrix), k === "instanceColor" && D.instanceColor && (le = D.instanceColor)), re === void 0 || re.attribute !== le || le && re.data !== le.data)
          return !0;
        Q++;
      }
    return c.attributesNum !== Q || c.index !== ee;
  }
  function M(D, B, J, ee) {
    const W = {}, te = B.attributes;
    let Q = 0;
    const G = J.getAttributes();
    for (const k in G)
      if (G[k].location >= 0) {
        let re = te[k];
        re === void 0 && (k === "instanceMatrix" && D.instanceMatrix && (re = D.instanceMatrix), k === "instanceColor" && D.instanceColor && (re = D.instanceColor));
        const le = {};
        le.attribute = re, re && re.data && (le.data = re.data), W[k] = le, Q++;
      }
    c.attributes = W, c.attributesNum = Q, c.index = ee;
  }
  function x() {
    const D = c.newAttributes;
    for (let B = 0, J = D.length; B < J; B++)
      D[B] = 0;
  }
  function v(D) {
    w(D, 0);
  }
  function w(D, B) {
    const J = c.newAttributes, ee = c.enabledAttributes, W = c.attributeDivisors;
    J[D] = 1, ee[D] === 0 && (a.enableVertexAttribArray(D), ee[D] = 1), W[D] !== B && ((n.isWebGL2 ? a : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, B), W[D] = B);
  }
  function b() {
    const D = c.newAttributes, B = c.enabledAttributes;
    for (let J = 0, ee = B.length; J < ee; J++)
      B[J] !== D[J] && (a.disableVertexAttribArray(J), B[J] = 0);
  }
  function E(D, B, J, ee, W, te) {
    n.isWebGL2 === !0 && (J === 5124 || J === 5125) ? a.vertexAttribIPointer(D, B, J, W, te) : a.vertexAttribPointer(D, B, J, ee, W, te);
  }
  function _(D, B, J, ee) {
    if (n.isWebGL2 === !1 && (D.isInstancedMesh || ee.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const W = ee.attributes, te = J.getAttributes(), Q = B.defaultAttributeValues;
    for (const G in te) {
      const k = te[G];
      if (k.location >= 0) {
        let ae = W[G];
        if (ae === void 0 && (G === "instanceMatrix" && D.instanceMatrix && (ae = D.instanceMatrix), G === "instanceColor" && D.instanceColor && (ae = D.instanceColor)), ae !== void 0) {
          const re = ae.normalized, le = ae.itemSize, X = t.get(ae);
          if (X === void 0)
            continue;
          const Pe = X.buffer, me = X.type, Ce = X.bytesPerElement;
          if (ae.isInterleavedBufferAttribute) {
            const ue = ae.data, Ie = ue.stride, K = ae.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let $ = 0; $ < k.locationSize; $++)
                w(k.location + $, ue.meshPerAttribute);
              D.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let $ = 0; $ < k.locationSize; $++)
                v(k.location + $);
            a.bindBuffer(34962, Pe);
            for (let $ = 0; $ < k.locationSize; $++)
              E(
                k.location + $,
                le / k.locationSize,
                me,
                re,
                Ie * Ce,
                (K + le / k.locationSize * $) * Ce
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let ue = 0; ue < k.locationSize; ue++)
                w(k.location + ue, ae.meshPerAttribute);
              D.isInstancedMesh !== !0 && ee._maxInstanceCount === void 0 && (ee._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let ue = 0; ue < k.locationSize; ue++)
                v(k.location + ue);
            a.bindBuffer(34962, Pe);
            for (let ue = 0; ue < k.locationSize; ue++)
              E(
                k.location + ue,
                le / k.locationSize,
                me,
                re,
                le * Ce,
                le / k.locationSize * ue * Ce
              );
          }
        } else if (Q !== void 0) {
          const re = Q[G];
          if (re !== void 0)
            switch (re.length) {
              case 2:
                a.vertexAttrib2fv(k.location, re);
                break;
              case 3:
                a.vertexAttrib3fv(k.location, re);
                break;
              case 4:
                a.vertexAttrib4fv(k.location, re);
                break;
              default:
                a.vertexAttrib1fv(k.location, re);
            }
        }
      }
    }
    b();
  }
  function S() {
    H();
    for (const D in o) {
      const B = o[D];
      for (const J in B) {
        const ee = B[J];
        for (const W in ee)
          g(ee[W].object), delete ee[W];
        delete B[J];
      }
      delete o[D];
    }
  }
  function C(D) {
    if (o[D.id] === void 0)
      return;
    const B = o[D.id];
    for (const J in B) {
      const ee = B[J];
      for (const W in ee)
        g(ee[W].object), delete ee[W];
      delete B[J];
    }
    delete o[D.id];
  }
  function I(D) {
    for (const B in o) {
      const J = o[B];
      if (J[D.id] === void 0)
        continue;
      const ee = J[D.id];
      for (const W in ee)
        g(ee[W].object), delete ee[W];
      delete J[D.id];
    }
  }
  function H() {
    O(), u = !0, c !== l && (c = l, d(c.object));
  }
  function O() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: H,
    resetDefaultState: O,
    dispose: S,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: I,
    initAttributes: x,
    enableAttribute: v,
    disableUnusedAttributes: b
  };
}
function nm(a, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function s(c) {
    r = c;
  }
  function o(c, u) {
    a.drawArrays(r, c, u), t.update(u, r, 1);
  }
  function l(c, u, h) {
    if (h === 0)
      return;
    let f, d;
    if (i)
      f = a, d = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), d = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[d](r, c, u, h), t.update(u, r, h);
  }
  this.setMode = s, this.render = o, this.renderInstances = l;
}
function im(a, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const E = e.get("EXT_texture_filter_anisotropic");
      n = a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(E) {
    if (E === "highp") {
      if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      E = "mediump";
    }
    return E === "mediump" && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const s = typeof WebGL2RenderingContext < "u" && a instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && a instanceof WebGL2ComputeRenderingContext;
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = r(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = s || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = a.getParameter(34930), f = a.getParameter(35660), d = a.getParameter(3379), g = a.getParameter(34076), m = a.getParameter(34921), p = a.getParameter(36347), y = a.getParameter(36348), M = a.getParameter(36349), x = f > 0, v = s || e.has("OES_texture_float"), w = x && v, b = s ? a.getParameter(36183) : 0;
  return {
    isWebGL2: s,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: f,
    maxTextureSize: d,
    maxCubemapSize: g,
    maxAttributes: m,
    maxVertexUniforms: p,
    maxVaryings: y,
    maxFragmentUniforms: M,
    vertexTextures: x,
    floatFragmentTextures: v,
    floatVertexTextures: w,
    maxSamples: b
  };
}
function rm(a) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const s = new Gn(), o = new Ct(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f, d) {
    const g = h.length !== 0 || f || n !== 0 || i;
    return i = f, t = u(h, d, 0), n = h.length, g;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1, c();
  }, this.setState = function(h, f, d) {
    const g = h.clippingPlanes, m = h.clipIntersection, p = h.clipShadows, y = a.get(h);
    if (!i || g === null || g.length === 0 || r && !p)
      r ? u(null) : c();
    else {
      const M = r ? 0 : n, x = M * 4;
      let v = y.clippingState || null;
      l.value = v, v = u(g, f, x, d);
      for (let w = 0; w !== x; ++w)
        v[w] = t[w];
      y.clippingState = v, this.numIntersection = m ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, f, d, g) {
    const m = h !== null ? h.length : 0;
    let p = null;
    if (m !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const y = d + m * 4, M = f.matrixWorldInverse;
        o.getNormalMatrix(M), (p === null || p.length < y) && (p = new Float32Array(y));
        for (let x = 0, v = d; x !== m; ++x, v += 4)
          s.copy(h[x]).applyMatrix4(M, o), s.normal.toArray(p, v), p[v + 3] = s.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = m, e.numIntersection = 0, p;
  }
}
function sm(a) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, o) {
    return o === Ui ? s.mapping = Kn : o === gs && (s.mapping = jn), s;
  }
  function n(s) {
    if (s && s.isTexture && s.isRenderTargetTexture === !1) {
      const o = s.mapping;
      if (o === Ui || o === gs)
        if (e.has(s)) {
          const l = e.get(s).texture;
          return t(l, s.mapping);
        } else {
          const l = s.image;
          if (l && l.height > 0) {
            const c = new _f(l.height / 2);
            return c.fromEquirectangularTexture(a, s), e.set(s, c), s.addEventListener("dispose", i), t(c.texture, s.mapping);
          } else
            return null;
        }
    }
    return s;
  }
  function i(s) {
    const o = s.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Ts extends Yc {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, s = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, s = r + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Ri = 4, Sl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Wn = 20, ca = /* @__PURE__ */ new Ts(), Tl = /* @__PURE__ */ new Me();
let ha = null;
const Hn = (1 + Math.sqrt(5)) / 2, bi = 1 / Hn, El = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, Hn, bi),
  /* @__PURE__ */ new L(0, Hn, -bi),
  /* @__PURE__ */ new L(bi, 0, Hn),
  /* @__PURE__ */ new L(-bi, 0, Hn),
  /* @__PURE__ */ new L(Hn, bi, 0),
  /* @__PURE__ */ new L(-Hn, bi, 0)
];
class Al {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    ha = this._renderer.getRenderTarget(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Pl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ll(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ha), e.scissorTest = !1, Yr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Kn || e.mapping === jn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ha = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: xt,
      minFilter: xt,
      generateMipmaps: !1,
      type: gn,
      format: Bt,
      encoding: Dn,
      depthBuffer: !1
    }, i = Cl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Cl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = am(r)), this._blurMaterial = om(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new vt(this._lodPlanes[0], e);
    this._renderer.compile(t, ca);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new wt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, f = u.toneMapping;
    u.getClearColor(Tl), u.toneMapping = _n, u.autoClear = !1;
    const d = new Za({
      name: "PMREM.Background",
      side: Vt,
      depthWrite: !1,
      depthTest: !1
    }), g = new vt(new Wi(), d);
    let m = !1;
    const p = e.background;
    p ? p.isColor && (d.color.copy(p), e.background = null, m = !0) : (d.color.copy(Tl), m = !0);
    for (let y = 0; y < 6; y++) {
      const M = y % 3;
      M === 0 ? (o.up.set(0, l[y], 0), o.lookAt(c[y], 0, 0)) : M === 1 ? (o.up.set(0, 0, l[y]), o.lookAt(0, c[y], 0)) : (o.up.set(0, l[y], 0), o.lookAt(0, 0, c[y]));
      const x = this._cubeSize;
      Yr(i, M * x, y > 2 ? x : 0, x, x), u.setRenderTarget(i), m && u.render(g, o), u.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = h, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Kn || e.mapping === jn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Pl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ll());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new vt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Yr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(s, ca);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), s = El[(i - 1) % El.length];
      this._blur(e, i - 1, i, r, s);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      s,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      s,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, s, o) {
    const l = this._renderer, c = this._blurMaterial;
    s !== "latitudinal" && s !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new vt(this._lodPlanes[i], c), f = c.uniforms, d = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Wn - 1), m = r / g, p = isFinite(r) ? 1 + Math.floor(u * m) : Wn;
    p > Wn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);
    const y = [];
    let M = 0;
    for (let E = 0; E < Wn; ++E) {
      const _ = E / m, S = Math.exp(-_ * _ / 2);
      y.push(S), E === 0 ? M += S : E < p && (M += 2 * S);
    }
    for (let E = 0; E < y.length; E++)
      y[E] = y[E] / M;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = y, f.latitudinal.value = s === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: x } = this;
    f.dTheta.value = g, f.mipInt.value = x - n;
    const v = this._sizeLods[i], w = 3 * v * (i > x - Ri ? i - x + Ri : 0), b = 4 * (this._cubeSize - v);
    Yr(t, w, b, 3 * v, 2 * v), l.setRenderTarget(t), l.render(h, ca);
  }
}
function am(a) {
  const e = [], t = [], n = [];
  let i = a;
  const r = a - Ri + 1 + Sl.length;
  for (let s = 0; s < r; s++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    s > a - Ri ? l = Sl[s - a + Ri - 1] : s === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], d = 6, g = 6, m = 3, p = 2, y = 1, M = new Float32Array(m * g * d), x = new Float32Array(p * g * d), v = new Float32Array(y * g * d);
    for (let b = 0; b < d; b++) {
      const E = b % 3 * 2 / 3 - 1, _ = b > 2 ? 0 : -1, S = [
        E,
        _,
        0,
        E + 2 / 3,
        _,
        0,
        E + 2 / 3,
        _ + 1,
        0,
        E,
        _,
        0,
        E + 2 / 3,
        _ + 1,
        0,
        E,
        _ + 1,
        0
      ];
      M.set(S, m * g * b), x.set(f, p * g * b);
      const C = [b, b, b, b, b, b];
      v.set(C, y * g * b);
    }
    const w = new Je();
    w.setAttribute("position", new ct(M, m)), w.setAttribute("uv", new ct(x, p)), w.setAttribute("faceIndex", new ct(v, y)), e.push(w), i > Ri && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Cl(a, e, t) {
  const n = new ti(a, e, t);
  return n.texture.mapping = Ar, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Yr(a, e, t, n, i) {
  a.viewport.set(e, t, n, i), a.scissor.set(e, t, n, i);
}
function om(a, e, t) {
  const n = new Float32Array(Wn), i = new L(0, 1, 0);
  return new yn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Wn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${a}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Qa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ll() {
  return new yn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Qa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Pl() {
  return new yn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Qa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Pn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Qa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function lm(a) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Ui || l === gs, u = l === Kn || l === jn;
      if (c || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return t === null && (t = new Al(a)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), e.set(o, h), h.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const h = o.image;
            if (c && h && h.height > 0 || u && h && i(h)) {
              t === null && (t = new Al(a));
              const f = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, f), o.addEventListener("dispose", r), f.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: s
  };
}
function cm(a) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function hm(a, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function s(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    f.removeEventListener("dispose", s), delete i[f.id];
    const d = r.get(f);
    d && (e.remove(d), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", s), i[f.id] = !0, t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const g in f)
      e.update(f[g], 34962);
    const d = h.morphAttributes;
    for (const g in d) {
      const m = d[g];
      for (let p = 0, y = m.length; p < y; p++)
        e.update(m[p], 34962);
    }
  }
  function c(h) {
    const f = [], d = h.index, g = h.attributes.position;
    let m = 0;
    if (d !== null) {
      const M = d.array;
      m = d.version;
      for (let x = 0, v = M.length; x < v; x += 3) {
        const w = M[x + 0], b = M[x + 1], E = M[x + 2];
        f.push(w, b, b, E, E, w);
      }
    } else {
      const M = g.array;
      m = g.version;
      for (let x = 0, v = M.length / 3 - 1; x < v; x += 3) {
        const w = x + 0, b = x + 1, E = x + 2;
        f.push(w, b, b, E, E, w);
      }
    }
    const p = new (kc(f) ? Xc : $a)(f, 1);
    p.version = m;
    const y = r.get(h);
    y && e.remove(y), r.set(h, p);
  }
  function u(h) {
    const f = r.get(h);
    if (f) {
      const d = h.index;
      d !== null && f.version < d.version && c(h);
    } else
      c(h);
    return r.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function um(a, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function s(f) {
    r = f;
  }
  let o, l;
  function c(f) {
    o = f.type, l = f.bytesPerElement;
  }
  function u(f, d) {
    a.drawElements(r, d, o, f * l), t.update(d, r, 1);
  }
  function h(f, d, g) {
    if (g === 0)
      return;
    let m, p;
    if (i)
      m = a, p = "drawElementsInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", m === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    m[p](r, d, o, f * l, g), t.update(d, r, g);
  }
  this.setMode = s, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function fm(a) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, s, o) {
    switch (t.calls++, s) {
      case 4:
        t.triangles += o * (r / 3);
        break;
      case 1:
        t.lines += o * (r / 2);
        break;
      case 3:
        t.lines += o * (r - 1);
        break;
      case 2:
        t.lines += o * r;
        break;
      case 0:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function dm(a, e) {
  return a[0] - e[0];
}
function pm(a, e) {
  return Math.abs(e[1]) - Math.abs(a[1]);
}
function mm(a, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), s = new Ye(), o = [];
  for (let c = 0; c < 8; c++)
    o[c] = [c, 0];
  function l(c, u, h, f) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, m = g !== void 0 ? g.length : 0;
      let p = r.get(u);
      if (p === void 0 || p.count !== m) {
        let B = function() {
          O.dispose(), r.delete(u), u.removeEventListener("dispose", B);
        };
        p !== void 0 && p.texture.dispose();
        const x = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, w = u.morphAttributes.color !== void 0, b = u.morphAttributes.position || [], E = u.morphAttributes.normal || [], _ = u.morphAttributes.color || [];
        let S = 0;
        x === !0 && (S = 1), v === !0 && (S = 2), w === !0 && (S = 3);
        let C = u.attributes.position.count * S, I = 1;
        C > e.maxTextureSize && (I = Math.ceil(C / e.maxTextureSize), C = e.maxTextureSize);
        const H = new Float32Array(C * I * 4 * m), O = new Hc(H, C, I, m);
        O.type = $t, O.needsUpdate = !0;
        const D = S * 4;
        for (let J = 0; J < m; J++) {
          const ee = b[J], W = E[J], te = _[J], Q = C * I * 4 * J;
          for (let G = 0; G < ee.count; G++) {
            const k = G * D;
            x === !0 && (s.fromBufferAttribute(ee, G), H[Q + k + 0] = s.x, H[Q + k + 1] = s.y, H[Q + k + 2] = s.z, H[Q + k + 3] = 0), v === !0 && (s.fromBufferAttribute(W, G), H[Q + k + 4] = s.x, H[Q + k + 5] = s.y, H[Q + k + 6] = s.z, H[Q + k + 7] = 0), w === !0 && (s.fromBufferAttribute(te, G), H[Q + k + 8] = s.x, H[Q + k + 9] = s.y, H[Q + k + 10] = s.z, H[Q + k + 11] = te.itemSize === 4 ? s.w : 1);
          }
        }
        p = {
          count: m,
          texture: O,
          size: new j(C, I)
        }, r.set(u, p), u.addEventListener("dispose", B);
      }
      let y = 0;
      for (let x = 0; x < d.length; x++)
        y += d[x];
      const M = u.morphTargetsRelative ? 1 : 1 - y;
      f.getUniforms().setValue(a, "morphTargetBaseInfluence", M), f.getUniforms().setValue(a, "morphTargetInfluences", d), f.getUniforms().setValue(a, "morphTargetsTexture", p.texture, t), f.getUniforms().setValue(a, "morphTargetsTextureSize", p.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let m = n[u.id];
      if (m === void 0 || m.length !== g) {
        m = [];
        for (let v = 0; v < g; v++)
          m[v] = [v, 0];
        n[u.id] = m;
      }
      for (let v = 0; v < g; v++) {
        const w = m[v];
        w[0] = v, w[1] = d[v];
      }
      m.sort(pm);
      for (let v = 0; v < 8; v++)
        v < g && m[v][1] ? (o[v][0] = m[v][0], o[v][1] = m[v][1]) : (o[v][0] = Number.MAX_SAFE_INTEGER, o[v][1] = 0);
      o.sort(dm);
      const p = u.morphAttributes.position, y = u.morphAttributes.normal;
      let M = 0;
      for (let v = 0; v < 8; v++) {
        const w = o[v], b = w[0], E = w[1];
        b !== Number.MAX_SAFE_INTEGER && E ? (p && u.getAttribute("morphTarget" + v) !== p[b] && u.setAttribute("morphTarget" + v, p[b]), y && u.getAttribute("morphNormal" + v) !== y[b] && u.setAttribute("morphNormal" + v, y[b]), i[v] = E, M += E) : (p && u.hasAttribute("morphTarget" + v) === !0 && u.deleteAttribute("morphTarget" + v), y && u.hasAttribute("morphNormal" + v) === !0 && u.deleteAttribute("morphNormal" + v), i[v] = 0);
      }
      const x = u.morphTargetsRelative ? 1 : 1 - M;
      f.getUniforms().setValue(a, "morphTargetBaseInfluence", x), f.getUniforms().setValue(a, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function gm(a, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    return i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), h;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: s
  };
}
const Zc = /* @__PURE__ */ new rt(), $c = /* @__PURE__ */ new Hc(), Kc = /* @__PURE__ */ new tf(), jc = /* @__PURE__ */ new Ka(), Rl = [], Dl = [], Il = new Float32Array(16), Fl = new Float32Array(9), Ol = new Float32Array(4);
function Xi(a, e, t) {
  const n = a[0];
  if (n <= 0 || n > 0)
    return a;
  const i = e * t;
  let r = Rl[i];
  if (r === void 0 && (r = new Float32Array(i), Rl[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let s = 1, o = 0; s !== e; ++s)
      o += t, a[s].toArray(r, o);
  }
  return r;
}
function ft(a, e) {
  if (a.length !== e.length)
    return !1;
  for (let t = 0, n = a.length; t < n; t++)
    if (a[t] !== e[t])
      return !1;
  return !0;
}
function dt(a, e) {
  for (let t = 0, n = e.length; t < n; t++)
    a[t] = e[t];
}
function Es(a, e) {
  let t = Dl[e];
  t === void 0 && (t = new Int32Array(e), Dl[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = a.allocateTextureUnit();
  return t;
}
function xm(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1f(this.addr, e), t[0] = e);
}
function _m(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e))
      return;
    a.uniform2fv(this.addr, e), dt(t, e);
  }
}
function vm(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (a.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e))
      return;
    a.uniform3fv(this.addr, e), dt(t, e);
  }
}
function ym(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e))
      return;
    a.uniform4fv(this.addr, e), dt(t, e);
  }
}
function Mm(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e))
      return;
    a.uniformMatrix2fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ft(t, n))
      return;
    Ol.set(n), a.uniformMatrix2fv(this.addr, !1, Ol), dt(t, n);
  }
}
function bm(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e))
      return;
    a.uniformMatrix3fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ft(t, n))
      return;
    Fl.set(n), a.uniformMatrix3fv(this.addr, !1, Fl), dt(t, n);
  }
}
function wm(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e))
      return;
    a.uniformMatrix4fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ft(t, n))
      return;
    Il.set(n), a.uniformMatrix4fv(this.addr, !1, Il), dt(t, n);
  }
}
function Sm(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1i(this.addr, e), t[0] = e);
}
function Tm(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e))
      return;
    a.uniform2iv(this.addr, e), dt(t, e);
  }
}
function Em(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e))
      return;
    a.uniform3iv(this.addr, e), dt(t, e);
  }
}
function Am(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e))
      return;
    a.uniform4iv(this.addr, e), dt(t, e);
  }
}
function Cm(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1ui(this.addr, e), t[0] = e);
}
function Lm(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e))
      return;
    a.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function Pm(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e))
      return;
    a.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function Rm(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e))
      return;
    a.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function Dm(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Zc, i);
}
function Im(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Kc, i);
}
function Fm(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || jc, i);
}
function Om(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || $c, i);
}
function Nm(a) {
  switch (a) {
    case 5126:
      return xm;
    case 35664:
      return _m;
    case 35665:
      return vm;
    case 35666:
      return ym;
    case 35674:
      return Mm;
    case 35675:
      return bm;
    case 35676:
      return wm;
    case 5124:
    case 35670:
      return Sm;
    case 35667:
    case 35671:
      return Tm;
    case 35668:
    case 35672:
      return Em;
    case 35669:
    case 35673:
      return Am;
    case 5125:
      return Cm;
    case 36294:
      return Lm;
    case 36295:
      return Pm;
    case 36296:
      return Rm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Dm;
    case 35679:
    case 36299:
    case 36307:
      return Im;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Fm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Om;
  }
}
function zm(a, e) {
  a.uniform1fv(this.addr, e);
}
function Um(a, e) {
  const t = Xi(e, this.size, 2);
  a.uniform2fv(this.addr, t);
}
function Bm(a, e) {
  const t = Xi(e, this.size, 3);
  a.uniform3fv(this.addr, t);
}
function km(a, e) {
  const t = Xi(e, this.size, 4);
  a.uniform4fv(this.addr, t);
}
function Vm(a, e) {
  const t = Xi(e, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, t);
}
function Gm(a, e) {
  const t = Xi(e, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, t);
}
function Hm(a, e) {
  const t = Xi(e, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, t);
}
function Wm(a, e) {
  a.uniform1iv(this.addr, e);
}
function Xm(a, e) {
  a.uniform2iv(this.addr, e);
}
function qm(a, e) {
  a.uniform3iv(this.addr, e);
}
function Ym(a, e) {
  a.uniform4iv(this.addr, e);
}
function Jm(a, e) {
  a.uniform1uiv(this.addr, e);
}
function Zm(a, e) {
  a.uniform2uiv(this.addr, e);
}
function $m(a, e) {
  a.uniform3uiv(this.addr, e);
}
function Km(a, e) {
  a.uniform4uiv(this.addr, e);
}
function jm(a, e, t) {
  const n = this.cache, i = e.length, r = Es(t, i);
  ft(n, r) || (a.uniform1iv(this.addr, r), dt(n, r));
  for (let s = 0; s !== i; ++s)
    t.setTexture2D(e[s] || Zc, r[s]);
}
function Qm(a, e, t) {
  const n = this.cache, i = e.length, r = Es(t, i);
  ft(n, r) || (a.uniform1iv(this.addr, r), dt(n, r));
  for (let s = 0; s !== i; ++s)
    t.setTexture3D(e[s] || Kc, r[s]);
}
function eg(a, e, t) {
  const n = this.cache, i = e.length, r = Es(t, i);
  ft(n, r) || (a.uniform1iv(this.addr, r), dt(n, r));
  for (let s = 0; s !== i; ++s)
    t.setTextureCube(e[s] || jc, r[s]);
}
function tg(a, e, t) {
  const n = this.cache, i = e.length, r = Es(t, i);
  ft(n, r) || (a.uniform1iv(this.addr, r), dt(n, r));
  for (let s = 0; s !== i; ++s)
    t.setTexture2DArray(e[s] || $c, r[s]);
}
function ng(a) {
  switch (a) {
    case 5126:
      return zm;
    case 35664:
      return Um;
    case 35665:
      return Bm;
    case 35666:
      return km;
    case 35674:
      return Vm;
    case 35675:
      return Gm;
    case 35676:
      return Hm;
    case 5124:
    case 35670:
      return Wm;
    case 35667:
    case 35671:
      return Xm;
    case 35668:
    case 35672:
      return qm;
    case 35669:
    case 35673:
      return Ym;
    case 5125:
      return Jm;
    case 36294:
      return Zm;
    case 36295:
      return $m;
    case 36296:
      return Km;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jm;
    case 35679:
    case 36299:
    case 36307:
      return Qm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return eg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return tg;
  }
}
class ig {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Nm(t.type);
  }
}
class rg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = ng(t.type);
  }
}
class sg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ua = /(\w+)(\])?(\[|\.)?/g;
function Nl(a, e) {
  a.seq.push(e), a.map[e.id] = e;
}
function ag(a, e, t) {
  const n = a.name, i = n.length;
  for (ua.lastIndex = 0; ; ) {
    const r = ua.exec(n), s = ua.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && s + 2 === i) {
      Nl(t, c === void 0 ? new ig(o, a, e) : new rg(o, a, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new sg(o), Nl(t, h)), t = h;
    }
  }
}
class ps {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), s = e.getUniformLocation(t, r.name);
      ag(r, s, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, s = t.length; r !== s; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const s = e[i];
      s.id in t && n.push(s);
    }
    return n;
  }
}
function zl(a, e, t) {
  const n = a.createShader(e);
  return a.shaderSource(n, t), a.compileShader(n), n;
}
let og = 0;
function lg(a, e) {
  const t = a.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let s = i; s < r; s++) {
    const o = s + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[s]}`);
  }
  return n.join(`
`);
}
function cg(a) {
  switch (a) {
    case Dn:
      return ["Linear", "( value )"];
    case Xe:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", a), ["Linear", "( value )"];
  }
}
function Ul(a, e, t) {
  const n = a.getShaderParameter(e, 35713), i = a.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const s = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + lg(a.getShaderSource(e), s);
  } else
    return i;
}
function hg(a, e) {
  const t = cg(e);
  return "vec4 " + a + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ug(a, e) {
  let t;
  switch (e) {
    case gu:
      t = "Linear";
      break;
    case xu:
      t = "Reinhard";
      break;
    case _u:
      t = "OptimizedCineon";
      break;
    case Nc:
      t = "ACESFilmic";
      break;
    case vu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + a + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function fg(a) {
  return [
    a.extensionDerivatives || !!a.envMapCubeUVHeight || a.bumpMap || a.tangentSpaceNormalMap || a.clearcoatNormalMap || a.flatShading || a.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (a.extensionFragDepth || a.logarithmicDepthBuffer) && a.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    a.extensionDrawBuffers && a.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (a.extensionShaderTextureLOD || a.envMap || a.transmission) && a.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(cr).join(`
`);
}
function dg(a) {
  const e = [];
  for (const t in a) {
    const n = a[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function pg(a, e) {
  const t = {}, n = a.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = a.getActiveAttrib(e, i), s = r.name;
    let o = 1;
    r.type === 35674 && (o = 2), r.type === 35675 && (o = 3), r.type === 35676 && (o = 4), t[s] = {
      type: r.type,
      location: a.getAttribLocation(e, s),
      locationSize: o
    };
  }
  return t;
}
function cr(a) {
  return a !== "";
}
function Bl(a, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return a.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function kl(a, e) {
  return a.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const mg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ia(a) {
  return a.replace(mg, gg);
}
function gg(a, e) {
  const t = Fe[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ia(t);
}
const xg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Vl(a) {
  return a.replace(xg, _g);
}
function _g(a, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Gl(a) {
  let e = "precision " + a.precision + ` float;
precision ` + a.precision + " int;";
  return a.precision === "highp" ? e += `
#define HIGH_PRECISION` : a.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : a.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function vg(a) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return a.shadowMapType === Ic ? e = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === Jh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : a.shadowMapType === lr && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function yg(a) {
  let e = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case Kn:
      case jn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ar:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Mg(a) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case jn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function bg(a) {
  let e = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case ws:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case pu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case mu:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function wg(a) {
  const e = a.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Sg(a, e, t, n) {
  const i = a.getContext(), r = t.defines;
  let s = t.vertexShader, o = t.fragmentShader;
  const l = vg(t), c = yg(t), u = Mg(t), h = bg(t), f = wg(t), d = t.isWebGL2 ? "" : fg(t), g = dg(r), m = i.createProgram();
  let p, y, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    g
  ].filter(cr).join(`
`), p.length > 0 && (p += `
`), y = [
    d,
    g
  ].filter(cr).join(`
`), y.length > 0 && (y += `
`)) : (p = [
    Gl(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(cr).join(`
`), y = [
    d,
    Gl(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== _n ? "#define TONE_MAPPING" : "",
    t.toneMapping !== _n ? Fe.tonemapping_pars_fragment : "",
    t.toneMapping !== _n ? ug("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.encodings_pars_fragment,
    hg("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(cr).join(`
`)), s = Ia(s), s = Bl(s, t), s = kl(s, t), o = Ia(o), o = Bl(o, t), o = kl(o, t), s = Vl(s), o = Vl(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, y = [
    "#define varying in",
    t.glslVersion === fl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === fl ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + y);
  const x = M + p + s, v = M + y + o, w = zl(i, 35633, x), b = zl(i, 35632, v);
  if (i.attachShader(m, w), i.attachShader(m, b), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), a.debug.checkShaderErrors) {
    const S = i.getProgramInfoLog(m).trim(), C = i.getShaderInfoLog(w).trim(), I = i.getShaderInfoLog(b).trim();
    let H = !0, O = !0;
    if (i.getProgramParameter(m, 35714) === !1) {
      H = !1;
      const D = Ul(i, w, "vertex"), B = Ul(i, b, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + `

Program Info Log: ` + S + `
` + D + `
` + B
      );
    } else
      S !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", S) : (C === "" || I === "") && (O = !1);
    O && (this.diagnostics = {
      runnable: H,
      programLog: S,
      vertexShader: {
        log: C,
        prefix: p
      },
      fragmentShader: {
        log: I,
        prefix: y
      }
    });
  }
  i.deleteShader(w), i.deleteShader(b);
  let E;
  this.getUniforms = function() {
    return E === void 0 && (E = new ps(i, m)), E;
  };
  let _;
  return this.getAttributes = function() {
    return _ === void 0 && (_ = pg(i, m)), _;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
  }, this.name = t.shaderName, this.id = og++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = w, this.fragmentShader = b, this;
}
let Tg = 0;
class Eg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(e);
    return s.has(i) === !1 && (s.add(i), i.usedTimes++), s.has(r) === !1 && (s.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Ag(e), t.set(e, n)), n;
  }
}
class Ag {
  constructor(e) {
    this.id = Tg++, this.code = e, this.usedTimes = 0;
  }
}
function Cg(a, e, t, n, i, r, s) {
  const o = new Wc(), l = new Eg(), c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let d = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function m(_, S, C, I, H) {
    const O = I.fog, D = H.geometry, B = _.isMeshStandardMaterial ? I.environment : null, J = (_.isMeshStandardMaterial ? t : e).get(_.envMap || B), ee = !!J && J.mapping === Ar ? J.image.height : null, W = g[_.type];
    _.precision !== null && (d = i.getMaxPrecision(_.precision), d !== _.precision && console.warn("THREE.WebGLProgram.getParameters:", _.precision, "not supported, using", d, "instead."));
    const te = D.morphAttributes.position || D.morphAttributes.normal || D.morphAttributes.color, Q = te !== void 0 ? te.length : 0;
    let G = 0;
    D.morphAttributes.position !== void 0 && (G = 1), D.morphAttributes.normal !== void 0 && (G = 2), D.morphAttributes.color !== void 0 && (G = 3);
    let k, ae, re, le;
    if (W) {
      const Ie = Qt[W];
      k = Ie.vertexShader, ae = Ie.fragmentShader;
    } else
      k = _.vertexShader, ae = _.fragmentShader, l.update(_), re = l.getVertexShaderID(_), le = l.getFragmentShaderID(_);
    const X = a.getRenderTarget(), Pe = _.alphaTest > 0, me = _.clearcoat > 0, Ce = _.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: W,
      shaderName: _.type,
      vertexShader: k,
      fragmentShader: ae,
      defines: _.defines,
      customVertexShaderID: re,
      customFragmentShaderID: le,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: d,
      instancing: H.isInstancedMesh === !0,
      instancingColor: H.isInstancedMesh === !0 && H.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding: X === null ? a.outputEncoding : X.isXRRenderTarget === !0 ? X.texture.encoding : Dn,
      map: !!_.map,
      matcap: !!_.matcap,
      envMap: !!J,
      envMapMode: J && J.mapping,
      envMapCubeUVHeight: ee,
      lightMap: !!_.lightMap,
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === Uu,
      tangentSpaceNormalMap: _.normalMapType === ii,
      decodeVideoTexture: !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === Xe,
      clearcoat: me,
      clearcoatMap: me && !!_.clearcoatMap,
      clearcoatRoughnessMap: me && !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: me && !!_.clearcoatNormalMap,
      iridescence: Ce,
      iridescenceMap: Ce && !!_.iridescenceMap,
      iridescenceThicknessMap: Ce && !!_.iridescenceThicknessMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      specularIntensityMap: !!_.specularIntensityMap,
      specularColorMap: !!_.specularColorMap,
      opaque: _.transparent === !1 && _.blending === Oi,
      alphaMap: !!_.alphaMap,
      alphaTest: Pe,
      gradientMap: !!_.gradientMap,
      sheen: _.sheen > 0,
      sheenColorMap: !!_.sheenColorMap,
      sheenRoughnessMap: !!_.sheenRoughnessMap,
      transmission: _.transmission > 0,
      transmissionMap: !!_.transmissionMap,
      thicknessMap: !!_.thicknessMap,
      combine: _.combine,
      vertexTangents: !!_.normalMap && !!D.attributes.tangent,
      vertexColors: _.vertexColors,
      vertexAlphas: _.vertexColors === !0 && !!D.attributes.color && D.attributes.color.itemSize === 4,
      vertexUvs: !!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatMap || !!_.clearcoatRoughnessMap || !!_.clearcoatNormalMap || !!_.iridescenceMap || !!_.iridescenceThicknessMap || !!_.displacementMap || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || !!_.sheenColorMap || !!_.sheenRoughnessMap,
      uvsVertexOnly: !(!!_.map || !!_.bumpMap || !!_.normalMap || !!_.specularMap || !!_.alphaMap || !!_.emissiveMap || !!_.roughnessMap || !!_.metalnessMap || !!_.clearcoatNormalMap || !!_.iridescenceMap || !!_.iridescenceThicknessMap || _.transmission > 0 || !!_.transmissionMap || !!_.thicknessMap || !!_.specularIntensityMap || !!_.specularColorMap || _.sheen > 0 || !!_.sheenColorMap || !!_.sheenRoughnessMap) && !!_.displacementMap,
      fog: !!O,
      useFog: _.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: D.morphAttributes.position !== void 0,
      morphNormals: D.morphAttributes.normal !== void 0,
      morphColors: D.morphAttributes.color !== void 0,
      morphTargetsCount: Q,
      morphTextureStride: G,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: a.shadowMap.enabled && C.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: _.toneMapped ? a.toneMapping : _n,
      physicallyCorrectLights: a.physicallyCorrectLights,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === bs,
      flipSided: _.side === Vt,
      useDepthPacking: !!_.depthPacking,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey()
    };
  }
  function p(_) {
    const S = [];
    if (_.shaderID ? S.push(_.shaderID) : (S.push(_.customVertexShaderID), S.push(_.customFragmentShaderID)), _.defines !== void 0)
      for (const C in _.defines)
        S.push(C), S.push(_.defines[C]);
    return _.isRawShaderMaterial === !1 && (y(S, _), M(S, _), S.push(a.outputEncoding)), S.push(_.customProgramCacheKey), S.join();
  }
  function y(_, S) {
    _.push(S.precision), _.push(S.outputEncoding), _.push(S.envMapMode), _.push(S.envMapCubeUVHeight), _.push(S.combine), _.push(S.vertexUvs), _.push(S.fogExp2), _.push(S.sizeAttenuation), _.push(S.morphTargetsCount), _.push(S.morphAttributeCount), _.push(S.numDirLights), _.push(S.numPointLights), _.push(S.numSpotLights), _.push(S.numSpotLightMaps), _.push(S.numHemiLights), _.push(S.numRectAreaLights), _.push(S.numDirLightShadows), _.push(S.numPointLightShadows), _.push(S.numSpotLightShadows), _.push(S.numSpotLightShadowsWithMaps), _.push(S.shadowMapType), _.push(S.toneMapping), _.push(S.numClippingPlanes), _.push(S.numClipIntersection), _.push(S.depthPacking);
  }
  function M(_, S) {
    o.disableAll(), S.isWebGL2 && o.enable(0), S.supportsVertexTextures && o.enable(1), S.instancing && o.enable(2), S.instancingColor && o.enable(3), S.map && o.enable(4), S.matcap && o.enable(5), S.envMap && o.enable(6), S.lightMap && o.enable(7), S.aoMap && o.enable(8), S.emissiveMap && o.enable(9), S.bumpMap && o.enable(10), S.normalMap && o.enable(11), S.objectSpaceNormalMap && o.enable(12), S.tangentSpaceNormalMap && o.enable(13), S.clearcoat && o.enable(14), S.clearcoatMap && o.enable(15), S.clearcoatRoughnessMap && o.enable(16), S.clearcoatNormalMap && o.enable(17), S.iridescence && o.enable(18), S.iridescenceMap && o.enable(19), S.iridescenceThicknessMap && o.enable(20), S.displacementMap && o.enable(21), S.specularMap && o.enable(22), S.roughnessMap && o.enable(23), S.metalnessMap && o.enable(24), S.gradientMap && o.enable(25), S.alphaMap && o.enable(26), S.alphaTest && o.enable(27), S.vertexColors && o.enable(28), S.vertexAlphas && o.enable(29), S.vertexUvs && o.enable(30), S.vertexTangents && o.enable(31), S.uvsVertexOnly && o.enable(32), _.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.skinning && o.enable(4), S.morphTargets && o.enable(5), S.morphNormals && o.enable(6), S.morphColors && o.enable(7), S.premultipliedAlpha && o.enable(8), S.shadowMapEnabled && o.enable(9), S.physicallyCorrectLights && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.specularIntensityMap && o.enable(15), S.specularColorMap && o.enable(16), S.transmission && o.enable(17), S.transmissionMap && o.enable(18), S.thicknessMap && o.enable(19), S.sheen && o.enable(20), S.sheenColorMap && o.enable(21), S.sheenRoughnessMap && o.enable(22), S.decodeVideoTexture && o.enable(23), S.opaque && o.enable(24), _.push(o.mask);
  }
  function x(_) {
    const S = g[_.type];
    let C;
    if (S) {
      const I = Qt[S];
      C = pf.clone(I.uniforms);
    } else
      C = _.uniforms;
    return C;
  }
  function v(_, S) {
    let C;
    for (let I = 0, H = c.length; I < H; I++) {
      const O = c[I];
      if (O.cacheKey === S) {
        C = O, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new Sg(a, S, _, r), c.push(C)), C;
  }
  function w(_) {
    if (--_.usedTimes === 0) {
      const S = c.indexOf(_);
      c[S] = c[c.length - 1], c.pop(), _.destroy();
    }
  }
  function b(_) {
    l.remove(_);
  }
  function E() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: x,
    acquireProgram: v,
    releaseProgram: w,
    releaseShaderCache: b,
    programs: c,
    dispose: E
  };
}
function Lg() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let s = a.get(r);
    return s === void 0 && (s = {}, a.set(r, s)), s;
  }
  function t(r) {
    a.delete(r);
  }
  function n(r, s, o) {
    a.get(r)[s] = o;
  }
  function i() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Pg(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.material.id !== e.material.id ? a.material.id - e.material.id : a.z !== e.z ? a.z - e.z : a.id - e.id;
}
function Hl(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.z !== e.z ? e.z - a.z : a.id - e.id;
}
function Wl() {
  const a = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function s(h, f, d, g, m, p) {
    let y = a[e];
    return y === void 0 ? (y = {
      id: h.id,
      object: h,
      geometry: f,
      material: d,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: m,
      group: p
    }, a[e] = y) : (y.id = h.id, y.object = h, y.geometry = f, y.material = d, y.groupOrder = g, y.renderOrder = h.renderOrder, y.z = m, y.group = p), e++, y;
  }
  function o(h, f, d, g, m, p) {
    const y = s(h, f, d, g, m, p);
    d.transmission > 0 ? n.push(y) : d.transparent === !0 ? i.push(y) : t.push(y);
  }
  function l(h, f, d, g, m, p) {
    const y = s(h, f, d, g, m, p);
    d.transmission > 0 ? n.unshift(y) : d.transparent === !0 ? i.unshift(y) : t.unshift(y);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || Pg), n.length > 1 && n.sort(f || Hl), i.length > 1 && i.sort(f || Hl);
  }
  function u() {
    for (let h = e, f = a.length; h < f; h++) {
      const d = a[h];
      if (d.id === null)
        break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function Rg() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = a.get(n);
    let s;
    return r === void 0 ? (s = new Wl(), a.set(n, [s])) : i >= r.length ? (s = new Wl(), r.push(s)) : s = r[i], s;
  }
  function t() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Dg() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new Me()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Me(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new Me(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new Me(),
            groundColor: new Me()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Me(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
function Ig() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new j(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
let Fg = 0;
function Og(a, e) {
  return (e.castShadow ? 2 : 0) - (a.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (a.map ? 1 : 0);
}
function Ng(a, e) {
  const t = new Dg(), n = Ig(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    i.probe.push(new L());
  const r = new L(), s = new ye(), o = new ye();
  function l(u, h) {
    let f = 0, d = 0, g = 0;
    for (let I = 0; I < 9; I++)
      i.probe[I].set(0, 0, 0);
    let m = 0, p = 0, y = 0, M = 0, x = 0, v = 0, w = 0, b = 0, E = 0, _ = 0;
    u.sort(Og);
    const S = h !== !0 ? Math.PI : 1;
    for (let I = 0, H = u.length; I < H; I++) {
      const O = u[I], D = O.color, B = O.intensity, J = O.distance, ee = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        f += D.r * B * S, d += D.g * B * S, g += D.b * B * S;
      else if (O.isLightProbe)
        for (let W = 0; W < 9; W++)
          i.probe[W].addScaledVector(O.sh.coefficients[W], B);
      else if (O.isDirectionalLight) {
        const W = t.get(O);
        if (W.color.copy(O.color).multiplyScalar(O.intensity * S), O.castShadow) {
          const te = O.shadow, Q = n.get(O);
          Q.shadowBias = te.bias, Q.shadowNormalBias = te.normalBias, Q.shadowRadius = te.radius, Q.shadowMapSize = te.mapSize, i.directionalShadow[m] = Q, i.directionalShadowMap[m] = ee, i.directionalShadowMatrix[m] = O.shadow.matrix, v++;
        }
        i.directional[m] = W, m++;
      } else if (O.isSpotLight) {
        const W = t.get(O);
        W.position.setFromMatrixPosition(O.matrixWorld), W.color.copy(D).multiplyScalar(B * S), W.distance = J, W.coneCos = Math.cos(O.angle), W.penumbraCos = Math.cos(O.angle * (1 - O.penumbra)), W.decay = O.decay, i.spot[y] = W;
        const te = O.shadow;
        if (O.map && (i.spotLightMap[E] = O.map, E++, te.updateMatrices(O), O.castShadow && _++), i.spotLightMatrix[y] = te.matrix, O.castShadow) {
          const Q = n.get(O);
          Q.shadowBias = te.bias, Q.shadowNormalBias = te.normalBias, Q.shadowRadius = te.radius, Q.shadowMapSize = te.mapSize, i.spotShadow[y] = Q, i.spotShadowMap[y] = ee, b++;
        }
        y++;
      } else if (O.isRectAreaLight) {
        const W = t.get(O);
        W.color.copy(D).multiplyScalar(B), W.halfWidth.set(O.width * 0.5, 0, 0), W.halfHeight.set(0, O.height * 0.5, 0), i.rectArea[M] = W, M++;
      } else if (O.isPointLight) {
        const W = t.get(O);
        if (W.color.copy(O.color).multiplyScalar(O.intensity * S), W.distance = O.distance, W.decay = O.decay, O.castShadow) {
          const te = O.shadow, Q = n.get(O);
          Q.shadowBias = te.bias, Q.shadowNormalBias = te.normalBias, Q.shadowRadius = te.radius, Q.shadowMapSize = te.mapSize, Q.shadowCameraNear = te.camera.near, Q.shadowCameraFar = te.camera.far, i.pointShadow[p] = Q, i.pointShadowMap[p] = ee, i.pointShadowMatrix[p] = O.shadow.matrix, w++;
        }
        i.point[p] = W, p++;
      } else if (O.isHemisphereLight) {
        const W = t.get(O);
        W.skyColor.copy(O.color).multiplyScalar(B * S), W.groundColor.copy(O.groundColor).multiplyScalar(B * S), i.hemi[x] = W, x++;
      }
    }
    M > 0 && (e.isWebGL2 || a.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_FLOAT_1, i.rectAreaLTC2 = he.LTC_FLOAT_2) : a.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = he.LTC_HALF_1, i.rectAreaLTC2 = he.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = d, i.ambient[2] = g;
    const C = i.hash;
    (C.directionalLength !== m || C.pointLength !== p || C.spotLength !== y || C.rectAreaLength !== M || C.hemiLength !== x || C.numDirectionalShadows !== v || C.numPointShadows !== w || C.numSpotShadows !== b || C.numSpotMaps !== E) && (i.directional.length = m, i.spot.length = y, i.rectArea.length = M, i.point.length = p, i.hemi.length = x, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = b, i.spotShadowMap.length = b, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = w, i.spotLightMatrix.length = b + E - _, i.spotLightMap.length = E, i.numSpotLightShadowsWithMaps = _, C.directionalLength = m, C.pointLength = p, C.spotLength = y, C.rectAreaLength = M, C.hemiLength = x, C.numDirectionalShadows = v, C.numPointShadows = w, C.numSpotShadows = b, C.numSpotMaps = E, i.version = Fg++);
  }
  function c(u, h) {
    let f = 0, d = 0, g = 0, m = 0, p = 0;
    const y = h.matrixWorldInverse;
    for (let M = 0, x = u.length; M < x; M++) {
      const v = u[M];
      if (v.isDirectionalLight) {
        const w = i.directional[f];
        w.direction.setFromMatrixPosition(v.matrixWorld), r.setFromMatrixPosition(v.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(y), f++;
      } else if (v.isSpotLight) {
        const w = i.spot[g];
        w.position.setFromMatrixPosition(v.matrixWorld), w.position.applyMatrix4(y), w.direction.setFromMatrixPosition(v.matrixWorld), r.setFromMatrixPosition(v.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(y), g++;
      } else if (v.isRectAreaLight) {
        const w = i.rectArea[m];
        w.position.setFromMatrixPosition(v.matrixWorld), w.position.applyMatrix4(y), o.identity(), s.copy(v.matrixWorld), s.premultiply(y), o.extractRotation(s), w.halfWidth.set(v.width * 0.5, 0, 0), w.halfHeight.set(0, v.height * 0.5, 0), w.halfWidth.applyMatrix4(o), w.halfHeight.applyMatrix4(o), m++;
      } else if (v.isPointLight) {
        const w = i.point[d];
        w.position.setFromMatrixPosition(v.matrixWorld), w.position.applyMatrix4(y), d++;
      } else if (v.isHemisphereLight) {
        const w = i.hemi[p];
        w.direction.setFromMatrixPosition(v.matrixWorld), w.direction.transformDirection(y), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Xl(a, e) {
  const t = new Ng(a, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function s(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: s,
    pushShadow: o
  };
}
function zg(a, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, s = 0) {
    const o = t.get(r);
    let l;
    return o === void 0 ? (l = new Xl(a, e), t.set(r, [l])) : s >= o.length ? (l = new Xl(a, e), o.push(l)) : l = o[s], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Qc extends yt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Nu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class eh extends yt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new L(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Ug = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Bg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function kg(a, e, t) {
  let n = new ja();
  const i = new j(), r = new j(), s = new Ye(), o = new Qc({ depthPacking: zu }), l = new eh(), c = {}, u = t.maxTextureSize, h = { 0: Vt, 1: $n, 2: bs }, f = new yn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new j() },
      radius: { value: 4 }
    },
    vertexShader: Ug,
    fragmentShader: Bg
  }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Je();
  g.setAttribute(
    "position",
    new ct(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const m = new vt(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ic, this.render = function(v, w, b) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || v.length === 0)
      return;
    const E = a.getRenderTarget(), _ = a.getActiveCubeFace(), S = a.getActiveMipmapLevel(), C = a.state;
    C.setBlending(Pn), C.buffers.color.setClear(1, 1, 1, 1), C.buffers.depth.setTest(!0), C.setScissorTest(!1);
    for (let I = 0, H = v.length; I < H; I++) {
      const O = v[I], D = O.shadow;
      if (D === void 0) {
        console.warn("THREE.WebGLShadowMap:", O, "has no shadow.");
        continue;
      }
      if (D.autoUpdate === !1 && D.needsUpdate === !1)
        continue;
      i.copy(D.mapSize);
      const B = D.getFrameExtents();
      if (i.multiply(B), r.copy(D.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / B.x), i.x = r.x * B.x, D.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / B.y), i.y = r.y * B.y, D.mapSize.y = r.y)), D.map === null) {
        const ee = this.type !== lr ? { minFilter: ut, magFilter: ut } : {};
        D.map = new ti(i.x, i.y, ee), D.map.texture.name = O.name + ".shadowMap", D.camera.updateProjectionMatrix();
      }
      a.setRenderTarget(D.map), a.clear();
      const J = D.getViewportCount();
      for (let ee = 0; ee < J; ee++) {
        const W = D.getViewport(ee);
        s.set(
          r.x * W.x,
          r.y * W.y,
          r.x * W.z,
          r.y * W.w
        ), C.viewport(s), D.updateMatrices(O, ee), n = D.getFrustum(), x(w, b, D.camera, O, this.type);
      }
      D.isPointLightShadow !== !0 && this.type === lr && y(D, b), D.needsUpdate = !1;
    }
    p.needsUpdate = !1, a.setRenderTarget(E, _, S);
  };
  function y(v, w) {
    const b = e.update(m);
    f.defines.VSM_SAMPLES !== v.blurSamples && (f.defines.VSM_SAMPLES = v.blurSamples, d.defines.VSM_SAMPLES = v.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), v.mapPass === null && (v.mapPass = new ti(i.x, i.y)), f.uniforms.shadow_pass.value = v.map.texture, f.uniforms.resolution.value = v.mapSize, f.uniforms.radius.value = v.radius, a.setRenderTarget(v.mapPass), a.clear(), a.renderBufferDirect(w, null, b, f, m, null), d.uniforms.shadow_pass.value = v.mapPass.texture, d.uniforms.resolution.value = v.mapSize, d.uniforms.radius.value = v.radius, a.setRenderTarget(v.map), a.clear(), a.renderBufferDirect(w, null, b, d, m, null);
  }
  function M(v, w, b, E, _, S) {
    let C = null;
    const I = b.isPointLight === !0 ? v.customDistanceMaterial : v.customDepthMaterial;
    if (I !== void 0)
      C = I;
    else if (C = b.isPointLight === !0 ? l : o, a.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const H = C.uuid, O = w.uuid;
      let D = c[H];
      D === void 0 && (D = {}, c[H] = D);
      let B = D[O];
      B === void 0 && (B = C.clone(), D[O] = B), C = B;
    }
    return C.visible = w.visible, C.wireframe = w.wireframe, S === lr ? C.side = w.shadowSide !== null ? w.shadowSide : w.side : C.side = w.shadowSide !== null ? w.shadowSide : h[w.side], C.alphaMap = w.alphaMap, C.alphaTest = w.alphaTest, C.map = w.map, C.clipShadows = w.clipShadows, C.clippingPlanes = w.clippingPlanes, C.clipIntersection = w.clipIntersection, C.displacementMap = w.displacementMap, C.displacementScale = w.displacementScale, C.displacementBias = w.displacementBias, C.wireframeLinewidth = w.wireframeLinewidth, C.linewidth = w.linewidth, b.isPointLight === !0 && C.isMeshDistanceMaterial === !0 && (C.referencePosition.setFromMatrixPosition(b.matrixWorld), C.nearDistance = E, C.farDistance = _), C;
  }
  function x(v, w, b, E, _) {
    if (v.visible === !1)
      return;
    if (v.layers.test(w.layers) && (v.isMesh || v.isLine || v.isPoints) && (v.castShadow || v.receiveShadow && _ === lr) && (!v.frustumCulled || n.intersectsObject(v))) {
      v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, v.matrixWorld);
      const I = e.update(v), H = v.material;
      if (Array.isArray(H)) {
        const O = I.groups;
        for (let D = 0, B = O.length; D < B; D++) {
          const J = O[D], ee = H[J.materialIndex];
          if (ee && ee.visible) {
            const W = M(v, ee, E, b.near, b.far, _);
            a.renderBufferDirect(b, null, I, W, v, J);
          }
        }
      } else if (H.visible) {
        const O = M(v, H, E, b.near, b.far, _);
        a.renderBufferDirect(b, null, I, O, v, null);
      }
    }
    const C = v.children;
    for (let I = 0, H = C.length; I < H; I++)
      x(C[I], w, b, E, _);
  }
}
function Vg(a, e, t) {
  const n = t.isWebGL2;
  function i() {
    let F = !1;
    const q = new Ye();
    let ie = null;
    const ge = new Ye(0, 0, 0, 0);
    return {
      setMask: function(we) {
        ie !== we && !F && (a.colorMask(we, we, we, we), ie = we);
      },
      setLocked: function(we) {
        F = we;
      },
      setClear: function(we, Ze, pt, Mt, Fn) {
        Fn === !0 && (we *= Mt, Ze *= Mt, pt *= Mt), q.set(we, Ze, pt, Mt), ge.equals(q) === !1 && (a.clearColor(we, Ze, pt, Mt), ge.copy(q));
      },
      reset: function() {
        F = !1, ie = null, ge.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let F = !1, q = null, ie = null, ge = null;
    return {
      setTest: function(we) {
        we ? Pe(2929) : me(2929);
      },
      setMask: function(we) {
        q !== we && !F && (a.depthMask(we), q = we);
      },
      setFunc: function(we) {
        if (ie !== we) {
          switch (we) {
            case ou:
              a.depthFunc(512);
              break;
            case lu:
              a.depthFunc(519);
              break;
            case cu:
              a.depthFunc(513);
              break;
            case Ca:
              a.depthFunc(515);
              break;
            case hu:
              a.depthFunc(514);
              break;
            case uu:
              a.depthFunc(518);
              break;
            case fu:
              a.depthFunc(516);
              break;
            case du:
              a.depthFunc(517);
              break;
            default:
              a.depthFunc(515);
          }
          ie = we;
        }
      },
      setLocked: function(we) {
        F = we;
      },
      setClear: function(we) {
        ge !== we && (a.clearDepth(we), ge = we);
      },
      reset: function() {
        F = !1, q = null, ie = null, ge = null;
      }
    };
  }
  function s() {
    let F = !1, q = null, ie = null, ge = null, we = null, Ze = null, pt = null, Mt = null, Fn = null;
    return {
      setTest: function(tt) {
        F || (tt ? Pe(2960) : me(2960));
      },
      setMask: function(tt) {
        q !== tt && !F && (a.stencilMask(tt), q = tt);
      },
      setFunc: function(tt, on, Nt) {
        (ie !== tt || ge !== on || we !== Nt) && (a.stencilFunc(tt, on, Nt), ie = tt, ge = on, we = Nt);
      },
      setOp: function(tt, on, Nt) {
        (Ze !== tt || pt !== on || Mt !== Nt) && (a.stencilOp(tt, on, Nt), Ze = tt, pt = on, Mt = Nt);
      },
      setLocked: function(tt) {
        F = tt;
      },
      setClear: function(tt) {
        Fn !== tt && (a.clearStencil(tt), Fn = tt);
      },
      reset: function() {
        F = !1, q = null, ie = null, ge = null, we = null, Ze = null, pt = null, Mt = null, Fn = null;
      }
    };
  }
  const o = new i(), l = new r(), c = new s(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let f = {}, d = {}, g = /* @__PURE__ */ new WeakMap(), m = [], p = null, y = !1, M = null, x = null, v = null, w = null, b = null, E = null, _ = null, S = !1, C = null, I = null, H = null, O = null, D = null;
  const B = a.getParameter(35661);
  let J = !1, ee = 0;
  const W = a.getParameter(7938);
  W.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(W)[1]), J = ee >= 1) : W.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(W)[1]), J = ee >= 2);
  let te = null, Q = {};
  const G = a.getParameter(3088), k = a.getParameter(2978), ae = new Ye().fromArray(G), re = new Ye().fromArray(k);
  function le(F, q, ie) {
    const ge = new Uint8Array(4), we = a.createTexture();
    a.bindTexture(F, we), a.texParameteri(F, 10241, 9728), a.texParameteri(F, 10240, 9728);
    for (let Ze = 0; Ze < ie; Ze++)
      a.texImage2D(q + Ze, 0, 6408, 1, 1, 0, 6408, 5121, ge);
    return we;
  }
  const X = {};
  X[3553] = le(3553, 3553, 1), X[34067] = le(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Pe(2929), l.setFunc(Ca), ce(!1), Re(No), Pe(2884), oe(Pn);
  function Pe(F) {
    f[F] !== !0 && (a.enable(F), f[F] = !0);
  }
  function me(F) {
    f[F] !== !1 && (a.disable(F), f[F] = !1);
  }
  function Ce(F, q) {
    return d[F] !== q ? (a.bindFramebuffer(F, q), d[F] = q, n && (F === 36009 && (d[36160] = q), F === 36160 && (d[36009] = q)), !0) : !1;
  }
  function ue(F, q) {
    let ie = m, ge = !1;
    if (F)
      if (ie = g.get(q), ie === void 0 && (ie = [], g.set(q, ie)), F.isWebGLMultipleRenderTargets) {
        const we = F.texture;
        if (ie.length !== we.length || ie[0] !== 36064) {
          for (let Ze = 0, pt = we.length; Ze < pt; Ze++)
            ie[Ze] = 36064 + Ze;
          ie.length = we.length, ge = !0;
        }
      } else
        ie[0] !== 36064 && (ie[0] = 36064, ge = !0);
    else
      ie[0] !== 1029 && (ie[0] = 1029, ge = !0);
    ge && (t.isWebGL2 ? a.drawBuffers(ie) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie));
  }
  function Ie(F) {
    return p !== F ? (a.useProgram(F), p = F, !0) : !1;
  }
  const K = {
    [Ci]: 32774,
    [$h]: 32778,
    [Kh]: 32779
  };
  if (n)
    K[ko] = 32775, K[Vo] = 32776;
  else {
    const F = e.get("EXT_blend_minmax");
    F !== null && (K[ko] = F.MIN_EXT, K[Vo] = F.MAX_EXT);
  }
  const $ = {
    [jh]: 0,
    [Qh]: 1,
    [eu]: 768,
    [Fc]: 770,
    [au]: 776,
    [ru]: 774,
    [nu]: 772,
    [tu]: 769,
    [Oc]: 771,
    [su]: 775,
    [iu]: 773
  };
  function oe(F, q, ie, ge, we, Ze, pt, Mt) {
    if (F === Pn) {
      y === !0 && (me(3042), y = !1);
      return;
    }
    if (y === !1 && (Pe(3042), y = !0), F !== Zh) {
      if (F !== M || Mt !== S) {
        if ((x !== Ci || b !== Ci) && (a.blendEquation(32774), x = Ci, b = Ci), Mt)
          switch (F) {
            case Oi:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;
            case zo:
              a.blendFunc(1, 1);
              break;
            case Uo:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Bo:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", F);
              break;
          }
        else
          switch (F) {
            case Oi:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;
            case zo:
              a.blendFunc(770, 1);
              break;
            case Uo:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Bo:
              a.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", F);
              break;
          }
        v = null, w = null, E = null, _ = null, M = F, S = Mt;
      }
      return;
    }
    we = we || q, Ze = Ze || ie, pt = pt || ge, (q !== x || we !== b) && (a.blendEquationSeparate(K[q], K[we]), x = q, b = we), (ie !== v || ge !== w || Ze !== E || pt !== _) && (a.blendFuncSeparate($[ie], $[ge], $[Ze], $[pt]), v = ie, w = ge, E = Ze, _ = pt), M = F, S = !1;
  }
  function _e(F, q) {
    F.side === bs ? me(2884) : Pe(2884);
    let ie = F.side === Vt;
    q && (ie = !ie), ce(ie), F.blending === Oi && F.transparent === !1 ? oe(Pn) : oe(F.blending, F.blendEquation, F.blendSrc, F.blendDst, F.blendEquationAlpha, F.blendSrcAlpha, F.blendDstAlpha, F.premultipliedAlpha), l.setFunc(F.depthFunc), l.setTest(F.depthTest), l.setMask(F.depthWrite), o.setMask(F.colorWrite);
    const ge = F.stencilWrite;
    c.setTest(ge), ge && (c.setMask(F.stencilWriteMask), c.setFunc(F.stencilFunc, F.stencilRef, F.stencilFuncMask), c.setOp(F.stencilFail, F.stencilZFail, F.stencilZPass)), Te(F.polygonOffset, F.polygonOffsetFactor, F.polygonOffsetUnits), F.alphaToCoverage === !0 ? Pe(32926) : me(32926);
  }
  function ce(F) {
    C !== F && (F ? a.frontFace(2304) : a.frontFace(2305), C = F);
  }
  function Re(F) {
    F !== qh ? (Pe(2884), F !== I && (F === No ? a.cullFace(1029) : F === Yh ? a.cullFace(1028) : a.cullFace(1032))) : me(2884), I = F;
  }
  function Ee(F) {
    F !== H && (J && a.lineWidth(F), H = F);
  }
  function Te(F, q, ie) {
    F ? (Pe(32823), (O !== q || D !== ie) && (a.polygonOffset(q, ie), O = q, D = ie)) : me(32823);
  }
  function Ke(F) {
    F ? Pe(3089) : me(3089);
  }
  function He(F) {
    F === void 0 && (F = 33984 + B - 1), te !== F && (a.activeTexture(F), te = F);
  }
  function P(F, q, ie) {
    ie === void 0 && (te === null ? ie = 33984 + B - 1 : ie = te);
    let ge = Q[ie];
    ge === void 0 && (ge = { type: void 0, texture: void 0 }, Q[ie] = ge), (ge.type !== F || ge.texture !== q) && (te !== ie && (a.activeTexture(ie), te = ie), a.bindTexture(F, q || X[F]), ge.type = F, ge.texture = q);
  }
  function T() {
    const F = Q[te];
    F !== void 0 && F.type !== void 0 && (a.bindTexture(F.type, null), F.type = void 0, F.texture = void 0);
  }
  function V() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function ne() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function se() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function fe() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Le() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function R() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function N() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function de() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function xe() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function pe() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function be(F) {
    ae.equals(F) === !1 && (a.scissor(F.x, F.y, F.z, F.w), ae.copy(F));
  }
  function ve(F) {
    re.equals(F) === !1 && (a.viewport(F.x, F.y, F.z, F.w), re.copy(F));
  }
  function Ue(F, q) {
    let ie = h.get(q);
    ie === void 0 && (ie = /* @__PURE__ */ new WeakMap(), h.set(q, ie));
    let ge = ie.get(F);
    ge === void 0 && (ge = a.getUniformBlockIndex(q, F.name), ie.set(F, ge));
  }
  function Be(F, q) {
    const ge = h.get(q).get(F);
    u.get(q) !== ge && (a.uniformBlockBinding(q, ge, F.__bindingPointIndex), u.set(q, ge));
  }
  function je() {
    a.disable(3042), a.disable(2884), a.disable(2929), a.disable(32823), a.disable(3089), a.disable(2960), a.disable(32926), a.blendEquation(32774), a.blendFunc(1, 0), a.blendFuncSeparate(1, 0, 1, 0), a.colorMask(!0, !0, !0, !0), a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.depthFunc(513), a.clearDepth(1), a.stencilMask(4294967295), a.stencilFunc(519, 0, 4294967295), a.stencilOp(7680, 7680, 7680), a.clearStencil(0), a.cullFace(1029), a.frontFace(2305), a.polygonOffset(0, 0), a.activeTexture(33984), a.bindFramebuffer(36160, null), n === !0 && (a.bindFramebuffer(36009, null), a.bindFramebuffer(36008, null)), a.useProgram(null), a.lineWidth(1), a.scissor(0, 0, a.canvas.width, a.canvas.height), a.viewport(0, 0, a.canvas.width, a.canvas.height), f = {}, te = null, Q = {}, d = {}, g = /* @__PURE__ */ new WeakMap(), m = [], p = null, y = !1, M = null, x = null, v = null, w = null, b = null, E = null, _ = null, S = !1, C = null, I = null, H = null, O = null, D = null, ae.set(0, 0, a.canvas.width, a.canvas.height), re.set(0, 0, a.canvas.width, a.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: Pe,
    disable: me,
    bindFramebuffer: Ce,
    drawBuffers: ue,
    useProgram: Ie,
    setBlending: oe,
    setMaterial: _e,
    setFlipSided: ce,
    setCullFace: Re,
    setLineWidth: Ee,
    setPolygonOffset: Te,
    setScissorTest: Ke,
    activeTexture: He,
    bindTexture: P,
    unbindTexture: T,
    compressedTexImage2D: V,
    compressedTexImage3D: ne,
    texImage2D: xe,
    texImage3D: pe,
    updateUBOMapping: Ue,
    uniformBlockBinding: Be,
    texStorage2D: N,
    texStorage3D: de,
    texSubImage2D: se,
    texSubImage3D: fe,
    compressedTexSubImage2D: Le,
    compressedTexSubImage3D: R,
    scissor: be,
    viewport: ve,
    reset: je
  };
}
function Gg(a, e, t, n, i, r, s) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, d = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let m;
  const p = /* @__PURE__ */ new WeakMap();
  let y = !1;
  try {
    y = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function M(P, T) {
    return y ? new OffscreenCanvas(P, T) : _r("canvas");
  }
  function x(P, T, V, ne) {
    let se = 1;
    if ((P.width > ne || P.height > ne) && (se = ne / Math.max(P.width, P.height)), se < 1 || T === !0)
      if (typeof HTMLImageElement < "u" && P instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && P instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && P instanceof ImageBitmap) {
        const fe = T ? vs : Math.floor, Le = fe(se * P.width), R = fe(se * P.height);
        m === void 0 && (m = M(Le, R));
        const N = V ? M(Le, R) : m;
        return N.width = Le, N.height = R, N.getContext("2d").drawImage(P, 0, 0, Le, R), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + P.width + "x" + P.height + ") to (" + Le + "x" + R + ")."), N;
      } else
        return "data" in P && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + P.width + "x" + P.height + ")."), P;
    return P;
  }
  function v(P) {
    return Da(P.width) && Da(P.height);
  }
  function w(P) {
    return o ? !1 : P.wrapS !== _t || P.wrapT !== _t || P.minFilter !== ut && P.minFilter !== xt;
  }
  function b(P, T) {
    return P.generateMipmaps && T && P.minFilter !== ut && P.minFilter !== xt;
  }
  function E(P) {
    a.generateMipmap(P);
  }
  function _(P, T, V, ne, se = !1) {
    if (o === !1)
      return T;
    if (P !== null) {
      if (a[P] !== void 0)
        return a[P];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + P + "'");
    }
    let fe = T;
    return T === 6403 && (V === 5126 && (fe = 33326), V === 5131 && (fe = 33325), V === 5121 && (fe = 33321)), T === 33319 && (V === 5126 && (fe = 33328), V === 5131 && (fe = 33327), V === 5121 && (fe = 33323)), T === 6408 && (V === 5126 && (fe = 34836), V === 5131 && (fe = 34842), V === 5121 && (fe = ne === Xe && se === !1 ? 35907 : 32856), V === 32819 && (fe = 32854), V === 32820 && (fe = 32855)), (fe === 33325 || fe === 33326 || fe === 33327 || fe === 33328 || fe === 34842 || fe === 34836) && e.get("EXT_color_buffer_float"), fe;
  }
  function S(P, T, V) {
    return b(P, V) === !0 || P.isFramebufferTexture && P.minFilter !== ut && P.minFilter !== xt ? Math.log2(Math.max(T.width, T.height)) + 1 : P.mipmaps !== void 0 && P.mipmaps.length > 0 ? P.mipmaps.length : P.isCompressedTexture && Array.isArray(P.image) ? T.mipmaps.length : 1;
  }
  function C(P) {
    return P === ut || P === La || P === fs ? 9728 : 9729;
  }
  function I(P) {
    const T = P.target;
    T.removeEventListener("dispose", I), O(T), T.isVideoTexture && g.delete(T);
  }
  function H(P) {
    const T = P.target;
    T.removeEventListener("dispose", H), B(T);
  }
  function O(P) {
    const T = n.get(P);
    if (T.__webglInit === void 0)
      return;
    const V = P.source, ne = p.get(V);
    if (ne) {
      const se = ne[T.__cacheKey];
      se.usedTimes--, se.usedTimes === 0 && D(P), Object.keys(ne).length === 0 && p.delete(V);
    }
    n.remove(P);
  }
  function D(P) {
    const T = n.get(P);
    a.deleteTexture(T.__webglTexture);
    const V = P.source, ne = p.get(V);
    delete ne[T.__cacheKey], s.memory.textures--;
  }
  function B(P) {
    const T = P.texture, V = n.get(P), ne = n.get(T);
    if (ne.__webglTexture !== void 0 && (a.deleteTexture(ne.__webglTexture), s.memory.textures--), P.depthTexture && P.depthTexture.dispose(), P.isWebGLCubeRenderTarget)
      for (let se = 0; se < 6; se++)
        a.deleteFramebuffer(V.__webglFramebuffer[se]), V.__webglDepthbuffer && a.deleteRenderbuffer(V.__webglDepthbuffer[se]);
    else {
      if (a.deleteFramebuffer(V.__webglFramebuffer), V.__webglDepthbuffer && a.deleteRenderbuffer(V.__webglDepthbuffer), V.__webglMultisampledFramebuffer && a.deleteFramebuffer(V.__webglMultisampledFramebuffer), V.__webglColorRenderbuffer)
        for (let se = 0; se < V.__webglColorRenderbuffer.length; se++)
          V.__webglColorRenderbuffer[se] && a.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);
      V.__webglDepthRenderbuffer && a.deleteRenderbuffer(V.__webglDepthRenderbuffer);
    }
    if (P.isWebGLMultipleRenderTargets)
      for (let se = 0, fe = T.length; se < fe; se++) {
        const Le = n.get(T[se]);
        Le.__webglTexture && (a.deleteTexture(Le.__webglTexture), s.memory.textures--), n.remove(T[se]);
      }
    n.remove(T), n.remove(P);
  }
  let J = 0;
  function ee() {
    J = 0;
  }
  function W() {
    const P = J;
    return P >= l && console.warn("THREE.WebGLTextures: Trying to use " + P + " texture units while this GPU supports only " + l), J += 1, P;
  }
  function te(P) {
    const T = [];
    return T.push(P.wrapS), T.push(P.wrapT), T.push(P.wrapR || 0), T.push(P.magFilter), T.push(P.minFilter), T.push(P.anisotropy), T.push(P.internalFormat), T.push(P.format), T.push(P.type), T.push(P.generateMipmaps), T.push(P.premultiplyAlpha), T.push(P.flipY), T.push(P.unpackAlignment), T.push(P.encoding), T.join();
  }
  function Q(P, T) {
    const V = n.get(P);
    if (P.isVideoTexture && Ke(P), P.isRenderTargetTexture === !1 && P.version > 0 && V.__version !== P.version) {
      const ne = P.image;
      if (ne === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ne.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        me(V, P, T);
        return;
      }
    }
    t.bindTexture(3553, V.__webglTexture, 33984 + T);
  }
  function G(P, T) {
    const V = n.get(P);
    if (P.version > 0 && V.__version !== P.version) {
      me(V, P, T);
      return;
    }
    t.bindTexture(35866, V.__webglTexture, 33984 + T);
  }
  function k(P, T) {
    const V = n.get(P);
    if (P.version > 0 && V.__version !== P.version) {
      me(V, P, T);
      return;
    }
    t.bindTexture(32879, V.__webglTexture, 33984 + T);
  }
  function ae(P, T) {
    const V = n.get(P);
    if (P.version > 0 && V.__version !== P.version) {
      Ce(V, P, T);
      return;
    }
    t.bindTexture(34067, V.__webglTexture, 33984 + T);
  }
  const re = {
    [vn]: 10497,
    [_t]: 33071,
    [mr]: 33648
  }, le = {
    [ut]: 9728,
    [La]: 9984,
    [fs]: 9986,
    [xt]: 9729,
    [zc]: 9985,
    [Qn]: 9987
  };
  function X(P, T, V) {
    if (V ? (a.texParameteri(P, 10242, re[T.wrapS]), a.texParameteri(P, 10243, re[T.wrapT]), (P === 32879 || P === 35866) && a.texParameteri(P, 32882, re[T.wrapR]), a.texParameteri(P, 10240, le[T.magFilter]), a.texParameteri(P, 10241, le[T.minFilter])) : (a.texParameteri(P, 10242, 33071), a.texParameteri(P, 10243, 33071), (P === 32879 || P === 35866) && a.texParameteri(P, 32882, 33071), (T.wrapS !== _t || T.wrapT !== _t) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(P, 10240, C(T.magFilter)), a.texParameteri(P, 10241, C(T.minFilter)), T.minFilter !== ut && T.minFilter !== xt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ne = e.get("EXT_texture_filter_anisotropic");
      if (T.magFilter === ut || T.minFilter !== fs && T.minFilter !== Qn || T.type === $t && e.has("OES_texture_float_linear") === !1 || o === !1 && T.type === gn && e.has("OES_texture_half_float_linear") === !1)
        return;
      (T.anisotropy > 1 || n.get(T).__currentAnisotropy) && (a.texParameterf(P, ne.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, i.getMaxAnisotropy())), n.get(T).__currentAnisotropy = T.anisotropy);
    }
  }
  function Pe(P, T) {
    let V = !1;
    P.__webglInit === void 0 && (P.__webglInit = !0, T.addEventListener("dispose", I));
    const ne = T.source;
    let se = p.get(ne);
    se === void 0 && (se = {}, p.set(ne, se));
    const fe = te(T);
    if (fe !== P.__cacheKey) {
      se[fe] === void 0 && (se[fe] = {
        texture: a.createTexture(),
        usedTimes: 0
      }, s.memory.textures++, V = !0), se[fe].usedTimes++;
      const Le = se[P.__cacheKey];
      Le !== void 0 && (se[P.__cacheKey].usedTimes--, Le.usedTimes === 0 && D(T)), P.__cacheKey = fe, P.__webglTexture = se[fe].texture;
    }
    return V;
  }
  function me(P, T, V) {
    let ne = 3553;
    (T.isDataArrayTexture || T.isCompressedArrayTexture) && (ne = 35866), T.isData3DTexture && (ne = 32879);
    const se = Pe(P, T), fe = T.source;
    t.bindTexture(ne, P.__webglTexture, 33984 + V);
    const Le = n.get(fe);
    if (fe.version !== Le.__version || se === !0) {
      t.activeTexture(33984 + V), a.pixelStorei(37440, T.flipY), a.pixelStorei(37441, T.premultiplyAlpha), a.pixelStorei(3317, T.unpackAlignment), a.pixelStorei(37443, 0);
      const R = w(T) && v(T.image) === !1;
      let N = x(T.image, R, !1, u);
      N = He(T, N);
      const de = v(N) || o, xe = r.convert(T.format, T.encoding);
      let pe = r.convert(T.type), be = _(T.internalFormat, xe, pe, T.encoding, T.isVideoTexture);
      X(ne, T, de);
      let ve;
      const Ue = T.mipmaps, Be = o && T.isVideoTexture !== !0, je = Le.__version === void 0 || se === !0, F = S(T, N, de);
      if (T.isDepthTexture)
        be = 6402, o ? T.type === $t ? be = 36012 : T.type === Xn ? be = 33190 : T.type === Ni ? be = 35056 : be = 33189 : T.type === $t && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), T.format === qn && be === 6402 && T.type !== Uc && T.type !== Xn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), T.type = Xn, pe = r.convert(T.type)), T.format === Bi && be === 6402 && (be = 34041, T.type !== Ni && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), T.type = Ni, pe = r.convert(T.type))), je && (Be ? t.texStorage2D(3553, 1, be, N.width, N.height) : t.texImage2D(3553, 0, be, N.width, N.height, 0, xe, pe, null));
      else if (T.isDataTexture)
        if (Ue.length > 0 && de) {
          Be && je && t.texStorage2D(3553, F, be, Ue[0].width, Ue[0].height);
          for (let q = 0, ie = Ue.length; q < ie; q++)
            ve = Ue[q], Be ? t.texSubImage2D(3553, q, 0, 0, ve.width, ve.height, xe, pe, ve.data) : t.texImage2D(3553, q, be, ve.width, ve.height, 0, xe, pe, ve.data);
          T.generateMipmaps = !1;
        } else
          Be ? (je && t.texStorage2D(3553, F, be, N.width, N.height), t.texSubImage2D(3553, 0, 0, 0, N.width, N.height, xe, pe, N.data)) : t.texImage2D(3553, 0, be, N.width, N.height, 0, xe, pe, N.data);
      else if (T.isCompressedTexture)
        if (T.isCompressedArrayTexture) {
          Be && je && t.texStorage3D(35866, F, be, Ue[0].width, Ue[0].height, N.depth);
          for (let q = 0, ie = Ue.length; q < ie; q++)
            ve = Ue[q], T.format !== Bt ? xe !== null ? Be ? t.compressedTexSubImage3D(35866, q, 0, 0, 0, ve.width, ve.height, N.depth, xe, ve.data, 0, 0) : t.compressedTexImage3D(35866, q, be, ve.width, ve.height, N.depth, 0, ve.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? t.texSubImage3D(35866, q, 0, 0, 0, ve.width, ve.height, N.depth, xe, pe, ve.data) : t.texImage3D(35866, q, be, ve.width, ve.height, N.depth, 0, xe, pe, ve.data);
        } else {
          Be && je && t.texStorage2D(3553, F, be, Ue[0].width, Ue[0].height);
          for (let q = 0, ie = Ue.length; q < ie; q++)
            ve = Ue[q], T.format !== Bt ? xe !== null ? Be ? t.compressedTexSubImage2D(3553, q, 0, 0, ve.width, ve.height, xe, ve.data) : t.compressedTexImage2D(3553, q, be, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? t.texSubImage2D(3553, q, 0, 0, ve.width, ve.height, xe, pe, ve.data) : t.texImage2D(3553, q, be, ve.width, ve.height, 0, xe, pe, ve.data);
        }
      else if (T.isDataArrayTexture)
        Be ? (je && t.texStorage3D(35866, F, be, N.width, N.height, N.depth), t.texSubImage3D(35866, 0, 0, 0, 0, N.width, N.height, N.depth, xe, pe, N.data)) : t.texImage3D(35866, 0, be, N.width, N.height, N.depth, 0, xe, pe, N.data);
      else if (T.isData3DTexture)
        Be ? (je && t.texStorage3D(32879, F, be, N.width, N.height, N.depth), t.texSubImage3D(32879, 0, 0, 0, 0, N.width, N.height, N.depth, xe, pe, N.data)) : t.texImage3D(32879, 0, be, N.width, N.height, N.depth, 0, xe, pe, N.data);
      else if (T.isFramebufferTexture) {
        if (je)
          if (Be)
            t.texStorage2D(3553, F, be, N.width, N.height);
          else {
            let q = N.width, ie = N.height;
            for (let ge = 0; ge < F; ge++)
              t.texImage2D(3553, ge, be, q, ie, 0, xe, pe, null), q >>= 1, ie >>= 1;
          }
      } else if (Ue.length > 0 && de) {
        Be && je && t.texStorage2D(3553, F, be, Ue[0].width, Ue[0].height);
        for (let q = 0, ie = Ue.length; q < ie; q++)
          ve = Ue[q], Be ? t.texSubImage2D(3553, q, 0, 0, xe, pe, ve) : t.texImage2D(3553, q, be, xe, pe, ve);
        T.generateMipmaps = !1;
      } else
        Be ? (je && t.texStorage2D(3553, F, be, N.width, N.height), t.texSubImage2D(3553, 0, 0, 0, xe, pe, N)) : t.texImage2D(3553, 0, be, xe, pe, N);
      b(T, de) && E(ne), Le.__version = fe.version, T.onUpdate && T.onUpdate(T);
    }
    P.__version = T.version;
  }
  function Ce(P, T, V) {
    if (T.image.length !== 6)
      return;
    const ne = Pe(P, T), se = T.source;
    t.bindTexture(34067, P.__webglTexture, 33984 + V);
    const fe = n.get(se);
    if (se.version !== fe.__version || ne === !0) {
      t.activeTexture(33984 + V), a.pixelStorei(37440, T.flipY), a.pixelStorei(37441, T.premultiplyAlpha), a.pixelStorei(3317, T.unpackAlignment), a.pixelStorei(37443, 0);
      const Le = T.isCompressedTexture || T.image[0].isCompressedTexture, R = T.image[0] && T.image[0].isDataTexture, N = [];
      for (let q = 0; q < 6; q++)
        !Le && !R ? N[q] = x(T.image[q], !1, !0, c) : N[q] = R ? T.image[q].image : T.image[q], N[q] = He(T, N[q]);
      const de = N[0], xe = v(de) || o, pe = r.convert(T.format, T.encoding), be = r.convert(T.type), ve = _(T.internalFormat, pe, be, T.encoding), Ue = o && T.isVideoTexture !== !0, Be = fe.__version === void 0 || ne === !0;
      let je = S(T, de, xe);
      X(34067, T, xe);
      let F;
      if (Le) {
        Ue && Be && t.texStorage2D(34067, je, ve, de.width, de.height);
        for (let q = 0; q < 6; q++) {
          F = N[q].mipmaps;
          for (let ie = 0; ie < F.length; ie++) {
            const ge = F[ie];
            T.format !== Bt ? pe !== null ? Ue ? t.compressedTexSubImage2D(34069 + q, ie, 0, 0, ge.width, ge.height, pe, ge.data) : t.compressedTexImage2D(34069 + q, ie, ve, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? t.texSubImage2D(34069 + q, ie, 0, 0, ge.width, ge.height, pe, be, ge.data) : t.texImage2D(34069 + q, ie, ve, ge.width, ge.height, 0, pe, be, ge.data);
          }
        }
      } else {
        F = T.mipmaps, Ue && Be && (F.length > 0 && je++, t.texStorage2D(34067, je, ve, N[0].width, N[0].height));
        for (let q = 0; q < 6; q++)
          if (R) {
            Ue ? t.texSubImage2D(34069 + q, 0, 0, 0, N[q].width, N[q].height, pe, be, N[q].data) : t.texImage2D(34069 + q, 0, ve, N[q].width, N[q].height, 0, pe, be, N[q].data);
            for (let ie = 0; ie < F.length; ie++) {
              const we = F[ie].image[q].image;
              Ue ? t.texSubImage2D(34069 + q, ie + 1, 0, 0, we.width, we.height, pe, be, we.data) : t.texImage2D(34069 + q, ie + 1, ve, we.width, we.height, 0, pe, be, we.data);
            }
          } else {
            Ue ? t.texSubImage2D(34069 + q, 0, 0, 0, pe, be, N[q]) : t.texImage2D(34069 + q, 0, ve, pe, be, N[q]);
            for (let ie = 0; ie < F.length; ie++) {
              const ge = F[ie];
              Ue ? t.texSubImage2D(34069 + q, ie + 1, 0, 0, pe, be, ge.image[q]) : t.texImage2D(34069 + q, ie + 1, ve, pe, be, ge.image[q]);
            }
          }
      }
      b(T, xe) && E(34067), fe.__version = se.version, T.onUpdate && T.onUpdate(T);
    }
    P.__version = T.version;
  }
  function ue(P, T, V, ne, se) {
    const fe = r.convert(V.format, V.encoding), Le = r.convert(V.type), R = _(V.internalFormat, fe, Le, V.encoding);
    n.get(T).__hasExternalTextures || (se === 32879 || se === 35866 ? t.texImage3D(se, 0, R, T.width, T.height, T.depth, 0, fe, Le, null) : t.texImage2D(se, 0, R, T.width, T.height, 0, fe, Le, null)), t.bindFramebuffer(36160, P), Te(T) ? f.framebufferTexture2DMultisampleEXT(36160, ne, se, n.get(V).__webglTexture, 0, Ee(T)) : (se === 3553 || se >= 34069 && se <= 34074) && a.framebufferTexture2D(36160, ne, se, n.get(V).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Ie(P, T, V) {
    if (a.bindRenderbuffer(36161, P), T.depthBuffer && !T.stencilBuffer) {
      let ne = 33189;
      if (V || Te(T)) {
        const se = T.depthTexture;
        se && se.isDepthTexture && (se.type === $t ? ne = 36012 : se.type === Xn && (ne = 33190));
        const fe = Ee(T);
        Te(T) ? f.renderbufferStorageMultisampleEXT(36161, fe, ne, T.width, T.height) : a.renderbufferStorageMultisample(36161, fe, ne, T.width, T.height);
      } else
        a.renderbufferStorage(36161, ne, T.width, T.height);
      a.framebufferRenderbuffer(36160, 36096, 36161, P);
    } else if (T.depthBuffer && T.stencilBuffer) {
      const ne = Ee(T);
      V && Te(T) === !1 ? a.renderbufferStorageMultisample(36161, ne, 35056, T.width, T.height) : Te(T) ? f.renderbufferStorageMultisampleEXT(36161, ne, 35056, T.width, T.height) : a.renderbufferStorage(36161, 34041, T.width, T.height), a.framebufferRenderbuffer(36160, 33306, 36161, P);
    } else {
      const ne = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
      for (let se = 0; se < ne.length; se++) {
        const fe = ne[se], Le = r.convert(fe.format, fe.encoding), R = r.convert(fe.type), N = _(fe.internalFormat, Le, R, fe.encoding), de = Ee(T);
        V && Te(T) === !1 ? a.renderbufferStorageMultisample(36161, de, N, T.width, T.height) : Te(T) ? f.renderbufferStorageMultisampleEXT(36161, de, N, T.width, T.height) : a.renderbufferStorage(36161, N, T.width, T.height);
      }
    }
    a.bindRenderbuffer(36161, null);
  }
  function K(P, T) {
    if (T && T.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, P), !(T.depthTexture && T.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(T.depthTexture).__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width, T.depthTexture.image.height = T.height, T.depthTexture.needsUpdate = !0), Q(T.depthTexture, 0);
    const ne = n.get(T.depthTexture).__webglTexture, se = Ee(T);
    if (T.depthTexture.format === qn)
      Te(T) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ne, 0, se) : a.framebufferTexture2D(36160, 36096, 3553, ne, 0);
    else if (T.depthTexture.format === Bi)
      Te(T) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ne, 0, se) : a.framebufferTexture2D(36160, 33306, 3553, ne, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function $(P) {
    const T = n.get(P), V = P.isWebGLCubeRenderTarget === !0;
    if (P.depthTexture && !T.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error("target.depthTexture not supported in Cube render targets");
      K(T.__webglFramebuffer, P);
    } else if (V) {
      T.__webglDepthbuffer = [];
      for (let ne = 0; ne < 6; ne++)
        t.bindFramebuffer(36160, T.__webglFramebuffer[ne]), T.__webglDepthbuffer[ne] = a.createRenderbuffer(), Ie(T.__webglDepthbuffer[ne], P, !1);
    } else
      t.bindFramebuffer(36160, T.__webglFramebuffer), T.__webglDepthbuffer = a.createRenderbuffer(), Ie(T.__webglDepthbuffer, P, !1);
    t.bindFramebuffer(36160, null);
  }
  function oe(P, T, V) {
    const ne = n.get(P);
    T !== void 0 && ue(ne.__webglFramebuffer, P, P.texture, 36064, 3553), V !== void 0 && $(P);
  }
  function _e(P) {
    const T = P.texture, V = n.get(P), ne = n.get(T);
    P.addEventListener("dispose", H), P.isWebGLMultipleRenderTargets !== !0 && (ne.__webglTexture === void 0 && (ne.__webglTexture = a.createTexture()), ne.__version = T.version, s.memory.textures++);
    const se = P.isWebGLCubeRenderTarget === !0, fe = P.isWebGLMultipleRenderTargets === !0, Le = v(P) || o;
    if (se) {
      V.__webglFramebuffer = [];
      for (let R = 0; R < 6; R++)
        V.__webglFramebuffer[R] = a.createFramebuffer();
    } else {
      if (V.__webglFramebuffer = a.createFramebuffer(), fe)
        if (i.drawBuffers) {
          const R = P.texture;
          for (let N = 0, de = R.length; N < de; N++) {
            const xe = n.get(R[N]);
            xe.__webglTexture === void 0 && (xe.__webglTexture = a.createTexture(), s.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && P.samples > 0 && Te(P) === !1) {
        const R = fe ? T : [T];
        V.__webglMultisampledFramebuffer = a.createFramebuffer(), V.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer);
        for (let N = 0; N < R.length; N++) {
          const de = R[N];
          V.__webglColorRenderbuffer[N] = a.createRenderbuffer(), a.bindRenderbuffer(36161, V.__webglColorRenderbuffer[N]);
          const xe = r.convert(de.format, de.encoding), pe = r.convert(de.type), be = _(de.internalFormat, xe, pe, de.encoding, P.isXRRenderTarget === !0), ve = Ee(P);
          a.renderbufferStorageMultisample(36161, ve, be, P.width, P.height), a.framebufferRenderbuffer(36160, 36064 + N, 36161, V.__webglColorRenderbuffer[N]);
        }
        a.bindRenderbuffer(36161, null), P.depthBuffer && (V.__webglDepthRenderbuffer = a.createRenderbuffer(), Ie(V.__webglDepthRenderbuffer, P, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (se) {
      t.bindTexture(34067, ne.__webglTexture), X(34067, T, Le);
      for (let R = 0; R < 6; R++)
        ue(V.__webglFramebuffer[R], P, T, 36064, 34069 + R);
      b(T, Le) && E(34067), t.unbindTexture();
    } else if (fe) {
      const R = P.texture;
      for (let N = 0, de = R.length; N < de; N++) {
        const xe = R[N], pe = n.get(xe);
        t.bindTexture(3553, pe.__webglTexture), X(3553, xe, Le), ue(V.__webglFramebuffer, P, xe, 36064 + N, 3553), b(xe, Le) && E(3553);
      }
      t.unbindTexture();
    } else {
      let R = 3553;
      (P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) && (o ? R = P.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(R, ne.__webglTexture), X(R, T, Le), ue(V.__webglFramebuffer, P, T, 36064, R), b(T, Le) && E(R), t.unbindTexture();
    }
    P.depthBuffer && $(P);
  }
  function ce(P) {
    const T = v(P) || o, V = P.isWebGLMultipleRenderTargets === !0 ? P.texture : [P.texture];
    for (let ne = 0, se = V.length; ne < se; ne++) {
      const fe = V[ne];
      if (b(fe, T)) {
        const Le = P.isWebGLCubeRenderTarget ? 34067 : 3553, R = n.get(fe).__webglTexture;
        t.bindTexture(Le, R), E(Le), t.unbindTexture();
      }
    }
  }
  function Re(P) {
    if (o && P.samples > 0 && Te(P) === !1) {
      const T = P.isWebGLMultipleRenderTargets ? P.texture : [P.texture], V = P.width, ne = P.height;
      let se = 16384;
      const fe = [], Le = P.stencilBuffer ? 33306 : 36096, R = n.get(P), N = P.isWebGLMultipleRenderTargets === !0;
      if (N)
        for (let de = 0; de < T.length; de++)
          t.bindFramebuffer(36160, R.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + de, 36161, null), t.bindFramebuffer(36160, R.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + de, 3553, null, 0);
      t.bindFramebuffer(36008, R.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, R.__webglFramebuffer);
      for (let de = 0; de < T.length; de++) {
        fe.push(36064 + de), P.depthBuffer && fe.push(Le);
        const xe = R.__ignoreDepthValues !== void 0 ? R.__ignoreDepthValues : !1;
        if (xe === !1 && (P.depthBuffer && (se |= 256), P.stencilBuffer && (se |= 1024)), N && a.framebufferRenderbuffer(36008, 36064, 36161, R.__webglColorRenderbuffer[de]), xe === !0 && (a.invalidateFramebuffer(36008, [Le]), a.invalidateFramebuffer(36009, [Le])), N) {
          const pe = n.get(T[de]).__webglTexture;
          a.framebufferTexture2D(36009, 36064, 3553, pe, 0);
        }
        a.blitFramebuffer(0, 0, V, ne, 0, 0, V, ne, se, 9728), d && a.invalidateFramebuffer(36008, fe);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), N)
        for (let de = 0; de < T.length; de++) {
          t.bindFramebuffer(36160, R.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + de, 36161, R.__webglColorRenderbuffer[de]);
          const xe = n.get(T[de]).__webglTexture;
          t.bindFramebuffer(36160, R.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + de, 3553, xe, 0);
        }
      t.bindFramebuffer(36009, R.__webglMultisampledFramebuffer);
    }
  }
  function Ee(P) {
    return Math.min(h, P.samples);
  }
  function Te(P) {
    const T = n.get(P);
    return o && P.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && T.__useRenderToTexture !== !1;
  }
  function Ke(P) {
    const T = s.render.frame;
    g.get(P) !== T && (g.set(P, T), P.update());
  }
  function He(P, T) {
    const V = P.encoding, ne = P.format, se = P.type;
    return P.isCompressedTexture === !0 || P.isVideoTexture === !0 || P.format === Ra || V !== Dn && (V === Xe ? o === !1 ? e.has("EXT_sRGB") === !0 && ne === Bt ? (P.format = Ra, P.minFilter = xt, P.generateMipmaps = !1) : T = Gc.sRGBToLinear(T) : (ne !== Bt || se !== ei) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", V)), T;
  }
  this.allocateTextureUnit = W, this.resetTextureUnits = ee, this.setTexture2D = Q, this.setTexture2DArray = G, this.setTexture3D = k, this.setTextureCube = ae, this.rebindTextures = oe, this.setupRenderTarget = _e, this.updateRenderTargetMipmap = ce, this.updateMultisampleRenderTarget = Re, this.setupDepthRenderbuffer = $, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = Te;
}
function Hg(a, e, t) {
  const n = t.isWebGL2;
  function i(r, s = null) {
    let o;
    if (r === ei)
      return 5121;
    if (r === wu)
      return 32819;
    if (r === Su)
      return 32820;
    if (r === yu)
      return 5120;
    if (r === Mu)
      return 5122;
    if (r === Uc)
      return 5123;
    if (r === bu)
      return 5124;
    if (r === Xn)
      return 5125;
    if (r === $t)
      return 5126;
    if (r === gn)
      return n ? 5131 : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (r === Tu)
      return 6406;
    if (r === Bt)
      return 6408;
    if (r === Au)
      return 6409;
    if (r === Cu)
      return 6410;
    if (r === qn)
      return 6402;
    if (r === Bi)
      return 34041;
    if (r === Eu)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (r === Ra)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (r === Lu)
      return 6403;
    if (r === Pu)
      return 36244;
    if (r === Ru)
      return 33319;
    if (r === Du)
      return 33320;
    if (r === Iu)
      return 36249;
    if (r === zs || r === Us || r === Bs || r === ks)
      if (s === Xe)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (r === zs)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Us)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Bs)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === ks)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (r === zs)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Us)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Bs)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === ks)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Go || r === Ho || r === Wo || r === Xo)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (r === Go)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Ho)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Wo)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Xo)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === Fu)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === qo || r === Yo)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (r === qo)
          return s === Xe ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (r === Yo)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === Jo || r === Zo || r === $o || r === Ko || r === jo || r === Qo || r === el || r === tl || r === nl || r === il || r === rl || r === sl || r === al || r === ol)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (r === Jo)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Zo)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === $o)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Ko)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === jo)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Qo)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === el)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === tl)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === nl)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === il)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === rl)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === sl)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === al)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === ol)
          return s === Xe ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === ll)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (r === ll)
          return s === Xe ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return r === Ni ? n ? 34042 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : a[r] !== void 0 ? a[r] : null;
  }
  return { convert: i };
}
class Wg extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class nn extends $e {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Xg = { type: "move" };
class fa {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new nn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new nn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new nn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, s = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        s = !0;
        for (const m of e.hand.values()) {
          const p = t.getJointPose(m, n), y = this._getHandJoint(c, m);
          p !== null && (y.matrix.fromArray(p.transform.matrix), y.matrix.decompose(y.position, y.rotation, y.scale), y.jointRadius = p.radius), y.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), d = 0.02, g = 5e-3;
        c.inputState.pinching && f > d + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= d - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Xg)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new nn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class qg extends rt {
  constructor(e, t, n, i, r, s, o, l, c, u) {
    if (u = u !== void 0 ? u : qn, u !== qn && u !== Bi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === qn && (n = Xn), n === void 0 && u === Bi && (n = Ni), super(null, i, r, s, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : ut, this.minFilter = l !== void 0 ? l : ut, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Yg extends ri {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, s = null, o = "local-floor", l = null, c = null, u = null, h = null, f = null, d = null;
    const g = t.getContextAttributes();
    let m = null, p = null;
    const y = [], M = [], x = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map(), w = new wt();
    w.layers.enable(1), w.viewport = new Ye();
    const b = new wt();
    b.layers.enable(2), b.viewport = new Ye();
    const E = [w, b], _ = new Wg();
    _.layers.enable(1), _.layers.enable(2);
    let S = null, C = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(G) {
      let k = y[G];
      return k === void 0 && (k = new fa(), y[G] = k), k.getTargetRaySpace();
    }, this.getControllerGrip = function(G) {
      let k = y[G];
      return k === void 0 && (k = new fa(), y[G] = k), k.getGripSpace();
    }, this.getHand = function(G) {
      let k = y[G];
      return k === void 0 && (k = new fa(), y[G] = k), k.getHandSpace();
    };
    function I(G) {
      const k = M.indexOf(G.inputSource);
      if (k === -1)
        return;
      const ae = y[k];
      ae !== void 0 && ae.dispatchEvent({ type: G.type, data: G.inputSource });
    }
    function H() {
      i.removeEventListener("select", I), i.removeEventListener("selectstart", I), i.removeEventListener("selectend", I), i.removeEventListener("squeeze", I), i.removeEventListener("squeezestart", I), i.removeEventListener("squeezeend", I), i.removeEventListener("end", H), i.removeEventListener("inputsourceschange", O);
      for (let G = 0; G < y.length; G++) {
        const k = M[G];
        k !== null && (M[G] = null, y[G].disconnect(k));
      }
      S = null, C = null, e.setRenderTarget(m), f = null, h = null, u = null, i = null, p = null, Q.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(G) {
      r = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(G) {
      o = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(G) {
      l = G;
    }, this.getBaseLayer = function() {
      return h !== null ? h : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return d;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(G) {
      if (i = G, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", I), i.addEventListener("selectstart", I), i.addEventListener("selectend", I), i.addEventListener("squeeze", I), i.addEventListener("squeezestart", I), i.addEventListener("squeezeend", I), i.addEventListener("end", H), i.addEventListener("inputsourceschange", O), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const k = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, k), i.updateRenderState({ baseLayer: f }), p = new ti(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Bt,
              type: ei,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let k = null, ae = null, re = null;
          g.depth && (re = g.stencil ? 35056 : 33190, k = g.stencil ? Bi : qn, ae = g.stencil ? Ni : Xn);
          const le = {
            colorFormat: 32856,
            depthFormat: re,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(le), i.updateRenderState({ layers: [h] }), p = new ti(
            h.textureWidth,
            h.textureHeight,
            {
              format: Bt,
              type: ei,
              depthTexture: new qg(h.textureWidth, h.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, k),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const X = e.properties.get(p);
          X.__ignoreDepthValues = h.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(1), l = null, s = await i.requestReferenceSpace(o), Q.setContext(i), Q.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function O(G) {
      for (let k = 0; k < G.removed.length; k++) {
        const ae = G.removed[k], re = M.indexOf(ae);
        re >= 0 && (M[re] = null, y[re].disconnect(ae));
      }
      for (let k = 0; k < G.added.length; k++) {
        const ae = G.added[k];
        let re = M.indexOf(ae);
        if (re === -1) {
          for (let X = 0; X < y.length; X++)
            if (X >= M.length) {
              M.push(ae), re = X;
              break;
            } else if (M[X] === null) {
              M[X] = ae, re = X;
              break;
            }
          if (re === -1)
            break;
        }
        const le = y[re];
        le && le.connect(ae);
      }
    }
    const D = new L(), B = new L();
    function J(G, k, ae) {
      D.setFromMatrixPosition(k.matrixWorld), B.setFromMatrixPosition(ae.matrixWorld);
      const re = D.distanceTo(B), le = k.projectionMatrix.elements, X = ae.projectionMatrix.elements, Pe = le[14] / (le[10] - 1), me = le[14] / (le[10] + 1), Ce = (le[9] + 1) / le[5], ue = (le[9] - 1) / le[5], Ie = (le[8] - 1) / le[0], K = (X[8] + 1) / X[0], $ = Pe * Ie, oe = Pe * K, _e = re / (-Ie + K), ce = _e * -Ie;
      k.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(ce), G.translateZ(_e), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert();
      const Re = Pe + _e, Ee = me + _e, Te = $ - ce, Ke = oe + (re - ce), He = Ce * me / Ee * Re, P = ue * me / Ee * Re;
      G.projectionMatrix.makePerspective(Te, Ke, He, P, Re, Ee);
    }
    function ee(G, k) {
      k === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(k.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert();
    }
    this.updateCamera = function(G) {
      if (i === null)
        return;
      _.near = b.near = w.near = G.near, _.far = b.far = w.far = G.far, (S !== _.near || C !== _.far) && (i.updateRenderState({
        depthNear: _.near,
        depthFar: _.far
      }), S = _.near, C = _.far);
      const k = G.parent, ae = _.cameras;
      ee(_, k);
      for (let le = 0; le < ae.length; le++)
        ee(ae[le], k);
      _.matrixWorld.decompose(_.position, _.quaternion, _.scale), G.matrix.copy(_.matrix), G.matrix.decompose(G.position, G.quaternion, G.scale);
      const re = G.children;
      for (let le = 0, X = re.length; le < X; le++)
        re[le].updateMatrixWorld(!0);
      ae.length === 2 ? J(_, w, b) : _.projectionMatrix.copy(w.projectionMatrix);
    }, this.getCamera = function() {
      return _;
    }, this.getFoveation = function() {
      if (h !== null)
        return h.fixedFoveation;
      if (f !== null)
        return f.fixedFoveation;
    }, this.setFoveation = function(G) {
      h !== null && (h.fixedFoveation = G), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = G);
    }, this.getPlanes = function() {
      return x;
    };
    let W = null;
    function te(G, k) {
      if (c = k.getViewerPose(l || s), d = k, c !== null) {
        const ae = c.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let re = !1;
        ae.length !== _.cameras.length && (_.cameras.length = 0, re = !0);
        for (let le = 0; le < ae.length; le++) {
          const X = ae[le];
          let Pe = null;
          if (f !== null)
            Pe = f.getViewport(X);
          else {
            const Ce = u.getViewSubImage(h, X);
            Pe = Ce.viewport, le === 0 && (e.setRenderTargetTextures(
              p,
              Ce.colorTexture,
              h.ignoreDepthValues ? void 0 : Ce.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let me = E[le];
          me === void 0 && (me = new wt(), me.layers.enable(le), me.viewport = new Ye(), E[le] = me), me.matrix.fromArray(X.transform.matrix), me.projectionMatrix.fromArray(X.projectionMatrix), me.viewport.set(Pe.x, Pe.y, Pe.width, Pe.height), le === 0 && _.matrix.copy(me.matrix), re === !0 && _.cameras.push(me);
        }
      }
      for (let ae = 0; ae < y.length; ae++) {
        const re = M[ae], le = y[ae];
        re !== null && le !== void 0 && le.update(re, k, l || s);
      }
      if (W && W(G, k), k.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: k.detectedPlanes });
        let ae = null;
        for (const re of x)
          k.detectedPlanes.has(re) || (ae === null && (ae = []), ae.push(re));
        if (ae !== null)
          for (const re of ae)
            x.delete(re), v.delete(re), n.dispatchEvent({ type: "planeremoved", data: re });
        for (const re of k.detectedPlanes)
          if (!x.has(re))
            x.add(re), v.set(re, k.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: re });
          else {
            const le = v.get(re);
            re.lastChangedTime > le && (v.set(re, re.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: re }));
          }
      }
      d = null;
    }
    const Q = new Jc();
    Q.setAnimationLoop(te), this.setAnimationLoop = function(G) {
      W = G;
    }, this.dispose = function() {
    };
  }
}
function Jg(a, e) {
  function t(m, p) {
    p.color.getRGB(m.fogColor.value, qc(a)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function n(m, p, y, M, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? i(m, p) : p.isMeshToonMaterial ? (i(m, p), u(m, p)) : p.isMeshPhongMaterial ? (i(m, p), c(m, p)) : p.isMeshStandardMaterial ? (i(m, p), h(m, p), p.isMeshPhysicalMaterial && f(m, p, x)) : p.isMeshMatcapMaterial ? (i(m, p), d(m, p)) : p.isMeshDepthMaterial ? i(m, p) : p.isMeshDistanceMaterial ? (i(m, p), g(m, p)) : p.isMeshNormalMaterial ? i(m, p) : p.isLineBasicMaterial ? (r(m, p), p.isLineDashedMaterial && s(m, p)) : p.isPointsMaterial ? o(m, p, y, M) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function i(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map), p.alphaMap && (m.alphaMap.value = p.alphaMap), p.bumpMap && (m.bumpMap.value = p.bumpMap, m.bumpScale.value = p.bumpScale, p.side === Vt && (m.bumpScale.value *= -1)), p.displacementMap && (m.displacementMap.value = p.displacementMap, m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap), p.normalMap && (m.normalMap.value = p.normalMap, m.normalScale.value.copy(p.normalScale), p.side === Vt && m.normalScale.value.negate()), p.specularMap && (m.specularMap.value = p.specularMap), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const y = e.get(p).envMap;
    if (y && (m.envMap.value = y, m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap) {
      m.lightMap.value = p.lightMap;
      const v = a.physicallyCorrectLights !== !0 ? Math.PI : 1;
      m.lightMapIntensity.value = p.lightMapIntensity * v;
    }
    p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity);
    let M;
    p.map ? M = p.map : p.specularMap ? M = p.specularMap : p.displacementMap ? M = p.displacementMap : p.normalMap ? M = p.normalMap : p.bumpMap ? M = p.bumpMap : p.roughnessMap ? M = p.roughnessMap : p.metalnessMap ? M = p.metalnessMap : p.alphaMap ? M = p.alphaMap : p.emissiveMap ? M = p.emissiveMap : p.clearcoatMap ? M = p.clearcoatMap : p.clearcoatNormalMap ? M = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? M = p.clearcoatRoughnessMap : p.iridescenceMap ? M = p.iridescenceMap : p.iridescenceThicknessMap ? M = p.iridescenceThicknessMap : p.specularIntensityMap ? M = p.specularIntensityMap : p.specularColorMap ? M = p.specularColorMap : p.transmissionMap ? M = p.transmissionMap : p.thicknessMap ? M = p.thicknessMap : p.sheenColorMap ? M = p.sheenColorMap : p.sheenRoughnessMap && (M = p.sheenRoughnessMap), M !== void 0 && (M.isWebGLRenderTarget && (M = M.texture), M.matrixAutoUpdate === !0 && M.updateMatrix(), m.uvTransform.value.copy(M.matrix));
    let x;
    p.aoMap ? x = p.aoMap : p.lightMap && (x = p.lightMap), x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture), x.matrixAutoUpdate === !0 && x.updateMatrix(), m.uv2Transform.value.copy(x.matrix));
  }
  function r(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity;
  }
  function s(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function o(m, p, y, M) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * y, m.scale.value = M * 0.5, p.map && (m.map.value = p.map), p.alphaMap && (m.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    let x;
    p.map ? x = p.map : p.alphaMap && (x = p.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), m.uvTransform.value.copy(x.matrix));
  }
  function l(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map), p.alphaMap && (m.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    let y;
    p.map ? y = p.map : p.alphaMap && (y = p.alphaMap), y !== void 0 && (y.matrixAutoUpdate === !0 && y.updateMatrix(), m.uvTransform.value.copy(y.matrix));
  }
  function c(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function h(m, p) {
    m.roughness.value = p.roughness, m.metalness.value = p.metalness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap), p.metalnessMap && (m.metalnessMap.value = p.metalnessMap), e.get(p).envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, y) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), m.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === Vt && m.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap)), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = y.texture, m.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap);
  }
  function d(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function g(m, p) {
    m.referencePosition.value.copy(p.referencePosition), m.nearDistance.value = p.nearDistance, m.farDistance.value = p.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Zg(a, e, t, n) {
  let i = {}, r = {}, s = [];
  const o = t.isWebGL2 ? a.getParameter(35375) : 0;
  function l(M, x) {
    const v = x.program;
    n.uniformBlockBinding(M, v);
  }
  function c(M, x) {
    let v = i[M.id];
    v === void 0 && (g(M), v = u(M), i[M.id] = v, M.addEventListener("dispose", p));
    const w = x.program;
    n.updateUBOMapping(M, w);
    const b = e.render.frame;
    r[M.id] !== b && (f(M), r[M.id] = b);
  }
  function u(M) {
    const x = h();
    M.__bindingPointIndex = x;
    const v = a.createBuffer(), w = M.__size, b = M.usage;
    return a.bindBuffer(35345, v), a.bufferData(35345, w, b), a.bindBuffer(35345, null), a.bindBufferBase(35345, x, v), v;
  }
  function h() {
    for (let M = 0; M < o; M++)
      if (s.indexOf(M) === -1)
        return s.push(M), M;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(M) {
    const x = i[M.id], v = M.uniforms, w = M.__cache;
    a.bindBuffer(35345, x);
    for (let b = 0, E = v.length; b < E; b++) {
      const _ = v[b];
      if (d(_, b, w) === !0) {
        const S = _.__offset, C = Array.isArray(_.value) ? _.value : [_.value];
        let I = 0;
        for (let H = 0; H < C.length; H++) {
          const O = C[H], D = m(O);
          typeof O == "number" ? (_.__data[0] = O, a.bufferSubData(35345, S + I, _.__data)) : O.isMatrix3 ? (_.__data[0] = O.elements[0], _.__data[1] = O.elements[1], _.__data[2] = O.elements[2], _.__data[3] = O.elements[0], _.__data[4] = O.elements[3], _.__data[5] = O.elements[4], _.__data[6] = O.elements[5], _.__data[7] = O.elements[0], _.__data[8] = O.elements[6], _.__data[9] = O.elements[7], _.__data[10] = O.elements[8], _.__data[11] = O.elements[0]) : (O.toArray(_.__data, I), I += D.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        a.bufferSubData(35345, S, _.__data);
      }
    }
    a.bindBuffer(35345, null);
  }
  function d(M, x, v) {
    const w = M.value;
    if (v[x] === void 0) {
      if (typeof w == "number")
        v[x] = w;
      else {
        const b = Array.isArray(w) ? w : [w], E = [];
        for (let _ = 0; _ < b.length; _++)
          E.push(b[_].clone());
        v[x] = E;
      }
      return !0;
    } else if (typeof w == "number") {
      if (v[x] !== w)
        return v[x] = w, !0;
    } else {
      const b = Array.isArray(v[x]) ? v[x] : [v[x]], E = Array.isArray(w) ? w : [w];
      for (let _ = 0; _ < b.length; _++) {
        const S = b[_];
        if (S.equals(E[_]) === !1)
          return S.copy(E[_]), !0;
      }
    }
    return !1;
  }
  function g(M) {
    const x = M.uniforms;
    let v = 0;
    const w = 16;
    let b = 0;
    for (let E = 0, _ = x.length; E < _; E++) {
      const S = x[E], C = {
        boundary: 0,
        storage: 0
      }, I = Array.isArray(S.value) ? S.value : [S.value];
      for (let H = 0, O = I.length; H < O; H++) {
        const D = I[H], B = m(D);
        C.boundary += B.boundary, C.storage += B.storage;
      }
      if (S.__data = new Float32Array(C.storage / Float32Array.BYTES_PER_ELEMENT), S.__offset = v, E > 0) {
        b = v % w;
        const H = w - b;
        b !== 0 && H - C.boundary < 0 && (v += w - b, S.__offset = v);
      }
      v += C.storage;
    }
    return b = v % w, b > 0 && (v += w - b), M.__size = v, M.__cache = {}, this;
  }
  function m(M) {
    const x = {
      boundary: 0,
      storage: 0
    };
    return typeof M == "number" ? (x.boundary = 4, x.storage = 4) : M.isVector2 ? (x.boundary = 8, x.storage = 8) : M.isVector3 || M.isColor ? (x.boundary = 16, x.storage = 12) : M.isVector4 ? (x.boundary = 16, x.storage = 16) : M.isMatrix3 ? (x.boundary = 48, x.storage = 48) : M.isMatrix4 ? (x.boundary = 64, x.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), x;
  }
  function p(M) {
    const x = M.target;
    x.removeEventListener("dispose", p);
    const v = s.indexOf(x.__bindingPointIndex);
    s.splice(v, 1), a.deleteBuffer(i[x.id]), delete i[x.id], delete r[x.id];
  }
  function y() {
    for (const M in i)
      a.deleteBuffer(i[M]);
    s = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: y
  };
}
function $g() {
  const a = _r("canvas");
  return a.style.display = "block", a;
}
function th(a = {}) {
  this.isWebGLRenderer = !0;
  const e = a.canvas !== void 0 ? a.canvas : $g(), t = a.context !== void 0 ? a.context : null, n = a.depth !== void 0 ? a.depth : !0, i = a.stencil !== void 0 ? a.stencil : !0, r = a.antialias !== void 0 ? a.antialias : !1, s = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0, o = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1, l = a.powerPreference !== void 0 ? a.powerPreference : "default", c = a.failIfMajorPerformanceCaveat !== void 0 ? a.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = a.alpha !== void 0 ? a.alpha : !1;
  let h = null, f = null;
  const d = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Dn, this.physicallyCorrectLights = !1, this.toneMapping = _n, this.toneMappingExposure = 1;
  const m = this;
  let p = !1, y = 0, M = 0, x = null, v = -1, w = null;
  const b = new Ye(), E = new Ye();
  let _ = null, S = e.width, C = e.height, I = 1, H = null, O = null;
  const D = new Ye(0, 0, S, C), B = new Ye(0, 0, S, C);
  let J = !1;
  const ee = new ja();
  let W = !1, te = !1, Q = null;
  const G = new ye(), k = new j(), ae = new L(), re = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function le() {
    return x === null ? I : 1;
  }
  let X = t;
  function Pe(A, U) {
    for (let Y = 0; Y < A.length; Y++) {
      const z = A[Y], Z = e.getContext(z, U);
      if (Z !== null)
        return Z;
    }
    return null;
  }
  try {
    const A = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: s,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Xa}`), e.addEventListener("webglcontextlost", be, !1), e.addEventListener("webglcontextrestored", ve, !1), e.addEventListener("webglcontextcreationerror", Ue, !1), X === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (m.isWebGL1Renderer === !0 && U.shift(), X = Pe(U, A), X === null)
        throw Pe(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    X.getShaderPrecisionFormat === void 0 && (X.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (A) {
    throw console.error("THREE.WebGLRenderer: " + A.message), A;
  }
  let me, Ce, ue, Ie, K, $, oe, _e, ce, Re, Ee, Te, Ke, He, P, T, V, ne, se, fe, Le, R, N, de;
  function xe() {
    me = new cm(X), Ce = new im(X, me, a), me.init(Ce), R = new Hg(X, me, Ce), ue = new Vg(X, me, Ce), Ie = new fm(), K = new Lg(), $ = new Gg(X, me, ue, K, Ce, R, Ie), oe = new sm(m), _e = new lm(m), ce = new Mf(X, Ce), N = new tm(X, me, ce, Ce), Re = new hm(X, ce, Ie, N), Ee = new gm(X, Re, ce, Ie), se = new mm(X, Ce, $), T = new rm(K), Te = new Cg(m, oe, _e, me, Ce, N, T), Ke = new Jg(m, K), He = new Rg(), P = new zg(me, Ce), ne = new em(m, oe, _e, ue, Ee, u, s), V = new kg(m, Ee, Ce), de = new Zg(X, Ie, Ce, ue), fe = new nm(X, me, Ie, Ce), Le = new um(X, me, Ie, Ce), Ie.programs = Te.programs, m.capabilities = Ce, m.extensions = me, m.properties = K, m.renderLists = He, m.shadowMap = V, m.state = ue, m.info = Ie;
  }
  xe();
  const pe = new Yg(m, X);
  this.xr = pe, this.getContext = function() {
    return X;
  }, this.getContextAttributes = function() {
    return X.getContextAttributes();
  }, this.forceContextLoss = function() {
    const A = me.get("WEBGL_lose_context");
    A && A.loseContext();
  }, this.forceContextRestore = function() {
    const A = me.get("WEBGL_lose_context");
    A && A.restoreContext();
  }, this.getPixelRatio = function() {
    return I;
  }, this.setPixelRatio = function(A) {
    A !== void 0 && (I = A, this.setSize(S, C, !1));
  }, this.getSize = function(A) {
    return A.set(S, C);
  }, this.setSize = function(A, U, Y) {
    if (pe.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    S = A, C = U, e.width = Math.floor(A * I), e.height = Math.floor(U * I), Y !== !1 && (e.style.width = A + "px", e.style.height = U + "px"), this.setViewport(0, 0, A, U);
  }, this.getDrawingBufferSize = function(A) {
    return A.set(S * I, C * I).floor();
  }, this.setDrawingBufferSize = function(A, U, Y) {
    S = A, C = U, I = Y, e.width = Math.floor(A * Y), e.height = Math.floor(U * Y), this.setViewport(0, 0, A, U);
  }, this.getCurrentViewport = function(A) {
    return A.copy(b);
  }, this.getViewport = function(A) {
    return A.copy(D);
  }, this.setViewport = function(A, U, Y, z) {
    A.isVector4 ? D.set(A.x, A.y, A.z, A.w) : D.set(A, U, Y, z), ue.viewport(b.copy(D).multiplyScalar(I).floor());
  }, this.getScissor = function(A) {
    return A.copy(B);
  }, this.setScissor = function(A, U, Y, z) {
    A.isVector4 ? B.set(A.x, A.y, A.z, A.w) : B.set(A, U, Y, z), ue.scissor(E.copy(B).multiplyScalar(I).floor());
  }, this.getScissorTest = function() {
    return J;
  }, this.setScissorTest = function(A) {
    ue.setScissorTest(J = A);
  }, this.setOpaqueSort = function(A) {
    H = A;
  }, this.setTransparentSort = function(A) {
    O = A;
  }, this.getClearColor = function(A) {
    return A.copy(ne.getClearColor());
  }, this.setClearColor = function() {
    ne.setClearColor.apply(ne, arguments);
  }, this.getClearAlpha = function() {
    return ne.getClearAlpha();
  }, this.setClearAlpha = function() {
    ne.setClearAlpha.apply(ne, arguments);
  }, this.clear = function(A = !0, U = !0, Y = !0) {
    let z = 0;
    A && (z |= 16384), U && (z |= 256), Y && (z |= 1024), X.clear(z);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", be, !1), e.removeEventListener("webglcontextrestored", ve, !1), e.removeEventListener("webglcontextcreationerror", Ue, !1), He.dispose(), P.dispose(), K.dispose(), oe.dispose(), _e.dispose(), Ee.dispose(), N.dispose(), de.dispose(), Te.dispose(), pe.dispose(), pe.removeEventListener("sessionstart", ge), pe.removeEventListener("sessionend", we), Q && (Q.dispose(), Q = null), Ze.stop();
  };
  function be(A) {
    A.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0;
  }
  function ve() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1;
    const A = Ie.autoReset, U = V.enabled, Y = V.autoUpdate, z = V.needsUpdate, Z = V.type;
    xe(), Ie.autoReset = A, V.enabled = U, V.autoUpdate = Y, V.needsUpdate = z, V.type = Z;
  }
  function Ue(A) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", A.statusMessage);
  }
  function Be(A) {
    const U = A.target;
    U.removeEventListener("dispose", Be), je(U);
  }
  function je(A) {
    F(A), K.remove(A);
  }
  function F(A) {
    const U = K.get(A).programs;
    U !== void 0 && (U.forEach(function(Y) {
      Te.releaseProgram(Y);
    }), A.isShaderMaterial && Te.releaseShaderCache(A));
  }
  this.renderBufferDirect = function(A, U, Y, z, Z, Ae) {
    U === null && (U = re);
    const De = Z.isMesh && Z.matrixWorld.determinant() < 0, Oe = Uh(A, U, Y, z, Z);
    ue.setMaterial(z, De);
    let Ne = Y.index, We = 1;
    z.wireframe === !0 && (Ne = Re.getWireframeAttribute(Y), We = 2);
    const ke = Y.drawRange, Ve = Y.attributes.position;
    let st = ke.start * We, Pt = (ke.start + ke.count) * We;
    Ae !== null && (st = Math.max(st, Ae.start * We), Pt = Math.min(Pt, (Ae.start + Ae.count) * We)), Ne !== null ? (st = Math.max(st, 0), Pt = Math.min(Pt, Ne.count)) : Ve != null && (st = Math.max(st, 0), Pt = Math.min(Pt, Ve.count));
    const ln = Pt - st;
    if (ln < 0 || ln === 1 / 0)
      return;
    N.setup(Z, z, Oe, Y, Ne);
    let On, at = fe;
    if (Ne !== null && (On = ce.get(Ne), at = Le, at.setIndex(On)), Z.isMesh)
      z.wireframe === !0 ? (ue.setLineWidth(z.wireframeLinewidth * le()), at.setMode(1)) : at.setMode(4);
    else if (Z.isLine) {
      let Ge = z.linewidth;
      Ge === void 0 && (Ge = 1), ue.setLineWidth(Ge * le()), Z.isLineSegments ? at.setMode(1) : Z.isLineLoop ? at.setMode(2) : at.setMode(3);
    } else
      Z.isPoints ? at.setMode(0) : Z.isSprite && at.setMode(4);
    if (Z.isInstancedMesh)
      at.renderInstances(st, ln, Z.count);
    else if (Y.isInstancedBufferGeometry) {
      const Ge = Y._maxInstanceCount !== void 0 ? Y._maxInstanceCount : 1 / 0, Is = Math.min(Y.instanceCount, Ge);
      at.renderInstances(st, ln, Is);
    } else
      at.render(st, ln);
  }, this.compile = function(A, U) {
    function Y(z, Z, Ae) {
      z.transparent === !0 && z.side === Lr ? (z.side = Vt, z.needsUpdate = !0, Nt(z, Z, Ae), z.side = $n, z.needsUpdate = !0, Nt(z, Z, Ae), z.side = Lr) : Nt(z, Z, Ae);
    }
    f = P.get(A), f.init(), g.push(f), A.traverseVisible(function(z) {
      z.isLight && z.layers.test(U.layers) && (f.pushLight(z), z.castShadow && f.pushShadow(z));
    }), f.setupLights(m.physicallyCorrectLights), A.traverse(function(z) {
      const Z = z.material;
      if (Z)
        if (Array.isArray(Z))
          for (let Ae = 0; Ae < Z.length; Ae++) {
            const De = Z[Ae];
            Y(De, A, z);
          }
        else
          Y(Z, A, z);
    }), g.pop(), f = null;
  };
  let q = null;
  function ie(A) {
    q && q(A);
  }
  function ge() {
    Ze.stop();
  }
  function we() {
    Ze.start();
  }
  const Ze = new Jc();
  Ze.setAnimationLoop(ie), typeof self < "u" && Ze.setContext(self), this.setAnimationLoop = function(A) {
    q = A, pe.setAnimationLoop(A), A === null ? Ze.stop() : Ze.start();
  }, pe.addEventListener("sessionstart", ge), pe.addEventListener("sessionend", we), this.render = function(A, U) {
    if (U !== void 0 && U.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (p === !0)
      return;
    A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), pe.enabled === !0 && pe.isPresenting === !0 && (pe.cameraAutoUpdate === !0 && pe.updateCamera(U), U = pe.getCamera()), A.isScene === !0 && A.onBeforeRender(m, A, U, x), f = P.get(A, g.length), f.init(), g.push(f), G.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), ee.setFromProjectionMatrix(G), te = this.localClippingEnabled, W = T.init(this.clippingPlanes, te, U), h = He.get(A, d.length), h.init(), d.push(h), pt(A, U, 0, m.sortObjects), h.finish(), m.sortObjects === !0 && h.sort(H, O), W === !0 && T.beginShadows();
    const Y = f.state.shadowsArray;
    if (V.render(Y, A, U), W === !0 && T.endShadows(), this.info.autoReset === !0 && this.info.reset(), ne.render(h, A), f.setupLights(m.physicallyCorrectLights), U.isArrayCamera) {
      const z = U.cameras;
      for (let Z = 0, Ae = z.length; Z < Ae; Z++) {
        const De = z[Z];
        Mt(h, A, De, De.viewport);
      }
    } else
      Mt(h, A, U);
    x !== null && ($.updateMultisampleRenderTarget(x), $.updateRenderTargetMipmap(x)), A.isScene === !0 && A.onAfterRender(m, A, U), N.resetDefaultState(), v = -1, w = null, g.pop(), g.length > 0 ? f = g[g.length - 1] : f = null, d.pop(), d.length > 0 ? h = d[d.length - 1] : h = null;
  };
  function pt(A, U, Y, z) {
    if (A.visible === !1)
      return;
    if (A.layers.test(U.layers)) {
      if (A.isGroup)
        Y = A.renderOrder;
      else if (A.isLOD)
        A.autoUpdate === !0 && A.update(U);
      else if (A.isLight)
        f.pushLight(A), A.castShadow && f.pushShadow(A);
      else if (A.isSprite) {
        if (!A.frustumCulled || ee.intersectsSprite(A)) {
          z && ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);
          const De = Ee.update(A), Oe = A.material;
          Oe.visible && h.push(A, De, Oe, Y, ae.z, null);
        }
      } else if ((A.isMesh || A.isLine || A.isPoints) && (A.isSkinnedMesh && A.skeleton.frame !== Ie.render.frame && (A.skeleton.update(), A.skeleton.frame = Ie.render.frame), !A.frustumCulled || ee.intersectsObject(A))) {
        z && ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);
        const De = Ee.update(A), Oe = A.material;
        if (Array.isArray(Oe)) {
          const Ne = De.groups;
          for (let We = 0, ke = Ne.length; We < ke; We++) {
            const Ve = Ne[We], st = Oe[Ve.materialIndex];
            st && st.visible && h.push(A, De, st, Y, ae.z, Ve);
          }
        } else
          Oe.visible && h.push(A, De, Oe, Y, ae.z, null);
      }
    }
    const Ae = A.children;
    for (let De = 0, Oe = Ae.length; De < Oe; De++)
      pt(Ae[De], U, Y, z);
  }
  function Mt(A, U, Y, z) {
    const Z = A.opaque, Ae = A.transmissive, De = A.transparent;
    f.setupLightsView(Y), Ae.length > 0 && Fn(Z, U, Y), z && ue.viewport(b.copy(z)), Z.length > 0 && tt(Z, U, Y), Ae.length > 0 && tt(Ae, U, Y), De.length > 0 && tt(De, U, Y), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function Fn(A, U, Y) {
    const z = Ce.isWebGL2;
    Q === null && (Q = new ti(1, 1, {
      generateMipmaps: !0,
      type: me.has("EXT_color_buffer_half_float") ? gn : ei,
      minFilter: Qn,
      samples: z && r === !0 ? 4 : 0
    })), m.getDrawingBufferSize(k), z ? Q.setSize(k.x, k.y) : Q.setSize(vs(k.x), vs(k.y));
    const Z = m.getRenderTarget();
    m.setRenderTarget(Q), m.clear();
    const Ae = m.toneMapping;
    m.toneMapping = _n, tt(A, U, Y), m.toneMapping = Ae, $.updateMultisampleRenderTarget(Q), $.updateRenderTargetMipmap(Q), m.setRenderTarget(Z);
  }
  function tt(A, U, Y) {
    const z = U.isScene === !0 ? U.overrideMaterial : null;
    for (let Z = 0, Ae = A.length; Z < Ae; Z++) {
      const De = A[Z], Oe = De.object, Ne = De.geometry, We = z === null ? De.material : z, ke = De.group;
      Oe.layers.test(Y.layers) && on(Oe, U, Y, Ne, We, ke);
    }
  }
  function on(A, U, Y, z, Z, Ae) {
    A.onBeforeRender(m, U, Y, z, Z, Ae), A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse, A.matrixWorld), A.normalMatrix.getNormalMatrix(A.modelViewMatrix), Z.onBeforeRender(m, U, Y, z, A, Ae), Z.transparent === !0 && Z.side === Lr ? (Z.side = Vt, Z.needsUpdate = !0, m.renderBufferDirect(Y, U, z, Z, A, Ae), Z.side = $n, Z.needsUpdate = !0, m.renderBufferDirect(Y, U, z, Z, A, Ae), Z.side = Lr) : m.renderBufferDirect(Y, U, z, Z, A, Ae), A.onAfterRender(m, U, Y, z, Z, Ae);
  }
  function Nt(A, U, Y) {
    U.isScene !== !0 && (U = re);
    const z = K.get(A), Z = f.state.lights, Ae = f.state.shadowsArray, De = Z.state.version, Oe = Te.getParameters(A, Z.state, Ae, U, Y), Ne = Te.getProgramCacheKey(Oe);
    let We = z.programs;
    z.environment = A.isMeshStandardMaterial ? U.environment : null, z.fog = U.fog, z.envMap = (A.isMeshStandardMaterial ? _e : oe).get(A.envMap || z.environment), We === void 0 && (A.addEventListener("dispose", Be), We = /* @__PURE__ */ new Map(), z.programs = We);
    let ke = We.get(Ne);
    if (ke !== void 0) {
      if (z.currentProgram === ke && z.lightsStateVersion === De)
        return Do(A, Oe), ke;
    } else
      Oe.uniforms = Te.getUniforms(A), A.onBuild(Y, Oe, m), A.onBeforeCompile(Oe, m), ke = Te.acquireProgram(Oe, Ne), We.set(Ne, ke), z.uniforms = Oe.uniforms;
    const Ve = z.uniforms;
    (!A.isShaderMaterial && !A.isRawShaderMaterial || A.clipping === !0) && (Ve.clippingPlanes = T.uniform), Do(A, Oe), z.needsLights = kh(A), z.lightsStateVersion = De, z.needsLights && (Ve.ambientLightColor.value = Z.state.ambient, Ve.lightProbe.value = Z.state.probe, Ve.directionalLights.value = Z.state.directional, Ve.directionalLightShadows.value = Z.state.directionalShadow, Ve.spotLights.value = Z.state.spot, Ve.spotLightShadows.value = Z.state.spotShadow, Ve.rectAreaLights.value = Z.state.rectArea, Ve.ltc_1.value = Z.state.rectAreaLTC1, Ve.ltc_2.value = Z.state.rectAreaLTC2, Ve.pointLights.value = Z.state.point, Ve.pointLightShadows.value = Z.state.pointShadow, Ve.hemisphereLights.value = Z.state.hemi, Ve.directionalShadowMap.value = Z.state.directionalShadowMap, Ve.directionalShadowMatrix.value = Z.state.directionalShadowMatrix, Ve.spotShadowMap.value = Z.state.spotShadowMap, Ve.spotLightMatrix.value = Z.state.spotLightMatrix, Ve.spotLightMap.value = Z.state.spotLightMap, Ve.pointShadowMap.value = Z.state.pointShadowMap, Ve.pointShadowMatrix.value = Z.state.pointShadowMatrix);
    const st = ke.getUniforms(), Pt = ps.seqWithValue(st.seq, Ve);
    return z.currentProgram = ke, z.uniformsList = Pt, ke;
  }
  function Do(A, U) {
    const Y = K.get(A);
    Y.outputEncoding = U.outputEncoding, Y.instancing = U.instancing, Y.skinning = U.skinning, Y.morphTargets = U.morphTargets, Y.morphNormals = U.morphNormals, Y.morphColors = U.morphColors, Y.morphTargetsCount = U.morphTargetsCount, Y.numClippingPlanes = U.numClippingPlanes, Y.numIntersection = U.numClipIntersection, Y.vertexAlphas = U.vertexAlphas, Y.vertexTangents = U.vertexTangents, Y.toneMapping = U.toneMapping;
  }
  function Uh(A, U, Y, z, Z) {
    U.isScene !== !0 && (U = re), $.resetTextureUnits();
    const Ae = U.fog, De = z.isMeshStandardMaterial ? U.environment : null, Oe = x === null ? m.outputEncoding : x.isXRRenderTarget === !0 ? x.texture.encoding : Dn, Ne = (z.isMeshStandardMaterial ? _e : oe).get(z.envMap || De), We = z.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4, ke = !!z.normalMap && !!Y.attributes.tangent, Ve = !!Y.morphAttributes.position, st = !!Y.morphAttributes.normal, Pt = !!Y.morphAttributes.color, ln = z.toneMapped ? m.toneMapping : _n, On = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, at = On !== void 0 ? On.length : 0, Ge = K.get(z), Is = f.state.lights;
    if (W === !0 && (te === !0 || A !== w)) {
      const Rt = A === w && z.id === v;
      T.setState(z, A, Rt);
    }
    let mt = !1;
    z.version === Ge.__version ? (Ge.needsLights && Ge.lightsStateVersion !== Is.state.version || Ge.outputEncoding !== Oe || Z.isInstancedMesh && Ge.instancing === !1 || !Z.isInstancedMesh && Ge.instancing === !0 || Z.isSkinnedMesh && Ge.skinning === !1 || !Z.isSkinnedMesh && Ge.skinning === !0 || Ge.envMap !== Ne || z.fog === !0 && Ge.fog !== Ae || Ge.numClippingPlanes !== void 0 && (Ge.numClippingPlanes !== T.numPlanes || Ge.numIntersection !== T.numIntersection) || Ge.vertexAlphas !== We || Ge.vertexTangents !== ke || Ge.morphTargets !== Ve || Ge.morphNormals !== st || Ge.morphColors !== Pt || Ge.toneMapping !== ln || Ce.isWebGL2 === !0 && Ge.morphTargetsCount !== at) && (mt = !0) : (mt = !0, Ge.__version = z.version);
    let Nn = Ge.currentProgram;
    mt === !0 && (Nn = Nt(z, U, Z));
    let Io = !1, Zi = !1, Fs = !1;
    const St = Nn.getUniforms(), zn = Ge.uniforms;
    if (ue.useProgram(Nn.program) && (Io = !0, Zi = !0, Fs = !0), z.id !== v && (v = z.id, Zi = !0), Io || w !== A) {
      if (St.setValue(X, "projectionMatrix", A.projectionMatrix), Ce.logarithmicDepthBuffer && St.setValue(
        X,
        "logDepthBufFC",
        2 / (Math.log(A.far + 1) / Math.LN2)
      ), w !== A && (w = A, Zi = !0, Fs = !0), z.isShaderMaterial || z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshStandardMaterial || z.envMap) {
        const Rt = St.map.cameraPosition;
        Rt !== void 0 && Rt.setValue(
          X,
          ae.setFromMatrixPosition(A.matrixWorld)
        );
      }
      (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && St.setValue(X, "isOrthographic", A.isOrthographicCamera === !0), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial || z.isShadowMaterial || Z.isSkinnedMesh) && St.setValue(X, "viewMatrix", A.matrixWorldInverse);
    }
    if (Z.isSkinnedMesh) {
      St.setOptional(X, Z, "bindMatrix"), St.setOptional(X, Z, "bindMatrixInverse");
      const Rt = Z.skeleton;
      Rt && (Ce.floatVertexTextures ? (Rt.boneTexture === null && Rt.computeBoneTexture(), St.setValue(X, "boneTexture", Rt.boneTexture, $), St.setValue(X, "boneTextureSize", Rt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Os = Y.morphAttributes;
    if ((Os.position !== void 0 || Os.normal !== void 0 || Os.color !== void 0 && Ce.isWebGL2 === !0) && se.update(Z, Y, z, Nn), (Zi || Ge.receiveShadow !== Z.receiveShadow) && (Ge.receiveShadow = Z.receiveShadow, St.setValue(X, "receiveShadow", Z.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (zn.envMap.value = Ne, zn.flipEnvMap.value = Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1), Zi && (St.setValue(X, "toneMappingExposure", m.toneMappingExposure), Ge.needsLights && Bh(zn, Fs), Ae && z.fog === !0 && Ke.refreshFogUniforms(zn, Ae), Ke.refreshMaterialUniforms(zn, z, I, C, Q), ps.upload(X, Ge.uniformsList, zn, $)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (ps.upload(X, Ge.uniformsList, zn, $), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && St.setValue(X, "center", Z.center), St.setValue(X, "modelViewMatrix", Z.modelViewMatrix), St.setValue(X, "normalMatrix", Z.normalMatrix), St.setValue(X, "modelMatrix", Z.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
      const Rt = z.uniformsGroups;
      for (let Ns = 0, Vh = Rt.length; Ns < Vh; Ns++)
        if (Ce.isWebGL2) {
          const Fo = Rt[Ns];
          de.update(Fo, Nn), de.bind(Fo, Nn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Nn;
  }
  function Bh(A, U) {
    A.ambientLightColor.needsUpdate = U, A.lightProbe.needsUpdate = U, A.directionalLights.needsUpdate = U, A.directionalLightShadows.needsUpdate = U, A.pointLights.needsUpdate = U, A.pointLightShadows.needsUpdate = U, A.spotLights.needsUpdate = U, A.spotLightShadows.needsUpdate = U, A.rectAreaLights.needsUpdate = U, A.hemisphereLights.needsUpdate = U;
  }
  function kh(A) {
    return A.isMeshLambertMaterial || A.isMeshToonMaterial || A.isMeshPhongMaterial || A.isMeshStandardMaterial || A.isShadowMaterial || A.isShaderMaterial && A.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return y;
  }, this.getActiveMipmapLevel = function() {
    return M;
  }, this.getRenderTarget = function() {
    return x;
  }, this.setRenderTargetTextures = function(A, U, Y) {
    K.get(A.texture).__webglTexture = U, K.get(A.depthTexture).__webglTexture = Y;
    const z = K.get(A);
    z.__hasExternalTextures = !0, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = Y === void 0, z.__autoAllocateDepthBuffer || me.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(A, U) {
    const Y = K.get(A);
    Y.__webglFramebuffer = U, Y.__useDefaultFramebuffer = U === void 0;
  }, this.setRenderTarget = function(A, U = 0, Y = 0) {
    x = A, y = U, M = Y;
    let z = !0, Z = null, Ae = !1, De = !1;
    if (A) {
      const Ne = K.get(A);
      Ne.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), z = !1) : Ne.__webglFramebuffer === void 0 ? $.setupRenderTarget(A) : Ne.__hasExternalTextures && $.rebindTextures(A, K.get(A.texture).__webglTexture, K.get(A.depthTexture).__webglTexture);
      const We = A.texture;
      (We.isData3DTexture || We.isDataArrayTexture || We.isCompressedArrayTexture) && (De = !0);
      const ke = K.get(A).__webglFramebuffer;
      A.isWebGLCubeRenderTarget ? (Z = ke[U], Ae = !0) : Ce.isWebGL2 && A.samples > 0 && $.useMultisampledRTT(A) === !1 ? Z = K.get(A).__webglMultisampledFramebuffer : Z = ke, b.copy(A.viewport), E.copy(A.scissor), _ = A.scissorTest;
    } else
      b.copy(D).multiplyScalar(I).floor(), E.copy(B).multiplyScalar(I).floor(), _ = J;
    if (ue.bindFramebuffer(36160, Z) && Ce.drawBuffers && z && ue.drawBuffers(A, Z), ue.viewport(b), ue.scissor(E), ue.setScissorTest(_), Ae) {
      const Ne = K.get(A.texture);
      X.framebufferTexture2D(36160, 36064, 34069 + U, Ne.__webglTexture, Y);
    } else if (De) {
      const Ne = K.get(A.texture), We = U || 0;
      X.framebufferTextureLayer(36160, 36064, Ne.__webglTexture, Y || 0, We);
    }
    v = -1;
  }, this.readRenderTargetPixels = function(A, U, Y, z, Z, Ae, De) {
    if (!(A && A.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Oe = K.get(A).__webglFramebuffer;
    if (A.isWebGLCubeRenderTarget && De !== void 0 && (Oe = Oe[De]), Oe) {
      ue.bindFramebuffer(36160, Oe);
      try {
        const Ne = A.texture, We = Ne.format, ke = Ne.type;
        if (We !== Bt && R.convert(We) !== X.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Ve = ke === gn && (me.has("EXT_color_buffer_half_float") || Ce.isWebGL2 && me.has("EXT_color_buffer_float"));
        if (ke !== ei && R.convert(ke) !== X.getParameter(35738) && !(ke === $t && (Ce.isWebGL2 || me.has("OES_texture_float") || me.has("WEBGL_color_buffer_float"))) && !Ve) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        U >= 0 && U <= A.width - z && Y >= 0 && Y <= A.height - Z && X.readPixels(U, Y, z, Z, R.convert(We), R.convert(ke), Ae);
      } finally {
        const Ne = x !== null ? K.get(x).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Ne);
      }
    }
  }, this.copyFramebufferToTexture = function(A, U, Y = 0) {
    const z = Math.pow(2, -Y), Z = Math.floor(U.image.width * z), Ae = Math.floor(U.image.height * z);
    $.setTexture2D(U, 0), X.copyTexSubImage2D(3553, Y, 0, 0, A.x, A.y, Z, Ae), ue.unbindTexture();
  }, this.copyTextureToTexture = function(A, U, Y, z = 0) {
    const Z = U.image.width, Ae = U.image.height, De = R.convert(Y.format), Oe = R.convert(Y.type);
    $.setTexture2D(Y, 0), X.pixelStorei(37440, Y.flipY), X.pixelStorei(37441, Y.premultiplyAlpha), X.pixelStorei(3317, Y.unpackAlignment), U.isDataTexture ? X.texSubImage2D(3553, z, A.x, A.y, Z, Ae, De, Oe, U.image.data) : U.isCompressedTexture ? X.compressedTexSubImage2D(3553, z, A.x, A.y, U.mipmaps[0].width, U.mipmaps[0].height, De, U.mipmaps[0].data) : X.texSubImage2D(3553, z, A.x, A.y, De, Oe, U.image), z === 0 && Y.generateMipmaps && X.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(A, U, Y, z, Z = 0) {
    if (m.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const Ae = A.max.x - A.min.x + 1, De = A.max.y - A.min.y + 1, Oe = A.max.z - A.min.z + 1, Ne = R.convert(z.format), We = R.convert(z.type);
    let ke;
    if (z.isData3DTexture)
      $.setTexture3D(z, 0), ke = 32879;
    else if (z.isDataArrayTexture)
      $.setTexture2DArray(z, 0), ke = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    X.pixelStorei(37440, z.flipY), X.pixelStorei(37441, z.premultiplyAlpha), X.pixelStorei(3317, z.unpackAlignment);
    const Ve = X.getParameter(3314), st = X.getParameter(32878), Pt = X.getParameter(3316), ln = X.getParameter(3315), On = X.getParameter(32877), at = Y.isCompressedTexture ? Y.mipmaps[0] : Y.image;
    X.pixelStorei(3314, at.width), X.pixelStorei(32878, at.height), X.pixelStorei(3316, A.min.x), X.pixelStorei(3315, A.min.y), X.pixelStorei(32877, A.min.z), Y.isDataTexture || Y.isData3DTexture ? X.texSubImage3D(ke, Z, U.x, U.y, U.z, Ae, De, Oe, Ne, We, at.data) : Y.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), X.compressedTexSubImage3D(ke, Z, U.x, U.y, U.z, Ae, De, Oe, Ne, at.data)) : X.texSubImage3D(ke, Z, U.x, U.y, U.z, Ae, De, Oe, Ne, We, at), X.pixelStorei(3314, Ve), X.pixelStorei(32878, st), X.pixelStorei(3316, Pt), X.pixelStorei(3315, ln), X.pixelStorei(32877, On), Z === 0 && z.generateMipmaps && X.generateMipmap(ke), ue.unbindTexture();
  }, this.initTexture = function(A) {
    A.isCubeTexture ? $.setTextureCube(A, 0) : A.isData3DTexture ? $.setTexture3D(A, 0) : A.isDataArrayTexture || A.isCompressedArrayTexture ? $.setTexture2DArray(A, 0) : $.setTexture2D(A, 0), ue.unbindTexture();
  }, this.resetState = function() {
    y = 0, M = 0, x = null, ue.reset(), N.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Kg extends th {
}
Kg.prototype.isWebGL1Renderer = !0;
class eo {
  constructor(e, t = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new Me(e), this.density = t;
  }
  clone() {
    return new eo(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class to {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Me(e), this.near = t, this.far = n;
  }
  clone() {
    return new to(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class nh extends $e {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class ih {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Pa, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Gt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Et = /* @__PURE__ */ new L();
class Vi {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Et.fromBufferAttribute(this, t), Et.applyMatrix4(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Et.fromBufferAttribute(this, t), Et.applyNormalMatrix(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Et.fromBufferAttribute(this, t), Et.transformDirection(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = xn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new ct(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Vi(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class rh extends yt {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let wi;
const ir = /* @__PURE__ */ new L(), Si = /* @__PURE__ */ new L(), Ti = /* @__PURE__ */ new L(), Ei = /* @__PURE__ */ new j(), rr = /* @__PURE__ */ new j(), sh = /* @__PURE__ */ new ye(), Jr = /* @__PURE__ */ new L(), sr = /* @__PURE__ */ new L(), Zr = /* @__PURE__ */ new L(), ql = /* @__PURE__ */ new j(), da = /* @__PURE__ */ new j(), Yl = /* @__PURE__ */ new j();
class jg extends $e {
  constructor(e) {
    if (super(), this.isSprite = !0, this.type = "Sprite", wi === void 0) {
      wi = new Je();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new ih(t, 5);
      wi.setIndex([0, 1, 2, 0, 2, 3]), wi.setAttribute("position", new Vi(n, 3, 0, !1)), wi.setAttribute("uv", new Vi(n, 2, 3, !1));
    }
    this.geometry = wi, this.material = e !== void 0 ? e : new rh(), this.center = new j(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Si.setFromMatrixScale(this.matrixWorld), sh.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ti.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Si.multiplyScalar(-Ti.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const s = this.center;
    $r(Jr.set(-0.5, -0.5, 0), Ti, s, Si, i, r), $r(sr.set(0.5, -0.5, 0), Ti, s, Si, i, r), $r(Zr.set(0.5, 0.5, 0), Ti, s, Si, i, r), ql.set(0, 0), da.set(1, 0), Yl.set(1, 1);
    let o = e.ray.intersectTriangle(Jr, sr, Zr, !1, ir);
    if (o === null && ($r(sr.set(-0.5, 0.5, 0), Ti, s, Si, i, r), da.set(0, 1), o = e.ray.intersectTriangle(Jr, Zr, sr, !1, ir), o === null))
      return;
    const l = e.ray.origin.distanceTo(ir);
    l < e.near || l > e.far || t.push({
      distance: l,
      point: ir.clone(),
      uv: Zt.getUV(ir, Jr, sr, Zr, ql, da, Yl, new j()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function $r(a, e, t, n, i, r) {
  Ei.subVectors(a, t).addScalar(0.5).multiply(n), i !== void 0 ? (rr.x = r * Ei.x - i * Ei.y, rr.y = i * Ei.x + r * Ei.y) : rr.copy(Ei), a.copy(e), a.x += rr.x, a.y += rr.y, a.applyMatrix4(sh);
}
const Kr = /* @__PURE__ */ new L(), Jl = /* @__PURE__ */ new L();
class Qg extends $e {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      },
      isLOD: {
        value: !0
      }
    }), this.autoUpdate = !0;
  }
  copy(e) {
    super.copy(e, !1);
    const t = e.levels;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      this.addLevel(r.object.clone(), r.distance, r.hysteresis);
    }
    return this.autoUpdate = e.autoUpdate, this;
  }
  addLevel(e, t = 0, n = 0) {
    t = Math.abs(t);
    const i = this.levels;
    let r;
    for (r = 0; r < i.length && !(t < i[r].distance); r++)
      ;
    return i.splice(r, 0, { distance: t, hysteresis: n, object: e }), this.add(e), this;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let n, i;
      for (n = 1, i = t.length; n < i; n++) {
        let r = t[n].distance;
        if (t[n].object.visible && (r -= r * t[n].hysteresis), e < r)
          break;
      }
      return t[n - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      Kr.setFromMatrixPosition(this.matrixWorld);
      const i = e.ray.origin.distanceTo(Kr);
      this.getObjectForDistance(i).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      Kr.setFromMatrixPosition(e.matrixWorld), Jl.setFromMatrixPosition(this.matrixWorld);
      const n = Kr.distanceTo(Jl) / e.zoom;
      t[0].object.visible = !0;
      let i, r;
      for (i = 1, r = t.length; i < r; i++) {
        let s = t[i].distance;
        if (t[i].object.visible && (s -= s * t[i].hysteresis), n >= s)
          t[i - 1].object.visible = !1, t[i].object.visible = !0;
        else
          break;
      }
      for (this._currentLevel = i - 1; i < r; i++)
        t[i].object.visible = !1;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    const n = this.levels;
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      t.object.levels.push({
        object: s.object.uuid,
        distance: s.distance,
        hysteresis: s.hysteresis
      });
    }
    return t;
  }
}
const Zl = /* @__PURE__ */ new L(), $l = /* @__PURE__ */ new Ye(), Kl = /* @__PURE__ */ new Ye(), e0 = /* @__PURE__ */ new L(), jl = /* @__PURE__ */ new ye();
class ah extends vt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ye(), this.bindMatrixInverse = new ye();
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ye(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    $l.fromBufferAttribute(i.attributes.skinIndex, e), Kl.fromBufferAttribute(i.attributes.skinWeight, e), Zl.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const s = Kl.getComponent(r);
      if (s !== 0) {
        const o = $l.getComponent(r);
        jl.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(e0.copy(Zl).applyMatrix4(jl), s);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class ys extends $e {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Jn extends rt {
  constructor(e = null, t = 1, n = 1, i, r, s, o, l, c = ut, u = ut, h, f) {
    super(null, s, o, l, c, u, i, r, h, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Ql = /* @__PURE__ */ new ye(), t0 = /* @__PURE__ */ new ye();
class As {
  constructor(e = [], t = []) {
    this.uuid = Gt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new ye());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new ye();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r] ? e[r].matrixWorld : t0;
      Ql.multiplyMatrices(o, t[r]), Ql.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new As(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Bc(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Jn(t, e, e, Bt, $t);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let s = t[r];
      s === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), s = new ys()), this.bones.push(s), this.boneInverses.push(new ye().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      e.bones.push(s.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class vr extends ct {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const ec = /* @__PURE__ */ new ye(), tc = /* @__PURE__ */ new ye(), jr = [], n0 = /* @__PURE__ */ new ye(), ar = /* @__PURE__ */ new vt();
class i0 extends vt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new vr(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, n0);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (ar.geometry = this.geometry, ar.material = this.material, ar.material !== void 0)
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, ec), tc.multiplyMatrices(n, ec), ar.matrixWorld = tc, ar.raycast(e, jr);
        for (let s = 0, o = jr.length; s < o; s++) {
          const l = jr[s];
          l.instanceId = r, l.object = this, t.push(l);
        }
        jr.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new vr(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Zn extends yt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Me(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const nc = /* @__PURE__ */ new L(), ic = /* @__PURE__ */ new L(), rc = /* @__PURE__ */ new ye(), pa = /* @__PURE__ */ new Ja(), Qr = /* @__PURE__ */ new Hi();
class Cs extends $e {
  constructor(e = new Je(), t = new Zn()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        nc.fromBufferAttribute(t, i - 1), ic.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += nc.distanceTo(ic);
      e.setAttribute("lineDistance", new Se(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Qr.copy(n.boundingSphere), Qr.applyMatrix4(i), Qr.radius += r, e.ray.intersectsSphere(Qr) === !1)
      return;
    rc.copy(i).invert(), pa.copy(e.ray).applyMatrix4(rc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new L(), u = new L(), h = new L(), f = new L(), d = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const y = Math.max(0, s.start), M = Math.min(g.count, s.start + s.count);
      for (let x = y, v = M - 1; x < v; x += d) {
        const w = g.getX(x), b = g.getX(x + 1);
        if (c.fromBufferAttribute(p, w), u.fromBufferAttribute(p, b), pa.distanceSqToSegment(c, u, f, h) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const _ = e.ray.origin.distanceTo(f);
        _ < e.near || _ > e.far || t.push({
          distance: _,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const y = Math.max(0, s.start), M = Math.min(p.count, s.start + s.count);
      for (let x = y, v = M - 1; x < v; x += d) {
        if (c.fromBufferAttribute(p, x), u.fromBufferAttribute(p, x + 1), pa.distanceSqToSegment(c, u, f, h) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const b = e.ray.origin.distanceTo(f);
        b < e.near || b > e.far || t.push({
          distance: b,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, s = i.length; r < s; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
const sc = /* @__PURE__ */ new L(), ac = /* @__PURE__ */ new L();
class Fa extends Cs {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        sc.fromBufferAttribute(t, i), ac.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + sc.distanceTo(ac);
      e.setAttribute("lineDistance", new Se(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class r0 extends Cs {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Di extends yt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const oc = /* @__PURE__ */ new ye(), Oa = /* @__PURE__ */ new Ja(), es = /* @__PURE__ */ new Hi(), ts = /* @__PURE__ */ new L();
class ms extends $e {
  constructor(e = new Je(), t = new Di()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), es.copy(n.boundingSphere), es.applyMatrix4(i), es.radius += r, e.ray.intersectsSphere(es) === !1)
      return;
    oc.copy(i).invert(), Oa.copy(e.ray).applyMatrix4(oc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, s.start), d = Math.min(c.count, s.start + s.count);
      for (let g = f, m = d; g < m; g++) {
        const p = c.getX(g);
        ts.fromBufferAttribute(h, p), lc(ts, p, l, i, e, t, this);
      }
    } else {
      const f = Math.max(0, s.start), d = Math.min(h.count, s.start + s.count);
      for (let g = f, m = d; g < m; g++)
        ts.fromBufferAttribute(h, g), lc(ts, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, s = i.length; r < s; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function lc(a, e, t, n, i, r, s) {
  const o = Oa.distanceSqToPoint(a);
  if (o < t) {
    const l = new L();
    Oa.closestPointToPoint(a, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far)
      return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: s
    });
  }
}
class oh extends rt {
  constructor(e, t, n, i, r, s, o, l, c) {
    super(e, t, n, i, r, s, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Kt {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), r = 0;
    t.push(0);
    for (let s = 1; s <= e; s++)
      n = this.getPoint(s / e), r += n.distanceTo(i), t.push(r), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let s;
    t ? s = t : s = e * n[r - 1];
    let o = 0, l = r - 1, c;
    for (; o <= l; )
      if (i = Math.floor(o + (l - o) / 2), c = n[i] - s, c < 0)
        o = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === s)
      return i / (r - 1);
    const u = n[i], f = n[i + 1] - u, d = (s - u) / f;
    return (i + d) / (r - 1);
  }
  getTangent(e, t) {
    let i = e - 1e-4, r = e + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const s = this.getPoint(i), o = this.getPoint(r), l = t || (s.isVector2 ? new j() : new L());
    return l.copy(o).sub(s).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new L(), i = [], r = [], s = [], o = new L(), l = new ye();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      i[d] = this.getTangentAt(g, new L());
    }
    r[0] = new L(), s[0] = new L();
    let c = Number.MAX_VALUE;
    const u = Math.abs(i[0].x), h = Math.abs(i[0].y), f = Math.abs(i[0].z);
    u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), s[0].crossVectors(i[0], r[0]);
    for (let d = 1; d <= e; d++) {
      if (r[d] = r[d - 1].clone(), s[d] = s[d - 1].clone(), o.crossVectors(i[d - 1], i[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(lt(i[d - 1].dot(i[d]), -1, 1));
        r[d].applyMatrix4(l.makeRotationAxis(o, g));
      }
      s[d].crossVectors(i[d], r[d]);
    }
    if (t === !0) {
      let d = Math.acos(lt(r[0].dot(r[e]), -1, 1));
      d /= e, i[0].dot(o.crossVectors(r[0], r[e])) > 0 && (d = -d);
      for (let g = 1; g <= e; g++)
        r[g].applyMatrix4(l.makeRotationAxis(i[g], d * g)), s[g].crossVectors(i[g], r[g]);
    }
    return {
      tangents: i,
      normals: r,
      binormals: s
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class no extends Kt {
  constructor(e = 0, t = 0, n = 1, i = 1, r = 0, s = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(e, t) {
    const n = t || new j(), i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const s = Math.abs(r) < Number.EPSILON;
    for (; r < 0; )
      r += i;
    for (; r > i; )
      r -= i;
    r < Number.EPSILON && (s ? r = 0 : r = i), this.aClockwise === !0 && !s && (r === i ? r = -i : r = r - i);
    const o = this.aStartAngle + e * r;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * u - d * h + this.aX, c = f * h + d * u + this.aY;
    }
    return n.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class s0 extends no {
  constructor(e, t, n, i, r, s) {
    super(e, t, n, n, i, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function io() {
  let a = 0, e = 0, t = 0, n = 0;
  function i(r, s, o, l) {
    a = r, e = o, t = -3 * r + 3 * s - 2 * o - l, n = 2 * r - 2 * s + o + l;
  }
  return {
    initCatmullRom: function(r, s, o, l, c) {
      i(s, o, c * (o - r), c * (l - s));
    },
    initNonuniformCatmullRom: function(r, s, o, l, c, u, h) {
      let f = (s - r) / c - (o - r) / (c + u) + (o - s) / u, d = (o - s) / u - (l - s) / (u + h) + (l - o) / h;
      f *= u, d *= u, i(s, o, f, d);
    },
    calc: function(r) {
      const s = r * r, o = s * r;
      return a + e * r + t * s + n * o;
    }
  };
}
const ns = /* @__PURE__ */ new L(), ma = /* @__PURE__ */ new io(), ga = /* @__PURE__ */ new io(), xa = /* @__PURE__ */ new io();
class a0 extends Kt {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(s), l = s - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : l === 0 && o === r - 1 && (o = r - 2, l = 1);
    let c, u;
    this.closed || o > 0 ? c = i[(o - 1) % r] : (ns.subVectors(i[0], i[1]).add(i[0]), c = ns);
    const h = i[o % r], f = i[(o + 1) % r];
    if (this.closed || o + 2 < r ? u = i[(o + 2) % r] : (ns.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), u = ns), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(h), d), m = Math.pow(h.distanceToSquared(f), d), p = Math.pow(f.distanceToSquared(u), d);
      m < 1e-4 && (m = 1), g < 1e-4 && (g = m), p < 1e-4 && (p = m), ma.initNonuniformCatmullRom(c.x, h.x, f.x, u.x, g, m, p), ga.initNonuniformCatmullRom(c.y, h.y, f.y, u.y, g, m, p), xa.initNonuniformCatmullRom(c.z, h.z, f.z, u.z, g, m, p);
    } else
      this.curveType === "catmullrom" && (ma.initCatmullRom(c.x, h.x, f.x, u.x, this.tension), ga.initCatmullRom(c.y, h.y, f.y, u.y, this.tension), xa.initCatmullRom(c.z, h.z, f.z, u.z, this.tension));
    return n.set(
      ma.calc(l),
      ga.calc(l),
      xa.calc(l)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new L().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function cc(a, e, t, n, i) {
  const r = (n - e) * 0.5, s = (i - t) * 0.5, o = a * a, l = a * o;
  return (2 * t - 2 * n + r + s) * l + (-3 * t + 3 * n - 2 * r - s) * o + r * a + t;
}
function o0(a, e) {
  const t = 1 - a;
  return t * t * e;
}
function l0(a, e) {
  return 2 * (1 - a) * a * e;
}
function c0(a, e) {
  return a * a * e;
}
function ur(a, e, t, n) {
  return o0(a, e) + l0(a, t) + c0(a, n);
}
function h0(a, e) {
  const t = 1 - a;
  return t * t * t * e;
}
function u0(a, e) {
  const t = 1 - a;
  return 3 * t * t * a * e;
}
function f0(a, e) {
  return 3 * (1 - a) * a * a * e;
}
function d0(a, e) {
  return a * a * a * e;
}
function fr(a, e, t, n, i) {
  return h0(a, e) + u0(a, t) + f0(a, n) + d0(a, i);
}
class lh extends Kt {
  constructor(e = new j(), t = new j(), n = new j(), i = new j()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2, o = this.v3;
    return n.set(
      fr(e, i.x, r.x, s.x, o.x),
      fr(e, i.y, r.y, s.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class p0 extends Kt {
  constructor(e = new L(), t = new L(), n = new L(), i = new L()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2, o = this.v3;
    return n.set(
      fr(e, i.x, r.x, s.x, o.x),
      fr(e, i.y, r.y, s.y, o.y),
      fr(e, i.z, r.z, s.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class ro extends Kt {
  constructor(e = new j(), t = new j()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new j()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    const n = t || new j();
    return n.copy(this.v2).sub(this.v1).normalize(), n;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class m0 extends Kt {
  constructor(e = new L(), t = new L()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new L()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class ch extends Kt {
  constructor(e = new j(), t = new j(), n = new j()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2;
    return n.set(
      ur(e, i.x, r.x, s.x),
      ur(e, i.y, r.y, s.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class hh extends Kt {
  constructor(e = new L(), t = new L(), n = new L()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, r = this.v1, s = this.v2;
    return n.set(
      ur(e, i.x, r.x, s.x),
      ur(e, i.y, r.y, s.y),
      ur(e, i.z, r.z, s.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class uh extends Kt {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new j()) {
    const n = t, i = this.points, r = (i.length - 1) * e, s = Math.floor(r), o = r - s, l = i[s === 0 ? s : s - 1], c = i[s], u = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
    return n.set(
      cc(o, l.x, c.x, u.x, h.x),
      cc(o, l.y, c.y, u.y, h.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new j().fromArray(i));
    }
    return this;
  }
}
var so = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: s0,
  CatmullRomCurve3: a0,
  CubicBezierCurve: lh,
  CubicBezierCurve3: p0,
  EllipseCurve: no,
  LineCurve: ro,
  LineCurve3: m0,
  QuadraticBezierCurve: ch,
  QuadraticBezierCurve3: hh,
  SplineCurve: uh
});
class g0 extends Kt {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new ro(t, e));
  }
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const s = i[r] - n, o = this.curves[r], l = o.getLength(), c = l === 0 ? 0 : 1 - s / l;
        return o.getPointAt(c, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const s = r[i], o = s.isEllipseCurve ? e * 2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? e * s.points.length : e, l = s.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        n && n.equals(u) || (t.push(u), n = u);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new so[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Na extends g0 {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new j(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new ro(this.currentPoint.clone(), new j(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const r = new ch(
      this.currentPoint.clone(),
      new j(e, t),
      new j(n, i)
    );
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, s) {
    const o = new lh(
      this.currentPoint.clone(),
      new j(e, t),
      new j(n, i),
      new j(r, s)
    );
    return this.curves.push(o), this.currentPoint.set(r, s), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new uh(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, r, s) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + l,
      n,
      i,
      r,
      s
    ), this;
  }
  absarc(e, t, n, i, r, s) {
    return this.absellipse(e, t, n, n, i, r, s), this;
  }
  ellipse(e, t, n, i, r, s, o, l) {
    const c = this.currentPoint.x, u = this.currentPoint.y;
    return this.absellipse(e + c, t + u, n, i, r, s, o, l), this;
  }
  absellipse(e, t, n, i, r, s, o, l) {
    const c = new no(e, t, n, i, r, s, o, l);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const u = c.getPoint(1);
    return this.currentPoint.copy(u), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Ls extends Je {
  constructor(e = [new j(0, -0.5), new j(0.5, 0), new j(0, 0.5)], t = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: e,
      segments: t,
      phiStart: n,
      phiLength: i
    }, t = Math.floor(t), i = lt(i, 0, Math.PI * 2);
    const r = [], s = [], o = [], l = [], c = [], u = 1 / t, h = new L(), f = new j(), d = new L(), g = new L(), m = new L();
    let p = 0, y = 0;
    for (let M = 0; M <= e.length - 1; M++)
      switch (M) {
        case 0:
          p = e[M + 1].x - e[M].x, y = e[M + 1].y - e[M].y, d.x = y * 1, d.y = -p, d.z = y * 0, m.copy(d), d.normalize(), l.push(d.x, d.y, d.z);
          break;
        case e.length - 1:
          l.push(m.x, m.y, m.z);
          break;
        default:
          p = e[M + 1].x - e[M].x, y = e[M + 1].y - e[M].y, d.x = y * 1, d.y = -p, d.z = y * 0, g.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), l.push(d.x, d.y, d.z), m.copy(g);
      }
    for (let M = 0; M <= t; M++) {
      const x = n + M * u * i, v = Math.sin(x), w = Math.cos(x);
      for (let b = 0; b <= e.length - 1; b++) {
        h.x = e[b].x * v, h.y = e[b].y, h.z = e[b].x * w, s.push(h.x, h.y, h.z), f.x = M / t, f.y = b / (e.length - 1), o.push(f.x, f.y);
        const E = l[3 * b + 0] * v, _ = l[3 * b + 1], S = l[3 * b + 0] * w;
        c.push(E, _, S);
      }
    }
    for (let M = 0; M < t; M++)
      for (let x = 0; x < e.length - 1; x++) {
        const v = x + M * e.length, w = v, b = v + e.length, E = v + e.length + 1, _ = v + 1;
        r.push(w, b, _), r.push(E, _, b);
      }
    this.setIndex(r), this.setAttribute("position", new Se(s, 3)), this.setAttribute("uv", new Se(o, 2)), this.setAttribute("normal", new Se(c, 3));
  }
  static fromJSON(e) {
    return new Ls(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class ao extends Ls {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    const r = new Na();
    r.absarc(0, -t / 2, e, Math.PI * 1.5, 0), r.absarc(0, t / 2, e, 0, Math.PI * 0.5), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: e,
      height: t,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(e) {
    return new ao(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class oo extends Je {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: e,
      segments: t,
      thetaStart: n,
      thetaLength: i
    }, t = Math.max(3, t);
    const r = [], s = [], o = [], l = [], c = new L(), u = new j();
    s.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5);
    for (let h = 0, f = 3; h <= t; h++, f += 3) {
      const d = n + h / t * i;
      c.x = e * Math.cos(d), c.y = e * Math.sin(d), s.push(c.x, c.y, c.z), o.push(0, 0, 1), u.x = (s[f] / e + 1) / 2, u.y = (s[f + 1] / e + 1) / 2, l.push(u.x, u.y);
    }
    for (let h = 1; h <= t; h++)
      r.push(h, h + 1, 0);
    this.setIndex(r), this.setAttribute("position", new Se(s, 3)), this.setAttribute("normal", new Se(o, 3)), this.setAttribute("uv", new Se(l, 2));
  }
  static fromJSON(e) {
    return new oo(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class Ps extends Je {
  constructor(e = 1, t = 1, n = 1, i = 32, r = 1, s = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: s,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    i = Math.floor(i), r = Math.floor(r);
    const u = [], h = [], f = [], d = [];
    let g = 0;
    const m = [], p = n / 2;
    let y = 0;
    M(), s === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(u), this.setAttribute("position", new Se(h, 3)), this.setAttribute("normal", new Se(f, 3)), this.setAttribute("uv", new Se(d, 2));
    function M() {
      const v = new L(), w = new L();
      let b = 0;
      const E = (t - e) / n;
      for (let _ = 0; _ <= r; _++) {
        const S = [], C = _ / r, I = C * (t - e) + e;
        for (let H = 0; H <= i; H++) {
          const O = H / i, D = O * l + o, B = Math.sin(D), J = Math.cos(D);
          w.x = I * B, w.y = -C * n + p, w.z = I * J, h.push(w.x, w.y, w.z), v.set(B, E, J).normalize(), f.push(v.x, v.y, v.z), d.push(O, 1 - C), S.push(g++);
        }
        m.push(S);
      }
      for (let _ = 0; _ < i; _++)
        for (let S = 0; S < r; S++) {
          const C = m[S][_], I = m[S + 1][_], H = m[S + 1][_ + 1], O = m[S][_ + 1];
          u.push(C, I, O), u.push(I, H, O), b += 6;
        }
      c.addGroup(y, b, 0), y += b;
    }
    function x(v) {
      const w = g, b = new j(), E = new L();
      let _ = 0;
      const S = v === !0 ? e : t, C = v === !0 ? 1 : -1;
      for (let H = 1; H <= i; H++)
        h.push(0, p * C, 0), f.push(0, C, 0), d.push(0.5, 0.5), g++;
      const I = g;
      for (let H = 0; H <= i; H++) {
        const D = H / i * l + o, B = Math.cos(D), J = Math.sin(D);
        E.x = S * J, E.y = p * C, E.z = S * B, h.push(E.x, E.y, E.z), f.push(0, C, 0), b.x = B * 0.5 + 0.5, b.y = J * 0.5 * C + 0.5, d.push(b.x, b.y), g++;
      }
      for (let H = 0; H < i; H++) {
        const O = w + H, D = I + H;
        v === !0 ? u.push(D, D + 1, O) : u.push(D + 1, D, O), _ += 3;
      }
      c.addGroup(y, _, v === !0 ? 1 : 2), y += _;
    }
  }
  static fromJSON(e) {
    return new Ps(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class lo extends Ps {
  constructor(e = 1, t = 1, n = 32, i = 1, r = !1, s = 0, o = Math.PI * 2) {
    super(0, e, t, n, i, r, s, o), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: r,
      thetaStart: s,
      thetaLength: o
    };
  }
  static fromJSON(e) {
    return new lo(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class si extends Je {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const r = [], s = [];
    o(i), c(n), u(), this.setAttribute("position", new Se(r, 3)), this.setAttribute("normal", new Se(r.slice(), 3)), this.setAttribute("uv", new Se(s, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(M) {
      const x = new L(), v = new L(), w = new L();
      for (let b = 0; b < t.length; b += 3)
        d(t[b + 0], x), d(t[b + 1], v), d(t[b + 2], w), l(x, v, w, M);
    }
    function l(M, x, v, w) {
      const b = w + 1, E = [];
      for (let _ = 0; _ <= b; _++) {
        E[_] = [];
        const S = M.clone().lerp(v, _ / b), C = x.clone().lerp(v, _ / b), I = b - _;
        for (let H = 0; H <= I; H++)
          H === 0 && _ === b ? E[_][H] = S : E[_][H] = S.clone().lerp(C, H / I);
      }
      for (let _ = 0; _ < b; _++)
        for (let S = 0; S < 2 * (b - _) - 1; S++) {
          const C = Math.floor(S / 2);
          S % 2 === 0 ? (f(E[_][C + 1]), f(E[_ + 1][C]), f(E[_][C])) : (f(E[_][C + 1]), f(E[_ + 1][C + 1]), f(E[_ + 1][C]));
        }
    }
    function c(M) {
      const x = new L();
      for (let v = 0; v < r.length; v += 3)
        x.x = r[v + 0], x.y = r[v + 1], x.z = r[v + 2], x.normalize().multiplyScalar(M), r[v + 0] = x.x, r[v + 1] = x.y, r[v + 2] = x.z;
    }
    function u() {
      const M = new L();
      for (let x = 0; x < r.length; x += 3) {
        M.x = r[x + 0], M.y = r[x + 1], M.z = r[x + 2];
        const v = p(M) / 2 / Math.PI + 0.5, w = y(M) / Math.PI + 0.5;
        s.push(v, 1 - w);
      }
      g(), h();
    }
    function h() {
      for (let M = 0; M < s.length; M += 6) {
        const x = s[M + 0], v = s[M + 2], w = s[M + 4], b = Math.max(x, v, w), E = Math.min(x, v, w);
        b > 0.9 && E < 0.1 && (x < 0.2 && (s[M + 0] += 1), v < 0.2 && (s[M + 2] += 1), w < 0.2 && (s[M + 4] += 1));
      }
    }
    function f(M) {
      r.push(M.x, M.y, M.z);
    }
    function d(M, x) {
      const v = M * 3;
      x.x = e[v + 0], x.y = e[v + 1], x.z = e[v + 2];
    }
    function g() {
      const M = new L(), x = new L(), v = new L(), w = new L(), b = new j(), E = new j(), _ = new j();
      for (let S = 0, C = 0; S < r.length; S += 9, C += 6) {
        M.set(r[S + 0], r[S + 1], r[S + 2]), x.set(r[S + 3], r[S + 4], r[S + 5]), v.set(r[S + 6], r[S + 7], r[S + 8]), b.set(s[C + 0], s[C + 1]), E.set(s[C + 2], s[C + 3]), _.set(s[C + 4], s[C + 5]), w.copy(M).add(x).add(v).divideScalar(3);
        const I = p(w);
        m(b, C + 0, M, I), m(E, C + 2, x, I), m(_, C + 4, v, I);
      }
    }
    function m(M, x, v, w) {
      w < 0 && M.x === 1 && (s[x] = M.x - 1), v.x === 0 && v.z === 0 && (s[x] = w / 2 / Math.PI + 0.5);
    }
    function p(M) {
      return Math.atan2(M.z, -M.x);
    }
    function y(M) {
      return Math.atan2(-M.y, Math.sqrt(M.x * M.x + M.z * M.z));
    }
  }
  static fromJSON(e) {
    return new si(e.vertices, e.indices, e.radius, e.details);
  }
}
class co extends si {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, r = [
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      0,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      0,
      -n,
      0,
      -i,
      n,
      0,
      -i,
      -n,
      0,
      i,
      n,
      0,
      i
    ], s = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(r, s, e, t), this.type = "DodecahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new co(e.radius, e.detail);
  }
}
const is = /* @__PURE__ */ new L(), rs = /* @__PURE__ */ new L(), _a = /* @__PURE__ */ new L(), ss = /* @__PURE__ */ new Zt();
class x0 extends Je {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: e,
      thresholdAngle: t
    }, e !== null) {
      const i = Math.pow(10, 4), r = Math.cos(zi * t), s = e.getIndex(), o = e.getAttribute("position"), l = s ? s.count : o.count, c = [0, 0, 0], u = ["a", "b", "c"], h = new Array(3), f = {}, d = [];
      for (let g = 0; g < l; g += 3) {
        s ? (c[0] = s.getX(g), c[1] = s.getX(g + 1), c[2] = s.getX(g + 2)) : (c[0] = g, c[1] = g + 1, c[2] = g + 2);
        const { a: m, b: p, c: y } = ss;
        if (m.fromBufferAttribute(o, c[0]), p.fromBufferAttribute(o, c[1]), y.fromBufferAttribute(o, c[2]), ss.getNormal(_a), h[0] = `${Math.round(m.x * i)},${Math.round(m.y * i)},${Math.round(m.z * i)}`, h[1] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, h[2] = `${Math.round(y.x * i)},${Math.round(y.y * i)},${Math.round(y.z * i)}`, !(h[0] === h[1] || h[1] === h[2] || h[2] === h[0]))
          for (let M = 0; M < 3; M++) {
            const x = (M + 1) % 3, v = h[M], w = h[x], b = ss[u[M]], E = ss[u[x]], _ = `${v}_${w}`, S = `${w}_${v}`;
            S in f && f[S] ? (_a.dot(f[S].normal) <= r && (d.push(b.x, b.y, b.z), d.push(E.x, E.y, E.z)), f[S] = null) : _ in f || (f[_] = {
              index0: c[M],
              index1: c[x],
              normal: _a.clone()
            });
          }
      }
      for (const g in f)
        if (f[g]) {
          const { index0: m, index1: p } = f[g];
          is.fromBufferAttribute(o, m), rs.fromBufferAttribute(o, p), d.push(is.x, is.y, is.z), d.push(rs.x, rs.y, rs.z);
        }
      this.setAttribute("position", new Se(d, 3));
    }
  }
}
class ho extends Na {
  constructor(e) {
    super(e), this.uuid = Gt(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new Na().fromJSON(i));
    }
    return this;
  }
}
const _0 = {
  triangulate: function(a, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : a.length;
    let r = fh(a, 0, i, t, !0);
    const s = [];
    if (!r || r.next === r.prev)
      return s;
    let o, l, c, u, h, f, d;
    if (n && (r = w0(a, e, r, t)), a.length > 80 * t) {
      o = c = a[0], l = u = a[1];
      for (let g = t; g < i; g += t)
        h = a[g], f = a[g + 1], h < o && (o = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
      d = Math.max(c - o, u - l), d = d !== 0 ? 32767 / d : 0;
    }
    return yr(r, s, t, o, l, d, 0), s;
  }
};
function fh(a, e, t, n, i) {
  let r, s;
  if (i === F0(a, e, t, n) > 0)
    for (r = e; r < t; r += n)
      s = hc(r, a[r], a[r + 1], s);
  else
    for (r = t - n; r >= e; r -= n)
      s = hc(r, a[r], a[r + 1], s);
  return s && Rs(s, s.next) && (br(s), s = s.next), s;
}
function ni(a, e) {
  if (!a)
    return a;
  e || (e = a);
  let t = a, n;
  do
    if (n = !1, !t.steiner && (Rs(t, t.next) || nt(t.prev, t, t.next) === 0)) {
      if (br(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function yr(a, e, t, n, i, r, s) {
  if (!a)
    return;
  !s && r && C0(a, n, i, r);
  let o = a, l, c;
  for (; a.prev !== a.next; ) {
    if (l = a.prev, c = a.next, r ? y0(a, n, i, r) : v0(a)) {
      e.push(l.i / t | 0), e.push(a.i / t | 0), e.push(c.i / t | 0), br(a), a = c.next, o = c.next;
      continue;
    }
    if (a = c, a === o) {
      s ? s === 1 ? (a = M0(ni(a), e, t), yr(a, e, t, n, i, r, 2)) : s === 2 && b0(a, e, t, n, i, r) : yr(ni(a), e, t, n, i, r, 1);
      break;
    }
  }
}
function v0(a) {
  const e = a.prev, t = a, n = a.next;
  if (nt(e, t, n) >= 0)
    return !1;
  const i = e.x, r = t.x, s = n.x, o = e.y, l = t.y, c = n.y, u = i < r ? i < s ? i : s : r < s ? r : s, h = o < l ? o < c ? o : c : l < c ? l : c, f = i > r ? i > s ? i : s : r > s ? r : s, d = o > l ? o > c ? o : c : l > c ? l : c;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= u && g.x <= f && g.y >= h && g.y <= d && Ii(i, o, r, l, s, c, g.x, g.y) && nt(g.prev, g, g.next) >= 0)
      return !1;
    g = g.next;
  }
  return !0;
}
function y0(a, e, t, n) {
  const i = a.prev, r = a, s = a.next;
  if (nt(i, r, s) >= 0)
    return !1;
  const o = i.x, l = r.x, c = s.x, u = i.y, h = r.y, f = s.y, d = o < l ? o < c ? o : c : l < c ? l : c, g = u < h ? u < f ? u : f : h < f ? h : f, m = o > l ? o > c ? o : c : l > c ? l : c, p = u > h ? u > f ? u : f : h > f ? h : f, y = za(d, g, e, t, n), M = za(m, p, e, t, n);
  let x = a.prevZ, v = a.nextZ;
  for (; x && x.z >= y && v && v.z <= M; ) {
    if (x.x >= d && x.x <= m && x.y >= g && x.y <= p && x !== i && x !== s && Ii(o, u, l, h, c, f, x.x, x.y) && nt(x.prev, x, x.next) >= 0 || (x = x.prevZ, v.x >= d && v.x <= m && v.y >= g && v.y <= p && v !== i && v !== s && Ii(o, u, l, h, c, f, v.x, v.y) && nt(v.prev, v, v.next) >= 0))
      return !1;
    v = v.nextZ;
  }
  for (; x && x.z >= y; ) {
    if (x.x >= d && x.x <= m && x.y >= g && x.y <= p && x !== i && x !== s && Ii(o, u, l, h, c, f, x.x, x.y) && nt(x.prev, x, x.next) >= 0)
      return !1;
    x = x.prevZ;
  }
  for (; v && v.z <= M; ) {
    if (v.x >= d && v.x <= m && v.y >= g && v.y <= p && v !== i && v !== s && Ii(o, u, l, h, c, f, v.x, v.y) && nt(v.prev, v, v.next) >= 0)
      return !1;
    v = v.nextZ;
  }
  return !0;
}
function M0(a, e, t) {
  let n = a;
  do {
    const i = n.prev, r = n.next.next;
    !Rs(i, r) && dh(i, n, n.next, r) && Mr(i, r) && Mr(r, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(r.i / t | 0), br(n), br(n.next), n = a = r), n = n.next;
  } while (n !== a);
  return ni(n);
}
function b0(a, e, t, n, i, r) {
  let s = a;
  do {
    let o = s.next.next;
    for (; o !== s.prev; ) {
      if (s.i !== o.i && R0(s, o)) {
        let l = ph(s, o);
        s = ni(s, s.next), l = ni(l, l.next), yr(s, e, t, n, i, r, 0), yr(l, e, t, n, i, r, 0);
        return;
      }
      o = o.next;
    }
    s = s.next;
  } while (s !== a);
}
function w0(a, e, t, n) {
  const i = [];
  let r, s, o, l, c;
  for (r = 0, s = e.length; r < s; r++)
    o = e[r] * n, l = r < s - 1 ? e[r + 1] * n : a.length, c = fh(a, o, l, n, !1), c === c.next && (c.steiner = !0), i.push(P0(c));
  for (i.sort(S0), r = 0; r < i.length; r++)
    t = T0(i[r], t);
  return t;
}
function S0(a, e) {
  return a.x - e.x;
}
function T0(a, e) {
  const t = E0(a, e);
  if (!t)
    return e;
  const n = ph(t, a);
  return ni(n, n.next), ni(t, t.next);
}
function E0(a, e) {
  let t = e, n = -1 / 0, i;
  const r = a.x, s = a.y;
  do {
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const f = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (f <= r && f > n && (n = f, i = t.x < t.next.x ? t : t.next, f === r))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i)
    return null;
  const o = i, l = i.x, c = i.y;
  let u = 1 / 0, h;
  t = i;
  do
    r >= t.x && t.x >= l && r !== t.x && Ii(s < c ? r : n, s, l, c, s < c ? n : r, s, t.x, t.y) && (h = Math.abs(s - t.y) / (r - t.x), Mr(t, a) && (h < u || h === u && (t.x > i.x || t.x === i.x && A0(i, t))) && (i = t, u = h)), t = t.next;
  while (t !== o);
  return i;
}
function A0(a, e) {
  return nt(a.prev, a, e.prev) < 0 && nt(e.next, a, a.next) < 0;
}
function C0(a, e, t, n) {
  let i = a;
  do
    i.z === 0 && (i.z = za(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== a);
  i.prevZ.nextZ = null, i.prevZ = null, L0(i);
}
function L0(a) {
  let e, t, n, i, r, s, o, l, c = 1;
  do {
    for (t = a, a = null, r = null, s = 0; t; ) {
      for (s++, n = t, o = 0, e = 0; e < c && (o++, n = n.nextZ, !!n); e++)
        ;
      for (l = c; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : a = i, i.prevZ = r, r = i;
      t = n;
    }
    r.nextZ = null, c *= 2;
  } while (s > 1);
  return a;
}
function za(a, e, t, n, i) {
  return a = (a - t) * i | 0, e = (e - n) * i | 0, a = (a | a << 8) & 16711935, a = (a | a << 4) & 252645135, a = (a | a << 2) & 858993459, a = (a | a << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, a | e << 1;
}
function P0(a) {
  let e = a, t = a;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== a);
  return t;
}
function Ii(a, e, t, n, i, r, s, o) {
  return (i - s) * (e - o) >= (a - s) * (r - o) && (a - s) * (n - o) >= (t - s) * (e - o) && (t - s) * (r - o) >= (i - s) * (n - o);
}
function R0(a, e) {
  return a.next.i !== e.i && a.prev.i !== e.i && !D0(a, e) && (Mr(a, e) && Mr(e, a) && I0(a, e) && (nt(a.prev, a, e.prev) || nt(a, e.prev, e)) || Rs(a, e) && nt(a.prev, a, a.next) > 0 && nt(e.prev, e, e.next) > 0);
}
function nt(a, e, t) {
  return (e.y - a.y) * (t.x - e.x) - (e.x - a.x) * (t.y - e.y);
}
function Rs(a, e) {
  return a.x === e.x && a.y === e.y;
}
function dh(a, e, t, n) {
  const i = os(nt(a, e, t)), r = os(nt(a, e, n)), s = os(nt(t, n, a)), o = os(nt(t, n, e));
  return !!(i !== r && s !== o || i === 0 && as(a, t, e) || r === 0 && as(a, n, e) || s === 0 && as(t, a, n) || o === 0 && as(t, e, n));
}
function as(a, e, t) {
  return e.x <= Math.max(a.x, t.x) && e.x >= Math.min(a.x, t.x) && e.y <= Math.max(a.y, t.y) && e.y >= Math.min(a.y, t.y);
}
function os(a) {
  return a > 0 ? 1 : a < 0 ? -1 : 0;
}
function D0(a, e) {
  let t = a;
  do {
    if (t.i !== a.i && t.next.i !== a.i && t.i !== e.i && t.next.i !== e.i && dh(t, t.next, a, e))
      return !0;
    t = t.next;
  } while (t !== a);
  return !1;
}
function Mr(a, e) {
  return nt(a.prev, a, a.next) < 0 ? nt(a, e, a.next) >= 0 && nt(a, a.prev, e) >= 0 : nt(a, e, a.prev) < 0 || nt(a, a.next, e) < 0;
}
function I0(a, e) {
  let t = a, n = !1;
  const i = (a.x + e.x) / 2, r = (a.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== a);
  return n;
}
function ph(a, e) {
  const t = new Ua(a.i, a.x, a.y), n = new Ua(e.i, e.x, e.y), i = a.next, r = e.prev;
  return a.next = e, e.prev = a, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n;
}
function hc(a, e, t, n) {
  const i = new Ua(a, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function br(a) {
  a.next.prev = a.prev, a.prev.next = a.next, a.prevZ && (a.prevZ.nextZ = a.nextZ), a.nextZ && (a.nextZ.prevZ = a.prevZ);
}
function Ua(a, e, t) {
  this.i = a, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function F0(a, e, t, n) {
  let i = 0;
  for (let r = e, s = t - n; r < t; r += n)
    i += (a[s] - a[r]) * (a[r + 1] + a[s + 1]), s = r;
  return i;
}
class Rn {
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++)
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Rn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], r = [];
    uc(e), fc(n, e);
    let s = e.length;
    t.forEach(uc);
    for (let l = 0; l < t.length; l++)
      i.push(s), s += t[l].length, fc(n, t[l]);
    const o = _0.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3)
      r.push(o.slice(l, l + 3));
    return r;
  }
}
function uc(a) {
  const e = a.length;
  e > 2 && a[e - 1].equals(a[0]) && a.pop();
}
function fc(a, e) {
  for (let t = 0; t < e.length; t++)
    a.push(e[t].x), a.push(e[t].y);
}
class uo extends Je {
  constructor(e = new ho([new j(0.5, 0.5), new j(-0.5, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, i = [], r = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      s(c);
    }
    this.setAttribute("position", new Se(i, 3)), this.setAttribute("uv", new Se(r, 2)), this.computeVertexNormals();
    function s(o) {
      const l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1;
      let f = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, d = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, g = t.bevelSize !== void 0 ? t.bevelSize : d - 0.1, m = t.bevelOffset !== void 0 ? t.bevelOffset : 0, p = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const y = t.extrudePath, M = t.UVGenerator !== void 0 ? t.UVGenerator : O0;
      let x, v = !1, w, b, E, _;
      y && (x = y.getSpacedPoints(u), v = !0, f = !1, w = y.computeFrenetFrames(u, !1), b = new L(), E = new L(), _ = new L()), f || (p = 0, d = 0, g = 0, m = 0);
      const S = o.extractPoints(c);
      let C = S.shape;
      const I = S.holes;
      if (!Rn.isClockWise(C)) {
        C = C.reverse();
        for (let K = 0, $ = I.length; K < $; K++) {
          const oe = I[K];
          Rn.isClockWise(oe) && (I[K] = oe.reverse());
        }
      }
      const O = Rn.triangulateShape(C, I), D = C;
      for (let K = 0, $ = I.length; K < $; K++) {
        const oe = I[K];
        C = C.concat(oe);
      }
      function B(K, $, oe) {
        return $ || console.error("THREE.ExtrudeGeometry: vec does not exist"), $.clone().multiplyScalar(oe).add(K);
      }
      const J = C.length, ee = O.length;
      function W(K, $, oe) {
        let _e, ce, Re;
        const Ee = K.x - $.x, Te = K.y - $.y, Ke = oe.x - K.x, He = oe.y - K.y, P = Ee * Ee + Te * Te, T = Ee * He - Te * Ke;
        if (Math.abs(T) > Number.EPSILON) {
          const V = Math.sqrt(P), ne = Math.sqrt(Ke * Ke + He * He), se = $.x - Te / V, fe = $.y + Ee / V, Le = oe.x - He / ne, R = oe.y + Ke / ne, N = ((Le - se) * He - (R - fe) * Ke) / (Ee * He - Te * Ke);
          _e = se + Ee * N - K.x, ce = fe + Te * N - K.y;
          const de = _e * _e + ce * ce;
          if (de <= 2)
            return new j(_e, ce);
          Re = Math.sqrt(de / 2);
        } else {
          let V = !1;
          Ee > Number.EPSILON ? Ke > Number.EPSILON && (V = !0) : Ee < -Number.EPSILON ? Ke < -Number.EPSILON && (V = !0) : Math.sign(Te) === Math.sign(He) && (V = !0), V ? (_e = -Te, ce = Ee, Re = Math.sqrt(P)) : (_e = Ee, ce = Te, Re = Math.sqrt(P / 2));
        }
        return new j(_e / Re, ce / Re);
      }
      const te = [];
      for (let K = 0, $ = D.length, oe = $ - 1, _e = K + 1; K < $; K++, oe++, _e++)
        oe === $ && (oe = 0), _e === $ && (_e = 0), te[K] = W(D[K], D[oe], D[_e]);
      const Q = [];
      let G, k = te.concat();
      for (let K = 0, $ = I.length; K < $; K++) {
        const oe = I[K];
        G = [];
        for (let _e = 0, ce = oe.length, Re = ce - 1, Ee = _e + 1; _e < ce; _e++, Re++, Ee++)
          Re === ce && (Re = 0), Ee === ce && (Ee = 0), G[_e] = W(oe[_e], oe[Re], oe[Ee]);
        Q.push(G), k = k.concat(G);
      }
      for (let K = 0; K < p; K++) {
        const $ = K / p, oe = d * Math.cos($ * Math.PI / 2), _e = g * Math.sin($ * Math.PI / 2) + m;
        for (let ce = 0, Re = D.length; ce < Re; ce++) {
          const Ee = B(D[ce], te[ce], _e);
          Pe(Ee.x, Ee.y, -oe);
        }
        for (let ce = 0, Re = I.length; ce < Re; ce++) {
          const Ee = I[ce];
          G = Q[ce];
          for (let Te = 0, Ke = Ee.length; Te < Ke; Te++) {
            const He = B(Ee[Te], G[Te], _e);
            Pe(He.x, He.y, -oe);
          }
        }
      }
      const ae = g + m;
      for (let K = 0; K < J; K++) {
        const $ = f ? B(C[K], k[K], ae) : C[K];
        v ? (E.copy(w.normals[0]).multiplyScalar($.x), b.copy(w.binormals[0]).multiplyScalar($.y), _.copy(x[0]).add(E).add(b), Pe(_.x, _.y, _.z)) : Pe($.x, $.y, 0);
      }
      for (let K = 1; K <= u; K++)
        for (let $ = 0; $ < J; $++) {
          const oe = f ? B(C[$], k[$], ae) : C[$];
          v ? (E.copy(w.normals[K]).multiplyScalar(oe.x), b.copy(w.binormals[K]).multiplyScalar(oe.y), _.copy(x[K]).add(E).add(b), Pe(_.x, _.y, _.z)) : Pe(oe.x, oe.y, h / u * K);
        }
      for (let K = p - 1; K >= 0; K--) {
        const $ = K / p, oe = d * Math.cos($ * Math.PI / 2), _e = g * Math.sin($ * Math.PI / 2) + m;
        for (let ce = 0, Re = D.length; ce < Re; ce++) {
          const Ee = B(D[ce], te[ce], _e);
          Pe(Ee.x, Ee.y, h + oe);
        }
        for (let ce = 0, Re = I.length; ce < Re; ce++) {
          const Ee = I[ce];
          G = Q[ce];
          for (let Te = 0, Ke = Ee.length; Te < Ke; Te++) {
            const He = B(Ee[Te], G[Te], _e);
            v ? Pe(He.x, He.y + x[u - 1].y, x[u - 1].x + oe) : Pe(He.x, He.y, h + oe);
          }
        }
      }
      re(), le();
      function re() {
        const K = i.length / 3;
        if (f) {
          let $ = 0, oe = J * $;
          for (let _e = 0; _e < ee; _e++) {
            const ce = O[_e];
            me(ce[2] + oe, ce[1] + oe, ce[0] + oe);
          }
          $ = u + p * 2, oe = J * $;
          for (let _e = 0; _e < ee; _e++) {
            const ce = O[_e];
            me(ce[0] + oe, ce[1] + oe, ce[2] + oe);
          }
        } else {
          for (let $ = 0; $ < ee; $++) {
            const oe = O[$];
            me(oe[2], oe[1], oe[0]);
          }
          for (let $ = 0; $ < ee; $++) {
            const oe = O[$];
            me(oe[0] + J * u, oe[1] + J * u, oe[2] + J * u);
          }
        }
        n.addGroup(K, i.length / 3 - K, 0);
      }
      function le() {
        const K = i.length / 3;
        let $ = 0;
        X(D, $), $ += D.length;
        for (let oe = 0, _e = I.length; oe < _e; oe++) {
          const ce = I[oe];
          X(ce, $), $ += ce.length;
        }
        n.addGroup(K, i.length / 3 - K, 1);
      }
      function X(K, $) {
        let oe = K.length;
        for (; --oe >= 0; ) {
          const _e = oe;
          let ce = oe - 1;
          ce < 0 && (ce = K.length - 1);
          for (let Re = 0, Ee = u + p * 2; Re < Ee; Re++) {
            const Te = J * Re, Ke = J * (Re + 1), He = $ + _e + Te, P = $ + ce + Te, T = $ + ce + Ke, V = $ + _e + Ke;
            Ce(He, P, T, V);
          }
        }
      }
      function Pe(K, $, oe) {
        l.push(K), l.push($), l.push(oe);
      }
      function me(K, $, oe) {
        ue(K), ue($), ue(oe);
        const _e = i.length / 3, ce = M.generateTopUV(n, i, _e - 3, _e - 2, _e - 1);
        Ie(ce[0]), Ie(ce[1]), Ie(ce[2]);
      }
      function Ce(K, $, oe, _e) {
        ue(K), ue($), ue(_e), ue($), ue(oe), ue(_e);
        const ce = i.length / 3, Re = M.generateSideWallUV(n, i, ce - 6, ce - 3, ce - 2, ce - 1);
        Ie(Re[0]), Ie(Re[1]), Ie(Re[3]), Ie(Re[1]), Ie(Re[2]), Ie(Re[3]);
      }
      function ue(K) {
        i.push(l[K * 3 + 0]), i.push(l[K * 3 + 1]), i.push(l[K * 3 + 2]);
      }
      function Ie(K) {
        r.push(K.x), r.push(K.y);
      }
    }
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return N0(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let r = 0, s = e.shapes.length; r < s; r++) {
      const o = t[e.shapes[r]];
      n.push(o);
    }
    const i = e.options.extrudePath;
    return i !== void 0 && (e.options.extrudePath = new so[i.type]().fromJSON(i)), new uo(n, e.options);
  }
}
const O0 = {
  generateTopUV: function(a, e, t, n, i) {
    const r = e[t * 3], s = e[t * 3 + 1], o = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], u = e[i * 3 + 1];
    return [
      new j(r, s),
      new j(o, l),
      new j(c, u)
    ];
  },
  generateSideWallUV: function(a, e, t, n, i, r) {
    const s = e[t * 3], o = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], u = e[n * 3 + 1], h = e[n * 3 + 2], f = e[i * 3], d = e[i * 3 + 1], g = e[i * 3 + 2], m = e[r * 3], p = e[r * 3 + 1], y = e[r * 3 + 2];
    return Math.abs(o - u) < Math.abs(s - c) ? [
      new j(s, 1 - l),
      new j(c, 1 - h),
      new j(f, 1 - g),
      new j(m, 1 - y)
    ] : [
      new j(o, 1 - l),
      new j(u, 1 - h),
      new j(d, 1 - g),
      new j(p, 1 - y)
    ];
  }
};
function N0(a, e, t) {
  if (t.shapes = [], Array.isArray(a))
    for (let n = 0, i = a.length; n < i; n++) {
      const r = a[n];
      t.shapes.push(r.uuid);
    }
  else
    t.shapes.push(a.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class fo extends si {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], r = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, r, e, t), this.type = "IcosahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new fo(e.radius, e.detail);
  }
}
class po extends si {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new po(e.radius, e.detail);
  }
}
class mo extends Je {
  constructor(e = 0.5, t = 1, n = 32, i = 1, r = 0, s = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: r,
      thetaLength: s
    }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], l = [], c = [], u = [];
    let h = e;
    const f = (t - e) / i, d = new L(), g = new j();
    for (let m = 0; m <= i; m++) {
      for (let p = 0; p <= n; p++) {
        const y = r + p / n * s;
        d.x = h * Math.cos(y), d.y = h * Math.sin(y), l.push(d.x, d.y, d.z), c.push(0, 0, 1), g.x = (d.x / t + 1) / 2, g.y = (d.y / t + 1) / 2, u.push(g.x, g.y);
      }
      h += f;
    }
    for (let m = 0; m < i; m++) {
      const p = m * (n + 1);
      for (let y = 0; y < n; y++) {
        const M = y + p, x = M, v = M + n + 1, w = M + n + 2, b = M + 1;
        o.push(x, v, b), o.push(v, w, b);
      }
    }
    this.setIndex(o), this.setAttribute("position", new Se(l, 3)), this.setAttribute("normal", new Se(c, 3)), this.setAttribute("uv", new Se(u, 2));
  }
  static fromJSON(e) {
    return new mo(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class go extends Je {
  constructor(e = new ho([new j(0, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: e,
      curveSegments: t
    };
    const n = [], i = [], r = [], s = [];
    let o = 0, l = 0;
    if (Array.isArray(e) === !1)
      c(e);
    else
      for (let u = 0; u < e.length; u++)
        c(e[u]), this.addGroup(o, l, u), o += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new Se(i, 3)), this.setAttribute("normal", new Se(r, 3)), this.setAttribute("uv", new Se(s, 2));
    function c(u) {
      const h = i.length / 3, f = u.extractPoints(t);
      let d = f.shape;
      const g = f.holes;
      Rn.isClockWise(d) === !1 && (d = d.reverse());
      for (let p = 0, y = g.length; p < y; p++) {
        const M = g[p];
        Rn.isClockWise(M) === !0 && (g[p] = M.reverse());
      }
      const m = Rn.triangulateShape(d, g);
      for (let p = 0, y = g.length; p < y; p++) {
        const M = g[p];
        d = d.concat(M);
      }
      for (let p = 0, y = d.length; p < y; p++) {
        const M = d[p];
        i.push(M.x, M.y, 0), r.push(0, 0, 1), s.push(M.x, M.y);
      }
      for (let p = 0, y = m.length; p < y; p++) {
        const M = m[p], x = M[0] + h, v = M[1] + h, w = M[2] + h;
        n.push(x, v, w), l += 3;
      }
    }
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return z0(t, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let i = 0, r = e.shapes.length; i < r; i++) {
      const s = t[e.shapes[i]];
      n.push(s);
    }
    return new go(n, e.curveSegments);
  }
}
function z0(a, e) {
  if (e.shapes = [], Array.isArray(a))
    for (let t = 0, n = a.length; t < n; t++) {
      const i = a[t];
      e.shapes.push(i.uuid);
    }
  else
    e.shapes.push(a.uuid);
  return e;
}
class xo extends Je {
  constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, s = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: s,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(s + o, Math.PI);
    let c = 0;
    const u = [], h = new L(), f = new L(), d = [], g = [], m = [], p = [];
    for (let y = 0; y <= n; y++) {
      const M = [], x = y / n;
      let v = 0;
      y == 0 && s == 0 ? v = 0.5 / t : y == n && l == Math.PI && (v = -0.5 / t);
      for (let w = 0; w <= t; w++) {
        const b = w / t;
        h.x = -e * Math.cos(i + b * r) * Math.sin(s + x * o), h.y = e * Math.cos(s + x * o), h.z = e * Math.sin(i + b * r) * Math.sin(s + x * o), g.push(h.x, h.y, h.z), f.copy(h).normalize(), m.push(f.x, f.y, f.z), p.push(b + v, 1 - x), M.push(c++);
      }
      u.push(M);
    }
    for (let y = 0; y < n; y++)
      for (let M = 0; M < t; M++) {
        const x = u[y][M + 1], v = u[y][M], w = u[y + 1][M], b = u[y + 1][M + 1];
        (y !== 0 || s > 0) && d.push(x, v, b), (y !== n - 1 || l < Math.PI) && d.push(v, w, b);
      }
    this.setIndex(d), this.setAttribute("position", new Se(g, 3)), this.setAttribute("normal", new Se(m, 3)), this.setAttribute("uv", new Se(p, 2));
  }
  static fromJSON(e) {
    return new xo(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class _o extends si {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ], i = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new _o(e.radius, e.detail);
  }
}
class vo extends Je {
  constructor(e = 1, t = 0.4, n = 12, i = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: e,
      tube: t,
      radialSegments: n,
      tubularSegments: i,
      arc: r
    }, n = Math.floor(n), i = Math.floor(i);
    const s = [], o = [], l = [], c = [], u = new L(), h = new L(), f = new L();
    for (let d = 0; d <= n; d++)
      for (let g = 0; g <= i; g++) {
        const m = g / i * r, p = d / n * Math.PI * 2;
        h.x = (e + t * Math.cos(p)) * Math.cos(m), h.y = (e + t * Math.cos(p)) * Math.sin(m), h.z = t * Math.sin(p), o.push(h.x, h.y, h.z), u.x = e * Math.cos(m), u.y = e * Math.sin(m), f.subVectors(h, u).normalize(), l.push(f.x, f.y, f.z), c.push(g / i), c.push(d / n);
      }
    for (let d = 1; d <= n; d++)
      for (let g = 1; g <= i; g++) {
        const m = (i + 1) * d + g - 1, p = (i + 1) * (d - 1) + g - 1, y = (i + 1) * (d - 1) + g, M = (i + 1) * d + g;
        s.push(m, p, M), s.push(p, y, M);
      }
    this.setIndex(s), this.setAttribute("position", new Se(o, 3)), this.setAttribute("normal", new Se(l, 3)), this.setAttribute("uv", new Se(c, 2));
  }
  static fromJSON(e) {
    return new vo(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class yo extends Je {
  constructor(e = 1, t = 0.4, n = 64, i = 8, r = 2, s = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: e,
      tube: t,
      tubularSegments: n,
      radialSegments: i,
      p: r,
      q: s
    }, n = Math.floor(n), i = Math.floor(i);
    const o = [], l = [], c = [], u = [], h = new L(), f = new L(), d = new L(), g = new L(), m = new L(), p = new L(), y = new L();
    for (let x = 0; x <= n; ++x) {
      const v = x / n * r * Math.PI * 2;
      M(v, r, s, e, d), M(v + 0.01, r, s, e, g), p.subVectors(g, d), y.addVectors(g, d), m.crossVectors(p, y), y.crossVectors(m, p), m.normalize(), y.normalize();
      for (let w = 0; w <= i; ++w) {
        const b = w / i * Math.PI * 2, E = -t * Math.cos(b), _ = t * Math.sin(b);
        h.x = d.x + (E * y.x + _ * m.x), h.y = d.y + (E * y.y + _ * m.y), h.z = d.z + (E * y.z + _ * m.z), l.push(h.x, h.y, h.z), f.subVectors(h, d).normalize(), c.push(f.x, f.y, f.z), u.push(x / n), u.push(w / i);
      }
    }
    for (let x = 1; x <= n; x++)
      for (let v = 1; v <= i; v++) {
        const w = (i + 1) * (x - 1) + (v - 1), b = (i + 1) * x + (v - 1), E = (i + 1) * x + v, _ = (i + 1) * (x - 1) + v;
        o.push(w, b, _), o.push(b, E, _);
      }
    this.setIndex(o), this.setAttribute("position", new Se(l, 3)), this.setAttribute("normal", new Se(c, 3)), this.setAttribute("uv", new Se(u, 2));
    function M(x, v, w, b, E) {
      const _ = Math.cos(x), S = Math.sin(x), C = w / v * x, I = Math.cos(C);
      E.x = b * (2 + I) * 0.5 * _, E.y = b * (2 + I) * S * 0.5, E.z = b * Math.sin(C) * 0.5;
    }
  }
  static fromJSON(e) {
    return new yo(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
  }
}
class Mo extends Je {
  constructor(e = new hh(new L(-1, -1, 0), new L(-1, 1, 0), new L(1, 1, 0)), t = 64, n = 1, i = 8, r = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: e,
      tubularSegments: t,
      radius: n,
      radialSegments: i,
      closed: r
    };
    const s = e.computeFrenetFrames(t, r);
    this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
    const o = new L(), l = new L(), c = new j();
    let u = new L();
    const h = [], f = [], d = [], g = [];
    m(), this.setIndex(g), this.setAttribute("position", new Se(h, 3)), this.setAttribute("normal", new Se(f, 3)), this.setAttribute("uv", new Se(d, 2));
    function m() {
      for (let x = 0; x < t; x++)
        p(x);
      p(r === !1 ? t : 0), M(), y();
    }
    function p(x) {
      u = e.getPointAt(x / t, u);
      const v = s.normals[x], w = s.binormals[x];
      for (let b = 0; b <= i; b++) {
        const E = b / i * Math.PI * 2, _ = Math.sin(E), S = -Math.cos(E);
        l.x = S * v.x + _ * w.x, l.y = S * v.y + _ * w.y, l.z = S * v.z + _ * w.z, l.normalize(), f.push(l.x, l.y, l.z), o.x = u.x + n * l.x, o.y = u.y + n * l.y, o.z = u.z + n * l.z, h.push(o.x, o.y, o.z);
      }
    }
    function y() {
      for (let x = 1; x <= t; x++)
        for (let v = 1; v <= i; v++) {
          const w = (i + 1) * (x - 1) + (v - 1), b = (i + 1) * x + (v - 1), E = (i + 1) * x + v, _ = (i + 1) * (x - 1) + v;
          g.push(w, b, _), g.push(b, E, _);
        }
    }
    function M() {
      for (let x = 0; x <= t; x++)
        for (let v = 0; v <= i; v++)
          c.x = x / t, c.y = v / i, d.push(c.x, c.y);
    }
  }
  toJSON() {
    const e = super.toJSON();
    return e.path = this.parameters.path.toJSON(), e;
  }
  static fromJSON(e) {
    return new Mo(
      new so[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class U0 extends Je {
  constructor(e = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: e
    }, e !== null) {
      const t = [], n = /* @__PURE__ */ new Set(), i = new L(), r = new L();
      if (e.index !== null) {
        const s = e.attributes.position, o = e.index;
        let l = e.groups;
        l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const h = l[c], f = h.start, d = h.count;
          for (let g = f, m = f + d; g < m; g += 3)
            for (let p = 0; p < 3; p++) {
              const y = o.getX(g + p), M = o.getX(g + (p + 1) % 3);
              i.fromBufferAttribute(s, y), r.fromBufferAttribute(s, M), dc(i, r, n) === !0 && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z));
            }
        }
      } else {
        const s = e.attributes.position;
        for (let o = 0, l = s.count / 3; o < l; o++)
          for (let c = 0; c < 3; c++) {
            const u = 3 * o + c, h = 3 * o + (c + 1) % 3;
            i.fromBufferAttribute(s, u), r.fromBufferAttribute(s, h), dc(i, r, n) === !0 && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new Se(t, 3));
    }
  }
}
function dc(a, e, t) {
  const n = `${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;
  return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n), t.add(i), !0);
}
var pc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: Wi,
  CapsuleGeometry: ao,
  CircleGeometry: oo,
  ConeGeometry: lo,
  CylinderGeometry: Ps,
  DodecahedronGeometry: co,
  EdgesGeometry: x0,
  ExtrudeGeometry: uo,
  IcosahedronGeometry: fo,
  LatheGeometry: Ls,
  OctahedronGeometry: po,
  PlaneGeometry: Ss,
  PolyhedronGeometry: si,
  RingGeometry: mo,
  ShapeGeometry: go,
  SphereGeometry: xo,
  TetrahedronGeometry: _o,
  TorusGeometry: vo,
  TorusKnotGeometry: yo,
  TubeGeometry: Mo,
  WireframeGeometry: U0
});
class B0 extends yt {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Me(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class k0 extends yn {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class bo extends yt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Me(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ii, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class mh extends bo {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new j(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return lt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Me(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Me(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Me(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class dr extends yt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Me(16777215), this.specular = new Me(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ii, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ws, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class V0 extends yt {
  constructor(e) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new Me(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ii, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
class G0 extends yt {
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ii, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class gh extends yt {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ii, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ws, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class H0 extends yt {
  constructor(e) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new Me(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ii, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class W0 extends Zn {
  constructor(e) {
    super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
  }
}
function En(a, e, t) {
  return xh(a) ? new a.constructor(a.subarray(e, t !== void 0 ? t : a.length)) : a.slice(e, t);
}
function ls(a, e, t) {
  return !a || !t && a.constructor === e ? a : typeof e.BYTES_PER_ELEMENT == "number" ? new e(a) : Array.prototype.slice.call(a);
}
function xh(a) {
  return ArrayBuffer.isView(a) && !(a instanceof DataView);
}
function X0(a) {
  function e(i, r) {
    return a[i] - a[r];
  }
  const t = a.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function mc(a, e, t) {
  const n = a.length, i = new a.constructor(n);
  for (let r = 0, s = 0; s !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[s++] = a[o + l];
  }
  return i;
}
function _h(a, e, t, n) {
  let i = 1, r = a[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = a[i++];
  if (r === void 0)
    return;
  let s = r[n];
  if (s !== void 0)
    if (Array.isArray(s))
      do
        s = r[n], s !== void 0 && (e.push(r.time), t.push.apply(t, s)), r = a[i++];
      while (r !== void 0);
    else if (s.toArray !== void 0)
      do
        s = r[n], s !== void 0 && (e.push(r.time), s.toArray(t, t.length)), r = a[i++];
      while (r !== void 0);
    else
      do
        s = r[n], s !== void 0 && (e.push(r.time), t.push(s)), r = a[i++];
      while (r !== void 0);
}
class Ds {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let s;
        t: {
          i:
            if (!(e < i)) {
              for (let o = n + 2; ; ) {
                if (i === void 0) {
                  if (e < r)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === o)
                  break;
                if (r = i, i = t[++n], e < i)
                  break e;
              }
              s = t.length;
              break t;
            }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l)
                break;
              if (i = r, r = t[--n - 1], e >= r)
                break e;
            }
            s = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < s; ) {
          const o = n + s >>> 1;
          e < t[o] ? s = o : n = o + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let s = 0; s !== i; ++s)
      t[s] = n[r + s];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class q0 extends Ds {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: cl,
      endingEnd: cl
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, s = e + 1, o = i[r], l = i[s];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case hl:
          r = e, o = 2 * t - n;
          break;
        case ul:
          r = i.length - 2, o = t + i[r] - i[r + 1];
          break;
        default:
          r = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case hl:
          s = e, l = 2 * n - t;
          break;
        case ul:
          s = 1, l = n + i[1] - i[0];
          break;
        default:
          s = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = s * u;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = this._offsetPrev, h = this._offsetNext, f = this._weightPrev, d = this._weightNext, g = (n - t) / (i - t), m = g * g, p = m * g, y = -f * p + 2 * f * m - f * g, M = (1 + f) * p + (-1.5 - 2 * f) * m + (-0.5 + f) * g + 1, x = (-1 - d) * p + (1.5 + d) * m + 0.5 * g, v = d * p - d * m;
    for (let w = 0; w !== o; ++w)
      r[w] = y * s[u + w] + M * s[c + w] + x * s[l + w] + v * s[h + w];
    return r;
  }
}
class Y0 extends Ds {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = (n - t) / (i - t), h = 1 - u;
    for (let f = 0; f !== o; ++f)
      r[f] = s[c + f] * h + s[l + f] * u;
    return r;
  }
}
class J0 extends Ds {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class sn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ls(t, this.TimeBufferType), this.values = ls(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: ls(e.times, Array),
        values: ls(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new J0(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Y0(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new q0(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case xs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case _s:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Vs:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return xs;
      case this.InterpolantFactoryMethodLinear:
        return _s;
      case this.InterpolantFactoryMethodSmooth:
        return Vs;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, s = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; s !== -1 && n[s] > t; )
      --s;
    if (++s, r !== 0 || s !== i) {
      r >= s && (s = Math.max(s, 1), r = s - 1);
      const o = this.getValueSize();
      this.times = En(n, r, s), this.values = En(this.values, r * o, s * o);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (s !== null && s > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, s), e = !1;
        break;
      }
      s = l;
    }
    if (i !== void 0 && xh(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = En(this.times), t = En(this.values), n = this.getValueSize(), i = this.getInterpolation() === Vs, r = e.length - 1;
    let s = 1;
    for (let o = 1; o < r; ++o) {
      let l = !1;
      const c = e[o], u = e[o + 1];
      if (c !== u && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const h = o * n, f = h - n, d = h + n;
          for (let g = 0; g !== n; ++g) {
            const m = t[h + g];
            if (m !== t[f + g] || m !== t[d + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== s) {
          e[s] = e[o];
          const h = o * n, f = s * n;
          for (let d = 0; d !== n; ++d)
            t[f + d] = t[h + d];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let o = r * n, l = s * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++s;
    }
    return s !== e.length ? (this.times = En(e, 0, s), this.values = En(t, 0, s * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = En(this.times, 0), t = En(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
sn.prototype.TimeBufferType = Float32Array;
sn.prototype.ValueBufferType = Float32Array;
sn.prototype.DefaultInterpolation = _s;
class qi extends sn {
}
qi.prototype.ValueTypeName = "bool";
qi.prototype.ValueBufferType = Array;
qi.prototype.DefaultInterpolation = xs;
qi.prototype.InterpolantFactoryMethodLinear = void 0;
qi.prototype.InterpolantFactoryMethodSmooth = void 0;
class vh extends sn {
}
vh.prototype.ValueTypeName = "color";
class wr extends sn {
}
wr.prototype.ValueTypeName = "number";
class Z0 extends Ds {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let u = c + o; c !== u; c += 4)
      kt.slerpFlat(r, 0, s, c - o, s, c, l);
    return r;
  }
}
class Yi extends sn {
  InterpolantFactoryMethodLinear(e) {
    return new Z0(this.times, this.values, this.getValueSize(), e);
  }
}
Yi.prototype.ValueTypeName = "quaternion";
Yi.prototype.DefaultInterpolation = _s;
Yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ji extends sn {
}
Ji.prototype.ValueTypeName = "string";
Ji.prototype.ValueBufferType = Array;
Ji.prototype.DefaultInterpolation = xs;
Ji.prototype.InterpolantFactoryMethodLinear = void 0;
Ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class Sr extends sn {
}
Sr.prototype.ValueTypeName = "vector";
class yh {
  constructor(e, t = -1, n, i = Ou) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Gt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let s = 0, o = n.length; s !== o; ++s)
      t.push(K0(n[s]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, s = n.length; r !== s; ++r)
      t.push(sn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, s = [];
    for (let o = 0; o < r; o++) {
      let l = [], c = [];
      l.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), c.push(0, 1, 0);
      const u = X0(l);
      l = mc(l, 1, u), c = mc(c, 1, u), !i && l[0] === 0 && (l.push(r), c.push(c[0])), s.push(
        new wr(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, s);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = c.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let f = i[h];
        f || (i[h] = f = []), f.push(c);
      }
    }
    const s = [];
    for (const o in i)
      s.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return s;
  }
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, f, d, g, m) {
      if (d.length !== 0) {
        const p = [], y = [];
        _h(d, p, y, g), p.length !== 0 && m.push(new h(f, p, y));
      }
    }, i = [], r = e.name || "default", s = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const f = c[h].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const d = {};
          let g;
          for (g = 0; g < f.length; g++)
            if (f[g].morphTargets)
              for (let m = 0; m < f[g].morphTargets.length; m++)
                d[f[g].morphTargets[m]] = -1;
          for (const m in d) {
            const p = [], y = [];
            for (let M = 0; M !== f[g].morphTargets.length; ++M) {
              const x = f[g];
              p.push(x.time), y.push(x.morphTarget === m ? 1 : 0);
            }
            i.push(new wr(".morphTargetInfluence[" + m + "]", p, y));
          }
          l = d.length * s;
        } else {
          const d = ".bones[" + t[h].name + "]";
          n(
            Sr,
            d + ".position",
            f,
            "pos",
            i
          ), n(
            Yi,
            d + ".quaternion",
            f,
            "rot",
            i
          ), n(
            Sr,
            d + ".scale",
            f,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function $0(a) {
  switch (a.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return wr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Sr;
    case "color":
      return vh;
    case "quaternion":
      return Yi;
    case "bool":
    case "boolean":
      return qi;
    case "string":
      return Ji;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
}
function K0(a) {
  if (a.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = $0(a.type);
  if (a.times === void 0) {
    const t = [], n = [];
    _h(a.keys, t, n, "value"), a.times = t, a.values = n;
  }
  return e.parse !== void 0 ? e.parse(a) : new e(a.name, a.times, a.values, a.interpolation);
}
const Ms = {
  enabled: !1,
  files: {},
  add: function(a, e) {
    this.enabled !== !1 && (this.files[a] = e);
  },
  get: function(a) {
    if (this.enabled !== !1)
      return this.files[a];
  },
  remove: function(a) {
    delete this.files[a];
  },
  clear: function() {
    this.files = {};
  }
};
class wo {
  constructor(e, t, n) {
    const i = this;
    let r = !1, s = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(u, s, o), r = !0;
    }, this.itemEnd = function(u) {
      s++, i.onProgress !== void 0 && i.onProgress(u, s, o), s === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = c.length; h < f; h += 2) {
        const d = c[h], g = c[h + 1];
        if (d.global && (d.lastIndex = 0), d.test(u))
          return g;
      }
      return null;
    };
  }
}
const j0 = /* @__PURE__ */ new wo();
class an {
  constructor(e) {
    this.manager = e !== void 0 ? e : j0, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const pn = {};
class Q0 extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Mn extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Ms.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (pn[e] !== void 0) {
      pn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    pn[e] = [], pn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const s = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), o = this.mimeType, l = this.responseType;
    fetch(s).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const u = pn[e], h = c.body.getReader(), f = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), d = f ? parseInt(f) : 0, g = d !== 0;
        let m = 0;
        const p = new ReadableStream({
          start(y) {
            M();
            function M() {
              h.read().then(({ done: x, value: v }) => {
                if (x)
                  y.close();
                else {
                  m += v.byteLength;
                  const w = new ProgressEvent("progress", { lengthComputable: g, loaded: m, total: d });
                  for (let b = 0, E = u.length; b < E; b++) {
                    const _ = u[b];
                    _.onProgress && _.onProgress(w);
                  }
                  y.enqueue(v), M();
                }
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new Q0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(o), f = h && h[1] ? h[1].toLowerCase() : void 0, d = new TextDecoder(f);
            return c.arrayBuffer().then((g) => d.decode(g));
          }
      }
    }).then((c) => {
      Ms.add(e, c);
      const u = pn[e];
      delete pn[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const u = pn[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete pn[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const d = u[h];
        d.onError && d.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Ba extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = Ms.get(e);
    if (s !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0), s;
    const o = _r("img");
    function l() {
      u(), Ms.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class ex extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, s = new Jn(), o = new Mn(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(r.withCredentials), o.load(e, function(l) {
      const c = r.parse(l);
      !c || (c.image !== void 0 ? s.image = c.image : c.data !== void 0 && (s.image.width = c.width, s.image.height = c.height, s.image.data = c.data), s.wrapS = c.wrapS !== void 0 ? c.wrapS : _t, s.wrapT = c.wrapT !== void 0 ? c.wrapT : _t, s.magFilter = c.magFilter !== void 0 ? c.magFilter : xt, s.minFilter = c.minFilter !== void 0 ? c.minFilter : xt, s.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1, c.encoding !== void 0 && (s.encoding = c.encoding), c.flipY !== void 0 && (s.flipY = c.flipY), c.format !== void 0 && (s.format = c.format), c.type !== void 0 && (s.type = c.type), c.mipmaps !== void 0 && (s.mipmaps = c.mipmaps, s.minFilter = Qn), c.mipmapCount === 1 && (s.minFilter = xt), c.generateMipmaps !== void 0 && (s.generateMipmaps = c.generateMipmaps), s.needsUpdate = !0, t && t(s, c));
    }, n, i), s;
  }
}
class So extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new rt(), s = new Ba(this.manager);
    return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class ai extends $e {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Me(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class Mh extends ai {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy($e.DefaultUp), this.updateMatrix(), this.groundColor = new Me(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const va = /* @__PURE__ */ new ye(), gc = /* @__PURE__ */ new L(), xc = /* @__PURE__ */ new L();
class To {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new j(512, 512), this.map = null, this.mapPass = null, this.matrix = new ye(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ja(), this._frameExtents = new j(1, 1), this._viewportCount = 1, this._viewports = [
      new Ye(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    gc.setFromMatrixPosition(e.matrixWorld), t.position.copy(gc), xc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(xc), t.updateMatrixWorld(), va.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(va), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(va);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class tx extends To {
  constructor() {
    super(new wt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = xr * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class bh extends ai {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy($e.DefaultUp), this.updateMatrix(), this.target = new $e(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new tx();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const _c = /* @__PURE__ */ new ye(), or = /* @__PURE__ */ new L(), ya = /* @__PURE__ */ new L();
class nx extends To {
  constructor() {
    super(new wt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new j(4, 2), this._viewportCount = 6, this._viewports = [
      new Ye(2, 1, 1, 1),
      new Ye(0, 1, 1, 1),
      new Ye(3, 1, 1, 1),
      new Ye(1, 1, 1, 1),
      new Ye(3, 0, 1, 1),
      new Ye(1, 0, 1, 1)
    ], this._cubeDirections = [
      new L(1, 0, 0),
      new L(-1, 0, 0),
      new L(0, 0, 1),
      new L(0, 0, -1),
      new L(0, 1, 0),
      new L(0, -1, 0)
    ], this._cubeUps = [
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 0, 1),
      new L(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), or.setFromMatrixPosition(e.matrixWorld), n.position.copy(or), ya.copy(n.position), ya.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ya), n.updateMatrixWorld(), i.makeTranslation(-or.x, -or.y, -or.z), _c.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_c);
  }
}
class ka extends ai {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new nx();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class ix extends To {
  constructor() {
    super(new Ts(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class wh extends ai {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy($e.DefaultUp), this.updateMatrix(), this.target = new $e(), this.shadow = new ix();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Eo extends ai {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class rx extends ai {
  constructor(e, t, n = 10, i = 10) {
    super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return super.copy(e), this.width = e.width, this.height = e.height, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
}
class sx {
  constructor() {
    this.isSphericalHarmonics3 = !0, this.coefficients = [];
    for (let e = 0; e < 9; e++)
      this.coefficients.push(new L());
  }
  set(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const n = e.x, i = e.y, r = e.z, s = this.coefficients;
    return t.copy(s[0]).multiplyScalar(0.282095), t.addScaledVector(s[1], 0.488603 * i), t.addScaledVector(s[2], 0.488603 * r), t.addScaledVector(s[3], 0.488603 * n), t.addScaledVector(s[4], 1.092548 * (n * i)), t.addScaledVector(s[5], 1.092548 * (i * r)), t.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)), t.addScaledVector(s[7], 1.092548 * (n * r)), t.addScaledVector(s[8], 0.546274 * (n * n - i * i)), t;
  }
  getIrradianceAt(e, t) {
    const n = e.x, i = e.y, r = e.z, s = this.coefficients;
    return t.copy(s[0]).multiplyScalar(0.886227), t.addScaledVector(s[1], 2 * 0.511664 * i), t.addScaledVector(s[2], 2 * 0.511664 * r), t.addScaledVector(s[3], 2 * 0.511664 * n), t.addScaledVector(s[4], 2 * 0.429043 * n * i), t.addScaledVector(s[5], 2 * 0.429043 * i * r), t.addScaledVector(s[6], 0.743125 * r * r - 0.247708), t.addScaledVector(s[7], 2 * 0.429043 * n * r), t.addScaledVector(s[8], 0.429043 * (n * n - i * i)), t;
  }
  add(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(e, t + i * 3);
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(e, t + i * 3);
    return e;
  }
  static getBasisAt(e, t) {
    const n = e.x, i = e.y, r = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * r, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * r, t[6] = 0.315392 * (3 * r * r - 1), t[7] = 1.092548 * n * r, t[8] = 0.546274 * (n * n - i * i);
  }
}
class ax extends ai {
  constructor(e = new sx(), t = 1) {
    super(void 0, t), this.isLightProbe = !0, this.sh = e;
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.sh = this.sh.toArray(), t;
  }
}
class Ao extends an {
  constructor(e) {
    super(e), this.textures = {};
  }
  load(e, t, n, i) {
    const r = this, s = new Mn(r.manager);
    s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(e, function(o) {
      try {
        t(r.parse(JSON.parse(o)));
      } catch (l) {
        i ? i(l) : console.error(l), r.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = this.textures;
    function n(r) {
      return t[r] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", r), t[r];
    }
    const i = Ao.createMaterialFromType(e.type);
    if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new Me().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.iridescence !== void 0 && (i.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (i.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (const r in e.uniforms) {
        const s = e.uniforms[r];
        switch (i.uniforms[r] = {}, s.type) {
          case "t":
            i.uniforms[r].value = n(s.value);
            break;
          case "c":
            i.uniforms[r].value = new Me().setHex(s.value);
            break;
          case "v2":
            i.uniforms[r].value = new j().fromArray(s.value);
            break;
          case "v3":
            i.uniforms[r].value = new L().fromArray(s.value);
            break;
          case "v4":
            i.uniforms[r].value = new Ye().fromArray(s.value);
            break;
          case "m3":
            i.uniforms[r].value = new Ct().fromArray(s.value);
            break;
          case "m4":
            i.uniforms[r].value = new ye().fromArray(s.value);
            break;
          default:
            i.uniforms[r].value = s.value;
        }
      }
    if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (i.glslVersion = e.glslVersion), e.extensions !== void 0)
      for (const r in e.extensions)
        i.extensions[r] = e.extensions[r];
    if (e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let r = e.normalScale;
      Array.isArray(r) === !1 && (r = [r, r]), i.normalScale = new j().fromArray(r);
    }
    return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new j().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (i.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
  }
  setTextures(e) {
    return this.textures = e, this;
  }
  static createMaterialFromType(e) {
    const t = {
      ShadowMaterial: B0,
      SpriteMaterial: rh,
      RawShaderMaterial: k0,
      ShaderMaterial: yn,
      PointsMaterial: Di,
      MeshPhysicalMaterial: mh,
      MeshStandardMaterial: bo,
      MeshPhongMaterial: dr,
      MeshToonMaterial: V0,
      MeshNormalMaterial: G0,
      MeshLambertMaterial: gh,
      MeshDepthMaterial: Qc,
      MeshDistanceMaterial: eh,
      MeshBasicMaterial: Za,
      MeshMatcapMaterial: H0,
      LineDashedMaterial: W0,
      LineBasicMaterial: Zn,
      Material: yt
    };
    return new t[e]();
  }
}
class Tr {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class ox extends Je {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class lx extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, s = new Mn(r.manager);
    s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(e, function(o) {
      try {
        t(r.parse(JSON.parse(o)));
      } catch (l) {
        i ? i(l) : console.error(l), r.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = {}, n = {};
    function i(d, g) {
      if (t[g] !== void 0)
        return t[g];
      const p = d.interleavedBuffers[g], y = r(d, p.buffer), M = Li(p.type, y), x = new ih(M, p.stride);
      return x.uuid = p.uuid, t[g] = x, x;
    }
    function r(d, g) {
      if (n[g] !== void 0)
        return n[g];
      const p = d.arrayBuffers[g], y = new Uint32Array(p).buffer;
      return n[g] = y, y;
    }
    const s = e.isInstancedBufferGeometry ? new ox() : new Je(), o = e.data.index;
    if (o !== void 0) {
      const d = Li(o.type, o.array);
      s.setIndex(new ct(d, 1));
    }
    const l = e.data.attributes;
    for (const d in l) {
      const g = l[d];
      let m;
      if (g.isInterleavedBufferAttribute) {
        const p = i(e.data, g.data);
        m = new Vi(p, g.itemSize, g.offset, g.normalized);
      } else {
        const p = Li(g.type, g.array), y = g.isInstancedBufferAttribute ? vr : ct;
        m = new y(p, g.itemSize, g.normalized);
      }
      g.name !== void 0 && (m.name = g.name), g.usage !== void 0 && m.setUsage(g.usage), g.updateRange !== void 0 && (m.updateRange.offset = g.updateRange.offset, m.updateRange.count = g.updateRange.count), s.setAttribute(d, m);
    }
    const c = e.data.morphAttributes;
    if (c)
      for (const d in c) {
        const g = c[d], m = [];
        for (let p = 0, y = g.length; p < y; p++) {
          const M = g[p];
          let x;
          if (M.isInterleavedBufferAttribute) {
            const v = i(e.data, M.data);
            x = new Vi(v, M.itemSize, M.offset, M.normalized);
          } else {
            const v = Li(M.type, M.array);
            x = new ct(v, M.itemSize, M.normalized);
          }
          M.name !== void 0 && (x.name = M.name), m.push(x);
        }
        s.morphAttributes[d] = m;
      }
    e.data.morphTargetsRelative && (s.morphTargetsRelative = !0);
    const h = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (h !== void 0)
      for (let d = 0, g = h.length; d !== g; ++d) {
        const m = h[d];
        s.addGroup(m.start, m.count, m.materialIndex);
      }
    const f = e.data.boundingSphere;
    if (f !== void 0) {
      const d = new L();
      f.center !== void 0 && d.fromArray(f.center), s.boundingSphere = new Hi(d, f.radius);
    }
    return e.name && (s.name = e.name), e.userData && (s.userData = e.userData), s;
  }
}
class cx extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, s = this.path === "" ? Tr.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || s;
    const o = new Mn(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      let c = null;
      try {
        c = JSON.parse(l);
      } catch (h) {
        i !== void 0 && i(h), console.error("THREE:ObjectLoader: Can't parse " + e + ".", h.message);
        return;
      }
      const u = c.metadata;
      if (u === void 0 || u.type === void 0 || u.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + e)), console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      r.parse(c, t);
    }, n, i);
  }
  async loadAsync(e, t) {
    const n = this, i = this.path === "" ? Tr.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || i;
    const r = new Mn(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials);
    const s = await r.loadAsync(e, t), o = JSON.parse(s), l = o.metadata;
    if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry")
      throw new Error("THREE.ObjectLoader: Can't load " + e);
    return await n.parseAsync(o);
  }
  parse(e, t) {
    const n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), r = this.parseGeometries(e.geometries, i), s = this.parseImages(e.images, function() {
      t !== void 0 && t(c);
    }), o = this.parseTextures(e.textures, s), l = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, r, l, o, n), u = this.parseSkeletons(e.skeletons, c);
    if (this.bindSkeletons(c, u), t !== void 0) {
      let h = !1;
      for (const f in s)
        if (s[f].data instanceof HTMLImageElement) {
          h = !0;
          break;
        }
      h === !1 && t(c);
    }
    return c;
  }
  async parseAsync(e) {
    const t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), r = await this.parseImagesAsync(e.images), s = this.parseTextures(e.textures, r), o = this.parseMaterials(e.materials, s), l = this.parseObject(e.object, i, o, s, t), c = this.parseSkeletons(e.skeletons, l);
    return this.bindSkeletons(l, c), l;
  }
  parseShapes(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0, i = e.length; n < i; n++) {
        const r = new ho().fromJSON(e[n]);
        t[r.uuid] = r;
      }
    return t;
  }
  parseSkeletons(e, t) {
    const n = {}, i = {};
    if (t.traverse(function(r) {
      r.isBone && (i[r.uuid] = r);
    }), e !== void 0)
      for (let r = 0, s = e.length; r < s; r++) {
        const o = new As().fromJSON(e[r], i);
        n[o.uuid] = o;
      }
    return n;
  }
  parseGeometries(e, t) {
    const n = {};
    if (e !== void 0) {
      const i = new lx();
      for (let r = 0, s = e.length; r < s; r++) {
        let o;
        const l = e[r];
        switch (l.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = i.parse(l);
            break;
          default:
            l.type in pc ? o = pc[l.type].fromJSON(l, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`);
        }
        o.uuid = l.uuid, l.name !== void 0 && (o.name = l.name), o.isBufferGeometry === !0 && l.userData !== void 0 && (o.userData = l.userData), n[l.uuid] = o;
      }
    }
    return n;
  }
  parseMaterials(e, t) {
    const n = {}, i = {};
    if (e !== void 0) {
      const r = new Ao();
      r.setTextures(t);
      for (let s = 0, o = e.length; s < o; s++) {
        const l = e[s];
        n[l.uuid] === void 0 && (n[l.uuid] = r.parse(l)), i[l.uuid] = n[l.uuid];
      }
    }
    return i;
  }
  parseAnimations(e) {
    const t = {};
    if (e !== void 0)
      for (let n = 0; n < e.length; n++) {
        const i = e[n], r = yh.parse(i);
        t[r.uuid] = r;
      }
    return t;
  }
  parseImages(e, t) {
    const n = this, i = {};
    let r;
    function s(l) {
      return n.manager.itemStart(l), r.load(l, function() {
        n.manager.itemEnd(l);
      }, void 0, function() {
        n.manager.itemError(l), n.manager.itemEnd(l);
      });
    }
    function o(l) {
      if (typeof l == "string") {
        const c = l, u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c) ? c : n.resourcePath + c;
        return s(u);
      } else
        return l.data ? {
          data: Li(l.type, l.data),
          width: l.width,
          height: l.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      const l = new wo(t);
      r = new Ba(l), r.setCrossOrigin(this.crossOrigin);
      for (let c = 0, u = e.length; c < u; c++) {
        const h = e[c], f = h.url;
        if (Array.isArray(f)) {
          const d = [];
          for (let g = 0, m = f.length; g < m; g++) {
            const p = f[g], y = o(p);
            y !== null && (y instanceof HTMLImageElement ? d.push(y) : d.push(new Jn(y.data, y.width, y.height)));
          }
          i[h.uuid] = new Pi(d);
        } else {
          const d = o(h.url);
          i[h.uuid] = new Pi(d);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(e) {
    const t = this, n = {};
    let i;
    async function r(s) {
      if (typeof s == "string") {
        const o = s, l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(o) ? o : t.resourcePath + o;
        return await i.loadAsync(l);
      } else
        return s.data ? {
          data: Li(s.type, s.data),
          width: s.width,
          height: s.height
        } : null;
    }
    if (e !== void 0 && e.length > 0) {
      i = new Ba(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let s = 0, o = e.length; s < o; s++) {
        const l = e[s], c = l.url;
        if (Array.isArray(c)) {
          const u = [];
          for (let h = 0, f = c.length; h < f; h++) {
            const d = c[h], g = await r(d);
            g !== null && (g instanceof HTMLImageElement ? u.push(g) : u.push(new Jn(g.data, g.width, g.height)));
          }
          n[l.uuid] = new Pi(u);
        } else {
          const u = await r(l.url);
          n[l.uuid] = new Pi(u);
        }
      }
    }
    return n;
  }
  parseTextures(e, t) {
    function n(r, s) {
      return typeof r == "number" ? r : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", r), s[r]);
    }
    const i = {};
    if (e !== void 0)
      for (let r = 0, s = e.length; r < s; r++) {
        const o = e[r];
        o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        const l = t[o.image], c = l.data;
        let u;
        Array.isArray(c) ? (u = new Ka(), c.length === 6 && (u.needsUpdate = !0)) : (c && c.data ? u = new Jn() : u = new rt(), c && (u.needsUpdate = !0)), u.source = l, u.uuid = o.uuid, o.name !== void 0 && (u.name = o.name), o.mapping !== void 0 && (u.mapping = n(o.mapping, hx)), o.offset !== void 0 && u.offset.fromArray(o.offset), o.repeat !== void 0 && u.repeat.fromArray(o.repeat), o.center !== void 0 && u.center.fromArray(o.center), o.rotation !== void 0 && (u.rotation = o.rotation), o.wrap !== void 0 && (u.wrapS = n(o.wrap[0], vc), u.wrapT = n(o.wrap[1], vc)), o.format !== void 0 && (u.format = o.format), o.type !== void 0 && (u.type = o.type), o.encoding !== void 0 && (u.encoding = o.encoding), o.minFilter !== void 0 && (u.minFilter = n(o.minFilter, yc)), o.magFilter !== void 0 && (u.magFilter = n(o.magFilter, yc)), o.anisotropy !== void 0 && (u.anisotropy = o.anisotropy), o.flipY !== void 0 && (u.flipY = o.flipY), o.generateMipmaps !== void 0 && (u.generateMipmaps = o.generateMipmaps), o.premultiplyAlpha !== void 0 && (u.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (u.unpackAlignment = o.unpackAlignment), o.userData !== void 0 && (u.userData = o.userData), i[o.uuid] = u;
      }
    return i;
  }
  parseObject(e, t, n, i, r) {
    let s;
    function o(f) {
      return t[f] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", f), t[f];
    }
    function l(f) {
      if (f !== void 0) {
        if (Array.isArray(f)) {
          const d = [];
          for (let g = 0, m = f.length; g < m; g++) {
            const p = f[g];
            n[p] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", p), d.push(n[p]);
          }
          return d;
        }
        return n[f] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", f), n[f];
      }
    }
    function c(f) {
      return i[f] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", f), i[f];
    }
    let u, h;
    switch (e.type) {
      case "Scene":
        s = new nh(), e.background !== void 0 && (Number.isInteger(e.background) ? s.background = new Me(e.background) : s.background = c(e.background)), e.environment !== void 0 && (s.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? s.fog = new to(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (s.fog = new eo(e.fog.color, e.fog.density))), e.backgroundBlurriness !== void 0 && (s.backgroundBlurriness = e.backgroundBlurriness);
        break;
      case "PerspectiveCamera":
        s = new wt(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (s.focus = e.focus), e.zoom !== void 0 && (s.zoom = e.zoom), e.filmGauge !== void 0 && (s.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (s.filmOffset = e.filmOffset), e.view !== void 0 && (s.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        s = new Ts(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (s.zoom = e.zoom), e.view !== void 0 && (s.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        s = new Eo(e.color, e.intensity);
        break;
      case "DirectionalLight":
        s = new wh(e.color, e.intensity);
        break;
      case "PointLight":
        s = new ka(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        s = new rx(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        s = new bh(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        s = new Mh(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        s = new ax().fromJSON(e);
        break;
      case "SkinnedMesh":
        u = o(e.geometry), h = l(e.material), s = new ah(u, h), e.bindMode !== void 0 && (s.bindMode = e.bindMode), e.bindMatrix !== void 0 && s.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (s.skeleton = e.skeleton);
        break;
      case "Mesh":
        u = o(e.geometry), h = l(e.material), s = new vt(u, h);
        break;
      case "InstancedMesh":
        u = o(e.geometry), h = l(e.material);
        const f = e.count, d = e.instanceMatrix, g = e.instanceColor;
        s = new i0(u, h, f), s.instanceMatrix = new vr(new Float32Array(d.array), 16), g !== void 0 && (s.instanceColor = new vr(new Float32Array(g.array), g.itemSize));
        break;
      case "LOD":
        s = new Qg();
        break;
      case "Line":
        s = new Cs(o(e.geometry), l(e.material));
        break;
      case "LineLoop":
        s = new r0(o(e.geometry), l(e.material));
        break;
      case "LineSegments":
        s = new Fa(o(e.geometry), l(e.material));
        break;
      case "PointCloud":
      case "Points":
        s = new ms(o(e.geometry), l(e.material));
        break;
      case "Sprite":
        s = new jg(l(e.material));
        break;
      case "Group":
        s = new nn();
        break;
      case "Bone":
        s = new ys();
        break;
      default:
        s = new $e();
    }
    if (s.uuid = e.uuid, e.name !== void 0 && (s.name = e.name), e.matrix !== void 0 ? (s.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (s.matrixAutoUpdate = e.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (e.position !== void 0 && s.position.fromArray(e.position), e.rotation !== void 0 && s.rotation.fromArray(e.rotation), e.quaternion !== void 0 && s.quaternion.fromArray(e.quaternion), e.scale !== void 0 && s.scale.fromArray(e.scale)), e.castShadow !== void 0 && (s.castShadow = e.castShadow), e.receiveShadow !== void 0 && (s.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (s.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (s.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (s.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && s.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (s.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (s.visible = e.visible), e.frustumCulled !== void 0 && (s.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (s.renderOrder = e.renderOrder), e.userData !== void 0 && (s.userData = e.userData), e.layers !== void 0 && (s.layers.mask = e.layers), e.children !== void 0) {
      const f = e.children;
      for (let d = 0; d < f.length; d++)
        s.add(this.parseObject(f[d], t, n, i, r));
    }
    if (e.animations !== void 0) {
      const f = e.animations;
      for (let d = 0; d < f.length; d++) {
        const g = f[d];
        s.animations.push(r[g]);
      }
    }
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (s.autoUpdate = e.autoUpdate);
      const f = e.levels;
      for (let d = 0; d < f.length; d++) {
        const g = f[d], m = s.getObjectByProperty("uuid", g.object);
        m !== void 0 && s.addLevel(m, g.distance, g.hysteresis);
      }
    }
    return s;
  }
  bindSkeletons(e, t) {
    Object.keys(t).length !== 0 && e.traverse(function(n) {
      if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
        const i = t[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
}
const hx = {
  UVMapping: qa,
  CubeReflectionMapping: Kn,
  CubeRefractionMapping: jn,
  EquirectangularReflectionMapping: Ui,
  EquirectangularRefractionMapping: gs,
  CubeUVReflectionMapping: Ar
}, vc = {
  RepeatWrapping: vn,
  ClampToEdgeWrapping: _t,
  MirroredRepeatWrapping: mr
}, yc = {
  NearestFilter: ut,
  NearestMipmapNearestFilter: La,
  NearestMipmapLinearFilter: fs,
  LinearFilter: xt,
  LinearMipmapNearestFilter: zc,
  LinearMipmapLinearFilter: Qn
}, Co = "\\[\\]\\.:\\/", ux = new RegExp("[" + Co + "]", "g"), Lo = "[^" + Co + "]", fx = "[^" + Co.replace("\\.", "") + "]", dx = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Lo), px = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", fx), mx = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Lo), gx = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Lo), xx = new RegExp(
  "^" + dx + px + mx + gx + "$"
), _x = ["material", "materials", "bones", "map"];
class vx {
  constructor(e, t, n) {
    const i = n || qe.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class qe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || qe.parseTrackName(t), this.node = qe.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new qe.Composite(e, t, n) : new qe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ux, "");
  }
  static parseTrackName(e) {
    const t = xx.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      _x.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let s = 0; s < r.length; s++) {
          const o = r[s];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l)
            return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = qe.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const s = e[i];
    if (s === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
    } else
      s.fromArray !== void 0 && s.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
qe.Composite = vx;
qe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
qe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
qe.prototype.GetterByBindingType = [
  qe.prototype._getValue_direct,
  qe.prototype._getValue_array,
  qe.prototype._getValue_arrayElement,
  qe.prototype._getValue_toArray
];
qe.prototype.SetterByBindingTypeAndVersioning = [
  [
    qe.prototype._setValue_direct,
    qe.prototype._setValue_direct_setNeedsUpdate,
    qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    qe.prototype._setValue_array,
    qe.prototype._setValue_array_setNeedsUpdate,
    qe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    qe.prototype._setValue_arrayElement,
    qe.prototype._setValue_arrayElement_setNeedsUpdate,
    qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    qe.prototype._setValue_fromArray,
    qe.prototype._setValue_fromArray_setNeedsUpdate,
    qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Mc {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(lt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mn = /* @__PURE__ */ yx();
function yx() {
  const a = new ArrayBuffer(4), e = new Float32Array(a), t = new Uint32Array(a), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let l = 0; l < 256; ++l) {
    const c = l - 127;
    c < -27 ? (n[l] = 0, n[l | 256] = 32768, i[l] = 24, i[l | 256] = 24) : c < -14 ? (n[l] = 1024 >> -c - 14, n[l | 256] = 1024 >> -c - 14 | 32768, i[l] = -c - 1, i[l | 256] = -c - 1) : c <= 15 ? (n[l] = c + 15 << 10, n[l | 256] = c + 15 << 10 | 32768, i[l] = 13, i[l | 256] = 13) : c < 128 ? (n[l] = 31744, n[l | 256] = 64512, i[l] = 24, i[l | 256] = 24) : (n[l] = 31744, n[l | 256] = 64512, i[l] = 13, i[l | 256] = 13);
  }
  const r = new Uint32Array(2048), s = new Uint32Array(64), o = new Uint32Array(64);
  for (let l = 1; l < 1024; ++l) {
    let c = l << 13, u = 0;
    for (; (c & 8388608) === 0; )
      c <<= 1, u -= 8388608;
    c &= -8388609, u += 947912704, r[l] = c | u;
  }
  for (let l = 1024; l < 2048; ++l)
    r[l] = 939524096 + (l - 1024 << 13);
  for (let l = 1; l < 31; ++l)
    s[l] = l << 23;
  s[31] = 1199570944, s[32] = 2147483648;
  for (let l = 33; l < 63; ++l)
    s[l] = 2147483648 + (l - 32 << 23);
  s[63] = 3347054592;
  for (let l = 1; l < 64; ++l)
    l !== 32 && (o[l] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: r,
    exponentTable: s,
    offsetTable: o
  };
}
function Mx(a) {
  Math.abs(a) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), a = lt(a, -65504, 65504), mn.floatView[0] = a;
  const e = mn.uint32View[0], t = e >> 23 & 511;
  return mn.baseTable[t] + ((e & 8388607) >> mn.shiftTable[t]);
}
function bx(a) {
  const e = a >> 10;
  return mn.uint32View[0] = mn.mantissaTable[mn.offsetTable[e] + (a & 1023)] + mn.exponentTable[e], mn.floatView[0];
}
var cs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toHalfFloat: Mx,
  fromHalfFloat: bx
});
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Xa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Xa);
const bc = { type: "change" }, Ma = { type: "start" }, wc = { type: "end" };
class wx extends ri {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: oi.ROTATE, MIDDLE: oi.DOLLY, RIGHT: oi.PAN }, this.touches = { ONE: li.ROTATE, TWO: li.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(R) {
      R.addEventListener("keydown", He), this._domElementKeyEvents = R;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(bc), n.update(), r = i.NONE;
    }, this.update = function() {
      const R = new L(), N = new kt().setFromUnitVectors(e.up, new L(0, 1, 0)), de = N.clone().invert(), xe = new L(), pe = new kt(), be = 2 * Math.PI;
      return function() {
        const Ue = n.object.position;
        R.copy(Ue).sub(n.target), R.applyQuaternion(N), o.setFromVector3(R), n.autoRotate && r === i.NONE && S(E()), n.enableDamping ? (o.theta += l.theta * n.dampingFactor, o.phi += l.phi * n.dampingFactor) : (o.theta += l.theta, o.phi += l.phi);
        let Be = n.minAzimuthAngle, je = n.maxAzimuthAngle;
        return isFinite(Be) && isFinite(je) && (Be < -Math.PI ? Be += be : Be > Math.PI && (Be -= be), je < -Math.PI ? je += be : je > Math.PI && (je -= be), Be <= je ? o.theta = Math.max(Be, Math.min(je, o.theta)) : o.theta = o.theta > (Be + je) / 2 ? Math.max(Be, o.theta) : Math.min(je, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= c, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), R.setFromSpherical(o), R.applyQuaternion(de), Ue.copy(n.target).add(R), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), u.set(0, 0, 0)), c = 1, h || xe.distanceToSquared(n.object.position) > s || 8 * (1 - pe.dot(n.object.quaternion)) > s ? (n.dispatchEvent(bc), xe.copy(n.object.position), pe.copy(n.object.quaternion), h = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", V), n.domElement.removeEventListener("pointerdown", oe), n.domElement.removeEventListener("pointercancel", Re), n.domElement.removeEventListener("wheel", Ke), n.domElement.removeEventListener("pointermove", _e), n.domElement.removeEventListener("pointerup", ce), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", He);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let r = i.NONE;
    const s = 1e-6, o = new Mc(), l = new Mc();
    let c = 1;
    const u = new L();
    let h = !1;
    const f = new j(), d = new j(), g = new j(), m = new j(), p = new j(), y = new j(), M = new j(), x = new j(), v = new j(), w = [], b = {};
    function E() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function _() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function S(R) {
      l.theta -= R;
    }
    function C(R) {
      l.phi -= R;
    }
    const I = function() {
      const R = new L();
      return function(de, xe) {
        R.setFromMatrixColumn(xe, 0), R.multiplyScalar(-de), u.add(R);
      };
    }(), H = function() {
      const R = new L();
      return function(de, xe) {
        n.screenSpacePanning === !0 ? R.setFromMatrixColumn(xe, 1) : (R.setFromMatrixColumn(xe, 0), R.crossVectors(n.object.up, R)), R.multiplyScalar(de), u.add(R);
      };
    }(), O = function() {
      const R = new L();
      return function(de, xe) {
        const pe = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const be = n.object.position;
          R.copy(be).sub(n.target);
          let ve = R.length();
          ve *= Math.tan(n.object.fov / 2 * Math.PI / 180), I(2 * de * ve / pe.clientHeight, n.object.matrix), H(2 * xe * ve / pe.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (I(de * (n.object.right - n.object.left) / n.object.zoom / pe.clientWidth, n.object.matrix), H(xe * (n.object.top - n.object.bottom) / n.object.zoom / pe.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function D(R) {
      n.object.isPerspectiveCamera ? c /= R : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * R)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function B(R) {
      n.object.isPerspectiveCamera ? c *= R : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / R)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function J(R) {
      f.set(R.clientX, R.clientY);
    }
    function ee(R) {
      M.set(R.clientX, R.clientY);
    }
    function W(R) {
      m.set(R.clientX, R.clientY);
    }
    function te(R) {
      d.set(R.clientX, R.clientY), g.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const N = n.domElement;
      S(2 * Math.PI * g.x / N.clientHeight), C(2 * Math.PI * g.y / N.clientHeight), f.copy(d), n.update();
    }
    function Q(R) {
      x.set(R.clientX, R.clientY), v.subVectors(x, M), v.y > 0 ? D(_()) : v.y < 0 && B(_()), M.copy(x), n.update();
    }
    function G(R) {
      p.set(R.clientX, R.clientY), y.subVectors(p, m).multiplyScalar(n.panSpeed), O(y.x, y.y), m.copy(p), n.update();
    }
    function k(R) {
      R.deltaY < 0 ? B(_()) : R.deltaY > 0 && D(_()), n.update();
    }
    function ae(R) {
      let N = !1;
      switch (R.code) {
        case n.keys.UP:
          R.ctrlKey || R.metaKey || R.shiftKey ? C(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, n.keyPanSpeed), N = !0;
          break;
        case n.keys.BOTTOM:
          R.ctrlKey || R.metaKey || R.shiftKey ? C(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, -n.keyPanSpeed), N = !0;
          break;
        case n.keys.LEFT:
          R.ctrlKey || R.metaKey || R.shiftKey ? S(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(n.keyPanSpeed, 0), N = !0;
          break;
        case n.keys.RIGHT:
          R.ctrlKey || R.metaKey || R.shiftKey ? S(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(-n.keyPanSpeed, 0), N = !0;
          break;
      }
      N && (R.preventDefault(), n.update());
    }
    function re() {
      if (w.length === 1)
        f.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX), N = 0.5 * (w[0].pageY + w[1].pageY);
        f.set(R, N);
      }
    }
    function le() {
      if (w.length === 1)
        m.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX), N = 0.5 * (w[0].pageY + w[1].pageY);
        m.set(R, N);
      }
    }
    function X() {
      const R = w[0].pageX - w[1].pageX, N = w[0].pageY - w[1].pageY, de = Math.sqrt(R * R + N * N);
      M.set(0, de);
    }
    function Pe() {
      n.enableZoom && X(), n.enablePan && le();
    }
    function me() {
      n.enableZoom && X(), n.enableRotate && re();
    }
    function Ce(R) {
      if (w.length == 1)
        d.set(R.pageX, R.pageY);
      else {
        const de = Le(R), xe = 0.5 * (R.pageX + de.x), pe = 0.5 * (R.pageY + de.y);
        d.set(xe, pe);
      }
      g.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const N = n.domElement;
      S(2 * Math.PI * g.x / N.clientHeight), C(2 * Math.PI * g.y / N.clientHeight), f.copy(d);
    }
    function ue(R) {
      if (w.length === 1)
        p.set(R.pageX, R.pageY);
      else {
        const N = Le(R), de = 0.5 * (R.pageX + N.x), xe = 0.5 * (R.pageY + N.y);
        p.set(de, xe);
      }
      y.subVectors(p, m).multiplyScalar(n.panSpeed), O(y.x, y.y), m.copy(p);
    }
    function Ie(R) {
      const N = Le(R), de = R.pageX - N.x, xe = R.pageY - N.y, pe = Math.sqrt(de * de + xe * xe);
      x.set(0, pe), v.set(0, Math.pow(x.y / M.y, n.zoomSpeed)), D(v.y), M.copy(x);
    }
    function K(R) {
      n.enableZoom && Ie(R), n.enablePan && ue(R);
    }
    function $(R) {
      n.enableZoom && Ie(R), n.enableRotate && Ce(R);
    }
    function oe(R) {
      n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(R.pointerId), n.domElement.addEventListener("pointermove", _e), n.domElement.addEventListener("pointerup", ce)), ne(R), R.pointerType === "touch" ? P(R) : Ee(R));
    }
    function _e(R) {
      n.enabled !== !1 && (R.pointerType === "touch" ? T(R) : Te(R));
    }
    function ce(R) {
      se(R), w.length === 0 && (n.domElement.releasePointerCapture(R.pointerId), n.domElement.removeEventListener("pointermove", _e), n.domElement.removeEventListener("pointerup", ce)), n.dispatchEvent(wc), r = i.NONE;
    }
    function Re(R) {
      se(R);
    }
    function Ee(R) {
      let N;
      switch (R.button) {
        case 0:
          N = n.mouseButtons.LEFT;
          break;
        case 1:
          N = n.mouseButtons.MIDDLE;
          break;
        case 2:
          N = n.mouseButtons.RIGHT;
          break;
        default:
          N = -1;
      }
      switch (N) {
        case oi.DOLLY:
          if (n.enableZoom === !1)
            return;
          ee(R), r = i.DOLLY;
          break;
        case oi.ROTATE:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enablePan === !1)
              return;
            W(R), r = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            J(R), r = i.ROTATE;
          }
          break;
        case oi.PAN:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enableRotate === !1)
              return;
            J(R), r = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            W(R), r = i.PAN;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Ma);
    }
    function Te(R) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          te(R);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          Q(R);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          G(R);
          break;
      }
    }
    function Ke(R) {
      n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (R.preventDefault(), n.dispatchEvent(Ma), k(R), n.dispatchEvent(wc));
    }
    function He(R) {
      n.enabled === !1 || n.enablePan === !1 || ae(R);
    }
    function P(R) {
      switch (fe(R), w.length) {
        case 1:
          switch (n.touches.ONE) {
            case li.ROTATE:
              if (n.enableRotate === !1)
                return;
              re(), r = i.TOUCH_ROTATE;
              break;
            case li.PAN:
              if (n.enablePan === !1)
                return;
              le(), r = i.TOUCH_PAN;
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case li.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              Pe(), r = i.TOUCH_DOLLY_PAN;
              break;
            case li.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              me(), r = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Ma);
    }
    function T(R) {
      switch (fe(R), r) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Ce(R), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          ue(R), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          K(R), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          $(R), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function V(R) {
      n.enabled !== !1 && R.preventDefault();
    }
    function ne(R) {
      w.push(R);
    }
    function se(R) {
      delete b[R.pointerId];
      for (let N = 0; N < w.length; N++)
        if (w[N].pointerId == R.pointerId) {
          w.splice(N, 1);
          return;
        }
    }
    function fe(R) {
      let N = b[R.pointerId];
      N === void 0 && (N = new j(), b[R.pointerId] = N), N.set(R.pageX, R.pageY);
    }
    function Le(R) {
      const N = R.pointerId === w[0].pointerId ? w[1] : w[0];
      return b[N.pointerId];
    }
    n.domElement.addEventListener("contextmenu", V), n.domElement.addEventListener("pointerdown", oe), n.domElement.addEventListener("pointercancel", Re), n.domElement.addEventListener("wheel", Ke, { passive: !1 }), this.update();
  }
}
const Sx = /^[og]\s*(.+)?/, Tx = /^mtllib /, Ex = /^usemtl /, Ax = /^usemap /, Sc = /\s+/, Tc = new L(), ba = new L(), Ec = new L(), Ac = new L(), Ut = new L(), hs = new Me();
function Cx() {
  const a = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(e, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = e, this.object.fromDeclaration = t !== !1;
        return;
      }
      const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: e || "",
        fromDeclaration: t !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(i, r) {
          const s = this._finalize(!1);
          s && (s.inherited || s.groupCount <= 0) && this.materials.splice(s.index, 1);
          const o = {
            index: this.materials.length,
            name: i || "",
            mtllib: Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "",
            smooth: s !== void 0 ? s.smooth : this.smooth,
            groupStart: s !== void 0 ? s.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(l) {
              const c = {
                index: typeof l == "number" ? l : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return c.clone = this.clone.bind(c), c;
            }
          };
          return this.materials.push(o), o;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(i) {
          const r = this.currentMaterial();
          if (r && r.groupEnd === -1 && (r.groupEnd = this.geometry.vertices.length / 3, r.groupCount = r.groupEnd - r.groupStart, r.inherited = !1), i && this.materials.length > 1)
            for (let s = this.materials.length - 1; s >= 0; s--)
              this.materials[s].groupCount <= 0 && this.materials.splice(s, 1);
          return i && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), r;
        }
      }, n && n.name && typeof n.clone == "function") {
        const i = n.clone(0);
        i.inherited = !0, this.object.materials.push(i);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 3) * 3;
    },
    parseNormalIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 3) * 3;
    },
    parseUVIndex: function(e, t) {
      const n = parseInt(e, 10);
      return (n >= 0 ? n - 1 : n + t / 2) * 2;
    },
    addVertex: function(e, t, n) {
      const i = this.vertices, r = this.object.geometry.vertices;
      r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addVertexPoint: function(e) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
    },
    addVertexLine: function(e) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
    },
    addNormal: function(e, t, n) {
      const i = this.normals, r = this.object.geometry.normals;
      r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addFaceNormal: function(e, t, n) {
      const i = this.vertices, r = this.object.geometry.normals;
      Tc.fromArray(i, e), ba.fromArray(i, t), Ec.fromArray(i, n), Ut.subVectors(Ec, ba), Ac.subVectors(Tc, ba), Ut.cross(Ac), Ut.normalize(), r.push(Ut.x, Ut.y, Ut.z), r.push(Ut.x, Ut.y, Ut.z), r.push(Ut.x, Ut.y, Ut.z);
    },
    addColor: function(e, t, n) {
      const i = this.colors, r = this.object.geometry.colors;
      i[e] !== void 0 && r.push(i[e + 0], i[e + 1], i[e + 2]), i[t] !== void 0 && r.push(i[t + 0], i[t + 1], i[t + 2]), i[n] !== void 0 && r.push(i[n + 0], i[n + 1], i[n + 2]);
    },
    addUV: function(e, t, n) {
      const i = this.uvs, r = this.object.geometry.uvs;
      r.push(i[e + 0], i[e + 1]), r.push(i[t + 0], i[t + 1]), r.push(i[n + 0], i[n + 1]);
    },
    addDefaultUV: function() {
      const e = this.object.geometry.uvs;
      e.push(0, 0), e.push(0, 0), e.push(0, 0);
    },
    addUVLine: function(e) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[e + 0], t[e + 1]);
    },
    addFace: function(e, t, n, i, r, s, o, l, c) {
      const u = this.vertices.length;
      let h = this.parseVertexIndex(e, u), f = this.parseVertexIndex(t, u), d = this.parseVertexIndex(n, u);
      if (this.addVertex(h, f, d), this.addColor(h, f, d), o !== void 0 && o !== "") {
        const g = this.normals.length;
        h = this.parseNormalIndex(o, g), f = this.parseNormalIndex(l, g), d = this.parseNormalIndex(c, g), this.addNormal(h, f, d);
      } else
        this.addFaceNormal(h, f, d);
      if (i !== void 0 && i !== "") {
        const g = this.uvs.length;
        h = this.parseUVIndex(i, g), f = this.parseUVIndex(r, g), d = this.parseUVIndex(s, g), this.addUV(h, f, d), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(e) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let n = 0, i = e.length; n < i; n++) {
        const r = this.parseVertexIndex(e[n], t);
        this.addVertexPoint(r), this.addColor(r);
      }
    },
    addLineGeometry: function(e, t) {
      this.object.geometry.type = "Line";
      const n = this.vertices.length, i = this.uvs.length;
      for (let r = 0, s = e.length; r < s; r++)
        this.addVertexLine(this.parseVertexIndex(e[r], n));
      for (let r = 0, s = t.length; r < s; r++)
        this.addUVLine(this.parseUVIndex(t[r], i));
    }
  };
  return a.startObject("", !1), a;
}
class Lx extends an {
  constructor(e) {
    super(e), this.materials = null;
  }
  load(e, t, n, i) {
    const r = this, s = new Mn(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(o) {
      try {
        t(r.parse(o));
      } catch (l) {
        i ? i(l) : console.error(l), r.manager.itemError(e);
      }
    }, n, i);
  }
  setMaterials(e) {
    return this.materials = e, this;
  }
  parse(e) {
    const t = new Cx();
    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`)), e.indexOf(`\\
`) !== -1 && (e = e.replace(/\\\n/g, ""));
    const n = e.split(`
`);
    let i = [];
    for (let o = 0, l = n.length; o < l; o++) {
      const c = n[o].trimStart();
      if (c.length === 0)
        continue;
      const u = c.charAt(0);
      if (u !== "#")
        if (u === "v") {
          const h = c.split(Sc);
          switch (h[0]) {
            case "v":
              t.vertices.push(
                parseFloat(h[1]),
                parseFloat(h[2]),
                parseFloat(h[3])
              ), h.length >= 7 ? (hs.setRGB(
                parseFloat(h[4]),
                parseFloat(h[5]),
                parseFloat(h[6])
              ).convertSRGBToLinear(), t.colors.push(hs.r, hs.g, hs.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(h[1]),
                parseFloat(h[2]),
                parseFloat(h[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(h[1]),
                parseFloat(h[2])
              );
              break;
          }
        } else if (u === "f") {
          const f = c.slice(1).trim().split(Sc), d = [];
          for (let m = 0, p = f.length; m < p; m++) {
            const y = f[m];
            if (y.length > 0) {
              const M = y.split("/");
              d.push(M);
            }
          }
          const g = d[0];
          for (let m = 1, p = d.length - 1; m < p; m++) {
            const y = d[m], M = d[m + 1];
            t.addFace(
              g[0],
              y[0],
              M[0],
              g[1],
              y[1],
              M[1],
              g[2],
              y[2],
              M[2]
            );
          }
        } else if (u === "l") {
          const h = c.substring(1).trim().split(" ");
          let f = [];
          const d = [];
          if (c.indexOf("/") === -1)
            f = h;
          else
            for (let g = 0, m = h.length; g < m; g++) {
              const p = h[g].split("/");
              p[0] !== "" && f.push(p[0]), p[1] !== "" && d.push(p[1]);
            }
          t.addLineGeometry(f, d);
        } else if (u === "p") {
          const f = c.slice(1).trim().split(" ");
          t.addPointGeometry(f);
        } else if ((i = Sx.exec(c)) !== null) {
          const h = (" " + i[0].slice(1).trim()).slice(1);
          t.startObject(h);
        } else if (Ex.test(c))
          t.object.startMaterial(c.substring(7).trim(), t.materialLibraries);
        else if (Tx.test(c))
          t.materialLibraries.push(c.substring(7).trim());
        else if (Ax.test(c))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (u === "s") {
          if (i = c.split(" "), i.length > 1) {
            const f = i[1].trim().toLowerCase();
            t.object.smooth = f !== "0" && f !== "off";
          } else
            t.object.smooth = !0;
          const h = t.object.currentMaterial();
          h && (h.smooth = t.object.smooth);
        } else {
          if (c === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + c + '"');
        }
    }
    t.finalize();
    const r = new nn();
    if (r.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let o = 0, l = t.objects.length; o < l; o++) {
        const c = t.objects[o], u = c.geometry, h = c.materials, f = u.type === "Line", d = u.type === "Points";
        let g = !1;
        if (u.vertices.length === 0)
          continue;
        const m = new Je();
        m.setAttribute("position", new Se(u.vertices, 3)), u.normals.length > 0 && m.setAttribute("normal", new Se(u.normals, 3)), u.colors.length > 0 && (g = !0, m.setAttribute("color", new Se(u.colors, 3))), u.hasUVIndices === !0 && m.setAttribute("uv", new Se(u.uvs, 2));
        const p = [];
        for (let M = 0, x = h.length; M < x; M++) {
          const v = h[M], w = v.name + "_" + v.smooth + "_" + g;
          let b = t.materials[w];
          if (this.materials !== null) {
            if (b = this.materials.create(v.name), f && b && !(b instanceof Zn)) {
              const E = new Zn();
              yt.prototype.copy.call(E, b), E.color.copy(b.color), b = E;
            } else if (d && b && !(b instanceof Di)) {
              const E = new Di({ size: 10, sizeAttenuation: !1 });
              yt.prototype.copy.call(E, b), E.color.copy(b.color), E.map = b.map, b = E;
            }
          }
          b === void 0 && (f ? b = new Zn() : d ? b = new Di({ size: 1, sizeAttenuation: !1 }) : b = new dr(), b.name = v.name, b.flatShading = !v.smooth, b.vertexColors = g, t.materials[w] = b), p.push(b);
        }
        let y;
        if (p.length > 1) {
          for (let M = 0, x = h.length; M < x; M++) {
            const v = h[M];
            m.addGroup(v.groupStart, v.groupCount, M);
          }
          f ? y = new Fa(m, p) : d ? y = new ms(m, p) : y = new vt(m, p);
        } else
          f ? y = new Fa(m, p[0]) : d ? y = new ms(m, p[0]) : y = new vt(m, p[0]);
        y.name = c.name, r.add(y);
      }
    else if (t.vertices.length > 0) {
      const o = new Di({ size: 1, sizeAttenuation: !1 }), l = new Je();
      l.setAttribute("position", new Se(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (l.setAttribute("color", new Se(t.colors, 3)), o.vertexColors = !0);
      const c = new ms(l, o);
      r.add(c);
    }
    return r;
  }
}
class Px extends ex {
  constructor(e) {
    super(e), this.type = gn;
  }
  parse(e) {
    const o = function(x, v) {
      switch (x) {
        case 1:
          console.error("THREE.RGBELoader Read Error: " + (v || ""));
          break;
        case 2:
          console.error("THREE.RGBELoader Write Error: " + (v || ""));
          break;
        case 3:
          console.error("THREE.RGBELoader Bad File Format: " + (v || ""));
          break;
        default:
        case 4:
          console.error("THREE.RGBELoader: Error: " + (v || ""));
      }
      return -1;
    }, h = `
`, f = function(x, v, w) {
      v = v || 1024;
      let E = x.pos, _ = -1, S = 0, C = "", I = String.fromCharCode.apply(null, new Uint16Array(x.subarray(E, E + 128)));
      for (; 0 > (_ = I.indexOf(h)) && S < v && E < x.byteLength; )
        C += I, S += I.length, E += 128, I += String.fromCharCode.apply(null, new Uint16Array(x.subarray(E, E + 128)));
      return -1 < _ ? (w !== !1 && (x.pos += S + _ + 1), C + I.slice(0, _)) : !1;
    }, d = function(x) {
      const v = /^#\?(\S+)/, w = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, b = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, E = /^\s*FORMAT=(\S+)\s*$/, _ = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, S = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let C, I;
      if (x.pos >= x.byteLength || !(C = f(x)))
        return o(1, "no header found");
      if (!(I = C.match(v)))
        return o(3, "bad initial token");
      for (S.valid |= 1, S.programtype = I[1], S.string += C + `
`; C = f(x), C !== !1; ) {
        if (S.string += C + `
`, C.charAt(0) === "#") {
          S.comments += C + `
`;
          continue;
        }
        if ((I = C.match(w)) && (S.gamma = parseFloat(I[1])), (I = C.match(b)) && (S.exposure = parseFloat(I[1])), (I = C.match(E)) && (S.valid |= 2, S.format = I[1]), (I = C.match(_)) && (S.valid |= 4, S.height = parseInt(I[1], 10), S.width = parseInt(I[2], 10)), S.valid & 2 && S.valid & 4)
          break;
      }
      return S.valid & 2 ? S.valid & 4 ? S : o(3, "missing image size specifier") : o(3, "missing format specifier");
    }, g = function(x, v, w) {
      const b = v;
      if (b < 8 || b > 32767 || x[0] !== 2 || x[1] !== 2 || x[2] & 128)
        return new Uint8Array(x);
      if (b !== (x[2] << 8 | x[3]))
        return o(3, "wrong scanline width");
      const E = new Uint8Array(4 * v * w);
      if (!E.length)
        return o(4, "unable to allocate buffer space");
      let _ = 0, S = 0;
      const C = 4 * b, I = new Uint8Array(4), H = new Uint8Array(C);
      let O = w;
      for (; O > 0 && S < x.byteLength; ) {
        if (S + 4 > x.byteLength)
          return o(1);
        if (I[0] = x[S++], I[1] = x[S++], I[2] = x[S++], I[3] = x[S++], I[0] != 2 || I[1] != 2 || (I[2] << 8 | I[3]) != b)
          return o(3, "bad rgbe scanline format");
        let D = 0, B;
        for (; D < C && S < x.byteLength; ) {
          B = x[S++];
          const ee = B > 128;
          if (ee && (B -= 128), B === 0 || D + B > C)
            return o(3, "bad scanline data");
          if (ee) {
            const W = x[S++];
            for (let te = 0; te < B; te++)
              H[D++] = W;
          } else
            H.set(x.subarray(S, S + B), D), D += B, S += B;
        }
        const J = b;
        for (let ee = 0; ee < J; ee++) {
          let W = 0;
          E[_] = H[ee + W], W += b, E[_ + 1] = H[ee + W], W += b, E[_ + 2] = H[ee + W], W += b, E[_ + 3] = H[ee + W], _ += 4;
        }
        O--;
      }
      return E;
    }, m = function(x, v, w, b) {
      const E = x[v + 3], _ = Math.pow(2, E - 128) / 255;
      w[b + 0] = x[v + 0] * _, w[b + 1] = x[v + 1] * _, w[b + 2] = x[v + 2] * _, w[b + 3] = 1;
    }, p = function(x, v, w, b) {
      const E = x[v + 3], _ = Math.pow(2, E - 128) / 255;
      w[b + 0] = cs.toHalfFloat(Math.min(x[v + 0] * _, 65504)), w[b + 1] = cs.toHalfFloat(Math.min(x[v + 1] * _, 65504)), w[b + 2] = cs.toHalfFloat(Math.min(x[v + 2] * _, 65504)), w[b + 3] = cs.toHalfFloat(1);
    }, y = new Uint8Array(e);
    y.pos = 0;
    const M = d(y);
    if (M !== -1) {
      const x = M.width, v = M.height, w = g(y.subarray(y.pos), x, v);
      if (w !== -1) {
        let b, E, _;
        switch (this.type) {
          case $t:
            _ = w.length / 4;
            const S = new Float32Array(_ * 4);
            for (let I = 0; I < _; I++)
              m(w, I * 4, S, I * 4);
            b = S, E = $t;
            break;
          case gn:
            _ = w.length / 4;
            const C = new Uint16Array(_ * 4);
            for (let I = 0; I < _; I++)
              p(w, I * 4, C, I * 4);
            b = C, E = gn;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: x,
          height: v,
          data: b,
          header: M.string,
          gamma: M.gamma,
          exposure: M.exposure,
          type: E
        };
      }
    }
    return null;
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, i) {
    function r(s, o) {
      switch (s.type) {
        case $t:
        case gn:
          s.encoding = Dn, s.minFilter = xt, s.magFilter = xt, s.generateMipmaps = !1, s.flipY = !0;
          break;
      }
      t && t(s, o);
    }
    return super.load(e, r, n, i);
  }
}
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Cc = function(a) {
  return URL.createObjectURL(new Blob([a], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(Cc(""));
} catch {
  Cc = function(e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  };
}
var Ft = Uint8Array, Ln = Uint16Array, Va = Uint32Array, Sh = new Ft([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Th = new Ft([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Rx = new Ft([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Eh = function(a, e) {
  for (var t = new Ln(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << a[n - 1];
  for (var i = new Va(t[30]), n = 1; n < 30; ++n)
    for (var r = t[n]; r < t[n + 1]; ++r)
      i[r] = r - t[n] << 5 | n;
  return [t, i];
}, Ah = Eh(Sh, 2), Ch = Ah[0], Dx = Ah[1];
Ch[28] = 258, Dx[258] = 28;
var Ix = Eh(Th, 0), Fx = Ix[0], Ga = new Ln(32768);
for (var et = 0; et < 32768; ++et) {
  var An = (et & 43690) >>> 1 | (et & 21845) << 1;
  An = (An & 52428) >>> 2 | (An & 13107) << 2, An = (An & 61680) >>> 4 | (An & 3855) << 4, Ga[et] = ((An & 65280) >>> 8 | (An & 255) << 8) >>> 1;
}
var pr = function(a, e, t) {
  for (var n = a.length, i = 0, r = new Ln(e); i < n; ++i)
    ++r[a[i] - 1];
  var s = new Ln(e);
  for (i = 0; i < e; ++i)
    s[i] = s[i - 1] + r[i - 1] << 1;
  var o;
  if (t) {
    o = new Ln(1 << e);
    var l = 15 - e;
    for (i = 0; i < n; ++i)
      if (a[i])
        for (var c = i << 4 | a[i], u = e - a[i], h = s[a[i] - 1]++ << u, f = h | (1 << u) - 1; h <= f; ++h)
          o[Ga[h] >>> l] = c;
  } else
    for (o = new Ln(n), i = 0; i < n; ++i)
      a[i] && (o[i] = Ga[s[a[i] - 1]++] >>> 15 - a[i]);
  return o;
}, Cr = new Ft(288);
for (var et = 0; et < 144; ++et)
  Cr[et] = 8;
for (var et = 144; et < 256; ++et)
  Cr[et] = 9;
for (var et = 256; et < 280; ++et)
  Cr[et] = 7;
for (var et = 280; et < 288; ++et)
  Cr[et] = 8;
var Lh = new Ft(32);
for (var et = 0; et < 32; ++et)
  Lh[et] = 5;
var Ox = /* @__PURE__ */ pr(Cr, 9, 1), Nx = /* @__PURE__ */ pr(Lh, 5, 1), wa = function(a) {
  for (var e = a[0], t = 1; t < a.length; ++t)
    a[t] > e && (e = a[t]);
  return e;
}, qt = function(a, e, t) {
  var n = e / 8 | 0;
  return (a[n] | a[n + 1] << 8) >> (e & 7) & t;
}, Sa = function(a, e) {
  var t = e / 8 | 0;
  return (a[t] | a[t + 1] << 8 | a[t + 2] << 16) >> (e & 7);
}, zx = function(a) {
  return (a / 8 | 0) + (a & 7 && 1);
}, Po = function(a, e, t) {
  (e == null || e < 0) && (e = 0), (t == null || t > a.length) && (t = a.length);
  var n = new (a instanceof Ln ? Ln : a instanceof Va ? Va : Ft)(t - e);
  return n.set(a.subarray(e, t)), n;
}, Ph = function(a, e, t) {
  var n = a.length;
  if (!n || t && !t.l && n < 5)
    return e || new Ft(0);
  var i = !e || t, r = !t || t.i;
  t || (t = {}), e || (e = new Ft(n * 3));
  var s = function(X) {
    var Pe = e.length;
    if (X > Pe) {
      var me = new Ft(Math.max(Pe * 2, X));
      me.set(e), e = me;
    }
  }, o = t.f || 0, l = t.p || 0, c = t.b || 0, u = t.l, h = t.d, f = t.m, d = t.n, g = n * 8;
  do {
    if (!u) {
      t.f = o = qt(a, l, 1);
      var m = qt(a, l + 1, 3);
      if (l += 3, m)
        if (m == 1)
          u = Ox, h = Nx, f = 9, d = 5;
        else if (m == 2) {
          var x = qt(a, l, 31) + 257, v = qt(a, l + 10, 15) + 4, w = x + qt(a, l + 5, 31) + 1;
          l += 14;
          for (var b = new Ft(w), E = new Ft(19), _ = 0; _ < v; ++_)
            E[Rx[_]] = qt(a, l + _ * 3, 7);
          l += v * 3;
          for (var S = wa(E), C = (1 << S) - 1, I = pr(E, S, 1), _ = 0; _ < w; ) {
            var H = I[qt(a, l, C)];
            l += H & 15;
            var p = H >>> 4;
            if (p < 16)
              b[_++] = p;
            else {
              var O = 0, D = 0;
              for (p == 16 ? (D = 3 + qt(a, l, 3), l += 2, O = b[_ - 1]) : p == 17 ? (D = 3 + qt(a, l, 7), l += 3) : p == 18 && (D = 11 + qt(a, l, 127), l += 7); D--; )
                b[_++] = O;
            }
          }
          var B = b.subarray(0, x), J = b.subarray(x);
          f = wa(B), d = wa(J), u = pr(B, f, 1), h = pr(J, d, 1);
        } else
          throw "invalid block type";
      else {
        var p = zx(l) + 4, y = a[p - 4] | a[p - 3] << 8, M = p + y;
        if (M > n) {
          if (r)
            throw "unexpected EOF";
          break;
        }
        i && s(c + y), e.set(a.subarray(p, M), c), t.b = c += y, t.p = l = M * 8;
        continue;
      }
      if (l > g) {
        if (r)
          throw "unexpected EOF";
        break;
      }
    }
    i && s(c + 131072);
    for (var ee = (1 << f) - 1, W = (1 << d) - 1, te = l; ; te = l) {
      var O = u[Sa(a, l) & ee], Q = O >>> 4;
      if (l += O & 15, l > g) {
        if (r)
          throw "unexpected EOF";
        break;
      }
      if (!O)
        throw "invalid length/literal";
      if (Q < 256)
        e[c++] = Q;
      else if (Q == 256) {
        te = l, u = null;
        break;
      } else {
        var G = Q - 254;
        if (Q > 264) {
          var _ = Q - 257, k = Sh[_];
          G = qt(a, l, (1 << k) - 1) + Ch[_], l += k;
        }
        var ae = h[Sa(a, l) & W], re = ae >>> 4;
        if (!ae)
          throw "invalid distance";
        l += ae & 15;
        var J = Fx[re];
        if (re > 3) {
          var k = Th[re];
          J += Sa(a, l) & (1 << k) - 1, l += k;
        }
        if (l > g) {
          if (r)
            throw "unexpected EOF";
          break;
        }
        i && s(c + 131072);
        for (var le = c + G; c < le; c += 4)
          e[c] = e[c - J], e[c + 1] = e[c + 1 - J], e[c + 2] = e[c + 2 - J], e[c + 3] = e[c + 3 - J];
        c = le;
      }
    }
    t.l = u, t.p = te, t.b = c, u && (o = 1, t.m = f, t.d = h, t.n = d);
  } while (!o);
  return c == e.length ? e : Po(e, 0, c);
}, Ux = /* @__PURE__ */ new Ft(0), tn = function(a, e) {
  return a[e] | a[e + 1] << 8;
}, Jt = function(a, e) {
  return (a[e] | a[e + 1] << 8 | a[e + 2] << 16 | a[e + 3] << 24) >>> 0;
}, Ta = function(a, e) {
  return Jt(a, e) + Jt(a, e + 4) * 4294967296;
}, Bx = function(a) {
  if ((a[0] & 15) != 8 || a[0] >>> 4 > 7 || (a[0] << 8 | a[1]) % 31)
    throw "invalid zlib data";
  if (a[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function kx(a, e) {
  return Ph(a, e);
}
function Vx(a, e) {
  return Ph((Bx(a), a.subarray(2, -4)), e);
}
var Ha = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Gx = 0;
try {
  Ha.decode(Ux, { stream: !0 }), Gx = 1;
} catch {
}
var Hx = function(a) {
  for (var e = "", t = 0; ; ) {
    var n = a[t++], i = (n > 127) + (n > 223) + (n > 239);
    if (t + i > a.length)
      return [e, Po(a, t - 1)];
    i ? i == 3 ? (n = ((n & 15) << 18 | (a[t++] & 63) << 12 | (a[t++] & 63) << 6 | a[t++] & 63) - 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : i & 1 ? e += String.fromCharCode((n & 31) << 6 | a[t++] & 63) : e += String.fromCharCode((n & 15) << 12 | (a[t++] & 63) << 6 | a[t++] & 63) : e += String.fromCharCode(n);
  }
};
function Wa(a, e) {
  if (e) {
    for (var t = "", n = 0; n < a.length; n += 16384)
      t += String.fromCharCode.apply(null, a.subarray(n, n + 16384));
    return t;
  } else {
    if (Ha)
      return Ha.decode(a);
    var i = Hx(a), r = i[0], s = i[1];
    if (s.length)
      throw "invalid utf-8 data";
    return r;
  }
}
var Wx = function(a, e) {
  return e + 30 + tn(a, e + 26) + tn(a, e + 28);
}, Xx = function(a, e, t) {
  var n = tn(a, e + 28), i = Wa(a.subarray(e + 46, e + 46 + n), !(tn(a, e + 8) & 2048)), r = e + 46 + n, s = Jt(a, e + 20), o = t && s == 4294967295 ? qx(a, r) : [s, Jt(a, e + 24), Jt(a, e + 42)], l = o[0], c = o[1], u = o[2];
  return [tn(a, e + 10), l, c, i, r + tn(a, e + 30) + tn(a, e + 32), u];
}, qx = function(a, e) {
  for (; tn(a, e) != 1; e += 4 + tn(a, e + 2))
    ;
  return [Ta(a, e + 12), Ta(a, e + 4), Ta(a, e + 20)];
};
function Yx(a) {
  for (var e = {}, t = a.length - 22; Jt(a, t) != 101010256; --t)
    if (!t || a.length - t > 65558)
      throw "invalid zip file";
  var n = tn(a, t + 8);
  if (!n)
    return {};
  var i = Jt(a, t + 16), r = i == 4294967295;
  if (r) {
    if (t = Jt(a, t - 12), Jt(a, t) != 101075792)
      throw "invalid zip file";
    n = Jt(a, t + 32), i = Jt(a, t + 48);
  }
  for (var s = 0; s < n; ++s) {
    var o = Xx(a, i, r), l = o[0], c = o[1], u = o[2], h = o[3], f = o[4], d = o[5], g = Wx(a, d);
    if (i = f, !l)
      e[h] = Po(a, g, g + c);
    else if (l == 8)
      e[h] = kx(a.subarray(g, g + c), new Ft(u));
    else
      throw "unknown compression type " + l;
  }
  return e;
}
function Rh(a, e, t) {
  const n = t.length - a - 1;
  if (e >= t[n])
    return n - 1;
  if (e <= t[a])
    return a;
  let i = a, r = n, s = Math.floor((i + r) / 2);
  for (; e < t[s] || e >= t[s + 1]; )
    e < t[s] ? r = s : i = s, s = Math.floor((i + r) / 2);
  return s;
}
function Jx(a, e, t, n) {
  const i = [], r = [], s = [];
  i[0] = 1;
  for (let o = 1; o <= t; ++o) {
    r[o] = e - n[a + 1 - o], s[o] = n[a + o] - e;
    let l = 0;
    for (let c = 0; c < o; ++c) {
      const u = s[c + 1], h = r[o - c], f = i[c] / (u + h);
      i[c] = l + u * f, l = h * f;
    }
    i[o] = l;
  }
  return i;
}
function Zx(a, e, t, n) {
  const i = Rh(a, n, e), r = Jx(i, n, a, e), s = new Ye(0, 0, 0, 0);
  for (let o = 0; o <= a; ++o) {
    const l = t[i - a + o], c = r[o], u = l.w * c;
    s.x += l.x * u, s.y += l.y * u, s.z += l.z * u, s.w += l.w * c;
  }
  return s;
}
function $x(a, e, t, n, i) {
  const r = [];
  for (let h = 0; h <= t; ++h)
    r[h] = 0;
  const s = [];
  for (let h = 0; h <= n; ++h)
    s[h] = r.slice(0);
  const o = [];
  for (let h = 0; h <= t; ++h)
    o[h] = r.slice(0);
  o[0][0] = 1;
  const l = r.slice(0), c = r.slice(0);
  for (let h = 1; h <= t; ++h) {
    l[h] = e - i[a + 1 - h], c[h] = i[a + h] - e;
    let f = 0;
    for (let d = 0; d < h; ++d) {
      const g = c[d + 1], m = l[h - d];
      o[h][d] = g + m;
      const p = o[d][h - 1] / o[h][d];
      o[d][h] = f + g * p, f = m * p;
    }
    o[h][h] = f;
  }
  for (let h = 0; h <= t; ++h)
    s[0][h] = o[h][t];
  for (let h = 0; h <= t; ++h) {
    let f = 0, d = 1;
    const g = [];
    for (let m = 0; m <= t; ++m)
      g[m] = r.slice(0);
    g[0][0] = 1;
    for (let m = 1; m <= n; ++m) {
      let p = 0;
      const y = h - m, M = t - m;
      h >= m && (g[d][0] = g[f][0] / o[M + 1][y], p = g[d][0] * o[y][M]);
      const x = y >= -1 ? 1 : -y, v = h - 1 <= M ? m - 1 : t - h;
      for (let b = x; b <= v; ++b)
        g[d][b] = (g[f][b] - g[f][b - 1]) / o[M + 1][y + b], p += g[d][b] * o[y + b][M];
      h <= M && (g[d][m] = -g[f][m - 1] / o[M + 1][h], p += g[d][m] * o[h][M]), s[m][h] = p;
      const w = f;
      f = d, d = w;
    }
  }
  let u = t;
  for (let h = 1; h <= n; ++h) {
    for (let f = 0; f <= t; ++f)
      s[h][f] *= u;
    u *= t - h;
  }
  return s;
}
function Kx(a, e, t, n, i) {
  const r = i < a ? i : a, s = [], o = Rh(a, n, e), l = $x(o, n, a, r, e), c = [];
  for (let u = 0; u < t.length; ++u) {
    const h = t[u].clone(), f = h.w;
    h.x *= f, h.y *= f, h.z *= f, c[u] = h;
  }
  for (let u = 0; u <= r; ++u) {
    const h = c[o - a].clone().multiplyScalar(l[u][0]);
    for (let f = 1; f <= a; ++f)
      h.add(c[o - a + f].clone().multiplyScalar(l[u][f]));
    s[u] = h;
  }
  for (let u = r + 1; u <= i + 1; ++u)
    s[u] = new Ye(0, 0, 0);
  return s;
}
function jx(a, e) {
  let t = 1;
  for (let i = 2; i <= a; ++i)
    t *= i;
  let n = 1;
  for (let i = 2; i <= e; ++i)
    n *= i;
  for (let i = 2; i <= a - e; ++i)
    n *= i;
  return t / n;
}
function Qx(a) {
  const e = a.length, t = [], n = [];
  for (let r = 0; r < e; ++r) {
    const s = a[r];
    t[r] = new L(s.x, s.y, s.z), n[r] = s.w;
  }
  const i = [];
  for (let r = 0; r < e; ++r) {
    const s = t[r].clone();
    for (let o = 1; o <= r; ++o)
      s.sub(i[r - o].clone().multiplyScalar(jx(r, o) * n[o]));
    i[r] = s.divideScalar(n[0]);
  }
  return i;
}
function e_(a, e, t, n, i) {
  const r = Kx(a, e, t, n, i);
  return Qx(r);
}
class t_ extends Kt {
  constructor(e, t, n, i, r) {
    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = r || this.knots.length - 1;
    for (let s = 0; s < n.length; ++s) {
      const o = n[s];
      this.controlPoints[s] = new Ye(o.x, o.y, o.z, o.w);
    }
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), r = Zx(this.degree, this.knots, this.controlPoints, i);
    return r.w !== 1 && r.divideScalar(r.w), n.set(r.x, r.y, r.z);
  }
  getTangent(e, t = new L()) {
    const n = t, i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), r = e_(this.degree, this.knots, this.controlPoints, i, 1);
    return n.copy(r[1]).normalize(), n;
  }
}
let ze, it, Lt;
class n_ extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, s = r.path === "" ? Tr.extractUrlBase(e) : r.path, o = new Mn(this.manager);
    o.setPath(r.path), o.setResponseType("arraybuffer"), o.setRequestHeader(r.requestHeader), o.setWithCredentials(r.withCredentials), o.load(e, function(l) {
      try {
        t(r.parse(l, s));
      } catch (c) {
        i ? i(c) : console.error(c), r.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e, t) {
    if (l_(e))
      ze = new o_().parse(e);
    else {
      const i = Oh(e);
      if (!c_(i))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (Pc(i) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Pc(i));
      ze = new a_().parse(i);
    }
    const n = new So(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new i_(n, this.manager).parse(ze);
  }
}
class i_ {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    it = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), i = this.parseDeformers(), r = new r_().parse(i);
    return this.parseScene(i, r, n), Lt;
  }
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in ze && ze.Connections.connections.forEach(function(n) {
      const i = n[0], r = n[1], s = n[2];
      e.has(i) || e.set(i, {
        parents: [],
        children: []
      });
      const o = { ID: r, relationship: s };
      e.get(i).parents.push(o), e.has(r) || e.set(r, {
        parents: [],
        children: []
      });
      const l = { ID: i, relationship: s };
      e.get(r).children.push(l);
    }), e;
  }
  parseImages() {
    const e = {}, t = {};
    if ("Video" in ze.Objects) {
      const n = ze.Objects.Video;
      for (const i in n) {
        const r = n[i], s = parseInt(i);
        if (e[s] = r.RelativeFilename || r.Filename, "Content" in r) {
          const o = r.Content instanceof ArrayBuffer && r.Content.byteLength > 0, l = typeof r.Content == "string" && r.Content !== "";
          if (o || l) {
            const c = this.parseImage(n[i]);
            t[r.RelativeFilename || r.Filename] = c;
          }
        }
      }
    }
    for (const n in e) {
      const i = e[n];
      t[i] !== void 0 ? e[n] = t[i] : e[n] = e[n].split("\\").pop();
    }
    return e;
  }
  parseImage(e) {
    const t = e.Content, n = e.RelativeFilename || e.Filename, i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let r;
    switch (i) {
      case "bmp":
        r = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        r = "image/jpeg";
        break;
      case "png":
        r = "image/png";
        break;
      case "tif":
        r = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), r = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + i + '" is not supported.');
        return;
    }
    if (typeof t == "string")
      return "data:" + r + ";base64," + t;
    {
      const s = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([s], { type: r }));
    }
  }
  parseTextures(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Texture" in ze.Objects) {
      const n = ze.Objects.Texture;
      for (const i in n) {
        const r = this.parseTexture(n[i], e);
        t.set(parseInt(i), r);
      }
    }
    return t;
  }
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    n.ID = e.id, n.name = e.attrName;
    const i = e.WrapModeU, r = e.WrapModeV, s = i !== void 0 ? i.value : 0, o = r !== void 0 ? r.value : 0;
    if (n.wrapS = s === 0 ? vn : _t, n.wrapT = o === 0 ? vn : _t, "Scaling" in e) {
      const l = e.Scaling.value;
      n.repeat.x = l[0], n.repeat.y = l[1];
    }
    if ("Translation" in e) {
      const l = e.Translation.value;
      n.offset.x = l[0], n.offset.y = l[1];
    }
    return n;
  }
  loadTexture(e, t) {
    let n;
    const i = this.textureLoader.path, r = it.get(e.id).children;
    r !== void 0 && r.length > 0 && t[r[0].ID] !== void 0 && (n = t[r[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let s;
    const o = e.FileName.slice(-3).toLowerCase();
    if (o === "tga") {
      const l = this.manager.getHandler(".tga");
      l === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), s = new rt()) : (l.setPath(this.textureLoader.path), s = l.load(n));
    } else
      o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), s = new rt()) : s = this.textureLoader.load(n);
    return this.textureLoader.setPath(i), s;
  }
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in ze.Objects) {
      const n = ze.Objects.Material;
      for (const i in n) {
        const r = this.parseMaterial(n[i], e);
        r !== null && t.set(parseInt(i), r);
      }
    }
    return t;
  }
  parseMaterial(e, t) {
    const n = e.id, i = e.attrName;
    let r = e.ShadingModel;
    if (typeof r == "object" && (r = r.value), !it.has(n))
      return null;
    const s = this.parseParameters(e, t, n);
    let o;
    switch (r.toLowerCase()) {
      case "phong":
        o = new dr();
        break;
      case "lambert":
        o = new gh();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', r), o = new dr();
        break;
    }
    return o.setValues(s), o.name = i, o;
  }
  parseParameters(e, t, n) {
    const i = {};
    e.BumpFactor && (i.bumpScale = e.BumpFactor.value), e.Diffuse ? i.color = new Me().fromArray(e.Diffuse.value) : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (i.color = new Me().fromArray(e.DiffuseColor.value)), e.DisplacementFactor && (i.displacementScale = e.DisplacementFactor.value), e.Emissive ? i.emissive = new Me().fromArray(e.Emissive.value) : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (i.emissive = new Me().fromArray(e.EmissiveColor.value)), e.EmissiveFactor && (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (i.opacity = parseFloat(e.Opacity.value)), i.opacity < 1 && (i.transparent = !0), e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value), e.Shininess && (i.shininess = e.Shininess.value), e.Specular ? i.specular = new Me().fromArray(e.Specular.value) : e.SpecularColor && e.SpecularColor.type === "Color" && (i.specular = new Me().fromArray(e.SpecularColor.value));
    const r = this;
    return it.get(n).children.forEach(function(s) {
      const o = s.relationship;
      switch (o) {
        case "Bump":
          i.bumpMap = r.getTexture(t, s.ID);
          break;
        case "Maya|TEX_ao_map":
          i.aoMap = r.getTexture(t, s.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          i.map = r.getTexture(t, s.ID), i.map !== void 0 && (i.map.encoding = Xe);
          break;
        case "DisplacementColor":
          i.displacementMap = r.getTexture(t, s.ID);
          break;
        case "EmissiveColor":
          i.emissiveMap = r.getTexture(t, s.ID), i.emissiveMap !== void 0 && (i.emissiveMap.encoding = Xe);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          i.normalMap = r.getTexture(t, s.ID);
          break;
        case "ReflectionColor":
          i.envMap = r.getTexture(t, s.ID), i.envMap !== void 0 && (i.envMap.mapping = Ui, i.envMap.encoding = Xe);
          break;
        case "SpecularColor":
          i.specularMap = r.getTexture(t, s.ID), i.specularMap !== void 0 && (i.specularMap.encoding = Xe);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          i.alphaMap = r.getTexture(t, s.ID), i.transparent = !0;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", o);
          break;
      }
    }), i;
  }
  getTexture(e, t) {
    return "LayeredTexture" in ze.Objects && t in ze.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = it.get(t).children[0].ID), e.get(t);
  }
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in ze.Objects) {
      const n = ze.Objects.Deformer;
      for (const i in n) {
        const r = n[i], s = it.get(parseInt(i));
        if (r.attrType === "Skin") {
          const o = this.parseSkeleton(s, n);
          o.ID = i, s.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), o.geometryID = s.parents[0].ID, e[i] = o;
        } else if (r.attrType === "BlendShape") {
          const o = {
            id: i
          };
          o.rawTargets = this.parseMorphTargets(s, n), o.id = i, s.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[i] = o;
        }
      }
    }
    return {
      skeletons: e,
      morphTargets: t
    };
  }
  parseSkeleton(e, t) {
    const n = [];
    return e.children.forEach(function(i) {
      const r = t[i.ID];
      if (r.attrType !== "Cluster")
        return;
      const s = {
        ID: i.ID,
        indices: [],
        weights: [],
        transformLink: new ye().fromArray(r.TransformLink.a)
      };
      "Indexes" in r && (s.indices = r.Indexes.a, s.weights = r.Weights.a), n.push(s);
    }), {
      rawBones: n,
      bones: []
    };
  }
  parseMorphTargets(e, t) {
    const n = [];
    for (let i = 0; i < e.children.length; i++) {
      const r = e.children[i], s = t[r.ID], o = {
        name: s.attrName,
        initialWeight: s.DeformPercent,
        id: s.id,
        fullWeights: s.FullWeights.a
      };
      if (s.attrType !== "BlendShapeChannel")
        return;
      o.geoID = it.get(parseInt(r.ID)).children.filter(function(l) {
        return l.relationship === void 0;
      })[0].ID, n.push(o);
    }
    return n;
  }
  parseScene(e, t, n) {
    Lt = new nn();
    const i = this.parseModels(e.skeletons, t, n), r = ze.Objects.Model, s = this;
    i.forEach(function(l) {
      const c = r[l.ID];
      s.setLookAtProperties(l, c), it.get(l.ID).parents.forEach(function(h) {
        const f = i.get(h.ID);
        f !== void 0 && f.add(l);
      }), l.parent === null && Lt.add(l);
    }), this.bindSkeleton(e.skeletons, t, i), this.createAmbientLight(), Lt.traverse(function(l) {
      if (l.userData.transformData) {
        l.parent && (l.userData.transformData.parentMatrix = l.parent.matrix, l.userData.transformData.parentMatrixWorld = l.parent.matrixWorld);
        const c = Ih(l.userData.transformData);
        l.applyMatrix4(c), l.updateWorldMatrix();
      }
    });
    const o = new s_().parse();
    Lt.children.length === 1 && Lt.children[0].isGroup && (Lt.children[0].animations = o, Lt = Lt.children[0]), Lt.animations = o;
  }
  parseModels(e, t, n) {
    const i = /* @__PURE__ */ new Map(), r = ze.Objects.Model;
    for (const s in r) {
      const o = parseInt(s), l = r[s], c = it.get(o);
      let u = this.buildSkeleton(c, e, o, l.attrName);
      if (!u) {
        switch (l.attrType) {
          case "Camera":
            u = this.createCamera(c);
            break;
          case "Light":
            u = this.createLight(c);
            break;
          case "Mesh":
            u = this.createMesh(c, t, n);
            break;
          case "NurbsCurve":
            u = this.createCurve(c, t);
            break;
          case "LimbNode":
          case "Root":
            u = new ys();
            break;
          case "Null":
          default:
            u = new nn();
            break;
        }
        u.name = l.attrName ? qe.sanitizeNodeName(l.attrName) : "", u.ID = o;
      }
      this.getTransformData(u, l), i.set(o, u);
    }
    return i;
  }
  buildSkeleton(e, t, n, i) {
    let r = null;
    return e.parents.forEach(function(s) {
      for (const o in t) {
        const l = t[o];
        l.rawBones.forEach(function(c, u) {
          if (c.ID === s.ID) {
            const h = r;
            r = new ys(), r.matrixWorld.copy(c.transformLink), r.name = i ? qe.sanitizeNodeName(i) : "", r.ID = n, l.bones[u] = r, h !== null && r.add(h);
          }
        });
      }
    }), r;
  }
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const r = ze.Objects.NodeAttribute[i.ID];
      r !== void 0 && (n = r);
    }), n === void 0)
      t = new $e();
    else {
      let i = 0;
      n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (i = 1);
      let r = 1;
      n.NearPlane !== void 0 && (r = n.NearPlane.value / 1e3);
      let s = 1e3;
      n.FarPlane !== void 0 && (s = n.FarPlane.value / 1e3);
      let o = window.innerWidth, l = window.innerHeight;
      n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (o = n.AspectWidth.value, l = n.AspectHeight.value);
      const c = o / l;
      let u = 45;
      n.FieldOfView !== void 0 && (u = n.FieldOfView.value);
      const h = n.FocalLength ? n.FocalLength.value : null;
      switch (i) {
        case 0:
          t = new wt(u, c, r, s), h !== null && t.setFocalLength(h);
          break;
        case 1:
          t = new Ts(-o / 2, o / 2, l / 2, -l / 2, r, s);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + i + "."), t = new $e();
          break;
      }
    }
    return t;
  }
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const r = ze.Objects.NodeAttribute[i.ID];
      r !== void 0 && (n = r);
    }), n === void 0)
      t = new $e();
    else {
      let i;
      n.LightType === void 0 ? i = 0 : i = n.LightType.value;
      let r = 16777215;
      n.Color !== void 0 && (r = new Me().fromArray(n.Color.value));
      let s = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (s = 0);
      let o = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
      const l = 1;
      switch (i) {
        case 0:
          t = new ka(r, s, o, l);
          break;
        case 1:
          t = new wh(r, s);
          break;
        case 2:
          let c = Math.PI / 3;
          n.InnerAngle !== void 0 && (c = en.degToRad(n.InnerAngle.value));
          let u = 0;
          n.OuterAngle !== void 0 && (u = en.degToRad(n.OuterAngle.value), u = Math.max(u, 1)), t = new bh(r, s, o, c, u, l);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new ka(r, s);
          break;
      }
      n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = !0);
    }
    return t;
  }
  createMesh(e, t, n) {
    let i, r = null, s = null;
    const o = [];
    return e.children.forEach(function(l) {
      t.has(l.ID) && (r = t.get(l.ID)), n.has(l.ID) && o.push(n.get(l.ID));
    }), o.length > 1 ? s = o : o.length > 0 ? s = o[0] : (s = new dr({ color: 13421772 }), o.push(s)), "color" in r.attributes && o.forEach(function(l) {
      l.vertexColors = !0;
    }), r.FBX_Deformer ? (i = new ah(r, s), i.normalizeSkinWeights()) : i = new vt(r, s), i;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(r, s) {
      return t.has(s.ID) && (r = t.get(s.ID)), r;
    }, null), i = new Zn({ color: 3342591, linewidth: 1 });
    return new Cs(n, i);
  }
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = Fh(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && it.get(e.ID).children.forEach(function(i) {
      if (i.relationship === "LookAtProperty") {
        const r = ze.Objects.Model[i.ID];
        if ("Lcl_Translation" in r) {
          const s = r.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(s), Lt.add(e.target)) : e.lookAt(new L().fromArray(s));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    const i = this.parsePoseNodes();
    for (const r in e) {
      const s = e[r];
      it.get(parseInt(s.ID)).parents.forEach(function(l) {
        if (t.has(l.ID)) {
          const c = l.ID;
          it.get(c).parents.forEach(function(h) {
            n.has(h.ID) && n.get(h.ID).bind(new As(s.bones), i[h.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in ze.Objects) {
      const t = ze.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const i = t[n].PoseNode;
          Array.isArray(i) ? i.forEach(function(r) {
            e[r.Node] = new ye().fromArray(r.Matrix.a);
          }) : e[i.Node] = new ye().fromArray(i.Matrix.a);
        }
    }
    return e;
  }
  createAmbientLight() {
    if ("GlobalSettings" in ze && "AmbientColor" in ze.GlobalSettings) {
      const e = ze.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], i = e[2];
      if (t !== 0 || n !== 0 || i !== 0) {
        const r = new Me(t, n, i);
        Lt.add(new Eo(r, 1));
      }
    }
  }
}
class r_ {
  constructor() {
    this.negativeMaterialIndices = !1;
  }
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in ze.Objects) {
      const n = ze.Objects.Geometry;
      for (const i in n) {
        const r = it.get(parseInt(i)), s = this.parseGeometry(r, n[i], e);
        t.set(parseInt(i), s);
      }
    }
    return this.negativeMaterialIndices === !0 && console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."), t;
  }
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  parseMeshGeometry(e, t, n) {
    const i = n.skeletons, r = [], s = e.parents.map(function(h) {
      return ze.Objects.Model[h.ID];
    });
    if (s.length === 0)
      return;
    const o = e.children.reduce(function(h, f) {
      return i[f.ID] !== void 0 && (h = i[f.ID]), h;
    }, null);
    e.children.forEach(function(h) {
      n.morphTargets[h.ID] !== void 0 && r.push(n.morphTargets[h.ID]);
    });
    const l = s[0], c = {};
    "RotationOrder" in l && (c.eulerOrder = Fh(l.RotationOrder.value)), "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (c.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
    const u = Ih(c);
    return this.genGeometry(t, o, r, u);
  }
  genGeometry(e, t, n, i) {
    const r = new Je();
    e.attrName && (r.name = e.attrName);
    const s = this.parseGeoNode(e, t), o = this.genBuffers(s), l = new Se(o.vertex, 3);
    if (l.applyMatrix4(i), r.setAttribute("position", l), o.colors.length > 0 && r.setAttribute("color", new Se(o.colors, 3)), t && (r.setAttribute("skinIndex", new $a(o.weightsIndices, 4)), r.setAttribute("skinWeight", new Se(o.vertexWeights, 4)), r.FBX_Deformer = t), o.normal.length > 0) {
      const c = new Ct().getNormalMatrix(i), u = new Se(o.normal, 3);
      u.applyNormalMatrix(c), r.setAttribute("normal", u);
    }
    if (o.uvs.forEach(function(c, u) {
      let h = "uv" + (u + 1).toString();
      u === 0 && (h = "uv"), r.setAttribute(h, new Se(o.uvs[u], 2));
    }), s.material && s.material.mappingType !== "AllSame") {
      let c = o.materialIndex[0], u = 0;
      if (o.materialIndex.forEach(function(h, f) {
        h !== c && (r.addGroup(u, f - u, c), c = h, u = f);
      }), r.groups.length > 0) {
        const h = r.groups[r.groups.length - 1], f = h.start + h.count;
        f !== o.materialIndex.length && r.addGroup(f, o.materialIndex.length - f, c);
      }
      r.groups.length === 0 && r.addGroup(0, o.materialIndex.length, o.materialIndex[0]);
    }
    return this.addMorphTargets(r, e, n, i), r;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
      n.uv = [];
      let i = 0;
      for (; e.LayerElementUV[i]; )
        e.LayerElementUV[i].UV && n.uv.push(this.parseUVs(e.LayerElementUV[i])), i++;
    }
    return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(i, r) {
      i.indices.forEach(function(s, o) {
        n.weightTable[s] === void 0 && (n.weightTable[s] = []), n.weightTable[s].push({
          id: r,
          weight: i.weights[o]
        });
      });
    })), n;
  }
  genBuffers(e) {
    const t = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let n = 0, i = 0, r = !1, s = [], o = [], l = [], c = [], u = [], h = [];
    const f = this;
    return e.vertexIndices.forEach(function(d, g) {
      let m, p = !1;
      d < 0 && (d = d ^ -1, p = !0);
      let y = [], M = [];
      if (s.push(d * 3, d * 3 + 1, d * 3 + 2), e.color) {
        const x = us(g, n, d, e.color);
        l.push(x[0], x[1], x[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[d] !== void 0 && e.weightTable[d].forEach(function(x) {
          M.push(x.weight), y.push(x.id);
        }), M.length > 4) {
          r || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), r = !0);
          const x = [0, 0, 0, 0], v = [0, 0, 0, 0];
          M.forEach(function(w, b) {
            let E = w, _ = y[b];
            v.forEach(function(S, C, I) {
              if (E > S) {
                I[C] = E, E = S;
                const H = x[C];
                x[C] = _, _ = H;
              }
            });
          }), y = x, M = v;
        }
        for (; M.length < 4; )
          M.push(0), y.push(0);
        for (let x = 0; x < 4; ++x)
          u.push(M[x]), h.push(y[x]);
      }
      if (e.normal) {
        const x = us(g, n, d, e.normal);
        o.push(x[0], x[1], x[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (m = us(g, n, d, e.material)[0], m < 0 && (f.negativeMaterialIndices = !0, m = 0)), e.uv && e.uv.forEach(function(x, v) {
        const w = us(g, n, d, x);
        c[v] === void 0 && (c[v] = []), c[v].push(w[0]), c[v].push(w[1]);
      }), i++, p && (i > 4 && console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."), f.genFace(t, e, s, m, o, l, c, u, h, i), n++, i = 0, s = [], o = [], l = [], c = [], u = [], h = []);
    }), t;
  }
  genFace(e, t, n, i, r, s, o, l, c, u) {
    for (let h = 2; h < u; h++)
      e.vertex.push(t.vertexPositions[n[0]]), e.vertex.push(t.vertexPositions[n[1]]), e.vertex.push(t.vertexPositions[n[2]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3 + 1]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3 + 2]]), e.vertex.push(t.vertexPositions[n[h * 3]]), e.vertex.push(t.vertexPositions[n[h * 3 + 1]]), e.vertex.push(t.vertexPositions[n[h * 3 + 2]]), t.skeleton && (e.vertexWeights.push(l[0]), e.vertexWeights.push(l[1]), e.vertexWeights.push(l[2]), e.vertexWeights.push(l[3]), e.vertexWeights.push(l[(h - 1) * 4]), e.vertexWeights.push(l[(h - 1) * 4 + 1]), e.vertexWeights.push(l[(h - 1) * 4 + 2]), e.vertexWeights.push(l[(h - 1) * 4 + 3]), e.vertexWeights.push(l[h * 4]), e.vertexWeights.push(l[h * 4 + 1]), e.vertexWeights.push(l[h * 4 + 2]), e.vertexWeights.push(l[h * 4 + 3]), e.weightsIndices.push(c[0]), e.weightsIndices.push(c[1]), e.weightsIndices.push(c[2]), e.weightsIndices.push(c[3]), e.weightsIndices.push(c[(h - 1) * 4]), e.weightsIndices.push(c[(h - 1) * 4 + 1]), e.weightsIndices.push(c[(h - 1) * 4 + 2]), e.weightsIndices.push(c[(h - 1) * 4 + 3]), e.weightsIndices.push(c[h * 4]), e.weightsIndices.push(c[h * 4 + 1]), e.weightsIndices.push(c[h * 4 + 2]), e.weightsIndices.push(c[h * 4 + 3])), t.color && (e.colors.push(s[0]), e.colors.push(s[1]), e.colors.push(s[2]), e.colors.push(s[(h - 1) * 3]), e.colors.push(s[(h - 1) * 3 + 1]), e.colors.push(s[(h - 1) * 3 + 2]), e.colors.push(s[h * 3]), e.colors.push(s[h * 3 + 1]), e.colors.push(s[h * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(i), e.materialIndex.push(i), e.materialIndex.push(i)), t.normal && (e.normal.push(r[0]), e.normal.push(r[1]), e.normal.push(r[2]), e.normal.push(r[(h - 1) * 3]), e.normal.push(r[(h - 1) * 3 + 1]), e.normal.push(r[(h - 1) * 3 + 2]), e.normal.push(r[h * 3]), e.normal.push(r[h * 3 + 1]), e.normal.push(r[h * 3 + 2])), t.uv && t.uv.forEach(function(f, d) {
        e.uvs[d] === void 0 && (e.uvs[d] = []), e.uvs[d].push(o[d][0]), e.uvs[d].push(o[d][1]), e.uvs[d].push(o[d][(h - 1) * 2]), e.uvs[d].push(o[d][(h - 1) * 2 + 1]), e.uvs[d].push(o[d][h * 2]), e.uvs[d].push(o[d][h * 2 + 1]);
      });
  }
  addMorphTargets(e, t, n, i) {
    if (n.length === 0)
      return;
    e.morphTargetsRelative = !0, e.morphAttributes.position = [];
    const r = this;
    n.forEach(function(s) {
      s.rawTargets.forEach(function(o) {
        const l = ze.Objects.Geometry[o.geoID];
        l !== void 0 && r.genMorphGeometry(e, t, l, i, o.name);
      });
    });
  }
  genMorphGeometry(e, t, n, i, r) {
    const s = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], o = n.Vertices !== void 0 ? n.Vertices.a : [], l = n.Indexes !== void 0 ? n.Indexes.a : [], c = e.attributes.position.count * 3, u = new Float32Array(c);
    for (let g = 0; g < l.length; g++) {
      const m = l[g] * 3;
      u[m] = o[g * 3], u[m + 1] = o[g * 3 + 1], u[m + 2] = o[g * 3 + 2];
    }
    const h = {
      vertexIndices: s,
      vertexPositions: u
    }, f = this.genBuffers(h), d = new Se(f.vertex, 3);
    d.name = r || n.attrName, d.applyMatrix4(i), e.morphAttributes.position.push(d);
  }
  parseNormals(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Normals.a;
    let r = [];
    return n === "IndexToDirect" && ("NormalIndex" in e ? r = e.NormalIndex.a : "NormalsIndex" in e && (r = e.NormalsIndex.a)), {
      dataSize: 3,
      buffer: i,
      indices: r,
      mappingType: t,
      referenceType: n
    };
  }
  parseUVs(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.UV.a;
    let r = [];
    return n === "IndexToDirect" && (r = e.UVIndex.a), {
      dataSize: 2,
      buffer: i,
      indices: r,
      mappingType: t,
      referenceType: n
    };
  }
  parseVertexColors(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Colors.a;
    let r = [];
    return n === "IndexToDirect" && (r = e.ColorIndex.a), {
      dataSize: 4,
      buffer: i,
      indices: r,
      mappingType: t,
      referenceType: n
    };
  }
  parseMaterialIndices(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType;
    if (t === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n
      };
    const i = e.Materials.a, r = [];
    for (let s = 0; s < i.length; ++s)
      r.push(s);
    return {
      dataSize: 1,
      buffer: i,
      indices: r,
      mappingType: t,
      referenceType: n
    };
  }
  parseNurbsGeometry(e) {
    const t = parseInt(e.Order);
    if (isNaN(t))
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new Je();
    const n = t - 1, i = e.KnotVector.a, r = [], s = e.Points.a;
    for (let h = 0, f = s.length; h < f; h += 4)
      r.push(new Ye().fromArray(s, h));
    let o, l;
    if (e.Form === "Closed")
      r.push(r[0]);
    else if (e.Form === "Periodic") {
      o = n, l = i.length - 1 - o;
      for (let h = 0; h < n; ++h)
        r.push(r[h]);
    }
    const u = new t_(n, i, r, o, l).getPoints(r.length * 12);
    return new Je().setFromPoints(u);
  }
}
class s_ {
  parse() {
    const e = [], t = this.parseClips();
    if (t !== void 0)
      for (const n in t) {
        const i = t[n], r = this.addClip(i);
        e.push(r);
      }
    return e;
  }
  parseClips() {
    if (ze.Objects.AnimationCurve === void 0)
      return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  parseAnimationCurveNodes() {
    const e = ze.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
    for (const n in e) {
      const i = e[n];
      if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const r = {
          id: i.id,
          attr: i.attrName,
          curves: {}
        };
        t.set(r.id, r);
      }
    }
    return t;
  }
  parseAnimationCurves(e) {
    const t = ze.Objects.AnimationCurve;
    for (const n in t) {
      const i = {
        id: t[n].id,
        times: t[n].KeyTime.a.map(h_),
        values: t[n].KeyValueFloat.a
      }, r = it.get(i.id);
      if (r !== void 0) {
        const s = r.parents[0].ID, o = r.parents[0].relationship;
        o.match(/X/) ? e.get(s).curves.x = i : o.match(/Y/) ? e.get(s).curves.y = i : o.match(/Z/) ? e.get(s).curves.z = i : o.match(/d|DeformPercent/) && e.has(s) && (e.get(s).curves.morph = i);
      }
    }
  }
  parseAnimationLayers(e) {
    const t = ze.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const i in t) {
      const r = [], s = it.get(parseInt(i));
      s !== void 0 && (s.children.forEach(function(l, c) {
        if (e.has(l.ID)) {
          const u = e.get(l.ID);
          if (u.curves.x !== void 0 || u.curves.y !== void 0 || u.curves.z !== void 0) {
            if (r[c] === void 0) {
              const h = it.get(l.ID).parents.filter(function(f) {
                return f.relationship !== void 0;
              })[0].ID;
              if (h !== void 0) {
                const f = ze.Objects.Model[h.toString()];
                if (f === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                  return;
                }
                const d = {
                  modelName: f.attrName ? qe.sanitizeNodeName(f.attrName) : "",
                  ID: f.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                Lt.traverse(function(g) {
                  g.ID === f.id && (d.transform = g.matrix, g.userData.transformData && (d.eulerOrder = g.userData.transformData.eulerOrder));
                }), d.transform || (d.transform = new ye()), "PreRotation" in f && (d.preRotation = f.PreRotation.value), "PostRotation" in f && (d.postRotation = f.PostRotation.value), r[c] = d;
              }
            }
            r[c] && (r[c][u.attr] = u);
          } else if (u.curves.morph !== void 0) {
            if (r[c] === void 0) {
              const h = it.get(l.ID).parents.filter(function(y) {
                return y.relationship !== void 0;
              })[0].ID, f = it.get(h).parents[0].ID, d = it.get(f).parents[0].ID, g = it.get(d).parents[0].ID, m = ze.Objects.Model[g], p = {
                modelName: m.attrName ? qe.sanitizeNodeName(m.attrName) : "",
                morphName: ze.Objects.Deformer[h].attrName
              };
              r[c] = p;
            }
            r[c][u.attr] = u;
          }
        }
      }), n.set(parseInt(i), r));
    }
    return n;
  }
  parseAnimStacks(e) {
    const t = ze.Objects.AnimationStack, n = {};
    for (const i in t) {
      const r = it.get(parseInt(i)).children;
      r.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      const s = e.get(r[0].ID);
      n[i] = {
        name: t[i].attrName,
        layer: s
      };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return e.layer.forEach(function(i) {
      t = t.concat(n.generateTracks(i));
    }), new yh(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new L(), i = new kt(), r = new L();
    if (e.transform && e.transform.decompose(n, i, r), n = n.toArray(), i = new Ot().setFromQuaternion(i, e.eulerOrder).toArray(), r = r.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
      const s = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
      s !== void 0 && t.push(s);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const s = this.generateRotationTrack(e.modelName, e.R.curves, i, e.preRotation, e.postRotation, e.eulerOrder);
      s !== void 0 && t.push(s);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const s = this.generateVectorTrack(e.modelName, e.S.curves, r, "scale");
      s !== void 0 && t.push(s);
    }
    if (e.DeformPercent !== void 0) {
      const s = this.generateMorphTrack(e);
      s !== void 0 && t.push(s);
    }
    return t;
  }
  generateVectorTrack(e, t, n, i) {
    const r = this.getTimesForAllAxes(t), s = this.getKeyframeTrackValues(r, t, n);
    return new Sr(e + "." + i, r, s);
  }
  generateRotationTrack(e, t, n, i, r, s) {
    t.x !== void 0 && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(en.degToRad)), t.y !== void 0 && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(en.degToRad)), t.z !== void 0 && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(en.degToRad));
    const o = this.getTimesForAllAxes(t), l = this.getKeyframeTrackValues(o, t, n);
    i !== void 0 && (i = i.map(en.degToRad), i.push(s), i = new Ot().fromArray(i), i = new kt().setFromEuler(i)), r !== void 0 && (r = r.map(en.degToRad), r.push(s), r = new Ot().fromArray(r), r = new kt().setFromEuler(r).invert());
    const c = new kt(), u = new Ot(), h = [];
    for (let f = 0; f < l.length; f += 3)
      u.set(l[f], l[f + 1], l[f + 2], s), c.setFromEuler(u), i !== void 0 && c.premultiply(i), r !== void 0 && c.multiply(r), c.toArray(h, f / 3 * 4);
    return new Yi(e + ".quaternion", o, h);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(r) {
      return r / 100;
    }), i = Lt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new wr(e.modelName + ".morphTargetInfluences[" + i + "]", t.times, n);
  }
  getTimesForAllAxes(e) {
    let t = [];
    if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, i) {
      return n - i;
    }), t.length > 1) {
      let n = 1, i = t[0];
      for (let r = 1; r < t.length; r++) {
        const s = t[r];
        s !== i && (t[n] = s, i = s, n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const i = n, r = [];
    let s = -1, o = -1, l = -1;
    return e.forEach(function(c) {
      if (t.x && (s = t.x.times.indexOf(c)), t.y && (o = t.y.times.indexOf(c)), t.z && (l = t.z.times.indexOf(c)), s !== -1) {
        const u = t.x.values[s];
        r.push(u), i[0] = u;
      } else
        r.push(i[0]);
      if (o !== -1) {
        const u = t.y.values[o];
        r.push(u), i[1] = u;
      } else
        r.push(i[1]);
      if (l !== -1) {
        const u = t.z.values[l];
        r.push(u), i[2] = u;
      } else
        r.push(i[2]);
    }), r;
  }
  interpolateRotations(e) {
    for (let t = 1; t < e.values.length; t++) {
      const n = e.values[t - 1], i = e.values[t] - n, r = Math.abs(i);
      if (r >= 180) {
        const s = r / 180, o = i / s;
        let l = n + o;
        const c = e.times[t - 1], h = (e.times[t] - c) / s;
        let f = c + h;
        const d = [], g = [];
        for (; f < e.times[t]; )
          d.push(f), f += h, g.push(l), l += o;
        e.times = Rc(e.times, t, d), e.values = Rc(e.values, t, g);
      }
    }
  }
}
class a_ {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(e, t) {
    this.currentProp = e, this.currentPropName = t;
  }
  parse(e) {
    this.currentIndent = 0, this.allNodes = new Dh(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const t = this, n = e.split(/[\r\n]+/);
    return n.forEach(function(i, r) {
      const s = i.match(/^[\s\t]*;/), o = i.match(/^[\s\t]*$/);
      if (s || o)
        return;
      const l = i.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), c = i.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), u = i.match("^\\t{" + (t.currentIndent - 1) + "}}");
      l ? t.parseNodeBegin(i, l) : c ? t.parseNodeProperty(i, c, n[++r]) : u ? t.popStack() : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i);
    }), this.allNodes;
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""), i = t[2].split(",").map(function(l) {
      return l.trim().replace(/^"/, "").replace(/"$/, "");
    }), r = { name: n }, s = this.parseNodeAttr(i), o = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(n, r) : n in o ? (n === "PoseNode" ? o.PoseNode.push(r) : o[n].id !== void 0 && (o[n] = {}, o[n][o[n].id] = o[n]), s.id !== "" && (o[n][s.id] = r)) : typeof s.id == "number" ? (o[n] = {}, o[n][s.id] = r) : n !== "Properties70" && (n === "PoseNode" ? o[n] = [r] : o[n] = r), typeof s.id == "number" && (r.id = s.id), s.name !== "" && (r.attrName = s.name), s.type !== "" && (r.attrType = s.type), this.pushStack(r);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
    let n = "", i = "";
    return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), i = e[2]), { id: t, name: n, type: i };
  }
  parseNodeProperty(e, t, n) {
    let i = t[1].replace(/^"/, "").replace(/"$/, "").trim(), r = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    i === "Content" && r === "," && (r = n.replace(/"/g, "").replace(/,$/, "").trim());
    const s = this.getCurrentNode();
    if (s.name === "Properties70") {
      this.parseNodeSpecialProperty(e, i, r);
      return;
    }
    if (i === "C") {
      const l = r.split(",").slice(1), c = parseInt(l[0]), u = parseInt(l[1]);
      let h = r.split(",").slice(3);
      h = h.map(function(f) {
        return f.trim().replace(/^"/, "");
      }), i = "connections", r = [c, u], f_(r, h), s[i] === void 0 && (s[i] = []);
    }
    i === "Node" && (s.id = r), i in s && Array.isArray(s[i]) ? s[i].push(r) : i !== "a" ? s[i] = r : s.a = r, this.setCurrentProp(s, i), i === "a" && r.slice(-1) !== "," && (s.a = Aa(r));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = Aa(t.a));
  }
  parseNodeSpecialProperty(e, t, n) {
    const i = n.split('",').map(function(u) {
      return u.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), r = i[0], s = i[1], o = i[2], l = i[3];
    let c = i[4];
    switch (s) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        c = parseFloat(c);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        c = Aa(c);
        break;
    }
    this.getPrevNode()[r] = {
      type: s,
      type2: o,
      flag: l,
      value: c
    }, this.setCurrentProp(this.getPrevNode(), r);
  }
}
class o_ {
  parse(e) {
    const t = new Lc(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const i = new Dh();
    for (; !this.endOfContent(t); ) {
      const r = this.parseNode(t, n);
      r !== null && i.add(r.name, r);
    }
    return i;
  }
  endOfContent(e) {
    return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
  }
  parseNode(e, t) {
    const n = {}, i = t >= 7500 ? e.getUint64() : e.getUint32(), r = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const s = e.getUint8(), o = e.getString(s);
    if (i === 0)
      return null;
    const l = [];
    for (let f = 0; f < r; f++)
      l.push(this.parseProperty(e));
    const c = l.length > 0 ? l[0] : "", u = l.length > 1 ? l[1] : "", h = l.length > 2 ? l[2] : "";
    for (n.singleProperty = r === 1 && e.getOffset() === i; i > e.getOffset(); ) {
      const f = this.parseNode(e, t);
      f !== null && this.parseSubNode(o, n, f);
    }
    return n.propertyList = l, typeof c == "number" && (n.id = c), u !== "" && (n.attrName = u), h !== "" && (n.attrType = h), o !== "" && (n.name = o), n;
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === !0) {
      const i = n.propertyList[0];
      Array.isArray(i) ? (t[n.name] = n, n.a = i) : t[n.name] = i;
    } else if (e === "Connections" && n.name === "C") {
      const i = [];
      n.propertyList.forEach(function(r, s) {
        s !== 0 && i.push(r);
      }), t.connections === void 0 && (t.connections = []), t.connections.push(i);
    } else if (n.name === "Properties70")
      Object.keys(n).forEach(function(r) {
        t[r] = n[r];
      });
    else if (e === "Properties70" && n.name === "P") {
      let i = n.propertyList[0], r = n.propertyList[1];
      const s = n.propertyList[2], o = n.propertyList[3];
      let l;
      i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), r.indexOf("Lcl ") === 0 && (r = r.replace("Lcl ", "Lcl_")), r === "Color" || r === "ColorRGB" || r === "Vector" || r === "Vector3D" || r.indexOf("Lcl_") === 0 ? l = [
        n.propertyList[4],
        n.propertyList[5],
        n.propertyList[6]
      ] : l = n.propertyList[4], t[i] = {
        type: r,
        type2: s,
        flag: o,
        value: l
      };
    } else
      t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return n = e.getUint32(), e.getArrayBuffer(n);
      case "S":
        return n = e.getUint32(), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const i = e.getUint32(), r = e.getUint32(), s = e.getUint32();
        if (r === 0)
          switch (t) {
            case "b":
            case "c":
              return e.getBooleanArray(i);
            case "d":
              return e.getFloat64Array(i);
            case "f":
              return e.getFloat32Array(i);
            case "i":
              return e.getInt32Array(i);
            case "l":
              return e.getInt64Array(i);
          }
        const o = Vx(new Uint8Array(e.getArrayBuffer(s))), l = new Lc(o.buffer);
        switch (t) {
          case "b":
          case "c":
            return l.getBooleanArray(i);
          case "d":
            return l.getFloat64Array(i);
          case "f":
            return l.getFloat32Array(i);
          case "i":
            return l.getInt32Array(i);
          case "l":
            return l.getInt64Array(i);
        }
        break;
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
}
class Lc {
  constructor(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : !0;
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return this.offset += 1, e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt64());
    return t;
  }
  getUint64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  getString(e) {
    let t = [];
    for (let i = 0; i < e; i++)
      t[i] = this.getUint8();
    const n = t.indexOf(0);
    return n >= 0 && (t = t.slice(0, n)), Tr.decodeText(new Uint8Array(t));
  }
}
class Dh {
  add(e, t) {
    this[e] = t;
  }
}
function l_(a) {
  const e = "Kaydara FBX Binary  \0";
  return a.byteLength >= e.length && e === Oh(a, 0, e.length);
}
function c_(a) {
  const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let t = 0;
  function n(i) {
    const r = a[i - 1];
    return a = a.slice(t + i), t++, r;
  }
  for (let i = 0; i < e.length; ++i)
    if (n(1) === e[i])
      return !1;
  return !0;
}
function Pc(a) {
  const e = /FBXVersion: (\d+)/, t = a.match(e);
  if (t)
    return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function h_(a) {
  return a / 46186158e3;
}
const u_ = [];
function us(a, e, t, n) {
  let i;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      i = a;
      break;
    case "ByPolygon":
      i = e;
      break;
    case "ByVertice":
      i = t;
      break;
    case "AllSame":
      i = n.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
  }
  n.referenceType === "IndexToDirect" && (i = n.indices[i]);
  const r = i * n.dataSize, s = r + n.dataSize;
  return d_(u_, n.buffer, r, s);
}
const Ea = new Ot(), Ai = new L();
function Ih(a) {
  const e = new ye(), t = new ye(), n = new ye(), i = new ye(), r = new ye(), s = new ye(), o = new ye(), l = new ye(), c = new ye(), u = new ye(), h = new ye(), f = new ye(), d = a.inheritType ? a.inheritType : 0;
  if (a.translation && e.setPosition(Ai.fromArray(a.translation)), a.preRotation) {
    const C = a.preRotation.map(en.degToRad);
    C.push(a.eulerOrder || Ot.DefaultOrder), t.makeRotationFromEuler(Ea.fromArray(C));
  }
  if (a.rotation) {
    const C = a.rotation.map(en.degToRad);
    C.push(a.eulerOrder || Ot.DefaultOrder), n.makeRotationFromEuler(Ea.fromArray(C));
  }
  if (a.postRotation) {
    const C = a.postRotation.map(en.degToRad);
    C.push(a.eulerOrder || Ot.DefaultOrder), i.makeRotationFromEuler(Ea.fromArray(C)), i.invert();
  }
  a.scale && r.scale(Ai.fromArray(a.scale)), a.scalingOffset && o.setPosition(Ai.fromArray(a.scalingOffset)), a.scalingPivot && s.setPosition(Ai.fromArray(a.scalingPivot)), a.rotationOffset && l.setPosition(Ai.fromArray(a.rotationOffset)), a.rotationPivot && c.setPosition(Ai.fromArray(a.rotationPivot)), a.parentMatrixWorld && (h.copy(a.parentMatrix), u.copy(a.parentMatrixWorld));
  const g = t.clone().multiply(n).multiply(i), m = new ye();
  m.extractRotation(u);
  const p = new ye();
  p.copyPosition(u);
  const y = p.clone().invert().multiply(u), M = m.clone().invert().multiply(y), x = r, v = new ye();
  if (d === 0)
    v.copy(m).multiply(g).multiply(M).multiply(x);
  else if (d === 1)
    v.copy(m).multiply(M).multiply(g).multiply(x);
  else {
    const I = new ye().scale(new L().setFromMatrixScale(h)).clone().invert(), H = M.clone().multiply(I);
    v.copy(m).multiply(g).multiply(H).multiply(x);
  }
  const w = c.clone().invert(), b = s.clone().invert();
  let E = e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(o).multiply(s).multiply(r).multiply(b);
  const _ = new ye().copyPosition(E), S = u.clone().multiply(_);
  return f.copyPosition(S), E = f.clone().multiply(v), E.premultiply(u.invert()), E;
}
function Fh(a) {
  a = a || 0;
  const e = [
    "ZYX",
    "YZX",
    "XZY",
    "ZXY",
    "YXZ",
    "XYZ"
  ];
  return a === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[a];
}
function Aa(a) {
  return a.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function Oh(a, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = a.byteLength), Tr.decodeText(new Uint8Array(a, e, t));
}
function f_(a, e) {
  for (let t = 0, n = a.length, i = e.length; t < i; t++, n++)
    a[n] = e[t];
}
function d_(a, e, t, n) {
  for (let i = t, r = 0; i < n; i++, r++)
    a[r] = e[i];
  return a;
}
function Rc(a, e, t) {
  return a.slice(0, e).concat(t).concat(a.slice(e));
}
class p_ {
  parse(e) {
    const t = {}, n = e.split(`
`), i = n.length;
    let r = 0, s = null, o = t;
    const l = [t];
    function c() {
      const u = n[r];
      if (u.includes("=")) {
        const h = u.split("="), f = h[0].trim(), d = h[1].trim();
        if (d.endsWith("{")) {
          const g = {};
          l.push(g), o[f] = g, o = g;
        } else
          o[f] = d;
      } else if (u.endsWith("{")) {
        const h = o[s] || {};
        l.push(h), o[s] = h, o = h;
      } else if (u.endsWith("}")) {
        if (l.pop(), l.length === 0)
          return;
        o = l[l.length - 1];
      } else if (u.endsWith("(")) {
        const h = {};
        l.push(h), s = u.split("(")[0].trim() || s, o[s] = h, o = h;
      } else
        u.endsWith(")") ? (l.pop(), o = l[l.length - 1]) : s = u.trim();
      r++, r < i && c();
    }
    return c(), t;
  }
}
class m_ extends an {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, s = new Mn(r.manager);
    s.setPath(r.path), s.setResponseType("arraybuffer"), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(e, function(o) {
      try {
        t(r.parse(o));
      } catch (l) {
        i ? i(l) : console.error(l), r.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e) {
    const t = new p_();
    function n(b) {
      const E = {};
      new Mn().setResponseType("arraybuffer");
      for (const S in b) {
        if (S.endsWith("png")) {
          const C = new Blob([b[S]], { type: { type: "image/png" } });
          E[S] = URL.createObjectURL(C);
        }
        if (S.endsWith("usd")) {
          const C = Wa(b[S]);
          E[S] = t.parse(C);
        }
      }
      return E;
    }
    function i(b) {
      for (const E in b)
        if (E.endsWith("usda"))
          return b[E];
    }
    const r = Yx(new Uint8Array(e)), s = n(r), o = i(r);
    if (o === void 0)
      return console.warn("THREE.USDZLoader: No usda file found."), new nn();
    const l = Wa(o), c = t.parse(l);
    function u(b) {
      if (!!b) {
        if ("prepend references" in b) {
          const _ = b["prepend references"].split("@"), S = _[1].replace(/^.\//, ""), C = _[2].replace(/^<\//, "").replace(/>$/, "");
          return h(s[S], C);
        }
        return h(b);
      }
    }
    function h(b, E) {
      if (E !== void 0) {
        const _ = 'def "%{id}"';
        if (_ in b)
          return b[_];
      }
      for (const _ in b) {
        const S = b[_];
        if (_.startsWith("def Mesh"))
          return "point3f[] points" in b && (S["point3f[] points"] = b["point3f[] points"]), "float2[] primvars:st" in b && (S["float2[] primvars:st"] = b["float2[] primvars:st"]), "int[] primvars:st:indices" in b && (S["int[] primvars:st:indices"] = b["int[] primvars:st:indices"]), S;
        if (typeof S == "object") {
          const C = h(S);
          if (C)
            return C;
        }
      }
    }
    function f(b) {
      if (!b)
        return;
      let E = new Je();
      if ("int[] faceVertexIndices" in b) {
        const _ = JSON.parse(b["int[] faceVertexIndices"]);
        E.setIndex(new ct(new Uint16Array(_), 1));
      }
      if ("point3f[] points" in b) {
        const _ = JSON.parse(b["point3f[] points"].replace(/[()]*/g, "")), S = new ct(new Float32Array(_), 3);
        E.setAttribute("position", S);
      }
      if ("normal3f[] normals" in b) {
        const _ = JSON.parse(b["normal3f[] normals"].replace(/[()]*/g, "")), S = new ct(new Float32Array(_), 3);
        E.setAttribute("normal", S);
      } else
        E.computeVertexNormals();
      if ("float2[] primvars:st" in b && (b["texCoord2f[] primvars:st"] = b["float2[] primvars:st"]), "texCoord2f[] primvars:st" in b) {
        const _ = JSON.parse(b["texCoord2f[] primvars:st"].replace(/[()]*/g, "")), S = new ct(new Float32Array(_), 2);
        if ("int[] primvars:st:indices" in b) {
          E = E.toNonIndexed();
          const C = JSON.parse(b["int[] primvars:st:indices"]);
          E.setAttribute("uv", d(S, C));
        } else
          E.setAttribute("uv", S);
      }
      return E;
    }
    function d(b, E) {
      const _ = b.array, S = b.itemSize, C = new _.constructor(E.length * S);
      let I = 0, H = 0;
      for (let O = 0, D = E.length; O < D; O++) {
        I = E[O] * S;
        for (let B = 0; B < S; B++)
          C[H++] = _[I++];
      }
      return new ct(C, S);
    }
    function g(b) {
      if (!!b) {
        if ("rel material:binding" in b) {
          const S = b["rel material:binding"].replace(/^<\//, "").replace(/>$/, "").split("/");
          return m(c, ` "${S[1]}"`);
        }
        return m(b);
      }
    }
    function m(b, E = "") {
      for (const _ in b) {
        const S = b[_];
        if (_.startsWith("def Material" + E))
          return S;
        if (typeof S == "object") {
          const C = m(S, E);
          if (C)
            return C;
        }
      }
    }
    function p(b) {
      const E = new bo();
      if (b !== void 0) {
        if ('def Shader "PreviewSurface"' in b) {
          const _ = b['def Shader "PreviewSurface"'];
          if ("color3f inputs:diffuseColor.connect" in _) {
            const S = _["color3f inputs:diffuseColor.connect"], C = y(c, /(\w+).output/.exec(S)[1]);
            E.map = M(C), E.map.encoding = Xe;
          } else if ("color3f inputs:diffuseColor" in _) {
            const S = _["color3f inputs:diffuseColor"].replace(/[()]*/g, "");
            E.color.fromArray(JSON.parse("[" + S + "]"));
          }
          if ("normal3f inputs:normal.connect" in _) {
            const S = _["normal3f inputs:normal.connect"], C = y(c, /(\w+).output/.exec(S)[1]);
            E.normalMap = M(C);
          }
          "float inputs:roughness" in _ && (E.roughness = parseFloat(_["float inputs:roughness"])), "float inputs:metallic" in _ && (E.metalness = parseFloat(_["float inputs:metallic"]));
        }
        if ('def Shader "diffuseColor_texture"' in b) {
          const _ = b['def Shader "diffuseColor_texture"'];
          E.map = M(_), E.map.encoding = Xe;
        }
        if ('def Shader "normal_texture"' in b) {
          const _ = b['def Shader "normal_texture"'];
          E.normalMap = M(_);
        }
      }
      return E;
    }
    function y(b, E) {
      for (const _ in b) {
        const S = b[_];
        if (_.startsWith(`def Shader "${E}"`))
          return S;
        if (typeof S == "object") {
          const C = y(S, E);
          if (C)
            return C;
        }
      }
    }
    function M(b) {
      if ("asset inputs:file" in b) {
        const E = b["asset inputs:file"].replace(/@*/g, ""), S = new So().load(s[E]), C = {
          '"clamp"': _t,
          '"mirror"': mr,
          '"repeat"': vn
        };
        return "token inputs:wrapS" in b && (S.wrapS = C[b["token inputs:wrapS"]]), "token inputs:wrapT" in b && (S.wrapT = C[b["token inputs:wrapT"]]), S;
      }
      return null;
    }
    function x(b) {
      const E = f(u(b)), _ = p(g(b)), S = E ? new vt(E, _) : new $e();
      if ("matrix4d xformOp:transform" in b) {
        const C = JSON.parse("[" + b["matrix4d xformOp:transform"].replace(/[()]*/g, "") + "]");
        S.matrix.fromArray(C), S.matrix.decompose(S.position, S.quaternion, S.scale);
      }
      return S;
    }
    function v(b, E) {
      for (const _ in b)
        if (_.startsWith("def Scope"))
          v(b[_], E);
        else if (_.startsWith("def Xform")) {
          const S = x(b[_]);
          /def Xform "(\w+)"/.test(_) && (S.name = /def Xform "(\w+)"/.exec(_)[1]), E.add(S), v(b[_], S);
        }
    }
    const w = new nn();
    return v(c, w), w;
  }
}
const Ro = new wo(), g_ = new Lx(Ro), x_ = new cx(), __ = new n_(), v_ = new m_(), y_ = new So(Ro);
Ro.onProgress = function(a, e, t) {
  console.log(a, e, t);
};
const M_ = (a, e) => new Promise((t, n) => {
  try {
    const i = new Px().setPath(a).load(
      e,
      function() {
        i.mapping = Ui, t(i);
      },
      (r) => {
        r.lengthComputable;
      }
    );
  } catch (i) {
    n(i);
  }
}), b_ = (a, e) => new Promise((t, n) => {
  g_.load(
    `${a}${e}`,
    function(i) {
      t(i);
    },
    (i) => {
      i.lengthComputable;
    },
    (i) => {
      n(i);
    }
  );
}), w_ = (a, e) => new Promise((t, n) => {
  x_.load(
    `${a}${e}`,
    function(i) {
      t(i);
    },
    (i) => {
      i.lengthComputable;
    },
    (i) => {
      n(i);
    }
  );
}), S_ = (a, e) => new Promise((t, n) => {
  v_.load(
    `${a}${e}`,
    function(i) {
      t(i);
    },
    (i) => {
      i.lengthComputable;
    },
    (i) => {
      n(i);
    }
  );
}), T_ = (a, e) => new Promise((t, n) => {
  y_.load(
    `${a}${e}`,
    (i) => {
      t(i);
    },
    (i) => {
      i.lengthComputable;
    },
    (i) => {
      n(i);
    }
  );
}), E_ = () => {
  const a = document.createElement("canvas");
  a.width = 2, a.height = 2;
  const e = a.getContext("2d");
  return e && (e.fillStyle = "white", e.fillRect(0, 1, 2, 1)), a;
}, Nh = () => {
  const a = new oh(E_());
  return a.magFilter = ut, a.wrapT = vn, a.wrapS = vn, a.repeat.set(1, 0), a;
}, A_ = (a, e) => new Promise((t, n) => {
  __.load(
    `${a}${e}`,
    function(i) {
      t(i);
    },
    (i) => {
      i.lengthComputable;
    },
    (i) => {
      n(i);
    }
  );
}), C_ = (a) => {
  if (a instanceof $e)
    return Promise.resolve(a);
  if (a) {
    const { type: e, path: t, fileName: n } = a;
    return e === "obj" || !e ? b_(t, n) : a.type === "json" ? w_(t, n) : a.type === "fbx" ? A_(t, n) : a.type === "usdz" ? S_(t, n) : Promise.reject(new Error("Object type is not supported"));
  } else
    throw new Error("Object is not defined");
}, L_ = (a) => a instanceof Jn ? Promise.resolve(a) : a ? M_(a.path, a.fileName) : Promise.resolve(Nh()), P_ = (a) => a instanceof rt ? Promise.resolve(a) : a ? T_(a.path, a.fileName) : Promise.resolve(Nh());
let Fi, Vn, Cn, Yt;
const R_ = (a, e) => {
  const t = {
    transmission: 0,
    opacity: 1,
    metalness: 0.2,
    roughness: 0,
    ior: 1.5,
    specularIntensity: 1,
    specularColor: new Me(16777215),
    envMapIntensity: 1
  }, n = Math.round(255 * Math.random()), i = Math.round(255 * Math.random()), r = Math.round(255 * Math.random()), s = `rgb(${n}, ${i}, ${r})`;
  return new mh({
    ...a instanceof oh && {
      color: s,
      alphaMap: a
    },
    ...a instanceof rt && { map: a },
    metalness: t.metalness,
    roughness: t.roughness,
    ior: t.ior,
    envMap: e,
    envMapIntensity: t.envMapIntensity,
    transmission: t.transmission,
    specularIntensity: t.specularIntensity,
    specularColor: t.specularColor,
    opacity: t.opacity,
    side: bs,
    transparent: !0
  });
}, D_ = () => {
  const a = document.body.clientWidth, e = window.innerHeight;
  console.log("_onWindowResize", a, e), Fi.aspect = a / e, Fi.updateProjectionMatrix(), Yt.setSize(a, e);
}, I_ = (a, e, t) => {
  const n = new Gi().setFromObject(a), {
    min: {
      y: i
    },
    max: {
      x: r,
      y: s
    }
  } = n, o = (s - i) / 2;
  a.rotation.set(0, 0, 0), a.position.set(0, -o, 0), e.position.set(r * 6, 0, 0), t.target = new L(0, 0, 0);
}, zh = (a, e, t) => {
  a && a.traverse(function(n) {
    n instanceof vt && (n.material = R_(t, e));
  });
}, F_ = async (a, e) => {
  const { object: t, background: n, texture: i } = e, [r, s, o] = await Promise.all([
    C_(t),
    L_(n),
    P_(i)
  ]);
  if (zh(r, s, o), Yt = new th({ antialias: !0 }), Yt.setPixelRatio(window.devicePixelRatio), Yt.setSize(document.body.clientWidth, window.innerHeight), Yt.shadowMap.enabled = !0, Yt.toneMapping = Nc, Yt.toneMappingExposure = 1, Yt.outputEncoding = Xe, a && a && a.appendChild(Yt.domElement), Vn = new nh(), Fi = new wt(75, document.body.clientWidth / window.innerHeight, 0.1, 1e3), Vn.background = s, !(Vn.background instanceof Jn)) {
    const c = new Mh(16777147, 526368, 1), u = new Eo(4210752);
    Vn.add(c), Vn.add(u);
  }
  Vn.add(r), Cn = new wx(Fi, Yt.domElement), Cn.minDistance = 0, Cn.maxDistance = 100, Cn.enablePan = !1, Cn.enableDamping = !0, Cn.dampingFactor = 0.25, I_(r, Fi, Cn);
  const l = () => {
    requestAnimationFrame(l), r && (r.rotation.y -= 2e-3), Cn.update(), Yt.render(Vn, Fi);
  };
  return l(), window.addEventListener("resize", D_), { obj: r, hdrEquirect: s, texture: o };
};
var O_ = Object.defineProperty, N_ = Object.getOwnPropertyDescriptor, In = (a, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? N_(e, t) : e, r = a.length - 1, s; r >= 0; r--)
    (s = a[r]) && (i = (n ? s(e, t, i) : s(i)) || i);
  return n && i && O_(e, t, i), i;
};
let rn = class extends Hh {
  constructor() {
    super(), this.object = "", this.texture = "", this.background = "", this.scene = {
      obj: null,
      hdrEquirect: null,
      texture: null
    }, this.isLoaded = !1;
  }
  firstUpdated() {
    import("./viewer-3d-lit-loader.165a3881.js");
    const a = document.createElement("viewer-3d-lit-loader");
    a.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`, a.width = document.body.clientWidth, a.height = window.innerHeight, this.loader && this.loader.appendChild(a), (async () => {
      const { obj: t, hdrEquirect: n, texture: i } = await F_(this.mount, {
        object: {
          path: this.object,
          fileName: "",
          type: this._getExtension(this.object)
        },
        texture: {
          path: this.texture,
          fileName: ""
        },
        background: {
          path: this.background,
          fileName: ""
        }
      });
      this.scene = { obj: t, hdrEquirect: n, texture: i }, this.isLoaded = !0;
    })();
  }
  _getExtension(a) {
    var n;
    const t = (n = a.split("?")[0].split(".").pop()) == null ? void 0 : n.toLocaleLowerCase();
    if (t === "obj")
      return "obj";
    if (t === "fbx")
      return "fbx";
    if (t === "json")
      return "json";
    if (t === "usdz")
      return "usdz";
    throw new Error("Extension not supported");
  }
  onClickViewer(a) {
    a.stopPropagation();
    const { obj: e, hdrEquirect: t, texture: n } = this.scene;
    this.dispatchEvent(
      new CustomEvent("viewer-click", {
        bubbles: !0,
        detail: zh(
          e,
          t,
          n
        )
      })
    );
  }
  render() {
    return console.log("isLoaded", this.isLoaded), Wh`<div id="viewer" class=${Oo({ hidden: !this.isLoaded })}
        @click=${this.onClickViewer}></div>
        <div id="loader" class=${Oo({ hidden: this.isLoaded })}></div>`;
  }
};
rn.styles = Gh`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
    }
    .hidden {
      display: none;
    }
    .bg-loader {
      position: relative;
      background-color: #000;
      width: 100wv;
      height: 100vh;
      z-index: 999;
    }
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      color: red;
    }
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently
                            supported by Chrome, Edge, Opera and Firefox */
    }

    @media (prefers-color-scheme: light) {
    }
  `;
In([
  Er({ type: String })
], rn.prototype, "object", 2);
In([
  Er({ type: String })
], rn.prototype, "texture", 2);
In([
  Er({ type: String })
], rn.prototype, "background", 2);
In([
  Dc("#viewer")
], rn.prototype, "mount", 2);
In([
  Dc("#loader")
], rn.prototype, "loader", 2);
In([
  Er({ type: Object, state: !0 })
], rn.prototype, "scene", 2);
In([
  Er({ type: Boolean, state: !0 })
], rn.prototype, "isLoaded", 2);
rn = In([
  Xh("viewer-3d-lit")
], rn);
export {
  rn as Viewer3d
};

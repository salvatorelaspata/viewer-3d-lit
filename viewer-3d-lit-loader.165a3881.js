import { LitElement as Su, html as Tu, css as Eu } from "lit";
import { query as bu, property as mo, customElement as Au } from "lit/decorators.js";
function wi(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Fc(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Zt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, un = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, go, wt, Qe, ii = 1e8, Ze = 1 / ii, Vs = Math.PI * 2, wu = Vs / 4, Ru = 0, Bc = Math.sqrt, Cu = Math.cos, Lu = Math.sin, Mt = function(r) {
  return typeof r == "string";
}, st = function(r) {
  return typeof r == "function";
}, Ui = function(r) {
  return typeof r == "number";
}, _o = function(r) {
  return typeof r > "u";
}, vi = function(r) {
  return typeof r == "object";
}, Ot = function(r) {
  return r !== !1;
}, vo = function() {
  return typeof window < "u";
}, ea = function(r) {
  return st(r) || Mt(r);
}, zc = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Rt = Array.isArray, Ws = /(?:-?\.?\d|\.)+/gi, Hc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, tn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Qa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Gc = /[+-]=-?[.\d]+/, kc = /[^,'"\[\]\s]+/gi, Pu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, it, hi, Xs, xo, Jt = {}, wa = {}, Vc, Wc = function(r) {
  return (wa = Ar(r, Jt)) && kt;
}, Mo = function(r, e) {
  return console.warn("Invalid property", r, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, zn = function(r, e) {
  return !e && console.warn(r);
}, Xc = function(r, e) {
  return r && (Jt[r] = e) && wa && (wa[r] = e) || Jt;
}, Hn = function() {
  return 0;
}, Uu = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ta = {
  suppressEvents: !0,
  kill: !1
}, Du = {
  suppressEvents: !0
}, yo = {}, ji = [], js = {}, jc, jt = {}, es = {}, jo = 30, Ea = [], So = "", To = function(r) {
  var e = r[0], t, i;
  if (vi(e) || st(e) || (r = [r]), !(t = (e._gsap || {}).harness)) {
    for (i = Ea.length; i-- && !Ea[i].targetTest(e); )
      ;
    t = Ea[i];
  }
  for (i = r.length; i--; )
    r[i] && (r[i]._gsap || (r[i]._gsap = new gh(r[i], t))) || r.splice(i, 1);
  return r;
}, xr = function(r) {
  return r._gsap || To(ri(r))[0]._gsap;
}, Yc = function(r, e, t) {
  return (t = r[e]) && st(t) ? r[e]() : _o(t) && r.getAttribute && r.getAttribute(e) || t;
}, Nt = function(r, e) {
  return (r = r.split(",")).forEach(e) || r;
}, ct = function(r) {
  return Math.round(r * 1e5) / 1e5 || 0;
}, xt = function(r) {
  return Math.round(r * 1e7) / 1e7 || 0;
}, sn = function(r, e) {
  var t = e.charAt(0), i = parseFloat(e.substr(2));
  return r = parseFloat(r), t === "+" ? r + i : t === "-" ? r - i : t === "*" ? r * i : r / i;
}, Iu = function(r, e) {
  for (var t = e.length, i = 0; r.indexOf(e[i]) < 0 && ++i < t; )
    ;
  return i < t;
}, Ra = function() {
  var r = ji.length, e = ji.slice(0), t, i;
  for (js = {}, ji.length = 0, t = 0; t < r; t++)
    i = e[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, qc = function(r, e, t, i) {
  ji.length && !wt && Ra(), r.render(e, t, i || wt && e < 0 && (r._initted || r._startAt)), ji.length && !wt && Ra();
}, Kc = function(r) {
  var e = parseFloat(r);
  return (e || e === 0) && (r + "").match(kc).length < 2 ? e : Mt(r) ? r.trim() : r;
}, Zc = function(r) {
  return r;
}, ni = function(r, e) {
  for (var t in e)
    t in r || (r[t] = e[t]);
  return r;
}, Ou = function(r) {
  return function(e, t) {
    for (var i in t)
      i in e || i === "duration" && r || i === "ease" || (e[i] = t[i]);
  };
}, Ar = function(r, e) {
  for (var t in e)
    r[t] = e[t];
  return r;
}, Yo = function r(e, t) {
  for (var i in t)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = vi(t[i]) ? r(e[i] || (e[i] = {}), t[i]) : t[i]);
  return e;
}, Ca = function(r, e) {
  var t = {}, i;
  for (i in r)
    i in e || (t[i] = r[i]);
  return t;
}, In = function(r) {
  var e = r.parent || it, t = r.keyframes ? Ou(Rt(r.keyframes)) : ni;
  if (Ot(r.inherit))
    for (; e; )
      t(r, e.vars.defaults), e = e.parent || e._dp;
  return r;
}, Nu = function(r, e) {
  for (var t = r.length, i = t === e.length; i && t-- && r[t] === e[t]; )
    ;
  return t < 0;
}, Jc = function(r, e, t, i, n) {
  t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
  var a = r[i], o;
  if (n)
    for (o = e[n]; a && a[n] > o; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = r[t], r[t] = e), e._next ? e._next._prev = e : r[i] = e, e._prev = a, e.parent = e._dp = r, e;
}, Ga = function(r, e, t, i) {
  t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, a = e._next;
  n ? n._next = a : r[t] === e && (r[t] = a), a ? a._prev = n : r[i] === e && (r[i] = n), e._next = e._prev = e.parent = null;
}, Ji = function(r, e) {
  r.parent && (!e || r.parent.autoRemoveChildren) && r.parent.remove && r.parent.remove(r), r._act = 0;
}, Mr = function(r, e) {
  if (r && (!e || e._end > r._dur || e._start < 0))
    for (var t = r; t; )
      t._dirty = 1, t = t.parent;
  return r;
}, Fu = function(r) {
  for (var e = r.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return r;
}, Ys = function(r, e, t, i) {
  return r._startAt && (wt ? r._startAt.revert(Ta) : r.vars.immediateRender && !r.vars.autoRevert || r._startAt.render(e, !0, i));
}, Bu = function r(e) {
  return !e || e._ts && r(e.parent);
}, qo = function(r) {
  return r._repeat ? dn(r._tTime, r = r.duration() + r._rDelay) * r : 0;
}, dn = function(r, e) {
  var t = Math.floor(r /= e);
  return r && t === r ? t - 1 : t;
}, La = function(r, e) {
  return (r - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, ka = function(r) {
  return r._end = xt(r._start + (r._tDur / Math.abs(r._ts || r._rts || Ze) || 0));
}, Va = function(r, e) {
  var t = r._dp;
  return t && t.smoothChildTiming && r._ts && (r._start = xt(t._time - (r._ts > 0 ? e / r._ts : ((r._dirty ? r.totalDuration() : r._tDur) - e) / -r._ts)), ka(r), t._dirty || Mr(t, r)), r;
}, $c = function(r, e) {
  var t;
  if ((e._time || !e._dur && e._initted || e._start < r._time && (e._dur || !e.add)) && (t = La(r.rawTime(), e), (!e._dur || qn(0, e.totalDuration(), t) - e._tTime > Ze) && e.render(t, !0)), Mr(r, e)._dp && r._initted && r._time >= r._dur && r._ts) {
    if (r._dur < r.duration())
      for (t = r; t._dp; )
        t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
    r._zTime = -Ze;
  }
}, pi = function(r, e, t, i) {
  return e.parent && Ji(e), e._start = xt((Ui(t) ? t : t || r !== it ? ti(r, t, e) : r._time) + e._delay), e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Jc(r, e, "_first", "_last", r._sort ? "_start" : 0), qs(e) || (r._recent = e), i || $c(r, e), r._ts < 0 && Va(r, r._tTime), r;
}, Qc = function(r, e) {
  return (Jt.ScrollTrigger || Mo("scrollTrigger", e)) && Jt.ScrollTrigger.create(e, r);
}, eh = function(r, e, t, i, n) {
  if (bo(r, e, n), !r._initted)
    return 1;
  if (!t && r._pt && !wt && (r._dur && r.vars.lazy !== !1 || !r._dur && r.vars.lazy) && jc !== qt.frame)
    return ji.push(r), r._lazy = [n, i], 1;
}, zu = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, qs = function(r) {
  var e = r.data;
  return e === "isFromStart" || e === "isStart";
}, Hu = function(r, e, t, i) {
  var n = r.ratio, a = e < 0 || !e && (!r._start && zu(r) && !(!r._initted && qs(r)) || (r._ts < 0 || r._dp._ts < 0) && !qs(r)) ? 0 : 1, o = r._rDelay, s = 0, l, c, h;
  if (o && r._repeat && (s = qn(0, r._tDur, e), c = dn(s, o), r._yoyo && c & 1 && (a = 1 - a), c !== dn(r._tTime, o) && (n = 1 - a, r.vars.repeatRefresh && r._initted && r.invalidate())), a !== n || wt || i || r._zTime === Ze || !e && r._zTime) {
    if (!r._initted && eh(r, e, i, t, s))
      return;
    for (h = r._zTime, r._zTime = e || (t ? Ze : 0), t || (t = e && !h), r.ratio = a, r._from && (a = 1 - a), r._time = 0, r._tTime = s, l = r._pt; l; )
      l.r(a, l.d), l = l._next;
    e < 0 && Ys(r, e, t, !0), r._onUpdate && !t && Kt(r, "onUpdate"), s && r._repeat && !t && r.parent && Kt(r, "onRepeat"), (e >= r._tDur || e < 0) && r.ratio === a && (a && Ji(r, 1), !t && !wt && (Kt(r, a ? "onComplete" : "onReverseComplete", !0), r._prom && r._prom()));
  } else
    r._zTime || (r._zTime = e);
}, Gu = function(r, e, t) {
  var i;
  if (t > e)
    for (i = r._first; i && i._start <= t; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = r._last; i && i._start >= t; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, pn = function(r, e, t, i) {
  var n = r._repeat, a = xt(e) || 0, o = r._tTime / r._tDur;
  return o && !i && (r._time *= a / r._dur), r._dur = a, r._tDur = n ? n < 0 ? 1e10 : xt(a * (n + 1) + r._rDelay * n) : a, o > 0 && !i && Va(r, r._tTime = r._tDur * o), r.parent && ka(r), t || Mr(r.parent, r), r;
}, Ko = function(r) {
  return r instanceof Dt ? Mr(r) : pn(r, r._dur);
}, ku = {
  _start: 0,
  endTime: Hn,
  totalDuration: Hn
}, ti = function r(e, t, i) {
  var n = e.labels, a = e._recent || ku, o = e.duration() >= ii ? a.endTime(!1) : e._dur, s, l, c;
  return Mt(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), c = t.substr(-1) === "%", s = t.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (t = t.replace(/=/, "")), (l === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (s < 0 ? a : i).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), c && i && (l = l / 100 * (Rt(i) ? i[0] : i).totalDuration()), s > 1 ? r(e, t.substr(0, s - 1), i) + l : o + l)) : t == null ? o : +t;
}, On = function(r, e, t) {
  var i = Ui(e[1]), n = (i ? 2 : 1) + (r < 2 ? 0 : 1), a = e[n], o, s;
  if (i && (a.duration = e[1]), a.parent = t, r) {
    for (o = a, s = t; s && !("immediateRender" in o); )
      o = s.vars.defaults || {}, s = Ot(s.vars.inherit) && s.parent;
    a.immediateRender = Ot(o.immediateRender), r < 2 ? a.runBackwards = 1 : a.startAt = e[n - 1];
  }
  return new dt(e[0], a, e[n + 1]);
}, tr = function(r, e) {
  return r || r === 0 ? e(r) : e;
}, qn = function(r, e, t) {
  return t < r ? r : t > e ? e : t;
}, At = function(r, e) {
  return !Mt(r) || !(e = Pu.exec(r)) ? "" : e[1];
}, Vu = function(r, e, t) {
  return tr(t, function(i) {
    return qn(r, e, i);
  });
}, Ks = [].slice, th = function(r, e) {
  return r && vi(r) && "length" in r && (!e && !r.length || r.length - 1 in r && vi(r[0])) && !r.nodeType && r !== hi;
}, Wu = function(r, e, t) {
  return t === void 0 && (t = []), r.forEach(function(i) {
    var n;
    return Mt(i) && !e || th(i, 1) ? (n = t).push.apply(n, ri(i)) : t.push(i);
  }) || t;
}, ri = function(r, e, t) {
  return Qe && !e && Qe.selector ? Qe.selector(r) : Mt(r) && !t && (Xs || !fn()) ? Ks.call((e || xo).querySelectorAll(r), 0) : Rt(r) ? Wu(r, t) : th(r) ? Ks.call(r, 0) : r ? [r] : [];
}, Zs = function(r) {
  return r = ri(r)[0] || zn("Invalid scope") || {}, function(e) {
    var t = r.current || r.nativeElement || r;
    return ri(e, t.querySelectorAll ? t : t === r ? zn("Invalid scope") || xo.createElement("div") : r);
  };
}, ih = function(r) {
  return r.sort(function() {
    return 0.5 - Math.random();
  });
}, rh = function(r) {
  if (st(r))
    return r;
  var e = vi(r) ? r : {
    each: r
  }, t = yr(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, a = {}, o = i > 0 && i < 1, s = isNaN(i) || o, l = e.axis, c = i, h = i;
  return Mt(i) ? c = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && s && (c = i[0], h = i[1]), function(u, d, g) {
    var m = (g || e).length, _ = a[m], f, p, y, v, T, C, b, E, L;
    if (!_) {
      if (L = e.grid === "auto" ? 0 : (e.grid || [1, ii])[1], !L) {
        for (b = -ii; b < (b = g[L++].getBoundingClientRect().left) && L < m; )
          ;
        L < m && L--;
      }
      for (_ = a[m] = [], f = s ? Math.min(L, m) * c - 0.5 : i % L, p = L === ii ? 0 : s ? m * h / L - 0.5 : i / L | 0, b = 0, E = ii, C = 0; C < m; C++)
        y = C % L - f, v = p - (C / L | 0), _[C] = T = l ? Math.abs(l === "y" ? v : y) : Bc(y * y + v * v), T > b && (b = T), T < E && (E = T);
      i === "random" && ih(_), _.max = b - E, _.min = E, _.v = m = (parseFloat(e.amount) || parseFloat(e.each) * (L > m ? m - 1 : l ? l === "y" ? m / L : L : Math.max(L, m / L)) || 0) * (i === "edges" ? -1 : 1), _.b = m < 0 ? n - m : n, _.u = At(e.amount || e.each) || 0, t = t && m < 0 ? ph(t) : t;
    }
    return m = (_[u] - _.min) / _.max || 0, xt(_.b + (t ? t(m) : m) * _.v) + _.u;
  };
}, Js = function(r) {
  var e = Math.pow(10, ((r + "").split(".")[1] || "").length);
  return function(t) {
    var i = xt(Math.round(parseFloat(t) / r) * r * e);
    return (i - i % 1) / e + (Ui(t) ? 0 : At(t));
  };
}, nh = function(r, e) {
  var t = Rt(r), i, n;
  return !t && vi(r) && (i = t = r.radius || ii, r.values ? (r = ri(r.values), (n = !Ui(r[0])) && (i *= i)) : r = Js(r.increment)), tr(e, t ? st(r) ? function(a) {
    return n = r(a), Math.abs(n - a) <= i ? n : a;
  } : function(a) {
    for (var o = parseFloat(n ? a.x : a), s = parseFloat(n ? a.y : 0), l = ii, c = 0, h = r.length, u, d; h--; )
      n ? (u = r[h].x - o, d = r[h].y - s, u = u * u + d * d) : u = Math.abs(r[h] - o), u < l && (l = u, c = h);
    return c = !i || l <= i ? r[c] : a, n || c === a || Ui(a) ? c : c + At(a);
  } : Js(r));
}, ah = function(r, e, t, i) {
  return tr(Rt(r) ? !e : t === !0 ? !!(t = 0) : !i, function() {
    return Rt(r) ? r[~~(Math.random() * r.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((r - t / 2 + Math.random() * (e - r + t * 0.99)) / t) * t * i) / i;
  });
}, Xu = function() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return function(i) {
    return e.reduce(function(n, a) {
      return a(n);
    }, i);
  };
}, ju = function(r, e) {
  return function(t) {
    return r(parseFloat(t)) + (e || At(t));
  };
}, Yu = function(r, e, t) {
  return oh(r, e, 0, 1, t);
}, sh = function(r, e, t) {
  return tr(t, function(i) {
    return r[~~e(i)];
  });
}, qu = function r(e, t, i) {
  var n = t - e;
  return Rt(e) ? sh(e, r(0, e.length), t) : tr(i, function(a) {
    return (n + (a - e) % n) % n + e;
  });
}, Ku = function r(e, t, i) {
  var n = t - e, a = n * 2;
  return Rt(e) ? sh(e, r(0, e.length - 1), t) : tr(i, function(o) {
    return o = (a + (o - e) % a) % a || 0, e + (o > n ? a - o : o);
  });
}, Gn = function(r) {
  for (var e = 0, t = "", i, n, a, o; ~(i = r.indexOf("random(", e)); )
    a = r.indexOf(")", i), o = r.charAt(i + 7) === "[", n = r.substr(i + 7, a - i - 7).match(o ? kc : Ws), t += r.substr(e, i - e) + ah(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), e = a + 1;
  return t + r.substr(e, r.length - e);
}, oh = function(r, e, t, i, n) {
  var a = e - r, o = i - t;
  return tr(n, function(s) {
    return t + ((s - r) / a * o || 0);
  });
}, Zu = function r(e, t, i, n) {
  var a = isNaN(e + t) ? 0 : function(g) {
    return (1 - g) * e + g * t;
  };
  if (!a) {
    var o = Mt(e), s = {}, l, c, h, u, d;
    if (i === !0 && (n = 1) && (i = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Rt(e) && !Rt(t)) {
      for (h = [], u = e.length, d = u - 2, c = 1; c < u; c++)
        h.push(r(e[c - 1], e[c]));
      u--, a = function(g) {
        g *= u;
        var m = Math.min(d, ~~g);
        return h[m](g - m);
      }, i = t;
    } else
      n || (e = Ar(Rt(e) ? [] : {}, e));
    if (!h) {
      for (l in t)
        Eo.call(s, e, l, "get", t[l]);
      a = function(g) {
        return Ro(g, s) || (o ? e.p : e);
      };
    }
  }
  return tr(i, a);
}, Zo = function(r, e, t) {
  var i = r.labels, n = ii, a, o, s;
  for (a in i)
    o = i[a] - e, o < 0 == !!t && o && n > (o = Math.abs(o)) && (s = a, n = o);
  return s;
}, Kt = function(r, e, t) {
  var i = r.vars, n = i[e], a = Qe, o = r._ctx, s, l, c;
  if (n)
    return s = i[e + "Params"], l = i.callbackScope || r, t && ji.length && Ra(), o && (Qe = o), c = s ? n.apply(l, s) : n.call(l), Qe = a, c;
}, Pn = function(r) {
  return Ji(r), r.scrollTrigger && r.scrollTrigger.kill(!!wt), r.progress() < 1 && Kt(r, "onInterrupt"), r;
}, rn, lh = [], ch = function(r) {
  if (r)
    if (r = !r.name && r.default || r, vo() || r.headless) {
      var e = r.name, t = st(r), i = e && !t && r.init ? function() {
        this._props = [];
      } : r, n = {
        init: Hn,
        render: Ro,
        add: Eo,
        kill: dd,
        modifier: ud,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: wo,
        aliases: {},
        register: 0
      };
      if (fn(), r !== i) {
        if (jt[e])
          return;
        ni(i, ni(Ca(r, n), a)), Ar(i.prototype, Ar(n, Ca(r, a))), jt[i.prop = e] = i, r.targetTest && (Ea.push(i), yo[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Xc(e, i), r.register && r.register(kt, i, Ft);
    } else
      lh.push(r);
}, Ke = 255, Un = {
  aqua: [0, Ke, Ke],
  lime: [0, Ke, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Ke],
  navy: [0, 0, 128],
  white: [Ke, Ke, Ke],
  olive: [128, 128, 0],
  yellow: [Ke, Ke, 0],
  orange: [Ke, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Ke, 0, 0],
  pink: [Ke, 192, 203],
  cyan: [0, Ke, Ke],
  transparent: [Ke, Ke, Ke, 0]
}, ts = function(r, e, t) {
  return r += r < 0 ? 1 : r > 1 ? -1 : 0, (r * 6 < 1 ? e + (t - e) * r * 6 : r < 0.5 ? t : r * 3 < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e) * Ke + 0.5 | 0;
}, hh = function(r, e, t) {
  var i = r ? Ui(r) ? [r >> 16, r >> 8 & Ke, r & Ke] : 0 : Un.black, n, a, o, s, l, c, h, u, d, g;
  if (!i) {
    if (r.substr(-1) === "," && (r = r.substr(0, r.length - 1)), Un[r])
      i = Un[r];
    else if (r.charAt(0) === "#") {
      if (r.length < 6 && (n = r.charAt(1), a = r.charAt(2), o = r.charAt(3), r = "#" + n + n + a + a + o + o + (r.length === 5 ? r.charAt(4) + r.charAt(4) : "")), r.length === 9)
        return i = parseInt(r.substr(1, 6), 16), [i >> 16, i >> 8 & Ke, i & Ke, parseInt(r.substr(7), 16) / 255];
      r = parseInt(r.substr(1), 16), i = [r >> 16, r >> 8 & Ke, r & Ke];
    } else if (r.substr(0, 3) === "hsl") {
      if (i = g = r.match(Ws), !e)
        s = +i[0] % 360 / 360, l = +i[1] / 100, c = +i[2] / 100, a = c <= 0.5 ? c * (l + 1) : c + l - c * l, n = c * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = ts(s + 1 / 3, n, a), i[1] = ts(s, n, a), i[2] = ts(s - 1 / 3, n, a);
      else if (~r.indexOf("="))
        return i = r.match(Hc), t && i.length < 4 && (i[3] = 1), i;
    } else
      i = r.match(Ws) || Un.transparent;
    i = i.map(Number);
  }
  return e && !g && (n = i[0] / Ke, a = i[1] / Ke, o = i[2] / Ke, h = Math.max(n, a, o), u = Math.min(n, a, o), c = (h + u) / 2, h === u ? s = l = 0 : (d = h - u, l = c > 0.5 ? d / (2 - h - u) : d / (h + u), s = h === n ? (a - o) / d + (a < o ? 6 : 0) : h === a ? (o - n) / d + 2 : (n - a) / d + 4, s *= 60), i[0] = ~~(s + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), t && i.length < 4 && (i[3] = 1), i;
}, uh = function(r) {
  var e = [], t = [], i = -1;
  return r.split(Yi).forEach(function(n) {
    var a = n.match(tn) || [];
    e.push.apply(e, a), t.push(i += a.length + 1);
  }), e.c = t, e;
}, Jo = function(r, e, t) {
  var i = "", n = (r + i).match(Yi), a = e ? "hsla(" : "rgba(", o = 0, s, l, c, h;
  if (!n)
    return r;
  if (n = n.map(function(u) {
    return (u = hh(u, e, 1)) && a + (e ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) + ")";
  }), t && (c = uh(r), s = t.c, s.join(i) !== c.c.join(i)))
    for (l = r.replace(Yi, "1").split(tn), h = l.length - 1; o < h; o++)
      i += l[o] + (~s.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (c.length ? c : n.length ? n : t).shift());
  if (!l)
    for (l = r.split(Yi), h = l.length - 1; o < h; o++)
      i += l[o] + n[o];
  return i + l[h];
}, Yi = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Un)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
}(), Ju = /hsl[a]?\(/, dh = function(r) {
  var e = r.join(" "), t;
  if (Yi.lastIndex = 0, Yi.test(e))
    return t = Ju.test(e), r[1] = Jo(r[1], t), r[0] = Jo(r[0], t, uh(r[1])), !0;
}, kn, qt = function() {
  var r = Date.now, e = 500, t = 33, i = r(), n = i, a = 1e3 / 240, o = a, s = [], l, c, h, u, d, g, m = function _(f) {
    var p = r() - n, y = f === !0, v, T, C, b;
    if ((p > e || p < 0) && (i += p - t), n += p, C = n - i, v = C - o, (v > 0 || y) && (b = ++u.frame, d = C - u.time * 1e3, u.time = C = C / 1e3, o += v + (v >= a ? 4 : a - v), T = 1), y || (l = c(_)), T)
      for (g = 0; g < s.length; g++)
        s[g](C, d, b, f);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(_) {
      return d / (1e3 / (_ || 60));
    },
    wake: function() {
      Vc && (!Xs && vo() && (hi = Xs = window, xo = hi.document || {}, Jt.gsap = kt, (hi.gsapVersions || (hi.gsapVersions = [])).push(kt.version), Wc(wa || hi.GreenSockGlobals || !hi.gsap && hi || {}), lh.forEach(ch)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = h || function(_) {
        return setTimeout(_, o - u.time * 1e3 + 1 | 0);
      }, kn = 1, m(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(l), kn = 0, c = Hn;
    },
    lagSmoothing: function(_, f) {
      e = _ || 1 / 0, t = Math.min(f || 33, e);
    },
    fps: function(_) {
      a = 1e3 / (_ || 240), o = u.time * 1e3 + a;
    },
    add: function(_, f, p) {
      var y = f ? function(v, T, C, b) {
        _(v, T, C, b), u.remove(y);
      } : _;
      return u.remove(_), s[p ? "unshift" : "push"](y), fn(), y;
    },
    remove: function(_, f) {
      ~(f = s.indexOf(_)) && s.splice(f, 1) && g >= f && g--;
    },
    _listeners: s
  }, u;
}(), fn = function() {
  return !kn && qt.wake();
}, Xe = {}, $u = /^[\d.\-M][\d.\-,\s]/, Qu = /["']/g, ed = function(r) {
  for (var e = {}, t = r.substr(1, r.length - 3).split(":"), i = t[0], n = 1, a = t.length, o, s, l; n < a; n++)
    s = t[n], o = n !== a - 1 ? s.lastIndexOf(",") : s.length, l = s.substr(0, o), e[i] = isNaN(l) ? l.replace(Qu, "").trim() : +l, i = s.substr(o + 1).trim();
  return e;
}, td = function(r) {
  var e = r.indexOf("(") + 1, t = r.indexOf(")"), i = r.indexOf("(", e);
  return r.substring(e, ~i && i < t ? r.indexOf(")", t + 1) : t);
}, id = function(r) {
  var e = (r + "").split("("), t = Xe[e[0]];
  return t && e.length > 1 && t.config ? t.config.apply(null, ~r.indexOf("{") ? [ed(e[1])] : td(r).split(",").map(Kc)) : Xe._CE && $u.test(r) ? Xe._CE("", r) : t;
}, ph = function(r) {
  return function(e) {
    return 1 - r(1 - e);
  };
}, fh = function r(e, t) {
  for (var i = e._first, n; i; )
    i instanceof Dt ? r(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? r(i.timeline, t) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = t)), i = i._next;
}, yr = function(r, e) {
  return r && (st(r) ? r : Xe[r] || id(r)) || e;
}, Pr = function(r, e, t, i) {
  t === void 0 && (t = function(o) {
    return 1 - e(1 - o);
  }), i === void 0 && (i = function(o) {
    return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: t,
    easeInOut: i
  }, a;
  return Nt(r, function(o) {
    Xe[o] = Jt[o] = n, Xe[a = o.toLowerCase()] = t;
    for (var s in n)
      Xe[a + (s === "easeIn" ? ".in" : s === "easeOut" ? ".out" : ".inOut")] = Xe[o + "." + s] = n[s];
  }), n;
}, mh = function(r) {
  return function(e) {
    return e < 0.5 ? (1 - r(1 - e * 2)) / 2 : 0.5 + r((e - 0.5) * 2) / 2;
  };
}, is = function r(e, t, i) {
  var n = t >= 1 ? t : 1, a = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = a / Vs * (Math.asin(1 / n) || 0), s = function(c) {
    return c === 1 ? 1 : n * Math.pow(2, -10 * c) * Lu((c - o) * a) + 1;
  }, l = e === "out" ? s : e === "in" ? function(c) {
    return 1 - s(1 - c);
  } : mh(s);
  return a = Vs / a, l.config = function(c, h) {
    return r(e, c, h);
  }, l;
}, rs = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var i = function(a) {
    return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
  }, n = e === "out" ? i : e === "in" ? function(a) {
    return 1 - i(1 - a);
  } : mh(i);
  return n.config = function(a) {
    return r(e, a);
  }, n;
};
Nt("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  Pr(r + ",Power" + (t - 1), e ? function(i) {
    return Math.pow(i, t);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, t);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2;
  });
});
Xe.Linear.easeNone = Xe.none = Xe.Linear.easeIn;
Pr("Elastic", is("in"), is("out"), is());
(function(r, e) {
  var t = 1 / e, i = 2 * t, n = 2.5 * t, a = function(o) {
    return o < t ? r * o * o : o < i ? r * Math.pow(o - 1.5 / e, 2) + 0.75 : o < n ? r * (o -= 2.25 / e) * o + 0.9375 : r * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  Pr("Bounce", function(o) {
    return 1 - a(1 - o);
  }, a);
})(7.5625, 2.75);
Pr("Expo", function(r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
Pr("Circ", function(r) {
  return -(Bc(1 - r * r) - 1);
});
Pr("Sine", function(r) {
  return r === 1 ? 1 : -Cu(r * wu) + 1;
});
Pr("Back", rs("in"), rs("out"), rs());
Xe.SteppedEase = Xe.steps = Jt.SteppedEase = {
  config: function(r, e) {
    r === void 0 && (r = 1);
    var t = 1 / r, i = r + (e ? 0 : 1), n = e ? 1 : 0, a = 1 - Ze;
    return function(o) {
      return ((i * qn(0, a, o) | 0) + n) * t;
    };
  }
};
un.ease = Xe["quad.out"];
Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return So += r + "," + r + "Params,";
});
var gh = function(r, e) {
  this.id = Ru++, r._gsap = this, this.target = r, this.harness = e, this.get = e ? e.get : Yc, this.set = e ? e.getSetter : wo;
}, Vn = /* @__PURE__ */ function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, pn(this, +t.duration, 1, 1), this.data = t.data, Qe && (this._ctx = Qe, Qe.data.push(this)), kn || qt.wake();
  }
  var e = r.prototype;
  return e.delay = function(t) {
    return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, e.duration = function(t) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(t) {
    return arguments.length ? (this._dirty = 0, pn(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(t, i) {
    if (fn(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Va(this, t), !n._dp || n.parent || $c(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && pi(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === Ze || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), qc(this, t, i)), this;
  }, e.time = function(t, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + qo(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(t, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(t, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + qo(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(t, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? dn(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(t, i) {
    if (!arguments.length)
      return this._rts === -Ze ? 0 : this._rts;
    if (this._rts === t)
      return this;
    var n = this.parent && this._ts ? La(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -Ze ? 0 : this._rts, this.totalTime(qn(-Math.abs(this._delay), this._tDur, n), i !== !1), ka(this), Fu(this);
  }, e.paused = function(t) {
    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (fn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Ze && (this._tTime -= Ze)))), this) : this._ps;
  }, e.startTime = function(t) {
    if (arguments.length) {
      this._start = t;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && pi(i, this, t - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(t) {
    return this._start + (Ot(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(t) {
    var i = this.parent || this._dp;
    return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? La(i.rawTime(t), this) : this._tTime : this._tTime;
  }, e.revert = function(t) {
    t === void 0 && (t = Du);
    var i = wt;
    return wt = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), wt = i, this;
  }, e.globalTime = function(t) {
    for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(t) : n;
  }, e.repeat = function(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ko(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(t) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = t, Ko(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, e.seek = function(t, i) {
    return this.totalTime(ti(this, t), Ot(i));
  }, e.restart = function(t, i) {
    return this.play().totalTime(t ? -this._delay : 0, Ot(i));
  }, e.play = function(t, i) {
    return t != null && this.seek(t, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(t, i) {
    return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(t, i) {
    return t != null && this.seek(t, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Ze : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Ze, this;
  }, e.isActive = function() {
    var t = this.parent || this._dp, i = this._start, n;
    return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - Ze);
  }, e.eventCallback = function(t, i, n) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[t] = i, n && (a[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete a[t], this) : a[t];
  }, e.then = function(t) {
    var i = this;
    return new Promise(function(n) {
      var a = st(t) ? t : Zc, o = function() {
        var s = i.then;
        i.then = null, st(a) && (a = a(i)) && (a.then || a === i) && (i.then = s), n(a), i.then = s;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, e.kill = function() {
    Pn(this);
  }, r;
}();
ni(Vn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Ze,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Dt = /* @__PURE__ */ function(r) {
  Fc(e, r);
  function e(i, n) {
    var a;
    return i === void 0 && (i = {}), a = r.call(this, i) || this, a.labels = {}, a.smoothChildTiming = !!i.smoothChildTiming, a.autoRemoveChildren = !!i.autoRemoveChildren, a._sort = Ot(i.sortChildren), it && pi(i.parent || it, wi(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), i.scrollTrigger && Qc(wi(a), i.scrollTrigger), a;
  }
  var t = e.prototype;
  return t.to = function(i, n, a) {
    return On(0, arguments, this), this;
  }, t.from = function(i, n, a) {
    return On(1, arguments, this), this;
  }, t.fromTo = function(i, n, a, o) {
    return On(2, arguments, this), this;
  }, t.set = function(i, n, a) {
    return n.duration = 0, n.parent = this, In(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new dt(i, n, ti(this, a), 1), this;
  }, t.call = function(i, n, a) {
    return pi(this, dt.delayedCall(0, i, n), a);
  }, t.staggerTo = function(i, n, a, o, s, l, c) {
    return a.duration = n, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = c, a.parent = this, new dt(i, a, ti(this, s)), this;
  }, t.staggerFrom = function(i, n, a, o, s, l, c) {
    return a.runBackwards = 1, In(a).immediateRender = Ot(a.immediateRender), this.staggerTo(i, n, a, o, s, l, c);
  }, t.staggerFromTo = function(i, n, a, o, s, l, c, h) {
    return o.startAt = a, In(o).immediateRender = Ot(o.immediateRender), this.staggerTo(i, n, o, s, l, c, h);
  }, t.render = function(i, n, a) {
    var o = this._time, s = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = i <= 0 ? 0 : xt(i), h = this._zTime < 0 != i < 0 && (this._initted || !l), u, d, g, m, _, f, p, y, v, T, C, b;
    if (this !== it && c > s && i >= 0 && (c = s), c !== this._tTime || a || h) {
      if (o !== this._time && l && (c += this._time - o, i += this._time - o), u = c, v = this._start, y = this._ts, f = !y, h && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (C = this._yoyo, _ = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(_ * 100 + i, n, a);
        if (u = xt(c % _), c === s ? (m = this._repeat, u = l) : (m = ~~(c / _), m && m === c / _ && (u = l, m--), u > l && (u = l)), T = dn(this._tTime, _), !o && this._tTime && T !== m && this._tTime - T * _ - this._dur <= 0 && (T = m), C && m & 1 && (u = l - u, b = 1), m !== T && !this._lock) {
          var E = C && T & 1, L = E === (C && m & 1);
          if (m < T && (E = !E), o = E ? 0 : c % l ? l : c, this._lock = 1, this.render(o || (b ? 0 : xt(m * _)), n, !l)._lock = 0, this._tTime = c, !n && this.parent && Kt(this, "onRepeat"), this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1), o && o !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, s = this._tDur, L && (this._lock = 2, o = E ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !b && this.invalidate()), this._lock = 0, !this._ts && !f)
            return this;
          fh(this, b);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (p = Gu(this, xt(o), xt(u)), p && (c -= u - (u = p._start))), this._tTime = c, this._time = u, this._act = !y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && u && !n && !m && (Kt(this, "onStart"), this._tTime !== c))
        return this;
      if (u >= o && i >= 0)
        for (d = this._first; d; ) {
          if (g = d._next, (d._act || u >= d._start) && d._ts && p !== d) {
            if (d.parent !== this)
              return this.render(i, n, a);
            if (d.render(d._ts > 0 ? (u - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (u - d._start) * d._ts, n, a), u !== this._time || !this._ts && !f) {
              p = 0, g && (c += this._zTime = -Ze);
              break;
            }
          }
          d = g;
        }
      else {
        d = this._last;
        for (var X = i < 0 ? i : u; d; ) {
          if (g = d._prev, (d._act || X <= d._end) && d._ts && p !== d) {
            if (d.parent !== this)
              return this.render(i, n, a);
            if (d.render(d._ts > 0 ? (X - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (X - d._start) * d._ts, n, a || wt && (d._initted || d._startAt)), u !== this._time || !this._ts && !f) {
              p = 0, g && (c += this._zTime = X ? -Ze : Ze);
              break;
            }
          }
          d = g;
        }
      }
      if (p && !n && (this.pause(), p.render(u >= o ? 0 : -Ze)._zTime = u >= o ? 1 : -1, this._ts))
        return this._start = v, ka(this), this.render(i, n, a);
      this._onUpdate && !n && Kt(this, "onUpdate", !0), (c === s && this._tTime >= this.totalDuration() || !c && o) && (v === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (c === s && this._ts > 0 || !c && this._ts < 0) && Ji(this, 1), !n && !(i < 0 && !o) && (c || o || !s) && (Kt(this, c === s && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < s && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var a = this;
    if (Ui(n) || (n = ti(this, n, i)), !(i instanceof Vn)) {
      if (Rt(i))
        return i.forEach(function(o) {
          return a.add(o, n);
        }), this;
      if (Mt(i))
        return this.addLabel(i, n);
      if (st(i))
        i = dt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? pi(this, i, n) : this;
  }, t.getChildren = function(i, n, a, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), a === void 0 && (a = !0), o === void 0 && (o = -ii);
    for (var s = [], l = this._first; l; )
      l._start >= o && (l instanceof dt ? n && s.push(l) : (a && s.push(l), i && s.push.apply(s, l.getChildren(!0, n, a)))), l = l._next;
    return s;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
      if (n[a].vars.id === i)
        return n[a];
  }, t.remove = function(i) {
    return Mt(i) ? this.removeLabel(i) : st(i) ? this.killTweensOf(i) : (Ga(this, i), i === this._recent && (this._recent = this._last), Mr(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(qt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = ti(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, a) {
    var o = dt.delayedCall(0, n || Hn, a);
    return o.data = "isPause", this._hasPause = 1, pi(this, o, ti(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = ti(this, i); n; )
      n._start === i && n.data === "isPause" && Ji(n), n = n._next;
  }, t.killTweensOf = function(i, n, a) {
    for (var o = this.getTweensOf(i, a), s = o.length; s--; )
      ki !== o[s] && o[s].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var a = [], o = ri(i), s = this._first, l = Ui(n), c; s; )
      s instanceof dt ? Iu(s._targets, o) && (l ? (!ki || s._initted && s._ts) && s.globalTime(0) <= n && s.globalTime(s.totalDuration()) > n : !n || s.isActive()) && a.push(s) : (c = s.getTweensOf(o, n)).length && a.push.apply(a, c), s = s._next;
    return a;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var a = this, o = ti(a, i), s = n, l = s.startAt, c = s.onStart, h = s.onStartParams, u = s.immediateRender, d, g = dt.to(a, ni({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || Ze,
      onStart: function() {
        if (a.pause(), !d) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
          g._dur !== m && pn(g, m, 0, 1).render(g._time, !0, !0), d = 1;
        }
        c && c.apply(g, h || []);
      }
    }, n));
    return u ? g.render(0) : g;
  }, t.tweenFromTo = function(i, n, a) {
    return this.tweenTo(n, ni({
      startAt: {
        time: ti(this, i)
      }
    }, a));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Zo(this, ti(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Zo(this, ti(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Ze);
  }, t.shiftChildren = function(i, n, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, s = this.labels, l; o; )
      o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (l in s)
        s[l] >= a && (s[l] += i);
    return Mr(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return r.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, a; n; )
      a = n._next, this.remove(n), n = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Mr(this);
  }, t.totalDuration = function(i) {
    var n = 0, a = this, o = a._last, s = ii, l, c, h;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (h = a.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), c = o._start, c > s && a._sort && o._ts && !a._lock ? (a._lock = 1, pi(a, o, c - o._delay, 1)._lock = 0) : s = c, c < 0 && o._ts && (n -= c, (!h && !a._dp || h && h.smoothChildTiming) && (a._start += c / a._ts, a._time -= c, a._tTime -= c), a.shiftChildren(-c, !1, -1 / 0), s = 0), o._end > n && o._ts && (n = o._end), o = l;
      pn(a, a === it && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, e.updateRoot = function(i) {
    if (it._ts && (qc(it, La(i, it)), jc = qt.frame), qt.frame >= jo) {
      jo += Zt.autoSleep || 120;
      var n = it._first;
      if ((!n || !n._ts) && Zt.autoSleep && qt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || qt.sleep();
      }
    }
  }, e;
}(Vn);
ni(Dt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var rd = function(r, e, t, i, n, a, o) {
  var s = new Ft(this._pt, r, e, 0, 1, Sh, null, n), l = 0, c = 0, h, u, d, g, m, _, f, p;
  for (s.b = t, s.e = i, t += "", i += "", (f = ~i.indexOf("random(")) && (i = Gn(i)), a && (p = [t, i], a(p, r, e), t = p[0], i = p[1]), u = t.match(Qa) || []; h = Qa.exec(i); )
    g = h[0], m = i.substring(l, h.index), d ? d = (d + 1) % 5 : m.substr(-5) === "rgba(" && (d = 1), g !== u[c++] && (_ = parseFloat(u[c - 1]) || 0, s._pt = {
      _next: s._pt,
      p: m || c === 1 ? m : ",",
      s: _,
      c: g.charAt(1) === "=" ? sn(_, g) - _ : parseFloat(g) - _,
      m: d && d < 4 ? Math.round : 0
    }, l = Qa.lastIndex);
  return s.c = l < i.length ? i.substring(l, i.length) : "", s.fp = o, (Gc.test(i) || f) && (s.e = 0), this._pt = s, s;
}, Eo = function(r, e, t, i, n, a, o, s, l, c) {
  st(i) && (i = i(n || 0, r, a));
  var h = r[e], u = t !== "get" ? t : st(h) ? l ? r[e.indexOf("set") || !st(r["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : r[e]() : h, d = st(h) ? l ? ld : Mh : Ao, g;
  if (Mt(i) && (~i.indexOf("random(") && (i = Gn(i)), i.charAt(1) === "=" && (g = sn(u, i) + (At(u) || 0), (g || g === 0) && (i = g))), !c || u !== i || $s)
    return !isNaN(u * i) && i !== "" ? (g = new Ft(this._pt, r, e, +u || 0, i - (u || 0), typeof h == "boolean" ? hd : yh, 0, d), l && (g.fp = l), o && g.modifier(o, this, r), this._pt = g) : (!h && !(e in r) && Mo(e, i), rd.call(this, r, e, u, i, d, s || Zt.stringFilter, l));
}, nd = function(r, e, t, i, n) {
  if (st(r) && (r = Nn(r, n, e, t, i)), !vi(r) || r.style && r.nodeType || Rt(r) || zc(r))
    return Mt(r) ? Nn(r, n, e, t, i) : r;
  var a = {}, o;
  for (o in r)
    a[o] = Nn(r[o], n, e, t, i);
  return a;
}, _h = function(r, e, t, i, n, a) {
  var o, s, l, c;
  if (jt[r] && (o = new jt[r]()).init(n, o.rawVars ? e[r] : nd(e[r], i, n, a, t), t, i, a) !== !1 && (t._pt = s = new Ft(t._pt, n, r, 0, 1, o.render, o, 0, o.priority), t !== rn))
    for (l = t._ptLookup[t._targets.indexOf(n)], c = o._props.length; c--; )
      l[o._props[c]] = s;
  return o;
}, ki, $s, bo = function r(e, t, i) {
  var n = e.vars, a = n.ease, o = n.startAt, s = n.immediateRender, l = n.lazy, c = n.onUpdate, h = n.runBackwards, u = n.yoyoEase, d = n.keyframes, g = n.autoRevert, m = e._dur, _ = e._startAt, f = e._targets, p = e.parent, y = p && p.data === "nested" ? p.vars.targets : f, v = e._overwrite === "auto" && !go, T = e.timeline, C, b, E, L, X, M, w, j, K, P, V, B, W;
  if (T && (!d || !a) && (a = "none"), e._ease = yr(a, un.ease), e._yEase = u ? ph(yr(u === !0 ? a : u, un.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !T && !!n.runBackwards, !T || d && !n.stagger) {
    if (j = f[0] ? xr(f[0]).harness : 0, B = j && n[j.prop], C = Ca(n, yo), _ && (_._zTime < 0 && _.progress(1), t < 0 && h && s && !g ? _.render(-1, !0) : _.revert(h && m ? Ta : Uu), _._lazy = 0), o) {
      if (Ji(e._startAt = dt.set(f, ni({
        data: "isStart",
        overwrite: !1,
        parent: p,
        immediateRender: !0,
        lazy: !_ && Ot(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return Kt(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (wt || !s && !g) && e._startAt.revert(Ta), s && m && t <= 0 && i <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (h && m && !_) {
      if (t && (s = !1), E = ni({
        overwrite: !1,
        data: "isFromStart",
        lazy: s && !_ && Ot(l),
        immediateRender: s,
        stagger: 0,
        parent: p
      }, C), B && (E[j.prop] = B), Ji(e._startAt = dt.set(f, E)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (wt ? e._startAt.revert(Ta) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        r(e._startAt, Ze, Ze);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = m && Ot(l) || l && !m, b = 0; b < f.length; b++) {
      if (X = f[b], w = X._gsap || To(f)[b]._gsap, e._ptLookup[b] = P = {}, js[w.id] && ji.length && Ra(), V = y === f ? b : y.indexOf(X), j && (K = new j()).init(X, B || C, e, V, y) !== !1 && (e._pt = L = new Ft(e._pt, X, K.name, 0, 1, K.render, K, 0, K.priority), K._props.forEach(function(Y) {
        P[Y] = L;
      }), K.priority && (M = 1)), !j || B)
        for (E in C)
          jt[E] && (K = _h(E, C, e, V, X, y)) ? K.priority && (M = 1) : P[E] = L = Eo.call(e, X, E, "get", C[E], V, y, 0, n.stringFilter);
      e._op && e._op[b] && e.kill(X, e._op[b]), v && e._pt && (ki = e, it.killTweensOf(X, P, e.globalTime(t)), W = !e.parent, ki = 0), e._pt && l && (js[w.id] = 1);
    }
    M && Th(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !W, d && t <= 0 && T.render(ii, !0, !0);
}, ad = function(r, e, t, i, n, a, o, s) {
  var l = (r._pt && r._ptCache || (r._ptCache = {}))[e], c, h, u, d;
  if (!l)
    for (l = r._ptCache[e] = [], u = r._ptLookup, d = r._targets.length; d--; ) {
      if (c = u[d][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return $s = 1, r.vars[e] = "+=0", bo(r, o), $s = 0, s ? zn(e + " not eligible for reset") : 1;
      l.push(c);
    }
  for (d = l.length; d--; )
    h = l[d], c = h._pt || h, c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + a * c.c, c.c = t - c.s, h.e && (h.e = ct(t) + At(h.e)), h.b && (h.b = c.s + At(h.b));
}, sd = function(r, e) {
  var t = r[0] ? xr(r[0]).harness : 0, i = t && t.aliases, n, a, o, s;
  if (!i)
    return e;
  n = Ar({}, e);
  for (a in i)
    if (a in n)
      for (s = i[a].split(","), o = s.length; o--; )
        n[s[o]] = n[a];
  return n;
}, od = function(r, e, t, i) {
  var n = e.ease || i || "power1.inOut", a, o;
  if (Rt(e))
    o = t[r] || (t[r] = []), e.forEach(function(s, l) {
      return o.push({
        t: l / (e.length - 1) * 100,
        v: s,
        e: n
      });
    });
  else
    for (a in e)
      o = t[a] || (t[a] = []), a === "ease" || o.push({
        t: parseFloat(r),
        v: e[a],
        e: n
      });
}, Nn = function(r, e, t, i, n) {
  return st(r) ? r.call(e, t, i, n) : Mt(r) && ~r.indexOf("random(") ? Gn(r) : r;
}, vh = So + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", xh = {};
Nt(vh + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return xh[r] = 1;
});
var dt = /* @__PURE__ */ function(r) {
  Fc(e, r);
  function e(i, n, a, o) {
    var s;
    typeof n == "number" && (a.duration = n, n = a, a = null), s = r.call(this, o ? n : In(n)) || this;
    var l = s.vars, c = l.duration, h = l.delay, u = l.immediateRender, d = l.stagger, g = l.overwrite, m = l.keyframes, _ = l.defaults, f = l.scrollTrigger, p = l.yoyoEase, y = n.parent || it, v = (Rt(i) || zc(i) ? Ui(i[0]) : "length" in n) ? [i] : ri(i), T, C, b, E, L, X, M, w;
    if (s._targets = v.length ? To(v) : zn("GSAP target " + i + " not found. https://gsap.com", !Zt.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = g, m || d || ea(c) || ea(h)) {
      if (n = s.vars, T = s.timeline = new Dt({
        data: "nested",
        defaults: _ || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), T.kill(), T.parent = T._dp = wi(s), T._start = 0, d || ea(c) || ea(h)) {
        if (E = v.length, M = d && rh(d), vi(d))
          for (L in d)
            ~vh.indexOf(L) && (w || (w = {}), w[L] = d[L]);
        for (C = 0; C < E; C++)
          b = Ca(n, xh), b.stagger = 0, p && (b.yoyoEase = p), w && Ar(b, w), X = v[C], b.duration = +Nn(c, wi(s), C, X, v), b.delay = (+Nn(h, wi(s), C, X, v) || 0) - s._delay, !d && E === 1 && b.delay && (s._delay = h = b.delay, s._start += h, b.delay = 0), T.to(X, b, M ? M(C, X, v) : 0), T._ease = Xe.none;
        T.duration() ? c = h = 0 : s.timeline = 0;
      } else if (m) {
        In(ni(T.vars.defaults, {
          ease: "none"
        })), T._ease = yr(m.ease || n.ease || "none");
        var j = 0, K, P, V;
        if (Rt(m))
          m.forEach(function(B) {
            return T.to(v, B, ">");
          }), T.duration();
        else {
          b = {};
          for (L in m)
            L === "ease" || L === "easeEach" || od(L, m[L], b, m.easeEach);
          for (L in b)
            for (K = b[L].sort(function(B, W) {
              return B.t - W.t;
            }), j = 0, C = 0; C < K.length; C++)
              P = K[C], V = {
                ease: P.e,
                duration: (P.t - (C ? K[C - 1].t : 0)) / 100 * c
              }, V[L] = P.v, T.to(v, V, j), j += V.duration;
          T.duration() < c && T.to({}, {
            duration: c - T.duration()
          });
        }
      }
      c || s.duration(c = T.duration());
    } else
      s.timeline = 0;
    return g === !0 && !go && (ki = wi(s), it.killTweensOf(v), ki = 0), pi(y, wi(s), a), n.reversed && s.reverse(), n.paused && s.paused(!0), (u || !c && !m && s._start === xt(y._time) && Ot(u) && Bu(wi(s)) && y.data !== "nested") && (s._tTime = -Ze, s.render(Math.max(0, -h) || 0)), f && Qc(wi(s), f), s;
  }
  var t = e.prototype;
  return t.render = function(i, n, a) {
    var o = this._time, s = this._tDur, l = this._dur, c = i < 0, h = i > s - Ze && !c ? s : i < Ze ? 0 : i, u, d, g, m, _, f, p, y, v;
    if (!l)
      Hu(this, i, n, a);
    else if (h !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (u = h, y = this.timeline, this._repeat) {
        if (m = l + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(m * 100 + i, n, a);
        if (u = xt(h % m), h === s ? (g = this._repeat, u = l) : (g = ~~(h / m), g && g === xt(h / m) && (u = l, g--), u > l && (u = l)), f = this._yoyo && g & 1, f && (v = this._yEase, u = l - u), _ = dn(this._tTime, m), u === o && !a && this._initted && g === _)
          return this._tTime = h, this;
        g !== _ && (y && this._yEase && fh(y, f), this.vars.repeatRefresh && !f && !this._lock && this._time !== m && this._initted && (this._lock = a = 1, this.render(xt(m * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (eh(this, c ? i : u, a, n, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && g !== _))
          return this;
        if (l !== this._dur)
          return this.render(i, n, a);
      }
      if (this._tTime = h, this._time = u, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = p = (v || this._ease)(u / l), this._from && (this.ratio = p = 1 - p), u && !o && !n && !g && (Kt(this, "onStart"), this._tTime !== h))
        return this;
      for (d = this._pt; d; )
        d.r(p, d.d), d = d._next;
      y && y.render(i < 0 ? i : y._dur * y._ease(u / this._dur), n, a) || this._startAt && (this._zTime = i), this._onUpdate && !n && (c && Ys(this, i, n, a), Kt(this, "onUpdate")), this._repeat && g !== _ && this.vars.onRepeat && !n && this.parent && Kt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (c && !this._onUpdate && Ys(this, i, !0, !0), (i || !l) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Ji(this, 1), !n && !(c && !o) && (h || o || f) && (Kt(this, h === s ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < s && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, a, o, s) {
    kn || qt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || bo(this, l), c = this._ease(l / this._dur), ad(this, i, n, a, o, c, l, s) ? this.resetTo(i, n, a, o, 1) : (Va(this, 0), this.parent || Jc(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Pn(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, ki && ki.vars.overwrite !== !0)._first || Pn(this), this.parent && a !== this.timeline.totalDuration() && pn(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, s = i ? ri(i) : o, l = this._ptLookup, c = this._pt, h, u, d, g, m, _, f;
    if ((!n || n === "all") && Nu(o, s))
      return n === "all" && (this._pt = 0), Pn(this);
    for (h = this._op = this._op || [], n !== "all" && (Mt(n) && (m = {}, Nt(n, function(p) {
      return m[p] = 1;
    }), n = m), n = sd(o, n)), f = o.length; f--; )
      if (~s.indexOf(o[f])) {
        u = l[f], n === "all" ? (h[f] = n, g = u, d = {}) : (d = h[f] = h[f] || {}, g = n);
        for (m in g)
          _ = u && u[m], _ && ((!("kill" in _.d) || _.d.kill(m) === !0) && Ga(this, _, "_pt"), delete u[m]), d !== "all" && (d[m] = 1);
      }
    return this._initted && !this._pt && c && Pn(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return On(1, arguments);
  }, e.delayedCall = function(i, n, a, o) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, e.fromTo = function(i, n, a) {
    return On(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, a) {
    return it.killTweensOf(i, n, a);
  }, e;
}(Vn);
ni(dt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Nt("staggerTo,staggerFrom,staggerFromTo", function(r) {
  dt[r] = function() {
    var e = new Dt(), t = Ks.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var Ao = function(r, e, t) {
  return r[e] = t;
}, Mh = function(r, e, t) {
  return r[e](t);
}, ld = function(r, e, t, i) {
  return r[e](i.fp, t);
}, cd = function(r, e, t) {
  return r.setAttribute(e, t);
}, wo = function(r, e) {
  return st(r[e]) ? Mh : _o(r[e]) && r.setAttribute ? cd : Ao;
}, yh = function(r, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * r) * 1e6) / 1e6, e);
}, hd = function(r, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * r), e);
}, Sh = function(r, e) {
  var t = e._pt, i = "";
  if (!r && e.b)
    i = e.b;
  else if (r === 1 && e.e)
    i = e.e;
  else {
    for (; t; )
      i = t.p + (t.m ? t.m(t.s + t.c * r) : Math.round((t.s + t.c * r) * 1e4) / 1e4) + i, t = t._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, Ro = function(r, e) {
  for (var t = e._pt; t; )
    t.r(r, t.d), t = t._next;
}, ud = function(r, e, t, i) {
  for (var n = this._pt, a; n; )
    a = n._next, n.p === i && n.modifier(r, e, t), n = a;
}, dd = function(r) {
  for (var e = this._pt, t, i; e; )
    i = e._next, e.p === r && !e.op || e.op === r ? Ga(this, e, "_pt") : e.dep || (t = 1), e = i;
  return !t;
}, pd = function(r, e, t, i) {
  i.mSet(r, e, i.m.call(i.tween, t, i.mt), i);
}, Th = function(r) {
  for (var e = r._pt, t, i, n, a; e; ) {
    for (t = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : a) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : a = e, e = t;
  }
  r._pt = n;
}, Ft = /* @__PURE__ */ function() {
  function r(t, i, n, a, o, s, l, c, h) {
    this.t = i, this.s = a, this.c = o, this.p = n, this.r = s || yh, this.d = l || this, this.set = c || Ao, this.pr = h || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(t, i, n) {
    this.mSet = this.mSet || this.set, this.set = pd, this.m = t, this.mt = n, this.tween = i;
  }, r;
}();
Nt(So + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return yo[r] = 1;
});
Jt.TweenMax = Jt.TweenLite = dt;
Jt.TimelineLite = Jt.TimelineMax = Dt;
it = new Dt({
  sortChildren: !1,
  defaults: un,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Zt.stringFilter = dh;
var Sr = [], ba = {}, fd = [], $o = 0, md = 0, ns = function(r) {
  return (ba[r] || fd).map(function(e) {
    return e();
  });
}, Qs = function() {
  var r = Date.now(), e = [];
  r - $o > 2 && (ns("matchMediaInit"), Sr.forEach(function(t) {
    var i = t.queries, n = t.conditions, a, o, s, l;
    for (o in i)
      a = hi.matchMedia(i[o]).matches, a && (s = 1), a !== n[o] && (n[o] = a, l = 1);
    l && (t.revert(), s && e.push(t));
  }), ns("matchMediaRevert"), e.forEach(function(t) {
    return t.onMatch(t, function(i) {
      return t.add(null, i);
    });
  }), $o = r, ns("matchMedia"));
}, Eh = /* @__PURE__ */ function() {
  function r(t, i) {
    this.selector = i && Zs(i), this.data = [], this._r = [], this.isReverted = !1, this.id = md++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(t, i, n) {
    st(t) && (n = i, i = t, t = st);
    var a = this, o = function() {
      var s = Qe, l = a.selector, c;
      return s && s !== a && s.data.push(a), n && (a.selector = Zs(n)), Qe = a, c = i.apply(a, arguments), st(c) && a._r.push(c), Qe = s, a.selector = l, a.isReverted = !1, c;
    };
    return a.last = o, t === st ? o(a, function(s) {
      return a.add(null, s);
    }) : t ? a[t] = o : o;
  }, e.ignore = function(t) {
    var i = Qe;
    Qe = null, t(this), Qe = i;
  }, e.getTweens = function() {
    var t = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? t.push.apply(t, i.getTweens()) : i instanceof dt && !(i.parent && i.parent.data === "nested") && t.push(i);
    }), t;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(t, i) {
    var n = this;
    if (t ? function() {
      for (var o = n.getTweens(), s = n.data.length, l; s--; )
        l = n.data[s], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(c) {
          return o.splice(o.indexOf(c), 1);
        }));
      for (o.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, h) {
        return h.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(t);
      }), s = n.data.length; s--; )
        l = n.data[s], l instanceof Dt ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof dt) && l.revert && l.revert(t);
      n._r.forEach(function(c) {
        return c(t, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var a = Sr.length; a--; )
        Sr[a].id === this.id && Sr.splice(a, 1);
  }, e.revert = function(t) {
    this.kill(t || {});
  }, r;
}(), gd = /* @__PURE__ */ function() {
  function r(t) {
    this.contexts = [], this.scope = t, Qe && Qe.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(t, i, n) {
    vi(t) || (t = {
      matches: t
    });
    var a = new Eh(0, n || this.scope), o = a.conditions = {}, s, l, c;
    Qe && !a.selector && (a.selector = Qe.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = t;
    for (l in t)
      l === "all" ? c = 1 : (s = hi.matchMedia(t[l]), s && (Sr.indexOf(a) < 0 && Sr.push(a), (o[l] = s.matches) && (c = 1), s.addListener ? s.addListener(Qs) : s.addEventListener("change", Qs)));
    return c && i(a, function(h) {
      return a.add(null, h);
    }), this;
  }, e.revert = function(t) {
    this.kill(t || {});
  }, e.kill = function(t) {
    this.contexts.forEach(function(i) {
      return i.kill(t, !0);
    });
  }, r;
}(), Pa = {
  registerPlugin: function() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    e.forEach(function(i) {
      return ch(i);
    });
  },
  timeline: function(r) {
    return new Dt(r);
  },
  getTweensOf: function(r, e) {
    return it.getTweensOf(r, e);
  },
  getProperty: function(r, e, t, i) {
    Mt(r) && (r = ri(r)[0]);
    var n = xr(r || {}).get, a = t ? Zc : Kc;
    return t === "native" && (t = ""), r && (e ? a((jt[e] && jt[e].get || n)(r, e, t, i)) : function(o, s, l) {
      return a((jt[o] && jt[o].get || n)(r, o, s, l));
    });
  },
  quickSetter: function(r, e, t) {
    if (r = ri(r), r.length > 1) {
      var i = r.map(function(c) {
        return kt.quickSetter(c, e, t);
      }), n = i.length;
      return function(c) {
        for (var h = n; h--; )
          i[h](c);
      };
    }
    r = r[0] || {};
    var a = jt[e], o = xr(r), s = o.harness && (o.harness.aliases || {})[e] || e, l = a ? function(c) {
      var h = new a();
      rn._pt = 0, h.init(r, t ? c + t : c, rn, 0, [r]), h.render(1, h), rn._pt && Ro(1, rn);
    } : o.set(r, s);
    return a ? l : function(c) {
      return l(r, s, t ? c + t : c, o, 1);
    };
  },
  quickTo: function(r, e, t) {
    var i, n = kt.to(r, Ar((i = {}, i[e] = "+=0.1", i.paused = !0, i), t || {})), a = function(o, s, l) {
      return n.resetTo(e, o, s, l);
    };
    return a.tween = n, a;
  },
  isTweening: function(r) {
    return it.getTweensOf(r, !0).length > 0;
  },
  defaults: function(r) {
    return r && r.ease && (r.ease = yr(r.ease, un.ease)), Yo(un, r || {});
  },
  config: function(r) {
    return Yo(Zt, r || {});
  },
  registerEffect: function(r) {
    var e = r.name, t = r.effect, i = r.plugins, n = r.defaults, a = r.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !jt[o] && !Jt[o] && zn(e + " effect requires " + o + " plugin.");
    }), es[e] = function(o, s, l) {
      return t(ri(o), ni(s || {}, n), l);
    }, a && (Dt.prototype[e] = function(o, s, l) {
      return this.add(es[e](o, vi(s) ? s : (l = s) && {}, this), l);
    });
  },
  registerEase: function(r, e) {
    Xe[r] = yr(e);
  },
  parseEase: function(r, e) {
    return arguments.length ? yr(r, e) : Xe;
  },
  getById: function(r) {
    return it.getById(r);
  },
  exportRoot: function(r, e) {
    r === void 0 && (r = {});
    var t = new Dt(r), i, n;
    for (t.smoothChildTiming = Ot(r.smoothChildTiming), it.remove(t), t._dp = 0, t._time = t._tTime = it._time, i = it._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof dt && i.vars.onComplete === i._targets[0])) && pi(t, i, i._start - i._delay), i = n;
    return pi(it, t, 0), t;
  },
  context: function(r, e) {
    return r ? new Eh(r, e) : Qe;
  },
  matchMedia: function(r) {
    return new gd(r);
  },
  matchMediaRefresh: function() {
    return Sr.forEach(function(r) {
      var e = r.conditions, t, i;
      for (i in e)
        e[i] && (e[i] = !1, t = 1);
      t && r.revert();
    }) || Qs();
  },
  addEventListener: function(r, e) {
    var t = ba[r] || (ba[r] = []);
    ~t.indexOf(e) || t.push(e);
  },
  removeEventListener: function(r, e) {
    var t = ba[r], i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1);
  },
  utils: {
    wrap: qu,
    wrapYoyo: Ku,
    distribute: rh,
    random: ah,
    snap: nh,
    normalize: Yu,
    getUnit: At,
    clamp: Vu,
    splitColor: hh,
    toArray: ri,
    selector: Zs,
    mapRange: oh,
    pipe: Xu,
    unitize: ju,
    interpolate: Zu,
    shuffle: ih
  },
  install: Wc,
  effects: es,
  ticker: qt,
  updateRoot: Dt.updateRoot,
  plugins: jt,
  globalTimeline: it,
  core: {
    PropTween: Ft,
    globals: Xc,
    Tween: dt,
    Timeline: Dt,
    Animation: Vn,
    getCache: xr,
    _removeLinkedListItem: Ga,
    reverting: function() {
      return wt;
    },
    context: function(r) {
      return r && Qe && (Qe.data.push(r), r._ctx = Qe), Qe;
    },
    suppressOverwrites: function(r) {
      return go = r;
    }
  }
};
Nt("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return Pa[r] = dt[r];
});
qt.add(Dt.updateRoot);
rn = Pa.to({}, {
  duration: 0
});
var _d = function(r, e) {
  for (var t = r._pt; t && t.p !== e && t.op !== e && t.fp !== e; )
    t = t._next;
  return t;
}, vd = function(r, e) {
  var t = r._targets, i, n, a;
  for (i in e)
    for (n = t.length; n--; )
      a = r._ptLookup[n][i], a && (a = a.d) && (a._pt && (a = _d(a, i)), a && a.modifier && a.modifier(e[i], r, t[n], i));
}, as = function(r, e) {
  return {
    name: r,
    rawVars: 1,
    init: function(t, i, n) {
      n._onInit = function(a) {
        var o, s;
        if (Mt(i) && (o = {}, Nt(i, function(l) {
          return o[l] = 1;
        }), i = o), e) {
          o = {};
          for (s in i)
            o[s] = e(i[s]);
          i = o;
        }
        vd(a, i);
      };
    }
  };
}, kt = Pa.registerPlugin({
  name: "attr",
  init: function(r, e, t, i, n) {
    var a, o, s;
    this.tween = t;
    for (a in e)
      s = r.getAttribute(a) || "", o = this.add(r, "setAttribute", (s || 0) + "", e[a], i, n, 0, 0, a), o.op = a, o.b = s, this._props.push(a);
  },
  render: function(r, e) {
    for (var t = e._pt; t; )
      wt ? t.set(t.t, t.p, t.b, t) : t.r(r, t.d), t = t._next;
  }
}, {
  name: "endArray",
  init: function(r, e) {
    for (var t = e.length; t--; )
      this.add(r, t, r[t] || 0, e[t], 0, 0, 0, 0, 0, 1);
  }
}, as("roundProps", Js), as("modifiers"), as("snap", nh)) || Pa;
dt.version = Dt.version = kt.version = "3.12.5";
Vc = 1;
vo() && fn();
Xe.Power0;
Xe.Power1;
Xe.Power2;
Xe.Power3;
Xe.Power4;
Xe.Linear;
Xe.Quad;
Xe.Cubic;
Xe.Quart;
Xe.Quint;
Xe.Strong;
Xe.Elastic;
Xe.Back;
Xe.SteppedEase;
Xe.Bounce;
Xe.Sine;
Xe.Expo;
Xe.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Qo, Vi, on, Co, _r, el, Lo, xd = function() {
  return typeof window < "u";
}, Di = {}, pr = 180 / Math.PI, ln = Math.PI / 180, Ir = Math.atan2, tl = 1e8, Po = /([A-Z])/g, Md = /(left|right|width|margin|padding|x)/i, yd = /[\s,\(]\S/, mi = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, eo = function(r, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * r) * 1e4) / 1e4 + e.u, e);
}, Sd = function(r, e) {
  return e.set(e.t, e.p, r === 1 ? e.e : Math.round((e.s + e.c * r) * 1e4) / 1e4 + e.u, e);
}, Td = function(r, e) {
  return e.set(e.t, e.p, r ? Math.round((e.s + e.c * r) * 1e4) / 1e4 + e.u : e.b, e);
}, Ed = function(r, e) {
  var t = e.s + e.c * r;
  e.set(e.t, e.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + e.u, e);
}, bh = function(r, e) {
  return e.set(e.t, e.p, r ? e.e : e.b, e);
}, Ah = function(r, e) {
  return e.set(e.t, e.p, r !== 1 ? e.b : e.e, e);
}, bd = function(r, e, t) {
  return r.style[e] = t;
}, Ad = function(r, e, t) {
  return r.style.setProperty(e, t);
}, wd = function(r, e, t) {
  return r._gsap[e] = t;
}, Rd = function(r, e, t) {
  return r._gsap.scaleX = r._gsap.scaleY = t;
}, Cd = function(r, e, t, i, n) {
  var a = r._gsap;
  a.scaleX = a.scaleY = t, a.renderTransform(n, a);
}, Ld = function(r, e, t, i, n) {
  var a = r._gsap;
  a[e] = t, a.renderTransform(n, a);
}, rt = "transform", Bt = rt + "Origin", Pd = function r(e, t) {
  var i = this, n = this.target, a = n.style, o = n._gsap;
  if (e in Di && a) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = mi[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return i.tfm[s] = Ri(n, s);
      }) : this.tfm[e] = o.x ? o[e] : Ri(n, e), e === Bt && (this.tfm.zOrigin = o.zOrigin);
    else
      return mi.transform.split(",").forEach(function(s) {
        return r.call(i, s, t);
      });
    if (this.props.indexOf(rt) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Bt, t, "")), e = rt;
  }
  (a || t) && this.props.push(e, t, a[e]);
}, wh = function(r) {
  r.translate && (r.removeProperty("translate"), r.removeProperty("scale"), r.removeProperty("rotate"));
}, Ud = function() {
  var r = this.props, e = this.target, t = e.style, i = e._gsap, n, a;
  for (n = 0; n < r.length; n += 3)
    r[n + 1] ? e[r[n]] = r[n + 2] : r[n + 2] ? t[r[n]] = r[n + 2] : t.removeProperty(r[n].substr(0, 2) === "--" ? r[n] : r[n].replace(Po, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Lo(), (!n || !n.isStart) && !t[rt] && (wh(t), i.zOrigin && t[Bt] && (t[Bt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Rh = function(r, e) {
  var t = {
    target: r,
    props: [],
    revert: Ud,
    save: Pd
  };
  return r._gsap || kt.core.getCache(r), e && e.split(",").forEach(function(i) {
    return t.save(i);
  }), t;
}, Ch, to = function(r, e) {
  var t = Vi.createElementNS ? Vi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), r) : Vi.createElement(r);
  return t && t.style ? t : Vi.createElement(r);
}, gi = function r(e, t, i) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(Po, "-$1").toLowerCase()) || n.getPropertyValue(t) || !i && r(e, mn(t) || t, 1) || "";
}, il = "O,Moz,ms,Ms,Webkit".split(","), mn = function(r, e, t) {
  var i = e || _r, n = i.style, a = 5;
  if (r in n && !t)
    return r;
  for (r = r.charAt(0).toUpperCase() + r.substr(1); a-- && !(il[a] + r in n); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? il[a] : "") + r;
}, io = function() {
  xd() && window.document && (Qo = window, Vi = Qo.document, on = Vi.documentElement, _r = to("div") || {
    style: {}
  }, to("div"), rt = mn(rt), Bt = rt + "Origin", _r.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ch = !!mn("perspective"), Lo = kt.core.reverting, Co = 1);
}, ss = function r(e) {
  var t = to("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText, o;
  if (on.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), on.removeChild(t), this.style.cssText = a, o;
}, rl = function(r, e) {
  for (var t = e.length; t--; )
    if (r.hasAttribute(e[t]))
      return r.getAttribute(e[t]);
}, Lh = function(r) {
  var e;
  try {
    e = r.getBBox();
  } catch {
    e = ss.call(r, !0);
  }
  return e && (e.width || e.height) || r.getBBox === ss || (e = ss.call(r, !0)), e && !e.width && !e.x && !e.y ? {
    x: +rl(r, ["x", "cx", "x1"]) || 0,
    y: +rl(r, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Ph = function(r) {
  return !!(r.getCTM && (!r.parentNode || r.ownerSVGElement) && Lh(r));
}, wr = function(r, e) {
  if (e) {
    var t = r.style, i;
    e in Di && e !== Bt && (e = rt), t.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), t.removeProperty(i === "--" ? e : e.replace(Po, "-$1").toLowerCase())) : t.removeAttribute(e);
  }
}, Wi = function(r, e, t, i, n, a) {
  var o = new Ft(r._pt, e, t, 0, 1, a ? Ah : bh);
  return r._pt = o, o.b = i, o.e = n, r._props.push(t), o;
}, nl = {
  deg: 1,
  rad: 1,
  turn: 1
}, Dd = {
  grid: 1,
  flex: 1
}, $i = function r(e, t, i, n) {
  var a = parseFloat(i) || 0, o = (i + "").trim().substr((a + "").length) || "px", s = _r.style, l = Md.test(t), c = e.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, d = n === "px", g = n === "%", m, _, f, p;
  if (n === o || !a || nl[n] || nl[o])
    return a;
  if (o !== "px" && !d && (a = r(e, t, i, "px")), p = e.getCTM && Ph(e), (g || o === "%") && (Di[t] || ~t.indexOf("adius")))
    return m = p ? e.getBBox()[l ? "width" : "height"] : e[h], ct(g ? a / m * u : a / 100 * m);
  if (s[l ? "width" : "height"] = u + (d ? o : n), _ = ~t.indexOf("adius") || n === "em" && e.appendChild && !c ? e : e.parentNode, p && (_ = (e.ownerSVGElement || {}).parentNode), (!_ || _ === Vi || !_.appendChild) && (_ = Vi.body), f = _._gsap, f && g && f.width && l && f.time === qt.time && !f.uncache)
    return ct(a / f.width * u);
  if (g && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = u + n, m = e[h], y ? e.style[t] = y : wr(e, t);
  } else
    (g || o === "%") && !Dd[gi(_, "display")] && (s.position = gi(e, "position")), _ === e && (s.position = "static"), _.appendChild(_r), m = _r[h], _.removeChild(_r), s.position = "absolute";
  return l && g && (f = xr(_), f.time = qt.time, f.width = _[h]), ct(d ? m * a / u : m && a ? u / m * a : 0);
}, Ri = function(r, e, t, i) {
  var n;
  return Co || io(), e in mi && e !== "transform" && (e = mi[e], ~e.indexOf(",") && (e = e.split(",")[0])), Di[e] && e !== "transform" ? (n = Xn(r, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Da(gi(r, Bt)) + " " + n.zOrigin + "px") : (n = r.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Ua[e] && Ua[e](r, e, t) || gi(r, e) || Yc(r, e) || (e === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? $i(r, e, n, t) + t : n;
}, Id = function(r, e, t, i) {
  if (!t || t === "none") {
    var n = mn(e, r, 1), a = n && gi(r, n, 1);
    a && a !== t ? (e = n, t = a) : e === "borderColor" && (t = gi(r, "borderTopColor"));
  }
  var o = new Ft(this._pt, r.style, e, 0, 1, Sh), s = 0, l = 0, c, h, u, d, g, m, _, f, p, y, v, T;
  if (o.b = t, o.e = i, t += "", i += "", i === "auto" && (m = r.style[e], r.style[e] = i, i = gi(r, e) || i, m ? r.style[e] = m : wr(r, e)), c = [t, i], dh(c), t = c[0], i = c[1], u = t.match(tn) || [], T = i.match(tn) || [], T.length) {
    for (; h = tn.exec(i); )
      _ = h[0], p = i.substring(s, h.index), g ? g = (g + 1) % 5 : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (g = 1), _ !== (m = u[l++] || "") && (d = parseFloat(m) || 0, v = m.substr((d + "").length), _.charAt(1) === "=" && (_ = sn(d, _) + v), f = parseFloat(_), y = _.substr((f + "").length), s = tn.lastIndex - y.length, y || (y = y || Zt.units[e] || v, s === i.length && (i += y, o.e += y)), v !== y && (d = $i(r, e, m, y) || 0), o._pt = {
        _next: o._pt,
        p: p || l === 1 ? p : ",",
        s: d,
        c: f - d,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = s < i.length ? i.substring(s, i.length) : "";
  } else
    o.r = e === "display" && i === "none" ? Ah : bh;
  return Gc.test(i) && (o.e = 0), this._pt = o, o;
}, al = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Od = function(r) {
  var e = r.split(" "), t = e[0], i = e[1] || "50%";
  return (t === "top" || t === "bottom" || i === "left" || i === "right") && (r = t, t = i, i = r), e[0] = al[t] || t, e[1] = al[i] || i, e.join(" ");
}, Nd = function(r, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var t = e.t, i = t.style, n = e.u, a = t._gsap, o, s, l;
    if (n === "all" || n === !0)
      i.cssText = "", s = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], Di[o] && (s = 1, o = o === "transformOrigin" ? Bt : rt), wr(t, o);
    s && (wr(t, rt), a && (a.svg && t.removeAttribute("transform"), Xn(t, 1), a.uncache = 1, wh(i)));
  }
}, Ua = {
  clearProps: function(r, e, t, i, n) {
    if (n.data !== "isFromStart") {
      var a = r._pt = new Ft(r._pt, e, t, 0, 0, Nd);
      return a.u = i, a.pr = -10, a.tween = n, r._props.push(t), 1;
    }
  }
}, Wn = [1, 0, 0, 1, 0, 0], Uh = {}, Dh = function(r) {
  return r === "matrix(1, 0, 0, 1, 0, 0)" || r === "none" || !r;
}, sl = function(r) {
  var e = gi(r, rt);
  return Dh(e) ? Wn : e.substr(7).match(Hc).map(ct);
}, Uo = function(r, e) {
  var t = r._gsap || xr(r), i = r.style, n = sl(r), a, o, s, l;
  return t.svg && r.getAttribute("transform") ? (s = r.transform.baseVal.consolidate().matrix, n = [s.a, s.b, s.c, s.d, s.e, s.f], n.join(",") === "1,0,0,1,0,0" ? Wn : n) : (n === Wn && !r.offsetParent && r !== on && !t.svg && (s = i.display, i.display = "block", a = r.parentNode, (!a || !r.offsetParent) && (l = 1, o = r.nextElementSibling, on.appendChild(r)), n = sl(r), s ? i.display = s : wr(r, "display"), l && (o ? a.insertBefore(r, o) : a ? a.appendChild(r) : on.removeChild(r))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, ro = function(r, e, t, i, n, a) {
  var o = r._gsap, s = n || Uo(r, !0), l = o.xOrigin || 0, c = o.yOrigin || 0, h = o.xOffset || 0, u = o.yOffset || 0, d = s[0], g = s[1], m = s[2], _ = s[3], f = s[4], p = s[5], y = e.split(" "), v = parseFloat(y[0]) || 0, T = parseFloat(y[1]) || 0, C, b, E, L;
  t ? s !== Wn && (b = d * _ - g * m) && (E = v * (_ / b) + T * (-m / b) + (m * p - _ * f) / b, L = v * (-g / b) + T * (d / b) - (d * p - g * f) / b, v = E, T = L) : (C = Lh(r), v = C.x + (~y[0].indexOf("%") ? v / 100 * C.width : v), T = C.y + (~(y[1] || y[0]).indexOf("%") ? T / 100 * C.height : T)), i || i !== !1 && o.smooth ? (f = v - l, p = T - c, o.xOffset = h + (f * d + p * m) - f, o.yOffset = u + (f * g + p * _) - p) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = T, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!t, r.style[Bt] = "0px 0px", a && (Wi(a, o, "xOrigin", l, v), Wi(a, o, "yOrigin", c, T), Wi(a, o, "xOffset", h, o.xOffset), Wi(a, o, "yOffset", u, o.yOffset)), r.setAttribute("data-svg-origin", v + " " + T);
}, Xn = function(r, e) {
  var t = r._gsap || new gh(r);
  if ("x" in t && !e && !t.uncache)
    return t;
  var i = r.style, n = t.scaleX < 0, a = "px", o = "deg", s = getComputedStyle(r), l = gi(r, Bt) || "0", c, h, u, d, g, m, _, f, p, y, v, T, C, b, E, L, X, M, w, j, K, P, V, B, W, Y, q, ee, Q, de, fe, H;
  return c = h = u = m = _ = f = p = y = v = 0, d = g = 1, t.svg = !!(r.getCTM && Ph(r)), s.translate && ((s.translate !== "none" || s.scale !== "none" || s.rotate !== "none") && (i[rt] = (s.translate !== "none" ? "translate3d(" + (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (s.rotate !== "none" ? "rotate(" + s.rotate + ") " : "") + (s.scale !== "none" ? "scale(" + s.scale.split(" ").join(",") + ") " : "") + (s[rt] !== "none" ? s[rt] : "")), i.scale = i.rotate = i.translate = "none"), b = Uo(r, t.svg), t.svg && (t.uncache ? (W = r.getBBox(), l = t.xOrigin - W.x + "px " + (t.yOrigin - W.y) + "px", B = "") : B = !e && r.getAttribute("data-svg-origin"), ro(r, B || l, !!B || t.originIsAbsolute, t.smooth !== !1, b)), T = t.xOrigin || 0, C = t.yOrigin || 0, b !== Wn && (M = b[0], w = b[1], j = b[2], K = b[3], c = P = b[4], h = V = b[5], b.length === 6 ? (d = Math.sqrt(M * M + w * w), g = Math.sqrt(K * K + j * j), m = M || w ? Ir(w, M) * pr : 0, p = j || K ? Ir(j, K) * pr + m : 0, p && (g *= Math.abs(Math.cos(p * ln))), t.svg && (c -= T - (T * M + C * j), h -= C - (T * w + C * K))) : (H = b[6], de = b[7], q = b[8], ee = b[9], Q = b[10], fe = b[11], c = b[12], h = b[13], u = b[14], E = Ir(H, Q), _ = E * pr, E && (L = Math.cos(-E), X = Math.sin(-E), B = P * L + q * X, W = V * L + ee * X, Y = H * L + Q * X, q = P * -X + q * L, ee = V * -X + ee * L, Q = H * -X + Q * L, fe = de * -X + fe * L, P = B, V = W, H = Y), E = Ir(-j, Q), f = E * pr, E && (L = Math.cos(-E), X = Math.sin(-E), B = M * L - q * X, W = w * L - ee * X, Y = j * L - Q * X, fe = K * X + fe * L, M = B, w = W, j = Y), E = Ir(w, M), m = E * pr, E && (L = Math.cos(E), X = Math.sin(E), B = M * L + w * X, W = P * L + V * X, w = w * L - M * X, V = V * L - P * X, M = B, P = W), _ && Math.abs(_) + Math.abs(m) > 359.9 && (_ = m = 0, f = 180 - f), d = ct(Math.sqrt(M * M + w * w + j * j)), g = ct(Math.sqrt(V * V + H * H)), E = Ir(P, V), p = Math.abs(E) > 2e-4 ? E * pr : 0, v = fe ? 1 / (fe < 0 ? -fe : fe) : 0), t.svg && (B = r.getAttribute("transform"), t.forceCSS = r.setAttribute("transform", "") || !Dh(gi(r, rt)), B && r.setAttribute("transform", B))), Math.abs(p) > 90 && Math.abs(p) < 270 && (n ? (d *= -1, p += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (g *= -1, p += p <= 0 ? 180 : -180)), e = e || t.uncache, t.x = c - ((t.xPercent = c && (!e && t.xPercent || (Math.round(r.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? r.offsetWidth * t.xPercent / 100 : 0) + a, t.y = h - ((t.yPercent = h && (!e && t.yPercent || (Math.round(r.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? r.offsetHeight * t.yPercent / 100 : 0) + a, t.z = u + a, t.scaleX = ct(d), t.scaleY = ct(g), t.rotation = ct(m) + o, t.rotationX = ct(_) + o, t.rotationY = ct(f) + o, t.skewX = p + o, t.skewY = y + o, t.transformPerspective = v + a, (t.zOrigin = parseFloat(l.split(" ")[2]) || !e && t.zOrigin || 0) && (i[Bt] = Da(l)), t.xOffset = t.yOffset = 0, t.force3D = Zt.force3D, t.renderTransform = t.svg ? Bd : Ch ? Ih : Fd, t.uncache = 0, t;
}, Da = function(r) {
  return (r = r.split(" "))[0] + " " + r[1];
}, os = function(r, e, t) {
  var i = At(e);
  return ct(parseFloat(e) + parseFloat($i(r, "x", t + "px", i))) + i;
}, Fd = function(r, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ih(r, e);
}, ar = "0deg", En = "0px", sr = ") ", Ih = function(r, e) {
  var t = e || this, i = t.xPercent, n = t.yPercent, a = t.x, o = t.y, s = t.z, l = t.rotation, c = t.rotationY, h = t.rotationX, u = t.skewX, d = t.skewY, g = t.scaleX, m = t.scaleY, _ = t.transformPerspective, f = t.force3D, p = t.target, y = t.zOrigin, v = "", T = f === "auto" && r && r !== 1 || f === !0;
  if (y && (h !== ar || c !== ar)) {
    var C = parseFloat(c) * ln, b = Math.sin(C), E = Math.cos(C), L;
    C = parseFloat(h) * ln, L = Math.cos(C), a = os(p, a, b * L * -y), o = os(p, o, -Math.sin(C) * -y), s = os(p, s, E * L * -y + y);
  }
  _ !== En && (v += "perspective(" + _ + sr), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (T || a !== En || o !== En || s !== En) && (v += s !== En || T ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + sr), l !== ar && (v += "rotate(" + l + sr), c !== ar && (v += "rotateY(" + c + sr), h !== ar && (v += "rotateX(" + h + sr), (u !== ar || d !== ar) && (v += "skew(" + u + ", " + d + sr), (g !== 1 || m !== 1) && (v += "scale(" + g + ", " + m + sr), p.style[rt] = v || "translate(0, 0)";
}, Bd = function(r, e) {
  var t = e || this, i = t.xPercent, n = t.yPercent, a = t.x, o = t.y, s = t.rotation, l = t.skewX, c = t.skewY, h = t.scaleX, u = t.scaleY, d = t.target, g = t.xOrigin, m = t.yOrigin, _ = t.xOffset, f = t.yOffset, p = t.forceCSS, y = parseFloat(a), v = parseFloat(o), T, C, b, E, L;
  s = parseFloat(s), l = parseFloat(l), c = parseFloat(c), c && (c = parseFloat(c), l += c, s += c), s || l ? (s *= ln, l *= ln, T = Math.cos(s) * h, C = Math.sin(s) * h, b = Math.sin(s - l) * -u, E = Math.cos(s - l) * u, l && (c *= ln, L = Math.tan(l - c), L = Math.sqrt(1 + L * L), b *= L, E *= L, c && (L = Math.tan(c), L = Math.sqrt(1 + L * L), T *= L, C *= L)), T = ct(T), C = ct(C), b = ct(b), E = ct(E)) : (T = h, E = u, C = b = 0), (y && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (y = $i(d, "x", a, "px"), v = $i(d, "y", o, "px")), (g || m || _ || f) && (y = ct(y + g - (g * T + m * b) + _), v = ct(v + m - (g * C + m * E) + f)), (i || n) && (L = d.getBBox(), y = ct(y + i / 100 * L.width), v = ct(v + n / 100 * L.height)), L = "matrix(" + T + "," + C + "," + b + "," + E + "," + y + "," + v + ")", d.setAttribute("transform", L), p && (d.style[rt] = L);
}, zd = function(r, e, t, i, n) {
  var a = 360, o = Mt(n), s = parseFloat(n) * (o && ~n.indexOf("rad") ? pr : 1), l = s - i, c = i + l + "deg", h, u;
  return o && (h = n.split("_")[1], h === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), h === "cw" && l < 0 ? l = (l + a * tl) % a - ~~(l / a) * a : h === "ccw" && l > 0 && (l = (l - a * tl) % a - ~~(l / a) * a)), r._pt = u = new Ft(r._pt, e, t, i, l, Sd), u.e = c, u.u = "deg", r._props.push(t), u;
}, ol = function(r, e) {
  for (var t in e)
    r[t] = e[t];
  return r;
}, Hd = function(r, e, t) {
  var i = ol({}, t._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = t.style, o, s, l, c, h, u, d, g;
  i.svg ? (l = t.getAttribute("transform"), t.setAttribute("transform", ""), a[rt] = e, o = Xn(t, 1), wr(t, rt), t.setAttribute("transform", l)) : (l = getComputedStyle(t)[rt], a[rt] = e, o = Xn(t, 1), a[rt] = l);
  for (s in Di)
    l = i[s], c = o[s], l !== c && n.indexOf(s) < 0 && (d = At(l), g = At(c), h = d !== g ? $i(t, s, l, g) : parseFloat(l), u = parseFloat(c), r._pt = new Ft(r._pt, o, s, h, u - h, eo), r._pt.u = g || 0, r._props.push(s));
  ol(o, i);
};
Nt("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", i = "Right", n = "Bottom", a = "Left", o = (e < 3 ? [t, i, n, a] : [t + a, t + i, n + i, n + a]).map(function(s) {
    return e < 2 ? r + s : "border" + s + r;
  });
  Ua[e > 1 ? "border" + r : r] = function(s, l, c, h, u) {
    var d, g;
    if (arguments.length < 4)
      return d = o.map(function(m) {
        return Ri(s, m, c);
      }), g = d.join(" "), g.split(d[0]).length === 5 ? d[0] : g;
    d = (h + "").split(" "), g = {}, o.forEach(function(m, _) {
      return g[m] = d[_] = d[_] || d[(_ - 1) / 2 | 0];
    }), s.init(l, g, u);
  };
});
var Oh = {
  name: "css",
  register: io,
  targetTest: function(r) {
    return r.style && r.nodeType;
  },
  init: function(r, e, t, i, n) {
    var a = this._props, o = r.style, s = t.vars.startAt, l, c, h, u, d, g, m, _, f, p, y, v, T, C, b, E;
    Co || io(), this.styles = this.styles || Rh(r), E = this.styles.props, this.tween = t;
    for (m in e)
      if (m !== "autoRound" && (c = e[m], !(jt[m] && _h(m, e, t, i, r, n)))) {
        if (d = typeof c, g = Ua[m], d === "function" && (c = c.call(t, i, r, n), d = typeof c), d === "string" && ~c.indexOf("random(") && (c = Gn(c)), g)
          g(this, r, m, c, t) && (b = 1);
        else if (m.substr(0, 2) === "--")
          l = (getComputedStyle(r).getPropertyValue(m) + "").trim(), c += "", Yi.lastIndex = 0, Yi.test(l) || (_ = At(l), f = At(c)), f ? _ !== f && (l = $i(r, m, l, f) + f) : _ && (c += _), this.add(o, "setProperty", l, c, i, n, 0, 0, m), a.push(m), E.push(m, 0, o[m]);
        else if (d !== "undefined") {
          if (s && m in s ? (l = typeof s[m] == "function" ? s[m].call(t, i, r, n) : s[m], Mt(l) && ~l.indexOf("random(") && (l = Gn(l)), At(l + "") || l === "auto" || (l += Zt.units[m] || At(Ri(r, m)) || ""), (l + "").charAt(1) === "=" && (l = Ri(r, m))) : l = Ri(r, m), u = parseFloat(l), p = d === "string" && c.charAt(1) === "=" && c.substr(0, 2), p && (c = c.substr(2)), h = parseFloat(c), m in mi && (m === "autoAlpha" && (u === 1 && Ri(r, "visibility") === "hidden" && h && (u = 0), E.push("visibility", 0, o.visibility), Wi(this, o, "visibility", u ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), m !== "scale" && m !== "transform" && (m = mi[m], ~m.indexOf(",") && (m = m.split(",")[0]))), y = m in Di, y) {
            if (this.styles.save(m), v || (T = r._gsap, T.renderTransform && !e.parseTransform || Xn(r, e.parseTransform), C = e.smoothOrigin !== !1 && T.smooth, v = this._pt = new Ft(this._pt, o, rt, 0, 1, T.renderTransform, T, 0, -1), v.dep = 1), m === "scale")
              this._pt = new Ft(this._pt, T, "scaleY", T.scaleY, (p ? sn(T.scaleY, p + h) : h) - T.scaleY || 0, eo), this._pt.u = 0, a.push("scaleY", m), m += "X";
            else if (m === "transformOrigin") {
              E.push(Bt, 0, o[Bt]), c = Od(c), T.svg ? ro(r, c, 0, C, 0, this) : (f = parseFloat(c.split(" ")[2]) || 0, f !== T.zOrigin && Wi(this, T, "zOrigin", T.zOrigin, f), Wi(this, o, m, Da(l), Da(c)));
              continue;
            } else if (m === "svgOrigin") {
              ro(r, c, 1, C, 0, this);
              continue;
            } else if (m in Uh) {
              zd(this, T, m, u, p ? sn(u, p + c) : c);
              continue;
            } else if (m === "smoothOrigin") {
              Wi(this, T, "smooth", T.smooth, c);
              continue;
            } else if (m === "force3D") {
              T[m] = c;
              continue;
            } else if (m === "transform") {
              Hd(this, c, r);
              continue;
            }
          } else
            m in o || (m = mn(m) || m);
          if (y || (h || h === 0) && (u || u === 0) && !yd.test(c) && m in o)
            _ = (l + "").substr((u + "").length), h || (h = 0), f = At(c) || (m in Zt.units ? Zt.units[m] : _), _ !== f && (u = $i(r, m, l, f)), this._pt = new Ft(this._pt, y ? T : o, m, u, (p ? sn(u, p + h) : h) - u, !y && (f === "px" || m === "zIndex") && e.autoRound !== !1 ? Ed : eo), this._pt.u = f || 0, _ !== f && f !== "%" && (this._pt.b = l, this._pt.r = Td);
          else if (m in o)
            Id.call(this, r, m, l, p ? p + c : c);
          else if (m in r)
            this.add(r, m, l || r[m], p ? p + c : c, i, n);
          else if (m !== "parseTransform") {
            Mo(m, c);
            continue;
          }
          y || (m in o ? E.push(m, 0, o[m]) : E.push(m, 1, l || r[m])), a.push(m);
        }
      }
    b && Th(this);
  },
  render: function(r, e) {
    if (e.tween._time || !Lo())
      for (var t = e._pt; t; )
        t.r(r, t.d), t = t._next;
    else
      e.styles.revert();
  },
  get: Ri,
  aliases: mi,
  getSetter: function(r, e, t) {
    var i = mi[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Di && e !== Bt && (r._gsap.x || Ri(r, "x")) ? t && el === t ? e === "scale" ? Rd : wd : (el = t || {}) && (e === "scale" ? Cd : Ld) : r.style && !_o(r.style[e]) ? bd : ~e.indexOf("-") ? Ad : wo(r, e);
  },
  core: {
    _removeProperty: wr,
    _getMatrix: Uo
  }
};
kt.utils.checkPrefix = mn;
kt.core.getStyleSaver = Rh;
(function(r, e, t, i) {
  var n = Nt(r + "," + e + "," + t, function(a) {
    Di[a] = 1;
  });
  Nt(e, function(a) {
    Zt.units[a] = "deg", Uh[a] = 1;
  }), mi[n[13]] = r + "," + e, Nt(i, function(a) {
    var o = a.split(":");
    mi[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  Zt.units[r] = "px";
});
kt.registerPlugin(Oh);
var Nh = kt.registerPlugin(Oh) || kt;
Nh.core.Tween;
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Do = "162", Or = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Nr = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Gd = 0, ll = 1, kd = 2, Fh = 1, Vd = 2, Ai = 3, Qi = 0, zt = 1, Ci = 2, qi = 0, cn = 1, cl = 2, hl = 3, ul = 4, Wd = 5, mr = 100, Xd = 101, jd = 102, dl = 103, pl = 104, Yd = 200, qd = 201, Kd = 202, Zd = 203, no = 204, ao = 205, Jd = 206, $d = 207, Qd = 208, ep = 209, tp = 210, ip = 211, rp = 212, np = 213, ap = 214, sp = 0, op = 1, lp = 2, Ia = 3, cp = 4, hp = 5, up = 6, dp = 7, Bh = 0, pp = 1, fp = 2, Ki = 0, mp = 1, gp = 2, _p = 3, vp = 4, xp = 5, Mp = 6, yp = 7, zh = 300, gn = 301, _n = 302, so = 303, oo = 304, Wa = 306, lo = 1e3, li = 1001, co = 1002, Pt = 1003, fl = 1004, bn = 1005, It = 1006, ls = 1007, vr = 1008, Zi = 1009, Sp = 1010, Tp = 1011, Io = 1012, Hh = 1013, Xi = 1014, Li = 1015, jn = 1016, Gh = 1017, kh = 1018, Tr = 1020, Ep = 1021, ci = 1023, bp = 1024, Ap = 1025, Er = 1026, vn = 1027, wp = 1028, Vh = 1029, Rp = 1030, Wh = 1031, Xh = 1033, cs = 33776, hs = 33777, us = 33778, ds = 33779, ml = 35840, gl = 35841, _l = 35842, vl = 35843, jh = 36196, xl = 37492, Ml = 37496, yl = 37808, Sl = 37809, Tl = 37810, El = 37811, bl = 37812, Al = 37813, wl = 37814, Rl = 37815, Cl = 37816, Ll = 37817, Pl = 37818, Ul = 37819, Dl = 37820, Il = 37821, ps = 36492, Ol = 36494, Nl = 36495, Cp = 36283, Fl = 36284, Bl = 36285, zl = 36286, Lp = 3200, Pp = 3201, Yh = 0, Up = 1, Gi = "", ui = "srgb", ir = "srgb-linear", Oo = "display-p3", Xa = "display-p3-linear", Oa = "linear", $e = "srgb", Na = "rec709", Fa = "p3", Fr = 7680, Hl = 519, Dp = 512, Ip = 513, Op = 514, qh = 515, Np = 516, Fp = 517, Bp = 518, zp = 519, Gl = 35044, kl = "300 es", ho = 1035, Pi = 2e3, Ba = 2001;
class Ur {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const n = i.indexOf(t);
      n !== -1 && i.splice(n, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const t = this._listeners[e.type];
    if (t !== void 0) {
      e.target = this;
      const i = t.slice(0);
      for (let n = 0, a = i.length; n < a; n++)
        i[n].call(this, e);
      e.target = null;
    }
  }
}
const Et = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Vl = 1234567;
const Fn = Math.PI / 180, Yn = 180 / Math.PI;
function Mn() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Et[r & 255] + Et[r >> 8 & 255] + Et[r >> 16 & 255] + Et[r >> 24 & 255] + "-" + Et[e & 255] + Et[e >> 8 & 255] + "-" + Et[e >> 16 & 15 | 64] + Et[e >> 24 & 255] + "-" + Et[t & 63 | 128] + Et[t >> 8 & 255] + "-" + Et[t >> 16 & 255] + Et[t >> 24 & 255] + Et[i & 255] + Et[i >> 8 & 255] + Et[i >> 16 & 255] + Et[i >> 24 & 255]).toLowerCase();
}
function yt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function No(r, e) {
  return (r % e + e) % e;
}
function Hp(r, e, t, i, n) {
  return i + (r - e) * (n - i) / (t - e);
}
function Gp(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Bn(r, e, t) {
  return (1 - t) * r + t * e;
}
function kp(r, e, t, i) {
  return Bn(r, e, 1 - Math.exp(-t * i));
}
function Vp(r, e = 1) {
  return e - Math.abs(No(r, e * 2) - e);
}
function Wp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function Xp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function jp(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Yp(r, e) {
  return r + Math.random() * (e - r);
}
function qp(r) {
  return r * (0.5 - Math.random());
}
function Kp(r) {
  r !== void 0 && (Vl = r);
  let e = Vl += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Zp(r) {
  return r * Fn;
}
function Jp(r) {
  return r * Yn;
}
function uo(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function $p(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function za(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Qp(r, e, t, i, n) {
  const a = Math.cos, o = Math.sin, s = a(t / 2), l = o(t / 2), c = a((e + i) / 2), h = o((e + i) / 2), u = a((e - i) / 2), d = o((e - i) / 2), g = a((i - e) / 2), m = o((i - e) / 2);
  switch (n) {
    case "XYX":
      r.set(s * h, l * u, l * d, s * c);
      break;
    case "YZY":
      r.set(l * d, s * h, l * u, s * c);
      break;
    case "ZXZ":
      r.set(l * u, l * d, s * h, s * c);
      break;
    case "XZX":
      r.set(s * h, l * m, l * g, s * c);
      break;
    case "YXY":
      r.set(l * g, s * h, l * m, s * c);
      break;
    case "ZYZ":
      r.set(l * m, l * g, s * h, s * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + n);
  }
}
function en(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ct(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const ef = {
  DEG2RAD: Fn,
  RAD2DEG: Yn,
  generateUUID: Mn,
  clamp: yt,
  euclideanModulo: No,
  mapLinear: Hp,
  inverseLerp: Gp,
  lerp: Bn,
  damp: kp,
  pingpong: Vp,
  smoothstep: Wp,
  smootherstep: Xp,
  randInt: jp,
  randFloat: Yp,
  randFloatSpread: qp,
  seededRandom: Kp,
  degToRad: Zp,
  radToDeg: Jp,
  isPowerOfTwo: uo,
  ceilPowerOfTwo: $p,
  floorPowerOfTwo: za,
  setQuaternionFromProperEuler: Qp,
  normalize: Ct,
  denormalize: en
};
class be {
  constructor(e = 0, t = 0) {
    be.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    const t = this.x, i = this.y, n = e.elements;
    return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this;
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
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
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
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
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
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(yt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
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
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
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
    const i = Math.cos(t), n = Math.sin(t), a = this.x - e.x, o = this.y - e.y;
    return this.x = a * i - o * n + e.x, this.y = a * n + o * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ne {
  constructor(e, t, i, n, a, o, s, l, c) {
    Ne.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, n, a, o, s, l, c);
  }
  set(e, t, i, n, a, o, s, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = n, h[2] = s, h[3] = t, h[4] = a, h[5] = l, h[6] = i, h[7] = o, h[8] = c, this;
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
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
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
    const i = e.elements, n = t.elements, a = this.elements, o = i[0], s = i[3], l = i[6], c = i[1], h = i[4], u = i[7], d = i[2], g = i[5], m = i[8], _ = n[0], f = n[3], p = n[6], y = n[1], v = n[4], T = n[7], C = n[2], b = n[5], E = n[8];
    return a[0] = o * _ + s * y + l * C, a[3] = o * f + s * v + l * b, a[6] = o * p + s * T + l * E, a[1] = c * _ + h * y + u * C, a[4] = c * f + h * v + u * b, a[7] = c * p + h * T + u * E, a[2] = d * _ + g * y + m * C, a[5] = d * f + g * v + m * b, a[8] = d * p + g * T + m * E, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], a = e[3], o = e[4], s = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * s * c - i * a * h + i * s * l + n * a * c - n * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], a = e[3], o = e[4], s = e[5], l = e[6], c = e[7], h = e[8], u = h * o - s * c, d = s * l - h * a, g = c * a - o * l, m = t * u + i * d + n * g;
    if (m === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return e[0] = u * _, e[1] = (n * c - h * i) * _, e[2] = (s * i - n * o) * _, e[3] = d * _, e[4] = (h * t - n * l) * _, e[5] = (n * a - s * t) * _, e[6] = g * _, e[7] = (i * l - c * t) * _, e[8] = (o * t - i * a) * _, this;
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
  setUvTransform(e, t, i, n, a, o, s) {
    const l = Math.cos(a), c = Math.sin(a);
    return this.set(
      i * l,
      i * c,
      -i * (l * o + c * s) + o + e,
      -n * c,
      n * l,
      -n * (-c * o + l * s) + s + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply(fs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(fs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(fs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
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
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      i,
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
    const t = this.elements, i = e.elements;
    for (let n = 0; n < 9; n++)
      if (t[n] !== i[n])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const fs = /* @__PURE__ */ new Ne();
function Kh(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
function Ha(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function tf() {
  const r = Ha("canvas");
  return r.style.display = "block", r;
}
const Wl = {};
function rf(r) {
  r in Wl || (Wl[r] = !0, console.warn(r));
}
const Xl = /* @__PURE__ */ new Ne().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), jl = /* @__PURE__ */ new Ne().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), ta = {
  [ir]: {
    transfer: Oa,
    primaries: Na,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [ui]: {
    transfer: $e,
    primaries: Na,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Xa]: {
    transfer: Oa,
    primaries: Fa,
    toReference: (r) => r.applyMatrix3(jl),
    fromReference: (r) => r.applyMatrix3(Xl)
  },
  [Oo]: {
    transfer: $e,
    primaries: Fa,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(jl),
    fromReference: (r) => r.applyMatrix3(Xl).convertLinearToSRGB()
  }
}, nf = /* @__PURE__ */ new Set([ir, Xa]), qe = {
  enabled: !0,
  _workingColorSpace: ir,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!nf.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const i = ta[e].toReference, n = ta[t].fromReference;
    return n(i(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return ta[r].primaries;
  },
  getTransfer: function(r) {
    return r === Gi ? Oa : ta[r].transfer;
  }
};
function hn(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ms(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Br;
class Zh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Br === void 0 && (Br = Ha("canvas")), Br.width = e.width, Br.height = e.height;
      const i = Br.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), t = Br;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ha("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const n = i.getImageData(0, 0, e.width, e.height), a = n.data;
      for (let o = 0; o < a.length; o++)
        a[o] = hn(a[o] / 255) * 255;
      return i.putImageData(n, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(hn(t[i] / 255) * 255) : t[i] = hn(t[i]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let af = 0;
class Jh {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: af++ }), this.uuid = Mn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, n = this.data;
    if (n !== null) {
      let a;
      if (Array.isArray(n)) {
        a = [];
        for (let o = 0, s = n.length; o < s; o++)
          n[o].isDataTexture ? a.push(gs(n[o].image)) : a.push(gs(n[o]));
      } else
        a = gs(n);
      i.url = a;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function gs(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Zh.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let sf = 0;
class Ht extends Ur {
  constructor(e = Ht.DEFAULT_IMAGE, t = Ht.DEFAULT_MAPPING, i = li, n = li, a = It, o = vr, s = ci, l = Zi, c = Ht.DEFAULT_ANISOTROPY, h = Gi) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: sf++ }), this.uuid = Mn(), this.name = "", this.source = new Jh(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = n, this.magFilter = a, this.minFilter = o, this.anisotropy = c, this.format = s, this.internalFormat = null, this.type = l, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ne(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== zh)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case lo:
          e.x = e.x - Math.floor(e.x);
          break;
        case li:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case co:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case lo:
          e.y = e.y - Math.floor(e.y);
          break;
        case li:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case co:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
Ht.DEFAULT_IMAGE = null;
Ht.DEFAULT_MAPPING = zh;
Ht.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = i, this.w = n;
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
  set(e, t, i, n) {
    return this.x = e, this.y = t, this.z = i, this.w = n, this;
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
    const t = this.x, i = this.y, n = this.z, a = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * i + o[8] * n + o[12] * a, this.y = o[1] * t + o[5] * i + o[9] * n + o[13] * a, this.z = o[2] * t + o[6] * i + o[10] * n + o[14] * a, this.w = o[3] * t + o[7] * i + o[11] * n + o[15] * a, this;
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
    let t, i, n, a;
    const o = e.elements, s = o[0], l = o[4], c = o[8], h = o[1], u = o[5], d = o[9], g = o[2], m = o[6], _ = o[10];
    if (Math.abs(l - h) < 0.01 && Math.abs(c - g) < 0.01 && Math.abs(d - m) < 0.01) {
      if (Math.abs(l + h) < 0.1 && Math.abs(c + g) < 0.1 && Math.abs(d + m) < 0.1 && Math.abs(s + u + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const p = (s + 1) / 2, y = (u + 1) / 2, v = (_ + 1) / 2, T = (l + h) / 4, C = (c + g) / 4, b = (d + m) / 4;
      return p > y && p > v ? p < 0.01 ? (i = 0, n = 0.707106781, a = 0.707106781) : (i = Math.sqrt(p), n = T / i, a = C / i) : y > v ? y < 0.01 ? (i = 0.707106781, n = 0, a = 0.707106781) : (n = Math.sqrt(y), i = T / n, a = b / n) : v < 0.01 ? (i = 0.707106781, n = 0.707106781, a = 0) : (a = Math.sqrt(v), i = C / a, n = b / a), this.set(i, n, a, t), this;
    }
    let f = Math.sqrt((m - d) * (m - d) + (c - g) * (c - g) + (h - l) * (h - l));
    return Math.abs(f) < 1e-3 && (f = 1), this.x = (m - d) / f, this.y = (c - g) / f, this.z = (h - l) / f, this.w = Math.acos((s + u + _ - 1) / 2), this;
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
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
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
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
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
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
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
class of extends Ur {
  constructor(e = 1, t = 1, i = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const n = { width: e, height: t, depth: 1 };
    i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: It,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0,
      count: 1
    }, i);
    const a = new Ht(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace);
    a.flipY = !1, a.generateMipmaps = i.generateMipmaps, a.internalFormat = i.internalFormat, this.textures = [];
    const o = i.count;
    for (let s = 0; s < o; s++)
      this.textures[s] = a.clone(), this.textures[s].isRenderTargetTexture = !0;
    this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.depthTexture = i.depthTexture, this.samples = i.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let n = 0, a = this.textures.length; n < a; n++)
        this.textures[n].image.width = e, this.textures[n].image.height = t, this.textures[n].image.depth = i;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let i = 0, n = e.textures.length; i < n; i++)
      this.textures[i] = e.textures[i].clone(), this.textures[i].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Jh(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Rr extends of {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}
class $h extends Ht {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: i, depth: n }, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = li, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class lf extends Ht {
  constructor(e = null, t = 1, i = 1, n = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: i, depth: n }, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = li, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Cr {
  constructor(e = 0, t = 0, i = 0, n = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = n;
  }
  static slerpFlat(e, t, i, n, a, o, s) {
    let l = i[n + 0], c = i[n + 1], h = i[n + 2], u = i[n + 3];
    const d = a[o + 0], g = a[o + 1], m = a[o + 2], _ = a[o + 3];
    if (s === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (s === 1) {
      e[t + 0] = d, e[t + 1] = g, e[t + 2] = m, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== g || h !== m) {
      let f = 1 - s;
      const p = l * d + c * g + h * m + u * _, y = p >= 0 ? 1 : -1, v = 1 - p * p;
      if (v > Number.EPSILON) {
        const C = Math.sqrt(v), b = Math.atan2(C, p * y);
        f = Math.sin(f * b) / C, s = Math.sin(s * b) / C;
      }
      const T = s * y;
      if (l = l * f + d * T, c = c * f + g * T, h = h * f + m * T, u = u * f + _ * T, f === 1 - s) {
        const C = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= C, c *= C, h *= C, u *= C;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, i, n, a, o) {
    const s = i[n], l = i[n + 1], c = i[n + 2], h = i[n + 3], u = a[o], d = a[o + 1], g = a[o + 2], m = a[o + 3];
    return e[t] = s * m + h * u + l * g - c * d, e[t + 1] = l * m + h * d + c * u - s * g, e[t + 2] = c * m + h * g + s * d - l * u, e[t + 3] = h * m - s * u - l * d - c * g, e;
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
  set(e, t, i, n) {
    return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const i = e._x, n = e._y, a = e._z, o = e._order, s = Math.cos, l = Math.sin, c = s(i / 2), h = s(n / 2), u = s(a / 2), d = l(i / 2), g = l(n / 2), m = l(a / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * g * m, this._y = c * g * u - d * h * m, this._z = c * h * m + d * g * u, this._w = c * h * u - d * g * m;
        break;
      case "YXZ":
        this._x = d * h * u + c * g * m, this._y = c * g * u - d * h * m, this._z = c * h * m - d * g * u, this._w = c * h * u + d * g * m;
        break;
      case "ZXY":
        this._x = d * h * u - c * g * m, this._y = c * g * u + d * h * m, this._z = c * h * m + d * g * u, this._w = c * h * u - d * g * m;
        break;
      case "ZYX":
        this._x = d * h * u - c * g * m, this._y = c * g * u + d * h * m, this._z = c * h * m - d * g * u, this._w = c * h * u + d * g * m;
        break;
      case "YZX":
        this._x = d * h * u + c * g * m, this._y = c * g * u + d * h * m, this._z = c * h * m - d * g * u, this._w = c * h * u - d * g * m;
        break;
      case "XZY":
        this._x = d * h * u - c * g * m, this._y = c * g * u - d * h * m, this._z = c * h * m + d * g * u, this._w = c * h * u + d * g * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, n = Math.sin(i);
    return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], n = t[4], a = t[8], o = t[1], s = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = i + s + u;
    if (d > 0) {
      const g = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / g, this._x = (h - l) * g, this._y = (a - c) * g, this._z = (o - n) * g;
    } else if (i > s && i > u) {
      const g = 2 * Math.sqrt(1 + i - s - u);
      this._w = (h - l) / g, this._x = 0.25 * g, this._y = (n + o) / g, this._z = (a + c) / g;
    } else if (s > u) {
      const g = 2 * Math.sqrt(1 + s - i - u);
      this._w = (a - c) / g, this._x = (n + o) / g, this._y = 0.25 * g, this._z = (l + h) / g;
    } else {
      const g = 2 * Math.sqrt(1 + u - i - s);
      this._w = (o - n) / g, this._x = (a + c) / g, this._y = (l + h) / g, this._z = 0.25 * g;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0)
      return this;
    const n = Math.min(1, t / i);
    return this.slerp(e, n), this;
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
    const i = e._x, n = e._y, a = e._z, o = e._w, s = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = i * h + o * s + n * c - a * l, this._y = n * h + o * l + a * s - i * c, this._z = a * h + o * c + i * l - n * s, this._w = o * h - i * s - n * l - a * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const i = this._x, n = this._y, a = this._z, o = this._w;
    let s = o * e._w + i * e._x + n * e._y + a * e._z;
    if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1)
      return this._w = o, this._x = i, this._y = n, this._z = a, this;
    const l = 1 - s * s;
    if (l <= Number.EPSILON) {
      const g = 1 - t;
      return this._w = g * o + t * this._w, this._x = g * i + t * this._x, this._y = g * n + t * this._y, this._z = g * a + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, s), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = o * u + this._w * d, this._x = i * u + this._x * d, this._y = n * u + this._y * d, this._z = a * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), n = Math.sqrt(1 - i), a = Math.sqrt(i);
    return this.set(
      n * Math.sin(e),
      n * Math.cos(e),
      a * Math.sin(t),
      a * Math.cos(t)
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
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
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
class D {
  constructor(e = 0, t = 0, i = 0) {
    D.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
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
    return this.applyQuaternion(Yl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Yl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, n = this.z, a = e.elements;
    return this.x = a[0] * t + a[3] * i + a[6] * n, this.y = a[1] * t + a[4] * i + a[7] * n, this.z = a[2] * t + a[5] * i + a[8] * n, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, n = this.z, a = e.elements, o = 1 / (a[3] * t + a[7] * i + a[11] * n + a[15]);
    return this.x = (a[0] * t + a[4] * i + a[8] * n + a[12]) * o, this.y = (a[1] * t + a[5] * i + a[9] * n + a[13]) * o, this.z = (a[2] * t + a[6] * i + a[10] * n + a[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, n = this.z, a = e.x, o = e.y, s = e.z, l = e.w, c = 2 * (o * n - s * i), h = 2 * (s * t - a * n), u = 2 * (a * i - o * t);
    return this.x = t + l * c + o * u - s * h, this.y = i + l * h + s * c - a * u, this.z = n + l * u + a * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, n = this.z, a = e.elements;
    return this.x = a[0] * t + a[4] * i + a[8] * n, this.y = a[1] * t + a[5] * i + a[9] * n, this.z = a[2] * t + a[6] * i + a[10] * n, this.normalize();
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
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
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
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
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
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, n = e.y, a = e.z, o = t.x, s = t.y, l = t.z;
    return this.x = n * l - a * s, this.y = a * o - i * l, this.z = i * s - n * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return _s.copy(this).projectOnVector(e), this.sub(_s);
  }
  reflect(e) {
    return this.sub(_s.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(yt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, n = this.z - e.z;
    return t * t + i * i + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const n = Math.sin(t) * e;
    return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), n = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = n, this;
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
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
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
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const _s = /* @__PURE__ */ new D(), Yl = /* @__PURE__ */ new Cr();
class Kn {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(ai.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(ai.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = ai.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
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
    const i = e.geometry;
    if (i !== void 0) {
      const a = i.getAttribute("position");
      if (t === !0 && a !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, s = a.count; o < s; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, ai) : ai.fromBufferAttribute(a, o), ai.applyMatrix4(e.matrixWorld), this.expandByPoint(ai);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ia.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), ia.copy(i.boundingBox)), ia.applyMatrix4(e.matrixWorld), this.union(ia);
    }
    const n = e.children;
    for (let a = 0, o = n.length; a < o; a++)
      this.expandByObject(n[a], t);
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
    return this.clampPoint(e.center, ai), ai.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(An), ra.subVectors(this.max, An), zr.subVectors(e.a, An), Hr.subVectors(e.b, An), Gr.subVectors(e.c, An), Ii.subVectors(Hr, zr), Oi.subVectors(Gr, Hr), or.subVectors(zr, Gr);
    let t = [
      0,
      -Ii.z,
      Ii.y,
      0,
      -Oi.z,
      Oi.y,
      0,
      -or.z,
      or.y,
      Ii.z,
      0,
      -Ii.x,
      Oi.z,
      0,
      -Oi.x,
      or.z,
      0,
      -or.x,
      -Ii.y,
      Ii.x,
      0,
      -Oi.y,
      Oi.x,
      0,
      -or.y,
      or.x,
      0
    ];
    return !vs(t, zr, Hr, Gr, ra) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !vs(t, zr, Hr, Gr, ra)) ? !1 : (na.crossVectors(Ii, Oi), t = [na.x, na.y, na.z], vs(t, zr, Hr, Gr, ra));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, ai).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(ai).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (yi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), yi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), yi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), yi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), yi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), yi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), yi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), yi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(yi), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const yi = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], ai = /* @__PURE__ */ new D(), ia = /* @__PURE__ */ new Kn(), zr = /* @__PURE__ */ new D(), Hr = /* @__PURE__ */ new D(), Gr = /* @__PURE__ */ new D(), Ii = /* @__PURE__ */ new D(), Oi = /* @__PURE__ */ new D(), or = /* @__PURE__ */ new D(), An = /* @__PURE__ */ new D(), ra = /* @__PURE__ */ new D(), na = /* @__PURE__ */ new D(), lr = /* @__PURE__ */ new D();
function vs(r, e, t, i, n) {
  for (let a = 0, o = r.length - 3; a <= o; a += 3) {
    lr.fromArray(r, a);
    const s = n.x * Math.abs(lr.x) + n.y * Math.abs(lr.y) + n.z * Math.abs(lr.z), l = e.dot(lr), c = t.dot(lr), h = i.dot(lr);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > s)
      return !1;
  }
  return !0;
}
const cf = /* @__PURE__ */ new Kn(), wn = /* @__PURE__ */ new D(), xs = /* @__PURE__ */ new D();
class Fo {
  constructor(e = new D(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : cf.setFromPoints(e).getCenter(i);
    let n = 0;
    for (let a = 0, o = e.length; a < o; a++)
      n = Math.max(n, i.distanceToSquared(e[a]));
    return this.radius = Math.sqrt(n), this;
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
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
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
    wn.subVectors(e, this.center);
    const t = wn.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), n = (i - this.radius) * 0.5;
      this.center.addScaledVector(wn, n / i), this.radius += n;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (xs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(wn.copy(e.center).add(xs)), this.expandByPoint(wn.copy(e.center).sub(xs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Si = /* @__PURE__ */ new D(), Ms = /* @__PURE__ */ new D(), aa = /* @__PURE__ */ new D(), Ni = /* @__PURE__ */ new D(), ys = /* @__PURE__ */ new D(), sa = /* @__PURE__ */ new D(), Ss = /* @__PURE__ */ new D();
class Qh {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Si)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Si.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Si.copy(this.origin).addScaledVector(this.direction, t), Si.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, n) {
    Ms.copy(e).add(t).multiplyScalar(0.5), aa.copy(t).sub(e).normalize(), Ni.copy(this.origin).sub(Ms);
    const a = e.distanceTo(t) * 0.5, o = -this.direction.dot(aa), s = Ni.dot(this.direction), l = -Ni.dot(aa), c = Ni.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, g, m;
    if (h > 0)
      if (u = o * l - s, d = o * s - l, m = a * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            const _ = 1 / h;
            u *= _, d *= _, g = u * (u + o * d + 2 * s) + d * (o * u + d + 2 * l) + c;
          } else
            d = a, u = Math.max(0, -(o * d + s)), g = -u * u + d * (d + 2 * l) + c;
        else
          d = -a, u = Math.max(0, -(o * d + s)), g = -u * u + d * (d + 2 * l) + c;
      else
        d <= -m ? (u = Math.max(0, -(-o * a + s)), d = u > 0 ? -a : Math.min(Math.max(-a, -l), a), g = -u * u + d * (d + 2 * l) + c) : d <= m ? (u = 0, d = Math.min(Math.max(-a, -l), a), g = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * a + s)), d = u > 0 ? a : Math.min(Math.max(-a, -l), a), g = -u * u + d * (d + 2 * l) + c);
    else
      d = o > 0 ? -a : a, u = Math.max(0, -(o * d + s)), g = -u * u + d * (d + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), n && n.copy(Ms).addScaledVector(aa, d), g;
  }
  intersectSphere(e, t) {
    Si.subVectors(e.center, this.origin);
    const i = Si.dot(this.direction), n = Si.dot(Si) - i * i, a = e.radius * e.radius;
    if (n > a)
      return null;
    const o = Math.sqrt(a - n), s = i - o, l = i + o;
    return l < 0 ? null : s < 0 ? this.at(l, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, n, a, o, s, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (i = (e.min.x - d.x) * c, n = (e.max.x - d.x) * c) : (i = (e.max.x - d.x) * c, n = (e.min.x - d.x) * c), h >= 0 ? (a = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (a = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), i > o || a > n || ((a > i || isNaN(i)) && (i = a), (o < n || isNaN(n)) && (n = o), u >= 0 ? (s = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (s = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), i > l || s > n) || ((s > i || i !== i) && (i = s), (l < n || n !== n) && (n = l), n < 0) ? null : this.at(i >= 0 ? i : n, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Si) !== null;
  }
  intersectTriangle(e, t, i, n, a) {
    ys.subVectors(t, e), sa.subVectors(i, e), Ss.crossVectors(ys, sa);
    let o = this.direction.dot(Ss), s;
    if (o > 0) {
      if (n)
        return null;
      s = 1;
    } else if (o < 0)
      s = -1, o = -o;
    else
      return null;
    Ni.subVectors(this.origin, e);
    const l = s * this.direction.dot(sa.crossVectors(Ni, sa));
    if (l < 0)
      return null;
    const c = s * this.direction.dot(ys.cross(Ni));
    if (c < 0 || l + c > o)
      return null;
    const h = -s * Ni.dot(Ss);
    return h < 0 ? null : this.at(h / o, a);
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
class ot {
  constructor(e, t, i, n, a, o, s, l, c, h, u, d, g, m, _, f) {
    ot.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, i, n, a, o, s, l, c, h, u, d, g, m, _, f);
  }
  set(e, t, i, n, a, o, s, l, c, h, u, d, g, m, _, f) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = i, p[12] = n, p[1] = a, p[5] = o, p[9] = s, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = g, p[7] = m, p[11] = _, p[15] = f, this;
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
    return new ot().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
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
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, i) {
    return this.set(
      e.x,
      t.x,
      i.x,
      0,
      e.y,
      t.y,
      i.y,
      0,
      e.z,
      t.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, i = e.elements, n = 1 / kr.setFromMatrixColumn(e, 0).length(), a = 1 / kr.setFromMatrixColumn(e, 1).length(), o = 1 / kr.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * a, t[5] = i[5] * a, t[6] = i[6] * a, t[7] = 0, t[8] = i[8] * o, t[9] = i[9] * o, t[10] = i[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, n = e.y, a = e.z, o = Math.cos(i), s = Math.sin(i), l = Math.cos(n), c = Math.sin(n), h = Math.cos(a), u = Math.sin(a);
    if (e.order === "XYZ") {
      const d = o * h, g = o * u, m = s * h, _ = s * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = g + m * c, t[5] = d - _ * c, t[9] = -s * l, t[2] = _ - d * c, t[6] = m + g * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * h, g = l * u, m = c * h, _ = c * u;
      t[0] = d + _ * s, t[4] = m * s - g, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -s, t[2] = g * s - m, t[6] = _ + d * s, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * h, g = l * u, m = c * h, _ = c * u;
      t[0] = d - _ * s, t[4] = -o * u, t[8] = m + g * s, t[1] = g + m * s, t[5] = o * h, t[9] = _ - d * s, t[2] = -o * c, t[6] = s, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * h, g = o * u, m = s * h, _ = s * u;
      t[0] = l * h, t[4] = m * c - g, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = g * c - m, t[2] = -c, t[6] = s * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, g = o * c, m = s * l, _ = s * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = m * u + g, t[1] = u, t[5] = o * h, t[9] = -s * h, t[2] = -c * h, t[6] = g * u + m, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = o * l, g = o * c, m = s * l, _ = s * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = o * h, t[9] = g * u - m, t[2] = m * u - g, t[6] = s * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(hf, e, uf);
  }
  lookAt(e, t, i) {
    const n = this.elements;
    return Wt.subVectors(e, t), Wt.lengthSq() === 0 && (Wt.z = 1), Wt.normalize(), Fi.crossVectors(i, Wt), Fi.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Wt.x += 1e-4 : Wt.z += 1e-4, Wt.normalize(), Fi.crossVectors(i, Wt)), Fi.normalize(), oa.crossVectors(Wt, Fi), n[0] = Fi.x, n[4] = oa.x, n[8] = Wt.x, n[1] = Fi.y, n[5] = oa.y, n[9] = Wt.y, n[2] = Fi.z, n[6] = oa.z, n[10] = Wt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, n = t.elements, a = this.elements, o = i[0], s = i[4], l = i[8], c = i[12], h = i[1], u = i[5], d = i[9], g = i[13], m = i[2], _ = i[6], f = i[10], p = i[14], y = i[3], v = i[7], T = i[11], C = i[15], b = n[0], E = n[4], L = n[8], X = n[12], M = n[1], w = n[5], j = n[9], K = n[13], P = n[2], V = n[6], B = n[10], W = n[14], Y = n[3], q = n[7], ee = n[11], Q = n[15];
    return a[0] = o * b + s * M + l * P + c * Y, a[4] = o * E + s * w + l * V + c * q, a[8] = o * L + s * j + l * B + c * ee, a[12] = o * X + s * K + l * W + c * Q, a[1] = h * b + u * M + d * P + g * Y, a[5] = h * E + u * w + d * V + g * q, a[9] = h * L + u * j + d * B + g * ee, a[13] = h * X + u * K + d * W + g * Q, a[2] = m * b + _ * M + f * P + p * Y, a[6] = m * E + _ * w + f * V + p * q, a[10] = m * L + _ * j + f * B + p * ee, a[14] = m * X + _ * K + f * W + p * Q, a[3] = y * b + v * M + T * P + C * Y, a[7] = y * E + v * w + T * V + C * q, a[11] = y * L + v * j + T * B + C * ee, a[15] = y * X + v * K + T * W + C * Q, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], n = e[8], a = e[12], o = e[1], s = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], g = e[14], m = e[3], _ = e[7], f = e[11], p = e[15];
    return m * (+a * l * u - n * c * u - a * s * d + i * c * d + n * s * g - i * l * g) + _ * (+t * l * g - t * c * d + a * o * d - n * o * g + n * c * h - a * l * h) + f * (+t * c * u - t * s * g - a * o * u + i * o * g + a * s * h - i * c * h) + p * (-n * s * h - t * l * u + t * s * d + n * o * u - i * o * d + i * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const n = this.elements;
    return e.isVector3 ? (n[12] = e.x, n[13] = e.y, n[14] = e.z) : (n[12] = e, n[13] = t, n[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], n = e[2], a = e[3], o = e[4], s = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], g = e[11], m = e[12], _ = e[13], f = e[14], p = e[15], y = u * f * c - _ * d * c + _ * l * g - s * f * g - u * l * p + s * d * p, v = m * d * c - h * f * c - m * l * g + o * f * g + h * l * p - o * d * p, T = h * _ * c - m * u * c + m * s * g - o * _ * g - h * s * p + o * u * p, C = m * u * l - h * _ * l - m * s * d + o * _ * d + h * s * f - o * u * f, b = t * y + i * v + n * T + a * C;
    if (b === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / b;
    return e[0] = y * E, e[1] = (_ * d * a - u * f * a - _ * n * g + i * f * g + u * n * p - i * d * p) * E, e[2] = (s * f * a - _ * l * a + _ * n * c - i * f * c - s * n * p + i * l * p) * E, e[3] = (u * l * a - s * d * a - u * n * c + i * d * c + s * n * g - i * l * g) * E, e[4] = v * E, e[5] = (h * f * a - m * d * a + m * n * g - t * f * g - h * n * p + t * d * p) * E, e[6] = (m * l * a - o * f * a - m * n * c + t * f * c + o * n * p - t * l * p) * E, e[7] = (o * d * a - h * l * a + h * n * c - t * d * c - o * n * g + t * l * g) * E, e[8] = T * E, e[9] = (m * u * a - h * _ * a - m * i * g + t * _ * g + h * i * p - t * u * p) * E, e[10] = (o * _ * a - m * s * a + m * i * c - t * _ * c - o * i * p + t * s * p) * E, e[11] = (h * s * a - o * u * a - h * i * c + t * u * c + o * i * g - t * s * g) * E, e[12] = C * E, e[13] = (h * _ * n - m * u * n + m * i * d - t * _ * d - h * i * f + t * u * f) * E, e[14] = (m * s * n - o * _ * n - m * i * l + t * _ * l + o * i * f - t * s * f) * E, e[15] = (o * u * n - h * s * n + h * i * l - t * u * l - o * i * d + t * s * d) * E, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, n = e.y, a = e.z;
    return t[0] *= i, t[4] *= n, t[8] *= a, t[1] *= i, t[5] *= n, t[9] *= a, t[2] *= i, t[6] *= n, t[10] *= a, t[3] *= i, t[7] *= n, t[11] *= a, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, n));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
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
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
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
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      0,
      i,
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
    const i = Math.cos(t), n = Math.sin(t), a = 1 - i, o = e.x, s = e.y, l = e.z, c = a * o, h = a * s;
    return this.set(
      c * o + i,
      c * s - n * l,
      c * l + n * s,
      0,
      c * s + n * l,
      h * s + i,
      h * l - n * o,
      0,
      c * l - n * s,
      h * l + n * o,
      a * l * l + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, i) {
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
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, i, n, a, o) {
    return this.set(
      1,
      i,
      a,
      0,
      e,
      1,
      o,
      0,
      t,
      n,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, i) {
    const n = this.elements, a = t._x, o = t._y, s = t._z, l = t._w, c = a + a, h = o + o, u = s + s, d = a * c, g = a * h, m = a * u, _ = o * h, f = o * u, p = s * u, y = l * c, v = l * h, T = l * u, C = i.x, b = i.y, E = i.z;
    return n[0] = (1 - (_ + p)) * C, n[1] = (g + T) * C, n[2] = (m - v) * C, n[3] = 0, n[4] = (g - T) * b, n[5] = (1 - (d + p)) * b, n[6] = (f + y) * b, n[7] = 0, n[8] = (m + v) * E, n[9] = (f - y) * E, n[10] = (1 - (d + _)) * E, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this;
  }
  decompose(e, t, i) {
    const n = this.elements;
    let a = kr.set(n[0], n[1], n[2]).length();
    const o = kr.set(n[4], n[5], n[6]).length(), s = kr.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (a = -a), e.x = n[12], e.y = n[13], e.z = n[14], si.copy(this);
    const l = 1 / a, c = 1 / o, h = 1 / s;
    return si.elements[0] *= l, si.elements[1] *= l, si.elements[2] *= l, si.elements[4] *= c, si.elements[5] *= c, si.elements[6] *= c, si.elements[8] *= h, si.elements[9] *= h, si.elements[10] *= h, t.setFromRotationMatrix(si), i.x = a, i.y = o, i.z = s, this;
  }
  makePerspective(e, t, i, n, a, o, s = Pi) {
    const l = this.elements, c = 2 * a / (t - e), h = 2 * a / (i - n), u = (t + e) / (t - e), d = (i + n) / (i - n);
    let g, m;
    if (s === Pi)
      g = -(o + a) / (o - a), m = -2 * o * a / (o - a);
    else if (s === Ba)
      g = -o / (o - a), m = -o * a / (o - a);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = m, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, i, n, a, o, s = Pi) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (i - n), u = 1 / (o - a), d = (t + e) * c, g = (i + n) * h;
    let m, _;
    if (s === Pi)
      m = (o + a) * u, _ = -2 * u;
    else if (s === Ba)
      m = a * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -g, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -m, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let n = 0; n < 16; n++)
      if (t[n] !== i[n])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const kr = /* @__PURE__ */ new D(), si = /* @__PURE__ */ new ot(), hf = /* @__PURE__ */ new D(0, 0, 0), uf = /* @__PURE__ */ new D(1, 1, 1), Fi = /* @__PURE__ */ new D(), oa = /* @__PURE__ */ new D(), Wt = /* @__PURE__ */ new D(), ql = /* @__PURE__ */ new ot(), Kl = /* @__PURE__ */ new Cr();
class xi {
  constructor(e = 0, t = 0, i = 0, n = xi.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = n;
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
  set(e, t, i, n = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const n = e.elements, a = n[0], o = n[4], s = n[8], l = n[1], c = n[5], h = n[9], u = n[2], d = n[6], g = n[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(yt(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(-h, g), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-yt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(s, g), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, a), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(yt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, g), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, a));
        break;
      case "ZYX":
        this._y = Math.asin(-yt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, g), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(yt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, g));
        break;
      case "XZY":
        this._z = Math.asin(-yt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-h, g), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return ql.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ql, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Kl.setFromEuler(this), this.setFromQuaternion(Kl, e);
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
}
xi.DEFAULT_ORDER = "XYZ";
class eu {
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
let df = 0;
const Zl = /* @__PURE__ */ new D(), Vr = /* @__PURE__ */ new Cr(), Ti = /* @__PURE__ */ new ot(), la = /* @__PURE__ */ new D(), Rn = /* @__PURE__ */ new D(), pf = /* @__PURE__ */ new D(), ff = /* @__PURE__ */ new Cr(), Jl = /* @__PURE__ */ new D(1, 0, 0), $l = /* @__PURE__ */ new D(0, 1, 0), Ql = /* @__PURE__ */ new D(0, 0, 1), mf = { type: "added" }, gf = { type: "removed" }, Ts = { type: "childadded", child: null }, Es = { type: "childremoved", child: null };
class Gt extends Ur {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: df++ }), this.uuid = Mn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Gt.DEFAULT_UP.clone();
    const e = new D(), t = new xi(), i = new Cr(), n = new D(1, 1, 1);
    function a() {
      i.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(a), i._onChange(o), Object.defineProperties(this, {
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
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      modelViewMatrix: {
        value: new ot()
      },
      normalMatrix: {
        value: new Ne()
      }
    }), this.matrix = new ot(), this.matrixWorld = new ot(), this.matrixAutoUpdate = Gt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new eu(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
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
    return Vr.setFromAxisAngle(e, t), this.quaternion.multiply(Vr), this;
  }
  rotateOnWorldAxis(e, t) {
    return Vr.setFromAxisAngle(e, t), this.quaternion.premultiply(Vr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Jl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis($l, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ql, e);
  }
  translateOnAxis(e, t) {
    return Zl.copy(e).applyQuaternion(this.quaternion), this.position.add(Zl.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Jl, e);
  }
  translateY(e) {
    return this.translateOnAxis($l, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ql, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Ti.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? la.copy(e) : la.set(e, t, i);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1), Rn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ti.lookAt(Rn, la, this.up) : Ti.lookAt(la, Rn, this.up), this.quaternion.setFromRotationMatrix(Ti), n && (Ti.extractRotation(n.matrixWorld), Vr.setFromRotationMatrix(Ti), this.quaternion.premultiply(Vr.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(mf), Ts.child = e, this.dispatchEvent(Ts), Ts.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(gf), Es.child = e, this.dispatchEvent(Es), Es.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Ti.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ti.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ti), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    for (let i = 0, n = this.children.length; i < n; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const n = this.children;
    for (let a = 0, o = n.length; a < o; a++)
      n[a].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Rn, e, pf), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Rn, ff, e), e;
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
    for (let i = 0, n = t.length; i < n; i++)
      t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let i = 0, n = t.length; i < n; i++)
      t[i].traverseVisible(e);
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
    for (let i = 0, n = t.length; i < n; i++) {
      const a = t[i];
      (a.matrixWorldAutoUpdate === !0 || e === !0) && a.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const n = this.children;
      for (let a = 0, o = n.length; a < o; a++) {
        const s = n[a];
        s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const n = {};
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), this.frustumCulled === !1 && (n.frustumCulled = !1), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), n.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (n.type = "BatchedMesh", n.perObjectFrustumCulled = this.perObjectFrustumCulled, n.sortObjects = this.sortObjects, n.drawRanges = this._drawRanges, n.reservedRanges = this._reservedRanges, n.visibility = this._visibility, n.active = this._active, n.bounds = this._bounds.map((s) => ({
      boxInitialized: s.boxInitialized,
      boxMin: s.box.min.toArray(),
      boxMax: s.box.max.toArray(),
      sphereInitialized: s.sphereInitialized,
      sphereRadius: s.sphere.radius,
      sphereCenter: s.sphere.center.toArray()
    })), n.maxGeometryCount = this._maxGeometryCount, n.maxVertexCount = this._maxVertexCount, n.maxIndexCount = this._maxIndexCount, n.geometryInitialized = this._geometryInitialized, n.geometryCount = this._geometryCount, n.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (n.boundingSphere = {
      center: n.boundingSphere.center.toArray(),
      radius: n.boundingSphere.radius
    }), this.boundingBox !== null && (n.boundingBox = {
      min: n.boundingBox.min.toArray(),
      max: n.boundingBox.max.toArray()
    }));
    function a(s, l) {
      return s[l.uuid] === void 0 && (s[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = a(e.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const l = s.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            a(e.shapes, u);
          }
        else
          a(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (a(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const s = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          s.push(a(e.materials, this.material[l]));
        n.material = s;
      } else
        n.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let s = 0; s < this.children.length; s++)
        n.children.push(this.children[s].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const l = this.animations[s];
        n.animations.push(a(e.animations, l));
      }
    }
    if (t) {
      const s = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), g = o(e.animations), m = o(e.nodes);
      s.length > 0 && (i.geometries = s), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), d.length > 0 && (i.skeletons = d), g.length > 0 && (i.animations = g), m.length > 0 && (i.nodes = m);
    }
    return i.object = n, i;
    function o(s) {
      const l = [];
      for (const c in s) {
        const h = s[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let i = 0; i < e.children.length; i++) {
        const n = e.children[i];
        this.add(n.clone());
      }
    return this;
  }
}
Gt.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
Gt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const oi = /* @__PURE__ */ new D(), Ei = /* @__PURE__ */ new D(), bs = /* @__PURE__ */ new D(), bi = /* @__PURE__ */ new D(), Wr = /* @__PURE__ */ new D(), Xr = /* @__PURE__ */ new D(), ec = /* @__PURE__ */ new D(), As = /* @__PURE__ */ new D(), ws = /* @__PURE__ */ new D(), Rs = /* @__PURE__ */ new D();
class fi {
  constructor(e = new D(), t = new D(), i = new D()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, n) {
    n.subVectors(i, t), oi.subVectors(e, t), n.cross(oi);
    const a = n.lengthSq();
    return a > 0 ? n.multiplyScalar(1 / Math.sqrt(a)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, n, a) {
    oi.subVectors(n, t), Ei.subVectors(i, t), bs.subVectors(e, t);
    const o = oi.dot(oi), s = oi.dot(Ei), l = oi.dot(bs), c = Ei.dot(Ei), h = Ei.dot(bs), u = o * c - s * s;
    if (u === 0)
      return a.set(0, 0, 0), null;
    const d = 1 / u, g = (c * l - s * h) * d, m = (o * h - s * l) * d;
    return a.set(1 - g - m, m, g);
  }
  static containsPoint(e, t, i, n) {
    return this.getBarycoord(e, t, i, n, bi) === null ? !1 : bi.x >= 0 && bi.y >= 0 && bi.x + bi.y <= 1;
  }
  static getInterpolation(e, t, i, n, a, o, s, l) {
    return this.getBarycoord(e, t, i, n, bi) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(a, bi.x), l.addScaledVector(o, bi.y), l.addScaledVector(s, bi.z), l);
  }
  static isFrontFacing(e, t, i, n) {
    return oi.subVectors(i, t), Ei.subVectors(e, t), oi.cross(Ei).dot(n) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, n) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this;
  }
  setFromAttributeAndIndices(e, t, i, n) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return oi.subVectors(this.c, this.b), Ei.subVectors(this.a, this.b), oi.cross(Ei).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return fi.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return fi.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, n, a) {
    return fi.getInterpolation(e, this.a, this.b, this.c, t, i, n, a);
  }
  containsPoint(e) {
    return fi.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return fi.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, n = this.b, a = this.c;
    let o, s;
    Wr.subVectors(n, i), Xr.subVectors(a, i), As.subVectors(e, i);
    const l = Wr.dot(As), c = Xr.dot(As);
    if (l <= 0 && c <= 0)
      return t.copy(i);
    ws.subVectors(e, n);
    const h = Wr.dot(ws), u = Xr.dot(ws);
    if (h >= 0 && u <= h)
      return t.copy(n);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(i).addScaledVector(Wr, o);
    Rs.subVectors(e, a);
    const g = Wr.dot(Rs), m = Xr.dot(Rs);
    if (m >= 0 && g <= m)
      return t.copy(a);
    const _ = g * c - l * m;
    if (_ <= 0 && c >= 0 && m <= 0)
      return s = c / (c - m), t.copy(i).addScaledVector(Xr, s);
    const f = h * m - g * u;
    if (f <= 0 && u - h >= 0 && g - m >= 0)
      return ec.subVectors(a, n), s = (u - h) / (u - h + (g - m)), t.copy(n).addScaledVector(ec, s);
    const p = 1 / (f + _ + d);
    return o = _ * p, s = d * p, t.copy(i).addScaledVector(Wr, o).addScaledVector(Xr, s);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const tu = {
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
}, Bi = { h: 0, s: 0, l: 0 }, ca = { h: 0, s: 0, l: 0 };
function Cs(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class We {
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const n = e;
      n && n.isColor ? this.copy(n) : typeof n == "number" ? this.setHex(n) : typeof n == "string" && this.setStyle(n);
    } else
      this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = ui) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, i, n = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, qe.toWorkingColorSpace(this, n), this;
  }
  setHSL(e, t, i, n = qe.workingColorSpace) {
    if (e = No(e, 1), t = yt(t, 0, 1), i = yt(i, 0, 1), t === 0)
      this.r = this.g = this.b = i;
    else {
      const a = i <= 0.5 ? i * (1 + t) : i + t - i * t, o = 2 * i - a;
      this.r = Cs(o, a, e + 1 / 3), this.g = Cs(o, a, e), this.b = Cs(o, a, e - 1 / 3);
    }
    return qe.toWorkingColorSpace(this, n), this;
  }
  setStyle(e, t = ui) {
    function i(a) {
      a !== void 0 && parseFloat(a) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let n;
    if (n = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let a;
      const o = n[1], s = n[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return i(a[4]), this.setRGB(
              Math.min(255, parseInt(a[1], 10)) / 255,
              Math.min(255, parseInt(a[2], 10)) / 255,
              Math.min(255, parseInt(a[3], 10)) / 255,
              t
            );
          if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return i(a[4]), this.setRGB(
              Math.min(100, parseInt(a[1], 10)) / 100,
              Math.min(100, parseInt(a[2], 10)) / 100,
              Math.min(100, parseInt(a[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
            return i(a[4]), this.setHSL(
              parseFloat(a[1]) / 360,
              parseFloat(a[2]) / 100,
              parseFloat(a[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const a = n[1], o = a.length;
      if (o === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(a, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = ui) {
    const i = tu[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = hn(e.r), this.g = hn(e.g), this.b = hn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ms(e.r), this.g = ms(e.g), this.b = ms(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ui) {
    return qe.fromWorkingColorSpace(bt.copy(this), e), Math.round(yt(bt.r * 255, 0, 255)) * 65536 + Math.round(yt(bt.g * 255, 0, 255)) * 256 + Math.round(yt(bt.b * 255, 0, 255));
  }
  getHexString(e = ui) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = qe.workingColorSpace) {
    qe.fromWorkingColorSpace(bt.copy(this), t);
    const i = bt.r, n = bt.g, a = bt.b, o = Math.max(i, n, a), s = Math.min(i, n, a);
    let l, c;
    const h = (s + o) / 2;
    if (s === o)
      l = 0, c = 0;
    else {
      const u = o - s;
      switch (c = h <= 0.5 ? u / (o + s) : u / (2 - o - s), o) {
        case i:
          l = (n - a) / u + (n < a ? 6 : 0);
          break;
        case n:
          l = (a - i) / u + 2;
          break;
        case a:
          l = (i - n) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return qe.fromWorkingColorSpace(bt.copy(this), t), e.r = bt.r, e.g = bt.g, e.b = bt.b, e;
  }
  getStyle(e = ui) {
    qe.fromWorkingColorSpace(bt.copy(this), e);
    const t = bt.r, i = bt.g, n = bt.b;
    return e !== ui ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(n * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(Bi), this.setHSL(Bi.h + e, Bi.s + t, Bi.l + i);
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
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Bi), e.getHSL(ca);
    const i = Bn(Bi.h, ca.h, t), n = Bn(Bi.s, ca.s, t), a = Bn(Bi.l, ca.l, t);
    return this.setHSL(i, n, a), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, n = this.b, a = e.elements;
    return this.r = a[0] * t + a[3] * i + a[6] * n, this.g = a[1] * t + a[4] * i + a[7] * n, this.b = a[2] * t + a[5] * i + a[8] * n, this;
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
const bt = /* @__PURE__ */ new We();
We.NAMES = tu;
let _f = 0;
class Zn extends Ur {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _f++ }), this.uuid = Mn(), this.name = "", this.type = "Material", this.blending = cn, this.side = Qi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = no, this.blendDst = ao, this.blendEquation = mr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new We(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ia, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Hl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Fr, this.stencilZFail = Fr, this.stencilZPass = Fr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        const i = e[t];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const n = this[t];
        if (n === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== cn && (i.blending = this.blending), this.side !== Qi && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== no && (i.blendSrc = this.blendSrc), this.blendDst !== ao && (i.blendDst = this.blendDst), this.blendEquation !== mr && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== Ia && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Hl && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Fr && (i.stencilFail = this.stencilFail), this.stencilZFail !== Fr && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Fr && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function n(a) {
      const o = [];
      for (const s in a) {
        const l = a[s];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const a = n(e.textures), o = n(e.images);
      a.length > 0 && (i.textures = a), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const n = t.length;
      i = new Array(n);
      for (let a = 0; a !== n; ++a)
        i[a] = t[a].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class iu extends Zn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new We(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new xi(), this.combine = Bh, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ut = /* @__PURE__ */ new D(), ha = /* @__PURE__ */ new be();
class _i {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = Gl, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Li, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return rf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let n = 0, a = this.itemSize; n < a; n++)
      this.array[e + n] = t.array[i + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        ha.fromBufferAttribute(this, t), ha.applyMatrix3(e), this.setXY(t, ha.x, ha.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = en(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = Ct(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), i = Ct(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, n) {
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), i = Ct(i, this.array), n = Ct(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this;
  }
  setXYZW(e, t, i, n, a) {
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), i = Ct(i, this.array), n = Ct(n, this.array), a = Ct(a, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = a, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Gl && (e.usage = this.usage), e;
  }
}
class ru extends _i {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class nu extends _i {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class br extends _i {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let vf = 0;
const ei = /* @__PURE__ */ new ot(), Ls = /* @__PURE__ */ new Gt(), jr = /* @__PURE__ */ new D(), Xt = /* @__PURE__ */ new Kn(), Cn = /* @__PURE__ */ new Kn(), _t = /* @__PURE__ */ new D();
class Dr extends Ur {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: vf++ }), this.uuid = Mn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Kh(e) ? nu : ru)(e, 1) : this.index = e, this;
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
  addGroup(e, t, i = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: i
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
    const i = this.attributes.normal;
    if (i !== void 0) {
      const a = new Ne().getNormalMatrix(e);
      i.applyNormalMatrix(a), i.needsUpdate = !0;
    }
    const n = this.attributes.tangent;
    return n !== void 0 && (n.transformDirection(e), n.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return ei.makeRotationFromQuaternion(e), this.applyMatrix4(ei), this;
  }
  rotateX(e) {
    return ei.makeRotationX(e), this.applyMatrix4(ei), this;
  }
  rotateY(e) {
    return ei.makeRotationY(e), this.applyMatrix4(ei), this;
  }
  rotateZ(e) {
    return ei.makeRotationZ(e), this.applyMatrix4(ei), this;
  }
  translate(e, t, i) {
    return ei.makeTranslation(e, t, i), this.applyMatrix4(ei), this;
  }
  scale(e, t, i) {
    return ei.makeScale(e, t, i), this.applyMatrix4(ei), this;
  }
  lookAt(e) {
    return Ls.lookAt(e), Ls.updateMatrix(), this.applyMatrix4(Ls.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(jr).negate(), this.translate(jr.x, jr.y, jr.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, n = e.length; i < n; i++) {
      const a = e[i];
      t.push(a.x, a.y, a.z || 0);
    }
    return this.setAttribute("position", new br(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Kn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let i = 0, n = t.length; i < n; i++) {
          const a = t[i];
          Xt.setFromBufferAttribute(a), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, Xt.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, Xt.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(Xt.min), this.boundingBox.expandByPoint(Xt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fo());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Xt.setFromBufferAttribute(e), t)
        for (let a = 0, o = t.length; a < o; a++) {
          const s = t[a];
          Cn.setFromBufferAttribute(s), this.morphTargetsRelative ? (_t.addVectors(Xt.min, Cn.min), Xt.expandByPoint(_t), _t.addVectors(Xt.max, Cn.max), Xt.expandByPoint(_t)) : (Xt.expandByPoint(Cn.min), Xt.expandByPoint(Cn.max));
        }
      Xt.getCenter(i);
      let n = 0;
      for (let a = 0, o = e.count; a < o; a++)
        _t.fromBufferAttribute(e, a), n = Math.max(n, i.distanceToSquared(_t));
      if (t)
        for (let a = 0, o = t.length; a < o; a++) {
          const s = t[a], l = this.morphTargetsRelative;
          for (let c = 0, h = s.count; c < h; c++)
            _t.fromBufferAttribute(s, c), l && (jr.fromBufferAttribute(e, c), _t.add(jr)), n = Math.max(n, i.distanceToSquared(_t));
        }
      this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, n = t.normal, a = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new _i(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"), s = [], l = [];
    for (let L = 0; L < i.count; L++)
      s[L] = new D(), l[L] = new D();
    const c = new D(), h = new D(), u = new D(), d = new be(), g = new be(), m = new be(), _ = new D(), f = new D();
    function p(L, X, M) {
      c.fromBufferAttribute(i, L), h.fromBufferAttribute(i, X), u.fromBufferAttribute(i, M), d.fromBufferAttribute(a, L), g.fromBufferAttribute(a, X), m.fromBufferAttribute(a, M), h.sub(c), u.sub(c), g.sub(d), m.sub(d);
      const w = 1 / (g.x * m.y - m.x * g.y);
      isFinite(w) && (_.copy(h).multiplyScalar(m.y).addScaledVector(u, -g.y).multiplyScalar(w), f.copy(u).multiplyScalar(g.x).addScaledVector(h, -m.x).multiplyScalar(w), s[L].add(_), s[X].add(_), s[M].add(_), l[L].add(f), l[X].add(f), l[M].add(f));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: e.count
    }]);
    for (let L = 0, X = y.length; L < X; ++L) {
      const M = y[L], w = M.start, j = M.count;
      for (let K = w, P = w + j; K < P; K += 3)
        p(
          e.getX(K + 0),
          e.getX(K + 1),
          e.getX(K + 2)
        );
    }
    const v = new D(), T = new D(), C = new D(), b = new D();
    function E(L) {
      C.fromBufferAttribute(n, L), b.copy(C);
      const X = s[L];
      v.copy(X), v.sub(C.multiplyScalar(C.dot(X))).normalize(), T.crossVectors(b, X);
      const M = T.dot(l[L]) < 0 ? -1 : 1;
      o.setXYZW(L, v.x, v.y, v.z, M);
    }
    for (let L = 0, X = y.length; L < X; ++L) {
      const M = y[L], w = M.start, j = M.count;
      for (let K = w, P = w + j; K < P; K += 3)
        E(e.getX(K + 0)), E(e.getX(K + 1)), E(e.getX(K + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new _i(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let d = 0, g = i.count; d < g; d++)
          i.setXYZ(d, 0, 0, 0);
      const n = new D(), a = new D(), o = new D(), s = new D(), l = new D(), c = new D(), h = new D(), u = new D();
      if (e)
        for (let d = 0, g = e.count; d < g; d += 3) {
          const m = e.getX(d + 0), _ = e.getX(d + 1), f = e.getX(d + 2);
          n.fromBufferAttribute(t, m), a.fromBufferAttribute(t, _), o.fromBufferAttribute(t, f), h.subVectors(o, a), u.subVectors(n, a), h.cross(u), s.fromBufferAttribute(i, m), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, f), s.add(h), l.add(h), c.add(h), i.setXYZ(m, s.x, s.y, s.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, g = t.count; d < g; d += 3)
          n.fromBufferAttribute(t, d + 0), a.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, a), u.subVectors(n, a), h.cross(u), i.setXYZ(d + 0, h.x, h.y, h.z), i.setXYZ(d + 1, h.x, h.y, h.z), i.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      _t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  toNonIndexed() {
    function e(s, l) {
      const c = s.array, h = s.itemSize, u = s.normalized, d = new c.constructor(l.length * h);
      let g = 0, m = 0;
      for (let _ = 0, f = l.length; _ < f; _++) {
        s.isInterleavedBufferAttribute ? g = l[_] * s.data.stride + s.offset : g = l[_] * h;
        for (let p = 0; p < h; p++)
          d[m++] = c[g++];
      }
      return new _i(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Dr(), i = this.index.array, n = this.attributes;
    for (const s in n) {
      const l = n[s], c = e(l, i);
      t.setAttribute(s, c);
    }
    const a = this.morphAttributes;
    for (const s in a) {
      const l = [], c = a[s];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], g = e(d, i);
        l.push(g);
      }
      t.morphAttributes[s] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let s = 0, l = o.length; s < l; s++) {
      const c = o[s];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
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
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const n = {};
    let a = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const g = c[u];
        h.push(g.toJSON(e.data));
      }
      h.length > 0 && (n[l] = h, a = !0);
    }
    a && (e.data.morphAttributes = n, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const s = this.boundingSphere;
    return s !== null && (e.data.boundingSphere = {
      center: s.center.toArray(),
      radius: s.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const n = e.attributes;
    for (const c in n) {
      const h = n[c];
      this.setAttribute(c, h.clone(t));
    }
    const a = e.morphAttributes;
    for (const c in a) {
      const h = [], u = a[c];
      for (let d = 0, g = u.length; d < g; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const s = e.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const tc = /* @__PURE__ */ new ot(), cr = /* @__PURE__ */ new Qh(), ua = /* @__PURE__ */ new Fo(), ic = /* @__PURE__ */ new D(), Yr = /* @__PURE__ */ new D(), qr = /* @__PURE__ */ new D(), Kr = /* @__PURE__ */ new D(), Ps = /* @__PURE__ */ new D(), da = /* @__PURE__ */ new D(), pa = /* @__PURE__ */ new be(), fa = /* @__PURE__ */ new be(), ma = /* @__PURE__ */ new be(), rc = /* @__PURE__ */ new D(), nc = /* @__PURE__ */ new D(), ac = /* @__PURE__ */ new D(), ga = /* @__PURE__ */ new D(), _a = /* @__PURE__ */ new D();
class Ut extends Gt {
  constructor(e = new Dr(), t = new iu()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, a = i.length; n < a; n++) {
          const o = i[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = n;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, n = i.attributes.position, a = i.morphAttributes.position, o = i.morphTargetsRelative;
    t.fromBufferAttribute(n, e);
    const s = this.morphTargetInfluences;
    if (a && s) {
      da.set(0, 0, 0);
      for (let l = 0, c = a.length; l < c; l++) {
        const h = s[l], u = a[l];
        h !== 0 && (Ps.fromBufferAttribute(u, e), o ? da.addScaledVector(Ps, h) : da.addScaledVector(Ps.sub(t), h));
      }
      t.add(da);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, n = this.material, a = this.matrixWorld;
    n !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), ua.copy(i.boundingSphere), ua.applyMatrix4(a), cr.copy(e.ray).recast(e.near), !(ua.containsPoint(cr.origin) === !1 && (cr.intersectSphere(ua, ic) === null || cr.origin.distanceToSquared(ic) > (e.far - e.near) ** 2)) && (tc.copy(a).invert(), cr.copy(e.ray).applyMatrix4(tc), !(i.boundingBox !== null && cr.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, cr)));
  }
  _computeIntersections(e, t, i) {
    let n;
    const a = this.geometry, o = this.material, s = a.index, l = a.attributes.position, c = a.attributes.uv, h = a.attributes.uv1, u = a.attributes.normal, d = a.groups, g = a.drawRange;
    if (s !== null)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const f = d[m], p = o[f.materialIndex], y = Math.max(f.start, g.start), v = Math.min(s.count, Math.min(f.start + f.count, g.start + g.count));
          for (let T = y, C = v; T < C; T += 3) {
            const b = s.getX(T), E = s.getX(T + 1), L = s.getX(T + 2);
            n = va(this, p, e, i, c, h, u, b, E, L), n && (n.faceIndex = Math.floor(T / 3), n.face.materialIndex = f.materialIndex, t.push(n));
          }
        }
      else {
        const m = Math.max(0, g.start), _ = Math.min(s.count, g.start + g.count);
        for (let f = m, p = _; f < p; f += 3) {
          const y = s.getX(f), v = s.getX(f + 1), T = s.getX(f + 2);
          n = va(this, o, e, i, c, h, u, y, v, T), n && (n.faceIndex = Math.floor(f / 3), t.push(n));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let m = 0, _ = d.length; m < _; m++) {
          const f = d[m], p = o[f.materialIndex], y = Math.max(f.start, g.start), v = Math.min(l.count, Math.min(f.start + f.count, g.start + g.count));
          for (let T = y, C = v; T < C; T += 3) {
            const b = T, E = T + 1, L = T + 2;
            n = va(this, p, e, i, c, h, u, b, E, L), n && (n.faceIndex = Math.floor(T / 3), n.face.materialIndex = f.materialIndex, t.push(n));
          }
        }
      else {
        const m = Math.max(0, g.start), _ = Math.min(l.count, g.start + g.count);
        for (let f = m, p = _; f < p; f += 3) {
          const y = f, v = f + 1, T = f + 2;
          n = va(this, o, e, i, c, h, u, y, v, T), n && (n.faceIndex = Math.floor(f / 3), t.push(n));
        }
      }
  }
}
function xf(r, e, t, i, n, a, o, s) {
  let l;
  if (e.side === zt ? l = i.intersectTriangle(o, a, n, !0, s) : l = i.intersectTriangle(n, a, o, e.side === Qi, s), l === null)
    return null;
  _a.copy(s), _a.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(_a);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: _a.clone(),
    object: r
  };
}
function va(r, e, t, i, n, a, o, s, l, c) {
  r.getVertexPosition(s, Yr), r.getVertexPosition(l, qr), r.getVertexPosition(c, Kr);
  const h = xf(r, e, t, i, Yr, qr, Kr, ga);
  if (h) {
    n && (pa.fromBufferAttribute(n, s), fa.fromBufferAttribute(n, l), ma.fromBufferAttribute(n, c), h.uv = fi.getInterpolation(ga, Yr, qr, Kr, pa, fa, ma, new be())), a && (pa.fromBufferAttribute(a, s), fa.fromBufferAttribute(a, l), ma.fromBufferAttribute(a, c), h.uv1 = fi.getInterpolation(ga, Yr, qr, Kr, pa, fa, ma, new be())), o && (rc.fromBufferAttribute(o, s), nc.fromBufferAttribute(o, l), ac.fromBufferAttribute(o, c), h.normal = fi.getInterpolation(ga, Yr, qr, Kr, rc, nc, ac, new D()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: s,
      b: l,
      c,
      normal: new D(),
      materialIndex: 0
    };
    fi.getNormal(Yr, qr, Kr, u.normal), h.face = u;
  }
  return h;
}
class yn extends Dr {
  constructor(e = 1, t = 1, i = 1, n = 1, a = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: n,
      heightSegments: a,
      depthSegments: o
    };
    const s = this;
    n = Math.floor(n), a = Math.floor(a), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, g = 0;
    m("z", "y", "x", -1, -1, i, t, e, o, a, 0), m("z", "y", "x", 1, -1, i, t, -e, o, a, 1), m("x", "z", "y", 1, 1, e, i, t, n, o, 2), m("x", "z", "y", 1, -1, e, i, -t, n, o, 3), m("x", "y", "z", 1, -1, e, t, i, n, a, 4), m("x", "y", "z", -1, -1, e, t, -i, n, a, 5), this.setIndex(l), this.setAttribute("position", new br(c, 3)), this.setAttribute("normal", new br(h, 3)), this.setAttribute("uv", new br(u, 2));
    function m(_, f, p, y, v, T, C, b, E, L, X) {
      const M = T / E, w = C / L, j = T / 2, K = C / 2, P = b / 2, V = E + 1, B = L + 1;
      let W = 0, Y = 0;
      const q = new D();
      for (let ee = 0; ee < B; ee++) {
        const Q = ee * w - K;
        for (let de = 0; de < V; de++) {
          const fe = de * M - j;
          q[_] = fe * y, q[f] = Q * v, q[p] = P, c.push(q.x, q.y, q.z), q[_] = 0, q[f] = 0, q[p] = b > 0 ? 1 : -1, h.push(q.x, q.y, q.z), u.push(de / E), u.push(1 - ee / L), W += 1;
        }
      }
      for (let ee = 0; ee < L; ee++)
        for (let Q = 0; Q < E; Q++) {
          const de = d + Q + V * ee, fe = d + Q + V * (ee + 1), H = d + (Q + 1) + V * (ee + 1), re = d + (Q + 1) + V * ee;
          l.push(de, fe, re), l.push(fe, H, re), Y += 6;
        }
      s.addGroup(g, Y, X), g += Y, d += W;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new yn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function xn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const i in r[t]) {
      const n = r[t][i];
      n && (n.isColor || n.isMatrix3 || n.isMatrix4 || n.isVector2 || n.isVector3 || n.isVector4 || n.isTexture || n.isQuaternion) ? n.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = n.clone() : Array.isArray(n) ? e[t][i] = n.slice() : e[t][i] = n;
    }
  }
  return e;
}
function Lt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const i = xn(r[t]);
    for (const n in i)
      e[n] = i[n];
  }
  return e;
}
function Mf(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function au(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : qe.workingColorSpace;
}
const yf = { clone: xn, merge: Lt };
var Sf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Tf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class er extends Zn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Sf, this.fragmentShader = Tf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1,
      clipCullDistance: !1,
      multiDraw: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = xn(e.uniforms), this.uniformsGroups = Mf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const n in this.uniforms) {
      const a = this.uniforms[n].value;
      a && a.isTexture ? t.uniforms[n] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[n] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[n] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[n] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[n] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[n] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[n] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[n] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const n in this.extensions)
      this.extensions[n] === !0 && (i[n] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class su extends Gt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ot(), this.projectionMatrix = new ot(), this.projectionMatrixInverse = new ot(), this.coordinateSystem = Pi;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
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
const zi = /* @__PURE__ */ new D(), sc = /* @__PURE__ */ new be(), oc = /* @__PURE__ */ new be();
class Yt extends su {
  constructor(e = 50, t = 1, i = 0.1, n = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Yn * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Fn * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Yn * 2 * Math.atan(
      Math.tan(Fn * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    zi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(zi.x, zi.y).multiplyScalar(-e / zi.z), zi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(zi.x, zi.y).multiplyScalar(-e / zi.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, sc, oc), t.subVectors(oc, sc);
  }
  setViewOffset(e, t, i, n, a, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = a, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Fn * 0.5 * this.fov) / this.zoom, i = 2 * t, n = this.aspect * i, a = -0.5 * n;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      a += o.offsetX * n / l, t -= o.offsetY * i / c, n *= o.width / l, i *= o.height / c;
    }
    const s = this.filmOffset;
    s !== 0 && (a += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(a, a + n, t, t - i, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Zr = -90, Jr = 1;
class Ef extends Gt {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const n = new Yt(Zr, Jr, e, t);
    n.layers = this.layers, this.add(n);
    const a = new Yt(Zr, Jr, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Yt(Zr, Jr, e, t);
    o.layers = this.layers, this.add(o);
    const s = new Yt(Zr, Jr, e, t);
    s.layers = this.layers, this.add(s);
    const l = new Yt(Zr, Jr, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Yt(Zr, Jr, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, n, a, o, s, l] = t;
    for (const c of t)
      this.remove(c);
    if (e === Pi)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), n.up.set(0, 1, 0), n.lookAt(-1, 0, 0), a.up.set(0, 0, -1), a.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), s.up.set(0, 1, 0), s.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Ba)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), n.up.set(0, -1, 0), n.lookAt(1, 0, 0), a.up.set(0, 0, 1), a.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), s.up.set(0, -1, 0), s.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: n } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [a, o, s, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), g = e.getActiveMipmapLevel(), m = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0, n), e.render(t, a), e.setRenderTarget(i, 1, n), e.render(t, o), e.setRenderTarget(i, 2, n), e.render(t, s), e.setRenderTarget(i, 3, n), e.render(t, l), e.setRenderTarget(i, 4, n), e.render(t, c), i.texture.generateMipmaps = _, e.setRenderTarget(i, 5, n), e.render(t, h), e.setRenderTarget(u, d, g), e.xr.enabled = m, i.texture.needsPMREMUpdate = !0;
  }
}
class ou extends Ht {
  constructor(e, t, i, n, a, o, s, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : gn, super(e, t, i, n, a, o, s, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class bf extends Rr {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const i = { width: e, height: e, depth: 1 }, n = [i, i, i, i, i, i];
    this.texture = new ou(n, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : It;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = {
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
    }, n = new yn(5, 5, 5), a = new er({
      name: "CubemapFromEquirect",
      uniforms: xn(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: zt,
      blending: qi
    });
    a.uniforms.tEquirect.value = t;
    const o = new Ut(n, a), s = t.minFilter;
    return t.minFilter === vr && (t.minFilter = It), new Ef(1, 10, this).update(e, o), t.minFilter = s, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, i, n) {
    const a = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, i, n);
    e.setRenderTarget(a);
  }
}
const Us = /* @__PURE__ */ new D(), Af = /* @__PURE__ */ new D(), wf = /* @__PURE__ */ new Ne();
class Hi {
  constructor(e = new D(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, n) {
    return this.normal.set(e, t, i), this.constant = n, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const n = Us.subVectors(i, t).cross(Af.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
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
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(Us), n = this.normal.dot(i);
    if (n === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / n;
    return a < 0 || a > 1 ? null : t.copy(e.start).addScaledVector(i, a);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
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
    const i = t || wf.getNormalMatrix(e), n = this.coplanarPoint(Us).applyMatrix4(e), a = this.normal.applyMatrix3(i).normalize();
    return this.constant = -n.dot(a), this;
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
const hr = /* @__PURE__ */ new Fo(), xa = /* @__PURE__ */ new D();
class Bo {
  constructor(e = new Hi(), t = new Hi(), i = new Hi(), n = new Hi(), a = new Hi(), o = new Hi()) {
    this.planes = [e, t, i, n, a, o];
  }
  set(e, t, i, n, a, o) {
    const s = this.planes;
    return s[0].copy(e), s[1].copy(t), s[2].copy(i), s[3].copy(n), s[4].copy(a), s[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = Pi) {
    const i = this.planes, n = e.elements, a = n[0], o = n[1], s = n[2], l = n[3], c = n[4], h = n[5], u = n[6], d = n[7], g = n[8], m = n[9], _ = n[10], f = n[11], p = n[12], y = n[13], v = n[14], T = n[15];
    if (i[0].setComponents(l - a, d - c, f - g, T - p).normalize(), i[1].setComponents(l + a, d + c, f + g, T + p).normalize(), i[2].setComponents(l + o, d + h, f + m, T + y).normalize(), i[3].setComponents(l - o, d - h, f - m, T - y).normalize(), i[4].setComponents(l - s, d - u, f - _, T - v).normalize(), t === Pi)
      i[5].setComponents(l + s, d + u, f + _, T + v).normalize();
    else if (t === Ba)
      i[5].setComponents(s, u, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(hr);
  }
  intersectsSprite(e) {
    return hr.center.set(0, 0, 0), hr.radius = 0.7071067811865476, hr.applyMatrix4(e.matrixWorld), this.intersectsSphere(hr);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, n = -e.radius;
    for (let a = 0; a < 6; a++)
      if (t[a].distanceToPoint(i) < n)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const n = t[i];
      if (xa.x = n.normal.x > 0 ? e.max.x : e.min.x, xa.y = n.normal.y > 0 ? e.max.y : e.min.y, xa.z = n.normal.z > 0 ? e.max.z : e.min.z, n.distanceToPoint(xa) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      if (t[i].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function lu() {
  let r = null, e = !1, t = null, i = null;
  function n(a, o) {
    t(a, o), i = r.requestAnimationFrame(n);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (i = r.requestAnimationFrame(n), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(i), e = !1;
    },
    setAnimationLoop: function(a) {
      t = a;
    },
    setContext: function(a) {
      r = a;
    }
  };
}
function Rf(r, e) {
  const t = e.isWebGL2, i = /* @__PURE__ */ new WeakMap();
  function n(c, h) {
    const u = c.array, d = c.usage, g = u.byteLength, m = r.createBuffer();
    r.bindBuffer(h, m), r.bufferData(h, u, d), c.onUploadCallback();
    let _;
    if (u instanceof Float32Array)
      _ = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          _ = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      _ = r.SHORT;
    else if (u instanceof Uint32Array)
      _ = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      _ = r.INT;
    else if (u instanceof Int8Array)
      _ = r.BYTE;
    else if (u instanceof Uint8Array)
      _ = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      _ = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: m,
      type: _,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version,
      size: g
    };
  }
  function a(c, h, u) {
    const d = h.array, g = h._updateRange, m = h.updateRanges;
    if (r.bindBuffer(u, c), g.count === -1 && m.length === 0 && r.bufferSubData(u, 0, d), m.length !== 0) {
      for (let _ = 0, f = m.length; _ < f; _++) {
        const p = m[_];
        t ? r.bufferSubData(
          u,
          p.start * d.BYTES_PER_ELEMENT,
          d,
          p.start,
          p.count
        ) : r.bufferSubData(
          u,
          p.start * d.BYTES_PER_ELEMENT,
          d.subarray(p.start, p.start + p.count)
        );
      }
      h.clearUpdateRanges();
    }
    g.count !== -1 && (t ? r.bufferSubData(
      u,
      g.offset * d.BYTES_PER_ELEMENT,
      d,
      g.offset,
      g.count
    ) : r.bufferSubData(
      u,
      g.offset * d.BYTES_PER_ELEMENT,
      d.subarray(g.offset, g.offset + g.count)
    ), g.count = -1), h.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), i.get(c);
  }
  function s(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = i.get(c);
    h && (r.deleteBuffer(h.buffer), i.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = i.get(c);
      (!d || d.version < c.version) && i.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = i.get(c);
    if (u === void 0)
      i.set(c, n(c, h));
    else if (u.version < c.version) {
      if (u.size !== c.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      a(u.buffer, c, h), u.version = c.version;
    }
  }
  return {
    get: o,
    remove: s,
    update: l
  };
}
class ja extends Dr {
  constructor(e = 1, t = 1, i = 1, n = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: i,
      heightSegments: n
    };
    const a = e / 2, o = t / 2, s = Math.floor(i), l = Math.floor(n), c = s + 1, h = l + 1, u = e / s, d = t / l, g = [], m = [], _ = [], f = [];
    for (let p = 0; p < h; p++) {
      const y = p * d - o;
      for (let v = 0; v < c; v++) {
        const T = v * u - a;
        m.push(T, -y, 0), _.push(0, 0, 1), f.push(v / s), f.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let y = 0; y < s; y++) {
        const v = y + c * p, T = y + c * (p + 1), C = y + 1 + c * (p + 1), b = y + 1 + c * p;
        g.push(v, T, b), g.push(T, C, b);
      }
    this.setIndex(g), this.setAttribute("position", new br(m, 3)), this.setAttribute("normal", new br(_, 3)), this.setAttribute("uv", new br(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ja(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Cf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Lf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Pf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Uf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Df = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, If = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Of = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Nf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ff = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Bf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, zf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Hf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Gf = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, kf = `#ifdef USE_IRIDESCENCE
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
#endif`, Vf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Wf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`, Xf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, jf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Yf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, qf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Kf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Zf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Jf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, $f = `#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Qf = `#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`, em = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, tm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, im = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, rm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, nm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, am = "gl_FragColor = linearToOutputTexel( gl_FragColor );", sm = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, om = `#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`, lm = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, cm = `#ifdef USE_ENVMAP
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
#endif`, hm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, um = `#ifdef USE_ENVMAP
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
#endif`, dm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, pm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, fm = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, mm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gm = `#ifdef USE_GRADIENTMAP
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
}`, _m = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, vm = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, xm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Mm = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ym = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`, Sm = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Tm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Em = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, bm = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Am = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wm = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Rm = `struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`, Cm = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Lm = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Pm = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Um = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Dm = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Im = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Om = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Nm = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Fm = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Bm = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, zm = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Hm = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Gm = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, km = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Vm = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Wm = `#ifdef USE_MORPHNORMALS
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
#endif`, Xm = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`, jm = `#ifdef USE_MORPHTARGETS
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
#endif`, Ym = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, qm = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Km = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Zm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Jm = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, $m = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Qm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, eg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, tg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, ig = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, rg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ng = `vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, ag = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, sg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, og = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, lg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, cg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, hg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ug = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, dg = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, pg = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`, fg = `float getShadowMask() {
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
}`, mg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, gg = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, _g = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, vg = `#ifdef USE_SKINNING
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
#endif`, xg = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Mg = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, yg = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Sg = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Tg = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Eg = `#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, bg = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Ag = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, wg = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Rg = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Cg = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Lg = `uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`, Pg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ug = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Dg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ig = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Og = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`, Ng = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Fg = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`, Bg = `#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, zg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Hg = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Gg = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, kg = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Vg = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`, Wg = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xg = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`, jg = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yg = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`, qg = `#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Kg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Zg = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Jg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`, $g = `#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Qg = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`, e_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, t_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`, i_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, r_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`, n_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, a_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, s_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, o_ = `uniform float rotation;
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
}`, l_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Oe = {
  alphahash_fragment: Cf,
  alphahash_pars_fragment: Lf,
  alphamap_fragment: Pf,
  alphamap_pars_fragment: Uf,
  alphatest_fragment: Df,
  alphatest_pars_fragment: If,
  aomap_fragment: Of,
  aomap_pars_fragment: Nf,
  batching_pars_vertex: Ff,
  batching_vertex: Bf,
  begin_vertex: zf,
  beginnormal_vertex: Hf,
  bsdfs: Gf,
  iridescence_fragment: kf,
  bumpmap_pars_fragment: Vf,
  clipping_planes_fragment: Wf,
  clipping_planes_pars_fragment: Xf,
  clipping_planes_pars_vertex: jf,
  clipping_planes_vertex: Yf,
  color_fragment: qf,
  color_pars_fragment: Kf,
  color_pars_vertex: Zf,
  color_vertex: Jf,
  common: $f,
  cube_uv_reflection_fragment: Qf,
  defaultnormal_vertex: em,
  displacementmap_pars_vertex: tm,
  displacementmap_vertex: im,
  emissivemap_fragment: rm,
  emissivemap_pars_fragment: nm,
  colorspace_fragment: am,
  colorspace_pars_fragment: sm,
  envmap_fragment: om,
  envmap_common_pars_fragment: lm,
  envmap_pars_fragment: cm,
  envmap_pars_vertex: hm,
  envmap_physical_pars_fragment: Sm,
  envmap_vertex: um,
  fog_vertex: dm,
  fog_pars_vertex: pm,
  fog_fragment: fm,
  fog_pars_fragment: mm,
  gradientmap_pars_fragment: gm,
  lightmap_fragment: _m,
  lightmap_pars_fragment: vm,
  lights_lambert_fragment: xm,
  lights_lambert_pars_fragment: Mm,
  lights_pars_begin: ym,
  lights_toon_fragment: Tm,
  lights_toon_pars_fragment: Em,
  lights_phong_fragment: bm,
  lights_phong_pars_fragment: Am,
  lights_physical_fragment: wm,
  lights_physical_pars_fragment: Rm,
  lights_fragment_begin: Cm,
  lights_fragment_maps: Lm,
  lights_fragment_end: Pm,
  logdepthbuf_fragment: Um,
  logdepthbuf_pars_fragment: Dm,
  logdepthbuf_pars_vertex: Im,
  logdepthbuf_vertex: Om,
  map_fragment: Nm,
  map_pars_fragment: Fm,
  map_particle_fragment: Bm,
  map_particle_pars_fragment: zm,
  metalnessmap_fragment: Hm,
  metalnessmap_pars_fragment: Gm,
  morphinstance_vertex: km,
  morphcolor_vertex: Vm,
  morphnormal_vertex: Wm,
  morphtarget_pars_vertex: Xm,
  morphtarget_vertex: jm,
  normal_fragment_begin: Ym,
  normal_fragment_maps: qm,
  normal_pars_fragment: Km,
  normal_pars_vertex: Zm,
  normal_vertex: Jm,
  normalmap_pars_fragment: $m,
  clearcoat_normal_fragment_begin: Qm,
  clearcoat_normal_fragment_maps: eg,
  clearcoat_pars_fragment: tg,
  iridescence_pars_fragment: ig,
  opaque_fragment: rg,
  packing: ng,
  premultiplied_alpha_fragment: ag,
  project_vertex: sg,
  dithering_fragment: og,
  dithering_pars_fragment: lg,
  roughnessmap_fragment: cg,
  roughnessmap_pars_fragment: hg,
  shadowmap_pars_fragment: ug,
  shadowmap_pars_vertex: dg,
  shadowmap_vertex: pg,
  shadowmask_pars_fragment: fg,
  skinbase_vertex: mg,
  skinning_pars_vertex: gg,
  skinning_vertex: _g,
  skinnormal_vertex: vg,
  specularmap_fragment: xg,
  specularmap_pars_fragment: Mg,
  tonemapping_fragment: yg,
  tonemapping_pars_fragment: Sg,
  transmission_fragment: Tg,
  transmission_pars_fragment: Eg,
  uv_pars_fragment: bg,
  uv_pars_vertex: Ag,
  uv_vertex: wg,
  worldpos_vertex: Rg,
  background_vert: Cg,
  background_frag: Lg,
  backgroundCube_vert: Pg,
  backgroundCube_frag: Ug,
  cube_vert: Dg,
  cube_frag: Ig,
  depth_vert: Og,
  depth_frag: Ng,
  distanceRGBA_vert: Fg,
  distanceRGBA_frag: Bg,
  equirect_vert: zg,
  equirect_frag: Hg,
  linedashed_vert: Gg,
  linedashed_frag: kg,
  meshbasic_vert: Vg,
  meshbasic_frag: Wg,
  meshlambert_vert: Xg,
  meshlambert_frag: jg,
  meshmatcap_vert: Yg,
  meshmatcap_frag: qg,
  meshnormal_vert: Kg,
  meshnormal_frag: Zg,
  meshphong_vert: Jg,
  meshphong_frag: $g,
  meshphysical_vert: Qg,
  meshphysical_frag: e_,
  meshtoon_vert: t_,
  meshtoon_frag: i_,
  points_vert: r_,
  points_frag: n_,
  shadow_vert: a_,
  shadow_frag: s_,
  sprite_vert: o_,
  sprite_frag: l_
}, ce = {
  common: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ne() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ne() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ne() },
    normalScale: { value: /* @__PURE__ */ new be(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ne() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ne() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new We(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ne() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new We(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new be(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ne() },
    alphaTest: { value: 0 }
  }
}, di = {
  basic: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.specularmap,
      ce.envmap,
      ce.aomap,
      ce.lightmap,
      ce.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.specularmap,
      ce.envmap,
      ce.aomap,
      ce.lightmap,
      ce.emissivemap,
      ce.bumpmap,
      ce.normalmap,
      ce.displacementmap,
      ce.fog,
      ce.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.specularmap,
      ce.envmap,
      ce.aomap,
      ce.lightmap,
      ce.emissivemap,
      ce.bumpmap,
      ce.normalmap,
      ce.displacementmap,
      ce.fog,
      ce.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        specular: { value: /* @__PURE__ */ new We(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.envmap,
      ce.aomap,
      ce.lightmap,
      ce.emissivemap,
      ce.bumpmap,
      ce.normalmap,
      ce.displacementmap,
      ce.roughnessmap,
      ce.metalnessmap,
      ce.fog,
      ce.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.aomap,
      ce.lightmap,
      ce.emissivemap,
      ce.bumpmap,
      ce.normalmap,
      ce.displacementmap,
      ce.gradientmap,
      ce.fog,
      ce.lights,
      {
        emissive: { value: /* @__PURE__ */ new We(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.bumpmap,
      ce.normalmap,
      ce.displacementmap,
      ce.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Lt([
      ce.points,
      ce.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.bumpmap,
      ce.normalmap,
      ce.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Lt([
      ce.sprite,
      ce.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ne() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ne() }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Lt([
      ce.common,
      ce.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Lt([
      ce.lights,
      ce.fog,
      {
        color: { value: /* @__PURE__ */ new We(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
di.physical = {
  uniforms: /* @__PURE__ */ Lt([
    di.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ne() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new be(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ne() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new We(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ne() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new be() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ne() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new We(0) },
      specularColor: { value: /* @__PURE__ */ new We(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ne() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ne() },
      anisotropyVector: { value: /* @__PURE__ */ new be() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ne() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const Ma = { r: 0, b: 0, g: 0 }, ur = /* @__PURE__ */ new xi(), c_ = /* @__PURE__ */ new ot();
function h_(r, e, t, i, n, a, o) {
  const s = new We(0);
  let l = a === !0 ? 0 : 1, c, h, u = null, d = 0, g = null;
  function m(f, p) {
    let y = !1, v = p.isScene === !0 ? p.background : null;
    v && v.isTexture && (v = (p.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? _(s, l) : v && v.isColor && (_(v, 1), y = !0);
    const T = r.xr.getEnvironmentBlendMode();
    T === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : T === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (r.autoClear || y) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), v && (v.isCubeTexture || v.mapping === Wa) ? (h === void 0 && (h = new Ut(
      new yn(1, 1, 1),
      new er({
        name: "BackgroundCubeMaterial",
        uniforms: xn(di.backgroundCube.uniforms),
        vertexShader: di.backgroundCube.vertexShader,
        fragmentShader: di.backgroundCube.fragmentShader,
        side: zt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, b, E) {
      this.matrixWorld.copyPosition(E.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(h)), ur.copy(p.backgroundRotation), ur.x *= -1, ur.y *= -1, ur.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (ur.y *= -1, ur.z *= -1), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(ur)), h.material.toneMapped = qe.getTransfer(v.colorSpace) !== $e, (u !== v || d !== v.version || g !== r.toneMapping) && (h.material.needsUpdate = !0, u = v, d = v.version, g = r.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new Ut(
      new ja(2, 2),
      new er({
        name: "BackgroundMaterial",
        uniforms: xn(di.background.uniforms),
        vertexShader: di.background.vertexShader,
        fragmentShader: di.background.fragmentShader,
        side: Qi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, c.material.toneMapped = qe.getTransfer(v.colorSpace) !== $e, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || g !== r.toneMapping) && (c.material.needsUpdate = !0, u = v, d = v.version, g = r.toneMapping), c.layers.enableAll(), f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(f, p) {
    f.getRGB(Ma, au(r)), i.buffers.color.setClear(Ma.r, Ma.g, Ma.b, p, o);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(f, p = 1) {
      s.set(f), l = p, _(s, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(f) {
      l = f, _(s, l);
    },
    render: m
  };
}
function u_(r, e, t, i) {
  const n = r.getParameter(r.MAX_VERTEX_ATTRIBS), a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = i.isWebGL2 || a !== null, s = {}, l = f(null);
  let c = l, h = !1;
  function u(P, V, B, W, Y) {
    let q = !1;
    if (o) {
      const ee = _(W, B, V);
      c !== ee && (c = ee, g(c.object)), q = p(P, W, B, Y), q && y(P, W, B, Y);
    } else {
      const ee = V.wireframe === !0;
      (c.geometry !== W.id || c.program !== B.id || c.wireframe !== ee) && (c.geometry = W.id, c.program = B.id, c.wireframe = ee, q = !0);
    }
    Y !== null && t.update(Y, r.ELEMENT_ARRAY_BUFFER), (q || h) && (h = !1, L(P, V, B, W), Y !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function d() {
    return i.isWebGL2 ? r.createVertexArray() : a.createVertexArrayOES();
  }
  function g(P) {
    return i.isWebGL2 ? r.bindVertexArray(P) : a.bindVertexArrayOES(P);
  }
  function m(P) {
    return i.isWebGL2 ? r.deleteVertexArray(P) : a.deleteVertexArrayOES(P);
  }
  function _(P, V, B) {
    const W = B.wireframe === !0;
    let Y = s[P.id];
    Y === void 0 && (Y = {}, s[P.id] = Y);
    let q = Y[V.id];
    q === void 0 && (q = {}, Y[V.id] = q);
    let ee = q[W];
    return ee === void 0 && (ee = f(d()), q[W] = ee), ee;
  }
  function f(P) {
    const V = [], B = [], W = [];
    for (let Y = 0; Y < n; Y++)
      V[Y] = 0, B[Y] = 0, W[Y] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: V,
      enabledAttributes: B,
      attributeDivisors: W,
      object: P,
      attributes: {},
      index: null
    };
  }
  function p(P, V, B, W) {
    const Y = c.attributes, q = V.attributes;
    let ee = 0;
    const Q = B.getAttributes();
    for (const de in Q)
      if (Q[de].location >= 0) {
        const fe = Y[de];
        let H = q[de];
        if (H === void 0 && (de === "instanceMatrix" && P.instanceMatrix && (H = P.instanceMatrix), de === "instanceColor" && P.instanceColor && (H = P.instanceColor)), fe === void 0 || fe.attribute !== H || H && fe.data !== H.data)
          return !0;
        ee++;
      }
    return c.attributesNum !== ee || c.index !== W;
  }
  function y(P, V, B, W) {
    const Y = {}, q = V.attributes;
    let ee = 0;
    const Q = B.getAttributes();
    for (const de in Q)
      if (Q[de].location >= 0) {
        let fe = q[de];
        fe === void 0 && (de === "instanceMatrix" && P.instanceMatrix && (fe = P.instanceMatrix), de === "instanceColor" && P.instanceColor && (fe = P.instanceColor));
        const H = {};
        H.attribute = fe, fe && fe.data && (H.data = fe.data), Y[de] = H, ee++;
      }
    c.attributes = Y, c.attributesNum = ee, c.index = W;
  }
  function v() {
    const P = c.newAttributes;
    for (let V = 0, B = P.length; V < B; V++)
      P[V] = 0;
  }
  function T(P) {
    C(P, 0);
  }
  function C(P, V) {
    const B = c.newAttributes, W = c.enabledAttributes, Y = c.attributeDivisors;
    B[P] = 1, W[P] === 0 && (r.enableVertexAttribArray(P), W[P] = 1), Y[P] !== V && ((i.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, V), Y[P] = V);
  }
  function b() {
    const P = c.newAttributes, V = c.enabledAttributes;
    for (let B = 0, W = V.length; B < W; B++)
      V[B] !== P[B] && (r.disableVertexAttribArray(B), V[B] = 0);
  }
  function E(P, V, B, W, Y, q, ee) {
    ee === !0 ? r.vertexAttribIPointer(P, V, B, Y, q) : r.vertexAttribPointer(P, V, B, W, Y, q);
  }
  function L(P, V, B, W) {
    if (i.isWebGL2 === !1 && (P.isInstancedMesh || W.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const Y = W.attributes, q = B.getAttributes(), ee = V.defaultAttributeValues;
    for (const Q in q) {
      const de = q[Q];
      if (de.location >= 0) {
        let fe = Y[Q];
        if (fe === void 0 && (Q === "instanceMatrix" && P.instanceMatrix && (fe = P.instanceMatrix), Q === "instanceColor" && P.instanceColor && (fe = P.instanceColor)), fe !== void 0) {
          const H = fe.normalized, re = fe.itemSize, pe = t.get(fe);
          if (pe === void 0)
            continue;
          const we = pe.buffer, _e = pe.type, me = pe.bytesPerElement, je = i.isWebGL2 === !0 && (_e === r.INT || _e === r.UNSIGNED_INT || fe.gpuType === Hh);
          if (fe.isInterleavedBufferAttribute) {
            const Ae = fe.data, O = Ae.stride, pt = fe.offset;
            if (Ae.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < de.locationSize; xe++)
                C(de.location + xe, Ae.meshPerAttribute);
              P.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = Ae.meshPerAttribute * Ae.count);
            } else
              for (let xe = 0; xe < de.locationSize; xe++)
                T(de.location + xe);
            r.bindBuffer(r.ARRAY_BUFFER, we);
            for (let xe = 0; xe < de.locationSize; xe++)
              E(
                de.location + xe,
                re / de.locationSize,
                _e,
                H,
                O * me,
                (pt + re / de.locationSize * xe) * me,
                je
              );
          } else {
            if (fe.isInstancedBufferAttribute) {
              for (let Ae = 0; Ae < de.locationSize; Ae++)
                C(de.location + Ae, fe.meshPerAttribute);
              P.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = fe.meshPerAttribute * fe.count);
            } else
              for (let Ae = 0; Ae < de.locationSize; Ae++)
                T(de.location + Ae);
            r.bindBuffer(r.ARRAY_BUFFER, we);
            for (let Ae = 0; Ae < de.locationSize; Ae++)
              E(
                de.location + Ae,
                re / de.locationSize,
                _e,
                H,
                re * me,
                re / de.locationSize * Ae * me,
                je
              );
          }
        } else if (ee !== void 0) {
          const H = ee[Q];
          if (H !== void 0)
            switch (H.length) {
              case 2:
                r.vertexAttrib2fv(de.location, H);
                break;
              case 3:
                r.vertexAttrib3fv(de.location, H);
                break;
              case 4:
                r.vertexAttrib4fv(de.location, H);
                break;
              default:
                r.vertexAttrib1fv(de.location, H);
            }
        }
      }
    }
    b();
  }
  function X() {
    j();
    for (const P in s) {
      const V = s[P];
      for (const B in V) {
        const W = V[B];
        for (const Y in W)
          m(W[Y].object), delete W[Y];
        delete V[B];
      }
      delete s[P];
    }
  }
  function M(P) {
    if (s[P.id] === void 0)
      return;
    const V = s[P.id];
    for (const B in V) {
      const W = V[B];
      for (const Y in W)
        m(W[Y].object), delete W[Y];
      delete V[B];
    }
    delete s[P.id];
  }
  function w(P) {
    for (const V in s) {
      const B = s[V];
      if (B[P.id] === void 0)
        continue;
      const W = B[P.id];
      for (const Y in W)
        m(W[Y].object), delete W[Y];
      delete B[P.id];
    }
  }
  function j() {
    K(), h = !0, c !== l && (c = l, g(c.object));
  }
  function K() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: u,
    reset: j,
    resetDefaultState: K,
    dispose: X,
    releaseStatesOfGeometry: M,
    releaseStatesOfProgram: w,
    initAttributes: v,
    enableAttribute: T,
    disableUnusedAttributes: b
  };
}
function d_(r, e, t, i) {
  const n = i.isWebGL2;
  let a;
  function o(h) {
    a = h;
  }
  function s(h, u) {
    r.drawArrays(a, h, u), t.update(u, a, 1);
  }
  function l(h, u, d) {
    if (d === 0)
      return;
    let g, m;
    if (n)
      g = r, m = "drawArraysInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", g === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[m](a, h, u, d), t.update(u, a, d);
  }
  function c(h, u, d) {
    if (d === 0)
      return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null)
      for (let m = 0; m < d; m++)
        this.render(h[m], u[m]);
    else {
      g.multiDrawArraysWEBGL(a, h, 0, u, 0, d);
      let m = 0;
      for (let _ = 0; _ < d; _++)
        m += u[_];
      t.update(m, a, 1);
    }
  }
  this.setMode = o, this.render = s, this.renderInstances = l, this.renderMultiDraw = c;
}
function p_(r, e, t) {
  let i;
  function n() {
    if (i !== void 0)
      return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const E = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(E) {
    if (E === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      E = "mediump";
    }
    return E === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let s = t.precision !== void 0 ? t.precision : "highp";
  const l = a(s);
  l !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", l, "instead."), s = l);
  const c = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), f = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), y = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, T = o || e.has("OES_texture_float"), C = v && T, b = o ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: n,
    getMaxPrecision: a,
    precision: s,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: g,
    maxCubemapSize: m,
    maxAttributes: _,
    maxVertexUniforms: f,
    maxVaryings: p,
    maxFragmentUniforms: y,
    vertexTextures: v,
    floatFragmentTextures: T,
    floatVertexTextures: C,
    maxSamples: b
  };
}
function f_(r) {
  const e = this;
  let t = null, i = 0, n = !1, a = !1;
  const o = new Hi(), s = new Ne(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const g = u.length !== 0 || d || i !== 0 || n;
    return n = d, i = u.length, g;
  }, this.beginShadows = function() {
    a = !0, h(null);
  }, this.endShadows = function() {
    a = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, g) {
    const m = u.clippingPlanes, _ = u.clipIntersection, f = u.clipShadows, p = r.get(u);
    if (!n || m === null || m.length === 0 || a && !f)
      a ? h(null) : c();
    else {
      const y = a ? 0 : i, v = y * 4;
      let T = p.clippingState || null;
      l.value = T, T = h(m, d, v, g);
      for (let C = 0; C !== v; ++C)
        T[C] = t[C];
      p.clippingState = T, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(u, d, g, m) {
    const _ = u !== null ? u.length : 0;
    let f = null;
    if (_ !== 0) {
      if (f = l.value, m !== !0 || f === null) {
        const p = g + _ * 4, y = d.matrixWorldInverse;
        s.getNormalMatrix(y), (f === null || f.length < p) && (f = new Float32Array(p));
        for (let v = 0, T = g; v !== _; ++v, T += 4)
          o.copy(u[v]).applyMatrix4(y, s), o.normal.toArray(f, T), f[T + 3] = o.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, f;
  }
}
function m_(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, s) {
    return s === so ? o.mapping = gn : s === oo && (o.mapping = _n), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const s = o.mapping;
      if (s === so || s === oo)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new bf(l.height);
            return c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", n), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function n(o) {
    const s = o.target;
    s.removeEventListener("dispose", n);
    const l = e.get(s);
    l !== void 0 && (e.delete(s), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: a
  };
}
class g_ extends su {
  constructor(e = -1, t = 1, i = 1, n = -1, a = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = n, this.near = a, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, n, a, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = a, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
    let a = i - e, o = i + e, s = n + t, l = n - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      a += c * this.view.offsetX, o = a + c * this.view.width, s -= h * this.view.offsetY, l = s - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(a, o, s, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const nn = 4, lc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], gr = 20, Ds = /* @__PURE__ */ new g_(), cc = /* @__PURE__ */ new We();
let Is = null, Os = 0, Ns = 0;
const fr = (1 + Math.sqrt(5)) / 2, $r = 1 / fr, hc = [
  /* @__PURE__ */ new D(1, 1, 1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(0, fr, $r),
  /* @__PURE__ */ new D(0, fr, -$r),
  /* @__PURE__ */ new D($r, 0, fr),
  /* @__PURE__ */ new D(-$r, 0, fr),
  /* @__PURE__ */ new D(fr, $r, 0),
  /* @__PURE__ */ new D(-fr, $r, 0)
];
class uc {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, n = 100) {
    Is = this._renderer.getRenderTarget(), Os = this._renderer.getActiveCubeFace(), Ns = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const a = this._allocateTargets();
    return a.depthBuffer = !0, this._sceneToCubeUV(e, i, n, a), t > 0 && this._blur(a, 0, 0, t), this._applyPMREM(a), this._cleanup(a), a;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = fc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = pc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Is, Os, Ns), e.scissorTest = !1, ya(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === gn || e.mapping === _n ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Is = this._renderer.getRenderTarget(), Os = this._renderer.getActiveCubeFace(), Ns = this._renderer.getActiveMipmapLevel();
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = {
      magFilter: It,
      minFilter: It,
      generateMipmaps: !1,
      type: jn,
      format: ci,
      colorSpace: ir,
      depthBuffer: !1
    }, n = dc(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = dc(e, t, i);
      const { _lodMax: a } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = __(a)), this._blurMaterial = v_(a, e, t);
    }
    return n;
  }
  _compileMaterial(e) {
    const t = new Ut(this._lodPlanes[0], e);
    this._renderer.compile(t, Ds);
  }
  _sceneToCubeUV(e, t, i, n) {
    const a = new Yt(90, 1, t, i), o = [1, -1, 1, 1, 1, 1], s = [1, 1, 1, -1, -1, -1], l = this._renderer, c = l.autoClear, h = l.toneMapping;
    l.getClearColor(cc), l.toneMapping = Ki, l.autoClear = !1;
    const u = new iu({
      name: "PMREM.Background",
      side: zt,
      depthWrite: !1,
      depthTest: !1
    }), d = new Ut(new yn(), u);
    let g = !1;
    const m = e.background;
    m ? m.isColor && (u.color.copy(m), e.background = null, g = !0) : (u.color.copy(cc), g = !0);
    for (let _ = 0; _ < 6; _++) {
      const f = _ % 3;
      f === 0 ? (a.up.set(0, o[_], 0), a.lookAt(s[_], 0, 0)) : f === 1 ? (a.up.set(0, 0, o[_]), a.lookAt(0, s[_], 0)) : (a.up.set(0, o[_], 0), a.lookAt(0, 0, s[_]));
      const p = this._cubeSize;
      ya(n, f * p, _ > 2 ? p : 0, p, p), l.setRenderTarget(n), g && l.render(d, a), l.render(e, a);
    }
    d.geometry.dispose(), d.material.dispose(), l.toneMapping = h, l.autoClear = c, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, n = e.mapping === gn || e.mapping === _n;
    n ? (this._cubemapMaterial === null && (this._cubemapMaterial = fc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = pc());
    const a = n ? this._cubemapMaterial : this._equirectMaterial, o = new Ut(this._lodPlanes[0], a), s = a.uniforms;
    s.envMap.value = e;
    const l = this._cubeSize;
    ya(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(o, Ds);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    for (let n = 1; n < this._lodPlanes.length; n++) {
      const a = Math.sqrt(this._sigmas[n] * this._sigmas[n] - this._sigmas[n - 1] * this._sigmas[n - 1]), o = hc[(n - 1) % hc.length];
      this._blur(e, n - 1, n, a, o);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, n, a) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      i,
      n,
      "latitudinal",
      a
    ), this._halfBlur(
      o,
      e,
      i,
      i,
      n,
      "longitudinal",
      a
    );
  }
  _halfBlur(e, t, i, n, a, o, s) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Ut(this._lodPlanes[n], c), d = c.uniforms, g = this._sizeLods[i] - 1, m = isFinite(a) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * gr - 1), _ = a / m, f = isFinite(a) ? 1 + Math.floor(h * _) : gr;
    f > gr && console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gr}`);
    const p = [];
    let y = 0;
    for (let E = 0; E < gr; ++E) {
      const L = E / _, X = Math.exp(-L * L / 2);
      p.push(X), E === 0 ? y += X : E < f && (y += 2 * X);
    }
    for (let E = 0; E < p.length; E++)
      p[E] = p[E] / y;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = p, d.latitudinal.value = o === "latitudinal", s && (d.poleAxis.value = s);
    const { _lodMax: v } = this;
    d.dTheta.value = m, d.mipInt.value = v - i;
    const T = this._sizeLods[n], C = 3 * T * (n > v - nn ? n - v + nn : 0), b = 4 * (this._cubeSize - T);
    ya(t, C, b, 3 * T, 2 * T), l.setRenderTarget(t), l.render(u, Ds);
  }
}
function __(r) {
  const e = [], t = [], i = [];
  let n = r;
  const a = r - nn + 1 + lc.length;
  for (let o = 0; o < a; o++) {
    const s = Math.pow(2, n);
    t.push(s);
    let l = 1 / s;
    o > r - nn ? l = lc[o - r + nn - 1] : o === 0 && (l = 0), i.push(l);
    const c = 1 / (s - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], g = 6, m = 6, _ = 3, f = 2, p = 1, y = new Float32Array(_ * m * g), v = new Float32Array(f * m * g), T = new Float32Array(p * m * g);
    for (let b = 0; b < g; b++) {
      const E = b % 3 * 2 / 3 - 1, L = b > 2 ? 0 : -1, X = [
        E,
        L,
        0,
        E + 2 / 3,
        L,
        0,
        E + 2 / 3,
        L + 1,
        0,
        E,
        L,
        0,
        E + 2 / 3,
        L + 1,
        0,
        E,
        L + 1,
        0
      ];
      y.set(X, _ * m * b), v.set(d, f * m * b);
      const M = [b, b, b, b, b, b];
      T.set(M, p * m * b);
    }
    const C = new Dr();
    C.setAttribute("position", new _i(y, _)), C.setAttribute("uv", new _i(v, f)), C.setAttribute("faceIndex", new _i(T, p)), e.push(C), n > nn && n--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function dc(r, e, t) {
  const i = new Rr(r, e, t);
  return i.texture.mapping = Wa, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function ya(r, e, t, i, n) {
  r.viewport.set(e, t, i, n), r.scissor.set(e, t, i, n);
}
function v_(r, e, t) {
  const i = new Float32Array(gr), n = new D(0, 1, 0);
  return new er({
    name: "SphericalGaussianBlur",
    defines: {
      n: gr,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n }
    },
    vertexShader: zo(),
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
    blending: qi,
    depthTest: !1,
    depthWrite: !1
  });
}
function pc() {
  return new er({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: zo(),
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
    blending: qi,
    depthTest: !1,
    depthWrite: !1
  });
}
function fc() {
  return new er({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: zo(),
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
    blending: qi,
    depthTest: !1,
    depthWrite: !1
  });
}
function zo() {
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
function x_(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(s) {
    if (s && s.isTexture) {
      const l = s.mapping, c = l === so || l === oo, h = l === gn || l === _n;
      if (c || h)
        if (s.isRenderTargetTexture && s.needsPMREMUpdate === !0) {
          s.needsPMREMUpdate = !1;
          let u = e.get(s);
          return t === null && (t = new uc(r)), u = c ? t.fromEquirectangular(s, u) : t.fromCubemap(s, u), e.set(s, u), u.texture;
        } else {
          if (e.has(s))
            return e.get(s).texture;
          {
            const u = s.image;
            if (c && u && u.height > 0 || h && u && n(u)) {
              t === null && (t = new uc(r));
              const d = c ? t.fromEquirectangular(s) : t.fromCubemap(s);
              return e.set(s, d), s.addEventListener("dispose", a), d.texture;
            } else
              return null;
          }
        }
    }
    return s;
  }
  function n(s) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      s[h] !== void 0 && l++;
    return l === c;
  }
  function a(s) {
    const l = s.target;
    l.removeEventListener("dispose", a);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: i,
    dispose: o
  };
}
function M_(r) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0)
      return e[i];
    let n;
    switch (i) {
      case "WEBGL_depth_texture":
        n = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = r.getExtension(i);
    }
    return e[i] = n, n;
  }
  return {
    has: function(i) {
      return t(i) !== null;
    },
    init: function(i) {
      i.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(i) {
      const n = t(i);
      return n === null && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), n;
    }
  };
}
function y_(r, e, t, i) {
  const n = {}, a = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const m in d.attributes)
      e.remove(d.attributes[m]);
    for (const m in d.morphAttributes) {
      const _ = d.morphAttributes[m];
      for (let f = 0, p = _.length; f < p; f++)
        e.remove(_[f]);
    }
    d.removeEventListener("dispose", o), delete n[d.id];
    const g = a.get(d);
    g && (e.remove(g), a.delete(d)), i.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function s(u, d) {
    return n[d.id] === !0 || (d.addEventListener("dispose", o), n[d.id] = !0, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const m in d)
      e.update(d[m], r.ARRAY_BUFFER);
    const g = u.morphAttributes;
    for (const m in g) {
      const _ = g[m];
      for (let f = 0, p = _.length; f < p; f++)
        e.update(_[f], r.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const d = [], g = u.index, m = u.attributes.position;
    let _ = 0;
    if (g !== null) {
      const y = g.array;
      _ = g.version;
      for (let v = 0, T = y.length; v < T; v += 3) {
        const C = y[v + 0], b = y[v + 1], E = y[v + 2];
        d.push(C, b, b, E, E, C);
      }
    } else if (m !== void 0) {
      const y = m.array;
      _ = m.version;
      for (let v = 0, T = y.length / 3 - 1; v < T; v += 3) {
        const C = v + 0, b = v + 1, E = v + 2;
        d.push(C, b, b, E, E, C);
      }
    } else
      return;
    const f = new (Kh(d) ? nu : ru)(d, 1);
    f.version = _;
    const p = a.get(u);
    p && e.remove(p), a.set(u, f);
  }
  function h(u) {
    const d = a.get(u);
    if (d) {
      const g = u.index;
      g !== null && d.version < g.version && c(u);
    } else
      c(u);
    return a.get(u);
  }
  return {
    get: s,
    update: l,
    getWireframeAttribute: h
  };
}
function S_(r, e, t, i) {
  const n = i.isWebGL2;
  let a;
  function o(g) {
    a = g;
  }
  let s, l;
  function c(g) {
    s = g.type, l = g.bytesPerElement;
  }
  function h(g, m) {
    r.drawElements(a, m, s, g * l), t.update(m, a, 1);
  }
  function u(g, m, _) {
    if (_ === 0)
      return;
    let f, p;
    if (n)
      f = r, p = "drawElementsInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", f === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[p](a, m, s, g * l, _), t.update(m, a, _);
  }
  function d(g, m, _) {
    if (_ === 0)
      return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let p = 0; p < _; p++)
        this.render(g[p] / l, m[p]);
    else {
      f.multiDrawElementsWEBGL(a, m, 0, s, g, 0, _);
      let p = 0;
      for (let y = 0; y < _; y++)
        p += m[y];
      t.update(p, a, 1);
    }
  }
  this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = u, this.renderMultiDraw = d;
}
function T_(r) {
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
  function i(a, o, s) {
    switch (t.calls++, o) {
      case r.TRIANGLES:
        t.triangles += s * (a / 3);
        break;
      case r.LINES:
        t.lines += s * (a / 2);
        break;
      case r.LINE_STRIP:
        t.lines += s * (a - 1);
        break;
      case r.LINE_LOOP:
        t.lines += s * a;
        break;
      case r.POINTS:
        t.points += s * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function n() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: n,
    update: i
  };
}
function E_(r, e) {
  return r[0] - e[0];
}
function b_(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function A_(r, e, t) {
  const i = {}, n = new Float32Array(8), a = /* @__PURE__ */ new WeakMap(), o = new et(), s = [];
  for (let c = 0; c < 8; c++)
    s[c] = [c, 0];
  function l(c, h, u) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, m = g !== void 0 ? g.length : 0;
      let _ = a.get(h);
      if (_ === void 0 || _.count !== m) {
        let f = function() {
          w.dispose(), a.delete(h), h.removeEventListener("dispose", f);
        };
        _ !== void 0 && _.texture.dispose();
        const p = h.morphAttributes.position !== void 0, y = h.morphAttributes.normal !== void 0, v = h.morphAttributes.color !== void 0, T = h.morphAttributes.position || [], C = h.morphAttributes.normal || [], b = h.morphAttributes.color || [];
        let E = 0;
        p === !0 && (E = 1), y === !0 && (E = 2), v === !0 && (E = 3);
        let L = h.attributes.position.count * E, X = 1;
        L > e.maxTextureSize && (X = Math.ceil(L / e.maxTextureSize), L = e.maxTextureSize);
        const M = new Float32Array(L * X * 4 * m), w = new $h(M, L, X, m);
        w.type = Li, w.needsUpdate = !0;
        const j = E * 4;
        for (let K = 0; K < m; K++) {
          const P = T[K], V = C[K], B = b[K], W = L * X * 4 * K;
          for (let Y = 0; Y < P.count; Y++) {
            const q = Y * j;
            p === !0 && (o.fromBufferAttribute(P, Y), M[W + q + 0] = o.x, M[W + q + 1] = o.y, M[W + q + 2] = o.z, M[W + q + 3] = 0), y === !0 && (o.fromBufferAttribute(V, Y), M[W + q + 4] = o.x, M[W + q + 5] = o.y, M[W + q + 6] = o.z, M[W + q + 7] = 0), v === !0 && (o.fromBufferAttribute(B, Y), M[W + q + 8] = o.x, M[W + q + 9] = o.y, M[W + q + 10] = o.z, M[W + q + 11] = B.itemSize === 4 ? o.w : 1);
          }
        }
        _ = {
          count: m,
          texture: w,
          size: new be(L, X)
        }, a.set(h, _), h.addEventListener("dispose", f);
      }
      if (c.isInstancedMesh === !0 && c.morphTexture !== null)
        u.getUniforms().setValue(r, "morphTexture", c.morphTexture, t);
      else {
        let f = 0;
        for (let y = 0; y < d.length; y++)
          f += d[y];
        const p = h.morphTargetsRelative ? 1 : 1 - f;
        u.getUniforms().setValue(r, "morphTargetBaseInfluence", p), u.getUniforms().setValue(r, "morphTargetInfluences", d);
      }
      u.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let m = i[h.id];
      if (m === void 0 || m.length !== g) {
        m = [];
        for (let v = 0; v < g; v++)
          m[v] = [v, 0];
        i[h.id] = m;
      }
      for (let v = 0; v < g; v++) {
        const T = m[v];
        T[0] = v, T[1] = d[v];
      }
      m.sort(b_);
      for (let v = 0; v < 8; v++)
        v < g && m[v][1] ? (s[v][0] = m[v][0], s[v][1] = m[v][1]) : (s[v][0] = Number.MAX_SAFE_INTEGER, s[v][1] = 0);
      s.sort(E_);
      const _ = h.morphAttributes.position, f = h.morphAttributes.normal;
      let p = 0;
      for (let v = 0; v < 8; v++) {
        const T = s[v], C = T[0], b = T[1];
        C !== Number.MAX_SAFE_INTEGER && b ? (_ && h.getAttribute("morphTarget" + v) !== _[C] && h.setAttribute("morphTarget" + v, _[C]), f && h.getAttribute("morphNormal" + v) !== f[C] && h.setAttribute("morphNormal" + v, f[C]), n[v] = b, p += b) : (_ && h.hasAttribute("morphTarget" + v) === !0 && h.deleteAttribute("morphTarget" + v), f && h.hasAttribute("morphNormal" + v) === !0 && h.deleteAttribute("morphNormal" + v), n[v] = 0);
      }
      const y = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", y), u.getUniforms().setValue(r, "morphTargetInfluences", n);
    }
  }
  return {
    update: l
  };
}
function w_(r, e, t, i) {
  let n = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const c = i.render.frame, h = l.geometry, u = e.get(l, h);
    if (n.get(u) !== c && (e.update(u), n.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", s) === !1 && l.addEventListener("dispose", s), n.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), n.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      n.get(d) !== c && (d.update(), n.set(d, c));
    }
    return u;
  }
  function o() {
    n = /* @__PURE__ */ new WeakMap();
  }
  function s(l) {
    const c = l.target;
    c.removeEventListener("dispose", s), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
class cu extends Ht {
  constructor(e, t, i, n, a, o, s, l, c, h) {
    if (h = h !== void 0 ? h : Er, h !== Er && h !== vn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && h === Er && (i = Xi), i === void 0 && h === vn && (i = Tr), super(null, n, a, o, s, l, h, i, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = s !== void 0 ? s : Pt, this.minFilter = l !== void 0 ? l : Pt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const hu = /* @__PURE__ */ new Ht(), uu = /* @__PURE__ */ new cu(1, 1);
uu.compareFunction = qh;
const du = /* @__PURE__ */ new $h(), pu = /* @__PURE__ */ new lf(), fu = /* @__PURE__ */ new ou(), mc = [], gc = [], _c = new Float32Array(16), vc = new Float32Array(9), xc = new Float32Array(4);
function Sn(r, e, t) {
  const i = r[0];
  if (i <= 0 || i > 0)
    return r;
  const n = e * t;
  let a = mc[n];
  if (a === void 0 && (a = new Float32Array(n), mc[n] = a), e !== 0) {
    i.toArray(a, 0);
    for (let o = 1, s = 0; o !== e; ++o)
      s += t, r[o].toArray(a, s);
  }
  return a;
}
function mt(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, i = r.length; t < i; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function gt(r, e) {
  for (let t = 0, i = e.length; t < i; t++)
    r[t] = e[t];
}
function Ya(r, e) {
  let t = gc[e];
  t === void 0 && (t = new Int32Array(e), gc[e] = t);
  for (let i = 0; i !== e; ++i)
    t[i] = r.allocateTextureUnit();
  return t;
}
function R_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function C_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (mt(t, e))
      return;
    r.uniform2fv(this.addr, e), gt(t, e);
  }
}
function L_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (mt(t, e))
      return;
    r.uniform3fv(this.addr, e), gt(t, e);
  }
}
function P_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (mt(t, e))
      return;
    r.uniform4fv(this.addr, e), gt(t, e);
  }
}
function U_(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (mt(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), gt(t, e);
  } else {
    if (mt(t, i))
      return;
    xc.set(i), r.uniformMatrix2fv(this.addr, !1, xc), gt(t, i);
  }
}
function D_(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (mt(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), gt(t, e);
  } else {
    if (mt(t, i))
      return;
    vc.set(i), r.uniformMatrix3fv(this.addr, !1, vc), gt(t, i);
  }
}
function I_(r, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (mt(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), gt(t, e);
  } else {
    if (mt(t, i))
      return;
    _c.set(i), r.uniformMatrix4fv(this.addr, !1, _c), gt(t, i);
  }
}
function O_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function N_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (mt(t, e))
      return;
    r.uniform2iv(this.addr, e), gt(t, e);
  }
}
function F_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (mt(t, e))
      return;
    r.uniform3iv(this.addr, e), gt(t, e);
  }
}
function B_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (mt(t, e))
      return;
    r.uniform4iv(this.addr, e), gt(t, e);
  }
}
function z_(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function H_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (mt(t, e))
      return;
    r.uniform2uiv(this.addr, e), gt(t, e);
  }
}
function G_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (mt(t, e))
      return;
    r.uniform3uiv(this.addr, e), gt(t, e);
  }
}
function k_(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (mt(t, e))
      return;
    r.uniform4uiv(this.addr, e), gt(t, e);
  }
}
function V_(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n);
  const a = this.type === r.SAMPLER_2D_SHADOW ? uu : hu;
  t.setTexture2D(e || a, n);
}
function W_(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture3D(e || pu, n);
}
function X_(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTextureCube(e || fu, n);
}
function j_(r, e, t) {
  const i = this.cache, n = t.allocateTextureUnit();
  i[0] !== n && (r.uniform1i(this.addr, n), i[0] = n), t.setTexture2DArray(e || du, n);
}
function Y_(r) {
  switch (r) {
    case 5126:
      return R_;
    case 35664:
      return C_;
    case 35665:
      return L_;
    case 35666:
      return P_;
    case 35674:
      return U_;
    case 35675:
      return D_;
    case 35676:
      return I_;
    case 5124:
    case 35670:
      return O_;
    case 35667:
    case 35671:
      return N_;
    case 35668:
    case 35672:
      return F_;
    case 35669:
    case 35673:
      return B_;
    case 5125:
      return z_;
    case 36294:
      return H_;
    case 36295:
      return G_;
    case 36296:
      return k_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return V_;
    case 35679:
    case 36299:
    case 36307:
      return W_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return X_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return j_;
  }
}
function q_(r, e) {
  r.uniform1fv(this.addr, e);
}
function K_(r, e) {
  const t = Sn(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Z_(r, e) {
  const t = Sn(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function J_(r, e) {
  const t = Sn(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function $_(r, e) {
  const t = Sn(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Q_(r, e) {
  const t = Sn(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function ev(r, e) {
  const t = Sn(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function tv(r, e) {
  r.uniform1iv(this.addr, e);
}
function iv(r, e) {
  r.uniform2iv(this.addr, e);
}
function rv(r, e) {
  r.uniform3iv(this.addr, e);
}
function nv(r, e) {
  r.uniform4iv(this.addr, e);
}
function av(r, e) {
  r.uniform1uiv(this.addr, e);
}
function sv(r, e) {
  r.uniform2uiv(this.addr, e);
}
function ov(r, e) {
  r.uniform3uiv(this.addr, e);
}
function lv(r, e) {
  r.uniform4uiv(this.addr, e);
}
function cv(r, e, t) {
  const i = this.cache, n = e.length, a = Ya(t, n);
  mt(i, a) || (r.uniform1iv(this.addr, a), gt(i, a));
  for (let o = 0; o !== n; ++o)
    t.setTexture2D(e[o] || hu, a[o]);
}
function hv(r, e, t) {
  const i = this.cache, n = e.length, a = Ya(t, n);
  mt(i, a) || (r.uniform1iv(this.addr, a), gt(i, a));
  for (let o = 0; o !== n; ++o)
    t.setTexture3D(e[o] || pu, a[o]);
}
function uv(r, e, t) {
  const i = this.cache, n = e.length, a = Ya(t, n);
  mt(i, a) || (r.uniform1iv(this.addr, a), gt(i, a));
  for (let o = 0; o !== n; ++o)
    t.setTextureCube(e[o] || fu, a[o]);
}
function dv(r, e, t) {
  const i = this.cache, n = e.length, a = Ya(t, n);
  mt(i, a) || (r.uniform1iv(this.addr, a), gt(i, a));
  for (let o = 0; o !== n; ++o)
    t.setTexture2DArray(e[o] || du, a[o]);
}
function pv(r) {
  switch (r) {
    case 5126:
      return q_;
    case 35664:
      return K_;
    case 35665:
      return Z_;
    case 35666:
      return J_;
    case 35674:
      return $_;
    case 35675:
      return Q_;
    case 35676:
      return ev;
    case 5124:
    case 35670:
      return tv;
    case 35667:
    case 35671:
      return iv;
    case 35668:
    case 35672:
      return rv;
    case 35669:
    case 35673:
      return nv;
    case 5125:
      return av;
    case 36294:
      return sv;
    case 36295:
      return ov;
    case 36296:
      return lv;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return cv;
    case 35679:
    case 36299:
    case 36307:
      return hv;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return uv;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dv;
  }
}
class fv {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = Y_(t.type);
  }
}
class mv {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = pv(t.type);
  }
}
class gv {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const n = this.seq;
    for (let a = 0, o = n.length; a !== o; ++a) {
      const s = n[a];
      s.setValue(e, t[s.id], i);
    }
  }
}
const Fs = /(\w+)(\])?(\[|\.)?/g;
function Mc(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function _v(r, e, t) {
  const i = r.name, n = i.length;
  for (Fs.lastIndex = 0; ; ) {
    const a = Fs.exec(i), o = Fs.lastIndex;
    let s = a[1];
    const l = a[2] === "]", c = a[3];
    if (l && (s = s | 0), c === void 0 || c === "[" && o + 2 === n) {
      Mc(t, c === void 0 ? new fv(s, r, e) : new mv(s, r, e));
      break;
    } else {
      let h = t.map[s];
      h === void 0 && (h = new gv(s), Mc(t, h)), t = h;
    }
  }
}
class Aa {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let n = 0; n < i; ++n) {
      const a = e.getActiveUniform(t, n), o = e.getUniformLocation(t, a.name);
      _v(a, o, this);
    }
  }
  setValue(e, t, i, n) {
    const a = this.map[t];
    a !== void 0 && a.setValue(e, i, n);
  }
  setOptional(e, t, i) {
    const n = t[i];
    n !== void 0 && this.setValue(e, i, n);
  }
  static upload(e, t, i, n) {
    for (let a = 0, o = t.length; a !== o; ++a) {
      const s = t[a], l = i[s.id];
      l.needsUpdate !== !1 && s.setValue(e, l.value, n);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let n = 0, a = e.length; n !== a; ++n) {
      const o = e[n];
      o.id in t && i.push(o);
    }
    return i;
  }
}
function yc(r, e, t) {
  const i = r.createShader(e);
  return r.shaderSource(i, t), r.compileShader(i), i;
}
const vv = 37297;
let xv = 0;
function Mv(r, e) {
  const t = r.split(`
`), i = [], n = Math.max(e - 6, 0), a = Math.min(e + 6, t.length);
  for (let o = n; o < a; o++) {
    const s = o + 1;
    i.push(`${s === e ? ">" : " "} ${s}: ${t[o]}`);
  }
  return i.join(`
`);
}
function yv(r) {
  const e = qe.getPrimaries(qe.workingColorSpace), t = qe.getPrimaries(r);
  let i;
  switch (e === t ? i = "" : e === Fa && t === Na ? i = "LinearDisplayP3ToLinearSRGB" : e === Na && t === Fa && (i = "LinearSRGBToLinearDisplayP3"), r) {
    case ir:
    case Xa:
      return [i, "LinearTransferOETF"];
    case ui:
    case Oo:
      return [i, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [i, "LinearTransferOETF"];
  }
}
function Sc(r, e, t) {
  const i = r.getShaderParameter(e, r.COMPILE_STATUS), n = r.getShaderInfoLog(e).trim();
  if (i && n === "")
    return "";
  const a = /ERROR: 0:(\d+)/.exec(n);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + n + `

` + Mv(r.getShaderSource(e), o);
  } else
    return n;
}
function Sv(r, e) {
  const t = yv(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Tv(r, e) {
  let t;
  switch (e) {
    case mp:
      t = "Linear";
      break;
    case gp:
      t = "Reinhard";
      break;
    case _p:
      t = "OptimizedCineon";
      break;
    case vp:
      t = "ACESFilmic";
      break;
    case Mp:
      t = "AgX";
      break;
    case yp:
      t = "Neutral";
      break;
    case xp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Ev(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.alphaToCoverage || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(an).join(`
`);
}
function bv(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(an).join(`
`);
}
function Av(r) {
  const e = [];
  for (const t in r) {
    const i = r[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function wv(r, e) {
  const t = {}, i = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let n = 0; n < i; n++) {
    const a = r.getActiveAttrib(e, n), o = a.name;
    let s = 1;
    a.type === r.FLOAT_MAT2 && (s = 2), a.type === r.FLOAT_MAT3 && (s = 3), a.type === r.FLOAT_MAT4 && (s = 4), t[o] = {
      type: a.type,
      location: r.getAttribLocation(e, o),
      locationSize: s
    };
  }
  return t;
}
function an(r) {
  return r !== "";
}
function Tc(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ec(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Rv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function po(r) {
  return r.replace(Rv, Lv);
}
const Cv = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"]
]);
function Lv(r, e) {
  let t = Oe[e];
  if (t === void 0) {
    const i = Cv.get(e);
    if (i !== void 0)
      t = Oe[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return po(t);
}
const Pv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function bc(r) {
  return r.replace(Pv, Uv);
}
function Uv(r, e, t, i) {
  let n = "";
  for (let a = parseInt(e); a < parseInt(t); a++)
    n += i.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return n;
}
function Ac(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;
  return r.isWebGL2 && (e += `precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`), r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Dv(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Fh ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Vd ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Ai && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Iv(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case gn:
      case _n:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Wa:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Ov(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case _n:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Nv(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Bh:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case pp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case fp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Fv(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: i, maxMip: t };
}
function Bv(r, e, t, i) {
  const n = r.getContext(), a = t.defines;
  let o = t.vertexShader, s = t.fragmentShader;
  const l = Dv(t), c = Iv(t), h = Ov(t), u = Nv(t), d = Fv(t), g = t.isWebGL2 ? "" : Ev(t), m = bv(t), _ = Av(a), f = n.createProgram();
  let p, y, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(an).join(`
`), p.length > 0 && (p += `
`), y = [
    g,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(an).join(`
`), y.length > 0 && (y += `
`)) : (p = [
    Ac(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
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
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
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
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
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
  ].filter(an).join(`
`), y = [
    g,
    Ac(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Ki ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Ki ? Oe.tonemapping_pars_fragment : "",
    t.toneMapping !== Ki ? Tv("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    Sv("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(an).join(`
`)), o = po(o), o = Tc(o, t), o = Ec(o, t), s = po(s), s = Tc(s, t), s = Ec(s, t), o = bc(o), s = bc(s), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, p = [
    m,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, y = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === kl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === kl ? "" : "#define gl_FragColor pc_fragColor",
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
  const T = v + p + o, C = v + y + s, b = yc(n, n.VERTEX_SHADER, T), E = yc(n, n.FRAGMENT_SHADER, C);
  n.attachShader(f, b), n.attachShader(f, E), t.index0AttributeName !== void 0 ? n.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && n.bindAttribLocation(f, 0, "position"), n.linkProgram(f);
  function L(j) {
    if (r.debug.checkShaderErrors) {
      const K = n.getProgramInfoLog(f).trim(), P = n.getShaderInfoLog(b).trim(), V = n.getShaderInfoLog(E).trim();
      let B = !0, W = !0;
      if (n.getProgramParameter(f, n.LINK_STATUS) === !1)
        if (B = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(n, f, b, E);
        else {
          const Y = Sc(n, b, "vertex"), q = Sc(n, E, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + n.getError() + " - VALIDATE_STATUS " + n.getProgramParameter(f, n.VALIDATE_STATUS) + `

Material Name: ` + j.name + `
Material Type: ` + j.type + `

Program Info Log: ` + K + `
` + Y + `
` + q
          );
        }
      else
        K !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", K) : (P === "" || V === "") && (W = !1);
      W && (j.diagnostics = {
        runnable: B,
        programLog: K,
        vertexShader: {
          log: P,
          prefix: p
        },
        fragmentShader: {
          log: V,
          prefix: y
        }
      });
    }
    n.deleteShader(b), n.deleteShader(E), X = new Aa(n, f), M = wv(n, f);
  }
  let X;
  this.getUniforms = function() {
    return X === void 0 && L(this), X;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && L(this), M;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return w === !1 && (w = n.getProgramParameter(f, vv)), w;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), n.deleteProgram(f), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = xv++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = b, this.fragmentShader = E, this;
}
let zv = 0;
class Hv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, n = this._getShaderStage(t), a = this._getShaderStage(i), o = this._getShaderCacheForMaterial(e);
    return o.has(n) === !1 && (o.add(n), n.usedTimes++), o.has(a) === !1 && (o.add(a), a.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
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
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new Gv(e), t.set(e, i)), i;
  }
}
class Gv {
  constructor(e) {
    this.id = zv++, this.code = e, this.usedTimes = 0;
  }
}
function kv(r, e, t, i, n, a, o) {
  const s = new eu(), l = new Hv(), c = /* @__PURE__ */ new Set(), h = [], u = n.isWebGL2, d = n.logarithmicDepthBuffer, g = n.vertexTextures;
  let m = n.precision;
  const _ = {
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
  function f(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function p(M, w, j, K, P) {
    const V = K.fog, B = P.geometry, W = M.isMeshStandardMaterial ? K.environment : null, Y = (M.isMeshStandardMaterial ? t : e).get(M.envMap || W), q = Y && Y.mapping === Wa ? Y.image.height : null, ee = _[M.type];
    M.precision !== null && (m = n.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
    const Q = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, de = Q !== void 0 ? Q.length : 0;
    let fe = 0;
    B.morphAttributes.position !== void 0 && (fe = 1), B.morphAttributes.normal !== void 0 && (fe = 2), B.morphAttributes.color !== void 0 && (fe = 3);
    let H, re, pe, we;
    if (ee) {
      const ke = di[ee];
      H = ke.vertexShader, re = ke.fragmentShader;
    } else
      H = M.vertexShader, re = M.fragmentShader, l.update(M), pe = l.getVertexShaderID(M), we = l.getFragmentShaderID(M);
    const _e = r.getRenderTarget(), me = P.isInstancedMesh === !0, je = P.isBatchedMesh === !0, Ae = !!M.map, O = !!M.matcap, pt = !!Y, xe = !!M.aoMap, Pe = !!M.lightMap, ye = !!M.bumpMap, Ge = !!M.normalMap, Ue = !!M.displacementMap, De = !!M.emissiveMap, Je = !!M.metalnessMap, R = !!M.roughnessMap, x = M.anisotropy > 0, k = M.clearcoat > 0, Z = M.iridescence > 0, te = M.sheen > 0, $ = M.transmission > 0, Ce = x && !!M.anisotropyMap, Se = k && !!M.clearcoatMap, ae = k && !!M.clearcoatNormalMap, he = k && !!M.clearcoatRoughnessMap, Le = Z && !!M.iridescenceMap, ne = Z && !!M.iridescenceThicknessMap, nt = te && !!M.sheenColorMap, Fe = te && !!M.sheenRoughnessMap, ve = !!M.specularMap, ge = !!M.specularColorMap, A = !!M.specularIntensityMap, J = $ && !!M.transmissionMap, oe = $ && !!M.thicknessMap, Te = !!M.gradientMap, U = !!M.alphaMap, ie = M.alphaTest > 0, N = !!M.alphaHash, le = !!M.extensions;
    let se = Ki;
    M.toneMapped && (_e === null || _e.isXRRenderTarget === !0) && (se = r.toneMapping);
    const Be = {
      isWebGL2: u,
      shaderID: ee,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: H,
      fragmentShader: re,
      defines: M.defines,
      customVertexShaderID: pe,
      customFragmentShaderID: we,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: m,
      batching: je,
      instancing: me,
      instancingColor: me && P.instanceColor !== null,
      instancingMorph: me && P.morphTexture !== null,
      supportsVertexTextures: g,
      outputColorSpace: _e === null ? r.outputColorSpace : _e.isXRRenderTarget === !0 ? _e.texture.colorSpace : ir,
      alphaToCoverage: !!M.alphaToCoverage,
      map: Ae,
      matcap: O,
      envMap: pt,
      envMapMode: pt && Y.mapping,
      envMapCubeUVHeight: q,
      aoMap: xe,
      lightMap: Pe,
      bumpMap: ye,
      normalMap: Ge,
      displacementMap: g && Ue,
      emissiveMap: De,
      normalMapObjectSpace: Ge && M.normalMapType === Up,
      normalMapTangentSpace: Ge && M.normalMapType === Yh,
      metalnessMap: Je,
      roughnessMap: R,
      anisotropy: x,
      anisotropyMap: Ce,
      clearcoat: k,
      clearcoatMap: Se,
      clearcoatNormalMap: ae,
      clearcoatRoughnessMap: he,
      iridescence: Z,
      iridescenceMap: Le,
      iridescenceThicknessMap: ne,
      sheen: te,
      sheenColorMap: nt,
      sheenRoughnessMap: Fe,
      specularMap: ve,
      specularColorMap: ge,
      specularIntensityMap: A,
      transmission: $,
      transmissionMap: J,
      thicknessMap: oe,
      gradientMap: Te,
      opaque: M.transparent === !1 && M.blending === cn && M.alphaToCoverage === !1,
      alphaMap: U,
      alphaTest: ie,
      alphaHash: N,
      combine: M.combine,
      mapUv: Ae && f(M.map.channel),
      aoMapUv: xe && f(M.aoMap.channel),
      lightMapUv: Pe && f(M.lightMap.channel),
      bumpMapUv: ye && f(M.bumpMap.channel),
      normalMapUv: Ge && f(M.normalMap.channel),
      displacementMapUv: Ue && f(M.displacementMap.channel),
      emissiveMapUv: De && f(M.emissiveMap.channel),
      metalnessMapUv: Je && f(M.metalnessMap.channel),
      roughnessMapUv: R && f(M.roughnessMap.channel),
      anisotropyMapUv: Ce && f(M.anisotropyMap.channel),
      clearcoatMapUv: Se && f(M.clearcoatMap.channel),
      clearcoatNormalMapUv: ae && f(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: he && f(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Le && f(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: ne && f(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: nt && f(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Fe && f(M.sheenRoughnessMap.channel),
      specularMapUv: ve && f(M.specularMap.channel),
      specularColorMapUv: ge && f(M.specularColorMap.channel),
      specularIntensityMapUv: A && f(M.specularIntensityMap.channel),
      transmissionMapUv: J && f(M.transmissionMap.channel),
      thicknessMapUv: oe && f(M.thicknessMap.channel),
      alphaMapUv: U && f(M.alphaMap.channel),
      vertexTangents: !!B.attributes.tangent && (Ge || x),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4,
      pointsUvs: P.isPoints === !0 && !!B.attributes.uv && (Ae || U),
      fog: !!V,
      useFog: M.fog === !0,
      fogExp2: !!V && V.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: P.isSkinnedMesh === !0,
      morphTargets: B.morphAttributes.position !== void 0,
      morphNormals: B.morphAttributes.normal !== void 0,
      morphColors: B.morphAttributes.color !== void 0,
      morphTargetsCount: de,
      morphTextureStride: fe,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && j.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: se,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: Ae && M.map.isVideoTexture === !0 && qe.getTransfer(M.map.colorSpace) === $e,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === Ci,
      flipSided: M.side === zt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: le && M.extensions.derivatives === !0,
      extensionFragDepth: le && M.extensions.fragDepth === !0,
      extensionDrawBuffers: le && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: le && M.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: le && M.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: le && M.extensions.multiDraw === !0 && i.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
    return Be.vertexUv1s = c.has(1), Be.vertexUv2s = c.has(2), Be.vertexUv3s = c.has(3), c.clear(), Be;
  }
  function y(M) {
    const w = [];
    if (M.shaderID ? w.push(M.shaderID) : (w.push(M.customVertexShaderID), w.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const j in M.defines)
        w.push(j), w.push(M.defines[j]);
    return M.isRawShaderMaterial === !1 && (v(w, M), T(w, M), w.push(r.outputColorSpace)), w.push(M.customProgramCacheKey), w.join();
  }
  function v(M, w) {
    M.push(w.precision), M.push(w.outputColorSpace), M.push(w.envMapMode), M.push(w.envMapCubeUVHeight), M.push(w.mapUv), M.push(w.alphaMapUv), M.push(w.lightMapUv), M.push(w.aoMapUv), M.push(w.bumpMapUv), M.push(w.normalMapUv), M.push(w.displacementMapUv), M.push(w.emissiveMapUv), M.push(w.metalnessMapUv), M.push(w.roughnessMapUv), M.push(w.anisotropyMapUv), M.push(w.clearcoatMapUv), M.push(w.clearcoatNormalMapUv), M.push(w.clearcoatRoughnessMapUv), M.push(w.iridescenceMapUv), M.push(w.iridescenceThicknessMapUv), M.push(w.sheenColorMapUv), M.push(w.sheenRoughnessMapUv), M.push(w.specularMapUv), M.push(w.specularColorMapUv), M.push(w.specularIntensityMapUv), M.push(w.transmissionMapUv), M.push(w.thicknessMapUv), M.push(w.combine), M.push(w.fogExp2), M.push(w.sizeAttenuation), M.push(w.morphTargetsCount), M.push(w.morphAttributeCount), M.push(w.numDirLights), M.push(w.numPointLights), M.push(w.numSpotLights), M.push(w.numSpotLightMaps), M.push(w.numHemiLights), M.push(w.numRectAreaLights), M.push(w.numDirLightShadows), M.push(w.numPointLightShadows), M.push(w.numSpotLightShadows), M.push(w.numSpotLightShadowsWithMaps), M.push(w.numLightProbes), M.push(w.shadowMapType), M.push(w.toneMapping), M.push(w.numClippingPlanes), M.push(w.numClipIntersection), M.push(w.depthPacking);
  }
  function T(M, w) {
    s.disableAll(), w.isWebGL2 && s.enable(0), w.supportsVertexTextures && s.enable(1), w.instancing && s.enable(2), w.instancingColor && s.enable(3), w.instancingMorph && s.enable(4), w.matcap && s.enable(5), w.envMap && s.enable(6), w.normalMapObjectSpace && s.enable(7), w.normalMapTangentSpace && s.enable(8), w.clearcoat && s.enable(9), w.iridescence && s.enable(10), w.alphaTest && s.enable(11), w.vertexColors && s.enable(12), w.vertexAlphas && s.enable(13), w.vertexUv1s && s.enable(14), w.vertexUv2s && s.enable(15), w.vertexUv3s && s.enable(16), w.vertexTangents && s.enable(17), w.anisotropy && s.enable(18), w.alphaHash && s.enable(19), w.batching && s.enable(20), M.push(s.mask), s.disableAll(), w.fog && s.enable(0), w.useFog && s.enable(1), w.flatShading && s.enable(2), w.logarithmicDepthBuffer && s.enable(3), w.skinning && s.enable(4), w.morphTargets && s.enable(5), w.morphNormals && s.enable(6), w.morphColors && s.enable(7), w.premultipliedAlpha && s.enable(8), w.shadowMapEnabled && s.enable(9), w.useLegacyLights && s.enable(10), w.doubleSided && s.enable(11), w.flipSided && s.enable(12), w.useDepthPacking && s.enable(13), w.dithering && s.enable(14), w.transmission && s.enable(15), w.sheen && s.enable(16), w.opaque && s.enable(17), w.pointsUvs && s.enable(18), w.decodeVideoTexture && s.enable(19), w.alphaToCoverage && s.enable(20), M.push(s.mask);
  }
  function C(M) {
    const w = _[M.type];
    let j;
    if (w) {
      const K = di[w];
      j = yf.clone(K.uniforms);
    } else
      j = M.uniforms;
    return j;
  }
  function b(M, w) {
    let j;
    for (let K = 0, P = h.length; K < P; K++) {
      const V = h[K];
      if (V.cacheKey === w) {
        j = V, ++j.usedTimes;
        break;
      }
    }
    return j === void 0 && (j = new Bv(r, w, M, a), h.push(j)), j;
  }
  function E(M) {
    if (--M.usedTimes === 0) {
      const w = h.indexOf(M);
      h[w] = h[h.length - 1], h.pop(), M.destroy();
    }
  }
  function L(M) {
    l.remove(M);
  }
  function X() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: y,
    getUniforms: C,
    acquireProgram: b,
    releaseProgram: E,
    releaseShaderCache: L,
    programs: h,
    dispose: X
  };
}
function Vv() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(a) {
    let o = r.get(a);
    return o === void 0 && (o = {}, r.set(a, o)), o;
  }
  function t(a) {
    r.delete(a);
  }
  function i(a, o, s) {
    r.get(a)[o] = s;
  }
  function n() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: i,
    dispose: n
  };
}
function Wv(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function wc(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Rc() {
  const r = [];
  let e = 0;
  const t = [], i = [], n = [];
  function a() {
    e = 0, t.length = 0, i.length = 0, n.length = 0;
  }
  function o(u, d, g, m, _, f) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: g,
      groupOrder: m,
      renderOrder: u.renderOrder,
      z: _,
      group: f
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = g, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = _, p.group = f), e++, p;
  }
  function s(u, d, g, m, _, f) {
    const p = o(u, d, g, m, _, f);
    g.transmission > 0 ? i.push(p) : g.transparent === !0 ? n.push(p) : t.push(p);
  }
  function l(u, d, g, m, _, f) {
    const p = o(u, d, g, m, _, f);
    g.transmission > 0 ? i.unshift(p) : g.transparent === !0 ? n.unshift(p) : t.unshift(p);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Wv), i.length > 1 && i.sort(d || wc), n.length > 1 && n.sort(d || wc);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const g = r[u];
      if (g.id === null)
        break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: n,
    init: a,
    push: s,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Xv() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(i, n) {
    const a = r.get(i);
    let o;
    return a === void 0 ? (o = new Rc(), r.set(i, [o])) : n >= a.length ? (o = new Rc(), a.push(o)) : o = a[n], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function jv() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D(),
            color: new We()
          };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new D(),
            color: new We(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D(),
            skyColor: new We(),
            groundColor: new We()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new We(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Yv() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let qv = 0;
function Kv(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Zv(r, e) {
  const t = new jv(), i = Yv(), n = {
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
      numSpotMaps: -1,
      numLightProbes: -1
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
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let h = 0; h < 9; h++)
    n.probe.push(new D());
  const a = new D(), o = new ot(), s = new ot();
  function l(h, u) {
    let d = 0, g = 0, m = 0;
    for (let j = 0; j < 9; j++)
      n.probe[j].set(0, 0, 0);
    let _ = 0, f = 0, p = 0, y = 0, v = 0, T = 0, C = 0, b = 0, E = 0, L = 0, X = 0;
    h.sort(Kv);
    const M = u === !0 ? Math.PI : 1;
    for (let j = 0, K = h.length; j < K; j++) {
      const P = h[j], V = P.color, B = P.intensity, W = P.distance, Y = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        d += V.r * B * M, g += V.g * B * M, m += V.b * B * M;
      else if (P.isLightProbe) {
        for (let q = 0; q < 9; q++)
          n.probe[q].addScaledVector(P.sh.coefficients[q], B);
        X++;
      } else if (P.isDirectionalLight) {
        const q = t.get(P);
        if (q.color.copy(P.color).multiplyScalar(P.intensity * M), P.castShadow) {
          const ee = P.shadow, Q = i.get(P);
          Q.shadowBias = ee.bias, Q.shadowNormalBias = ee.normalBias, Q.shadowRadius = ee.radius, Q.shadowMapSize = ee.mapSize, n.directionalShadow[_] = Q, n.directionalShadowMap[_] = Y, n.directionalShadowMatrix[_] = P.shadow.matrix, T++;
        }
        n.directional[_] = q, _++;
      } else if (P.isSpotLight) {
        const q = t.get(P);
        q.position.setFromMatrixPosition(P.matrixWorld), q.color.copy(V).multiplyScalar(B * M), q.distance = W, q.coneCos = Math.cos(P.angle), q.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), q.decay = P.decay, n.spot[p] = q;
        const ee = P.shadow;
        if (P.map && (n.spotLightMap[E] = P.map, E++, ee.updateMatrices(P), P.castShadow && L++), n.spotLightMatrix[p] = ee.matrix, P.castShadow) {
          const Q = i.get(P);
          Q.shadowBias = ee.bias, Q.shadowNormalBias = ee.normalBias, Q.shadowRadius = ee.radius, Q.shadowMapSize = ee.mapSize, n.spotShadow[p] = Q, n.spotShadowMap[p] = Y, b++;
        }
        p++;
      } else if (P.isRectAreaLight) {
        const q = t.get(P);
        q.color.copy(V).multiplyScalar(B), q.halfWidth.set(P.width * 0.5, 0, 0), q.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[y] = q, y++;
      } else if (P.isPointLight) {
        const q = t.get(P);
        if (q.color.copy(P.color).multiplyScalar(P.intensity * M), q.distance = P.distance, q.decay = P.decay, P.castShadow) {
          const ee = P.shadow, Q = i.get(P);
          Q.shadowBias = ee.bias, Q.shadowNormalBias = ee.normalBias, Q.shadowRadius = ee.radius, Q.shadowMapSize = ee.mapSize, Q.shadowCameraNear = ee.camera.near, Q.shadowCameraFar = ee.camera.far, n.pointShadow[f] = Q, n.pointShadowMap[f] = Y, n.pointShadowMatrix[f] = P.shadow.matrix, C++;
        }
        n.point[f] = q, f++;
      } else if (P.isHemisphereLight) {
        const q = t.get(P);
        q.skyColor.copy(P.color).multiplyScalar(B * M), q.groundColor.copy(P.groundColor).multiplyScalar(B * M), n.hemi[v] = q, v++;
      }
    }
    y > 0 && (e.isWebGL2 ? r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ce.LTC_FLOAT_1, n.rectAreaLTC2 = ce.LTC_FLOAT_2) : (n.rectAreaLTC1 = ce.LTC_HALF_1, n.rectAreaLTC2 = ce.LTC_HALF_2) : r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ce.LTC_FLOAT_1, n.rectAreaLTC2 = ce.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (n.rectAreaLTC1 = ce.LTC_HALF_1, n.rectAreaLTC2 = ce.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), n.ambient[0] = d, n.ambient[1] = g, n.ambient[2] = m;
    const w = n.hash;
    (w.directionalLength !== _ || w.pointLength !== f || w.spotLength !== p || w.rectAreaLength !== y || w.hemiLength !== v || w.numDirectionalShadows !== T || w.numPointShadows !== C || w.numSpotShadows !== b || w.numSpotMaps !== E || w.numLightProbes !== X) && (n.directional.length = _, n.spot.length = p, n.rectArea.length = y, n.point.length = f, n.hemi.length = v, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = C, n.pointShadowMap.length = C, n.spotShadow.length = b, n.spotShadowMap.length = b, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = C, n.spotLightMatrix.length = b + E - L, n.spotLightMap.length = E, n.numSpotLightShadowsWithMaps = L, n.numLightProbes = X, w.directionalLength = _, w.pointLength = f, w.spotLength = p, w.rectAreaLength = y, w.hemiLength = v, w.numDirectionalShadows = T, w.numPointShadows = C, w.numSpotShadows = b, w.numSpotMaps = E, w.numLightProbes = X, n.version = qv++);
  }
  function c(h, u) {
    let d = 0, g = 0, m = 0, _ = 0, f = 0;
    const p = u.matrixWorldInverse;
    for (let y = 0, v = h.length; y < v; y++) {
      const T = h[y];
      if (T.isDirectionalLight) {
        const C = n.directional[d];
        C.direction.setFromMatrixPosition(T.matrixWorld), a.setFromMatrixPosition(T.target.matrixWorld), C.direction.sub(a), C.direction.transformDirection(p), d++;
      } else if (T.isSpotLight) {
        const C = n.spot[m];
        C.position.setFromMatrixPosition(T.matrixWorld), C.position.applyMatrix4(p), C.direction.setFromMatrixPosition(T.matrixWorld), a.setFromMatrixPosition(T.target.matrixWorld), C.direction.sub(a), C.direction.transformDirection(p), m++;
      } else if (T.isRectAreaLight) {
        const C = n.rectArea[_];
        C.position.setFromMatrixPosition(T.matrixWorld), C.position.applyMatrix4(p), s.identity(), o.copy(T.matrixWorld), o.premultiply(p), s.extractRotation(o), C.halfWidth.set(T.width * 0.5, 0, 0), C.halfHeight.set(0, T.height * 0.5, 0), C.halfWidth.applyMatrix4(s), C.halfHeight.applyMatrix4(s), _++;
      } else if (T.isPointLight) {
        const C = n.point[g];
        C.position.setFromMatrixPosition(T.matrixWorld), C.position.applyMatrix4(p), g++;
      } else if (T.isHemisphereLight) {
        const C = n.hemi[f];
        C.direction.setFromMatrixPosition(T.matrixWorld), C.direction.transformDirection(p), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: n
  };
}
function Cc(r, e) {
  const t = new Zv(r, e), i = [], n = [];
  function a() {
    i.length = 0, n.length = 0;
  }
  function o(h) {
    i.push(h);
  }
  function s(h) {
    n.push(h);
  }
  function l(h) {
    t.setup(i, h);
  }
  function c(h) {
    t.setupView(i, h);
  }
  return {
    init: a,
    state: {
      lightsArray: i,
      shadowsArray: n,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: s
  };
}
function Jv(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(a, o = 0) {
    const s = t.get(a);
    let l;
    return s === void 0 ? (l = new Cc(r, e), t.set(a, [l])) : o >= s.length ? (l = new Cc(r, e), s.push(l)) : l = s[o], l;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: n
  };
}
class $v extends Zn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Lp, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Qv extends Zn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const e0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, t0 = `uniform sampler2D shadow_pass;
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
function i0(r, e, t) {
  let i = new Bo();
  const n = new be(), a = new be(), o = new et(), s = new $v({ depthPacking: Pp }), l = new Qv(), c = {}, h = t.maxTextureSize, u = { [Qi]: zt, [zt]: Qi, [Ci]: Ci }, d = new er({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new be() },
      radius: { value: 4 }
    },
    vertexShader: e0,
    fragmentShader: t0
  }), g = d.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const m = new Dr();
  m.setAttribute(
    "position",
    new _i(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new Ut(m, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Fh;
  let p = this.type;
  this.render = function(b, E, L) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || b.length === 0)
      return;
    const X = r.getRenderTarget(), M = r.getActiveCubeFace(), w = r.getActiveMipmapLevel(), j = r.state;
    j.setBlending(qi), j.buffers.color.setClear(1, 1, 1, 1), j.buffers.depth.setTest(!0), j.setScissorTest(!1);
    const K = p !== Ai && this.type === Ai, P = p === Ai && this.type !== Ai;
    for (let V = 0, B = b.length; V < B; V++) {
      const W = b[V], Y = W.shadow;
      if (Y === void 0) {
        console.warn("THREE.WebGLShadowMap:", W, "has no shadow.");
        continue;
      }
      if (Y.autoUpdate === !1 && Y.needsUpdate === !1)
        continue;
      n.copy(Y.mapSize);
      const q = Y.getFrameExtents();
      if (n.multiply(q), a.copy(Y.mapSize), (n.x > h || n.y > h) && (n.x > h && (a.x = Math.floor(h / q.x), n.x = a.x * q.x, Y.mapSize.x = a.x), n.y > h && (a.y = Math.floor(h / q.y), n.y = a.y * q.y, Y.mapSize.y = a.y)), Y.map === null || K === !0 || P === !0) {
        const Q = this.type !== Ai ? { minFilter: Pt, magFilter: Pt } : {};
        Y.map !== null && Y.map.dispose(), Y.map = new Rr(n.x, n.y, Q), Y.map.texture.name = W.name + ".shadowMap", Y.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(Y.map), r.clear();
      const ee = Y.getViewportCount();
      for (let Q = 0; Q < ee; Q++) {
        const de = Y.getViewport(Q);
        o.set(
          a.x * de.x,
          a.y * de.y,
          a.x * de.z,
          a.y * de.w
        ), j.viewport(o), Y.updateMatrices(W, Q), i = Y.getFrustum(), T(E, L, Y.camera, W, this.type);
      }
      Y.isPointLightShadow !== !0 && this.type === Ai && y(Y, L), Y.needsUpdate = !1;
    }
    p = this.type, f.needsUpdate = !1, r.setRenderTarget(X, M, w);
  };
  function y(b, E) {
    const L = e.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, g.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = !0, g.needsUpdate = !0), b.mapPass === null && (b.mapPass = new Rr(n.x, n.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, r.setRenderTarget(b.mapPass), r.clear(), r.renderBufferDirect(E, null, L, d, _, null), g.uniforms.shadow_pass.value = b.mapPass.texture, g.uniforms.resolution.value = b.mapSize, g.uniforms.radius.value = b.radius, r.setRenderTarget(b.map), r.clear(), r.renderBufferDirect(E, null, L, g, _, null);
  }
  function v(b, E, L, X) {
    let M = null;
    const w = L.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (w !== void 0)
      M = w;
    else if (M = L.isPointLight === !0 ? l : s, r.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0 || E.map && E.alphaTest > 0) {
      const j = M.uuid, K = E.uuid;
      let P = c[j];
      P === void 0 && (P = {}, c[j] = P);
      let V = P[K];
      V === void 0 && (V = M.clone(), P[K] = V, E.addEventListener("dispose", C)), M = V;
    }
    if (M.visible = E.visible, M.wireframe = E.wireframe, X === Ai ? M.side = E.shadowSide !== null ? E.shadowSide : E.side : M.side = E.shadowSide !== null ? E.shadowSide : u[E.side], M.alphaMap = E.alphaMap, M.alphaTest = E.alphaTest, M.map = E.map, M.clipShadows = E.clipShadows, M.clippingPlanes = E.clippingPlanes, M.clipIntersection = E.clipIntersection, M.displacementMap = E.displacementMap, M.displacementScale = E.displacementScale, M.displacementBias = E.displacementBias, M.wireframeLinewidth = E.wireframeLinewidth, M.linewidth = E.linewidth, L.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const j = r.properties.get(M);
      j.light = L;
    }
    return M;
  }
  function T(b, E, L, X, M) {
    if (b.visible === !1)
      return;
    if (b.layers.test(E.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && M === Ai) && (!b.frustumCulled || i.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, b.matrixWorld);
      const j = e.update(b), K = b.material;
      if (Array.isArray(K)) {
        const P = j.groups;
        for (let V = 0, B = P.length; V < B; V++) {
          const W = P[V], Y = K[W.materialIndex];
          if (Y && Y.visible) {
            const q = v(b, Y, X, M);
            b.onBeforeShadow(r, b, E, L, j, q, W), r.renderBufferDirect(L, null, j, q, b, W), b.onAfterShadow(r, b, E, L, j, q, W);
          }
        }
      } else if (K.visible) {
        const P = v(b, K, X, M);
        b.onBeforeShadow(r, b, E, L, j, P, null), r.renderBufferDirect(L, null, j, P, b, null), b.onAfterShadow(r, b, E, L, j, P, null);
      }
    }
    const w = b.children;
    for (let j = 0, K = w.length; j < K; j++)
      T(w[j], E, L, X, M);
  }
  function C(b) {
    b.target.removeEventListener("dispose", C);
    for (const E in c) {
      const L = c[E], X = b.target.uuid;
      X in L && (L[X].dispose(), delete L[X]);
    }
  }
}
function r0(r, e, t) {
  const i = t.isWebGL2;
  function n() {
    let U = !1;
    const ie = new et();
    let N = null;
    const le = new et(0, 0, 0, 0);
    return {
      setMask: function(se) {
        N !== se && !U && (r.colorMask(se, se, se, se), N = se);
      },
      setLocked: function(se) {
        U = se;
      },
      setClear: function(se, Be, ke, tt, at) {
        at === !0 && (se *= tt, Be *= tt, ke *= tt), ie.set(se, Be, ke, tt), le.equals(ie) === !1 && (r.clearColor(se, Be, ke, tt), le.copy(ie));
      },
      reset: function() {
        U = !1, N = null, le.set(-1, 0, 0, 0);
      }
    };
  }
  function a() {
    let U = !1, ie = null, N = null, le = null;
    return {
      setTest: function(se) {
        se ? me(r.DEPTH_TEST) : je(r.DEPTH_TEST);
      },
      setMask: function(se) {
        ie !== se && !U && (r.depthMask(se), ie = se);
      },
      setFunc: function(se) {
        if (N !== se) {
          switch (se) {
            case sp:
              r.depthFunc(r.NEVER);
              break;
            case op:
              r.depthFunc(r.ALWAYS);
              break;
            case lp:
              r.depthFunc(r.LESS);
              break;
            case Ia:
              r.depthFunc(r.LEQUAL);
              break;
            case cp:
              r.depthFunc(r.EQUAL);
              break;
            case hp:
              r.depthFunc(r.GEQUAL);
              break;
            case up:
              r.depthFunc(r.GREATER);
              break;
            case dp:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          N = se;
        }
      },
      setLocked: function(se) {
        U = se;
      },
      setClear: function(se) {
        le !== se && (r.clearDepth(se), le = se);
      },
      reset: function() {
        U = !1, ie = null, N = null, le = null;
      }
    };
  }
  function o() {
    let U = !1, ie = null, N = null, le = null, se = null, Be = null, ke = null, tt = null, at = null;
    return {
      setTest: function(Ye) {
        U || (Ye ? me(r.STENCIL_TEST) : je(r.STENCIL_TEST));
      },
      setMask: function(Ye) {
        ie !== Ye && !U && (r.stencilMask(Ye), ie = Ye);
      },
      setFunc: function(Ye, ht, Vt) {
        (N !== Ye || le !== ht || se !== Vt) && (r.stencilFunc(Ye, ht, Vt), N = Ye, le = ht, se = Vt);
      },
      setOp: function(Ye, ht, Vt) {
        (Be !== Ye || ke !== ht || tt !== Vt) && (r.stencilOp(Ye, ht, Vt), Be = Ye, ke = ht, tt = Vt);
      },
      setLocked: function(Ye) {
        U = Ye;
      },
      setClear: function(Ye) {
        at !== Ye && (r.clearStencil(Ye), at = Ye);
      },
      reset: function() {
        U = !1, ie = null, N = null, le = null, se = null, Be = null, ke = null, tt = null, at = null;
      }
    };
  }
  const s = new n(), l = new a(), c = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, g = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, y = null, v = null, T = null, C = null, b = null, E = null, L = null, X = new We(0, 0, 0), M = 0, w = !1, j = null, K = null, P = null, V = null, B = null;
  const W = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = !1, q = 0;
  const ee = r.getParameter(r.VERSION);
  ee.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(ee)[1]), Y = q >= 1) : ee.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]), Y = q >= 2);
  let Q = null, de = {};
  const fe = r.getParameter(r.SCISSOR_BOX), H = r.getParameter(r.VIEWPORT), re = new et().fromArray(fe), pe = new et().fromArray(H);
  function we(U, ie, N, le) {
    const se = new Uint8Array(4), Be = r.createTexture();
    r.bindTexture(U, Be), r.texParameteri(U, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(U, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let ke = 0; ke < N; ke++)
      i && (U === r.TEXTURE_3D || U === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ie, 0, r.RGBA, 1, 1, le, 0, r.RGBA, r.UNSIGNED_BYTE, se) : r.texImage2D(ie + ke, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, se);
    return Be;
  }
  const _e = {};
  _e[r.TEXTURE_2D] = we(r.TEXTURE_2D, r.TEXTURE_2D, 1), _e[r.TEXTURE_CUBE_MAP] = we(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i && (_e[r.TEXTURE_2D_ARRAY] = we(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), _e[r.TEXTURE_3D] = we(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), s.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), me(r.DEPTH_TEST), l.setFunc(Ia), Ue(!1), De(ll), me(r.CULL_FACE), ye(qi);
  function me(U) {
    d[U] !== !0 && (r.enable(U), d[U] = !0);
  }
  function je(U) {
    d[U] !== !1 && (r.disable(U), d[U] = !1);
  }
  function Ae(U, ie) {
    return g[U] !== ie ? (r.bindFramebuffer(U, ie), g[U] = ie, i && (U === r.DRAW_FRAMEBUFFER && (g[r.FRAMEBUFFER] = ie), U === r.FRAMEBUFFER && (g[r.DRAW_FRAMEBUFFER] = ie)), !0) : !1;
  }
  function O(U, ie) {
    let N = _, le = !1;
    if (U) {
      N = m.get(ie), N === void 0 && (N = [], m.set(ie, N));
      const se = U.textures;
      if (N.length !== se.length || N[0] !== r.COLOR_ATTACHMENT0) {
        for (let Be = 0, ke = se.length; Be < ke; Be++)
          N[Be] = r.COLOR_ATTACHMENT0 + Be;
        N.length = se.length, le = !0;
      }
    } else
      N[0] !== r.BACK && (N[0] = r.BACK, le = !0);
    if (le)
      if (t.isWebGL2)
        r.drawBuffers(N);
      else if (e.has("WEBGL_draw_buffers") === !0)
        e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N);
      else
        throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension");
  }
  function pt(U) {
    return f !== U ? (r.useProgram(U), f = U, !0) : !1;
  }
  const xe = {
    [mr]: r.FUNC_ADD,
    [Xd]: r.FUNC_SUBTRACT,
    [jd]: r.FUNC_REVERSE_SUBTRACT
  };
  if (i)
    xe[dl] = r.MIN, xe[pl] = r.MAX;
  else {
    const U = e.get("EXT_blend_minmax");
    U !== null && (xe[dl] = U.MIN_EXT, xe[pl] = U.MAX_EXT);
  }
  const Pe = {
    [Yd]: r.ZERO,
    [qd]: r.ONE,
    [Kd]: r.SRC_COLOR,
    [no]: r.SRC_ALPHA,
    [tp]: r.SRC_ALPHA_SATURATE,
    [Qd]: r.DST_COLOR,
    [Jd]: r.DST_ALPHA,
    [Zd]: r.ONE_MINUS_SRC_COLOR,
    [ao]: r.ONE_MINUS_SRC_ALPHA,
    [ep]: r.ONE_MINUS_DST_COLOR,
    [$d]: r.ONE_MINUS_DST_ALPHA,
    [ip]: r.CONSTANT_COLOR,
    [rp]: r.ONE_MINUS_CONSTANT_COLOR,
    [np]: r.CONSTANT_ALPHA,
    [ap]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function ye(U, ie, N, le, se, Be, ke, tt, at, Ye) {
    if (U === qi) {
      p === !0 && (je(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (me(r.BLEND), p = !0), U !== Wd) {
      if (U !== y || Ye !== w) {
        if ((v !== mr || b !== mr) && (r.blendEquation(r.FUNC_ADD), v = mr, b = mr), Ye)
          switch (U) {
            case cn:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case cl:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case hl:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case ul:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        else
          switch (U) {
            case cn:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case cl:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case hl:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case ul:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        T = null, C = null, E = null, L = null, X.set(0, 0, 0), M = 0, y = U, w = Ye;
      }
      return;
    }
    se = se || ie, Be = Be || N, ke = ke || le, (ie !== v || se !== b) && (r.blendEquationSeparate(xe[ie], xe[se]), v = ie, b = se), (N !== T || le !== C || Be !== E || ke !== L) && (r.blendFuncSeparate(Pe[N], Pe[le], Pe[Be], Pe[ke]), T = N, C = le, E = Be, L = ke), (tt.equals(X) === !1 || at !== M) && (r.blendColor(tt.r, tt.g, tt.b, at), X.copy(tt), M = at), y = U, w = !1;
  }
  function Ge(U, ie) {
    U.side === Ci ? je(r.CULL_FACE) : me(r.CULL_FACE);
    let N = U.side === zt;
    ie && (N = !N), Ue(N), U.blending === cn && U.transparent === !1 ? ye(qi) : ye(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), l.setFunc(U.depthFunc), l.setTest(U.depthTest), l.setMask(U.depthWrite), s.setMask(U.colorWrite);
    const le = U.stencilWrite;
    c.setTest(le), le && (c.setMask(U.stencilWriteMask), c.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), c.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), R(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === !0 ? me(r.SAMPLE_ALPHA_TO_COVERAGE) : je(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ue(U) {
    j !== U && (U ? r.frontFace(r.CW) : r.frontFace(r.CCW), j = U);
  }
  function De(U) {
    U !== Gd ? (me(r.CULL_FACE), U !== K && (U === ll ? r.cullFace(r.BACK) : U === kd ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : je(r.CULL_FACE), K = U;
  }
  function Je(U) {
    U !== P && (Y && r.lineWidth(U), P = U);
  }
  function R(U, ie, N) {
    U ? (me(r.POLYGON_OFFSET_FILL), (V !== ie || B !== N) && (r.polygonOffset(ie, N), V = ie, B = N)) : je(r.POLYGON_OFFSET_FILL);
  }
  function x(U) {
    U ? me(r.SCISSOR_TEST) : je(r.SCISSOR_TEST);
  }
  function k(U) {
    U === void 0 && (U = r.TEXTURE0 + W - 1), Q !== U && (r.activeTexture(U), Q = U);
  }
  function Z(U, ie, N) {
    N === void 0 && (Q === null ? N = r.TEXTURE0 + W - 1 : N = Q);
    let le = de[N];
    le === void 0 && (le = { type: void 0, texture: void 0 }, de[N] = le), (le.type !== U || le.texture !== ie) && (Q !== N && (r.activeTexture(N), Q = N), r.bindTexture(U, ie || _e[U]), le.type = U, le.texture = ie);
  }
  function te() {
    const U = de[Q];
    U !== void 0 && U.type !== void 0 && (r.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function $() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Ce() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Se() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ae() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function he() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Le() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ne() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function nt() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Fe() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ve() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ge(U) {
    re.equals(U) === !1 && (r.scissor(U.x, U.y, U.z, U.w), re.copy(U));
  }
  function A(U) {
    pe.equals(U) === !1 && (r.viewport(U.x, U.y, U.z, U.w), pe.copy(U));
  }
  function J(U, ie) {
    let N = u.get(ie);
    N === void 0 && (N = /* @__PURE__ */ new WeakMap(), u.set(ie, N));
    let le = N.get(U);
    le === void 0 && (le = r.getUniformBlockIndex(ie, U.name), N.set(U, le));
  }
  function oe(U, ie) {
    const N = u.get(ie).get(U);
    h.get(ie) !== N && (r.uniformBlockBinding(ie, N, U.__bindingPointIndex), h.set(ie, N));
  }
  function Te() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), i === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, Q = null, de = {}, g = {}, m = /* @__PURE__ */ new WeakMap(), _ = [], f = null, p = !1, y = null, v = null, T = null, C = null, b = null, E = null, L = null, X = new We(0, 0, 0), M = 0, w = !1, j = null, K = null, P = null, V = null, B = null, re.set(0, 0, r.canvas.width, r.canvas.height), pe.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: s,
      depth: l,
      stencil: c
    },
    enable: me,
    disable: je,
    bindFramebuffer: Ae,
    drawBuffers: O,
    useProgram: pt,
    setBlending: ye,
    setMaterial: Ge,
    setFlipSided: Ue,
    setCullFace: De,
    setLineWidth: Je,
    setPolygonOffset: R,
    setScissorTest: x,
    activeTexture: k,
    bindTexture: Z,
    unbindTexture: te,
    compressedTexImage2D: $,
    compressedTexImage3D: Ce,
    texImage2D: Fe,
    texImage3D: ve,
    updateUBOMapping: J,
    uniformBlockBinding: oe,
    texStorage2D: ne,
    texStorage3D: nt,
    texSubImage2D: Se,
    texSubImage3D: ae,
    compressedTexSubImage2D: he,
    compressedTexSubImage3D: Le,
    scissor: ge,
    viewport: A,
    reset: Te
  };
}
function n0(r, e, t, i, n, a, o) {
  const s = n.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = new be(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const g = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(R, x) {
    return m ? new OffscreenCanvas(R, x) : Ha("canvas");
  }
  function f(R, x, k, Z) {
    let te = 1;
    const $ = Je(R);
    if (($.width > Z || $.height > Z) && (te = Z / Math.max($.width, $.height)), te < 1 || x === !0)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
        const Ce = x ? za : Math.floor, Se = Ce(te * $.width), ae = Ce(te * $.height);
        d === void 0 && (d = _(Se, ae));
        const he = k ? _(Se, ae) : d;
        return he.width = Se, he.height = ae, he.getContext("2d").drawImage(R, 0, 0, Se, ae), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + Se + "x" + ae + ")."), he;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), R;
    return R;
  }
  function p(R) {
    const x = Je(R);
    return uo(x.width) && uo(x.height);
  }
  function y(R) {
    return s ? !1 : R.wrapS !== li || R.wrapT !== li || R.minFilter !== Pt && R.minFilter !== It;
  }
  function v(R, x) {
    return R.generateMipmaps && x && R.minFilter !== Pt && R.minFilter !== It;
  }
  function T(R) {
    r.generateMipmap(R);
  }
  function C(R, x, k, Z, te = !1) {
    if (s === !1)
      return x;
    if (R !== null) {
      if (r[R] !== void 0)
        return r[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let $ = x;
    if (x === r.RED && (k === r.FLOAT && ($ = r.R32F), k === r.HALF_FLOAT && ($ = r.R16F), k === r.UNSIGNED_BYTE && ($ = r.R8)), x === r.RED_INTEGER && (k === r.UNSIGNED_BYTE && ($ = r.R8UI), k === r.UNSIGNED_SHORT && ($ = r.R16UI), k === r.UNSIGNED_INT && ($ = r.R32UI), k === r.BYTE && ($ = r.R8I), k === r.SHORT && ($ = r.R16I), k === r.INT && ($ = r.R32I)), x === r.RG && (k === r.FLOAT && ($ = r.RG32F), k === r.HALF_FLOAT && ($ = r.RG16F), k === r.UNSIGNED_BYTE && ($ = r.RG8)), x === r.RG_INTEGER && (k === r.UNSIGNED_BYTE && ($ = r.RG8UI), k === r.UNSIGNED_SHORT && ($ = r.RG16UI), k === r.UNSIGNED_INT && ($ = r.RG32UI), k === r.BYTE && ($ = r.RG8I), k === r.SHORT && ($ = r.RG16I), k === r.INT && ($ = r.RG32I)), x === r.RGBA) {
      const Ce = te ? Oa : qe.getTransfer(Z);
      k === r.FLOAT && ($ = r.RGBA32F), k === r.HALF_FLOAT && ($ = r.RGBA16F), k === r.UNSIGNED_BYTE && ($ = Ce === $e ? r.SRGB8_ALPHA8 : r.RGBA8), k === r.UNSIGNED_SHORT_4_4_4_4 && ($ = r.RGBA4), k === r.UNSIGNED_SHORT_5_5_5_1 && ($ = r.RGB5_A1);
    }
    return ($ === r.R16F || $ === r.R32F || $ === r.RG16F || $ === r.RG32F || $ === r.RGBA16F || $ === r.RGBA32F) && e.get("EXT_color_buffer_float"), $;
  }
  function b(R, x, k) {
    return v(R, k) === !0 || R.isFramebufferTexture && R.minFilter !== Pt && R.minFilter !== It ? Math.log2(Math.max(x.width, x.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? x.mipmaps.length : 1;
  }
  function E(R) {
    return R === Pt || R === fl || R === bn ? r.NEAREST : r.LINEAR;
  }
  function L(R) {
    const x = R.target;
    x.removeEventListener("dispose", L), M(x), x.isVideoTexture && u.delete(x);
  }
  function X(R) {
    const x = R.target;
    x.removeEventListener("dispose", X), j(x);
  }
  function M(R) {
    const x = i.get(R);
    if (x.__webglInit === void 0)
      return;
    const k = R.source, Z = g.get(k);
    if (Z) {
      const te = Z[x.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && w(R), Object.keys(Z).length === 0 && g.delete(k);
    }
    i.remove(R);
  }
  function w(R) {
    const x = i.get(R);
    r.deleteTexture(x.__webglTexture);
    const k = R.source, Z = g.get(k);
    delete Z[x.__cacheKey], o.memory.textures--;
  }
  function j(R) {
    const x = i.get(R);
    if (R.depthTexture && R.depthTexture.dispose(), R.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(x.__webglFramebuffer[Z]))
          for (let te = 0; te < x.__webglFramebuffer[Z].length; te++)
            r.deleteFramebuffer(x.__webglFramebuffer[Z][te]);
        else
          r.deleteFramebuffer(x.__webglFramebuffer[Z]);
        x.__webglDepthbuffer && r.deleteRenderbuffer(x.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let Z = 0; Z < x.__webglFramebuffer.length; Z++)
          r.deleteFramebuffer(x.__webglFramebuffer[Z]);
      else
        r.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && r.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && r.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let Z = 0; Z < x.__webglColorRenderbuffer.length; Z++)
          x.__webglColorRenderbuffer[Z] && r.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);
      x.__webglDepthRenderbuffer && r.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const k = R.textures;
    for (let Z = 0, te = k.length; Z < te; Z++) {
      const $ = i.get(k[Z]);
      $.__webglTexture && (r.deleteTexture($.__webglTexture), o.memory.textures--), i.remove(k[Z]);
    }
    i.remove(R);
  }
  let K = 0;
  function P() {
    K = 0;
  }
  function V() {
    const R = K;
    return R >= n.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + n.maxTextures), K += 1, R;
  }
  function B(R) {
    const x = [];
    return x.push(R.wrapS), x.push(R.wrapT), x.push(R.wrapR || 0), x.push(R.magFilter), x.push(R.minFilter), x.push(R.anisotropy), x.push(R.internalFormat), x.push(R.format), x.push(R.type), x.push(R.generateMipmaps), x.push(R.premultiplyAlpha), x.push(R.flipY), x.push(R.unpackAlignment), x.push(R.colorSpace), x.join();
  }
  function W(R, x) {
    const k = i.get(R);
    if (R.isVideoTexture && Ue(R), R.isRenderTargetTexture === !1 && R.version > 0 && k.__version !== R.version) {
      const Z = R.image;
      if (Z === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Z.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        pe(k, R, x);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, k.__webglTexture, r.TEXTURE0 + x);
  }
  function Y(R, x) {
    const k = i.get(R);
    if (R.version > 0 && k.__version !== R.version) {
      pe(k, R, x);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, k.__webglTexture, r.TEXTURE0 + x);
  }
  function q(R, x) {
    const k = i.get(R);
    if (R.version > 0 && k.__version !== R.version) {
      pe(k, R, x);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, k.__webglTexture, r.TEXTURE0 + x);
  }
  function ee(R, x) {
    const k = i.get(R);
    if (R.version > 0 && k.__version !== R.version) {
      we(k, R, x);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, k.__webglTexture, r.TEXTURE0 + x);
  }
  const Q = {
    [lo]: r.REPEAT,
    [li]: r.CLAMP_TO_EDGE,
    [co]: r.MIRRORED_REPEAT
  }, de = {
    [Pt]: r.NEAREST,
    [fl]: r.NEAREST_MIPMAP_NEAREST,
    [bn]: r.NEAREST_MIPMAP_LINEAR,
    [It]: r.LINEAR,
    [ls]: r.LINEAR_MIPMAP_NEAREST,
    [vr]: r.LINEAR_MIPMAP_LINEAR
  }, fe = {
    [Dp]: r.NEVER,
    [zp]: r.ALWAYS,
    [Ip]: r.LESS,
    [qh]: r.LEQUAL,
    [Op]: r.EQUAL,
    [Bp]: r.GEQUAL,
    [Np]: r.GREATER,
    [Fp]: r.NOTEQUAL
  };
  function H(R, x, k) {
    if (x.type === Li && e.has("OES_texture_float_linear") === !1 && (x.magFilter === It || x.magFilter === ls || x.magFilter === bn || x.magFilter === vr || x.minFilter === It || x.minFilter === ls || x.minFilter === bn || x.minFilter === vr) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), k ? (r.texParameteri(R, r.TEXTURE_WRAP_S, Q[x.wrapS]), r.texParameteri(R, r.TEXTURE_WRAP_T, Q[x.wrapT]), (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, Q[x.wrapR]), r.texParameteri(R, r.TEXTURE_MAG_FILTER, de[x.magFilter]), r.texParameteri(R, r.TEXTURE_MIN_FILTER, de[x.minFilter])) : (r.texParameteri(R, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(R, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (x.wrapS !== li || x.wrapT !== li) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(R, r.TEXTURE_MAG_FILTER, E(x.magFilter)), r.texParameteri(R, r.TEXTURE_MIN_FILTER, E(x.minFilter)), x.minFilter !== Pt && x.minFilter !== It && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (r.texParameteri(R, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(R, r.TEXTURE_COMPARE_FUNC, fe[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === Pt || x.minFilter !== bn && x.minFilter !== vr || x.type === Li && e.has("OES_texture_float_linear") === !1 || s === !1 && x.type === jn && e.has("OES_texture_half_float_linear") === !1)
        return;
      if (x.anisotropy > 1 || i.get(x).__currentAnisotropy) {
        const Z = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(R, Z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, n.getMaxAnisotropy())), i.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function re(R, x) {
    let k = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, x.addEventListener("dispose", L));
    const Z = x.source;
    let te = g.get(Z);
    te === void 0 && (te = {}, g.set(Z, te));
    const $ = B(x);
    if ($ !== R.__cacheKey) {
      te[$] === void 0 && (te[$] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, k = !0), te[$].usedTimes++;
      const Ce = te[R.__cacheKey];
      Ce !== void 0 && (te[R.__cacheKey].usedTimes--, Ce.usedTimes === 0 && w(x)), R.__cacheKey = $, R.__webglTexture = te[$].texture;
    }
    return k;
  }
  function pe(R, x, k) {
    let Z = r.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Z = r.TEXTURE_2D_ARRAY), x.isData3DTexture && (Z = r.TEXTURE_3D);
    const te = re(R, x), $ = x.source;
    t.bindTexture(Z, R.__webglTexture, r.TEXTURE0 + k);
    const Ce = i.get($);
    if ($.version !== Ce.__version || te === !0) {
      t.activeTexture(r.TEXTURE0 + k);
      const Se = qe.getPrimaries(qe.workingColorSpace), ae = x.colorSpace === Gi ? null : qe.getPrimaries(x.colorSpace), he = x.colorSpace === Gi || Se === ae ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, he);
      const Le = y(x) && p(x.image) === !1;
      let ne = f(x.image, Le, !1, n.maxTextureSize);
      ne = De(x, ne);
      const nt = p(ne) || s, Fe = a.convert(x.format, x.colorSpace);
      let ve = a.convert(x.type), ge = C(x.internalFormat, Fe, ve, x.colorSpace, x.isVideoTexture);
      H(Z, x, nt);
      let A;
      const J = x.mipmaps, oe = s && x.isVideoTexture !== !0 && ge !== jh, Te = Ce.__version === void 0 || te === !0, U = $.dataReady, ie = b(x, ne, nt);
      if (x.isDepthTexture)
        ge = r.DEPTH_COMPONENT, s ? x.type === Li ? ge = r.DEPTH_COMPONENT32F : x.type === Xi ? ge = r.DEPTH_COMPONENT24 : x.type === Tr ? ge = r.DEPTH24_STENCIL8 : ge = r.DEPTH_COMPONENT16 : x.type === Li && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === Er && ge === r.DEPTH_COMPONENT && x.type !== Io && x.type !== Xi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = Xi, ve = a.convert(x.type)), x.format === vn && ge === r.DEPTH_COMPONENT && (ge = r.DEPTH_STENCIL, x.type !== Tr && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = Tr, ve = a.convert(x.type))), Te && (oe ? t.texStorage2D(r.TEXTURE_2D, 1, ge, ne.width, ne.height) : t.texImage2D(r.TEXTURE_2D, 0, ge, ne.width, ne.height, 0, Fe, ve, null));
      else if (x.isDataTexture)
        if (J.length > 0 && nt) {
          oe && Te && t.texStorage2D(r.TEXTURE_2D, ie, ge, J[0].width, J[0].height);
          for (let N = 0, le = J.length; N < le; N++)
            A = J[N], oe ? U && t.texSubImage2D(r.TEXTURE_2D, N, 0, 0, A.width, A.height, Fe, ve, A.data) : t.texImage2D(r.TEXTURE_2D, N, ge, A.width, A.height, 0, Fe, ve, A.data);
          x.generateMipmaps = !1;
        } else
          oe ? (Te && t.texStorage2D(r.TEXTURE_2D, ie, ge, ne.width, ne.height), U && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ne.width, ne.height, Fe, ve, ne.data)) : t.texImage2D(r.TEXTURE_2D, 0, ge, ne.width, ne.height, 0, Fe, ve, ne.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          oe && Te && t.texStorage3D(r.TEXTURE_2D_ARRAY, ie, ge, J[0].width, J[0].height, ne.depth);
          for (let N = 0, le = J.length; N < le; N++)
            A = J[N], x.format !== ci ? Fe !== null ? oe ? U && t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, N, 0, 0, 0, A.width, A.height, ne.depth, Fe, A.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, N, ge, A.width, A.height, ne.depth, 0, A.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : oe ? U && t.texSubImage3D(r.TEXTURE_2D_ARRAY, N, 0, 0, 0, A.width, A.height, ne.depth, Fe, ve, A.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, N, ge, A.width, A.height, ne.depth, 0, Fe, ve, A.data);
        } else {
          oe && Te && t.texStorage2D(r.TEXTURE_2D, ie, ge, J[0].width, J[0].height);
          for (let N = 0, le = J.length; N < le; N++)
            A = J[N], x.format !== ci ? Fe !== null ? oe ? U && t.compressedTexSubImage2D(r.TEXTURE_2D, N, 0, 0, A.width, A.height, Fe, A.data) : t.compressedTexImage2D(r.TEXTURE_2D, N, ge, A.width, A.height, 0, A.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : oe ? U && t.texSubImage2D(r.TEXTURE_2D, N, 0, 0, A.width, A.height, Fe, ve, A.data) : t.texImage2D(r.TEXTURE_2D, N, ge, A.width, A.height, 0, Fe, ve, A.data);
        }
      else if (x.isDataArrayTexture)
        oe ? (Te && t.texStorage3D(r.TEXTURE_2D_ARRAY, ie, ge, ne.width, ne.height, ne.depth), U && t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ne.width, ne.height, ne.depth, Fe, ve, ne.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ge, ne.width, ne.height, ne.depth, 0, Fe, ve, ne.data);
      else if (x.isData3DTexture)
        oe ? (Te && t.texStorage3D(r.TEXTURE_3D, ie, ge, ne.width, ne.height, ne.depth), U && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, ne.width, ne.height, ne.depth, Fe, ve, ne.data)) : t.texImage3D(r.TEXTURE_3D, 0, ge, ne.width, ne.height, ne.depth, 0, Fe, ve, ne.data);
      else if (x.isFramebufferTexture) {
        if (Te)
          if (oe)
            t.texStorage2D(r.TEXTURE_2D, ie, ge, ne.width, ne.height);
          else {
            let N = ne.width, le = ne.height;
            for (let se = 0; se < ie; se++)
              t.texImage2D(r.TEXTURE_2D, se, ge, N, le, 0, Fe, ve, null), N >>= 1, le >>= 1;
          }
      } else if (J.length > 0 && nt) {
        if (oe && Te) {
          const N = Je(J[0]);
          t.texStorage2D(r.TEXTURE_2D, ie, ge, N.width, N.height);
        }
        for (let N = 0, le = J.length; N < le; N++)
          A = J[N], oe ? U && t.texSubImage2D(r.TEXTURE_2D, N, 0, 0, Fe, ve, A) : t.texImage2D(r.TEXTURE_2D, N, ge, Fe, ve, A);
        x.generateMipmaps = !1;
      } else if (oe) {
        if (Te) {
          const N = Je(ne);
          t.texStorage2D(r.TEXTURE_2D, ie, ge, N.width, N.height);
        }
        U && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Fe, ve, ne);
      } else
        t.texImage2D(r.TEXTURE_2D, 0, ge, Fe, ve, ne);
      v(x, nt) && T(Z), Ce.__version = $.version, x.onUpdate && x.onUpdate(x);
    }
    R.__version = x.version;
  }
  function we(R, x, k) {
    if (x.image.length !== 6)
      return;
    const Z = re(R, x), te = x.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, R.__webglTexture, r.TEXTURE0 + k);
    const $ = i.get(te);
    if (te.version !== $.__version || Z === !0) {
      t.activeTexture(r.TEXTURE0 + k);
      const Ce = qe.getPrimaries(qe.workingColorSpace), Se = x.colorSpace === Gi ? null : qe.getPrimaries(x.colorSpace), ae = x.colorSpace === Gi || Ce === Se ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ae);
      const he = x.isCompressedTexture || x.image[0].isCompressedTexture, Le = x.image[0] && x.image[0].isDataTexture, ne = [];
      for (let N = 0; N < 6; N++)
        !he && !Le ? ne[N] = f(x.image[N], !1, !0, n.maxCubemapSize) : ne[N] = Le ? x.image[N].image : x.image[N], ne[N] = De(x, ne[N]);
      const nt = ne[0], Fe = p(nt) || s, ve = a.convert(x.format, x.colorSpace), ge = a.convert(x.type), A = C(x.internalFormat, ve, ge, x.colorSpace), J = s && x.isVideoTexture !== !0, oe = $.__version === void 0 || Z === !0, Te = te.dataReady;
      let U = b(x, nt, Fe);
      H(r.TEXTURE_CUBE_MAP, x, Fe);
      let ie;
      if (he) {
        J && oe && t.texStorage2D(r.TEXTURE_CUBE_MAP, U, A, nt.width, nt.height);
        for (let N = 0; N < 6; N++) {
          ie = ne[N].mipmaps;
          for (let le = 0; le < ie.length; le++) {
            const se = ie[le];
            x.format !== ci ? ve !== null ? J ? Te && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le, 0, 0, se.width, se.height, ve, se.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le, A, se.width, se.height, 0, se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : J ? Te && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le, 0, 0, se.width, se.height, ve, ge, se.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le, A, se.width, se.height, 0, ve, ge, se.data);
          }
        }
      } else {
        if (ie = x.mipmaps, J && oe) {
          ie.length > 0 && U++;
          const N = Je(ne[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, U, A, N.width, N.height);
        }
        for (let N = 0; N < 6; N++)
          if (Le) {
            J ? Te && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0, 0, 0, ne[N].width, ne[N].height, ve, ge, ne[N].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0, A, ne[N].width, ne[N].height, 0, ve, ge, ne[N].data);
            for (let le = 0; le < ie.length; le++) {
              const se = ie[le].image[N].image;
              J ? Te && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le + 1, 0, 0, se.width, se.height, ve, ge, se.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le + 1, A, se.width, se.height, 0, ve, ge, se.data);
            }
          } else {
            J ? Te && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0, 0, 0, ve, ge, ne[N]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0, A, ve, ge, ne[N]);
            for (let le = 0; le < ie.length; le++) {
              const se = ie[le];
              J ? Te && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le + 1, 0, 0, ve, ge, se.image[N]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + N, le + 1, A, ve, ge, se.image[N]);
            }
          }
      }
      v(x, Fe) && T(r.TEXTURE_CUBE_MAP), $.__version = te.version, x.onUpdate && x.onUpdate(x);
    }
    R.__version = x.version;
  }
  function _e(R, x, k, Z, te, $) {
    const Ce = a.convert(k.format, k.colorSpace), Se = a.convert(k.type), ae = C(k.internalFormat, Ce, Se, k.colorSpace);
    if (!i.get(x).__hasExternalTextures) {
      const he = Math.max(1, x.width >> $), Le = Math.max(1, x.height >> $);
      te === r.TEXTURE_3D || te === r.TEXTURE_2D_ARRAY ? t.texImage3D(te, $, ae, he, Le, x.depth, 0, Ce, Se, null) : t.texImage2D(te, $, ae, he, Le, 0, Ce, Se, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, R), Ge(x) ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Z, te, i.get(k).__webglTexture, 0, ye(x)) : (te === r.TEXTURE_2D || te >= r.TEXTURE_CUBE_MAP_POSITIVE_X && te <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Z, te, i.get(k).__webglTexture, $), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function me(R, x, k) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, R), x.depthBuffer && !x.stencilBuffer) {
      let Z = s === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (k || Ge(x)) {
        const te = x.depthTexture;
        te && te.isDepthTexture && (te.type === Li ? Z = r.DEPTH_COMPONENT32F : te.type === Xi && (Z = r.DEPTH_COMPONENT24));
        const $ = ye(x);
        Ge(x) ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, $, Z, x.width, x.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, $, Z, x.width, x.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, Z, x.width, x.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, R);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const Z = ye(x);
      k && Ge(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Z, r.DEPTH24_STENCIL8, x.width, x.height) : Ge(x) ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Z, r.DEPTH24_STENCIL8, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, x.width, x.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, R);
    } else {
      const Z = x.textures;
      for (let te = 0; te < Z.length; te++) {
        const $ = Z[te], Ce = a.convert($.format, $.colorSpace), Se = a.convert($.type), ae = C($.internalFormat, Ce, Se, $.colorSpace), he = ye(x);
        k && Ge(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, he, ae, x.width, x.height) : Ge(x) ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, he, ae, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, ae, x.width, x.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function je(R, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, R), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!i.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), W(x.depthTexture, 0);
    const k = i.get(x.depthTexture).__webglTexture, Z = ye(x);
    if (x.depthTexture.format === Er)
      Ge(x) ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, k, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, k, 0);
    else if (x.depthTexture.format === vn)
      Ge(x) ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, k, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, k, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ae(R) {
    const x = i.get(R), k = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (k)
        throw new Error("target.depthTexture not supported in Cube render targets");
      je(x.__webglFramebuffer, R);
    } else if (k) {
      x.__webglDepthbuffer = [];
      for (let Z = 0; Z < 6; Z++)
        t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[Z]), x.__webglDepthbuffer[Z] = r.createRenderbuffer(), me(x.__webglDepthbuffer[Z], R, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = r.createRenderbuffer(), me(x.__webglDepthbuffer, R, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function O(R, x, k) {
    const Z = i.get(R);
    x !== void 0 && _e(Z.__webglFramebuffer, R, R.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), k !== void 0 && Ae(R);
  }
  function pt(R) {
    const x = R.texture, k = i.get(R), Z = i.get(x);
    R.addEventListener("dispose", X);
    const te = R.textures, $ = R.isWebGLCubeRenderTarget === !0, Ce = te.length > 1, Se = p(R) || s;
    if (Ce || (Z.__webglTexture === void 0 && (Z.__webglTexture = r.createTexture()), Z.__version = x.version, o.memory.textures++), $) {
      k.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (s && x.mipmaps && x.mipmaps.length > 0) {
          k.__webglFramebuffer[ae] = [];
          for (let he = 0; he < x.mipmaps.length; he++)
            k.__webglFramebuffer[ae][he] = r.createFramebuffer();
        } else
          k.__webglFramebuffer[ae] = r.createFramebuffer();
    } else {
      if (s && x.mipmaps && x.mipmaps.length > 0) {
        k.__webglFramebuffer = [];
        for (let ae = 0; ae < x.mipmaps.length; ae++)
          k.__webglFramebuffer[ae] = r.createFramebuffer();
      } else
        k.__webglFramebuffer = r.createFramebuffer();
      if (Ce)
        if (n.drawBuffers)
          for (let ae = 0, he = te.length; ae < he; ae++) {
            const Le = i.get(te[ae]);
            Le.__webglTexture === void 0 && (Le.__webglTexture = r.createTexture(), o.memory.textures++);
          }
        else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (s && R.samples > 0 && Ge(R) === !1) {
        k.__webglMultisampledFramebuffer = r.createFramebuffer(), k.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < te.length; ae++) {
          const he = te[ae];
          k.__webglColorRenderbuffer[ae] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, k.__webglColorRenderbuffer[ae]);
          const Le = a.convert(he.format, he.colorSpace), ne = a.convert(he.type), nt = C(he.internalFormat, Le, ne, he.colorSpace, R.isXRRenderTarget === !0), Fe = ye(R);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Fe, nt, R.width, R.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.RENDERBUFFER, k.__webglColorRenderbuffer[ae]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), R.depthBuffer && (k.__webglDepthRenderbuffer = r.createRenderbuffer(), me(k.__webglDepthRenderbuffer, R, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if ($) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, Z.__webglTexture), H(r.TEXTURE_CUBE_MAP, x, Se);
      for (let ae = 0; ae < 6; ae++)
        if (s && x.mipmaps && x.mipmaps.length > 0)
          for (let he = 0; he < x.mipmaps.length; he++)
            _e(k.__webglFramebuffer[ae][he], R, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ae, he);
        else
          _e(k.__webglFramebuffer[ae], R, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      v(x, Se) && T(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ce) {
      for (let ae = 0, he = te.length; ae < he; ae++) {
        const Le = te[ae], ne = i.get(Le);
        t.bindTexture(r.TEXTURE_2D, ne.__webglTexture), H(r.TEXTURE_2D, Le, Se), _e(k.__webglFramebuffer, R, Le, r.COLOR_ATTACHMENT0 + ae, r.TEXTURE_2D, 0), v(Le, Se) && T(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = r.TEXTURE_2D;
      if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (s ? ae = R.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ae, Z.__webglTexture), H(ae, x, Se), s && x.mipmaps && x.mipmaps.length > 0)
        for (let he = 0; he < x.mipmaps.length; he++)
          _e(k.__webglFramebuffer[he], R, x, r.COLOR_ATTACHMENT0, ae, he);
      else
        _e(k.__webglFramebuffer, R, x, r.COLOR_ATTACHMENT0, ae, 0);
      v(x, Se) && T(ae), t.unbindTexture();
    }
    R.depthBuffer && Ae(R);
  }
  function xe(R) {
    const x = p(R) || s, k = R.textures;
    for (let Z = 0, te = k.length; Z < te; Z++) {
      const $ = k[Z];
      if (v($, x)) {
        const Ce = R.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, Se = i.get($).__webglTexture;
        t.bindTexture(Ce, Se), T(Ce), t.unbindTexture();
      }
    }
  }
  function Pe(R) {
    if (s && R.samples > 0 && Ge(R) === !1) {
      const x = R.textures, k = R.width, Z = R.height;
      let te = r.COLOR_BUFFER_BIT;
      const $ = [], Ce = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Se = i.get(R), ae = x.length > 1;
      if (ae)
        for (let he = 0; he < x.length; he++)
          t.bindFramebuffer(r.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + he, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + he, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, Se.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Se.__webglFramebuffer);
      for (let he = 0; he < x.length; he++) {
        $.push(r.COLOR_ATTACHMENT0 + he), R.depthBuffer && $.push(Ce);
        const Le = Se.__ignoreDepthValues !== void 0 ? Se.__ignoreDepthValues : !1;
        if (Le === !1 && (R.depthBuffer && (te |= r.DEPTH_BUFFER_BIT), R.stencilBuffer && (te |= r.STENCIL_BUFFER_BIT)), ae && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Se.__webglColorRenderbuffer[he]), Le === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [Ce]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [Ce])), ae) {
          const ne = i.get(x[he]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, ne, 0);
        }
        r.blitFramebuffer(0, 0, k, Z, 0, 0, k, Z, te, r.NEAREST), c && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, $);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ae)
        for (let he = 0; he < x.length; he++) {
          t.bindFramebuffer(r.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + he, r.RENDERBUFFER, Se.__webglColorRenderbuffer[he]);
          const Le = i.get(x[he]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, Se.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + he, r.TEXTURE_2D, Le, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Se.__webglMultisampledFramebuffer);
    }
  }
  function ye(R) {
    return Math.min(n.maxSamples, R.samples);
  }
  function Ge(R) {
    const x = i.get(R);
    return s && R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function Ue(R) {
    const x = o.render.frame;
    u.get(R) !== x && (u.set(R, x), R.update());
  }
  function De(R, x) {
    const k = R.colorSpace, Z = R.format, te = R.type;
    return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || R.format === ho || k !== ir && k !== Gi && (qe.getTransfer(k) === $e ? s === !1 ? e.has("EXT_sRGB") === !0 && Z === ci ? (R.format = ho, R.minFilter = It, R.generateMipmaps = !1) : x = Zh.sRGBToLinear(x) : (Z !== ci || te !== Zi) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", k)), x;
  }
  function Je(R) {
    return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (h.width = R.naturalWidth || R.width, h.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (h.width = R.displayWidth, h.height = R.displayHeight) : (h.width = R.width, h.height = R.height), h;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = P, this.setTexture2D = W, this.setTexture2DArray = Y, this.setTexture3D = q, this.setTextureCube = ee, this.rebindTextures = O, this.setupRenderTarget = pt, this.updateRenderTargetMipmap = xe, this.updateMultisampleRenderTarget = Pe, this.setupDepthRenderbuffer = Ae, this.setupFrameBufferTexture = _e, this.useMultisampledRTT = Ge;
}
function a0(r, e, t) {
  const i = t.isWebGL2;
  function n(a, o = Gi) {
    let s;
    const l = qe.getTransfer(o);
    if (a === Zi)
      return r.UNSIGNED_BYTE;
    if (a === Gh)
      return r.UNSIGNED_SHORT_4_4_4_4;
    if (a === kh)
      return r.UNSIGNED_SHORT_5_5_5_1;
    if (a === Sp)
      return r.BYTE;
    if (a === Tp)
      return r.SHORT;
    if (a === Io)
      return r.UNSIGNED_SHORT;
    if (a === Hh)
      return r.INT;
    if (a === Xi)
      return r.UNSIGNED_INT;
    if (a === Li)
      return r.FLOAT;
    if (a === jn)
      return i ? r.HALF_FLOAT : (s = e.get("OES_texture_half_float"), s !== null ? s.HALF_FLOAT_OES : null);
    if (a === Ep)
      return r.ALPHA;
    if (a === ci)
      return r.RGBA;
    if (a === bp)
      return r.LUMINANCE;
    if (a === Ap)
      return r.LUMINANCE_ALPHA;
    if (a === Er)
      return r.DEPTH_COMPONENT;
    if (a === vn)
      return r.DEPTH_STENCIL;
    if (a === ho)
      return s = e.get("EXT_sRGB"), s !== null ? s.SRGB_ALPHA_EXT : null;
    if (a === wp)
      return r.RED;
    if (a === Vh)
      return r.RED_INTEGER;
    if (a === Rp)
      return r.RG;
    if (a === Wh)
      return r.RG_INTEGER;
    if (a === Xh)
      return r.RGBA_INTEGER;
    if (a === cs || a === hs || a === us || a === ds)
      if (l === $e)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (a === cs)
            return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (a === hs)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (a === us)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (a === ds)
            return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (a === cs)
          return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === hs)
          return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === us)
          return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === ds)
          return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (a === ml || a === gl || a === _l || a === vl)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (a === ml)
          return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === gl)
          return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === _l)
          return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === vl)
          return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (a === jh)
      return s = e.get("WEBGL_compressed_texture_etc1"), s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (a === xl || a === Ml)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (a === xl)
          return l === $e ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (a === Ml)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (a === yl || a === Sl || a === Tl || a === El || a === bl || a === Al || a === wl || a === Rl || a === Cl || a === Ll || a === Pl || a === Ul || a === Dl || a === Il)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (a === yl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (a === Sl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (a === Tl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (a === El)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (a === bl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (a === Al)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (a === wl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (a === Rl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (a === Cl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (a === Ll)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (a === Pl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (a === Ul)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (a === Dl)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (a === Il)
          return l === $e ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (a === ps || a === Ol || a === Nl)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (a === ps)
          return l === $e ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (a === Ol)
          return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (a === Nl)
          return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (a === Cp || a === Fl || a === Bl || a === zl)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (a === ps)
          return s.COMPRESSED_RED_RGTC1_EXT;
        if (a === Fl)
          return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (a === Bl)
          return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (a === zl)
          return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return a === Tr ? i ? r.UNSIGNED_INT_24_8 : (s = e.get("WEBGL_depth_texture"), s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null) : r[a] !== void 0 ? r[a] : null;
  }
  return { convert: n };
}
class s0 extends Yt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Dn extends Gt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const o0 = { type: "move" };
class Bs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Dn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Dn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Dn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const i of e.hand.values())
          this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, i) {
    let n = null, a = null, o = null;
    const s = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const f = t.getJointPose(_, i), p = this._getHandJoint(c, _);
          f !== null && (p.matrix.fromArray(f.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = f.radius), p.visible = f !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), g = 0.02, m = 5e-3;
        c.inputState.pinching && d > g + m ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= g - m && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (a = t.getPose(e.gripSpace, i), a !== null && (l.matrix.fromArray(a.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, a.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(a.linearVelocity)) : l.hasLinearVelocity = !1, a.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(a.angularVelocity)) : l.hasAngularVelocity = !1));
      s !== null && (n = t.getPose(e.targetRaySpace, i), n === null && a !== null && (n = a), n !== null && (s.matrix.fromArray(n.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, n.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(n.linearVelocity)) : s.hasLinearVelocity = !1, n.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(n.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(o0)));
    }
    return s !== null && (s.visible = n !== null), l !== null && (l.visible = a !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new Dn();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
const l0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, c0 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class h0 {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, i) {
    if (this.texture === null) {
      const n = new Ht(), a = e.properties.get(n);
      a.__webglTexture = t.texture, (t.depthNear != i.depthNear || t.depthFar != i.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = n;
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const i = t.cameras[0].viewport, n = new er({
          extensions: { fragDepth: !0 },
          vertexShader: l0,
          fragmentShader: c0,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: i.z },
            depthHeight: { value: i.w }
          }
        });
        this.mesh = new Ut(new ja(20, 20), n);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class u0 extends Ur {
  constructor(e, t) {
    super();
    const i = this;
    let n = null, a = 1, o = null, s = "local-floor", l = 1, c = null, h = null, u = null, d = null, g = null, m = null;
    const _ = new h0(), f = t.getContextAttributes();
    let p = null, y = null;
    const v = [], T = [], C = new be();
    let b = null;
    const E = new Yt();
    E.layers.enable(1), E.viewport = new et();
    const L = new Yt();
    L.layers.enable(2), L.viewport = new et();
    const X = [E, L], M = new s0();
    M.layers.enable(1), M.layers.enable(2);
    let w = null, j = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(H) {
      let re = v[H];
      return re === void 0 && (re = new Bs(), v[H] = re), re.getTargetRaySpace();
    }, this.getControllerGrip = function(H) {
      let re = v[H];
      return re === void 0 && (re = new Bs(), v[H] = re), re.getGripSpace();
    }, this.getHand = function(H) {
      let re = v[H];
      return re === void 0 && (re = new Bs(), v[H] = re), re.getHandSpace();
    };
    function K(H) {
      const re = T.indexOf(H.inputSource);
      if (re === -1)
        return;
      const pe = v[re];
      pe !== void 0 && (pe.update(H.inputSource, H.frame, c || o), pe.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function P() {
      n.removeEventListener("select", K), n.removeEventListener("selectstart", K), n.removeEventListener("selectend", K), n.removeEventListener("squeeze", K), n.removeEventListener("squeezestart", K), n.removeEventListener("squeezeend", K), n.removeEventListener("end", P), n.removeEventListener("inputsourceschange", V);
      for (let H = 0; H < v.length; H++) {
        const re = T[H];
        re !== null && (T[H] = null, v[H].disconnect(re));
      }
      w = null, j = null, _.reset(), e.setRenderTarget(p), g = null, d = null, u = null, n = null, y = null, fe.stop(), i.isPresenting = !1, e.setPixelRatio(b), e.setSize(C.width, C.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(H) {
      a = H, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(H) {
      s = H, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(H) {
      c = H;
    }, this.getBaseLayer = function() {
      return d !== null ? d : g;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return n;
    }, this.setSession = async function(H) {
      if (n = H, n !== null) {
        if (p = e.getRenderTarget(), n.addEventListener("select", K), n.addEventListener("selectstart", K), n.addEventListener("selectend", K), n.addEventListener("squeeze", K), n.addEventListener("squeezestart", K), n.addEventListener("squeezeend", K), n.addEventListener("end", P), n.addEventListener("inputsourceschange", V), f.xrCompatible !== !0 && await t.makeXRCompatible(), b = e.getPixelRatio(), e.getSize(C), n.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const re = {
            antialias: n.renderState.layers === void 0 ? f.antialias : !0,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: a
          };
          g = new XRWebGLLayer(n, t, re), n.updateRenderState({ baseLayer: g }), e.setPixelRatio(1), e.setSize(g.framebufferWidth, g.framebufferHeight, !1), y = new Rr(
            g.framebufferWidth,
            g.framebufferHeight,
            {
              format: ci,
              type: Zi,
              colorSpace: e.outputColorSpace,
              stencilBuffer: f.stencil
            }
          );
        } else {
          let re = null, pe = null, we = null;
          f.depth && (we = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, re = f.stencil ? vn : Er, pe = f.stencil ? Tr : Xi);
          const _e = {
            colorFormat: t.RGBA8,
            depthFormat: we,
            scaleFactor: a
          };
          u = new XRWebGLBinding(n, t), d = u.createProjectionLayer(_e), n.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new Rr(
            d.textureWidth,
            d.textureHeight,
            {
              format: ci,
              type: Zi,
              depthTexture: new cu(d.textureWidth, d.textureHeight, pe, void 0, void 0, void 0, void 0, void 0, void 0, re),
              stencilBuffer: f.stencil,
              colorSpace: e.outputColorSpace,
              samples: f.antialias ? 4 : 0
            }
          );
          const me = e.properties.get(y);
          me.__ignoreDepthValues = d.ignoreDepthValues;
        }
        y.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await n.requestReferenceSpace(s), fe.setContext(n), fe.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (n !== null)
        return n.environmentBlendMode;
    };
    function V(H) {
      for (let re = 0; re < H.removed.length; re++) {
        const pe = H.removed[re], we = T.indexOf(pe);
        we >= 0 && (T[we] = null, v[we].disconnect(pe));
      }
      for (let re = 0; re < H.added.length; re++) {
        const pe = H.added[re];
        let we = T.indexOf(pe);
        if (we === -1) {
          for (let me = 0; me < v.length; me++)
            if (me >= T.length) {
              T.push(pe), we = me;
              break;
            } else if (T[me] === null) {
              T[me] = pe, we = me;
              break;
            }
          if (we === -1)
            break;
        }
        const _e = v[we];
        _e && _e.connect(pe);
      }
    }
    const B = new D(), W = new D();
    function Y(H, re, pe) {
      B.setFromMatrixPosition(re.matrixWorld), W.setFromMatrixPosition(pe.matrixWorld);
      const we = B.distanceTo(W), _e = re.projectionMatrix.elements, me = pe.projectionMatrix.elements, je = _e[14] / (_e[10] - 1), Ae = _e[14] / (_e[10] + 1), O = (_e[9] + 1) / _e[5], pt = (_e[9] - 1) / _e[5], xe = (_e[8] - 1) / _e[0], Pe = (me[8] + 1) / me[0], ye = je * xe, Ge = je * Pe, Ue = we / (-xe + Pe), De = Ue * -xe;
      re.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(De), H.translateZ(Ue), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const Je = je + Ue, R = Ae + Ue, x = ye - De, k = Ge + (we - De), Z = O * Ae / R * Je, te = pt * Ae / R * Je;
      H.projectionMatrix.makePerspective(x, k, Z, te, Je, R), H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
    }
    function q(H, re) {
      re === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(re.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function(H) {
      if (n === null)
        return;
      _.texture !== null && (H.near = _.depthNear, H.far = _.depthFar), M.near = L.near = E.near = H.near, M.far = L.far = E.far = H.far, (w !== M.near || j !== M.far) && (n.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), w = M.near, j = M.far, E.near = w, E.far = j, L.near = w, L.far = j, E.updateProjectionMatrix(), L.updateProjectionMatrix(), H.updateProjectionMatrix());
      const re = H.parent, pe = M.cameras;
      q(M, re);
      for (let we = 0; we < pe.length; we++)
        q(pe[we], re);
      pe.length === 2 ? Y(M, E, L) : M.projectionMatrix.copy(E.projectionMatrix), ee(H, M, re);
    };
    function ee(H, re, pe) {
      pe === null ? H.matrix.copy(re.matrixWorld) : (H.matrix.copy(pe.matrixWorld), H.matrix.invert(), H.matrix.multiply(re.matrixWorld)), H.matrix.decompose(H.position, H.quaternion, H.scale), H.updateMatrixWorld(!0), H.projectionMatrix.copy(re.projectionMatrix), H.projectionMatrixInverse.copy(re.projectionMatrixInverse), H.isPerspectiveCamera && (H.fov = Yn * 2 * Math.atan(1 / H.projectionMatrix.elements[5]), H.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && g === null))
        return l;
    }, this.setFoveation = function(H) {
      l = H, d !== null && (d.fixedFoveation = H), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = H);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    };
    let Q = null;
    function de(H, re) {
      if (h = re.getViewerPose(c || o), m = re, h !== null) {
        const pe = h.views;
        g !== null && (e.setRenderTargetFramebuffer(y, g.framebuffer), e.setRenderTarget(y));
        let we = !1;
        pe.length !== M.cameras.length && (M.cameras.length = 0, we = !0);
        for (let me = 0; me < pe.length; me++) {
          const je = pe[me];
          let Ae = null;
          if (g !== null)
            Ae = g.getViewport(je);
          else {
            const pt = u.getViewSubImage(d, je);
            Ae = pt.viewport, me === 0 && (e.setRenderTargetTextures(
              y,
              pt.colorTexture,
              d.ignoreDepthValues ? void 0 : pt.depthStencilTexture
            ), e.setRenderTarget(y));
          }
          let O = X[me];
          O === void 0 && (O = new Yt(), O.layers.enable(me), O.viewport = new et(), X[me] = O), O.matrix.fromArray(je.transform.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale), O.projectionMatrix.fromArray(je.projectionMatrix), O.projectionMatrixInverse.copy(O.projectionMatrix).invert(), O.viewport.set(Ae.x, Ae.y, Ae.width, Ae.height), me === 0 && (M.matrix.copy(O.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), we === !0 && M.cameras.push(O);
        }
        const _e = n.enabledFeatures;
        if (_e && _e.includes("depth-sensing")) {
          const me = u.getDepthInformation(pe[0]);
          me && me.isValid && me.texture && _.init(e, me, n.renderState);
        }
      }
      for (let pe = 0; pe < v.length; pe++) {
        const we = T[pe], _e = v[pe];
        we !== null && _e !== void 0 && _e.update(we, re, c || o);
      }
      _.render(e, M), Q && Q(H, re), re.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: re }), m = null;
    }
    const fe = new lu();
    fe.setAnimationLoop(de), this.setAnimationLoop = function(H) {
      Q = H;
    }, this.dispose = function() {
    };
  }
}
const dr = /* @__PURE__ */ new xi(), d0 = /* @__PURE__ */ new ot();
function p0(r, e) {
  function t(f, p) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), p.value.copy(f.matrix);
  }
  function i(f, p) {
    p.color.getRGB(f.fogColor.value, au(r)), p.isFog ? (f.fogNear.value = p.near, f.fogFar.value = p.far) : p.isFogExp2 && (f.fogDensity.value = p.density);
  }
  function n(f, p, y, v, T) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? a(f, p) : p.isMeshToonMaterial ? (a(f, p), u(f, p)) : p.isMeshPhongMaterial ? (a(f, p), h(f, p)) : p.isMeshStandardMaterial ? (a(f, p), d(f, p), p.isMeshPhysicalMaterial && g(f, p, T)) : p.isMeshMatcapMaterial ? (a(f, p), m(f, p)) : p.isMeshDepthMaterial ? a(f, p) : p.isMeshDistanceMaterial ? (a(f, p), _(f, p)) : p.isMeshNormalMaterial ? a(f, p) : p.isLineBasicMaterial ? (o(f, p), p.isLineDashedMaterial && s(f, p)) : p.isPointsMaterial ? l(f, p, y, v) : p.isSpriteMaterial ? c(f, p) : p.isShadowMaterial ? (f.color.value.copy(p.color), f.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function a(f, p) {
    f.opacity.value = p.opacity, p.color && f.diffuse.value.copy(p.color), p.emissive && f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.bumpMap && (f.bumpMap.value = p.bumpMap, t(p.bumpMap, f.bumpMapTransform), f.bumpScale.value = p.bumpScale, p.side === zt && (f.bumpScale.value *= -1)), p.normalMap && (f.normalMap.value = p.normalMap, t(p.normalMap, f.normalMapTransform), f.normalScale.value.copy(p.normalScale), p.side === zt && f.normalScale.value.negate()), p.displacementMap && (f.displacementMap.value = p.displacementMap, t(p.displacementMap, f.displacementMapTransform), f.displacementScale.value = p.displacementScale, f.displacementBias.value = p.displacementBias), p.emissiveMap && (f.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, f.emissiveMapTransform)), p.specularMap && (f.specularMap.value = p.specularMap, t(p.specularMap, f.specularMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
    const y = e.get(p), v = y.envMap, T = y.envMapRotation;
    if (v && (f.envMap.value = v, dr.copy(T), dr.x *= -1, dr.y *= -1, dr.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (dr.y *= -1, dr.z *= -1), f.envMapRotation.value.setFromMatrix4(d0.makeRotationFromEuler(dr)), f.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, f.reflectivity.value = p.reflectivity, f.ior.value = p.ior, f.refractionRatio.value = p.refractionRatio), p.lightMap) {
      f.lightMap.value = p.lightMap;
      const C = r._useLegacyLights === !0 ? Math.PI : 1;
      f.lightMapIntensity.value = p.lightMapIntensity * C, t(p.lightMap, f.lightMapTransform);
    }
    p.aoMap && (f.aoMap.value = p.aoMap, f.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, f.aoMapTransform));
  }
  function o(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, p.map && (f.map.value = p.map, t(p.map, f.mapTransform));
  }
  function s(f, p) {
    f.dashSize.value = p.dashSize, f.totalSize.value = p.dashSize + p.gapSize, f.scale.value = p.scale;
  }
  function l(f, p, y, v) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.size.value = p.size * y, f.scale.value = v * 0.5, p.map && (f.map.value = p.map, t(p.map, f.uvTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function c(f, p) {
    f.diffuse.value.copy(p.color), f.opacity.value = p.opacity, f.rotation.value = p.rotation, p.map && (f.map.value = p.map, t(p.map, f.mapTransform)), p.alphaMap && (f.alphaMap.value = p.alphaMap, t(p.alphaMap, f.alphaMapTransform)), p.alphaTest > 0 && (f.alphaTest.value = p.alphaTest);
  }
  function h(f, p) {
    f.specular.value.copy(p.specular), f.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(f, p) {
    p.gradientMap && (f.gradientMap.value = p.gradientMap);
  }
  function d(f, p) {
    f.metalness.value = p.metalness, p.metalnessMap && (f.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, f.metalnessMapTransform)), f.roughness.value = p.roughness, p.roughnessMap && (f.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, f.roughnessMapTransform)), e.get(p).envMap && (f.envMapIntensity.value = p.envMapIntensity);
  }
  function g(f, p, y) {
    f.ior.value = p.ior, p.sheen > 0 && (f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), f.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (f.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, f.sheenColorMapTransform)), p.sheenRoughnessMap && (f.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, f.sheenRoughnessMapTransform))), p.clearcoat > 0 && (f.clearcoat.value = p.clearcoat, f.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (f.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, f.clearcoatMapTransform)), p.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (f.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, f.clearcoatNormalMapTransform), f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === zt && f.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (f.iridescence.value = p.iridescence, f.iridescenceIOR.value = p.iridescenceIOR, f.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], f.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (f.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, f.iridescenceMapTransform)), p.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))), p.transmission > 0 && (f.transmission.value = p.transmission, f.transmissionSamplerMap.value = y.texture, f.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (f.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, f.transmissionMapTransform)), f.thickness.value = p.thickness, p.thicknessMap && (f.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, f.thicknessMapTransform)), f.attenuationDistance.value = p.attenuationDistance, f.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (f.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (f.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, f.anisotropyMapTransform))), f.specularIntensity.value = p.specularIntensity, f.specularColor.value.copy(p.specularColor), p.specularColorMap && (f.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, f.specularColorMapTransform)), p.specularIntensityMap && (f.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function m(f, p) {
    p.matcap && (f.matcap.value = p.matcap);
  }
  function _(f, p) {
    const y = e.get(p).light;
    f.referencePosition.value.setFromMatrixPosition(y.matrixWorld), f.nearDistance.value = y.shadow.camera.near, f.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: n
  };
}
function f0(r, e, t, i) {
  let n = {}, a = {}, o = [];
  const s = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(y, v) {
    const T = v.program;
    i.uniformBlockBinding(y, T);
  }
  function c(y, v) {
    let T = n[y.id];
    T === void 0 && (m(y), T = h(y), n[y.id] = T, y.addEventListener("dispose", f));
    const C = v.program;
    i.updateUBOMapping(y, C);
    const b = e.render.frame;
    a[y.id] !== b && (d(y), a[y.id] = b);
  }
  function h(y) {
    const v = u();
    y.__bindingPointIndex = v;
    const T = r.createBuffer(), C = y.__size, b = y.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, T), r.bufferData(r.UNIFORM_BUFFER, C, b), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, T), T;
  }
  function u() {
    for (let y = 0; y < s; y++)
      if (o.indexOf(y) === -1)
        return o.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const v = n[y.id], T = y.uniforms, C = y.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let b = 0, E = T.length; b < E; b++) {
      const L = Array.isArray(T[b]) ? T[b] : [T[b]];
      for (let X = 0, M = L.length; X < M; X++) {
        const w = L[X];
        if (g(w, b, X, C) === !0) {
          const j = w.__offset, K = Array.isArray(w.value) ? w.value : [w.value];
          let P = 0;
          for (let V = 0; V < K.length; V++) {
            const B = K[V], W = _(B);
            typeof B == "number" || typeof B == "boolean" ? (w.__data[0] = B, r.bufferSubData(r.UNIFORM_BUFFER, j + P, w.__data)) : B.isMatrix3 ? (w.__data[0] = B.elements[0], w.__data[1] = B.elements[1], w.__data[2] = B.elements[2], w.__data[3] = 0, w.__data[4] = B.elements[3], w.__data[5] = B.elements[4], w.__data[6] = B.elements[5], w.__data[7] = 0, w.__data[8] = B.elements[6], w.__data[9] = B.elements[7], w.__data[10] = B.elements[8], w.__data[11] = 0) : (B.toArray(w.__data, P), P += W.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, j, w.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function g(y, v, T, C) {
    const b = y.value, E = v + "_" + T;
    if (C[E] === void 0)
      return typeof b == "number" || typeof b == "boolean" ? C[E] = b : C[E] = b.clone(), !0;
    {
      const L = C[E];
      if (typeof b == "number" || typeof b == "boolean") {
        if (L !== b)
          return C[E] = b, !0;
      } else if (L.equals(b) === !1)
        return L.copy(b), !0;
    }
    return !1;
  }
  function m(y) {
    const v = y.uniforms;
    let T = 0;
    const C = 16;
    for (let E = 0, L = v.length; E < L; E++) {
      const X = Array.isArray(v[E]) ? v[E] : [v[E]];
      for (let M = 0, w = X.length; M < w; M++) {
        const j = X[M], K = Array.isArray(j.value) ? j.value : [j.value];
        for (let P = 0, V = K.length; P < V; P++) {
          const B = K[P], W = _(B), Y = T % C;
          Y !== 0 && C - Y < W.boundary && (T += C - Y), j.__data = new Float32Array(W.storage / Float32Array.BYTES_PER_ELEMENT), j.__offset = T, T += W.storage;
        }
      }
    }
    const b = T % C;
    return b > 0 && (T += C - b), y.__size = T, y.__cache = {}, this;
  }
  function _(y) {
    const v = {
      boundary: 0,
      storage: 0
    };
    return typeof y == "number" || typeof y == "boolean" ? (v.boundary = 4, v.storage = 4) : y.isVector2 ? (v.boundary = 8, v.storage = 8) : y.isVector3 || y.isColor ? (v.boundary = 16, v.storage = 12) : y.isVector4 ? (v.boundary = 16, v.storage = 16) : y.isMatrix3 ? (v.boundary = 48, v.storage = 48) : y.isMatrix4 ? (v.boundary = 64, v.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), v;
  }
  function f(y) {
    const v = y.target;
    v.removeEventListener("dispose", f);
    const T = o.indexOf(v.__bindingPointIndex);
    o.splice(T, 1), r.deleteBuffer(n[v.id]), delete n[v.id], delete a[v.id];
  }
  function p() {
    for (const y in n)
      r.deleteBuffer(n[y]);
    o = [], n = {}, a = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class mu {
  constructor(e = {}) {
    const {
      canvas: t = tf(),
      context: i = null,
      depth: n = !0,
      stencil: a = !0,
      alpha: o = !1,
      antialias: s = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    i !== null ? d = i.getContextAttributes().alpha : d = o;
    const g = new Uint32Array(4), m = new Int32Array(4);
    let _ = null, f = null;
    const p = [], y = [];
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ui, this._useLegacyLights = !1, this.toneMapping = Ki, this.toneMappingExposure = 1;
    const v = this;
    let T = !1, C = 0, b = 0, E = null, L = -1, X = null;
    const M = new et(), w = new et();
    let j = null;
    const K = new We(0);
    let P = 0, V = t.width, B = t.height, W = 1, Y = null, q = null;
    const ee = new et(0, 0, V, B), Q = new et(0, 0, V, B);
    let de = !1;
    const fe = new Bo();
    let H = !1, re = !1, pe = null;
    const we = new ot(), _e = new be(), me = new D(), je = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ae() {
      return E === null ? W : 1;
    }
    let O = i;
    function pt(S, I) {
      for (let z = 0; z < S.length; z++) {
        const G = S[z], F = t.getContext(G, I);
        if (F !== null)
          return F;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: n,
        stencil: a,
        antialias: s,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Do}`), t.addEventListener("webglcontextlost", Te, !1), t.addEventListener("webglcontextrestored", U, !1), t.addEventListener("webglcontextcreationerror", ie, !1), O === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === !0 && I.shift(), O = pt(I, S), O === null)
          throw pt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && O instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), O.getShaderPrecisionFormat === void 0 && (O.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let xe, Pe, ye, Ge, Ue, De, Je, R, x, k, Z, te, $, Ce, Se, ae, he, Le, ne, nt, Fe, ve, ge, A;
    function J() {
      xe = new M_(O), Pe = new p_(O, xe, e), xe.init(Pe), ve = new a0(O, xe, Pe), ye = new r0(O, xe, Pe), Ge = new T_(O), Ue = new Vv(), De = new n0(O, xe, ye, Ue, Pe, ve, Ge), Je = new m_(v), R = new x_(v), x = new Rf(O, Pe), ge = new u_(O, xe, x, Pe), k = new y_(O, x, Ge, ge), Z = new w_(O, k, x, Ge), ne = new A_(O, Pe, De), ae = new f_(Ue), te = new kv(v, Je, R, xe, Pe, ge, ae), $ = new p0(v, Ue), Ce = new Xv(), Se = new Jv(xe, Pe), Le = new h_(v, Je, R, ye, Z, d, l), he = new i0(v, Z, Pe), A = new f0(O, Ge, Pe, ye), nt = new d_(O, xe, Ge, Pe), Fe = new S_(O, xe, Ge, Pe), Ge.programs = te.programs, v.capabilities = Pe, v.extensions = xe, v.properties = Ue, v.renderLists = Ce, v.shadowMap = he, v.state = ye, v.info = Ge;
    }
    J();
    const oe = new u0(v, O);
    this.xr = oe, this.getContext = function() {
      return O;
    }, this.getContextAttributes = function() {
      return O.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = xe.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = xe.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return W;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (W = S, this.setSize(V, B, !1));
    }, this.getSize = function(S) {
      return S.set(V, B);
    }, this.setSize = function(S, I, z = !0) {
      if (oe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      V = S, B = I, t.width = Math.floor(S * W), t.height = Math.floor(I * W), z === !0 && (t.style.width = S + "px", t.style.height = I + "px"), this.setViewport(0, 0, S, I);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(V * W, B * W).floor();
    }, this.setDrawingBufferSize = function(S, I, z) {
      V = S, B = I, W = z, t.width = Math.floor(S * z), t.height = Math.floor(I * z), this.setViewport(0, 0, S, I);
    }, this.getCurrentViewport = function(S) {
      return S.copy(M);
    }, this.getViewport = function(S) {
      return S.copy(ee);
    }, this.setViewport = function(S, I, z, G) {
      S.isVector4 ? ee.set(S.x, S.y, S.z, S.w) : ee.set(S, I, z, G), ye.viewport(M.copy(ee).multiplyScalar(W).round());
    }, this.getScissor = function(S) {
      return S.copy(Q);
    }, this.setScissor = function(S, I, z, G) {
      S.isVector4 ? Q.set(S.x, S.y, S.z, S.w) : Q.set(S, I, z, G), ye.scissor(w.copy(Q).multiplyScalar(W).round());
    }, this.getScissorTest = function() {
      return de;
    }, this.setScissorTest = function(S) {
      ye.setScissorTest(de = S);
    }, this.setOpaqueSort = function(S) {
      Y = S;
    }, this.setTransparentSort = function(S) {
      q = S;
    }, this.getClearColor = function(S) {
      return S.copy(Le.getClearColor());
    }, this.setClearColor = function() {
      Le.setClearColor.apply(Le, arguments);
    }, this.getClearAlpha = function() {
      return Le.getClearAlpha();
    }, this.setClearAlpha = function() {
      Le.setClearAlpha.apply(Le, arguments);
    }, this.clear = function(S = !0, I = !0, z = !0) {
      let G = 0;
      if (S) {
        let F = !1;
        if (E !== null) {
          const ue = E.texture.format;
          F = ue === Xh || ue === Wh || ue === Vh;
        }
        if (F) {
          const ue = E.texture.type, Me = ue === Zi || ue === Xi || ue === Io || ue === Tr || ue === Gh || ue === kh, Ee = Le.getClearColor(), Re = Le.getClearAlpha(), Ve = Ee.r, ze = Ee.g, He = Ee.b;
          Me ? (g[0] = Ve, g[1] = ze, g[2] = He, g[3] = Re, O.clearBufferuiv(O.COLOR, 0, g)) : (m[0] = Ve, m[1] = ze, m[2] = He, m[3] = Re, O.clearBufferiv(O.COLOR, 0, m));
        } else
          G |= O.COLOR_BUFFER_BIT;
      }
      I && (G |= O.DEPTH_BUFFER_BIT), z && (G |= O.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), O.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Te, !1), t.removeEventListener("webglcontextrestored", U, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), Ce.dispose(), Se.dispose(), Ue.dispose(), Je.dispose(), R.dispose(), Z.dispose(), ge.dispose(), A.dispose(), te.dispose(), oe.dispose(), oe.removeEventListener("sessionstart", at), oe.removeEventListener("sessionend", Ye), pe && (pe.dispose(), pe = null), ht.stop();
    };
    function Te(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0;
    }
    function U() {
      console.log("THREE.WebGLRenderer: Context Restored."), T = !1;
      const S = Ge.autoReset, I = he.enabled, z = he.autoUpdate, G = he.needsUpdate, F = he.type;
      J(), Ge.autoReset = S, he.enabled = I, he.autoUpdate = z, he.needsUpdate = G, he.type = F;
    }
    function ie(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function N(S) {
      const I = S.target;
      I.removeEventListener("dispose", N), le(I);
    }
    function le(S) {
      se(S), Ue.remove(S);
    }
    function se(S) {
      const I = Ue.get(S).programs;
      I !== void 0 && (I.forEach(function(z) {
        te.releaseProgram(z);
      }), S.isShaderMaterial && te.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, I, z, G, F, ue) {
      I === null && (I = je);
      const Me = F.isMesh && F.matrixWorld.determinant() < 0, Ee = vu(S, I, z, G, F);
      ye.setMaterial(G, Me);
      let Re = z.index, Ve = 1;
      if (G.wireframe === !0) {
        if (Re = k.getWireframeAttribute(z), Re === void 0)
          return;
        Ve = 2;
      }
      const ze = z.drawRange, He = z.attributes.position;
      let St = ze.start * Ve, ft = (ze.start + ze.count) * Ve;
      ue !== null && (St = Math.max(St, ue.start * Ve), ft = Math.min(ft, (ue.start + ue.count) * Ve)), Re !== null ? (St = Math.max(St, 0), ft = Math.min(ft, Re.count)) : He != null && (St = Math.max(St, 0), ft = Math.min(ft, He.count));
      const $t = ft - St;
      if ($t < 0 || $t === 1 / 0)
        return;
      ge.setup(F, G, Ee, z, Re);
      let Mi, lt = nt;
      if (Re !== null && (Mi = x.get(Re), lt = Fe, lt.setIndex(Mi)), F.isMesh)
        G.wireframe === !0 ? (ye.setLineWidth(G.wireframeLinewidth * Ae()), lt.setMode(O.LINES)) : lt.setMode(O.TRIANGLES);
      else if (F.isLine) {
        let Ie = G.linewidth;
        Ie === void 0 && (Ie = 1), ye.setLineWidth(Ie * Ae()), F.isLineSegments ? lt.setMode(O.LINES) : F.isLineLoop ? lt.setMode(O.LINE_LOOP) : lt.setMode(O.LINE_STRIP);
      } else
        F.isPoints ? lt.setMode(O.POINTS) : F.isSprite && lt.setMode(O.TRIANGLES);
      if (F.isBatchedMesh)
        lt.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
      else if (F.isInstancedMesh)
        lt.renderInstances(St, $t, F.count);
      else if (z.isInstancedBufferGeometry) {
        const Ie = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, qa = Math.min(z.instanceCount, Ie);
        lt.renderInstances(St, $t, qa);
      } else
        lt.render(St, $t);
    };
    function Be(S, I, z) {
      S.transparent === !0 && S.side === Ci && S.forceSinglePass === !1 ? (S.side = zt, S.needsUpdate = !0, Qn(S, I, z), S.side = Qi, S.needsUpdate = !0, Qn(S, I, z), S.side = Ci) : Qn(S, I, z);
    }
    this.compile = function(S, I, z = null) {
      z === null && (z = S), f = Se.get(z), f.init(), y.push(f), z.traverseVisible(function(F) {
        F.isLight && F.layers.test(I.layers) && (f.pushLight(F), F.castShadow && f.pushShadow(F));
      }), S !== z && S.traverseVisible(function(F) {
        F.isLight && F.layers.test(I.layers) && (f.pushLight(F), F.castShadow && f.pushShadow(F));
      }), f.setupLights(v._useLegacyLights);
      const G = /* @__PURE__ */ new Set();
      return S.traverse(function(F) {
        const ue = F.material;
        if (ue)
          if (Array.isArray(ue))
            for (let Me = 0; Me < ue.length; Me++) {
              const Ee = ue[Me];
              Be(Ee, z, F), G.add(Ee);
            }
          else
            Be(ue, z, F), G.add(ue);
      }), y.pop(), f = null, G;
    }, this.compileAsync = function(S, I, z = null) {
      const G = this.compile(S, I, z);
      return new Promise((F) => {
        function ue() {
          if (G.forEach(function(Me) {
            Ue.get(Me).currentProgram.isReady() && G.delete(Me);
          }), G.size === 0) {
            F(S);
            return;
          }
          setTimeout(ue, 10);
        }
        xe.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
      });
    };
    let ke = null;
    function tt(S) {
      ke && ke(S);
    }
    function at() {
      ht.stop();
    }
    function Ye() {
      ht.start();
    }
    const ht = new lu();
    ht.setAnimationLoop(tt), typeof self < "u" && ht.setContext(self), this.setAnimationLoop = function(S) {
      ke = S, oe.setAnimationLoop(S), S === null ? ht.stop() : ht.start();
    }, oe.addEventListener("sessionstart", at), oe.addEventListener("sessionend", Ye), this.render = function(S, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (T === !0)
        return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), oe.enabled === !0 && oe.isPresenting === !0 && (oe.cameraAutoUpdate === !0 && oe.updateCamera(I), I = oe.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, I, E), f = Se.get(S, y.length), f.init(), y.push(f), we.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), fe.setFromProjectionMatrix(we), re = this.localClippingEnabled, H = ae.init(this.clippingPlanes, re), _ = Ce.get(S, p.length), _.init(), p.push(_), Vt(S, I, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(Y, q), this.info.render.frame++, H === !0 && ae.beginShadows();
      const z = f.state.shadowsArray;
      if (he.render(z, S, I), H === !0 && ae.endShadows(), this.info.autoReset === !0 && this.info.reset(), (oe.enabled === !1 || oe.isPresenting === !1 || oe.hasDepthSensing() === !1) && Le.render(_, S), f.setupLights(v._useLegacyLights), I.isArrayCamera) {
        const G = I.cameras;
        for (let F = 0, ue = G.length; F < ue; F++) {
          const Me = G[F];
          Ho(_, S, Me, Me.viewport);
        }
      } else
        Ho(_, S, I);
      E !== null && (De.updateMultisampleRenderTarget(E), De.updateRenderTargetMipmap(E)), S.isScene === !0 && S.onAfterRender(v, S, I), ge.resetDefaultState(), L = -1, X = null, y.pop(), y.length > 0 ? f = y[y.length - 1] : f = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function Vt(S, I, z, G) {
      if (S.visible === !1)
        return;
      if (S.layers.test(I.layers)) {
        if (S.isGroup)
          z = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(I);
        else if (S.isLight)
          f.pushLight(S), S.castShadow && f.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || fe.intersectsSprite(S)) {
            G && me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);
            const ue = Z.update(S), Me = S.material;
            Me.visible && _.push(S, ue, Me, z, me.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || fe.intersectsObject(S))) {
          const ue = Z.update(S), Me = S.material;
          if (G && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), me.copy(S.boundingSphere.center)) : (ue.boundingSphere === null && ue.computeBoundingSphere(), me.copy(ue.boundingSphere.center)), me.applyMatrix4(S.matrixWorld).applyMatrix4(we)), Array.isArray(Me)) {
            const Ee = ue.groups;
            for (let Re = 0, Ve = Ee.length; Re < Ve; Re++) {
              const ze = Ee[Re], He = Me[ze.materialIndex];
              He && He.visible && _.push(S, ue, He, z, me.z, ze);
            }
          } else
            Me.visible && _.push(S, ue, Me, z, me.z, null);
        }
      }
      const F = S.children;
      for (let ue = 0, Me = F.length; ue < Me; ue++)
        Vt(F[ue], I, z, G);
    }
    function Ho(S, I, z, G) {
      const F = S.opaque, ue = S.transmissive, Me = S.transparent;
      f.setupLightsView(z), H === !0 && ae.setGlobalState(v.clippingPlanes, z), ue.length > 0 && _u(F, ue, I, z), G && ye.viewport(M.copy(G)), F.length > 0 && $n(F, I, z), ue.length > 0 && $n(ue, I, z), Me.length > 0 && $n(Me, I, z), ye.buffers.depth.setTest(!0), ye.buffers.depth.setMask(!0), ye.buffers.color.setMask(!0), ye.setPolygonOffset(!1);
    }
    function _u(S, I, z, G) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null)
        return;
      const F = Pe.isWebGL2;
      pe === null && (pe = new Rr(1, 1, {
        generateMipmaps: !0,
        type: xe.has("EXT_color_buffer_half_float") ? jn : Zi,
        minFilter: vr,
        samples: F ? 4 : 0
      })), v.getDrawingBufferSize(_e), F ? pe.setSize(_e.x, _e.y) : pe.setSize(za(_e.x), za(_e.y));
      const ue = v.getRenderTarget();
      v.setRenderTarget(pe), v.getClearColor(K), P = v.getClearAlpha(), P < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const Me = v.toneMapping;
      v.toneMapping = Ki, $n(S, z, G), De.updateMultisampleRenderTarget(pe), De.updateRenderTargetMipmap(pe);
      let Ee = !1;
      for (let Re = 0, Ve = I.length; Re < Ve; Re++) {
        const ze = I[Re], He = ze.object, St = ze.geometry, ft = ze.material, $t = ze.group;
        if (ft.side === Ci && He.layers.test(G.layers)) {
          const Mi = ft.side;
          ft.side = zt, ft.needsUpdate = !0, Go(He, z, G, St, ft, $t), ft.side = Mi, ft.needsUpdate = !0, Ee = !0;
        }
      }
      Ee === !0 && (De.updateMultisampleRenderTarget(pe), De.updateRenderTargetMipmap(pe)), v.setRenderTarget(ue), v.setClearColor(K, P), v.toneMapping = Me;
    }
    function $n(S, I, z) {
      const G = I.isScene === !0 ? I.overrideMaterial : null;
      for (let F = 0, ue = S.length; F < ue; F++) {
        const Me = S[F], Ee = Me.object, Re = Me.geometry, Ve = G === null ? Me.material : G, ze = Me.group;
        Ee.layers.test(z.layers) && Go(Ee, I, z, Re, Ve, ze);
      }
    }
    function Go(S, I, z, G, F, ue) {
      S.onBeforeRender(v, I, z, G, F, ue), S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), F.onBeforeRender(v, I, z, G, S, ue), F.transparent === !0 && F.side === Ci && F.forceSinglePass === !1 ? (F.side = zt, F.needsUpdate = !0, v.renderBufferDirect(z, I, G, F, S, ue), F.side = Qi, F.needsUpdate = !0, v.renderBufferDirect(z, I, G, F, S, ue), F.side = Ci) : v.renderBufferDirect(z, I, G, F, S, ue), S.onAfterRender(v, I, z, G, F, ue);
    }
    function Qn(S, I, z) {
      I.isScene !== !0 && (I = je);
      const G = Ue.get(S), F = f.state.lights, ue = f.state.shadowsArray, Me = F.state.version, Ee = te.getParameters(S, F.state, ue, I, z), Re = te.getProgramCacheKey(Ee);
      let Ve = G.programs;
      G.environment = S.isMeshStandardMaterial ? I.environment : null, G.fog = I.fog, G.envMap = (S.isMeshStandardMaterial ? R : Je).get(S.envMap || G.environment), G.envMapRotation = G.environment !== null && S.envMap === null ? I.environmentRotation : S.envMapRotation, Ve === void 0 && (S.addEventListener("dispose", N), Ve = /* @__PURE__ */ new Map(), G.programs = Ve);
      let ze = Ve.get(Re);
      if (ze !== void 0) {
        if (G.currentProgram === ze && G.lightsStateVersion === Me)
          return Vo(S, Ee), ze;
      } else
        Ee.uniforms = te.getUniforms(S), S.onBuild(z, Ee, v), S.onBeforeCompile(Ee, v), ze = te.acquireProgram(Ee, Re), Ve.set(Re, ze), G.uniforms = Ee.uniforms;
      const He = G.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (He.clippingPlanes = ae.uniform), Vo(S, Ee), G.needsLights = Mu(S), G.lightsStateVersion = Me, G.needsLights && (He.ambientLightColor.value = F.state.ambient, He.lightProbe.value = F.state.probe, He.directionalLights.value = F.state.directional, He.directionalLightShadows.value = F.state.directionalShadow, He.spotLights.value = F.state.spot, He.spotLightShadows.value = F.state.spotShadow, He.rectAreaLights.value = F.state.rectArea, He.ltc_1.value = F.state.rectAreaLTC1, He.ltc_2.value = F.state.rectAreaLTC2, He.pointLights.value = F.state.point, He.pointLightShadows.value = F.state.pointShadow, He.hemisphereLights.value = F.state.hemi, He.directionalShadowMap.value = F.state.directionalShadowMap, He.directionalShadowMatrix.value = F.state.directionalShadowMatrix, He.spotShadowMap.value = F.state.spotShadowMap, He.spotLightMatrix.value = F.state.spotLightMatrix, He.spotLightMap.value = F.state.spotLightMap, He.pointShadowMap.value = F.state.pointShadowMap, He.pointShadowMatrix.value = F.state.pointShadowMatrix), G.currentProgram = ze, G.uniformsList = null, ze;
    }
    function ko(S) {
      if (S.uniformsList === null) {
        const I = S.currentProgram.getUniforms();
        S.uniformsList = Aa.seqWithValue(I.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Vo(S, I) {
      const z = Ue.get(S);
      z.outputColorSpace = I.outputColorSpace, z.batching = I.batching, z.instancing = I.instancing, z.instancingColor = I.instancingColor, z.instancingMorph = I.instancingMorph, z.skinning = I.skinning, z.morphTargets = I.morphTargets, z.morphNormals = I.morphNormals, z.morphColors = I.morphColors, z.morphTargetsCount = I.morphTargetsCount, z.numClippingPlanes = I.numClippingPlanes, z.numIntersection = I.numClipIntersection, z.vertexAlphas = I.vertexAlphas, z.vertexTangents = I.vertexTangents, z.toneMapping = I.toneMapping;
    }
    function vu(S, I, z, G, F) {
      I.isScene !== !0 && (I = je), De.resetTextureUnits();
      const ue = I.fog, Me = G.isMeshStandardMaterial ? I.environment : null, Ee = E === null ? v.outputColorSpace : E.isXRRenderTarget === !0 ? E.texture.colorSpace : ir, Re = (G.isMeshStandardMaterial ? R : Je).get(G.envMap || Me), Ve = G.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, ze = !!z.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), He = !!z.morphAttributes.position, St = !!z.morphAttributes.normal, ft = !!z.morphAttributes.color;
      let $t = Ki;
      G.toneMapped && (E === null || E.isXRRenderTarget === !0) && ($t = v.toneMapping);
      const Mi = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, lt = Mi !== void 0 ? Mi.length : 0, Ie = Ue.get(G), qa = f.state.lights;
      if (H === !0 && (re === !0 || S !== X)) {
        const Qt = S === X && G.id === L;
        ae.setState(G, S, Qt);
      }
      let Ka = !1;
      G.version === Ie.__version ? (Ie.needsLights && Ie.lightsStateVersion !== qa.state.version || Ie.outputColorSpace !== Ee || F.isBatchedMesh && Ie.batching === !1 || !F.isBatchedMesh && Ie.batching === !0 || F.isInstancedMesh && Ie.instancing === !1 || !F.isInstancedMesh && Ie.instancing === !0 || F.isSkinnedMesh && Ie.skinning === !1 || !F.isSkinnedMesh && Ie.skinning === !0 || F.isInstancedMesh && Ie.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Ie.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && Ie.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && Ie.instancingMorph === !1 && F.morphTexture !== null || Ie.envMap !== Re || G.fog === !0 && Ie.fog !== ue || Ie.numClippingPlanes !== void 0 && (Ie.numClippingPlanes !== ae.numPlanes || Ie.numIntersection !== ae.numIntersection) || Ie.vertexAlphas !== Ve || Ie.vertexTangents !== ze || Ie.morphTargets !== He || Ie.morphNormals !== St || Ie.morphColors !== ft || Ie.toneMapping !== $t || Pe.isWebGL2 === !0 && Ie.morphTargetsCount !== lt) && (Ka = !0) : (Ka = !0, Ie.__version = G.version);
      let rr = Ie.currentProgram;
      Ka === !0 && (rr = Qn(G, I, F));
      let Wo = !1, Tn = !1, Za = !1;
      const Tt = rr.getUniforms(), nr = Ie.uniforms;
      if (ye.useProgram(rr.program) && (Wo = !0, Tn = !0, Za = !0), G.id !== L && (L = G.id, Tn = !0), Wo || X !== S) {
        Tt.setValue(O, "projectionMatrix", S.projectionMatrix), Tt.setValue(O, "viewMatrix", S.matrixWorldInverse);
        const Qt = Tt.map.cameraPosition;
        Qt !== void 0 && Qt.setValue(O, me.setFromMatrixPosition(S.matrixWorld)), Pe.logarithmicDepthBuffer && Tt.setValue(
          O,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && Tt.setValue(O, "isOrthographic", S.isOrthographicCamera === !0), X !== S && (X = S, Tn = !0, Za = !0);
      }
      if (F.isSkinnedMesh) {
        Tt.setOptional(O, F, "bindMatrix"), Tt.setOptional(O, F, "bindMatrixInverse");
        const Qt = F.skeleton;
        Qt && (Pe.floatVertexTextures ? (Qt.boneTexture === null && Qt.computeBoneTexture(), Tt.setValue(O, "boneTexture", Qt.boneTexture, De)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      F.isBatchedMesh && (Tt.setOptional(O, F, "batchingTexture"), Tt.setValue(O, "batchingTexture", F._matricesTexture, De));
      const Ja = z.morphAttributes;
      if ((Ja.position !== void 0 || Ja.normal !== void 0 || Ja.color !== void 0 && Pe.isWebGL2 === !0) && ne.update(F, z, rr), (Tn || Ie.receiveShadow !== F.receiveShadow) && (Ie.receiveShadow = F.receiveShadow, Tt.setValue(O, "receiveShadow", F.receiveShadow)), G.isMeshGouraudMaterial && G.envMap !== null && (nr.envMap.value = Re, nr.flipEnvMap.value = Re.isCubeTexture && Re.isRenderTargetTexture === !1 ? -1 : 1), Tn && (Tt.setValue(O, "toneMappingExposure", v.toneMappingExposure), Ie.needsLights && xu(nr, Za), ue && G.fog === !0 && $.refreshFogUniforms(nr, ue), $.refreshMaterialUniforms(nr, G, W, B, pe), Aa.upload(O, ko(Ie), nr, De)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (Aa.upload(O, ko(Ie), nr, De), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && Tt.setValue(O, "center", F.center), Tt.setValue(O, "modelViewMatrix", F.modelViewMatrix), Tt.setValue(O, "normalMatrix", F.normalMatrix), Tt.setValue(O, "modelMatrix", F.matrixWorld), G.isShaderMaterial || G.isRawShaderMaterial) {
        const Qt = G.uniformsGroups;
        for (let $a = 0, yu = Qt.length; $a < yu; $a++)
          if (Pe.isWebGL2) {
            const Xo = Qt[$a];
            A.update(Xo, rr), A.bind(Xo, rr);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return rr;
    }
    function xu(S, I) {
      S.ambientLightColor.needsUpdate = I, S.lightProbe.needsUpdate = I, S.directionalLights.needsUpdate = I, S.directionalLightShadows.needsUpdate = I, S.pointLights.needsUpdate = I, S.pointLightShadows.needsUpdate = I, S.spotLights.needsUpdate = I, S.spotLightShadows.needsUpdate = I, S.rectAreaLights.needsUpdate = I, S.hemisphereLights.needsUpdate = I;
    }
    function Mu(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return E;
    }, this.setRenderTargetTextures = function(S, I, z) {
      Ue.get(S.texture).__webglTexture = I, Ue.get(S.depthTexture).__webglTexture = z;
      const G = Ue.get(S);
      G.__hasExternalTextures = !0, G.__autoAllocateDepthBuffer = z === void 0, G.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), G.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(S, I) {
      const z = Ue.get(S);
      z.__webglFramebuffer = I, z.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(S, I = 0, z = 0) {
      E = S, C = I, b = z;
      let G = !0, F = null, ue = !1, Me = !1;
      if (S) {
        const Ee = Ue.get(S);
        Ee.__useDefaultFramebuffer !== void 0 ? (ye.bindFramebuffer(O.FRAMEBUFFER, null), G = !1) : Ee.__webglFramebuffer === void 0 ? De.setupRenderTarget(S) : Ee.__hasExternalTextures && De.rebindTextures(S, Ue.get(S.texture).__webglTexture, Ue.get(S.depthTexture).__webglTexture);
        const Re = S.texture;
        (Re.isData3DTexture || Re.isDataArrayTexture || Re.isCompressedArrayTexture) && (Me = !0);
        const Ve = Ue.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ve[I]) ? F = Ve[I][z] : F = Ve[I], ue = !0) : Pe.isWebGL2 && S.samples > 0 && De.useMultisampledRTT(S) === !1 ? F = Ue.get(S).__webglMultisampledFramebuffer : Array.isArray(Ve) ? F = Ve[z] : F = Ve, M.copy(S.viewport), w.copy(S.scissor), j = S.scissorTest;
      } else
        M.copy(ee).multiplyScalar(W).floor(), w.copy(Q).multiplyScalar(W).floor(), j = de;
      if (ye.bindFramebuffer(O.FRAMEBUFFER, F) && Pe.drawBuffers && G && ye.drawBuffers(S, F), ye.viewport(M), ye.scissor(w), ye.setScissorTest(j), ue) {
        const Ee = Ue.get(S.texture);
        O.framebufferTexture2D(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_CUBE_MAP_POSITIVE_X + I, Ee.__webglTexture, z);
      } else if (Me) {
        const Ee = Ue.get(S.texture), Re = I || 0;
        O.framebufferTextureLayer(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0, Ee.__webglTexture, z || 0, Re);
      }
      L = -1;
    }, this.readRenderTargetPixels = function(S, I, z, G, F, ue, Me) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = Ue.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && Me !== void 0 && (Ee = Ee[Me]), Ee) {
        ye.bindFramebuffer(O.FRAMEBUFFER, Ee);
        try {
          const Re = S.texture, Ve = Re.format, ze = Re.type;
          if (Ve !== ci && ve.convert(Ve) !== O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const He = ze === jn && (xe.has("EXT_color_buffer_half_float") || Pe.isWebGL2 && xe.has("EXT_color_buffer_float"));
          if (ze !== Zi && ve.convert(ze) !== O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE) && !(ze === Li && (Pe.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && !He) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= S.width - G && z >= 0 && z <= S.height - F && O.readPixels(I, z, G, F, ve.convert(Ve), ve.convert(ze), ue);
        } finally {
          const Re = E !== null ? Ue.get(E).__webglFramebuffer : null;
          ye.bindFramebuffer(O.FRAMEBUFFER, Re);
        }
      }
    }, this.copyFramebufferToTexture = function(S, I, z = 0) {
      const G = Math.pow(2, -z), F = Math.floor(I.image.width * G), ue = Math.floor(I.image.height * G);
      De.setTexture2D(I, 0), O.copyTexSubImage2D(O.TEXTURE_2D, z, 0, 0, S.x, S.y, F, ue), ye.unbindTexture();
    }, this.copyTextureToTexture = function(S, I, z, G = 0) {
      const F = I.image.width, ue = I.image.height, Me = ve.convert(z.format), Ee = ve.convert(z.type);
      De.setTexture2D(z, 0), O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, z.flipY), O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha), O.pixelStorei(O.UNPACK_ALIGNMENT, z.unpackAlignment), I.isDataTexture ? O.texSubImage2D(O.TEXTURE_2D, G, S.x, S.y, F, ue, Me, Ee, I.image.data) : I.isCompressedTexture ? O.compressedTexSubImage2D(O.TEXTURE_2D, G, S.x, S.y, I.mipmaps[0].width, I.mipmaps[0].height, Me, I.mipmaps[0].data) : O.texSubImage2D(O.TEXTURE_2D, G, S.x, S.y, Me, Ee, I.image), G === 0 && z.generateMipmaps && O.generateMipmap(O.TEXTURE_2D), ye.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, I, z, G, F = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ue = Math.round(S.max.x - S.min.x), Me = Math.round(S.max.y - S.min.y), Ee = S.max.z - S.min.z + 1, Re = ve.convert(G.format), Ve = ve.convert(G.type);
      let ze;
      if (G.isData3DTexture)
        De.setTexture3D(G, 0), ze = O.TEXTURE_3D;
      else if (G.isDataArrayTexture || G.isCompressedArrayTexture)
        De.setTexture2DArray(G, 0), ze = O.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, G.flipY), O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), O.pixelStorei(O.UNPACK_ALIGNMENT, G.unpackAlignment);
      const He = O.getParameter(O.UNPACK_ROW_LENGTH), St = O.getParameter(O.UNPACK_IMAGE_HEIGHT), ft = O.getParameter(O.UNPACK_SKIP_PIXELS), $t = O.getParameter(O.UNPACK_SKIP_ROWS), Mi = O.getParameter(O.UNPACK_SKIP_IMAGES), lt = z.isCompressedTexture ? z.mipmaps[F] : z.image;
      O.pixelStorei(O.UNPACK_ROW_LENGTH, lt.width), O.pixelStorei(O.UNPACK_IMAGE_HEIGHT, lt.height), O.pixelStorei(O.UNPACK_SKIP_PIXELS, S.min.x), O.pixelStorei(O.UNPACK_SKIP_ROWS, S.min.y), O.pixelStorei(O.UNPACK_SKIP_IMAGES, S.min.z), z.isDataTexture || z.isData3DTexture ? O.texSubImage3D(ze, F, I.x, I.y, I.z, ue, Me, Ee, Re, Ve, lt.data) : G.isCompressedArrayTexture ? O.compressedTexSubImage3D(ze, F, I.x, I.y, I.z, ue, Me, Ee, Re, lt.data) : O.texSubImage3D(ze, F, I.x, I.y, I.z, ue, Me, Ee, Re, Ve, lt), O.pixelStorei(O.UNPACK_ROW_LENGTH, He), O.pixelStorei(O.UNPACK_IMAGE_HEIGHT, St), O.pixelStorei(O.UNPACK_SKIP_PIXELS, ft), O.pixelStorei(O.UNPACK_SKIP_ROWS, $t), O.pixelStorei(O.UNPACK_SKIP_IMAGES, Mi), F === 0 && G.generateMipmaps && O.generateMipmap(ze), ye.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? De.setTextureCube(S, 0) : S.isData3DTexture ? De.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? De.setTexture2DArray(S, 0) : De.setTexture2D(S, 0), ye.unbindTexture();
    }, this.resetState = function() {
      C = 0, b = 0, E = null, ye.reset(), ge.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Pi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Oo ? "display-p3" : "srgb", t.unpackColorSpace = qe.workingColorSpace === Xa ? "display-p3" : "srgb";
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class m0 extends mu {
}
m0.prototype.isWebGL1Renderer = !0;
class g0 extends Gt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new xi(), this.environmentRotation = new xi(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class _0 extends Zn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new We(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new We(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Yh, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new xi(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class v0 extends _0 {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new be(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new We(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new We(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new We(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
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
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
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
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class gu extends Gt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new We(e), this.intensity = t;
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
const zs = /* @__PURE__ */ new ot(), Lc = /* @__PURE__ */ new D(), Pc = /* @__PURE__ */ new D();
class x0 {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new be(512, 512), this.map = null, this.mapPass = null, this.matrix = new ot(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Bo(), this._frameExtents = new be(1, 1), this._viewportCount = 1, this._viewports = [
      new et(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    Lc.setFromMatrixPosition(e.matrixWorld), t.position.copy(Lc), Pc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Pc), t.updateMatrixWorld(), zs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(zs), i.set(
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
    ), i.multiply(zs);
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
const Uc = /* @__PURE__ */ new ot(), Ln = /* @__PURE__ */ new D(), Hs = /* @__PURE__ */ new D();
class M0 extends x0 {
  constructor() {
    super(new Yt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new be(4, 2), this._viewportCount = 6, this._viewports = [
      new et(2, 1, 1, 1),
      new et(0, 1, 1, 1),
      new et(3, 1, 1, 1),
      new et(1, 1, 1, 1),
      new et(3, 0, 1, 1),
      new et(1, 0, 1, 1)
    ], this._cubeDirections = [
      new D(1, 0, 0),
      new D(-1, 0, 0),
      new D(0, 0, 1),
      new D(0, 0, -1),
      new D(0, 1, 0),
      new D(0, -1, 0)
    ], this._cubeUps = [
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 0, 1),
      new D(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const i = this.camera, n = this.matrix, a = e.distance || i.far;
    a !== i.far && (i.far = a, i.updateProjectionMatrix()), Ln.setFromMatrixPosition(e.matrixWorld), i.position.copy(Ln), Hs.copy(i.position), Hs.add(this._cubeDirections[t]), i.up.copy(this._cubeUps[t]), i.lookAt(Hs), i.updateMatrixWorld(), n.makeTranslation(-Ln.x, -Ln.y, -Ln.z), Uc.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Uc);
  }
}
class y0 extends gu {
  constructor(e, t, i = 0, n = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new M0();
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
class S0 extends gu {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Dc {
  constructor(e = 1, t = 0, i = 0) {
    return this.radius = e, this.phi = t, this.theta = i, this;
  }
  set(e, t, i) {
    return this.radius = e, this.phi = t, this.theta = i, this;
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
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(yt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Do
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Do);
const Ic = { type: "change" }, Gs = { type: "start" }, Oc = { type: "end" }, Sa = new Qh(), Nc = new Hi(), T0 = Math.cos(70 * ef.DEG2RAD);
class E0 extends Ur {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new D(), this.cursor = new D(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Or.ROTATE, MIDDLE: Or.DOLLY, RIGHT: Or.PAN }, this.touches = { ONE: Nr.ROTATE, TWO: Nr.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return s.phi;
    }, this.getAzimuthalAngle = function() {
      return s.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(A) {
      A.addEventListener("keydown", Se), this._domElementKeyEvents = A;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Se), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      i.target0.copy(i.target), i.position0.copy(i.object.position), i.zoom0 = i.object.zoom;
    }, this.reset = function() {
      i.target.copy(i.target0), i.object.position.copy(i.position0), i.object.zoom = i.zoom0, i.object.updateProjectionMatrix(), i.dispatchEvent(Ic), i.update(), a = n.NONE;
    }, this.update = function() {
      const A = new D(), J = new Cr().setFromUnitVectors(e.up, new D(0, 1, 0)), oe = J.clone().invert(), Te = new D(), U = new Cr(), ie = new D(), N = 2 * Math.PI;
      return function(le = null) {
        const se = i.object.position;
        A.copy(se).sub(i.target), A.applyQuaternion(J), s.setFromVector3(A), i.autoRotate && a === n.NONE && j(M(le)), i.enableDamping ? (s.theta += l.theta * i.dampingFactor, s.phi += l.phi * i.dampingFactor) : (s.theta += l.theta, s.phi += l.phi);
        let Be = i.minAzimuthAngle, ke = i.maxAzimuthAngle;
        isFinite(Be) && isFinite(ke) && (Be < -Math.PI ? Be += N : Be > Math.PI && (Be -= N), ke < -Math.PI ? ke += N : ke > Math.PI && (ke -= N), Be <= ke ? s.theta = Math.max(Be, Math.min(ke, s.theta)) : s.theta = s.theta > (Be + ke) / 2 ? Math.max(Be, s.theta) : Math.min(ke, s.theta)), s.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, s.phi)), s.makeSafe(), i.enableDamping === !0 ? i.target.addScaledVector(h, i.dampingFactor) : i.target.add(h), i.target.sub(i.cursor), i.target.clampLength(i.minTargetRadius, i.maxTargetRadius), i.target.add(i.cursor);
        let tt = !1;
        if (i.zoomToCursor && b || i.object.isOrthographicCamera)
          s.radius = ee(s.radius);
        else {
          const at = s.radius;
          s.radius = ee(s.radius * c), tt = at != s.radius;
        }
        if (A.setFromSpherical(s), A.applyQuaternion(oe), se.copy(i.target).add(A), i.object.lookAt(i.target), i.enableDamping === !0 ? (l.theta *= 1 - i.dampingFactor, l.phi *= 1 - i.dampingFactor, h.multiplyScalar(1 - i.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), i.zoomToCursor && b) {
          let at = null;
          if (i.object.isPerspectiveCamera) {
            const Ye = A.length();
            at = ee(Ye * c);
            const ht = Ye - at;
            i.object.position.addScaledVector(T, ht), i.object.updateMatrixWorld(), tt = !!ht;
          } else if (i.object.isOrthographicCamera) {
            const Ye = new D(C.x, C.y, 0);
            Ye.unproject(i.object);
            const ht = i.object.zoom;
            i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / c)), i.object.updateProjectionMatrix(), tt = ht !== i.object.zoom;
            const Vt = new D(C.x, C.y, 0);
            Vt.unproject(i.object), i.object.position.sub(Vt).add(Ye), i.object.updateMatrixWorld(), at = A.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), i.zoomToCursor = !1;
          at !== null && (this.screenSpacePanning ? i.target.set(0, 0, -1).transformDirection(i.object.matrix).multiplyScalar(at).add(i.object.position) : (Sa.origin.copy(i.object.position), Sa.direction.set(0, 0, -1).transformDirection(i.object.matrix), Math.abs(i.object.up.dot(Sa.direction)) < T0 ? e.lookAt(i.target) : (Nc.setFromNormalAndCoplanarPoint(i.object.up, i.target), Sa.intersectPlane(Nc, i.target))));
        } else if (i.object.isOrthographicCamera) {
          const at = i.object.zoom;
          i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / c)), at !== i.object.zoom && (i.object.updateProjectionMatrix(), tt = !0);
        }
        return c = 1, b = !1, tt || Te.distanceToSquared(i.object.position) > o || 8 * (1 - U.dot(i.object.quaternion)) > o || ie.distanceToSquared(i.target) > o ? (i.dispatchEvent(Ic), Te.copy(i.object.position), U.copy(i.object.quaternion), ie.copy(i.target), !0) : !1;
      };
    }(), this.dispose = function() {
      i.domElement.removeEventListener("contextmenu", Le), i.domElement.removeEventListener("pointerdown", De), i.domElement.removeEventListener("pointercancel", R), i.domElement.removeEventListener("wheel", Z), i.domElement.removeEventListener("pointermove", Je), i.domElement.removeEventListener("pointerup", R), i.domElement.getRootNode().removeEventListener("keydown", $, { capture: !0 }), i._domElementKeyEvents !== null && (i._domElementKeyEvents.removeEventListener("keydown", Se), i._domElementKeyEvents = null);
    };
    const i = this, n = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let a = n.NONE;
    const o = 1e-6, s = new Dc(), l = new Dc();
    let c = 1;
    const h = new D(), u = new be(), d = new be(), g = new be(), m = new be(), _ = new be(), f = new be(), p = new be(), y = new be(), v = new be(), T = new D(), C = new be();
    let b = !1;
    const E = [], L = {};
    let X = !1;
    function M(A) {
      return A !== null ? 2 * Math.PI / 60 * i.autoRotateSpeed * A : 2 * Math.PI / 60 / 60 * i.autoRotateSpeed;
    }
    function w(A) {
      const J = Math.abs(A * 0.01);
      return Math.pow(0.95, i.zoomSpeed * J);
    }
    function j(A) {
      l.theta -= A;
    }
    function K(A) {
      l.phi -= A;
    }
    const P = function() {
      const A = new D();
      return function(J, oe) {
        A.setFromMatrixColumn(oe, 0), A.multiplyScalar(-J), h.add(A);
      };
    }(), V = function() {
      const A = new D();
      return function(J, oe) {
        i.screenSpacePanning === !0 ? A.setFromMatrixColumn(oe, 1) : (A.setFromMatrixColumn(oe, 0), A.crossVectors(i.object.up, A)), A.multiplyScalar(J), h.add(A);
      };
    }(), B = function() {
      const A = new D();
      return function(J, oe) {
        const Te = i.domElement;
        if (i.object.isPerspectiveCamera) {
          const U = i.object.position;
          A.copy(U).sub(i.target);
          let ie = A.length();
          ie *= Math.tan(i.object.fov / 2 * Math.PI / 180), P(2 * J * ie / Te.clientHeight, i.object.matrix), V(2 * oe * ie / Te.clientHeight, i.object.matrix);
        } else
          i.object.isOrthographicCamera ? (P(J * (i.object.right - i.object.left) / i.object.zoom / Te.clientWidth, i.object.matrix), V(oe * (i.object.top - i.object.bottom) / i.object.zoom / Te.clientHeight, i.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), i.enablePan = !1);
      };
    }();
    function W(A) {
      i.object.isPerspectiveCamera || i.object.isOrthographicCamera ? c /= A : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1);
    }
    function Y(A) {
      i.object.isPerspectiveCamera || i.object.isOrthographicCamera ? c *= A : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1);
    }
    function q(A, J) {
      if (!i.zoomToCursor)
        return;
      b = !0;
      const oe = i.domElement.getBoundingClientRect(), Te = A - oe.left, U = J - oe.top, ie = oe.width, N = oe.height;
      C.x = Te / ie * 2 - 1, C.y = -(U / N) * 2 + 1, T.set(C.x, C.y, 1).unproject(i.object).sub(i.object.position).normalize();
    }
    function ee(A) {
      return Math.max(i.minDistance, Math.min(i.maxDistance, A));
    }
    function Q(A) {
      u.set(A.clientX, A.clientY);
    }
    function de(A) {
      q(A.clientX, A.clientX), p.set(A.clientX, A.clientY);
    }
    function fe(A) {
      m.set(A.clientX, A.clientY);
    }
    function H(A) {
      d.set(A.clientX, A.clientY), g.subVectors(d, u).multiplyScalar(i.rotateSpeed);
      const J = i.domElement;
      j(2 * Math.PI * g.x / J.clientHeight), K(2 * Math.PI * g.y / J.clientHeight), u.copy(d), i.update();
    }
    function re(A) {
      y.set(A.clientX, A.clientY), v.subVectors(y, p), v.y > 0 ? W(w(v.y)) : v.y < 0 && Y(w(v.y)), p.copy(y), i.update();
    }
    function pe(A) {
      _.set(A.clientX, A.clientY), f.subVectors(_, m).multiplyScalar(i.panSpeed), B(f.x, f.y), m.copy(_), i.update();
    }
    function we(A) {
      q(A.clientX, A.clientY), A.deltaY < 0 ? Y(w(A.deltaY)) : A.deltaY > 0 && W(w(A.deltaY)), i.update();
    }
    function _e(A) {
      let J = !1;
      switch (A.code) {
        case i.keys.UP:
          A.ctrlKey || A.metaKey || A.shiftKey ? K(2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : B(0, i.keyPanSpeed), J = !0;
          break;
        case i.keys.BOTTOM:
          A.ctrlKey || A.metaKey || A.shiftKey ? K(-2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : B(0, -i.keyPanSpeed), J = !0;
          break;
        case i.keys.LEFT:
          A.ctrlKey || A.metaKey || A.shiftKey ? j(2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : B(i.keyPanSpeed, 0), J = !0;
          break;
        case i.keys.RIGHT:
          A.ctrlKey || A.metaKey || A.shiftKey ? j(-2 * Math.PI * i.rotateSpeed / i.domElement.clientHeight) : B(-i.keyPanSpeed, 0), J = !0;
          break;
      }
      J && (A.preventDefault(), i.update());
    }
    function me(A) {
      if (E.length === 1)
        u.set(A.pageX, A.pageY);
      else {
        const J = ge(A), oe = 0.5 * (A.pageX + J.x), Te = 0.5 * (A.pageY + J.y);
        u.set(oe, Te);
      }
    }
    function je(A) {
      if (E.length === 1)
        m.set(A.pageX, A.pageY);
      else {
        const J = ge(A), oe = 0.5 * (A.pageX + J.x), Te = 0.5 * (A.pageY + J.y);
        m.set(oe, Te);
      }
    }
    function Ae(A) {
      const J = ge(A), oe = A.pageX - J.x, Te = A.pageY - J.y, U = Math.sqrt(oe * oe + Te * Te);
      p.set(0, U);
    }
    function O(A) {
      i.enableZoom && Ae(A), i.enablePan && je(A);
    }
    function pt(A) {
      i.enableZoom && Ae(A), i.enableRotate && me(A);
    }
    function xe(A) {
      if (E.length == 1)
        d.set(A.pageX, A.pageY);
      else {
        const oe = ge(A), Te = 0.5 * (A.pageX + oe.x), U = 0.5 * (A.pageY + oe.y);
        d.set(Te, U);
      }
      g.subVectors(d, u).multiplyScalar(i.rotateSpeed);
      const J = i.domElement;
      j(2 * Math.PI * g.x / J.clientHeight), K(2 * Math.PI * g.y / J.clientHeight), u.copy(d);
    }
    function Pe(A) {
      if (E.length === 1)
        _.set(A.pageX, A.pageY);
      else {
        const J = ge(A), oe = 0.5 * (A.pageX + J.x), Te = 0.5 * (A.pageY + J.y);
        _.set(oe, Te);
      }
      f.subVectors(_, m).multiplyScalar(i.panSpeed), B(f.x, f.y), m.copy(_);
    }
    function ye(A) {
      const J = ge(A), oe = A.pageX - J.x, Te = A.pageY - J.y, U = Math.sqrt(oe * oe + Te * Te);
      y.set(0, U), v.set(0, Math.pow(y.y / p.y, i.zoomSpeed)), W(v.y), p.copy(y);
      const ie = (A.pageX + J.x) * 0.5, N = (A.pageY + J.y) * 0.5;
      q(ie, N);
    }
    function Ge(A) {
      i.enableZoom && ye(A), i.enablePan && Pe(A);
    }
    function Ue(A) {
      i.enableZoom && ye(A), i.enableRotate && xe(A);
    }
    function De(A) {
      i.enabled !== !1 && (E.length === 0 && (i.domElement.setPointerCapture(A.pointerId), i.domElement.addEventListener("pointermove", Je), i.domElement.addEventListener("pointerup", R)), !Fe(A) && (ne(A), A.pointerType === "touch" ? ae(A) : x(A)));
    }
    function Je(A) {
      i.enabled !== !1 && (A.pointerType === "touch" ? he(A) : k(A));
    }
    function R(A) {
      switch (nt(A), E.length) {
        case 0:
          i.domElement.releasePointerCapture(A.pointerId), i.domElement.removeEventListener("pointermove", Je), i.domElement.removeEventListener("pointerup", R), i.dispatchEvent(Oc), a = n.NONE;
          break;
        case 1:
          const J = E[0], oe = L[J];
          ae({ pointerId: J, pageX: oe.x, pageY: oe.y });
          break;
      }
    }
    function x(A) {
      let J;
      switch (A.button) {
        case 0:
          J = i.mouseButtons.LEFT;
          break;
        case 1:
          J = i.mouseButtons.MIDDLE;
          break;
        case 2:
          J = i.mouseButtons.RIGHT;
          break;
        default:
          J = -1;
      }
      switch (J) {
        case Or.DOLLY:
          if (i.enableZoom === !1)
            return;
          de(A), a = n.DOLLY;
          break;
        case Or.ROTATE:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (i.enablePan === !1)
              return;
            fe(A), a = n.PAN;
          } else {
            if (i.enableRotate === !1)
              return;
            Q(A), a = n.ROTATE;
          }
          break;
        case Or.PAN:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (i.enableRotate === !1)
              return;
            Q(A), a = n.ROTATE;
          } else {
            if (i.enablePan === !1)
              return;
            fe(A), a = n.PAN;
          }
          break;
        default:
          a = n.NONE;
      }
      a !== n.NONE && i.dispatchEvent(Gs);
    }
    function k(A) {
      switch (a) {
        case n.ROTATE:
          if (i.enableRotate === !1)
            return;
          H(A);
          break;
        case n.DOLLY:
          if (i.enableZoom === !1)
            return;
          re(A);
          break;
        case n.PAN:
          if (i.enablePan === !1)
            return;
          pe(A);
          break;
      }
    }
    function Z(A) {
      i.enabled === !1 || i.enableZoom === !1 || a !== n.NONE || (A.preventDefault(), i.dispatchEvent(Gs), we(te(A)), i.dispatchEvent(Oc));
    }
    function te(A) {
      const J = A.deltaMode, oe = {
        clientX: A.clientX,
        clientY: A.clientY,
        deltaY: A.deltaY
      };
      switch (J) {
        case 1:
          oe.deltaY *= 16;
          break;
        case 2:
          oe.deltaY *= 100;
          break;
      }
      return A.ctrlKey && !X && (oe.deltaY *= 10), oe;
    }
    function $(A) {
      A.key === "Control" && (X = !0, i.domElement.getRootNode().addEventListener("keyup", Ce, { passive: !0, capture: !0 }));
    }
    function Ce(A) {
      A.key === "Control" && (X = !1, i.domElement.getRootNode().removeEventListener("keyup", Ce, { passive: !0, capture: !0 }));
    }
    function Se(A) {
      i.enabled === !1 || i.enablePan === !1 || _e(A);
    }
    function ae(A) {
      switch (ve(A), E.length) {
        case 1:
          switch (i.touches.ONE) {
            case Nr.ROTATE:
              if (i.enableRotate === !1)
                return;
              me(A), a = n.TOUCH_ROTATE;
              break;
            case Nr.PAN:
              if (i.enablePan === !1)
                return;
              je(A), a = n.TOUCH_PAN;
              break;
            default:
              a = n.NONE;
          }
          break;
        case 2:
          switch (i.touches.TWO) {
            case Nr.DOLLY_PAN:
              if (i.enableZoom === !1 && i.enablePan === !1)
                return;
              O(A), a = n.TOUCH_DOLLY_PAN;
              break;
            case Nr.DOLLY_ROTATE:
              if (i.enableZoom === !1 && i.enableRotate === !1)
                return;
              pt(A), a = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              a = n.NONE;
          }
          break;
        default:
          a = n.NONE;
      }
      a !== n.NONE && i.dispatchEvent(Gs);
    }
    function he(A) {
      switch (ve(A), a) {
        case n.TOUCH_ROTATE:
          if (i.enableRotate === !1)
            return;
          xe(A), i.update();
          break;
        case n.TOUCH_PAN:
          if (i.enablePan === !1)
            return;
          Pe(A), i.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (i.enableZoom === !1 && i.enablePan === !1)
            return;
          Ge(A), i.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (i.enableZoom === !1 && i.enableRotate === !1)
            return;
          Ue(A), i.update();
          break;
        default:
          a = n.NONE;
      }
    }
    function Le(A) {
      i.enabled !== !1 && A.preventDefault();
    }
    function ne(A) {
      E.push(A.pointerId);
    }
    function nt(A) {
      delete L[A.pointerId];
      for (let J = 0; J < E.length; J++)
        if (E[J] == A.pointerId) {
          E.splice(J, 1);
          return;
        }
    }
    function Fe(A) {
      for (let J = 0; J < E.length; J++)
        if (E[J] == A.pointerId)
          return !0;
      return !1;
    }
    function ve(A) {
      let J = L[A.pointerId];
      J === void 0 && (J = new be(), L[A.pointerId] = J), J.set(A.pageX, A.pageY);
    }
    function ge(A) {
      const J = A.pointerId === E[0] ? E[1] : E[0];
      return L[J];
    }
    i.domElement.addEventListener("contextmenu", Le), i.domElement.addEventListener("pointerdown", De), i.domElement.addEventListener("pointercancel", R), i.domElement.addEventListener("wheel", Z, { passive: !1 }), i.domElement.getRootNode().addEventListener("keydown", $, { passive: !0, capture: !0 }), this.update();
  }
}
const fo = 10, vt = fo / 2, ks = 1, Qr = (r, e, t, i = !1) => {
  Nh.to(r.position, {
    x: t === "x" ? i ? e.x - Math.random() * 3 : e.x + Math.random() * 3 : e.x,
    y: t === "y" ? i ? e.y - Math.random() * 3 : e.y + Math.random() * 3 : e.y,
    z: t === "z" ? i ? e.z - Math.random() * 3 : e.z + Math.random() * 3 : e.z,
    duration: 1,
    delay: 1,
    repeatDelay: 1,
    yoyo: !0,
    repeat: -1,
    ease: "power2.inOut"
  });
}, b0 = (r, e, t, i, n, a) => {
  r.forEach((o) => {
    Qr(o, o.position, "x");
  }), e.forEach((o) => {
    Qr(o, o.position, "x", !0);
  }), t.forEach((o) => {
    Qr(o, o.position, "y");
  }), i.forEach((o) => {
    Qr(o, o.position, "y", !0);
  }), n.forEach((o) => {
    Qr(o, o.position, "z");
  }), a.forEach((o) => {
    Qr(o, o.position, "z", !0);
  });
}, A0 = (r, e = 16777215) => {
  const t = new Dn(), i = new yn(ks, ks, ks), n = new v0({
    transmission: 1,
    opacity: 1,
    metalness: 0.1,
    roughness: 0,
    ior: 1,
    thickness: 0.01,
    specularIntensity: 0.1,
    color: new We(16777215),
    specularColor: new We(16777215),
    envMapIntensity: 1
  }), a = [], o = [], s = [], l = [], c = [], h = [];
  for (let g = 0; g <= fo; g++)
    for (let m = 0; m <= fo; m++) {
      if (Math.random() < 0.2)
        continue;
      const _ = new Ut(i, n);
      _.position.x = vt, _.position.y = g - vt, _.position.z = m - vt, a.push(_), t.add(_);
      const f = new Ut(i, n);
      f.position.x = -vt, f.position.y = g - vt, f.position.z = m - vt, o.push(f), t.add(f);
      const p = new Ut(i, n);
      p.position.x = g - vt, p.position.y = vt, p.position.z = m - vt, s.push(p), t.add(p);
      const y = new Ut(i, n);
      y.position.x = g - vt, y.position.y = -vt, y.position.z = m - vt, l.push(y), t.add(y);
      const v = new Ut(i, n);
      v.position.x = g - vt, v.position.y = m - vt, v.position.z = vt, c.push(v), t.add(v);
      const T = new Ut(i, n);
      T.position.x = g - vt, T.position.y = m - vt, T.position.z = -vt, h.push(T), t.add(T);
    }
  const u = new y0(e, 1e6, 0, 0.01);
  u.position.set(0, 0, 0), t.add(u);
  const d = new S0(16777215, 0.1);
  return t.add(d), r.add(t), { group: t, latoDestro: a, latoSinistro: o, latoSuperiore: s, latoInferiore: l, latoFrontale: c, latoPosteriore: h };
}, w0 = (r, e) => {
  const t = r.clientWidth, i = r.clientHeight;
  console.log("Scene - useEffect");
  const n = new g0(), a = new Yt(
    75,
    t / i,
    0.1,
    1e3
  );
  a.position.z = 4, a.position.x = -20;
  const o = new mu({ canvas: r });
  o.setClearColor(0), o.setSize(t, i);
  const s = new E0(a, o.domElement);
  s.minDistance = 0, s.maxDistance = 50, s.enablePan = !1, s.enableDamping = !0, s.dampingFactor = 0.25;
  const { group: l, latoDestro: c, latoSinistro: h, latoSuperiore: u, latoInferiore: d, latoFrontale: g, latoPosteriore: m } = A0(n, e);
  window.addEventListener("resize", _, !1);
  function _() {
    console.log("onWindowResize"), a.aspect = r.clientWidth / r.clientHeight, a.updateProjectionMatrix(), o.setSize(r.clientWidth, r.clientHeight), f();
  }
  function f() {
    l.rotation.x += 5e-3, l.rotation.y += 5e-3, o.render(n, a);
  }
  function p() {
    requestAnimationFrame(p), f();
  }
  b0(c, h, u, d, g, m), p();
};
var R0 = Object.defineProperty, C0 = Object.getOwnPropertyDescriptor, Jn = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? C0(e, t) : e, a = r.length - 1, o; a >= 0; a--)
    (o = r[a]) && (n = (i ? o(e, t, n) : o(n)) || n);
  return i && n && R0(e, t, n), n;
};
let Lr = class extends Su {
  constructor() {
    super(...arguments), this.width = 200, this.height = 200, this.color = 65280;
  }
  firstUpdated(r) {
    w0(this.canvas, this.color);
  }
  render() {
    return Tu`<canvas width="${this.width}" height="${this.height}"></canvas>`;
  }
};
Lr.styles = Eu`
    :host {}
    @media (prefers-color-scheme: light) {}
  `;
Jn([
  bu("canvas")
], Lr.prototype, "canvas", 2);
Jn([
  mo({ type: Number })
], Lr.prototype, "width", 2);
Jn([
  mo({ type: Number })
], Lr.prototype, "height", 2);
Jn([
  mo({ type: Number })
], Lr.prototype, "color", 2);
Lr = Jn([
  Au("viewer-3d-lit-loader")
], Lr);
export {
  Lr as Viewer3dLitLoader
};

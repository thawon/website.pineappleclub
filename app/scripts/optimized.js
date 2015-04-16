/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

/*
 AngularJS v1.3.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

//     Underscore may be freely distributed under the MIT license.

/*
 AngularJS v1.0.4
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/

/*! ui-router-extras - v0.0.10 - 2014-08-27 */

/**
 * State-based routing for AngularJS
 * @version v0.2.11
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/*
 angularAMD v0.1.1
 (c) 2013-2014 Marcos Lin https://github.com/marcoslin/
 License: MIT
*/

/** @license
* RequireJS plugin for async dependency load like JSONP and Google Maps
* Author: Miller Medeiros
* Version: 0.1.1 (2011/11/17)
* Released under the MIT license
*/

/*
 * +Gallery Javascript Photo gallery v0.9.4
 * http://plusgallery.net/
 *
 * Copyright 2013, Jeremiah Martin | Twitter: @jeremiahjmartin
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html

 */

(function(e, t) {
    function P(e) {
        var t = e.length, n = b.type(e);
        return b.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e);
    }
    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function I(e, n, r, i) {
        if (!b.acceptData(e)) return;
        var s, o, u = b.expando, a = typeof n == "string", f = e.nodeType, c = f ? b.cache : e, h = f ? e[u] : e[u] && u;
        if ((!h || !c[h] || !i && !c[h].data) && a && r === t) return;
        h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop));
        if (typeof n == "object" || typeof n == "function") i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n);
        return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[b.camelCase(n)])) : o = s, o;
    }
    function q(e, t, n) {
        if (!b.acceptData(e)) return;
        var r, i, s, o = e.nodeType, u = o ? b.cache : e, a = o ? e[b.expando] : b.expando;
        if (!u[a]) return;
        if (t) {
            s = n ? u[a] : u[a].data;
            if (s) {
                b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [ t ] : (t = b.camelCase(t), t in s ? t = [ t ] : t = t.split(" "));
                for (r = 0, i = t.length; r < i; r++) delete s[t[r]];
                if (!(n ? U : b.isEmptyObject)(s)) return;
            }
        }
        if (!n) {
            delete u[a].data;
            if (!U(u[a])) return;
        }
        o ? b.cleanData([ e ], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null;
    }
    function R(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r;
                } catch (s) {}
                b.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function U(e) {
        var t;
        for (t in e) {
            if (t === "data" && b.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1;
        }
        return !0;
    }
    function it() {
        return !0;
    }
    function st() {
        return !1;
    }
    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e;
    }
    function ht(e, t, n) {
        t = t || 0;
        if (b.isFunction(t)) return b.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return b.grep(e, function(e) {
            return e === t === n;
        });
        if (typeof t == "string") {
            var r = b.grep(e, function(e) {
                return e.nodeType === 1;
            });
            if (at.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r);
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n;
        });
    }
    function pt(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    function Mt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function _t(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e;
    }
    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function Pt(e, t) {
        var n, r = 0;
        for (; (n = e[r]) != null; r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
    }
    function Ht(e, t) {
        if (t.nodeType !== 1 || !b.hasData(e)) return;
        var n, r, i, s = b._data(e), o = b._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) b.event.add(t, n, u[n][r]);
        }
        o.data && (o.data = b.extend({}, o.data));
    }
    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!b.support.noCloneEvent && t[b.expando]) {
            i = b._data(t);
            for (r in i.events) b.removeEvent(t, r, i.handle);
            t.removeAttribute(b.expando);
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t); else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML); else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value); else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected; else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue;
    }
    function jt(e, n) {
        var r, s, o = 0, u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u) for (u = [], r = e.childNodes || e; (s = r[o]) != null; o++) !n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([ e ], u) : u;
    }
    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked);
    }
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e) return t;
        }
        return r;
    }
    function nn(e, t) {
        return e = t || e, b.css(e, "display") === "none" || !b.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")));
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none";
        }
        return e;
    }
    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += b.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= b.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o;
    }
    function un(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = qt(e), o = b.support.boxSizing && b.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px";
    }
    function an(e) {
        var t = s, n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n;
        }
        return n;
    }
    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
        return n.remove(), r;
    }
    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function(t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
        }); else if (!n && b.type(t) === "object") for (i in t) vn(e + "[" + i + "]", t[i], n, r); else r(e, t);
    }
    function _n(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n)) while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, b.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f);
            }), a;
        }
        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*");
    }
    function Pn(e, n) {
        var r, i, s = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e;
    }
    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (u in l) u in r && (n[l[u]] = r[u]);
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s) for (u in a) if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break;
        }
        if (f[0] in r) o = f[0]; else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break;
                }
                i || (i = u);
            }
            o = o || i;
        }
        if (o) return o !== f[0] && f.unshift(o), r[o];
    }
    function Bn(e, t) {
        var n, r, i, s, o = {}, u = 0, a = e.dataTypes.slice(), f = a[0];
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (a[1]) for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u]; ) if (r !== "*") {
            if (f !== "*" && f !== r) {
                i = o[f + " " + r] || o["* " + r];
                if (!i) for (n in o) {
                    s = n.split(" ");
                    if (s[1] === r) {
                        i = o[f + " " + s[0]] || o["* " + s[0]];
                        if (i) {
                            i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                            break;
                        }
                    }
                }
                if (i !== !0) if (i && e["throws"]) t = i(t); else try {
                    t = i(t);
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: i ? l : "No conversion from " + f + " to " + r
                    };
                }
            }
            f = r;
        }
        return {
            state: "success",
            data: t
        };
    }
    function zn() {
        try {
            return new e.XMLHttpRequest;
        } catch (t) {}
    }
    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function Yn() {
        return setTimeout(function() {
            Xn = t;
        }), Xn = b.now();
    }
    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Gn[t] || []).concat(Gn["*"]), i = 0, s = r.length;
            for (; i < s; i++) if (r[i].call(e, t, n)) return;
        });
    }
    function er(e, t, n) {
        var r, i, s = 0, o = Qn.length, u = b.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            if (i) return !1;
            var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++) f.tweens[o].run(s);
            return u.notifyWith(e, [ f, s, n ]), s < 1 && a ? n : (u.resolveWith(e, [ f ]), !1);
        }, f = u.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Yn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i) return this;
                i = !0;
                for (; n < r; n++) f.tweens[n].run(1);
                return t ? u.resolveWith(e, [ f, t ]) : u.rejectWith(e, [ f, t ]), this;
            }
        }), l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r;
        }
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
    }
    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e) {
            r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r];
            if (o && "expand" in o) {
                n = o.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = s);
            } else t[r] = s;
        }
    }
    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, v = [], m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c();
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire();
            });
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], b.css(e, "display") === "inline" && b.css(e, "float") === "none" && (!b.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (i in t) {
            o = t[i];
            if ($n.exec(o)) {
                delete t[i], a = a || o === "toggle";
                if (o === (m ? "hide" : "show")) continue;
                v.push(i);
            }
        }
        s = v.length;
        if (s) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function() {
                b(e).hide();
            }), h.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in d) b.style(e, t, d[t]);
            });
            for (i = 0; i < s; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = r === "width" || r === "height" ? 1 : 0));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function sr(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
    }
    var n, r, i = typeof t, s = e.document, o = e.location, u = e.jQuery, a = e.$, f = {}, l = [], c = "1.9.1", h = l.concat, p = l.push, d = l.slice, v = l.indexOf, m = f.toString, g = f.hasOwnProperty, y = c.trim, b = function(e, t) {
        return new b.fn.init(e, t, r);
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, E = /\S+/g, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, N = /^[\],:{}\s]*$/, C = /(?:^|:|,)(?:\s*\[)+/g, k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, A = /^-ms-/, O = /-([\da-z])/gi, M = function(e, t) {
        return t.toUpperCase();
    }, _ = function(e) {
        if (s.addEventListener || e.type === "load" || s.readyState === "complete") D(), b.ready();
    }, D = function() {
        s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _));
    };
    b.fn = b.prototype = {
        jquery: c,
        constructor: b,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [ null, e, null ] : i = x.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0));
                        if (T.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this;
                    }
                    o = s.getElementById(i[2]);
                    if (o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o;
                    }
                    return this.context = s, this.selector = e, this;
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this));
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return d.call(this);
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return b.each(this, e, t);
        },
        ready: function(e) {
            return b.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: p,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !b.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++) if ((s = arguments[a]) != null) for (i in s) {
            e = u[i], r = s[i];
            if (u === r) continue;
            l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r);
        }
        return u;
    }, b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = a), t && e.jQuery === b && (e.jQuery = u), b;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? --b.readyWait : b.isReady) return;
            if (!s.body) return setTimeout(b.ready);
            b.isReady = !0;
            if (e !== !0 && --b.readyWait > 0) return;
            n.resolveWith(s, [ b ]), b.fn.trigger && b(s).trigger("ready").off("ready");
        },
        isFunction: function(e) {
            return b.type(e) === "function";
        },
        isArray: Array.isArray || function(e) {
            return b.type(e) === "array";
        },
        isWindow: function(e) {
            return e != null && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? f[m.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if (!e || b.type(e) !== "object" || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) ;
            return r === t || g.call(e, r);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw new Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || s;
            var r = T.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = b.buildFragment([ e ], t, i), i && b(i).remove(), b.merge([], r.childNodes));
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = b.trim(t);
                if (t && N.test(t.replace(k, "@").replace(L, "]").replace(C, ""))) return (new Function("return " + t))();
            }
            b.error("Invalid JSON: " + t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
            } catch (s) {
                r = t;
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + n), r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(A, "ms-").replace(O, M);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, s = e.length, o = P(e);
            if (n) if (o) for (; i < s; i++) {
                r = t.apply(e[i], n);
                if (r === !1) break;
            } else for (i in e) {
                r = t.apply(e[i], n);
                if (r === !1) break;
            } else if (o) for (; i < s; i++) {
                r = t.call(e[i], i, e[i]);
                if (r === !1) break;
            } else for (i in e) {
                r = t.call(e[i], i, e[i]);
                if (r === !1) break;
            }
            return e;
        },
        trim: y && !y.call("﻿ ") ? function(e) {
            return e == null ? "" : y.call(e);
        } : function(e) {
            return e == null ? "" : (e + "").replace(S, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return e != null && (P(Object(e)) ? b.merge(n, typeof e == "string" ? [ e ] : e) : p.call(n, e)), n;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (v) return v.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s]; else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, s = e.length, o = P(e), u = [];
            if (o) for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r); else for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return h.apply([], u);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(d.call(arguments)));
            }, i.guid = e.guid = e.guid || b.guid++, i) : t;
        },
        access: function(e, n, r, i, s, o, u) {
            var a = 0, f = e.length, l = r == null;
            if (b.type(r) === "object") {
                s = !0;
                for (a in r) b.access(e, n, a, r[a], !0, o, u);
            } else if (i !== t) {
                s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                    return l.call(b(e), n);
                }));
                if (n) for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o;
        },
        now: function() {
            return (new Date).getTime();
        }
    }), b.ready.promise = function(t) {
        if (!n) {
            n = b.Deferred();
            if (s.readyState === "complete") setTimeout(b.ready); else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1); else {
                s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
                var r = !1;
                try {
                    r = e.frameElement == null && s.documentElement;
                } catch (i) {}
                r && r.doScroll && function o() {
                    if (!b.isReady) {
                        try {
                            r.doScroll("left");
                        } catch (e) {
                            return setTimeout(o, 50);
                        }
                        D(), b.ready();
                    }
                }();
            }
        }
        return n.promise(t);
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase();
    }), r = b(s);
    var H = {};
    b.Callbacks = function(e) {
        e = typeof e == "string" ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
            for (; a && o < s; o++) if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break;
            }
            n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable());
        }, c = {
            add: function() {
                if (a) {
                    var t = a.length;
                    (function i(t) {
                        b.each(t, function(t, n) {
                            var r = b.type(n);
                            r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n);
                        });
                    })(arguments), n ? s = a.length : r && (u = t, l(r));
                }
                return this;
            },
            remove: function() {
                return a && b.each(arguments, function(e, t) {
                    var r;
                    while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--);
                }), this;
            },
            has: function(e) {
                return e ? b.inArray(e, a) > -1 : !!a && !!a.length;
            },
            empty: function() {
                return a = [], this;
            },
            disable: function() {
                return a = f = r = t, this;
            },
            disabled: function() {
                return !a;
            },
            lock: function() {
                return f = t, r || c.disable(), this;
            },
            locked: function() {
                return !f;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], a && (!i || f) && (n ? f.push(t) : l(t)), this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return c;
    }, b.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", b.Callbacks("once memory"), "resolved" ], [ "reject", "fail", b.Callbacks("once memory"), "rejected" ], [ "notify", "progress", b.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t, function(t, s) {
                            var o = s[0], u = b.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = u && u.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return e != null ? b.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, b.each(t, function(e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u;
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this;
                }, i[s[0] + "With"] = o.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t = 0, n = d.call(arguments), r = n.length, i = r !== 1 || e && b.isFunction(e.promise) ? r : 0, s = i === 1 ? e : b.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
                };
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            }
            return i || s.resolveWith(f, n), s.promise();
        }
    }), b.support = function() {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: p.className !== "t",
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!o.value,
            optSelected: f.selected,
            enctype: !!s.createElement("form").enctype,
            html5Clone: s.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: s.compatMode === "CSS1Compat",
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test;
        } catch (d) {
            t.deleteExpando = !1;
        }
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = o.getAttribute("value") === "", o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box", b(function() {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = s.getElementsByTagName("body")[0];
            if (!a) return;
            n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = o[0].offsetHeight === 0, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && o[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = p.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width === "4px", r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null;
        }), n = u = a = f = r = o = null, t;
    }();
    var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, F = /([A-Z])/g;
    b.extend({
        cache: {},
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !U(e);
        },
        data: function(e, t, n) {
            return I(e, t, n);
        },
        removeData: function(e, t) {
            return q(e, t);
        },
        _data: function(e, t, n) {
            return I(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return q(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), b.fn.extend({
        data: function(e, n) {
            var r, i, s = this[0], o = 0, u = null;
            if (e === t) {
                if (this.length) {
                    u = b.data(s);
                    if (s.nodeType === 1 && !b._data(s, "parsedAttrs")) {
                        r = s.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                        b._data(s, "parsedAttrs", !0);
                    }
                }
                return u;
            }
            return typeof e == "object" ? this.each(function() {
                b.data(this, e);
            }) : b.access(this, function(n) {
                if (n === t) return s ? R(s, e, b.data(s, e)) : null;
                this.each(function() {
                    b.data(this, e, n);
                });
            }, null, n, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e);
            });
        }
    }), b.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = b._data(e, t), n && (!r || b.isArray(n) ? r = b._data(e, t, b.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t), r = n.length, i = n.shift(), s = b._queueHooks(e, t), o = function() {
                b.dequeue(e, t);
            };
            i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n);
                })
            });
        }
    }), b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && b.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, s = b.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [ o ]);
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = b._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n);
        }
    });
    var z, W, X = /[\t\r\n]/g, V = /\r/g, $ = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Q = /^(?:checked|selected)$/i, G = b.support.getSetAttribute, Y = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, this.className));
            });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = b.trim(r);
                    }
                }
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, this.className));
            });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = typeof t == "boolean";
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if (n === "string") {
                    var s, o = 0, u = b(this), a = t, f = e.match(E) || [];
                    while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s);
                } else if (n === i || n === "boolean") this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "";
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace(V, "") : n == null ? "" : n);
                return;
            }
            return i = b.isFunction(e), this.each(function(n) {
                var s, o = b(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : b.isArray(s) && (s = b.map(s, function(e) {
                    return e == null ? "" : e + "";
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s;
            });
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (b.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !b.nodeName(n.parentNode, "optgroup"))) {
                            t = b(n).val();
                            if (s) return t;
                            o.push(t);
                        }
                    }
                    return o;
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attr: function(e, n, r) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (typeof e.getAttribute === i) return b.prop(e, n, r);
            o = a !== 1 || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z));
            if (r === t) return s && o && "get" in s && (u = s.get(e, n)) !== null ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), u == null ? t : u);
            if (r !== null) return s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r);
            b.removeAttr(e, n);
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(E);
            if (s && e.nodeType === 1) while (n = s[i++]) r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && t === "radio" && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !b.isXMLDoc(e), o && (n = b.propFix[n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), W = {
        get: function(e, n) {
            var r = b.prop(e, n), i = typeof r == "boolean" && e.getAttribute(n), s = typeof r == "boolean" ? Y && G ? i != null : Q.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n;
        }
    };
    if (!Y || !G) b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t;
        },
        set: function(e, t, n) {
            if (!b.nodeName(e, "input")) return z && z.set(e, t, n);
            e.defaultValue = t;
        }
    };
    G || (z = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t;
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t;
        }
    }, b.attrHooks.contenteditable = {
        get: z.get,
        set: function(e, t, n) {
            z.set(e, t === "" ? !1 : t, n);
        }
    }, b.each([ "width", "height" ], function(e, t) {
        b.attrHooks[t] = b.extend(b.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n;
            }
        });
    })), b.support.hrefNormalized || (b.each([ "href", "src", "width", "height" ], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r == null ? t : r;
            }
        });
    }), b.each([ "href", "src" ], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    })), b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each([ "radio", "checkbox" ], function() {
        b.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value;
            }
        };
    }), b.each([ "radio", "checkbox" ], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, t) {
                if (b.isArray(t)) return e.checked = b.inArray(b(e).val(), t) >= 0;
            }
        });
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    b.event = {
        global: {},
        add: function(e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
            if (!y) return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                return typeof b === i || !!e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments);
            }, h.elem = e), n = (n || "").match(E) || [ "" ], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && b.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h);
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0;
            }
            e = null;
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(E) || [ "" ], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) b.event.remove(e, p + t[f], n, r, !0);
                    continue;
                }
                c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && b.removeEvent(e, p, m.handle), delete l[p]);
            }
            b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"));
        },
        trigger: function(n, r, i, o) {
            var u, a, f, l, c, h, p, d = [ i || s ], v = g.call(n, "type") ? n.type : n, m = g.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || s;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (nt.test(v + b.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[b.expando] ? n : new b.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [ n ] : b.makeArray(r, [ n ]), c = b.event.special[v] || {};
            if (!o && c.trigger && c.trigger.apply(i, r) === !1) return;
            if (!o && !c.noBubble && !b.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode) d.push(f), h = f;
                h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e);
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!o && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && (v !== "click" || !b.nodeName(i, "a")) && b.acceptData(i) && a && i[v] && !b.isWindow(i)) {
                h = i[a], h && (i[a] = null), b.event.triggered = v;
                try {
                    i[v]();
                } catch (y) {}
                b.event.triggered = t, h && (i[a] = h);
            }
            return n.result;
        },
        dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, s, o, u = [], a = d.call(arguments), f = (b._data(this, "events") || {})[e.type] || [], l = b.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = b.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation());
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result;
        },
        handlers: function(e, n) {
            var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click")) for (; f != this; f = f.parentNode || this) if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                s = [];
                for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [ f ]).length), s[r] && s.push(i);
                s.length && u.push({
                    elem: f,
                    handlers: s
                });
            }
            return a < n.length && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u;
        },
        fix: function(e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type, o = e, u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new b.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || s), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    if (b.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1;
                }
            },
            focus: {
                trigger: function() {
                    if (this !== s.activeElement && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === s.activeElement && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, b.removeEvent = s.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0;
    }, b.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation();
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !b.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n;
            }
        };
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            if (b.nodeName(this, "form")) return !1;
            b.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), b._data(r, "submitBubbles", !0));
            });
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            if (b.nodeName(this, "form")) return !1;
            b.event.remove(this, "._submit");
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function() {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") b.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
                }), b.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0);
                });
                return !1;
            }
            b.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && b.event.simulate("change", this.parentNode, e, !0);
                }), b._data(t, "changeBubbles", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName);
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0);
        };
        b.event.special[t] = {
            setup: function() {
                n++ === 0 && s.addEventListener(e, r, !0);
            },
            teardown: function() {
                --n === 0 && s.removeEventListener(e, r, !0);
            }
        };
    }), b.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this;
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = st; else if (!i) return this;
            return s === 1 && (u = i, i = function(e) {
                return b().off(e), u.apply(this, arguments);
            }, i.guid = u.guid || (u.guid = b.guid++)), this.each(function() {
                b.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this;
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = st), this.each(function() {
                b.event.remove(this, e, r, n);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0);
        }
    }), function(e, t) {
        function rt(e) {
            return J.test(e + "");
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r;
            };
        }
        function st(e) {
            return e[w] = !0, e;
        }
        function ot(e) {
            var t = c.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }
        function ut(e, t, n, r) {
            var i, s, o, u, a, f, h, v, m, y;
            (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
            if (!e || typeof e != "string") return n;
            if ((u = t.nodeType) !== 1 && u !== 9) return [];
            if (!p && !r) {
                if (i = K.exec(e)) if (o = i[1]) {
                    if (u === 9) {
                        s = t.getElementById(o);
                        if (!s || !s.parentNode) return n;
                        if (s.id === o) return n.push(s), n;
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n;
                } else {
                    if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                    if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n;
                }
                if (S.qsa && !d.test(e)) {
                    h = !0, v = w, m = t, y = u === 9 && e;
                    if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                        f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                        while (a--) f[a] = v + pt(f[a]);
                        m = $.test(e) && t.parentNode || t, y = f.join(",");
                    }
                    if (y) try {
                        return _.apply(n, D.call(m.querySelectorAll(y), 0)), n;
                    } catch (b) {} finally {
                        h || t.removeAttribute("id");
                    }
                }
            }
            return Et(e.replace(R, "$1"), t, n, r);
        }
        function at(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e;
            };
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e;
            };
        }
        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function ht(e, t) {
            var n, r, s, o, u, a, f, l = C[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = z.exec(u)) n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(R, " ")
                }), u = u.slice(n.length);
                for (o in i.filter) (r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break;
            }
            return t ? u.length : u ? ut.error(e) : C(e, a).slice(0);
        }
        function pt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++) r += e[t].value;
            return r;
        }
        function dt(e, t, n) {
            var i = t.dir, s = n && i === "parentNode", o = T++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) if (t.nodeType === 1 || s) return e(t, n, r);
            } : function(t, n, u) {
                var a, f, l, c = x + " " + o;
                if (u) {
                    while (t = t[i]) if (t.nodeType === 1 || s) if (e(t, n, u)) return !0;
                } else while (t = t[i]) if (t.nodeType === 1 || s) {
                    l = t[w] || (t[w] = {});
                    if ((f = l[i]) && f[0] === c) {
                        if ((a = f[1]) === !0 || a === r) return a === !0;
                    } else {
                        f = l[i] = [ c ], f[1] = e(t, n, u) || r;
                        if (f[1] === !0) return !0;
                    }
                }
            };
        }
        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function mt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o;
        }
        function gt(e, t, n, r, i, s) {
            return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || wt(t || "*", u.nodeType ? [ u ] : u, []), m = e && (s || !t) ? mt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = mt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c);
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--) (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a);
                        }
                        l = g.length;
                        while (l--) (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
                    }
                } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g);
            });
        }
        function yt(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, l = dt(function(e) {
                return e === t;
            }, u, !0), c = dt(function(e) {
                return P.call(t, e) > -1;
            }, u, !0), h = [ function(e, n, r) {
                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
            } ];
            for (; a < s; a++) if (n = i.relative[e[a].type]) h = [ dt(vt(h), n) ]; else {
                n = i.filter[e[a].type].apply(null, e[a].matches);
                if (n[w]) {
                    r = ++a;
                    for (; r < s; r++) if (i.relative[e[r].type]) break;
                    return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e));
                }
                h.push(n);
            }
            return vt(h);
        }
        function bt(e, t) {
            var n = 0, s = t.length > 0, o = e.length > 0, u = function(u, a, l, h, p) {
                var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, S = f, T = u || o && i.find.TAG("*", p && a.parentNode || a), N = x += S == null ? 1 : Math.random() || .1;
                E && (f = a !== c && a, r = n);
                for (; (d = T[b]) != null; b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++]) if (m(d, a, l)) {
                            h.push(d);
                            break;
                        }
                        E && (x = N, r = ++n);
                    }
                    s && ((d = !m && d) && y--, u && w.push(d));
                }
                y += b;
                if (s && b !== y) {
                    v = 0;
                    while (m = t[v++]) m(w, g, a, l);
                    if (u) {
                        if (y > 0) while (b--) !w[b] && !g[b] && (g[b] = M.call(h));
                        g = mt(g);
                    }
                    _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h);
                }
                return E && (x = N, f = S), w;
            };
            return s ? st(u) : u;
        }
        function wt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++) ut(e, t[r], n);
            return n;
        }
        function Et(e, t, n, r) {
            var s, o, a, f, l, c = ht(e);
            if (!r && c.length === 1) {
                o = c[0] = c[0].slice(0);
                if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                    t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                    if (!t) return n;
                    e = e.slice(o.shift().value.length);
                }
                s = V.needsContext.test(e) ? 0 : o.length;
                while (s--) {
                    a = o[s];
                    if (i.relative[f = a.type]) break;
                    if (l = i.find[f]) if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                        o.splice(s, 1), e = r.length && pt(o);
                        if (!e) return _.apply(n, D.call(r, 0)), n;
                        break;
                    }
                }
            }
            return u(e, c)(r, t, p, n, $.test(e)), n;
        }
        function St() {}
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date), E = e.document, S = {}, x = 0, T = 0, N = it(), C = it(), k = it(), L = typeof t, A = 1 << 31, O = [], M = O.pop, _ = O.push, D = O.slice, P = O.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; t < n; t++) if (this[t] === e) return t;
            return -1;
        }, H = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", j = B.replace("w", "w#"), F = "([*^$|!~]?=)", I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]", q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)", R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), U = new RegExp("^" + H + "*," + H + "*"), z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"), W = new RegExp(q), X = new RegExp("^" + j + "$"), V = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
            TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        }, $ = /[\x20\t\r\n\f]*[+~]/, J = /^[^{]+\{\s*\[native code/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320);
        };
        try {
            D.call(E.documentElement.childNodes, 0)[0].nodeType;
        } catch (nt) {
            D = function(e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n;
            };
        }
        o = ut.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1;
        }, l = ut.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : E;
            if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
            c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), S.attributes = ot(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string";
            }), S.getByClassName = ot(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2);
            }), S.getByName = ot(function(e) {
                e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t;
            }), i.attrHandle = ot(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#";
            }) ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            }, S.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== L && !p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== L && !p) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [ r ] : t : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
                if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e);
            } : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r;
                }
                return s;
            }, i.find.NAME = S.getByName && function(e, t) {
                if (typeof t.getElementsByName !== L) return t.getElementsByName(name);
            }, i.find.CLASS = S.getByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e);
            }, v = [], d = [ ":focus" ];
            if (S.qsa = rt(n.querySelectorAll)) ot(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked");
            }), ot(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:");
            });
            return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q);
            }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16);
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, y = h.compareDocumentPosition ? function(e, t) {
                var r;
                if (e === t) return a = !0, 0;
                if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, s = e.parentNode, o = t.parentNode, u = [ e ], f = [ t ];
                if (e === t) return a = !0, 0;
                if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                if (s === o) return at(e, t);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = t;
                while (r = r.parentNode) f.unshift(r);
                while (u[i] === f[i]) i++;
                return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0;
            }, a = !1, [ 0, 0 ].sort(y), S.detectDuplicates = a, c;
        }, ut.matches = function(e, t) {
            return ut(e, null, null, t);
        }, ut.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
            if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
                var n = m.call(e, t);
                if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n;
            } catch (r) {}
            return ut(t, c, null, [ e ]).length > 0;
        }, ut.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t);
        }, ut.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
        }, ut.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, ut.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            a = !S.detectDuplicates, e.sort(y);
            if (a) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1);
            }
            return e;
        }, s = ut.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i) for (; t = e[r]; r++) n += s(t); else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n;
        }, i = ut.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: V,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    return e === "*" ? function() {
                        return !0;
                    } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ut.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling";
                                }
                                return !0;
                            }
                            d = [ o ? m.firstChild : m.lastChild ];
                            if (o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (c.nodeType === 1 && ++h && c === t) {
                                    l[e] = [ x, p, h ];
                                    break;
                                }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1]; else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                y && ((c[w] || (c[w] = {}))[e] = [ x, h ]);
                                if (c === t) break;
                            }
                            return h -= i, h === r || h % r === 0 && h / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [], n = [], r = u(e.replace(R, "$1"));
                    return r[w] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s);
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop();
                    };
                }),
                has: st(function(e) {
                    return function(t) {
                        return ut(e, t).length > 0;
                    };
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
                    };
                }),
                lang: st(function(e) {
                    return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
                        var n;
                        do if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === h;
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !i.pseudos.empty(e);
                },
                header: function(e) {
                    return G.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button";
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type);
                },
                first: ct(function() {
                    return [ 0 ];
                }),
                last: ct(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ct(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: ct(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ct(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t; ) e.push(r);
                    return e;
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = lt(n);
        u = ut.compile = function(e, t) {
            var n, r = [], i = [], s = k[e + " "];
            if (!s) {
                t || (t = ht(e)), n = t.length;
                while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = k(e, bt(i, r));
            }
            return s;
        }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains;
    }(e);
    var ot = /Until$/, ut = /^(?:parents|prev(?:Until|All))/, at = /^.[^:#\[\.,]*$/, ft = b.expr.match.needsContext, lt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if (typeof e != "string") return r = this, this.pushStack(b(e).filter(function() {
                for (t = 0; t < i; t++) if (b.contains(r[t], this)) return !0;
            }));
            n = [];
            for (t = 0; t < i; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n;
        },
        has: function(e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (b.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(ht(this, e, !1));
        },
        filter: function(e) {
            return this.pushStack(ht(this, e, !0));
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = ft.test(e) || typeof e != "string" ? b(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        s.push(n);
                        break;
                    }
                    n = n.parentNode;
                }
            }
            return this.pushStack(s.length > 1 ? b.unique(s) : s);
        },
        index: function(e) {
            return e ? typeof e == "string" ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = typeof e == "string" ? b(e, t) : b.makeArray(e && e.nodeType ? [ e ] : e), r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r));
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
        }
    }), b.fn.andSelf = b.fn.addBack, b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
            return b.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n);
        },
        next: function(e) {
            return ct(e, "nextSibling");
        },
        prev: function(e) {
            return ct(e, "previousSibling");
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return b.sibling(e.firstChild);
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes);
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return ot.test(e) || (r = n), r && typeof r == "string" && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i);
        };
    }), b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? b.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : b.find.matches(e, t);
        },
        dir: function(e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !b(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i;
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n;
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i, Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/, kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: b.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, At = pt(s), Ot = At.appendChild(s.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = b(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++) if (!e || b.filter(e, [ n ]).length > 0) !t && n.nodeType === 1 && b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && b.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return b.clone(this, e, t);
            });
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (b.support.htmlSerialize || !mt.test(e)) && (b.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0;
                    } catch (s) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return !t && typeof e != "string" && (e = b(e).not(this).detach()), this.domManip([ e ], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t));
            });
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, n, r) {
            e = h.apply([], e);
            var i, s, o, u, a, f, l = 0, c = this.length, p = this, d = c - 1, v = e[0], m = b.isFunction(v);
            if (m || !(c <= 1 || typeof v != "string" || b.support.checkClone || !Tt.test(v))) return this.each(function(i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r);
            });
            if (c) {
                f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, f.childNodes.length === 1 && (f = i);
                if (i) {
                    n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length;
                    for (; l < c; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                    if (o) {
                        a = u[u.length - 1].ownerDocument, b.map(u, Dt);
                        for (l = 0; l < o; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                            url: s.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")));
                    }
                    f = i = null;
                }
            }
            return this;
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0, i = [], s = b(e), o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i);
        };
    }), b.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !b.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0; (i = u[o]) != null; ++o) r[o] && Bt(i, r[o]);
            }
            if (t) if (n) {
                u = u || jt(e), r = r || jt(s);
                for (o = 0; (i = u[o]) != null; o++) Ht(i, r[o]);
            } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s;
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0) if (b.type(s) === "object") b.merge(p, s.nodeType ? [ s ] : s); else if (!Et.test(s)) p.push(t.createTextNode(s)); else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || [ "", "" ])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!b.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f);
                    }
                    b.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild;
                }
            }
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && b.inArray(s, r) !== -1) continue;
                o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s);
                }
            }
            return u = null, h;
        },
        cleanData: function(e, t) {
            var n, r, s, o, u = 0, a = b.expando, f = b.cache, c = b.support.deleteExpando, h = b.event.special;
            for (; (n = e[u]) != null; u++) if (t || b.acceptData(n)) {
                s = n[a], o = s && f[s];
                if (o) {
                    if (o.events) for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s));
                }
            }
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/, Wt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = new RegExp("^(" + w + ")(.*)$", "i"), Jt = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Kt = new RegExp("^([+-])=(" + w + ")", "i"), Qt = {
        BODY: "block"
    }, Gt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = [ "Top", "Right", "Bottom", "Left" ], en = [ "Webkit", "O", "Moz", "ms" ];
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, s, o = {}, u = 0;
                if (b.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = b.css(e, n[u], !1, s);
                    return o;
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return rn(this, !0);
        },
        hide: function() {
            return rn(this);
        },
        toggle: function(e) {
            var t = typeof e == "boolean";
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide();
            });
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = b.camelCase(n), f = e.style;
            n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !b.cssNumber[a] && (r += "px"), !b.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r;
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o;
        },
        swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i;
        }
    }), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle(t, null);
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
        return u && (a === "" && !b.contains(e.ownerDocument, e) && (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a;
    }) : s.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle;
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u[n] : t, f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a;
    }), b.each([ "height", "width" ], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function() {
                    return un(e, t, r);
                }) : un(e, t, r);
            },
            set: function(e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, b.support.boxSizing && b.css(e, "boxSizing", !1, i) === "border-box", i) : 0);
            }
        };
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && b.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return;
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i;
        }
    }), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return b.swap(e, {
                    display: "inline-block"
                }, Rt, [ e, "marginRight" ]);
            }
        }), !b.support.pixelPosition && b.fn.position && b.each([ "top", "left" ], function(e, t) {
            b.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? b(e).position()[t] + "px" : n;
                }
            };
        });
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && (e.style && e.style.display || b.css(e, "display")) === "none";
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e);
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [ n ];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i;
            }
        }, Vt.test(e) || (b.cssHooks[e + t].set = sn);
    });
    var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i, dn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e));
            }).map(function(e, t) {
                var n = b(this).val();
                return n == null ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                };
            }).get();
        }
    }), b.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = b.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional);
        if (b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            s(this.name, this.value);
        }); else for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+");
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
    };
    var mn, gn, yn = b.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//, Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = b.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = o.href;
    } catch (Mn) {
        gn = s.createElement("a"), gn.href = "", gn = gn.href;
    }
    mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function(e, n, r) {
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && b.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            u.each(r, s || [ e.responseText, t, e ]);
        }), this;
    }, b.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), b.each([ "get", "post" ], function(e, n) {
        b[n] = function(e, r, i, s) {
            return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            });
        };
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e);
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (w === 2) return;
                w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y); else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0);
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [ g, T, x ]) : d.rejectWith(h, [ x, T, y ]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [ x, c, l ? g : y ]), v.fireWith(h, [ x, T ]), a && (p.trigger("ajaxComplete", [ x, c ]), --b.active || b.event.trigger("ajaxStop"));
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event, d = b.Deferred(), v = b.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, w = 0, S = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (w === 2) {
                        if (!l) {
                            l = {};
                            while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2];
                        }
                        t = l[e.toLowerCase()];
                    }
                    return t == null ? null : t;
                },
                getAllResponseHeaders: function() {
                    return w === 2 ? o : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, g[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return w || (c.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (w < 2) for (t in e) m[t] = [ m[t], e[t] ]; else x.always(e[x.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || S;
                    return f && f.abort(t), N(0, t), this;
                }
            };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [ "" ], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (w === 2) return x;
            a = c.global, a && b.active++ === 0 && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && w !== 2) {
                S = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport"); else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [ x, c ]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout");
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N);
                    } catch (T) {
                        if (!(w < 2)) throw T;
                        N(-1, T);
                    }
                }
                return x;
            }
            return x.abort();
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json");
        }
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e;
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = s.head || b("head")[0] || s.documentElement;
            return {
                send: function(t, i) {
                    n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success");
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jn.pop() || b.expando + "_" + yn++;
            return this[e] = !0, e;
        }
    }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || b.error(s + " was not called"), u[0];
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
            u = arguments;
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t;
        }), "script";
    });
    var In, qn, Rn = 0, Un = e.ActiveXObject && function() {
        var e;
        for (e in In) In[e](t, !0);
    };
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Wn();
    } : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !!qn && "withCredentials" in qn, qn = b.support.ajax = !!qn, qn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u]);
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort(); else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText;
                                    } catch (h) {
                                        l = "";
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204);
                                }
                            }
                        } catch (p) {
                            i || s(-1, p);
                        }
                        c && s(u, l, c, f);
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = new RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Qn = [ nr ], Gn = {
        "*": [ function(e, t) {
            var n, r, i = this.createTween(e, t), s = Jn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = b.css(i.elem, e, !0) || n || 1;
                    do a = a || ".5", u /= a, b.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f);
                }
                i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
            }
            return i;
        } ]
    };
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e);
        }
    }), b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = b.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (e.elem.style[b.cssProps[e.prop]] != null || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, b.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
    }), b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e), s = b.speed(t, n, r), o = function() {
                var t = er(this, b.extend({}, e), s);
                o.finish = function() {
                    t.stop(!0);
                }, (i || b._data(this, "finish")) && t.stop(!0);
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = e != null && e + "queueHooks", s = b.timers, o = b._data(this);
                if (n) o[n] && o[n].stop && i(o[n]); else for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--; ) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && b.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = b.timers, o = r ? r.length : 0;
                n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                for (t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), b.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        r.duration = b.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }, r;
    }, b.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers, r = 0;
        Xn = b.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t;
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start();
    }, b.fx.interval = 13, b.fx.start = function() {
        Vn || (Vn = setInterval(b.fx.tick, b.fx.interval));
    }, b.fx.stop = function() {
        clearInterval(Vn), Vn = null;
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem;
        }).length;
    }), b.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            b.offset.setOffset(this, e, t);
        });
        var n, r, s = {
            top: 0,
            left: 0
        }, o = this[0], u = o && o.ownerDocument;
        if (!u) return;
        return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s;
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = b(e), s = i.offset(), o = b.css(e, "top"), u = b.css(e, "left"), a = (r === "absolute" || r === "fixed") && b.inArray("auto", [ o, u ]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
        }
    }, b.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                top: 0,
                left: 0
            }, r = this[0];
            return b.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - b.css(r, "marginTop", !0),
                left: t.left - n.left - b.css(r, "marginLeft", !0)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && b.css(e, "position") === "static") e = e.offsetParent;
                return e || s.documentElement;
            });
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, s) {
                var o = sr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s;
            }, e, i, arguments.length, null);
        };
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u);
                }, n, o ? i : t, o, null);
            };
        });
    }), e.jQuery = e.$ = b, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b;
    });
})(window), function(e, t, n) {
    function r(e) {
        return function() {
            var t = arguments[0], n;
            n = "[" + (e ? e + ":" : "") + t + "] http://errors.angularjs.org/1.3.1/" + (e ? e + "/" : "") + t;
            for (t = 1; t < arguments.length; t++) {
                n = n + (1 == t ? "?" : "&") + "p" + (t - 1) + "=";
                var r = encodeURIComponent, i;
                i = arguments[t], i = "function" == typeof i ? i.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i, n += r(i);
            }
            return Error(n);
        };
    }
    function i(e) {
        if (null == e || T(e)) return !1;
        var t = e.length;
        return e.nodeType === Br && t ? !0 : b(e) || Lr(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e;
    }
    function s(e, t, n) {
        var r, o;
        if (e) if (S(e)) for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e); else if (Lr(e) || i(e)) {
            var u = "object" != typeof e;
            r = 0;
            for (o = e.length; r < o; r++) (u || r in e) && t.call(n, e[r], r, e);
        } else if (e.forEach && e.forEach !== s) e.forEach(t, n, e); else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        return e;
    }
    function o(e, t, n) {
        for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r;
    }
    function u(e) {
        return function(t, n) {
            e(n, t);
        };
    }
    function a() {
        return ++kr;
    }
    function f(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey;
    }
    function l(e) {
        for (var t = e.$$hashKey, n = 1, r = arguments.length; n < r; n++) {
            var i = arguments[n];
            if (i) for (var s = Object.keys(i), o = 0, u = s.length; o < u; o++) {
                var a = s[o];
                e[a] = i[a];
            }
        }
        return f(e, t), e;
    }
    function c(e) {
        return parseInt(e, 10);
    }
    function h(e, t) {
        return l(new (l(function() {}, {
            prototype: e
        })), t);
    }
    function p() {}
    function d(e) {
        return e;
    }
    function v(e) {
        return function() {
            return e;
        };
    }
    function m(e) {
        return "undefined" == typeof e;
    }
    function g(e) {
        return "undefined" != typeof e;
    }
    function y(e) {
        return null !== e && "object" == typeof e;
    }
    function b(e) {
        return "string" == typeof e;
    }
    function w(e) {
        return "number" == typeof e;
    }
    function E(e) {
        return "[object Date]" === xr.call(e);
    }
    function S(e) {
        return "function" == typeof e;
    }
    function x(e) {
        return "[object RegExp]" === xr.call(e);
    }
    function T(e) {
        return e && e.window === e;
    }
    function N(e) {
        return e && e.$evalAsync && e.$watch;
    }
    function C(e) {
        return "boolean" == typeof e;
    }
    function k(e) {
        return !!e && !!(e.nodeName || e.prop && e.attr && e.find);
    }
    function L(e) {
        var t = {};
        e = e.split(",");
        var n;
        for (n = 0; n < e.length; n++) t[e[n]] = !0;
        return t;
    }
    function A(e) {
        return dr(e.nodeName || e[0].nodeName);
    }
    function O(e, t) {
        var n = e.indexOf(t);
        return 0 <= n && e.splice(n, 1), t;
    }
    function M(e, t, n, r) {
        if (T(e) || N(e)) throw Tr("cpws");
        if (t) {
            if (e === t) throw Tr("cpi");
            n = n || [], r = r || [];
            if (y(e)) {
                var i = n.indexOf(e);
                if (-1 !== i) return r[i];
                n.push(e), r.push(t);
            }
            if (Lr(e)) for (var o = t.length = 0; o < e.length; o++) i = M(e[o], null, n, r), y(e[o]) && (n.push(e[o]), r.push(i)), t.push(i); else {
                var u = t.$$hashKey;
                Lr(t) ? t.length = 0 : s(t, function(e, n) {
                    delete t[n];
                });
                for (o in e) e.hasOwnProperty(o) && (i = M(e[o], null, n, r), y(e[o]) && (n.push(e[o]), r.push(i)), t[o] = i);
                f(t, u);
            }
        } else if (t = e) Lr(e) ? t = M(e, [], n, r) : E(e) ? t = new Date(e.getTime()) : x(e) ? (t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : y(e) && (i = Object.create(Object.getPrototypeOf(e)), t = M(e, i, n, r));
        return t;
    }
    function _(e, t) {
        if (Lr(e)) {
            t = t || [];
            for (var n = 0, r = e.length; n < r; n++) t[n] = e[n];
        } else if (y(e)) for (n in t = t || {}, e) if ("$" !== n.charAt(0) || "$" !== n.charAt(1)) t[n] = e[n];
        return t || e;
    }
    function D(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var r = typeof e, i;
        if (r == typeof t && "object" == r) {
            if (!Lr(e)) {
                if (E(e)) return E(t) ? D(e.getTime(), t.getTime()) : !1;
                if (x(e) && x(t)) return e.toString() == t.toString();
                if (N(e) || N(t) || T(e) || T(t) || Lr(t)) return !1;
                r = {};
                for (i in e) if ("$" !== i.charAt(0) && !S(e[i])) {
                    if (!D(e[i], t[i])) return !1;
                    r[i] = !0;
                }
                for (i in t) if (!r.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== n && !S(t[i])) return !1;
                return !0;
            }
            if (!Lr(t)) return !1;
            if ((r = e.length) == t.length) {
                for (i = 0; i < r; i++) if (!D(e[i], t[i])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function P(e, t, n) {
        return e.concat(wr.call(t, n));
    }
    function H(e, t) {
        var n = 2 < arguments.length ? wr.call(arguments, 2) : [];
        return !S(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, n.concat(wr.call(arguments, 0))) : t.apply(e, n);
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e);
        };
    }
    function B(e, r) {
        var i = r;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : T(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : N(r) && (i = "$SCOPE"), i;
    }
    function j(e, t) {
        return "undefined" == typeof e ? n : JSON.stringify(e, B, t ? "  " : null);
    }
    function F(e) {
        return b(e) ? JSON.parse(e) : e;
    }
    function I(e) {
        e = yr(e).clone();
        try {
            e.empty();
        } catch (t) {}
        var n = yr("<div>").append(e).html();
        try {
            return e[0].nodeType === jr ? dr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + dr(t);
            });
        } catch (r) {
            return dr(n);
        }
    }
    function q(e) {
        try {
            return decodeURIComponent(e);
        } catch (t) {}
    }
    function R(e) {
        var t = {}, n, r;
        return s((e || "").split("&"), function(e) {
            e && (n = e.replace(/\+/g, "%20").split("="), r = q(n[0]), g(r) && (e = g(n[1]) ? q(n[1]) : !0, vr.call(t, r) ? Lr(t[r]) ? t[r].push(e) : t[r] = [ t[r], e ] : t[r] = e));
        }), t;
    }
    function U(e) {
        var t = [];
        return s(e, function(e, n) {
            Lr(e) ? s(e, function(e) {
                t.push(W(n, !0) + (!0 === e ? "" : "=" + W(e, !0)));
            }) : t.push(W(n, !0) + (!0 === e ? "" : "=" + W(e, !0)));
        }), t.length ? t.join("&") : "";
    }
    function z(e) {
        return W(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function W(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+");
    }
    function X(e, t) {
        var n, r, i = _r.length;
        e = yr(e);
        for (r = 0; r < i; ++r) if (n = _r[r] + t, b(n = e.attr(n))) return n;
        return null;
    }
    function V(e, t) {
        var n, r, i = {};
        s(_r, function(t) {
            t += "app", !n && e.hasAttribute && e.hasAttribute(t) && (n = e, r = e.getAttribute(t));
        }), s(_r, function(t) {
            t += "app";
            var i;
            !n && (i = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(t));
        }), n && (i.strictDi = null !== X(n, "strict-di"), t(n, r ? [ r ] : [], i));
    }
    function $(n, r, i) {
        y(i) || (i = {}), i = l({
            strictDi: !1
        }, i);
        var o = function() {
            n = yr(n);
            if (n.injector()) {
                var e = n[0] === t ? "document" : I(n);
                throw Tr("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            return r = r || [], r.unshift([ "$provide", function(e) {
                e.value("$rootElement", n);
            } ]), i.debugInfoEnabled && r.push([ "$compileProvider", function(e) {
                e.debugInfoEnabled(!0);
            } ]), r.unshift("ng"), e = _t(r, i.strictDi), e.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                e.$apply(function() {
                    t.data("$injector", r), n(t)(e);
                });
            } ]), e;
        }, u = /^NG_ENABLE_DEBUG_INFO!/, a = /^NG_DEFER_BOOTSTRAP!/;
        e && u.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(u, ""));
        if (e && !a.test(e.name)) return o();
        e.name = e.name.replace(a, ""), Nr.resumeBootstrap = function(e) {
            s(e, function(e) {
                r.push(e);
            }), o();
        };
    }
    function J() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload();
    }
    function K(e) {
        return Nr.element(e).injector().get("$$testability");
    }
    function Q(e, t) {
        return t = t || "_", e.replace(Dr, function(e, n) {
            return (n ? t : "") + e.toLowerCase();
        });
    }
    function G() {
        var t;
        Pr || ((br = e.jQuery) && br.fn.on ? (yr = br, l(br.fn, {
            scope: Qr.scope,
            isolateScope: Qr.isolateScope,
            controller: Qr.controller,
            injector: Qr.injector,
            inheritedData: Qr.inheritedData
        }), t = br.cleanData, br.cleanData = function(e) {
            var n;
            if (Hr) Hr = !1; else for (var r = 0, i; null != (i = e[r]); r++) (n = br._data(i, "events")) && n.$destroy && br(i).triggerHandler("$destroy");
            t(e);
        }) : yr = ft, Nr.element = yr, Pr = !0);
    }
    function Y(e, t, n) {
        if (!e) throw Tr("areq", t || "?", n || "required");
        return e;
    }
    function Z(e, t, n) {
        return n && Lr(e) && (e = e[e.length - 1]), Y(S(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e;
    }
    function et(e, t) {
        if ("hasOwnProperty" === e) throw Tr("badname", t);
    }
    function tt(e, t, n) {
        if (!t) return e;
        t = t.split(".");
        for (var r, i = e, s = t.length, o = 0; o < s; o++) r = t[o], e && (e = (i = e)[r]);
        return !n && S(e) ? H(i, e) : e;
    }
    function nt(e) {
        var t = e[0];
        e = e[e.length - 1];
        var n = [ t ];
        do {
            t = t.nextSibling;
            if (!t) break;
            n.push(t);
        } while (t !== e);
        return yr(n);
    }
    function rt() {
        return Object.create(null);
    }
    function it(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n());
        }
        var n = r("$injector"), i = r("ng");
        return e = t(e, "angular", Object), e.$$minErr = e.$$minErr || r, t(e, "module", function() {
            var e = {};
            return function(r, s, o) {
                if ("hasOwnProperty" === r) throw i("badname", "module");
                return s && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, n, r, i) {
                        return i || (i = t), function() {
                            return i[r || "push"]([ e, n, arguments ]), f;
                        };
                    }
                    if (!s) throw n("nomod", r);
                    var t = [], i = [], u = [], a = e("$injector", "invoke", "push", i), f = {
                        _invokeQueue: t,
                        _configBlocks: i,
                        _runBlocks: u,
                        requires: s,
                        name: r,
                        provider: e("$provide", "provider"),
                        factory: e("$provide", "factory"),
                        service: e("$provide", "service"),
                        value: e("$provide", "value"),
                        constant: e("$provide", "constant", "unshift"),
                        animation: e("$animateProvider", "register"),
                        filter: e("$filterProvider", "register"),
                        controller: e("$controllerProvider", "register"),
                        directive: e("$compileProvider", "directive"),
                        config: a,
                        run: function(e) {
                            return u.push(e), this;
                        }
                    };
                    return o && a(o), f;
                });
            };
        });
    }
    function st(t) {
        l(t, {
            bootstrap: $,
            copy: M,
            extend: l,
            equals: D,
            element: yr,
            forEach: s,
            injector: _t,
            noop: p,
            bind: H,
            toJson: j,
            fromJson: F,
            identity: d,
            isUndefined: m,
            isDefined: g,
            isString: b,
            isFunction: S,
            isObject: y,
            isNumber: w,
            isElement: k,
            isArray: Lr,
            version: Fr,
            isDate: E,
            lowercase: dr,
            uppercase: mr,
            callbacks: {
                counter: 0
            },
            getTestability: K,
            $$minErr: r,
            $$csp: Mr,
            reloadWithDebugInfo: J
        }), Cr = it(e);
        try {
            Cr("ngLocale");
        } catch (n) {
            Cr("ngLocale", []).provider("$locale", nn);
        }
        Cr("ng", [ "ngLocale" ], [ "$provide", function(e) {
            e.provider({
                $$sanitizeUri: On
            }), e.provider("$compile", It).directive({
                a: qi,
                input: is,
                textarea: is,
                form: Wi,
                script: Xs,
                select: Js,
                style: Qs,
                option: Ks,
                ngBind: Es,
                ngBindHtml: xs,
                ngBindTemplate: Ss,
                ngClass: Ts,
                ngClassEven: Cs,
                ngClassOdd: Ns,
                ngCloak: ks,
                ngController: Ls,
                ngForm: Xi,
                ngHide: Is,
                ngIf: Ms,
                ngInclude: _s,
                ngInit: Ps,
                ngNonBindable: Hs,
                ngPluralize: Bs,
                ngRepeat: js,
                ngShow: Fs,
                ngStyle: qs,
                ngSwitch: Rs,
                ngSwitchWhen: Us,
                ngSwitchDefault: zs,
                ngOptions: $s,
                ngTransclude: Ws,
                ngModel: cs,
                ngList: gs,
                ngChange: hs,
                pattern: ds,
                ngPattern: ds,
                required: ps,
                ngRequired: ps,
                minlength: ms,
                ngMinlength: ms,
                maxlength: vs,
                ngMaxlength: vs,
                ngValue: bs,
                ngModelOptions: ws
            }).directive({
                ngInclude: Ds
            }).directive(Ri).directive(As), e.provider({
                $anchorScroll: Dt,
                $animate: oi,
                $browser: Bt,
                $cacheFactory: jt,
                $controller: zt,
                $document: Wt,
                $exceptionHandler: Xt,
                $filter: Un,
                $interpolate: en,
                $interval: tn,
                $http: Qt,
                $httpBackend: Yt,
                $location: vn,
                $log: mn,
                $parse: Tn,
                $rootScope: An,
                $q: Nn,
                $$q: Cn,
                $sce: Pn,
                $sceDelegate: Dn,
                $sniffer: Hn,
                $templateCache: Ft,
                $templateRequest: Bn,
                $$testability: jn,
                $timeout: Fn,
                $window: Rn,
                $$rAF: Ln,
                $$asyncCallback: Pt
            });
        } ]);
    }
    function ot(e) {
        return e.replace(Rr, function(e, t, n, r) {
            return r ? n.toUpperCase() : n;
        }).replace(Ur, "Moz$1");
    }
    function ut(e) {
        return e = e.nodeType, e === Br || !e || 9 === e;
    }
    function at(e, t) {
        var n, r, i = t.createDocumentFragment(), o = [];
        if (Vr.test(e)) {
            n = n || i.appendChild(t.createElement("div")), r = ($r.exec(e) || [ "", "" ])[1].toLowerCase(), r = Kr[r] || Kr._default, n.innerHTML = r[1] + e.replace(Jr, "<$1></$2>") + r[2];
            for (r = r[0]; r--; ) n = n.lastChild;
            o = P(o, n.childNodes), n = i.firstChild, n.textContent = "";
        } else o.push(t.createTextNode(e));
        return i.textContent = "", i.innerHTML = "", s(o, function(e) {
            i.appendChild(e);
        }), i;
    }
    function ft(e) {
        if (e instanceof ft) return e;
        var n;
        b(e) && (e = Ar(e), n = !0);
        if (!(this instanceof ft)) {
            if (n && "<" != e.charAt(0)) throw Wr("nosel");
            return new ft(e);
        }
        if (n) {
            n = t;
            var r;
            e = (r = Xr.exec(e)) ? [ n.createElement(r[1]) ] : (r = at(e, n)) ? r.childNodes : [];
        }
        bt(this, e);
    }
    function lt(e) {
        return e.cloneNode(!0);
    }
    function ct(e, t) {
        t || pt(e);
        if (e.querySelectorAll) for (var n = e.querySelectorAll("*"), r = 0, i = n.length; r < i; r++) pt(n[r]);
    }
    function ht(e, t, n, r) {
        if (g(r)) throw Wr("offargs");
        var i = (r = dt(e)) && r.events, o = r && r.handle;
        if (o) if (t) s(t.split(" "), function(t) {
            if (g(n)) {
                var r = i[t];
                O(r || [], n);
                if (r && 0 < r.length) return;
            }
            e.removeEventListener(t, o, !1), delete i[t];
        }); else for (t in i) "$destroy" !== t && e.removeEventListener(t, o, !1), delete i[t];
    }
    function pt(e, t) {
        var r = e.ng339, i = r && Ir[r];
        i && (t ? delete i.data[t] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), ht(e)), delete Ir[r], e.ng339 = n));
    }
    function dt(e, t) {
        var r = e.ng339, r = r && Ir[r];
        return t && !r && (e.ng339 = r = ++qr, r = Ir[r] = {
            events: {},
            data: {},
            handle: n
        }), r;
    }
    function vt(e, t, n) {
        if (ut(e)) {
            var r = g(n), i = !r && t && !y(t), s = !t;
            e = (e = dt(e, !i)) && e.data;
            if (r) e[t] = n; else {
                if (s) return e;
                if (i) return e && e[t];
                l(e, t);
            }
        }
    }
    function mt(e, t) {
        return e.getAttribute ? -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") : !1;
    }
    function gt(e, t) {
        t && e.setAttribute && s(t.split(" "), function(t) {
            e.setAttribute("class", Ar((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Ar(t) + " ", " ")));
        });
    }
    function yt(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            s(t.split(" "), function(e) {
                e = Ar(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ");
            }), e.setAttribute("class", Ar(n));
        }
    }
    function bt(e, t) {
        if (t) if (t.nodeType) e[e.length++] = t; else {
            var n = t.length;
            if ("number" == typeof n && t.window !== t) {
                if (n) for (var r = 0; r < n; r++) e[e.length++] = t[r];
            } else e[e.length++] = t;
        }
    }
    function wt(e, t) {
        return Et(e, "$" + (t || "ngController") + "Controller");
    }
    function Et(e, t, r) {
        9 == e.nodeType && (e = e.documentElement);
        for (t = Lr(t) ? t : [ t ]; e; ) {
            for (var i = 0, s = t.length; i < s; i++) if ((r = yr.data(e, t[i])) !== n) return r;
            e = e.parentNode || 11 === e.nodeType && e.host;
        }
    }
    function St(e) {
        for (ct(e, !0); e.firstChild; ) e.removeChild(e.firstChild);
    }
    function xt(e, t) {
        t || ct(e);
        var n = e.parentNode;
        n && n.removeChild(e);
    }
    function Tt(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : yr(n).on("load", t);
    }
    function Nt(e, t) {
        var n = Gr[t.toLowerCase()];
        return n && Yr[A(e)] && n;
    }
    function Ct(e, t) {
        var n = e.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && Zr[t];
    }
    function kt(e, t) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented;
            };
            var i = t[r || n.type], s = i ? i.length : 0;
            if (s) {
                if (m(n.immediatePropagationStopped)) {
                    var o = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), o && o.call(n);
                    };
                }
                n.isImmediatePropagationStopped = function() {
                    return !0 === n.immediatePropagationStopped;
                }, 1 < s && (i = _(i));
                for (var u = 0; u < s; u++) n.isImmediatePropagationStopped() || i[u].call(e, n);
            }
        };
        return n.elem = e, n;
    }
    function Lt(e, t) {
        var n = e && e.$$hashKey;
        return n ? ("function" == typeof n && (n = e.$$hashKey()), n) : (n = typeof e, n = "function" == n || "object" == n && null !== e ? e.$$hashKey = n + ":" + (t || a)() : n + ":" + e);
    }
    function At(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n;
            };
        }
        s(e, this.put, this);
    }
    function Ot(e) {
        return (e = e.toString().replace(ri, "").match(ei)) ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function Mt(e, t, n) {
        var r;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                r = [];
                if (e.length) {
                    if (t) throw b(n) && n || (n = e.name || Ot(e)), ii("strictdi", n);
                    t = e.toString().replace(ri, ""), t = t.match(ei), s(t[1].split(ti), function(e) {
                        e.replace(ni, function(e, t, n) {
                            r.push(n);
                        });
                    });
                }
                e.$inject = r;
            }
        } else Lr(e) ? (t = e.length - 1, Z(e[t], "fn"), r = e.slice(0, t)) : Z(e, "fn", !0);
        return r;
    }
    function _t(e, t) {
        function r(e) {
            return function(t, n) {
                if (!y(t)) return e(t, n);
                s(t, u(e));
            };
        }
        function i(e, t) {
            et(e, "service");
            if (S(t) || Lr(t)) t = w.instantiate(t);
            if (!t.$get) throw ii("pget", e);
            return g[e + "Provider"] = t;
        }
        function o(e, t) {
            return function() {
                var r = x.invoke(t, this, n, e);
                if (m(r)) throw ii("undef", e);
                return r;
            };
        }
        function a(e, t, n) {
            return i(e, {
                $get: !1 !== n ? o(e, t) : t
            });
        }
        function f(e) {
            var t = [], n;
            return s(e, function(e) {
                function r(e) {
                    var t, n;
                    t = 0;
                    for (n = e.length; t < n; t++) {
                        var r = e[t], i = w.get(r[0]);
                        i[r[1]].apply(i, r[2]);
                    }
                }
                if (!d.get(e)) {
                    d.put(e, !0);
                    try {
                        b(e) ? (n = Cr(e), t = t.concat(f(n.requires)).concat(n._runBlocks), r(n._invokeQueue), r(n._configBlocks)) : S(e) ? t.push(w.invoke(e)) : Lr(e) ? t.push(w.invoke(e)) : Z(e, "module");
                    } catch (i) {
                        throw Lr(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), ii("modulerr", e, i.stack || i.message || i);
                    }
                }
            }), t;
        }
        function l(e, n) {
            function r(t) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === c) throw ii("cdep", t + " <- " + h.join(" <- "));
                    return e[t];
                }
                try {
                    return h.unshift(t), e[t] = c, e[t] = n(t);
                } catch (r) {
                    throw e[t] === c && delete e[t], r;
                } finally {
                    h.shift();
                }
            }
            function i(e, n, i, s) {
                "string" == typeof i && (s = i, i = null);
                var o = [];
                s = Mt(e, t, s);
                var u, a, f;
                a = 0;
                for (u = s.length; a < u; a++) {
                    f = s[a];
                    if ("string" != typeof f) throw ii("itkn", f);
                    o.push(i && i.hasOwnProperty(f) ? i[f] : r(f));
                }
                return Lr(e) && (e = e[u]), e.apply(n, o);
            }
            return {
                invoke: i,
                instantiate: function(e, t, n) {
                    var r = function() {};
                    return r.prototype = (Lr(e) ? e[e.length - 1] : e).prototype, r = new r, e = i(e, r, t, n), y(e) || S(e) ? e : r;
                },
                get: r,
                annotate: Mt,
                has: function(t) {
                    return g.hasOwnProperty(t + "Provider") || e.hasOwnProperty(t);
                }
            };
        }
        t = !0 === t;
        var c = {}, h = [], d = new At([], !0), g = {
            $provide: {
                provider: r(i),
                factory: r(a),
                service: r(function(e, t) {
                    return a(e, [ "$injector", function(e) {
                        return e.instantiate(t);
                    } ]);
                }),
                value: r(function(e, t) {
                    return a(e, v(t), !1);
                }),
                constant: r(function(e, t) {
                    et(e, "constant"), g[e] = t, E[e] = t;
                }),
                decorator: function(e, t) {
                    var n = w.get(e + "Provider"), r = n.$get;
                    n.$get = function() {
                        var e = x.invoke(r, n);
                        return x.invoke(t, null, {
                            $delegate: e
                        });
                    };
                }
            }
        }, w = g.$injector = l(g, function() {
            throw ii("unpr", h.join(" <- "));
        }), E = {}, x = E.$injector = l(E, function(e) {
            var t = w.get(e + "Provider");
            return x.invoke(t.$get, t, n, e);
        });
        return s(f(e), function(e) {
            x.invoke(e || p);
        }), x;
    }
    function Dt() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(t, n, r) {
            function i(e) {
                var t = null;
                return Array.prototype.some.call(e, function(e) {
                    if ("a" === A(e)) return t = e, !0;
                }), t;
            }
            function s(e) {
                if (e) {
                    e.scrollIntoView();
                    var n;
                    n = o.yOffset, S(n) ? n = n() : k(n) ? (n = n[0], n = "fixed" !== t.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : w(n) || (n = 0), n && (e = e.getBoundingClientRect().top, t.scrollBy(0, e - n));
                } else t.scrollTo(0, 0);
            }
            function o() {
                var e = n.hash(), t;
                e ? (t = u.getElementById(e)) ? s(t) : (t = i(u.getElementsByName(e))) ? s(t) : "top" === e && s(null) : s(null);
            }
            var u = t.document;
            return e && r.$watch(function() {
                return n.hash();
            }, function(e, t) {
                e === t && "" === e || Tt(function() {
                    r.$evalAsync(o);
                });
            }), o;
        } ];
    }
    function Pt() {
        this.$get = [ "$$rAF", "$timeout", function(e, t) {
            return e.supported ? function(t) {
                return e(t);
            } : function(e) {
                return t(e, 0, !1);
            };
        } ];
    }
    function Ht(e, t, r, i) {
        function o(e) {
            try {
                e.apply(null, wr.call(arguments, 1));
            } finally {
                if (S--, 0 === S) for (; x.length; ) try {
                    x.pop()();
                } catch (t) {
                    r.error(t);
                }
            }
        }
        function u(e, t) {
            (function n() {
                s(T, function(e) {
                    e();
                }), N = t(n, e);
            })();
        }
        function a() {
            f(), l();
        }
        function f() {
            C = e.history.state, C = m(C) ? null : C, D(C, P) && (C = P), P = C;
        }
        function l() {
            if (L !== h.url() || k !== C) L = h.url(), k = C, s(M, function(e) {
                e(h.url(), C);
            });
        }
        function c(e) {
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return e;
            }
        }
        var h = this, d = t[0], v = e.location, g = e.history, y = e.setTimeout, w = e.clearTimeout, E = {};
        h.isMock = !1;
        var S = 0, x = [];
        h.$$completeOutstandingRequest = o, h.$$incOutstandingRequestCount = function() {
            S++;
        }, h.notifyWhenNoOutstandingRequests = function(e) {
            s(T, function(e) {
                e();
            }), 0 === S ? e() : x.push(e);
        };
        var T = [], N;
        h.addPollFn = function(e) {
            return m(N) && u(100, y), T.push(e), e;
        };
        var C, k, L = v.href, A = t.find("base"), O = null;
        f(), k = C, h.url = function(t, n, r) {
            m(r) && (r = null), v !== e.location && (v = e.location), g !== e.history && (g = e.history);
            if (!t) return O || v.href.replace(/%27/g, "'");
            var s = k === r;
            if (L !== t || i.history && !s) {
                var o = L && an(L) === an(t);
                return L = t, k = r, !i.history || o && s ? (o || (O = t), n ? v.replace(t) : v.href = t) : (g[n ? "replaceState" : "pushState"](r, "", t), f(), k = C), h;
            }
        }, h.state = function() {
            return C;
        };
        var M = [], _ = !1, P = null;
        h.onUrlChange = function(t) {
            return _ || (i.history && yr(e).on("popstate", a), yr(e).on("hashchange", a), _ = !0), M.push(t), t;
        }, h.$$checkUrlChange = l, h.baseHref = function() {
            var e = A.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var H = {}, B = "", j = h.baseHref();
        h.cookies = function(e, t) {
            var i, s, o, u;
            if (!e) {
                if (d.cookie !== B) for (B = d.cookie, i = B.split("; "), H = {}, o = 0; o < i.length; o++) s = i[o], u = s.indexOf("="), 0 < u && (e = c(s.substring(0, u)), H[e] === n && (H[e] = c(s.substring(u + 1))));
                return H;
            }
            t === n ? d.cookie = encodeURIComponent(e) + "=;path=" + j + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(t) && (i = (d.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=" + j).length + 1, 4096 < i && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"));
        }, h.defer = function(e, t) {
            var n;
            return S++, n = y(function() {
                delete E[n], o(e);
            }, t || 0), E[n] = !0, n;
        }, h.defer.cancel = function(e) {
            return E[e] ? (delete E[e], w(e), o(p), !0) : !1;
        };
    }
    function Bt() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new Ht(e, r, t, n);
        } ];
    }
    function jt() {
        this.$get = function() {
            function e(e, n) {
                function i(e) {
                    e != h && (p ? p == e && (p = e.n) : p = e, s(e.n, e.p), s(e, h), h = e, h.n = null);
                }
                function s(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e));
                }
                if (e in t) throw r("$cacheFactory")("iid", e);
                var o = 0, u = l({}, n, {
                    id: e
                }), a = {}, f = n && n.capacity || Number.MAX_VALUE, c = {}, h = null, p = null;
                return t[e] = {
                    put: function(e, t) {
                        if (f < Number.MAX_VALUE) {
                            var n = c[e] || (c[e] = {
                                key: e
                            });
                            i(n);
                        }
                        if (!m(t)) return e in a || o++, a[e] = t, o > f && this.remove(p.key), t;
                    },
                    get: function(e) {
                        if (f < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            i(t);
                        }
                        return a[e];
                    },
                    remove: function(e) {
                        if (f < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            t == h && (h = t.p), t == p && (p = t.n), s(t.n, t.p), delete c[e];
                        }
                        delete a[e], o--;
                    },
                    removeAll: function() {
                        a = {}, o = 0, c = {}, h = p = null;
                    },
                    destroy: function() {
                        c = u = a = null, delete t[e];
                    },
                    info: function() {
                        return l({}, u, {
                            size: o
                        });
                    }
                };
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return s(t, function(t, n) {
                    e[n] = t.info();
                }), e;
            }, e.get = function(e) {
                return t[e];
            }, e;
        };
    }
    function Ft() {
        this.$get = [ "$cacheFactory", function(e) {
            return e("templates");
        } ];
    }
    function It(e, r) {
        function i(e, t) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, r = {};
            return s(e, function(e, i) {
                var s = e.match(n);
                if (!s) throw ui("iscp", t, i, e);
                r[i] = {
                    mode: s[1][0],
                    collection: "*" === s[2],
                    optional: "?" === s[3],
                    attrName: s[4] || i
                };
            }), r;
        }
        var o = {}, a = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, c = L("ngSrc,ngSrcset,src,srcset"), m = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, w = /^(on[a-z]+|formaction)$/;
        this.directive = function x(t, n) {
            return et(t, "directive"), b(t) ? (Y(n, "directiveFactory"), o.hasOwnProperty(t) || (o[t] = [], e.factory(t + "Directive", [ "$injector", "$exceptionHandler", function(e, n) {
                var r = [];
                return s(o[t], function(s, o) {
                    try {
                        var u = e.invoke(s);
                        S(u) ? u = {
                            compile: v(u)
                        } : !u.compile && u.link && (u.compile = v(u.link)), u.priority = u.priority || 0, u.index = o, u.name = u.name || t, u.require = u.require || u.controller && u.name, u.restrict = u.restrict || "EA", y(u.scope) && (u.$$isolateBindings = i(u.scope, u.name)), r.push(u);
                    } catch (a) {
                        n(a);
                    }
                }), r;
            } ])), o[t].push(n)) : s(t, u(x)), this;
        }, this.aHrefSanitizationWhitelist = function(e) {
            return g(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return g(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist();
        };
        var E = !0;
        this.debugInfoEnabled = function(e) {
            return g(e) ? (E = e, this) : E;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, i, u, v, g, x, T, C, k, L) {
            function M(e, t) {
                try {
                    e.addClass(t);
                } catch (n) {}
            }
            function _(e, t, n, r, i) {
                e instanceof yr || (e = yr(e)), s(e, function(t, n) {
                    t.nodeType == jr && t.nodeValue.match(/\S+/) && (e[n] = yr(t).wrap("<span></span>").parent()[0]);
                });
                var o = P(e, t, e, n, r, i);
                _.$$addScopeClass(e);
                var u = null;
                return function(t, n, r, i, s) {
                    Y(t, "scope"), u || (u = (s = s && s[0]) ? "foreignobject" !== A(s) && s.toString().match(/SVG/) ? "svg" : "html" : "html"), s = "html" !== u ? yr(J(u, yr("<div>").append(e).html())) : n ? Qr.clone.call(e) : e;
                    if (r) for (var a in r) s.data("$" + a + "Controller", r[a].instance);
                    return _.$$addScopeInfo(s, t), n && n(s, t), o && o(t, s, s, i), s;
                };
            }
            function P(e, t, r, i, s, o) {
                function u(e, r, i, s) {
                    var o, u, f, l, c, h, d;
                    if (p) for (d = Array(r.length), l = 0; l < a.length; l += 3) o = a[l], d[o] = r[o]; else d = r;
                    l = 0;
                    for (c = a.length; l < c; ) u = d[a[l++]], r = a[l++], o = a[l++], r ? (r.scope ? (f = e.$new(), _.$$addScopeInfo(yr(u), f)) : f = e, h = r.transcludeOnThisElement ? H(e, r.transclude, s, r.elementTranscludeOnThisElement) : !r.templateOnThisElement && s ? s : !s && t ? H(e, t) : null, r(o, f, u, i, h)) : o && o(e, u.childNodes, n, s);
                }
                for (var a = [], f, l, c, h, p, d = 0; d < e.length; d++) {
                    f = new nt, l = B(e[d], [], f, 0 === d ? i : n, s), (o = l.length ? q(l, e[d], f, t, r, null, [], [], o) : null) && o.scope && _.$$addScopeClass(f.$$element), f = o && o.terminal || !(c = e[d].childNodes) || !c.length ? null : P(c, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : t);
                    if (o || f) a.push(d, o, f), h = !0, p = p || o;
                    o = null;
                }
                return h ? u : null;
            }
            function H(e, t, n, r) {
                return function(r, i, s, o, u) {
                    return r || (r = e.$new(!1, u), r.$$transcluded = !0), t(r, i, s, n, o);
                };
            }
            function B(t, n, r, i, s) {
                var u = r.$attr, l;
                switch (t.nodeType) {
                  case Br:
                    U(n, qt(A(t)), "E", i, s);
                    for (var c, h, p, d = t.attributes, v = 0, m = d && d.length; v < m; v++) {
                        var g = !1, y = !1;
                        c = d[v], l = c.name, c = Ar(c.value), h = qt(l);
                        if (p = ut.test(h)) l = Q(h.substr(6), "-");
                        var w = h.replace(/(Start|End)$/, ""), E;
                        e : {
                            var S = w;
                            if (o.hasOwnProperty(S)) {
                                E = void 0;
                                for (var S = e.get(S + "Directive"), x = 0, T = S.length; x < T; x++) if (E = S[x], E.multiElement) {
                                    E = !0;
                                    break e;
                                }
                            }
                            E = !1;
                        }
                        E && h === w + "Start" && (g = l, y = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), h = qt(l.toLowerCase()), u[h] = l;
                        if (p || !r.hasOwnProperty(h)) r[h] = c, Nt(t, h) && (r[h] = !0);
                        G(t, n, c, h, p), U(n, h, "A", i, s, g, y);
                    }
                    t = t.className;
                    if (b(t) && "" !== t) for (; l = f.exec(t); ) h = qt(l[2]), U(n, h, "C", i, s) && (r[h] = Ar(l[3])), t = t.substr(l.index + l[0].length);
                    break;
                  case jr:
                    $(n, t.nodeValue);
                    break;
                  case 8:
                    try {
                        if (l = a.exec(t.nodeValue)) h = qt(l[1]), U(n, h, "M", i, s) && (r[h] = Ar(l[2]));
                    } catch (N) {}
                }
                return n.sort(X), n;
            }
            function j(e, t, n) {
                var r = [], i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw ui("uterdir", t, n);
                        e.nodeType == Br && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling;
                    } while (0 < i);
                } else r.push(e);
                return yr(r);
            }
            function F(e, t, n) {
                return function(r, i, s, o, u) {
                    return i = j(i[0], t, n), e(r, i, s, o, u);
                };
            }
            function q(e, o, u, a, f, l, c, h, p) {
                function d(e, t, n, r) {
                    if (e) {
                        n && (e = F(e, n, r)), e.require = U.require, e.directiveName = X;
                        if (L === U || U.$$isolateScope) e = et(e, {
                            isolateScope: !0
                        });
                        c.push(e);
                    }
                    if (t) {
                        n && (t = F(t, n, r)), t.require = U.require, t.directiveName = X;
                        if (L === U || U.$$isolateScope) t = et(t, {
                            isolateScope: !0
                        });
                        h.push(t);
                    }
                }
                function w(e, t, n, r) {
                    var i, o = "data", u = !1, a = n, f;
                    if (b(t)) {
                        f = t.match(m), t = t.substring(f[0].length), f[3] && (f[1] ? f[3] = null : f[1] = f[3]), "^" === f[1] ? o = "inheritedData" : "^^" === f[1] && (o = "inheritedData", a = n.parent()), "?" === f[2] && (u = !0), i = null, r && "data" === o && (i = r[t]) && (i = i.instance), i = i || a[o]("$" + t + "Controller");
                        if (!i && !u) throw ui("ctreq", t, e);
                        return i || null;
                    }
                    return Lr(t) && (i = [], s(t, function(t) {
                        i.push(w(e, t, n, r));
                    })), i;
                }
                function E(e, t, i, a, f) {
                    function l(e, t, r) {
                        var i;
                        return N(e) || (r = t, t = e, e = n), H && (i = b), r || (r = H ? S.parent() : S), f(e, t, i, r, O);
                    }
                    var p, d, m, y, b, E, S, x;
                    o === i ? (x = u, S = u.$$element) : (S = yr(i), x = new nt(S, u)), L && (y = t.$new(!0)), E = f && l, C && (k = {}, b = {}, s(C, function(e) {
                        var n = {
                            $scope: e === L || e.$$isolateScope ? y : t,
                            $element: S,
                            $attrs: x,
                            $transclude: E
                        };
                        m = e.controller, "@" == m && (m = x[e.name]), n = g(m, n, !0, e.controllerAs), b[e.name] = n, H || S.data("$" + e.name + "Controller", n.instance), k[e.name] = n;
                    }));
                    if (L) {
                        _.$$addScopeInfo(S, y, !0, !A || A !== L && A !== L.$$originalDirective), _.$$addScopeClass(S, !0), a = k && k[L.name];
                        var T = y;
                        a && a.identifier && !0 === L.bindToController && (T = a.instance), s(y.$$isolateBindings = L.$$isolateBindings, function(e, n) {
                            var i = e.attrName, s = e.optional, o, u, a, f;
                            switch (e.mode) {
                              case "@":
                                x.$observe(i, function(e) {
                                    T[n] = e;
                                }), x.$$observers[i].$$scope = t, x[i] && (T[n] = r(x[i])(t));
                                break;
                              case "=":
                                if (s && !x[i]) break;
                                u = v(x[i]), f = u.literal ? D : function(e, t) {
                                    return e === t || e !== e && t !== t;
                                }, a = u.assign || function() {
                                    throw o = T[n] = u(t), ui("nonassign", x[i], L.name);
                                }, o = T[n] = u(t), s = function(e) {
                                    return f(e, T[n]) || (f(e, o) ? a(t, e = T[n]) : T[n] = e), o = e;
                                }, s.$stateful = !0, s = e.collection ? t.$watchCollection(x[i], s) : t.$watch(v(x[i], s), null, u.literal), y.$on("$destroy", s);
                                break;
                              case "&":
                                u = v(x[i]), T[n] = function(e) {
                                    return u(t, e);
                                };
                            }
                        });
                    }
                    k && (s(k, function(e) {
                        e();
                    }), k = null), a = 0;
                    for (p = c.length; a < p; a++) d = c[a], tt(d, d.isolateScope ? y : t, S, x, d.require && w(d.directiveName, d.require, S, b), E);
                    var O = t;
                    L && (L.template || null === L.templateUrl) && (O = y), e && e(O, i.childNodes, n, f);
                    for (a = h.length - 1; 0 <= a; a--) d = h[a], tt(d, d.isolateScope ? y : t, S, x, d.require && w(d.directiveName, d.require, S, b), E);
                }
                p = p || {};
                for (var x = -Number.MAX_VALUE, T, C = p.controllerDirectives, k, L = p.newIsolateScopeDirective, A = p.templateDirective, O = p.nonTlbTranscludeDirective, M = !1, P = !1, H = p.hasElementTranscludeDirective, q = u.$$element = yr(o), U, X, $, K = a, Q, G = 0, Y = e.length; G < Y; G++) {
                    U = e[G];
                    var rt = U.$$start, it = U.$$end;
                    rt && (q = j(o, rt, it)), $ = n;
                    if (x > U.priority) break;
                    if ($ = U.scope) U.templateUrl || (y($) ? (V("new/isolated scope", L || T, U, q), L = U) : V("new/isolated scope", L, U, q)), T = T || U;
                    X = U.name, !U.templateUrl && U.controller && ($ = U.controller, C = C || {}, V("'" + X + "' controller", C[X], U, q), C[X] = U);
                    if ($ = U.transclude) M = !0, U.$$tlb || (V("transclusion", O, U, q), O = U), "element" == $ ? (H = !0, x = U.priority, $ = q, q = u.$$element = yr(t.createComment(" " + X + ": " + u[X] + " ")), o = q[0], Z(f, wr.call($, 0), o), K = _($, a, x, l && l.name, {
                        nonTlbTranscludeDirective: O
                    })) : ($ = yr(lt(o)).contents(), q.empty(), K = _($, a));
                    if (U.template) if (P = !0, V("template", A, U, q), A = U, $ = S(U.template) ? U.template(q, u) : U.template, $ = ot($), U.replace) {
                        l = U, $ = Vr.test($) ? Ut(J(U.templateNamespace, Ar($))) : [], o = $[0];
                        if (1 != $.length || o.nodeType !== Br) throw ui("tplrt", X, "");
                        Z(f, q, o), Y = {
                            $attr: {}
                        }, $ = B(o, [], Y);
                        var st = e.splice(G + 1, e.length - (G + 1));
                        L && R($), e = e.concat($).concat(st), z(u, Y), Y = e.length;
                    } else q.html($);
                    if (U.templateUrl) P = !0, V("template", A, U, q), A = U, U.replace && (l = U), E = W(e.splice(G, e.length - G), q, u, f, M && K, c, h, {
                        controllerDirectives: C,
                        newIsolateScopeDirective: L,
                        templateDirective: A,
                        nonTlbTranscludeDirective: O
                    }), Y = e.length; else if (U.compile) try {
                        Q = U.compile(q, u, K), S(Q) ? d(null, Q, rt, it) : Q && d(Q.pre, Q.post, rt, it);
                    } catch (ut) {
                        i(ut, I(q));
                    }
                    U.terminal && (E.terminal = !0, x = Math.max(x, U.priority));
                }
                return E.scope = T && !0 === T.scope, E.transcludeOnThisElement = M, E.elementTranscludeOnThisElement = H, E.templateOnThisElement = P, E.transclude = K, p.hasElementTranscludeDirective = H, E;
            }
            function R(e) {
                for (var t = 0, n = e.length; t < n; t++) e[t] = h(e[t], {
                    $$isolateScope: !0
                });
            }
            function U(t, r, s, u, a, f, l) {
                if (r === a) return null;
                a = null;
                if (o.hasOwnProperty(r)) {
                    var c;
                    r = e.get(r + "Directive");
                    for (var p = 0, d = r.length; p < d; p++) try {
                        c = r[p], (u === n || u > c.priority) && -1 != c.restrict.indexOf(s) && (f && (c = h(c, {
                            $$start: f,
                            $$end: l
                        })), t.push(c), a = c);
                    } catch (v) {
                        i(v);
                    }
                }
                return a;
            }
            function z(e, t) {
                var n = t.$attr, r = e.$attr, i = e.$$element;
                s(e, function(r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]));
                }), s(t, function(t, s) {
                    "class" == s ? (M(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == s ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == s.charAt(0) || e.hasOwnProperty(s) || (e[s] = t, r[s] = n[s]);
                });
            }
            function W(e, t, n, r, i, o, a, f) {
                var c = [], h, p, d = t[0], v = e.shift(), m = l({}, v, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: v
                }), g = S(v.templateUrl) ? v.templateUrl(t, n) : v.templateUrl, b = v.templateNamespace;
                return t.empty(), u(C.getTrustedResourceUrl(g)).then(function(u) {
                    var l, w;
                    u = ot(u);
                    if (v.replace) {
                        u = Vr.test(u) ? Ut(J(b, Ar(u))) : [], l = u[0];
                        if (1 != u.length || l.nodeType !== Br) throw ui("tplrt", v.name, g);
                        u = {
                            $attr: {}
                        }, Z(r, t, l);
                        var E = B(l, [], u);
                        y(v.scope) && R(E), e = E.concat(e), z(n, u);
                    } else l = d, t.html(u);
                    e.unshift(m), h = q(e, l, n, i, t, v, o, a, f), s(r, function(e, n) {
                        e == l && (r[n] = t[0]);
                    });
                    for (p = P(t[0].childNodes, i); c.length; ) {
                        u = c.shift(), w = c.shift();
                        var S = c.shift(), x = c.shift(), E = t[0];
                        if (!u.$$destroyed) {
                            if (w !== d) {
                                var T = w.className;
                                f.hasElementTranscludeDirective && v.replace || (E = lt(l)), Z(S, yr(w), E), M(yr(E), T);
                            }
                            w = h.transcludeOnThisElement ? H(u, h.transclude, x) : x, h(p, u, E, r, w);
                        }
                    }
                    c = null;
                }), function(e, t, n, r, i) {
                    e = i, t.$$destroyed || (c ? (c.push(t), c.push(n), c.push(r), c.push(e)) : (h.transcludeOnThisElement && (e = H(t, h.transclude, i)), h(p, t, n, r, e)));
                };
            }
            function X(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index;
            }
            function V(e, t, n, r) {
                if (t) throw ui("multidir", t.name, n.name, e, I(r));
            }
            function $(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        e = e.parent();
                        var t = !!e.length;
                        return t && _.$$addBindingClass(e), function(e, r) {
                            var i = r.parent();
                            t || _.$$addBindingClass(i), _.$$addBindingInfo(i, n.expressions), e.$watch(n, function(e) {
                                r[0].nodeValue = e;
                            });
                        };
                    }
                });
            }
            function J(e, n) {
                e = dr(e || "html");
                switch (e) {
                  case "svg":
                  case "math":
                    var r = t.createElement("div");
                    return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                  default:
                    return n;
                }
            }
            function K(e, t) {
                if ("srcdoc" == t) return C.HTML;
                var n = A(e);
                if ("xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t)) return C.RESOURCE_URL;
            }
            function G(e, t, n, i, s) {
                var o = r(n, !0);
                if (o) {
                    if ("multiple" === i && "select" === A(e)) throw ui("selmulti", I(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(t, n, u) {
                                    n = u.$$observers || (u.$$observers = {});
                                    if (w.test(i)) throw ui("nodomevents");
                                    u[i] && (o = r(u[i], !0, K(e, i), c[i] || s)) && (u[i] = o(t), (n[i] || (n[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(o, function(e, t) {
                                        "class" === i && e != t ? u.$updateClass(e, t) : u.$set(i, e);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function Z(e, n, r) {
                var i = n[0], s = n.length, o = i.parentNode, u, a;
                if (e) for (u = 0, a = e.length; u < a; u++) if (e[u] == i) {
                    e[u++] = r, a = u + s - 1;
                    for (var f = e.length; u < f; u++, a++) a < f ? e[u] = e[a] : delete e[u];
                    e.length -= s - 1, e.context === i && (e.context = r);
                    break;
                }
                o && o.replaceChild(r, i), e = t.createDocumentFragment(), e.appendChild(i), yr(r).data(yr(i).data()), br ? (Hr = !0, br.cleanData([ i ])) : delete yr.cache[i[yr.expando]], i = 1;
                for (s = n.length; i < s; i++) o = n[i], yr(o).remove(), e.appendChild(o), delete n[i];
                n[0] = r, n.length = 1;
            }
            function et(e, t) {
                return l(function() {
                    return e.apply(null, arguments);
                }, e, t);
            }
            function tt(e, t, n, r, s, o) {
                try {
                    e(t, n, r, s, o);
                } catch (u) {
                    i(u, I(n));
                }
            }
            var nt = function(e, t) {
                if (t) {
                    var n = Object.keys(t), r, i, s;
                    r = 0;
                    for (i = n.length; r < i; r++) s = n[r], this[s] = t[s];
                } else this.$attr = {};
                this.$$element = e;
            };
            nt.prototype = {
                $normalize: qt,
                $addClass: function(e) {
                    e && 0 < e.length && k.addClass(this.$$element, e);
                },
                $removeClass: function(e) {
                    e && 0 < e.length && k.removeClass(this.$$element, e);
                },
                $updateClass: function(e, t) {
                    var n = Rt(e, t);
                    n && n.length && k.addClass(this.$$element, n), (n = Rt(t, e)) && n.length && k.removeClass(this.$$element, n);
                },
                $set: function(e, t, r, o) {
                    var u = this.$$element[0], a = Nt(u, e), f = Ct(u, e), u = e;
                    a ? (this.$$element.prop(e, t), o = a) : f && (this[f] = t, u = f), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e]) || (this.$attr[e] = o = Q(e, "-")), a = A(this.$$element);
                    if ("a" === a && "href" === e || "img" === a && "src" === e) this[e] = t = L(t, "src" === e); else if ("img" === a && "srcset" === e) {
                        for (var a = "", f = Ar(t), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(f) ? l : /(,)/, f = f.split(l), l = Math.floor(f.length / 2), c = 0; c < l; c++) var h = 2 * c, a = a + L(Ar(f[h]), !0), a = a + (" " + Ar(f[h + 1]));
                        f = Ar(f[2 * c]).split(/\s/), a += L(Ar(f[0]), !0), 2 === f.length && (a += " " + Ar(f[1])), this[e] = t = a;
                    }
                    !1 !== r && (null === t || t === n ? this.$$element.removeAttr(o) : this.$$element.attr(o, t)), (e = this.$$observers) && s(e[u], function(e) {
                        try {
                            e(t);
                        } catch (n) {
                            i(n);
                        }
                    });
                },
                $observe: function(e, t) {
                    var n = this, r = n.$$observers || (n.$$observers = rt()), i = r[e] || (r[e] = []);
                    return i.push(t), x.$evalAsync(function() {
                        !i.$$inter && n.hasOwnProperty(e) && t(n[e]);
                    }), function() {
                        O(i, t);
                    };
                }
            };
            var it = r.startSymbol(), st = r.endSymbol(), ot = "{{" == it || "}}" == st ? d : function(e) {
                return e.replace(/\{\{/g, it).replace(/}}/g, st);
            }, ut = /^ngAttr[A-Z]/;
            return _.$$addBindingInfo = E ? function(e, t) {
                var n = e.data("$binding") || [];
                Lr(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n);
            } : p, _.$$addBindingClass = E ? function(e) {
                M(e, "ng-binding");
            } : p, _.$$addScopeInfo = E ? function(e, t, n, r) {
                e.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", t);
            } : p, _.$$addScopeClass = E ? function(e, t) {
                M(e, t ? "ng-isolate-scope" : "ng-scope");
            } : p, _;
        } ];
    }
    function qt(e) {
        return ot(e.replace(ai, ""));
    }
    function Rt(e, t) {
        var n = "", r = e.split(/\s+/), i = t.split(/\s+/), s = 0;
        e : for (; s < r.length; s++) {
            for (var o = r[s], u = 0; u < i.length; u++) if (o == i[u]) continue e;
            n += (0 < n.length ? " " : "") + o;
        }
        return n;
    }
    function Ut(e) {
        e = yr(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--; ) 8 === e[t].nodeType && Er.call(e, t, 1);
        return e;
    }
    function zt() {
        var e = {}, t = !1, i = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(t, n) {
            et(t, "controller"), y(t) ? l(e, t) : e[t] = n;
        }, this.allowGlobals = function() {
            t = !0;
        }, this.$get = [ "$injector", "$window", function(s, o) {
            function u(e, t, n, i) {
                if (!e || !y(e.$scope)) throw r("$controller")("noscp", i, t);
                e.$scope[t] = n;
            }
            return function(r, a, f, c) {
                var h, p, d;
                return f = !0 === f, c && b(c) && (d = c), b(r) && (c = r.match(i), p = c[1], d = d || c[3], r = e.hasOwnProperty(p) ? e[p] : tt(a.$scope, p, !0) || (t ? tt(o, p, !0) : n), Z(r, p, !0)), f ? (f = function() {}, f.prototype = (Lr(r) ? r[r.length - 1] : r).prototype, h = new f, d && u(a, d, h, p || r.name), l(function() {
                    return s.invoke(r, h, a, p), h;
                }, {
                    instance: h,
                    identifier: d
                })) : (h = s.instantiate(r, a, p), d && u(a, d, h, p || r.name), h);
            };
        } ];
    }
    function Wt() {
        this.$get = [ "$window", function(e) {
            return yr(e.document);
        } ];
    }
    function Xt() {
        this.$get = [ "$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments);
            };
        } ];
    }
    function Vt(e, t) {
        if (b(e)) {
            e = e.replace(pi, "");
            var n = t("Content-Type");
            if (n && 0 === n.indexOf(fi) || ci.test(e) && hi.test(e)) e = F(e);
        }
        return e;
    }
    function $t(e) {
        var t = {}, n, r, i;
        return e ? (s(e.split("\n"), function(e) {
            i = e.indexOf(":"), n = dr(Ar(e.substr(0, i))), r = Ar(e.substr(i + 1)), n && (t[n] = t[n] ? t[n] + ", " + r : r);
        }), t) : t;
    }
    function Jt(e) {
        var t = y(e) ? e : n;
        return function(n) {
            return t || (t = $t(e)), n ? t[dr(n)] || null : t;
        };
    }
    function Kt(e, t, n) {
        return S(n) ? n(e, t) : (s(n, function(n) {
            e = n(e, t);
        }), e);
    }
    function Qt() {
        var e = this.defaults = {
            transformResponse: [ Vt ],
            transformRequest: [ function(e) {
                return y(e) && "[object File]" !== xr.call(e) && "[object Blob]" !== xr.call(e) ? j(e) : e;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: _(li),
                put: _(li),
                patch: _(li)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, t = !1;
        this.useApplyAsync = function(e) {
            return g(e) ? (t = !!e, this) : t;
        };
        var r = this.interceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(i, u, a, f, c, h) {
            function p(t) {
                function r(e) {
                    var t = l({}, e);
                    return t.data = e.data ? Kt(e.data, e.headers, i.transformResponse) : e.data, e = e.status, 200 <= e && 300 > e ? t : c.reject(t);
                }
                var i = {
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, o = function(t) {
                    var n = e.headers, r = l({}, t.headers), i, o, n = l({}, n.common, n[dr(t.method)]);
                    e : for (i in n) {
                        t = dr(i);
                        for (o in r) if (dr(o) === t) continue e;
                        r[i] = n[i];
                    }
                    return function(e) {
                        var t;
                        s(e, function(n, r) {
                            S(n) && (t = n(), null != t ? e[r] = t : delete e[r]);
                        });
                    }(r), r;
                }(t);
                l(i, t), i.headers = o, i.method = mr(i.method);
                var u = [ function(t) {
                    o = t.headers;
                    var n = Kt(t.data, Jt(o), t.transformRequest);
                    return m(n) && s(o, function(e, t) {
                        "content-type" === dr(t) && delete o[t];
                    }), m(t.withCredentials) && !m(e.withCredentials) && (t.withCredentials = e.withCredentials), d(t, n, o).then(r, r);
                }, n ], a = c.when(i);
                for (s(x, function(e) {
                    (e.request || e.requestError) && u.unshift(e.request, e.requestError), (e.response || e.responseError) && u.push(e.response, e.responseError);
                }); u.length; ) {
                    t = u.shift();
                    var f = u.shift(), a = a.then(t, f);
                }
                return a.success = function(e) {
                    return a.then(function(t) {
                        e(t.data, t.status, t.headers, i);
                    }), a;
                }, a.error = function(e) {
                    return a.then(null, function(t) {
                        e(t.data, t.status, t.headers, i);
                    }), a;
                }, a;
            }
            function d(r, s, o) {
                function a(e, n, r, i) {
                    function s() {
                        l(n, e, r, i);
                    }
                    E && (200 <= e && 300 > e ? E.put(T, [ e, n, $t(r), i ]) : E.remove(T)), t ? f.$applyAsync(s) : (s(), f.$$phase || f.$apply());
                }
                function l(e, t, n, i) {
                    t = Math.max(t, 0), (200 <= t && 300 > t ? d.resolve : d.reject)({
                        data: e,
                        status: t,
                        headers: Jt(n),
                        config: r,
                        statusText: i
                    });
                }
                function h() {
                    var e = p.pendingRequests.indexOf(r);
                    -1 !== e && p.pendingRequests.splice(e, 1);
                }
                var d = c.defer(), b = d.promise, E, x, T = v(r.url, r.params);
                p.pendingRequests.push(r), b.then(h, h), !r.cache && !e.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (E = y(r.cache) ? r.cache : y(e.cache) ? e.cache : w);
                if (E) if (x = E.get(T), g(x)) {
                    if (x && S(x.then)) return x.then(h, h), x;
                    Lr(x) ? l(x[1], x[0], _(x[2]), x[3]) : l(x, 200, {}, "OK");
                } else E.put(T, b);
                return m(x) && ((x = qn(r.url) ? u.cookies()[r.xsrfCookieName || e.xsrfCookieName] : n) && (o[r.xsrfHeaderName || e.xsrfHeaderName] = x), i(r.method, T, s, a, o, r.timeout, r.withCredentials, r.responseType)), b;
            }
            function v(e, t) {
                if (!t) return e;
                var n = [];
                return o(t, function(e, t) {
                    null === e || m(e) || (Lr(e) || (e = [ e ]), s(e, function(e) {
                        y(e) && (e = E(e) ? e.toISOString() : j(e)), n.push(W(t) + "=" + W(e));
                    }));
                }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e;
            }
            var w = a("$http"), x = [];
            return s(r, function(e) {
                x.unshift(b(e) ? h.get(e) : h.invoke(e));
            }), p.pendingRequests = [], function(e) {
                s(arguments, function(e) {
                    p[e] = function(t, n) {
                        return p(l(n || {}, {
                            method: e,
                            url: t
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function(e) {
                s(arguments, function(e) {
                    p[e] = function(t, n, r) {
                        return p(l(r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }));
                    };
                });
            }("post", "put", "patch"), p.defaults = e, p;
        } ];
    }
    function Gt() {
        return new e.XMLHttpRequest;
    }
    function Yt() {
        this.$get = [ "$browser", "$window", "$document", function(e, t, n) {
            return Zt(e, Gt, e.defer, t.angular.callbacks, n[0]);
        } ];
    }
    function Zt(e, t, n, r, i) {
        function o(e, t, n) {
            var s = i.createElement("script"), o = null;
            return s.type = "text/javascript", s.src = e, s.async = !0, o = function(e) {
                s.removeEventListener("load", o, !1), s.removeEventListener("error", o, !1), i.body.removeChild(s), s = null;
                var u = -1, a = "unknown";
                e && ("load" !== e.type || r[t].called || (e = {
                    type: "error"
                }), a = e.type, u = "error" === e.type ? 404 : 200), n && n(u, a);
            }, s.addEventListener("load", o, !1), s.addEventListener("error", o, !1), i.body.appendChild(s), o;
        }
        return function(i, u, a, f, l, c, h, d) {
            function v() {
                b && b(), w && w.abort();
            }
            function m(t, r, i, s, o) {
                x && n.cancel(x), b = w = null, t(r, i, s, o), e.$$completeOutstandingRequest(p);
            }
            e.$$incOutstandingRequestCount(), u = u || e.url();
            if ("jsonp" == dr(i)) {
                var y = "_" + (r.counter++).toString(36);
                r[y] = function(e) {
                    r[y].data = e, r[y].called = !0;
                };
                var b = o(u.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(e, t) {
                    m(f, e, r[y].data, "", t), r[y] = p;
                });
            } else {
                var w = t();
                w.open(i, u, !0), s(l, function(e, t) {
                    g(e) && w.setRequestHeader(t, e);
                }), w.onload = function() {
                    var e = w.statusText || "", t = "response" in w ? w.response : w.responseText, n = 1223 === w.status ? 204 : w.status;
                    0 === n && (n = t ? 200 : "file" == In(u).protocol ? 404 : 0), m(f, n, t, w.getAllResponseHeaders(), e);
                }, i = function() {
                    m(f, -1, null, null, "");
                }, w.onerror = i, w.onabort = i, h && (w.withCredentials = !0);
                if (d) try {
                    w.responseType = d;
                } catch (E) {
                    if ("json" !== d) throw E;
                }
                w.send(a || null);
            }
            if (0 < c) var x = n(v, c); else c && S(c.then) && c.then(v);
        };
    }
    function en() {
        var e = "{{", t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e;
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function s(e) {
                return "\\\\\\" + e;
            }
            function o(s, o, h, p) {
                function d(n) {
                    return n.replace(f, e).replace(c, t);
                }
                function v(e) {
                    try {
                        var t, n = h ? i.getTrusted(h, e) : i.valueOf(e);
                        if (null == n) t = ""; else {
                            switch (typeof n) {
                              case "string":
                                break;
                              case "number":
                                n = "" + n;
                                break;
                              default:
                                n = j(n);
                            }
                            t = n;
                        }
                        return t;
                    } catch (o) {
                        e = di("interr", s, o.toString()), r(e);
                    }
                }
                p = !!p;
                for (var g, y, b = 0, w = [], E = [], x = s.length, T = [], N = []; b < x; ) {
                    if (-1 == (g = s.indexOf(e, b)) || -1 == (y = s.indexOf(t, g + u))) {
                        b !== x && T.push(d(s.substring(b)));
                        break;
                    }
                    b !== g && T.push(d(s.substring(b, g))), b = s.substring(g + u, y), w.push(b), E.push(n(b, v)), b = y + a, N.push(T.length), T.push("");
                }
                if (h && 1 < T.length) throw di("noconcat", s);
                if (!o || w.length) {
                    var C = function(e) {
                        for (var t = 0, n = w.length; t < n; t++) {
                            if (p && m(e[t])) return;
                            T[N[t]] = e[t];
                        }
                        return T.join("");
                    };
                    return l(function(e) {
                        var t = 0, n = w.length, i = Array(n);
                        try {
                            for (; t < n; t++) i[t] = E[t](e);
                            return C(i);
                        } catch (o) {
                            e = di("interr", s, o.toString()), r(e);
                        }
                    }, {
                        exp: s,
                        expressions: w,
                        $$watchDelegate: function(e, t, n) {
                            var r;
                            return e.$watchGroup(E, function(n, i) {
                                var s = C(n);
                                S(t) && t.call(this, s, n !== i ? r : s, e), r = s;
                            }, n);
                        }
                    });
                }
            }
            var u = e.length, a = t.length, f = new RegExp(e.replace(/./g, s), "g"), c = new RegExp(t.replace(/./g, s), "g");
            return o.startSymbol = function() {
                return e;
            }, o.endSymbol = function() {
                return t;
            }, o;
        } ];
    }
    function tn() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(e, t, n, r) {
            function i(i, o, u, a) {
                var f = t.setInterval, l = t.clearInterval, c = 0, h = g(a) && !a, p = (h ? r : n).defer(), d = p.promise;
                return u = g(u) ? u : 0, d.then(null, null, i), d.$$intervalId = f(function() {
                    p.notify(c++), 0 < u && c >= u && (p.resolve(c), l(d.$$intervalId), delete s[d.$$intervalId]), h || e.$apply();
                }, o), s[d.$$intervalId] = p, d;
            }
            var s = {};
            return i.cancel = function(e) {
                return e && e.$$intervalId in s ? (s[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete s[e.$$intervalId], !0) : !1;
            }, i;
        } ];
    }
    function nn() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(e) {
                    return 1 === e ? "one" : "other";
                }
            };
        };
    }
    function rn(e) {
        e = e.split("/");
        for (var t = e.length; t--; ) e[t] = z(e[t]);
        return e.join("/");
    }
    function sn(e, t, n) {
        e = In(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = c(e.port) || mi[e.protocol] || null;
    }
    function on(e, t, n) {
        var r = "/" !== e.charAt(0);
        r && (e = "/" + e), e = In(e, n), t.$$path = decodeURIComponent(r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = R(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path);
    }
    function un(e, t) {
        if (0 === t.indexOf(e)) return t.substr(e.length);
    }
    function an(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t);
    }
    function fn(e) {
        return e.substr(0, an(e).lastIndexOf("/") + 1);
    }
    function ln(e, t) {
        this.$$html5 = !0, t = t || "";
        var r = fn(e);
        sn(e, this, e), this.$$parse = function(t) {
            var n = un(r, t);
            if (!b(n)) throw gi("ipthprfx", t, r);
            on(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var e = U(this.$$search), t = this.$$hash ? "#" + z(this.$$hash) : "";
            this.$$url = rn(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(i, s) {
            if (s && "#" === s[0]) return this.hash(s.slice(1)), !0;
            var o, u;
            return (o = un(e, i)) !== n ? (u = o, u = (o = un(t, o)) !== n ? r + (un("/", o) || o) : e + u) : (o = un(r, i)) !== n ? u = r + o : r == i + "/" && (u = r), u && this.$$parse(u), !!u;
        };
    }
    function cn(e, t) {
        var n = fn(e);
        sn(e, this, e), this.$$parse = function(r) {
            var i = un(e, r) || un(n, r), i = "#" == i.charAt(0) ? un(t, i) : this.$$html5 ? i : "";
            if (!b(i)) throw gi("ihshprfx", r, t);
            on(i, this, e), r = this.$$path;
            var s = /^\/[A-Z]:(\/.*)/;
            0 === i.indexOf(e) && (i = i.replace(e, "")), s.exec(i) || (r = (i = s.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose();
        }, this.$$compose = function() {
            var n = U(this.$$search), r = this.$$hash ? "#" + z(this.$$hash) : "";
            this.$$url = rn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "");
        }, this.$$parseLinkUrl = function(t, n) {
            return an(e) == an(t) ? (this.$$parse(t), !0) : !1;
        };
    }
    function hn(e, t) {
        this.$$html5 = !0, cn.apply(this, arguments);
        var n = fn(e);
        this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var s, o;
            return e == an(r) ? s = r : (o = un(n, r)) ? s = e + t + o : n === r + "/" && (s = n), s && this.$$parse(s), !!s;
        }, this.$$compose = function() {
            var n = U(this.$$search), r = this.$$hash ? "#" + z(this.$$hash) : "";
            this.$$url = rn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url;
        };
    }
    function pn(e) {
        return function() {
            return this[e];
        };
    }
    function dn(e, t) {
        return function(n) {
            return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this);
        };
    }
    function vn() {
        var t = "", n = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(e) {
            return g(e) ? (t = e, this) : t;
        }, this.html5Mode = function(e) {
            return C(e) ? (n.enabled = e, this) : y(e) ? (C(e.enabled) && (n.enabled = e.enabled), C(e.requireBase) && (n.requireBase = e.requireBase), C(e.rewriteLinks) && (n.rewriteLinks = e.rewriteLinks), this) : n;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(r, i, s, o) {
            function u(e, t, n) {
                var r = f.url(), s = f.$$state;
                try {
                    i.url(e, t, n), f.$$state = i.state();
                } catch (o) {
                    throw f.url(r), f.$$state = s, o;
                }
            }
            function a(e, t) {
                r.$broadcast("$locationChangeSuccess", f.absUrl(), e, f.$$state, t);
            }
            var f, l;
            l = i.baseHref();
            var c = i.url(), h;
            if (n.enabled) {
                if (!l && n.requireBase) throw gi("nobase");
                h = c.substring(0, c.indexOf("/", c.indexOf("//") + 2)) + (l || "/"), l = s.history ? ln : hn;
            } else h = an(c), l = cn;
            f = new l(h, "#" + t), f.$$parseLinkUrl(c, c), f.$$state = i.state();
            var p = /^\s*(javascript|mailto):/i;
            o.on("click", function(t) {
                if (n.rewriteLinks && !t.ctrlKey && !t.metaKey && 2 != t.which) {
                    for (var s = yr(t.target); "a" !== A(s[0]); ) if (s[0] === o[0] || !(s = s.parent())[0]) return;
                    var u = s.prop("href"), a = s.attr("href") || s.attr("xlink:href");
                    y(u) && "[object SVGAnimatedString]" === u.toString() && (u = In(u.animVal).href), p.test(u) || !u || s.attr("target") || t.isDefaultPrevented() || !f.$$parseLinkUrl(u, a) || (t.preventDefault(), f.absUrl() != i.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0));
                }
            }), f.absUrl() != c && i.url(f.absUrl(), !0);
            var d = !0;
            return i.onUrlChange(function(e, t) {
                r.$evalAsync(function() {
                    var n = f.absUrl(), i = f.$$state;
                    f.$$parse(e), f.$$state = t, r.$broadcast("$locationChangeStart", e, n, t, i).defaultPrevented ? (f.$$parse(n), f.$$state = i, u(n, !1, i)) : (d = !1, a(n, i));
                }), r.$$phase || r.$digest();
            }), r.$watch(function() {
                var e = i.url(), t = i.state(), n = f.$$replace, o = e !== f.absUrl() || f.$$html5 && s.history && t !== f.$$state;
                if (d || o) d = !1, r.$evalAsync(function() {
                    r.$broadcast("$locationChangeStart", f.absUrl(), e, f.$$state, t).defaultPrevented ? (f.$$parse(e), f.$$state = t) : (o && u(f.absUrl(), n, t === f.$$state ? null : f.$$state), a(e, t));
                });
                f.$$replace = !1;
            }), f;
        } ];
    }
    function mn() {
        var e = !0, t = this;
        this.debugEnabled = function(t) {
            return g(t) ? (e = t, this) : e;
        }, this.$get = [ "$window", function(n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e;
            }
            function i(e) {
                var t = n.console || {}, i = t[e] || t.log || p;
                e = !1;
                try {
                    e = !!i.apply;
                } catch (o) {}
                return e ? function() {
                    var e = [];
                    return s(arguments, function(t) {
                        e.push(r(t));
                    }), i.apply(t, e);
                } : function(e, t) {
                    i(e, null == t ? "" : t);
                };
            }
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        e && n.apply(t, arguments);
                    };
                }()
            };
        } ];
    }
    function gn(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw bi("isecfld", t);
        return e;
    }
    function yn(e, t) {
        if (e) {
            if (e.constructor === e) throw bi("isecfn", t);
            if (e.window === e) throw bi("isecwindow", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw bi("isecdom", t);
            if (e === Object) throw bi("isecobj", t);
        }
        return e;
    }
    function bn(e) {
        return e.constant;
    }
    function wn(e, t, n, r) {
        yn(e, r), t = t.split(".");
        for (var i, s = 0; 1 < t.length; s++) {
            i = gn(t.shift(), r);
            var o = yn(e[i], r);
            o || (o = {}, e[i] = o), e = o;
        }
        return i = gn(t.shift(), r), yn(e[i], r), e[i] = n;
    }
    function En(e, t, r, i, s, o) {
        return gn(e, o), gn(t, o), gn(r, o), gn(i, o), gn(s, o), function(o, u) {
            var a = u && u.hasOwnProperty(e) ? u : o;
            return null == a ? a : (a = a[e], t ? null == a ? n : (a = a[t], r ? null == a ? n : (a = a[r], i ? null == a ? n : (a = a[i], s ? null == a ? n : a = a[s] : a) : a) : a) : a);
        };
    }
    function Sn(e, t, r) {
        var i = Li[e];
        if (i) return i;
        var o = e.split("."), u = o.length;
        if (t.csp) i = 6 > u ? En(o[0], o[1], o[2], o[3], o[4], r) : function(e, t) {
            var i = 0, s;
            do s = En(o[i++], o[i++], o[i++], o[i++], o[i++], r)(e, t), t = n, e = s; while (i < u);
            return s;
        }; else {
            var a = "";
            s(o, function(e, t) {
                gn(e, r), a += "if(s == null) return undefined;\ns=" + (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + "." + e + ";\n";
            }), a += "return s;", t = new Function("s", "l", a), t.toString = v(a), i = t;
        }
        return i.sharedGetter = !0, i.assign = function(t, n) {
            return wn(t, e, n, e);
        }, Li[e] = i;
    }
    function xn(e) {
        return S(e.valueOf) ? e.valueOf() : Ai.call(e);
    }
    function Tn() {
        var e = rt(), t = {
            csp: !1
        };
        this.$get = [ "$filter", "$sniffer", function(n, r) {
            function i(e) {
                var t = e;
                return e.sharedGetter && (t = function(t, n) {
                    return e(t, n);
                }, t.literal = e.literal, t.constant = e.constant, t.assign = e.assign), t;
            }
            function o(e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    i.constant || (i.inputs ? o(i.inputs, t) : -1 === t.indexOf(i) && t.push(i));
                }
                return t;
            }
            function u(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = xn(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t;
            }
            function a(e, t, n, r) {
                var i = r.$$inputs || (r.$$inputs = o(r.inputs, [])), s;
                if (1 === i.length) {
                    var a = u, i = i[0];
                    return e.$watch(function(e) {
                        var t = i(e);
                        return u(t, a) || (s = r(e), a = t && xn(t)), s;
                    }, t, n);
                }
                for (var f = [], l = 0, c = i.length; l < c; l++) f[l] = u;
                return e.$watch(function(e) {
                    for (var t = !1, n = 0, o = i.length; n < o; n++) {
                        var a = i[n](e);
                        if (t || (t = !u(a, f[n]))) f[n] = a && xn(a);
                    }
                    return t && (s = r(e)), s;
                }, t, n);
            }
            function f(e, t, n, r) {
                var i, s;
                return i = e.$watch(function(e) {
                    return r(e);
                }, function(e, n, r) {
                    s = e, S(t) && t.apply(this, arguments), g(e) && r.$$postDigest(function() {
                        g(s) && i();
                    });
                }, n);
            }
            function l(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return s(e, function(e) {
                        g(e) || (t = !1);
                    }), t;
                }
                var o, u;
                return o = e.$watch(function(e) {
                    return r(e);
                }, function(e, n, r) {
                    u = e, S(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function() {
                        i(u) && o();
                    });
                }, n);
            }
            function c(e, t, n, r) {
                var i;
                return i = e.$watch(function(e) {
                    return r(e);
                }, function(e, n, r) {
                    S(t) && t.apply(this, arguments), i();
                }, n);
            }
            function h(e, t) {
                if (!t) return e;
                var n = function(n, r) {
                    var i = e(n, r), s = t(i, n, r);
                    return g(i) ? s : i;
                };
                return e.$$watchDelegate && e.$$watchDelegate !== a ? n.$$watchDelegate = e.$$watchDelegate : t.$stateful || (n.$$watchDelegate = a, n.inputs = [ e ]), n;
            }
            return t.csp = r.csp, function(r, s) {
                var o, u, d;
                switch (typeof r) {
                  case "string":
                    return d = r = r.trim(), o = e[d], o || (":" === r.charAt(0) && ":" === r.charAt(1) && (u = !0, r = r.substring(2)), o = new Ci(t), o = (new ki(o, n, t)).parse(r), o.constant ? o.$$watchDelegate = c : u ? (o = i(o), o.$$watchDelegate = o.literal ? l : f) : o.inputs && (o.$$watchDelegate = a), e[d] = o), h(o, s);
                  case "function":
                    return h(r, s);
                  default:
                    return h(p, s);
                }
            };
        } ];
    }
    function Nn() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(e, t) {
            return kn(function(t) {
                e.$evalAsync(t);
            }, t);
        } ];
    }
    function Cn() {
        this.$get = [ "$browser", "$exceptionHandler", function(e, t) {
            return kn(function(t) {
                e.defer(t);
            }, t);
        } ];
    }
    function kn(e, t) {
        function i(e, t, n) {
            function r(t) {
                return function(n) {
                    i || (i = !0, t.call(e, n));
                };
            }
            var i = !1;
            return [ r(t), r(n) ];
        }
        function o() {
            this.$$state = {
                status: 0
            };
        }
        function u(e, t) {
            return function(n) {
                t.call(e, n);
            };
        }
        function a(r) {
            !r.processScheduled && r.pending && (r.processScheduled = !0, e(function() {
                var e, i, s;
                s = r.pending, r.processScheduled = !1, r.pending = n;
                for (var o = 0, u = s.length; o < u; ++o) {
                    i = s[o][0], e = s[o][r.status];
                    try {
                        S(e) ? i.resolve(e(r.value)) : 1 === r.status ? i.resolve(r.value) : i.reject(r.value);
                    } catch (a) {
                        i.reject(a), t(a);
                    }
                }
            }));
        }
        function f() {
            this.promise = new o, this.resolve = u(this, this.resolve), this.reject = u(this, this.reject), this.notify = u(this, this.notify);
        }
        var l = r("$q", TypeError);
        o.prototype = {
            then: function(e, t, n) {
                var r = new f;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ r, e, t, n ]), 0 < this.$$state.status && a(this.$$state), r.promise;
            },
            "catch": function(e) {
                return this.then(null, e);
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return h(t, !0, e);
                }, function(t) {
                    return h(t, !1, e);
                }, t);
            }
        }, f.prototype = {
            resolve: function(e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(l("qcycle", e)) : this.$$resolve(e));
            },
            $$resolve: function(e) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    if (y(e) || S(e)) n = e && e.then;
                    S(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, a(this.promise.$$state));
                } catch (s) {
                    r[1](s), t(s);
                }
            },
            reject: function(e) {
                this.promise.$$state.status || this.$$reject(e);
            },
            $$reject: function(e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, a(this.promise.$$state);
            },
            notify: function(n) {
                var r = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && r && r.length && e(function() {
                    for (var e, i, s = 0, o = r.length; s < o; s++) {
                        i = r[s][0], e = r[s][3];
                        try {
                            i.notify(S(e) ? e(n) : n);
                        } catch (u) {
                            t(u);
                        }
                    }
                });
            }
        };
        var c = function(e, t) {
            var n = new f;
            return t ? n.resolve(e) : n.reject(e), n.promise;
        }, h = function(e, t, n) {
            var r = null;
            try {
                S(n) && (r = n());
            } catch (i) {
                return c(i, !1);
            }
            return r && S(r.then) ? r.then(function() {
                return c(e, t);
            }, function(e) {
                return c(e, !1);
            }) : c(e, t);
        }, p = function(e, t, n, r) {
            var i = new f;
            return i.resolve(e), i.promise.then(t, n, r);
        }, d = function v(e) {
            if (!S(e)) throw l("norslvr", e);
            if (this instanceof v) {
                var t = new f;
                return e(function(e) {
                    t.resolve(e);
                }, function(e) {
                    t.reject(e);
                }), t.promise;
            }
            return new v(e);
        };
        return d.defer = function() {
            return new f;
        }, d.reject = function(e) {
            var t = new f;
            return t.reject(e), t.promise;
        }, d.when = p, d.all = function(e) {
            var t = new f, n = 0, r = Lr(e) ? [] : {};
            return s(e, function(e, i) {
                n++, p(e).then(function(e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r));
                }, function(e) {
                    r.hasOwnProperty(i) || t.reject(e);
                });
            }), 0 === n && t.resolve(r), t.promise;
        }, d;
    }
    function Ln() {
        this.$get = [ "$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame, r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame, i = !!n, s = i ? function(e) {
                var t = n(e);
                return function() {
                    r(t);
                };
            } : function(e) {
                var n = t(e, 16.66, !1);
                return function() {
                    t.cancel(n);
                };
            };
            return s.supported = i, s;
        } ];
    }
    function An() {
        var e = 10, t = r("$rootScope"), n = null, o = null;
        this.digestTtl = function(t) {
            return arguments.length && (e = t), e;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(r, u, a, f) {
            function l() {
                this.$id = ++kr, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null;
            }
            function c(e) {
                if (g.$$phase) throw t("inprog", g.$$phase);
                g.$$phase = e;
            }
            function h(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent);
            }
            function d() {}
            function v() {
                for (; E.length; ) try {
                    E.shift()();
                } catch (e) {
                    u(e);
                }
                o = null;
            }
            function m() {
                null === o && (o = f.defer(function() {
                    g.$apply(v);
                }));
            }
            l.prototype = {
                constructor: l,
                $new: function(e, t) {
                    function n() {
                        r.$$destroyed = !0;
                    }
                    var r;
                    return t = t || this, e ? (r = new l, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = ++kr, this.$$ChildScope = null;
                    }, this.$$ChildScope.prototype = this), r = new this.$$ChildScope), r.$parent = t, r.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = r, t.$$childTail = r) : t.$$childHead = t.$$childTail = r, (e || t != this) && r.$on("$destroy", n), r;
                },
                $watch: function(e, t, r) {
                    var i = a(e);
                    if (i.$$watchDelegate) return i.$$watchDelegate(this, t, r, i);
                    var s = this.$$watchers, o = {
                        fn: t,
                        last: d,
                        get: i,
                        exp: e,
                        eq: !!r
                    };
                    return n = null, S(t) || (o.fn = p), s || (s = this.$$watchers = []), s.unshift(o), function() {
                        O(s, o), n = null;
                    };
                },
                $watchGroup: function(e, t) {
                    function n() {
                        a = !1, f ? (f = !1, t(i, i, u)) : t(i, r, u);
                    }
                    var r = Array(e.length), i = Array(e.length), o = [], u = this, a = !1, f = !0;
                    if (!e.length) {
                        var l = !0;
                        return u.$evalAsync(function() {
                            l && t(i, i, u);
                        }), function() {
                            l = !1;
                        };
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, s) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, s);
                    }) : (s(e, function(e, t) {
                        var s = u.$watch(e, function(e, s) {
                            i[t] = e, r[t] = s, a || (a = !0, u.$evalAsync(n));
                        });
                        o.push(s);
                    }), function() {
                        for (; o.length; ) o.shift()();
                    });
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        s = e;
                        var t, n, r, u;
                        if (y(s)) if (i(s)) for (o !== h && (o = h, v = o.length = 0, l++), e = s.length, v !== e && (l++, o.length = v = e), t = 0; t < e; t++) u = o[t], r = s[t], n = u !== u && r !== r, n || u === r || (l++, o[t] = r); else {
                            o !== p && (o = p = {}, v = 0, l++), e = 0;
                            for (t in s) s.hasOwnProperty(t) && (e++, r = s[t], u = o[t], t in o ? (n = u !== u && r !== r, n || u === r || (l++, o[t] = r)) : (v++, o[t] = r, l++));
                            if (v > e) for (t in l++, o) s.hasOwnProperty(t) || (v--, delete o[t]);
                        } else o !== s && (o = s, l++);
                        return l;
                    }
                    n.$stateful = !0;
                    var r = this, s, o, u, f = 1 < t.length, l = 0, c = a(e, n), h = [], p = {}, d = !0, v = 0;
                    return this.$watch(c, function() {
                        d ? (d = !1, t(s, s, r)) : t(s, u, r);
                        if (f) if (y(s)) if (i(s)) {
                            u = Array(s.length);
                            for (var e = 0; e < s.length; e++) u[e] = s[e];
                        } else for (e in u = {}, s) vr.call(s, e) && (u[e] = s[e]); else u = s;
                    });
                },
                $digest: function() {
                    var r, i, s, a, l, h, p = e, m, y = [], E, x, T;
                    c("$digest"), f.$$checkUrlChange(), this === g && null !== o && (f.defer.cancel(o), v()), n = null;
                    do {
                        h = !1;
                        for (m = this; b.length; ) {
                            try {
                                T = b.shift(), T.scope.$eval(T.expression);
                            } catch (N) {
                                u(N);
                            }
                            n = null;
                        }
                        e : do {
                            if (a = m.$$watchers) for (l = a.length; l--; ) try {
                                if (r = a[l]) if ((i = r.get(m)) !== (s = r.last) && !(r.eq ? D(i, s) : "number" == typeof i && "number" == typeof s && isNaN(i) && isNaN(s))) h = !0, n = r, r.last = r.eq ? M(i, null) : i, r.fn(i, s === d ? i : s, m), 5 > p && (E = 4 - p, y[E] || (y[E] = []), x = S(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, x += "; newVal: " + j(i) + "; oldVal: " + j(s), y[E].push(x)); else if (r === n) {
                                    h = !1;
                                    break e;
                                }
                            } catch (C) {
                                u(C);
                            }
                            if (!(a = m.$$childHead || m !== this && m.$$nextSibling)) for (; m !== this && !(a = m.$$nextSibling); ) m = m.$parent;
                        } while (m = a);
                        if ((h || b.length) && !(p--)) throw g.$$phase = null, t("infdig", e, j(y));
                    } while (h || b.length);
                    for (g.$$phase = null; w.length; ) try {
                        w.shift()();
                    } catch (k) {
                        u(k);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0;
                        if (this !== g) {
                            for (var t in this.$$listenerCount) h(this, this.$$listenerCount[t], t);
                            e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                                return p;
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                        }
                    }
                },
                $eval: function(e, t) {
                    return a(e)(this, t);
                },
                $evalAsync: function(e) {
                    g.$$phase || b.length || f.defer(function() {
                        b.length && g.$digest();
                    }), b.push({
                        scope: this,
                        expression: e
                    });
                },
                $$postDigest: function(e) {
                    w.push(e);
                },
                $apply: function(e) {
                    try {
                        return c("$apply"), this.$eval(e);
                    } catch (t) {
                        u(t);
                    } finally {
                        g.$$phase = null;
                        try {
                            g.$digest();
                        } catch (n) {
                            throw u(n), n;
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e);
                    }
                    var n = this;
                    e && E.push(t), m();
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(t);
                        -1 !== r && (n[r] = null, h(i, 1, e));
                    };
                },
                $emit: function(e, t) {
                    var n = [], r, i = this, s = !1, o = {
                        name: e,
                        targetScope: i,
                        stopPropagation: function() {
                            s = !0;
                        },
                        preventDefault: function() {
                            o.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, a = P([ o ], arguments, 1), f, l;
                    do {
                        r = i.$$listeners[e] || n, o.currentScope = i, f = 0;
                        for (l = r.length; f < l; f++) if (r[f]) try {
                            r[f].apply(null, a);
                        } catch (c) {
                            u(c);
                        } else r.splice(f, 1), f--, l--;
                        if (s) return o.currentScope = null, o;
                        i = i.$parent;
                    } while (i);
                    return o.currentScope = null, o;
                },
                $broadcast: function(e, t) {
                    var n = this, r = this, i = {
                        name: e,
                        targetScope: this,
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[e]) return i;
                    for (var s = P([ i ], arguments, 1), o, a; n = r; ) {
                        i.currentScope = n, r = n.$$listeners[e] || [], o = 0;
                        for (a = r.length; o < a; o++) if (r[o]) try {
                            r[o].apply(null, s);
                        } catch (f) {
                            u(f);
                        } else r.splice(o, 1), o--, a--;
                        if (!(r = n.$$listenerCount[e] && n.$$childHead || n !== this && n.$$nextSibling)) for (; n !== this && !(r = n.$$nextSibling); ) n = n.$parent;
                    }
                    return i.currentScope = null, i;
                }
            };
            var g = new l, b = g.$$asyncQueue = [], w = g.$$postDigestQueue = [], E = g.$$applyAsyncQueue = [];
            return g;
        } ];
    }
    function On() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return g(t) ? (e = t, this) : e;
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return g(e) ? (t = e, this) : t;
        }, this.$get = function() {
            return function(n, r) {
                var i = r ? t : e, s;
                return s = In(n).href, "" === s || s.match(i) ? n : "unsafe:" + s;
            };
        };
    }
    function Mn(e) {
        if ("self" === e) return e;
        if (b(e)) {
            if (-1 < e.indexOf("***")) throw Oi("iwcard", e);
            return e = Or(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$");
        }
        if (x(e)) return new RegExp("^" + e.source + "$");
        throw Oi("imatcher");
    }
    function _n(e) {
        var t = [];
        return g(e) && s(e, function(e) {
            t.push(Mn(e));
        }), t;
    }
    function Dn() {
        this.SCE_CONTEXTS = Mi;
        var e = [ "self" ], t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = _n(t)), e;
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = _n(e)), t;
        }, this.$get = [ "$injector", function(r) {
            function i(e, t) {
                return "self" === e ? qn(t) : !!e.exec(t.href);
            }
            function s(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e;
                    };
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, t;
            }
            var o = function(e) {
                throw Oi("unsafe");
            };
            r.has("$sanitize") && (o = r.get("$sanitize"));
            var u = s(), a = {};
            return a[Mi.HTML] = s(u), a[Mi.CSS] = s(u), a[Mi.URL] = s(u), a[Mi.JS] = s(u), a[Mi.RESOURCE_URL] = s(a[Mi.URL]), {
                trustAs: function(e, t) {
                    var r = a.hasOwnProperty(e) ? a[e] : null;
                    if (!r) throw Oi("icontext", e, t);
                    if (null === t || t === n || "" === t) return t;
                    if ("string" != typeof t) throw Oi("itype", e);
                    return new r(t);
                },
                getTrusted: function(r, s) {
                    if (null === s || s === n || "" === s) return s;
                    var u = a.hasOwnProperty(r) ? a[r] : null;
                    if (u && s instanceof u) return s.$$unwrapTrustedValue();
                    if (r === Mi.RESOURCE_URL) {
                        var u = In(s.toString()), f, l, c = !1;
                        f = 0;
                        for (l = e.length; f < l; f++) if (i(e[f], u)) {
                            c = !0;
                            break;
                        }
                        if (c) for (f = 0, l = t.length; f < l; f++) if (i(t[f], u)) {
                            c = !1;
                            break;
                        }
                        if (c) return s;
                        throw Oi("insecurl", s.toString());
                    }
                    if (r === Mi.HTML) return o(s);
                    throw Oi("unsafe");
                },
                valueOf: function(e) {
                    return e instanceof u ? e.$$unwrapTrustedValue() : e;
                }
            };
        } ];
    }
    function Pn() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e;
        }, this.$get = [ "$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > gr) throw Oi("iequirks");
            var r = _(Mi);
            r.isEnabled = function() {
                return e;
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t;
            }, r.valueOf = d), r.parseAs = function(e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function(t) {
                    return r.getTrusted(e, t);
                });
            };
            var i = r.parseAs, o = r.getTrusted, u = r.trustAs;
            return s(Mi, function(e, t) {
                var n = dr(t);
                r[ot("parse_as_" + n)] = function(t) {
                    return i(e, t);
                }, r[ot("get_trusted_" + n)] = function(t) {
                    return o(e, t);
                }, r[ot("trust_as_" + n)] = function(t) {
                    return u(e, t);
                };
            }), r;
        } ];
    }
    function Hn() {
        this.$get = [ "$window", "$document", function(e, t) {
            var n = {}, r = c((/android (\d+)/.exec(dr((e.navigator || {}).userAgent)) || [])[1]), i = /Boxee/i.test((e.navigator || {}).userAgent), s = t[0] || {}, o, u = /^(Moz|webkit|ms)(?=[A-Z])/, a = s.body && s.body.style, f = !1, l = !1;
            if (a) {
                for (var h in a) if (f = u.exec(h)) {
                    o = f[0], o = o.substr(0, 1).toUpperCase() + o.substr(1);
                    break;
                }
                o || (o = "WebkitOpacity" in a && "webkit"), f = "transition" in a || o + "Transition" in a, l = "animation" in a || o + "Animation" in a, !r || f && l || (f = b(s.body.style.webkitTransition), l = b(s.body.style.webkitAnimation));
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > r || i),
                hasEvent: function(e) {
                    if ("input" == e && 9 == gr) return !1;
                    if (m(n[e])) {
                        var t = s.createElement("div");
                        n[e] = "on" + e in t;
                    }
                    return n[e];
                },
                csp: Mr(),
                vendorPrefix: o,
                transitions: f,
                animations: l,
                android: r
            };
        } ];
    }
    function Bn() {
        this.$get = [ "$templateCache", "$http", "$q", function(e, t, n) {
            function r(i, s) {
                r.totalPendingRequests++;
                var o = t.defaults && t.defaults.transformResponse;
                if (Lr(o)) for (var u = o, o = [], a = 0; a < u.length; ++a) {
                    var f = u[a];
                    f !== Vt && o.push(f);
                } else o === Vt && (o = null);
                return t.get(i, {
                    cache: e,
                    transformResponse: o
                }).then(function(t) {
                    return t = t.data, r.totalPendingRequests--, e.put(i, t), t;
                }, function() {
                    r.totalPendingRequests--;
                    if (!s) throw ui("tpload", i);
                    return n.reject();
                });
            }
            return r.totalPendingRequests = 0, r;
        } ];
    }
    function jn() {
        this.$get = [ "$rootScope", "$browser", "$location", function(e, t, n) {
            return {
                findBindings: function(e, t, n) {
                    e = e.getElementsByClassName("ng-binding");
                    var r = [];
                    return s(e, function(e) {
                        var i = Nr.element(e).data("$binding");
                        i && s(i, function(i) {
                            n ? (new RegExp("(^|\\s)" + Or(t) + "(\\s|\\||$)")).test(i) && r.push(e) : -1 != i.indexOf(t) && r.push(e);
                        });
                    }), r;
                },
                findModels: function(e, t, n) {
                    for (var r = [ "ng-", "data-ng-", "ng\\:" ], i = 0; i < r.length; ++i) {
                        var s = e.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + t + '"]');
                        if (s.length) return s;
                    }
                },
                getLocation: function() {
                    return n.url();
                },
                setLocation: function(t) {
                    t !== n.url() && (n.url(t), e.$digest());
                },
                whenStable: function(e) {
                    t.notifyWhenNoOutstandingRequests(e);
                }
            };
        } ];
    }
    function Fn() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
            function s(s, u, a) {
                var f = g(a) && !a, l = (f ? r : n).defer(), c = l.promise;
                return u = t.defer(function() {
                    try {
                        l.resolve(s());
                    } catch (t) {
                        l.reject(t), i(t);
                    } finally {
                        delete o[c.$$timeoutId];
                    }
                    f || e.$apply();
                }, u), c.$$timeoutId = u, o[u] = l, c;
            }
            var o = {};
            return s.cancel = function(e) {
                return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1;
            }, s;
        } ];
    }
    function In(e, t) {
        var n = e;
        return gr && (_i.setAttribute("href", n), n = _i.href), _i.setAttribute("href", n), {
            href: _i.href,
            protocol: _i.protocol ? _i.protocol.replace(/:$/, "") : "",
            host: _i.host,
            search: _i.search ? _i.search.replace(/^\?/, "") : "",
            hash: _i.hash ? _i.hash.replace(/^#/, "") : "",
            hostname: _i.hostname,
            port: _i.port,
            pathname: "/" === _i.pathname.charAt(0) ? _i.pathname : "/" + _i.pathname
        };
    }
    function qn(e) {
        return e = b(e) ? In(e) : e, e.protocol === Di.protocol && e.host === Di.host;
    }
    function Rn() {
        this.$get = v(e);
    }
    function Un(e) {
        function t(n, r) {
            if (y(n)) {
                var i = {};
                return s(n, function(e, n) {
                    i[n] = t(n, e);
                }), i;
            }
            return e.factory(n + "Filter", r);
        }
        this.register = t, this.$get = [ "$injector", function(e) {
            return function(t) {
                return e.get(t + "Filter");
            };
        } ], t("currency", Wn), t("date", Yn), t("filter", zn), t("json", Zn), t("limitTo", er), t("lowercase", Fi), t("number", Xn), t("orderBy", tr), t("uppercase", Ii);
    }
    function zn() {
        return function(e, t, n) {
            if (!Lr(e)) return e;
            var r = typeof n, i = [];
            i.check = function(e, t) {
                for (var n = 0; n < i.length; n++) if (!i[n](e, t)) return !1;
                return !0;
            }, "function" !== r && (n = "boolean" === r && n ? function(e, t) {
                return Nr.equals(e, t);
            } : function(e, t) {
                if (e && t && "object" == typeof e && "object" == typeof t) {
                    for (var r in e) if ("$" !== r.charAt(0) && vr.call(e, r) && n(e[r], t[r])) return !0;
                    return !1;
                }
                return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t);
            });
            var s = function(e, t) {
                if ("string" == typeof t && "!" === t.charAt(0)) return !s(e, t.substr(1));
                switch (typeof e) {
                  case "boolean":
                  case "number":
                  case "string":
                    return n(e, t);
                  case "object":
                    switch (typeof t) {
                      case "object":
                        return n(e, t);
                      default:
                        for (var r in e) if ("$" !== r.charAt(0) && s(e[r], t)) return !0;
                    }
                    return !1;
                  case "array":
                    for (r = 0; r < e.length; r++) if (s(e[r], t)) return !0;
                    return !1;
                  default:
                    return !1;
                }
            };
            switch (typeof t) {
              case "boolean":
              case "number":
              case "string":
                t = {
                    $: t
                };
              case "object":
                for (var o in t) (function(e) {
                    "undefined" != typeof t[e] && i.push(function(n) {
                        return s("$" == e ? n : n && n[e], t[e]);
                    });
                })(o);
                break;
              case "function":
                i.push(t);
                break;
              default:
                return e;
            }
            r = [];
            for (o = 0; o < e.length; o++) {
                var u = e[o];
                i.check(u, o) && r.push(u);
            }
            return r;
        };
    }
    function Wn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            return m(n) && (n = t.CURRENCY_SYM), m(r) && (r = 2), null == e ? e : Vn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n);
        };
    }
    function Xn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : Vn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n);
        };
    }
    function Vn(e, t, n, r, i) {
        if (!isFinite(e) || y(e)) return "";
        var s = 0 > e;
        e = Math.abs(e);
        var o = e + "", u = "", a = [], f = !1;
        if (-1 !== o.indexOf("e")) {
            var l = o.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? (o = "0", e = 0) : (u = o, f = !0);
        }
        if (f) 0 < i && -1 < e && 1 > e && (u = e.toFixed(i)); else {
            o = (o.split(Pi)[1] || "").length, m(i) && (i = Math.min(Math.max(t.minFrac, o), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i), 0 === e && (s = !1), e = ("" + e).split(Pi), o = e[0], e = e[1] || "";
            var l = 0, c = t.lgSize, h = t.gSize;
            if (o.length >= c + h) for (l = o.length - c, f = 0; f < l; f++) 0 === (l - f) % h && 0 !== f && (u += n), u += o.charAt(f);
            for (f = l; f < o.length; f++) 0 === (o.length - f) % c && 0 !== f && (u += n), u += o.charAt(f);
            for (; e.length < i; ) e += "0";
            i && "0" !== i && (u += r + e.substr(0, i));
        }
        return a.push(s ? t.negPre : t.posPre), a.push(u), a.push(s ? t.negSuf : t.posSuf), a.join("");
    }
    function $n(e, t, n) {
        var r = "";
        0 > e && (r = "-", e = -e);
        for (e = "" + e; e.length < t; ) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e;
    }
    function Jn(e, t, n, r) {
        return n = n || 0, function(i) {
            i = i["get" + e]();
            if (0 < n || i > -n) i += n;
            return 0 === i && -12 == n && (i = 12), $n(i, t, r);
        };
    }
    function Kn(e, t) {
        return function(n, r) {
            var i = n["get" + e](), s = mr(t ? "SHORT" + e : e);
            return r[s][i];
        };
    }
    function Qn(e) {
        var t = (new Date(e, 0, 1)).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t);
    }
    function Gn(e) {
        return function(t) {
            var n = Qn(t.getFullYear());
            return t = +(new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))) - +n, t = 1 + Math.round(t / 6048e5), $n(t, e);
        };
    }
    function Yn(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                e = new Date(0);
                var r = 0, i = 0, s = t[8] ? e.setUTCFullYear : e.setFullYear, o = t[8] ? e.setUTCHours : e.setHours;
                t[9] && (r = c(t[9] + t[10]), i = c(t[9] + t[11])), s.call(e, c(t[1]), c(t[2]) - 1, c(t[3])), r = c(t[4] || 0) - r, i = c(t[5] || 0) - i, s = c(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), o.call(e, r, i, s, t);
            }
            return e;
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var o = "", u = [], a, f;
            r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, b(n) && (n = ji.test(n) ? c(n) : t(n)), w(n) && (n = new Date(n));
            if (!E(n)) return n;
            for (; r; ) (f = Bi.exec(r)) ? (u = P(u, f, 1), r = u.pop()) : (u.push(r), r = null);
            return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), s(u, function(t) {
                a = Hi[t], o += a ? a(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), o;
        };
    }
    function Zn() {
        return function(e) {
            return j(e, !0);
        };
    }
    function er() {
        return function(e, t) {
            w(e) && (e = e.toString());
            if (!Lr(e) && !b(e)) return e;
            t = Infinity === Math.abs(Number(t)) ? Number(t) : c(t);
            if (b(e)) return t ? 0 <= t ? e.slice(0, t) : e.slice(t, e.length) : "";
            var n = [], r, i;
            t > e.length ? t = e.length : t < -e.length && (t = -e.length), 0 < t ? (r = 0, i = t) : (r = e.length + t, i = e.length);
            for (; r < i; r++) n.push(e[r]);
            return n;
        };
    }
    function tr(e) {
        return function(t, n, r) {
            function s(e, t) {
                return t ? function(t, n) {
                    return e(n, t);
                } : e;
            }
            function o(e, t) {
                var n = typeof e, r = typeof t;
                return n == r ? (E(e) && E(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1;
            }
            if (!i(t)) return t;
            n = Lr(n) ? n : [ n ], 0 === n.length && (n = [ "+" ]), n = n.map(function(t) {
                var n = !1, r = t || d;
                if (b(t)) {
                    if ("+" == t.charAt(0) || "-" == t.charAt(0)) n = "-" == t.charAt(0), t = t.substring(1);
                    if ("" === t) return s(function(e, t) {
                        return o(e, t);
                    }, n);
                    r = e(t);
                    if (r.constant) {
                        var i = r();
                        return s(function(e, t) {
                            return o(e[i], t[i]);
                        }, n);
                    }
                }
                return s(function(e, t) {
                    return o(r(e), r(t));
                }, n);
            });
            for (var u = [], a = 0; a < t.length; a++) u.push(t[a]);
            return u.sort(s(function(e, t) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](e, t);
                    if (0 !== i) return i;
                }
                return 0;
            }, r));
        };
    }
    function nr(e) {
        return S(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", v(e);
    }
    function rr(e, t, r, i, o) {
        var u = this, a = [], f = u.$$parentForm = e.parent().controller("form") || Ui;
        u.$error = {}, u.$$success = {}, u.$pending = n, u.$name = o(t.name || t.ngForm || "")(r), u.$dirty = !1, u.$pristine = !0, u.$valid = !0, u.$invalid = !1, u.$submitted = !1, f.$addControl(u), u.$rollbackViewValue = function() {
            s(a, function(e) {
                e.$rollbackViewValue();
            });
        }, u.$commitViewValue = function() {
            s(a, function(e) {
                e.$commitViewValue();
            });
        }, u.$addControl = function(e) {
            et(e.$name, "input"), a.push(e), e.$name && (u[e.$name] = e);
        }, u.$$renameControl = function(e, t) {
            var n = e.$name;
            u[n] === e && delete u[n], u[t] = e, e.$name = t;
        }, u.$removeControl = function(e) {
            e.$name && u[e.$name] === e && delete u[e.$name], s(u.$pending, function(t, n) {
                u.$setValidity(n, null, e);
            }), s(u.$error, function(t, n) {
                u.$setValidity(n, null, e);
            }), O(a, e);
        }, lr({
            ctrl: this,
            $element: e,
            set: function(e, t, n) {
                var r = e[t];
                r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [ n ];
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (O(r, n), 0 === r.length && delete e[t]);
            },
            parentForm: f,
            $animate: i
        }), u.$setDirty = function() {
            i.removeClass(e, us), i.addClass(e, as), u.$dirty = !0, u.$pristine = !1, f.$setDirty();
        }, u.$setPristine = function() {
            i.setClass(e, us, as + " ng-submitted"), u.$dirty = !1, u.$pristine = !0, u.$submitted = !1, s(a, function(e) {
                e.$setPristine();
            });
        }, u.$setUntouched = function() {
            s(a, function(e) {
                e.$setUntouched();
            });
        }, u.$setSubmitted = function() {
            i.addClass(e, "ng-submitted"), u.$submitted = !0, f.$setSubmitted();
        };
    }
    function ir(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString();
        });
    }
    function sr(e, t, n, r, i, s) {
        var o = t[0].placeholder, u = {}, a = dr(t[0].type);
        if (!i.android) {
            var f = !1;
            t.on("compositionstart", function(e) {
                f = !0;
            }), t.on("compositionend", function() {
                f = !1, l();
            });
        }
        var l = function(e) {
            if (!f) {
                var i = t.val(), s = e && e.type;
                gr && "input" === (e || u).type && t[0].placeholder !== o ? o = t[0].placeholder : ("password" === a || n.ngTrim && "false" === n.ngTrim || (i = Ar(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, s));
            }
        };
        if (i.hasEvent("input")) t.on("input", l); else {
            var c, h = function(e) {
                c || (c = s.defer(function() {
                    l(e), c = null;
                }));
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || 15 < t && 19 > t || 37 <= t && 40 >= t || h(e);
            }), i.hasEvent("paste") && t.on("paste cut", h);
        }
        t.on("change", l), r.$render = function() {
            t.val(r.$isEmpty(r.$modelValue) ? "" : r.$viewValue);
        };
    }
    function or(e, t) {
        return function(n, r) {
            var i, o;
            if (E(n)) return n;
            if (b(n)) {
                '"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1));
                if (Vi.test(n)) return new Date(n);
                e.lastIndex = 0;
                if (i = e.exec(n)) return i.shift(), o = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, s(i, function(e, n) {
                    n < t.length && (o[t[n]] = +e);
                }), new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0);
            }
            return NaN;
        };
    }
    function ur(e, t, r, i) {
        return function(s, o, u, a, f, l, c) {
            function h(e) {
                return g(e) ? E(e) ? e : r(e) : n;
            }
            ar(s, o, u, a), sr(s, o, u, a, f, l);
            var p = a && a.$options && a.$options.timezone, d;
            a.$$parserName = e, a.$parsers.push(function(e) {
                return a.$isEmpty(e) ? null : t.test(e) ? (e = r(e, d), "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e) : n;
            }), a.$formatters.push(function(e) {
                if (!a.$isEmpty(e)) {
                    if (!E(e)) throw ns("datefmt", e);
                    if ((d = e) && "UTC" === p) {
                        var t = 6e4 * d.getTimezoneOffset();
                        d = new Date(d.getTime() + t);
                    }
                    return c("date")(e, i, p);
                }
                return d = null, "";
            });
            if (g(u.min) || u.ngMin) {
                var v;
                a.$validators.min = function(e) {
                    return a.$isEmpty(e) || m(v) || r(e) >= v;
                }, u.$observe("min", function(e) {
                    v = h(e), a.$validate();
                });
            }
            if (g(u.max) || u.ngMax) {
                var y;
                a.$validators.max = function(e) {
                    return a.$isEmpty(e) || m(y) || r(e) <= y;
                }, u.$observe("max", function(e) {
                    y = h(e), a.$validate();
                });
            }
            a.$isEmpty = function(e) {
                return !e || e.getTime && e.getTime() !== e.getTime();
            };
        };
    }
    function ar(e, t, r, i) {
        (i.$$hasNativeValidators = y(t[0].validity)) && i.$parsers.push(function(e) {
            var r = t.prop("validity") || {};
            return r.badInput && !r.typeMismatch ? n : e;
        });
    }
    function fr(e, t, n, i, s) {
        if (g(i)) {
            e = e(i);
            if (!e.constant) throw r("ngModel")("constexpr", n, i);
            return e(t);
        }
        return s;
    }
    function lr(e) {
        function t(e, t) {
            t && !o[e] ? (l.addClass(s, e), o[e] = !0) : !t && o[e] && (l.removeClass(s, e), o[e] = !1);
        }
        function r(e, n) {
            e = e ? "-" + Q(e, "-") : "", t(ss + e, !0 === n), t(os + e, !1 === n);
        }
        var i = e.ctrl, s = e.$element, o = {}, u = e.set, a = e.unset, f = e.parentForm, l = e.$animate;
        o[os] = !(o[ss] = s.hasClass(ss)), i.$setValidity = function(e, s, o) {
            s === n ? (i.$pending || (i.$pending = {}), u(i.$pending, e, o)) : (i.$pending && a(i.$pending, e, o), cr(i.$pending) && (i.$pending = n)), C(s) ? s ? (a(i.$error, e, o), u(i.$$success, e, o)) : (u(i.$error, e, o), a(i.$$success, e, o)) : (a(i.$error, e, o), a(i.$$success, e, o)), i.$pending ? (t(fs, !0), i.$valid = i.$invalid = n, r("", null)) : (t(fs, !1), i.$valid = cr(i.$error), i.$invalid = !i.$valid, r("", i.$valid)), s = i.$pending && i.$pending[e] ? n : i.$error[e] ? !1 : i.$$success[e] ? !0 : null, r(e, s), f.$setValidity(e, s, i);
        };
    }
    function cr(e) {
        if (e) for (var t in e) return !1;
        return !0;
    }
    function hr(e, t) {
        return e = "ngClass" + e, [ "$animate", function(n) {
            function r(e, t) {
                var n = [], r = 0;
                e : for (; r < e.length; r++) {
                    for (var i = e[r], s = 0; s < t.length; s++) if (i == t[s]) continue e;
                    n.push(i);
                }
                return n;
            }
            function i(e) {
                if (!Lr(e)) {
                    if (b(e)) return e.split(" ");
                    if (y(e)) {
                        var t = [];
                        return s(e, function(e, n) {
                            e && (t = t.concat(n.split(" ")));
                        }), t;
                    }
                }
                return e;
            }
            return {
                restrict: "AC",
                link: function(o, u, a) {
                    function f(e, t) {
                        var n = u.data("$classCounts") || {}, r = [];
                        return s(e, function(e) {
                            if (0 < t || n[e]) n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && r.push(e);
                        }), u.data("$classCounts", n), r.join(" ");
                    }
                    function l(e) {
                        if (!0 === t || o.$index % 2 === t) {
                            var s = i(e || []);
                            if (!c) {
                                var l = f(s, 1);
                                a.$addClass(l);
                            } else if (!D(e, c)) {
                                var h = i(c), l = r(s, h), s = r(h, s), l = f(l, 1), s = f(s, -1);
                                l && l.length && n.addClass(u, l), s && s.length && n.removeClass(u, s);
                            }
                        }
                        c = _(e);
                    }
                    var c;
                    o.$watch(a[e], l, !0), a.$observe("class", function(t) {
                        l(o.$eval(a[e]));
                    }), "ngClass" !== e && o.$watch("$index", function(n, r) {
                        var s = n & 1;
                        if (s !== (r & 1)) {
                            var u = i(o.$eval(a[e]));
                            s === t ? (s = f(u, 1), a.$addClass(s)) : (s = f(u, -1), a.$removeClass(s));
                        }
                    });
                }
            };
        } ];
    }
    var pr = /^\/(.+)\/([a-z]*)$/, dr = function(e) {
        return b(e) ? e.toLowerCase() : e;
    }, vr = Object.prototype.hasOwnProperty, mr = function(e) {
        return b(e) ? e.toUpperCase() : e;
    }, gr, yr, br, wr = [].slice, Er = [].splice, Sr = [].push, xr = Object.prototype.toString, Tr = r("ng"), Nr = e.angular || (e.angular = {}), Cr, kr = 0;
    gr = t.documentMode, p.$inject = [], d.$inject = [];
    var Lr = Array.isArray, Ar = function(e) {
        return b(e) ? e.trim() : e;
    }, Or = function(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, Mr = function() {
        if (g(Mr.isActive_)) return Mr.isActive_;
        var e = !!t.querySelector("[ng-csp]") || !!t.querySelector("[data-ng-csp]");
        if (!e) try {
            new Function("");
        } catch (n) {
            e = !0;
        }
        return Mr.isActive_ = e;
    }, _r = [ "ng-", "data-ng-", "ng:", "x-ng-" ], Dr = /[A-Z]/g, Pr = !1, Hr, Br = 1, jr = 3, Fr = {
        full: "1.3.1",
        major: 1,
        minor: 3,
        dot: 1,
        codeName: "spectral-lobster"
    };
    ft.expando = "ng339";
    var Ir = ft.cache = {}, qr = 1;
    ft._data = function(e) {
        return this.cache[e[this.expando]] || {};
    };
    var Rr = /([\:\-\_]+(.))/g, Ur = /^moz([A-Z])/, zr = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Wr = r("jqLite"), Xr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Vr = /<|&#?\w+;/, $r = /<([\w:]+)/, Jr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kr = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Kr.optgroup = Kr.option, Kr.tbody = Kr.tfoot = Kr.colgroup = Kr.caption = Kr.thead, Kr.th = Kr.td;
    var Qr = ft.prototype = {
        ready: function(n) {
            function r() {
                i || (i = !0, n());
            }
            var i = !1;
            "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), ft(e).on("load", r));
        },
        toString: function() {
            var e = [];
            return s(this, function(t) {
                e.push("" + t);
            }), "[" + e.join(", ") + "]";
        },
        eq: function(e) {
            return 0 <= e ? yr(this[e]) : yr(this[this.length + e]);
        },
        length: 0,
        push: Sr,
        sort: [].sort,
        splice: [].splice
    }, Gr = {};
    s("multiple selected checked disabled readOnly required open".split(" "), function(e) {
        Gr[dr(e)] = e;
    });
    var Yr = {};
    s("input select option textarea button form details".split(" "), function(e) {
        Yr[e] = !0;
    });
    var Zr = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    s({
        data: vt,
        removeData: pt
    }, function(e, t) {
        ft[t] = e;
    }), s({
        data: vt,
        inheritedData: Et,
        scope: function(e) {
            return yr.data(e, "$scope") || Et(e.parentNode || e, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(e) {
            return yr.data(e, "$isolateScope") || yr.data(e, "$isolateScopeNoTemplate");
        },
        controller: wt,
        injector: function(e) {
            return Et(e, "$injector");
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t);
        },
        hasClass: mt,
        css: function(e, t, n) {
            t = ot(t);
            if (!g(n)) return e.style[t];
            e.style[t] = n;
        },
        attr: function(e, t, r) {
            var i = dr(t);
            if (Gr[i]) {
                if (!g(r)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? i : n;
                r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i));
            } else if (g(r)) e.setAttribute(t, r); else if (e.getAttribute) return e = e.getAttribute(t, 2), null === e ? n : e;
        },
        prop: function(e, t, n) {
            if (!g(n)) return e[t];
            e[t] = n;
        },
        text: function() {
            function e(e, t) {
                if (m(t)) {
                    var n = e.nodeType;
                    return n === Br || n === jr ? e.textContent : "";
                }
                e.textContent = t;
            }
            return e.$dv = "", e;
        }(),
        val: function(e, t) {
            if (m(t)) {
                if (e.multiple && "select" === A(e)) {
                    var n = [];
                    return s(e.options, function(e) {
                        e.selected && n.push(e.value || e.text);
                    }), 0 === n.length ? null : n;
                }
                return e.value;
            }
            e.value = t;
        },
        html: function(e, t) {
            if (m(t)) return e.innerHTML;
            ct(e, !0), e.innerHTML = t;
        },
        empty: St
    }, function(e, t) {
        ft.prototype[t] = function(t, r) {
            var i, s, o = this.length;
            if (e !== St && (2 == e.length && e !== mt && e !== wt ? t : r) === n) {
                if (y(t)) {
                    for (i = 0; i < o; i++) if (e === vt) e(this[i], t); else for (s in t) e(this[i], s, t[s]);
                    return this;
                }
                i = e.$dv, o = i === n ? Math.min(o, 1) : o;
                for (s = 0; s < o; s++) {
                    var u = e(this[s], t, r);
                    i = i ? i + u : u;
                }
                return i;
            }
            for (i = 0; i < o; i++) e(this[i], t, r);
            return this;
        };
    }), s({
        removeData: pt,
        on: function Gs(e, t, n, r) {
            if (g(r)) throw Wr("onargs");
            if (ut(e)) {
                var i = dt(e, !0);
                r = i.events;
                var s = i.handle;
                s || (s = i.handle = kt(e, r));
                for (var i = 0 <= t.indexOf(" ") ? t.split(" ") : [ t ], o = i.length; o--; ) {
                    t = i[o];
                    var u = r[t];
                    u || (r[t] = [], "mouseenter" === t || "mouseleave" === t ? Gs(e, zr[t], function(e) {
                        var n = e.relatedTarget;
                        n && (n === this || this.contains(n)) || s(e, t);
                    }) : "$destroy" !== t && e.addEventListener(t, s, !1), u = r[t]), u.push(n);
                }
            }
        },
        off: ht,
        one: function(e, t, n) {
            e = yr(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r);
            }), e.on(t, n);
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            ct(e), s(new ft(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t;
            });
        },
        children: function(e) {
            var t = [];
            return s(e.childNodes, function(e) {
                e.nodeType === Br && t.push(e);
            }), t;
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || [];
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (n === Br || 11 === n) {
                t = new ft(t);
                for (var n = 0, r = t.length; n < r; n++) e.appendChild(t[n]);
            }
        },
        prepend: function(e, t) {
            if (e.nodeType === Br) {
                var n = e.firstChild;
                s(new ft(t), function(t) {
                    e.insertBefore(t, n);
                });
            }
        },
        wrap: function(e, t) {
            t = yr(t).eq(0).clone()[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e);
        },
        remove: xt,
        detach: function(e) {
            xt(e, !0);
        },
        after: function(e, t) {
            var n = e, r = e.parentNode;
            t = new ft(t);
            for (var i = 0, s = t.length; i < s; i++) {
                var o = t[i];
                r.insertBefore(o, n.nextSibling), n = o;
            }
        },
        addClass: yt,
        removeClass: gt,
        toggleClass: function(e, t, n) {
            t && s(t.split(" "), function(t) {
                var r = n;
                m(r) && (r = !mt(e, t)), (r ? yt : gt)(e, t);
            });
        },
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
        },
        next: function(e) {
            return e.nextElementSibling;
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : [];
        },
        clone: lt,
        triggerHandler: function(e, t, n) {
            var r, i, o = t.type || t, u = dt(e);
            if (u = (u = u && u.events) && u[o]) r = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped;
                },
                stopPropagation: p,
                type: o,
                target: e
            }, t.type && (r = l(r, t)), t = _(u), i = n ? [ r ].concat(n) : [ r ], s(t, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, i);
            });
        }
    }, function(e, t) {
        ft.prototype[t] = function(t, n, r) {
            for (var i, s = 0, o = this.length; s < o; s++) m(i) ? (i = e(this[s], t, n, r), g(i) && (i = yr(i))) : bt(i, e(this[s], t, n, r));
            return g(i) ? i : this;
        }, ft.prototype.bind = ft.prototype.on, ft.prototype.unbind = ft.prototype.off;
    }), At.prototype = {
        put: function(e, t) {
            this[Lt(e, this.nextUid)] = t;
        },
        get: function(e) {
            return this[Lt(e, this.nextUid)];
        },
        remove: function(e) {
            var t = this[e = Lt(e, this.nextUid)];
            return delete this[e], t;
        }
    };
    var ei = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, ti = /,/, ni = /^\s*(_?)(\S+?)\1\s*$/, ri = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, ii = r("$injector");
    _t.$$annotate = Mt;
    var si = r("$animate"), oi = [ "$provide", function(e) {
        this.$$selectors = {}, this.register = function(t, n) {
            var r = t + "-animation";
            if (t && "." != t.charAt(0)) throw si("notcsel", t);
            this.$$selectors[t.substr(1)] = r, e.factory(r, n);
        }, this.classNameFilter = function(e) {
            return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter;
        }, this.$get = [ "$$q", "$$asyncCallback", "$rootScope", function(e, t, n) {
            function r(t) {
                var r, i = e.defer();
                return i.promise.$$cancelFn = function() {
                    r && r();
                }, n.$$postDigest(function() {
                    r = t(function() {
                        i.resolve();
                    });
                }), i.promise;
            }
            function i(e, t) {
                var n = [], r = [], i = rt();
                return s((e.attr("class") || "").split(/\s+/), function(e) {
                    i[e] = !0;
                }), s(t, function(e, t) {
                    var s = i[t];
                    !1 === e && s ? r.push(t) : !0 !== e || s || n.push(t);
                }), 0 < n.length + r.length && [ n.length ? n : null, r.length ? r : null ];
            }
            function o(e, t, n) {
                for (var r = 0, i = t.length; r < i; ++r) e[t[r]] = n;
            }
            function u() {
                return f || (f = e.defer(), t(function() {
                    f.resolve(), f = null;
                })), f.promise;
            }
            function a(e, t) {
                if (Nr.isObject(t)) {
                    var n = l(t.from || {}, t.to || {});
                    e.css(n);
                }
            }
            var f;
            return {
                animate: function(e, t, n) {
                    return a(e, {
                        from: t,
                        to: n
                    }), u();
                },
                enter: function(e, t, n, r) {
                    return a(e, r), n ? n.after(e) : t.prepend(e), u();
                },
                leave: function(e, t) {
                    return e.remove(), u();
                },
                move: function(e, t, n, r) {
                    return this.enter(e, t, n, r);
                },
                addClass: function(e, t, n) {
                    return this.setClass(e, t, [], n);
                },
                $$addClassImmediately: function(e, t, n) {
                    return e = yr(e), t = b(t) ? t : Lr(t) ? t.join(" ") : "", s(e, function(e) {
                        yt(e, t);
                    }), a(e, n), u();
                },
                removeClass: function(e, t, n) {
                    return this.setClass(e, [], t, n);
                },
                $$removeClassImmediately: function(e, t, n) {
                    return e = yr(e), t = b(t) ? t : Lr(t) ? t.join(" ") : "", s(e, function(e) {
                        gt(e, t);
                    }), a(e, n), u();
                },
                setClass: function(e, t, n, s) {
                    var u = this, a = !1;
                    e = yr(e);
                    var f = e.data("$$animateClasses");
                    return f ? s && f.options && (f.options = Nr.extend(f.options || {}, s)) : (f = {
                        classes: {},
                        options: s
                    }, a = !0), s = f.classes, t = Lr(t) ? t : t.split(" "), n = Lr(n) ? n : n.split(" "), o(s, t, !0), o(s, n, !1), a && (f.promise = r(function(t) {
                        var n = e.data("$$animateClasses");
                        e.removeData("$$animateClasses");
                        if (n) {
                            var r = i(e, n.classes);
                            r && u.$$setClassImmediately(e, r[0], r[1], n.options);
                        }
                        t();
                    }), e.data("$$animateClasses", f)), f.promise;
                },
                $$setClassImmediately: function(e, t, n, r) {
                    return t && this.$$addClassImmediately(e, t), n && this.$$removeClassImmediately(e, n), a(e, r), u();
                },
                enabled: p,
                cancel: p
            };
        } ];
    } ], ui = r("$compile");
    It.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var ai = /^((?:x|data)[\:\-_])/i, fi = "application/json", li = {
        "Content-Type": fi + ";charset=utf-8"
    }, ci = /^\s*(\[|\{[^\{])/, hi = /[\}\]]\s*$/, pi = /^\)\]\}',?\n/, di = r("$interpolate"), vi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, mi = {
        http: 80,
        https: 443,
        ftp: 21
    }, gi = r("$location"), yi = {
        $$html5: !1,
        $$replace: !1,
        absUrl: pn("$$absUrl"),
        url: function(e) {
            return m(e) ? this.$$url : (e = vi.exec(e), e[1] && this.path(decodeURIComponent(e[1])), (e[2] || e[1]) && this.search(e[3] || ""), this.hash(e[5] || ""), this);
        },
        protocol: pn("$$protocol"),
        host: pn("$$host"),
        port: pn("$$port"),
        path: dn("$$path", function(e) {
            return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e;
        }),
        search: function(e, t) {
            switch (arguments.length) {
              case 0:
                return this.$$search;
              case 1:
                if (b(e) || w(e)) e = e.toString(), this.$$search = R(e); else {
                    if (!y(e)) throw gi("isrcharg");
                    e = M(e, {}), s(e, function(t, n) {
                        null == t && delete e[n];
                    }), this.$$search = e;
                }
                break;
              default:
                m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t;
            }
            return this.$$compose(), this;
        },
        hash: dn("$$hash", function(e) {
            return null !== e ? e.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    s([ hn, cn, ln ], function(e) {
        e.prototype = Object.create(yi), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== ln || !this.$$html5) throw gi("nostate");
            return this.$$state = m(t) ? null : t, this;
        };
    });
    var bi = r("$parse"), wi = Function.prototype.call, Ei = Function.prototype.apply, Si = Function.prototype.bind, xi = rt();
    s({
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        "undefined": function() {}
    }, function(e, t) {
        e.constant = e.literal = e.sharedGetter = !0, xi[t] = e;
    }), xi["this"] = function(e) {
        return e;
    }, xi["this"].sharedGetter = !0;
    var Ti = l(rt(), {
        "+": function(e, t, r, i) {
            return r = r(e, t), i = i(e, t), g(r) ? g(i) ? r + i : r : g(i) ? i : n;
        },
        "-": function(e, t, n, r) {
            return n = n(e, t), r = r(e, t), (g(n) ? n : 0) - (g(r) ? r : 0);
        },
        "*": function(e, t, n, r) {
            return n(e, t) * r(e, t);
        },
        "/": function(e, t, n, r) {
            return n(e, t) / r(e, t);
        },
        "%": function(e, t, n, r) {
            return n(e, t) % r(e, t);
        },
        "===": function(e, t, n, r) {
            return n(e, t) === r(e, t);
        },
        "!==": function(e, t, n, r) {
            return n(e, t) !== r(e, t);
        },
        "==": function(e, t, n, r) {
            return n(e, t) == r(e, t);
        },
        "!=": function(e, t, n, r) {
            return n(e, t) != r(e, t);
        },
        "<": function(e, t, n, r) {
            return n(e, t) < r(e, t);
        },
        ">": function(e, t, n, r) {
            return n(e, t) > r(e, t);
        },
        "<=": function(e, t, n, r) {
            return n(e, t) <= r(e, t);
        },
        ">=": function(e, t, n, r) {
            return n(e, t) >= r(e, t);
        },
        "&&": function(e, t, n, r) {
            return n(e, t) && r(e, t);
        },
        "||": function(e, t, n, r) {
            return n(e, t) || r(e, t);
        },
        "!": function(e, t, n) {
            return !n(e, t);
        },
        "=": !0,
        "|": !0
    }), Ni = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Ci = function(e) {
        this.options = e;
    };
    Ci.prototype = {
        constructor: Ci,
        lex: function(e) {
            this.text = e, this.index = 0, this.ch = n;
            for (this.tokens = []; this.index < this.text.length; ) if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: this.ch
            }), this.index++; else if (this.isWhitespace(this.ch)) this.index++; else {
                e = this.ch + this.peek();
                var t = e + this.peek(2), r = Ti[this.ch], i = Ti[e], s = Ti[t];
                s ? (this.tokens.push({
                    index: this.index,
                    text: t,
                    fn: s
                }), this.index += 3) : i ? (this.tokens.push({
                    index: this.index,
                    text: e,
                    fn: i
                }), this.index += 2) : r ? (this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    fn: r
                }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
            return this.tokens;
        },
        is: function(e) {
            return -1 !== e.indexOf(this.ch);
        },
        peek: function(e) {
            return e = e || 1, this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1;
        },
        isNumber: function(e) {
            return "0" <= e && "9" >= e;
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e;
        },
        isIdent: function(e) {
            return "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "_" === e || "$" === e;
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e);
        },
        throwError: function(e, t, n) {
            throw n = n || this.index, t = g(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, bi("lexerr", e, t, this.text);
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length; ) {
                var n = dr(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            e *= 1, this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                fn: function() {
                    return e;
                }
            });
        },
        readIdent: function() {
            for (var e = this.text, t = "", r = this.index, i, s, o, u; this.index < this.text.length; ) {
                u = this.text.charAt(this.index);
                if ("." !== u && !this.isIdent(u) && !this.isNumber(u)) break;
                "." === u && (i = this.index), t += u, this.index++;
            }
            i && "." === t[t.length - 1] && (this.index--, t = t.slice(0, -1), i = t.lastIndexOf("."), -1 === i && (i = n));
            if (i) for (s = this.index; s < this.text.length; ) {
                u = this.text.charAt(s);
                if ("(" === u) {
                    o = t.substr(i - r + 1), t = t.substr(0, i - r), this.index = s;
                    break;
                }
                if (!this.isWhitespace(u)) break;
                s++;
            }
            this.tokens.push({
                index: r,
                text: t,
                fn: xi[t] || Sn(t, this.options, e)
            }), o && (this.tokens.push({
                index: i,
                text: "."
            }), this.tokens.push({
                index: i + 1,
                text: o
            }));
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length; ) {
                var s = this.text.charAt(this.index), r = r + s;
                if (i) "u" === s ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Ni[s] || s, i = !1; else if ("\\" === s) i = !0; else {
                    if (s === e) {
                        this.index++, this.tokens.push({
                            index: t,
                            text: r,
                            string: n,
                            constant: !0,
                            fn: function() {
                                return n;
                            }
                        });
                        return;
                    }
                    n += s;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", t);
        }
    };
    var ki = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n;
    };
    ki.ZERO = l(function() {
        return 0;
    }, {
        sharedGetter: !0,
        constant: !0
    }), ki.prototype = {
        constructor: ki,
        parse: function(e) {
            return this.text = e, this.tokens = this.lexer.lex(e), e = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e;
        },
        primary: function() {
            var e;
            if (this.expect("(")) e = this.filterChain(), this.consume(")"); else if (this.expect("[")) e = this.arrayDeclaration(); else if (this.expect("{")) e = this.object(); else {
                var t = this.expect();
                (e = t.fn) || this.throwError("not a primary expression", t), t.constant && (e.constant = !0, e.literal = !0);
            }
            for (var n; t = this.expect("(", "[", "."); ) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e;
        },
        throwError: function(e, t) {
            throw bi("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw bi("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(e, t, n, r) {
            if (0 < this.tokens.length) {
                var i = this.tokens[0], s = i.text;
                if (s === e || s === t || s === n || s === r || !(e || t || n || r)) return i;
            }
            return !1;
        },
        expect: function(e, t, n, r) {
            return (e = this.peek(e, t, n, r)) ? (this.tokens.shift(), e) : !1;
        },
        consume: function(e) {
            this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek());
        },
        unaryFn: function(e, t) {
            return l(function(n, r) {
                return e(n, r, t);
            }, {
                constant: t.constant,
                inputs: [ t ]
            });
        },
        binaryFn: function(e, t, n, r) {
            return l(function(r, i) {
                return t(r, i, e, n);
            }, {
                constant: e.constant && n.constant,
                inputs: !r && [ e, n ]
            });
        },
        statements: function() {
            for (var e = []; ; ) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, n) {
                for (var r, i = 0, s = e.length; i < s; i++) r = e[i](t, n);
                return r;
            };
        },
        filterChain: function() {
            for (var e = this.expression(); this.expect("|"); ) e = this.filter(e);
            return e;
        },
        filter: function(e) {
            var t = this.expect(), r = this.$filter(t.text), i, s;
            if (this.peek(":")) for (i = [], s = []; this.expect(":"); ) i.push(this.expression());
            return t = [ e ].concat(i || []), l(function(t, o) {
                var u = e(t, o);
                if (s) {
                    s[0] = u;
                    for (u = i.length; u--; ) s[u + 1] = i[u](t, o);
                    return r.apply(n, s);
                }
                return r(u);
            }, {
                constant: !r.$stateful && t.every(bn),
                inputs: !r.$stateful && t
            });
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var e = this.ternary(), t, n;
            return (n = this.expect("=")) ? (e.assign || this.throwError("implies assignment but [" + this.text.substring(0, n.index) + "] can not be assigned to", n), t = this.ternary(), l(function(n, r) {
                return e.assign(n, t(n, r), r);
            }, {
                inputs: [ e, t ]
            })) : e;
        },
        ternary: function() {
            var e = this.logicalOR(), t, n;
            if (n = this.expect("?")) {
                t = this.assignment();
                if (n = this.expect(":")) {
                    var r = this.assignment();
                    return l(function(n, i) {
                        return e(n, i) ? t(n, i) : r(n, i);
                    }, {
                        constant: e.constant && t.constant && r.constant
                    });
                }
                this.throwError("expected :", n);
            }
            return e;
        },
        logicalOR: function() {
            for (var e = this.logicalAND(), t; t = this.expect("||"); ) e = this.binaryFn(e, t.fn, this.logicalAND(), !0);
            return e;
        },
        logicalAND: function() {
            var e = this.equality(), t;
            if (t = this.expect("&&")) e = this.binaryFn(e, t.fn, this.logicalAND(), !0);
            return e;
        },
        equality: function() {
            var e = this.relational(), t;
            if (t = this.expect("==", "!=", "===", "!==")) e = this.binaryFn(e, t.fn, this.equality());
            return e;
        },
        relational: function() {
            var e = this.additive(), t;
            if (t = this.expect("<", ">", "<=", ">=")) e = this.binaryFn(e, t.fn, this.relational());
            return e;
        },
        additive: function() {
            for (var e = this.multiplicative(), t; t = this.expect("+", "-"); ) e = this.binaryFn(e, t.fn, this.multiplicative());
            return e;
        },
        multiplicative: function() {
            for (var e = this.unary(), t; t = this.expect("*", "/", "%"); ) e = this.binaryFn(e, t.fn, this.unary());
            return e;
        },
        unary: function() {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(ki.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(e) {
            var t = this.text, n = this.expect().text, r = Sn(n, this.options, t);
            return l(function(t, n, i) {
                return r(i || e(t, n));
            }, {
                assign: function(r, i, s) {
                    return (s = e(r, s)) || e.assign(r, s = {}), wn(s, n, i, t);
                }
            });
        },
        objectIndex: function(e) {
            var t = this.text, r = this.expression();
            return this.consume("]"), l(function(i, s) {
                var o = e(i, s), u = r(i, s);
                return gn(u, t), o ? yn(o[u], t) : n;
            }, {
                assign: function(n, i, s) {
                    var o = gn(r(n, s), t);
                    return (s = yn(e(n, s), t)) || e.assign(n, s = {}), s[o] = i;
                }
            });
        },
        functionCall: function(e, t) {
            var n = [];
            if (")" !== this.peekToken().text) do n.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var r = this.text, i = n.length ? [] : null;
            return function(s, o) {
                var u = t ? t(s, o) : s, a = e(s, o, u) || p;
                if (i) for (var f = n.length; f--; ) i[f] = yn(n[f](s, o), r);
                yn(u, r);
                if (a) {
                    if (a.constructor === a) throw bi("isecfn", r);
                    if (a === wi || a === Ei || a === Si) throw bi("isecff", r);
                }
                return u = a.apply ? a.apply(u, i) : a(i[0], i[1], i[2], i[3], i[4]), yn(u, r);
            };
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var t = this.expression();
                e.push(t);
            } while (this.expect(","));
            return this.consume("]"), l(function(t, n) {
                for (var r = [], i = 0, s = e.length; i < s; i++) r.push(e[i](t, n));
                return r;
            }, {
                literal: !0,
                constant: e.every(bn),
                inputs: e
            });
        },
        object: function() {
            var e = [], t = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var n = this.expect();
                e.push(n.string || n.text), this.consume(":"), n = this.expression(), t.push(n);
            } while (this.expect(","));
            return this.consume("}"), l(function(n, r) {
                for (var i = {}, s = 0, o = t.length; s < o; s++) i[e[s]] = t[s](n, r);
                return i;
            }, {
                literal: !0,
                constant: t.every(bn),
                inputs: t
            });
        }
    };
    var Li = rt(), Ai = Object.prototype.valueOf, Oi = r("$sce"), Mi = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, ui = r("$compile"), _i = t.createElement("a"), Di = In(e.location.href, !0);
    Un.$inject = [ "$provide" ], Wn.$inject = [ "$locale" ], Xn.$inject = [ "$locale" ];
    var Pi = ".", Hi = {
        yyyy: Jn("FullYear", 4),
        yy: Jn("FullYear", 2, 0, !0),
        y: Jn("FullYear", 1),
        MMMM: Kn("Month"),
        MMM: Kn("Month", !0),
        MM: Jn("Month", 2, 1),
        M: Jn("Month", 1, 1),
        dd: Jn("Date", 2),
        d: Jn("Date", 1),
        HH: Jn("Hours", 2),
        H: Jn("Hours", 1),
        hh: Jn("Hours", 2, -12),
        h: Jn("Hours", 1, -12),
        mm: Jn("Minutes", 2),
        m: Jn("Minutes", 1),
        ss: Jn("Seconds", 2),
        s: Jn("Seconds", 1),
        sss: Jn("Milliseconds", 3),
        EEEE: Kn("Day"),
        EEE: Kn("Day", !0),
        a: function(e, t) {
            return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1];
        },
        Z: function(e) {
            return e = -1 * e.getTimezoneOffset(), e = (0 <= e ? "+" : "") + ($n(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + $n(Math.abs(e % 60), 2));
        },
        ww: Gn(2),
        w: Gn(1)
    }, Bi = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, ji = /^\-?\d+$/;
    Yn.$inject = [ "$locale" ];
    var Fi = v(dr), Ii = v(mr);
    tr.$inject = [ "$parse" ];
    var qi = v({
        restrict: "E",
        compile: function(e, t) {
            if (!t.href && !t.xlinkHref && !t.name) return function(e, t) {
                var n = "[object SVGAnimatedString]" === xr.call(t.prop("href")) ? "xlink:href" : "href";
                t.on("click", function(e) {
                    t.attr(n) || e.preventDefault();
                });
            };
        }
    }), Ri = {};
    s(Gr, function(e, t) {
        if ("multiple" != e) {
            var n = qt("ng-" + t);
            Ri[n] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(e, r, i) {
                        e.$watch(i[n], function(e) {
                            i.$set(t, !!e);
                        });
                    }
                };
            };
        }
    }), s(Zr, function(e, t) {
        Ri[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    if ("ngPattern" === t && "/" == r.ngPattern.charAt(0) && (n = r.ngPattern.match(pr))) {
                        r.$set("ngPattern", new RegExp(n[1], n[2]));
                        return;
                    }
                    e.$watch(r[t], function(e) {
                        r.$set(t, e);
                    });
                }
            };
        };
    }), s([ "src", "srcset", "href" ], function(e) {
        var t = qt("ng-" + e);
        Ri[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var s = e, o = e;
                    "href" === e && "[object SVGAnimatedString]" === xr.call(r.prop("href")) && (o = "xlinkHref", i.$attr[o] = "xlink:href", s = null), i.$observe(t, function(t) {
                        t ? (i.$set(o, t), gr && s && r.prop(s, i[o])) : "href" === e && i.$set(o, null);
                    });
                }
            };
        };
    });
    var Ui = {
        $addControl: p,
        $$renameControl: function(e, t) {
            e.$name = t;
        },
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    };
    rr.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var zi = function(e) {
        return [ "$timeout", function(t) {
            return {
                name: "form",
                restrict: e ? "EAC" : "E",
                controller: rr,
                compile: function(e) {
                    return e.addClass(us).addClass(ss), {
                        pre: function(e, r, i, s) {
                            if (!("action" in i)) {
                                var o = function(t) {
                                    e.$apply(function() {
                                        s.$commitViewValue(), s.$setSubmitted();
                                    }), t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                                };
                                r[0].addEventListener("submit", o, !1), r.on("$destroy", function() {
                                    t(function() {
                                        r[0].removeEventListener("submit", o, !1);
                                    }, 0, !1);
                                });
                            }
                            var u = s.$$parentForm, a = s.$name;
                            a && (wn(e, a, s, a), i.$observe(i.name ? "name" : "ngForm", function(t) {
                                a !== t && (wn(e, a, n, a), a = t, wn(e, a, s, a), u.$$renameControl(s, a));
                            })), r.on("$destroy", function() {
                                u.$removeControl(s), a && wn(e, a, n, a), l(s, Ui);
                            });
                        }
                    };
                }
            };
        } ];
    }, Wi = zi(), Xi = zi(!0), Vi = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, $i = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Ji = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Ki = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Qi = /^(\d{4})-(\d{2})-(\d{2})$/, Gi = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Yi = /^(\d{4})-W(\d\d)$/, Zi = /^(\d{4})-(\d\d)$/, es = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, ts = /(\s+|^)default(\s+|$)/, ns = new r("ngModel"), rs = {
        text: function(e, t, n, r, i, s) {
            sr(e, t, n, r, i, s), ir(r);
        },
        date: ur("date", Qi, or(Qi, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": ur("datetimelocal", Gi, or(Gi, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: ur("time", es, or(es, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: ur("week", Yi, function(e, t) {
            if (E(e)) return e;
            if (b(e)) {
                Yi.lastIndex = 0;
                var n = Yi.exec(e);
                if (n) {
                    var r = +n[1], i = +n[2], s = n = 0, o = 0, u = 0, a = Qn(r), i = 7 * (i - 1);
                    return t && (n = t.getHours(), s = t.getMinutes(), o = t.getSeconds(), u = t.getMilliseconds()), new Date(r, 0, a.getDate() + i, n, s, o, u);
                }
            }
            return NaN;
        }, "yyyy-Www"),
        month: ur("month", Zi, or(Zi, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: function(e, t, r, i, s, o) {
            ar(e, t, r, i), sr(e, t, r, i, s, o), i.$$parserName = "number", i.$parsers.push(function(e) {
                return i.$isEmpty(e) ? null : Ki.test(e) ? parseFloat(e) : n;
            }), i.$formatters.push(function(e) {
                if (!i.$isEmpty(e)) {
                    if (!w(e)) throw ns("numfmt", e);
                    e = e.toString();
                }
                return e;
            });
            if (r.min || r.ngMin) {
                var u;
                i.$validators.min = function(e) {
                    return i.$isEmpty(e) || m(u) || e >= u;
                }, r.$observe("min", function(e) {
                    g(e) && !w(e) && (e = parseFloat(e, 10)), u = w(e) && !isNaN(e) ? e : n, i.$validate();
                });
            }
            if (r.max || r.ngMax) {
                var a;
                i.$validators.max = function(e) {
                    return i.$isEmpty(e) || m(a) || e <= a;
                }, r.$observe("max", function(e) {
                    g(e) && !w(e) && (e = parseFloat(e, 10)), a = w(e) && !isNaN(e) ? e : n, i.$validate();
                });
            }
        },
        url: function(e, t, n, r, i, s) {
            sr(e, t, n, r, i, s), ir(r), r.$$parserName = "url", r.$validators.url = function(e) {
                return r.$isEmpty(e) || $i.test(e);
            };
        },
        email: function(e, t, n, r, i, s) {
            sr(e, t, n, r, i, s), ir(r), r.$$parserName = "email", r.$validators.email = function(e) {
                return r.$isEmpty(e) || Ji.test(e);
            };
        },
        radio: function(e, t, n, r) {
            m(n.name) && t.attr("name", ++kr), t.on("click", function(e) {
                t[0].checked && r.$setViewValue(n.value, e && e.type);
            }), r.$render = function() {
                t[0].checked = n.value == r.$viewValue;
            }, n.$observe("value", r.$render);
        },
        checkbox: function(e, t, n, r, i, s, o, u) {
            var a = fr(u, e, "ngTrueValue", n.ngTrueValue, !0), f = fr(u, e, "ngFalseValue", n.ngFalseValue, !1);
            t.on("click", function(e) {
                r.$setViewValue(t[0].checked, e && e.type);
            }), r.$render = function() {
                t[0].checked = r.$viewValue;
            }, r.$isEmpty = function(e) {
                return e !== a;
            }, r.$formatters.push(function(e) {
                return D(e, a);
            }), r.$parsers.push(function(e) {
                return e ? a : f;
            });
        },
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, is = [ "$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(i, s, o, u) {
                    u[0] && (rs[dr(o.type)] || rs.text)(i, s, o, u[0], t, e, n, r);
                }
            }
        };
    } ], ss = "ng-valid", os = "ng-invalid", us = "ng-pristine", as = "ng-dirty", fs = "ng-pending", ls = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, r, i, o, u, a, f, l, c) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = c(r.name || "", !1)(e);
        var h = o(r.ngModel), d = null, v = this, y = function() {
            var t = h(e);
            return v.$options && v.$options.getterSetter && S(t) && (t = t()), t;
        }, b = function(t) {
            var n;
            v.$options && v.$options.getterSetter && S(n = h(e)) ? n(v.$modelValue) : h.assign(e, v.$modelValue);
        };
        this.$$setOptions = function(e) {
            v.$options = e;
            if (!(h.assign || e && e.getterSetter)) throw ns("nonassign", r.ngModel, I(i));
        }, this.$render = p, this.$isEmpty = function(e) {
            return m(e) || "" === e || null === e || e !== e;
        };
        var E = i.inheritedData("$formController") || Ui, x = 0;
        lr({
            ctrl: this,
            $element: i,
            set: function(e, t) {
                e[t] = !0;
            },
            unset: function(e, t) {
                delete e[t];
            },
            parentForm: E,
            $animate: u
        }), this.$setPristine = function() {
            v.$dirty = !1, v.$pristine = !0, u.removeClass(i, as), u.addClass(i, us);
        }, this.$setUntouched = function() {
            v.$touched = !1, v.$untouched = !0, u.setClass(i, "ng-untouched", "ng-touched");
        }, this.$setTouched = function() {
            v.$touched = !0, v.$untouched = !1, u.setClass(i, "ng-touched", "ng-untouched");
        }, this.$rollbackViewValue = function() {
            a.cancel(d), v.$viewValue = v.$$lastCommittedViewValue, v.$render();
        }, this.$validate = function() {
            w(v.$modelValue) && isNaN(v.$modelValue) || this.$$parseAndValidate();
        }, this.$$runValidators = function(e, t, r, i) {
            function o() {
                var e = !0;
                return s(v.$validators, function(n, i) {
                    var s = n(t, r);
                    e = e && s, a(i, s);
                }), e ? !0 : (s(v.$asyncValidators, function(e, t) {
                    a(t, null);
                }), !1);
            }
            function u() {
                var e = [], i = !0;
                s(v.$asyncValidators, function(s, o) {
                    var u = s(t, r);
                    if (!u || !S(u.then)) throw ns("$asyncValidators", u);
                    a(o, n), e.push(u.then(function() {
                        a(o, !0);
                    }, function(e) {
                        i = !1, a(o, !1);
                    }));
                }), e.length ? l.all(e).then(function() {
                    f(i);
                }, p) : f(!0);
            }
            function a(e, t) {
                c === x && v.$setValidity(e, t);
            }
            function f(e) {
                c === x && i(e);
            }
            x++;
            var c = x;
            (function(e) {
                var t = v.$$parserName || "parse";
                if (e === n) a(t, null); else if (a(t, e), !e) return s(v.$validators, function(e, t) {
                    a(t, null);
                }), s(v.$asyncValidators, function(e, t) {
                    a(t, null);
                }), !1;
                return !0;
            })(e) ? o() ? u() : f(!1) : f(!1);
        }, this.$commitViewValue = function() {
            var e = v.$viewValue;
            a.cancel(d);
            if (v.$$lastCommittedViewValue !== e || "" === e && v.$$hasNativeValidators) v.$$lastCommittedViewValue = e, v.$pristine && (v.$dirty = !0, v.$pristine = !1, u.removeClass(i, us), u.addClass(i, as), E.$setDirty()), this.$$parseAndValidate();
        }, this.$$parseAndValidate = function() {
            var e = v.$$lastCommittedViewValue, t = e, r = m(t) ? n : !0;
            if (r) for (var i = 0; i < v.$parsers.length; i++) if (t = v.$parsers[i](t), m(t)) {
                r = !1;
                break;
            }
            w(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = y());
            var s = v.$modelValue, o = v.$options && v.$options.allowInvalid;
            o && (v.$modelValue = t, v.$modelValue !== s && v.$$writeModelToScope()), v.$$runValidators(r, t, e, function(e) {
                o || (v.$modelValue = e ? t : n, v.$modelValue !== s && v.$$writeModelToScope());
            });
        }, this.$$writeModelToScope = function() {
            b(v.$modelValue), s(v.$viewChangeListeners, function(e) {
                try {
                    e();
                } catch (n) {
                    t(n);
                }
            });
        }, this.$setViewValue = function(e, t) {
            v.$viewValue = e, v.$options && !v.$options.updateOnDefault || v.$$debounceViewValueCommit(t);
        }, this.$$debounceViewValueCommit = function(t) {
            var n = 0, r = v.$options;
            r && g(r.debounce) && (r = r.debounce, w(r) ? n = r : w(r[t]) ? n = r[t] : w(r["default"]) && (n = r["default"])), a.cancel(d), n ? d = a(function() {
                v.$commitViewValue();
            }, n) : f.$$phase ? v.$commitViewValue() : e.$apply(function() {
                v.$commitViewValue();
            });
        }, e.$watch(function() {
            var e = y();
            if (e !== v.$modelValue) {
                v.$modelValue = e;
                for (var t = v.$formatters, r = t.length, i = e; r--; ) i = t[r](i);
                v.$viewValue !== i && (v.$viewValue = v.$$lastCommittedViewValue = i, v.$render(), v.$$runValidators(n, e, i, p));
            }
            return e;
        });
    } ], cs = function() {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: ls,
            priority: 1,
            compile: function(e) {
                return e.addClass(us).addClass("ng-untouched").addClass(ss), {
                    pre: function(e, t, n, r) {
                        var i = r[0], s = r[1] || Ui;
                        i.$$setOptions(r[2] && r[2].$options), s.$addControl(i), n.$observe("name", function(e) {
                            i.$name !== e && s.$$renameControl(i, e);
                        }), e.$on("$destroy", function() {
                            s.$removeControl(i);
                        });
                    },
                    post: function(e, t, n, r) {
                        var i = r[0];
                        i.$options && i.$options.updateOn && t.on(i.$options.updateOn, function(e) {
                            i.$$debounceViewValueCommit(e && e.type);
                        }), t.on("blur", function(t) {
                            i.$touched || e.$apply(function() {
                                i.$setTouched();
                            });
                        });
                    }
                };
            }
        };
    }, hs = v({
        restrict: "A",
        require: "ngModel",
        link: function(e, t, n, r) {
            r.$viewChangeListeners.push(function() {
                e.$eval(n.ngChange);
            });
        }
    }), ps = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, r) {
                r && (n.required = !0, r.$validators.required = function(e) {
                    return !n.required || !r.$isEmpty(e);
                }, n.$observe("required", function() {
                    r.$validate();
                }));
            }
        };
    }, ds = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, i, s) {
                if (s) {
                    var o, u = i.ngPattern || i.pattern;
                    i.$observe("pattern", function(e) {
                        b(e) && 0 < e.length && (e = new RegExp(e));
                        if (e && !e.test) throw r("ngPattern")("noregexp", u, e, I(t));
                        o = e || n, s.$validate();
                    }), s.$validators.pattern = function(e) {
                        return s.$isEmpty(e) || m(o) || o.test(e);
                    };
                }
            }
        };
    }, vs = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, r) {
                if (r) {
                    var i = 0;
                    n.$observe("maxlength", function(e) {
                        i = c(e) || 0, r.$validate();
                    }), r.$validators.maxlength = function(e, t) {
                        return r.$isEmpty(e) || t.length <= i;
                    };
                }
            }
        };
    }, ms = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, t, n, r) {
                if (r) {
                    var i = 0;
                    n.$observe("minlength", function(e) {
                        i = c(e) || 0, r.$validate();
                    }), r.$validators.minlength = function(e, t) {
                        return r.$isEmpty(e) || t.length >= i;
                    };
                }
            }
        };
    }, gs = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(e, t, r, i) {
                var o = t.attr(r.$attr.ngList) || ", ", u = "false" !== r.ngTrim, a = u ? Ar(o) : o;
                i.$parsers.push(function(e) {
                    if (!m(e)) {
                        var t = [];
                        return e && s(e.split(a), function(e) {
                            e && t.push(u ? Ar(e) : e);
                        }), t;
                    }
                }), i.$formatters.push(function(e) {
                    return Lr(e) ? e.join(o) : n;
                }), i.$isEmpty = function(e) {
                    return !e || !e.length;
                };
            }
        };
    }, ys = /^(true|false|\d+)$/, bs = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(e, t) {
                return ys.test(t.ngValue) ? function(e, t, n) {
                    n.$set("value", e.$eval(n.ngValue));
                } : function(e, t, n) {
                    e.$watch(n.ngValue, function(e) {
                        n.$set("value", e);
                    });
                };
            }
        };
    }, ws = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(e, t) {
                var r = this;
                this.$options = e.$eval(t.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Ar(this.$options.updateOn.replace(ts, function() {
                    return r.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, Es = [ "$compile", function(e) {
        return {
            restrict: "AC",
            compile: function(t) {
                return e.$$addBindingClass(t), function(t, r, i) {
                    e.$$addBindingInfo(r, i.ngBind), r = r[0], t.$watch(i.ngBind, function(e) {
                        r.textContent = e === n ? "" : e;
                    });
                };
            }
        };
    } ], Ss = [ "$interpolate", "$compile", function(e, t) {
        return {
            compile: function(r) {
                return t.$$addBindingClass(r), function(r, i, s) {
                    r = e(i.attr(s.$attr.ngBindTemplate)), t.$$addBindingInfo(i, r.expressions), i = i[0], s.$observe("ngBindTemplate", function(e) {
                        i.textContent = e === n ? "" : e;
                    });
                };
            }
        };
    } ], xs = [ "$sce", "$parse", "$compile", function(e, t, n) {
        return {
            restrict: "A",
            compile: function(r, i) {
                var s = t(i.ngBindHtml), o = t(i.ngBindHtml, function(e) {
                    return (e || "").toString();
                });
                return n.$$addBindingClass(r), function(t, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(o, function() {
                        r.html(e.getTrustedHtml(s(t)) || "");
                    });
                };
            }
        };
    } ], Ts = hr("", !0), Ns = hr("Odd", 0), Cs = hr("Even", 1), ks = nr({
        compile: function(e, t) {
            t.$set("ngCloak", n), e.removeClass("ng-cloak");
        }
    }), Ls = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], As = {}, Os = {
        blur: !0,
        focus: !0
    };
    s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = qt("ng-" + e);
        As[t] = [ "$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, s) {
                    var o = n(s[t]);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                o(t, {
                                    $event: n
                                });
                            };
                            Os[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i);
                        });
                    };
                }
            };
        } ];
    });
    var Ms = [ "$animate", function(e) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(n, r, i, s, o) {
                var u, a, f;
                n.$watch(i.ngIf, function(n) {
                    n ? a || o(function(n, s) {
                        a = s, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), u = {
                            clone: n
                        }, e.enter(n, r.parent(), r);
                    }) : (f && (f.remove(), f = null), a && (a.$destroy(), a = null), u && (f = nt(u.clone), e.leave(f).then(function() {
                        f = null;
                    }), u = null));
                });
            }
        };
    } ], _s = [ "$templateRequest", "$anchorScroll", "$animate", "$sce", function(e, t, n, r) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Nr.noop,
            compile: function(i, s) {
                var o = s.ngInclude || s.src, u = s.onload || "", a = s.autoscroll;
                return function(i, s, f, l, c) {
                    var h = 0, p, d, v, m = function() {
                        d && (d.remove(), d = null), p && (p.$destroy(), p = null), v && (n.leave(v).then(function() {
                            d = null;
                        }), d = v, v = null);
                    };
                    i.$watch(r.parseAsResourceUrl(o), function(r) {
                        var o = function() {
                            !g(a) || a && !i.$eval(a) || t();
                        }, f = ++h;
                        r ? (e(r, !0).then(function(e) {
                            if (f === h) {
                                var t = i.$new();
                                l.template = e, e = c(t, function(e) {
                                    m(), n.enter(e, null, s).then(o);
                                }), p = t, v = e, p.$emit("$includeContentLoaded", r), i.$eval(u);
                            }
                        }, function() {
                            f === h && (m(), i.$emit("$includeContentError", r));
                        }), i.$emit("$includeContentRequested", r)) : (m(), l.template = null);
                    });
                };
            }
        };
    } ], Ds = [ "$compile", function(e) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(r, i, s, o) {
                /SVG/.test(i[0].toString()) ? (i.empty(), e(at(o.template, t).childNodes)(r, function(e) {
                    i.append(e);
                }, n, n, i)) : (i.html(o.template), e(i.contents())(r));
            }
        };
    } ], Ps = nr({
        priority: 450,
        compile: function() {
            return {
                pre: function(e, t, n) {
                    e.$eval(n.ngInit);
                }
            };
        }
    }), Hs = nr({
        terminal: !0,
        priority: 1e3
    }), Bs = [ "$locale", "$interpolate", function(e, t) {
        var n = /{}/g;
        return {
            restrict: "EA",
            link: function(r, i, o) {
                var u = o.count, a = o.$attr.when && i.attr(o.$attr.when), f = o.offset || 0, l = r.$eval(a) || {}, c = {}, h = t.startSymbol(), p = t.endSymbol(), d = /^when(Minus)?(.+)$/;
                s(o, function(e, t) {
                    d.test(t) && (l[dr(t.replace("when", "").replace("Minus", "-"))] = i.attr(o.$attr[t]));
                }), s(l, function(e, r) {
                    c[r] = t(e.replace(n, h + u + "-" + f + p));
                }), r.$watch(function() {
                    var t = parseFloat(r.$eval(u));
                    return isNaN(t) ? "" : (t in l || (t = e.pluralCat(t - f)), c[t](r));
                }, function(e) {
                    i.text(e);
                });
            }
        };
    } ], js = [ "$parse", "$animate", function(e, o) {
        var u = r("ngRepeat"), a = function(e, t, n, r, i, s, o) {
            e[n] = r, i && (e[i] = s), e.$index = t, e.$first = 0 === t, e.$last = t === o - 1, e.$middle = !e.$first && !e.$last, e.$odd = !(e.$even = 0 === (t & 1));
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(r, f) {
                var l = f.ngRepeat, c = t.createComment(" end ngRepeat: " + l + " "), h = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!h) throw u("iexp", l);
                var p = h[1], d = h[2], v = h[3], m = h[4], h = p.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!h) throw u("iidexp", p);
                var g = h[3] || h[1], y = h[2];
                if (v && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(v))) throw u("badident", v);
                var b, w, E, S, x = {
                    $id: Lt
                };
                return m ? b = e(m) : (E = function(e, t) {
                    return Lt(t);
                }, S = function(e) {
                    return e;
                }), function(e, t, r, f, h) {
                    b && (w = function(t, n, r) {
                        return y && (x[y] = t), x[g] = n, x.$index = r, b(e, x);
                    });
                    var p = rt();
                    e.$watchCollection(d, function(r) {
                        var f, d, m = t[0], b, x = rt(), T, N, C, k, L, A, O;
                        v && (e[v] = r);
                        if (i(r)) L = r, d = w || E; else {
                            d = w || S, L = [];
                            for (O in r) r.hasOwnProperty(O) && "$" != O.charAt(0) && L.push(O);
                            L.sort();
                        }
                        T = L.length, O = Array(T);
                        for (f = 0; f < T; f++) if (N = r === L ? f : L[f], C = r[N], k = d(N, C, f), p[k]) A = p[k], delete p[k], x[k] = A, O[f] = A; else {
                            if (x[k]) throw s(O, function(e) {
                                e && e.scope && (p[e.id] = e);
                            }), u("dupes", l, k, j(C));
                            O[f] = {
                                id: k,
                                scope: n,
                                clone: n
                            }, x[k] = !0;
                        }
                        for (b in p) {
                            A = p[b], k = nt(A.clone), o.leave(k);
                            if (k[0].parentNode) for (f = 0, d = k.length; f < d; f++) k[f].$$NG_REMOVED = !0;
                            A.scope.$destroy();
                        }
                        for (f = 0; f < T; f++) if (N = r === L ? f : L[f], C = r[N], A = O[f], A.scope) {
                            b = m;
                            do b = b.nextSibling; while (b && b.$$NG_REMOVED);
                            A.clone[0] != b && o.move(nt(A.clone), null, yr(m)), m = A.clone[A.clone.length - 1], a(A.scope, f, g, C, y, N, T);
                        } else h(function(e, t) {
                            A.scope = t;
                            var n = c.cloneNode(!1);
                            e[e.length++] = n, o.enter(e, null, yr(m)), m = n, A.clone = e, x[A.id] = A, a(A.scope, f, g, C, y, N, T);
                        });
                        p = x;
                    });
                };
            }
        };
    } ], Fs = [ "$animate", function(e) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(t, n, r) {
                t.$watch(r.ngShow, function(t) {
                    e[t ? "removeClass" : "addClass"](n, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], Is = [ "$animate", function(e) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(t, n, r) {
                t.$watch(r.ngHide, function(t) {
                    e[t ? "addClass" : "removeClass"](n, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], qs = nr(function(e, t, n) {
        e.$watch(n.ngStyle, function(e, n) {
            n && e !== n && s(n, function(e, n) {
                t.css(n, "");
            }), e && t.css(e);
        }, !0);
    }), Rs = [ "$animate", function(e) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(n, r, i, o) {
                var u = [], a = [], f = [], l = [], c = function(e, t) {
                    return function() {
                        e.splice(t, 1);
                    };
                };
                n.$watch(i.ngSwitch || i.on, function(n) {
                    var r, i;
                    r = 0;
                    for (i = f.length; r < i; ++r) e.cancel(f[r]);
                    r = f.length = 0;
                    for (i = l.length; r < i; ++r) {
                        var h = nt(a[r].clone);
                        l[r].$destroy(), (f[r] = e.leave(h)).then(c(f, r));
                    }
                    a.length = 0, l.length = 0, (u = o.cases["!" + n] || o.cases["?"]) && s(u, function(n) {
                        n.transclude(function(r, i) {
                            l.push(i);
                            var s = n.element;
                            r[r.length++] = t.createComment(" end ngSwitchWhen: "), a.push({
                                clone: r
                            }), e.enter(r, s.parent(), s);
                        });
                    });
                });
            }
        };
    } ], Us = nr({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: t
            });
        }
    }), zs = nr({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                transclude: i,
                element: t
            });
        }
    }), Ws = nr({
        restrict: "EAC",
        link: function(e, t, n, i, s) {
            if (!s) throw r("ngTransclude")("orphan", I(t));
            s(function(e) {
                t.empty(), t.append(e);
            });
        }
    }), Xs = [ "$templateCache", function(e) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(t, n) {
                "text/ng-template" == n.type && e.put(n.id, t[0].text);
            }
        };
    } ], Vs = r("ngOptions"), $s = v({
        restrict: "A",
        terminal: !0
    }), Js = [ "$compile", "$parse", function(e, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, o = {
            $setViewValue: p
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(e, t, n) {
                var r = this, i = {}, s = o, u;
                r.databound = n.ngModel, r.init = function(e, t, n) {
                    s = e, u = n;
                }, r.addOption = function(t, n) {
                    et(t, '"option value"'), i[t] = !0, s.$viewValue == t && (e.val(t), u.parent() && u.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0);
                }, r.removeOption = function(e) {
                    this.hasOption(e) && (delete i[e], s.$viewValue == e && this.renderUnknownOption(e));
                }, r.renderUnknownOption = function(t) {
                    t = "? " + Lt(t) + " ?", u.val(t), e.prepend(u), e.val(t), u.prop("selected", !0);
                }, r.hasOption = function(e) {
                    return i.hasOwnProperty(e);
                }, t.$on("$destroy", function() {
                    r.renderUnknownOption = p;
                });
            } ],
            link: function(o, u, a, f) {
                function l(e, t, n, r) {
                    n.$render = function() {
                        var e = n.$viewValue;
                        r.hasOption(e) ? (x.parent() && x.remove(), t.val(e), "" === e && b.prop("selected", !0)) : m(e) && b ? t.val("") : r.renderUnknownOption(e);
                    }, t.on("change", function() {
                        e.$apply(function() {
                            x.parent() && x.remove(), n.$setViewValue(t.val());
                        });
                    });
                }
                function c(e, t, n) {
                    var r;
                    n.$render = function() {
                        var e = new At(n.$viewValue);
                        s(t.find("option"), function(t) {
                            t.selected = g(e.get(t.value));
                        });
                    }, e.$watch(function() {
                        D(r, n.$viewValue) || (r = _(n.$viewValue), n.$render());
                    }), t.on("change", function() {
                        e.$apply(function() {
                            var e = [];
                            s(t.find("option"), function(t) {
                                t.selected && e.push(t.value);
                            }), n.$setViewValue(e);
                        });
                    });
                }
                function h(t, o, u) {
                    function a(e, n, r) {
                        return D[x] = r, C && (D[C] = n), e(t, D);
                    }
                    function f(e) {
                        var t;
                        if (d) if (O && Lr(e)) {
                            t = new At([]);
                            for (var n = 0; n < e.length; n++) t.put(a(O, null, e[n]), !0);
                        } else t = new At(e); else O && (e = a(O, null, e));
                        return function(n, r) {
                            var i;
                            return i = O ? O : N ? N : L, d ? g(t.remove(a(i, n, r))) : e == a(i, n, r);
                        };
                    }
                    function l() {
                        w || (t.$$postDigest(h), w = !0);
                    }
                    function c(e, t, n) {
                        e[t] = e[t] || 0, e[t] += n ? 1 : -1;
                    }
                    function h() {
                        w = !1;
                        var e = {
                            "": []
                        }, n = [ "" ], r, i, l, h, v;
                        l = u.$viewValue, h = A(t) || [];
                        var m = C ? Object.keys(h).sort() : h, x, T, N, L, P = {};
                        v = f(l);
                        var H = !1, B, j;
                        M = {};
                        for (L = 0; N = m.length, L < N; L++) {
                            x = L;
                            if (C && (x = m[L], "$" === x.charAt(0))) continue;
                            T = h[x], r = a(k, x, T) || "", (i = e[r]) || (i = e[r] = [], n.push(r)), r = v(x, T), H = H || r, T = a(b, x, T), T = g(T) ? T : "", j = O ? O(t, D) : C ? m[L] : L, O && (M[j] = x), i.push({
                                id: j,
                                label: T,
                                selected: r
                            });
                        }
                        d || (y || null === l ? e[""].unshift({
                            id: "",
                            label: "",
                            selected: !H
                        }) : H || e[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), x = 0;
                        for (m = n.length; x < m; x++) {
                            r = n[x], i = e[r], _.length <= x ? (l = {
                                element: S.clone().attr("label", r),
                                label: i.label
                            }, h = [ l ], _.push(h), o.append(l.element)) : (h = _[x], l = h[0], l.label != r && l.element.attr("label", l.label = r)), H = null, L = 0;
                            for (N = i.length; L < N; L++) r = i[L], (v = h[L + 1]) ? (H = v.element, v.label !== r.label && (c(P, v.label, !1), c(P, r.label, !0), H.text(v.label = r.label)), v.id !== r.id && H.val(v.id = r.id), H[0].selected !== r.selected && (H.prop("selected", v.selected = r.selected), gr && H.prop("selected", v.selected))) : ("" === r.id && y ? B = y : (B = E.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).text(r.label), h.push(v = {
                                element: B,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), c(P, r.label, !0), H ? H.after(B) : l.element.append(B), H = B);
                            for (L++; h.length > L; ) r = h.pop(), c(P, r.label, !1), r.element.remove();
                            s(P, function(e, t) {
                                0 < e ? p.addOption(t) : 0 > e && p.removeOption(t);
                            });
                        }
                        for (; _.length > x; ) _.pop()[0].element.remove();
                    }
                    var m;
                    if (!(m = v.match(i))) throw Vs("iexp", v, I(o));
                    var b = r(m[2] || m[1]), x = m[4] || m[6], T = / as /.test(m[0]) && m[1], N = T ? r(T) : null, C = m[5], k = r(m[3] || ""), L = r(m[2] ? m[1] : x), A = r(m[7]), O = m[8] ? r(m[8]) : null, M = {}, _ = [ [ {
                        element: o,
                        label: ""
                    } ] ], D = {};
                    y && (e(y)(t), y.removeClass("ng-scope"), y.remove()), o.empty(), o.on("change", function() {
                        t.$apply(function() {
                            var e = A(t) || [], r;
                            if (d) r = [], s(o.val(), function(t) {
                                t = O ? M[t] : t, r.push("?" === t ? n : "" === t ? null : a(N ? N : L, t, e[t]));
                            }); else {
                                var i = O ? M[o.val()] : o.val();
                                r = "?" === i ? n : "" === i ? null : a(N ? N : L, i, e[i]);
                            }
                            u.$setViewValue(r), h();
                        });
                    }), u.$render = h, t.$watchCollection(A, l), t.$watchCollection(function() {
                        var e = A(t), n;
                        if (e && Lr(e)) {
                            n = Array(e.length);
                            for (var r = 0, i = e.length; r < i; r++) n[r] = a(b, r, e[r]);
                        } else if (e) for (r in n = {}, e) e.hasOwnProperty(r) && (n[r] = a(b, r, e[r]));
                        return n;
                    }, l), d && t.$watchCollection(function() {
                        return u.$modelValue;
                    }, l);
                }
                if (f[1]) {
                    var p = f[0];
                    f = f[1];
                    var d = a.multiple, v = a.ngOptions, y = !1, b, w = !1, E = yr(t.createElement("option")), S = yr(t.createElement("optgroup")), x = E.clone();
                    a = 0;
                    for (var T = u.children(), N = T.length; a < N; a++) if ("" === T[a].value) {
                        b = y = T.eq(a);
                        break;
                    }
                    p.init(f, y, x), d && (f.$isEmpty = function(e) {
                        return !e || 0 === e.length;
                    }), v ? h(o, u, f) : d ? c(o, u, f) : l(o, u, f, p);
                }
            }
        };
    } ], Ks = [ "$interpolate", function(e) {
        var t = {
            addOption: p,
            removeOption: p
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(n, r) {
                if (m(r.value)) {
                    var i = e(n.text(), !0);
                    i || r.$set("value", n.text());
                }
                return function(e, n, r) {
                    var s = n.parent(), o = s.data("$selectController") || s.parent().data("$selectController");
                    o && o.databound || (o = t), i ? e.$watch(i, function(e, t) {
                        r.$set("value", e), t !== e && o.removeOption(t), o.addOption(e, n);
                    }) : o.addOption(r.value, n), n.on("$destroy", function() {
                        o.removeOption(r.value);
                    });
                };
            }
        };
    } ], Qs = v({
        restrict: "E",
        terminal: !1
    });
    e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (G(), st(Nr), yr(t).ready(function() {
        V(t, $);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), define("angular", [ "jquery" ], function(e) {
    return function() {
        var t, n;
        return t || e.angular;
    };
}(this)), function() {
    var e = this, t = e._, n = Array.prototype, r = Object.prototype, i = Function.prototype, s = n.push, o = n.slice, u = n.concat, a = r.toString, f = r.hasOwnProperty, l = Array.isArray, c = Object.keys, h = i.bind, p = function(e) {
        return e instanceof p ? e : this instanceof p ? void (this._wrapped = e) : new p(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : e._ = p, p.VERSION = "1.7.0";
    var d = function(e, t, n) {
        if (t === void 0) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
                return e.call(t, n);
            };
          case 2:
            return function(n, r) {
                return e.call(t, n, r);
            };
          case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i);
            };
          case 4:
            return function(n, r, i, s) {
                return e.call(t, n, r, i, s);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    };
    p.iteratee = function(e, t, n) {
        return null == e ? p.identity : p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e);
    }, p.each = p.forEach = function(e, t, n) {
        if (null == e) return e;
        t = d(t, n);
        var r, i = e.length;
        if (i === +i) for (r = 0; i > r; r++) t(e[r], r, e); else {
            var s = p.keys(e);
            for (r = 0, i = s.length; i > r; r++) t(e[s[r]], s[r], e);
        }
        return e;
    }, p.map = p.collect = function(e, t, n) {
        if (null == e) return [];
        t = p.iteratee(t, n);
        for (var r, i = e.length !== +e.length && p.keys(e), s = (i || e).length, o = Array(s), u = 0; s > u; u++) r = i ? i[u] : u, o[u] = t(e[r], r, e);
        return o;
    };
    var v = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function(e, t, n, r) {
        null == e && (e = []), t = d(t, r, 4);
        var i, s = e.length !== +e.length && p.keys(e), o = (s || e).length, u = 0;
        if (arguments.length < 3) {
            if (!o) throw new TypeError(v);
            n = e[s ? s[u++] : u++];
        }
        for (; o > u; u++) i = s ? s[u] : u, n = t(n, e[i], i, e);
        return n;
    }, p.reduceRight = p.foldr = function(e, t, n, r) {
        null == e && (e = []), t = d(t, r, 4);
        var i, s = e.length !== +e.length && p.keys(e), o = (s || e).length;
        if (arguments.length < 3) {
            if (!o) throw new TypeError(v);
            n = e[s ? s[--o] : --o];
        }
        for (; o--; ) i = s ? s[o] : o, n = t(n, e[i], i, e);
        return n;
    }, p.find = p.detect = function(e, t, n) {
        var r;
        return t = p.iteratee(t, n), p.some(e, function(e, n, i) {
            return t(e, n, i) ? (r = e, !0) : void 0;
        }), r;
    }, p.filter = p.select = function(e, t, n) {
        var r = [];
        return null == e ? r : (t = p.iteratee(t, n), p.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e);
        }), r);
    }, p.reject = function(e, t, n) {
        return p.filter(e, p.negate(p.iteratee(t)), n);
    }, p.every = p.all = function(e, t, n) {
        if (null == e) return !0;
        t = p.iteratee(t, n);
        var r, i, s = e.length !== +e.length && p.keys(e), o = (s || e).length;
        for (r = 0; o > r; r++) if (i = s ? s[r] : r, !t(e[i], i, e)) return !1;
        return !0;
    }, p.some = p.any = function(e, t, n) {
        if (null == e) return !1;
        t = p.iteratee(t, n);
        var r, i, s = e.length !== +e.length && p.keys(e), o = (s || e).length;
        for (r = 0; o > r; r++) if (i = s ? s[r] : r, t(e[i], i, e)) return !0;
        return !1;
    }, p.contains = p.include = function(e, t) {
        return null == e ? !1 : (e.length !== +e.length && (e = p.values(e)), p.indexOf(e, t) >= 0);
    }, p.invoke = function(e, t) {
        var n = o.call(arguments, 2), r = p.isFunction(t);
        return p.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n);
        });
    }, p.pluck = function(e, t) {
        return p.map(e, p.property(t));
    }, p.where = function(e, t) {
        return p.filter(e, p.matches(t));
    }, p.findWhere = function(e, t) {
        return p.find(e, p.matches(t));
    }, p.max = function(e, t, n) {
        var r, i, s = -1 / 0, o = -1 / 0;
        if (null == t && null != e) {
            e = e.length === +e.length ? e : p.values(e);
            for (var u = 0, a = e.length; a > u; u++) r = e[u], r > s && (s = r);
        } else t = p.iteratee(t, n), p.each(e, function(e, n, r) {
            i = t(e, n, r), (i > o || i === -1 / 0 && s === -1 / 0) && (s = e, o = i);
        });
        return s;
    }, p.min = function(e, t, n) {
        var r, i, s = 1 / 0, o = 1 / 0;
        if (null == t && null != e) {
            e = e.length === +e.length ? e : p.values(e);
            for (var u = 0, a = e.length; a > u; u++) r = e[u], s > r && (s = r);
        } else t = p.iteratee(t, n), p.each(e, function(e, n, r) {
            i = t(e, n, r), (o > i || 1 / 0 === i && 1 / 0 === s) && (s = e, o = i);
        });
        return s;
    }, p.shuffle = function(e) {
        for (var t, n = e && e.length === +e.length ? e : p.values(e), r = n.length, i = Array(r), s = 0; r > s; s++) t = p.random(0, s), t !== s && (i[s] = i[t]), i[t] = n[s];
        return i;
    }, p.sample = function(e, t, n) {
        return null == t || n ? (e.length !== +e.length && (e = p.values(e)), e[p.random(e.length - 1)]) : p.shuffle(e).slice(0, Math.max(0, t));
    }, p.sortBy = function(e, t, n) {
        return t = p.iteratee(t, n), p.pluck(p.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (r > n || r === void 0) return -1;
            }
            return e.index - t.index;
        }), "value");
    };
    var m = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = p.iteratee(n, r), p.each(t, function(r, s) {
                var o = n(r, s, t);
                e(i, r, o);
            }), i;
        };
    };
    p.groupBy = m(function(e, t, n) {
        p.has(e, n) ? e[n].push(t) : e[n] = [ t ];
    }), p.indexBy = m(function(e, t, n) {
        e[n] = t;
    }), p.countBy = m(function(e, t, n) {
        p.has(e, n) ? e[n]++ : e[n] = 1;
    }), p.sortedIndex = function(e, t, n, r) {
        n = p.iteratee(n, r, 1);
        for (var i = n(t), s = 0, o = e.length; o > s; ) {
            var u = s + o >>> 1;
            n(e[u]) < i ? s = u + 1 : o = u;
        }
        return s;
    }, p.toArray = function(e) {
        return e ? p.isArray(e) ? o.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : [];
    }, p.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : p.keys(e).length;
    }, p.partition = function(e, t, n) {
        t = p.iteratee(t, n);
        var r = [], i = [];
        return p.each(e, function(e, n, s) {
            (t(e, n, s) ? r : i).push(e);
        }), [ r, i ];
    }, p.first = p.head = p.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : o.call(e, 0, t);
    }, p.initial = function(e, t, n) {
        return o.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
    }, p.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0));
    }, p.rest = p.tail = p.drop = function(e, t, n) {
        return o.call(e, null == t || n ? 1 : t);
    }, p.compact = function(e) {
        return p.filter(e, p.identity);
    };
    var g = function(e, t, n, r) {
        if (t && p.every(e, p.isArray)) return u.apply(r, e);
        for (var i = 0, o = e.length; o > i; i++) {
            var a = e[i];
            p.isArray(a) || p.isArguments(a) ? t ? s.apply(r, a) : g(a, t, n, r) : n || r.push(a);
        }
        return r;
    };
    p.flatten = function(e, t) {
        return g(e, t, !1, []);
    }, p.without = function(e) {
        return p.difference(e, o.call(arguments, 1));
    }, p.uniq = p.unique = function(e, t, n, r) {
        if (null == e) return [];
        p.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = p.iteratee(n, r));
        for (var i = [], s = [], o = 0, u = e.length; u > o; o++) {
            var a = e[o];
            if (t) o && s === a || i.push(a), s = a; else if (n) {
                var f = n(a, o, e);
                p.indexOf(s, f) < 0 && (s.push(f), i.push(a));
            } else p.indexOf(i, a) < 0 && i.push(a);
        }
        return i;
    }, p.union = function() {
        return p.uniq(g(arguments, !0, !0, []));
    }, p.intersection = function(e) {
        if (null == e) return [];
        for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
            var s = e[r];
            if (!p.contains(t, s)) {
                for (var o = 1; n > o && p.contains(arguments[o], s); o++) ;
                o === n && t.push(s);
            }
        }
        return t;
    }, p.difference = function(e) {
        var t = g(o.call(arguments, 1), !0, !0, []);
        return p.filter(e, function(e) {
            return !p.contains(t, e);
        });
    }, p.zip = function(e) {
        if (null == e) return [];
        for (var t = p.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++) n[r] = p.pluck(arguments, r);
        return n;
    }, p.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n;
    }, p.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0, i = e.length;
        if (n) {
            if ("number" != typeof n) return r = p.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n;
        }
        for (; i > r; r++) if (e[r] === t) return r;
        return -1;
    }, p.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = e.length;
        for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0; ) if (e[r] === t) return r;
        return -1;
    }, p.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), s = 0; r > s; s++, e += n) i[s] = e;
        return i;
    };
    var y = function() {};
    p.bind = function(e, t) {
        var n, r;
        if (h && e.bind === h) return h.apply(e, o.call(arguments, 1));
        if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
        return n = o.call(arguments, 2), r = function() {
            if (this instanceof r) {
                y.prototype = e.prototype;
                var i = new y;
                y.prototype = null;
                var s = e.apply(i, n.concat(o.call(arguments)));
                return p.isObject(s) ? s : i;
            }
            return e.apply(t, n.concat(o.call(arguments)));
        };
    }, p.partial = function(e) {
        var t = o.call(arguments, 1);
        return function() {
            for (var n = 0, r = t.slice(), i = 0, s = r.length; s > i; i++) r[i] === p && (r[i] = arguments[n++]);
            for (; n < arguments.length; ) r.push(arguments[n++]);
            return e.apply(this, r);
        };
    }, p.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (t = 1; r > t; t++) n = arguments[t], e[n] = p.bind(e[n], e);
        return e;
    }, p.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache, s = t ? t.apply(this, arguments) : r;
            return p.has(i, s) || (i[s] = e.apply(this, arguments)), i[s];
        };
        return n.cache = {}, n;
    }, p.delay = function(e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, p.defer = function(e) {
        return p.delay.apply(p, [ e, 1 ].concat(o.call(arguments, 1)));
    }, p.throttle = function(e, t, n) {
        var r, i, s, o = null, u = 0;
        n || (n = {});
        var a = function() {
            u = n.leading === !1 ? 0 : p.now(), o = null, s = e.apply(r, i), o || (r = i = null);
        };
        return function() {
            var f = p.now();
            u || n.leading !== !1 || (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, 0 >= l || l > t ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), o || (r = i = null)) : o || n.trailing === !1 || (o = setTimeout(a, l)), s;
        };
    }, p.debounce = function(e, t, n) {
        var r, i, s, o, u, a = function() {
            var f = p.now() - o;
            t > f && f > 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)));
        };
        return function() {
            s = this, i = arguments, o = p.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u;
        };
    }, p.wrap = function(e, t) {
        return p.partial(t, e);
    }, p.negate = function(e) {
        return function() {
            return !e.apply(this, arguments);
        };
    }, p.compose = function() {
        var e = arguments, t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
            return r;
        };
    }, p.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) : void 0;
        };
    }, p.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 ? n = t.apply(this, arguments) : t = null, n;
        };
    }, p.once = p.partial(p.before, 2), p.keys = function(e) {
        if (!p.isObject(e)) return [];
        if (c) return c(e);
        var t = [];
        for (var n in e) p.has(e, n) && t.push(n);
        return t;
    }, p.values = function(e) {
        for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r;
    }, p.pairs = function(e) {
        for (var t = p.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [ t[i], e[t[i]] ];
        return r;
    }, p.invert = function(e) {
        for (var t = {}, n = p.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t;
    }, p.functions = p.methods = function(e) {
        var t = [];
        for (var n in e) p.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, p.extend = function(e) {
        if (!p.isObject(e)) return e;
        for (var t, n, r = 1, i = arguments.length; i > r; r++) {
            t = arguments[r];
            for (n in t) f.call(t, n) && (e[n] = t[n]);
        }
        return e;
    }, p.pick = function(e, t, n) {
        var r, i = {};
        if (null == e) return i;
        if (p.isFunction(t)) {
            t = d(t, n);
            for (r in e) {
                var s = e[r];
                t(s, r, e) && (i[r] = s);
            }
        } else {
            var a = u.apply([], o.call(arguments, 1));
            e = new Object(e);
            for (var f = 0, l = a.length; l > f; f++) r = a[f], r in e && (i[r] = e[r]);
        }
        return i;
    }, p.omit = function(e, t, n) {
        if (p.isFunction(t)) t = p.negate(t); else {
            var r = p.map(u.apply([], o.call(arguments, 1)), String);
            t = function(e, t) {
                return !p.contains(r, t);
            };
        }
        return p.pick(e, t, n);
    }, p.defaults = function(e) {
        if (!p.isObject(e)) return e;
        for (var t = 1, n = arguments.length; n > t; t++) {
            var r = arguments[t];
            for (var i in r) e[i] === void 0 && (e[i] = r[i]);
        }
        return e;
    }, p.clone = function(e) {
        return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e;
    }, p.tap = function(e, t) {
        return t(e), e;
    };
    var b = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
        var i = a.call(e);
        if (i !== a.call(t)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e === +t;
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = n.length; s--; ) if (n[s] === e) return r[s] === t;
        var o = e.constructor, u = t.constructor;
        if (o !== u && "constructor" in e && "constructor" in t && !(p.isFunction(o) && o instanceof o && p.isFunction(u) && u instanceof u)) return !1;
        n.push(e), r.push(t);
        var f, l;
        if ("[object Array]" === i) {
            if (f = e.length, l = f === t.length) for (; f-- && (l = b(e[f], t[f], n, r)); ) ;
        } else {
            var c, h = p.keys(e);
            if (f = h.length, l = p.keys(t).length === f) for (; f-- && (c = h[f], l = p.has(t, c) && b(e[c], t[c], n, r)); ) ;
        }
        return n.pop(), r.pop(), l;
    };
    p.isEqual = function(e, t) {
        return b(e, t, [], []);
    }, p.isEmpty = function(e) {
        if (null == e) return !0;
        if (p.isArray(e) || p.isString(e) || p.isArguments(e)) return 0 === e.length;
        for (var t in e) if (p.has(e, t)) return !1;
        return !0;
    }, p.isElement = function(e) {
        return !!e && 1 === e.nodeType;
    }, p.isArray = l || function(e) {
        return "[object Array]" === a.call(e);
    }, p.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e;
    }, p.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        p["is" + e] = function(t) {
            return a.call(t) === "[object " + e + "]";
        };
    }), p.isArguments(arguments) || (p.isArguments = function(e) {
        return p.has(e, "callee");
    }), "function" != typeof /./ && (p.isFunction = function(e) {
        return "function" == typeof e || !1;
    }), p.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, p.isNaN = function(e) {
        return p.isNumber(e) && e !== +e;
    }, p.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" === a.call(e);
    }, p.isNull = function(e) {
        return null === e;
    }, p.isUndefined = function(e) {
        return e === void 0;
    }, p.has = function(e, t) {
        return null != e && f.call(e, t);
    }, p.noConflict = function() {
        return e._ = t, this;
    }, p.identity = function(e) {
        return e;
    }, p.constant = function(e) {
        return function() {
            return e;
        };
    }, p.noop = function() {}, p.property = function(e) {
        return function(t) {
            return t[e];
        };
    }, p.matches = function(e) {
        var t = p.pairs(e), n = t.length;
        return function(e) {
            if (null == e) return !n;
            e = new Object(e);
            for (var r = 0; n > r; r++) {
                var i = t[r], s = i[0];
                if (i[1] !== e[s] || !(s in e)) return !1;
            }
            return !0;
        };
    }, p.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = d(t, n, 1);
        for (var i = 0; e > i; i++) r[i] = t(i);
        return r;
    }, p.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
    }, p.now = Date.now || function() {
        return (new Date).getTime();
    };
    var w = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, E = p.invert(w), S = function(e) {
        var t = function(t) {
            return e[t];
        }, n = "(?:" + p.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function(e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
        };
    };
    p.escape = S(w), p.unescape = S(E), p.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return p.isFunction(n) ? e[t]() : n;
    };
    var x = 0;
    p.uniqueId = function(e) {
        var t = ++x + "";
        return e ? e + t : t;
    }, p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/, N = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, C = /\\|'|\r|\n|\u2028|\u2029/g, k = function(e) {
        return "\\" + N[e];
    };
    p.template = function(e, t, n) {
        !t && n && (t = n), t = p.defaults({}, t, p.templateSettings);
        var r = RegExp([ (t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source ].join("|") + "|$", "g"), i = 0, s = "__p+='";
        e.replace(r, function(t, n, r, o, u) {
            return s += e.slice(i, u).replace(C, k), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t;
        }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", s);
        } catch (u) {
            throw u.source = s, u;
        }
        var a = function(e) {
            return o.call(this, e, p);
        }, f = t.variable || "obj";
        return a.source = "function(" + f + "){\n" + s + "}", a;
    }, p.chain = function(e) {
        var t = p(e);
        return t._chain = !0, t;
    };
    var L = function(e) {
        return this._chain ? p(e).chain() : e;
    };
    p.mixin = function(e) {
        p.each(p.functions(e), function(t) {
            var n = p[t] = e[t];
            p.prototype[t] = function() {
                var e = [ this._wrapped ];
                return s.apply(e, arguments), L.call(this, n.apply(p, e));
            };
        });
    }, p.mixin(p), p.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = n[e];
        p.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], L.call(this, n);
        };
    }), p.each([ "concat", "join", "slice" ], function(e) {
        var t = n[e];
        p.prototype[e] = function() {
            return L.call(this, t.apply(this._wrapped, arguments));
        };
    }), p.prototype.value = function() {
        return this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return p;
    });
}.call(this), define("sharedLib/fix-variables", [ "underscore" ], function(e) {
    var t = function() {
        var t = {}, n = Object.prototype.hasOwnProperty, r = {
            string: 1,
            number: 1,
            "boolean": 1,
            object: 1
        }, i = (Math.random() + "_").slice(2);
        return {
            set: function(e, s) {
                return this.isDefined(e) ? !1 : n.call(r, typeof s) ? (t[i + e] = s, !0) : !1;
            },
            isDefined: function(e) {
                return n.call(t, i + e);
            },
            get: function(n) {
                return this.isDefined(n) ? e.extend(t[i + n]) : null;
            }
        };
    }();
    return t;
}), define("constants/user-roles", [ "underscore", "sharedLib/fix-variables" ], function(e, t) {
    var n = e.extend(t);
    return n.set("constants.userRoles", {
        admin: "admin",
        all: "*"
    }), n.get("constants.userRoles");
}), define("future-states", [ "constants/user-roles" ], function(e) {
    return [ {
        stateName: "home",
        urlPrefix: "/",
        templateUrl: "views/home.html",
        type: "requireCtrl",
        controllerPath: "controllers/home-controller",
        controllerName: "HomeController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Child Care Service",
                description: "We provide high quality child care service supported by Integricare.The service is operated by experienced diploma qualification educator."
            }
        }
    }, {
        stateName: "contact",
        urlPrefix: "/contact",
        templateUrl: "views/contact.html",
        type: "requireCtrl",
        controllerPath: "controllers/contact-controller",
        controllerName: "ContactController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Near Rockdale and Banksia train station",
                description: "Our location is near Rockdale and Banksia train station."
            }
        }
    }, {
        stateName: "services",
        urlPrefix: "/services",
        templateUrl: "views/services.html",
        type: "requireCtrl",
        controllerPath: "controllers/services-controller",
        controllerName: "ServicesController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Family Day Care, Before/After school care, Vocation care",
                description: "We provide Family Day Care, Before/After school care and Vocation care."
            }
        }
    }, {
        stateName: "philosophy",
        urlPrefix: "/philosophy",
        templateUrl: "views/philosophy.html",
        type: "requireCtrl",
        controllerPath: "controllers/philosophy-controller",
        controllerName: "PhilosophyController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Unlocking child's full potential",
                description: "We believe early learning is the key to unlocking a child's full potential."
            }
        }
    }, {
        stateName: "photos",
        urlPrefix: "/photos",
        templateUrl: "views/photos.html",
        type: "requireCtrl",
        controllerPath: "controllers/photos-controller",
        controllerName: "PhotosController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Playroom, Creative corner, Art and craft and outside playground",
                description: "Our facilities are Playroom, Creative corner, Art and craft and outside playground."
            }
        }
    }, {
        stateName: "login",
        urlPrefix: "/login",
        templateUrl: "views/auth/login.html",
        type: "requireCtrl",
        controllerPath: "controllers/auth/login-controller",
        controllerName: "LoginController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Login",
                description: "admin user authentication"
            }
        }
    }, {
        stateName: "signout",
        urlPrefix: "/signout",
        templateUrl: "views/auth/signout.html",
        type: "requireCtrl",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Sign out",
                description: "admin user sign out"
            }
        }
    }, {
        stateName: "dashboard",
        urlPrefix: "/dashboard",
        templateUrl: "views/dashboard.html",
        type: "requireCtrl",
        controllerPath: "controllers/dashboard-controller",
        controllerName: "DashboardController",
        data: {
            authorizedRoles: [ e.admin ],
            page: {
                title: "Admin Dashboard",
                description: ""
            }
        }
    }, {
        stateName: "signup",
        urlPrefix: "/signup",
        templateUrl: "views/signup.html",
        type: "requireCtrl",
        controllerPath: "controllers/signup-controller",
        controllerName: "SignupController",
        data: {
            authorizedRoles: [ e.all ],
            page: {
                title: "Signup",
                description: ""
            }
        }
    } ];
}), function(e, t, n) {
    t.module("ngResource", [ "ng" ]).factory("$resource", [ "$http", "$parse", function(e, r) {
        function i(e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(t ? null : /%20/g, "+");
        }
        function s(e, t) {
            this.template = e += "#", this.defaults = t || {};
            var n = this.urlParams = {};
            f(e.split(/\W/), function(t) {
                t && e.match(RegExp("[^\\\\]:" + t + "\\W")) && (n[t] = !0);
            }), this.template = e.replace(/\\:/g, ":");
        }
        function o(i, m, g) {
            function b(e, t) {
                var n = {}, t = l({}, m, t);
                return f(t, function(t, i) {
                    var s;
                    t.charAt && t.charAt(0) == "@" ? (s = t.substr(1), s = r(s)(e)) : s = t, n[i] = s;
                }), n;
            }
            function E(e) {
                c(e || {}, this);
            }
            var S = new s(i), g = l({}, u, g);
            return f(g, function(r, i) {
                r.method = t.uppercase(r.method);
                var s = r.method == "POST" || r.method == "PUT" || r.method == "PATCH";
                E[i] = function(t, n, i, o) {
                    var u = {}, d, m = a, g = null;
                    switch (arguments.length) {
                      case 4:
                        g = o, m = i;
                      case 3:
                      case 2:
                        if (!h(n)) {
                            u = t, d = n, m = i;
                            break;
                        }
                        if (h(t)) {
                            m = t, g = n;
                            break;
                        }
                        m = n, g = i;
                      case 1:
                        h(t) ? m = t : s ? d = t : u = t;
                        break;
                      case 0:
                        break;
                      default:
                        throw "Expected between 0-4 arguments [params, data, success, error], got " + arguments.length + " arguments.";
                    }
                    var y = this instanceof E ? this : r.isArray ? [] : new E(d);
                    return e({
                        method: r.method,
                        url: S.url(l({}, b(d, r.params || {}), u)),
                        data: d
                    }).then(function(e) {
                        var t = e.data;
                        t && (r.isArray ? (y.length = 0, f(t, function(e) {
                            y.push(new E(e));
                        })) : c(t, y)), (m || a)(y, e.headers);
                    }, g), y;
                }, E.prototype["$" + i] = function(e, t, r) {
                    var o = b(this), u = a, f;
                    switch (arguments.length) {
                      case 3:
                        o = e, u = t, f = r;
                        break;
                      case 2:
                      case 1:
                        h(e) ? (u = e, f = t) : (o = e, u = t || a);
                      case 0:
                        break;
                      default:
                        throw "Expected between 1-3 arguments [params, success, error], got " + arguments.length + " arguments.";
                    }
                    E[i].call(this, o, s ? this : n, u, f);
                };
            }), E.bind = function(e) {
                return o(i, l({}, m, e), g);
            }, E;
        }
        var u = {
            get: {
                method: "GET"
            },
            save: {
                method: "POST"
            },
            query: {
                method: "GET",
                isArray: !0
            },
            remove: {
                method: "DELETE"
            },
            "delete": {
                method: "DELETE"
            }
        }, a = t.noop, f = t.forEach, l = t.extend, c = t.copy, h = t.isFunction;
        return s.prototype = {
            url: function(e) {
                var n = this, r = this.template, s, o, e = e || {};
                f(this.urlParams, function(u, a) {
                    s = e.hasOwnProperty(a) ? e[a] : n.defaults[a], t.isDefined(s) && s !== null ? (o = i(s, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), r = r.replace(RegExp(":" + a + "(\\W)", "g"), o + "$1")) : r = r.replace(RegExp("(/?):" + a + "(\\W)", "g"), function(e, t, n) {
                        return n.charAt(0) == "/" ? n : t + n;
                    });
                });
                var r = r.replace(/\/?#$/, ""), u = [];
                return f(e, function(e, t) {
                    n.urlParams[t] || u.push(i(t) + "=" + i(e));
                }), u.sort(), r = r.replace(/\/*$/, ""), r + (u.length ? "?" + u.join("&") : "");
            }
        }, o;
    } ]);
}(window, window.angular), define("ngResource", [ "angular" ], function() {}), function(e, t, n) {
    t.module("ngCookies", [ "ng" ]).factory("$cookies", [ "$rootScope", "$browser", function(e, r) {
        var i = {}, s = {}, o, u = !1, a = t.copy, l = t.isUndefined;
        return r.addPollFn(function() {
            var t = r.cookies();
            o != t && (o = t, a(t, s), a(t, i), u && e.$apply());
        })(), u = !0, e.$watch(function() {
            var e, o, u;
            for (e in s) l(i[e]) && r.cookies(e, n);
            for (e in i) o = i[e], t.isString(o) || (o = "" + o, i[e] = o), o !== s[e] && (r.cookies(e, o), u = !0);
            if (u) for (e in o = r.cookies(), i) i[e] !== o[e] && (l(o[e]) ? delete i[e] : i[e] = o[e]);
        }), i;
    } ]).factory("$cookieStore", [ "$cookies", function(e) {
        return {
            get: function(n) {
                return (n = e[n]) ? t.fromJson(n) : n;
            },
            put: function(n, r) {
                e[n] = t.toJson(r);
            },
            remove: function(t) {
                delete e[t];
            }
        };
    } ]);
}(window, window.angular), define("ngCookies", [ "angular" ], function() {}), angular.module("ngProgress.provider", [ "ngProgress.directive" ]).provider("ngProgress", function() {
    this.autoStyle = !0, this.count = 0, this.height = "2px", this.color = "firebrick", this.$get = [ "$document", "$window", "$compile", "$rootScope", "$timeout", function(e, t, n, r, i) {
        var s = this.count, o = this.height, u = this.color, a = r, f = e.find("body")[0], l = n("<ng-progress></ng-progress>")(a);
        f.appendChild(l[0]), a.count = s, void 0 !== o && l.eq(0).children().css("height", o), void 0 !== u && (l.eq(0).children().css("background-color", u), l.eq(0).children().css("color", u));
        var c, h = 0;
        return {
            start: function() {
                this.show();
                var e = this;
                clearInterval(h), h = setInterval(function() {
                    if (isNaN(s)) clearInterval(h), s = 0, e.hide(); else {
                        var t = 100 - s;
                        s += .15 * Math.pow(1 - Math.sqrt(t), 2), e.updateCount(s);
                    }
                }, 200);
            },
            updateCount: function(e) {
                a.count = e, a.$$phase || a.$apply();
            },
            height: function(e) {
                return void 0 !== e && (o = e, a.height = o, a.$$phase || a.$apply()), o;
            },
            color: function(e) {
                return void 0 !== e && (u = e, a.color = u, a.$$phase || a.$apply()), u;
            },
            hide: function() {
                l.children().css("opacity", "0");
                var e = this;
                e.animate(function() {
                    l.children().css("width", "0%"), e.animate(function() {
                        e.show();
                    }, 500);
                }, 500);
            },
            show: function() {
                var e = this;
                e.animate(function() {
                    l.children().css("opacity", "1");
                }, 100);
            },
            animate: function(e, t) {
                c && i.cancel(c), c = i(e, t);
            },
            status: function() {
                return s;
            },
            stop: function() {
                clearInterval(h);
            },
            set: function(e) {
                return this.show(), this.updateCount(e), s = e, clearInterval(h), s;
            },
            css: function(e) {
                return l.children().css(e);
            },
            reset: function() {
                return clearInterval(h), s = 0, this.updateCount(s), 0;
            },
            complete: function() {
                s = 100, this.updateCount(s);
                var e = this;
                return clearInterval(h), i(function() {
                    e.hide(), i(function() {
                        s = 0, e.updateCount(s);
                    }, 500);
                }, 1e3), s;
            },
            setParent: function(e) {
                if (null === e || void 0 === e) throw new Error("Provide a valid parent of type HTMLElement");
                null !== f && void 0 !== f && f.removeChild(l[0]), f = e, f.appendChild(l[0]);
            },
            getDomElement: function() {
                return l;
            }
        };
    } ], this.setColor = function(e) {
        return void 0 !== e && (this.color = e), this.color;
    }, this.setHeight = function(e) {
        return void 0 !== e && (this.height = e), this.height;
    };
}), angular.module("ngProgress.directive", []).directive("ngProgress", [ "$window", "$rootScope", function(e, t) {
    var n = {
        replace: !0,
        restrict: "E",
        link: function(e, n) {
            t.$watch("count", function(t) {
                (void 0 !== t || null !== t) && (e.counter = t, n.eq(0).children().css("width", t + "%"));
            }), t.$watch("color", function(t) {
                (void 0 !== t || null !== t) && (e.color = t, n.eq(0).children().css("background-color", t), n.eq(0).children().css("color", t));
            }), t.$watch("height", function(t) {
                (void 0 !== t || null !== t) && (e.height = t, n.eq(0).children().css("height", t));
            });
        },
        template: '<div id="ngProgress-container"><div id="ngProgress"></div></div>'
    };
    return n;
} ]), angular.module("ngProgress", [ "ngProgress.directive", "ngProgress.provider" ]), define("ngProgress", [ "angular" ], function() {}), !function(e, t, n) {
    function r(e, t) {
        var n = [];
        for (var r in e.path) {
            if (e.path[r] !== t.path[r]) break;
            n.push(e.path[r]);
        }
        return n;
    }
    function i(e) {
        if (Object.keys) return Object.keys(e);
        var n = [];
        return t.forEach(e, function(e, t) {
            n.push(t);
        }), n;
    }
    function s(e, t) {
        if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
        var n = e.length >>> 0, r = Number(arguments[2]) || 0;
        for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++) if (r in e && e[r] === t) return r;
        return -1;
    }
    function o(e, t, n, o) {
        var u, a = r(n, o), f = {}, l = [];
        for (var c in a) if (a[c].params && (u = g(a[c].params) ? a[c].params : i(a[c].params), u.length)) for (var h in u) s(l, u[h]) >= 0 || (l.push(u[h]), f[u[h]] = e[u[h]]);
        return m({}, f, t);
    }
    function u(e, t) {
        return m(new (m(function() {}, {
            prototype: e
        })), t);
    }
    function a() {
        p = n;
    }
    function f() {
        var e = {}, n = {};
        this.registerStickyState = function(e) {
            n[e.name] = e;
        }, this.enableDebug = function(e) {
            d = e;
        }, this.$get = [ "$rootScope", "$state", "$stateParams", "$injector", "$log", function(n, r, i, s, u) {
            function a() {
                var n = {};
                return t.forEach(e, function(e) {
                    for (var t = f(e), r = 0; r < t.length; r++) {
                        var i = t[r].parent;
                        n[i.name] = n[i.name] || [], n[i.name].push(e);
                    }
                    n[""] && (n.__inactives = n[""]);
                }), n;
            }
            function f(e) {
                var t = [];
                if (!e) return t;
                do e.sticky && t.push(e), e = e.parent; while (e);
                return t.reverse(), t;
            }
            function l(e, t, n) {
                if (e[n] === t[n]) return {
                    from: !1,
                    to: !1
                };
                var r = n < e.length && e[n].self.sticky, i = n < t.length && t[n].self.sticky;
                return {
                    from: r,
                    to: i
                };
            }
            function c(t, n, r) {
                if (r) return "updateStateParams";
                var i = e[t.self.name];
                if (!i) return "enter";
                var s = p(n, i.locals.globals.$stateParams, t.ownParams);
                return s ? "reactivate" : "updateStateParams";
            }
            function h(t, n) {
                var r = e[t.name];
                if (!r) return null;
                if (!n) return r;
                var i = p(n, r.locals.globals.$stateParams, t.ownParams);
                return i ? r : null;
            }
            function p(e, t, n) {
                if (!n) {
                    n = [];
                    for (var r in e) n.push(r);
                }
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    if (e[s] != t[s]) return !1;
                }
                return !0;
            }
            var v = {
                getInactiveStates: function() {
                    var n = [];
                    return t.forEach(e, function(e) {
                        n.push(e);
                    }), n;
                },
                getInactiveStatesByParent: function() {
                    return a();
                },
                processTransition: function(e) {
                    var n = {
                        inactives: [],
                        enter: [],
                        exit: [],
                        keep: 0
                    }, s = e.fromState.path, u = e.fromParams, f = e.toState.path, h = e.toParams, d = e.options, v = 0, m = f[v];
                    for (d.inherit && (h = o(i, h || {}, r.$current, e.toState)); m && m === s[v] && p(h, u, m.ownParams); ) m = f[++v];
                    n.keep = v;
                    var g, b, w, E = {}, S = l(s, f, v), x = !1;
                    for (g = v; g < f.length; g++) {
                        var T = S.to ? c(f[g], e.toParams, x) : "enter";
                        x = x || "updateStateParams" == T, n.enter[g] = T, "reactivate" == T && (w = E[f[g].name] = f[g]), "updateStateParams" == T && (b = f[g]);
                    }
                    w = w ? w.self.name + "." : "", b = b ? b.self.name + "." : "";
                    var N = a(), C = [ "" ].concat(y(s.slice(0, v), function(e) {
                        return e.self.name;
                    }));
                    for (t.forEach(C, function(e) {
                        for (var t = N[e], r = 0; t && r < t.length; r++) {
                            var i = t[r];
                            E[i.name] || w && 0 === i.self.name.indexOf(w) || b && 0 === i.self.name.indexOf(b) || n.inactives.push(i);
                        }
                    }), g = v; g < s.length; g++) {
                        var k = "exit";
                        S.from && (n.inactives.push(s[g]), k = "inactivate"), n.exit[g] = k;
                    }
                    return n;
                },
                stateInactivated: function(t) {
                    e[t.self.name] = t, t.self.status = "inactive", t.self.onInactivate && s.invoke(t.self.onInactivate, t.self, t.locals.globals);
                },
                stateReactivated: function(t) {
                    e[t.self.name] && delete e[t.self.name], t.self.status = "entered", t.self.onReactivate && s.invoke(t.self.onReactivate, t.self, t.locals.globals);
                },
                stateExiting: function(n, r, i) {
                    var o = {};
                    t.forEach(r, function(e) {
                        o[e.self.name] = !0;
                    }), t.forEach(e, function(t, r) {
                        !o[r] && t.includes[n.name] && (d && u.debug("Exiting " + r + " because it's a substate of " + n.name + " and wasn't found in ", o), t.self.onExit && s.invoke(t.self.onExit, t.self, t.locals.globals), t.locals = null, t.self.status = "exited", delete e[r]);
                    }), i && s.invoke(i, n.self, n.locals.globals), n.locals = null, n.self.status = "exited", delete e[n.self.name];
                },
                stateEntering: function(e, t, n) {
                    var r = h(e);
                    if (r && !h(e, t)) {
                        var i = e.locals;
                        this.stateExiting(r), e.locals = i;
                    }
                    e.self.status = "entered", n && s.invoke(n, e.self, e.locals.globals);
                }
            };
            return v;
        } ];
    }
    function l(e) {
        return {
            resolve: {},
            locals: {
                globals: E && E.locals && E.locals.globals
            },
            views: {},
            self: {},
            params: {},
            ownParams: [],
            surrogateType: e
        };
    }
    function c(e, n, r) {
        function i(e, t, n) {
            return e[t] ? e[t].toUpperCase() + ": " + n.self.name : "(" + n.self.name + ")";
        }
        var s = y(r.inactives, function(e) {
            return e.self.name;
        }), o = y(n.toState.path, function(e, t) {
            return i(r.enter, t, e);
        }), u = y(n.fromState.path, function(e, t) {
            return i(r.exit, t, e);
        }), a = n.fromState.self.name + ": " + t.toJson(n.fromParams) + ":  -> " + n.toState.self.name + ": " + t.toJson(n.toParams);
        e.debug("   Current transition: ", a), e.debug("Before transition, inactives are:   : ", y(w.getInactiveStates(), function(e) {
            return e.self.name;
        })), e.debug("After transition,  inactives will be: ", s), e.debug("Transition will exit:  ", u), e.debug("Transition will enter: ", o);
    }
    function h(e, t, n) {
        e.debug("Current state: " + t.self.name + ", inactive states: ", y(w.getInactiveStates(), function(e) {
            return e.self.name;
        }));
        for (var r = function(e, t) {
            return "'" + t + "' (" + e.$$state.name + ")";
        }, i = function(e, t) {
            return "globals" != t && "resolve" != t;
        }, s = function(e) {
            var t = y(b(e.locals, i), r).join(", ");
            return "(" + (e.self.name ? e.self.name : "root") + ".locals" + (t.length ? ": " + t : "") + ")";
        }, o = s(t), u = t.parent; u && u !== t; ) "" === u.self.name && (o = s(n.$current.path[0]) + " / " + o), o = s(u) + " / " + o, t = u, u = t.parent;
        e.debug("Views: " + o);
    }
    t.module("ct.ui.router.extras", [ "ui.router" ]);
    var p, d = !1, v = t.forEach, m = t.extend, g = t.isArray, y = function(e, t) {
        var n = [];
        return v(e, function(e, r) {
            n.push(t(e, r));
        }), n;
    }, b = function(e, t) {
        var n = {};
        return v(e, function(e, r) {
            t(e, r) && (n[r] = e);
        }), n;
    };
    t.module("ct.ui.router.extras").config([ "$provide", function(e) {
        var t;
        e.decorator("$state", [ "$delegate", "$q", function(e, $q) {
            return t = e.transitionTo, e.transitionTo = function(n, r, i) {
                return i.ignoreDsr && (p = i.ignoreDsr), t.apply(e, arguments).then(function(e) {
                    return a(), e;
                }, function(e) {
                    return a(), $q.reject(e);
                });
            }, e;
        } ]);
    } ]), t.module("ct.ui.router.extras").service("$deepStateRedirect", [ "$rootScope", "$state", "$injector", function(e, r, i) {
        function s(e) {
            var t = e.name;
            return f.hasOwnProperty(t) ? f[t] : void o(t);
        }
        function o(e) {
            var t = r.get(e);
            t && t.deepStateRedirect && (f[e] = l, u[e] === n && (u[e] = e));
            var i = e.lastIndexOf(".");
            if (-1 != i) {
                var s = o(e.substr(0, i));
                s && f[e] === n && (f[e] = c);
            }
            return f[e] || !1;
        }
        var u = {}, a = {}, f = {}, l = "Redirect", c = "AncestorRedirect";
        return e.$on("$stateChangeStart", function(e, n) {
            function o() {
                if (p) return !1;
                var e = s(n), r = u[n.name], o = e === l && r && r != n.name ? !0 : !1;
                return o && t.isFunction(n.deepStateRedirect) ? i.invoke(n.deepStateRedirect, n) : o;
            }
            o() && (e.preventDefault(), r.go(u[n.name], a[n.name]));
        }), e.$on("$stateChangeSuccess", function(e, n, r) {
            var i = s(n);
            if (i) {
                var o = n.name;
                t.forEach(u, function(e, n) {
                    (o == n || -1 != o.indexOf(n + ".")) && (u[n] = o, a[n] = t.copy(r));
                });
            }
        }), {};
    } ]), t.module("ct.ui.router.extras").run([ "$deepStateRedirect", function() {} ]), f.$inject = [ "$stateProvider" ], t.module("ct.ui.router.extras").provider("$stickyState", f);
    var w, E, S, x, T = {}, N = [];
    t.module("ct.ui.router.extras").run([ "$stickyState", function(e) {
        w = e;
    } ]), t.module("ct.ui.router.extras").config([ "$provide", "$stateProvider", "$stickyStateProvider", function(e, r, i) {
        x = t.extend(new l("__inactives"), {
            self: {
                name: "__inactives"
            }
        }), E = S = n, N = [], r.decorator("parent", function(e, t) {
            return T[e.self.name] = e, e.self.$$state = function() {
                return T[e.self.name];
            }, e.self.sticky === !0 && i.registerStickyState(e.self), t(e);
        });
        var s;
        e.decorator("$state", [ "$delegate", "$log", "$q", function(e, r, $q) {
            return E = e.$current, E.parent = x, x.parent = n, E.locals = u(x.locals, E.locals), delete x.locals.globals, s = e.transitionTo, e.transitionTo = function(n, i, o) {
                function u(e) {
                    var n = t.extend(new l("reactivate_phase1"), {
                        locals: e.locals
                    });
                    return n.self = t.extend({}, e.self), n;
                }
                function a(e) {
                    var n = t.extend(new l("reactivate_phase2"), e), r = n.self.onEnter;
                    return n.resolve = {}, n.views = {}, n.self.onEnter = function() {
                        n.locals = e.locals, w.stateReactivated(e);
                    }, H.addRestoreFunction(function() {
                        e.self.onEnter = r;
                    }), n;
                }
                function f(e) {
                    var t = new l("inactivate");
                    t.self = e.self;
                    var n = e.self.onExit;
                    return t.self.onExit = function() {
                        w.stateInactivated(e);
                    }, H.addRestoreFunction(function() {
                        e.self.onExit = n;
                    }), t;
                }
                function p(e, t) {
                    var n = e.self.onEnter;
                    return e.self.onEnter = function() {
                        w.stateEntering(e, t, n);
                    }, H.addRestoreFunction(function() {
                        e.self.onEnter = n;
                    }), e;
                }
                function v(e) {
                    var t = e.self.onExit;
                    return e.self.onExit = function() {
                        w.stateExiting(e, D, t);
                    }, H.addRestoreFunction(function() {
                        e.self.onExit = t;
                    }), e;
                }
                x.locals || (x.locals = E.locals);
                var m = N.length;
                S && (S(), d && r.debug("Restored paths from pending transition"));
                var g, b, C, k, L = e.$current, A = e.params, O = o && o.relative || e.$current, M = e.get(n, O), _ = [], D = [], P = function() {}, H = function() {
                    g && (B.path = g, g = null), b && (L.path = b, b = null), t.forEach(H.restoreFunctions, function(e) {
                        e();
                    }), H = P, S = null, N.splice(m, 1);
                };
                if (H.restoreFunctions = [], H.addRestoreFunction = function(e) {
                    this.restoreFunctions.push(e);
                }, M) {
                    var B = T[M.name];
                    if (B) {
                        g = B.path, b = L.path;
                        var j = {
                            toState: B,
                            toParams: i || {},
                            fromState: L,
                            fromParams: A || {},
                            options: o
                        };
                        N.push(j), S = H, C = w.processTransition(j), d && c(r, j, C);
                        var F = B.path.slice(0, C.keep), I = L.path.slice(0, C.keep);
                        t.forEach(x.locals, function(e, t) {
                            -1 != t.indexOf("@") && delete x.locals[t];
                        });
                        for (var q = 0; q < C.inactives.length; q++) {
                            var R = C.inactives[q].locals;
                            t.forEach(R, function(e, t) {
                                R.hasOwnProperty(t) && -1 != t.indexOf("@") && (x.locals[t] = e);
                            });
                        }
                        if (t.forEach(C.enter, function(e, t) {
                            var n;
                            "reactivate" === e ? (n = u(B.path[t]), F.push(n), I.push(n), _.push(a(B.path[t])), k = n) : "updateStateParams" === e ? (n = p(B.path[t]), F.push(n), k = n) : "enter" === e && F.push(p(B.path[t]));
                        }), t.forEach(C.exit, function(e, t) {
                            var n = L.path[t];
                            "inactivate" === e ? (I.push(f(n)), D.push(n)) : "exit" === e && (I.push(v(n)), D.push(n));
                        }), _.length && t.forEach(_, function(e) {
                            F.push(e);
                        }), k) {
                            var U = k.self.name + ".", z = w.getInactiveStates(), W = [];
                            z.forEach(function(e) {
                                0 === e.self.name.indexOf(U) && W.push(e);
                            }), W.sort(), W.reverse(), I = I.concat(y(W, function(e) {
                                return v(e);
                            })), D = D.concat(W);
                        }
                        B.path = F, L.path = I;
                        var X = function(e) {
                            return (e.surrogateType ? e.surrogateType + ":" : "") + e.self.name;
                        };
                        d && r.debug("SurrogateFromPath: ", y(I, X)), d && r.debug("SurrogateToPath:   ", y(F, X));
                    }
                }
                var V = s.apply(e, arguments);
                return V.then(function(t) {
                    return H(), d && h(r, T[t.name], e), t.status = "active", t;
                }, function(e) {
                    return H(), d && "transition prevented" !== e.message && "transition aborted" !== e.message && "transition superseded" !== e.message && (r.debug("transition failed", e), console.log(e.stack)), $q.reject(e);
                });
            }, e;
        } ]);
    } ]), t.module("ct.ui.router.extras").provider("$futureState", [ "$stateProvider", "$urlRouterProvider", function(e, n) {
        function r(e, t) {
            if (t.name) for (var n = t.name.split(/\./); n.length; ) {
                var r = n.join(".");
                if (e.get(r)) return null;
                if (a[r]) return a[r];
                n.pop();
            }
            if (t.url) for (var i = t.url.split(/\//); i.length; ) {
                var s = i.join("/");
                if (f[s]) return f[s];
                i.pop();
            }
        }
        function i(e, futureState) {
            if (!futureState) {
                var t = $q.defer();
                return t.reject("No lazyState passed in " + futureState), t.promise;
            }
            var n = futureState.type, r = u[n];
            if (!r) throw Error("No state factory for futureState.type: " + (futureState && futureState.type));
            return e.invoke(r, r, {
                futureState: futureState
            });
        }
        function s(t, n) {
            var s = !1, u = t.get("$log"), a = [ "$state", function() {
                u.debug("Unable to map " + n.path()), n.url("/");
            } ], f = [ "$rootScope", "$urlRouter", "$state", function(u, f, c) {
                if (!h) return o().then(function() {
                    s = !0, f.sync(), s = !1;
                }), void (h = !0);
                var futureState = r(c, {
                    url: n.path()
                });
                return futureState ? (l = !0, void i(t, futureState).then(function(t) {
                    t && !c.get(t) && e.state(t), s = !0, f.sync(), s = !1, l = !1;
                }, function() {
                    l = !1, c.go("top");
                })) : t.invoke(a);
            } ];
            if (!l) {
                var c = s ? a : f;
                return t.invoke(c);
            }
        }
        var o, u = {}, a = {}, f = {}, l = !1, c = [], h = !1, p = this;
        this.addResolve = function(e) {
            c.push(e);
        }, this.stateFactory = function(e, t) {
            u[e] = t;
        }, this.futureState = function(futureState) {
            a[futureState.stateName] = futureState, f[futureState.urlPrefix] = futureState;
        }, this.get = function() {
            return t.extend({}, a);
        }, n.otherwise(s);
        var d = {
            getResolvePromise: function() {
                return o();
            }
        };
        this.$get = [ "$injector", "$state", "$q", "$rootScope", "$urlRouter", "$timeout", "$log", function(n, s, $q, u, a, f, h) {
            function v() {
                if (u.$on("$stateNotFound", function(t, o, u, a) {
                    if (!l) {
                        h.debug("event, unfoundState, fromState, fromParams", t, o, u, a);
                        var futureState = r(s, {
                            name: o.to
                        });
                        if (futureState) {
                            t.preventDefault(), l = !0;
                            var f = i(n, futureState);
                            f.then(function(t) {
                                t && e.state(t), s.go(o.to, o.toParams), l = !1;
                            }, function(e) {
                                console.log("failed to lazy load state ", e), s.go(u, a), l = !1;
                            });
                        }
                    }
                }), !o) {
                    var p = [];
                    t.forEach(c, function(e) {
                        p.push(n.invoke(e));
                    }), o = function() {
                        return $q.all(p);
                    };
                }
                o().then(function() {
                    f(function() {
                        s.transition ? s.transition.then(a.sync, a.sync) : a.sync();
                    });
                });
            }
            return v(), d.state = e.state, d.futureState = p.futureState, d.get = p.get, d;
        } ];
    } ]), t.module("ct.ui.router.extras").run([ "$futureState", function() {} ]), t.module("ct.ui.router.extras").service("$previousState", [ "$rootScope", "$state", function(e, t) {
        var n = null, r = {}, i = null;
        e.$on("$stateChangeStart", function(e, t, r, s, o) {
            i = n, n = {
                state: s,
                params: o
            };
        }), e.$on("$stateChangeError", function() {
            n = i, i = null;
        }), e.$on("$stateChangeSuccess", function() {
            i = null;
        });
        var s = {
            get: function(e) {
                return e ? r[e] : n;
            },
            go: function(e, n) {
                var r = s.get(e);
                return t.go(r.state, r.params, n);
            },
            memo: function(e) {
                r[e] = n;
            },
            forget: function(e) {
                delete r[e];
            }
        };
        return s;
    } ]), t.module("ct.ui.router.extras").run([ "$previousState", function() {} ]), t.module("ct.ui.router.extras").config([ "$provide", function(e) {
        e.decorator("$state", [ "$delegate", "$rootScope", "$q", "$injector", function(e, n, $q, r) {
            function i(e) {
                var n = r.invoke, i = r.instantiate;
                return r.invoke = function(r, i, s) {
                    return n(r, i, t.extend({
                        $transition$: e
                    }, s));
                }, r.instantiate = function(n, r) {
                    return i(n, t.extend({
                        $transition$: e
                    }, r));
                }, function() {
                    r.invoke = n, r.instantiate = i;
                };
            }
            function s() {
                c.pop()(), l.pop(), f--;
            }
            function o(e, t) {
                return function(r) {
                    return s(), n.$broadcast("$transitionSuccess", t), e.resolve(r);
                };
            }
            function u(e, t) {
                return function(r) {
                    return s(), n.$broadcast("$transitionError", t, r), e.reject(r);
                };
            }
            var a = e.transitionTo, f = -1, l = [], c = [];
            return e.transitionTo = function() {
                var t = $q.defer(), n = l[++f] = {
                    promise: t.promise
                };
                c[f] = function() {};
                var r = a.apply(e, arguments);
                return r.then(o(t, n), u(t, n));
            }, n.$on("$stateChangeStart", function(e, r, s, o, u) {
                var a = f, h = t.extend(l[a], {
                    to: {
                        state: r,
                        params: s
                    },
                    from: {
                        state: o,
                        params: u
                    }
                }), p = i(h);
                c[a] = p, n.$broadcast("$transitionStart", h);
            }), e;
        } ]);
    } ]);
}(window, window.angular), define("uiRouterExtras", [ "angular" ], function() {}), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function(e, t, n) {
    function r(e, t) {
        return H(new (H(function() {}, {
            prototype: e
        })), t);
    }
    function i(e) {
        return P(arguments, function(t) {
            t !== e && P(t, function(t, n) {
                e.hasOwnProperty(n) || (e[n] = t);
            });
        }), e;
    }
    function s(e, t) {
        var n = [];
        for (var r in e.path) {
            if (e.path[r] !== t.path[r]) break;
            n.push(e.path[r]);
        }
        return n;
    }
    function o(e) {
        if (Object.keys) return Object.keys(e);
        var n = [];
        return t.forEach(e, function(e, t) {
            n.push(t);
        }), n;
    }
    function u(e, t) {
        if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
        var n = e.length >>> 0, r = Number(arguments[2]) || 0;
        for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++) if (r in e && e[r] === t) return r;
        return -1;
    }
    function a(e, t, n, r) {
        var i, a = s(n, r), f = {}, l = [];
        for (var c in a) if (a[c].params && (i = o(a[c].params), i.length)) for (var h in i) u(l, i[h]) >= 0 || (l.push(i[h]), f[i[h]] = e[i[h]]);
        return H({}, f, t);
    }
    function f(e, t, n) {
        if (!n) {
            n = [];
            for (var r in e) n.push(r);
        }
        for (var i = 0; i < n.length; i++) {
            var s = n[i];
            if (e[s] != t[s]) return !1;
        }
        return !0;
    }
    function l(e, t) {
        var n = {};
        return P(e, function(e) {
            n[e] = t[e];
        }), n;
    }
    function c(e, t) {
        var r = 1, s = 2, o = {}, u = [], a = o, f = H(e.when(o), {
            $$promises: o,
            $$values: o
        });
        this.study = function(o) {
            function l(e, n) {
                if (d[n] !== s) {
                    if (p.push(n), d[n] === r) throw p.splice(0, p.indexOf(n)), new Error("Cyclic dependency: " + p.join(" -> "));
                    if (d[n] = r, M(e)) h.push(n, [ function() {
                        return t.get(e);
                    } ], u); else {
                        var i = t.annotate(e);
                        P(i, function(e) {
                            e !== n && o.hasOwnProperty(e) && l(o[e], e);
                        }), h.push(n, e, i);
                    }
                    p.pop(), d[n] = s;
                }
            }
            function c(e) {
                return _(e) && e.then && e.$$promises;
            }
            if (!_(o)) throw new Error("'invocables' must be an object");
            var h = [], p = [], d = {};
            return P(o, l), o = p = d = null, function(r, s, o) {
                function u() {
                    --y || (b || i(g, s.$$values), v.$$values = g, v.$$promises = !0, delete v.$$inheritedValues, d.resolve(g));
                }
                function l(e) {
                    v.$$failure = e, d.reject(e);
                }
                function p(n, i, s) {
                    function a(e) {
                        c.reject(e), l(e);
                    }
                    function f() {
                        if (!A(v.$$failure)) try {
                            c.resolve(t.invoke(i, o, g)), c.promise.then(function(e) {
                                g[n] = e, u();
                            }, a);
                        } catch (e) {
                            a(e);
                        }
                    }
                    var c = e.defer(), h = 0;
                    P(s, function(e) {
                        m.hasOwnProperty(e) && !r.hasOwnProperty(e) && (h++, m[e].then(function(t) {
                            g[e] = t, --h || f();
                        }, a));
                    }), h || f(), m[n] = c.promise;
                }
                if (c(r) && o === n && (o = s, s = r, r = null), r) {
                    if (!_(r)) throw new Error("'locals' must be an object");
                } else r = a;
                if (s) {
                    if (!c(s)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                } else s = f;
                var d = e.defer(), v = d.promise, m = v.$$promises = {}, g = H({}, r), y = 1 + h.length / 3, b = !1;
                if (A(s.$$failure)) return l(s.$$failure), v;
                s.$$inheritedValues && i(g, s.$$inheritedValues), s.$$values ? (b = i(g, s.$$values), v.$$inheritedValues = s.$$values, u()) : (s.$$inheritedValues && (v.$$inheritedValues = s.$$inheritedValues), H(m, s.$$promises), s.then(u, l));
                for (var w = 0, E = h.length; E > w; w += 3) r.hasOwnProperty(h[w]) ? u() : p(h[w], h[w + 1], h[w + 2]);
                return v;
            };
        }, this.resolve = function(e, t, n, r) {
            return this.study(e)(t, n, r);
        };
    }
    function h(e, t, n) {
        this.fromConfig = function(e, t, n) {
            return A(e.template) ? this.fromString(e.template, t) : A(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : A(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null;
        }, this.fromString = function(e, t) {
            return O(e) ? e(t) : e;
        }, this.fromUrl = function(n, r) {
            return O(n) && (n = n(r)), null == n ? null : e.get(n, {
                cache: t
            }).then(function(e) {
                return e.data;
            });
        }, this.fromProvider = function(e, t, r) {
            return n.invoke(e, null, r || {
                params: t
            });
        };
    }
    function p(e, r) {
        function i(e) {
            return A(e) ? this.type.decode(e) : v.$$getDefaultValue(this);
        }
        function s(t, n, r) {
            if (!/^\w+(-+\w+)*$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
            if (p[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
            p[t] = H({
                type: n || new d,
                $value: i
            }, r);
        }
        function o(e, t, n) {
            var r = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!t) return r;
            var i = n ? "?" : "";
            return r + i + "(" + t + ")" + i;
        }
        function u(e) {
            if (!r.params || !r.params[e]) return {};
            var t = r.params[e];
            return _(t) ? t : {
                value: t
            };
        }
        r = t.isObject(r) ? r : {};
        var a, f = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^", c = 0, h = this.segments = [], p = this.params = {};
        this.source = e;
        for (var m, g, y, b, w; (a = f.exec(e)) && (m = a[2] || a[3], g = a[4] || ("*" == a[1] ? ".*" : "[^/]*"), y = e.substring(c, a.index), b = this.$types[g] || new d({
            pattern: new RegExp(g)
        }), w = u(m), !(y.indexOf("?") >= 0)); ) l += o(y, b.$subPattern(), A(w.value)), s(m, b, w), h.push(y), c = f.lastIndex;
        y = e.substring(c);
        var E = y.indexOf("?");
        if (E >= 0) {
            var S = this.sourceSearch = y.substring(E);
            y = y.substring(0, E), this.sourcePath = e.substring(0, c + E), P(S.substring(1).split(/[&?]/), function(e) {
                s(e, null, u(e));
            });
        } else this.sourcePath = e, this.sourceSearch = "";
        l += o(y) + (r.strict === !1 ? "/?" : "") + "$", h.push(y), this.regexp = new RegExp(l, r.caseInsensitive ? "i" : n), this.prefix = h[0];
    }
    function d(e) {
        H(this, e);
    }
    function v() {
        function e() {
            return {
                strict: s,
                caseInsensitive: i
            };
        }
        function t(e) {
            return O(e) || D(e) && O(e[e.length - 1]);
        }
        function n() {
            P(u, function(e) {
                if (p.prototype.$types[e.name]) throw new Error("A type named '" + e.name + "' has already been defined.");
                var n = new d(t(e.def) ? r.invoke(e.def) : e.def);
                p.prototype.$types[e.name] = n;
            });
        }
        var r, i = !1, s = !0, o = !0, u = [], a = {
            "int": {
                decode: function(e) {
                    return parseInt(e, 10);
                },
                is: function(e) {
                    return A(e) ? this.decode(e.toString()) === e : !1;
                },
                pattern: /\d+/
            },
            bool: {
                encode: function(e) {
                    return e ? 1 : 0;
                },
                decode: function(e) {
                    return 0 === parseInt(e, 10) ? !1 : !0;
                },
                is: function(e) {
                    return e === !0 || e === !1;
                },
                pattern: /0|1/
            },
            string: {
                pattern: /[^\/]*/
            },
            date: {
                equals: function(e, t) {
                    return e.toISOString() === t.toISOString();
                },
                decode: function(e) {
                    return new Date(e);
                },
                encode: function(e) {
                    return [ e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2) ].join("-");
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/
            }
        };
        v.$$getDefaultValue = function(e) {
            if (!t(e.value)) return e.value;
            if (!r) throw new Error("Injectable functions cannot be called at configuration time");
            return r.invoke(e.value);
        }, this.caseInsensitive = function(e) {
            i = e;
        }, this.strictMode = function(e) {
            s = e;
        }, this.compile = function(t, n) {
            return new p(t, H(e(), n));
        }, this.isMatcher = function(e) {
            if (!_(e)) return !1;
            var t = !0;
            return P(p.prototype, function(n, r) {
                O(n) && (t = t && A(e[r]) && O(e[r]));
            }), t;
        }, this.type = function(e, t) {
            return A(t) ? (u.push({
                name: e,
                def: t
            }), o || n(), this) : p.prototype.$types[e];
        }, this.$get = [ "$injector", function(e) {
            return r = e, o = !1, p.prototype.$types = {}, n(), P(a, function(e, t) {
                p.prototype.$types[t] || (p.prototype.$types[t] = new d(e));
            }), this;
        } ];
    }
    function m(e, t) {
        function r(e) {
            var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
            return null != t ? t[1].replace(/\\(.)/g, "$1") : "";
        }
        function i(e, t) {
            return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                return t["$" === n ? 0 : Number(n)];
            });
        }
        function s(e, t, n) {
            if (!n) return !1;
            var r = e.invoke(t, t, {
                $match: n
            });
            return A(r) ? r : !0;
        }
        function o(t, n, r, i) {
            function s(e, t, n) {
                return "/" === h ? e : t ? h.slice(0, -1) + e : n ? h.slice(1) + e : e;
            }
            function o(e) {
                function n(e) {
                    var n = e(r, t);
                    return n ? (M(n) && t.replace().url(n), !0) : !1;
                }
                if (!e || !e.defaultPrevented) {
                    var i, s = a.length;
                    for (i = 0; s > i; i++) if (n(a[i])) return;
                    f && n(f);
                }
            }
            function c() {
                return u = u || n.$on("$locationChangeSuccess", o);
            }
            var h = i.baseHref(), p = t.url();
            return l || c(), {
                sync: function() {
                    o();
                },
                listen: function() {
                    return c();
                },
                update: function(e) {
                    return e ? void (p = t.url()) : void (t.url() !== p && (t.url(p), t.replace()));
                },
                push: function(e, n, r) {
                    t.url(e.format(n || {})), r && r.replace && t.replace();
                },
                href: function(n, r, i) {
                    if (!n.validates(r)) return null;
                    var o = e.html5Mode(), u = n.format(r);
                    if (i = i || {}, o || null === u || (u = "#" + e.hashPrefix() + u), u = s(u, o, i.absolute), !i.absolute || !u) return u;
                    var a = !o && u ? "/" : "", f = t.port();
                    return f = 80 === f || 443 === f ? "" : ":" + f, [ t.protocol(), "://", t.host(), f, a, u ].join("");
                }
            };
        }
        var u, a = [], f = null, l = !1;
        this.rule = function(e) {
            if (!O(e)) throw new Error("'rule' must be a function");
            return a.push(e), this;
        }, this.otherwise = function(e) {
            if (M(e)) {
                var t = e;
                e = function() {
                    return t;
                };
            } else if (!O(e)) throw new Error("'rule' must be a function");
            return f = e, this;
        }, this.when = function(e, n) {
            var o, u = M(n);
            if (M(e) && (e = t.compile(e)), !u && !O(n) && !D(n)) throw new Error("invalid 'handler' in when()");
            var a = {
                matcher: function(e, n) {
                    return u && (o = t.compile(n), n = [ "$match", function(e) {
                        return o.format(e);
                    } ]), H(function(t, r) {
                        return s(t, n, e.exec(r.path(), r.search()));
                    }, {
                        prefix: M(e.prefix) ? e.prefix : ""
                    });
                },
                regex: function(e, t) {
                    if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                    return u && (o = t, t = [ "$match", function(e) {
                        return i(o, e);
                    } ]), H(function(n, r) {
                        return s(n, t, e.exec(r.path()));
                    }, {
                        prefix: r(e)
                    });
                }
            }, f = {
                matcher: t.isMatcher(e),
                regex: e instanceof RegExp
            };
            for (var l in f) if (f[l]) return this.rule(a[l](e, n));
            throw new Error("invalid 'what' in when()");
        }, this.deferIntercept = function(e) {
            e === n && (e = !0), l = e;
        }, this.$get = o, o.$inject = [ "$location", "$rootScope", "$injector", "$browser" ];
    }
    function g(e, i) {
        function s(e) {
            return 0 === e.indexOf(".") || 0 === e.indexOf("^");
        }
        function u(e, t) {
            if (!e) return n;
            var r = M(e), i = r ? e : e.name, o = s(i);
            if (o) {
                if (!t) throw new Error("No reference point given for path '" + i + "'");
                for (var u = i.split("."), a = 0, f = u.length, l = t; f > a; a++) if ("" !== u[a] || 0 !== a) {
                    if ("^" !== u[a]) break;
                    if (!l.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                    l = l.parent;
                } else l = t;
                u = u.slice(a).join("."), i = l.name + (l.name && u ? "." : "") + u;
            }
            var c = E[i];
            return !c || !r && (r || c !== e && c.self !== e) ? n : c;
        }
        function c(e, t) {
            S[e] || (S[e] = []), S[e].push(t);
        }
        function h(t) {
            t = r(t, {
                self: t,
                resolve: t.resolve || {},
                toString: function() {
                    return this.name;
                }
            });
            var n = t.name;
            if (!M(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
            if (E.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
            var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : M(t.parent) ? t.parent : "";
            if (i && !E[i]) return c(i, t.self);
            for (var s in T) O(T[s]) && (t[s] = T[s](t, T.$delegates[s]));
            if (E[n] = t, !t[x] && t.url && e.when(t.url, [ "$match", "$stateParams", function(e, n) {
                w.$current.navigable == t && f(e, n) || w.transitionTo(t, e, {
                    location: !1
                });
            } ]), S[n]) for (var o = 0; o < S[n].length; o++) h(S[n][o]);
            return t;
        }
        function p(e) {
            return e.indexOf("*") > -1;
        }
        function d(e) {
            var t = e.split("."), n = w.$current.name.split(".");
            if ("**" === t[0] && (n = n.slice(n.indexOf(t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(n.indexOf(t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length) return !1;
            for (var r = 0, i = t.length; i > r; r++) "*" === t[r] && (n[r] = "*");
            return n.join("") === t.join("");
        }
        function v(e, t) {
            return M(e) && !A(t) ? T[e] : O(t) && M(e) ? (T[e] && !T.$delegates[e] && (T.$delegates[e] = T[e]), T[e] = t, this) : this;
        }
        function m(e, t) {
            return _(e) ? t = e : t.name = e, h(t), this;
        }
        function g(e, i, s, c, h, v, m) {
            function g(t, n, r, s) {
                var o = e.$broadcast("$stateNotFound", t, n, r);
                if (o.defaultPrevented) return m.update(), C;
                if (!o.retry) return null;
                if (s.$retry) return m.update(), k;
                var u = w.transition = i.when(o.retry);
                return u.then(function() {
                    return u !== w.transition ? T : (t.options.$retry = !0, w.transitionTo(t.to, t.toParams, t.options));
                }, function() {
                    return C;
                }), m.update(), u;
            }
            function S(e, n, r, u, a) {
                var f = r ? n : l(o(e.params), n), p = {
                    $stateParams: f
                };
                a.resolve = h.resolve(e.resolve, p, a.resolve, e);
                var d = [ a.resolve.then(function(e) {
                    a.globals = e;
                }) ];
                return u && d.push(u), P(e.views, function(n, r) {
                    var i = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
                    i.$template = [ function() {
                        return s.load(r, {
                            view: n,
                            locals: p,
                            params: f
                        }) || "";
                    } ], d.push(h.resolve(i, p, a.resolve, e).then(function(s) {
                        if (O(n.controllerProvider) || D(n.controllerProvider)) {
                            var o = t.extend({}, i, p);
                            s.$$controller = c.invoke(n.controllerProvider, null, o);
                        } else s.$$controller = n.controller;
                        s.$$state = e, s.$$controllerAs = n.controllerAs, a[r] = s;
                    }));
                }), i.all(d).then(function() {
                    return a;
                });
            }
            var T = i.reject(new Error("transition superseded")), N = i.reject(new Error("transition prevented")), C = i.reject(new Error("transition aborted")), k = i.reject(new Error("transition failed"));
            return b.locals = {
                resolve: null,
                globals: {
                    $stateParams: {}
                }
            }, w = {
                params: {},
                current: b.self,
                $current: b,
                transition: null
            }, w.reload = function() {
                w.transitionTo(w.current, v, {
                    reload: !0,
                    inherit: !1,
                    notify: !1
                });
            }, w.go = function(e, t, n) {
                return w.transitionTo(e, t, H({
                    inherit: !0,
                    relative: w.$current
                }, n));
            }, w.transitionTo = function(t, n, s) {
                n = n || {}, s = H({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, s || {});
                var h, p = w.$current, d = w.params, E = p.path, C = u(t, s.relative);
                if (!A(C)) {
                    var k = {
                        to: t,
                        toParams: n,
                        options: s
                    }, L = g(k, p.self, d, s);
                    if (L) return L;
                    if (t = k.to, n = k.toParams, s = k.options, C = u(t, s.relative), !A(C)) throw s.relative ? new Error("Could not resolve '" + t + "' from state '" + s.relative + "'") : new Error("No such state '" + t + "'");
                }
                if (C[x]) throw new Error("Cannot transition to abstract state '" + t + "'");
                s.inherit && (n = a(v, n || {}, w.$current, C)), t = C;
                var O = t.path, M = 0, _ = O[M], D = b.locals, P = [];
                if (!s.reload) for (; _ && _ === E[M] && f(n, d, _.ownParams); ) D = P[M] = _.locals, M++, _ = O[M];
                if (y(t, p, D, s)) return t.self.reloadOnSearch !== !1 && m.update(), w.transition = null, i.when(w.current);
                if (n = l(o(t.params), n || {}), s.notify && e.$broadcast("$stateChangeStart", t.self, n, p.self, d).defaultPrevented) return m.update(), N;
                for (var F = i.when(D), I = M; I < O.length; I++, _ = O[I]) D = P[I] = r(D), F = S(_, n, _ === t, F, D);
                var R = w.transition = F.then(function() {
                    var r, i, o;
                    if (w.transition !== R) return T;
                    for (r = E.length - 1; r >= M; r--) o = E[r], o.self.onExit && c.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                    for (r = M; r < O.length; r++) i = O[r], i.locals = P[r], i.self.onEnter && c.invoke(i.self.onEnter, i.self, i.locals.globals);
                    return w.transition !== R ? T : (w.$current = t, w.current = t.self, w.params = n, B(w.params, v), w.transition = null, s.location && t.navigable && m.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                        replace: "replace" === s.location
                    }), s.notify && e.$broadcast("$stateChangeSuccess", t.self, n, p.self, d), m.update(!0), w.current);
                }, function(r) {
                    return w.transition !== R ? T : (w.transition = null, h = e.$broadcast("$stateChangeError", t.self, n, p.self, d, r), h.defaultPrevented || m.update(), i.reject(r));
                });
                return R;
            }, w.is = function(e, r) {
                var i = u(e);
                return A(i) ? w.$current !== i ? !1 : A(r) && null !== r ? t.equals(v, r) : !0 : n;
            }, w.includes = function(e, t) {
                if (M(e) && p(e)) {
                    if (!d(e)) return !1;
                    e = w.$current.name;
                }
                var r = u(e);
                return A(r) ? A(w.$current.includes[r.name]) ? f(t, v) : !1 : n;
            }, w.href = function(e, t, n) {
                n = H({
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: w.$current
                }, n || {});
                var r = u(e, n.relative);
                if (!A(r)) return null;
                n.inherit && (t = a(v, t || {}, w.$current, r));
                var i = r && n.lossy ? r.navigable : r;
                return i && i.url ? m.href(i.url, l(o(r.params), t || {}), {
                    absolute: n.absolute
                }) : null;
            }, w.get = function(e, t) {
                if (0 === arguments.length) return o(E).map(function(e) {
                    return E[e].self;
                });
                var n = u(e, t);
                return n && n.self ? n.self : null;
            }, w;
        }
        function y(e, t, n, r) {
            return e !== t || (n !== t.locals || r.reload) && e.self.reloadOnSearch !== !1 ? void 0 : !0;
        }
        var b, w, E = {}, S = {}, x = "abstract", T = {
            parent: function(e) {
                if (A(e.parent) && e.parent) return u(e.parent);
                var t = /^(.+)\.[^.]+$/.exec(e.name);
                return t ? u(t[1]) : b;
            },
            data: function(e) {
                return e.parent && e.parent.data && (e.data = e.self.data = H({}, e.parent.data, e.data)), e.data;
            },
            url: function(e) {
                var t = e.url, n = {
                    params: e.params || {}
                };
                if (M(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), n) : (e.parent.navigable || b).url.concat(t, n);
                if (!t || i.isMatcher(t)) return t;
                throw new Error("Invalid url '" + t + "' in state '" + e + "'");
            },
            navigable: function(e) {
                return e.url ? e : e.parent ? e.parent.navigable : null;
            },
            params: function(e) {
                return e.params ? e.params : e.url ? e.url.params : e.parent.params;
            },
            views: function(e) {
                var t = {};
                return P(A(e.views) ? e.views : {
                    "": e
                }, function(n, r) {
                    r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n;
                }), t;
            },
            ownParams: function(e) {
                if (e.params = e.params || {}, !e.parent) return o(e.params);
                var t = {};
                P(e.params, function(e, n) {
                    t[n] = !0;
                }), P(e.parent.params, function(n, r) {
                    if (!t[r]) throw new Error("Missing required parameter '" + r + "' in state '" + e.name + "'");
                    t[r] = !1;
                });
                var n = [];
                return P(t, function(e, t) {
                    e && n.push(t);
                }), n;
            },
            path: function(e) {
                return e.parent ? e.parent.path.concat(e) : [];
            },
            includes: function(e) {
                var t = e.parent ? H({}, e.parent.includes) : {};
                return t[e.name] = !0, t;
            },
            $delegates: {}
        };
        b = h({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), b.navigable = null, this.decorator = v, this.state = m, this.$get = g, g.$inject = [ "$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter" ];
    }
    function y() {
        function e(e, t) {
            return {
                load: function(n, r) {
                    var i, s = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return r = H(s, r), r.view && (i = t.fromConfig(r.view, r.params, r.locals)), i && r.notify && e.$broadcast("$viewContentLoading", r), i;
                }
            };
        }
        this.$get = e, e.$inject = [ "$rootScope", "$templateFactory" ];
    }
    function b() {
        var e = !1;
        this.useAnchorScroll = function() {
            e = !0;
        }, this.$get = [ "$anchorScroll", "$timeout", function(t, n) {
            return e ? t : function(e) {
                n(function() {
                    e[0].scrollIntoView();
                }, 0, !1);
            };
        } ];
    }
    function w(e, n, r) {
        function i() {
            return n.has ? function(e) {
                return n.has(e) ? n.get(e) : null;
            } : function(e) {
                try {
                    return n.get(e);
                } catch (t) {
                    return null;
                }
            };
        }
        function s(e, t) {
            var n = function() {
                return {
                    enter: function(e, t, n) {
                        t.after(e), n();
                    },
                    leave: function(e, t) {
                        e.remove(), t();
                    }
                };
            };
            if (a) return {
                enter: function(e, t, n) {
                    a.enter(e, null, t, n);
                },
                leave: function(e, t) {
                    a.leave(e, t);
                }
            };
            if (u) {
                var r = u && u(t, e);
                return {
                    enter: function(e, t, n) {
                        r.enter(e, null, t), n();
                    },
                    leave: function(e, t) {
                        r.leave(e), t();
                    }
                };
            }
            return n();
        }
        var o = i(), u = o("$animator"), a = o("$animate"), f = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function(n, i, o) {
                return function(n, i, u) {
                    function a() {
                        l && (l.remove(), l = null), h && (h.$destroy(), h = null), c && (m.leave(c, function() {
                            l = null;
                        }), l = c, c = null);
                    }
                    function f(s) {
                        var f, l = S(u, i.inheritedData("$uiView")), g = l && e.$current && e.$current.locals[l];
                        if (s || g !== p) {
                            f = n.$new(), p = e.$current.locals[l];
                            var y = o(f, function(e) {
                                m.enter(e, i, function() {
                                    (t.isDefined(v) && !v || n.$eval(v)) && r(e);
                                }), a();
                            });
                            c = y, h = f, h.$emit("$viewContentLoaded"), h.$eval(d);
                        }
                    }
                    var l, c, h, p, d = u.onload || "", v = u.autoscroll, m = s(u, n);
                    n.$on("$stateChangeSuccess", function() {
                        f(!1);
                    }), n.$on("$viewContentLoading", function() {
                        f(!1);
                    }), f(!0);
                };
            }
        };
        return f;
    }
    function E(e, t, n) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function(r) {
                var i = r.html();
                return function(r, s, o) {
                    var u = n.$current, a = S(o, s.inheritedData("$uiView")), f = u && u.locals[a];
                    if (f) {
                        s.data("$uiView", {
                            name: a,
                            state: f.$$state
                        }), s.html(f.$template ? f.$template : i);
                        var l = e(s.contents());
                        if (f.$$controller) {
                            f.$scope = r;
                            var c = t(f.$$controller, f);
                            f.$$controllerAs && (r[f.$$controllerAs] = c), s.data("$ngControllerController", c), s.children().data("$ngControllerController", c);
                        }
                        l(r);
                    }
                };
            }
        };
    }
    function S(e, t) {
        var n = e.uiView || e.name || "";
        return n.indexOf("@") >= 0 ? n : n + "@" + (t ? t.state.name : "");
    }
    function x(e, t) {
        var n, r = e.match(/^\s*({[^}]*})\s*$/);
        if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
        return {
            state: n[1],
            paramExpr: n[3] || null
        };
    }
    function T(e) {
        var t = e.parent().inheritedData("$uiView");
        return t && t.state && t.state.name ? t.state : void 0;
    }
    function N(e, n) {
        var r = [ "location", "inherit", "reload" ];
        return {
            restrict: "A",
            require: [ "?^uiSrefActive", "?^uiSrefActiveEq" ],
            link: function(i, s, o, u) {
                var a = x(o.uiSref, e.current.name), f = null, l = T(s) || e.$current, c = "FORM" === s[0].nodeName, h = c ? "action" : "href", p = !0, d = {
                    relative: l,
                    inherit: !0
                }, v = i.$eval(o.uiSrefOpts) || {};
                t.forEach(r, function(e) {
                    e in v && (d[e] = v[e]);
                });
                var m = function(t) {
                    if (t && (f = t), p) {
                        var n = e.href(a.state, f, d), r = u[1] || u[0];
                        return r && r.$$setStateInfo(a.state, f), null === n ? (p = !1, !1) : void (s[0][h] = n);
                    }
                };
                a.paramExpr && (i.$watch(a.paramExpr, function(e) {
                    e !== f && m(e);
                }, !0), f = i.$eval(a.paramExpr)), m(), c || s.bind("click", function(t) {
                    var r = t.which || t.button;
                    if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || s.attr("target"))) {
                        var i = n(function() {
                            e.go(a.state, f, d);
                        });
                        t.preventDefault(), t.preventDefault = function() {
                            n.cancel(i);
                        };
                    }
                });
            }
        };
    }
    function C(e, t, n) {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$attrs", function(r, i, s) {
                function o() {
                    u() ? i.addClass(h) : i.removeClass(h);
                }
                function u() {
                    return "undefined" != typeof s.uiSrefActiveEq ? e.$current.self === l && a() : e.includes(l.name) && a();
                }
                function a() {
                    return !c || f(c, t);
                }
                var l, c, h;
                h = n(s.uiSrefActiveEq || s.uiSrefActive || "", !1)(r), this.$$setStateInfo = function(t, n) {
                    l = e.get(t, T(i)), c = n, o();
                }, r.$on("$stateChangeSuccess", o);
            } ]
        };
    }
    function k(e) {
        return function(t) {
            return e.is(t);
        };
    }
    function L(e) {
        return function(t) {
            return e.includes(t);
        };
    }
    var A = t.isDefined, O = t.isFunction, M = t.isString, _ = t.isObject, D = t.isArray, P = t.forEach, H = t.extend, B = t.copy;
    t.module("ui.router.util", [ "ng" ]), t.module("ui.router.router", [ "ui.router.util" ]), t.module("ui.router.state", [ "ui.router.router", "ui.router.util" ]), t.module("ui.router", [ "ui.router.state" ]), t.module("ui.router.compat", [ "ui.router" ]), c.$inject = [ "$q", "$injector" ], t.module("ui.router.util").service("$resolve", c), h.$inject = [ "$http", "$templateCache", "$injector" ], t.module("ui.router.util").service("$templateFactory", h), p.prototype.concat = function(e, t) {
        return new p(this.sourcePath + e + this.sourceSearch, t);
    }, p.prototype.toString = function() {
        return this.source;
    }, p.prototype.exec = function(e, t) {
        var n = this.regexp.exec(e);
        if (!n) return null;
        t = t || {};
        var r, i, s, o = this.parameters(), u = o.length, a = this.segments.length - 1, f = {};
        if (a !== n.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (r = 0; a > r; r++) s = o[r], i = this.params[s], f[s] = i.$value(n[r + 1]);
        for (; u > r; r++) s = o[r], i = this.params[s], f[s] = i.$value(t[s]);
        return f;
    }, p.prototype.parameters = function(e) {
        return A(e) ? this.params[e] || null : o(this.params);
    }, p.prototype.validates = function(e) {
        var t, n, r = !0, i = this;
        return P(e, function(e, s) {
            i.params[s] && (n = i.params[s], t = !e && A(n.value), r = r && (t || n.type.is(e)));
        }), r;
    }, p.prototype.format = function(e) {
        var t = this.segments, n = this.parameters();
        if (!e) return t.join("").replace("//", "/");
        var r, i, s, o, u, a, f = t.length - 1, l = n.length, c = t[0];
        if (!this.validates(e)) return null;
        for (r = 0; f > r; r++) o = n[r], s = e[o], u = this.params[o], (A(s) || "/" !== t[r] && "/" !== t[r + 1]) && (null != s && (c += encodeURIComponent(u.type.encode(s))), c += t[r + 1]);
        for (; l > r; r++) o = n[r], s = e[o], null != s && (a = D(s), a && (s = s.map(encodeURIComponent).join("&" + o + "=")), c += (i ? "&" : "?") + o + "=" + (a ? s : encodeURIComponent(s)), i = !0);
        return c;
    }, p.prototype.$types = {}, d.prototype.is = function() {
        return !0;
    }, d.prototype.encode = function(e) {
        return e;
    }, d.prototype.decode = function(e) {
        return e;
    }, d.prototype.equals = function(e, t) {
        return e == t;
    }, d.prototype.$subPattern = function() {
        var e = this.pattern.toString();
        return e.substr(1, e.length - 2);
    }, d.prototype.pattern = /.*/, t.module("ui.router.util").provider("$urlMatcherFactory", v), m.$inject = [ "$locationProvider", "$urlMatcherFactoryProvider" ], t.module("ui.router.router").provider("$urlRouter", m), g.$inject = [ "$urlRouterProvider", "$urlMatcherFactoryProvider" ], t.module("ui.router.state").value("$stateParams", {}).provider("$state", g), y.$inject = [], t.module("ui.router.state").provider("$view", y), t.module("ui.router.state").provider("$uiViewScroll", b), w.$inject = [ "$state", "$injector", "$uiViewScroll" ], E.$inject = [ "$compile", "$controller", "$state" ], t.module("ui.router.state").directive("uiView", w), t.module("ui.router.state").directive("uiView", E), N.$inject = [ "$state", "$timeout" ], C.$inject = [ "$state", "$stateParams", "$interpolate" ], t.module("ui.router.state").directive("uiSref", N).directive("uiSrefActive", C).directive("uiSrefActiveEq", C), k.$inject = [ "$state" ], L.$inject = [ "$state" ], t.module("ui.router.state").filter("isState", k).filter("includedByState", L);
}(window, window.angular), define("uiRouter", [ "angular" ], function() {}), define("app", [ "angular", "future-states", "ngResource", "ngCookies", "ngProgress", "uiRouterExtras", "uiRouter" ], function(e, t) {
    var n = e.module("website.pineappleclub", [ "ngResource", "ngProgress", "ngCookies", "ct.ui.router.extras" ]);
    return n.config([ "$futureStateProvider", "$locationProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", function(r, i, s, o, u, a) {
        function f($q, futureState) {
            var e = $q.defer();
            return require([ futureState.controllerPath ], function(t) {
                var n = {
                    controller: futureState.controllerName,
                    name: futureState.stateName,
                    url: futureState.urlPrefix,
                    templateUrl: futureState.templateUrl,
                    data: futureState.data
                };
                e.resolve(n);
            }), e.promise;
        }
        n.controller = s.register, n.directive = o.directive, n.filter = u.register, n.factory = a.factory, n.service = a.service, n.constant = a.constant;
        var l = function() {
            e.forEach(t, function(futureState) {
                r.futureState(futureState);
            });
        };
        r.stateFactory("requireCtrl", f), r.addResolve(l), i.html5Mode({
            enabled: !0,
            requireBase: !0
        });
    } ]), n;
}), define("angularAMD", [], function() {
    function u() {
        if (typeof e == "undefined") throw Error("angularAMD not initialized.  Need to call angularAMD.bootstrap(app) first.");
    }
    function a() {
        var r = {};
        if (t) throw Error("setAlternateAngular can only be called once.");
        t = {}, u(), e.extend(t, e), t.module = function(t, i) {
            if (typeof i == "undefined") return r.hasOwnProperty(t) ? undefined : e.module(t);
            var s = e.module.apply(null, arguments), o = {
                name: t,
                module: s
            };
            return n.push(o), r[t] = s, s;
        }, window.angular = t;
    }
    function f() {}
    var e, t, n = [], r, i, s = {}, o;
    return f.prototype.route = function(e) {
        var t;
        e.hasOwnProperty("controllerUrl") ? (t = e.controllerUrl, delete e.controllerUrl) : typeof e.controller == "string" && (t = e.controller);
        if (t) {
            var n = e.resolve || {};
            n.__load = [ "$q", "$rootScope", function($q, e) {
                var n = $q.defer();
                return require([ t ], function() {
                    n.resolve(), e.$apply();
                }), n.promise;
            } ], e.resolve = n;
        }
        return e;
    }, f.prototype.appname = function() {
        return u(), r;
    }, f.prototype.processQueue = function() {
        u();
        if (typeof t == "undefined") throw Error("Alternate angular not set.  Make sure that `enable_ngload` option has been set when calling angularAMD.bootstrap");
        while (n.length) {
            var r = n.shift(), a = r.module._invokeQueue, f;
            for (f = 0; f < a.length; f += 1) {
                var l = a[f], c = l[0], h = l[1], p = l[2];
                if (s.hasOwnProperty(c)) {
                    var d;
                    c === "$injector" && h === "invoke" ? d = o : d = s[c], d[h].apply(null, p);
                } else console.error("'" + c + "' not found!!!");
            }
            r.module._runBlocks && angular.forEach(r.module._runBlocks, function(t) {
                i.invoke(t);
            }), e.module(r.name, [], e.noop);
        }
    }, f.prototype.getCachedProvider = function(n) {
        return u(), n === "__orig_angular" ? e : n === "__alt_angular" ? t : s[n];
    }, f.prototype.inject = function() {
        return u(), i.invoke.apply(null, arguments);
    }, f.prototype.reset = function() {
        if (typeof e == "undefined") return;
        window.angular = e, t = undefined, n = [], r = undefined, i = undefined, s = {}, e = undefined;
    }, f.prototype.bootstrap = function(t, n, u) {
        if (typeof e != "undefined") throw Error("bootstrap can only be called once.");
        e = angular, typeof n == "undefined" && (n = !0), u = u || document.documentElement, t.config([ "$controllerProvider", "$compileProvider", "$filterProvider", "$animateProvider", "$provide", "$injector", function(e, n, r, i, u, a) {
            o = a, s = {
                $controllerProvider: e,
                $compileProvider: n,
                $filterProvider: r,
                $animateProvider: i,
                $provide: u
            }, t.register = {
                controller: e.register,
                directive: n.directive,
                filter: r.register,
                factory: u.factory,
                service: u.service,
                constant: u.constant,
                value: u.value,
                animation: angular.bind(i, i.register)
            };
        } ]), t.run([ "$injector", function(e) {
            i = e, s.$injector = i;
        } ]), r = t.name, e.element(document).ready(function() {
            e.bootstrap(u, [ r ]);
        }), n && a();
    }, new f;
}), define("services/auth-service", [ "app", "angular" ], function(e, t) {
    e.factory("AuthService", [ "$cookieStore", "$http", function(e, n) {
        function i(t) {
            e.put("user", t);
        }
        var r = {};
        return r.login = function(e) {
            return n.post("/login", e).then(function(e) {
                var t = e.data;
                return t.success && i(t.user.local), t;
            });
        }, r.logout = function() {
            return n.post("/logout").then(function(t) {
                var n = t.data;
                return n.success && e.remove("user"), n;
            });
        }, r.authenticated = function() {
            return e.remove("user"), n.post("/authenticated").then(function(e) {
                var t = e.data;
                return t.success && i(t.user.local), t;
            });
        }, r.isAuthenticated = function() {
            return !!r.getCurrentUser();
        }, r.isAuthorized = function(e) {
            var n = r.getCurrentUser();
            return t.isArray(e) || (e = [ e ]), r.isAuthenticated() && e.indexOf(n.userRole) !== -1;
        }, r.getCurrentUser = function() {
            var t = e.get("user");
            return t ? t : null;
        }, r;
    } ]);
}), define("services/app-configuration-service", [ "app" ], function(e) {
    e.factory("AppConfigurationService", [ function() {
        var e = {};
        return e.project = {
            name: "Pineapple Club Website"
        }, e.page = {
            titlePrefix: "Pineapple Club"
        }, e.googlePlusUserId = "102015599606810374225", e.companyInfo = {
            name: "Pineapple Club",
            location: {
                lat: -33.945967,
                lng: 151.137092
            },
            contact: {
                phone: "(02) 8041 8101",
                mobile: "04 6625 0622",
                email: "mui@pineappleclub.com.au"
            }
        }, e.progress = {
            color: "#1d9ad9"
        }, e;
    } ]);
}), define("controllers/application-controller", [ "app", "services/auth-service", "services/app-configuration-service" ], function(e) {
    e.controller("ApplicationController", [ "$scope", "ngProgress", "AuthService", "AppConfigurationService", function(e, t, n, r) {
        e.setCurrentUser = function(t) {
            e.currentUser = t;
        }, t.color(r.progress.color), n.authenticated().then(function(t) {
            t.success && e.setCurrentUser(n.getCurrentUser());
        });
    } ]);
}), define("services/navigator-service", [ "app" ], function(e) {
    e.factory("NavigatorService", [ "AppConfigurationService", function(e) {
        var t = {}, n = {
            home: {
                name: "home",
                display: "Home",
                path: "/"
            },
            services: {
                name: "services",
                display: "Services",
                path: "/services"
            },
            photos: {
                name: "photos",
                display: "Photos",
                path: "/photos"
            },
            philosophy: {
                name: "philosophy",
                display: "Philosophy",
                path: "/philosophy"
            },
            contact: {
                name: "contact",
                display: "Contact",
                path: "/contact"
            }
        };
        return t.pages = {
            main: {
                name: "main",
                display: "Menu",
                items: [ n.home, n.services, n.photos, n.philosophy, n.contact ]
            },
            about: {
                name: "about",
                display: "About",
                items: [ n.contact, n.philosophy ]
            }
        }, t;
    } ]);
}), define("controllers/navigator-controller", [ "app", "services/app-configuration-service", "services/navigator-service" ], function(e) {
    e.controller("NavigatorController", [ "$scope", "AppConfigurationService", "NavigatorService", function(e, t, n) {
        e.companyInfo = t.companyInfo, e.menu = n.pages.main, e.toggleSideBar = function() {
            $(".row-offcanvas").toggleClass("active");
        };
    } ]);
}), define("util", [], function() {
    var e = {};
    return e.device = {
        isBreakpoint: function(e) {
            return $(".device-" + e).is(":visible");
        }
    }, e;
}), define("constants/device-sizes", [ "underscore", "sharedLib/fix-variables" ], function(e, t) {
    var n = e.extend(t), r = "constants.deviceSizes";
    return n.set(r, {
        XS: "xs",
        S: "sm",
        M: "md",
        L: "lg"
    }), n.get(r);
}), define("services/export-service", [ "app" ], function(e) {
    e.factory("ExportService", [ function() {
        return window;
    } ]);
}), define("controllers/header-client-controller", [ "app", "util", "underscore", "constants/device-sizes", "constants/user-roles", "future-states", "services/export-service" ], function(e, t, n, r, i, s) {
    e.controller("HeaderClientController", [ "$scope", "$timeout", "$rootScope", "ExportService", function(e, o, u, a) {
        function f() {
            e.banner = t.device.isBreakpoint(r.XS) ? e.configs.IMG_SMALLBANNER : e.configs.IMG_BIGBANNER;
        }
        e.configs = {
            IMG_BIGBANNER: "/images/tree-big.png",
            IMG_SMALLBANNER: "/images/tree-small.png"
        }, a.addEventListener("resize", $.proxy(function() {
            o($.proxy(f, this));
        }, this), !1), u.$on("$stateChangeSuccess", function(t, r) {
            var o = n.filter(s, function(e) {
                return e.stateName === "login" || e.stateName === "signout";
            });
            e.isShown = n.find(r.data.authorizedRoles, function(e) {
                return e === i.admin;
            }) || n.find(o, function(e) {
                return e.stateName === r.name;
            }) ? !1 : !0;
        }), f();
    } ]);
}), define("constants/auth-events", [ "underscore", "sharedLib/fix-variables" ], function(e, t) {
    var n = e.extend(t);
    return n.set("constants.authEvents", {
        loginSuccess: "auth-login-success",
        loginFailed: "auth-login-failed",
        logoutSuccess: "auth-logout-success",
        logoutFailed: "auth-logout-failed",
        sessionTimeout: "auth-session-timeout",
        notAuthenticated: "auth-not-authenticated",
        notAuthorized: "auth-not-authorized"
    }), n.get("constants.authEvents");
}), define("services/future-state-service", [ "underscore", "app", "future-states" ], function(e, t, n) {
    t.factory("FutureStateService", [ "$location", function(t) {
        var r = {};
        return r.changeState = function(r) {
            var i = e.first(e.where(n, {
                stateName: r
            }));
            t.path(i.urlPrefix);
        }, r;
    } ]);
}), define("controllers/header-admin-controller", [ "app", "constants/auth-events", "services/future-state-service" ], function(e, t) {
    e.controller("HeaderAdminController", [ "$scope", "$rootScope", "FutureStateService", "AuthService", function(e, n, r, i) {
        e.logout = function() {
            i.logout().then(function(i) {
                e.setCurrentUser(null), n.$broadcast(t.logoutSuccess), r.changeState("signout");
            });
        };
    } ]);
}), define("controllers/footer-controller", [ "app", "services/navigator-service" ], function(e) {
    e.controller("FooterController", [ "$scope", "NavigatorService", function(e, t) {
        e.menu = t.pages.about;
    } ]);
}), define("constants/string", [ "underscore", "sharedLib/fix-variables" ], function(e, t) {
    var n = e.extend(t);
    return n.set("constants.string", {
        empty: ""
    }), n.get("constants.string");
}), define("services/page-service", [ "app", "constants/string", "services/app-configuration-service" ], function(e, t) {
    e.factory("PageService", [ "AppConfigurationService", function(e) {
        var n = e.companyInfo.name, r = t.empty, i = {
            getTitle: function() {
                return n;
            },
            setTitle: function(e) {
                n = e;
            },
            getDescription: function() {
                return r;
            },
            setDescription: function(e) {
                r = e;
            }
        };
        return i;
    } ]);
}), define("controllers/page-controller", [ "app", "services/page-service", "services/app-configuration-service" ], function(e) {
    e.controller("PageController", [ "$scope", "$rootScope", "PageService", "AppConfigurationService", function(e, t, n, r) {
        e.getTitle = n.getTitle, e.getDescription = n.getDescription, t.$on("$stateChangeSuccess", function(e, t) {
            n.setTitle(r.page.titlePrefix + " - " + t.data.page.title), n.setDescription(t.data.page.description);
        });
    } ]);
}), define("directives/device-height-directive", [ "app" ], function(e) {
    e.directive("pcdDeviceHeight", [ "ExportService", function(e) {
        var t = {
            link: function(t, n, r) {
                $(n).height($(e).height());
            }
        };
        return {
            restrict: "A",
            link: function(e, n, r) {
                t.link(e, n, r);
            }
        };
    } ]);
}), define("controllers/side-bar-controller", [ "app", "services/navigator-service", "services/app-configuration-service", "directives/device-height-directive" ], function(e) {
    e.controller("SideBarController", [ "$scope", "NavigatorService", "AppConfigurationService", function(e, t, n) {
        function r() {
            $(e.configs.ELE_SIDEBAR).toggleClass(e.configs.CONS_ACTIVE);
        }
        e.configs = {
            ELE_SIDEBAR: ".row-offcanvas",
            CONS_ACTIVE: "active",
            CSS_SIDEBARSHOW: "side-bar-show",
            CSS_SIDEBARHIDE: "side-bar-hide"
        }, e.project = n.companyInfo, e.menu = t.pages.main, e.toggleSideBar = $.proxy(r, this);
    } ]);
}), define("directives/active-by-state-directive", [ "app", "future-states" ], function(e, t) {
    e.directive("pcdActiveByState", [ "$location", "$rootScope", "NavigatorService", function(e, n, r) {
        var i = {
            location: e,
            navigator: r,
            link: function(e, r, i) {
                function o() {
                    var n = _.first(_.where(t, {
                        stateName: i.statename
                    }));
                    e.isVisible = location.pathname === n.urlPrefix;
                }
                var s = this;
                s.element = r, s.scope = e, n.$on("$stateChangeStart", function(e, t) {
                    o();
                }), o();
            }
        };
        return {
            restrict: "E",
            link: function(e, t, n) {
                i.link(e, t, n);
            }
        };
    } ]);
}), define("services/state-change-service", [ "app", "constants/auth-events", "constants/user-roles", "services/future-state-service" ], function(e, t, n) {
    e.factory("StateChangeService", [ "$rootScope", "FutureStateService", "AuthService", "ngProgress", function(e, r, i, s) {
        var o = {
            change: function(o) {
                o[0] === n.all || i.isAuthorized(o) ? s.start() : (r.changeState("login"), i.isAuthenticated() ? e.$broadcast(t.notAuthorized) : e.$broadcast(t.notAuthenticated));
            }
        };
        return o;
    } ]);
}), define("run", [ "app", "services/state-change-service", "services/app-configuration-service", "services/page-service" ], function(e) {
    e.run([ "$rootScope", "StateChangeService", "AppConfigurationService", "PageService", "ngProgress", function(e, t, n, r, i) {
        e.$on("$stateChangeStart", function(e, n) {
            t.change(n.data.authorizedRoles);
        }), e.$on("$stateChangeSuccess", function(e, t) {
            i.complete();
        });
    } ]);
}), define("services/auth-interceptor", [ "app", "constants/auth-events" ], function(e, t) {
    e.factory("AuthInterceptor", [ "$rootScope", "$q", function(e, $q) {
        return {
            responseError: function(n) {
                return e.$broadcast({
                    401: t.notAuthenticated,
                    403: t.notAuthorized,
                    419: t.sessionTimeout,
                    440: t.sessionTimeout
                }[n.status], n), $q.reject(n);
            }
        };
    } ]), e.config([ "$httpProvider", function(e) {
        e.interceptors.push("AuthInterceptor");
    } ]);
}), define("start-up", [ "app", "angularAMD", "controllers/application-controller", "controllers/navigator-controller", "controllers/header-client-controller", "controllers/header-admin-controller", "controllers/footer-controller", "controllers/page-controller", "controllers/side-bar-controller", "directives/active-by-state-directive", "run", "services/auth-interceptor" ], function(e, t) {
    t.bootstrap(e);
}), require.config({
    paths: {
        angular: "vendors/angular.min",
        angularMocks: "vendors/angular-mocks",
        ngResource: "vendors/angular-resource.min",
        ngCookies: "vendors/angular-cookies.min",
        ngProgress: "vendors/ngProgress.min",
        angularAMD: "vendors/angularAMD",
        uiRouter: "vendors/angular-ui-router.min",
        uiRouterExtras: "vendors/ct-ui-router-extras.min",
        jquery: "vendors/jquery",
        underscore: "vendors/underscore-min",
        bootstrap: "vendors/bootstrap.min",
        plusgallery: "vendors/plusgallery",
        async: "vendors/async",
        sharedLib: "../../shared-lib",
        constants: "../../shared-lib/constants"
    },
    shim: {
        ngResource: {
            deps: [ "angular" ]
        },
        ngCookies: {
            deps: [ "angular" ]
        },
        ngProgress: {
            deps: [ "angular" ]
        },
        angularMocks: {
            deps: [ "angular" ]
        },
        angularAMD: {
            deps: [ "angular" ]
        },
        uiRouter: {
            deps: [ "angular" ]
        },
        uiRouterExtras: {
            deps: [ "angular" ]
        },
        angular: {
            deps: [ "jquery" ],
            exports: "angular"
        },
        bootstrap: {
            deps: [ "jquery" ]
        },
        plusgallery: {
            deps: [ "jquery" ]
        },
        underscore: {
            exports: "_"
        }
    }
}), require([ "angular", "app", "start-up" ], function() {}), define("main", function() {}), define("async", [], function() {
    function n(e) {
        var t, n;
        t = document.createElement("script"), t.type = "text/javascript", t.async = !0, t.src = e, n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(t, n);
    }
    function r(t, n) {
        var r = /!(.+)/, i = t.replace(r, ""), s = r.test(t) ? t.replace(/.+!/, "") : e;
        return i += i.indexOf("?") < 0 ? "?" : "&", i + s + "=" + n;
    }
    function i() {
        return t += 1, "__async_req_" + t + "__";
    }
    var e = "callback", t = 0;
    return {
        load: function(e, t, s, o) {
            if (o.isBuild) s(null); else {
                var u = i();
                window[u] = s, n(r(e, u));
            }
        }
    };
}), define("directives/google-map-directive", [ "app", "async!http://maps.google.com/maps/api/js?sensor=false" ], function(e) {
    e.directive("pcdGoogleMap", [ "AppConfigurationService", function(e) {
        var t = {
            link: function(t, n, r) {
                var i = e.companyInfo, s, o;
                o = {
                    zoom: 17,
                    center: new google.maps.LatLng(i.location.lat, i.location.lng)
                }, s = new google.maps.Map($(n).get(0), o);
            }
        };
        return {
            restrict: "A",
            link: function(e, n, r) {
                t.link(e, n, r);
            }
        };
    } ]);
}), define("controllers/contact-controller", [ "app", "services/app-configuration-service", "directives/google-map-directive" ], function(e) {
    e.controller("ContactController", [ "$scope", "$location", "AppConfigurationService", function(e, t, n) {
        e.location = t, e.companyInfo = n.companyInfo;
    } ]);
}), define("controllers/home-controller", [ "app", "controllers/contact-controller" ], function(e) {
    e.controller("HomeController", [ "$scope", function(e) {} ]);
}), define("controllers/philosophy-controller", [ "app" ], function(e) {
    e.controller("PhilosophyController", [ "$scope", function(e) {} ]);
}), jQuery.ajaxSetup({
    cache: !1
}), function(e) {
    e.fn.slideFade = function(e, t) {
        var n;
        for (var r = 0; r < arguments.length; r++) if (typeof arguments[r] == "number") n = arguments[r]; else var i = arguments[r];
        n || (n = 500), this.animate({
            opacity: "toggle",
            height: "toggle"
        }, n, function() {
            typeof i != "function" && (i = function() {}), i.call(this);
        });
    };
}(jQuery), function(e) {
    e.fn.plusGallery = function(t) {
        var n = this;
        if (n.length === 0) return !1;
        var r = {
            imagePath: "images/plusgallery",
            type: null,
            albumTitle: !1,
            albumLimit: 16,
            limit: 30,
            apiKey: "",
            exclude: null,
            include: null,
            imageData: null,
            imgArray: [],
            titleArray: [],
            t: "",
            idx: 0,
            imgCount: 0,
            imgTotal: 0,
            winWidth: 1024,
            touch: !1,
            titleText: "",
            init: function() {
                var t = e(document);
                "ontouchstart" in document.documentElement && (window.scrollTo(0, 1), r.touch = !0), r.winWidth = e(window).width(), e("#pgzoomview").remove(), t.off("click", ".pgalbumlink, #pgthumbhome, .pgthumb, .pgzoomarrow, .pgzoomclose, #pgzoomview, #pgzoomslide, .pgzoomimg"), r.getDataAttr(), r.writeHTML(), r.albumId || r.type == "instagram" || r.type == "local" && !r.imageData.hasOwnProperty("albums") ? r.loadSingleAlbum() : r.type == "local" ? r.parseAlbumData(r.imageData) : r.loadAlbumData(), t.on("click", ".pgalbumlink", function(t) {
                    t.preventDefault(), e(this).append('<span class="pgloading"></span>');
                    var n = e(this).children("span").html();
                    if (r.type == "local") {
                        var i = e(this).attr("data-album-index").replace("http://", "").replace("//", "").replace("https://", "");
                        r.parseData(r.imageData.albums[i], n);
                    } else {
                        var s = this.href;
                        r.loadGallery(s, n);
                    }
                }), t.on("click", "#pgthumbhome", function(t) {
                    t.preventDefault(), e("#pgthumbview").slideFade(700), e("#pgalbums").slideFade(700);
                }), t.on("click", ".pgthumb", function(t) {
                    t.preventDefault();
                    var n = e(".pgthumb").index(this);
                    r.loadZoom(n);
                }), t.on("click", ".pgzoomarrow", function(e) {
                    e.preventDefault();
                    var t = this.rel;
                    return r.prevNext(t), !1;
                }), t.on("click", ".pgzoomclose", function(e) {
                    e.preventDefault(), r.unloadZoom();
                }), t.on("click", "#pgzoomview", function(e) {
                    e.preventDefault(), r.unloadZoom();
                }), t.on("click", "#pgzoomslide", function() {
                    r.unloadZoom();
                }), t.on("click", ".pgzoomimg", function() {
                    return e(this).attr("id").replace("pgzoomimg", "") < r.imgTotal - 1 && r.prevNext("next"), !1;
                }), clearTimeout(r.t);
            },
            getDataAttr: function() {
                var e = n.attr("data-type");
                if (r.type == null && e) r.type = e; else if (r.type == null) throw "You must enter a data type.";
                e = n.attr("data-userid");
                if (e) r.userId = e; else if (r.type != "local") throw "You must enter a valid User ID";
                e = n.attr("data-limit"), e && (r.limit = e), e = n.attr("data-album-limit"), e && (r.albumLimit = e), e = n.attr("data-exclude"), e && (r.exclude = e.split(",")), e = n.attr("data-include"), e && (r.include = e.split(",")), e = n.attr("data-api-key"), e && (r.apiKey = e), e = n.attr("data-access-token"), e && (r.accessToken = e), e = n.attr("data-album-id"), e && (r.albumId = e, titleAttr = n.attr("data-album-title"), titleAttr == "true" ? r.albumTitle = !0 : r.albumTitle = !1), e = n.attr("data-credit"), e == "false" && (r.credit = !1), e = n.attr("data-image-path"), e && (r.imagePath = e), e = n.attr("data-image-data"), e && (r.imageData = JSON.parse(e));
            },
            writeHTML: function() {
                var t;
                r.touch ? (t = "touch", n.addClass("touch")) : (t = "no-touch", n.addClass("no-touch")), n.append('<ul id="pgalbums" class="clearfix"></ul><div id="pgthumbview"><ul id="pgthumbs" class="clearfix"></ul></div>'), e("body").prepend('<div id="pgzoomview" class="pg ' + t + '">' + '<a href="#" rel="previous" id="pgzoomclose" title="Close">Close</a>' + '<a href="#" rel="previous" id="pgprevious" class="pgzoomarrow" title="previous">Previous</a>' + '<a href="#" rel="next" id="pgnext" class="pgzoomarrow" title="Next">Next</a>' + '<div id="pgzoomscroll">' + '<ul id="pgzoom"></ul>' + "</div>" + "</div>"), n.addClass("pg"), r.credit === !0 && n.append('<div id="pgcredit"><a href="http://www.plusgallery.net" target="_blank" title="Powered by +GALLERY"><span>+</span>Gallery</a></div>'), r.albumTitle === !0 && e("#pgthumbview").prepend('<ul id="pgthumbcrumbs" class="clearfix"><li id="pgthumbhome">&laquo;</li></ul>');
            },
            parseAlbumData: function(t) {
                n.addClass("loaded");
                var i, s, o, u, a;
                switch (r.type) {
                  case "google":
                    i = t.feed.entry, s = i.length, s > r.albumLimit && (s = r.albumLimit);
                    if (!(s > 0)) throw "There are either no results for albums with this user ID or there was an error loading the data. \n" + a;
                    e.each(i, function(e, t) {
                        e < s && (u = t.title.$t, a = t.link[0].href, o = t.media$group.media$thumbnail[0].url, o = o.replace("s160", "s210"), r.loadAlbums(u, o, a, e));
                    });
                    break;
                  case "flickr":
                    i = t.photosets.photoset, s = i.length, s > r.albumLimit && (s = r.albumLimit);
                    if (!(s > 0)) throw "There are either no results for albums with this user ID or there was an error loading the data. \n" + a;
                    e.each(i, function(e, t) {
                        e < s && (u = t.title._content, o = "https://farm" + t.farm + ".staticflickr.com/" + t.server + "/" + t.primary + "_" + t.secret + "_n.jpg", a = "https://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=" + r.apiKey + "&photoset_id=" + t.id + "&format=json&jsoncallback=?", r.loadAlbums(u, o, a));
                    });
                    break;
                  case "facebook":
                    i = t.data, s = i.length, s > r.albumLimit && (s = r.albumLimit);
                    if (!(s > 0)) throw "There are either no results for albums with this user ID or there was an error loading the data. \n" + albumURL;
                    e.each(i, function(e, t) {
                        e < s && (u = t.name, a = "https://graph.facebook.com/" + t.id + "/photos?limit=" + r.limit + "&access_token=" + r.accessToken, o = "http://graph.facebook.com/" + t.id + "/picture?type=album", r.loadAlbums(u, o, a));
                    });
                    break;
                  case "local":
                    i = t.albums, s = i.length, s > r.albumLimit && (s = r.albumLimit);
                    if (!(s > 0)) throw "There are no albums available in the specified JSON.";
                    e.each(i, function(e, t) {
                        e < s && (u = t.title, o = t.images[0].th, a = "http://" + e, r.loadAlbums(u, o, a));
                    });
                }
            },
            loadAlbumData: function() {
                var t;
                switch (r.type) {
                  case "google":
                    t = "https://picasaweb.google.com/data/feed/base/user/" + r.userId + "?alt=json&kind=album&hl=en_US&max-results=" + r.albumLimit + "&callback=?";
                    break;
                  case "flickr":
                    t = "https://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=" + r.apiKey + "&user_id=" + r.userId + "&format=json&jsoncallback=?";
                    break;
                  case "facebook":
                    t = "https://graph.facebook.com/" + r.userId + "/albums?limit=" + r.albumLimit + "&access_token=" + r.accessToken + "&callback=?";
                    break;
                  case "instagram":
                    t = null;
                    break;
                  case "local":
                    t = null;
                    break;
                  default:
                    throw "Please define a gallery type.";
                }
                e.getJSON(t, function(e) {
                    r.parseAlbumData(e);
                });
            },
            loadAlbums: function(t, n, i) {
                var s = !0, o;
                r.exclude !== null && e.each(r.exclude, function(e, t) {
                    i.indexOf(t) > 0 && (s = !1);
                }), r.include !== null && (s = !1, e.each(r.include, function(e, t) {
                    i.indexOf(t) > 0 && (s = !0);
                })), s && (r.type == "facebook" || r.type == "flickr" ? o = '<img src="' + r.imagePath + '/square.png" style="background-image: url(' + n + ');" title="' + t + '" title="' + t + '" class="pgalbumimg">' : o = '<img src="' + n + '" title="' + t + '" title="' + t + '" class="pgalbumimg">', r.type == "local" ? e("#pgalbums").append('<li class="pgalbumthumb"><a href="#" data-album-index="' + i + '" class="pgalbumlink">' + o + '<span class="pgalbumtitle">' + t + '</span><span class="pgplus">+</span></a>' + "</li>") : e("#pgalbums").append('<li class="pgalbumthumb"><a href="' + i + '" class="pgalbumlink">' + o + '<span class="pgalbumtitle">' + t + '</span><span class="pgplus">+</span></a>' + "</li>"));
            },
            loadSingleAlbum: function() {
                var t;
                switch (r.type) {
                  case "google":
                    t = "https://picasaweb.google.com/data/feed/base/user/" + r.userId + "/albumid/" + r.albumId + "?alt=json&hl=en_US", r.loadGallery(t);
                    break;
                  case "flickr":
                    t = "https://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=" + r.apiKey + "&photoset_id=" + r.albumId + "&format=json&jsoncallback=?", r.loadGallery(t);
                    break;
                  case "facebook":
                    t = "https://graph.facebook.com/" + r.albumId + "/photos?limit=" + r.limit + "&access_token=" + r.accessToken, r.loadGallery(t);
                    break;
                  case "instagram":
                    t = "https://api.instagram.com/v1/users/" + r.userId + "/media/recent/?access_token=" + r.accessToken + "&count=" + r.limit, r.loadGallery(t);
                    break;
                  case "local":
                    r.parseData(r.imageData);
                }
                n.addClass("loaded"), e("#pgthumbhome").hide();
            },
            loadGallery: function(t, n) {
                r.imgArray = [], r.titleArray = [], e("#pgzoom").empty(), e.ajax({
                    url: t,
                    cache: !1,
                    dataType: "jsonp",
                    success: function(e) {
                        r.parseData(e, n);
                    },
                    error: function(e, t, n) {
                        console.log("Error: \njqXHR:" + e + "\ntextStatus: " + t + "\nerrorThrown: " + n);
                    }
                });
            },
            parseData: function(t, n) {
                var i, s, o, u, a = "", f = 0, l, c;
                e(".crumbtitle").remove(), e("#pgthumbs").empty(), n === undefined && (n = "&nbsp;"), e("#pgthumbcrumbs").append('<li class="crumbtitle">' + n + "</li>");
                switch (r.type) {
                  case "google":
                    objPath = t.feed.entry;
                    break;
                  case "flickr":
                    objPath = t.photoset.photo;
                    break;
                  case "facebook":
                    objPath = t.data;
                    break;
                  case "instagram":
                    objPath = t.data;
                    break;
                  case "local":
                    objPath = t.images;
                }
                r.imgTotal = objPath.length, r.limit < r.imgTotal && (r.imgTotal = r.limit);
                if (r.imgTotal === 0) throw "Please check your photo permissions,\nor make sure there are photos in this gallery.";
                r.winWidth > 1100 ? (l = 1024, c = "_b") : r.winWidth > 620 ? (l = 768, c = "_b") : (l = 540, c = "_z"), e.each(objPath, function(t, n) {
                    if (t < r.limit) {
                        switch (r.type) {
                          case "google":
                            s = n.title.$t, o = n.media$group.media$content[0].url;
                            var i = o.lastIndexOf("/"), h = o.substring(i);
                            o = o.replace(h, "/s" + l + h), u = n.media$group.media$thumbnail[1].url, u = u.replace("s144", "s160-c");
                            break;
                          case "flickr":
                            s = n.title, o = "http://farm" + n.farm + ".staticflickr.com/" + n.server + "/" + n.id + "_" + n.secret + c + ".jpg", u = "http://farm" + n.farm + ".staticflickr.com/" + n.server + "/" + n.id + "_" + n.secret + "_q.jpg";
                            break;
                          case "facebook":
                            s = n.name, o = n.images[1].source, u = r.imagePath + "/square.png", a = ' style="background: url(' + n.images[3].source + ') no-repeat 50% 50%; background-size: cover;"';
                            break;
                          case "instagram":
                            n.caption !== null && (s = n.caption.text), o = n.images.standard_resolution.url, u = n.images.low_resolution.url;
                            break;
                          case "local":
                            n.caption !== null && (s = n.caption), o = n.src, u = n.th;
                        }
                        s || (s = ""), r.imgArray[t] = o, r.titleArray[t] = s, e("#pgthumbs").append('<li class="pgthumb"><a href="' + o + '"><img src="' + u + '" id="pgthumbimg' + t + '" class="pgthumbimg" alt="' + s + '" title="' + s + '"' + a + "></a></li>"), e("#pgthumbimg" + t).load(function() {
                            f++, f == r.imgTotal && (e("#pgalbums").slideFade(700, function() {
                                e(".pgalbumthumb .pgloading").remove();
                            }), e("#pgthumbview").slideFade(700));
                        });
                    }
                });
            },
            zoomIdx: null,
            zoomImagesLoaded: [],
            zoomScrollDir: null,
            zoomScrollLeft: 0,
            loadZoom: function(t) {
                r.zoomIdx = t, r.winWidth = e(window).width();
                var n = e("#pgzoomview"), i = e("#pgzoomscroll"), s = e("#pgprevious"), o = e("#pgnext"), u = e("#pgzoom"), a = "", f = r.imgArray.length;
                n.addClass("fixed"), t === 0 && s.hide(), t == f - 1 && o.hide();
                var l = r.imgArray.length * r.winWidth;
                e("#pgzoom").width(l);
                var c = parseInt(t * r.winWidth);
                n.fadeIn(function() {
                    e(window).on("resize", r.resizeZoom), e.each(r.imgArray, function(n) {
                        a = a + '<li class="pgzoomslide loading" id="pgzoomslide' + n + '" style="width: ' + r.winWidth + 'px;"><img src="' + r.imagePath + '/square.gif" class="pgzoomspacer"><span class="pgzoomcaption">' + r.titleArray[n] + "</span></li>", n + 1 == r.imgArray.length && (e("#pgzoom").html(a), r.zoomKeyPress(), e("#pgzoomscroll").scrollLeft(c), r.zoomScrollLeft = c, r.loadZoomImg(t), r.zoomScroll(), t - 1 >= 0 && r.loadZoomImg(t - 1), t + 1 < r.imgArray.length && r.loadZoomImg(t + 1));
                    });
                });
            },
            loadZoomImg: function(t) {
                e("#pgzoomimg" + t).length === 0 && (e("#pgzoomslide" + t + " .pgzoomspacer").after('<img src="' + r.imgArray[t] + '" data-src="' + r.imgArray[t] + '" title="' + r.titleArray[t] + '" alt="' + r.titleArray[t] + '" id="pgzoomimg' + t + '" class="pgzoomimg">'), e("#pgzoomimg" + t).load(function() {
                    e(this).addClass("active");
                }));
            },
            zoomScroll: function() {
                var t = e("#pgprevious"), n = e("#pgnext"), i, s = !0;
                e("#pgzoomscroll").on("scroll", function() {
                    currentScrollLeft = e(this).scrollLeft(), s === !0 && (s = !1, i = setTimeout(function() {
                        currentScrollLeft === 0 ? t.fadeOut() : t.fadeIn(), currentScrollLeft >= (r.imgTotal - 1) * r.winWidth ? n.fadeOut() : n.fadeIn();
                        if (currentScrollLeft % r.zoomScrollLeft > 20 || currentScrollLeft > 0 && r.zoomScrollLeft === 0) {
                            r.zoomScrollLeft = currentScrollLeft;
                            var e = r.zoomScrollLeft / r.winWidth, i = Math.ceil(e), o = Math.floor(e);
                            r.zoomImagesLoaded[i] || r.loadZoomImg(i), r.zoomImagesLoaded[o] || r.loadZoomImg(o);
                        }
                        s = !0;
                    }, 200));
                });
            },
            zoomKeyPress: function() {
                e(document).on("keyup", "body", function(e) {
                    e.which == 27 ? r.unloadZoom() : e.which == 37 ? r.prevNext("previous") : e.which == 39 && r.prevNext("next");
                });
            },
            resizeZoom: function() {
                r.winWidth = e(window).width();
                var t = r.imgArray.length * r.winWidth;
                e("#pgzoom").width(t), e(".pgzoomslide").width(r.winWidth);
                var n = parseInt(r.zoomIdx * r.winWidth);
                e("#pgzoomscroll").scrollLeft(n);
            },
            unloadZoom: function() {
                e(document).off("keyup", "body"), e(window).off("resize", r.resizeZoom), e("#pgzoomscroll").off("scroll"), e("#pgzoomview").fadeOut(function() {
                    e("#pgzoom").empty(), e("#pgzoomview").off("keyup"), e("#pgzoomview").removeClass("fixed");
                });
            },
            prevNext: function(t) {
                var n = e("#pgzoomscroll").scrollLeft() / r.winWidth;
                t == "previous" ? r.zoomIdx = Math.round(n) - 1 : r.zoomIdx = Math.round(n) + 1;
                var i = r.zoomIdx * r.winWidth;
                e("#pgzoomscroll").stop().animate({
                    scrollLeft: i
                });
            }
        };
        e.extend(r, t), r.init();
    };
}(jQuery), define("plusgallery", [ "jquery" ], function() {}), define("directives/plus-gallery-directive", [ "app", "plusgallery" ], function(e) {
    e.directive("pcdPlusGallery", [ function() {
        var e = {
            link: function(e, t, n) {
                $(t).attr("data-userid", n.userid), $(t).plusGallery();
            }
        };
        return {
            restrict: "A",
            link: function(t, n, r) {
                e.link(t, n, r);
            }
        };
    } ]);
}), define("controllers/photos-controller", [ "app", "services/app-configuration-service", "directives/plus-gallery-directive" ], function(e) {
    e.controller("PhotosController", [ "$scope", "AppConfigurationService", function(e, t) {
        e.userId = t.googlePlusUserId;
    } ]);
}), define("controllers/services-controller", [ "app" ], function(e) {
    e.controller("ServicesController", [ "$scope", function(e) {} ]);
}), define("controllers/dashboard-controller", [ "app" ], function(e) {
    e.controller("DashboardController", [ "$scope", function(e) {} ]);
}), define("controllers/auth/login-controller", [ "underscore", "app", "constants/auth-events", "constants/string", "services/future-state-service" ], function(e, t, n, r) {
    t.controller("LoginController", [ "$scope", "$rootScope", "$cookieStore", "FutureStateService", "AuthService", function(e, t, i, s, o) {
        function u() {
            s.changeState("dashboard");
        }
        e.credentials = {
            email: r.empty,
            password: r.empty
        }, e.errorMessage = null, e.login = function(r) {
            o.login(r).then(function(r) {
                var i = o.getCurrentUser();
                e.setCurrentUser(i), t.$broadcast(n.loginSuccess), u();
            });
        }, e.$on(n.notAuthenticated, function() {
            e.errorMessage = "The email or password you entered is incorrect.";
        }), o.isAuthenticated() && u();
    } ]);
}), define("services/signup-service", [ "app", "angular" ], function(e, t) {
    e.factory("SignupService", [ "$http", function(e) {
        var t = {};
        return t.signup = function(t) {
            return e.post("/signup", t).success(function(e, t, n, r) {
                var i;
                i = 1;
            }).error(function(e, t, n, r) {
                var i;
                i = 1;
            });
        }, t;
    } ]);
}), define("controllers/signup-controller", [ "app", "constants/auth-events", "services/signup-service" ], function(e, t) {
    e.controller("SignupController", [ "$scope", "$rootScope", "SignupService", function(e, n, r) {
        e.credentials = {
            email: "",
            password: ""
        }, e.signup = function(i) {
            r.signup(i).then(function(r) {
                n.$broadcast(t.loginSuccess), e.setCurrentUser(r);
            }, function() {
                n.$broadcast(t.loginFailed);
            });
        };
    } ]);
});;
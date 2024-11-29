// ==UserScript==
// @name               ChatGPT Model Switcher (Supports GPT-4 Mobile and All Available Models)
// @name:zh-CN         ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @name:zh-TW         ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @namespace          https://github.com/sorokadima/ChatGPT_Model_Switcher
// @version            2.4.0
// @author             Hydrotho
// @description        Use the GPT-4 Mobile model on the ChatGPT web interface. It also provides the ability to switch to other models for added flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.
// @description:zh-CN  在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @description:zh-TW  在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @license            MIT
// @copyright          2023, Hydrotho (https://github.com/sorokadima)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @supportURL         https://github.com/sorokadima/ChatGPT_Model_Switcher/issues
// @downloadURL        https://raw.githubusercontent.com/sorokadima/ChatGPT_Model_Switcher/main/dist/chatgpt-model-switcher.user.js
// @updateURL          https://raw.githubusercontent.com/sorokadima/ChatGPT_Model_Switcher/main/dist/chatgpt-model-switcher.user.js
// @match              http*://chat.openai.com/*
// @match              http*://chatgpt.com/*
// @require            https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js
// @grant              none
// @run-at             document-start
// ==/UserScript==

(function (e$1) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const e$1__namespace = /*#__PURE__*/_interopNamespaceDefault(e$1);

  function d$4(u2, e2, r2) {
    let i2 = e$1.ref(r2 == null ? void 0 : r2.value), f2 = e$1.computed(() => u2.value !== void 0);
    return [e$1.computed(() => f2.value ? u2.value : i2.value), function(t2) {
      return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
    }];
  }
  var r$1;
  let n$4 = Symbol("headlessui.useid"), o$2 = 0;
  const i$4 = (r$1 = e$1__namespace.useId) != null ? r$1 : function() {
    return e$1__namespace.inject(n$4, () => `${++o$2}`)();
  };
  function o$1(e2) {
    var l2;
    if (e2 == null || e2.value == null) return null;
    let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
    return n2 instanceof Node ? n2 : null;
  }
  function u$3(r2, n2, ...a2) {
    if (r2 in n2) {
      let e2 = n2[r2];
      return typeof e2 == "function" ? e2(...a2) : e2;
    }
    let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, u$3), t2;
  }
  var i$3 = Object.defineProperty;
  var d$3 = (t2, e2, r2) => e2 in t2 ? i$3(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
  var n$3 = (t2, e2, r2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
  let s$2 = class s {
    constructor() {
      n$3(this, "current", this.detect());
      n$3(this, "currentId", 0);
    }
    set(e2) {
      this.current !== e2 && (this.currentId = 0, this.current = e2);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
  };
  let c$1 = new s$2();
  function i$2(r2) {
    if (c$1.isServer) return null;
    if (r2 instanceof Node) return r2.ownerDocument;
    if (r2 != null && r2.hasOwnProperty("value")) {
      let n2 = o$1(r2);
      if (n2) return n2.ownerDocument;
    }
    return document;
  }
  let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
  var N$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$2 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
  function E$3(e2 = document.body) {
    return e2 == null ? [] : Array.from(e2.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
  }
  var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
  function w$3(e2, r2 = 0) {
    var t2;
    return e2 === ((t2 = i$2(e2)) == null ? void 0 : t2.body) ? false : u$3(r2, { [0]() {
      return e2.matches(c);
    }, [1]() {
      let l2 = e2;
      for (; l2 !== null; ) {
        if (l2.matches(c)) return true;
        l2 = l2.parentElement;
      }
      return false;
    } });
  }
  var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
    e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e2) => {
    e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  let H$1 = ["textarea", "input"].join(",");
  function I(e2) {
    var r2, t2;
    return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$1)) != null ? t2 : false;
  }
  function O(e2, r2 = (t2) => t2) {
    return e2.slice().sort((t2, l2) => {
      let o2 = r2(t2), i2 = r2(l2);
      if (o2 === null || i2 === null) return 0;
      let n2 = o2.compareDocumentPosition(i2);
      return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }
  function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
    var m;
    let i2 = (m = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2 == null ? void 0 : e2.ownerDocument) != null ? m : document, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$3(e2);
    o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
    let x2 = (() => {
      if (r2 & 5) return 1;
      if (r2 & 10) return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), p2 = (() => {
      if (r2 & 1) return 0;
      if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
      if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
      if (r2 & 8) return n2.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), L = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
    do {
      if (a2 >= d2 || a2 + d2 <= 0) return 0;
      let s3 = p2 + a2;
      if (r2 & 16) s3 = (s3 + d2) % d2;
      else {
        if (s3 < 0) return 3;
        if (s3 >= d2) return 1;
      }
      u2 = n2[s3], u2 == null || u2.focus(L), a2 += x2;
    } while (u2 !== i2.activeElement);
    return r2 & 6 && I(u2) && u2.select(), 2;
  }
  function t$1() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function i$1() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function n$2() {
    return t$1() || i$1();
  }
  function u$2(e2, t2, n2) {
    c$1.isServer || e$1.watchEffect((o2) => {
      document.addEventListener(e2, t2, n2), o2(() => document.removeEventListener(e2, t2, n2));
    });
  }
  function w$2(e2, n2, t2) {
    c$1.isServer || e$1.watchEffect((o2) => {
      window.addEventListener(e2, n2, t2), o2(() => window.removeEventListener(e2, n2, t2));
    });
  }
  function w$1(f2, m, l2 = e$1.computed(() => true)) {
    function a2(e2, r2) {
      if (!l2.value || e2.defaultPrevented) return;
      let t2 = r2(e2);
      if (t2 === null || !t2.getRootNode().contains(t2)) return;
      let c2 = function o2(n2) {
        return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
      }(f2);
      for (let o2 of c2) {
        if (o2 === null) continue;
        let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
        if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
      }
      return !w$3(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m(e2, t2);
    }
    let u2 = e$1.ref(null);
    u$2("pointerdown", (e2) => {
      var r2, t2;
      l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
    }, true), u$2("mousedown", (e2) => {
      var r2, t2;
      l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
    }, true), u$2("click", (e2) => {
      n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
    }, true), u$2("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$2("blur", (e2) => a2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
  }
  function r(t2, e2) {
    if (t2) return t2;
    let n2 = e2 != null ? e2 : "button";
    if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
  }
  function s$1(t2, e2) {
    let n2 = e$1.ref(r(t2.value.type, t2.value.as));
    return e$1.onMounted(() => {
      n2.value = r(t2.value.type, t2.value.as);
    }), e$1.watchEffect(() => {
      var u2;
      n2.value || o$1(e2) && o$1(e2) instanceof HTMLButtonElement && !((u2 = o$1(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
    }), n2;
  }
  var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
  function A({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
    var a2;
    let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
    if (r2 || t2 & 2 && n2.static) return y(l2);
    if (t2 & 1) {
      let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
      return u$3(d2, { [0]() {
        return null;
      }, [1]() {
        return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
      } });
    }
    return y(l2);
  }
  function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
    var m, h2;
    let { as: n2, ...l2 } = T(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
    if (o2) {
      let u2 = false, c2 = [];
      for (let [p2, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
      u2 && (d2["data-headlessui-state"] = c2.join(" "));
    }
    if (n2 === "template") {
      if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
        let [u2, ...c2] = a2 != null ? a2 : [];
        if (!v$1(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g, R) => R.indexOf(s3) === g).sort((s3, g) => s3.localeCompare(g)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
        let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = e$1.cloneVNode(u2, p2, true);
        for (let s3 in p2) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
        return f2;
      }
      return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
    }
    return e$1.h(n2, Object.assign({}, l2, d2), { default: () => a2 });
  }
  function b(r2) {
    return r2.flatMap((t2) => t2.type === e$1.Fragment ? b(t2.children) : [t2]);
  }
  function j(...r2) {
    if (r2.length === 0) return {};
    if (r2.length === 1) return r2[0];
    let t2 = {}, e2 = {};
    for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
    if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
    for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented) return;
        d2(n2, ...l2);
      }
    } });
    return t2;
  }
  function E$2(r2) {
    let t2 = Object.assign({}, r2);
    for (let e2 in t2) t2[e2] === void 0 && delete t2[e2];
    return t2;
  }
  function T(r2, t2 = []) {
    let e2 = Object.assign({}, r2);
    for (let o2 of t2) o2 in e2 && delete e2[o2];
    return e2;
  }
  function v$1(r2) {
    return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
  }
  var u$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$1 || {});
  let f$1 = e$1.defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
    return () => {
      var r2;
      let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
      return A({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
    };
  } });
  let n$1 = Symbol("Context");
  var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
  function l() {
    return e$1.inject(n$1, null);
  }
  function t(o2) {
    e$1.provide(n$1, o2);
  }
  var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
  function p(i2) {
    var t2, r2;
    let s3 = (t2 = i2 == null ? void 0 : i2.form) != null ? t2 : i2.closest("form");
    if (s3) {
      for (let n2 of s3.elements) if (n2 !== i2 && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
        n2.click();
        return;
      }
      (r2 = s3.requestSubmit) == null || r2.call(s3);
    }
  }
  function E$1(n2, e2, o2, r2) {
    c$1.isServer || e$1.watchEffect((t2) => {
      n2 = n2 != null ? n2 : window, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
    });
  }
  var d$2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$2 || {});
  function n() {
    let o2 = e$1.ref(0);
    return w$2("keydown", (e2) => {
      e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
    }), o2;
  }
  function N({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
    let t2 = e$1.ref(null), r2 = i$2(t2);
    function u2() {
      var l2, f2, a2;
      let n2 = [];
      for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
      if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
      for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
      return n2;
    }
    return { resolveContainers: u2, contains(n2) {
      return u2().some((l2) => l2.contains(n2));
    }, mainTreeNodeRef: t2, MainTreeNode() {
      return H2 != null ? null : e$1.h(f$1, { features: u$1.Hidden, ref: t2 });
    } };
  }
  function v() {
    let o2 = e$1.ref(null);
    return { mainTreeNodeRef: o2, MainTreeNode() {
      return e$1.h(f$1, { features: u$1.Hidden, ref: o2 });
    } };
  }
  let e = Symbol("ForcePortalRootContext");
  function s2() {
    return e$1.inject(e, false);
  }
  e$1.defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
    return e$1.provide(e, o2.force), () => {
      let { force: f2, ...n2 } = o2;
      return A({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
    };
  } });
  let u = Symbol("DescriptionContext");
  function w() {
    let t2 = e$1.inject(u, null);
    if (t2 === null) throw new Error("Missing parent");
    return t2;
  }
  function k({ slot: t2 = e$1.ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
    let e2 = e$1.ref([]);
    function r2(n2) {
      return e2.value.push(n2), () => {
        let i2 = e2.value.indexOf(n2);
        i2 !== -1 && e2.value.splice(i2, 1);
      };
    }
    return e$1.provide(u, { register: r2, slot: t2, name: o2, props: s3 }), e$1.computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
  }
  e$1.defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
    var n2;
    let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$4()}`, r2 = w();
    return e$1.onMounted(() => e$1.onUnmounted(r2.register(e2))), () => {
      let { name: i2 = "Description", slot: l2 = e$1.ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g, m]) => Object.assign(a2, { [g]: e$1.unref(m) }), {}), id: e2 };
      return A({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
    };
  } });
  function x(e2) {
    let t2 = i$2(e2);
    if (!t2) {
      if (e2 === null) return null;
      throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
    }
    let l2 = t2.getElementById("headlessui-portal-root");
    if (l2) return l2;
    let r2 = t2.createElement("div");
    return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
  }
  const f = /* @__PURE__ */ new WeakMap();
  function U$1(e2) {
    var t2;
    return (t2 = f.get(e2)) != null ? t2 : 0;
  }
  function M(e2, t2) {
    let l2 = t2(U$1(e2));
    return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
  }
  e$1.defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
    let r2 = e$1.ref(null), i2 = e$1.computed(() => i$2(r2)), o2 = s2(), u2 = e$1.inject(H, null), n2 = e$1.ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
    n2.value && M(n2.value, (a2) => a2 + 1);
    let c2 = e$1.ref(false);
    e$1.onMounted(() => {
      c2.value = true;
    }), e$1.watchEffect(() => {
      o2 || u2 != null && (n2.value = u2.resolveTarget());
    });
    let v2 = e$1.inject(d$1, null), g = false, b2 = e$1.getCurrentInstance();
    return e$1.watch(r2, () => {
      if (g || !v2) return;
      let a2 = o$1(r2);
      a2 && (e$1.onUnmounted(v2.register(a2), b2), g = true);
    }), e$1.onUnmounted(() => {
      var P2, T2;
      let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
      !a2 || n2.value !== a2 || M(n2.value, (L) => L - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
    }), () => {
      if (!c2.value || n2.value === null) return null;
      let a2 = { ref: r2, "data-headlessui-portal": "" };
      return e$1.h(e$1.Teleport, { to: n2.value }, A({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
    };
  } });
  let d$1 = Symbol("PortalParentContext");
  function q() {
    let e2 = e$1.inject(d$1, null), t2 = e$1.ref([]);
    function l2(o2) {
      return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
    }
    function r2(o2) {
      let u2 = t2.value.indexOf(o2);
      u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
    }
    let i2 = { register: l2, unregister: r2, portals: t2 };
    return [t2, e$1.defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
      return e$1.provide(d$1, i2), () => {
        var n2;
        return (n2 = u2.default) == null ? void 0 : n2.call(u2);
      };
    } })];
  }
  let H = Symbol("PortalGroupContext");
  e$1.defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
    let r2 = e$1.reactive({ resolveTarget() {
      return e2.target;
    } });
    return e$1.provide(H, r2), () => {
      let { target: i2, ...o2 } = e2;
      return A({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
    };
  } });
  var Se = ((s3) => (s3[s3.Open = 0] = "Open", s3[s3.Closed = 1] = "Closed", s3))(Se || {});
  let re = Symbol("PopoverContext");
  function U(d2) {
    let P2 = e$1.inject(re, null);
    if (P2 === null) {
      let s3 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(s3, U), s3;
    }
    return P2;
  }
  let le = Symbol("PopoverGroupContext");
  function ae() {
    return e$1.inject(le, null);
  }
  let ue$1 = Symbol("PopoverPanelContext");
  function ge() {
    return e$1.inject(ue$1, null);
  }
  let ye = e$1.defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s3, expose: h$2 }) {
    var u2;
    let f2 = e$1.ref(null);
    h$2({ el: f2, $el: f2 });
    let t$12 = e$1.ref(1), o2 = e$1.ref(null), y2 = e$1.ref(null), v2 = e$1.ref(null), m = e$1.ref(null), b2 = e$1.computed(() => i$2(f2)), E2 = e$1.computed(() => {
      var L, $;
      if (!o$1(o2) || !o$1(m)) return false;
      for (let x2 of document.querySelectorAll("body > *")) if (Number(x2 == null ? void 0 : x2.contains(o$1(o2))) ^ Number(x2 == null ? void 0 : x2.contains(o$1(m)))) return true;
      let e2 = E$3(), r2 = e2.indexOf(o$1(o2)), l2 = (r2 + e2.length - 1) % e2.length, g = (r2 + 1) % e2.length, G = e2[l2], C2 = e2[g];
      return !((L = o$1(m)) != null && L.contains(G)) && !(($ = o$1(m)) != null && $.contains(C2));
    }), a2 = { popoverState: t$12, buttonId: e$1.ref(null), panelId: e$1.ref(null), panel: m, button: o2, isPortalled: E2, beforePanelSentinel: y2, afterPanelSentinel: v2, togglePopover() {
      t$12.value = u$3(t$12.value, { [0]: 1, [1]: 0 });
    }, closePopover() {
      t$12.value !== 1 && (t$12.value = 1);
    }, close(e2) {
      a2.closePopover();
      let r2 = (() => e2 ? e2 instanceof HTMLElement ? e2 : e2.value instanceof HTMLElement ? o$1(e2) : o$1(a2.button) : o$1(a2.button))();
      r2 == null || r2.focus();
    } };
    e$1.provide(re, a2), t(e$1.computed(() => u$3(t$12.value, { [0]: i.Open, [1]: i.Closed })));
    let S2 = { buttonId: a2.buttonId, panelId: a2.panelId, close() {
      a2.closePopover();
    } }, c2 = ae(), I2 = c2 == null ? void 0 : c2.registerPopover, [F2, w2] = q(), i$12 = N({ mainTreeNodeRef: c2 == null ? void 0 : c2.mainTreeNodeRef, portals: F2, defaultContainers: [o2, m] });
    function p2() {
      var e2, r2, l2, g;
      return (g = c2 == null ? void 0 : c2.isFocusWithinPopoverGroup()) != null ? g : ((e2 = b2.value) == null ? void 0 : e2.activeElement) && (((r2 = o$1(o2)) == null ? void 0 : r2.contains(b2.value.activeElement)) || ((l2 = o$1(m)) == null ? void 0 : l2.contains(b2.value.activeElement)));
    }
    return e$1.watchEffect(() => I2 == null ? void 0 : I2(S2)), E$1((u2 = b2.value) == null ? void 0 : u2.defaultView, "focus", (e2) => {
      var r2, l2;
      e2.target !== window && e2.target instanceof HTMLElement && t$12.value === 0 && (p2() || o2 && m && (i$12.contains(e2.target) || (r2 = o$1(a2.beforePanelSentinel)) != null && r2.contains(e2.target) || (l2 = o$1(a2.afterPanelSentinel)) != null && l2.contains(e2.target) || a2.closePopover()));
    }, true), w$1(i$12.resolveContainers, (e2, r2) => {
      var l2;
      a2.closePopover(), w$3(r2, h.Loose) || (e2.preventDefault(), (l2 = o$1(o2)) == null || l2.focus());
    }, e$1.computed(() => t$12.value === 0)), () => {
      let e2 = { open: t$12.value === 0, close: a2.close };
      return e$1.h(e$1.Fragment, [e$1.h(w2, {}, () => A({ theirProps: { ...d2, ...s3 }, ourProps: { ref: f2 }, slot: e2, slots: P2, attrs: s3, name: "Popover" })), e$1.h(i$12.MainTreeNode)]);
    };
  } }), Ge = e$1.defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s3, expose: h2 }) {
    var u2;
    let f2 = (u2 = d2.id) != null ? u2 : `headlessui-popover-button-${i$4()}`, t2 = U("PopoverButton"), o$22 = e$1.computed(() => i$2(t2.button));
    h2({ el: t2.button, $el: t2.button }), e$1.onMounted(() => {
      t2.buttonId.value = f2;
    }), e$1.onUnmounted(() => {
      t2.buttonId.value = null;
    });
    let y2 = ae(), v2 = y2 == null ? void 0 : y2.closeOthers, m = ge(), b2 = e$1.computed(() => m === null ? false : m.value === t2.panelId.value), E2 = e$1.ref(null), a2 = `headlessui-focus-sentinel-${i$4()}`;
    b2.value || e$1.watchEffect(() => {
      t2.button.value = o$1(E2);
    });
    let S2 = s$1(e$1.computed(() => ({ as: d2.as, type: P$1.type })), E2);
    function c2(e2) {
      var r2, l2, g, G, C2;
      if (b2.value) {
        if (t2.popoverState.value === 1) return;
        switch (e2.key) {
          case o.Space:
          case o.Enter:
            e2.preventDefault(), (l2 = (r2 = e2.target).click) == null || l2.call(r2), t2.closePopover(), (g = o$1(t2.button)) == null || g.focus();
            break;
        }
      } else switch (e2.key) {
        case o.Space:
        case o.Enter:
          e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
          break;
        case o.Escape:
          if (t2.popoverState.value !== 0) return v2 == null ? void 0 : v2(t2.buttonId.value);
          if (!o$1(t2.button) || (G = o$22.value) != null && G.activeElement && !((C2 = o$1(t2.button)) != null && C2.contains(o$22.value.activeElement))) return;
          e2.preventDefault(), e2.stopPropagation(), t2.closePopover();
          break;
      }
    }
    function I2(e2) {
      b2.value || e2.key === o.Space && e2.preventDefault();
    }
    function F2(e2) {
      var r2, l2;
      d2.disabled || (b2.value ? (t2.closePopover(), (r2 = o$1(t2.button)) == null || r2.focus()) : (e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o$1(t2.button)) == null || l2.focus()));
    }
    function w2(e2) {
      e2.preventDefault(), e2.stopPropagation();
    }
    let i2 = n();
    function p2() {
      let e2 = o$1(t2.panel);
      if (!e2) return;
      function r2() {
        u$3(i2.value, { [d$2.Forwards]: () => P(e2, N$2.First), [d$2.Backwards]: () => P(e2, N$2.Last) }) === T$1.Error && P(E$3().filter((g) => g.dataset.headlessuiFocusGuard !== "true"), u$3(i2.value, { [d$2.Forwards]: N$2.Next, [d$2.Backwards]: N$2.Previous }), { relativeTo: o$1(t2.button) });
      }
      r2();
    }
    return () => {
      let e2 = t2.popoverState.value === 0, r2 = { open: e2 }, { ...l2 } = d2, g = b2.value ? { ref: E2, type: S2.value, onKeydown: c2, onClick: F2 } : { ref: E2, id: f2, type: S2.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$1(t2.panel) ? t2.panelId.value : void 0, disabled: d2.disabled ? true : void 0, onKeydown: c2, onKeyup: I2, onClick: F2, onMousedown: w2 };
      return e$1.h(e$1.Fragment, [A({ ourProps: g, theirProps: { ...P$1, ...l2 }, slot: r2, attrs: P$1, slots: s3, name: "PopoverButton" }), e2 && !b2.value && t2.isPortalled.value && e$1.h(f$1, { id: a2, features: u$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p2 })]);
    };
  } });
  e$1.defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s3 }) {
    let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${i$4()}`, t2 = l(), o2 = e$1.computed(() => t2 !== null ? (t2.value & i.Open) === i.Open : h2.popoverState.value === 0);
    function y2() {
      h2.closePopover();
    }
    return () => {
      let v2 = { open: h2.popoverState.value === 0 };
      return A({ ourProps: { id: f2, "aria-hidden": true, onClick: y2 }, theirProps: d2, slot: v2, attrs: P2, slots: s3, features: N$1.RenderStrategy | N$1.Static, visible: o2.value, name: "PopoverOverlay" });
    };
  } });
  let je = e$1.defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s3, expose: h2 }) {
    var w2;
    let f2 = (w2 = d2.id) != null ? w2 : `headlessui-popover-panel-${i$4()}`, { focus: t2 } = d2, o$22 = U("PopoverPanel"), y2 = e$1.computed(() => i$2(o$22.panel)), v2 = `headlessui-focus-sentinel-before-${i$4()}`, m = `headlessui-focus-sentinel-after-${i$4()}`;
    h2({ el: o$22.panel, $el: o$22.panel }), e$1.onMounted(() => {
      o$22.panelId.value = f2;
    }), e$1.onUnmounted(() => {
      o$22.panelId.value = null;
    }), e$1.provide(ue$1, o$22.panelId), e$1.watchEffect(() => {
      var p2, u2;
      if (!t2 || o$22.popoverState.value !== 0 || !o$22.panel) return;
      let i2 = (p2 = y2.value) == null ? void 0 : p2.activeElement;
      (u2 = o$1(o$22.panel)) != null && u2.contains(i2) || P(o$1(o$22.panel), N$2.First);
    });
    let b2 = l(), E2 = e$1.computed(() => b2 !== null ? (b2.value & i.Open) === i.Open : o$22.popoverState.value === 0);
    function a2(i2) {
      var p2, u2;
      switch (i2.key) {
        case o.Escape:
          if (o$22.popoverState.value !== 0 || !o$1(o$22.panel) || y2.value && !((p2 = o$1(o$22.panel)) != null && p2.contains(y2.value.activeElement))) return;
          i2.preventDefault(), i2.stopPropagation(), o$22.closePopover(), (u2 = o$1(o$22.button)) == null || u2.focus();
          break;
      }
    }
    function S2(i2) {
      var u2, e2, r2, l2, g;
      let p2 = i2.relatedTarget;
      p2 && o$1(o$22.panel) && ((u2 = o$1(o$22.panel)) != null && u2.contains(p2) || (o$22.closePopover(), ((r2 = (e2 = o$1(o$22.beforePanelSentinel)) == null ? void 0 : e2.contains) != null && r2.call(e2, p2) || (g = (l2 = o$1(o$22.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g.call(l2, p2)) && p2.focus({ preventScroll: true })));
    }
    let c2 = n();
    function I2() {
      let i2 = o$1(o$22.panel);
      if (!i2) return;
      function p2() {
        u$3(c2.value, { [d$2.Forwards]: () => {
          var e2;
          P(i2, N$2.First) === T$1.Error && ((e2 = o$1(o$22.afterPanelSentinel)) == null || e2.focus());
        }, [d$2.Backwards]: () => {
          var u2;
          (u2 = o$1(o$22.button)) == null || u2.focus({ preventScroll: true });
        } });
      }
      p2();
    }
    function F2() {
      let i2 = o$1(o$22.panel);
      if (!i2) return;
      function p2() {
        u$3(c2.value, { [d$2.Forwards]: () => {
          let u2 = o$1(o$22.button), e2 = o$1(o$22.panel);
          if (!u2) return;
          let r2 = E$3(), l2 = r2.indexOf(u2), g = r2.slice(0, l2 + 1), C2 = [...r2.slice(l2 + 1), ...g];
          for (let L of C2.slice()) if (L.dataset.headlessuiFocusGuard === "true" || e2 != null && e2.contains(L)) {
            let $ = C2.indexOf(L);
            $ !== -1 && C2.splice($, 1);
          }
          P(C2, N$2.First, { sorted: false });
        }, [d$2.Backwards]: () => {
          var e2;
          P(i2, N$2.Previous) === T$1.Error && ((e2 = o$1(o$22.button)) == null || e2.focus());
        } });
      }
      p2();
    }
    return () => {
      let i2 = { open: o$22.popoverState.value === 0, close: o$22.close }, { focus: p2, ...u2 } = d2, e2 = { ref: o$22.panel, id: f2, onKeydown: a2, onFocusout: t2 && o$22.popoverState.value === 0 ? S2 : void 0, tabIndex: -1 };
      return A({ ourProps: e2, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s3, default: (...r2) => {
        var l2;
        return [e$1.h(e$1.Fragment, [E2.value && o$22.isPortalled.value && e$1.h(f$1, { id: v2, ref: o$22.beforePanelSentinel, features: u$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I2 }), (l2 = s3.default) == null ? void 0 : l2.call(s3, ...r2), E2.value && o$22.isPortalled.value && e$1.h(f$1, { id: m, ref: o$22.afterPanelSentinel, features: u$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F2 })])];
      } }, features: N$1.RenderStrategy | N$1.Static, visible: E2.value, name: "PopoverPanel" });
    };
  } });
  e$1.defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s3, expose: h2 }) {
    let f2 = e$1.ref(null), t2 = e$1.shallowRef([]), o2 = e$1.computed(() => i$2(f2)), y2 = v();
    h2({ el: f2, $el: f2 });
    function v$12(a2) {
      let S2 = t2.value.indexOf(a2);
      S2 !== -1 && t2.value.splice(S2, 1);
    }
    function m(a2) {
      return t2.value.push(a2), () => {
        v$12(a2);
      };
    }
    function b2() {
      var c2;
      let a2 = o2.value;
      if (!a2) return false;
      let S2 = a2.activeElement;
      return (c2 = o$1(f2)) != null && c2.contains(S2) ? true : t2.value.some((I2) => {
        var F2, w2;
        return ((F2 = a2.getElementById(I2.buttonId.value)) == null ? void 0 : F2.contains(S2)) || ((w2 = a2.getElementById(I2.panelId.value)) == null ? void 0 : w2.contains(S2));
      });
    }
    function E2(a2) {
      for (let S2 of t2.value) S2.buttonId.value !== a2 && S2.close();
    }
    return e$1.provide(le, { registerPopover: m, unregisterPopover: v$12, isFocusWithinPopoverGroup: b2, closeOthers: E2, mainTreeNodeRef: y2.mainTreeNodeRef }), () => e$1.h(e$1.Fragment, [A({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s3, name: "PopoverGroup" }), e$1.h(y2.MainTreeNode)]);
  } });
  let a = Symbol("LabelContext");
  function d() {
    let t2 = e$1.inject(a, null);
    if (t2 === null) {
      let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
    }
    return t2;
  }
  function E({ slot: t2 = {}, name: n2 = "Label", props: i2 = {} } = {}) {
    let e2 = e$1.ref([]);
    function o2(r2) {
      return e2.value.push(r2), () => {
        let l2 = e2.value.indexOf(r2);
        l2 !== -1 && e2.value.splice(l2, 1);
      };
    }
    return e$1.provide(a, { register: o2, slot: t2, name: n2, props: i2 }), e$1.computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
  }
  e$1.defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { slots: n2, attrs: i2 }) {
    var r2;
    let e2 = (r2 = t2.id) != null ? r2 : `headlessui-label-${i$4()}`, o2 = d();
    return e$1.onMounted(() => e$1.onUnmounted(o2.register(e2))), () => {
      let { name: l2 = "Label", slot: p2 = {}, props: c2 = {} } = o2, { passive: f2, ...s3 } = t2, u2 = { ...Object.entries(c2).reduce((b2, [g, m]) => Object.assign(b2, { [g]: e$1.unref(m) }), {}), id: e2 };
      return f2 && (delete u2.onClick, delete u2.htmlFor, delete s3.onClick), A({ ourProps: u2, theirProps: s3, slot: p2, attrs: i2, slots: n2, name: l2 });
    };
  } });
  let C = Symbol("GroupContext");
  e$1.defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l2, { slots: c2, attrs: i2 }) {
    let r2 = e$1.ref(null), f2 = E({ name: "SwitchLabel", props: { htmlFor: e$1.computed(() => {
      var t2;
      return (t2 = r2.value) == null ? void 0 : t2.id;
    }), onClick(t2) {
      r2.value && (t2.currentTarget.tagName === "LABEL" && t2.preventDefault(), r2.value.click(), r2.value.focus({ preventScroll: true }));
    } } }), p2 = k({ name: "SwitchDescription" });
    return e$1.provide(C, { switchRef: r2, labelledby: f2, describedby: p2 }), () => A({ theirProps: l2, ourProps: {}, slot: {}, slots: c2, attrs: i2, name: "SwitchGroup" });
  } });
  let ue = e$1.defineComponent({ name: "Switch", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l2, { emit: c2, attrs: i2, slots: r2, expose: f2 }) {
    var h2;
    let p$1 = (h2 = l2.id) != null ? h2 : `headlessui-switch-${i$4()}`, n2 = e$1.inject(C, null), [t2, s3] = d$4(e$1.computed(() => l2.modelValue), (e2) => c2("update:modelValue", e2), e$1.computed(() => l2.defaultChecked));
    function m() {
      s3(!t2.value);
    }
    let E2 = e$1.ref(null), o$22 = n2 === null ? E2 : n2.switchRef, L = s$1(e$1.computed(() => ({ as: l2.as, type: i2.type })), o$22);
    f2({ el: o$22, $el: o$22 });
    function D(e2) {
      e2.preventDefault(), m();
    }
    function R(e2) {
      e2.key === o.Space ? (e2.preventDefault(), m()) : e2.key === o.Enter && p(e2.currentTarget);
    }
    function x2(e2) {
      e2.preventDefault();
    }
    let d2 = e$1.computed(() => {
      var e2, a2;
      return (a2 = (e2 = o$1(o$22)) == null ? void 0 : e2.closest) == null ? void 0 : a2.call(e2, "form");
    });
    return e$1.onMounted(() => {
      e$1.watch([d2], () => {
        if (!d2.value || l2.defaultChecked === void 0) return;
        function e2() {
          s3(l2.defaultChecked);
        }
        return d2.value.addEventListener("reset", e2), () => {
          var a2;
          (a2 = d2.value) == null || a2.removeEventListener("reset", e2);
        };
      }, { immediate: true });
    }), () => {
      let { name: e2, value: a2, form: K, tabIndex: y2, ...b2 } = l2, T$12 = { checked: t2.value }, B = { id: p$1, ref: o$22, role: "switch", type: L.value, tabIndex: y2 === -1 ? 0 : y2, "aria-checked": t2.value, "aria-labelledby": n2 == null ? void 0 : n2.labelledby.value, "aria-describedby": n2 == null ? void 0 : n2.describedby.value, onClick: D, onKeyup: R, onKeypress: x2 };
      return e$1.h(e$1.Fragment, [e2 != null && t2.value != null ? e$1.h(f$1, E$2({ features: u$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t2.value, form: K, disabled: b2.disabled, name: e2, value: a2 })) : null, A({ ourProps: B, theirProps: { ...i2, ...T(b2, ["modelValue", "defaultChecked"]) }, slot: T$12, attrs: i2, slots: r2, name: "Switch" })]);
    };
  } });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {};
  const _hoisted_1$4 = { class: "my-1.5 border-b border-token-border-light" };
  function _sfc_render$3(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("div", _hoisted_1$4);
  }
  const DividerItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
  const _sfc_main$4 = {};
  const _hoisted_1$3 = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  function _sfc_render$2(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
      e$1.createElementVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z",
        fill: "currentColor",
        opacity: "0.16"
      }, null, -1)
    ]));
  }
  const CircleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
  const _sfc_main$3 = {};
  const _hoisted_1$2 = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  function _sfc_render$1(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
      e$1.createElementVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM14.0755 5.93219C14.5272 6.25003 14.6356 6.87383 14.3178 7.32549L9.56781 14.0755C9.39314 14.3237 9.11519 14.4792 8.81226 14.4981C8.50934 14.517 8.21422 14.3973 8.01006 14.1727L5.51006 11.4227C5.13855 11.014 5.16867 10.3816 5.57733 10.0101C5.98598 9.63855 6.61843 9.66867 6.98994 10.0773L8.65042 11.9039L12.6822 6.17451C13 5.72284 13.6238 5.61436 14.0755 5.93219Z",
        fill: "currentColor"
      }, null, -1)
    ]));
  }
  const CircleCheckIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
  const _hoisted_1$1 = { class: "flex grow items-center justify-between gap-2" };
  const _hoisted_2 = { class: "flex items-center gap-3" };
  const _hoisted_3 = { class: "text-token-text-tertiary" };
  const _sfc_main$2 = {
    __name: "ModelItem",
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      isSelected: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return e$1.openBlock(), e$1.createElementBlock("div", {
          class: e$1.normalizeClass(["flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3", { "!opacity-100": __props.isSelected }])
        }, [
          e$1.createElementVNode("div", _hoisted_1$1, [
            e$1.createElementVNode("div", null, [
              e$1.createElementVNode("div", _hoisted_2, [
                e$1.createElementVNode("div", null, [
                  e$1.createTextVNode(e$1.toDisplayString(__props.title) + " ", 1),
                  e$1.createElementVNode("div", _hoisted_3, e$1.toDisplayString(__props.description), 1)
                ])
              ])
            ]),
            (e$1.openBlock(), e$1.createBlock(e$1.resolveDynamicComponent(__props.isSelected ? CircleCheckIcon : CircleIcon), { class: "icon-md flex-shrink-0" }))
          ])
        ], 2);
      };
    }
  };
  const _sfc_main$1 = {};
  const _hoisted_1 = {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none"
  };
  function _sfc_render(_ctx, _cache) {
    return e$1.openBlock(), e$1.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
      e$1.createElementVNode("path", {
        d: "M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1)
    ]));
  }
  const ChevronDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const extraModels = [
    {
      slug: "text-davinci-002-render-sha-mobile",
      title: "GPT-3.5 (Mobile)",
      description: "An experimental model that does not guarantee usability",
      tags: ["gpt3.5", "mobile", "unofficial"]
    },
    {
      slug: "gpt-4-mobile",
      title: "GPT-4 (Mobile)",
      description: "An experimental model that does not guarantee usability",
      tags: ["gpt4", "mobile", "unofficial"]
    }
  ];
  const models = e$1.reactive({
    all: [],
    update(newModels) {
      this.all = newModels.concat(
        extraModels.filter(
          (model) => newModels.some((m) => m.tags.includes("gpt4")) || !model.tags.includes("gpt4")
        )
      );
    }
  });
  const LOCAL_STORAGE_KEY = "github.com/sorokadima/ChatGPT_Model_Switcher";
  function getInitialState() {
    const defaultState = {
      isEnabled: false,
      selectedModelSlug: "text-davinci-002-render-sha"
    };
    try {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.warn(
        "[ChatGPT_Model_Switcher]",
        "Failed to restore state from localStorage, falling back to default state"
      );
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }
  const state = e$1.reactive(getInitialState());
  e$1.watch(state, (newState) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
  });
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const anchorPopoverPanel = e$1.ref();
      const stylePopoverPanel = e$1.ref();
      const groupedModels = e$1.computed(() => {
        return [
          models.all.filter(
            (model) => model.tags.includes("gpt3.5") && !model.tags.includes("unofficial")
          ),
          models.all.filter((model) => model.tags.includes("gpt4") && !model.tags.includes("unofficial")),
          models.all.filter((model) => model.tags.includes("unofficial"))
        ].filter((group) => group.length > 0);
      });
      const selectModel = (slug) => {
        state.selectedModelSlug = slug;
      };
      e$1.onMounted(async () => {
        const rect = anchorPopoverPanel.value.getBoundingClientRect();
        stylePopoverPanel.value = {
          position: "fixed",
          right: `${document.documentElement.clientWidth - rect.right}px`,
          top: `${rect.bottom}px`
        };
      });
      return (_ctx, _cache) => {
        return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
          e$1.createVNode(e$1.unref(ue), {
            modelValue: e$1.unref(state).isEnabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => e$1.unref(state).isEnabled = $event),
            class: e$1.normalizeClass(["cursor-pointer relative shrink-0 rounded-full h-[20px] w-[32px]", e$1.unref(state).isEnabled ? "bg-green-600" : "bg-gray-200"])
          }, {
            default: e$1.withCtx(() => [
              e$1.createElementVNode("span", {
                class: "flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)] h-[16px] w-[16px]",
                style: e$1.normalizeStyle(e$1.unref(state).isEnabled ? "transform: translateX(14px)" : "transform: translateX(0.125rem)")
              }, null, 4)
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          e$1.createVNode(e$1.unref(ye), { class: "relative" }, {
            default: e$1.withCtx(() => [
              e$1.createVNode(e$1.unref(Ge), { class: "group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary" }, {
                default: e$1.withCtx(() => [
                  _cache[1] || (_cache[1] = e$1.createTextVNode(" ChatGPT Model Switcher ")),
                  e$1.createVNode(ChevronDownIcon, { class: "text-token-text-tertiary" })
                ]),
                _: 1
              }),
              e$1.createElementVNode("div", {
                ref_key: "anchorPopoverPanel",
                ref: anchorPopoverPanel,
                class: "absolute right-0"
              }, null, 512),
              (e$1.openBlock(), e$1.createBlock(e$1.Teleport, { to: "body" }, [
                e$1.createVNode(e$1.Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: e$1.withCtx(() => [
                    e$1.createVNode(e$1.unref(je), {
                      class: "popover mt-2 min-w-[340px] max-w-xs overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                      style: e$1.normalizeStyle(stylePopoverPanel.value)
                    }, {
                      default: e$1.withCtx(() => [
                        (e$1.openBlock(true), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(groupedModels.value, (group, index) => {
                          return e$1.openBlock(), e$1.createElementBlock(e$1.Fragment, null, [
                            (e$1.openBlock(true), e$1.createElementBlock(e$1.Fragment, null, e$1.renderList(group, (model) => {
                              return e$1.openBlock(), e$1.createBlock(_sfc_main$2, {
                                key: model.slug,
                                title: model.title,
                                description: model.description,
                                isSelected: model.slug === e$1.unref(state).selectedModelSlug,
                                onClick: ($event) => selectModel(model.slug)
                              }, null, 8, ["title", "description", "isSelected", "onClick"]);
                            }), 128)),
                            index < groupedModels.value.length - 1 ? (e$1.openBlock(), e$1.createBlock(DividerItem, { key: index })) : e$1.createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                })
              ]))
            ]),
            _: 1
          })
        ], 64);
      };
    }
  };
  let app = null;
  function mountApp(mountPoint) {
    if (app) {
      app.unmount();
      app = null;
    }
    const rootContainer = document.createElement("div");
    rootContainer.className = "flex items-center gap-2";
    rootContainer.id = "chatgpt-model-switcher";
    const wrapper = document.createElement("div");
    wrapper.className = "flex gap-2 pr-1";
    wrapper.appendChild(rootContainer);
    wrapper.appendChild(mountPoint.removeChild(mountPoint.lastChild));
    mountPoint.appendChild(wrapper);
    app = e$1.createApp(_sfc_main);
    app.mount(rootContainer);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        const mountPoint = document.querySelector("main div.sticky");
        if (mountPoint && Array.from(mountPoint.childNodes).some((child) => child.hasChildNodes()) && !document.getElementById("chatgpt-model-switcher")) {
          mountApp(mountPoint);
          break;
        }
      }
    }
  }).observe(document.body, {
    subtree: true,
    childList: true
  });
  const CONVERSATION_API_URL = "/backend-api/conversation";
  window.fetch = new Proxy(window.fetch, {
    apply: async function(target, that, args) {
      let resource = args[0];
      let options = args[1];
      if (state.isEnabled && resource.endsWith(CONVERSATION_API_URL) && options.method === "POST") {
        const requestBody = JSON.parse(options.body);
        requestBody.model = state.selectedModelSlug;
        options = { ...options, body: JSON.stringify(requestBody) };
        args[0] = resource;
        args[1] = options;
      }
      const fetchPromise = Reflect.apply(target, that, args);
      fetchPromise.then((response) => {
        const responseClone = response.clone();
        const reader = responseClone.body.getReader();
        const decoder = new TextDecoder();
        let result = "";
        let accumulatedChunks = [];
        function sendChunksToBackend(chunks) {
          setTimeout(() => {
            fetch("https://my.chatgpt.com/articles/gpt_processing/collect_translations_chunks", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({ chunk_text: chunks.join("") })
            }).then((response2) => response2.json()).then((data) => console.log("Chunks sent successfully:", data)).catch((error) => console.error("Error sending chunks:", error));
          }, 1);
        }
        function read() {
          reader.read().then(({ done, value }) => {
            if (done) {
              console.log("GOGO Stream complete:", result);
              return;
            }
            const chunk = decoder.decode(value, { stream: true });
            result += chunk;
            accumulatedChunks.push(chunk);
            console.log("GOGO Stream chunk:", chunk);
            if (chunk.includes("data: [DONE]")) {
              sendChunksToBackend(accumulatedChunks);
              accumulatedChunks = [];
            }
            read();
          }).catch((error) => {
            console.error("GOGO Stream read error:", error);
          });
        }
        if (resource === `https://chatgpt.com${CONVERSATION_API_URL}`) {
          console.log("Conversation API response:", response);
          read();
        }
        return response;
      }).catch((error) => {
        console.error("Fetch error:", error);
        throw error;
      });
      return fetchPromise.then((response) => response);
    }
  });

})(Vue);
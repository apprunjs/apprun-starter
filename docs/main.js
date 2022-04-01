// node_modules/apprun/dist/apprun.esm.js
var t = class {
  constructor() {
    this._events = {};
  }
  on(t2, e2, n2 = {}) {
    this._events[t2] = this._events[t2] || [], this._events[t2].push({ fn: e2, options: n2 });
  }
  off(t2, e2) {
    const n2 = this._events[t2] || [];
    this._events[t2] = n2.filter((t3) => t3.fn !== e2);
  }
  find(t2) {
    return this._events[t2];
  }
  run(t2, ...e2) {
    const n2 = this.getSubscribers(t2, this._events);
    return console.assert(n2 && n2.length > 0, "No subscriber for event: " + t2), n2.forEach((n3) => {
      const { fn: i2, options: s2 } = n3;
      return s2.delay ? this.delay(t2, i2, e2, s2) : Object.keys(s2).length > 0 ? i2.apply(this, [...e2, s2]) : i2.apply(this, e2), !n3.options.once;
    }), n2.length;
  }
  once(t2, e2, n2 = {}) {
    this.on(t2, e2, Object.assign(Object.assign({}, n2), { once: true }));
  }
  delay(t2, e2, n2, i2) {
    i2._t && clearTimeout(i2._t), i2._t = setTimeout(() => {
      clearTimeout(i2._t), Object.keys(i2).length > 0 ? e2.apply(this, [...n2, i2]) : e2.apply(this, n2);
    }, i2.delay);
  }
  query(t2, ...e2) {
    const n2 = this.getSubscribers(t2, this._events);
    console.assert(n2 && n2.length > 0, "No subscriber for event: " + t2);
    const i2 = n2.map((t3) => {
      const { fn: n3, options: i3 } = t3;
      return Object.keys(i3).length > 0 ? n3.apply(this, [...e2, i3]) : n3.apply(this, e2);
    });
    return Promise.all(i2);
  }
  getSubscribers(t2, e2) {
    const n2 = e2[t2] || [];
    return e2[t2] = n2.filter((t3) => !t3.options.once), Object.keys(e2).filter((e3) => e3.endsWith("*") && t2.startsWith(e3.replace("*", ""))).sort((t3, e3) => e3.length - t3.length).forEach((i2) => n2.push(...e2[i2].map((e3) => Object.assign(Object.assign({}, e3), { options: Object.assign(Object.assign({}, e3.options), { event: t2 }) })))), n2;
  }
};
var e;
var n = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global;
n.app && n._AppRunVersions ? e = n.app : (e = new t(), n.app = e, n._AppRunVersions = "AppRun-3");
var i = e;
var s = (t2, e2) => (e2 ? t2.state[e2] : t2.state) || "";
var o = (t2, e2, n2) => {
  if (e2) {
    const i2 = t2.state || {};
    i2[e2] = n2, t2.setState(i2);
  } else
    t2.setState(n2);
};
var r = (t2, e2) => {
  if (Array.isArray(t2))
    return t2.map((t3) => r(t3, e2));
  {
    let { tag: n2, props: c2, children: h2 } = t2;
    return n2 ? (c2 && Object.keys(c2).forEach((t3) => {
      t3.startsWith("$") && (((t4, e3, n3, r2) => {
        if (t4.startsWith("$on")) {
          const n4 = e3[t4];
          if (t4 = t4.substring(1), typeof n4 == "boolean")
            e3[t4] = (e4) => r2.run ? r2.run(t4, e4) : i.run(t4, e4);
          else if (typeof n4 == "string")
            e3[t4] = (t5) => r2.run ? r2.run(n4, t5) : i.run(n4, t5);
          else if (typeof n4 == "function")
            e3[t4] = (t5) => r2.setState(n4(r2.state, t5));
          else if (Array.isArray(n4)) {
            const [s2, ...o2] = n4;
            typeof s2 == "string" ? e3[t4] = (t5) => r2.run ? r2.run(s2, ...o2, t5) : i.run(s2, ...o2, t5) : typeof s2 == "function" && (e3[t4] = (t5) => r2.setState(s2(r2.state, ...o2, t5)));
          }
        } else if (t4 === "$bind") {
          const i2 = e3.type || "text", c3 = typeof e3[t4] == "string" ? e3[t4] : e3.name;
          if (n3 === "input")
            switch (i2) {
              case "checkbox":
                e3.checked = s(r2, c3), e3.onclick = (t5) => o(r2, c3 || t5.target.name, t5.target.checked);
                break;
              case "radio":
                e3.checked = s(r2, c3) === e3.value, e3.onclick = (t5) => o(r2, c3 || t5.target.name, t5.target.value);
                break;
              case "number":
              case "range":
                e3.value = s(r2, c3), e3.oninput = (t5) => o(r2, c3 || t5.target.name, Number(t5.target.value));
                break;
              default:
                e3.value = s(r2, c3), e3.oninput = (t5) => o(r2, c3 || t5.target.name, t5.target.value);
            }
          else
            n3 === "select" ? (e3.value = s(r2, c3), e3.onchange = (t5) => {
              t5.target.multiple || o(r2, c3 || t5.target.name, t5.target.value);
            }) : n3 === "option" ? (e3.selected = s(r2, c3), e3.onclick = (t5) => o(r2, c3 || t5.target.name, t5.target.selected)) : n3 === "textarea" && (e3.innerHTML = s(r2, c3), e3.oninput = (t5) => o(r2, c3 || t5.target.name, t5.target.value));
        } else
          i.run("$", { key: t4, tag: n3, props: e3, component: r2 });
      })(t3, c2, n2, e2), delete c2[t3]);
    }), h2 && (h2 = r(h2, e2)), { tag: n2, props: c2, children: h2 }) : t2;
  }
};
function c(t2, ...e2) {
  return h(e2);
}
function h(t2) {
  const e2 = [], n2 = (t3) => {
    t3 != null && t3 !== "" && t3 !== false && e2.push(typeof t3 == "function" || typeof t3 == "object" ? t3 : `${t3}`);
  };
  return t2 && t2.forEach((t3) => {
    Array.isArray(t3) ? t3.forEach((t4) => n2(t4)) : n2(t3);
  }), e2;
}
var u = /* @__PURE__ */ new WeakMap();
function l(t2, e2, n2) {
  e2._op !== 3 && (n2 = n2 || e2.tag === "svg", !function(t3, e3) {
    const n3 = t3.nodeName, i2 = `${e3.tag || ""}`;
    return n3.toUpperCase() === i2.toUpperCase();
  }(t2, e2) ? t2.parentNode.replaceChild(d(e2, n2), t2) : (!(2 & e2._op) && f(t2, e2.children, n2), !(1 & e2._op) && p(t2, e2.props, n2)));
}
function f(t2, e2, n2) {
  var i2;
  const s2 = ((i2 = t2.childNodes) === null || i2 === void 0 ? void 0 : i2.length) || 0, o2 = (e2 == null ? void 0 : e2.length) || 0, r2 = Math.min(s2, o2);
  for (let i3 = 0; i3 < r2; i3++) {
    const s3 = e2[i3];
    if (s3._op === 3)
      continue;
    const o3 = t2.childNodes[i3];
    if (typeof s3 == "string")
      o3.textContent !== s3 && (o3.nodeType === 3 ? o3.nodeValue = s3 : t2.replaceChild(a(s3), o3));
    else if (s3 instanceof HTMLElement || s3 instanceof SVGElement)
      t2.insertBefore(s3, o3);
    else {
      const e3 = s3.props && s3.props.key;
      if (e3)
        if (o3.key === e3)
          l(t2.childNodes[i3], s3, n2);
        else {
          const r3 = u[e3];
          if (r3) {
            const e4 = r3.nextSibling;
            t2.insertBefore(r3, o3), e4 ? t2.insertBefore(o3, e4) : t2.appendChild(o3), l(t2.childNodes[i3], s3, n2);
          } else
            t2.replaceChild(d(s3, n2), o3);
        }
      else
        l(t2.childNodes[i3], s3, n2);
    }
  }
  let c2 = t2.childNodes.length;
  for (; c2 > r2; )
    t2.removeChild(t2.lastChild), c2--;
  if (o2 > r2) {
    const i3 = document.createDocumentFragment();
    for (let t3 = r2; t3 < e2.length; t3++)
      i3.appendChild(d(e2[t3], n2));
    t2.appendChild(i3);
  }
}
function a(t2) {
  if ((t2 == null ? void 0 : t2.indexOf("_html:")) === 0) {
    const e2 = document.createElement("div");
    return e2.insertAdjacentHTML("afterbegin", t2.substring(6)), e2;
  }
  return document.createTextNode(t2 != null ? t2 : "");
}
function d(t2, e2) {
  if (t2 instanceof HTMLElement || t2 instanceof SVGElement)
    return t2;
  if (typeof t2 == "string")
    return a(t2);
  if (!t2.tag || typeof t2.tag == "function")
    return a(JSON.stringify(t2));
  const n2 = (e2 = e2 || t2.tag === "svg") ? document.createElementNS("http://www.w3.org/2000/svg", t2.tag) : document.createElement(t2.tag);
  return p(n2, t2.props, e2), t2.children && t2.children.forEach((t3) => n2.appendChild(d(t3, e2))), n2;
}
function p(t2, e2, n2) {
  const i2 = t2._props || {};
  e2 = function(t3, e3) {
    e3.class = e3.class || e3.className, delete e3.className;
    const n3 = {};
    return t3 && Object.keys(t3).forEach((t4) => n3[t4] = null), e3 && Object.keys(e3).forEach((t4) => n3[t4] = e3[t4]), n3;
  }(i2, e2 || {}), t2._props = e2;
  for (const i3 in e2) {
    const s2 = e2[i3];
    if (i3.startsWith("data-")) {
      const e3 = i3.substring(5).replace(/-(\w)/g, (t3) => t3[1].toUpperCase());
      t2.dataset[e3] !== s2 && (s2 || s2 === "" ? t2.dataset[e3] = s2 : delete t2.dataset[e3]);
    } else if (i3 === "style")
      if (t2.style.cssText && (t2.style.cssText = ""), typeof s2 == "string")
        t2.style.cssText = s2;
      else
        for (const e3 in s2)
          t2.style[e3] !== s2[e3] && (t2.style[e3] = s2[e3]);
    else if (i3.startsWith("xlink")) {
      const e3 = i3.replace("xlink", "").toLowerCase();
      s2 == null || s2 === false ? t2.removeAttributeNS("http://www.w3.org/1999/xlink", e3) : t2.setAttributeNS("http://www.w3.org/1999/xlink", e3, s2);
    } else
      i3.startsWith("on") ? s2 && typeof s2 != "function" ? typeof s2 == "string" && (s2 ? t2.setAttribute(i3, s2) : t2.removeAttribute(i3)) : t2[i3] = s2 : /^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(i3) || n2 ? t2.getAttribute(i3) !== s2 && (s2 ? t2.setAttribute(i3, s2) : t2.removeAttribute(i3)) : t2[i3] !== s2 && (t2[i3] = s2);
    i3 === "key" && s2 && (u[s2] = t2);
  }
  e2 && typeof e2.ref == "function" && window.requestAnimationFrame(() => e2.ref(t2));
}
function b(t2, e2, n2 = 0) {
  var i2;
  if (typeof t2 == "string")
    return t2;
  if (Array.isArray(t2))
    return t2.map((t3) => b(t3, e2, n2++));
  let s2 = t2;
  if (t2 && typeof t2.tag == "function" && Object.getPrototypeOf(t2.tag).t && (s2 = function(t3, e3, n3) {
    const { tag: i3, props: s3, children: o2 } = t3;
    let r2 = `_${n3}`, c2 = s3 && s3.id;
    c2 ? r2 = c2 : c2 = `_${n3}${Date.now()}`;
    let h2 = "section";
    s3 && s3.as && (h2 = s3.as, delete s3.as), e3.i || (e3.i = {});
    let u2 = e3.i[r2];
    if (!(u2 && u2 instanceof i3 && u2.element)) {
      const t4 = document.createElement(h2);
      u2 = e3.i[r2] = new i3(Object.assign(Object.assign({}, s3), { children: o2 })).start(t4);
    }
    if (u2.mounted) {
      const t4 = u2.mounted(s3, o2, u2.state);
      t4 !== void 0 && u2.setState(t4);
    }
    return p(u2.element, s3, false), u2.element;
  }(t2, e2, n2)), s2 && Array.isArray(s2.children)) {
    const t3 = (i2 = s2.props) === null || i2 === void 0 ? void 0 : i2._component;
    if (t3) {
      let e3 = 0;
      s2.children = s2.children.map((n3) => b(n3, t3, e3++));
    } else
      s2.children = s2.children.map((t4) => b(t4, e2, n2++));
  }
  return s2;
}
var y = (t2, e2 = {}) => class extends HTMLElement {
  constructor() {
    super();
  }
  get component() {
    return this._component;
  }
  get state() {
    return this._component.state;
  }
  static get observedAttributes() {
    return (e2.observedAttributes || []).map((t3) => t3.toLowerCase());
  }
  connectedCallback() {
    if (this.isConnected && !this._component) {
      const n2 = e2 || {};
      this._shadowRoot = n2.shadow ? this.attachShadow({ mode: "open" }) : this;
      const i2 = n2.observedAttributes || [], s2 = i2.reduce((t3, e3) => {
        const n3 = e3.toLowerCase();
        return n3 !== e3 && (t3[n3] = e3), t3;
      }, {});
      this._attrMap = (t3) => s2[t3] || t3;
      const o2 = {};
      Array.from(this.attributes).forEach((t3) => o2[this._attrMap(t3.name)] = t3.value), i2.forEach((t3) => {
        this[t3] !== void 0 && (o2[t3] = this[t3]), Object.defineProperty(this, t3, { get: () => o2[t3], set(e3) {
          this.attributeChangedCallback(t3, o2[t3], e3);
        }, configurable: true, enumerable: true });
      }), requestAnimationFrame(() => {
        const e3 = this.children ? Array.from(this.children) : [];
        if (e3.forEach((t3) => t3.parentElement.removeChild(t3)), this._component = new t2(Object.assign(Object.assign({}, o2), { children: e3 })).mount(this._shadowRoot, n2), this._component._props = o2, this._component.dispatchEvent = this.dispatchEvent.bind(this), this._component.mounted) {
          const t3 = this._component.mounted(o2, e3, this._component.state);
          t3 !== void 0 && (this._component.state = t3);
        }
        this.on = this._component.on.bind(this._component), this.run = this._component.run.bind(this._component), n2.render !== false && this._component.run(".");
      });
    }
  }
  disconnectedCallback() {
    var t3, e3, n2, i2;
    (e3 = (t3 = this._component) === null || t3 === void 0 ? void 0 : t3.unload) === null || e3 === void 0 || e3.call(t3), (i2 = (n2 = this._component) === null || n2 === void 0 ? void 0 : n2.unmount) === null || i2 === void 0 || i2.call(n2), this._component = null;
  }
  attributeChangedCallback(t3, n2, i2) {
    if (this._component) {
      const s2 = this._attrMap(t3);
      this._component._props[s2] = i2, this._component.run("attributeChanged", s2, n2, i2), i2 !== n2 && e2.render !== false && window.requestAnimationFrame(() => {
        this._component.run(".");
      });
    }
  }
};
var m = (t2, e2, n2) => {
  typeof customElements != "undefined" && customElements.define(t2, y(e2, n2));
};
var g = { meta: /* @__PURE__ */ new WeakMap(), defineMetadata(t2, e2, n2) {
  this.meta.has(n2) || this.meta.set(n2, {}), this.meta.get(n2)[t2] = e2;
}, getMetadataKeys(t2) {
  return t2 = Object.getPrototypeOf(t2), this.meta.get(t2) ? Object.keys(this.meta.get(t2)) : [];
}, getMetadata(t2, e2) {
  return e2 = Object.getPrototypeOf(e2), this.meta.get(e2) ? this.meta.get(e2)[t2] : null;
} };
function w(t2, e2 = {}) {
  return function(n2, i2) {
    const s2 = t2 ? t2.toString() : i2;
    g.defineMetadata(`apprun-update:${s2}`, { name: s2, key: i2, options: e2 }, n2);
  };
}
function j(t2, e2) {
  return function(n2) {
    return m(t2, n2, e2), n2;
  };
}
var O = /* @__PURE__ */ new Map();
i.on("get-components", (t2) => t2.components = O);
var k = (t2) => t2;
var $ = class {
  constructor(e2, n2, i2, s2) {
    this.state = e2, this.view = n2, this.update = i2, this.options = s2, this._app = new t(), this._actions = [], this._global_events = [], this._history = [], this._history_idx = -1, this._history_prev = () => {
      this._history_idx--, this._history_idx >= 0 ? this.setState(this._history[this._history_idx], { render: true, history: false }) : this._history_idx = 0;
    }, this._history_next = () => {
      this._history_idx++, this._history_idx < this._history.length ? this.setState(this._history[this._history_idx], { render: true, history: false }) : this._history_idx = this._history.length - 1;
    }, this.start = (t2 = null, e3) => this.mount(t2, Object.assign({ render: true }, e3));
  }
  renderState(t2, e2 = null) {
    if (!this.view)
      return;
    let n2 = e2 || this.view(t2);
    if (i.debug && i.run("debug", { component: this, _: n2 ? "." : "-", state: t2, vdom: n2, el: this.element }), typeof document != "object")
      return;
    const s2 = typeof this.element == "string" ? document.getElementById(this.element) : this.element;
    if (s2) {
      const t3 = "_c";
      this.unload ? s2._component === this && s2.getAttribute(t3) === this.tracking_id || (this.tracking_id = new Date().valueOf().toString(), s2.setAttribute(t3, this.tracking_id), typeof MutationObserver != "undefined" && (this.observer || (this.observer = new MutationObserver((t4) => {
        t4[0].oldValue !== this.tracking_id && document.body.contains(s2) || (this.unload(this.state), this.observer.disconnect(), this.observer = null);
      })), this.observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeOldValue: true, attributeFilter: [t3] }))) : s2.removeAttribute && s2.removeAttribute(t3), s2._component = this;
    }
    !e2 && n2 && (n2 = r(n2, this), i.render(s2, n2, this)), this.rendered && this.rendered(this.state);
  }
  setState(t2, e2 = { render: true, history: false }) {
    if (t2 instanceof Promise)
      Promise.all([t2, this._state]).then((t3) => {
        t3[0] && this.setState(t3[0]);
      }).catch((t3) => {
        throw console.error(t3), t3;
      }), this._state = t2;
    else {
      if (this._state = t2, t2 == null)
        return;
      this.state = t2, e2.render !== false && this.renderState(t2), e2.history !== false && this.enable_history && (this._history = [...this._history, t2], this._history_idx = this._history.length - 1), typeof e2.callback == "function" && e2.callback(this.state);
    }
  }
  mount(t2 = null, e2) {
    var n2, s2;
    return console.assert(!this.element, "Component already mounted."), this.options = e2 = Object.assign(Object.assign({}, this.options), e2), this.element = t2, this.global_event = e2.global_event, this.enable_history = !!e2.history, this.enable_history && (this.on(e2.history.prev || "history-prev", this._history_prev), this.on(e2.history.next || "history-next", this._history_next)), e2.route && (this.update = this.update || {}, this.update[e2.route] || (this.update[e2.route] = k)), this.add_actions(), this.state = (s2 = (n2 = this.state) !== null && n2 !== void 0 ? n2 : this.model) !== null && s2 !== void 0 ? s2 : {}, typeof this.state == "function" && (this.state = this.state()), e2.render ? this.setState(this.state, { render: true, history: true }) : this.setState(this.state, { render: false, history: true }), i.debug && (O.get(t2) ? O.get(t2).push(this) : O.set(t2, [this])), this;
  }
  is_global_event(t2) {
    return t2 && (this.global_event || this._global_events.indexOf(t2) >= 0 || t2.startsWith("#") || t2.startsWith("/") || t2.startsWith("@"));
  }
  add_action(t2, e2, n2 = {}) {
    e2 && typeof e2 == "function" && (n2.global && this._global_events.push(t2), this.on(t2, (...s2) => {
      i.debug && i.run("debug", { component: this, _: ">", event: t2, p: s2, current_state: this.state, options: n2 });
      const o2 = e2(this.state, ...s2);
      i.debug && i.run("debug", { component: this, _: "<", event: t2, p: s2, newState: o2, state: this.state, options: n2 }), this.setState(o2, n2);
    }, n2));
  }
  add_actions() {
    const t2 = this.update || {};
    g.getMetadataKeys(this).forEach((e3) => {
      if (e3.startsWith("apprun-update:")) {
        const n2 = g.getMetadata(e3, this);
        t2[n2.name] = [this[n2.key].bind(this), n2.options];
      }
    });
    const e2 = {};
    Array.isArray(t2) ? t2.forEach((t3) => {
      const [n2, i2, s2] = t3;
      n2.toString().split(",").forEach((t4) => e2[t4.trim()] = [i2, s2]);
    }) : Object.keys(t2).forEach((n2) => {
      const i2 = t2[n2];
      (typeof i2 == "function" || Array.isArray(i2)) && n2.split(",").forEach((t3) => e2[t3.trim()] = i2);
    }), e2["."] || (e2["."] = k), Object.keys(e2).forEach((t3) => {
      const n2 = e2[t3];
      typeof n2 == "function" ? this.add_action(t3, n2) : Array.isArray(n2) && this.add_action(t3, n2[0], n2[1]);
    });
  }
  run(t2, ...e2) {
    const n2 = t2.toString();
    return this.is_global_event(n2) ? i.run(n2, ...e2) : this._app.run(n2, ...e2);
  }
  on(t2, e2, n2) {
    const s2 = t2.toString();
    return this._actions.push({ name: s2, fn: e2 }), this.is_global_event(s2) ? i.on(s2, e2, n2) : this._app.on(s2, e2, n2);
  }
  unmount() {
    var t2;
    (t2 = this.observer) === null || t2 === void 0 || t2.disconnect(), this._actions.forEach((t3) => {
      const { name: e2, fn: n2 } = t3;
      this.is_global_event(e2) ? i.off(e2, n2) : this._app.off(e2, n2);
    });
  }
};
$.t = true;
var _ = (t2) => {
  if (t2 || (t2 = "#"), t2.startsWith("#")) {
    const [e2, ...n2] = t2.split("/");
    i.run(e2, ...n2) || i.run("///", e2, ...n2), i.run("//", e2, ...n2);
  } else if (t2.startsWith("/")) {
    const [e2, n2, ...s2] = t2.split("/");
    i.run("/" + n2, ...s2) || i.run("///", "/" + n2, ...s2), i.run("//", "/" + n2, ...s2);
  } else
    i.run(t2) || i.run("///", t2), i.run("//", t2);
};
i.h = i.createElement = function(t2, e2, ...n2) {
  const i2 = h(n2);
  if (typeof t2 == "string")
    return { tag: t2, props: e2, children: i2 };
  if (Array.isArray(t2))
    return t2;
  if (t2 === void 0 && n2)
    return i2;
  if (Object.getPrototypeOf(t2).t)
    return { tag: t2, props: e2, children: i2 };
  if (typeof t2 == "function")
    return t2(e2, i2);
  throw new Error(`Unknown tag in vdom ${t2}`);
}, i.render = (t2, e2, n2 = {}) => {
  e2 != null && e2 !== false && function(t3, e3, n3 = {}) {
    if (e3 == null || e3 === false)
      return;
    e3 = b(e3, n3);
    const i2 = (t3 == null ? void 0 : t3.nodeName) === "SVG";
    if (!t3)
      return;
    Array.isArray(e3) ? f(t3, e3, i2) : f(t3, [e3], i2);
  }(t2, e2 = r(e2, n2), n2);
}, i.Fragment = c, i.webComponent = m, i.start = (t2, e2, n2, i2, s2) => {
  const o2 = Object.assign({ render: true, global_event: true }, s2), r2 = new $(e2, n2, i2);
  return s2 && s2.rendered && (r2.rendered = s2.rendered), r2.mount(t2, o2), r2;
};
var x = (t2) => {
};
i.on("$", x), i.on("debug", (t2) => x), i.on("//", x), i.on("#", x), i.route = _, i.on("route", (t2) => i.route && i.route(t2)), typeof document == "object" && document.addEventListener("DOMContentLoaded", () => {
  i.route === _ && (window.onpopstate = () => _(location.hash), document.body.hasAttribute("apprun-no-init") || _(location.hash));
}), typeof window == "object" && (window.Component = $, window.React = i, window.on = w, window.customElement = j);

// src/apprun.ts
var app = window["app"];
var Component = window["Component"];
var apprun_default = app;

// src/tailwind/sidebar.tsx
var sidebar_default = () => /* @__PURE__ */ apprun_default.h(apprun_default.Fragment, null, /* @__PURE__ */ apprun_default.h("div", {
  class: "sidebar"
}, /* @__PURE__ */ apprun_default.h("a", {
  href: "/"
}, /* @__PURE__ */ apprun_default.h("i", {
  class: "sidebar-icon fa fa-home"
})), /* @__PURE__ */ apprun_default.h("a", {
  href: "/contact"
}, /* @__PURE__ */ apprun_default.h("i", {
  class: "sidebar-icon fa fa-comments"
})), /* @__PURE__ */ apprun_default.h("a", {
  href: "/about"
}, /* @__PURE__ */ apprun_default.h("i", {
  class: "sidebar-icon fa fa-chalkboard-user"
})), /* @__PURE__ */ apprun_default.h("a", {
  href: "/products"
}, /* @__PURE__ */ apprun_default.h("i", {
  class: "sidebar-icon fa-brands fa-product-hunt"
}))));

// src/tailwind/header.tsx
var header_default = () => {
  const site_name = "My Site";
  return /* @__PURE__ */ apprun_default.h("header", null, /* @__PURE__ */ apprun_default.h("h2", {
    class: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
  }, site_name));
};

// src/tailwind/footer.tsx
var footer_default = () => /* @__PURE__ */ apprun_default.h("footer", null, "Copyright \xA9 ", new Date().getFullYear(), " Your Name All Rights Reserved");

// src/tailwind/layout.tsx
apprun_default.on("//", (route) => {
  let menus = document.querySelectorAll(".sidebar a");
  for (let i2 = 0; i2 < menus.length; ++i2) {
    menus[i2].classList.remove("active");
  }
  menus = document.querySelectorAll(`[href='${route}']`);
  for (let i2 = 0; i2 < menus.length; ++i2) {
    menus[i2].classList.add("active");
  }
});
var main_element = "my-app";
var Layout = () => {
  return /* @__PURE__ */ apprun_default.h("div", {
    class: "page"
  }, /* @__PURE__ */ apprun_default.h(sidebar_default, null), /* @__PURE__ */ apprun_default.h("main", {
    class: "main"
  }, /* @__PURE__ */ apprun_default.h(header_default, null), /* @__PURE__ */ apprun_default.h("div", {
    class: "content",
    id: main_element
  }), /* @__PURE__ */ apprun_default.h(footer_default, null)));
};
var layout_default = {
  styles: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
    "/style.css"
  ],
  Layout,
  main_element
};

// pages/main.tsx
var add_css = (url) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
};
var add_js = (url, type = null) => {
  const link = document.createElement("script");
  link.src = url;
  type ? link.type = type : null;
  document.body.appendChild(link);
};
var render_layout = ({ Layout: Layout2, styles = null, scripts = null, body_class = null }) => {
  if (document.head.getAttribute("has_css"))
    return;
  document.head.setAttribute("has_css", "true");
  if (styles) {
    for (let i2 = 0; i2 < styles.length; i2++)
      add_css(styles[i2]);
  }
  if (scripts) {
    for (let i2 = 0; i2 < scripts.length; i2++)
      add_js(scripts[i2]);
  }
  body_class && document.body.classList.add(...body_class);
  Layout2 && i.render(document.body, /* @__PURE__ */ i.h(Layout2, null));
};
var main_default = () => {
  window["app-element"] = "my-app";
  render_layout(layout_default);
};

// docs/main.tsx
window.onload = () => {
  const add_component = (component, site_url, main_element2) => {
    let [path, file] = component;
    i.once(path, async (...p2) => {
      const module = await import(`${site_url}${file}`);
      const component2 = new module.default();
      component2.mount(main_element2, { route: path });
      i.route([path, ...p2].join("/"));
    });
  };
  const components = [["/", "/index.js"], ["/products", "/products/index.js"], ["/about", "/about/index.js"], ["/contact", "/contact/index.js"]];
  const app_element = window["app-element"] || document.body;
  components.forEach((item) => add_component(item, "", app_element));
  i.route(location.pathname);
};
document.body.addEventListener("click", (e2) => {
  const element = e2.target;
  const menu = element.tagName === "A" ? element : element.closest("a");
  if (menu && menu.pathname.startsWith("/")) {
    e2.preventDefault();
    history.pushState(null, "", menu.href);
    i.route(menu.pathname);
  }
});
var main_default2 = main_default;
main_default();
export {
  main_default2 as default
};
//# sourceMappingURL=main.js.map

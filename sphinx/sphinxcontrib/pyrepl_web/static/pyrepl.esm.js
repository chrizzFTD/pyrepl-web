import {
  d as Bn,
  e as Cn,
  i as Fn,
  f as In,
  g as Kn,
} from "./chunk-ftjk4vft.js";

var K = globalThis,
  O =
    K.ShadowRoot &&
    (K.ShadyCSS === void 0 || K.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  A = Symbol(),
  R = new WeakMap();
class D {
  constructor(n, e, r) {
    if (((this._$cssResult$ = !0), r !== A))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
      );
    (this.cssText = n), (this.t = e);
  }
  get styleSheet() {
    let n = this.o,
      e = this.t;
    if (O && n === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (n = R.get(e)),
        n === void 0 &&
          ((this.o = n = new CSSStyleSheet()).replaceSync(this.cssText),
          r && R.set(e, n));
    }
    return n;
  }
  toString() {
    return this.cssText;
  }
}
var M = (n) => new D(typeof n == "string" ? n : n + "", void 0, A);
var nn = (n, e) => {
    if (O)
      n.adoptedStyleSheets = e.map((r) =>
        r instanceof CSSStyleSheet ? r : r.styleSheet,
      );
    else
      for (const r of e) {
        const l = document.createElement("style"),
          o = K.litNonce;
        o !== void 0 && l.setAttribute("nonce", o),
          (l.textContent = r.cssText),
          n.appendChild(l);
      }
  },
  T = O
    ? (n) => n
    : (n) =>
        n instanceof CSSStyleSheet
          ? ((e) => {
              let r = "";
              for (const l of e.cssRules) r += l.cssText;
              return M(r);
            })(n)
          : n;
var {
    is: On,
    defineProperty: Wn,
    getOwnPropertyDescriptor: Yn,
    getOwnPropertyNames: Xn,
    getOwnPropertySymbols: $n,
    getPrototypeOf: Dn,
  } = Object,
  Y = globalThis,
  en = Y.trustedTypes,
  Tn = en ? en.emptyScript : "",
  Vn = Y.reactiveElementPolyfillSupport,
  F = (n, e) => n,
  W = {
    toAttribute(n, e) {
      switch (e) {
        case Boolean:
          n = n ? Tn : null;
          break;
        case Object:
        case Array:
          n = n == null ? n : JSON.stringify(n);
      }
      return n;
    },
    fromAttribute(n, e) {
      let r = n;
      switch (e) {
        case Boolean:
          r = n !== null;
          break;
        case Number:
          r = n === null ? null : Number(n);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(n);
          } catch (l) {
            r = null;
          }
      }
      return r;
    },
  },
  V = (n, e) => !On(n, e),
  rn = {
    attribute: !0,
    type: String,
    converter: W,
    reflect: !1,
    useDefault: !1,
    hasChanged: V,
  };
(Symbol.metadata ??= Symbol("metadata")),
  (Y.litPropertyMetadata ??= new WeakMap());
class a extends HTMLElement {
  static addInitializer(n) {
    a._$Ei(), (a.l ??= []).push(n);
  }
  static get observedAttributes() {
    return a.finalize(), a._$Eh && [...a._$Eh.keys()];
  }
  static createProperty(n, e = rn) {
    if (
      (e.state && (e.attribute = !1),
      a._$Ei(),
      Object.hasOwn(a.prototype, n) && ((e = Object.create(e)).wrapped = !0),
      a.elementProperties.set(n, e),
      !e.noAccessor)
    ) {
      const r = Symbol(),
        l = a.getPropertyDescriptor(n, r, e);
      l !== void 0 && Wn(a.prototype, n, l);
    }
  }
  static getPropertyDescriptor(n, e, r) {
    const { get: l, set: o } = Yn(a.prototype, n) ?? {
      get() {
        return this[e];
      },
      set(_) {
        this[e] = _;
      },
    };
    return {
      get: l,
      set(_) {
        const s = l?.call(this);
        o?.call(this, _), this.requestUpdate(n, s, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(n) {
    return a.elementProperties.get(n) ?? rn;
  }
  static _$Ei() {
    if (Object.hasOwn(a, F("elementProperties"))) return;
    const n = Dn(a);
    n.finalize(),
      n.l !== void 0 && (a.l = [...n.l]),
      (a.elementProperties = new Map(n.elementProperties));
  }
  static finalize() {
    if (Object.hasOwn(a, F("finalized"))) return;
    if (((a.finalized = !0), a._$Ei(), Object.hasOwn(a, F("properties")))) {
      const e = a.properties,
        r = [...Xn(e), ...$n(e)];
      for (const l of r) a.createProperty(l, e[l]);
    }
    const n = a[Symbol.metadata];
    if (n !== null) {
      const e = litPropertyMetadata.get(n);
      if (e !== void 0) for (const [r, l] of e) a.elementProperties.set(r, l);
    }
    a._$Eh = new Map();
    for (const [e, r] of a.elementProperties) {
      const l = a._$Eu(e, r);
      l !== void 0 && a._$Eh.set(l, e);
    }
    a.elementStyles = a.finalizeStyles(a.styles);
  }
  static finalizeStyles(n) {
    const e = [];
    if (Array.isArray(n)) {
      const r = new Set(n.flat(1 / 0).reverse());
      for (const l of r) e.unshift(T(l));
    } else n !== void 0 && e.push(T(n));
    return e;
  }
  static _$Eu(n, e) {
    const r = e.attribute;
    return r === !1
      ? void 0
      : typeof r == "string"
        ? r
        : typeof n == "string"
          ? n.toLowerCase()
          : void 0;
  }
  constructor() {
    super(),
      (this._$Ep = void 0),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Em = null),
      this._$Ev();
  }
  _$Ev() {
    (this._$ES = new Promise((n) => (this.enableUpdating = n))),
      (this._$AL = new Map()),
      this._$E_(),
      this.requestUpdate(),
      this.constructor.l?.forEach((n) => n(this));
  }
  addController(n) {
    (this._$EO ??= new Set()).add(n),
      this.renderRoot !== void 0 && this.isConnected && n.hostConnected?.();
  }
  removeController(n) {
    this._$EO?.delete(n);
  }
  _$E_() {
    const n = new Map(),
      e = this.constructor.elementProperties;
    for (const r of e.keys())
      Object.hasOwn(this, r) && (n.set(r, this[r]), delete this[r]);
    n.size > 0 && (this._$Ep = n);
  }
  createRenderRoot() {
    const n =
      this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return nn(n, this.constructor.elementStyles), n;
  }
  connectedCallback() {
    (this.renderRoot ??= this.createRenderRoot()),
      this.enableUpdating(!0),
      this._$EO?.forEach((n) => n.hostConnected?.());
  }
  enableUpdating(n) {}
  disconnectedCallback() {
    this._$EO?.forEach((n) => n.hostDisconnected?.());
  }
  attributeChangedCallback(n, e, r) {
    this._$AK(n, r);
  }
  _$ET(n, e) {
    const r = this.constructor.elementProperties.get(n),
      l = this.constructor._$Eu(n, r);
    if (l !== void 0 && r.reflect === !0) {
      const o = (
        r.converter?.toAttribute !== void 0 ? r.converter : W
      ).toAttribute(e, r.type);
      (this._$Em = n),
        o == null ? this.removeAttribute(l) : this.setAttribute(l, o),
        (this._$Em = null);
    }
  }
  _$AK(n, e) {
    const r = this.constructor,
      l = r._$Eh.get(n);
    if (l !== void 0 && this._$Em !== l) {
      const o = r.getPropertyOptions(l),
        _ =
          typeof o.converter == "function"
            ? { fromAttribute: o.converter }
            : o.converter?.fromAttribute !== void 0
              ? o.converter
              : W;
      this._$Em = l;
      const s = _.fromAttribute(e, o.type);
      (this[l] = s ?? this._$Ej?.get(l) ?? s), (this._$Em = null);
    }
  }
  requestUpdate(n, e, r, l = !1, o) {
    if (n !== void 0) {
      const _ = this.constructor;
      if (
        (l === !1 && (o = this[n]),
        (r ??= _.getPropertyOptions(n)),
        !(
          (r.hasChanged ?? V)(o, e) ||
          (r.useDefault &&
            r.reflect &&
            o === this._$Ej?.get(n) &&
            !this.hasAttribute(_._$Eu(n, r)))
        ))
      )
        return;
      this.C(n, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(n, e, { useDefault: r, reflect: l, wrapped: o }, _) {
    (r &&
      !(this._$Ej ??= new Map()).has(n) &&
      (this._$Ej.set(n, _ ?? e ?? this[n]), o !== !0 || _ !== void 0)) ||
      (this._$AL.has(n) ||
        (this.hasUpdated || r || (e = void 0), this._$AL.set(n, e)),
      l === !0 && this._$Em !== n && (this._$Eq ??= new Set()).add(n));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const n = this.scheduleUpdate();
    return n != null && (await n), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
        for (const [l, o] of this._$Ep) this[l] = o;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0)
        for (const [l, o] of r) {
          const { wrapped: _ } = o,
            s = this[l];
          _ !== !0 ||
            this._$AL.has(l) ||
            s === void 0 ||
            this.C(l, void 0, o, s);
        }
    }
    let n = !1,
      e = this._$AL;
    try {
      (n = this.shouldUpdate(e)),
        n
          ? (this.willUpdate(e),
            this._$EO?.forEach((r) => r.hostUpdate?.()),
            this.update(e))
          : this._$EM();
    } catch (r) {
      throw ((n = !1), this._$EM(), r);
    }
    n && this._$AE(e);
  }
  willUpdate(n) {}
  _$AE(n) {
    this._$EO?.forEach((e) => e.hostUpdated?.()),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(n)),
      this.updated(n);
  }
  _$EM() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(n) {
    return !0;
  }
  update(n) {
    (this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e]))),
      this._$EM();
  }
  updated(n) {}
  firstUpdated(n) {}
}
(a.elementStyles = []),
  (a.shadowRootOptions = { mode: "open" }),
  (a[F("elementProperties")] = new Map()),
  (a[F("finalized")] = new Map()),
  Vn?.({ ReactiveElement: a }),
  (Y.reactiveElementVersions ??= []).push("2.1.2");
var Z = globalThis,
  ln = (n) => n,
  X = Z.trustedTypes,
  on = X ? X.createPolicy("lit-html", { createHTML: (n) => n }) : void 0;
var f = `lit$${Math.random().toFixed(9).slice(2)}$`,
  cn = "?" + f,
  Zn = `<${cn}>`,
  v = document,
  q = () => v.createComment(""),
  G = (n) => n === null || (typeof n != "object" && typeof n != "function"),
  g = Array.isArray,
  gn = (n) => g(n) || typeof n?.[Symbol.iterator] == "function";
var N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _n = /-->/g,
  sn = />/g,
  i =
    />|[ 	\n\f\r](?:([^\s"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r"'`<>=]|("|')|))|$)/g,
  pn = /'/g,
  wn = /"/g,
  dn = /^(?:script|style|textarea|title)$/i,
  z =
    (n) =>
    (e, ...r) => ({ _$litType$: n, strings: e, values: r }),
  xn = z(1),
  pe = z(2),
  we = z(3),
  t = Symbol.for("lit-noChange"),
  c = Symbol.for("lit-nothing"),
  yn = new WeakMap(),
  b = v.createTreeWalker(v, 129);
function mn(n, e) {
  if (!g(n) || !Object.hasOwn(n, "raw"))
    throw Error("invalid template strings array");
  return on !== void 0 ? on.createHTML(e) : e;
}
var zn = (n, e) => {
  let r = n.length - 1,
    l = [],
    o,
    _ = e === 2 ? "<svg>" : e === 3 ? "<math>" : "",
    s = N;
  for (let p = 0; p < r; p++) {
    let y = n[p],
      d,
      w,
      x = -1,
      m = 0;
    for (; m < y.length && ((s.lastIndex = m), (w = s.exec(y)), w !== null); )
      (m = s.lastIndex),
        s === N
          ? w[1] === "!--"
            ? (s = _n)
            : w[1] !== void 0
              ? (s = sn)
              : w[2] !== void 0
                ? (dn.test(w[2]) && (o = RegExp("</" + w[2], "g")), (s = i))
                : w[3] !== void 0 && (s = i)
          : s === i
            ? w[0] === ">"
              ? ((s = o ?? N), (x = -1))
              : w[1] === void 0
                ? (x = -2)
                : ((x = s.lastIndex - w[2].length),
                  (d = w[1]),
                  (s = w[3] === void 0 ? i : w[3] === '"' ? wn : pn))
            : s === wn || s === pn
              ? (s = i)
              : s === _n || s === sn
                ? (s = N)
                : ((s = i), (o = void 0));
    const u = s === i && n[p + 1].startsWith("/>") ? " " : "";
    _ +=
      s === N
        ? y + Zn
        : x >= 0
          ? (l.push(d), y.slice(0, x) + "$lit$" + y.slice(x) + f + u)
          : y + f + (x === -2 ? p : u);
  }
  return [
    mn(
      n,
      _ + (n[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : ""),
    ),
    l,
  ];
};
class J {
  constructor({ strings: n, _$litType$: e }, r) {
    let l;
    this.parts = [];
    let o = 0,
      _ = 0,
      s = n.length - 1,
      p = this.parts,
      [y, d] = zn(n, e);
    if (
      ((this.el = J.createElement(y, r)),
      (b.currentNode = this.el.content),
      e === 2 || e === 3)
    ) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (l = b.nextNode()) !== null && p.length < s; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes())
          for (const w of l.getAttributeNames())
            if (w.endsWith("$lit$")) {
              const x = d[_++],
                m = l.getAttribute(w).split(f),
                u = /([.?@])?(.*)/.exec(x);
              p.push({
                type: 1,
                index: o,
                name: u[2],
                strings: m,
                ctor:
                  u[1] === "." ? an : u[1] === "?" ? fn : u[1] === "@" ? bn : C,
              }),
                l.removeAttribute(w);
            } else
              w.startsWith(f) &&
                (p.push({ type: 6, index: o }), l.removeAttribute(w));
        if (dn.test(l.tagName)) {
          const w = l.textContent.split(f),
            x = w.length - 1;
          if (x > 0) {
            l.textContent = X ? X.emptyScript : "";
            for (let m = 0; m < x; m++)
              l.append(w[m], q()),
                b.nextNode(),
                p.push({ type: 2, index: ++o });
            l.append(w[x], q());
          }
        }
      } else if (l.nodeType === 8)
        if (l.data === cn) p.push({ type: 2, index: o });
        else {
          let w = -1;
          for (; (w = l.data.indexOf(f, w + 1)) !== -1; )
            p.push({ type: 7, index: o }), (w += f.length - 1);
        }
      o++;
    }
  }
  static createElement(n, e) {
    const r = v.createElement("template");
    return (r.innerHTML = n), r;
  }
}
function S(n, e, r = n, l) {
  if (e === t) return e;
  let o = l !== void 0 ? r._$Co?.[l] : r._$Cl,
    _ = G(e) ? void 0 : e._$litDirective$;
  return (
    o?.constructor !== _ &&
      (o?._$AO?.(!1),
      _ === void 0 ? (o = void 0) : ((o = new _(n)), o._$AT(n, r, l)),
      l !== void 0 ? ((r._$Co ??= [])[l] = o) : (r._$Cl = o)),
    o !== void 0 && (e = S(n, o._$AS(n, e.values), o, l)),
    e
  );
}
class un {
  constructor(n, e) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = n), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(n) {
    const {
        el: { content: e },
        parts: r,
      } = this._$AD,
      l = (n?.creationScope ?? v).importNode(e, !0);
    b.currentNode = l;
    let o = b.nextNode(),
      _ = 0,
      s = 0,
      p = r[0];
    for (; p !== void 0; ) {
      if (_ === p.index) {
        let y;
        p.type === 2
          ? (y = new B(o, o.nextSibling, this, n))
          : p.type === 1
            ? (y = new p.ctor(o, p.name, p.strings, this, n))
            : p.type === 6 && (y = new vn(o, this, n)),
          this._$AV.push(y),
          (p = r[++s]);
      }
      _ !== p?.index && ((o = b.nextNode()), _++);
    }
    return (b.currentNode = v), l;
  }
  p(n) {
    let e = 0;
    for (const r of this._$AV)
      r !== void 0 &&
        (r.strings !== void 0
          ? (r._$AI(n, r, e), (e += r.strings.length - 2))
          : r._$AI(n[e])),
        e++;
  }
}
class B {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(n, e, r, l) {
    (this.type = 2),
      (this._$AH = c),
      (this._$AN = void 0),
      (this._$AA = n),
      (this._$AB = e),
      (this._$AM = r),
      (this.options = l),
      (this._$Cv = l?.isConnected ?? !0);
  }
  get parentNode() {
    let n = this._$AA.parentNode,
      e = this._$AM;
    return e !== void 0 && n?.nodeType === 11 && (n = e.parentNode), n;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(n, e = this) {
    (n = S(this, n, e)),
      G(n)
        ? n === c || n == null || n === ""
          ? (this._$AH !== c && this._$AR(), (this._$AH = c))
          : n !== this._$AH && n !== t && this._(n)
        : n._$litType$ !== void 0
          ? this.$(n)
          : n.nodeType !== void 0
            ? this.T(n)
            : gn(n)
              ? this.k(n)
              : this._(n);
  }
  O(n) {
    return this._$AA.parentNode.insertBefore(n, this._$AB);
  }
  T(n) {
    this._$AH !== n && (this._$AR(), (this._$AH = this.O(n)));
  }
  _(n) {
    this._$AH !== c && G(this._$AH)
      ? (this._$AA.nextSibling.data = n)
      : this.T(v.createTextNode(n)),
      (this._$AH = n);
  }
  $(n) {
    const { values: e, _$litType$: r } = n,
      l =
        typeof r == "number"
          ? this._$AC(n)
          : (r.el === void 0 &&
              (r.el = J.createElement(mn(r.h, r.h[0]), this.options)),
            r);
    if (this._$AH?._$AD === l) this._$AH.p(e);
    else {
      const o = new un(l, this),
        _ = o.u(this.options);
      o.p(e), this.T(_), (this._$AH = o);
    }
  }
  _$AC(n) {
    let e = yn.get(n.strings);
    return e === void 0 && yn.set(n.strings, (e = new J(n))), e;
  }
  k(n) {
    g(this._$AH) || ((this._$AH = []), this._$AR());
    let e = this._$AH,
      r,
      l = 0;
    for (const o of n)
      l === e.length
        ? e.push((r = new B(this.O(q()), this.O(q()), this, this.options)))
        : (r = e[l]),
        r._$AI(o),
        l++;
    l < e.length && (this._$AR(r && r._$AB.nextSibling, l), (e.length = l));
  }
  _$AR(n = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); n !== this._$AB; ) {
      const r = ln(n).nextSibling;
      ln(n).remove(), (n = r);
    }
  }
  setConnected(n) {
    this._$AM === void 0 && ((this._$Cv = n), this._$AP?.(n));
  }
}
class C {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(n, e, r, l, o) {
    (this.type = 1),
      (this._$AH = c),
      (this._$AN = void 0),
      (this.element = n),
      (this.name = e),
      (this._$AM = l),
      (this.options = o),
      r.length > 2 || r[0] !== "" || r[1] !== ""
        ? ((this._$AH = Array(r.length - 1).fill(new String())),
          (this.strings = r))
        : (this._$AH = c);
  }
  _$AI(n, e = this, r, l) {
    let o = this.strings,
      _ = !1;
    if (o === void 0)
      (n = S(this, n, e, 0)),
        (_ = !G(n) || (n !== this._$AH && n !== t)),
        _ && (this._$AH = n);
    else {
      let s = n,
        p,
        y;
      for (n = o[0], p = 0; p < o.length - 1; p++)
        (y = S(this, s[r + p], e, p)),
          y === t && (y = this._$AH[p]),
          (_ ||= !G(y) || y !== this._$AH[p]),
          y === c ? (n = c) : n !== c && (n += (y ?? "") + o[p + 1]),
          (this._$AH[p] = y);
    }
    _ && !l && this.j(n);
  }
  j(n) {
    n === c
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, n ?? "");
  }
}
class an extends C {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(n) {
    this.element[this.name] = n === c ? void 0 : n;
  }
}
class fn extends C {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(n) {
    this.element.toggleAttribute(this.name, !!n && n !== c);
  }
}
class bn extends C {
  constructor(n, e, r, l, o) {
    super(n, e, r, l, o), (this.type = 5);
  }
  _$AI(n, e = this) {
    if ((n = S(this, n, e, 0) ?? c) === t) return;
    const r = this._$AH,
      l =
        (n === c && r !== c) ||
        n.capture !== r.capture ||
        n.once !== r.once ||
        n.passive !== r.passive,
      o = n !== c && (r === c || l);
    l && this.element.removeEventListener(this.name, this, r),
      o && this.element.addEventListener(this.name, this, n),
      (this._$AH = n);
  }
  handleEvent(n) {
    typeof this._$AH == "function"
      ? this._$AH.call(this.options?.host ?? this.element, n)
      : this._$AH.handleEvent(n);
  }
}
class vn {
  constructor(n, e, r) {
    (this.element = n),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = r);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(n) {
    S(this, n);
  }
}
var Qn = Z.litHtmlPolyfillSupport;
Qn?.(J, B), (Z.litHtmlVersions ??= []).push("3.3.2");
var tn = (n, e, r) => {
  let l = r?.renderBefore ?? e,
    o = l._$litPart$;
  if (o === void 0) {
    const _ = r?.renderBefore ?? null;
    l._$litPart$ = o = new B(e.insertBefore(q(), _), _, void 0, r ?? {});
  }
  return o._$AI(n), o;
};
var Q = globalThis;
class h extends a {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    const n = super.createRenderRoot();
    return (this.renderOptions.renderBefore ??= n.firstChild), n;
  }
  update(n) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(n),
      (this._$Do = tn(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return t;
  }
}
(h._$litElement$ = !0),
  (h.finalized = !0),
  Q.litElementHydrateSupport?.({ LitElement: h });
var jn = Q.litElementPolyfillSupport;
jn?.({ LitElement: h });
(Q.litElementVersions ??= []).push("4.2.2");
var hn = (n) => (e, r) => {
  r !== void 0
    ? r.addInitializer(() => {
        customElements.define(n, e);
      })
    : customElements.define(n, e);
};
var Sn = `from codeop import compile_command
import sys
from _pyrepl.console import Console, Event
from collections import deque
import js
from pyodide.ffi import create_proxy

# ANSI color codes
ANSI_COLORS = {
    "black": "30",
    "red": "31",
    "green": "32",
    "yellow": "33",
    "blue": "34",
    "magenta": "35",
    "cyan": "36",
    "white": "37",
}


def color_to_ansi(color):
    """Convert a color name or hex value to ANSI escape sequence."""
    if color.startswith("#"):
        # Parse hex color (supports #RGB and #RRGGBB)
        hex_val = color[1:]
        if len(hex_val) == 3:
            r = int(hex_val[0] * 2, 16)
            g = int(hex_val[1] * 2, 16)
            b = int(hex_val[2] * 2, 16)
        elif len(hex_val) == 6:
            r = int(hex_val[0:2], 16)
            g = int(hex_val[2:4], 16)
            b = int(hex_val[4:6], 16)
        else:
            return "32"  # Fall back to green
        # Use 24-bit true color: \\x1b[38;2;R;G;Bm
        return f"38;2;{r};{g};{b}"
    else:
        return ANSI_COLORS.get(color, "32")


class BrowserConsole(Console):
    def __init__(self, term):
        # term is the xterm.js Terminal instance passed from JS
        self.term = term
        self.event_queue = deque()
        self.encoding = "utf-8"
        self.screen = []
        self.posxy = (0, 0)
        self.height, self.width = self.getheightwidth()
        self._resolve_input = None

    def getheightwidth(self):
        return self.term.rows, self.term.cols

    def refresh(self, screen, xy):
        pass

    def prepare(self):
        pass

    def restore(self):
        pass

    def move_cursor(self, x, y):
        self.term.write(f"\\x1b[{y + 1};{x + 1}H")
        self.posxy = (x, y)

    def set_cursor_vis(self, visible):
        self.term.write("\\x1b[?25h" if visible else "\\x1b[?25l")

    def beep(self):
        self.term.write("\\x07")

    def clear(self):
        self.term.write("\\x1b[2J\\x1b[H")
        self.screen = []
        self.posxy = (0, 0)

    def flushoutput(self):
        pass  # xterm.js writes immediately

    def finish(self):
        pass

    def forgetinput(self):
        self.event_queue.clear()

    def push_char(self, char):
        self.event_queue.append(char)

        if self._resolve_input:
            resolve = self._resolve_input
            self._resolve_input = None
            resolve()

    def getpending(self):
        data = ""
        raw = b""
        while self.event_queue:
            c = self.event_queue.popleft()
            if isinstance(c, bytes):
                raw += c
                data += c.decode(self.encoding, errors="replace")
            else:
                raw += bytes([c])
                data += chr(c)
        return Event("key", data, raw)

    def wait(self, timeout=None):
        return len(self.event_queue) > 0

    async def get_event(self, block=True):
        if not block and not self.event_queue:
            return None

        while not self.event_queue:
            promise = js.Promise.new(
                create_proxy(
                    lambda resolve, reject: setattr(self, "_resolve_input", resolve)
                )
            )
            await promise

        char = self.event_queue.popleft()
        if isinstance(char, int):
            char_str = chr(char)
            raw = bytes([char])
        else:
            char_str = char
            raw = char.encode(self.encoding)
        event = Event("key", char_str, raw)
        return event

    def repaint(self):
        pass


async def start_repl():
    # Create a new console for this terminal instance
    browser_console = BrowserConsole(js.term)

    # Capture startup script before JS moves to next REPL and overwrites it
    startup_script = getattr(js, "pyreplStartupScript", None)
    theme_name = getattr(js, "pyreplTheme", "catppuccin-mocha")
    pygments_fallback = getattr(js, "pyreplPygmentsFallback", "catppuccin-mocha")
    info_line = getattr(js, "pyreplInfo", "Python (Pyodide)")
    show_banner = getattr(js, "pyreplBanner", True)
    readonly = getattr(js, "pyreplReadonly", False)
    prompt_color = getattr(js, "pyreplPromptColor", None) or "green"
    pygments_style_js = getattr(js, "pyreplPygmentsStyle", None)

    # Build prompt strings with configured color
    color_code = color_to_ansi(prompt_color)
    PS1 = f"\\x1b[{color_code}m>>> \\x1b[0m"
    PS2 = f"\\x1b[{color_code}m... \\x1b[0m"

    # Expose to JS so it can send input (signals JS can proceed to next REPL)
    js.currentBrowserConsole = browser_console

    import micropip
    import rlcompleter
    import re
    import asyncio

    # Lazy-load Pygments in background while REPL starts
    pygments_loaded = False
    lexer = None
    formatter = None

    async def load_pygments():
        nonlocal pygments_loaded, lexer, formatter
        try:
            await micropip.install(["pygments", "catppuccin[pygments]"])
            from pygments.lexers import Python3Lexer
            from pygments.formatters import Terminal256Formatter
            from pygments.styles import get_style_by_name
            from pygments.style import Style
            from pygments.token import string_to_tokentype

            lexer = Python3Lexer()

            # Use custom pygmentsStyle if provided
            if pygments_style_js:
                # Convert JS object to Python dict
                custom_styles = dict(pygments_style_js.to_py())

                # Build style class dynamically
                style_dict = {}
                for token_str, color in custom_styles.items():
                    token = string_to_tokentype(token_str)
                    style_dict[token] = color

                CustomStyle = type("CustomStyle", (Style,), {"styles": style_dict})
                formatter = Terminal256Formatter(style=CustomStyle)
            else:
                # Try theme name as Pygments style, fall back based on background
                try:
                    get_style_by_name(theme_name)
                    style = theme_name
                except Exception:
                    style = pygments_fallback
                formatter = Terminal256Formatter(style=style)

            pygments_loaded = True
        except Exception as e:
            browser_console.term.write(f"[ERROR] Pygments load failed: {e}\\r\\n")

    # Start loading Pygments in background (non-blocking)
    asyncio.create_task(load_pygments())

    def syntax_highlight(code):
        if not code:
            return ""
        if not pygments_loaded or lexer is None or formatter is None:
            # Return unhighlighted code until Pygments loads
            return code
        try:
            from pygments import highlight

            result = highlight(code, lexer, formatter)
            return result.rstrip("\\n")
        except Exception:
            return code

    class TermWriter:
        def write(self, data):
            browser_console.term.write(data.replace("\\n", "\\r\\n"))

        def flush(self):
            pass

    term_writer = TermWriter()

    # Custom exec that redirects stdout/stderr to this REPL's terminal
    import contextlib

    def exec_with_redirect(code, globals_dict):
        old_displayhook = sys.displayhook

        def displayhook(value):
            if value is not None:
                globals_dict["_"] = value
                browser_console.term.write(repr(value) + "\\r\\n")

        sys.displayhook = displayhook
        try:
            with (
                contextlib.redirect_stdout(term_writer),
                contextlib.redirect_stderr(term_writer),
            ):
                exec(code, globals_dict)
        finally:
            sys.displayhook = old_displayhook

    def clear():
        browser_console.clear()
        if show_banner:
            browser_console.term.write(f"\\x1b[90m{info_line}\\x1b[0m\\r\\n")

    class Exit:
        def __repr__(self):
            return "exit is not available in the browser"

        def __call__(self):
            browser_console.term.write("exit is not available in the browser\\r\\n")

    repl_globals = {
        "__builtins__": __builtins__,
        "clear": clear,
        "exit": Exit(),
        "quit": Exit(),
    }
    completer = rlcompleter.Completer(repl_globals)

    # Run startup script if one was provided (silently, just to populate namespace)
    if startup_script:
        try:
            # Temporarily suppress stdout/stderr during startup
            old_stdout, old_stderr = sys.stdout, sys.stderr
            sys.stdout = sys.stderr = type(
                "null", (), {"write": lambda s, x: None, "flush": lambda s: None}
            )()
            exec(startup_script, repl_globals)
            sys.stdout, sys.stderr = old_stdout, old_stderr

        except Exception as e:
            sys.stdout, sys.stderr = old_stdout, old_stderr
            browser_console.term.write(
                f"\\x1b[31mStartup script error - {type(e).__name__}: {e}\\x1b[0m\\r\\n"
            )

        # If startup script defined a setup() function, call it with output visible
        if "setup" in repl_globals and callable(repl_globals["setup"]):
            try:
                exec_with_redirect(compile("setup()", "<setup>", "exec"), repl_globals)
            except Exception as e:
                browser_console.term.write(
                    f"\\x1b[31msetup() error - {type(e).__name__}: {e}\\x1b[0m\\r\\n"
                )

    def get_completions(text):
        """Get all completions for the given text."""
        completions = []
        i = 0
        while True:
            c = completer.complete(text, i)
            if c is None:
                break
            completions.append(c)
            i += 1
        return completions

    def get_word_to_complete(line):
        """Extract the word to complete from the end of the line."""
        match = re.search(r"[\\w.]*$", line)
        return match.group(0) if match else ""

    # In readonly mode, don't show prompt or accept input
    if readonly:
        return

    browser_console.term.write(PS1)
    lines = []
    current_line = ""

    history = []
    history_index = 0

    while True:
        event = await browser_console.get_event(block=True)
        if event is None:
            continue

        char = event.data
        if char == "\\x03":
            # Ctrl+C - interrupt/cancel current input
            browser_console.term.write("^C\\r\\n")
            lines = []
            current_line = ""
            history_index = len(history)
            browser_console.term.write(PS1)
            continue

        if char == "\\x0c":
            # Ctrl+L - clear screen
            clear()
            browser_console.term.write(PS1 + syntax_highlight(current_line))
            continue

        if char == "\\x1b":
            # Might be an arrow key
            event2 = await browser_console.get_event(block=True)
            if event2 and event2.data == "[":
                event3 = await browser_console.get_event(block=True)
                if event3:
                    if event3.data == "A":
                        # Up arrow
                        if history:
                            history_index = max(0, history_index - 1)
                            # Clear current line
                            browser_console.term.write("\\r\\x1b[K")
                            hist_entry = history[history_index]
                            # For multiline entries, only show first line
                            current_line = (
                                hist_entry.split("\\n")[0]
                                if "\\n" in hist_entry
                                else hist_entry
                            )
                            browser_console.term.write(
                                PS1 + syntax_highlight(current_line)
                            )
                    elif event3.data == "B":
                        # Down arrow
                        if history:
                            history_index = min(len(history), history_index + 1)
                            # Clear current line
                            browser_console.term.write("\\r\\x1b[K")
                            if history_index < len(history):
                                hist_entry = history[history_index]
                                # For multiline entries, only show first line
                                current_line = (
                                    hist_entry.split("\\n")[0]
                                    if "\\n" in hist_entry
                                    else hist_entry
                                )
                            else:
                                current_line = ""
                            browser_console.term.write(
                                PS1 + syntax_highlight(current_line)
                            )
                    # Left and Right arrows can be implemented similarly
            continue

        if char == "\\r":
            browser_console.term.write("\\r\\n")

            lines.append(current_line)
            source = "\\n".join(lines)

            if not source.strip():
                lines = []
                current_line = ""
                browser_console.term.write(PS1)
                continue

            # If in multiline mode and user entered empty/whitespace line, execute
            if len(lines) > 1 and not current_line.strip():
                # Remove trailing empty lines
                while lines and not lines[-1].strip():
                    lines.pop()
                source = "\\n".join(lines)
                try:
                    code = compile(source, "<console>", "single")
                    exec_with_redirect(code, repl_globals)
                    history.append(source)
                    history_index = len(history)
                except SystemExit:
                    pass
                except Exception as e:
                    browser_console.term.write(
                        f"\\x1b[31m{type(e).__name__}: {e}\\x1b[0m\\r\\n"
                    )
                lines = []
                current_line = ""
                browser_console.term.write(PS1)
                continue

            try:
                code = compile_command(source, "<console>", "single")
                if code is None:
                    # Incomplete — need more input
                    prev_line = lines[-1] if lines else current_line
                    indent = len(prev_line) - len(prev_line.lstrip())
                    if prev_line.rstrip().endswith(":"):
                        indent += 4
                    browser_console.term.write(PS2 + " " * indent)
                    current_line = " " * indent
                else:
                    # Complete code, execute it
                    if source.strip():
                        history.append(source)
                        history_index = len(history)
                    try:
                        exec_with_redirect(code, repl_globals)
                    except SystemExit:
                        pass
                    except Exception as e:
                        browser_console.term.write(
                            f"\\x1b[31m{type(e).__name__}: {e}\\x1b[0m\\r\\n"
                        )
                    lines = []
                    current_line = ""
                    browser_console.term.write(PS1)
            except SyntaxError as e:
                browser_console.term.write(f"\\x1b[31mSyntaxError: {e}\\x1b[0m\\r\\n")
                lines = []
                current_line = ""
                browser_console.term.write(PS1)
            except Exception as e:
                browser_console.term.write(f"\\x1b[31mError: {e}\\x1b[0m\\r\\n")
                lines = []
                current_line = ""
                browser_console.term.write(PS1)
        elif char == "\\t":
            # Tab completion
            word = get_word_to_complete(current_line)
            if word:
                completions = get_completions(word)
                if len(completions) == 1:
                    # Single match - complete it
                    completion = completions[0]
                    current_line = current_line[: -len(word)] + completion
                    browser_console.term.write("\\r\\x1b[K")
                    prompt = PS1 if len(lines) == 0 else PS2
                    browser_console.term.write(prompt + syntax_highlight(current_line))
                elif len(completions) > 1:
                    # Multiple matches - show them in columns
                    browser_console.term.write("\\r\\n")
                    max_len = max(len(c) for c in completions) + 2
                    cols = max(1, browser_console.term.cols // max_len)
                    for i, c in enumerate(completions):
                        browser_console.term.write(c.ljust(max_len))
                        if (i + 1) % cols == 0:
                            browser_console.term.write("\\r\\n")
                    if len(completions) % cols != 0:
                        browser_console.term.write("\\r\\n")
                    prompt = PS1 if len(lines) == 0 else PS2
                    browser_console.term.write(prompt + syntax_highlight(current_line))
        elif char == "\\x7f":
            if current_line:
                current_line = current_line[:-1]
                browser_console.term.write("\\r\\x1b[K")
                prompt = PS1 if len(lines) == 0 else PS2
                browser_console.term.write(prompt + syntax_highlight(current_line))
        else:
            current_line += char
            # Clear line and rewrite with highlighting
            browser_console.term.write("\\r\\x1b[K")  # Go to start, clear line
            prompt = PS1 if len(lines) == 0 else PS2
            browser_console.term.write(prompt + syntax_highlight(current_line))
`;
var j = null,
  H = null,
  k = Promise.resolve(),
  I = {
    "catppuccin-mocha": {
      background: "#1e1e2e",
      foreground: "#cdd6f4",
      cursor: "#f5e0dc",
      cursorAccent: "#1e1e2e",
      selectionBackground: "#585b70",
      black: "#45475a",
      red: "#f38ba8",
      green: "#a6e3a1",
      yellow: "#f9e2af",
      blue: "#89b4fa",
      magenta: "#f5c2e7",
      cyan: "#94e2d5",
      white: "#bac2de",
      brightBlack: "#585b70",
      brightRed: "#f38ba8",
      brightGreen: "#a6e3a1",
      brightYellow: "#f9e2af",
      brightBlue: "#89b4fa",
      brightMagenta: "#f5c2e7",
      brightCyan: "#94e2d5",
      brightWhite: "#a6adc8",
      headerBackground: "#181825",
      headerForeground: "#6c7086",
    },
    "catppuccin-latte": {
      background: "#eff1f5",
      foreground: "#4c4f69",
      cursor: "#dc8a78",
      cursorAccent: "#eff1f5",
      selectionBackground: "#acb0be",
      black: "#5c5f77",
      red: "#d20f39",
      green: "#40a02b",
      yellow: "#df8e1d",
      blue: "#1e66f5",
      magenta: "#ea76cb",
      cyan: "#179299",
      white: "#acb0be",
      brightBlack: "#6c6f85",
      brightRed: "#d20f39",
      brightGreen: "#40a02b",
      brightYellow: "#df8e1d",
      brightBlue: "#1e66f5",
      brightMagenta: "#ea76cb",
      brightCyan: "#179299",
      brightWhite: "#bcc0cc",
      headerBackground: "#dce0e8",
      headerForeground: "#8c8fa1",
    },
  },
  E = "catppuccin-mocha";
function Nn(n) {
  if (!n.startsWith("#")) return !0;
  const e = n.slice(1),
    r = parseInt(e.slice(0, 2), 16),
    l = parseInt(e.slice(2, 4), 16),
    o = parseInt(e.slice(4, 6), 16);
  return (0.299 * r + 0.587 * l + 0.114 * o) / 255 < 0.5;
}
function En(n) {
  if ("black" in n && "red" in n) return n;
  const e = Nn(n.background) ? "catppuccin-mocha" : "catppuccin-latte",
    r = I[e];
  return {
    cursor: r.cursor,
    cursorAccent: r.cursorAccent,
    selectionBackground: r.selectionBackground,
    black: r.black,
    red: r.red,
    green: r.green,
    yellow: r.yellow,
    blue: r.blue,
    magenta: r.magenta,
    cyan: r.cyan,
    white: r.white,
    brightBlack: r.brightBlack,
    brightRed: r.brightRed,
    brightGreen: r.brightGreen,
    brightYellow: r.brightYellow,
    brightBlue: r.brightBlue,
    brightMagenta: r.brightMagenta,
    brightCyan: r.brightCyan,
    brightWhite: r.brightWhite,
    background: n.background,
    foreground: n.foreground,
    headerBackground: n.headerBackground ?? r.headerBackground,
    headerForeground: n.headerForeground ?? r.headerForeground,
    promptColor: n.promptColor,
    pygmentsStyle: n.pygmentsStyle,
  };
}
var kn = {
  copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
  clear:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>',
};
function Hn(n) {
  let e,
    r,
    l = n.dataset.themeConfig;
  if (l)
    try {
      const s = JSON.parse(l);
      (e = En(s)), (r = "custom");
    } catch {
      console.warn(
        "pyrepl-web: invalid data-theme-config JSON, falling back to default",
      ),
        (e = I[E]),
        (r = E);
    }
  else {
    r = n.dataset.theme || E;
    const s = window.pyreplThemes?.[r] || I[r] || I[E];
    if (((e = En(s)), !window.pyreplThemes?.[r] && !I[r]))
      console.warn(`pyrepl-web: unknown theme "${r}", falling back to default`),
        (r = E);
  }
  const o = n.dataset.packages,
    _ = o
      ? o
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];
  return {
    theme: e,
    themeName: r,
    showHeader: n.dataset.header !== "false",
    showButtons: n.dataset.buttons !== "false",
    title: n.dataset.title || "python",
    packages: _,
    src: n.dataset.src || null,
    readonly: n.dataset.readonly === "true",
    showBanner: n.dataset.noBanner !== "true",
  };
}
async function Un() {
  if (!j) {
    const { loadPyodide: n } = await import("./chunk-6rjqm1b7.js");
    j = n({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v314.0.1/full/",
      stdout: () => {},
      stderr: () => {},
    });
  }
  return await j;
}
function Ln() {
  if (!H) H = Promise.resolve(Sn);
  return H;
}
class U {
  container;
  theme;
  packages;
  readonly;
  src;
  showHeader;
  showButtons;
  title;
  showBanner;
  constructor(n) {
    (this.container = n.container),
      (this.theme = n.theme || E),
      (this.packages = n.packages || []),
      (this.readonly = n.readonly || !1),
      (this.src = n.src),
      (this.showHeader = n.showHeader !== void 0 ? n.showHeader : !0),
      (this.showButtons = n.showButtons !== void 0 ? n.showButtons : !0),
      (this.title = n.title || "python"),
      (this.showBanner = n.showBanner !== void 0 ? n.showBanner : !0);
  }
  async init() {
    if (
      ((this.container.dataset.theme = this.theme),
      (this.container.dataset.packages = this.packages.join(",")),
      (this.container.dataset.readonly = this.readonly ? "true" : "false"),
      this.src)
    )
      this.container.dataset.src = this.src;
    (this.container.dataset.header = this.showHeader ? "true" : "false"),
      (this.container.dataset.buttons = this.showButtons ? "true" : "false"),
      (this.container.dataset.title = this.title),
      (this.container.dataset.noBanner = this.showBanner ? "false" : "true");
    const { term: n, config: e } = await Gn(this.container);
    (k = k.then(() => Jn(this.container, n, e))), await k;
  }
}
function Rn() {
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", Pn);
  else Pn();
}
function An() {
  if (document.getElementById("pyrepl-styles")) return;
  const n = document.createElement("link");
  (n.rel = "stylesheet"),
    (n.href = "https://cdn.jsdelivr.net/npm/@xterm/xterm/css/xterm.css"),
    document.head.appendChild(n);
  const e = document.createElement("style");
  (e.id = "pyrepl-styles"),
    (e.textContent = `
    .pyrepl {
      display: inline-block;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: var(--pyrepl-shadow);
    }

    .pyrepl-header {
      background: var(--pyrepl-header-bg);
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pyrepl-header-dots {
      display: flex;
      gap: 6px;
    }

    .pyrepl-header-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .pyrepl-header-dot.red { background: var(--pyrepl-red); }
    .pyrepl-header-dot.yellow { background: var(--pyrepl-yellow); }
    .pyrepl-header-dot.green { background: var(--pyrepl-green); }

    .pyrepl-header-title {
      flex: 1;
      text-align: center;
      color: var(--pyrepl-header-title);
      font-family: monospace;
      font-size: 13px;
    }

    .pyrepl-header-buttons {
      display: flex;
      gap: 4px;
    }

    .pyrepl-header-btn {
      background: transparent;
      border: none;
      color: var(--pyrepl-header-title);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: opacity 0.15s;
    }

    .pyrepl-header-btn:hover {
      opacity: 1;
    }

    .pyrepl-header-btn svg {
      width: 14px;
      height: 14px;
    }

    .pyrepl-floating-buttons {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;
      background: color-mix(in srgb, var(--pyrepl-header-bg) 85%, transparent);
      border-radius: 4px;
      padding: 2px;
    }

    .pyrepl--floating-buttons .xterm {
      padding-top: 32px;
    }

    .pyrepl .xterm {
      padding: 8px 12px 12px 12px;
    }

    .pyrepl .xterm-viewport::-webkit-scrollbar {
      display: none;
    }

    .pyrepl .xterm-viewport {
      scrollbar-width: none;
      background-color: var(--pyrepl-bg) !important;
    }
  `),
    document.head.appendChild(e);
}
function Mn(n, e) {
  const r = e.headerBackground || e.black,
    l = e.headerForeground || e.brightBlack;
  n.style.setProperty("--pyrepl-bg", e.background),
    n.style.setProperty("--pyrepl-header-bg", r),
    n.style.setProperty("--pyrepl-header-title", l),
    n.style.setProperty("--pyrepl-red", e.red),
    n.style.setProperty("--pyrepl-yellow", e.yellow),
    n.style.setProperty("--pyrepl-green", e.green),
    n.style.setProperty("--pyrepl-shadow", "0 4px 24px rgba(0, 0, 0, 0.3)");
}
function qn() {
  const n = document.createElement("div");
  return (
    (n.className = "pyrepl-header-buttons"),
    (n.innerHTML = `
    <button class="pyrepl-header-btn" data-action="copy" title="Copy output">${kn.copy}</button>
    <button class="pyrepl-header-btn" data-action="clear" title="Clear terminal">${kn.clear}</button>
  `),
    n
  );
}
function ne(n) {
  const e = document.createElement("div");
  e.className = "pyrepl-header";
  const r = document.createElement("div");
  (r.className = "pyrepl-header-dots"),
    (r.innerHTML = `
    <div class="pyrepl-header-dot red"></div>
    <div class="pyrepl-header-dot yellow"></div>
    <div class="pyrepl-header-dot green"></div>
  `);
  const l = document.createElement("div");
  if (
    ((l.className = "pyrepl-header-title"),
    (l.textContent = n.title),
    e.appendChild(r),
    e.appendChild(l),
    n.showButtons)
  )
    e.appendChild(qn());
  else {
    const o = document.createElement("div");
    (o.style.width = "48px"), e.appendChild(o);
  }
  return e;
}
async function Gn(n) {
  An();
  const e = Hn(n);
  if ((Mn(n, e.theme), e.showHeader)) n.appendChild(ne(e));
  else if (e.showButtons) {
    const _ = qn();
    _.classList.add("pyrepl-floating-buttons"),
      n.classList.add("pyrepl--floating-buttons"),
      n.appendChild(_);
  }
  const r = await import("./chunk-jfxv8vy0.js"),
    l = document.createElement("div");
  n.appendChild(l);
  const o = new r.Terminal({
    cursorBlink: !e.readonly,
    cursorStyle: e.readonly ? "bar" : "block",
    fontSize: 14,
    fontFamily: "monospace",
    theme: e.theme,
    disableStdin: e.readonly,
  });
  return o.open(l), { term: o, config: e };
}
async function Jn(n, e, r) {
  const l = await Un();
  if ((await l.loadPackage("micropip"), r.packages.length > 0))
    await l.pyimport("micropip").install(r.packages);
  const o =
      r.packages.length > 0
        ? ` (installed packages: ${r.packages.join(", ")})`
        : "",
    s = `${await l.runPythonAsync("import sys; sys.version.split()[0]")}${o}`;
  if (r.showBanner)
    e.write(`\x1B[90m${s}\x1B[0m\r
`);
  if (
    ((globalThis.term = e),
    (globalThis.pyreplTheme = r.themeName),
    (globalThis.pyreplPygmentsFallback = Nn(r.theme.background)
      ? "catppuccin-mocha"
      : "catppuccin-latte"),
    (globalThis.pyreplInfo = s),
    (globalThis.pyreplReadonly = r.readonly),
    (globalThis.pyreplPromptColor = r.theme.promptColor || "green"),
    (globalThis.pyreplPygmentsStyle = r.theme.pygmentsStyle),
    (globalThis.pyreplBanner = r.showBanner),
    r.src)
  )
    try {
      const d = await fetch(r.src);
      if (d.ok) globalThis.pyreplStartupScript = await d.text();
      else console.warn(`pyrepl-web: failed to fetch script from ${r.src}`);
    } catch (d) {
      console.warn(`pyrepl-web: error fetching script from ${r.src}`, d);
    }
  const p = await Ln();
  l.runPython(p), l.runPythonAsync("await start_repl()");
  while (!globalThis.currentBrowserConsole)
    await new Promise((d) => setTimeout(d, 10));
  const y = globalThis.currentBrowserConsole;
  if (
    ((globalThis.currentBrowserConsole = null),
    (globalThis.term = null),
    (globalThis.pyreplStartupScript = void 0),
    (globalThis.pyreplTheme = ""),
    (globalThis.pyreplPygmentsFallback = ""),
    (globalThis.pyreplInfo = ""),
    (globalThis.pyreplReadonly = !1),
    (globalThis.pyreplPromptColor = ""),
    (globalThis.pyreplPygmentsStyle = void 0),
    (globalThis.pyreplBanner = !1),
    !r.readonly)
  )
    e.onData((d) => {
      for (const w of d) y.push_char(w.charCodeAt(0));
    });
  if (r.showButtons) {
    const d = n.querySelector('[data-action="copy"]'),
      w = n.querySelector('[data-action="clear"]');
    d?.addEventListener("click", () => {
      let x = e.buffer.active,
        m = "";
      for (let u = 0; u < x.length; u++) {
        const L = x.getLine(u);
        if (L)
          m += `${L.translateToString(!0)}
`;
      }
      navigator.clipboard.writeText(m.trimEnd());
    }),
      w?.addEventListener("click", () => {
        if ((e.reset(), r.showBanner))
          e.write(`\x1B[90m${s}\x1B[0m\r
`);
        e.write("\x1B[32m>>> \x1B[0m");
      });
  }
}
async function Pn() {
  const n = document.querySelectorAll(".pyrepl"),
    e = Array.from(n).filter(
      (l) => !l.closest("py-repl") && !l.dataset.pyreplInitialized,
    );
  if (e.length === 0) return;
  for (const l of e) l.dataset.pyreplInitialized = "true";
  const r = await Promise.all(
    Array.from(e).map(async (l) => ({ container: l, ...(await Gn(l)) })),
  );
  for (const { container: l, term: o, config: _ } of r)
    k = k.then(() => Jn(l, o, _));
  await k;
}
Rn();
var lr = [hn("py-repl")],
  rr = h,
  ee = Bn(rr);
class P extends rr {
  static properties = {
    theme: { type: String },
    packages: { type: String },
    replTitle: { type: String, attribute: "repl-title" },
    noBanner: { type: Boolean, attribute: "no-banner" },
    isReadonly: { type: Boolean, attribute: "readonly" },
    noButtons: { type: Boolean, attribute: "no-buttons" },
    noHeader: { type: Boolean, attribute: "no-header" },
    src: { type: String },
  };
  constructor() {
    super();
    (this.theme = "catppuccin-mocha"),
      (this.packages = ""),
      (this.replTitle = "Python REPL"),
      (this.noBanner = !1),
      (this.isReadonly = !1),
      (this.noButtons = !1),
      (this.noHeader = !1),
      (this.src = "");
  }
  createRenderRoot() {
    return this;
  }
  firstUpdated(n) {
    super.firstUpdated(n);
    const e = this.querySelector(".pyrepl");
    if (!e) {
      console.error("pyrepl-web: .pyrepl container not found in <py-repl>");
      return;
    }
    (e.dataset.pyreplInitialized = "true"),
      new U({
        container: e,
        theme: this.theme,
        packages: this.packages
          .split(",")
          .map((l) => l.trim())
          .filter((l) => l.length > 0),
        readonly: this.isReadonly,
        src: this.src || void 0,
        showHeader: !this.noHeader,
        showButtons: !this.noButtons,
        title: this.replTitle,
        showBanner: !this.noBanner,
      }).init();
  }
  render() {
    return xn`<div class="pyrepl"></div>`;
  }
}
(P = Kn(ee, 0, "PyRepl", lr, P)), In(ee, 1, P), Cn(ee, P);
const _PyRepl = P;
export { P as PyRepl };

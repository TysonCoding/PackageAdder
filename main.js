/*! For license information please see main.js.LICENSE.txt */
(() => { var e = { 186: function(e, t, r) { var n, a, i, o;

        function c(e) { return function(e) { if (Array.isArray(e)) return s(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return s(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

        function s(e, t) {
          (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

        function l(e) { return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, l(e) } e = r.nmd(e), o = function() { return function() { "use strict"; var e = { d: function(t, r) { for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: r[n] }) }, o: function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } },
              t = {};

            function r(e, t) { t instanceof Node || (t = n.text("".concat(t))), t instanceof Text && "clone" in t && (t = t.clone()), e.append(t) }

            function n(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []; return "string" == typeof t && (t = { innerHTML: t }),
                function(e) { var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []; if ("function" == typeof e) return e(n, a); if (e instanceof Node) t = e;
                  else { if ("string" != typeof e) throw new Error("Invalid tag, ", l(e));
                    t = document.createElement(e) } return Object.keys(n).forEach((function(e) { var a = n[e]; if (void 0 !== a) switch (e) {
                      case "child":
                        r(t, a); break;
                      case "children":
                        if (!Array.isArray(a)) throw new Error("children must be an array of Nodes");
                        a.flat().forEach((function(e) { r(t, e) })); break;
                      case "attr":
                        Object.keys(a).forEach((function(e) { t.setAttribute(e, a[e]) })); break;
                      case "style":
                      case "dataset":
                        Object.keys(a).forEach((function(r) { t[e][r] = a[r] })); break;
                      default:
                        t[e] = a } })), t }(e, t, n) } return e.d(t, { default: function() { return n } }), Object.defineProperties(n, { get: { value: function(e) { return document.querySelector(e) } }, getAll: { value: function(e) { return c(document.querySelectorAll(e)) } }, parse: { value: function(e) { var t = document.createElement("div"); return t.innerHTML = e, 1 === t.childElementCount ? t.firstElementChild : c(t.children) } }, text: { value: function(e) { return document.createTextNode(e) } }, use: { value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = e,
                    r = !1,
                    n = document.createTextNode(e),
                    a = [n]; return Object.defineProperty(n, "value", { set: function(e) { t = e, a.forEach((function(t) { t.textContent = e })) }, get: function() { return t } }), Object.defineProperty(n, "clone", { value: function() { if (!r) return r = !0, n; var e = n.cloneNode(); return a.push(e), e } }), n } } }), t.default }() }, "object" == l(t) && "object" == l(e) ? e.exports = o() : (a = [], void 0 === (i = "function" == typeof(n = o) ? n.apply(t, a) : n) || (e.exports = i)) } },
    t = {};

  function r(n) { var a = t[n]; if (void 0 !== a) return a.exports; var i = t[n] = { id: n, loaded: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports } r.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return r.d(t, { a: t }), t }, r.d = (e, t) => { for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }) }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => { "use strict"; const e = JSON.parse('{"id":"acode.plugin.package.adder"}'); var t = r(184),
      n = r.n(t);

    function a(e) { return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, a(e) }

    function i() { i = function() { return e }; var e = {},
        t = Object.prototype,
        r = t.hasOwnProperty,
        n = Object.defineProperty || function(e, t, r) { e[t] = r.value },
        o = "function" == typeof Symbol ? Symbol : {},
        c = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        l = o.toStringTag || "@@toStringTag";

      function u(e, t, r) { return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t] } try { u({}, "") } catch (e) { u = function(e, t, r) { return e[t] = r } }

      function p(e, t, r, a) { var i = t && t.prototype instanceof g ? t : g,
          o = Object.create(i.prototype),
          c = new $(a || []); return n(o, "_invoke", { value: P(e, r, c) }), o }

      function d(e, t, r) { try { return { type: "normal", arg: e.call(t, r) } } catch (e) { return { type: "throw", arg: e } } } e.wrap = p; var h = {};

      function g() {}

      function f() {}

      function v() {} var y = {};
      u(y, c, (function() { return this })); var m = Object.getPrototypeOf,
        b = m && m(m(N([])));
      b && b !== t && r.call(b, c) && (y = b); var x = v.prototype = g.prototype = Object.create(y);

      function k(e) {
        ["next", "throw", "return"].forEach((function(t) { u(e, t, (function(e) { return this._invoke(t, e) })) })) }

      function w(e, t) {
        function i(n, o, c, s) { var l = d(e[n], e, o); if ("throw" !== l.type) { var u = l.arg,
              p = u.value; return p && "object" == a(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) { i("next", e, c, s) }), (function(e) { i("throw", e, c, s) })) : t.resolve(p).then((function(e) { u.value = e, c(u) }), (function(e) { return i("throw", e, c, s) })) } s(l.arg) } var o;
        n(this, "_invoke", { value: function(e, r) {
            function n() { return new t((function(t, n) { i(e, r, t, n) })) } return o = o ? o.then(n, n) : n() } }) }

      function P(e, t, r) { var n = "suspendedStart"; return function(a, i) { if ("executing" === n) throw new Error("Generator is already running"); if ("completed" === n) { if ("throw" === a) throw i; return { value: void 0, done: !0 } } for (r.method = a, r.arg = i;;) { var o = r.delegate; if (o) { var c = L(o, r); if (c) { if (c === h) continue; return c } } if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) { if ("suspendedStart" === n) throw n = "completed", r.arg;
              r.dispatchException(r.arg) } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing"; var s = d(e, t, r); if ("normal" === s.type) { if (n = r.done ? "completed" : "suspendedYield", s.arg === h) continue; return { value: s.arg, done: r.done } } "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg) } } }

      function L(e, t) { var r = t.method,
          n = e.iterator[r]; if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, L(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h; var a = d(n, e.iterator, t.arg); if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, h; var i = a.arg; return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h) }

      function j(e) { var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

      function C(e) { var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t }

      function $(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(j, this), this.reset(!0) }

      function N(e) { if (e) { var t = e[c]; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var n = -1,
              a = function t() { for (; ++n < e.length;)
                  if (r.call(e, n)) return t.value = e[n], t.done = !1, t; return t.value = void 0, t.done = !0, t }; return a.next = a } } return { next: S } }

      function S() { return { value: void 0, done: !0 } } return f.prototype = v, n(x, "constructor", { value: v, configurable: !0 }), n(v, "constructor", { value: f, configurable: !0 }), f.displayName = u(v, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, u(e, l, "GeneratorFunction")), e.prototype = Object.create(x), e }, e.awrap = function(e) { return { __await: e } }, k(w.prototype), u(w.prototype, s, (function() { return this })), e.AsyncIterator = w, e.async = function(t, r, n, a, i) { void 0 === i && (i = Promise); var o = new w(p(t, r, n, a), i); return e.isGeneratorFunction(r) ? o : o.next().then((function(e) { return e.done ? e.value : o.next() })) }, k(x), u(x, l, "Generator"), u(x, c, (function() { return this })), u(x, "toString", (function() { return "[object Generator]" })), e.keys = function(e) { var t = Object(e),
          r = []; for (var n in t) r.push(n); return r.reverse(),
          function e() { for (; r.length;) { var n = r.pop(); if (n in t) return e.value = n, e.done = !1, e } return e.done = !0, e } }, e.values = N, $.prototype = { constructor: $, reset: function(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0) }, stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function(e) { if (this.done) throw e; var t = this;

          function n(r, n) { return o.type = "throw", o.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n } for (var a = this.tryEntries.length - 1; a >= 0; --a) { var i = this.tryEntries[a],
              o = i.completion; if ("root" === i.tryLoc) return n("end"); if (i.tryLoc <= this.prev) { var c = r.call(i, "catchLoc"),
                s = r.call(i, "finallyLoc"); if (c && s) { if (this.prev < i.catchLoc) return n(i.catchLoc, !0); if (this.prev < i.finallyLoc) return n(i.finallyLoc) } else if (c) { if (this.prev < i.catchLoc) return n(i.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return n(i.finallyLoc) } } } }, abrupt: function(e, t) { for (var n = this.tryEntries.length - 1; n >= 0; --n) { var a = this.tryEntries[n]; if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) { var i = a; break } } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var o = i ? i.completion : {}; return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(o) }, complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h }, finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), C(r), h } }, catch: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.tryLoc === e) { var n = r.completion; if ("throw" === n.type) { var a = n.arg;
                C(r) } return a } } throw new Error("illegal catch attempt") }, delegateYield: function(e, t, r) { return this.delegate = { iterator: N(e), resultName: t, nextLoc: r }, "next" === this.method && (this.arg = void 0), h } }, e }

    function o(e, t, r, n, a, i, o) { try { var c = e[i](o),
          s = c.value } catch (e) { return void r(e) } c.done ? t(s) : Promise.resolve(s).then(n, a) }

    function c(e) { return function() { var t = this,
          r = arguments; return new Promise((function(n, a) { var i = e.apply(t, r);

          function c(e) { o(i, n, a, c, s, "next", e) }

          function s(e) { o(i, n, a, c, s, "throw", e) } c(void 0) })) } }

    function s(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (void 0, i = function(e, t) { if ("object" !== a(e) || null === e) return e; var r = e[Symbol.toPrimitive]; if (void 0 !== r) { var n = r.call(e, "string"); if ("object" !== a(n)) return n; throw new TypeError("@@toPrimitive must return a primitive value.") } return String(e) }(n.key), "symbol" === a(i) ? i : String(i)), n) } var i } var l = acode.require("loader"),
      u = acode.require("select"),
      p = acode.require("alert"),
      d = acode.fsOperation,
      h = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) } var t, r, a, o, h, g, f, v, y, m, b; return t = e, r = [{ key: "init", value: (b = c(i().mark((function e(t) { var r, a, o, c, s, l, u, p, d, h, g, f, v, y, m = this; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  o = { name: "packageAdder", description: "Add Package", exec: this.run.bind(this) }, editorManager.editor.commands.addCommand(o), t.id = "acode-plugin-package-adder", t.settitle("Add Package"), this.$page = t, this.$style = n()("style", { textContent: "#acode-plugin-package-adder .hide{display:none}#acode-plugin-package-adder .plugPage1{max-height:100%;padding:10px}#acode-plugin-package-adder .plugPage1 .searchBar{display:flex;padding:10px}#acode-plugin-package-adder .plugPage1 .searchBar .searchInput{padding:5px;width:100%;margin-right:10px;font-size:18px}#acode-plugin-package-adder .plugPage1 .searchBar button{border:none;background:var(--button-background-color);color:var(--button-text-color);padding:10px;border-radius:10px;font-size:18px}#acode-plugin-package-adder .plugPage1 .mainlistCont{height:calc(100vh - 12rem);display:flex;flex-direction:column;padding:10px;overflow-y:scroll;margin-top:15px}#acode-plugin-package-adder .plugPage1 .mainlistCont::-webkit-scrollbar{width:8px}#acode-plugin-package-adder .plugPage1 .mainlistCont::-webkit-scrollbar-track{background:var(--secondary-color)}#acode-plugin-package-adder .plugPage1 .mainlistCont::-webkit-scrollbar-thumb{background:var(--scrollbar-color)}#acode-plugin-package-adder .plugPage1 .mainlistCont ul{list-style:none}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li{padding:20px;margin-bottom:15px;max-height:100%;border-radius:10px}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li:hover{background:var(--primary-color);transition:.3s ease-in-out}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li .pkgHeader{display:flex}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li .pkgHeader h4{margin-left:20px;font-weight:500;font-size:16px}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li .pkgMain{display:flex;margin-top:10px}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li .pkgMain p{width:100%;font-size:15px;font-weight:400}#acode-plugin-package-adder .plugPage1 .mainlistCont ul li .pkgMain span{display:flex;align-items:center;font-size:25px;font-weight:400}#acode-plugin-package-adder .plugPage2{max-height:100%;padding:10px}#acode-plugin-package-adder .plugPage2 .headerDiv{display:flex;padding:20px}#acode-plugin-package-adder .plugPage2 .headerDiv h2{font-size:20px;width:100%;font-weight:500}#acode-plugin-package-adder .plugPage2 .headerDiv select{padding:8px;margin-left:10px;outline:none;width:100px;background:rgba(0,0,0,0);color:var(--secondary-text-color);border:1px solid var(--primary-color);box-shadow:0 2px 4px var(--box-shadow-color)}#acode-plugin-package-adder .plugPage2 .mainDiv{padding:20px}#acode-plugin-package-adder .plugPage2 .mainDiv .group{margin-bottom:25px}#acode-plugin-package-adder .plugPage2 .mainDiv .group label{font-size:15px;color:var(--border-color);font-weight:500;margin-bottom:10px}#acode-plugin-package-adder .plugPage2 .mainDiv .group p{margin-top:10px;font-size:17px;font-weight:400}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul{list-style:none;height:calc(100vh - 38rem);overflow-y:scroll;margin-top:8px;border:1px dotted var(--border-color);padding:5px}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul::-webkit-scrollbar{width:6px}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul::-webkit-scrollbar-track{background:var(--secondary-color)}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul::-webkit-scrollbar-thumb{background:var(--scrollbar-color)}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul li{display:flex;margin-top:6px;font-size:17px;font-weight:400}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul li .filesCheckBox{border-radius:4px;border:solid 1px var(--secondary-text-color);accent-color:var(--button-background-color)}#acode-plugin-package-adder .plugPage2 .mainDiv .group ul li .filesLabel{width:100%;margin-left:10px}#acode-plugin-package-adder .plugPage2 .footer{display:flex;justify-content:space-between;flex-direction:row;margin-bottom:5px;width:100%;position:fixed;bottom:0;overflow:hidden}#acode-plugin-package-adder .plugPage2 .footer .backBtn{border:none;background:var(--primary-color);color:var(--button-text-color);padding:12px;border-radius:10px;font-size:18px;width:calc(100vh - 60%);margin-right:10px}#acode-plugin-package-adder .plugPage2 .footer .addLibBtn{border:none;background:var(--button-background-color);color:var(--button-text-color);padding:12px;border-radius:10px;font-size:16px;width:calc(100vh - 50%);margin-right:16px}" }), this.$plugPage1 = n()("div", { className: "plugPage1 hide" }), this.$plugPage2 = n()("div", { className: "plugPage2 hide" }), this.$page.append(this.$plugPage1), this.$page.append(this.$plugPage2), this.$searchBar = n()("div", { className: "searchBar" }), this.$mainlistCont = n()("div", { className: "mainlistCont" }), this.$plugPage1.append(this.$searchBar), this.$plugPage1.append(this.$mainlistCont), this.$searchInput = n()("input", { type: "search", className: "searchInput", placeholder: "search packages(eg: vue)" }), this.$searchBtn = n()("button", { textContent: "Search" }), (r = this.$searchBar).append.apply(r, [this.$searchInput, this.$searchBtn]), this.$searchBtn.onclick = this.searchLib.bind(this), this.pkgLists = n()("ul"), this.$mainlistCont.append(this.pkgLists), c = n()("div", { className: "headerDiv" }), s = n()("div", { className: "mainDiv" }), this.libName = n()("h2"), this.versionSelector = n()("select"), c.append(this.libName), c.append(this.versionSelector), l = n()("div", { className: "group" }), u = n()("div", { className: "group" }), p = n()("div", { className: "group" }), d = n()("div", { className: "group" }), s.append.apply(s, [l, u, p, d]), h = n()("label", { textContent: "Description" }), g = n()("label", { textContent: "Lisence" }), f = n()("label", { textContent: "Author" }), v = n()("label", { textContent: "Files" }), this.descrTxt = n()("p", {}), this.lisenceTxt = n()("p", {}), this.authrTxt = n()("p", {}), this.filesList = n()("ul", {}), l.append.apply(l, [h, this.descrTxt]), u.append.apply(u, [g, this.lisenceTxt]), p.append.apply(p, [f, this.authrTxt]), d.append.apply(d, [v, this.filesList]), this.$plugPage2.append(c), this.$plugPage2.append(s), this.footer = n()("div", { className: "footer" }), this.$backBtn = n()("button", { textContent: "Back", className: "backBtn" }), this.$addLibBtn = n()("button", { textContent: "Add Package", className: "addLibBtn" }), (a = this.footer).append.apply(a, [this.$backBtn, this.$addLibBtn]), this.$plugPage2.append(this.footer), this.$backBtn.onclick = this.backToPage1.bind(this), this.$addLibBtn.onclick = this.addLibrary.bind(this), this.versionSelector.onchange = this.changeVersion.bind(this), document.head.append(this.$style), this.$sriObj = {}, y = this.$page.onhide, this.$page.onhide = function() { m.$plugPage2.classList.add("hide"), m.$plugPage1.classList.add("hide") }, y();
                case 58:
                case "end":
                  return e.stop() } }), e, this) }))), function(e) { return b.apply(this, arguments) }) }, { key: "run", value: (m = c(i().mark((function e() { return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  this.$page.show(), this.loadLibraries("https://api.cdnjs.com/libraries?fields=filename,description,github&limit=10"), this.$plugPage1.classList.remove("hide"), this.$plugPage2.classList.add("hide");
                case 4:
                case "end":
                  return e.stop() } }), e, this) }))), function() { return m.apply(this, arguments) }) }, { key: "loadLibraries", value: (y = c(i().mark((function e(t) { var r, a, o = this; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, this.pkgLists.innerHTML = "", l.create("Loading", "Fetching data..."), e.next = 5, fetch(t);
                case 5:
                  return r = e.sent, e.next = 8, r.json();
                case 8:
                  a = e.sent, l.destroy(), a.results.forEach((function(e) { var t = n()("li");
                    o.pkgLists.append(t); var r = n()("div", { className: "pkgHeader" }),
                      a = n()("div", { className: "pkgMain" });
                    t.append.apply(t, [r, a]); var i = n()("h3", { textContent: e.name }),
                      c = n()("h4", { textContent: o.abbreviateNumber(e.github.stargazers_count) }),
                      s = n()("h4", { textContent: o.abbreviateNumber(e.github.forks) });
                    r.append.apply(r, [i, c, s]); var l = n()("p", { textContent: e.description }),
                      u = n()("span", { textContent: "+" });
                    a.append.apply(a, [l, u]), t.onclick = o.pkgDetails.bind(o, e.name) })), e.next = 17; break;
                case 14:
                  e.prev = 14, e.t0 = e.catch(0), this.closePlugin();
                case 17:
                case "end":
                  return e.stop() } }), e, this, [[0, 14]]) }))), function(e) { return y.apply(this, arguments) }) }, { key: "searchLib", value: function() { var e = this.$searchInput.value.toLowerCase();
            this.loadLibraries("https://api.cdnjs.com/libraries?search=" + e + "&fields=filename,description,github&limit=10") } }, { key: "pkgDetails", value: (v = c(i().mark((function e(t) { var r, a, o, c, s, u, p, d, h, g, f, v, y, m; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  return r = "https://api.cdnjs.com/libraries/".concat(t, "?fields=name,author,description,filename,version,versions,repository,license,assets"), e.prev = 1, l.create("Loading", "Fetching data..."), e.next = 5, fetch(r);
                case 5:
                  return a = e.sent, e.next = 8, a.json();
                case 8:
                  for (o = e.sent, l.destroy(), this.$plugPage1.classList.add("hide"), this.$plugPage2.classList.remove("hide"), this.libName.textContent = o.name, this.descrTxt.textContent = o.description, this.lisenceTxt.textContent = o.license, this.authrTxt.textContent = o.author, this.$sriObj = {}, this.$sriObj = o.assets[0].sri, c = this.filterVersions(o.versions), s = c.slice(-50), u = 0; u < s.length; u++) s[u] == o.version ? this.versionSelector.innerHTML += '<option value="'.concat(s[u], '" selected>').concat(s[u], "</option>") : this.versionSelector.innerHTML += '<option value="'.concat(s[u], '">').concat(s[u], "</option>"); for (this.filesList.innerHTML = "", p = this.filterFiles(o.assets[0].files), d = 0; d < p.length; d++) o.filename == p[d] ? (h = n()("li"), g = n()("input", { type: "checkbox", className: "filesCheckBox", value: p[d], checked: !0 }), f = n()("p", { textContent: p[d], className: "filesLabel" }), h.append.apply(h, [g, f]), this.filesList.append(h)) : (v = n()("li"), y = n()("input", { type: "checkbox", className: "filesCheckBox", value: p[d] }), m = n()("p", { textContent: p[d], className: "filesLabel" }), v.append.apply(v, [y, m]), this.filesList.append(v));
                  e.next = 29; break;
                case 26:
                  e.prev = 26, e.t0 = e.catch(1), this.closePlugin();
                case 29:
                case "end":
                  return e.stop() } }), e, this, [[1, 26]]) }))), function(e) { return v.apply(this, arguments) }) }, { key: "changeVersion", value: (f = c(i().mark((function e() { var t, r, a, o, c, s, u, p, d, h; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  return t = this.libName.textContent, r = this.versionSelector.value, a = "https://api.cdnjs.com/libraries/".concat(t, "/").concat(r), e.prev = 3, l.create("Loading", "Fetching files..."), e.next = 7, fetch(a);
                case 7:
                  return o = e.sent, e.next = 10, o.json();
                case 10:
                  for (c = e.sent, l.destroy(), this.filesList.innerHTML = "", this.$sriObj = {}, this.$sriObj = c.sri, s = this.filterFiles(c.files), u = 0; u < s.length; u++) p = n()("li"), d = n()("input", { type: "checkbox", className: "filesCheckBox", value: s[u] }), h = n()("p", { textContent: s[u], className: "filesLabel" }), p.append.apply(p, [d, h]), this.filesList.append(p);
                  e.next = 22; break;
                case 19:
                  e.prev = 19, e.t0 = e.catch(3), this.closePlugin();
                case 22:
                case "end":
                  return e.stop() } }), e, this, [[3, 19]]) }))), function() { return f.apply(this, arguments) }) }, { key: "filterFiles", value: function(e) { return e.filter((function(e) { return e.endsWith(".js") || e.endsWith(".css") })) } }, { key: "filterVersions", value: function(e) { return e.filter((function(e) { return !(e.includes("alpha") || e.includes("beta") || e.includes("rc") || e.includes("csp") || e.includes("migration")) })) } }, { key: "abbreviateNumber", value: function(e) { var t = e.toString(),
              r = t.length; return r < 4 ? t : r >= 4 && r <= 6 ? (e / 1e3).toFixed(1) + "K" : r >= 7 ? (e / 1e6).toFixed(1) + "M" : void 0 } }, { key: "backToPage1", value: function() { this.$plugPage2.classList.add("hide"), this.$plugPage1.classList.remove("hide") } }, { key: "closePlugin", value: function() { this.$page.hide(), p("Error", "Connection error, check your internet and Try Again!"), l.destroy() } }, { key: "addThroughApi", value: function(e) { for (var t = "", r = 0; r < e.length; r++) { var n = "https://cdnjs.cloudflare.com/ajax/libs/".concat(this.libName.textContent, "/").concat(this.versionSelector.value, "/").concat(e[r]); switch (e[r].split(".").slice(-1)[0]) {
                case "js":
                  t += '<script src="'.concat(n, '" integrity="').concat(this.$sriObj[e[r]], '" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n'); break;
                case "css":
                  t += '<link rel="stylesheet" href="'.concat(n, '" integrity="').concat(this.$sriObj[e[r]], '" crossorigin="anonymous" referrerpolicy="no-referrer" />\n') } } this.$page.hide(), editorManager.editor.insert(t) } }, { key: "loadFileContent", value: (g = c(i().mark((function e(t) { var r, n; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, e.next = 3, fetch(t);
                case 3:
                  return r = e.sent, e.next = 6, r.text();
                case 6:
                  return n = e.sent, e.abrupt("return", n);
                case 10:
                  e.prev = 10, e.t0 = e.catch(0), this.closePlugin();
                case 13:
                case "end":
                  return e.stop() } }), e, this, [[0, 10]]) }))), function(e) { return g.apply(this, arguments) }) }, { key: "addThroughDownload", value: (h = c(i().mark((function e(t) { var r, n, a, o, c, s, u, p, h, g, f, v; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  return r = editorManager, n = r.activeFile, a = n.location, o = "modules", c = "", e.next = 6, d(a + o).exists();
                case 6:
                  if (e.sent) { e.next = 9; break } return e.next = 9, d(a).createDirectory(o);
                case 9:
                  s = 0;
                case 10:
                  if (!(s < t.length)) { e.next = 38; break } return u = "https://cdnjs.cloudflare.com/ajax/libs/".concat(this.libName.textContent, "/").concat(this.versionSelector.value, "/").concat(t[s]), e.next = 14, this.loadFileContent(u);
                case 14:
                  return p = e.sent, h = t[s].split("."), g = h.slice(-1)[0], f = t[s].replace(/^(js|css|esm|cjs|umd|font|iconfont)\//, ""), v = f.replace(/\//g, "-"), e.next = 21, d("".concat(a).concat(o, "/").concat(v)).exists();
                case 21:
                  if (e.sent) { e.next = 35; break } return l.create("Downloading", "Downloading selected files of library...\nFile: ".concat(v)), e.next = 25, d("".concat(a).concat(o, "/")).createFile(v, p);
                case 25:
                  e.t0 = g, e.next = "js" === e.t0 ? 28 : "css" === e.t0 ? 30 : 32; break;
                case 28:
                  return c += '<script src="/'.concat(o, "/").concat(v, '"><\/script>\n'), e.abrupt("break", 32);
                case 30:
                  return c += '<link rel="stylesheet" href="/'.concat(o, "/").concat(v, '" />\n'), e.abrupt("break", 32);
                case 32:
                  editorManager.editor.insert(c), l.destroy(), window.toast("Success", 4e3);
                case 35:
                  s++, e.next = 10; break;
                case 38:
                case "end":
                  return e.stop() } }), e, this) }))), function(e) { return h.apply(this, arguments) }) }, { key: "addLibrary", value: (o = c(i().mark((function e() { var t, r, n, a; return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, u("Select Type", ["Api", "Download Files"], { default: "Api" });
                case 2:
                  for (t = e.sent, r = document.querySelectorAll(".filesCheckBox"), n = [], a = 0; a < r.length; a++) r[a].checked && n.push(r[a].value);
                  e.t0 = t, e.next = "Api" === e.t0 ? 9 : "Download Files" === e.t0 ? 11 : 13; break;
                case 9:
                  return this.addThroughApi(n), e.abrupt("break", 13);
                case 11:
                  return this.addThroughDownload(n), e.abrupt("break", 13);
                case 13:
                case "end":
                  return e.stop() } }), e, this) }))), function() { return o.apply(this, arguments) }) }, { key: "destroy", value: (a = c(i().mark((function e() { return i().wrap((function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                  editorManager.editor.commands.removeCommand("packageAdder");
                case 1:
                case "end":
                  return e.stop() } }), e) }))), function() { return a.apply(this, arguments) }) }], r && s(t.prototype, r), Object.defineProperty(t, "prototype", { writable: !1 }), e }(); if (window.acode) { var g = new h;
      acode.setPluginInit(e.id, (function(e, t, r) { var n = r.cacheFileUrl,
          a = r.cacheFile;
        e.endsWith("/") || (e += "/"), g.baseUrl = e, g.init(t, a, n) })), acode.setPluginUnmount(e.id, (function() { g.destroy() })) } })() })();
parcelRequire = function (e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }

    f.isParcelRequire = !0, f.Module = function (e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
        e[r] = [
            function (e, r) {
                r.exports = t
            }, {}
        ]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "mDQW": [
        function (require, module, exports) {
            "use strict";

            function e(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function t(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.default = void 0;
            var n = function n(i) {
                var s = this;
                e(this, n), t(this, "_handleVoicesChanged", function () {
                    var e = s.props.voice,
                        t = window.speechSynthesis.getVoices(),
                        n = t.find(function (t) {
                            return t.name === e
                        });
                    s.utterance.voice = n || t[0]
                }), t(this, "_resumeInfinity", function () {
                    window.speechSynthesis.resume(), s.timeoutResumeInfinity = setTimeout(s._resumeInfinity, 1e3)
                }), t(this, "onend", function (e) {
                    s.utterance.onend = function (t) {
                        clearTimeout(s.timeoutResumeInfinity), e(t)
                    }
                }), t(this, "onerror", function (e) {
                    s.utterance.onerror = function (t) {
                        clearTimeout(s.timeoutResumeInfinity), e(t)
                    }
                }), t(this, "speak", function () {
                    s._resumeInfinity(), window.speechSynthesis.cancel(), window.speechSynthesis.speak(s.utterance)
                }), t(this, "pause", function () {
                    clearTimeout(s.timeoutResumeInfinity), window.speechSynthesis.pause()
                }), t(this, "cancel", function () {
                    clearTimeout(s.timeoutResumeInfinity), window.speechSynthesis.cancel()
                }), t(this, "resume", function () {
                    clearTimeout(s.timeoutResumeInfinity), s._resumeInfinity()
                }), this.props = i, this.timeoutResumeInfinity = null, this.utterance = new window.SpeechSynthesisUtterance, this.utterance.text = i.text.replace(/\n/g, ""), this.utterance.lang = i.lang || "en-GB", this.utterance.pitch = parseFloat(i.pitch, 10) || .8, this.utterance.rate = parseFloat(i.rate, 10) || 1, this.utterance.volume = parseFloat(i.volume, 10) || 1, window.speechSynthesis.onvoiceschanged = this._handleVoicesChanged
            };
            exports.default = n;
        }, {}
    ],
    "aiJW": [
        function (require, module, exports) {
            module.exports = {
                container: "styles_container_1H7C6",
                button: "styles_button_1v679",
                buttonResume: "styles_buttonResume_I0S4_",
                buttonPlay: "styles_buttonPlay_1g13t",
                buttonPause: "styles_buttonPause_8759q",
                range: "styles_range_3uoCR",
                streamText: "styles_streamText_chJfp",
                stream: "styles_stream_3F09T"
            };
        }, {}
    ],
    "H99C": [
        function (require, module, exports) {
            "use strict";
            var e = n(require("./speechSynthesis")),
                t = n(require("./styles.scss"));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function (t) {
                        u(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function c(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var o = function () {
                function n(a) {
                    var s = this,
                        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, n), u(this, "_init", function () {
                        s._didMount(), s._render(), s._handleDOM()
                    }), u(this, "_update", function () {
                        s._render(), s._renderRange(), s._handleDOM()
                    }), u(this, "_updateRange", function () {
                        s._renderRange(), s._handleDOM()
                    }), u(this, "_handleDOM", function () {
                        var e = s.element.querySelector(".".concat(t.default.buttonPlay)),
                            n = s.element.querySelector(".".concat(t.default.buttonPause)),
                            a = s.element.querySelector(".".concat(t.default.buttonResume)),
                            r = s.element.querySelector(".".concat(t.default.stream));
                        e && e.addEventListener("click", s._handlePlay), n && n.addEventListener("click", s._handlePause), a && a.addEventListener("click", s._handleResume), r && r.addEventListener("click", s._handleStreamClick)
                    }), u(this, "_setState", function (e) {
                        s.state = r(r({}, s.state), e)
                    }), u(this, "_didMount", function () {
                        var t = s.props,
                            n = t.text,
                            a = t.lang,
                            r = t.voice;
                        s._setState({
                            max: s._textSplitLength()
                        }), s._update(), s._speechSynthesis = new e.default({
                            text: n,
                            lang: a,
                            voice: r
                        }), s._speechSynthesis.onend(s._handleEnd)
                    }), u(this, "unMount", function () {
                        s._interval && clearInterval(s._interval), s._addToQueue && clearTimeout(s._addToQueue)
                    }), u(this, "_textSplitLength", function () {
                        var e = s.props,
                            t = e.text;
                        return -1 !== e.lang.search(/^(ja|zh|ko)-/g) ? t.split("").length : t.split(" ").length
                    }), u(this, "_handleEnd", function () {
                        s._setState({
                            isPlay: !0,
                            isPause: !0,
                            value: 0
                        }), s._update(), clearInterval(s._interval)
                    }), u(this, "_getTime", function () {
                        var e = s.props,
                            t = e.text,
                            n = e.lang,
                            a = t.length / s._textSplitLength() * 48,
                            r = t.match(/(\?|\.|\,|\:|\;)/g),
                            i = r ? 1.5 * r.length : 1;
                        return -1 !== n.search(/^ja-/g) ? 200 : -1 !== n.search(/^zh-/g) ? 200 : -1 !== n.search(/^ko-/g) ? 130 : -1 !== n.search(/^ru-/g) ? a + i + 70 : a + i
                    }), u(this, "_setValue", function () {
                        s._interval && clearInterval(s._interval), s._interval = setInterval(function () {
                            var e = s.state,
                                t = e.value,
                                n = e.max;
                            t >= n && clearInterval(s._interval), s._setState({
                                value: t >= n ? n : t + 1
                            }), s._updateRange()
                        }, s._getTime())
                    }), u(this, "_handlePlay", function () {
                        s._speechSynthesis.speak(), s._setState({
                            isPlay: !1
                        }), s._update(), s._setValue()
                    }), u(this, "_handlePause", function () {
                        s._speechSynthesis.pause(), s._setState({
                            isPause: !1
                        }), s._update(), clearInterval(s._interval)
                    }), u(this, "_handleResume", function () {
                        s._speechSynthesis.resume(), s._setValue(), s._setState({
                            isPause: !0
                        }), s._update()
                    }), u(this, "_handleStreamClick", function () {
                        s._speechSynthesis.cancel(), s._handleEnd()
                    }), u(this, "_renderButton", function (e) {
                        switch (e) {
                            case "play":
                                return '\n          <div class="'.concat(t.default.button, " ").concat(t.default.buttonPlay, '"></div>\n        ');
                            case "pause":
                                return '\n          <div class="'.concat(t.default.button, " ").concat(t.default.buttonPause, '"></div>\n        ');
                            case "resume":
                                return '\n          <div class="'.concat(t.default.button, " ").concat(t.default.buttonResume, '"></div>\n        ');
                            default:
                                return null
                        }
                    }), u(this, "_renderRange", function () {
                        var e = s.state,
                            n = e.value,
                            a = e.max,
                            r = s.element.querySelector(".".concat(t.default.range));
                        r && (r.innerHTML = '\n        <div style="width: '.concat(100 * n / a, '%" />\n      '))
                    }), u(this, "_renderStream", function () {
                        var e = s.props.stopText,
                            n = s.state.isPlay;
                        return '\n      <div class="'.concat(t.default.stream, '">\n        ').concat(n ? "" : '<div class="'.concat(t.default.streamText, '">').concat(e, "</div>"), '\n        <div class="').concat(t.default.range, '"></div>\n      </div>\n    ')
                    });
                    this.props = r(r({}, {
                        lang: "en-US",
                        voice: "Alex",
                        tintColor: "#0389ff",
                        stopText: "Click To Stop"
                    }), c), this.element = a, this.state = {
                        isPlay: !0,
                        isPause: !0,
                        value: 0,
                        max: 0,
                        min: 0
                    }, this._init()
                }

                return c(n, [{
                    key: "_render",
                    value: function () {
                        var e = this.props.tintColor,
                            n = this.state,
                            a = n.isPlay,
                            r = n.isPause,
                            i = '\n      <div class="'.concat(t.default.container, '" style="background: ').concat(e, '">\n        ').concat(a ? this._renderButton("play") : "", "\n        ").concat(!a && r ? this._renderButton("pause") : "", "\n        ").concat(a || r ? "" : this._renderButton("resume"), "\n        ").concat(this._renderStream(), "\n      </div>\n    ");
                        this.element.innerHTML = i
                    }
                }]), n
            }();

            function l(e) {
                var t = document.querySelectorAll(e),
                    n = [];
                t && t.forEach(function (e, t) {
                    var a = e.getAttribute("data-text"),
                        r = e.getAttribute("data-lang"),
                        i = e.getAttribute("data-voice"),
                        s = e.getAttribute("data-stop-text"),
                        c = e.getAttribute("data-color");
                    n.push({
                        text: a,
                        lang: r,
                        voice: i,
                        stopText: s,
                        tintColor: c
                    }), e.removeAttribute("data-text"), e.removeAttribute("data-lang"), e.removeAttribute("data-voice"), e.removeAttribute("data-stop-text"), e.removeAttribute("data-color"), new o(e, n[t])
                })
            }

            window.addEventListener("DOMContentLoaded", function () {
                l(".wil-text-to-speech")
            });
        }, {
            "./speechSynthesis": "mDQW",
            "./styles.scss": "aiJW"
        }
    ]
}, {}, ["H99C"], null)
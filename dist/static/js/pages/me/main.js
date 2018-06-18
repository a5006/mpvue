global.webpackJsonp([2],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(120);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e4a7c0a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e4a7c0a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e4a7c0a2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\me\\Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4a7c0a2", Component.options)
  } else {
    hotAPI.reload("data-v-e4a7c0a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_YearProgress__ = __webpack_require__(127);


//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  components: { YearProgress: __WEBPACK_IMPORTED_MODULE_5__components_YearProgress__["a" /* default */] },
  data: function data() {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/doge.png',
        nickName: 'doge'
      }
    };
  },

  methods: {
    login: function login() {
      var _this = this;

      var session = __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.Session.get();
      if (session) {
        __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].loginUrl);
        // 第二次登录
        // 或者本地已经有登录态
        // 可使用本函数更新登录态
        __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.loginWithCode({
          success: function success(res) {
            _this.userinfo = wx.getStorageSync('userinfo');
            Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* showSuccess */])('登录成功');
          },
          fail: function fail(err) {
            Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('登录错误', err.message);
          }
        });
      } else {
        // 首次登录
        __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].loginUrl);
        __WEBPACK_IMPORTED_MODULE_3_wafer2_client_sdk___default.a.login({
          success: function success(res) {
            wx.setStorageSync('userinfo', res);
            _this.userinfo = wx.getStorageSync('userinfo');
            Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* showSuccess */])('登录成功');
          },
          fail: function fail(err) {
            Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('登录错误', err.message);
          }
        });
      }
    },

    // isbn 图书的isbn
    addBook: function addBook(isbn) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* post */])('/weapp/addbook', {
                  isbn: isbn,
                  openId: _this2.userinfo.openId
                });

              case 2:
                res = _context.sent;

                if (res.code === 0 && res.data.title) {
                  Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* showSuccess */])(res.data.title + '\u6DFB\u52A0\u6210\u529F');
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    scanBook: function scanBook() {
      var _this3 = this;

      wx.scanCode({
        success: function success(res) {
          if (res.result) {
            _this3.addBook(res.result);
          }
        }
      });
    }
  },
  created: function created() {},
  onShow: function onShow() {
    var userinfo = wx.getStorageSync('userinfo');
    if (userinfo) {
      this.userinfo = userinfo;
    }
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_558ae42e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(128)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-558ae42e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_558ae42e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\YearProgress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-558ae42e", Component.options)
  } else {
    hotAPI.reload("data-v-558ae42e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'yearProgress',
  data: function data() {
    return {
      time: null
    };
  },

  methods: {
    isLeapYear: function isLeapYear() {}
  },
  computed: {
    year: function year() {
      return new Date().getFullYear();
    },
    days: function days() {
      // 每年的元月一日
      var start = new Date();
      start.setMonth(0);
      start.setDate(1);
      // 今天的时间减去今年的时间戳
      var offset = new Date().getTime() - start.getTime();
      this.time = parseInt(offset / 1000 / 60 / 60 / 24) + 1;
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1;
    },
    percent: function percent() {
      var nowYear = new Date().getFullYear();
      if (nowYear % 4) {
        return (this.days / 366 * 100).toFixed(2);
      } else {
        return (this.days / 365 * 100).toFixed(2);
      }
    }
  }
});

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "yearProgress"
  }, [_c('progress', {
    attrs: {
      "percent": _vm.percent,
      "color": "#2d9aa1"
    }
  }), _vm._v(" "), _c('div', [_c('b', {
    staticClass: "imp"
  }, [_vm._v(_vm._s(_vm.year))]), _vm._v("已经过去了"), _c('b', {
    staticClass: "imp"
  }, [_vm._v(_vm._s(_vm.days))]), _vm._v("天,"), _c('b', {
    staticClass: "imp"
  }, [_vm._v(_vm._s(_vm.percent) + "%")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-558ae42e", esExports)
  }
}

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.userinfo.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.userinfo.nickName))])], 1), _vm._v(" "), _c('YearProgress', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), (!_vm.userinfo.openId) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.login
    }
  }, [_vm._v("登陆")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.scanBook
    }
  }, [_vm._v("添加图书")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e4a7c0a2", esExports)
  }
}

/***/ })

},[119]);
//# sourceMappingURL=main.js.map
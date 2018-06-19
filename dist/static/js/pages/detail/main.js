global.webpackJsonp([3],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Detail__ = __webpack_require__(111);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Detail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d73c20f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d73c20f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2d73c20f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d73c20f", Component.options)
  } else {
    hotAPI.reload("data-v-2d73c20f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Comments__ = __webpack_require__(46);


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
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BookInfo: __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__["a" /* default */],
    Comments: __WEBPACK_IMPORTED_MODULE_4__components_Comments__["a" /* default */]
  },
  data: function data() {
    return {
      bookid: '',
      bookInfo: {},
      comment: '',
      location: '',
      phone: '',
      userinfo: {},
      commentList: []
    };
  },

  methods: {
    getComment: function getComment() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var comments;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/commentList', { bookid: _this.bookid });

              case 2:
                comments = _context.sent;

                _this.commentList = comments.data.list || [];

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 添加评论
    addComment: function addComment() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 评论内容 手机型号 地理位置 图书ID 用户openId 时间
                data = {
                  comment: _this2.comment,
                  phone: _this2.phone,
                  location: _this2.location,
                  bookid: _this2.bookid,
                  openid: _this2.userinfo.openId,
                  time: _this2.getNow()
                };
                _context2.prev = 1;
                _context2.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* post */])('/weapp/comment', data);

              case 4:
                res = _context2.sent;

                Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* showSuccess */])(res.data.msg);
                console.log(res, 'res');
                _this2.comment = '';
                _this2.getComment();
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);

                console.log(_context2.t0);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 11]]);
      }))();
    },

    // 时间函数
    getNow: function getNow() {
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var hour = d.getHours();
      var min = d.getMinutes();
      var arr = this.dateFormate([month, day, hour, min]);
      var time = year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3];
      return time;
    },
    dateFormate: function dateFormate(arr) {
      return arr.map(function (t) {
        return String(t).length < 2 ? '0' + t : t;
      });
    },
    getDetail: function getDetail() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var info;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* get */])('/weapp/bookdetail', { id: _this3.bookid });

              case 2:
                info = _context3.sent;

                _this3.bookInfo = info.data;
                wx.setNavigationBarTitle({
                  title: _this3.bookInfo.title
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    getLoc: function getLoc(e) {
      var ak = '0on2oKYncPoWpd7XLEfjGQaMvf7EFm9n';
      var url = 'http://api.map.baidu.com/geocoder/v2/';
      var that = this;
      if (e.target.value) {
        wx.getLocation({
          success: function success(geo) {
            wx.request({
              url: url,
              data: {
                ak: ak,
                location: geo.latitude + ',' + geo.longtitude,
                output: 'json'
              },
              success: function success(res) {
                if (res.data.status === 0) {
                  that.location = res.data.result.addressComponent.city;
                } else {
                  that.location = '外太空';
                }
              }
            });
          }
        });
      } else {
        this.location = '';
      }
    },
    getPhone: function getPhone(e) {
      if (e.target.value) {
        var phoneInfo = wx.getSystemInfoSync();
        this.phone = phoneInfo.model;
      } else {
        this.phone = '';
      }
    },

    onShareAppMessage: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '自定义转发标题'
      };
    }
  },
  mounted: function mounted() {
    // mpvue写法，获取page onLoad 时候传递的 options
    this.bookid = this.$root.$mp.query.id;
    // 每次进入页面都触发count累加方法
    this.getDetail();
    this.getComment();
    this.getNow();
    var userinfo = wx.getStorageSync('userinfo');
    // this.openid = openid
    this.userinfo = userinfo;
    // 评论重置
    this.comment = '';
  },

  computed: {
    showAdd: function showAdd() {
      var _this4 = this;

      // 如果没登陆
      console.log(this.commentList);
      if (!this.userinfo.openId) {
        return false;
      }
      // 评论里有自己的openID
      if (this.commentList.filter(function (v) {
        return v.openid === _this4.userinfo.openId;
      }).length) {
        return false;
      }
      return true;
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    console.log(res.target);
    return {
      title: this.bookInfo.title
    };
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_18c7fd4a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-18c7fd4a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_18c7fd4a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\BookInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BookInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18c7fd4a", Component.options)
  } else {
    hotAPI.reload("data-v-18c7fd4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rate__ = __webpack_require__(45);
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Rate: __WEBPACK_IMPORTED_MODULE_0__components_Rate__["a" /* default */]
  },
  props: ['info'],
  computed: {
    userInfo: function userInfo() {
      // 这里要这么写是因为数据是ajax获取的，可能刚进页面，数据还是为空，所以页面就会报错
      // 为了防止，则要这么写，个人猜测
      return this.info.user_info || {};
    }
  }
});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bookinfo"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "mode": "aspectFill",
      "src": _vm.info.image,
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "mode": "aspectFit",
      "src": _vm.info.image,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title_info"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("《 " + _vm._s(_vm.info.title) + " 》")]), _vm._v(" "), _c('p', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.info.author))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "subTitle_info"
  }, [_c('div', {
    staticClass: "owner"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.userInfo.image,
      "alt": ""
    }
  }), _vm._v("\n   " + _vm._s(_vm.userInfo.nickName) + "\n  "), _c('div', {
    staticClass: "right"
  }, [_c('span', {
    staticClass: "rate"
  }, [_vm._v(_vm._s(_vm.info.rate))]), _vm._v(" "), _c('Rate', {
    attrs: {
      "value": _vm.info.rate,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._v("\n  " + _vm._s(_vm.info.publisher) + "\n  "), _c('div', {
    staticClass: "right price"
  }, [_vm._v("\n    ￥" + _vm._s(_vm.info.price) + "\n  ")])])]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.info.tags), function(tag, index) {
    return _c('div', {
      key: tag,
      staticClass: "tags_badge"
    }, [_vm._v("\n    " + _vm._s(tag) + "\n  ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, _vm._l((_vm.info.summary), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "summary_badge"
    }, [_vm._v("\n    " + _vm._s(item) + "\n  ")])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18c7fd4a", esExports)
  }
}

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('BookInfo', {
    attrs: {
      "info": _vm.bookInfo,
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.commentList.length) ? _c('Comments', {
    attrs: {
      "list": _vm.commentList,
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showAdd) ? _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    staticClass: "textarea",
    attrs: {
      "maxlength": 100,
      "placeholder": "请输入对书的评价",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }) : _c('div', {
    staticClass: "showAdd"
  }, [_vm._v("\n    未登录或者已评论\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "switch"
  }, [_c('div', {
    staticClass: "location"
  }, [_vm._v("\n    地理位置：\n    "), _c('switch', {
    staticClass: "checkbox",
    attrs: {
      "checked": _vm.location,
      "color": "#47b0b7",
      "eventid": '1'
    },
    on: {
      "change": _vm.getLoc
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.location) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("\n    手机型号：\n     "), _c('switch', {
    staticClass: "checkbox",
    attrs: {
      "checked": _vm.phone,
      "color": "#47b0b7",
      "eventid": '2'
    },
    on: {
      "change": _vm.getPhone
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.phone))])])]), _vm._v(" "), (_vm.showAdd) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addComment
    }
  }, [_vm._v(" 评论")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d73c20f", esExports)
  }
}

/***/ })

},[110]);
//# sourceMappingURL=main.js.map
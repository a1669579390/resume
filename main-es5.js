function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-myindex></app-myindex>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myindex/myindex.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myindex/myindex.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyindexMyindexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" id=\"wrap\">\n  <!-- 右侧竖向楼层条 -->\n  <div class=\"swiper\">\n    <div class=\"swiper-pagination\">\n      <div class=\"swiper-pagination_1\" id=\"circle1\">\n        <a href=\"#page01\">首页</a>\n      </div>\n    </div>\n    <div class=\"swiper-pagination\">\n      <div class=\"swiper-pagination_1\" id=\"circle2\">\n        <a href=\"#page02\">关于我</a>\n      </div>\n    </div>\n    <div class=\"swiper-pagination\">\n      <div class=\"swiper-pagination_1\" id=\"circle3\">\n        <a href=\"#page03\">个人技能</a>\n      </div>\n    </div>\n    <div class=\"swiper-pagination\">\n      <div class=\"swiper-pagination_1\" id=\"circle4\">\n        <a href=\"#page04\">我的经历</a>\n      </div>\n    </div>\n    <div class=\"swiper-pagination\">\n      <div class=\"swiper-pagination_1\" id=\"circle5\">\n        <a href=\"#page05\">我的作品</a>\n      </div>\n    </div>\n    <div class=\"swiper-pagination\">\n      <div class=\"swiper-pagination_1\" id=\"circle6\">\n        <a href=\"#page06\">联系我</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"name\">\n    <div class=\"music_img\">\n      <img src=\"../../assets/img/diepian.png\" alt=\"\">\n      <img class=\"play-img\"  (click)=\"play1()\" src=\"../../assets/img/play.png\" alt=\"\">    \n    </div>    \n      <span>Yang</span>\n      <i>'s</i>\n      <b>resume</b>      \n  </div>\n    <!-- 弹出层 -->\n    <div class=\"zyc\">\n      <div class=\"navigation\">\n        <ul>\n          <li><a class=\"a01\" href=\"#page01\" (click)=\"toggle()\">首页</a></li>\n          <li><a class=\"a02\" href=\"#page02\" (click)=\"toggle()\">关于我</a></li>\n          <li><a class=\"a03\" href=\"#page03\" (click)=\"toggle()\">个人技能</a></li>\n          <li><a class=\"a04\" href=\"#page04\" (click)=\"toggle()\">我的经历</a></li>\n          <li><a class=\"a05\" href=\"#page05\" (click)=\"toggle()\">我的作品</a></li>\n          <li><a class=\"a06\" href=\"#page06\" (click)=\"toggle()\">联系我</a></li>\n         \n        </ul>\n      </div>\n    </div>\n    <!-- 手机端导航栏 -->\n    <div class=\"navigation-phone\">\n      <ul>\n        <li><a class=\"a01\" href=\"#page01\" >首页</a></li>\n        <li><a class=\"a02\" href=\"#page02\" >关于我</a></li>\n        <li><a class=\"a03\" href=\"#page03\" >个人技能</a></li>\n        <li><a class=\"a04\" href=\"#page04\" >我的经历</a></li>\n        <li><a class=\"a05\" href=\"#page05\" >我的作品</a></li>\n        <li><a class=\"a06\" href=\"#page06\" >联系我</a></li>\n        <li><i></i></li>\n      </ul>\n    </div>\n    <div class=\"nav\">\n      <div class=\"music\">\n        <img (click)=\"play1()\" class=\"touxiang\" src=\"../../assets//img/diepian.png\" alt=\"\">\n        <i>My resume</i>\n        <img  (click)=\"phone_toggle()\" class=\"menu\" src=\"../../assets/img/menu_1.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"icon\" (click)=\"toggle()\"></div>\n    <div id=\"main\">\n      <div id=\"page1\" class=\"section\"> \n        <div class=\"bghui\">\n          <div class=\"desc\"><!--第一栏中间的方框-->\n            <img src=\"../../assets/img/touxiang1.jpg\" alt=\"\">\n            <h2 id=\"a1\" style=\"font-family:'HanWangT00071fb4ac5fa3211a4'\">Hello,I'm Yang</h2>\n            <h3>Luck is a matter of preparation meeting opportunity</h3>\n            <h4 class=\"left1\">你好，我叫杨铜描</h4>\n            <h4 class=\"right1\">一名前端开发工程师</h4>\n            <h4 class=\"left2\">yangtongmiao@126.com</h4>\n          </div>   \n        </div> \n      </div>\n        <div class=\"about section\" id=\"page2\">\n          <div class=\"bghui\">\n            <div class=\"content\">\n             <span class=\"title\">关于我</span>\n              <div class=\"mezl\">\n              <!-- 左侧图片 -->\n               <div class=\"scree_1\">\n                  <img src=\"../../assets/img/yuan.jpg\" alt=\"\">\n               </div>\n               <div class=\"names\">\n                  <h6>姓名：杨铜描</h6>\n                  <h6>年龄：23</h6>\n                  <h6>性别：男</h6>\n                  <h6>职位：前端开发工程师</h6>\n                  <h6>专业：计算机网络技术</h6>\n                  <h6>毕业院校：新乡职业技术学院</h6>\n              </div>\n            </div>\n          </div>          \n        </div>\n      </div> \n      <!-- 第三个界面 -->\n      <div class=\"page3 section\" id=\"page3\">\n        <div class=\"bghui\">\n          <h1 id=\"mySkill\">个人技能</h1>\n         <div class=\"phone\">\n          <div id=\"main1\"></div>\n          <!-- 手机端技能掌握 -->\n          <div class=\"phone-w\">\n            <ul>\n              <li class=\"w-1\">熟练HTML5+CSS3+js，熟练使用DOM，熟悉浏览器兼容性，且熟练运用jQuery框架实现网页常用特效</li>\n              <li class=\"w-2\">熟悉Vue，AngularJS,React框架、MVVM模式，数据绑定原理</li>\n              <li class=\"w-3\">熟悉JS，面向对象，闭包，作用域链，原型链等原理promise，排序算法</li>\n              <li class=\"w-4\">熟悉微信小程序开发，熟悉git多人协同开发，云部署，了解后端Nodejs,SQL语句</li>\n            </ul>\n          </div>\n        </div>\n        </div>\n      </div>\n      <!-- 第四个界面 -->\n      <div class=\"section\" id=\"page4\">\n        <div class=\"bghui\">\n          <div class=\"swiper-page4\">\n            <div class=\"page4-content\">\n              <div class=\"jl-parent\">\n                <!-- 经历文字加上右边小圆圈 -->\n                <div>\n                <div class=\"my-jl\">\n                  <h3>我的经历</h3>\n                    <div class=\"jl-border\">\n                      <span>2018</span>\n                      <i>YEAR</i>\n                    </div>\n                </div>\n                <!-- 圆圈下面的文字   -->\n                <ul class=\"jl-bottom\">\n                  <li>\n                    <span>2018</span>\n                    <i>07月</i>\n                    <b></b>\n                    <em></em>\n                  </li>\n                  <li>\n                    <span>2018</span>\n                    <i>06月</i>\n                    <b></b>\n                    <em></em>\n                  </li>\n                </ul>              \n              </div>\n            </div>\n              <!-- 右边的经历介绍                         -->\n              <div class=\"jl-right\">\n                <ul class=\"left-nav\">\n                  <li><i></i></li>\n                  <li><i></i></li>\n                </ul>\n                <ul>\n                  <li>\n                    <b>2018年6月</b>\n                    <h2>在河南鱼塘网络科技有限公司工作</h2>\n                    <h3>&lt;web前端开发工程师&gt;</h3>\n                    <i>负责公司网站的开发和优化，配合后端人员实现网站的界面和功能</i>\n                  </li>\n                  <li>\n                    <b>2018年7月</b>\n                    <h2>毕业于新乡职业技术学院</h2>\n                    <h3>计算机网络技术</h3>\n                    <i>主修课程：JAVA语言程序设计、Photo Shop图像处理、网页制作、数据库原理与应用。</i>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- 第五屏       -->\n      <div class=\"section\" id=\"page5\">\n        <div class=\"bghui\">\n          <div class=\"my-zuopin\">\n            <h3>我的作品</h3>\n          </div>\n            <div class=\"slide page-flex\">\n              <div class=\"slide-imgs\" (click)=\"toTg('http://xingmeng.applinzi.com')\" title=\"点击图片跳转项目网站\">\n                <img src=\"../../assets/img/login1.png\" alt=\"\">\n                <img src=\"../../assets/img/shouye.png\" alt=\"\">\n                <img src=\"../../assets/img/shop1.png\" alt=\"\">\n              </div>\n              <div class=\"miaoshu\">\n                <div>\n                  <h4>项目名称：</h4>\n                  <span>ToGame(移动端)</span>\n                </div>\n                <div>\n                  <h4>项目描述：</h4>\n                  <span>仿WeGame开发的一款App游戏助手</span>\n                </div>\n                <div>\n                  <h4>技术栈：</h4>\n                  <span>Vue全家桶、Vant组件库、Socket.io MySQL、Node</span>\n                </div>\n                <div>\n                  <h4>技术实现：</h4>\n                  <span>用VUE全家桶、脚手架构建的项目、使用Vant第三方组件库、Socket.io实现多人聊天、基于Node搭建服务器、数据库使用MYSQL</span>\n                </div>\n                <div>\n                  <h4>项目源码：</h4>\n                  <span (click)=\"toTg('https://gitee.com/yang_tong_miao/togame.git')\">https://gitee.com/yang_tong_miao/togame.git</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"slide page-flex\">\n              <div class=\"slide-imgs\" id=\"ewm\" title=\"微信扫描二维码即可体验\">\n                <img src=\"../../assets/img/play1.jpg\" alt=\"\">\n                <img src=\"../../assets/img/play2.jpg\" alt=\"\">\n                <img src=\"../../assets/img/play3.jpg\" alt=\"\">\n              </div>\n              <div class=\"erweima\">\n                <img src=\"../../assets/img/erweima.jpg\" alt=\"\">\n              </div>\n              <div class=\"miaoshu\">\n                <div>\n                  <h4>项目名称：</h4>\n                  <span>MyMusic(微信小程序)</span>\n                </div>\n                <div>\n                  <h4>项目描述：</h4>\n                  <span>仿QQ音乐开发的一款音乐类小程序</span>\n                </div>\n                <div>\n                  <h4>技术栈：</h4>\n                  <span>小程序开发工具、Vant小程序组件库、云开发</span>\n                </div>\n                <div>\n                  <h4>技术实现：</h4>\n                  <span>实现了首页推荐、歌曲搜索、QQ音乐热门榜单、QQ播放界面、切换歌曲、播放列表、循环模式的开发，满足用户日常听歌的需求</span>\n                </div>\n                <div>\n                  <h4>项目源码：</h4>\n                  <span (click)=\"toTg('https://github.com/a1669579390/mymusicapp.git')\">https://github.com/a1669579390/mymusicapp.git</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"slide page-flex\">\n              <div class=\"slide-imgs\" id=\"ewm\" title=\"微信扫描二维码即可体验\">\n                <img class=\"xys\" src=\"../../assets/img/jianli.png\" alt=\"\">\n              </div>\n              <div class=\"erweima\">\n                <img src=\"../../assets/img/erweima.jpg\" alt=\"\">\n              </div>\n              <div class=\"miaoshu\">\n                <div>\n                  <h4>项目名称：</h4>\n                  <span>个人简历(响应式)</span>\n                </div>\n                <div>\n                  <h4>项目描述：</h4>\n                  <span>web前端开发工程师响应式简历(本网站)</span>\n                </div>\n                <div>\n                  <h4>技术栈：</h4>\n                  <span>jQuery、fullpage、AngularJS</span>\n                </div>\n                <div>\n                  <h4>技术实现：</h4>\n                  <span>网页整页切换使用了fullpage插件,大部分动画效果使用了jQuery</span>\n                </div>\n                <div>\n                  <h4>项目源码：</h4>\n                  <span (click)=\"toTg('https://github.com/a1669579390/myResume.git')\">https://github.com/a1669579390/myResume.git</span>\n                </div>\n              </div>\n            </div>\n            <!-- slide的底部导航栏 -->\n            <div class=\"slide-nav\">\n              <ul>\n                <li onclick=\"slide(0)\" id=\"nav-1\"><span>1</span></li>\n                <li onclick=\"slide(1)\" id=\"nav-2\"><span>2</span></li>\n                <li onclick=\"slide(2)\" id=\"nav-3\"><span>3</span></li>\n              </ul>\n            </div>\n        </div>       \n      </div>\n      <div class=\"section\" id=\"page6\">\n        <div class=\"bghui\">\n          <h3 id=\"contact\">联系我</h3>\n          <div class=\"contact-me\">\n            <i></i>\n            <h3>学习任何语言都是需要花费很多努力</h3>\n            <h3>但不要放弃</h3>\n            <h4>Learning any language takes a lot of effort</h4>\n            <h4> But don't give up</h4>            \n            <ul>\n              <li (click)=\"toTg('https://github.com/a1669579390')\">\n                <img src=\"../../assets/img/github.png\" alt=\"\">\n                <span>github</span>\n              </li>\n              <li>\n                <img src=\"../../assets/img/phone.png\" alt=\"\">\n                <span>18839509421</span>\n              </li>\n              <li>\n                <img src=\"../../assets/img/email.png\" alt=\"\">\n                <span>yangtongmiao@126.com</span>\n              </li>\n            </ul>\n            <b></b>\n          </div>\n        </div>\n      </div>\n     </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body::-webkit-scrollbar{\r\n  display: none;\r\n  scrollbar-width: none; /* firefox */\r\n  -ms-overflow-style: none; /* IE 10+ */\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCLEVBQUUsWUFBWTtFQUNuQyx3QkFBd0IsRUFBRSxXQUFXO0VBQ3JDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBmaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSAxMCsgKi9cclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'myResume';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./audio.service */
    "./src/app/audio.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _myindex_myindex_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./myindex/myindex.component */
    "./src/app/myindex/myindex.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _myindex_myindex_component__WEBPACK_IMPORTED_MODULE_5__["MyindexComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/audio.service.ts":
  /*!**********************************!*\
    !*** ./src/app/audio.service.ts ***!
    \**********************************/

  /*! exports provided: AudioService */

  /***/
  function srcAppAudioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioService", function () {
      return AudioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AudioService = function AudioService() {
      _classCallCheck(this, AudioService);

      this._audio = document.createElement('audio');
    };

    AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AudioService);
    /***/
  },

  /***/
  "./src/app/myindex/myindex.component.css":
  /*!***********************************************!*\
    !*** ./src/app/myindex/myindex.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyindexMyindexComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.navigation-phone{\r\n  display: none;\r\n}\r\n.music_img{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 56px;\r\n  height: 56px;\r\n  position: relative;\r\n  top: -2px;\r\n  left: 0;\r\n  border-radius: 50%;\r\n}\r\n.music_img img:nth-child(2){\r\n  display: none;\r\n  position: absolute;\r\n  top:50%;\r\n  left:50%;\r\n  margin-left: -15px;\r\n  margin-top: -15px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#page1{\r\n  background-image: url('bg6.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 100%;\r\n}\r\n.swiper-pagination_1 a{\r\n  opacity: 0;\r\n}\r\n.zyc .navigation ul{\r\n  list-style: none;\r\n  margin-top: 30px;\r\n  padding:30px 30% 0 0%;\r\n}\r\n.zyc .navigation ul li{\r\n  padding: 10% 0 0 0;\r\n  margin-top: 50px;\r\n}\r\n.zyc .navigation ul li a{\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #1633d4;\r\n}\r\n/*************第一屏动画**************/\r\n@-webkit-keyframes suoxiao{\r\n  0%{\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1);\r\n            transform: scale(0.1);\r\n  }\r\n  50%{\r\n    opacity: 0.5;\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  100%{\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n@keyframes suoxiao{\r\n  0%{\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1);\r\n            transform: scale(0.1);\r\n  }\r\n  50%{\r\n    opacity: 0.5;\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n  }\r\n  100%{\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n/* 定义遮罩层样式 */\r\n.zyc{\r\n  background: rgba(0,0,0,.85);\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 501;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n}\r\n.shanshuo{\r\n  -webkit-animation: warn 1.1s ease-out 0s infinite;\r\n          animation: warn 1.1s ease-out 0s infinite;\r\n}\r\n.bghui{\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(86, 83, 100,.5)\r\n}\r\n/* 发光小球动画 */\r\n@-webkit-keyframes warn{\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    opacity: 1;\r\n  }\r\n\r\n  30% {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(3.7);\r\n            transform: scale(3.7);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes warn{\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    opacity: 1;\r\n  }\r\n\r\n  30% {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(3.7);\r\n            transform: scale(3.7);\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes run{     \r\n  from{     \r\n      -webkit-transform:rotate(0deg);     \r\n  }     \r\n  to{     \r\n      -webkit-transform:rotate(360deg);     \r\n  }\r\n}\r\n@keyframes run{     \r\n  from{     \r\n      -webkit-transform:rotate(0deg);     \r\n  }     \r\n  to{     \r\n      -webkit-transform:rotate(360deg);     \r\n  }\r\n}\r\n@-webkit-keyframes run1{     \r\n  from{     \r\n      -webkit-transform:rotate(45deg);     \r\n  }     \r\n  to{     \r\n      -webkit-transform:rotate(315deg);     \r\n  }\r\n}\r\n@keyframes run1{     \r\n  from{     \r\n      -webkit-transform:rotate(45deg);     \r\n  }     \r\n  to{     \r\n      -webkit-transform:rotate(315deg);     \r\n  }\r\n}\r\n/* 屏幕尺寸大于992px时（普通彩色屏幕） */\r\n@media only screen and (min-width:992px){ \r\n   /* 背景图隐藏 */\r\n  .bg{\r\n  display:none;\r\n  }\r\n  .swiper{\r\n    width: 6px;\r\n    height: 245px;\r\n    position: fixed;\r\n    top: 37%;\r\n    right: 6%;\r\n    display: block;\r\n    border-right: 1px dashed #000000;\r\n    z-index: 500;\r\n  }\r\n  .swiper-pagination{\r\n    width: 14px;\r\n    height: 14px;\r\n    background: #fff;\r\n    margin: 24px auto!important;\r\n    opacity: 1;\r\n    position: relative;\r\n    z-index: 100;\r\n    border-radius: 50%;\r\n  }\r\n  .swiper-pagination_1{\r\n    width: 6px;\r\n    height: 6px;\r\n    background: #337ab7;\r\n    /* margin: 2.8px; */\r\n    opacity: 1;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n    margin-top: -3px;\r\n    z-index: 100;\r\n    border-radius: 50%;\r\n  }\r\n  .name{\r\n    width: 280px;\r\n    height: 60px;\r\n    background-color: #ffffff4d;\r\n    border-radius: 5px;\r\n    position: fixed;\r\n    top: 5%;\r\n    left: 3%;\r\n    z-index: 200;\r\n    border: 1px solid #ccc;\r\n    padding: 3px 0 0 10px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    cursor: pointer;\r\n  }\r\n  .name:hover.name b{\r\n    color: #2196f3;\r\n  }\r\n  .name:hover.name i{\r\n    color: #2196f3;\r\n  }\r\n   .music_img img:nth-child(1){\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    /* margin: 0 10px; */\r\n    -webkit-animation:run 15s linear 1s infinite;\r\n            animation:run 15s linear 1s infinite;\r\n  }\r\n  .name span{\r\n    background-color: #000;\r\n    border-radius: 5%;\r\n    color: #fff;\r\n    font-weight: 800;\r\n    padding: 8px 12px;\r\n    font-size: 18px;   \r\n    margin-left: 20px; \r\n  }\r\n  .name i{\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    margin: 0 8px;\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s;\r\n  }\r\n  .name b{\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s;\r\n  }\r\n  .music{\r\n    display: none;\r\n  }\r\n  .icon{\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    /* border: 1px solid #ccc; */\r\n    position: fixed;\r\n    top: 5%;\r\n    right: 3%;\r\n    background-image: url('menu.png');\r\n    background-size:70%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.4);\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s;\r\n    cursor: pointer;\r\n    z-index: 6666;\r\n  }\r\n  .navigation{\r\n    background: transparent;\r\n    position: fixed;\r\n    z-index: 444;\r\n    right: -35%;\r\n    top: 0;\r\n    width: 40%;\r\n    height: 0;\r\n    border-top: none;\r\n    border-bottom: #e4e2e3 solid;\r\n    border-bottom-width: 754px;\r\n    border-left: transparent 180px solid;\r\n    border-right: none;\r\n    box-sizing: border-box;\r\n    text-align: right;\r\n  }\r\n  .icon:hover {\r\n    background-color: #2196f3;\r\n  }\r\n  /* 简介样式 */\r\n  .desc{\r\n    position: relative;\r\n    top: 35%;\r\n    margin: 0 auto;\r\n    width: 690px;\r\n    height: 290px;\r\n    background: radial-gradient(circle at 0px 0px, rgb(255, 255, 255,0.5),  rgb(255, 255, 255,0.5));\r\n    text-align: center;\r\n    -webkit-transition: all 1s;\r\n    transition: all 1s;\r\n    border-radius: 10px;\r\n    /* opacity: 0; */\r\n    -webkit-animation: suoxiao .6s linear;\r\n            animation: suoxiao .6s linear;\r\n  }\r\n  #page1:hover .desc{\r\n    -webkit-transition: all 1s;\r\n    transition: all 1s;\r\n    background: radial-gradient(circle at 0px 0px, rgb(255, 255, 255,0.5),  rgb(255, 255, 255,0.5));\r\n  }\r\n  .desc:hover{\r\n     box-shadow: 0 0 70px #111;\r\n     width: 700px;\r\n     height: 290px;\r\n  }\r\n  .desc img{\r\n    display: none;\r\n  }\r\n  .desc h2{\r\n    font-family: \"微软雅黑\", SimSun, \"宋体\", sans-serif;\r\n    font-size: 45px;\r\n    padding:25px 0 0 0;\r\n    margin: 0;\r\n  }\r\n  .desc h3{\r\n    padding: 15px 0 0 0;\r\n    font-size: 23px;\r\n    margin: 0;\r\n  }\r\n  .desc h4{\r\n    font-weight: 500;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    padding: 17px 0 0 0;\r\n  }\r\n  .desc h4:last-child{\r\n    color: #2196f3;\r\n  }\r\n  /* 第二个界面样式 */\r\n  /* 关于我界面 */\r\n  .about{\r\n    background:url('bg8.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  .content{\r\n    width: 100%;\r\n    /* text-align: center; */\r\n  }\r\n  .content .title{\r\n    display: block;\r\n    width: 100%;\r\n    font-weight: 600;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    position: relative;\r\n    opacity: 0;\r\n    padding: 120px 0 0 0;\r\n    color: #fff;\r\n  }\r\n  .content .mezl{\r\n    width: 52%;\r\n    height: 360px;\r\n    border: 1px solid #fff;\r\n    position: relative;\r\n    left: 24%;\r\n    opacity: 0;\r\n    background-color: #ffffff3d;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 70px #111;\r\n  }\r\n  /* 个人介绍左侧图片 */\r\n  .scree_1{\r\n    width: 56%;\r\n    position: absolute;\r\n    top: 10%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    padding: 20px 0 0 0;\r\n  }\r\n  .scree_1 img{\r\n    width: 80%;\r\n    -webkit-transition: all .5s linear;\r\n    transition: all .5s linear;\r\n  }\r\n  .scree_1 img:hover{\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  .names{\r\n    padding: 30px 0 0 50%;\r\n  }\r\n  .names h6{\r\n    font-size: 18px;\r\n    margin: 22px 0;\r\n  }\r\n  /* 第三个界面的样式 */\r\n  .page3{\r\n    background-image: url('bg21.JPG');\r\n    background-repeat: no-repeat;\r\n    background-size: cover; \r\n    text-align: center;\r\n  }\r\n  .phone{\r\n    /* display: none; */\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n  }\r\n  .phone-w ul{\r\n    list-style: none;\r\n    padding: 25% 0px 0 60px;\r\n    margin: 0;\r\n    text-align: left;\r\n    width: 60%;\r\n  }\r\n  .phone-w ul li{\r\n    margin-top: 10px;\r\n    font-size: 17px;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  .page3 h1{\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    /* margin: 23% 0 0 0; */\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    /* border-bottom: 3px solid #fff; */\r\n    opacity: 0;\r\n  }\r\n  #main1{\r\n    width: 40%;\r\n    height: 500px;\r\n    font-size: 30px;\r\n    padding: 5% 0 0 3%;\r\n    opacity: 0;\r\n  }\r\n  /* 第四个界面 */\r\n  #page4{\r\n    background-image: url('bg1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  .swiper-page4{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n  .swiper-page4 .page4-content{\r\n    width: 820px;\r\n    min-height: 468px;\r\n    overflow: hidden;\r\n    padding-bottom: 1px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin: -210px 0 0 -410px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n  .jl-parent{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    opacity: 0;\r\n  }\r\n  /* 工作经历样式 */\r\n  .my-jl{\r\n    width: 200px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n  .my-jl h3{\r\n    color: #ffd200;\r\n  }\r\n  .my-jl .jl-border{\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 50%;\r\n    border: 5px solid #ccc;\r\n  }\r\n  .jl-border{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    -webkit-transition: all 0.6s linear;\r\n    transition: all 0.6s linear;\r\n  }\r\n  .jl-border:hover{\r\n    -webkit-transform:rotate(360deg);\r\n            transform:rotate(360deg);\r\n    background-color: #000;\r\n  }\r\n  .jl-border span{\r\n    font-size: 30px;\r\n    color: #83e41d;\r\n    font-weight: 600;\r\n    padding: 15px 0 0 0;\r\n  }\r\n  .jl-border i{\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    color: #ffcdc4;\r\n  }\r\n  .jl-bottom{\r\n    list-style: none;\r\n    width: 150px;\r\n    height: 380px;\r\n    border-right: 6px solid #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .jl-bottom li{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    height: 45%;\r\n    position: relative;\r\n  }\r\n  .jl-bottom li span{\r\n    /* padding: 0 0 0 15px; */\r\n    color: #e6de8d;\r\n  }\r\n  .jl-bottom li i{\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    color: #fff26e;\r\n    padding: 0 16px 0 0;\r\n  }\r\n  .jl-bottom li b{\r\n    width: 32px;\r\n    height: 3px;\r\n    display: inline-block;\r\n    background-color: #83e41d;\r\n  }\r\n  .jl-bottom li em{\r\n    border: 2px solid #a6db6d;\r\n    height: 16px;\r\n    width: 16px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    display: block;\r\n    cursor: pointer;\r\n    z-index: 111;\r\n    position: absolute;\r\n    right: -12px;\r\n  }\r\n  .jl-right{\r\n    width: 90%;\r\n    height: 60%;\r\n    position: absolute;\r\n    top: 100px;\r\n    left:160px;\r\n    opacity: 0;\r\n  }\r\n  .jl-right ul{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .jl-right ul li{\r\n    padding: 0 0 0 15px;\r\n    cursor: pointer;\r\n  }\r\n  .jl-right ul li h2{\r\n    color: #fff;\r\n    -webkit-transition: all 0.2s linear;\r\n    transition: all 0.2s linear;\r\n  }\r\n  .jl-right ul li:nth-child(1) h2:hover{\r\n    color: #83e41d;\r\n  }\r\n  .jl-right ul li:nth-child(2) h2:hover{\r\n    color: #83e41d;\r\n  }\r\n  .jl-right ul li h3{\r\n    font-size: 15px;\r\n    color:#8ad330;\r\n  }\r\n  .jl-right ul li i{\r\n    font-style: normal;\r\n    color: #fff;\r\n  }\r\n  .jl-right ul li:last-child{\r\n    padding: 45px 0 0 15px ;\r\n  }\r\n  .jl-right ul:last-child li b{\r\n    display: none;\r\n  }\r\n  .left-nav{\r\n    display: none;\r\n  }\r\n  /* 第五个界面 个人作品 */\r\n  #page5{\r\n    background:url('11.JPG');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n  #page5 h3{\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  #page5 .slide-imgs{\r\n    position: relative;\r\n    top: 5%;\r\n    left: 12%;\r\n    opacity: 0;\r\n  }\r\n  #page5 .slide-imgs img{\r\n    width: 225px;\r\n    height: 437px;\r\n    box-shadow: 10px 10px 10px rgba(0,0,0,.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 3;\r\n    -webkit-transition: all 0.3s linear;\r\n    transition: all 0.3s linear;\r\n  }\r\n  #page5 .slide-imgs img:nth-child(1):hover{\r\n    z-index: 999;\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n  }\r\n  #page5 .slide-imgs img:nth-child(2):hover{\r\n    z-index: 999;\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n  }\r\n  #page5 .slide-imgs img:nth-child(3):hover{\r\n    z-index: 999;\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n  }\r\n  #page5 .slide-imgs img:nth-child(2){\r\n    top: 25px ;\r\n    left: 100px;\r\n    z-index: 2 ;\r\n  }\r\n #page5 .slide-imgs img:nth-child(3){\r\n    top: 50px ;\r\n    left: 180px ;\r\n    z-index: 1;\r\n  }\r\n  .page-flex{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n  }\r\n  #page5 .slide-imgs .xys{\r\n    width: 30%;\r\n    height: 390px;\r\n  }\r\n  /* 项目描述信息 */\r\n  .miaoshu{\r\n    position: relative;\r\n    top: 12%;\r\n    left: 55%;\r\n    width: 500px;\r\n    height: 400px;\r\n    text-align: left;\r\n    opacity: 0;\r\n  }\r\n  .miaoshu div h4{\r\n    margin: 0;\r\n    padding: 13px 0;\r\n    font-weight: 550;\r\n    color: #a0fd41;\r\n    font-size: 17px;\r\n  }\r\n  .miaoshu div span{\r\n    display: inline-block;\r\n    width: 84%;\r\n    text-indent: 32px;\r\n    color: #fff;\r\n  }\r\n  .miaoshu div:last-child span{\r\n    cursor: pointer;\r\n  }\r\n  .miaoshu div:last-child span:hover{\r\n    color: #a0fd41;\r\n  }\r\n  .erweima{\r\n    display: none;\r\n    position: relative;\r\n    top: 25%;\r\n    /* left: 30%; */\r\n    z-index: 99999;\r\n  }\r\n  .erweima img{\r\n    position: absolute;\r\n    width: 230px;\r\n    height: 230px;\r\n  }\r\n  .slide-nav{\r\n    position: absolute;\r\n    bottom: 5%;\r\n    left: 40%;\r\n    /* display: none; */\r\n  }\r\n  .slide-nav ul{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    list-style: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    height: 20px;\r\n    width: 300px;\r\n    position: relative;\r\n    z-index: 555;\r\n  }\r\n  .slide-nav ul li{\r\n    background-color: #111;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    margin-left: 50px;\r\n    /* opacity: 0; */\r\n    position: absolute;\r\n    left: 0;\r\n    cursor: pointer;\r\n  }\r\n  .slide-nav ul li:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  #nav-2{\r\n    left: 50px;\r\n  }\r\n  #nav-3{\r\n    left: 100px;\r\n  }\r\n  .slide-nav ul li span{\r\n    opacity: 0;\r\n  }\r\n   /* 第六个界面 联系我 */\r\n   #page6{\r\n    background:url('bg17.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n  #contact{\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  .contact-me{\r\n    width: 720px;\r\n    height: 350px;\r\n    margin: 10% auto 0 ;\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 0 20px 0 0;\r\n    opacity: 0;\r\n    /* background-color: #fff; */\r\n  }\r\n  .contact-me i{\r\n    width: 80px;\r\n    height: 80px;\r\n    position: absolute;\r\n    top:0;\r\n    right: 0;\r\n    border-top: #ffd200 5px solid;\r\n    border-right: #ffd200 5px solid;\r\n  }\r\n  .contact-me b{\r\n    width: 80px;\r\n    height: 80px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    border-bottom: #ffd200 5px solid;\r\n    border-left: #ffd200 5px solid;\r\n    /* margin: 270px 0 0 0; */\r\n  }\r\n  .contact-me h3{\r\n    margin: 0 0 0 0 ;\r\n    padding: 20px 0 0 0;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    letter-spacing: 5px;\r\n  }\r\n  .contact-me h3:nth-child(2){\r\n    padding: 45px 0 0 0;\r\n  }\r\n  .contact-me h4{\r\n    margin: 0;\r\n    font-size: 17px;\r\n    font-weight: 550;\r\n    padding: 20px 0 0 0;\r\n    color: #ffedd0e3;\r\n  }\r\n  .contact-me ul{\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 10px 0 0 0;\r\n    justify-content:space-around;\r\n    \r\n  }\r\n  .contact-me ul li{\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    width: 30%;\r\n  }\r\n  .contact-me ul li img{\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n  }\r\n  .contact-me ul li span{\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n    padding: 10px 0 0 0;\r\n  }\r\n }\r\n/* 平板端 */\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n      /* 背景图隐藏 */\r\n  .bg{\r\n    display:none;\r\n  }\r\n  .music_img{\r\n    top: 0;\r\n  }\r\n  .swiper{\r\n    width: 6px;\r\n    height: 246px;\r\n    position: fixed;\r\n    top: 37%;\r\n    right: 6%;\r\n    display: block;\r\n    border-right: 1px dashed #000000;\r\n    z-index: 500;\r\n  }\r\n  .swiper-pagination{\r\n    width: 14px;\r\n    height: 14px;\r\n    background: #fff;\r\n    margin: 24px auto!important;\r\n    opacity: 1;\r\n    position: relative;\r\n    z-index: 100;\r\n    border-radius: 50%;\r\n  }\r\n  .swiper-pagination_1{\r\n    width: 6px;\r\n    height: 6px;\r\n    background: #337ab7;\r\n    /* margin: 2.8px; */\r\n    opacity: 1;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n    margin-top: -3px;\r\n    z-index: 100;\r\n    border-radius: 50%;\r\n  }\r\n  .name{\r\n    width: 270px;\r\n    height: 60px;\r\n    background-color: #ffffff4d;\r\n    border-radius: 5px;\r\n    position: fixed;\r\n    top: 5%;\r\n    left: 2.5%;\r\n    z-index: 200;\r\n    border: 1px solid #ccc;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n  .name img{\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 50%;\r\n    margin: 0 10px;\r\n    -webkit-animation:run 15s linear 1s infinite;\r\n            animation:run 15s linear 1s infinite;\r\n  }\r\n  .name span{\r\n    background-color: #000;\r\n    border-radius: 5%;\r\n    color: #fff;\r\n    font-weight: 800;\r\n    padding: 8px 12px;\r\n    font-size: 18px;   \r\n    margin-left: 20px;\r\n  }\r\n  .name i{\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    margin: 0 8px;\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s; \r\n  }\r\n  .name b{\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s; \r\n  }\r\n  .name:hover.name b{\r\n    color: #2196f3;\r\n  }\r\n  .name:hover.name i{\r\n    color: #2196f3;\r\n  }\r\n  .music{\r\n    display: none;\r\n  }\r\n  .navigation{\r\n    background: transparent;\r\n    position: fixed;\r\n    z-index: 444;\r\n    right: -35%;\r\n    top: 0;\r\n    width: 40%;\r\n    height: 0;\r\n    border-top: none;\r\n    border-bottom: #e4e2e3 solid;\r\n    border-bottom-width: 754px;\r\n    border-left: transparent 180px solid;\r\n    border-right: none;\r\n    box-sizing: border-box;\r\n    text-align: right;\r\n  }\r\n  .icon{\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    /* border: 1px solid #ccc; */\r\n    position: fixed;\r\n    top: 5%;\r\n    right: 3%;\r\n    background-image: url('menu.png');\r\n    background-size:70%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.4);\r\n    -webkit-transition: all 0.8s;\r\n    transition: all 0.8s;\r\n    cursor: pointer;\r\n    z-index: 6666;\r\n  }\r\n  .icon:hover {\r\n    background-color: #2196f3;\r\n  }\r\n  /* 简介样式 */\r\n  .desc{\r\n    position: relative;\r\n    top: 35%;\r\n    margin: 0 auto;\r\n    width: 600px;\r\n    height: 260px;\r\n    background: radial-gradient(circle at 0px 0px, rgb(255, 255, 255,0.5),  rgb(255, 255, 255,0.5));\r\n    text-align: center;\r\n    -webkit-transition: all 1s;\r\n    transition: all 1s;\r\n    border-radius: 10px;\r\n    -webkit-animation: suoxiao .6s linear;\r\n            animation: suoxiao .6s linear;\r\n  }\r\n  #page1:hover .desc{\r\n    background: radial-gradient(circle at 0px 0px, rgb(255, 255, 255,0.5),  rgb(255, 255, 255,0.5));\r\n  }\r\n  .desc:hover{\r\n     box-shadow: 0 0 70px #111;\r\n     width: 610px;\r\n     height: 265px;\r\n  }\r\n  .desc img{\r\n    display: none;\r\n  }\r\n  .desc h2{\r\n    font-family: \"微软雅黑\", SimSun, \"宋体\", sans-serif;\r\n    font-size: 40px;\r\n    padding:25px 0 0 0;\r\n    margin: 0;\r\n  }\r\n  .desc h3{\r\n    padding: 14px 0 0 0;\r\n    font-size: 22px;\r\n    margin: 0;\r\n  }\r\n  .desc h4{\r\n    font-size: 18px;\r\n    margin: 0;\r\n    padding: 14px 0 0 0;\r\n    font-weight: 500;\r\n\r\n  }\r\n  .desc h4:last-child{\r\n    color: #2196f3;\r\n  }\r\n  /* 关于我界面 */\r\n  .about{\r\n    background:url('bg8.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  .content{\r\n    width: 100%;\r\n  }\r\n  .content .title{\r\n    display: block;\r\n    width: 100%;\r\n    font-weight: 600;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    position: relative;\r\n    opacity: 0;\r\n    padding: 120px 0 0 0;\r\n    color: #fff;\r\n  }\r\n  .content .mezl{\r\n    width: 60%;\r\n    height: 335px;\r\n    border: 1px solid #fff;\r\n    position: relative;\r\n    left: 20%;\r\n    opacity: 0;\r\n    background-color: #ffffff3d;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 70px #111;\r\n  }\r\n  /* 个人介绍左侧图片 */\r\n  .scree_1{\r\n    width: 50%;\r\n    position: absolute;\r\n    top: 10%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    padding: 20px 0 0 0;\r\n  }\r\n  .scree_1 img{\r\n    width: 90%;\r\n    -webkit-transition: all .5s linear;\r\n    transition: all .5s linear;\r\n  }\r\n  .scree_1 img:hover{\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  .names{\r\n    padding:5% 0 0 50%;\r\n  }\r\n  .names h6{\r\n    font-size: 18px;\r\n    margin: 20px 0;\r\n  }\r\n   /* 第三个界面的样式 */\r\n   .page3{\r\n    background-image: url('bg21.JPG');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n\r\n  .phone{\r\n    /* display: none; */\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n  }\r\n  .phone-w ul{\r\n    list-style: none;\r\n    padding: 32% 0px 0 60px;\r\n    margin: 0;\r\n    text-align: left;\r\n    width: 60%;\r\n  }\r\n  .phone-w ul li{\r\n    margin-top: 10px;\r\n    font-size: 17px;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  #main1{\r\n    width: 60%;\r\n    height: 600px;\r\n    font-size: 30px;\r\n    padding: 0 0 0 0;\r\n    margin: 0 auto;\r\n    opacity: 0;\r\n  }\r\n  .page3 h1{\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  #page4{\r\n    background-image: url('bg1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n  .swiper-page4{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n  .swiper-page4 .page4-content{\r\n    /* max-width: 650px; */\r\n    width: 60%;\r\n    height: 400px;\r\n    /* overflow: hidden; */\r\n    padding-bottom: 1px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin: -210px 0 0 -35%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n  .jl-parent{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n    /* 工作经历样式 */\r\n    .my-jl{\r\n      width: 200px;\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-pack: justify;\r\n              justify-content: space-between;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n    }\r\n    .my-jl h3{\r\n      color: #ffd200;\r\n    }\r\n    .my-jl .jl-border{\r\n      width: 90px;\r\n      height: 90px;\r\n      border-radius: 50%;\r\n      border: 5px solid #ccc;\r\n    }\r\n    .jl-border{\r\n      display: -webkit-box;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n              flex-direction: column;\r\n      text-align: center;\r\n      -webkit-transition: all 0.6s linear;\r\n      transition: all 0.6s linear;\r\n    }\r\n    .jl-border:hover{\r\n      -webkit-transform:rotate(360deg);\r\n              transform:rotate(360deg);\r\n      background-color: #000;\r\n    }\r\n    .jl-border span{\r\n      font-size: 30px;\r\n      color: #83e41d;\r\n      font-weight: 600;\r\n      padding: 15px 0 0 0;\r\n    }\r\n    .jl-border i{\r\n      font-style: normal;\r\n      font-size: 20px;\r\n      color: #ffcdc4;\r\n    }\r\n  .jl-bottom{\r\n    list-style: none;\r\n    width: 150px;\r\n    height: 380px;\r\n    border-right: 6px solid #ccc;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .jl-bottom li{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    height: 45%;\r\n    position: relative;\r\n  }\r\n  .jl-bottom li span{\r\n    /* padding: 0 0 0 15px; */\r\n    color: #e6de8d;\r\n  }\r\n  \r\n  .jl-bottom li i{\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    color: #fff26e;\r\n    padding: 0 16px 0 0;\r\n  }\r\n  .jl-bottom li b{\r\n    width: 32px;\r\n    height: 3px;\r\n    display: inline-block;\r\n    background-color: #83e41d;\r\n  }\r\n  .jl-bottom li em{\r\n    border: 2px solid #a6db6d;\r\n    height: 16px;\r\n    width: 16px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    display: block;\r\n    cursor: pointer;\r\n    z-index: 111;\r\n    position: absolute;\r\n    right: -12px;\r\n    /* margin-right: -12px; */\r\n  }\r\n  .jl-right{\r\n    width: 80%;\r\n    height: 70%;\r\n    position: absolute;\r\n    top: 100px;\r\n    left:160px;\r\n  }\r\n  .jl-right ul:last-child{\r\n    list-style: none;\r\n  }\r\n  .jl-right ul li{\r\n    padding: 0 0 0 15px;\r\n    cursor: pointer;\r\n  }\r\n  .jl-right ul li h2{\r\n    color: #fff;\r\n    -webkit-transition: all 0.2s linear;\r\n    transition: all 0.2s linear;\r\n  }\r\n  .jl-right ul li:nth-child(1) h2:hover{\r\n    color: #83e41d;\r\n  }\r\n  .jl-right ul li:nth-child(2) h2:hover{\r\n    color: #83e41d;\r\n  }\r\n  .jl-right ul li h3{\r\n    font-size: 15px;\r\n    color:#8ad330;\r\n  }\r\n  .jl-right ul li i{\r\n    font-style: normal;\r\n    color: #fff;\r\n  }\r\n  .jl-right ul li:last-child{\r\n    padding: 45px 0 0 15px ;\r\n  }\r\n  .jl-right ul:last-child li b{\r\n    display: none;\r\n  }\r\n  .left-nav{\r\n    display: none;\r\n  }\r\n  /* 第五个界面 个人作品 */\r\n  #page5{\r\n    background:url('11.JPG');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n  #page5 h3{\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    opacity: 1;\r\n  }\r\n  .slide-nav ul li:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  #page5 .slide-imgs{\r\n    position: relative;\r\n    top: 10%;\r\n    left: 5%;\r\n  }\r\n  #page5 .slide-imgs img{\r\n    width: 185px;\r\n    height: 387px;\r\n    box-shadow: 10px 10px 10px rgba(0,0,0,.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 3;\r\n    -webkit-transition: all 0.3s linear;\r\n    transition: all 0.3s linear;\r\n  }\r\n  #page5 .slide-imgs img:nth-child(1):hover{\r\n    z-index: 999;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  #page5 .slide-imgs img:nth-child(2):hover{\r\n    z-index: 999;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  #page5 .slide-imgs img:nth-child(3):hover{\r\n    z-index: 999;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  #page5 .slide-imgs img:nth-child(2){\r\n    top: 25px ;\r\n    left: 40px;\r\n    z-index: 2 ;\r\n  }\r\n  #page5 .slide-imgs .xys{\r\n    width: 30%;\r\n    height: 390px;\r\n  }\r\n #page5 .slide-imgs img:nth-child(3){\r\n    top: 50px ;\r\n    left: 100px ;\r\n    z-index: 1;\r\n  }\r\n  .page-flex{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n  }\r\n  /* 项目描述信息 */\r\n  .miaoshu{\r\n    position: relative;\r\n    top: 12%;\r\n    left: 45%;\r\n    width: 500px;\r\n    height: 400px;\r\n    text-align: left;\r\n  }\r\n  .miaoshu div h4{\r\n    margin: 0;\r\n    padding: 13px 0;\r\n    font-weight: 550;\r\n    color: #a0fd41;\r\n    font-size: 16px;\r\n  }\r\n  .miaoshu div span{\r\n    display: inline-block;\r\n    width: 70%;\r\n    text-indent: 30px;\r\n    color: #fff;\r\n  }\r\n  .miaoshu div:last-child span{\r\n    cursor: pointer;\r\n  }\r\n  .miaoshu div:last-child span:hover{\r\n    color: #a0fd41;\r\n  }\r\n  .erweima{\r\n    display: none;\r\n    position: relative;\r\n    top: 25%;\r\n    left: -10%;\r\n    z-index: 99999;\r\n  }\r\n  .erweima img{\r\n    position: absolute;\r\n    width: 230px;\r\n    height: 230px;\r\n  }\r\n  .slide-nav{\r\n    position: absolute;\r\n    bottom: 5%;\r\n    left: 37%;\r\n  }\r\n  .slide-nav ul{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    list-style: none;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    height: 20px;\r\n    width: 300px;\r\n    position: relative;\r\n    z-index: 555;\r\n  }\r\n  .slide-nav ul li{\r\n    background-color: #111;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    margin-left: 50px;\r\n    /* opacity: 0; */\r\n    position: absolute;\r\n    left: 0;\r\n    cursor: pointer;\r\n  }\r\n  #nav-2{\r\n    left: 50px;\r\n  }\r\n  #nav-3{\r\n    left: 100px;\r\n  }\r\n  .slide-nav ul li span{\r\n    opacity: 0;\r\n  }\r\n  /* 第六个界面 联系我 */\r\n  #page6{\r\n    background:url('bg17.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n  #contact{\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  .contact-me{\r\n    width: 600px;\r\n    height: 350px;\r\n    margin: 15% auto;\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 0 20px 0 0;\r\n    opacity: 0;\r\n    /* background-color: #fff; */\r\n  }\r\n  .contact-me i{\r\n    width: 80px;\r\n    height: 80px;\r\n    position: absolute;\r\n    top:0;\r\n    right: 0;\r\n    border-top: #ffd200 5px solid;\r\n    border-right: #ffd200 5px solid;\r\n  }\r\n  .contact-me b{\r\n    width: 80px;\r\n    height: 80px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    border-bottom: #ffd200 5px solid;\r\n    border-left: #ffd200 5px solid;\r\n    /* margin: 270px 0 0 0; */\r\n  }\r\n  .contact-me h3{\r\n    margin: 0 0 0 0 ;\r\n    padding: 20px 0 0 0;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    letter-spacing: 5px;\r\n  }\r\n  .contact-me h3:nth-child(2){\r\n    padding: 45px 0 0 0;\r\n  }\r\n  .contact-me h4{\r\n    margin: 0;\r\n    font-size: 17px;\r\n    font-weight: 550;\r\n    padding: 20px 0 0 0;\r\n    color: #ffedd0e3;\r\n  }\r\n  .contact-me ul{\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 87%;\r\n    padding: 10px 0 0 0;\r\n    justify-content:space-around;\r\n    \r\n  }\r\n  .contact-me ul li{\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    width: 30%;\r\n  }\r\n  .contact-me ul li img{\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: 0 auto;\r\n  }\r\n  .contact-me ul li span{\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n    padding: 10px 0 0 0;\r\n  }\r\n}\r\n/* 手机端 */\r\n@media screen and (max-width:767px){\r\n  #page1{\r\n    width: 100%;  \r\n    background-image: url('bg6.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  .name {\r\n    display:none;\r\n   }\r\n   .nav{\r\n     width: 100%;\r\n     position: fixed;\r\n     top: 0;\r\n     z-index: 5000;\r\n   }\r\n   .navigation{\r\n    display: none;\r\n  }\r\n   .navigation-phone ul{\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    background-color: #cccccc69;\r\n    width: 100%;\r\n    height: 34px;\r\n    padding: 0 0 0 0;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin: 0;\r\n    position: relative;\r\n    top: 10px;\r\n  }\r\n   .navigation-phone ul li:last-child i{\r\n    position: absolute;\r\n    top: -10px;\r\n    right: 20px;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 10px solid #cccccc69;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n  }\r\n  .navigation-phone ul li a{\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n  }\r\n  .navigation-phone{\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 99999;\r\n    top: 5%;\r\n    right: 0;\r\n    width: 100%;\r\n  }\r\n   .music {\r\n     display: -webkit-box;\r\n     display: flex;\r\n     -webkit-box-pack: justify;\r\n             justify-content: space-between;\r\n     -webkit-box-align: center;\r\n             align-items: center;\r\n     padding:9px 20px;\r\n   }\r\n   .music i{\r\n     font-style: normal;\r\n     font-weight: 600;\r\n     font-size: 18px;\r\n     color: #fff;\r\n   }\r\n   .swiper{\r\n     display: none;\r\n   }\r\n   .touxiang{\r\n     width: 35px;\r\n     height: 35px;\r\n     border-radius: 50%;\r\n     -webkit-animation:run 15s linear 1s infinite;\r\n             animation:run 15s linear 1s infinite;\r\n   }\r\n   .music img:last-child{\r\n     z-index: 100000;\r\n   }\r\n   .menu{\r\n     width: 25px;\r\n     height: 25px;\r\n   }\r\n   .desc{\r\n    position: relative;\r\n    /* top: 35%; */\r\n    margin: 0 auto;\r\n    height: 100vh;\r\n    background:rgba(255, 255, 255, 0.1);\r\n    text-align: center;\r\n    -webkit-transition: all 1s;\r\n    transition: all 1s;\r\n    border-radius: 10px;\r\n    -webkit-animation: suoxiao .9s linear;\r\n            animation: suoxiao .9s linear;\r\n   }\r\n   .desc img{\r\n     margin: 25% 0 0 0;\r\n     width: 120px;\r\n     height: 120px;\r\n     border-radius: 50%;\r\n   }\r\n   .desc h2{\r\n    font-family: \"微软雅黑\", SimSun, \"宋体\", sans-serif;\r\n    font-size: 20px;\r\n    padding:7% 0 0 0;\r\n    margin: 0;\r\n    -webkit-animation: suoxiao .9s linear;\r\n            animation: suoxiao .9s linear;\r\n  }\r\n  .desc h3{\r\n    padding: 8% 0 5% 0;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    -webkit-animation: suoxiao .9s linear;\r\n            animation: suoxiao .9s linear;\r\n  }\r\n  .desc h4{\r\n    font-size: 18px;\r\n    margin: 0;\r\n    padding: 6% 0 0 0;\r\n    font-weight: 500;\r\n    /* opacity: 0; */\r\n    -webkit-animation: suoxiao .9s linear;\r\n            animation: suoxiao .9s linear;\r\n  }\r\n  .desc h4:last-child{\r\n    color: #f7ff01;\r\n  }\r\n  .about{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0 0 0 0;\r\n    height: 100vh;\r\n    background:url('bg8.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  .about .title{\r\n    display: inline-block;\r\n    margin: 23% 0 0 0;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    border-bottom: 3px solid #fff;\r\n  }\r\n  .content .mezl{\r\n    width: 90%;\r\n    border: 1px solid #fff;\r\n    position: relative;\r\n    background-color: #ffffff3d;\r\n    border-radius: 10px;\r\n    margin: 18% auto 0;\r\n    /* box-shadow: 0 0 70px #111; */\r\n  }\r\n  /* 个人介绍左侧图片 */\r\n  .scree_1{\r\n    position: absolute;\r\n    padding: 0 0 0 0;\r\n    display: none;\r\n  }\r\n  .scree_1 img{\r\n    width: 100%;\r\n    -webkit-transition: all .5s linear;\r\n    transition: all .5s linear;\r\n    padding: 0 10% 0 0 ;\r\n  }\r\n  .names{\r\n    padding:0 0 0 20%;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n  .names h6{\r\n    font-size: 17px;\r\n    margin: 5% 0;\r\n    -webkit-animation: left1 1s linear;\r\n            animation: left1 1s linear;\r\n    color: #fff;\r\n  }\r\n   /* 第三个界面的样式 */\r\n   .page3{\r\n    background-image: url('bg21.JPG');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n  #main1{\r\n    width: 100%;\r\n    height: 300px;\r\n    font-size: 20px;\r\n    padding: 5% 0 0 0;\r\n    margin: 0 auto;\r\n    opacity: 0;\r\n  }\r\n  .phone-w ul{\r\n    list-style: none;\r\n    padding: 0 30px;\r\n    margin: 0;\r\n    text-align: left;\r\n  }\r\n  .phone-w ul li{\r\n    margin-top: 10px;\r\n    font-size: 17px;\r\n    color: #fff;\r\n    opacity: 0;\r\n  }\r\n  .page3 h1{\r\n    text-align: center;\r\n    position: relative;\r\n    top: 50px;\r\n    color: #fff;\r\n    display: inline-block;\r\n    /* margin: 23% 0 0 0; */\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    border-bottom: 3px solid #fff;\r\n    opacity: 0;\r\n  }\r\n  #page4{\r\n    background-image: url('bg1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n  }\r\n .swiper-page4{\r\n   width: 100%;\r\n   display: -webkit-box;\r\n   display: flex;\r\n   -webkit-box-pack: center;\r\n           justify-content: center;\r\n   padding: 13% 0 0 0;\r\n }\r\n .my-jl{\r\n  text-align: center;\r\n  padding: 20px 0 0 0;\r\n }\r\n .my-jl h3{\r\n   display: inline-block;\r\n   font-size: 20px;\r\n   font-weight: 500;\r\n   color: #fff;\r\n   border-bottom: 3px solid #fff;\r\n }\r\n .jl-border,.jl-bottom{\r\n   display: none;\r\n }\r\n.jl-right{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 10px 0 0 0;\r\n}\r\n.left-nav{\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 10px;\r\n  background-color: #ccc;\r\n  list-style: none;\r\n  margin: 0 0 0 20px;\r\n}\r\n.left-nav li{\r\n  height: 45%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  position: relative;\r\n}\r\n.left-nav li i{\r\n  width: 35px;\r\n  height: 35px;\r\n  display: block;\r\n  background:url('fengche.png') no-repeat;\r\n  background-size: contain;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  position: absolute;\r\n  left:-12px;\r\n  -webkit-animation:run1 3s linear 1s infinite;\r\n          animation:run1 3s linear 1s infinite;\r\n}\r\n.jl-right{\r\n  padding: 16% 0 0 2%;\r\n}\r\n.jl-right ul:nth-child(2){\r\n  list-style: none;\r\n  padding: 10px;\r\n  margin: 0 0 0 10px;\r\n  width: 90%;\r\n}\r\n.jl-right ul:nth-child(2) li{\r\n  padding: 0px 0 0 20px;\r\n}\r\n.jl-right ul:nth-child(2) li:nth-child(2) {\r\n  margin: 40px 0 0 0;\r\n}\r\n.jl-right ul:nth-child(2)>li b{\r\n  font-size: 16px;\r\n  color: #83e41d;\r\n}\r\n.jl-right ul:nth-child(2) li h2,h3{\r\n  font-size: 15px;\r\n  color: #fff;\r\n  font-weight: 550;\r\n  margin: 12px 0;\r\n}\r\n.jl-right ul:nth-child(2) li i{\r\n  font-size: 15px;\r\n  color: #f7ff01;\r\n  font-style: normal;\r\n}\r\n#page5{\r\n  background-image: url('11.JPG');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n}\r\n.my-zuopin{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n#page5 .slide-imgs .xys{\r\n  width: 97%;\r\n  height: 200px;\r\n}\r\n#page5 h3{\r\n   padding: 17% 0 0 0;\r\n   display: inline-block;\r\n   font-size: 20px;\r\n   font-weight: 500;\r\n   color: #fff;\r\n   border-bottom: 3px solid #fff; \r\n}\r\n.page-flex{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n.slide-imgs{\r\n  width: 80%;\r\n  height: 30%;\r\n  position: relative;\r\n  top: 10px;\r\n  left: 10%;\r\n}\r\n.slide-imgs img{\r\n  width: 33%;\r\n  height: 100%;\r\n  box-shadow: 10px 10px 10px rgba(0,0,0,.7);\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 3;\r\n}\r\n.slide-imgs img:nth-child(2){\r\n  left: 30%;\r\n  top: 0px;\r\n  z-index: 2;\r\n}\r\n.slide-imgs img:nth-child(3){\r\n  left: 60%;\r\n  top: 0px;\r\n  z-index: 3;\r\n}\r\n.miaoshu {\r\n  margin-top: 9%;\r\n  width: 88%;\r\n  padding: 0 7% 0 7%;\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.miaoshu div{\r\n  margin:8px 0;\r\n}\r\n.miaoshu div h4{\r\n  display: inline-block;\r\n  margin: 0;\r\n  color: #a0fd41;\r\n}\r\n.miaoshu div span{\r\n  color: #fff;\r\n  line-height: 26px;\r\n  font-size: 15px;\r\n}\r\n.miaoshu div:last-child{\r\n  width: 98%;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n.erweima{\r\n  display: none;\r\n  width: 150px;\r\n  height: 150px;\r\n  position: absolute;\r\n  top: 35%;  \r\n  left: 67%;\r\n  z-index: 99999;\r\n}\r\n.erweima img{\r\n  width: 90%;\r\n  display: none;\r\n}\r\n.slide-nav{\r\n  position: absolute;\r\n  bottom: 4%;\r\n  left: 23%;\r\n}\r\n.slide-nav ul{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  list-style: none;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  height: 20px;\r\n  width: 300px;\r\n  position: relative;\r\n  z-index: 555;\r\n}\r\n.slide-nav ul li{\r\n  background-color: #222;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin-left: 50px;\r\n  /* opacity: 0; */\r\n  position: absolute;\r\n  left: 0;\r\n  cursor: pointer;\r\n}\r\n#nav-2{\r\n  left: 50px;\r\n}\r\n#nav-3{\r\n  left: 100px;\r\n}\r\n.slide-nav ul li span{\r\n  opacity: 0;\r\n}\r\n /* 第六个界面 联系我 */\r\n #page6{\r\n  background:url('bg17.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  text-align: center;\r\n}\r\n#contact{\r\n  position: relative;\r\n  top: 50px;\r\n  color: #fff;\r\n  padding-top: 5%;\r\n  display: inline-block;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  opacity: 0;\r\n  border-bottom: 3px solid #fff;\r\n}\r\n.contact-me{\r\n  width: 90%;\r\n  height: 370px;\r\n  margin: 25% auto 0;\r\n  text-align: center;\r\n  position: relative;\r\n  padding: 0 20px 0 0;\r\n  opacity: 0;\r\n  /* background-color: #fff; */\r\n}\r\n.contact-me i{\r\n  width: 80px;\r\n  height: 80px;\r\n  position: absolute;\r\n  top:0;\r\n  right: 0;\r\n  border-top: #ffd200 5px solid;\r\n  border-right: #ffd200 5px solid;\r\n}\r\n.contact-me b{\r\n  width: 80px;\r\n  height: 80px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  border-bottom: #ffd200 5px solid;\r\n  border-left: #ffd200 5px solid;\r\n  /* margin: 270px 0 0 0; */\r\n}\r\n.contact-me h3{\r\n  margin: 0 0 0 0 ;\r\n  padding: 20px 0 0 0;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  letter-spacing: 5px;\r\n}\r\n.contact-me h3:nth-child(2){\r\n  padding: 45px 0 0 0;\r\n}\r\n.contact-me h4{\r\n  margin: 0;\r\n  font-size: 17px;\r\n  font-weight: 550;\r\n  padding: 20px 0 0 0;\r\n  color: #ffedd0e3;\r\n}\r\n.contact-me ul{\r\n  list-style: none;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width:95%;\r\n  padding: 10px 0 0 0;\r\n  justify-content:space-around;\r\n  \r\n}\r\n.contact-me ul li{\r\n  cursor: pointer;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  width: 30%;\r\n}\r\n.contact-me ul li img{\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 0 auto;\r\n}\r\n.contact-me ul li span{\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  padding: 10px 0 0 0;\r\n}\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlpbmRleC9teWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0EsaUNBQWlDO0FBQ2pDO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFlBQVk7SUFDWiw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0EsWUFBWTtBQUNaO0VBQ0UsMkJB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QkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDRCQUE0Qjs7QUFFOUI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0NBQ0MiLCJmaWxlIjoic3JjL2FwcC9teWluZGV4L215aW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5uYXZpZ2F0aW9uLXBob25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm11c2ljX2ltZ3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLm11c2ljX2ltZyBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1MCU7XHJcbiAgbGVmdDo1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4jcGFnZTF7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmc2LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbl8xIGF7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uenljIC5uYXZpZ2F0aW9uIHVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nOjMwcHggMzAlIDAgMCU7XHJcbn1cclxuLnp5YyAubmF2aWdhdGlvbiB1bCBsaXtcclxuICBwYWRkaW5nOiAxMCUgMCAwIDA7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uenljIC5uYXZpZ2F0aW9uIHVsIGxpIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzE2MzNkNDtcclxufVxyXG4vKioqKioqKioqKioqKuesrOS4gOWxj+WKqOeUuyoqKioqKioqKioqKioqL1xyXG5Aa2V5ZnJhbWVzIHN1b3hpYW97XHJcbiAgMCV7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuLyog5a6a5LmJ6YGu572p5bGC5qC35byPICovXHJcbi56eWN7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuODUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDUwMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hhbnNodW97XHJcbiAgYW5pbWF0aW9uOiB3YXJuIDEuMXMgZWFzZS1vdXQgMHMgaW5maW5pdGU7XHJcbn1cclxuLmJnaHVpe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwgODMsIDEwMCwuNSlcclxufVxyXG4vKiDlj5HlhYnlsI/nkIPliqjnlLsgKi9cclxuQGtleWZyYW1lcyB3YXJue1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMuNyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJ1bnsgICAgIFxyXG4gIGZyb217ICAgICBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpOyAgICAgXHJcbiAgfSAgICAgXHJcbiAgdG97ICAgICBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7ICAgICBcclxuICB9XHJcbn0gIFxyXG5Aa2V5ZnJhbWVzIHJ1bjF7ICAgICBcclxuICBmcm9teyAgICAgXHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7ICAgICBcclxuICB9ICAgICBcclxuICB0b3sgICAgIFxyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzE1ZGVnKTsgICAgIFxyXG4gIH1cclxufSAgIFxyXG4gLyog5bGP5bmV5bC65a+45aSn5LqOOTkycHjml7bvvIjmma7pgJrlvanoibLlsY/luZXvvIkgKi9cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCl7IFxyXG4gICAvKiDog4zmma/lm77pmpDol48gKi9cclxuICAuYmd7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAuc3dpcGVye1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMjQ1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDM3JTtcclxuICAgIHJpZ2h0OiA2JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICMwMDAwMDA7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbntcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbl8xe1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzN2FiNztcclxuICAgIC8qIG1hcmdpbjogMi44cHg7ICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDMlO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDNweCAwIDAgMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubmFtZTpob3Zlci5uYW1lIGJ7XHJcbiAgICBjb2xvcjogIzIxOTZmMztcclxuICB9XHJcbiAgLm5hbWU6aG92ZXIubmFtZSBpe1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgfVxyXG4gICAubXVzaWNfaW1nIGltZzpudGgtY2hpbGQoMSl7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8qIG1hcmdpbjogMCAxMHB4OyAqL1xyXG4gICAgYW5pbWF0aW9uOnJ1biAxNXMgbGluZWFyIDFzIGluZmluaXRlO1xyXG4gIH1cclxuICAubmFtZSBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7ICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgXHJcbiAgfVxyXG4gIC5uYW1lIGl7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gIH1cclxuICAubmFtZSBie1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzO1xyXG4gIH1cclxuICAubXVzaWN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaWNvbntcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNSU7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9tZW51LnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6NzAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA2NjY2O1xyXG4gIH1cclxuICAubmF2aWdhdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNDQ0O1xyXG4gICAgcmlnaHQ6IC0zNSU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206ICNlNGUyZTMgc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA3NTRweDtcclxuICAgIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudCAxODBweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLmljb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICB9XHJcbiAgLyog566A5LuL5qC35byPICovXHJcbiAgLmRlc2N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDY5MHB4O1xyXG4gICAgaGVpZ2h0OiAyOTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMHB4IDBweCwgcmdiKDI1NSwgMjU1LCAyNTUsMC41KSwgIHJnYigyNTUsIDI1NSwgMjU1LDAuNSkpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIG9wYWNpdHk6IDA7ICovXHJcbiAgICBhbmltYXRpb246IHN1b3hpYW8gLjZzIGxpbmVhcjtcclxuICB9XHJcbiAgI3BhZ2UxOmhvdmVyIC5kZXNje1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAwcHggMHB4LCByZ2IoMjU1LCAyNTUsIDI1NSwwLjUpLCAgcmdiKDI1NSwgMjU1LCAyNTUsMC41KSk7XHJcbiAgfVxyXG4gIC5kZXNjOmhvdmVye1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMCA3MHB4ICMxMTE7XHJcbiAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgIGhlaWdodDogMjkwcHg7XHJcbiAgfVxyXG4gIC5kZXNjIGltZ3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5kZXNjIGgye1xyXG4gICAgZm9udC1mYW1pbHk6IFwi5b6u6L2v6ZuF6buRXCIsIFNpbVN1biwgXCLlrovkvZNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIHBhZGRpbmc6MjVweCAwIDAgMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmRlc2MgaDN7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuZGVzYyBoNHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDAgMCAwO1xyXG4gIH1cclxuICAuZGVzYyBoNDpsYXN0LWNoaWxke1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgfVxyXG4gIC8qIOesrOS6jOS4queVjOmdouagt+W8jyAqL1xyXG4gIC8qIOWFs+S6juaIkeeVjOmdoiAqL1xyXG4gIC5hYm91dHtcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmc4LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICB9XHJcbiAgLmNvbnRlbnQgLnRpdGxle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcGFkZGluZzogMTIwcHggMCAwIDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmNvbnRlbnQgLm1lemx7XHJcbiAgICB3aWR0aDogNTIlO1xyXG4gICAgaGVpZ2h0OiAzNjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA3MHB4ICMxMTE7XHJcbiAgfVxyXG4gIC8qIOS4quS6uuS7i+e7jeW3puS+p+WbvueJhyAqL1xyXG4gIC5zY3JlZV8xe1xyXG4gICAgd2lkdGg6IDU2JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgfVxyXG4gIC5zY3JlZV8xIGltZ3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGxpbmVhcjtcclxuICB9XHJcbiAgLnNjcmVlXzEgaW1nOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICAubmFtZXN7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCA1MCU7XHJcbiAgfVxyXG4gIC5uYW1lcyBoNntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMjJweCAwO1xyXG4gIH1cclxuICAvKiDnrKzkuInkuKrnlYzpnaLnmoTmoLflvI8gKi9cclxuICAucGFnZTN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZzIxLkpQRyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5waG9uZXtcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLnBob25lLXcgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMjUlIDBweCAwIDYwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbiAgLnBob25lLXcgdWwgbGl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAucGFnZTMgaDF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8qIG1hcmdpbjogMjMlIDAgMCAwOyAqL1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7ICovXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAjbWFpbjF7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDUlIDAgMCAzJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC8qIOesrOWbm+S4queVjOmdoiAqL1xyXG4gICNwYWdlNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdlNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2U0IC5wYWdlNC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDgyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDY4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMjEwcHggMCAwIC00MTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC5qbC1wYXJlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC8qIOW3peS9nOe7j+WOhuagt+W8jyAqL1xyXG4gIC5teS1qbHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAubXktamwgaDN7XHJcbiAgICBjb2xvcjogI2ZmZDIwMDtcclxuICB9XHJcbiAgLm15LWpsIC5qbC1ib3JkZXJ7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIC5qbC1ib3JkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGxpbmVhcjtcclxuICB9XHJcbiAgLmpsLWJvcmRlcjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5qbC1ib3JkZXIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjODNlNDFkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XHJcbiAgfVxyXG4gIC5qbC1ib3JkZXIgaXtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZjZGM0O1xyXG4gIH1cclxuICAuamwtYm90dG9te1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmpsLWJvdHRvbSBsaXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5qbC1ib3R0b20gbGkgc3BhbntcclxuICAgIC8qIHBhZGRpbmc6IDAgMCAwIDE1cHg7ICovXHJcbiAgICBjb2xvcjogI2U2ZGU4ZDtcclxuICB9XHJcbiAgLmpsLWJvdHRvbSBsaSBpe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmYyNmU7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xyXG4gIH1cclxuICAuamwtYm90dG9tIGxpIGJ7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZTQxZDtcclxuICB9XHJcbiAgLmpsLWJvdHRvbSBsaSBlbXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhNmRiNmQ7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDExMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTJweDtcclxuICB9XHJcbiAgLmpsLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6MTYwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsIGxpe1xyXG4gICAgcGFkZGluZzogMCAwIDAgMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsIGxpIGgye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgfVxyXG4gIC5qbC1yaWdodCB1bCBsaTpudGgtY2hpbGQoMSkgaDI6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzgzZTQxZDtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsIGxpOm50aC1jaGlsZCgyKSBoMjpob3ZlcntcclxuICAgIGNvbG9yOiAjODNlNDFkO1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWwgbGkgaDN7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjojOGFkMzMwO1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWwgbGkgaXtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgIHBhZGRpbmc6IDQ1cHggMCAwIDE1cHggO1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWw6bGFzdC1jaGlsZCBsaSBie1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmxlZnQtbmF2e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLyog56ys5LqU5Liq55WM6Z2iIOS4quS6uuS9nOWTgSAqL1xyXG4gICNwYWdlNXtcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWcvMTEuSlBHKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjcGFnZTUgaDN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gICNwYWdlNSAuc2xpZGUtaW1nc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiAxMiU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAjcGFnZTUgLnNsaWRlLWltZ3MgaW1ne1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgaGVpZ2h0OiA0MzdweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gICNwYWdlNSAuc2xpZGUtaW1ncyBpbWc6bnRoLWNoaWxkKDEpOmhvdmVye1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIH1cclxuICAjcGFnZTUgLnNsaWRlLWltZ3MgaW1nOm50aC1jaGlsZCgyKTpob3ZlcntcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICB9XHJcbiAgI3BhZ2U1IC5zbGlkZS1pbWdzIGltZzpudGgtY2hpbGQoMyk6aG92ZXJ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgfVxyXG4gICNwYWdlNSAuc2xpZGUtaW1ncyBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gICAgdG9wOiAyNXB4IDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgei1pbmRleDogMiA7XHJcbiAgfVxyXG4gI3BhZ2U1IC5zbGlkZS1pbWdzIGltZzpudGgtY2hpbGQoMyl7XHJcbiAgICB0b3A6IDUwcHggO1xyXG4gICAgbGVmdDogMTgwcHggO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnBhZ2UtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAjcGFnZTUgLnNsaWRlLWltZ3MgLnh5c3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDM5MHB4O1xyXG4gIH1cclxuICAvKiDpobnnm67mj4/ov7Dkv6Hmga8gKi9cclxuICAubWlhb3NodXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTIlO1xyXG4gICAgbGVmdDogNTUlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAubWlhb3NodSBkaXYgaDR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgY29sb3I6ICNhMGZkNDE7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC5taWFvc2h1IGRpdiBzcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDg0JTtcclxuICAgIHRleHQtaW5kZW50OiAzMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5taWFvc2h1IGRpdjpsYXN0LWNoaWxkIHNwYW57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5taWFvc2h1IGRpdjpsYXN0LWNoaWxkIHNwYW46aG92ZXJ7XHJcbiAgICBjb2xvcjogI2EwZmQ0MTtcclxuICB9XHJcbiAgLmVyd2VpbWF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICAvKiBsZWZ0OiAzMCU7ICovXHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICB9XHJcbiAgLmVyd2VpbWEgaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICB9XHJcbiAgLnNsaWRlLW5hdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gIH1cclxuICAuc2xpZGUtbmF2IHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNTU1O1xyXG4gIH1cclxuICAuc2xpZGUtbmF2IHVsIGxpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnNsaWRlLW5hdiB1bCBsaTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgI25hdi0ye1xyXG4gICAgbGVmdDogNTBweDtcclxuICB9XHJcbiAgI25hdi0ze1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbiAgfVxyXG4gIC5zbGlkZS1uYXYgdWwgbGkgc3BhbntcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gICAvKiDnrKzlha3kuKrnlYzpnaIg6IGU57O75oiRICovXHJcbiAgICNwYWdlNntcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmcxNy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNjb250YWN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuY29udGFjdC1tZXtcclxuICAgIHdpZHRoOiA3MjBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvIDAgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gIH1cclxuICAuY29udGFjdC1tZSBpe1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogI2ZmZDIwMCA1cHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6ICNmZmQyMDAgNXB4IHNvbGlkO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSBie1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2ZmZDIwMCA1cHggc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogI2ZmZDIwMCA1cHggc29saWQ7XHJcbiAgICAvKiBtYXJnaW46IDI3MHB4IDAgMCAwOyAqL1xyXG4gIH1cclxuICAuY29udGFjdC1tZSBoM3tcclxuICAgIG1hcmdpbjogMCAwIDAgMCA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxuICAuY29udGFjdC1tZSBoMzpudGgtY2hpbGQoMil7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDAgMCAwO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSBoNHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gICAgY29sb3I6ICNmZmVkZDBlMztcclxuICB9XHJcbiAgLmNvbnRhY3QtbWUgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbiAgICBcclxuICB9XHJcbiAgLmNvbnRhY3QtbWUgdWwgbGl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIHVsIGxpIGltZ3tcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIHVsIGxpIHNwYW57XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbiAgfVxyXG4gfVxyXG4gLyog5bmz5p2/56uvICovXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgLyog6IOM5pmv5Zu+6ZqQ6JePICovXHJcbiAgLmJne1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAubXVzaWNfaW1ne1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAuc3dpcGVye1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMjQ2cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDM3JTtcclxuICAgIHJpZ2h0OiA2JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICMwMDAwMDA7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbntcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMjRweCBhdXRvIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5zd2lwZXItcGFnaW5hdGlvbl8xe1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzN2FiNztcclxuICAgIC8qIG1hcmdpbjogMi44cHg7ICovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5uYW1le1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDIuNSU7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5uYW1lIGltZ3tcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBhbmltYXRpb246cnVuIDE1cyBsaW5lYXIgMXMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5uYW1lIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDsgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAubmFtZSBpe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44czsgXHJcbiAgfVxyXG4gIC5uYW1lIGJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7IFxyXG4gIH1cclxuICAubmFtZTpob3Zlci5uYW1lIGJ7XHJcbiAgICBjb2xvcjogIzIxOTZmMztcclxuICB9XHJcbiAgLm5hbWU6aG92ZXIubmFtZSBpe1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgfVxyXG4gIC5tdXNpY3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA0NDQ7XHJcbiAgICByaWdodDogLTM1JTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2U0ZTJlMyBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDc1NHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50IDE4MHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuaWNvbntcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNSU7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9tZW51LnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6NzAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiA2NjY2O1xyXG4gIH1cclxuICAuaWNvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gIH1cclxuICAvKiDnroDku4vmoLflvI8gKi9cclxuICAuZGVzY3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAwcHggMHB4LCByZ2IoMjU1LCAyNTUsIDI1NSwwLjUpLCAgcmdiKDI1NSwgMjU1LCAyNTUsMC41KSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzdW94aWFvIC42cyBsaW5lYXI7XHJcbiAgfVxyXG4gICNwYWdlMTpob3ZlciAuZGVzY3tcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMHB4IDBweCwgcmdiKDI1NSwgMjU1LCAyNTUsMC41KSwgIHJnYigyNTUsIDI1NSwgMjU1LDAuNSkpO1xyXG4gIH1cclxuICAuZGVzYzpob3ZlcntcclxuICAgICBib3gtc2hhZG93OiAwIDAgNzBweCAjMTExO1xyXG4gICAgIHdpZHRoOiA2MTBweDtcclxuICAgICBoZWlnaHQ6IDI2NXB4O1xyXG4gIH1cclxuICAuZGVzYyBpbWd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZGVzYyBoMntcclxuICAgIGZvbnQtZmFtaWx5OiBcIuW+rui9r+mbhem7kVwiLCBTaW1TdW4sIFwi5a6L5L2TXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nOjI1cHggMCAwIDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5kZXNjIGgze1xyXG4gICAgcGFkZGluZzogMTRweCAwIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmRlc2MgaDR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDAgMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgfVxyXG4gIC5kZXNjIGg0Omxhc3QtY2hpbGR7XHJcbiAgICBjb2xvcjogIzIxOTZmMztcclxuICB9XHJcbiAgLyog5YWz5LqO5oiR55WM6Z2iICovXHJcbiAgLmFib3V0e1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZzguanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY29udGVudCAudGl0bGV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAxMjBweCAwIDAgMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuY29udGVudCAubWV6bHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDMzNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmM2Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDcwcHggIzExMTtcclxuICB9XHJcbiAgLyog5Liq5Lq65LuL57uN5bem5L6n5Zu+54mHICovXHJcbiAgLnNjcmVlXzF7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICB9XHJcbiAgLnNjcmVlXzEgaW1ne1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgbGluZWFyO1xyXG4gIH1cclxuICAuc2NyZWVfMSBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIC5uYW1lc3tcclxuICAgIHBhZGRpbmc6NSUgMCAwIDUwJTtcclxuICB9XHJcbiAgLm5hbWVzIGg2e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gICAvKiDnrKzkuInkuKrnlYzpnaLnmoTmoLflvI8gKi9cclxuICAgLnBhZ2Uze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmcyMS5KUEcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucGhvbmV7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC5waG9uZS13IHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDMyJSAwcHggMCA2MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIC5waG9uZS13IHVsIGxpe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgI21haW4xe1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAucGFnZTMgaDF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gICNwYWdlNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdlNHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2U0IC5wYWdlNC1jb250ZW50e1xyXG4gICAgLyogbWF4LXdpZHRoOiA2NTBweDsgKi9cclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogLTIxMHB4IDAgMCAtMzUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmpsLXBhcmVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAgIC8qIOW3peS9nOe7j+WOhuagt+W8jyAqL1xyXG4gICAgLm15LWpse1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5teS1qbCBoM3tcclxuICAgICAgY29sb3I6ICNmZmQyMDA7XHJcbiAgICB9XHJcbiAgICAubXktamwgLmpsLWJvcmRlcntcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmpsLWJvcmRlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgICAuamwtYm9yZGVyOmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAuamwtYm9yZGVyIHNwYW57XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgY29sb3I6ICM4M2U0MWQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XHJcbiAgICB9XHJcbiAgICAuamwtYm9yZGVyIGl7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmY2RjNDtcclxuICAgIH1cclxuICAuamwtYm90dG9te1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmpsLWJvdHRvbSBsaXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5qbC1ib3R0b20gbGkgc3BhbntcclxuICAgIC8qIHBhZGRpbmc6IDAgMCAwIDE1cHg7ICovXHJcbiAgICBjb2xvcjogI2U2ZGU4ZDtcclxuICB9XHJcbiAgXHJcbiAgLmpsLWJvdHRvbSBsaSBpe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmYyNmU7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xyXG4gIH1cclxuICAuamwtYm90dG9tIGxpIGJ7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzZTQxZDtcclxuICB9XHJcbiAgLmpsLWJvdHRvbSBsaSBlbXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhNmRiNmQ7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDExMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTJweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogLTEycHg7ICovXHJcbiAgfVxyXG4gIC5qbC1yaWdodHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OjE2MHB4O1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWw6bGFzdC1jaGlsZHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5qbC1yaWdodCB1bCBsaXtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5qbC1yaWdodCB1bCBsaSBoMntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gIH1cclxuICAuamwtcmlnaHQgdWwgbGk6bnRoLWNoaWxkKDEpIGgyOmhvdmVye1xyXG4gICAgY29sb3I6ICM4M2U0MWQ7XHJcbiAgfVxyXG4gIC5qbC1yaWdodCB1bCBsaTpudGgtY2hpbGQoMikgaDI6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzgzZTQxZDtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsIGxpIGgze1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IzhhZDMzMDtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsIGxpIGl7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nOiA0NXB4IDAgMCAxNXB4IDtcclxuICB9XHJcbiAgLmpsLXJpZ2h0IHVsOmxhc3QtY2hpbGQgbGkgYntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5sZWZ0LW5hdntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIOesrOS6lOS4queVjOmdoiDkuKrkurrkvZzlk4EgKi9cclxuICAjcGFnZTV7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1nLzExLkpQRyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI3BhZ2U1IGgze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuc2xpZGUtbmF2IHVsIGxpOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICAjcGFnZTUgLnNsaWRlLWltZ3N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gIH1cclxuICAjcGFnZTUgLnNsaWRlLWltZ3MgaW1ne1xyXG4gICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgaGVpZ2h0OiAzODdweDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gICNwYWdlNSAuc2xpZGUtaW1ncyBpbWc6bnRoLWNoaWxkKDEpOmhvdmVye1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICAjcGFnZTUgLnNsaWRlLWltZ3MgaW1nOm50aC1jaGlsZCgyKTpob3ZlcntcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbiAgI3BhZ2U1IC5zbGlkZS1pbWdzIGltZzpudGgtY2hpbGQoMyk6aG92ZXJ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gICNwYWdlNSAuc2xpZGUtaW1ncyBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gICAgdG9wOiAyNXB4IDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB6LWluZGV4OiAyIDtcclxuICB9XHJcbiAgI3BhZ2U1IC5zbGlkZS1pbWdzIC54eXN7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzOTBweDtcclxuICB9XHJcbiAjcGFnZTUgLnNsaWRlLWltZ3MgaW1nOm50aC1jaGlsZCgzKXtcclxuICAgIHRvcDogNTBweCA7XHJcbiAgICBsZWZ0OiAxMDBweCA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAucGFnZS1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC8qIOmhueebruaPj+i/sOS/oeaBryAqL1xyXG4gIC5taWFvc2h1e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLm1pYW9zaHUgZGl2IGg0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTNweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIGNvbG9yOiAjYTBmZDQxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAubWlhb3NodSBkaXYgc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB0ZXh0LWluZGVudDogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAubWlhb3NodSBkaXY6bGFzdC1jaGlsZCBzcGFue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubWlhb3NodSBkaXY6bGFzdC1jaGlsZCBzcGFuOmhvdmVye1xyXG4gICAgY29sb3I6ICNhMGZkNDE7XHJcbiAgfVxyXG4gIC5lcndlaW1he1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogLTEwJTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gIH1cclxuICAuZXJ3ZWltYSBpbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gIH1cclxuICAuc2xpZGUtbmF2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIGxlZnQ6IDM3JTtcclxuICB9XHJcbiAgLnNsaWRlLW5hdiB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDU1NTtcclxuICB9XHJcbiAgLnNsaWRlLW5hdiB1bCBsaXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgLyogb3BhY2l0eTogMDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICNuYXYtMntcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gICNuYXYtM3tcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gIH1cclxuICAuc2xpZGUtbmF2IHVsIGxpIHNwYW57XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAvKiDnrKzlha3kuKrnlYzpnaIg6IGU57O75oiRICovXHJcbiAgI3BhZ2U2e1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZzE3LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI2NvbnRhY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5jb250YWN0LW1le1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbjogMTUlIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIGl7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAjZmZkMjAwIDVweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogI2ZmZDIwMCA1cHggc29saWQ7XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIGJ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAjZmZkMjAwIDVweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiAjZmZkMjAwIDVweCBzb2xpZDtcclxuICAgIC8qIG1hcmdpbjogMjcwcHggMCAwIDA7ICovXHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIGgze1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwIDtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIGgzOm50aC1jaGlsZCgyKXtcclxuICAgIHBhZGRpbmc6IDQ1cHggMCAwIDA7XHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIGg0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgICBjb2xvcjogI2ZmZWRkMGUzO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5jb250YWN0LW1lIHVsIGxpe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSB1bCBsaSBpbWd7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuY29udGFjdC1tZSB1bCBsaSBzcGFue1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gIH1cclxufVxyXG4vKiDmiYvmnLrnq68gKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgI3BhZ2Uxe1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnNi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgfVxyXG4gICAubmF2e1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICB0b3A6IDA7XHJcbiAgICAgei1pbmRleDogNTAwMDtcclxuICAgfVxyXG4gICAubmF2aWdhdGlvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICAubmF2aWdhdGlvbi1waG9uZSB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzY5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuICAgLm5hdmlnYXRpb24tcGhvbmUgdWwgbGk6bGFzdC1jaGlsZCBpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNjY2NjY2M2OTtcclxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAubmF2aWdhdGlvbi1waG9uZSB1bCBsaSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0aW9uLXBob25le1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICAubXVzaWMge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZzo5cHggMjBweDtcclxuICAgfVxyXG4gICAubXVzaWMgaXtcclxuICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgIH1cclxuICAgLnN3aXBlcntcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbiAgIC50b3V4aWFuZ3tcclxuICAgICB3aWR0aDogMzVweDtcclxuICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgIGFuaW1hdGlvbjpydW4gMTVzIGxpbmVhciAxcyBpbmZpbml0ZTtcclxuICAgfVxyXG4gICAubXVzaWMgaW1nOmxhc3QtY2hpbGR7XHJcbiAgICAgei1pbmRleDogMTAwMDAwO1xyXG4gICB9XHJcbiAgIC5tZW51e1xyXG4gICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgIGhlaWdodDogMjVweDtcclxuICAgfVxyXG4gICAuZGVzY3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHRvcDogMzUlOyAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzdW94aWFvIC45cyBsaW5lYXI7XHJcbiAgIH1cclxuICAgLmRlc2MgaW1ne1xyXG4gICAgIG1hcmdpbjogMjUlIDAgMCAwO1xyXG4gICAgIHdpZHRoOiAxMjBweDtcclxuICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgfVxyXG4gICAuZGVzYyBoMntcclxuICAgIGZvbnQtZmFtaWx5OiBcIuW+rui9r+mbhem7kVwiLCBTaW1TdW4sIFwi5a6L5L2TXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOjclIDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYW5pbWF0aW9uOiBzdW94aWFvIC45cyBsaW5lYXI7XHJcbiAgfVxyXG4gIC5kZXNjIGgze1xyXG4gICAgcGFkZGluZzogOCUgMCA1JSAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYW5pbWF0aW9uOiBzdW94aWFvIC45cyBsaW5lYXI7XHJcbiAgfVxyXG4gIC5kZXNjIGg0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNiUgMCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLyogb3BhY2l0eTogMDsgKi9cclxuICAgIGFuaW1hdGlvbjogc3VveGlhbyAuOXMgbGluZWFyO1xyXG4gIH1cclxuICAuZGVzYyBoNDpsYXN0LWNoaWxke1xyXG4gICAgY29sb3I6ICNmN2ZmMDE7XHJcbiAgfVxyXG4gIC5hYm91dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1nL2JnOC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5hYm91dCAudGl0bGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDIzJSAwIDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuICAuY29udGVudCAubWV6bHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjNkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTglIGF1dG8gMDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCA3MHB4ICMxMTE7ICovXHJcbiAgfVxyXG4gIC8qIOS4quS6uuS7i+e7jeW3puS+p+WbvueJhyAqL1xyXG4gIC5zY3JlZV8xe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zY3JlZV8xIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBsaW5lYXI7XHJcbiAgICBwYWRkaW5nOiAwIDEwJSAwIDAgO1xyXG4gIH1cclxuICAubmFtZXN7XHJcbiAgICBwYWRkaW5nOjAgMCAwIDIwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLm5hbWVzIGg2e1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luOiA1JSAwO1xyXG4gICAgYW5pbWF0aW9uOiBsZWZ0MSAxcyBsaW5lYXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgIC8qIOesrOS4ieS4queVjOmdoueahOagt+W8jyAqL1xyXG4gICAucGFnZTN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZzIxLkpQRyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI21haW4xe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNSUgMCAwIDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5waG9uZS13IHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5waG9uZS13IHVsIGxpe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLnBhZ2UzIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBtYXJnaW46IDIzJSAwIDAgMDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgI3BhZ2U0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmcxLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuIC5zd2lwZXItcGFnZTR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgcGFkZGluZzogMTMlIDAgMCAwO1xyXG4gfVxyXG4gLm15LWpse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gfVxyXG4gLm15LWpsIGgze1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4gfVxyXG4gLmpsLWJvcmRlciwuamwtYm90dG9te1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4uamwtcmlnaHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTBweCAwIDAgMDtcclxufVxyXG4ubGVmdC1uYXZ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMCAwIDAgMjBweDtcclxufVxyXG4ubGVmdC1uYXYgbGl7XHJcbiAgaGVpZ2h0OiA0NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGVmdC1uYXYgbGkgaXtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltZy9mZW5nY2hlLnBuZykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6LTEycHg7XHJcbiAgYW5pbWF0aW9uOnJ1bjEgM3MgbGluZWFyIDFzIGluZmluaXRlO1xyXG59XHJcbi5qbC1yaWdodHtcclxuICBwYWRkaW5nOiAxNiUgMCAwIDIlO1xyXG59XHJcbi5qbC1yaWdodCB1bDpudGgtY2hpbGQoMil7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5qbC1yaWdodCB1bDpudGgtY2hpbGQoMikgbGl7XHJcbiAgcGFkZGluZzogMHB4IDAgMCAyMHB4O1xyXG59XHJcbi5qbC1yaWdodCB1bDpudGgtY2hpbGQoMikgbGk6bnRoLWNoaWxkKDIpIHtcclxuICBtYXJnaW46IDQwcHggMCAwIDA7XHJcbn1cclxuLmpsLXJpZ2h0IHVsOm50aC1jaGlsZCgyKT5saSBie1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzgzZTQxZDtcclxufVxyXG4uamwtcmlnaHQgdWw6bnRoLWNoaWxkKDIpIGxpIGgyLGgze1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTUwO1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcbi5qbC1yaWdodCB1bDpudGgtY2hpbGQoMikgbGkgaXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNmN2ZmMDE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbiNwYWdlNXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8xMS5KUEcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubXktenVvcGlue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcGFnZTUgLnNsaWRlLWltZ3MgLnh5c3tcclxuICB3aWR0aDogOTclO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuI3BhZ2U1IGgze1xyXG4gICBwYWRkaW5nOiAxNyUgMCAwIDA7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7IFxyXG59XHJcbi5wYWdlLWZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zbGlkZS1pbWdze1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuLnNsaWRlLWltZ3MgaW1ne1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsLjcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4uc2xpZGUtaW1ncyBpbWc6bnRoLWNoaWxkKDIpe1xyXG4gIGxlZnQ6IDMwJTtcclxuICB0b3A6IDBweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5zbGlkZS1pbWdzIGltZzpudGgtY2hpbGQoMyl7XHJcbiAgbGVmdDogNjAlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLm1pYW9zaHUge1xyXG4gIG1hcmdpbi10b3A6IDklO1xyXG4gIHdpZHRoOiA4OCU7XHJcbiAgcGFkZGluZzogMCA3JSAwIDclO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4ubWlhb3NodSBkaXZ7XHJcbiAgbWFyZ2luOjhweCAwO1xyXG59XHJcbi5taWFvc2h1IGRpdiBoNHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjYTBmZDQxO1xyXG59XHJcbi5taWFvc2h1IGRpdiBzcGFue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubWlhb3NodSBkaXY6bGFzdC1jaGlsZHtcclxuICB3aWR0aDogOTglO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uZXJ3ZWltYXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTsgIFxyXG4gIGxlZnQ6IDY3JTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG4uZXJ3ZWltYSBpbWd7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zbGlkZS1uYXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNCU7XHJcbiAgbGVmdDogMjMlO1xyXG59XHJcbi5zbGlkZS1uYXYgdWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTU1O1xyXG59XHJcbi5zbGlkZS1uYXYgdWwgbGl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIC8qIG9wYWNpdHk6IDA7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNuYXYtMntcclxuICBsZWZ0OiA1MHB4O1xyXG59XHJcbiNuYXYtM3tcclxuICBsZWZ0OiAxMDBweDtcclxufVxyXG4uc2xpZGUtbmF2IHVsIGxpIHNwYW57XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4gLyog56ys5YWt5Liq55WM6Z2iIOiBlOezu+aIkSAqL1xyXG4gI3BhZ2U2e1xyXG4gIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmcxNy5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2NvbnRhY3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XHJcbn1cclxuLmNvbnRhY3QtbWV7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG4gIG1hcmdpbjogMjUlIGF1dG8gMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG59XHJcbi5jb250YWN0LW1lIGl7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICByaWdodDogMDtcclxuICBib3JkZXItdG9wOiAjZmZkMjAwIDVweCBzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6ICNmZmQyMDAgNXB4IHNvbGlkO1xyXG59XHJcbi5jb250YWN0LW1lIGJ7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItYm90dG9tOiAjZmZkMjAwIDVweCBzb2xpZDtcclxuICBib3JkZXItbGVmdDogI2ZmZDIwMCA1cHggc29saWQ7XHJcbiAgLyogbWFyZ2luOiAyNzBweCAwIDAgMDsgKi9cclxufVxyXG4uY29udGFjdC1tZSBoM3tcclxuICBtYXJnaW46IDAgMCAwIDAgO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG59XHJcbi5jb250YWN0LW1lIGgzOm50aC1jaGlsZCgyKXtcclxuICBwYWRkaW5nOiA0NXB4IDAgMCAwO1xyXG59XHJcbi5jb250YWN0LW1lIGg0e1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gIGNvbG9yOiAjZmZlZGQwZTM7XHJcbn1cclxuLmNvbnRhY3QtbWUgdWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOjk1JTtcclxuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbiAgXHJcbn1cclxuLmNvbnRhY3QtbWUgdWwgbGl7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uY29udGFjdC1tZSB1bCBsaSBpbWd7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWN0LW1lIHVsIGxpIHNwYW57XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbn1cclxuIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/myindex/myindex.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/myindex/myindex.component.ts ***!
    \**********************************************/

  /*! exports provided: MyindexComponent */

  /***/
  function srcAppMyindexMyindexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyindexComponent", function () {
      return MyindexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../audio.service */
    "./src/app/audio.service.ts");

    var echarts = __webpack_require__(
    /*! echarts */
    "./node_modules/echarts/index.js");

    var MyindexComponent =
    /*#__PURE__*/
    function () {
      function MyindexComponent(audio) {
        _classCallCheck(this, MyindexComponent);

        this.show = false;
        this.scrollTop = 0;
        this.audio = audio;
      }

      _createClass(MyindexComponent, [{
        key: "toTg",
        value: function toTg(url) {
          window.open(url);
        }
      }, {
        key: "play1",
        value: function play1() {
          var isTrue = this.audio._audio.paused;

          if (isTrue) {
            this.audio._audio.play();

            jquery__WEBPACK_IMPORTED_MODULE_2__(".play-img").attr('src', "../../assets/img/pause.png");
          } else {
            this.audio._audio.pause();

            jquery__WEBPACK_IMPORTED_MODULE_2__(".play-img").attr('src', "../../assets/img/play.png");
          }
        }
      }, {
        key: "phone_toggle",
        value: function phone_toggle() {
          jquery__WEBPACK_IMPORTED_MODULE_2__(".navigation-phone").slideToggle();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.show) {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".zyc").show();
            jquery__WEBPACK_IMPORTED_MODULE_2__(".navigation").animate({
              right: "0px",
              width: '40%'
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".icon").css({
              "background-image": "url(../../assets/img/close.png)"
            });
            this.show = true;
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".navigation").animate({
              right: "-35%",
              width: '0%'
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".icon").css({
              "background-image": "url(../../assets/img/menu.png)"
            });
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__(".zyc").hide();
            }, 350);
            this.show = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.audio._audio.src = '../../assets/music/Valentin - A Little Story.mp3';
          jquery__WEBPACK_IMPORTED_MODULE_2__(".music_img").hover(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".music_img").css({
              'background-color': '#a19494'
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".play-img").fadeIn();
          }, function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".music_img").css({
              'background-color': 'transparent'
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".play-img").fadeOut();
          });
          jquery__WEBPACK_IMPORTED_MODULE_2__("#ewm").hover(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".erweima").fadeIn();
          }, function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".erweima").fadeOut();
          });
          var myChart = echarts.init(document.getElementById('main1')); // 绘制图表

          setTimeout(function () {
            window.onresize = function () {
              myChart.resize();
            };
          }, 200);
          myChart.setOption({
            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series: [{
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: [{
                value: 270,
                name: 'HTML5',
                itemStyle: {
                  color: '#97BE0D'
                }
              }, {
                value: 280,
                name: 'CSS3',
                itemStyle: {
                  color: '#d7d8d8'
                }
              }, {
                value: 310,
                name: 'JS',
                itemStyle: {
                  color: '#d3d671'
                }
              }, {
                value: 335,
                name: 'Vue.js',
                itemStyle: {
                  color: '#BEDBE9'
                }
              }, {
                value: 335,
                name: 'Angular',
                itemStyle: {
                  color: '#e4a787'
                }
              }, {
                value: 300,
                name: '小程序'
              }],
              roseType: 'angle',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255)',
                    "fontSize": 18,
                    "fontWeight": 550
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0, 0.9)'
                  }
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 5,
                  shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
              }
            }]
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {}
      }]);

      return MyindexComponent;
    }();

    MyindexComponent.ctorParameters = function () {
      return [{
        type: _audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"]
      }];
    };

    MyindexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myindex',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myindex.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myindex/myindex.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myindex.component.css */
      "./src/app/myindex/myindex.component.css")).default]
    })], MyindexComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\毕业完成项目\angular\myResume\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
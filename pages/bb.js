/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(1);
Constants_1.DefaultSiteConfigs.forEach(function (item) {
    var str = "\u7AD9\u70B9{item.\n     1\n         5\n        3\n      2\n           6\n     }";
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//七大中心后台站点
var DefalutSiteConfig = /** @class */ (function () {
    function DefalutSiteConfig() {
    }
    return DefalutSiteConfig;
}());
;
var DefaultSiteConfigs = [];
exports.DefaultSiteConfigs = DefaultSiteConfigs;
{
    DefaultSiteConfigs.push({
        Name: "AuthApi",
        DisplayName: "认证中心后台",
        ConfigName: "DySoft.Users.Host.exe.config",
        ExecuteName: "DySoft.Users.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: "OpenPlatformApi",
        DisplayName: "开发者门户",
        ConfigName: "DySoft.Users.Host.exe.config",
        ExecuteName: "DySoft.Users.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: "BasicManageApi",
        DisplayName: "用户中心",
        ConfigName: "DySoft.Users.Host.exe.config",
        ExecuteName: "DySoft.Users.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: "PowerManageApi",
        DisplayName: "权限中心",
        ConfigName: "DySoft.Users.Host.exe.config",
        ExecuteName: "DySoft.Users.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: "SystemManageApi",
        DisplayName: "配置中心",
        ConfigName: "DySoft.Users.Host.exe.config",
        ExecuteName: "DySoft.Users.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: "InterfaceApi",
        DisplayName: "接口中心",
        ConfigName: "DySoft.Interface.Host.exe.config",
        ExecuteName: "DySoft.Interface.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: "DatacenterApi",
        DisplayName: "数据中心",
        ConfigName: "DySoft.DataCenter.Host.exe.config",
        ExecuteName: "DySoft.DataCenter.Host.exe"
    });
    DefaultSiteConfigs.push({
        Name: " LoggingApi",
        DisplayName: "日志中心",
        ConfigName: "",
        ExecuteName: ""
    });
    DefaultSiteConfigs.push({
        Name: "MessageApi",
        DisplayName: "消息中心",
        ConfigName: "",
        ExecuteName: ""
    });
}


/***/ })
/******/ ]);
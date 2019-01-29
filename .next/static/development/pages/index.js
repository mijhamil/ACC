((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Day.js":
/*!***************************!*\
  !*** ./components/Day.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Day =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day(props) {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, _getPrototypeOf(Day).call(this, props));
  }

  _createClass(Day, [{
    key: "renderData",
    value: function renderData() {
      var children = [];

      for (var property in this.props.data) {
        if (this.props.data.hasOwnProperty(property)) {
          children.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", property, " = ", this.props.data[property]));
        }
      }

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Day = ", this.props.day), this.renderData());
    }
  }]);

  return Day;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Day);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var API_KEY = "01b26ee6d0c3282a322bd29fbe30564f";
/* harmony default export */ __webpack_exports__["default"] = (API_KEY);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Day */ "./components/Day.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ "./config.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Conditions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Conditions, _React$Component);

  function Conditions(props) {
    var _this;

    _classCallCheck(this, Conditions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Conditions).call(this, props));
    _this.state = {
      error: null,
      isLoaded: false,
      dataObject: [],
      latitude: null,
      longitude: null
    };
    _this.setPosition = _this.setPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * getApi fetches weather data from Dark Sky Api based on the latitude and
   * longitude given from built in geo location called in setLocation()
   */


  _createClass(Conditions, [{
    key: "getApi",
    value: function getApi(lat, long) {
      var _this2 = this;

      fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + _config_js__WEBPACK_IMPORTED_MODULE_2__["default"] + "/".concat(lat, ",").concat(long)).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          dataObject: result
        });
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
    /**
     * setPosition takes in a position parameter from navigator and
     * updates Conditions state.
     * getApi is then called with the latitude/longitude passed in
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      this.setState({
        longitude: long,
        latitude: lat
      });
      this.getApi(lat, long);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!navigator.geolocation) {
        this.setState({
          statusText: 'Your browser does not support geolocation...'
        });
      } else {
        // Passes position and calls setPosition function
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          items = _this$state.items;

      if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Error: ", error.message);
      } else if (!isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Loading..."));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Latitude is ", JSON.stringify(this.state.dataObject.latitude, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Longitude is ", JSON.stringify(this.state.dataObject.longitude, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Current Temperature is ", JSON.stringify(this.state.dataObject.currently.temperature, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "5 day forcast data "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Day__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.dataObject.daily.data[0],
          day: '1'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Day__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.dataObject.daily.data[1],
          day: '2'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Day__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.dataObject.daily.data[2],
          day: '3'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Day__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.dataObject.daily.data[3],
          day: '4'
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Day__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: this.state.dataObject.daily.data[4],
          day: '5'
        }));
      }
    }
  }]);

  return Conditions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Conditions);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_831a3634f66cb1dada0c":
/*!*******************************************!*\
  !*** external "dll_831a3634f66cb1dada0c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_831a3634f66cb1dada0c;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map
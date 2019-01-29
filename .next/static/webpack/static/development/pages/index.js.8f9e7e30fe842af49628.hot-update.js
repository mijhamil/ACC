webpackHotUpdate("static\\development\\pages\\index.js",{

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
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, JSON.stringify(this.props.data, null, 2), " ");
    }
  }]);

  return Day;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Conditions =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Conditions, _React$Component2);

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

      fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + "***REMOVED***/".concat(lat, ",").concat(long)).then(function (res) {
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Latitude is ", JSON.stringify(this.state.dataObject.latitude, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Longitude is ", JSON.stringify(this.state.dataObject.longitude, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Time Zone is is ", JSON.stringify(this.state.dataObject.timezone, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Current Temperature is ", JSON.stringify(this.state.dataObject.currently.temperature, null, 2), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Day, {
          data: this.state.dataObject
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

/***/ })

})
//# sourceMappingURL=index.js.8f9e7e30fe842af49628.hot-update.js.map
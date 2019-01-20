webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_ApiCall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ApiCall */ "./components/ApiCall.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-geolocated */ "./node_modules/react-geolocated/dist-modules/index.js");
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Data.js */ "./components/Data.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Batman TV Shows"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, console.log(props)), getGeoLoc()));
};
/* {props.shows.map(({show}) => (
  <li key={show.id}>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
))} */


Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var latty, longgy, res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //const res = await fetch('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/37.334789,-121.888138')
          latty = "38.334789";
          longgy = "-121.888138";
          _context.next = 4;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.darksky.net/forecast/01b26ee6d0c3282a322bd29fbe30564f/' + latty + ',' + longgy);

        case 4:
          res = _context.sent;
          _context.next = 7;
          return res.json();

        case 7:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

function getGeoLoc() {
  // return !this.props.isGeolocationAvailable
  // ? <div>Your browser does not support Geolocation</div>
  // : !this.props.isGeolocationEnabled
  //   ? <div>Geolocation is not enabled</div>
  //   : this.props.coords
  //     ? 
  //     (<table>
  //       <tbody>
  //         <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
  //         <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
  //         <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
  //         <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
  //         <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
  //       </tbody>
  //     </table>, console.log("the latty is " + props.coords.latitude))
  //     : <div>Getting the location data&hellip; </div>
  if (!this.props.isGeolocationAvailable) {
    console.log("not available");
  } else {
    console.log("available");
  }
}

getGeoLoc.propTypes = Object.assign({}, getGeoLoc.propTypes, react_geolocated__WEBPACK_IMPORTED_MODULE_6__["geoPropTypes"]);
/* if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     // for when getting location is a success
     console.log('latitude', position.coords.latitude, 
                 'longitude', position.coords.longitude);
   },
  function error(error_message) {
    // for when getting location results in an error
    console.error('An error has occured while retrieving location', error_message)
  }  
  );
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser')
} */

/*
const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (<PostLink key={post.id} post={post}/>))}
    </ul>
  </Layout>
)
*/
// class Demo extends React.Component {
//   render() {
//     return (
// !this.props.isGeolocationAvailable
//   ? <div>Your browser does not support Geolocation</div>
//   : !this.props.isGeolocationEnabled
//     ? <div>Geolocation is not enabled</div>
//     : this.props.coords
//       ? 
//       <table>
//         <tbody>
//           <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
//           <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
//           <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
//           <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
//           <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
//         </tbody>
//       </table>
//       : <div>Getting the location data&hellip; </div>
//     );
//   }
// }
// Demo.propTypes = Object.assign({}, Demo.propTypes, geoPropTypes);
// export default geolocated()(Demo)
// ;

/*export default () => (
  <div>
    <Layout>
    <p>Hello Next.js</p>
    <Index />
    </Layout>
  </div>
)*/
//  export default () => {
//    return <h1>hi</h1>
//    //<Index />
//  }

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
//# sourceMappingURL=index.js.591f3be3a26a4ddce7af.hot-update.js.map
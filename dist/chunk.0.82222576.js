webpackJsonp([0],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    var enterModule = __webpack_require__(9).enterModule;

    enterModule && enterModule(module);
})();

var COUNT_STEP = 1;

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = { value: 1 };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.timeout = setTimeout(this.handleTimeoutEvent.bind(this), 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.timeout && clearTimeout(this.timeout);
        }
    }, {
        key: 'handleTimeoutEvent',
        value: function handleTimeoutEvent() {
            var _this2 = this;

            this.setState(function (prevState, props) {
                return {
                    value: prevState.value + COUNT_STEP
                };
            }, function () {
                _this2.timeout = setTimeout(_this2.handleTimeoutEvent.bind(_this2), 1000);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    ' This is a counter: ',
                    this.state.value,
                    ' '
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Counter;
}(_react2.default.Component);

Counter.protoTypes = {};
var _default = Counter;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(9).default;

    var leaveModule = __webpack_require__(9).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(COUNT_STEP, 'COUNT_STEP', 'D:/www/test/demo/src/Counter.js');
    reactHotLoader.register(Counter, 'Counter', 'D:/www/test/demo/src/Counter.js');
    reactHotLoader.register(_default, 'default', 'D:/www/test/demo/src/Counter.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ })

});
//# sourceMappingURL=chunk.0.82222576.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeTextField = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["elements", "valueStr", "onValueStrChange", "id", "error", "InputProps", "inputProps", "autoFocus", "disabled", "valueType", "ownerState"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FakeTextField = exports.FakeTextField = /*#__PURE__*/React.forwardRef(function FakeTextField(props, ref) {
  const {
      elements,
      valueStr,
      onValueStrChange,
      id,
      valueType
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, (0, _extends2.default)({
      ref: ref
    }, other, {
      style: {
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: 4,
        padding: '2px 4px',
        color: valueType === 'placeholder' ? 'grey' : 'black'
      },
      children: elements.map(({
        container,
        content,
        before,
        after
      }, elementIndex) => /*#__PURE__*/(0, _react.createElement)("span", (0, _extends2.default)({}, container, {
        key: elementIndex
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", (0, _extends2.default)({}, before)), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", (0, _extends2.default)({}, content)), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", (0, _extends2.default)({}, after))))
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "hidden",
      value: valueStr,
      onChange: onValueStrChange,
      id: id
    })]
  });
});
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["elements", "valueStr", "onValueStrChange", "id", "error", "InputProps", "inputProps", "autoFocus", "disabled", "valueType", "ownerState"];
import * as React from 'react';
import Box from '@mui/material/Box';
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var FakeTextField = /*#__PURE__*/React.forwardRef(function FakeTextField(props, ref) {
  var elements = props.elements,
    valueStr = props.valueStr,
    onValueStrChange = props.onValueStrChange,
    id = props.id,
    error = props.error,
    InputProps = props.InputProps,
    inputProps = props.inputProps,
    autoFocus = props.autoFocus,
    disabled = props.disabled,
    valueType = props.valueType,
    ownerState = props.ownerState,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx(Box, _extends({
      ref: ref
    }, other, {
      style: {
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: 4,
        padding: '2px 4px',
        color: valueType === 'placeholder' ? 'grey' : 'black'
      },
      children: elements.map(function (_ref, elementIndex) {
        var container = _ref.container,
          content = _ref.content,
          before = _ref.before,
          after = _ref.after;
        return /*#__PURE__*/_createElement("span", _extends({}, container, {
          key: elementIndex
        }), /*#__PURE__*/_jsx("span", _extends({}, before)), /*#__PURE__*/_jsx("span", _extends({}, content)), /*#__PURE__*/_jsx("span", _extends({}, after)));
      })
    })), /*#__PURE__*/_jsx("input", {
      type: "hidden",
      value: valueStr,
      onChange: onValueStrChange,
      id: id
    })]
  });
});
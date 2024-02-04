import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["elements", "valueStr", "onValueStrChange", "id", "error", "InputProps", "inputProps", "autoFocus", "disabled", "valueType", "ownerState"];
import * as React from 'react';
import Box from '@mui/material/Box';
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const FakeTextField = /*#__PURE__*/React.forwardRef(function FakeTextField(props, ref) {
  const {
      elements,
      valueStr,
      onValueStrChange,
      id,
      valueType
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
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
      children: elements.map(({
        container,
        content,
        before,
        after
      }, elementIndex) => /*#__PURE__*/_createElement("span", _extends({}, container, {
        key: elementIndex
      }), /*#__PURE__*/_jsx("span", _extends({}, before)), /*#__PURE__*/_jsx("span", _extends({}, content)), /*#__PURE__*/_jsx("span", _extends({}, after))))
    })), /*#__PURE__*/_jsx("input", {
      type: "hidden",
      value: valueStr,
      onChange: onValueStrChange,
      id: id
    })]
  });
});
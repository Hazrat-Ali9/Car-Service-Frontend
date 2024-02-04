import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["ownerState"];
import * as React from 'react';
import { useSlotProps } from '@mui/base/utils';
import MuiIconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { ClearIcon } from '../icons';
import { useLocaleText } from '../internals';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var useClearableField = function useClearableField(_ref) {
  var _ref2, _slots$clearButton, _slotProps$clearButto, _ref3, _slots$clearIcon, _slotProps$clearIcon;
  var clearable = _ref.clearable,
    forwardedFieldProps = _ref.fieldProps,
    ForwardedInputProps = _ref.InputProps,
    onClear = _ref.onClear,
    slots = _ref.slots,
    slotProps = _ref.slotProps,
    components = _ref.components,
    componentsProps = _ref.componentsProps;
  var localeText = useLocaleText();
  var IconButton = (_ref2 = (_slots$clearButton = slots == null ? void 0 : slots.clearButton) != null ? _slots$clearButton : components == null ? void 0 : components.ClearButton) != null ? _ref2 : MuiIconButton;
  // The spread is here to avoid this bug mui/material-ui#34056
  var _useSlotProps = useSlotProps({
      elementType: IconButton,
      externalSlotProps: (_slotProps$clearButto = slotProps == null ? void 0 : slotProps.clearButton) != null ? _slotProps$clearButto : componentsProps == null ? void 0 : componentsProps.clearButton,
      ownerState: {},
      className: 'clearButton',
      additionalProps: {
        title: localeText.fieldClearLabel
      }
    }),
    ownerState = _useSlotProps.ownerState,
    iconButtonProps = _objectWithoutProperties(_useSlotProps, _excluded);
  var EndClearIcon = (_ref3 = (_slots$clearIcon = slots == null ? void 0 : slots.clearIcon) != null ? _slots$clearIcon : components == null ? void 0 : components.ClearIcon) != null ? _ref3 : ClearIcon;
  var endClearIconProps = useSlotProps({
    elementType: EndClearIcon,
    externalSlotProps: (_slotProps$clearIcon = slotProps == null ? void 0 : slotProps.clearIcon) != null ? _slotProps$clearIcon : componentsProps == null ? void 0 : componentsProps.clearIcon,
    ownerState: {}
  });
  var InputProps = _extends({}, ForwardedInputProps, {
    endAdornment: /*#__PURE__*/_jsxs(React.Fragment, {
      children: [clearable && /*#__PURE__*/_jsx(InputAdornment, {
        position: "end",
        sx: {
          marginRight: ForwardedInputProps != null && ForwardedInputProps.endAdornment ? -1 : -1.5
        },
        children: /*#__PURE__*/_jsx(IconButton, _extends({}, iconButtonProps, {
          onClick: onClear,
          children: /*#__PURE__*/_jsx(EndClearIcon, _extends({
            fontSize: "small"
          }, endClearIconProps))
        }))
      }), ForwardedInputProps == null ? void 0 : ForwardedInputProps.endAdornment]
    })
  });
  var fieldProps = _extends({}, forwardedFieldProps, {
    sx: [{
      '& .clearButton': {
        opacity: 1
      },
      '@media (pointer: fine)': {
        '& .clearButton': {
          opacity: 0
        },
        '&:hover, &:focus-within': {
          '.clearButton': {
            opacity: 1
          }
        }
      }
    }].concat(_toConsumableArray(Array.isArray(forwardedFieldProps.sx) ? forwardedFieldProps.sx : [forwardedFieldProps.sx]))
  });
  return {
    InputProps: InputProps,
    fieldProps: fieldProps
  };
};
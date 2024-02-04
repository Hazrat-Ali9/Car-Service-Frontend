import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["ownerState"];
import * as React from 'react';
import { useSlotProps } from '@mui/base/utils';
import MuiIconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { ClearIcon } from '../icons';
import { useLocaleText } from '../internals';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const useClearableField = ({
  clearable,
  fieldProps: forwardedFieldProps,
  InputProps: ForwardedInputProps,
  onClear,
  slots,
  slotProps,
  components,
  componentsProps
}) => {
  const localeText = useLocaleText();
  const IconButton = slots?.clearButton ?? components?.ClearButton ?? MuiIconButton;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = useSlotProps({
      elementType: IconButton,
      externalSlotProps: slotProps?.clearButton ?? componentsProps?.clearButton,
      ownerState: {},
      className: 'clearButton',
      additionalProps: {
        title: localeText.fieldClearLabel
      }
    }),
    iconButtonProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded);
  const EndClearIcon = slots?.clearIcon ?? components?.ClearIcon ?? ClearIcon;
  const endClearIconProps = useSlotProps({
    elementType: EndClearIcon,
    externalSlotProps: slotProps?.clearIcon ?? componentsProps?.clearIcon,
    ownerState: {}
  });
  const InputProps = _extends({}, ForwardedInputProps, {
    endAdornment: /*#__PURE__*/_jsxs(React.Fragment, {
      children: [clearable && /*#__PURE__*/_jsx(InputAdornment, {
        position: "end",
        sx: {
          marginRight: ForwardedInputProps?.endAdornment ? -1 : -1.5
        },
        children: /*#__PURE__*/_jsx(IconButton, _extends({}, iconButtonProps, {
          onClick: onClear,
          children: /*#__PURE__*/_jsx(EndClearIcon, _extends({
            fontSize: "small"
          }, endClearIconProps))
        }))
      }), ForwardedInputProps?.endAdornment]
    })
  });
  const fieldProps = _extends({}, forwardedFieldProps, {
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
    }, ...(Array.isArray(forwardedFieldProps.sx) ? forwardedFieldProps.sx : [forwardedFieldProps.sx])]
  });
  return {
    InputProps,
    fieldProps
  };
};
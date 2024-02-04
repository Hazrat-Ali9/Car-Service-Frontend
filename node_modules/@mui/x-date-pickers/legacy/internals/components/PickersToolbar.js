import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import { getPickersToolbarUtilityClass } from './pickersToolbarClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
    isLandscape = ownerState.isLandscape;
  var slots = {
    root: ['root'],
    content: ['content'],
    penIconButton: ['penIconButton', isLandscape && 'penIconButtonLandscape']
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled('div', {
  name: 'MuiPickersToolbar',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})(function (_ref) {
  var theme = _ref.theme,
    ownerState = _ref.ownerState;
  return _extends({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3)
  }, ownerState.isLandscape && {
    height: 'auto',
    maxWidth: 160,
    padding: 16,
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  });
});
var PickersToolbarContent = styled('div', {
  name: 'MuiPickersToolbar',
  slot: 'Content',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.content;
  }
})(function (_ref2) {
  var _ownerState$landscape;
  var ownerState = _ref2.ownerState;
  return {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: ownerState.isLandscape ? 'flex-start' : 'space-between',
    flexDirection: ownerState.isLandscape ? (_ownerState$landscape = ownerState.landscapeDirection) != null ? _ownerState$landscape : 'column' : 'row',
    flex: 1,
    alignItems: ownerState.isLandscape ? 'flex-start' : 'center'
  };
});
export var PickersToolbar = /*#__PURE__*/React.forwardRef(function PickersToolbar(inProps, ref) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiPickersToolbar'
  });
  var children = props.children,
    className = props.className,
    toolbarTitle = props.toolbarTitle,
    hidden = props.hidden,
    titleId = props.titleId;
  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/_jsxs(PickersToolbarRoot, {
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    children: [/*#__PURE__*/_jsx(Typography, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), /*#__PURE__*/_jsx(PickersToolbarContent, {
      className: classes.content,
      ownerState: ownerState,
      children: children
    })]
  });
});
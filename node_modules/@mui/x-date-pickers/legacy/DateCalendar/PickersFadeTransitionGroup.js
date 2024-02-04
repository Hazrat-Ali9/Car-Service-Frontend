import * as React from 'react';
import clsx from 'clsx';
import { TransitionGroup } from 'react-transition-group';
import Fade from '@mui/material/Fade';
import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import { getPickersFadeTransitionGroupUtilityClass } from './pickersFadeTransitionGroupClasses';
import { jsx as _jsx } from "react/jsx-runtime";
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
var PickersFadeTransitionGroupRoot = styled(TransitionGroup, {
  name: 'MuiPickersFadeTransitionGroup',
  slot: 'Root',
  overridesResolver: function overridesResolver(_, styles) {
    return styles.root;
  }
})({
  display: 'block',
  position: 'relative'
});

/**
 * @ignore - do not document.
 */
export function PickersFadeTransitionGroup(inProps) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiPickersFadeTransitionGroup'
  });
  var children = props.children,
    className = props.className,
    reduceAnimations = props.reduceAnimations,
    transKey = props.transKey;
  var classes = useUtilityClasses(props);
  var theme = useTheme();
  if (reduceAnimations) {
    return children;
  }
  return /*#__PURE__*/_jsx(PickersFadeTransitionGroupRoot, {
    className: clsx(classes.root, className),
    children: /*#__PURE__*/_jsx(Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children: children
    }, transKey)
  });
}
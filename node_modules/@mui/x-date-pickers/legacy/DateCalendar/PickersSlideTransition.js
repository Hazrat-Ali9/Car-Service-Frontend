import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
import * as React from 'react';
import clsx from 'clsx';
import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getPickersSlideTransitionUtilityClass, pickersSlideTransitionClasses } from './pickersSlideTransitionClasses';
import { jsx as _jsx } from "react/jsx-runtime";
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes,
    slideDirection = ownerState.slideDirection;
  var slots = {
    root: ['root'],
    exit: ['slideExit'],
    enterActive: ['slideEnterActive'],
    enter: ["slideEnter-".concat(slideDirection)],
    exitActive: ["slideExitActiveLeft-".concat(slideDirection)]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
var PickersSlideTransitionRoot = styled(TransitionGroup, {
  name: 'MuiPickersSlideTransition',
  slot: 'Root',
  overridesResolver: function overridesResolver(_, styles) {
    return [styles.root, _defineProperty({}, ".".concat(pickersSlideTransitionClasses['slideEnter-left']), styles['slideEnter-left']), _defineProperty({}, ".".concat(pickersSlideTransitionClasses['slideEnter-right']), styles['slideEnter-right']), _defineProperty({}, ".".concat(pickersSlideTransitionClasses.slideEnterActive), styles.slideEnterActive), _defineProperty({}, ".".concat(pickersSlideTransitionClasses.slideExit), styles.slideExit), _defineProperty({}, ".".concat(pickersSlideTransitionClasses['slideExitActiveLeft-left']), styles['slideExitActiveLeft-left']), _defineProperty({}, ".".concat(pickersSlideTransitionClasses['slideExitActiveLeft-right']), styles['slideExitActiveLeft-right'])];
  }
})(function (_ref7) {
  var theme = _ref7.theme;
  var slideTransition = theme.transitions.create('transform', {
    duration: theme.transitions.duration.complex,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    display: 'block',
    position: 'relative',
    overflowX: 'hidden',
    '& > *': {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0
    }
  }, "& .".concat(pickersSlideTransitionClasses['slideEnter-left']), {
    willChange: 'transform',
    transform: 'translate(100%)',
    zIndex: 1
  }), "& .".concat(pickersSlideTransitionClasses['slideEnter-right']), {
    willChange: 'transform',
    transform: 'translate(-100%)',
    zIndex: 1
  }), "& .".concat(pickersSlideTransitionClasses.slideEnterActive), {
    transform: 'translate(0%)',
    transition: slideTransition
  }), "& .".concat(pickersSlideTransitionClasses.slideExit), {
    transform: 'translate(0%)'
  }), "& .".concat(pickersSlideTransitionClasses['slideExitActiveLeft-left']), {
    willChange: 'transform',
    transform: 'translate(-100%)',
    transition: slideTransition,
    zIndex: 0
  }), "& .".concat(pickersSlideTransitionClasses['slideExitActiveLeft-right']), {
    willChange: 'transform',
    transform: 'translate(100%)',
    transition: slideTransition,
    zIndex: 0
  });
});

/**
 * @ignore - do not document.
 */
export function PickersSlideTransition(inProps) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiPickersSlideTransition'
  });
  var children = props.children,
    className = props.className,
    reduceAnimations = props.reduceAnimations,
    slideDirection = props.slideDirection,
    transKey = props.transKey,
    providedClasses = props.classes,
    other = _objectWithoutProperties(props, _excluded);
  var classes = useUtilityClasses(props);
  var theme = useTheme();
  if (reduceAnimations) {
    return /*#__PURE__*/_jsx("div", {
      className: clsx(classes.root, className),
      children: children
    });
  }
  var transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /*#__PURE__*/_jsx(PickersSlideTransitionRoot, {
    className: clsx(classes.root, className),
    childFactory: function childFactory(element) {
      return /*#__PURE__*/React.cloneElement(element, {
        classNames: transitionClasses
      });
    },
    role: "presentation",
    children: /*#__PURE__*/_jsx(CSSTransition, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children: children
    }), transKey)
  });
}
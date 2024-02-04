import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import { unstable_useControlled as useControlled } from '@mui/utils';
var warnedOnceNotValidView = false;
export function useViews(_ref) {
  var _views, _views2;
  var onChange = _ref.onChange,
    onViewChange = _ref.onViewChange,
    openTo = _ref.openTo,
    inView = _ref.view,
    views = _ref.views,
    autoFocus = _ref.autoFocus,
    inFocusedView = _ref.focusedView,
    onFocusedViewChange = _ref.onFocusedViewChange;
  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnceNotValidView) {
      if (inView != null && !views.includes(inView)) {
        console.warn("MUI: `view=\"".concat(inView, "\"` is not a valid prop."), "It must be an element of `views=[\"".concat(views.join('", "'), "\"]`."));
        warnedOnceNotValidView = true;
      }
      if (inView == null && openTo != null && !views.includes(openTo)) {
        console.warn("MUI: `openTo=\"".concat(openTo, "\"` is not a valid prop."), "It must be an element of `views=[\"".concat(views.join('", "'), "\"]`."));
        warnedOnceNotValidView = true;
      }
    }
  }
  var previousOpenTo = React.useRef(openTo);
  var previousViews = React.useRef(views);
  var defaultView = React.useRef(views.includes(openTo) ? openTo : views[0]);
  var _useControlled = useControlled({
      name: 'useViews',
      state: 'view',
      controlled: inView,
      default: defaultView.current
    }),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    view = _useControlled2[0],
    setView = _useControlled2[1];
  var defaultFocusedView = React.useRef(autoFocus ? view : null);
  var _useControlled3 = useControlled({
      name: 'useViews',
      state: 'focusedView',
      controlled: inFocusedView,
      default: defaultFocusedView.current
    }),
    _useControlled4 = _slicedToArray(_useControlled3, 2),
    focusedView = _useControlled4[0],
    setFocusedView = _useControlled4[1];
  React.useEffect(function () {
    // Update the current view when `openTo` or `views` props change
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some(function (previousView) {
      return !views.includes(previousView);
    })) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  var viewIndex = views.indexOf(view);
  var previousView = (_views = views[viewIndex - 1]) != null ? _views : null;
  var nextView = (_views2 = views[viewIndex + 1]) != null ? _views2 : null;
  var handleFocusedViewChange = useEventCallback(function (viewToFocus, hasFocus) {
    if (hasFocus) {
      // Focus event
      setFocusedView(viewToFocus);
    } else {
      // Blur event
      setFocusedView(function (prevFocusedView) {
        return viewToFocus === prevFocusedView ? null : prevFocusedView;
      } // If false the blur is due to view switching
      );
    }
    onFocusedViewChange == null || onFocusedViewChange(viewToFocus, hasFocus);
  });
  var handleChangeView = useEventCallback(function (newView) {
    // always keep the focused view in sync
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  var goToNextView = useEventCallback(function () {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  var setValueAndGoToNextView = useEventCallback(function (value, currentViewSelectionState, selectedView) {
    var isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
    var hasMoreViews = selectedView ?
    // handles case like `DateTimePicker`, where a view might return a `finish` selection state
    // but we it's not the final view given all `views` -> overall selection state should be `partial`.
    views.indexOf(selectedView) < views.length - 1 : Boolean(nextView);
    var globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? 'partial' : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);
    // Detects if the selected view is not the active one.
    // Can happen if multiple views are displayed, like in `DesktopDateTimePicker` or `MultiSectionDigitalClock`.
    if (selectedView && selectedView !== view) {
      var nextViewAfterSelected = views[views.indexOf(selectedView) + 1];
      if (nextViewAfterSelected) {
        // move to next view after the selected one
        handleChangeView(nextViewAfterSelected);
      }
    } else if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  return {
    view: view,
    setView: handleChangeView,
    focusedView: focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView: nextView,
    previousView: previousView,
    // Always return up to date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView: goToNextView,
    setValueAndGoToNextView: setValueAndGoToNextView
  };
}
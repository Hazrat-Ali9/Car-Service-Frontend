import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import { resolveComponentProps } from '@mui/base/utils';
import { DateCalendar } from '../DateCalendar';
import { multiSectionDigitalClockSectionClasses } from '../MultiSectionDigitalClock';
import { DateTimeViewWrapper } from '../internals/components/DateTimeViewWrapper';
import { isInternalTimeView } from '../internals/utils/time-utils';
import { isDatePickerView } from '../internals/utils/date-utils';
import { renderDigitalClockTimeView, renderMultiSectionDigitalClockTimeView } from '../timeViewRenderers';
import { digitalClockClasses } from '../DigitalClock';
import { VIEW_HEIGHT } from '../internals/constants/dimensions';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var renderDesktopDateTimeView = function renderDesktopDateTimeView(_ref) {
  var _resolveComponentProp, _slotProps$actionBar;
  var view = _ref.view,
    onViewChange = _ref.onViewChange,
    views = _ref.views,
    focusedView = _ref.focusedView,
    onFocusedViewChange = _ref.onFocusedViewChange,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    referenceDate = _ref.referenceDate,
    onChange = _ref.onChange,
    className = _ref.className,
    classes = _ref.classes,
    disableFuture = _ref.disableFuture,
    disablePast = _ref.disablePast,
    minDate = _ref.minDate,
    minTime = _ref.minTime,
    maxDate = _ref.maxDate,
    maxTime = _ref.maxTime,
    shouldDisableDate = _ref.shouldDisableDate,
    shouldDisableMonth = _ref.shouldDisableMonth,
    shouldDisableYear = _ref.shouldDisableYear,
    shouldDisableTime = _ref.shouldDisableTime,
    shouldDisableClock = _ref.shouldDisableClock,
    reduceAnimations = _ref.reduceAnimations,
    minutesStep = _ref.minutesStep,
    ampm = _ref.ampm,
    onMonthChange = _ref.onMonthChange,
    monthsPerRow = _ref.monthsPerRow,
    onYearChange = _ref.onYearChange,
    yearsPerRow = _ref.yearsPerRow,
    defaultCalendarMonth = _ref.defaultCalendarMonth,
    components = _ref.components,
    componentsProps = _ref.componentsProps,
    slots = _ref.slots,
    slotProps = _ref.slotProps,
    loading = _ref.loading,
    renderLoading = _ref.renderLoading,
    disableHighlightToday = _ref.disableHighlightToday,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    showDaysOutsideCurrentMonth = _ref.showDaysOutsideCurrentMonth,
    dayOfWeekFormatter = _ref.dayOfWeekFormatter,
    sx = _ref.sx,
    autoFocus = _ref.autoFocus,
    fixedWeekNumber = _ref.fixedWeekNumber,
    displayWeekNumber = _ref.displayWeekNumber,
    timezone = _ref.timezone,
    disableIgnoringDatePartForTimeValidation = _ref.disableIgnoringDatePartForTimeValidation,
    timeSteps = _ref.timeSteps,
    skipDisabled = _ref.skipDisabled,
    timeViewsCount = _ref.timeViewsCount,
    shouldRenderTimeInASingleColumn = _ref.shouldRenderTimeInASingleColumn;
  var isActionBarVisible = !!((_resolveComponentProp = resolveComponentProps((_slotProps$actionBar = slotProps == null ? void 0 : slotProps.actionBar) != null ? _slotProps$actionBar : componentsProps == null ? void 0 : componentsProps.actionBar, {})) != null && (_resolveComponentProp = _resolveComponentProp.actions) != null && _resolveComponentProp.length);
  var commonTimeProps = {
    view: isInternalTimeView(view) ? view : 'hours',
    onViewChange: onViewChange,
    focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
    onFocusedViewChange: onFocusedViewChange,
    views: views.filter(isInternalTimeView),
    value: value,
    defaultValue: defaultValue,
    referenceDate: referenceDate,
    onChange: onChange,
    className: className,
    classes: classes,
    disableFuture: disableFuture,
    disablePast: disablePast,
    minTime: minTime,
    maxTime: maxTime,
    shouldDisableTime: shouldDisableTime,
    shouldDisableClock: shouldDisableClock,
    minutesStep: minutesStep,
    ampm: ampm,
    components: components,
    componentsProps: componentsProps,
    slots: slots,
    slotProps: slotProps,
    readOnly: readOnly,
    disabled: disabled,
    autoFocus: autoFocus,
    disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
    timeSteps: timeSteps,
    skipDisabled: skipDisabled,
    timezone: timezone
  };
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsxs(DateTimeViewWrapper, {
      children: [/*#__PURE__*/_jsx(DateCalendar, {
        view: isDatePickerView(view) ? view : 'day',
        onViewChange: onViewChange,
        views: views.filter(isDatePickerView),
        focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
        onFocusedViewChange: onFocusedViewChange,
        value: value,
        defaultValue: defaultValue,
        referenceDate: referenceDate,
        onChange: onChange,
        className: className,
        classes: classes,
        disableFuture: disableFuture,
        disablePast: disablePast,
        minDate: minDate,
        maxDate: maxDate,
        shouldDisableDate: shouldDisableDate,
        shouldDisableMonth: shouldDisableMonth,
        shouldDisableYear: shouldDisableYear,
        reduceAnimations: reduceAnimations,
        onMonthChange: onMonthChange,
        monthsPerRow: monthsPerRow,
        onYearChange: onYearChange,
        yearsPerRow: yearsPerRow,
        defaultCalendarMonth: defaultCalendarMonth,
        components: components,
        componentsProps: componentsProps,
        slots: slots,
        slotProps: slotProps,
        loading: loading,
        renderLoading: renderLoading,
        disableHighlightToday: disableHighlightToday,
        readOnly: readOnly,
        disabled: disabled,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        dayOfWeekFormatter: dayOfWeekFormatter,
        sx: sx,
        autoFocus: autoFocus,
        fixedWeekNumber: fixedWeekNumber,
        displayWeekNumber: displayWeekNumber,
        timezone: timezone
      }), timeViewsCount > 0 && /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx(Divider, {
          orientation: "vertical"
        }), shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView(_extends({}, commonTimeProps, {
          view: 'hours',
          views: ['hours'],
          focusedView: focusedView && isInternalTimeView(focusedView) ? 'hours' : null,
          sx: _extends(_defineProperty({
            width: 'auto'
          }, "&.".concat(digitalClockClasses.root), {
            maxHeight: VIEW_HEIGHT
          }), Array.isArray(sx) ? sx : [sx])
        })) : renderMultiSectionDigitalClockTimeView(_extends({}, commonTimeProps, {
          view: isInternalTimeView(view) ? view : 'hours',
          views: views.filter(isInternalTimeView),
          focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
          sx: _extends(_defineProperty({
            borderBottom: 0,
            width: 'auto'
          }, ".".concat(multiSectionDigitalClockSectionClasses.root), {
            maxHeight: '100%'
          }), Array.isArray(sx) ? sx : [sx])
        }))]
      })]
    }), isActionBarVisible && /*#__PURE__*/_jsx(Divider, {})]
  });
};
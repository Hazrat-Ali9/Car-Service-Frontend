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
export const renderDesktopDateTimeView = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  minTime,
  maxDate,
  maxTime,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  shouldDisableTime,
  shouldDisableClock,
  reduceAnimations,
  minutesStep,
  ampm,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timeViewsCount,
  shouldRenderTimeInASingleColumn
}) => {
  var _resolveComponentProp, _slotProps$actionBar;
  const isActionBarVisible = !!((_resolveComponentProp = resolveComponentProps((_slotProps$actionBar = slotProps == null ? void 0 : slotProps.actionBar) != null ? _slotProps$actionBar : componentsProps == null ? void 0 : componentsProps.actionBar, {})) != null && (_resolveComponentProp = _resolveComponentProp.actions) != null && _resolveComponentProp.length);
  const commonTimeProps = {
    view: isInternalTimeView(view) ? view : 'hours',
    onViewChange,
    focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
    onFocusedViewChange,
    views: views.filter(isInternalTimeView),
    value,
    defaultValue,
    referenceDate,
    onChange,
    className,
    classes,
    disableFuture,
    disablePast,
    minTime,
    maxTime,
    shouldDisableTime,
    shouldDisableClock,
    minutesStep,
    ampm,
    components,
    componentsProps,
    slots,
    slotProps,
    readOnly,
    disabled,
    autoFocus,
    disableIgnoringDatePartForTimeValidation,
    timeSteps,
    skipDisabled,
    timezone
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
          sx: _extends({
            width: 'auto',
            [`&.${digitalClockClasses.root}`]: {
              maxHeight: VIEW_HEIGHT
            }
          }, Array.isArray(sx) ? sx : [sx])
        })) : renderMultiSectionDigitalClockTimeView(_extends({}, commonTimeProps, {
          view: isInternalTimeView(view) ? view : 'hours',
          views: views.filter(isInternalTimeView),
          focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
          sx: _extends({
            borderBottom: 0,
            width: 'auto',
            [`.${multiSectionDigitalClockSectionClasses.root}`]: {
              maxHeight: '100%'
            }
          }, Array.isArray(sx) ? sx : [sx])
        }))]
      })]
    }), isActionBarVisible && /*#__PURE__*/_jsx(Divider, {})]
  });
};
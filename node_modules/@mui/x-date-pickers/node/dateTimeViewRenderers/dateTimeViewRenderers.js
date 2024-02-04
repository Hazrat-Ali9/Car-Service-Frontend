"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDesktopDateTimeView = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _utils = require("@mui/base/utils");
var _DateCalendar = require("../DateCalendar");
var _MultiSectionDigitalClock = require("../MultiSectionDigitalClock");
var _DateTimeViewWrapper = require("../internals/components/DateTimeViewWrapper");
var _timeUtils = require("../internals/utils/time-utils");
var _dateUtils = require("../internals/utils/date-utils");
var _timeViewRenderers = require("../timeViewRenderers");
var _DigitalClock = require("../DigitalClock");
var _dimensions = require("../internals/constants/dimensions");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const renderDesktopDateTimeView = ({
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
  const isActionBarVisible = !!(0, _utils.resolveComponentProps)(slotProps?.actionBar ?? componentsProps?.actionBar, {})?.actions?.length;
  const commonTimeProps = {
    view: (0, _timeUtils.isInternalTimeView)(view) ? view : 'hours',
    onViewChange,
    focusedView: focusedView && (0, _timeUtils.isInternalTimeView)(focusedView) ? focusedView : null,
    onFocusedViewChange,
    views: views.filter(_timeUtils.isInternalTimeView),
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_DateTimeViewWrapper.DateTimeViewWrapper, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DateCalendar.DateCalendar, {
        view: (0, _dateUtils.isDatePickerView)(view) ? view : 'day',
        onViewChange: onViewChange,
        views: views.filter(_dateUtils.isDatePickerView),
        focusedView: focusedView && (0, _dateUtils.isDatePickerView)(focusedView) ? focusedView : null,
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
      }), timeViewsCount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
          orientation: "vertical"
        }), shouldRenderTimeInASingleColumn ? (0, _timeViewRenderers.renderDigitalClockTimeView)((0, _extends2.default)({}, commonTimeProps, {
          view: 'hours',
          views: ['hours'],
          focusedView: focusedView && (0, _timeUtils.isInternalTimeView)(focusedView) ? 'hours' : null,
          sx: (0, _extends2.default)({
            width: 'auto',
            [`&.${_DigitalClock.digitalClockClasses.root}`]: {
              maxHeight: _dimensions.VIEW_HEIGHT
            }
          }, Array.isArray(sx) ? sx : [sx])
        })) : (0, _timeViewRenderers.renderMultiSectionDigitalClockTimeView)((0, _extends2.default)({}, commonTimeProps, {
          view: (0, _timeUtils.isInternalTimeView)(view) ? view : 'hours',
          views: views.filter(_timeUtils.isInternalTimeView),
          focusedView: focusedView && (0, _timeUtils.isInternalTimeView)(focusedView) ? focusedView : null,
          sx: (0, _extends2.default)({
            borderBottom: 0,
            width: 'auto',
            [`.${_MultiSectionDigitalClock.multiSectionDigitalClockSectionClasses.root}`]: {
              maxHeight: '100%'
            }
          }, Array.isArray(sx) ? sx : [sx])
        }))]
      })]
    }), isActionBarVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {})]
  });
};
exports.renderDesktopDateTimeView = renderDesktopDateTimeView;
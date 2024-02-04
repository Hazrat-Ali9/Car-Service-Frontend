import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["ampm", "timeSteps", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "skipDisabled", "timezone"];
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { styled, useThemeProps } from '@mui/material/styles';
import useEventCallback from '@mui/utils/useEventCallback';
import composeClasses from '@mui/utils/composeClasses';
import { useUtils, useNow, useLocaleText } from '../internals/hooks/useUtils';
import { convertValueToMeridiem, createIsAfterIgnoreDatePart } from '../internals/utils/time-utils';
import { useViews } from '../internals/hooks/useViews';
import { useMeridiemMode } from '../internals/hooks/date-helpers-hooks';
import { PickerViewRoot } from '../internals/components/PickerViewRoot';
import { getMultiSectionDigitalClockUtilityClass } from './multiSectionDigitalClockClasses';
import { MultiSectionDigitalClockSection } from './MultiSectionDigitalClockSection';
import { getHourSectionOptions, getTimeSectionOptions } from './MultiSectionDigitalClock.utils';
import { useControlledValueWithTimezone } from '../internals/hooks/useValueWithTimezone';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { useClockReferenceDate } from '../internals/hooks/useClockReferenceDate';
import { formatMeridiem } from '../internals/utils/date-utils';
import { jsx as _jsx } from "react/jsx-runtime";
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
var MultiSectionDigitalClockRoot = styled(PickerViewRoot, {
  name: 'MuiMultiSectionDigitalClock',
  slot: 'Root',
  overridesResolver: function overridesResolver(_, styles) {
    return styles.root;
  }
})(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
  };
});
/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [DigitalClock](https://mui.com/x/react-date-pickers/digital-clock/)
 *
 * API:
 *
 * - [MultiSectionDigitalClock API](https://mui.com/x/api/date-pickers/multi-section-digital-clock/)
 */
export var MultiSectionDigitalClock = /*#__PURE__*/React.forwardRef(function MultiSectionDigitalClock(inProps, ref) {
  var utils = useUtils();
  var props = useThemeProps({
    props: inProps,
    name: 'MuiMultiSectionDigitalClock'
  });
  var _props$ampm = props.ampm,
    ampm = _props$ampm === void 0 ? utils.is12HourCycleInCurrentLocale() : _props$ampm,
    inTimeSteps = props.timeSteps,
    autoFocus = props.autoFocus,
    components = props.components,
    componentsProps = props.componentsProps,
    slots = props.slots,
    slotProps = props.slotProps,
    valueProp = props.value,
    defaultValue = props.defaultValue,
    referenceDateProp = props.referenceDate,
    _props$disableIgnorin = props.disableIgnoringDatePartForTimeValidation,
    disableIgnoringDatePartForTimeValidation = _props$disableIgnorin === void 0 ? false : _props$disableIgnorin,
    maxTime = props.maxTime,
    minTime = props.minTime,
    disableFuture = props.disableFuture,
    disablePast = props.disablePast,
    _props$minutesStep = props.minutesStep,
    minutesStep = _props$minutesStep === void 0 ? 1 : _props$minutesStep,
    shouldDisableClock = props.shouldDisableClock,
    shouldDisableTime = props.shouldDisableTime,
    onChange = props.onChange,
    inView = props.view,
    _props$views = props.views,
    inViews = _props$views === void 0 ? ['hours', 'minutes'] : _props$views,
    openTo = props.openTo,
    onViewChange = props.onViewChange,
    inFocusedView = props.focusedView,
    onFocusedViewChange = props.onFocusedViewChange,
    className = props.className,
    disabled = props.disabled,
    readOnly = props.readOnly,
    _props$skipDisabled = props.skipDisabled,
    skipDisabled = _props$skipDisabled === void 0 ? false : _props$skipDisabled,
    timezoneProp = props.timezone,
    other = _objectWithoutProperties(props, _excluded);
  var _useControlledValueWi = useControlledValueWithTimezone({
      name: 'MultiSectionDigitalClock',
      timezone: timezoneProp,
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChange,
      valueManager: singleItemValueManager
    }),
    value = _useControlledValueWi.value,
    handleRawValueChange = _useControlledValueWi.handleValueChange,
    timezone = _useControlledValueWi.timezone;
  var localeText = useLocaleText();
  var now = useNow(timezone);
  var timeSteps = React.useMemo(function () {
    return _extends({
      hours: 1,
      minutes: 5,
      seconds: 5
    }, inTimeSteps);
  }, [inTimeSteps]);
  var valueOrReferenceDate = useClockReferenceDate({
    value: value,
    referenceDate: referenceDateProp,
    utils: utils,
    props: props,
    timezone: timezone
  });
  var handleValueChange = useEventCallback(function (newValue, selectionState, selectedView) {
    return handleRawValueChange(newValue, selectionState, selectedView);
  });
  var views = React.useMemo(function () {
    if (!ampm || !inViews.includes('hours')) {
      return inViews;
    }
    return inViews.includes('meridiem') ? inViews : [].concat(_toConsumableArray(inViews), ['meridiem']);
  }, [ampm, inViews]);
  var _useViews = useViews({
      view: inView,
      views: views,
      openTo: openTo,
      onViewChange: onViewChange,
      onChange: handleValueChange,
      focusedView: inFocusedView,
      onFocusedViewChange: onFocusedViewChange
    }),
    view = _useViews.view,
    setValueAndGoToNextView = _useViews.setValueAndGoToNextView,
    focusedView = _useViews.focusedView;
  var handleMeridiemValueChange = useEventCallback(function (newValue) {
    setValueAndGoToNextView(newValue, 'finish', 'meridiem');
  });
  var _useMeridiemMode = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, 'finish'),
    meridiemMode = _useMeridiemMode.meridiemMode,
    handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;
  var isTimeDisabled = React.useCallback(function (rawValue, viewType) {
    var isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    var shouldCheckPastEnd = viewType === 'hours' || viewType === 'minutes' && views.includes('seconds');
    var containsValidTime = function containsValidTime(_ref2) {
      var start = _ref2.start,
        end = _ref2.end;
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    var isValidValue = function isValidValue(timeValue) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableClock != null && shouldDisableClock(timeValue, viewType)) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case 'hours':
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), 'hours');
          case 'minutes':
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), 'minutes');
          case 'seconds':
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), 'seconds');
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case 'hours':
        {
          var valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
          var dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
          var start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
          var end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
          return !containsValidTime({
            start: start,
            end: end
          }) || !isValidValue(valueWithMeridiem);
        }
      case 'minutes':
        {
          var dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
          var _start = utils.setSeconds(dateWithNewMinutes, 0);
          var _end = utils.setSeconds(dateWithNewMinutes, 59);
          return !containsValidTime({
            start: _start,
            end: _end
          }) || !isValidValue(rawValue, minutesStep);
        }
      case 'seconds':
        {
          var dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
          var _start2 = dateWithNewSeconds;
          var _end2 = dateWithNewSeconds;
          return !containsValidTime({
            start: _start2,
            end: _end2
          }) || !isValidValue(rawValue);
        }
      default:
        throw new Error('not supported');
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableClock, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  var buildViewProps = React.useCallback(function (viewToBuild) {
    switch (viewToBuild) {
      case 'hours':
        {
          return {
            onChange: function onChange(hours) {
              var valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
              setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), 'finish', 'hours');
            },
            items: getHourSectionOptions({
              now: now,
              value: value,
              ampm: ampm,
              utils: utils,
              isDisabled: function isDisabled(hours) {
                return disabled || isTimeDisabled(hours, 'hours');
              },
              timeStep: timeSteps.hours,
              resolveAriaLabel: localeText.hoursClockNumberText
            })
          };
        }
      case 'minutes':
        {
          return {
            onChange: function onChange(minutes) {
              setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minutes), 'finish', 'minutes');
            },
            items: getTimeSectionOptions({
              value: utils.getMinutes(valueOrReferenceDate),
              utils: utils,
              isDisabled: function isDisabled(minutes) {
                return disabled || isTimeDisabled(minutes, 'minutes');
              },
              resolveLabel: function resolveLabel(minutes) {
                return utils.format(utils.setMinutes(now, minutes), 'minutes');
              },
              timeStep: timeSteps.minutes,
              hasValue: !!value,
              resolveAriaLabel: localeText.minutesClockNumberText
            })
          };
        }
      case 'seconds':
        {
          return {
            onChange: function onChange(seconds) {
              setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, seconds), 'finish', 'seconds');
            },
            items: getTimeSectionOptions({
              value: utils.getSeconds(valueOrReferenceDate),
              utils: utils,
              isDisabled: function isDisabled(seconds) {
                return disabled || isTimeDisabled(seconds, 'seconds');
              },
              resolveLabel: function resolveLabel(seconds) {
                return utils.format(utils.setSeconds(now, seconds), 'seconds');
              },
              timeStep: timeSteps.seconds,
              hasValue: !!value,
              resolveAriaLabel: localeText.secondsClockNumberText
            })
          };
        }
      case 'meridiem':
        {
          var amLabel = formatMeridiem(utils, 'am');
          var pmLabel = formatMeridiem(utils, 'pm');
          return {
            onChange: handleMeridiemChange,
            items: [{
              value: 'am',
              label: amLabel,
              isSelected: function isSelected() {
                return !!value && meridiemMode === 'am';
              },
              ariaLabel: amLabel
            }, {
              value: 'pm',
              label: pmLabel,
              isSelected: function isSelected() {
                return !!value && meridiemMode === 'pm';
              },
              ariaLabel: pmLabel
            }]
          };
        }
      default:
        throw new Error("Unknown view: ".concat(viewToBuild, " found."));
    }
  }, [now, value, ampm, utils, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, disabled, isTimeDisabled, handleMeridiemChange]);
  var viewTimeOptions = React.useMemo(function () {
    return views.reduce(function (result, currentView) {
      return _extends({}, result, _defineProperty({}, currentView, buildViewProps(currentView)));
    }, {});
  }, [views, buildViewProps]);
  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(MultiSectionDigitalClockRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    role: "group"
  }, other, {
    children: Object.entries(viewTimeOptions).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        timeView = _ref4[0],
        viewOptions = _ref4[1];
      return /*#__PURE__*/_jsx(MultiSectionDigitalClockSection, {
        items: viewOptions.items,
        onChange: viewOptions.onChange,
        active: view === timeView,
        autoFocus: autoFocus != null ? autoFocus : focusedView === timeView,
        disabled: disabled,
        readOnly: readOnly,
        slots: slots != null ? slots : components,
        slotProps: slotProps != null ? slotProps : componentsProps,
        skipDisabled: skipDisabled,
        "aria-label": localeText.selectViewText(timeView)
      }, timeView);
    })
  }));
});
process.env.NODE_ENV !== "production" ? MultiSectionDigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Overrideable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: PropTypes.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: PropTypes.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: PropTypes.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: PropTypes.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']).isRequired)
} : void 0;
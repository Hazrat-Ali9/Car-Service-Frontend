import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@mui/system';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_useControlled as useControlled, unstable_composeClasses as composeClasses, unstable_useEventCallback as useEventCallback } from '@mui/utils';
import { PickersMonth } from './PickersMonth';
import { useUtils, useNow, useDefaultDates } from '../internals/hooks/useUtils';
import { getMonthCalendarUtilityClass } from './monthCalendarClasses';
import { applyDefaultDate, getMonthsInYear } from '../internals/utils/date-utils';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { SECTION_TYPE_GRANULARITY } from '../internals/utils/getDefaultReferenceDate';
import { useControlledValueWithTimezone } from '../internals/hooks/useValueWithTimezone';
import { DIALOG_WIDTH } from '../internals/constants/dimensions';
import { jsx as _jsx } from "react/jsx-runtime";
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
export function useMonthCalendarDefaultizedProps(props, name) {
  var utils = useUtils();
  var defaultDates = useDefaultDates();
  var themeProps = useThemeProps({
    props: props,
    name: name
  });
  return _extends({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var MonthCalendarRoot = styled('div', {
  name: 'MuiMonthCalendar',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'stretch',
  padding: '0 4px',
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: 'border-box'
});
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [MonthCalendar API](https://mui.com/x/api/date-pickers/month-calendar/)
 */
export var MonthCalendar = /*#__PURE__*/React.forwardRef(function MonthCalendar(inProps, ref) {
  var props = useMonthCalendarDefaultizedProps(inProps, 'MuiMonthCalendar');
  var className = props.className,
    valueProp = props.value,
    defaultValue = props.defaultValue,
    referenceDateProp = props.referenceDate,
    disabled = props.disabled,
    disableFuture = props.disableFuture,
    disablePast = props.disablePast,
    maxDate = props.maxDate,
    minDate = props.minDate,
    onChange = props.onChange,
    shouldDisableMonth = props.shouldDisableMonth,
    readOnly = props.readOnly,
    disableHighlightToday = props.disableHighlightToday,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
    onMonthFocus = props.onMonthFocus,
    hasFocus = props.hasFocus,
    onFocusedViewChange = props.onFocusedViewChange,
    _props$monthsPerRow = props.monthsPerRow,
    monthsPerRow = _props$monthsPerRow === void 0 ? 3 : _props$monthsPerRow,
    timezoneProp = props.timezone,
    gridLabelId = props.gridLabelId,
    other = _objectWithoutProperties(props, _excluded);
  var _useControlledValueWi = useControlledValueWithTimezone({
      name: 'MonthCalendar',
      timezone: timezoneProp,
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChange,
      valueManager: singleItemValueManager
    }),
    value = _useControlledValueWi.value,
    handleValueChange = _useControlledValueWi.handleValueChange,
    timezone = _useControlledValueWi.timezone;
  var now = useNow(timezone);
  var theme = useTheme();
  var utils = useUtils();
  var referenceDate = React.useMemo(function () {
    return singleItemValueManager.getInitialReferenceValue({
      value: value,
      utils: utils,
      props: props,
      timezone: timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.month
    });
  }, [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  var todayMonth = React.useMemo(function () {
    return utils.getMonth(now);
  }, [utils, now]);
  var selectedMonth = React.useMemo(function () {
    if (value != null) {
      return utils.getMonth(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getMonth(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  var _React$useState = React.useState(function () {
      return selectedMonth || todayMonth;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focusedMonth = _React$useState2[0],
    setFocusedMonth = _React$useState2[1];
  var _useControlled = useControlled({
      name: 'MonthCalendar',
      state: 'hasFocus',
      controlled: hasFocus,
      default: autoFocus != null ? autoFocus : false
    }),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    internalHasFocus = _useControlled2[0],
    setInternalHasFocus = _useControlled2[1];
  var changeHasFocus = useEventCallback(function (newHasFocus) {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  var isMonthDisabled = React.useCallback(function (dateToValidate) {
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    var monthToValidate = utils.startOfMonth(dateToValidate);
    if (utils.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
  var handleMonthSelection = useEventCallback(function (event, month) {
    if (readOnly) {
      return;
    }
    var newDate = utils.setMonth(value != null ? value : referenceDate, month);
    handleValueChange(newDate);
  });
  var focusMonth = useEventCallback(function (month) {
    if (!isMonthDisabled(utils.setMonth(value != null ? value : referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  React.useEffect(function () {
    setFocusedMonth(function (prevFocusedMonth) {
      return selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth;
    });
  }, [selectedMonth]);
  var handleKeyDown = useEventCallback(function (event, month) {
    var monthsInYear = 12;
    var monthsInRow = 3;
    switch (event.key) {
      case 'ArrowUp':
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusMonth((monthsInYear + month + (theme.direction === 'ltr' ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusMonth((monthsInYear + month + (theme.direction === 'ltr' ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  var handleMonthFocus = useEventCallback(function (event, month) {
    focusMonth(month);
  });
  var handleMonthBlur = useEventCallback(function (event, month) {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /*#__PURE__*/_jsx(MonthCalendarRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: getMonthsInYear(utils, value != null ? value : referenceDate).map(function (month) {
      var monthNumber = utils.getMonth(month);
      var monthText = utils.format(month, 'monthShort');
      var monthLabel = utils.format(month, 'month');
      var isSelected = monthNumber === selectedMonth;
      var isDisabled = disabled || isMonthDisabled(month);
      return /*#__PURE__*/_jsx(PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? 'date' : undefined,
        "aria-label": monthLabel,
        monthsPerRow: monthsPerRow,
        children: monthText
      }, monthText);
    })
  }));
});
process.env.NODE_ENV !== "production" ? MonthCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * className applied to the root element.
   */
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true` picker is disabled
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  gridLabelId: PropTypes.string,
  hasFocus: PropTypes.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: PropTypes.any,
  /**
   * Minimal selectable date.
   */
  minDate: PropTypes.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: PropTypes.func,
  onFocusedViewChange: PropTypes.func,
  onMonthFocus: PropTypes.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: PropTypes.any,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
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
  value: PropTypes.any
} : void 0;
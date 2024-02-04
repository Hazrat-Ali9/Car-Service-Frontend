import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@mui/system';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_useForkRef as useForkRef, unstable_composeClasses as composeClasses, unstable_useControlled as useControlled, unstable_useEventCallback as useEventCallback } from '@mui/utils';
import { PickersYear } from './PickersYear';
import { useUtils, useNow, useDefaultDates } from '../internals/hooks/useUtils';
import { getYearCalendarUtilityClass } from './yearCalendarClasses';
import { applyDefaultDate } from '../internals/utils/date-utils';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { SECTION_TYPE_GRANULARITY } from '../internals/utils/getDefaultReferenceDate';
import { useControlledValueWithTimezone } from '../internals/hooks/useValueWithTimezone';
import { DIALOG_WIDTH, MAX_CALENDAR_HEIGHT } from '../internals/constants/dimensions';
import { jsx as _jsx } from "react/jsx-runtime";
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  var _themeProps$yearsPerR;
  var utils = useUtils();
  var defaultDates = useDefaultDates();
  var themeProps = useThemeProps({
    props: props,
    name: name
  });
  return _extends({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    yearsPerRow: (_themeProps$yearsPerR = themeProps.yearsPerRow) != null ? _themeProps$yearsPerR : 3,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var YearCalendarRoot = styled('div', {
  name: 'MuiYearCalendar',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflowY: 'auto',
  height: '100%',
  padding: '0 4px',
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: 'border-box',
  position: 'relative'
});
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [YearCalendar API](https://mui.com/x/api/date-pickers/year-calendar/)
 */
export var YearCalendar = /*#__PURE__*/React.forwardRef(function YearCalendar(inProps, ref) {
  var props = useYearCalendarDefaultizedProps(inProps, 'MuiYearCalendar');
  var autoFocus = props.autoFocus,
    className = props.className,
    valueProp = props.value,
    defaultValue = props.defaultValue,
    referenceDateProp = props.referenceDate,
    disabled = props.disabled,
    disableFuture = props.disableFuture,
    disablePast = props.disablePast,
    maxDate = props.maxDate,
    minDate = props.minDate,
    onChange = props.onChange,
    readOnly = props.readOnly,
    shouldDisableYear = props.shouldDisableYear,
    disableHighlightToday = props.disableHighlightToday,
    onYearFocus = props.onYearFocus,
    hasFocus = props.hasFocus,
    onFocusedViewChange = props.onFocusedViewChange,
    yearsPerRow = props.yearsPerRow,
    timezoneProp = props.timezone,
    gridLabelId = props.gridLabelId,
    other = _objectWithoutProperties(props, _excluded);
  var _useControlledValueWi = useControlledValueWithTimezone({
      name: 'YearCalendar',
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
      granularity: SECTION_TYPE_GRANULARITY.year
    });
  }, [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  var todayYear = React.useMemo(function () {
    return utils.getYear(now);
  }, [utils, now]);
  var selectedYear = React.useMemo(function () {
    if (value != null) {
      return utils.getYear(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getYear(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  var _React$useState = React.useState(function () {
      return selectedYear || todayYear;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focusedYear = _React$useState2[0],
    setFocusedYear = _React$useState2[1];
  var _useControlled = useControlled({
      name: 'YearCalendar',
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
  var isYearDisabled = React.useCallback(function (dateToValidate) {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    var yearToValidate = utils.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
  var handleYearSelection = useEventCallback(function (event, year) {
    if (readOnly) {
      return;
    }
    var newDate = utils.setYear(value != null ? value : referenceDate, year);
    handleValueChange(newDate);
  });
  var focusYear = useEventCallback(function (year) {
    if (!isYearDisabled(utils.setYear(value != null ? value : referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus == null || onYearFocus(year);
    }
  });
  React.useEffect(function () {
    setFocusedYear(function (prevFocusedYear) {
      return selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear;
    });
  }, [selectedYear]);
  var handleKeyDown = useEventCallback(function (event, year) {
    switch (event.key) {
      case 'ArrowUp':
        focusYear(year - yearsPerRow);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusYear(year + yearsPerRow);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusYear(year + (theme.direction === 'ltr' ? -1 : 1));
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusYear(year + (theme.direction === 'ltr' ? 1 : -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  var handleYearFocus = useEventCallback(function (event, year) {
    focusYear(year);
  });
  var handleYearBlur = useEventCallback(function (event, year) {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  var scrollerRef = React.useRef(null);
  var handleRef = useForkRef(ref, scrollerRef);
  React.useEffect(function () {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    var tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }

    // Taken from useScroll in x-data-grid, but vertically centered
    var offsetHeight = tabbableButton.offsetHeight;
    var offsetTop = tabbableButton.offsetTop;
    var clientHeight = scrollerRef.current.clientHeight;
    var scrollTop = scrollerRef.current.scrollTop;
    var elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      // Button already visible
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  return /*#__PURE__*/_jsx(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: utils.getYearRange(minDate, maxDate).map(function (year) {
      var yearNumber = utils.getYear(year);
      var isSelected = yearNumber === selectedYear;
      var isDisabled = disabled || isYearDisabled(year);
      return /*#__PURE__*/_jsx(PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? 'date' : undefined,
        yearsPerRow: yearsPerRow,
        children: utils.format(year, 'year')
      }, utils.format(year, 'year'));
    })
  }));
});
process.env.NODE_ENV !== "production" ? YearCalendar.propTypes = {
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
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: PropTypes.func,
  onFocusedViewChange: PropTypes.func,
  onYearFocus: PropTypes.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: PropTypes.any,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
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
  value: PropTypes.any,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4])
} : void 0;
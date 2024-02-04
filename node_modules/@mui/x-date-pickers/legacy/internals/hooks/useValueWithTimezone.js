import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import useControlled from '@mui/utils/useControlled';
import { useUtils } from './useUtils';
/**
 * Hooks making sure that:
 * - The value returned by `onChange` always have the timezone of `props.value` or `props.defaultValue` if defined
 * - The value rendered is always the one from `props.timezone` if defined
 */
export var useValueWithTimezone = function useValueWithTimezone(_ref) {
  var _ref2, _ref3;
  var timezoneProp = _ref.timezone,
    valueProp = _ref.value,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    valueManager = _ref.valueManager;
  var utils = useUtils();
  var firstDefaultValue = React.useRef(defaultValue);
  var inputValue = (_ref2 = valueProp != null ? valueProp : firstDefaultValue.current) != null ? _ref2 : valueManager.emptyValue;
  var inputTimezone = React.useMemo(function () {
    return valueManager.getTimezone(utils, inputValue);
  }, [utils, valueManager, inputValue]);
  var setInputTimezone = useEventCallback(function (newValue) {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  var timezoneToRender = (_ref3 = timezoneProp != null ? timezoneProp : inputTimezone) != null ? _ref3 : 'default';
  var valueWithTimezoneToRender = React.useMemo(function () {
    return valueManager.setTimezone(utils, timezoneToRender, inputValue);
  }, [valueManager, utils, timezoneToRender, inputValue]);
  var handleValueChange = useEventCallback(function (newValue) {
    var newValueWithInputTimezone = setInputTimezone(newValue);
    for (var _len = arguments.length, otherParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      otherParams[_key - 1] = arguments[_key];
    }
    onChange == null || onChange.apply(void 0, [newValueWithInputTimezone].concat(otherParams));
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange: handleValueChange,
    timezone: timezoneToRender
  };
};

/**
 * Wrapper around `useControlled` and `useValueWithTimezone`
 */
export var useControlledValueWithTimezone = function useControlledValueWithTimezone(_ref4) {
  var name = _ref4.name,
    timezoneProp = _ref4.timezone,
    valueProp = _ref4.value,
    defaultValue = _ref4.defaultValue,
    onChangeProp = _ref4.onChange,
    valueManager = _ref4.valueManager;
  var _useControlled = useControlled({
      name: name,
      state: 'value',
      controlled: valueProp,
      default: defaultValue != null ? defaultValue : valueManager.emptyValue
    }),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    valueWithInputTimezone = _useControlled2[0],
    setValue = _useControlled2[1];
  var onChange = useEventCallback(function (newValue) {
    setValue(newValue);
    for (var _len2 = arguments.length, otherParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      otherParams[_key2 - 1] = arguments[_key2];
    }
    onChangeProp == null || onChangeProp.apply(void 0, [newValue].concat(otherParams));
  });
  return useValueWithTimezone({
    timezone: timezoneProp,
    value: valueWithInputTimezone,
    defaultValue: undefined,
    onChange: onChange,
    valueManager: valueManager
  });
};
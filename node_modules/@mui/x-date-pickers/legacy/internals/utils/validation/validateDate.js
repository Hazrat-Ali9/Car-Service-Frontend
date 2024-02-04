import { applyDefaultDate } from '../date-utils';
export var validateDate = function validateDate(_ref) {
  var props = _ref.props,
    value = _ref.value,
    adapter = _ref.adapter;
  if (value === null) {
    return null;
  }
  var shouldDisableDate = props.shouldDisableDate,
    shouldDisableMonth = props.shouldDisableMonth,
    shouldDisableYear = props.shouldDisableYear,
    disablePast = props.disablePast,
    disableFuture = props.disableFuture,
    timezone = props.timezone;
  var now = adapter.utils.dateWithTimezone(undefined, timezone);
  var minDate = applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  var maxDate = applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return 'invalidDate';
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return 'shouldDisableDate';
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return 'shouldDisableMonth';
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return 'shouldDisableYear';
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return 'disablePast';
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return 'minDate';
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return 'maxDate';
    default:
      return null;
  }
};
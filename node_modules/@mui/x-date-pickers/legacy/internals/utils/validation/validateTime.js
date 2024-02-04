import { createIsAfterIgnoreDatePart } from '../time-utils';
export var validateTime = function validateTime(_ref) {
  var adapter = _ref.adapter,
    value = _ref.value,
    props = _ref.props;
  if (value === null) {
    return null;
  }
  var minTime = props.minTime,
    maxTime = props.maxTime,
    minutesStep = props.minutesStep,
    shouldDisableClock = props.shouldDisableClock,
    shouldDisableTime = props.shouldDisableTime,
    _props$disableIgnorin = props.disableIgnoringDatePartForTimeValidation,
    disableIgnoringDatePartForTimeValidation = _props$disableIgnorin === void 0 ? false : _props$disableIgnorin,
    disablePast = props.disablePast,
    disableFuture = props.disableFuture,
    timezone = props.timezone;
  var now = adapter.utils.dateWithTimezone(undefined, timezone);
  var isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  switch (true) {
    case !adapter.utils.isValid(value):
      return 'invalidDate';
    case Boolean(minTime && isAfter(minTime, value)):
      return 'minTime';
    case Boolean(maxTime && isAfter(value, maxTime)):
      return 'maxTime';
    case Boolean(disableFuture && adapter.utils.isAfter(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.utils.isBefore(value, now)):
      return 'disablePast';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'hours')):
      return 'shouldDisableTime-hours';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'minutes')):
      return 'shouldDisableTime-minutes';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'seconds')):
      return 'shouldDisableTime-seconds';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getHours(value), 'hours')):
      return 'shouldDisableClock-hours';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getMinutes(value), 'minutes')):
      return 'shouldDisableClock-minutes';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getSeconds(value), 'seconds')):
      return 'shouldDisableClock-seconds';
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return 'minutesStep';
    default:
      return null;
  }
};
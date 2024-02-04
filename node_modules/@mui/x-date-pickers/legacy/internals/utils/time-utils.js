import { areViewsEqual } from './views';
var timeViews = ['hours', 'minutes', 'seconds'];
export var isTimeView = function isTimeView(view) {
  return timeViews.includes(view);
};
export var isInternalTimeView = function isInternalTimeView(view) {
  return timeViews.includes(view) || view === 'meridiem';
};
export var getMeridiem = function getMeridiem(date, utils) {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
export var convertValueToMeridiem = function convertValueToMeridiem(value, meridiem, ampm) {
  if (ampm) {
    var currentMeridiem = value >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }
  return value;
};
export var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  var newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
export var getSecondsInDay = function getSecondsInDay(date, utils) {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
export var createIsAfterIgnoreDatePart = function createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils) {
  return function (dateLeft, dateRight) {
    if (disableIgnoringDatePartForTimeValidation) {
      return utils.isAfter(dateLeft, dateRight);
    }
    return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
  };
};
export var resolveTimeFormat = function resolveTimeFormat(utils, _ref) {
  var format = _ref.format,
    views = _ref.views,
    ampm = _ref.ampm;
  if (format != null) {
    return format;
  }
  var formats = utils.formats;
  if (areViewsEqual(views, ['hours'])) {
    return ampm ? "".concat(formats.hours12h, " ").concat(formats.meridiem) : formats.hours24h;
  }
  if (areViewsEqual(views, ['minutes'])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ['seconds'])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ['minutes', 'seconds'])) {
    return "".concat(formats.minutes, ":").concat(formats.seconds);
  }
  if (areViewsEqual(views, ['hours', 'minutes', 'seconds'])) {
    return ampm ? "".concat(formats.hours12h, ":").concat(formats.minutes, ":").concat(formats.seconds, " ").concat(formats.meridiem) : "".concat(formats.hours24h, ":").concat(formats.minutes, ":").concat(formats.seconds);
  }
  return ampm ? "".concat(formats.hours12h, ":").concat(formats.minutes, " ").concat(formats.meridiem) : "".concat(formats.hours24h, ":").concat(formats.minutes);
};
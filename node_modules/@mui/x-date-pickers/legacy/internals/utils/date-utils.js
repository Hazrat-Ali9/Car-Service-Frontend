import { areViewsEqual } from './views';
export var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
    disableFuture = _ref.disableFuture,
    disablePast = _ref.disablePast,
    maxDate = _ref.maxDate,
    minDate = _ref.minDate,
    isDateDisabled = _ref.isDateDisabled,
    utils = _ref.utils,
    timezone = _ref.timezone;
  var today = utils.startOfDay(utils.dateWithTimezone(undefined, timezone));
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  var forward = date;
  var backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
export var replaceInvalidDateByNull = function replaceInvalidDateByNull(utils, value) {
  return value == null || !utils.isValid(value) ? null : value;
};
export var applyDefaultDate = function applyDefaultDate(utils, value, defaultValue) {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
export var areDatesEqual = function areDatesEqual(utils, a, b) {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
export var getMonthsInYear = function getMonthsInYear(utils, year) {
  var firstMonth = utils.startOfYear(year);
  var months = [firstMonth];
  while (months.length < 12) {
    var prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
export var mergeDateAndTime = function mergeDateAndTime(utils, dateParam, timeParam) {
  var mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  return mergedDate;
};
export var getTodayDate = function getTodayDate(utils, timezone, valueType) {
  return valueType === 'date' ? utils.startOfDay(utils.dateWithTimezone(undefined, timezone)) : utils.dateWithTimezone(undefined, timezone);
};
export var formatMeridiem = function formatMeridiem(utils, meridiem) {
  var date = utils.setHours(utils.date(), meridiem === 'am' ? 2 : 14);
  return utils.format(date, 'meridiem');
};
var dateViews = ['year', 'month', 'day'];
export var isDatePickerView = function isDatePickerView(view) {
  return dateViews.includes(view);
};
export var resolveDateFormat = function resolveDateFormat(utils, _ref2, isInToolbar) {
  var format = _ref2.format,
    views = _ref2.views;
  if (format != null) {
    return format;
  }
  var formats = utils.formats;
  if (areViewsEqual(views, ['year'])) {
    return formats.year;
  }
  if (areViewsEqual(views, ['month'])) {
    return formats.month;
  }
  if (areViewsEqual(views, ['day'])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ['month', 'year'])) {
    return "".concat(formats.month, " ").concat(formats.year);
  }
  if (areViewsEqual(views, ['day', 'month'])) {
    return "".concat(formats.month, " ").concat(formats.dayOfMonth);
  }
  if (isInToolbar) {
    // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
    // For other locales using strings like "June 1", without weekday.
    return /en/.test(utils.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
export var getWeekdays = function getWeekdays(utils, date) {
  var start = utils.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map(function (diff) {
    return utils.addDays(start, diff);
  });
};
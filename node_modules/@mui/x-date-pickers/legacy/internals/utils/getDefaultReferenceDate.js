import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { createIsAfterIgnoreDatePart } from './time-utils';
import { mergeDateAndTime, getTodayDate } from './date-utils';
export var SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
export var getSectionTypeGranularity = function getSectionTypeGranularity(sections) {
  return Math.max.apply(Math, _toConsumableArray(sections.map(function (section) {
    var _SECTION_TYPE_GRANULA;
    return (_SECTION_TYPE_GRANULA = SECTION_TYPE_GRANULARITY[section.type]) != null ? _SECTION_TYPE_GRANULA : 1;
  })));
};
export var getViewsGranularity = function getViewsGranularity(views) {
  return Math.max.apply(Math, _toConsumableArray(views.map(function (view) {
    var _SECTION_TYPE_GRANULA2;
    return (_SECTION_TYPE_GRANULA2 = SECTION_TYPE_GRANULARITY[view]) != null ? _SECTION_TYPE_GRANULA2 : 1;
  })));
};
var roundDate = function roundDate(utils, granularity, date) {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }

  // We don't have startOfHour / startOfMinute / startOfSecond
  var roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
export var getDefaultReferenceDate = function getDefaultReferenceDate(_ref) {
  var _props$disableIgnorin;
  var props = _ref.props,
    utils = _ref.utils,
    granularity = _ref.granularity,
    timezone = _ref.timezone,
    inGetTodayDate = _ref.getTodayDate;
  var referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, getTodayDate(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  var isAfter = createIsAfterIgnoreDatePart((_props$disableIgnorin = props.disableIgnoringDatePartForTimeValidation) != null ? _props$disableIgnorin : false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};
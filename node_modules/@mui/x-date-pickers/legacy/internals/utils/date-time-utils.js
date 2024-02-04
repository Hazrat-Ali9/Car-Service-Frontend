import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["views", "format"];
import { resolveTimeFormat, isTimeView, isInternalTimeView } from './time-utils';
import { resolveDateFormat } from './date-utils';
export var resolveDateTimeFormat = function resolveDateTimeFormat(utils, _ref) {
  var views = _ref.views,
    format = _ref.format,
    other = _objectWithoutProperties(_ref, _excluded);
  if (format) {
    return format;
  }
  var dateViews = [];
  var timeViews = [];
  views.forEach(function (view) {
    if (isTimeView(view)) {
      timeViews.push(view);
    } else {
      dateViews.push(view);
    }
  });
  if (timeViews.length === 0) {
    return resolveDateFormat(utils, _extends({
      views: dateViews
    }, other), false);
  }
  if (dateViews.length === 0) {
    return resolveTimeFormat(utils, _extends({
      views: timeViews
    }, other));
  }
  var timeFormat = resolveTimeFormat(utils, _extends({
    views: timeViews
  }, other));
  var dateFormat = resolveDateFormat(utils, _extends({
    views: dateViews
  }, other), false);
  return "".concat(dateFormat, " ").concat(timeFormat);
};
var resolveViews = function resolveViews(ampm, views, shouldUseSingleColumn) {
  if (shouldUseSingleColumn) {
    return views.filter(function (view) {
      return !isInternalTimeView(view) || view === 'hours';
    });
  }
  return ampm ? [].concat(_toConsumableArray(views), ['meridiem']) : views;
};
var resolveShouldRenderTimeInASingleColumn = function resolveShouldRenderTimeInASingleColumn(timeSteps, threshold) {
  var _timeSteps$hours, _timeSteps$minutes;
  return 24 * 60 / (((_timeSteps$hours = timeSteps.hours) != null ? _timeSteps$hours : 1) * ((_timeSteps$minutes = timeSteps.minutes) != null ? _timeSteps$minutes : 5)) <= threshold;
};
export function resolveTimeViewsResponse(_ref2) {
  var inThreshold = _ref2.thresholdToRenderTimeInASingleColumn,
    ampm = _ref2.ampm,
    inTimeSteps = _ref2.timeSteps,
    views = _ref2.views;
  var thresholdToRenderTimeInASingleColumn = inThreshold != null ? inThreshold : 24;
  var timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps);
  var shouldRenderTimeInASingleColumn = resolveShouldRenderTimeInASingleColumn(timeSteps, thresholdToRenderTimeInASingleColumn);
  return {
    thresholdToRenderTimeInASingleColumn: thresholdToRenderTimeInASingleColumn,
    timeSteps: timeSteps,
    shouldRenderTimeInASingleColumn: shouldRenderTimeInASingleColumn,
    views: resolveViews(ampm, views, shouldRenderTimeInASingleColumn)
  };
}
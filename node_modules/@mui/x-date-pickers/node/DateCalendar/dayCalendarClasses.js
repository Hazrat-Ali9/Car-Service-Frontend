"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayCalendarUtilityClass = exports.dayPickerClasses = void 0;
var _utils = require("@mui/utils");
const getDayCalendarUtilityClass = slot => (0, _utils.unstable_generateUtilityClass)('MuiDayCalendar', slot);
exports.getDayCalendarUtilityClass = getDayCalendarUtilityClass;
const dayPickerClasses = exports.dayPickerClasses = (0, _utils.unstable_generateUtilityClasses)('MuiDayCalendar', ['root', 'header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer', 'weekNumberLabel', 'weekNumber']);
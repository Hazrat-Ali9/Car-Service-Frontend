import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "referenceDate"];
import { areDatesEqual, getTodayDate, replaceInvalidDateByNull } from './date-utils';
import { getDefaultReferenceDate } from './getDefaultReferenceDate';
import { addPositionPropertiesToSections, createDateStrForInputFromSections } from '../hooks/useField/useField.utils';
export var singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: function getInitialReferenceValue(_ref) {
    var value = _ref.value,
      referenceDate = _ref.referenceDate,
      params = _objectWithoutProperties(_ref, _excluded);
    if (value != null && params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: function isSameError(a, b) {
    return a === b;
  },
  hasError: function hasError(error) {
    return error != null;
  },
  defaultErrorState: null,
  getTimezone: function getTimezone(utils, value) {
    return value == null || !utils.isValid(value) ? null : utils.getTimezone(value);
  },
  setTimezone: function setTimezone(utils, timezone, value) {
    return value == null ? null : utils.setTimezone(value, timezone);
  }
};
export var singleItemFieldValueManager = {
  updateReferenceValue: function updateReferenceValue(utils, value, prevReferenceValue) {
    return value == null || !utils.isValid(value) ? prevReferenceValue : value;
  },
  getSectionsFromValue: function getSectionsFromValue(utils, date, prevSections, isRTL, getSectionsFromDate) {
    var shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return addPositionPropertiesToSections(getSectionsFromDate(date), isRTL);
  },
  getValueStrFromSections: createDateStrForInputFromSections,
  getActiveDateManager: function getActiveDateManager(utils, state) {
    return {
      date: state.value,
      referenceDate: state.referenceValue,
      getSections: function getSections(sections) {
        return sections;
      },
      getNewValuesFromNewActiveDate: function getNewValuesFromNewActiveDate(newActiveDate) {
        return {
          value: newActiveDate,
          referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
        };
      }
    };
  },
  parseValueStr: function parseValueStr(valueStr, referenceValue, parseDate) {
    return parseDate(valueStr.trim(), referenceValue);
  }
};
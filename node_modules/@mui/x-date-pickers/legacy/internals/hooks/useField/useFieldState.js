import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import useControlled from '@mui/utils/useControlled';
import { useTheme } from '@mui/material/styles';
import { useUtils, useLocaleText, useLocalizationContext } from '../useUtils';
import { addPositionPropertiesToSections, splitFormatIntoSections, mergeDateIntoReferenceDate, getSectionsBoundaries, validateSections, getDateFromDateSections } from './useField.utils';
import { useValueWithTimezone } from '../useValueWithTimezone';
import { getSectionTypeGranularity } from '../../utils/getDefaultReferenceDate';
export var useFieldState = function useFieldState(params) {
  var utils = useUtils();
  var localeText = useLocaleText();
  var adapter = useLocalizationContext();
  var theme = useTheme();
  var isRTL = theme.direction === 'rtl';
  var valueManager = params.valueManager,
    fieldValueManager = params.fieldValueManager,
    valueType = params.valueType,
    validator = params.validator,
    internalProps = params.internalProps,
    _params$internalProps = params.internalProps,
    valueProp = _params$internalProps.value,
    defaultValue = _params$internalProps.defaultValue,
    referenceDateProp = _params$internalProps.referenceDate,
    onChange = _params$internalProps.onChange,
    format = _params$internalProps.format,
    _params$internalProps2 = _params$internalProps.formatDensity,
    formatDensity = _params$internalProps2 === void 0 ? 'dense' : _params$internalProps2,
    selectedSectionsProp = _params$internalProps.selectedSections,
    onSelectedSectionsChange = _params$internalProps.onSelectedSectionsChange,
    _params$internalProps3 = _params$internalProps.shouldRespectLeadingZeros,
    shouldRespectLeadingZeros = _params$internalProps3 === void 0 ? false : _params$internalProps3,
    timezoneProp = _params$internalProps.timezone;
  var _useValueWithTimezone = useValueWithTimezone({
      timezone: timezoneProp,
      value: valueProp,
      defaultValue: defaultValue,
      onChange: onChange,
      valueManager: valueManager
    }),
    timezone = _useValueWithTimezone.timezone,
    valueFromTheOutside = _useValueWithTimezone.value,
    handleValueChange = _useValueWithTimezone.handleValueChange;
  var sectionsValueBoundaries = React.useMemo(function () {
    return getSectionsBoundaries(utils, timezone);
  }, [utils, timezone]);
  var getSectionsFromValue = React.useCallback(function (value) {
    var fallbackSections = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, isRTL, function (date) {
      return splitFormatIntoSections(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL);
    });
  }, [fieldValueManager, format, localeText, isRTL, shouldRespectLeadingZeros, utils, formatDensity, timezone]);
  var placeholder = React.useMemo(function () {
    return fieldValueManager.getValueStrFromSections(getSectionsFromValue(valueManager.emptyValue), isRTL);
  }, [fieldValueManager, getSectionsFromValue, valueManager.emptyValue, isRTL]);
  var _React$useState = React.useState(function () {
      var sections = getSectionsFromValue(valueFromTheOutside);
      validateSections(sections, valueType);
      var stateWithoutReferenceDate = {
        sections: sections,
        value: valueFromTheOutside,
        referenceValue: valueManager.emptyValue,
        tempValueStrAndroid: null
      };
      var granularity = getSectionTypeGranularity(sections);
      var referenceValue = valueManager.getInitialReferenceValue({
        referenceDate: referenceDateProp,
        value: valueFromTheOutside,
        utils: utils,
        props: internalProps,
        granularity: granularity,
        timezone: timezone
      });
      return _extends({}, stateWithoutReferenceDate, {
        referenceValue: referenceValue
      });
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  var _useControlled = useControlled({
      controlled: selectedSectionsProp,
      default: null,
      name: 'useField',
      state: 'selectedSectionIndexes'
    }),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    selectedSections = _useControlled2[0],
    innerSetSelectedSections = _useControlled2[1];
  var setSelectedSections = function setSelectedSections(newSelectedSections) {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null || onSelectedSectionsChange(newSelectedSections);
    setState(function (prevState) {
      return _extends({}, prevState, {
        selectedSectionQuery: null
      });
    });
  };
  var selectedSectionIndexes = React.useMemo(function () {
    if (selectedSections == null) {
      return null;
    }
    if (selectedSections === 'all') {
      return {
        startIndex: 0,
        endIndex: state.sections.length - 1,
        shouldSelectBoundarySelectors: true
      };
    }
    if (typeof selectedSections === 'number') {
      return {
        startIndex: selectedSections,
        endIndex: selectedSections
      };
    }
    if (typeof selectedSections === 'string') {
      var selectedSectionIndex = state.sections.findIndex(function (section) {
        return section.type === selectedSections;
      });
      return {
        startIndex: selectedSectionIndex,
        endIndex: selectedSectionIndex
      };
    }
    return selectedSections;
  }, [selectedSections, state.sections]);
  var publishValue = function publishValue(_ref) {
    var value = _ref.value,
      referenceValue = _ref.referenceValue,
      sections = _ref.sections;
    setState(function (prevState) {
      return _extends({}, prevState, {
        sections: sections,
        value: value,
        referenceValue: referenceValue,
        tempValueStrAndroid: null
      });
    });
    if (valueManager.areValuesEqual(utils, state.value, value)) {
      return;
    }
    var context = {
      validationError: validator({
        adapter: adapter,
        value: value,
        props: _extends({}, internalProps, {
          value: value,
          timezone: timezone
        })
      })
    };
    handleValueChange(value, context);
  };
  var setSectionValue = function setSectionValue(sectionIndex, newSectionValue) {
    var newSections = _toConsumableArray(state.sections);
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return addPositionPropertiesToSections(newSections, isRTL);
  };
  var clearValue = function clearValue() {
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  var clearActiveSection = function clearActiveSection() {
    if (selectedSectionIndexes == null) {
      return;
    }
    var activeSection = state.sections[selectedSectionIndexes.startIndex];
    var activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    var nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter(function (section) {
      return section.value !== '';
    }).length;
    var hasNoOtherNonEmptySections = nonEmptySectionCountBefore === (activeSection.value === '' ? 0 : 1);
    var newSections = setSectionValue(selectedSectionIndexes.startIndex, '');
    var newActiveDate = hasNoOtherNonEmptySections ? null : utils.date(new Date(''));
    var newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    if ((newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date))) {
      publishValue(_extends({}, newValues, {
        sections: newSections
      }));
    } else {
      setState(function (prevState) {
        return _extends({}, prevState, newValues, {
          sections: newSections,
          tempValueStrAndroid: null
        });
      });
    }
  };
  var updateValueFromValueStr = function updateValueFromValueStr(valueStr) {
    var parseDateStr = function parseDateStr(dateStr, referenceDate) {
      var date = utils.parse(dateStr, format);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      var sections = splitFormatIntoSections(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL);
      return mergeDateIntoReferenceDate(utils, timezone, date, sections, referenceDate, false);
    };
    var newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    var newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  var updateSectionValue = function updateSectionValue(_ref2) {
    var activeSection = _ref2.activeSection,
      newSectionValue = _ref2.newSectionValue,
      shouldGoToNextSection = _ref2.shouldGoToNextSection;
    /**
     * 1. Decide which section should be focused
     */
    if (shouldGoToNextSection && selectedSectionIndexes && selectedSectionIndexes.startIndex < state.sections.length - 1) {
      setSelectedSections(selectedSectionIndexes.startIndex + 1);
    } else if (selectedSectionIndexes && selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
      setSelectedSections(selectedSectionIndexes.startIndex);
    }

    /**
     * 2. Try to build a valid date from the new section value
     */
    var activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    var newSections = setSectionValue(selectedSectionIndexes.startIndex, newSectionValue);
    var newActiveDateSections = activeDateManager.getSections(newSections);
    var newActiveDate = getDateFromDateSections(utils, newActiveDateSections);
    var values;
    var shouldPublish;

    /**
     * If the new date is valid,
     * Then we merge the value of the modified sections into the reference date.
     * This makes sure that we don't lose some information of the initial date (like the time on a date field).
     */
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      var mergedDate = mergeDateIntoReferenceDate(utils, timezone, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }

    /**
     * Publish or update the internal state with the new value and sections.
     */
    if (shouldPublish) {
      return publishValue(_extends({}, values, {
        sections: newSections
      }));
    }
    return setState(function (prevState) {
      return _extends({}, prevState, values, {
        sections: newSections,
        tempValueStrAndroid: null
      });
    });
  };
  var setTempAndroidValueStr = function setTempAndroidValueStr(tempValueStrAndroid) {
    return setState(function (prev) {
      return _extends({}, prev, {
        tempValueStrAndroid: tempValueStrAndroid
      });
    });
  };
  React.useEffect(function () {
    var sections = getSectionsFromValue(state.value);
    validateSections(sections, valueType);
    setState(function (prevState) {
      return _extends({}, prevState, {
        sections: sections
      });
    });
  }, [format, utils.locale]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(function () {
    var shouldUpdate = false;
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      shouldUpdate = true;
    } else {
      shouldUpdate = valueManager.getTimezone(utils, state.value) !== valueManager.getTimezone(utils, valueFromTheOutside);
    }
    if (shouldUpdate) {
      setState(function (prevState) {
        return _extends({}, prevState, {
          value: valueFromTheOutside,
          referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
          sections: getSectionsFromValue(valueFromTheOutside)
        });
      });
    }
  }, [valueFromTheOutside]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    state: state,
    selectedSectionIndexes: selectedSectionIndexes,
    setSelectedSections: setSelectedSections,
    clearValue: clearValue,
    clearActiveSection: clearActiveSection,
    updateSectionValue: updateSectionValue,
    updateValueFromValueStr: updateValueFromValueStr,
    setTempAndroidValueStr: setTempAndroidValueStr,
    sectionsValueBoundaries: sectionsValueBoundaries,
    placeholder: placeholder,
    timezone: timezone
  };
};
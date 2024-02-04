import * as React from 'react';
import { singleItemValueManager } from '../utils/valueManagers';
import { getTodayDate as _getTodayDate } from '../utils/date-utils';
import { SECTION_TYPE_GRANULARITY } from '../utils/getDefaultReferenceDate';
export var useClockReferenceDate = function useClockReferenceDate(_ref) {
  var value = _ref.value,
    referenceDateProp = _ref.referenceDate,
    utils = _ref.utils,
    props = _ref.props,
    timezone = _ref.timezone;
  var referenceDate = React.useMemo(function () {
    return singleItemValueManager.getInitialReferenceValue({
      value: value,
      utils: utils,
      props: props,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day,
      timezone: timezone,
      getTodayDate: function getTodayDate() {
        return _getTodayDate(utils, timezone, 'date');
      }
    });
  },
  // We only want to compute the reference date on mount.
  [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value != null ? value : referenceDate;
};
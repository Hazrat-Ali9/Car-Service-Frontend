import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/* eslint-disable class-methods-use-this */
// TODO remove when date-fns-v3 is the default
// @ts-nocheck
import { addDays } from 'date-fns/addDays';
import { addSeconds } from 'date-fns/addSeconds';
import { addMinutes } from 'date-fns/addMinutes';
import { addHours } from 'date-fns/addHours';
import { addWeeks } from 'date-fns/addWeeks';
import { addMonths } from 'date-fns/addMonths';
import { addYears } from 'date-fns/addYears';
import { differenceInYears } from 'date-fns/differenceInYears';
import { differenceInQuarters } from 'date-fns/differenceInQuarters';
import { differenceInMonths } from 'date-fns/differenceInMonths';
import { differenceInWeeks } from 'date-fns/differenceInWeeks';
import { differenceInDays } from 'date-fns/differenceInDays';
import { differenceInHours } from 'date-fns/differenceInHours';
import { differenceInMinutes } from 'date-fns/differenceInMinutes';
import { differenceInSeconds } from 'date-fns/differenceInSeconds';
import { differenceInMilliseconds } from 'date-fns/differenceInMilliseconds';
import { eachDayOfInterval } from 'date-fns/eachDayOfInterval';
import { endOfDay } from 'date-fns/endOfDay';
import { endOfWeek } from 'date-fns/endOfWeek';
import { endOfYear } from 'date-fns/endOfYear';
// @ts-ignore TODO remove when date-fns-v3 is the default
import { format as dateFnsFormat, longFormatters } from 'date-fns/format';
import { getDate } from 'date-fns/getDate';
import { getDaysInMonth } from 'date-fns/getDaysInMonth';
import { getHours } from 'date-fns/getHours';
import { getMinutes } from 'date-fns/getMinutes';
import { getMonth } from 'date-fns/getMonth';
import { getSeconds } from 'date-fns/getSeconds';
import { getMilliseconds } from 'date-fns/getMilliseconds';
import { getWeek } from 'date-fns/getWeek';
import { getYear } from 'date-fns/getYear';
import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { isEqual } from 'date-fns/isEqual';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameYear } from 'date-fns/isSameYear';
import { isSameMonth } from 'date-fns/isSameMonth';
import { isSameHour } from 'date-fns/isSameHour';
import { isValid } from 'date-fns/isValid';
import { parse as dateFnsParse } from 'date-fns/parse';
import { setDate } from 'date-fns/setDate';
import { setHours } from 'date-fns/setHours';
import { setMinutes } from 'date-fns/setMinutes';
import { setMonth } from 'date-fns/setMonth';
import { setSeconds } from 'date-fns/setSeconds';
import { setMilliseconds } from 'date-fns/setMilliseconds';
import { setYear } from 'date-fns/setYear';
import { startOfDay } from 'date-fns/startOfDay';
import { startOfMonth } from 'date-fns/startOfMonth';
import { endOfMonth } from 'date-fns/endOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { startOfYear } from 'date-fns/startOfYear';
import { formatISO } from 'date-fns/formatISO';
import { parseISO } from 'date-fns/parseISO';
import { isWithinInterval } from 'date-fns/isWithinInterval';
import { enUS } from 'date-fns/locale/en-US';
// date-fns v2 does not export types
// @ts-ignore TODO remove when date-fns-v3 is the default

import { AdapterDateFnsBase } from '../AdapterDateFnsBase';

/**
 * Based on `@date-io/date-fns`
 *
 * MIT License
 *
 * Copyright (c) 2017 Dmitriy Kovalenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export var AdapterDateFns = /*#__PURE__*/function (_ref) {
  _inherits(AdapterDateFns, _ref);
  function AdapterDateFns() {
    var _this;
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      locale = _ref2.locale,
      formats = _ref2.formats;
    _classCallCheck(this, AdapterDateFns);
    if (typeof addDays !== 'function') {
      throw new Error(["MUI: The `date-fns` package v2.x is not compatible with this adapter.", 'Please, install v3.x of the package or use the `AdapterDateFns` instead.'].join('\n'));
    }
    if (!longFormatters) {
      throw new Error('MUI: The minimum supported `date-fns` package version compatible with this adapter is `3.2.x`.');
    }
    _this = _callSuper(this, AdapterDateFns, [{
      locale: locale != null ? locale : enUS,
      formats: formats,
      longFormatters: longFormatters
    }]);
    _this.parseISO = function (isoString) {
      return parseISO(isoString);
    };
    _this.toISO = function (value) {
      return formatISO(value, {
        format: 'extended'
      });
    };
    _this.parse = function (value, format) {
      if (value === '') {
        return null;
      }
      return dateFnsParse(value, format, new Date(), {
        locale: _this.locale
      });
    };
    _this.isValid = function (value) {
      return isValid(_this.date(value));
    };
    _this.format = function (value, formatKey) {
      return _this.formatByString(value, _this.formats[formatKey]);
    };
    _this.formatByString = function (value, formatString) {
      return dateFnsFormat(value, formatString, {
        locale: _this.locale
      });
    };
    _this.getDiff = function (value, comparing, unit) {
      switch (unit) {
        case 'years':
          return differenceInYears(value, _this.date(comparing));
        case 'quarters':
          return differenceInQuarters(value, _this.date(comparing));
        case 'months':
          return differenceInMonths(value, _this.date(comparing));
        case 'weeks':
          return differenceInWeeks(value, _this.date(comparing));
        case 'days':
          return differenceInDays(value, _this.date(comparing));
        case 'hours':
          return differenceInHours(value, _this.date(comparing));
        case 'minutes':
          return differenceInMinutes(value, _this.date(comparing));
        case 'seconds':
          return differenceInSeconds(value, _this.date(comparing));
        default:
          {
            return differenceInMilliseconds(value, _this.date(comparing));
          }
      }
    };
    _this.isEqual = function (value, comparing) {
      if (value === null && comparing === null) {
        return true;
      }
      return isEqual(value, comparing);
    };
    _this.isSameYear = function (value, comparing) {
      return isSameYear(value, comparing);
    };
    _this.isSameMonth = function (value, comparing) {
      return isSameMonth(value, comparing);
    };
    _this.isSameDay = function (value, comparing) {
      return isSameDay(value, comparing);
    };
    _this.isSameHour = function (value, comparing) {
      return isSameHour(value, comparing);
    };
    _this.isAfter = function (value, comparing) {
      return isAfter(value, comparing);
    };
    _this.isAfterYear = function (value, comparing) {
      return isAfter(value, endOfYear(comparing));
    };
    _this.isAfterDay = function (value, comparing) {
      return isAfter(value, endOfDay(comparing));
    };
    _this.isBefore = function (value, comparing) {
      return isBefore(value, comparing);
    };
    _this.isBeforeYear = function (value, comparing) {
      return isBefore(value, _this.startOfYear(comparing));
    };
    _this.isBeforeDay = function (value, comparing) {
      return isBefore(value, _this.startOfDay(comparing));
    };
    _this.isWithinRange = function (value, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        start = _ref4[0],
        end = _ref4[1];
      return isWithinInterval(value, {
        start: start,
        end: end
      });
    };
    _this.startOfYear = function (value) {
      return startOfYear(value);
    };
    _this.startOfMonth = function (value) {
      return startOfMonth(value);
    };
    _this.startOfWeek = function (value) {
      return startOfWeek(value, {
        locale: _this.locale
      });
    };
    _this.startOfDay = function (value) {
      return startOfDay(value);
    };
    _this.endOfYear = function (value) {
      return endOfYear(value);
    };
    _this.endOfMonth = function (value) {
      return endOfMonth(value);
    };
    _this.endOfWeek = function (value) {
      return endOfWeek(value, {
        locale: _this.locale
      });
    };
    _this.endOfDay = function (value) {
      return endOfDay(value);
    };
    _this.addYears = function (value, amount) {
      return addYears(value, amount);
    };
    _this.addMonths = function (value, amount) {
      return addMonths(value, amount);
    };
    _this.addWeeks = function (value, amount) {
      return addWeeks(value, amount);
    };
    _this.addDays = function (value, amount) {
      return addDays(value, amount);
    };
    _this.addHours = function (value, amount) {
      return addHours(value, amount);
    };
    _this.addMinutes = function (value, amount) {
      return addMinutes(value, amount);
    };
    _this.addSeconds = function (value, amount) {
      return addSeconds(value, amount);
    };
    _this.getYear = function (value) {
      return getYear(value);
    };
    _this.getMonth = function (value) {
      return getMonth(value);
    };
    _this.getDate = function (value) {
      return getDate(value);
    };
    _this.getHours = function (value) {
      return getHours(value);
    };
    _this.getMinutes = function (value) {
      return getMinutes(value);
    };
    _this.getSeconds = function (value) {
      return getSeconds(value);
    };
    _this.getMilliseconds = function (value) {
      return getMilliseconds(value);
    };
    _this.setYear = function (value, year) {
      return setYear(value, year);
    };
    _this.setMonth = function (value, month) {
      return setMonth(value, month);
    };
    _this.setDate = function (value, date) {
      return setDate(value, date);
    };
    _this.setHours = function (value, hours) {
      return setHours(value, hours);
    };
    _this.setMinutes = function (value, minutes) {
      return setMinutes(value, minutes);
    };
    _this.setSeconds = function (value, seconds) {
      return setSeconds(value, seconds);
    };
    _this.setMilliseconds = function (value, milliseconds) {
      return setMilliseconds(value, milliseconds);
    };
    _this.getDaysInMonth = function (value) {
      return getDaysInMonth(value);
    };
    _this.getNextMonth = function (value) {
      return addMonths(value, 1);
    };
    _this.getPreviousMonth = function (value) {
      return addMonths(value, -1);
    };
    _this.getMonthArray = function (value) {
      var firstMonth = startOfYear(value);
      var monthArray = [firstMonth];
      while (monthArray.length < 12) {
        var prevMonth = monthArray[monthArray.length - 1];
        monthArray.push(_this.getNextMonth(prevMonth));
      }
      return monthArray;
    };
    _this.mergeDateAndTime = function (dateParam, timeParam) {
      return _this.setSeconds(_this.setMinutes(_this.setHours(dateParam, _this.getHours(timeParam)), _this.getMinutes(timeParam)), _this.getSeconds(timeParam));
    };
    _this.getWeekdays = function () {
      var now = new Date();
      return eachDayOfInterval({
        start: startOfWeek(now, {
          locale: _this.locale
        }),
        end: endOfWeek(now, {
          locale: _this.locale
        })
      }).map(function (day) {
        return _this.formatByString(day, 'EEEEEE');
      });
    };
    _this.getWeekArray = function (value) {
      var start = startOfWeek(startOfMonth(value), {
        locale: _this.locale
      });
      var end = endOfWeek(endOfMonth(value), {
        locale: _this.locale
      });
      var count = 0;
      var current = start;
      var nestedWeeks = [];
      while (isBefore(current, end)) {
        var weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = addDays(current, 1);
        count += 1;
      }
      return nestedWeeks;
    };
    _this.getWeekNumber = function (value) {
      return getWeek(value, {
        locale: _this.locale
      });
    };
    _this.getYearRange = function (start, end) {
      var startDate = startOfYear(start);
      var endDate = endOfYear(end);
      var years = [];
      var current = startDate;
      while (isBefore(current, endDate)) {
        years.push(current);
        current = addYears(current, 1);
      }
      return years;
    };
    return _this;
  }
  return _createClass(AdapterDateFns);
}(AdapterDateFnsBase);
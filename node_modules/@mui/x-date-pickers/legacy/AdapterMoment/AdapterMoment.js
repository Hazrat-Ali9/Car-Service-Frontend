import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
/* eslint-disable class-methods-use-this */
import defaultMoment from 'moment';
// From https://momentjs.com/docs/#/displaying/format/
var formatTokenMap = {
  // Year
  Y: 'year',
  YY: 'year',
  YYYY: {
    sectionType: 'year',
    contentType: 'digit',
    maxLength: 4
  },
  // Month
  M: {
    sectionType: 'month',
    contentType: 'digit',
    maxLength: 2
  },
  MM: 'month',
  MMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  MMMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  // Day of the month
  D: {
    sectionType: 'day',
    contentType: 'digit',
    maxLength: 2
  },
  DD: 'day',
  Do: {
    sectionType: 'day',
    contentType: 'digit-with-letter'
  },
  // Day of the week
  E: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 1
  },
  e: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 1
  },
  d: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 1
  },
  dd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  ddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  dddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  // Meridiem
  A: 'meridiem',
  a: 'meridiem',
  // Hours
  H: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  HH: 'hours',
  h: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  hh: 'hours',
  // Minutes
  m: {
    sectionType: 'minutes',
    contentType: 'digit',
    maxLength: 2
  },
  mm: 'minutes',
  // Seconds
  s: {
    sectionType: 'seconds',
    contentType: 'digit',
    maxLength: 2
  },
  ss: 'seconds'
};
var defaultFormats = {
  year: 'YYYY',
  month: 'MMMM',
  monthShort: 'MMM',
  dayOfMonth: 'D',
  weekday: 'dddd',
  weekdayShort: 'ddd',
  hours24h: 'HH',
  hours12h: 'hh',
  meridiem: 'A',
  minutes: 'mm',
  seconds: 'ss',
  fullDate: 'll',
  fullDateWithWeekday: 'dddd, LL',
  keyboardDate: 'L',
  shortDate: 'MMM D',
  normalDate: 'D MMMM',
  normalDateWithWeekday: 'ddd, MMM D',
  monthAndYear: 'MMMM YYYY',
  monthAndDate: 'MMMM D',
  fullTime: 'LT',
  fullTime12h: 'hh:mm A',
  fullTime24h: 'HH:mm',
  fullDateTime: 'lll',
  fullDateTime12h: 'll hh:mm A',
  fullDateTime24h: 'll HH:mm',
  keyboardDateTime: 'L LT',
  keyboardDateTime12h: 'L hh:mm A',
  keyboardDateTime24h: 'L HH:mm'
};
var MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to pass the default export from `moment-timezone` to the `dateLibInstance` prop of `LocalizationProvider`', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#moment-and-timezone'].join('\n');

/**
 * Based on `@date-io/moment`
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
export var AdapterMoment = /*#__PURE__*/_createClass(function AdapterMoment() {
  var _this = this;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    locale = _ref.locale,
    formats = _ref.formats,
    instance = _ref.instance;
  _classCallCheck(this, AdapterMoment);
  this.isMUIAdapter = true;
  this.isTimezoneCompatible = true;
  this.lib = 'moment';
  this.moment = void 0;
  this.locale = void 0;
  this.formats = void 0;
  this.escapedCharacters = {
    start: '[',
    end: ']'
  };
  this.formatTokenMap = formatTokenMap;
  this.setLocaleToValue = function (value) {
    var expectedLocale = _this.getCurrentLocaleCode();
    if (expectedLocale === value.locale()) {
      return value;
    }
    return value.locale(expectedLocale);
  };
  /**
   * Some methods from moment can't take the locale as a parameter and always use the current locale.
   * To respect the adapter locale, we need to set it as the current locale and then reset the previous locale.
   */
  this.syncMomentLocale = function (runner) {
    var _this$locale;
    var momentLocale = defaultMoment.locale();
    var adapterLocale = (_this$locale = _this.locale) != null ? _this$locale : 'en-us';
    if (momentLocale !== adapterLocale) {
      defaultMoment.locale(adapterLocale);
      var result = runner();
      defaultMoment.locale(momentLocale);
      return result;
    }
    return runner();
  };
  this.hasTimezonePlugin = function () {
    return typeof _this.moment.tz !== 'undefined';
  };
  this.createSystemDate = function (value) {
    var parsedValue = _this.moment(value).local();
    if (_this.locale === undefined) {
      return parsedValue;
    }
    return parsedValue.locale(_this.locale);
  };
  this.createUTCDate = function (value) {
    var parsedValue = _this.moment.utc(value);
    if (_this.locale === undefined) {
      return parsedValue;
    }
    return parsedValue.locale(_this.locale);
  };
  this.createTZDate = function (value, timezone) {
    /* istanbul ignore next */
    if (!_this.hasTimezonePlugin()) {
      throw new Error(MISSING_TIMEZONE_PLUGIN);
    }
    var parsedValue = timezone === 'default' ? _this.moment(value) : _this.moment.tz(value, timezone);
    if (_this.locale === undefined) {
      return parsedValue;
    }
    return parsedValue.locale(_this.locale);
  };
  this.date = function (value) {
    if (value === null) {
      return null;
    }
    var moment = _this.moment(value);
    moment.locale(_this.getCurrentLocaleCode());
    return moment;
  };
  this.dateWithTimezone = function (value, timezone) {
    if (value === null) {
      return null;
    }
    if (timezone === 'UTC') {
      return _this.createUTCDate(value);
    }
    if (timezone === 'system' || timezone === 'default' && !_this.hasTimezonePlugin()) {
      return _this.createSystemDate(value);
    }
    return _this.createTZDate(value, timezone);
  };
  this.getTimezone = function (value) {
    var _value$_z, _ref2, _this$moment$defaultZ;
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    var zone = (_value$_z = value._z) == null ? void 0 : _value$_z.name;
    var defaultZone = value.isUTC() ? 'UTC' : 'system';

    // @ts-ignore
    return (_ref2 = zone != null ? zone : (_this$moment$defaultZ = _this.moment.defaultZone) == null ? void 0 : _this$moment$defaultZ.name) != null ? _ref2 : defaultZone;
  };
  this.setTimezone = function (value, timezone) {
    var _this$moment$defaultZ2, _this$moment$defaultZ3;
    if (_this.getTimezone(value) === timezone) {
      return value;
    }
    if (timezone === 'UTC') {
      return value.clone().utc();
    }
    if (timezone === 'system') {
      return value.clone().local();
    }
    if (!_this.hasTimezonePlugin()) {
      /* istanbul ignore next */
      if (timezone !== 'default') {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      return value;
    }
    var cleanZone = timezone === 'default' ? // @ts-ignore
    (_this$moment$defaultZ2 = (_this$moment$defaultZ3 = _this.moment.defaultZone) == null ? void 0 : _this$moment$defaultZ3.name) != null ? _this$moment$defaultZ2 : 'system' : timezone;
    if (cleanZone === 'system') {
      return value.clone().local();
    }
    var newValue = value.clone();
    newValue.tz(cleanZone);
    return newValue;
  };
  this.toJsDate = function (value) {
    return value.toDate();
  };
  this.parseISO = function (isoString) {
    return _this.moment(isoString, true);
  };
  this.toISO = function (value) {
    return value.toISOString();
  };
  this.parse = function (value, format) {
    if (value === '') {
      return null;
    }
    if (_this.locale) {
      return _this.moment(value, format, _this.locale, true);
    }
    return _this.moment(value, format, true);
  };
  this.getCurrentLocaleCode = function () {
    return _this.locale || defaultMoment.locale();
  };
  this.is12HourCycleInCurrentLocale = function () {
    return /A|a/.test(defaultMoment.localeData(_this.getCurrentLocaleCode()).longDateFormat('LT'));
  };
  this.expandFormat = function (format) {
    // @see https://github.com/moment/moment/blob/develop/src/lib/format/format.js#L6
    var localFormattingTokens = /(\[[^[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g;
    return format.match(localFormattingTokens).map(function (token) {
      var firstCharacter = token[0];
      if (firstCharacter === 'L' || firstCharacter === ';') {
        return defaultMoment.localeData(_this.getCurrentLocaleCode()).longDateFormat(token);
      }
      return token;
    }).join('');
  };
  this.getFormatHelperText = function (format) {
    return _this.expandFormat(format).replace(/a/gi, '(a|p)m').toLocaleLowerCase();
  };
  this.isNull = function (value) {
    return value === null;
  };
  this.isValid = function (value) {
    return _this.moment(value).isValid();
  };
  this.format = function (value, formatKey) {
    return _this.formatByString(value, _this.formats[formatKey]);
  };
  this.formatByString = function (value, formatString) {
    var clonedDate = value.clone();
    clonedDate.locale(_this.getCurrentLocaleCode());
    return clonedDate.format(formatString);
  };
  this.formatNumber = function (numberToFormat) {
    return numberToFormat;
  };
  this.getDiff = function (value, comparing, unit) {
    return value.diff(comparing, unit);
  };
  this.isEqual = function (value, comparing) {
    if (value === null && comparing === null) {
      return true;
    }
    return _this.moment(value).isSame(comparing);
  };
  this.isSameYear = function (value, comparing) {
    return value.isSame(comparing, 'year');
  };
  this.isSameMonth = function (value, comparing) {
    return value.isSame(comparing, 'month');
  };
  this.isSameDay = function (value, comparing) {
    return value.isSame(comparing, 'day');
  };
  this.isSameHour = function (value, comparing) {
    return value.isSame(comparing, 'hour');
  };
  this.isAfter = function (value, comparing) {
    return value.isAfter(comparing);
  };
  this.isAfterYear = function (value, comparing) {
    return value.isAfter(comparing, 'year');
  };
  this.isAfterDay = function (value, comparing) {
    return value.isAfter(comparing, 'day');
  };
  this.isBefore = function (value, comparing) {
    return value.isBefore(comparing);
  };
  this.isBeforeYear = function (value, comparing) {
    return value.isBefore(comparing, 'year');
  };
  this.isBeforeDay = function (value, comparing) {
    return value.isBefore(comparing, 'day');
  };
  this.isWithinRange = function (value, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      start = _ref4[0],
      end = _ref4[1];
    return value.isBetween(start, end, null, '[]');
  };
  this.startOfYear = function (value) {
    return value.clone().startOf('year');
  };
  this.startOfMonth = function (value) {
    return value.clone().startOf('month');
  };
  this.startOfWeek = function (value) {
    return value.clone().startOf('week');
  };
  this.startOfDay = function (value) {
    return value.clone().startOf('day');
  };
  this.endOfYear = function (value) {
    return value.clone().endOf('year');
  };
  this.endOfMonth = function (value) {
    return value.clone().endOf('month');
  };
  this.endOfWeek = function (value) {
    return value.clone().endOf('week');
  };
  this.endOfDay = function (value) {
    return value.clone().endOf('day');
  };
  this.addYears = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'years') : value.clone().add(amount, 'years');
  };
  this.addMonths = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'months') : value.clone().add(amount, 'months');
  };
  this.addWeeks = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'weeks') : value.clone().add(amount, 'weeks');
  };
  this.addDays = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'days') : value.clone().add(amount, 'days');
  };
  this.addHours = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'hours') : value.clone().add(amount, 'hours');
  };
  this.addMinutes = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'minutes') : value.clone().add(amount, 'minutes');
  };
  this.addSeconds = function (value, amount) {
    return amount < 0 ? value.clone().subtract(Math.abs(amount), 'seconds') : value.clone().add(amount, 'seconds');
  };
  this.getYear = function (value) {
    return value.get('year');
  };
  this.getMonth = function (value) {
    return value.get('month');
  };
  this.getDate = function (value) {
    return value.get('date');
  };
  this.getHours = function (value) {
    return value.get('hours');
  };
  this.getMinutes = function (value) {
    return value.get('minutes');
  };
  this.getSeconds = function (value) {
    return value.get('seconds');
  };
  this.getMilliseconds = function (value) {
    return value.get('milliseconds');
  };
  this.setYear = function (value, year) {
    return value.clone().year(year);
  };
  this.setMonth = function (value, month) {
    return value.clone().month(month);
  };
  this.setDate = function (value, date) {
    return value.clone().date(date);
  };
  this.setHours = function (value, hours) {
    return value.clone().hours(hours);
  };
  this.setMinutes = function (value, minutes) {
    return value.clone().minutes(minutes);
  };
  this.setSeconds = function (value, seconds) {
    return value.clone().seconds(seconds);
  };
  this.setMilliseconds = function (value, milliseconds) {
    return value.clone().milliseconds(milliseconds);
  };
  this.getDaysInMonth = function (value) {
    return value.daysInMonth();
  };
  this.getNextMonth = function (value) {
    return value.clone().add(1, 'month');
  };
  this.getPreviousMonth = function (value) {
    return value.clone().subtract(1, 'month');
  };
  this.getMonthArray = function (value) {
    var firstMonth = _this.startOfYear(value);
    var monthArray = [firstMonth];
    while (monthArray.length < 12) {
      var prevMonth = monthArray[monthArray.length - 1];
      monthArray.push(_this.getNextMonth(prevMonth));
    }
    return monthArray;
  };
  this.mergeDateAndTime = function (dateParam, timeParam) {
    return dateParam.clone().hour(timeParam.hour()).minute(timeParam.minute()).second(timeParam.second());
  };
  this.getWeekdays = function () {
    return _this.syncMomentLocale(function () {
      return defaultMoment.weekdaysShort(true);
    });
  };
  this.getWeekArray = function (value) {
    var cleanValue = _this.setLocaleToValue(value);
    var start = cleanValue.clone().startOf('month').startOf('week');
    var end = cleanValue.clone().endOf('month').endOf('week');
    var count = 0;
    var current = start;
    var nestedWeeks = [];
    while (current.isBefore(end)) {
      var weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = current.clone().add(1, 'day');
      count += 1;
    }
    return nestedWeeks;
  };
  this.getWeekNumber = function (value) {
    return value.week();
  };
  this.getYearRange = function (start, end) {
    var startDate = _this.moment(start).startOf('year');
    var endDate = _this.moment(end).endOf('year');
    var years = [];
    var current = startDate;
    while (current.isBefore(endDate)) {
      years.push(current);
      current = current.clone().add(1, 'year');
    }
    return years;
  };
  this.getMeridiemText = function (ampm) {
    if (_this.is12HourCycleInCurrentLocale()) {
      // AM/PM translation only possible in those who have 12 hour cycle in locale.
      return defaultMoment.localeData(_this.getCurrentLocaleCode()).meridiem(ampm === 'am' ? 0 : 13, 0, false);
    }
    return ampm === 'am' ? 'AM' : 'PM'; // fallback for de, ru, ...etc
  };
  this.moment = instance || defaultMoment;
  this.locale = locale;
  this.formats = _extends({}, defaultFormats, formats);
});
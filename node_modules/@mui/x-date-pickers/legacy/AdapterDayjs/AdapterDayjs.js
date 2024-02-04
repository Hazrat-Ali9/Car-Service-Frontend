import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
/* eslint-disable class-methods-use-this */
import defaultDayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat';
import localizedFormatPlugin from 'dayjs/plugin/localizedFormat';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { buildWarning } from '../internals/utils/warning';
defaultDayjs.extend(customParseFormatPlugin);
defaultDayjs.extend(localizedFormatPlugin);
defaultDayjs.extend(isBetweenPlugin);
var localeNotFoundWarning = buildWarning(['Your locale has not been found.', 'Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale', "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", 'fallback on English locale']);
var formatTokenMap = {
  // Year
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
  d: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 2
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
  weekdayShort: 'dd',
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
var MISSING_UTC_PLUGIN = ['Missing UTC plugin', 'To be able to use UTC or timezones, you have to enable the `utc` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc'].join('\n');
var MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone'].join('\n');
var withLocale = function withLocale(dayjs, locale) {
  return !locale ? dayjs : function () {
    return dayjs.apply(void 0, arguments).locale(locale);
  };
};

/**
 * Based on `@date-io/dayjs`
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
export var AdapterDayjs = /*#__PURE__*/_createClass(function AdapterDayjs() {
  var _this = this,
    _this$rawDayJsInstanc;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _locale = _ref.locale,
    formats = _ref.formats,
    instance = _ref.instance;
  _classCallCheck(this, AdapterDayjs);
  this.isMUIAdapter = true;
  this.isTimezoneCompatible = true;
  this.lib = 'dayjs';
  this.rawDayJsInstance = void 0;
  this.dayjs = void 0;
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
  this.hasUTCPlugin = function () {
    return typeof defaultDayjs.utc !== 'undefined';
  };
  this.hasTimezonePlugin = function () {
    return typeof defaultDayjs.tz !== 'undefined';
  };
  this.isSame = function (value, comparing, comparisonTemplate) {
    var comparingInValueTimezone = _this.setTimezone(comparing, _this.getTimezone(value));
    return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
  };
  /**
   * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
   */
  this.cleanTimezone = function (timezone) {
    switch (timezone) {
      case 'default':
        {
          return undefined;
        }
      case 'system':
        {
          return defaultDayjs.tz.guess();
        }
      default:
        {
          return timezone;
        }
    }
  };
  this.createSystemDate = function (value) {
    // TODO v7: Stop using `this.rawDayJsInstance` (drop the `instance` param on the adapters)
    /* istanbul ignore next */
    if (_this.rawDayJsInstance) {
      return _this.rawDayJsInstance(value);
    }
    if (_this.hasUTCPlugin() && _this.hasTimezonePlugin()) {
      var timezone = defaultDayjs.tz.guess();

      // We can't change the system timezone in the tests
      /* istanbul ignore next */
      if (timezone !== 'UTC') {
        return defaultDayjs.tz(value, timezone);
      }
      return defaultDayjs(value);
    }
    return defaultDayjs(value);
  };
  this.createUTCDate = function (value) {
    /* istanbul ignore next */
    if (!_this.hasUTCPlugin()) {
      throw new Error(MISSING_UTC_PLUGIN);
    }
    return defaultDayjs.utc(value);
  };
  this.createTZDate = function (value, timezone) {
    /* istanbul ignore next */
    if (!_this.hasUTCPlugin()) {
      throw new Error(MISSING_UTC_PLUGIN);
    }

    /* istanbul ignore next */
    if (!_this.hasTimezonePlugin()) {
      throw new Error(MISSING_TIMEZONE_PLUGIN);
    }
    var keepLocalTime = value !== undefined && !value.endsWith('Z');
    return defaultDayjs(value).tz(_this.cleanTimezone(timezone), keepLocalTime);
  };
  this.getLocaleFormats = function () {
    var locales = defaultDayjs.Ls;
    var locale = _this.locale || 'en';
    var localeObject = locales[locale];
    if (localeObject === undefined) {
      localeNotFoundWarning();
      localeObject = locales.en;
    }
    return localeObject.formats;
  };
  /**
   * If the new day does not have the same offset as the old one (when switching to summer day time for example),
   * Then dayjs will not automatically adjust the offset (moment does).
   * We have to parse again the value to make sure the `fixOffset` method is applied.
   * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
   */
  this.adjustOffset = function (value) {
    if (!_this.hasTimezonePlugin()) {
      return value;
    }
    var timezone = _this.getTimezone(value);
    if (timezone !== 'UTC') {
      var _fixedValue$$offset, _value$$offset;
      var fixedValue = value.tz(_this.cleanTimezone(timezone), true);
      // @ts-ignore
      if (((_fixedValue$$offset = fixedValue.$offset) != null ? _fixedValue$$offset : 0) === ((_value$$offset = value.$offset) != null ? _value$$offset : 0)) {
        return value;
      }
      return fixedValue;
    }
    return value;
  };
  this.date = function (value) {
    if (value === null) {
      return null;
    }
    return _this.dayjs(value);
  };
  this.dateWithTimezone = function (value, timezone) {
    if (value === null) {
      return null;
    }
    var parsedValue;
    if (timezone === 'UTC') {
      parsedValue = _this.createUTCDate(value);
    } else if (timezone === 'system' || timezone === 'default' && !_this.hasTimezonePlugin()) {
      parsedValue = _this.createSystemDate(value);
    } else {
      parsedValue = _this.createTZDate(value, timezone);
    }
    if (_this.locale === undefined) {
      return parsedValue;
    }
    return parsedValue.locale(_this.locale);
  };
  this.getTimezone = function (value) {
    if (_this.hasTimezonePlugin()) {
      var _value$$x;
      // @ts-ignore
      var zone = (_value$$x = value.$x) == null ? void 0 : _value$$x.$timezone;
      if (zone) {
        return zone;
      }
    }
    if (_this.hasUTCPlugin() && value.isUTC()) {
      return 'UTC';
    }
    return 'system';
  };
  this.setTimezone = function (value, timezone) {
    if (_this.getTimezone(value) === timezone) {
      return value;
    }
    if (timezone === 'UTC') {
      /* istanbul ignore next */
      if (!_this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return value.utc();
    }

    // We know that we have the UTC plugin.
    // Otherwise, the value timezone would always equal "system".
    // And it would be caught by the first "if" of this method.
    if (timezone === 'system') {
      return value.local();
    }
    if (!_this.hasTimezonePlugin()) {
      if (timezone === 'default') {
        return value;
      }

      /* istanbul ignore next */
      throw new Error(MISSING_TIMEZONE_PLUGIN);
    }
    return defaultDayjs.tz(value, _this.cleanTimezone(timezone));
  };
  this.toJsDate = function (value) {
    return value.toDate();
  };
  this.parseISO = function (isoString) {
    return _this.dayjs(isoString);
  };
  this.toISO = function (value) {
    return value.toISOString();
  };
  this.parse = function (value, format) {
    if (value === '') {
      return null;
    }
    return _this.dayjs(value, format, _this.locale, true);
  };
  this.getCurrentLocaleCode = function () {
    return _this.locale || 'en';
  };
  this.is12HourCycleInCurrentLocale = function () {
    /* istanbul ignore next */
    return /A|a/.test(_this.getLocaleFormats().LT || '');
  };
  this.expandFormat = function (format) {
    var localeFormats = _this.getLocaleFormats();

    // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
    var t = function t(formatBis) {
      return formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
        return a || b.slice(1);
      });
    };
    return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
      var B = b && b.toUpperCase();
      return a || localeFormats[b] || t(localeFormats[B]);
    });
  };
  this.getFormatHelperText = function (format) {
    return _this.expandFormat(format).replace(/a/gi, '(a|p)m').toLocaleLowerCase();
  };
  this.isNull = function (value) {
    return value === null;
  };
  this.isValid = function (value) {
    return _this.dayjs(value).isValid();
  };
  this.format = function (value, formatKey) {
    return _this.formatByString(value, _this.formats[formatKey]);
  };
  this.formatByString = function (value, formatString) {
    return _this.dayjs(value).format(formatString);
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
    return _this.dayjs(value).toDate().getTime() === _this.dayjs(comparing).toDate().getTime();
  };
  this.isSameYear = function (value, comparing) {
    return _this.isSame(value, comparing, 'YYYY');
  };
  this.isSameMonth = function (value, comparing) {
    return _this.isSame(value, comparing, 'YYYY-MM');
  };
  this.isSameDay = function (value, comparing) {
    return _this.isSame(value, comparing, 'YYYY-MM-DD');
  };
  this.isSameHour = function (value, comparing) {
    return value.isSame(comparing, 'hour');
  };
  this.isAfter = function (value, comparing) {
    return value > comparing;
  };
  this.isAfterYear = function (value, comparing) {
    if (!_this.hasUTCPlugin()) {
      return value.isAfter(comparing, 'year');
    }
    return !_this.isSameYear(value, comparing) && value.utc() > comparing.utc();
  };
  this.isAfterDay = function (value, comparing) {
    if (!_this.hasUTCPlugin()) {
      return value.isAfter(comparing, 'day');
    }
    return !_this.isSameDay(value, comparing) && value.utc() > comparing.utc();
  };
  this.isBefore = function (value, comparing) {
    return value < comparing;
  };
  this.isBeforeYear = function (value, comparing) {
    if (!_this.hasUTCPlugin()) {
      return value.isBefore(comparing, 'year');
    }
    return !_this.isSameYear(value, comparing) && value.utc() < comparing.utc();
  };
  this.isBeforeDay = function (value, comparing) {
    if (!_this.hasUTCPlugin()) {
      return value.isBefore(comparing, 'day');
    }
    return !_this.isSameDay(value, comparing) && value.utc() < comparing.utc();
  };
  this.isWithinRange = function (value, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      start = _ref3[0],
      end = _ref3[1];
    return value >= start && value <= end;
  };
  this.startOfYear = function (value) {
    return _this.adjustOffset(value.startOf('year'));
  };
  this.startOfMonth = function (value) {
    return _this.adjustOffset(value.startOf('month'));
  };
  this.startOfWeek = function (value) {
    return _this.adjustOffset(value.startOf('week'));
  };
  this.startOfDay = function (value) {
    return _this.adjustOffset(value.startOf('day'));
  };
  this.endOfYear = function (value) {
    return _this.adjustOffset(value.endOf('year'));
  };
  this.endOfMonth = function (value) {
    return _this.adjustOffset(value.endOf('month'));
  };
  this.endOfWeek = function (value) {
    return _this.adjustOffset(value.endOf('week'));
  };
  this.endOfDay = function (value) {
    return _this.adjustOffset(value.endOf('day'));
  };
  this.addYears = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'year') : value.add(amount, 'year'));
  };
  this.addMonths = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'month') : value.add(amount, 'month'));
  };
  this.addWeeks = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'week') : value.add(amount, 'week'));
  };
  this.addDays = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'day') : value.add(amount, 'day'));
  };
  this.addHours = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'hour') : value.add(amount, 'hour'));
  };
  this.addMinutes = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'minute') : value.add(amount, 'minute'));
  };
  this.addSeconds = function (value, amount) {
    return _this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'second') : value.add(amount, 'second'));
  };
  this.getYear = function (value) {
    return value.year();
  };
  this.getMonth = function (value) {
    return value.month();
  };
  this.getDate = function (value) {
    return value.date();
  };
  this.getHours = function (value) {
    return value.hour();
  };
  this.getMinutes = function (value) {
    return value.minute();
  };
  this.getSeconds = function (value) {
    return value.second();
  };
  this.getMilliseconds = function (value) {
    return value.millisecond();
  };
  this.setYear = function (value, year) {
    return _this.adjustOffset(value.set('year', year));
  };
  this.setMonth = function (value, month) {
    return _this.adjustOffset(value.set('month', month));
  };
  this.setDate = function (value, date) {
    return _this.adjustOffset(value.set('date', date));
  };
  this.setHours = function (value, hours) {
    return _this.adjustOffset(value.set('hour', hours));
  };
  this.setMinutes = function (value, minutes) {
    return _this.adjustOffset(value.set('minute', minutes));
  };
  this.setSeconds = function (value, seconds) {
    return _this.adjustOffset(value.set('second', seconds));
  };
  this.setMilliseconds = function (value, milliseconds) {
    return _this.adjustOffset(value.set('millisecond', milliseconds));
  };
  this.getDaysInMonth = function (value) {
    return value.daysInMonth();
  };
  this.getNextMonth = function (value) {
    return _this.addMonths(value, 1);
  };
  this.getPreviousMonth = function (value) {
    return _this.addMonths(value, -1);
  };
  this.getMonthArray = function (value) {
    var firstMonth = value.startOf('year');
    var monthArray = [firstMonth];
    while (monthArray.length < 12) {
      var prevMonth = monthArray[monthArray.length - 1];
      monthArray.push(_this.addMonths(prevMonth, 1));
    }
    return monthArray;
  };
  this.mergeDateAndTime = function (dateParam, timeParam) {
    return dateParam.hour(timeParam.hour()).minute(timeParam.minute()).second(timeParam.second());
  };
  this.getWeekdays = function () {
    var start = _this.dayjs().startOf('week');
    return [0, 1, 2, 3, 4, 5, 6].map(function (diff) {
      return _this.formatByString(_this.addDays(start, diff), 'dd');
    });
  };
  this.getWeekArray = function (value) {
    var cleanValue = _this.setLocaleToValue(value);
    var start = cleanValue.startOf('month').startOf('week');
    var end = cleanValue.endOf('month').endOf('week');
    var count = 0;
    var current = start;
    var nestedWeeks = [];
    while (current < end) {
      var weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = _this.addDays(current, 1);
      count += 1;
    }
    return nestedWeeks;
  };
  this.getWeekNumber = function (value) {
    return value.week();
  };
  this.getYearRange = function (start, end) {
    var startDate = start.startOf('year');
    var endDate = end.endOf('year');
    var years = [];
    var current = startDate;
    while (current < endDate) {
      years.push(current);
      current = _this.addYears(current, 1);
    }
    return years;
  };
  this.getMeridiemText = function (ampm) {
    return ampm === 'am' ? 'AM' : 'PM';
  };
  this.rawDayJsInstance = instance;
  this.dayjs = withLocale((_this$rawDayJsInstanc = this.rawDayJsInstance) != null ? _this$rawDayJsInstanc : defaultDayjs, _locale);
  this.locale = _locale;
  this.formats = _extends({}, defaultFormats, formats);
  defaultDayjs.extend(weekOfYear);
});
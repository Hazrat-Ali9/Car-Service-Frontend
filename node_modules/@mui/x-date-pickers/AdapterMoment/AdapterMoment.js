import _extends from "@babel/runtime/helpers/esm/extends";
/* eslint-disable class-methods-use-this */
import defaultMoment from 'moment';
// From https://momentjs.com/docs/#/displaying/format/
const formatTokenMap = {
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
const defaultFormats = {
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
const MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to pass the default export from `moment-timezone` to the `dateLibInstance` prop of `LocalizationProvider`', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#moment-and-timezone'].join('\n');

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
export class AdapterMoment {
  constructor({
    locale,
    formats,
    instance
  } = {}) {
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
    this.setLocaleToValue = value => {
      const expectedLocale = this.getCurrentLocaleCode();
      if (expectedLocale === value.locale()) {
        return value;
      }
      return value.locale(expectedLocale);
    };
    /**
     * Some methods from moment can't take the locale as a parameter and always use the current locale.
     * To respect the adapter locale, we need to set it as the current locale and then reset the previous locale.
     */
    this.syncMomentLocale = runner => {
      var _this$locale;
      const momentLocale = defaultMoment.locale();
      const adapterLocale = (_this$locale = this.locale) != null ? _this$locale : 'en-us';
      if (momentLocale !== adapterLocale) {
        defaultMoment.locale(adapterLocale);
        const result = runner();
        defaultMoment.locale(momentLocale);
        return result;
      }
      return runner();
    };
    this.hasTimezonePlugin = () => typeof this.moment.tz !== 'undefined';
    this.createSystemDate = value => {
      const parsedValue = this.moment(value).local();
      if (this.locale === undefined) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.createUTCDate = value => {
      const parsedValue = this.moment.utc(value);
      if (this.locale === undefined) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.createTZDate = (value, timezone) => {
      /* istanbul ignore next */
      if (!this.hasTimezonePlugin()) {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      const parsedValue = timezone === 'default' ? this.moment(value) : this.moment.tz(value, timezone);
      if (this.locale === undefined) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.date = value => {
      if (value === null) {
        return null;
      }
      const moment = this.moment(value);
      moment.locale(this.getCurrentLocaleCode());
      return moment;
    };
    this.dateWithTimezone = (value, timezone) => {
      if (value === null) {
        return null;
      }
      if (timezone === 'UTC') {
        return this.createUTCDate(value);
      }
      if (timezone === 'system' || timezone === 'default' && !this.hasTimezonePlugin()) {
        return this.createSystemDate(value);
      }
      return this.createTZDate(value, timezone);
    };
    this.getTimezone = value => {
      var _value$_z, _ref, _this$moment$defaultZ;
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      const zone = (_value$_z = value._z) == null ? void 0 : _value$_z.name;
      const defaultZone = value.isUTC() ? 'UTC' : 'system';

      // @ts-ignore
      return (_ref = zone != null ? zone : (_this$moment$defaultZ = this.moment.defaultZone) == null ? void 0 : _this$moment$defaultZ.name) != null ? _ref : defaultZone;
    };
    this.setTimezone = (value, timezone) => {
      var _this$moment$defaultZ2, _this$moment$defaultZ3;
      if (this.getTimezone(value) === timezone) {
        return value;
      }
      if (timezone === 'UTC') {
        return value.clone().utc();
      }
      if (timezone === 'system') {
        return value.clone().local();
      }
      if (!this.hasTimezonePlugin()) {
        /* istanbul ignore next */
        if (timezone !== 'default') {
          throw new Error(MISSING_TIMEZONE_PLUGIN);
        }
        return value;
      }
      const cleanZone = timezone === 'default' ? // @ts-ignore
      (_this$moment$defaultZ2 = (_this$moment$defaultZ3 = this.moment.defaultZone) == null ? void 0 : _this$moment$defaultZ3.name) != null ? _this$moment$defaultZ2 : 'system' : timezone;
      if (cleanZone === 'system') {
        return value.clone().local();
      }
      const newValue = value.clone();
      newValue.tz(cleanZone);
      return newValue;
    };
    this.toJsDate = value => {
      return value.toDate();
    };
    this.parseISO = isoString => {
      return this.moment(isoString, true);
    };
    this.toISO = value => {
      return value.toISOString();
    };
    this.parse = (value, format) => {
      if (value === '') {
        return null;
      }
      if (this.locale) {
        return this.moment(value, format, this.locale, true);
      }
      return this.moment(value, format, true);
    };
    this.getCurrentLocaleCode = () => {
      return this.locale || defaultMoment.locale();
    };
    this.is12HourCycleInCurrentLocale = () => {
      return /A|a/.test(defaultMoment.localeData(this.getCurrentLocaleCode()).longDateFormat('LT'));
    };
    this.expandFormat = format => {
      // @see https://github.com/moment/moment/blob/develop/src/lib/format/format.js#L6
      const localFormattingTokens = /(\[[^[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g;
      return format.match(localFormattingTokens).map(token => {
        const firstCharacter = token[0];
        if (firstCharacter === 'L' || firstCharacter === ';') {
          return defaultMoment.localeData(this.getCurrentLocaleCode()).longDateFormat(token);
        }
        return token;
      }).join('');
    };
    this.getFormatHelperText = format => {
      return this.expandFormat(format).replace(/a/gi, '(a|p)m').toLocaleLowerCase();
    };
    this.isNull = value => {
      return value === null;
    };
    this.isValid = value => {
      return this.moment(value).isValid();
    };
    this.format = (value, formatKey) => {
      return this.formatByString(value, this.formats[formatKey]);
    };
    this.formatByString = (value, formatString) => {
      const clonedDate = value.clone();
      clonedDate.locale(this.getCurrentLocaleCode());
      return clonedDate.format(formatString);
    };
    this.formatNumber = numberToFormat => {
      return numberToFormat;
    };
    this.getDiff = (value, comparing, unit) => {
      return value.diff(comparing, unit);
    };
    this.isEqual = (value, comparing) => {
      if (value === null && comparing === null) {
        return true;
      }
      return this.moment(value).isSame(comparing);
    };
    this.isSameYear = (value, comparing) => {
      return value.isSame(comparing, 'year');
    };
    this.isSameMonth = (value, comparing) => {
      return value.isSame(comparing, 'month');
    };
    this.isSameDay = (value, comparing) => {
      return value.isSame(comparing, 'day');
    };
    this.isSameHour = (value, comparing) => {
      return value.isSame(comparing, 'hour');
    };
    this.isAfter = (value, comparing) => {
      return value.isAfter(comparing);
    };
    this.isAfterYear = (value, comparing) => {
      return value.isAfter(comparing, 'year');
    };
    this.isAfterDay = (value, comparing) => {
      return value.isAfter(comparing, 'day');
    };
    this.isBefore = (value, comparing) => {
      return value.isBefore(comparing);
    };
    this.isBeforeYear = (value, comparing) => {
      return value.isBefore(comparing, 'year');
    };
    this.isBeforeDay = (value, comparing) => {
      return value.isBefore(comparing, 'day');
    };
    this.isWithinRange = (value, [start, end]) => {
      return value.isBetween(start, end, null, '[]');
    };
    this.startOfYear = value => {
      return value.clone().startOf('year');
    };
    this.startOfMonth = value => {
      return value.clone().startOf('month');
    };
    this.startOfWeek = value => {
      return value.clone().startOf('week');
    };
    this.startOfDay = value => {
      return value.clone().startOf('day');
    };
    this.endOfYear = value => {
      return value.clone().endOf('year');
    };
    this.endOfMonth = value => {
      return value.clone().endOf('month');
    };
    this.endOfWeek = value => {
      return value.clone().endOf('week');
    };
    this.endOfDay = value => {
      return value.clone().endOf('day');
    };
    this.addYears = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'years') : value.clone().add(amount, 'years');
    };
    this.addMonths = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'months') : value.clone().add(amount, 'months');
    };
    this.addWeeks = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'weeks') : value.clone().add(amount, 'weeks');
    };
    this.addDays = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'days') : value.clone().add(amount, 'days');
    };
    this.addHours = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'hours') : value.clone().add(amount, 'hours');
    };
    this.addMinutes = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'minutes') : value.clone().add(amount, 'minutes');
    };
    this.addSeconds = (value, amount) => {
      return amount < 0 ? value.clone().subtract(Math.abs(amount), 'seconds') : value.clone().add(amount, 'seconds');
    };
    this.getYear = value => {
      return value.get('year');
    };
    this.getMonth = value => {
      return value.get('month');
    };
    this.getDate = value => {
      return value.get('date');
    };
    this.getHours = value => {
      return value.get('hours');
    };
    this.getMinutes = value => {
      return value.get('minutes');
    };
    this.getSeconds = value => {
      return value.get('seconds');
    };
    this.getMilliseconds = value => {
      return value.get('milliseconds');
    };
    this.setYear = (value, year) => {
      return value.clone().year(year);
    };
    this.setMonth = (value, month) => {
      return value.clone().month(month);
    };
    this.setDate = (value, date) => {
      return value.clone().date(date);
    };
    this.setHours = (value, hours) => {
      return value.clone().hours(hours);
    };
    this.setMinutes = (value, minutes) => {
      return value.clone().minutes(minutes);
    };
    this.setSeconds = (value, seconds) => {
      return value.clone().seconds(seconds);
    };
    this.setMilliseconds = (value, milliseconds) => {
      return value.clone().milliseconds(milliseconds);
    };
    this.getDaysInMonth = value => {
      return value.daysInMonth();
    };
    this.getNextMonth = value => {
      return value.clone().add(1, 'month');
    };
    this.getPreviousMonth = value => {
      return value.clone().subtract(1, 'month');
    };
    this.getMonthArray = value => {
      const firstMonth = this.startOfYear(value);
      const monthArray = [firstMonth];
      while (monthArray.length < 12) {
        const prevMonth = monthArray[monthArray.length - 1];
        monthArray.push(this.getNextMonth(prevMonth));
      }
      return monthArray;
    };
    this.mergeDateAndTime = (dateParam, timeParam) => {
      return dateParam.clone().hour(timeParam.hour()).minute(timeParam.minute()).second(timeParam.second());
    };
    this.getWeekdays = () => this.syncMomentLocale(() => defaultMoment.weekdaysShort(true));
    this.getWeekArray = value => {
      const cleanValue = this.setLocaleToValue(value);
      const start = cleanValue.clone().startOf('month').startOf('week');
      const end = cleanValue.clone().endOf('month').endOf('week');
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      while (current.isBefore(end)) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = current.clone().add(1, 'day');
        count += 1;
      }
      return nestedWeeks;
    };
    this.getWeekNumber = value => {
      return value.week();
    };
    this.getYearRange = (start, end) => {
      const startDate = this.moment(start).startOf('year');
      const endDate = this.moment(end).endOf('year');
      const years = [];
      let current = startDate;
      while (current.isBefore(endDate)) {
        years.push(current);
        current = current.clone().add(1, 'year');
      }
      return years;
    };
    this.getMeridiemText = ampm => {
      if (this.is12HourCycleInCurrentLocale()) {
        // AM/PM translation only possible in those who have 12 hour cycle in locale.
        return defaultMoment.localeData(this.getCurrentLocaleCode()).meridiem(ampm === 'am' ? 0 : 13, 0, false);
      }
      return ampm === 'am' ? 'AM' : 'PM'; // fallback for de, ru, ...etc
    };
    this.moment = instance || defaultMoment;
    this.locale = locale;
    this.formats = _extends({}, defaultFormats, formats);
  }
}
import { getPickersLocalization } from './utils/getPickersLocalization';
var views = {
  hours: 'ώρες',
  minutes: 'λεπτά',
  seconds: 'δευτερόλεπτα',
  meridiem: 'μεσημβρία'
};
var elGRPickers = {
  // Calendar navigation
  previousMonth: 'Προηγούμενος μήνας',
  nextMonth: 'Επόμενος μήνας',
  // View navigation
  openPreviousView: 'ανοίγμα προηγούμενης προβολή',
  openNextView: 'ανοίγμα επόμενης προβολή',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'η προβολή έτους είναι ανοιχτή, μεταβείτε στην προβολή ημερολογίου' : 'η προβολή ημερολογίου είναι ανοιχτή, μεταβείτε στην προβολή έτους';
  },
  // DateRange placeholders
  start: 'Αρχή',
  end: 'Τέλος',
  // Action bar
  cancelButtonLabel: 'Άκυρο',
  clearButtonLabel: 'Καθαρισμός',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Σήμερα',
  // Toolbar titles
  datePickerToolbarTitle: 'Επιλέξτε ημερομηνία',
  dateTimePickerToolbarTitle: 'Επιλέξτε ημερομηνία και ώρα',
  timePickerToolbarTitle: 'Επιλέξτε ώρα',
  dateRangePickerToolbarTitle: 'Επιλέξτε εύρος ημερομηνιών',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 ".concat(views[view], ". ").concat(time === null ? 'Δεν έχει επιλεγεί ώρα' : "\u0397 \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03CE\u03C1\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " \u03CE\u03C1\u03B5\u03C2");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " \u03BB\u03B5\u03C0\u03C4\u03AC");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 ".concat(views[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Αριθμός εβδομάδας',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "\u0395\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1 ".concat(weekNumber);
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1, \u03B7 \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ".concat(utils.format(value, 'fullDate')) : 'Επιλέξτε ημερομηνία';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03CE\u03C1\u03B1, \u03B7 \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B7 \u03CE\u03C1\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ".concat(utils.format(value, 'fullTime')) : 'Επιλέξτε ώρα';
  },
  // fieldClearLabel: 'Clear value',

  // Table labels
  timeTableLabel: 'επιλέξτε ώρα',
  dateTableLabel: 'επιλέξτε ημερομηνία',
  // Field section placeholders
  fieldYearPlaceholder: function fieldYearPlaceholder(params) {
    return 'Y'.repeat(params.digitAmount);
  },
  fieldMonthPlaceholder: function fieldMonthPlaceholder(params) {
    return params.contentType === 'letter' ? 'MMMM' : 'MM';
  },
  fieldDayPlaceholder: function fieldDayPlaceholder() {
    return 'DD';
  },
  fieldWeekDayPlaceholder: function fieldWeekDayPlaceholder(params) {
    return params.contentType === 'letter' ? 'EEEE' : 'EE';
  },
  fieldHoursPlaceholder: function fieldHoursPlaceholder() {
    return 'hh';
  },
  fieldMinutesPlaceholder: function fieldMinutesPlaceholder() {
    return 'mm';
  },
  fieldSecondsPlaceholder: function fieldSecondsPlaceholder() {
    return 'ss';
  },
  fieldMeridiemPlaceholder: function fieldMeridiemPlaceholder() {
    return 'aa';
  }
};
export var elGR = getPickersLocalization(elGRPickers);
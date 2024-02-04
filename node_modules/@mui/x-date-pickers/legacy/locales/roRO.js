import { getPickersLocalization } from './utils/getPickersLocalization';
// maps TimeView to its translation
var timeViews = {
  hours: 'Ore',
  minutes: 'Minute',
  seconds: 'Secunde',
  meridiem: 'Meridiane'
};
var roROPickers = {
  // Calendar navigation
  previousMonth: 'Luna anterioară',
  nextMonth: 'Luna următoare',
  // View navigation
  openPreviousView: 'Deschideți vizualizarea anterioară',
  openNextView: 'Deschideți vizualizarea următoare',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'Vizualizarea anuală este deschisă, comutați la vizualizarea calendarului' : 'Vizualizarea calendarului este deschisă, comutați la vizualizarea anuală';
  },
  // DateRange placeholders
  start: 'Început',
  end: 'Sfârșit',
  // Action bar
  cancelButtonLabel: 'Anulare',
  clearButtonLabel: 'Ștergere',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Astăzi',
  // Toolbar titles
  datePickerToolbarTitle: 'Selectați data',
  dateTimePickerToolbarTitle: 'Selectați data și ora',
  timePickerToolbarTitle: 'Selectați ora',
  dateRangePickerToolbarTitle: 'Selectați intervalul de date',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    var _timeViews$view;
    return "Selecta\u021Bi ".concat((_timeViews$view = timeViews[view]) != null ? _timeViews$view : view, ". ").concat(time === null ? 'Nicio oră selectată' : "Ora selectat\u0103 este ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " ").concat(timeViews.hours);
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " ").concat(timeViews.minutes);
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, "  ").concat(timeViews.seconds);
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "Selecta\u021Bi ".concat(timeViews[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Număr săptămână',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "S\u0103pt\u0103m\xE2na ".concat(weekNumber);
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Selecta\u021Bi data, data selectat\u0103 este ".concat(utils.format(value, 'fullDate')) : 'Selectați data';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Selecta\u021Bi ora, ora selectat\u0103 este ".concat(utils.format(value, 'fullTime')) : 'Selectați ora';
  },
  fieldClearLabel: 'Golire conținut',
  // Table labels
  timeTableLabel: 'Selectați ora',
  dateTableLabel: 'Selectați data',
  // Field section placeholders
  fieldYearPlaceholder: function fieldYearPlaceholder(params) {
    return 'A'.repeat(params.digitAmount);
  },
  fieldMonthPlaceholder: function fieldMonthPlaceholder(params) {
    return params.contentType === 'letter' ? 'LLLL' : 'LL';
  },
  fieldDayPlaceholder: function fieldDayPlaceholder() {
    return 'ZZ';
  },
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
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
export var roRO = getPickersLocalization(roROPickers);
import { getPickersLocalization } from './utils/getPickersLocalization';
var timeViews = {
  hours: 'klukkustundir',
  minutes: 'mínútur',
  seconds: 'sekúndur',
  meridiem: 'eftirmiðdagur'
};
var isISPickers = {
  // Calendar navigation
  previousMonth: 'Fyrri mánuður',
  nextMonth: 'Næsti mánuður',
  // View navigation
  openPreviousView: 'opna fyrri skoðun',
  openNextView: 'opna næstu skoðun',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'ársskoðun er opin, skipta yfir í dagatalsskoðun' : 'dagatalsskoðun er opin, skipta yfir í ársskoðun';
  },
  // DateRange placeholders
  start: 'Upphaf',
  end: 'Endir',
  // Action bar
  cancelButtonLabel: 'Hætta við',
  clearButtonLabel: 'Hreinsa',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Í dag',
  // Toolbar titles
  datePickerToolbarTitle: 'Velja dagsetningu',
  dateTimePickerToolbarTitle: 'Velja dagsetningu og tíma',
  timePickerToolbarTitle: 'Velja tíma',
  dateRangePickerToolbarTitle: 'Velja tímabil',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "Velja ".concat(timeViews[view], ". ").concat(time === null ? 'Enginn tími valinn' : "Valinn t\xEDmi er ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " klukkustundir");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " m\xEDn\xFAtur");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " sek\xFAndur");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "Velja ".concat(timeViews[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Vikunúmer',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "Vika ".concat(weekNumber);
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Velja dagsetningu, valin dagsetning er ".concat(utils.format(value, 'fullDate')) : 'Velja dagsetningu';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Velja t\xEDma, valinn t\xEDmi er ".concat(utils.format(value, 'fullTime')) : 'Velja tíma';
  },
  // fieldClearLabel: 'Clear value',

  // Table labels
  timeTableLabel: 'velja tíma',
  dateTableLabel: 'velja dagsetningu',
  // Field section placeholders
  fieldYearPlaceholder: function fieldYearPlaceholder(params) {
    return 'Á'.repeat(params.digitAmount);
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
    return 'kk';
  },
  fieldMinutesPlaceholder: function fieldMinutesPlaceholder() {
    return 'mm';
  },
  fieldSecondsPlaceholder: function fieldSecondsPlaceholder() {
    return 'ss';
  },
  fieldMeridiemPlaceholder: function fieldMeridiemPlaceholder() {
    return 'ee';
  }
};
export var isIS = getPickersLocalization(isISPickers);
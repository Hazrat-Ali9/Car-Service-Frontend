import { getPickersLocalization } from './utils/getPickersLocalization';
var views = {
  hours: 'orduak',
  minutes: 'minutuak',
  seconds: 'segunduak',
  meridiem: 'meridianoa'
};
var euPickers = {
  // Calendar navigation
  previousMonth: 'Azken hilabetea',
  nextMonth: 'Hurrengo hilabetea',
  // View navigation
  openPreviousView: 'azken bista ireki',
  openNextView: 'hurrengo bista ireki',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'urteko bista irekita dago, aldatu egutegi bistara' : 'egutegi bista irekita dago, aldatu urteko bistara';
  },
  // DateRange placeholders
  start: 'Hasi',
  end: 'Bukatu',
  // Action bar
  cancelButtonLabel: 'Utxi',
  clearButtonLabel: 'Garbitu',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Gaur',
  // Toolbar titles
  datePickerToolbarTitle: 'Data aukeratu',
  dateTimePickerToolbarTitle: 'Data eta ordua aukeratu',
  timePickerToolbarTitle: 'Ordua aukeratu',
  dateRangePickerToolbarTitle: 'Data tartea aukeratu',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "Aukeratu ".concat(views[view], ". ").concat(time === null ? 'Ez da ordurik aukertau' : "Aukeratutako ordua ".concat(adapter.format(time, 'fullTime'), " da"));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " ordu");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " minutu");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " segundu");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "Aukeratu ".concat(views[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Astea zenbakia',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "".concat(weekNumber, " astea");
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Data aukeratu, aukeratutako data ".concat(utils.format(value, 'fullDate'), " da") : 'Data aukeratu';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Ordua aukeratu, aukeratutako ordua ".concat(utils.format(value, 'fullTime'), " da") : 'Ordua aukeratu';
  },
  fieldClearLabel: 'Balioa garbitu',
  // Table labels
  timeTableLabel: 'ordua aukeratu',
  dateTableLabel: 'data aukeratu',
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
export var eu = getPickersLocalization(euPickers);
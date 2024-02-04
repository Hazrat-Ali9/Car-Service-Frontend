import { getPickersLocalization } from './utils/getPickersLocalization';

// This object is not Partial<PickersLocaleText> because it is the default values

var mkPickers = {
  // Calendar navigation
  previousMonth: 'Предходен месец',
  nextMonth: 'Следен месец',
  // View navigation
  openPreviousView: 'отвори претходен приказ',
  openNextView: 'отвори следен приказ',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'годишен приказ, отвори календарски приказ' : 'календарски приказ, отвори годишен приказ';
  },
  // DateRange placeholders
  start: 'Почеток',
  end: 'Крај',
  // Action bar
  cancelButtonLabel: 'Откажи',
  clearButtonLabel: 'Избриши',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Денес',
  // Toolbar titles
  datePickerToolbarTitle: 'Избери датум',
  dateTimePickerToolbarTitle: 'Избери датум и време',
  timePickerToolbarTitle: 'Избери време',
  dateRangePickerToolbarTitle: 'Избери временски опсег',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "Select ".concat(view, ". ").concat(time === null ? 'Нема избрано време' : "\u0418\u0437\u0431\u0440\u0430\u043D\u043E\u0442\u043E \u0432\u0440\u0435\u043C\u0435 \u0435 ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " \u0447\u0430\u0441\u0430");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " \u043C\u0438\u043D\u0443\u0442\u0438");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " \u0441\u0435\u043A\u0443\u043D\u0434\u0438");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "\u0418\u0437\u0431\u0435\u0440\u0438 ".concat(view);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Недела број',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "\u041D\u0435\u0434\u0435\u043B\u0430 ".concat(weekNumber);
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "\u0418\u0437\u0431\u0435\u0440\u0438 \u0434\u0430\u0442\u0443\u043C, \u0438\u0437\u0431\u0440\u0430\u043D\u0438\u043E\u0442 \u0434\u0430\u0442\u0443\u043C \u0435 ".concat(utils.format(value, 'fullDate')) : 'Избери датум';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "\u0418\u0437\u0431\u0435\u0440\u0438 \u0432\u0440\u0435\u043C\u0435, \u0438\u0437\u0431\u0440\u0430\u043D\u043E\u0442\u043E \u0432\u0440\u0435\u043C\u0435 \u0435 ".concat(utils.format(value, 'fullTime')) : 'Избери време';
  },
  fieldClearLabel: 'Избриши',
  // Table labels
  timeTableLabel: 'одбери време',
  dateTableLabel: 'одбери датум',
  // Field section placeholders
  fieldYearPlaceholder: function fieldYearPlaceholder(params) {
    return 'Г'.repeat(params.digitAmount);
  },
  fieldMonthPlaceholder: function fieldMonthPlaceholder(params) {
    return params.contentType === 'letter' ? 'MMMM' : 'MM';
  },
  fieldDayPlaceholder: function fieldDayPlaceholder() {
    return 'ДД';
  },
  fieldWeekDayPlaceholder: function fieldWeekDayPlaceholder(params) {
    return params.contentType === 'letter' ? 'EEEE' : 'EE';
  },
  fieldHoursPlaceholder: function fieldHoursPlaceholder() {
    return 'чч';
  },
  fieldMinutesPlaceholder: function fieldMinutesPlaceholder() {
    return 'мм';
  },
  fieldSecondsPlaceholder: function fieldSecondsPlaceholder() {
    return 'сс';
  },
  fieldMeridiemPlaceholder: function fieldMeridiemPlaceholder() {
    return 'aa';
  }
};
export var mk = getPickersLocalization(mkPickers);
import { getPickersLocalization } from './utils/getPickersLocalization';
var views = {
  hours: '小時',
  minutes: '分鐘',
  seconds: '秒',
  meridiem: '子午線'
};
var zhHKPickers = {
  // Calendar navigation
  previousMonth: '上個月',
  nextMonth: '下個月',
  // View navigation
  openPreviousView: '前一個檢視表',
  openNextView: '下一個檢視表',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? '年份檢視表已打開，切換以檢視日曆' : '日曆檢視表已打開，切換以檢視年份';
  },
  // DateRange placeholders
  start: '開始',
  end: '結束',
  // Action bar
  cancelButtonLabel: '取消',
  clearButtonLabel: '清除',
  okButtonLabel: '確認',
  todayButtonLabel: '今日',
  // Toolbar titles
  datePickerToolbarTitle: '選擇日期',
  dateTimePickerToolbarTitle: '選擇日期和時間',
  timePickerToolbarTitle: '選擇時間',
  dateRangePickerToolbarTitle: '選擇時間範圍',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "\u9078\u64C7 ".concat(views[view], ". ").concat(time === null ? '未選擇時間' : "\u5DF2\u9078\u64C7".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, "\u5C0F\u6642");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, "\u5206\u9418");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, "\u79D2");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "\u9078\u64C7 ".concat(views[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: '週數',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "\u7B2C".concat(weekNumber, "\u9031");
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "\u9078\u64C7\u65E5\u671F\uFF0C\u5DF2\u9078\u64C7".concat(utils.format(value, 'fullDate')) : '選擇日期';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "\u9078\u64C7\u6642\u9593\uFF0C\u5DF2\u9078\u64C7".concat(utils.format(value, 'fullTime')) : '選擇時間';
  },
  // fieldClearLabel: 'Clear value',

  // Table labels
  timeTableLabel: '選擇時間',
  dateTableLabel: '選擇日期',
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
export var zhHK = getPickersLocalization(zhHKPickers);
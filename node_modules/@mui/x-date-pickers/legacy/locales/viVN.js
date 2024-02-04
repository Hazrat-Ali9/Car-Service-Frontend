import { getPickersLocalization } from './utils/getPickersLocalization';
var views = {
  hours: 'giờ',
  minutes: 'phút',
  seconds: 'giây',
  meridiem: 'buổi'
};
var viVNPickers = {
  // Calendar navigation
  previousMonth: 'Tháng trước',
  nextMonth: 'Tháng sau',
  // View navigation
  openPreviousView: 'mở xem trước',
  openNextView: 'mở xem sau',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'đang mở xem năm, chuyển sang xem lịch' : 'đang mở xem lịch, chuyển sang xem năm';
  },
  // DateRange placeholders
  start: 'Bắt đầu',
  end: 'Kết thúc',
  // Action bar
  cancelButtonLabel: 'Hủy',
  clearButtonLabel: 'Xóa',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Hôm nay',
  // Toolbar titles
  datePickerToolbarTitle: 'Chọn ngày',
  dateTimePickerToolbarTitle: 'Chọn ngày và giờ',
  timePickerToolbarTitle: 'Chọn giờ',
  dateRangePickerToolbarTitle: 'Chọn khoảng ngày',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "Ch\u1ECDn ".concat(views[view], ". ").concat(time === null ? 'Không có giờ được chọn' : "Gi\u1EDD \u0111\u01B0\u1EE3c ch\u1ECDn l\xE0 ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " gi\u1EDD");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " ph\xFAt");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " gi\xE2y");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "Ch\u1ECDn ".concat(views[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Số tuần',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "Tu\u1EA7n ".concat(weekNumber);
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Ch\u1ECDn ng\xE0y, ng\xE0y \u0111\xE3 ch\u1ECDn l\xE0 ".concat(utils.format(value, 'fullDate')) : 'Chọn ngày';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Ch\u1ECDn gi\u1EDD, gi\u1EDD \u0111\xE3 ch\u1ECDn l\xE0 ".concat(utils.format(value, 'fullTime')) : 'Chọn giờ';
  },
  // fieldClearLabel: 'Clear value',

  // Table labels
  timeTableLabel: 'chọn giờ',
  dateTableLabel: 'chọn ngày',
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
export var viVN = getPickersLocalization(viVNPickers);
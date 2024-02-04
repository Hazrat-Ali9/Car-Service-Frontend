import { getPickersLocalization } from './utils/getPickersLocalization';
var views = {
  hours: 'tunnit',
  minutes: 'minuutit',
  seconds: 'sekuntit',
  meridiem: 'iltapäivä'
};
var fiFIPickers = {
  // Calendar navigation
  previousMonth: 'Edellinen kuukausi',
  nextMonth: 'Seuraava kuukausi',
  // View navigation
  openPreviousView: 'avaa edellinen kuukausi',
  openNextView: 'avaa seuraava kuukausi',
  calendarViewSwitchingButtonAriaLabel: function calendarViewSwitchingButtonAriaLabel(view) {
    return view === 'year' ? 'vuosinäkymä on auki, vaihda kalenterinäkymään' : 'kalenterinäkymä on auki, vaihda vuosinäkymään';
  },
  // DateRange placeholders
  start: 'Alku',
  end: 'Loppu',
  // Action bar
  cancelButtonLabel: 'Peruuta',
  clearButtonLabel: 'Tyhjennä',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Tänään',
  // Toolbar titles
  datePickerToolbarTitle: 'Valitse päivä',
  dateTimePickerToolbarTitle: 'Valitse päivä ja aika',
  timePickerToolbarTitle: 'Valitse aika',
  dateRangePickerToolbarTitle: 'Valitse aikaväli',
  // Clock labels
  clockLabelText: function clockLabelText(view, time, adapter) {
    return "Valitse ".concat(views[view], ". ").concat(time === null ? 'Ei aikaa valittuna' : "Valittu aika on ".concat(adapter.format(time, 'fullTime')));
  },
  hoursClockNumberText: function hoursClockNumberText(hours) {
    return "".concat(hours, " tuntia");
  },
  minutesClockNumberText: function minutesClockNumberText(minutes) {
    return "".concat(minutes, " minuuttia");
  },
  secondsClockNumberText: function secondsClockNumberText(seconds) {
    return "".concat(seconds, " sekunttia");
  },
  // Digital clock labels
  selectViewText: function selectViewText(view) {
    return "Valitse ".concat(views[view]);
  },
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Viikko',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: function calendarWeekNumberAriaLabelText(weekNumber) {
    return "Viikko ".concat(weekNumber);
  },
  calendarWeekNumberText: function calendarWeekNumberText(weekNumber) {
    return "".concat(weekNumber);
  },
  // Open picker labels
  openDatePickerDialogue: function openDatePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Valitse p\xE4iv\xE4, valittu p\xE4iv\xE4 on ".concat(utils.format(value, 'fullDate')) : 'Valitse päivä';
  },
  openTimePickerDialogue: function openTimePickerDialogue(value, utils) {
    return value !== null && utils.isValid(value) ? "Valitse aika, valittu aika on ".concat(utils.format(value, 'fullTime')) : 'Valitse aika';
  },
  // fieldClearLabel: 'Clear value',

  // Table labels
  timeTableLabel: 'valitse aika',
  dateTableLabel: 'valitse päivä',
  // Field section placeholders
  fieldYearPlaceholder: function fieldYearPlaceholder(params) {
    return 'V'.repeat(params.digitAmount);
  },
  fieldMonthPlaceholder: function fieldMonthPlaceholder(params) {
    return params.contentType === 'letter' ? 'KKKK' : 'KK';
  },
  fieldDayPlaceholder: function fieldDayPlaceholder() {
    return 'PP';
  },
  fieldWeekDayPlaceholder: function fieldWeekDayPlaceholder(params) {
    return params.contentType === 'letter' ? 'EEEE' : 'EE';
  },
  fieldHoursPlaceholder: function fieldHoursPlaceholder() {
    return 'tt';
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
export var fiFI = getPickersLocalization(fiFIPickers);
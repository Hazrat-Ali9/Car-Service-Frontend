import { TimeViewWithMeridiem } from '../internals/models';
export declare const caES: {
    components: {
        MuiLocalizationProvider: {
            defaultProps: {
                localeText: {
                    previousMonth?: string | undefined;
                    nextMonth?: string | undefined;
                    calendarWeekNumberHeaderLabel?: string | undefined;
                    calendarWeekNumberHeaderText?: string | undefined;
                    calendarWeekNumberAriaLabelText?: ((weekNumber: number) => string) | undefined;
                    calendarWeekNumberText?: ((weekNumber: number) => string) | undefined;
                    openPreviousView?: string | undefined;
                    openNextView?: string | undefined;
                    calendarViewSwitchingButtonAriaLabel?: ((currentView: import("..").DateView) => string) | undefined;
                    start?: string | undefined;
                    end?: string | undefined;
                    cancelButtonLabel?: string | undefined;
                    clearButtonLabel?: string | undefined;
                    okButtonLabel?: string | undefined;
                    todayButtonLabel?: string | undefined;
                    clockLabelText?: ((view: import("..").TimeView, time: any, adapter: import("..").MuiPickersAdapter<any, any>) => string) | undefined;
                    hoursClockNumberText?: ((hours: string) => string) | undefined;
                    minutesClockNumberText?: ((minutes: string) => string) | undefined;
                    secondsClockNumberText?: ((seconds: string) => string) | undefined;
                    selectViewText?: ((view: TimeViewWithMeridiem) => string) | undefined;
                    openDatePickerDialogue?: ((date: any, utils: import("..").MuiPickersAdapter<any, any>) => string) | undefined;
                    openTimePickerDialogue?: ((date: any, utils: import("..").MuiPickersAdapter<any, any>) => string) | undefined;
                    fieldClearLabel?: string | undefined;
                    timeTableLabel?: string | undefined;
                    dateTableLabel?: string | undefined;
                    fieldYearPlaceholder?: ((params: {
                        digitAmount: number;
                        format: string;
                    }) => string) | undefined;
                    fieldMonthPlaceholder?: ((params: {
                        contentType: import("..").FieldSectionContentType;
                        format: string;
                    }) => string) | undefined;
                    fieldDayPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldWeekDayPlaceholder?: ((params: {
                        contentType: import("..").FieldSectionContentType;
                        format: string;
                    }) => string) | undefined;
                    fieldHoursPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldMinutesPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldSecondsPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    fieldMeridiemPlaceholder?: ((params: {
                        format: string;
                    }) => string) | undefined;
                    datePickerToolbarTitle?: string | undefined;
                    timePickerToolbarTitle?: string | undefined;
                    dateTimePickerToolbarTitle?: string | undefined;
                    dateRangePickerToolbarTitle?: string | undefined;
                };
            };
        };
    };
};

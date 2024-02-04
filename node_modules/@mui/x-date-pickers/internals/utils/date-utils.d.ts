import { DateView, FieldValueType, MuiPickersAdapter, PickersTimezone } from '../../models';
import { DateOrTimeViewWithMeridiem } from '../models';
interface FindClosestDateParams<TDate> {
    date: TDate;
    disableFuture?: boolean;
    disablePast?: boolean;
    maxDate: TDate;
    minDate: TDate;
    isDateDisabled: (date: TDate) => boolean;
    utils: MuiPickersAdapter<TDate>;
    timezone: PickersTimezone;
}
export declare const findClosestEnabledDate: <TDate>({ date, disableFuture, disablePast, maxDate, minDate, isDateDisabled, utils, timezone, }: FindClosestDateParams<TDate>) => NonNullable<TDate> | null;
export declare const replaceInvalidDateByNull: <TDate>(utils: MuiPickersAdapter<TDate, any>, value: TDate | null) => NonNullable<TDate> | null;
export declare const applyDefaultDate: <TDate>(utils: MuiPickersAdapter<TDate, any>, value: TDate | null | undefined, defaultValue: TDate) => TDate;
export declare const areDatesEqual: <TDate>(utils: MuiPickersAdapter<TDate, any>, a: TDate, b: TDate) => boolean;
export declare const getMonthsInYear: <TDate>(utils: MuiPickersAdapter<TDate, any>, year: TDate) => TDate[];
export declare const mergeDateAndTime: <TDate>(utils: MuiPickersAdapter<TDate, any>, dateParam: TDate, timeParam: TDate) => TDate;
export declare const getTodayDate: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, valueType?: FieldValueType) => TDate;
export declare const formatMeridiem: <TDate>(utils: MuiPickersAdapter<TDate, any>, meridiem: 'am' | 'pm') => string;
export declare const isDatePickerView: (view: DateOrTimeViewWithMeridiem) => view is DateView;
export declare const resolveDateFormat: (utils: MuiPickersAdapter<any>, { format, views }: {
    format?: string | undefined;
    views: readonly DateView[];
}, isInToolbar: boolean) => string;
export declare const getWeekdays: <TDate>(utils: MuiPickersAdapter<TDate, any>, date: TDate) => TDate[];
export {};

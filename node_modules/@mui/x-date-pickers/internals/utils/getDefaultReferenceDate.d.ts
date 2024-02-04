import { getTodayDate } from './date-utils';
import { DateOrTimeView, FieldSection, MuiPickersAdapter, PickersTimezone } from '../../models';
export interface GetDefaultReferenceDateProps<TDate> {
    maxDate?: TDate;
    minDate?: TDate;
    minTime?: TDate;
    maxTime?: TDate;
    disableIgnoringDatePartForTimeValidation?: boolean;
}
export declare const SECTION_TYPE_GRANULARITY: {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};
export declare const getSectionTypeGranularity: (sections: FieldSection[]) => number;
export declare const getViewsGranularity: (views: readonly DateOrTimeView[]) => number;
export declare const getDefaultReferenceDate: <TDate>({ props, utils, granularity, timezone, getTodayDate: inGetTodayDate, }: {
    props: GetDefaultReferenceDateProps<TDate>;
    utils: MuiPickersAdapter<TDate, any>;
    granularity: number;
    timezone: PickersTimezone;
    getTodayDate?: (() => TDate) | undefined;
}) => TDate;

import * as React from 'react';
import { DefaultizedProps } from '../internals/models/helpers';
import { MonthCalendarProps } from './MonthCalendar.types';
export declare function useMonthCalendarDefaultizedProps<TDate>(props: MonthCalendarProps<TDate>, name: string): DefaultizedProps<MonthCalendarProps<TDate>, 'minDate' | 'maxDate' | 'disableFuture' | 'disablePast'>;
type MonthCalendarComponent = (<TDate>(props: MonthCalendarProps<TDate> & React.RefAttributes<HTMLDivElement>) => React.JSX.Element) & {
    propTypes?: any;
};
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [MonthCalendar API](https://mui.com/x/api/date-pickers/month-calendar/)
 */
export declare const MonthCalendar: MonthCalendarComponent;
export {};

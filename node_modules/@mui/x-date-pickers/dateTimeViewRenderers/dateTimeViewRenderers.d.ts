import * as React from 'react';
import { DateCalendarProps } from '../DateCalendar';
import { DateOrTimeViewWithMeridiem } from '../internals/models';
import { MultiSectionDigitalClockProps } from '../MultiSectionDigitalClock';
import type { DateTimePickerProps } from '../DateTimePicker/DateTimePicker.types';
export interface DateTimeViewRendererProps<TDate> extends Omit<DateCalendarProps<TDate> & MultiSectionDigitalClockProps<TDate>, 'views' | 'openTo' | 'view' | 'onViewChange' | 'focusedView' | 'components' | 'componentsProps' | 'slots' | 'slotProps'>, Pick<DateTimePickerProps<TDate>, 'components' | 'componentsProps' | 'slots' | 'slotProps'> {
    view: DateOrTimeViewWithMeridiem;
    onViewChange?: (view: DateOrTimeViewWithMeridiem) => void;
    views: readonly DateOrTimeViewWithMeridiem[];
    focusedView: DateOrTimeViewWithMeridiem | null;
    timeViewsCount: number;
    shouldRenderTimeInASingleColumn: boolean;
}
export declare const renderDesktopDateTimeView: <TDate extends unknown>({ view, onViewChange, views, focusedView, onFocusedViewChange, value, defaultValue, referenceDate, onChange, className, classes, disableFuture, disablePast, minDate, minTime, maxDate, maxTime, shouldDisableDate, shouldDisableMonth, shouldDisableYear, shouldDisableTime, shouldDisableClock, reduceAnimations, minutesStep, ampm, onMonthChange, monthsPerRow, onYearChange, yearsPerRow, defaultCalendarMonth, components, componentsProps, slots, slotProps, loading, renderLoading, disableHighlightToday, readOnly, disabled, showDaysOutsideCurrentMonth, dayOfWeekFormatter, sx, autoFocus, fixedWeekNumber, displayWeekNumber, timezone, disableIgnoringDatePartForTimeValidation, timeSteps, skipDisabled, timeViewsCount, shouldRenderTimeInASingleColumn, }: DateTimeViewRendererProps<TDate>) => React.JSX.Element;

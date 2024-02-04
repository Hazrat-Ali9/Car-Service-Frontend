import * as React from 'react';
import { DateCalendarProps } from '../DateCalendar';
import { DateView } from '../models';
import { DateOrTimeViewWithMeridiem } from '../internals/models';
export interface DateViewRendererProps<TDate, TView extends DateOrTimeViewWithMeridiem> extends Omit<DateCalendarProps<TDate>, 'views' | 'openTo' | 'view' | 'onViewChange' | 'focusedView'> {
    view: TView;
    onViewChange?: (view: TView) => void;
    views: readonly TView[];
    focusedView: TView | null;
}
export declare const renderDateViewCalendar: <TDate extends unknown>({ view, onViewChange, views, focusedView, onFocusedViewChange, value, defaultValue, referenceDate, onChange, className, classes, disableFuture, disablePast, minDate, maxDate, shouldDisableDate, shouldDisableMonth, shouldDisableYear, reduceAnimations, onMonthChange, monthsPerRow, onYearChange, yearsPerRow, defaultCalendarMonth, components, componentsProps, slots, slotProps, loading, renderLoading, disableHighlightToday, readOnly, disabled, showDaysOutsideCurrentMonth, dayOfWeekFormatter, sx, autoFocus, fixedWeekNumber, displayWeekNumber, timezone, }: DateViewRendererProps<TDate, DateView>) => React.JSX.Element;

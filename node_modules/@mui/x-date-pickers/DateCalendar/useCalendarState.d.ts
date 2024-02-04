import { SlideDirection } from './PickersSlideTransition';
import { MuiPickersAdapter, PickersTimezone } from '../models';
import { DateCalendarDefaultizedProps } from './DateCalendar.types';
interface CalendarState<TDate> {
    currentMonth: TDate;
    focusedDay: TDate | null;
    isMonthSwitchingAnimating: boolean;
    slideDirection: SlideDirection;
}
type ReducerAction<TType, TAdditional = {}> = {
    type: TType;
} & TAdditional;
interface ChangeMonthPayload<TDate> {
    direction: SlideDirection;
    newMonth: TDate;
}
interface ChangeFocusedDayPayload<TDate> {
    focusedDay: TDate | null;
    /**
     * The update does not trigger month switching animation.
     * For example: when selecting month from the month view.
     */
    withoutMonthSwitchingAnimation?: boolean;
}
export declare const createCalendarStateReducer: <TDate extends unknown>(reduceAnimations: boolean, disableSwitchToMonthOnDayFocus: boolean, utils: MuiPickersAdapter<TDate, any>) => (state: CalendarState<TDate>, action: {
    type: "finishMonthSwitchingAnimation";
} | ReducerAction<"changeMonth", ChangeMonthPayload<TDate>> | ReducerAction<"changeFocusedDay", ChangeFocusedDayPayload<TDate>>) => CalendarState<TDate>;
interface UseCalendarStateParams<TDate> extends Pick<DateCalendarDefaultizedProps<TDate>, 'value' | 'referenceDate' | 'defaultCalendarMonth' | 'disableFuture' | 'disablePast' | 'minDate' | 'maxDate' | 'onMonthChange' | 'reduceAnimations' | 'shouldDisableDate'> {
    disableSwitchToMonthOnDayFocus?: boolean;
    timezone: PickersTimezone;
}
export declare const useCalendarState: <TDate extends unknown>(params: UseCalendarStateParams<TDate>) => {
    referenceDate: any;
    calendarState: CalendarState<TDate>;
    changeMonth: (newDate: TDate) => void;
    changeFocusedDay: (newFocusedDate: TDate | null, withoutMonthSwitchingAnimation?: boolean) => void;
    isDateDisabled: (day: TDate | null) => boolean;
    onMonthSwitchingAnimationEnd: () => void;
    handleChangeMonth: (payload: ChangeMonthPayload<TDate>) => void;
};
export {};

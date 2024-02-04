import { PickerOnChangeFn } from './useViews';
import { PickerSelectionState } from './usePicker';
import { PickersTimezone } from '../../models';
export interface MonthValidationOptions<TDate> {
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate: TDate;
    maxDate: TDate;
    timezone: PickersTimezone;
}
export declare function useNextMonthDisabled<TDate>(month: TDate, { disableFuture, maxDate, timezone, }: Pick<MonthValidationOptions<TDate>, 'disableFuture' | 'maxDate' | 'timezone'>): boolean;
export declare function usePreviousMonthDisabled<TDate>(month: TDate, { disablePast, minDate, timezone, }: Pick<MonthValidationOptions<TDate>, 'disablePast' | 'minDate' | 'timezone'>): boolean;
export declare function useMeridiemMode<TDate>(date: TDate | null, ampm: boolean | undefined, onChange: PickerOnChangeFn<TDate>, selectionState?: PickerSelectionState): {
    meridiemMode: import("../utils/time-utils").Meridiem | null;
    handleMeridiemChange: (mode: 'am' | 'pm') => void;
};

import { MuiPickersAdapterContextValue } from '../../LocalizationProvider/LocalizationProvider';
import { PickersLocaleText } from '../../locales/utils/pickersLocaleTextApi';
import { PickersTimezone } from '../../models';
export declare const useLocalizationContext: <TDate>() => Omit<MuiPickersAdapterContextValue<TDate>, "localeText"> & {
    localeText: PickersLocaleText<TDate>;
};
export declare const useUtils: <TDate>() => import("../../models").MuiPickersAdapter<TDate, any>;
export declare const useDefaultDates: <TDate>() => {
    minDate: TDate;
    maxDate: TDate;
};
export declare const useLocaleText: <TDate>() => PickersLocaleText<TDate>;
export declare const useNow: <TDate>(timezone: PickersTimezone) => TDate;

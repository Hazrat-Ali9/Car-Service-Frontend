import { MuiPickersAdapter, PickersTimezone } from '../../models';
export declare const useClockReferenceDate: <TDate, TProps extends {}>({ value, referenceDate: referenceDateProp, utils, props, timezone, }: {
    value: TDate;
    referenceDate: TDate | undefined;
    utils: MuiPickersAdapter<TDate, any>;
    props: TProps;
    timezone: PickersTimezone;
}) => any;

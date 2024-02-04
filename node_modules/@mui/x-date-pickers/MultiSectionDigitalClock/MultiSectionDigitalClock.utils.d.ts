import { MuiPickersAdapter } from '../models';
import { MultiSectionDigitalClockOption } from './MultiSectionDigitalClock.types';
interface IGetHoursSectionOptions<TDate> {
    now: TDate;
    value: TDate | null;
    utils: MuiPickersAdapter<TDate>;
    ampm: boolean;
    isDisabled: (value: number) => boolean;
    timeStep: number;
    resolveAriaLabel: (value: string) => string;
}
export declare const getHourSectionOptions: <TDate>({ now, value, utils, ampm, isDisabled, resolveAriaLabel, timeStep, }: IGetHoursSectionOptions<TDate>) => MultiSectionDigitalClockOption<number>[];
interface IGetTimeSectionOptions<TDate> {
    value: number | null;
    utils: MuiPickersAdapter<TDate>;
    isDisabled: (value: number) => boolean;
    timeStep: number;
    resolveLabel: (value: number) => string;
    hasValue?: boolean;
    resolveAriaLabel: (value: string) => string;
}
export declare const getTimeSectionOptions: <TDate>({ value, utils, isDisabled, timeStep, resolveLabel, resolveAriaLabel, hasValue, }: IGetTimeSectionOptions<TDate>) => MultiSectionDigitalClockOption<number>[];
export {};

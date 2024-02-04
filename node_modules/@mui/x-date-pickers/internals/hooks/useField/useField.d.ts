import { UseFieldParams, UseFieldResponse, UseFieldForwardedProps, UseFieldInternalProps } from './useField.types';
import { FieldSection } from '../../../models';
export declare const useField: <TValue, TDate, TSection extends FieldSection, TForwardedProps extends UseFieldForwardedProps, TInternalProps extends UseFieldInternalProps<any, any, any, any> & {
    minutesStep?: number | undefined;
}>(params: UseFieldParams<TValue, TDate, TSection, TForwardedProps, TInternalProps>) => UseFieldResponse<TForwardedProps>;

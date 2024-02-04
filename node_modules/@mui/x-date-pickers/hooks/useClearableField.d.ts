import * as React from 'react';
import { FieldSlotsComponents, FieldSlotsComponentsProps, FieldsTextFieldProps } from '../internals';
type UseClearableFieldProps<TFieldProps extends FieldsTextFieldProps, TInputProps extends {
    endAdornment?: React.ReactNode;
} | undefined, TFieldSlots extends FieldSlotsComponents, TFieldSlotsComponentsProps extends FieldSlotsComponentsProps> = {
    clearable: boolean;
    fieldProps: TFieldProps;
    InputProps: TInputProps;
    onClear: React.MouseEventHandler<HTMLButtonElement>;
    slots?: {
        [K in keyof TFieldSlots as Uncapitalize<K & string>]: TFieldSlots[K];
    };
    slotProps?: TFieldSlotsComponentsProps;
    components?: TFieldSlots;
    componentsProps?: TFieldSlotsComponentsProps;
};
export declare const useClearableField: <TFieldProps extends FieldsTextFieldProps, TInputProps extends {
    endAdornment?: React.ReactNode;
} | undefined, TFieldSlotsComponents extends FieldSlotsComponents, TFieldSlotsComponentsProps extends FieldSlotsComponentsProps>({ clearable, fieldProps: forwardedFieldProps, InputProps: ForwardedInputProps, onClear, slots, slotProps, components, componentsProps, }: UseClearableFieldProps<TFieldProps, TInputProps, TFieldSlotsComponents, TFieldSlotsComponentsProps>) => {
    InputProps: TInputProps & {
        endAdornment: React.JSX.Element;
    };
    fieldProps: TFieldProps;
};
export {};

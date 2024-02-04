import * as React from 'react';
export interface FakeTextFieldElement {
    container: React.HTMLAttributes<HTMLSpanElement>;
    content: React.HTMLAttributes<HTMLSpanElement>;
    before: React.HTMLAttributes<HTMLSpanElement>;
    after: React.HTMLAttributes<HTMLSpanElement>;
}
interface FakeTextFieldProps {
    elements: FakeTextFieldElement[];
    valueStr: string;
    onValueStrChange: React.ChangeEventHandler<HTMLInputElement>;
    error: boolean;
    id?: string;
    InputProps: any;
    inputProps: any;
    disabled?: boolean;
    autoFocus?: boolean;
    ownerState?: any;
    valueType: 'value' | 'placeholder';
}
export declare const FakeTextField: React.ForwardRefExoticComponent<FakeTextFieldProps & React.RefAttributes<HTMLDivElement>>;
export {};

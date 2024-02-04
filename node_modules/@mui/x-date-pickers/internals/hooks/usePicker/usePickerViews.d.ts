import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { UseViewsOptions } from '../useViews';
import type { UsePickerValueViewsResponse } from './usePickerValue.types';
import { DateOrTimeViewWithMeridiem } from '../../models';
import { TimezoneProps } from '../../../models';
interface PickerViewsRendererBaseExternalProps<TView extends DateOrTimeViewWithMeridiem> extends Omit<UsePickerViewsProps<any, any, TView, any, any>, 'openTo' | 'viewRenderers'> {
}
export type PickerViewsRendererProps<TValue, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends PickerViewsRendererBaseExternalProps<TView>, TAdditionalProps extends {}> = TExternalProps & TAdditionalProps & UsePickerValueViewsResponse<TValue> & {
    view: TView;
    views: readonly TView[];
    focusedView: TView | null;
    onFocusedViewChange: (viewToFocus: TView, hasFocus: boolean) => void;
};
type PickerViewRenderer<TValue, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends PickerViewsRendererBaseExternalProps<TView>, TAdditionalProps extends {}> = (props: PickerViewsRendererProps<TValue, TView, TExternalProps, TAdditionalProps>) => React.ReactNode;
export type PickerViewRendererLookup<TValue, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends PickerViewsRendererBaseExternalProps<any>, TAdditionalProps extends {}> = {
    [K in TView]: PickerViewRenderer<TValue, K, TExternalProps, TAdditionalProps> | null;
};
/**
 * Props used to handle the views that are common to all pickers.
 */
export interface UsePickerViewsBaseProps<TValue, TDate, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends UsePickerViewsProps<TValue, TDate, TView, any, any>, TAdditionalProps extends {}> extends Omit<UseViewsOptions<any, TView>, 'onChange' | 'onFocusedViewChange' | 'focusedView'>, TimezoneProps {
    /**
     * If `true`, the picker and text field are disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `null`, the section will only have field editing.
     * If `undefined`, internally defined view will be the used.
     */
    viewRenderers: PickerViewRendererLookup<TValue, TView, TExternalProps, TAdditionalProps>;
    /**
     * If `true`, disable heavy animations.
     * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
     */
    reduceAnimations?: boolean;
    /**
     * The date used to generate the new value when both `value` and `defaultValue` are empty.
     * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
     */
    referenceDate?: TDate;
}
/**
 * Props used to handle the views of the pickers.
 */
export interface UsePickerViewsNonStaticProps {
    /**
     * If `true`, the open picker button will not be rendered (renders only the field).
     * @default false
     */
    disableOpenPicker?: boolean;
}
/**
 * Props used to handle the value of the pickers.
 */
export interface UsePickerViewsProps<TValue, TDate, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends UsePickerViewsProps<TValue, TDate, TView, any, any>, TAdditionalProps extends {}> extends UsePickerViewsBaseProps<TValue, TDate, TView, TExternalProps, TAdditionalProps>, UsePickerViewsNonStaticProps {
    className?: string;
    sx?: SxProps<Theme>;
}
export interface UsePickerViewParams<TValue, TDate, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends UsePickerViewsProps<TValue, TDate, TView, TExternalProps, TAdditionalProps>, TAdditionalProps extends {}> {
    props: TExternalProps;
    propsFromPickerValue: UsePickerValueViewsResponse<TValue>;
    additionalViewProps: TAdditionalProps;
    inputRef?: React.RefObject<HTMLInputElement>;
    autoFocusView: boolean;
}
export interface UsePickerViewsResponse<TView extends DateOrTimeViewWithMeridiem> {
    /**
     * Does the picker have at least one view that should be rendered in UI mode ?
     * If not, we can hide the icon to open the picker.
     */
    hasUIView: boolean;
    renderCurrentView: () => React.ReactNode;
    shouldRestoreFocus: () => boolean;
    layoutProps: UsePickerViewsLayoutResponse<TView>;
}
export interface UsePickerViewsLayoutResponse<TView extends DateOrTimeViewWithMeridiem> {
    view: TView | null;
    onViewChange: (view: TView) => void;
    views: readonly TView[];
}
/**
 * Manage the views of all the pickers:
 * - Handles the view switch
 * - Handles the switch between UI views and field views
 * - Handles the focus management when switching views
 */
export declare const usePickerViews: <TValue, TDate, TView extends DateOrTimeViewWithMeridiem, TExternalProps extends UsePickerViewsProps<TValue, TDate, TView, any, any>, TAdditionalProps extends {}>({ props, propsFromPickerValue, additionalViewProps, inputRef, autoFocusView, }: UsePickerViewParams<TValue, TDate, TView, TExternalProps, TAdditionalProps>) => UsePickerViewsResponse<TView>;
export {};

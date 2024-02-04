import * as React from 'react';
import { DefaultizedProps } from '../internals/models/helpers';
import { DateTimeValidationError } from '../models';
import { DateCalendarSlotsComponent, DateCalendarSlotsComponentsProps, ExportedDateCalendarProps } from '../DateCalendar/DateCalendar.types';
import { TimeClockSlotsComponent, TimeClockSlotsComponentsProps } from '../TimeClock/TimeClock.types';
import { BasePickerInputProps } from '../internals/models/props/basePickerProps';
import { DateTimePickerTabsProps, ExportedDateTimePickerTabsProps } from './DateTimePickerTabs';
import { BaseDateValidationProps, BaseTimeValidationProps, DateTimeValidationProps } from '../internals/models/validation';
import { LocalizedComponent } from '../locales/utils/pickersLocaleTextApi';
import { DateTimePickerToolbarProps, ExportedDateTimePickerToolbarProps } from './DateTimePickerToolbar';
import { PickerViewRendererLookup } from '../internals/hooks/usePicker/usePickerViews';
import { DateViewRendererProps } from '../dateViewRenderers';
import { TimeViewRendererProps } from '../timeViewRenderers';
import { UncapitalizeObjectKeys } from '../internals/utils/slots-migration';
import { BaseClockProps, ExportedBaseClockProps } from '../internals/models/props/clock';
import { DateOrTimeViewWithMeridiem, TimeViewWithMeridiem } from '../internals/models';
export interface BaseDateTimePickerSlotsComponent<TDate> extends DateCalendarSlotsComponent<TDate>, TimeClockSlotsComponent {
    /**
     * Tabs enabling toggling between date and time pickers.
     * @default DateTimePickerTabs
     */
    Tabs?: React.ElementType<DateTimePickerTabsProps>;
    /**
     * Custom component for the toolbar rendered above the views.
     * @default DateTimePickerToolbar
     */
    Toolbar?: React.JSXElementConstructor<DateTimePickerToolbarProps<TDate>>;
}
export interface BaseDateTimePickerSlotsComponentsProps<TDate> extends DateCalendarSlotsComponentsProps<TDate>, TimeClockSlotsComponentsProps {
    /**
     * Props passed down to the tabs component.
     */
    tabs?: ExportedDateTimePickerTabsProps;
    /**
     * Props passed down to the toolbar component.
     */
    toolbar?: ExportedDateTimePickerToolbarProps;
}
export interface BaseDateTimePickerProps<TDate, TView extends DateOrTimeViewWithMeridiem> extends BasePickerInputProps<TDate | null, TDate, TView, DateTimeValidationError>, Omit<ExportedDateCalendarProps<TDate>, 'onViewChange'>, ExportedBaseClockProps<TDate>, DateTimeValidationProps<TDate> {
    /**
     * Display ampm controls under the clock (instead of in the toolbar).
     * @default true on desktop, false on mobile
     */
    ampmInClock?: boolean;
    /**
     * Overridable components.
     * @default {}
     * @deprecated Please use `slots`.
     */
    components?: BaseDateTimePickerSlotsComponent<TDate>;
    /**
     * The props used for each component slot.
     * @default {}
     * @deprecated Please use `slotProps`.
     */
    componentsProps?: BaseDateTimePickerSlotsComponentsProps<TDate>;
    /**
     * Overridable component slots.
     * @default {}
     */
    slots?: UncapitalizeObjectKeys<BaseDateTimePickerSlotsComponent<TDate>>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    slotProps?: BaseDateTimePickerSlotsComponentsProps<TDate>;
    /**
     * Define custom view renderers for each section.
     * If `null`, the section will only have field editing.
     * If `undefined`, internally defined view will be the used.
     */
    viewRenderers?: Partial<PickerViewRendererLookup<TDate | null, TView, DateViewRendererProps<TDate, TView> & TimeViewRendererProps<TimeViewWithMeridiem, BaseClockProps<TDate, TimeViewWithMeridiem>>, {}>>;
}
type UseDateTimePickerDefaultizedProps<TDate, TView extends DateOrTimeViewWithMeridiem, Props extends BaseDateTimePickerProps<TDate, TView>> = LocalizedComponent<TDate, DefaultizedProps<Props, 'views' | 'openTo' | 'orientation' | 'ampm' | keyof BaseDateValidationProps<TDate> | keyof BaseTimeValidationProps>>;
export declare function useDateTimePickerDefaultizedProps<TDate, TView extends DateOrTimeViewWithMeridiem, Props extends BaseDateTimePickerProps<TDate, TView>>(props: Props, name: string): Omit<UseDateTimePickerDefaultizedProps<TDate, TView, Props>, 'components' | 'componentsProps'>;
export {};

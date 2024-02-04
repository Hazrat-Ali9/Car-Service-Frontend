import { DateOrTimeView, MuiPickersAdapter } from '../../models';
import { DateOrTimeViewWithMeridiem } from '../models';
import { DesktopOnlyTimePickerProps } from '../models/props/clock';
import { DefaultizedProps } from '../models/helpers';
export declare const resolveDateTimeFormat: (utils: MuiPickersAdapter<any>, { views, format, ...other }: {
    format?: string | undefined;
    views: readonly DateOrTimeView[];
    ampm: boolean;
}) => string;
interface DefaultizedTimeViewsProps<TDate, TView = DateOrTimeView> extends DefaultizedProps<DesktopOnlyTimePickerProps<TDate>, 'ampm'> {
    views: readonly TView[];
}
interface DefaultizedTimeViewsResponse<TDate, TView = DateOrTimeViewWithMeridiem> extends Required<Pick<DefaultizedTimeViewsProps<TDate, TView>, 'thresholdToRenderTimeInASingleColumn' | 'timeSteps' | 'views'>> {
    shouldRenderTimeInASingleColumn: boolean;
}
export declare function resolveTimeViewsResponse<TDate, InTView extends DateOrTimeView = DateOrTimeView, OutTView extends DateOrTimeViewWithMeridiem = DateOrTimeViewWithMeridiem>({ thresholdToRenderTimeInASingleColumn: inThreshold, ampm, timeSteps: inTimeSteps, views, }: DefaultizedTimeViewsProps<TDate, InTView>): DefaultizedTimeViewsResponse<TDate, OutTView>;
export {};

import * as React from 'react';
import { DesktopDatePickerProps } from './DesktopDatePicker.types';
type DesktopDatePickerComponent = (<TDate>(props: DesktopDatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => React.JSX.Element) & {
    propTypes?: any;
};
/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
 */
declare const DesktopDatePicker: DesktopDatePickerComponent;
export { DesktopDatePicker };

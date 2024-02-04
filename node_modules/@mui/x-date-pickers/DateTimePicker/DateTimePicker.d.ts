import * as React from 'react';
import { DateTimePickerProps } from './DateTimePicker.types';
type DateTimePickerComponent = (<TDate>(props: DateTimePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => React.JSX.Element) & {
    propTypes?: any;
};
/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
 */
declare const DateTimePicker: DateTimePickerComponent;
export { DateTimePicker };

import * as React from 'react';
import { TimeFieldProps } from './TimeField.types';
type TimeFieldComponent = (<TDate>(props: TimeFieldProps<TDate> & React.RefAttributes<HTMLDivElement>) => React.JSX.Element) & {
    propTypes?: any;
};
/**
 * Demos:
 *
 * - [TimeField](http://mui.com/x/react-date-pickers/time-field/)
 * - [Fields](https://mui.com/x/react-date-pickers/fields/)
 *
 * API:
 *
 * - [TimeField API](https://mui.com/x/api/date-pickers/time-field/)
 */
declare const TimeField: TimeFieldComponent;
export { TimeField };

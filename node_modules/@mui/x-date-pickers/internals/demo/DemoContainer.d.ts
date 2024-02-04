import * as React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
interface DemoGridProps {
    children: React.ReactNode;
    components: string[];
    sx?: SxProps<Theme>;
}
interface DemoItemProps {
    label?: React.ReactNode;
    component?: string;
    children: React.ReactNode;
}
/**
 * WARNING: This is an internal component used in documentation to achieve a desired layout.
 * Please do not use it in your application.
 */
export declare function DemoItem(props: DemoItemProps): React.JSX.Element;
/**
 * WARNING: This is an internal component used in documentation to achieve a desired layout.
 * Please do not use it in your application.
 */
export declare function DemoContainer(props: DemoGridProps): React.JSX.Element;
export {};

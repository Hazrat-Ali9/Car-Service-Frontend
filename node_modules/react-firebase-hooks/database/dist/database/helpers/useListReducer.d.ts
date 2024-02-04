/// <reference types="react" />
import { DataSnapshot } from 'firebase/database';
declare type KeyValueState = {
    keys?: string[];
    values?: DataSnapshot[];
};
declare type ReducerState = {
    error?: Error;
    loading: boolean;
    value: KeyValueState;
};
declare type AddAction = {
    type: 'add';
    previousKey?: string | null;
    snapshot: DataSnapshot | null;
};
declare type ChangeAction = {
    type: 'change';
    snapshot: DataSnapshot | null;
};
declare type EmptyAction = {
    type: 'empty';
};
declare type ErrorAction = {
    type: 'error';
    error: Error;
};
declare type MoveAction = {
    type: 'move';
    previousKey?: string | null;
    snapshot: DataSnapshot | null;
};
declare type RemoveAction = {
    type: 'remove';
    snapshot: DataSnapshot | null;
};
declare type ResetAction = {
    type: 'reset';
};
declare type ValueAction = {
    type: 'value';
    snapshots: DataSnapshot[] | null;
};
declare type ReducerAction = AddAction | ChangeAction | EmptyAction | ErrorAction | MoveAction | RemoveAction | ResetAction | ValueAction;
declare const _default: () => [ReducerState, import("react").Dispatch<ReducerAction>];
export default _default;

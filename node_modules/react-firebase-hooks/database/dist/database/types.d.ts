import { DatabaseReference, DataSnapshot } from 'firebase/database';
import { LoadingHook } from '../util';
export declare type Val<T, KeyField extends string = '', RefField extends string = ''> = T & Record<KeyField, string> & Record<RefField, DatabaseReference>;
export declare type ObjectHook = LoadingHook<DataSnapshot, Error>;
export declare type ObjectValHook<T, KeyField extends string = '', RefField extends string = ''> = LoadingHook<Val<T, KeyField, RefField>, Error>;
export declare type ListHook = LoadingHook<DataSnapshot[], Error>;
export declare type ListKeysHook = LoadingHook<string[], Error>;
export declare type ListValsHook<T, KeyField extends string = '', RefField extends string = ''> = LoadingHook<Val<T, KeyField, RefField>[], Error>;

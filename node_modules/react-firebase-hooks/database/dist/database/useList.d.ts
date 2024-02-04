import { Query } from 'firebase/database';
import { ValOptions } from './helpers';
import { ListHook, ListKeysHook, ListValsHook } from './types';
export declare const useList: (query?: Query | null | undefined) => ListHook;
export declare const useListKeys: (query?: Query | null | undefined) => ListKeysHook;
export declare const useListVals: <T, KeyField extends string = "", RefField extends string = "">(query?: Query | null | undefined, options?: ValOptions<T> | undefined) => ListValsHook<T, KeyField, RefField>;

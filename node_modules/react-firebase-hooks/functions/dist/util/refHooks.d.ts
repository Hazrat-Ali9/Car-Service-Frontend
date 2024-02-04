export declare type RefHook<T> = {
    current: T;
};
export declare const useComparatorRef: <T>(value: T | null | undefined, isEqual: (v1: T | null | undefined, v2: T | null | undefined) => boolean, onChange?: (() => void) | undefined) => RefHook<T | null | undefined>;
export interface HasIsEqual<T> {
    isEqual: (value: T) => boolean;
}
export declare const useIsEqualRef: <T extends HasIsEqual<T>>(value: T | null | undefined, onChange?: (() => void) | undefined) => RefHook<T | null | undefined>;

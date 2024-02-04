export declare type LoadingValue<T, E> = {
    error?: E;
    loading: boolean;
    reset: () => void;
    setError: (error: E) => void;
    setValue: (value?: T) => void;
    value?: T;
};
declare const _default: <T, E>(getDefaultValue?: (() => T) | undefined) => LoadingValue<T, E>;
export default _default;

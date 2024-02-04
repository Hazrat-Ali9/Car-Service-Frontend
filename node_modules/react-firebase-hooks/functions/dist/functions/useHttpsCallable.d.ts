import { Functions, HttpsCallableResult } from 'firebase/functions';
export declare type HttpsCallableHook<RequestData = unknown, ResponseData = unknown> = Readonly<[
    (data?: RequestData) => Promise<HttpsCallableResult<ResponseData> | undefined>,
    boolean,
    Error | undefined
]>;
declare const _default: <RequestData = unknown, ResponseData = unknown>(functions: Functions, name: string) => readonly [(data?: RequestData | undefined) => Promise<HttpsCallableResult<ResponseData> | undefined>, boolean, Error | undefined];
export default _default;

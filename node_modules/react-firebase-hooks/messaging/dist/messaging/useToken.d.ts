import { Messaging } from 'firebase/messaging';
import { LoadingHook } from '../util';
export declare type TokenHook = LoadingHook<string | null, Error>;
declare const _default: (messaging: Messaging, vapidKey?: string | undefined) => TokenHook;
export default _default;

import { Auth, User } from 'firebase/auth';
import { LoadingHook } from '../util';
export declare type IdTokenHook = LoadingHook<User | null, Error>;
declare type IdTokenOptions = {
    onUserChanged?: (user: User | null) => Promise<void>;
};
declare const _default: (auth: Auth, options?: IdTokenOptions | undefined) => IdTokenHook;
export default _default;

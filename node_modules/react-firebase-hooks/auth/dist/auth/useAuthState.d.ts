import { Auth, User } from 'firebase/auth';
import { LoadingHook } from '../util';
export declare type AuthStateHook = LoadingHook<User | null, Error>;
declare type AuthStateOptions = {
    onUserChanged?: (user: User | null) => Promise<void>;
};
declare const _default: (auth: Auth, options?: AuthStateOptions | undefined) => AuthStateHook;
export default _default;

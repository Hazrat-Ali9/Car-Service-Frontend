import { Auth, AuthError } from 'firebase/auth';
export declare type SignOutHook = [
    () => Promise<boolean>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => SignOutHook;
export default _default;

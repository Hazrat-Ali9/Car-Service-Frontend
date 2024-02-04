import { Auth, AuthError } from 'firebase/auth';
export declare type DeleteUserHook = [
    () => Promise<boolean>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => DeleteUserHook;
export default _default;

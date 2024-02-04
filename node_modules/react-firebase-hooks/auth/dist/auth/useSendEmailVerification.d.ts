import { Auth, AuthError } from 'firebase/auth';
export declare type SendEmailVerificationHook = [
    () => Promise<boolean>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => SendEmailVerificationHook;
export default _default;

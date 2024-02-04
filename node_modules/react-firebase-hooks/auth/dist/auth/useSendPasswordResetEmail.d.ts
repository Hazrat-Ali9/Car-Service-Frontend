import { ActionCodeSettings, Auth, AuthError } from 'firebase/auth';
export declare type SendPasswordResetEmailHook = [
    (email: string, actionCodeSettings?: ActionCodeSettings) => Promise<boolean>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => SendPasswordResetEmailHook;
export default _default;

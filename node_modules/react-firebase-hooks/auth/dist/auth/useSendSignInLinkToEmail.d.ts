import { ActionCodeSettings, Auth, AuthError } from 'firebase/auth';
export declare type SendSignInLinkToEmailHook = [
    (email: string, actionCodeSettings: ActionCodeSettings) => Promise<boolean>,
    boolean,
    AuthError | Error | undefined
];
declare const _default: (auth: Auth) => SendSignInLinkToEmailHook;
export default _default;

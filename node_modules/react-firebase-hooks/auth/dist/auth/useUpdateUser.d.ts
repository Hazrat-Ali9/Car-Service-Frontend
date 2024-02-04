import { ActionCodeSettings, Auth, AuthError } from 'firebase/auth';
declare type Profile = {
    displayName?: string | null;
    photoURL?: string | null;
};
export declare type UpdateUserHook<M> = [M, boolean, AuthError | Error | undefined];
export declare type UpdateEmailHook = UpdateUserHook<(email: string) => Promise<boolean>>;
export declare type UpdatePasswordHook = UpdateUserHook<(password: string) => Promise<boolean>>;
export declare type UpdateProfileHook = UpdateUserHook<(profile: Profile) => Promise<boolean>>;
export declare type VerifyBeforeUpdateEmailHook = UpdateUserHook<(email: string, actionCodeSettings: ActionCodeSettings | null) => Promise<boolean>>;
export declare const useUpdateEmail: (auth: Auth) => UpdateEmailHook;
export declare const useUpdatePassword: (auth: Auth) => UpdatePasswordHook;
export declare const useUpdateProfile: (auth: Auth) => UpdateProfileHook;
export declare const useVerifyBeforeUpdateEmail: (auth: Auth) => VerifyBeforeUpdateEmailHook;
export {};

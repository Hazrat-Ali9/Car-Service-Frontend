import { Auth } from 'firebase/auth';
import { SignInWithPopupHook } from './types';
export declare const useSignInWithApple: (auth: Auth) => SignInWithPopupHook;
export declare const useSignInWithFacebook: (auth: Auth) => SignInWithPopupHook;
export declare const useSignInWithGithub: (auth: Auth) => SignInWithPopupHook;
export declare const useSignInWithGoogle: (auth: Auth) => SignInWithPopupHook;
export declare const useSignInWithMicrosoft: (auth: Auth) => SignInWithPopupHook;
export declare const useSignInWithTwitter: (auth: Auth) => SignInWithPopupHook;
export declare const useSignInWithYahoo: (auth: Auth) => SignInWithPopupHook;

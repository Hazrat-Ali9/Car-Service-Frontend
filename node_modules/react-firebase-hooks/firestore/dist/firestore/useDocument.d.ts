import { DocumentData, DocumentReference, DocumentSnapshot, FirestoreError } from 'firebase/firestore';
import { DocumentHook, InitialValueOptions, OnceOptions, Options } from './types';
export declare const useDocument: <T = DocumentData>(docRef?: DocumentReference<T> | null | undefined, options?: Options | undefined) => DocumentHook<T>;
export declare const useDocumentOnce: <T = DocumentData>(docRef?: DocumentReference<T> | null | undefined, options?: OnceOptions | undefined) => [DocumentSnapshot<T> | undefined, boolean, FirestoreError | undefined, () => Promise<void>];
export declare const useDocumentData: <T = DocumentData>(docRef?: DocumentReference<T> | null | undefined, options?: (Options & import("./types").IDOptions<T> & InitialValueOptions<T>) | undefined) => [T | undefined, boolean, FirestoreError | undefined, DocumentSnapshot<T> | undefined];
export declare const useDocumentDataOnce: <T = DocumentData>(docRef?: DocumentReference<T> | null | undefined, options?: (OnceOptions & import("./types").IDOptions<T> & InitialValueOptions<T>) | undefined) => [T | undefined, boolean, FirestoreError | undefined, DocumentSnapshot<T> | undefined, () => Promise<void>];

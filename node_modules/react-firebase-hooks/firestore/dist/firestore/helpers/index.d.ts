import { CollectionReference, DocumentReference, Query } from 'firebase/firestore';
import { RefHook } from '../../util';
export declare const useIsFirestoreRefEqual: <T extends DocumentReference<any> | CollectionReference<any>>(value: T | null | undefined, onChange?: (() => void) | undefined) => RefHook<T | null | undefined>;
export declare const useIsFirestoreQueryEqual: <T extends Query<any>>(value: T | null | undefined, onChange?: (() => void) | undefined) => RefHook<T | null | undefined>;

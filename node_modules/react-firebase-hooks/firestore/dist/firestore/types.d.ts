import { DocumentData, DocumentSnapshot, FirestoreError, QuerySnapshot, SnapshotListenOptions, SnapshotOptions } from 'firebase/firestore';
import { LoadingHook } from '../util';
export declare type IDOptions<T> = {
    snapshotOptions?: SnapshotOptions;
};
export declare type Options = {
    snapshotListenOptions?: SnapshotListenOptions;
};
export declare type InitialValueOptions<T> = {
    initialValue?: T;
};
export declare type DataOptions<T> = Options & IDOptions<T>;
export declare type OnceOptions = {
    getOptions?: GetOptions;
};
export declare type GetOptions = {
    source?: 'default' | 'server' | 'cache';
};
export declare type OnceDataOptions<T> = OnceOptions & IDOptions<T>;
export declare type CollectionHook<T = DocumentData> = LoadingHook<QuerySnapshot<T>, FirestoreError>;
export declare type CollectionOnceHook<T = DocumentData> = [
    ...CollectionHook<T>,
    () => Promise<void>
];
export declare type CollectionDataHook<T = DocumentData> = [
    ...LoadingHook<T[], FirestoreError>,
    QuerySnapshot<T> | undefined
];
export declare type CollectionDataOnceHook<T = DocumentData> = [
    ...CollectionDataHook<T>,
    () => Promise<void>
];
export declare type DocumentHook<T = DocumentData> = LoadingHook<DocumentSnapshot<T>, FirestoreError>;
export declare type DocumentOnceHook<T = DocumentData> = [
    ...DocumentHook<T>,
    () => Promise<void>
];
export declare type DocumentDataHook<T = DocumentData> = [
    ...LoadingHook<T, FirestoreError>,
    DocumentSnapshot<T> | undefined
];
export declare type DocumentDataOnceHook<T = DocumentData> = [
    ...DocumentDataHook<T>,
    () => Promise<void>
];

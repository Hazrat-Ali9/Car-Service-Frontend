import { DataSnapshot } from 'firebase/database';
export declare type ValOptions<T> = {
    keyField?: string;
    refField?: string;
    transform?: (val: any) => T;
};
export declare const snapshotToData: <T>(snapshot: DataSnapshot, keyField?: string | undefined, refField?: string | undefined, transform?: ((val: any) => T) | undefined) => any;

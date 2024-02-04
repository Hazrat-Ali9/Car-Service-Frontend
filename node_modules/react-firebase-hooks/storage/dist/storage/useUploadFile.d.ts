import { StorageError, StorageReference, UploadMetadata, UploadResult, UploadTaskSnapshot } from 'firebase/storage';
export declare type UploadFileHook = [
    (storageRef: StorageReference, data: Blob | Uint8Array | ArrayBuffer, metadata?: UploadMetadata | undefined) => Promise<UploadResult | undefined>,
    boolean,
    UploadTaskSnapshot | undefined,
    StorageError | undefined
];
declare const _default: () => UploadFileHook;
export default _default;

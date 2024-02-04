import { StorageError, StorageReference } from 'firebase/storage';
import { LoadingHook } from '../util';
export declare type DownloadURLHook = LoadingHook<string, StorageError>;
declare const _default: (storageRef?: StorageReference | null | undefined) => DownloadURLHook;
export default _default;

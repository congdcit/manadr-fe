type StorageType = 'localStorage' | 'sessionStorage';
declare class StorageService {
    private getStorage;
    set(key: string, value: any, type?: StorageType): void;
    get<T>(key: string, type?: StorageType): T | null;
    remove(key: string, type?: StorageType): void;
    clear(type?: StorageType): void;
    has(key: string, type?: StorageType): boolean;
    keys(type?: StorageType): string[];
    size(type?: StorageType): number;
    setWithExpiry(key: string, value: any, expiryInMinutes: number): void;
    getWithExpiry<T>(key: string): T | null;
}
export declare const storageService: StorageService;
export {};
//# sourceMappingURL=storage-service.d.ts.map
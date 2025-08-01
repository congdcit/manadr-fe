type StorageType = 'localStorage' | 'sessionStorage';

class StorageService {
  // Get storage instance
  private getStorage(type: StorageType): Storage {
    return type === 'localStorage' ? localStorage : sessionStorage;
  }

  // Set item
  set(key: string, value: any, type: StorageType = 'localStorage'): void {
    try {
      const storage = this.getStorage(type);
      const serializedValue = JSON.stringify(value);
      storage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to ${type}:`, error);
    }
  }

  // Get item
  get<T>(key: string, type: StorageType = 'localStorage'): T | null {
    try {
      const storage = this.getStorage(type);
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from ${type}:`, error);
      return null;
    }
  }

  // Remove item
  remove(key: string, type: StorageType = 'localStorage'): void {
    try {
      const storage = this.getStorage(type);
      storage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from ${type}:`, error);
    }
  }

  // Clear all items
  clear(type: StorageType = 'localStorage'): void {
    try {
      const storage = this.getStorage(type);
      storage.clear();
    } catch (error) {
      console.error(`Error clearing ${type}:`, error);
    }
  }

  // Check if key exists
  has(key: string, type: StorageType = 'localStorage'): boolean {
    try {
      const storage = this.getStorage(type);
      return storage.getItem(key) !== null;
    } catch (error) {
      console.error(`Error checking ${type}:`, error);
      return false;
    }
  }

  // Get all keys
  keys(type: StorageType = 'localStorage'): string[] {
    try {
      const storage = this.getStorage(type);
      return Object.keys(storage);
    } catch (error) {
      console.error(`Error getting keys from ${type}:`, error);
      return [];
    }
  }

  // Get storage size (approximate)
  size(type: StorageType = 'localStorage'): number {
    try {
      const storage = this.getStorage(type);
      let size = 0;
      for (const key in storage) {
        if (storage.hasOwnProperty(key)) {
          size += storage[key].length + key.length;
        }
      }
      return size;
    } catch (error) {
      console.error(`Error calculating ${type} size:`, error);
      return 0;
    }
  }

  // Set with expiration (for localStorage only)
  setWithExpiry(key: string, value: any, expiryInMinutes: number): void {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + expiryInMinutes * 60 * 1000,
    };
    this.set(key, item);
  }

  // Get with expiration check
  getWithExpiry<T>(key: string): T | null {
    const item = this.get<{ value: T; expiry: number }>(key);

    if (!item) return null;

    const now = new Date();
    if (now.getTime() > item.expiry) {
      this.remove(key);
      return null;
    }

    return item.value;
  }
}

export const storageService = new StorageService();

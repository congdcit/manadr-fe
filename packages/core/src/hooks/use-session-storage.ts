import { useState } from 'react';
import { storageService } from '../services/storage-service';

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // Read value from sessionStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storageService.get<T>(key, 'sessionStorage');
      return item !== null ? item : initialValue;
    } catch (error) {
      console.error(`Error reading sessionStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Function to set value
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we can update based on previous value
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storageService.set(key, valueToStore, 'sessionStorage');
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error);
    }
  };

  // Function to remove value
  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      storageService.remove(key, 'sessionStorage');
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
} 
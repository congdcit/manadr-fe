"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = useLocalStorage;
const react_1 = require("react");
const storage_service_1 = require("../services/storage-service");
function useLocalStorage(key, initialValue) {
    // Read value from localStorage
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            const item = storage_service_1.storageService.get(key);
            return item !== null ? item : initialValue;
        }
        catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });
    // Function to set value
    const setValue = (value) => {
        try {
            // Allow value to be a function so we can update based on previous value
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            storage_service_1.storageService.set(key, valueToStore);
        }
        catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };
    // Function to remove value
    const removeValue = () => {
        try {
            setStoredValue(initialValue);
            storage_service_1.storageService.remove(key);
        }
        catch (error) {
            console.error(`Error removing localStorage key "${key}":`, error);
        }
    };
    // Listen for changes to this localStorage key from other tabs/windows
    (0, react_1.useEffect)(() => {
        const handleStorageChange = (e) => {
            if (e.key === key && e.newValue !== null) {
                try {
                    setStoredValue(JSON.parse(e.newValue));
                }
                catch (error) {
                    console.error(`Error parsing localStorage change for key "${key}":`, error);
                }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);
    return [storedValue, setValue, removeValue];
}

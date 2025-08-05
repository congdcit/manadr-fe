"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSessionStorage = useSessionStorage;
const react_1 = require("react");
const storage_service_1 = require("../services/storage-service");
function useSessionStorage(key, initialValue) {
    // Read value from sessionStorage
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        try {
            const item = storage_service_1.storageService.get(key, 'sessionStorage');
            return item !== null ? item : initialValue;
        }
        catch (error) {
            console.error(`Error reading sessionStorage key "${key}":`, error);
            return initialValue;
        }
    });
    // Function to set value
    const setValue = (value) => {
        try {
            // Allow value to be a function so we can update based on previous value
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            storage_service_1.storageService.set(key, valueToStore, 'sessionStorage');
        }
        catch (error) {
            console.error(`Error setting sessionStorage key "${key}":`, error);
        }
    };
    // Function to remove value
    const removeValue = () => {
        try {
            setStoredValue(initialValue);
            storage_service_1.storageService.remove(key, 'sessionStorage');
        }
        catch (error) {
            console.error(`Error removing sessionStorage key "${key}":`, error);
        }
    };
    return [storedValue, setValue, removeValue];
}

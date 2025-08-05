// Array utilities
export const chunk = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};
export const unique = (array) => {
    return [...new Set(array)];
};
export const groupBy = (array, key) => {
    return array.reduce((groups, item) => {
        const group = String(item[key]);
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(item);
        return groups;
    }, {});
};
// Object utilities
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
export const omit = (obj, keys) => {
    const result = { ...obj };
    keys.forEach((key) => {
        delete result[key];
    });
    return result;
};
export const pick = (obj, keys) => {
    const result = {};
    keys.forEach((key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export const mergeTwoArray = (des, source, key = 'key') => {
    const result = des.map((item) => {
        const itemSource = source.find((i) => i[key] === item[key]);
        return itemSource ?? item;
    });
    return result;
};
export function uniqueOptionsById(options) {
    return options.filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
}
export function uniqueOptionsByCode(options) {
    return options.filter((v, i, a) => a.findIndex((v2) => v2.code === v.code) === i);
}
export const mergeObjectFalsy = (A, B) => {
    const res = {};
    Object.keys({ ...A, ...B }).forEach((key) => {
        res[key] = B[key] || A[key];
    });
    return res;
};
export function isHaveCommonItem(arr1 = [], arr2 = []) {
    return arr1.some((item) => arr2.includes(item));
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObjectFalsy = exports.mergeTwoArray = exports.pick = exports.omit = exports.deepClone = exports.groupBy = exports.unique = exports.chunk = void 0;
exports.uniqueOptionsById = uniqueOptionsById;
exports.uniqueOptionsByCode = uniqueOptionsByCode;
exports.isHaveCommonItem = isHaveCommonItem;
// Array utilities
const chunk = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};
exports.chunk = chunk;
const unique = (array) => {
    return [...new Set(array)];
};
exports.unique = unique;
const groupBy = (array, key) => {
    return array.reduce((groups, item) => {
        const group = String(item[key]);
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(item);
        return groups;
    }, {});
};
exports.groupBy = groupBy;
// Object utilities
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.deepClone = deepClone;
const omit = (obj, keys) => {
    const result = { ...obj };
    keys.forEach((key) => {
        delete result[key];
    });
    return result;
};
exports.omit = omit;
const pick = (obj, keys) => {
    const result = {};
    keys.forEach((key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
};
exports.pick = pick;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mergeTwoArray = (des, source, key = 'key') => {
    const result = des.map((item) => {
        const itemSource = source.find((i) => i[key] === item[key]);
        return itemSource ?? item;
    });
    return result;
};
exports.mergeTwoArray = mergeTwoArray;
function uniqueOptionsById(options) {
    return options.filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
}
function uniqueOptionsByCode(options) {
    return options.filter((v, i, a) => a.findIndex((v2) => v2.code === v.code) === i);
}
const mergeObjectFalsy = (A, B) => {
    const res = {};
    Object.keys({ ...A, ...B }).forEach((key) => {
        res[key] = B[key] || A[key];
    });
    return res;
};
exports.mergeObjectFalsy = mergeObjectFalsy;
function isHaveCommonItem(arr1 = [], arr2 = []) {
    return arr1.some((item) => arr2.includes(item));
}

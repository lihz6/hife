"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (length) => {
    let index = 0, list = [];
    while (list.push(index++) < length)
        ;
    return list;
};

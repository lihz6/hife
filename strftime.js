"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (time, format = defaultFormat) => {
    const newDate = new Date(time);
    const date = {
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
        date: newDate.getDate(),
        hour: newDate.getHours(),
        minute: newDate.getMinutes(),
        second: newDate.getSeconds()
    };
    return format(date);
};
const defaultFormat = ({ year, month, date, hour, minute }) => `${year}年${month}月${date}日 ${hour}:${minute}`;

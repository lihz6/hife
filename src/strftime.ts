type Data = {
  year: number,
  month: number,
  date: number,
  hour: number,
  minute: number,
  second: number
};
type Pad = (n: number) => string;
type Formater<T> = (data: Data, pad: Pad) => T;

export default function (timestamp: number): string;
export default function <T>(timestamp: number, format: Formater<T>): T;
export default function (timestamp: any, format: any = longFormat) {
  const date = new Date(timestamp);
  const data = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
  const pad: Pad = n => `0${n}`.slice(-2);
  return format(data, pad);
};

export const shortFormat: Formater<string> = ({
  month, date, hour, minute
}, pad) => `${pad(month)}-${pad(date)} ${pad(hour)}:${pad(minute)}`;

export const longFormat: Formater<string> = ({
  year, month, date, hour, minute
}, pad) => `${year}年${month}月${date}日 ${pad(hour)}:${pad(minute)}`;




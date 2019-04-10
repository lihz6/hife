type Data = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};
type Pad = (n: number) => string;
type Formater<T> = (data: Data, pad: Pad) => T;
function defaultFormater({ days, hours, minutes, seconds }: Data, pad: Pad) {
  let list = [];
  for (const len of [
    `${days} 天`,
    `${hours} 小时`,
    `${minutes} 分`,
    `${seconds} 秒`
  ]) {
    if (!len.startsWith('0')) {
      list.push(len);
    } else if (list.length) {
      break;
    }
  }
  const str = list.join(' ');
  if (str.endsWith('分') && list.length === 1) {
    return `${str}钟`;
  }
  return str;
}

export default function(ms: number): string;
export default function<T>(ms: number, format: Formater<T>): T;
export default function(ms: any, format: any = defaultFormater) {
  if (ms < 1000) {
    return '';
  }
  const date = new Date(ms);
  const seconds = date.getUTCSeconds();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const days = date.getUTCDate() - 1;
  const pad: Pad = n => `0${n}`.slice(-2);
  return format({ seconds, minutes, hours, days }, pad);
}

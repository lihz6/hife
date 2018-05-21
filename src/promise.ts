export default function (data: any, ms: number = 2000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms, data);
  });
}
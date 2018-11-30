export default function <T>(data: T, ms: number = 2000) {
  return new Promise<T>(resolve => {
    setTimeout(resolve, ms, data);
  });
}
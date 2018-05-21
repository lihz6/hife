export default function range(length: number) {
  let index = 0, list = [];
  while (list.push(index++) < length);
  return list;
};

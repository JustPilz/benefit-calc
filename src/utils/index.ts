export function genRandomHash(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function roundRobinTraversal(arr: any[]) {
  let index = 0;
  const n = arr.length;

  return function () {
    const result = arr[index];
    index = (index + 1) % n;
    return result;
  };
}

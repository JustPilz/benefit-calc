export const roundTo = (n: number, place: number = 2) => {
  return Math.round((n + Number.EPSILON) * 100) * 0.01;
};

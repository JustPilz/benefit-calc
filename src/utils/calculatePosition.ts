import { ItemRow } from "@/constant/types";

export const calculatePosition = (array: ItemRow[]) => {
  // Filter out objects with negative mass or price values
  const filteredArray = array.filter((obj) => obj.mass >= 0 && obj.price >= 0);

  // Find the minimum value of price / mass
  const min = Math.min(
    ...filteredArray.map(({ price, mass }: ItemRow) => price / mass)
  );

  // Add index position based on quotient value order
  const newArray = array.map((obj, index) => {
    const quotient = obj.price / obj.mass;
    let position = -1;
    if (obj.mass >= 0 && obj.price >= 0) {
      const quotientDiff = Math.abs(quotient * 1000 - min * 1000);
      position =
        quotientDiff <= 0.1
          ? 0
          : filteredArray.filter((o) => o.price / o.mass, 4 < quotient).length;
    }
    return { ...obj, position };
  });

  return newArray;
};

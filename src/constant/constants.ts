import { genRandomHash } from "@/utils";

export const UNITS = {
  gr: {
    id: "gr",
    name: "грамм",
    short: "гр",
    coef: 1,
    mass: "Вес (гр)",
    convertTo: ["gr", "kg"],
  },
  kg: {
    id: "kg",
    name: "кило",
    short: "кг",
    coef: 1000,
    mass: "Вес (кг)",
    convertTo: ["gr", "kg"],
  },
  ml: {
    id: "ml",
    name: "мл",
    short: "мл",
    coef: 1,
    mass: "Объём (мл)",
    convertTo: ["ml", "l"],
  },
  l: {
    id: "l",
    name: "литр",
    short: "л",
    coef: 1000,
    mass: "Объём (л)",
    convertTo: ["ml", "l"],
  },
  piece: {
    id: "piece",
    name: "штуку",
    short: "шт",
    coef: 1,
    mass: "Количество",
    convertTo: ["piece"],
  },
};

// export const defaultItems = Array.from({ length: 2 }, () => ({
//   id: genRandomHash(5),
//   mass: -1,
//   price: -1,
//   position: -1,
// }));

export const defaultItems = [
  {
    id: genRandomHash(5),
    mass: 5,
    price: 200,
    position: -1,
  },
  {
    id: genRandomHash(5),
    mass: 2,
    price: 99,
    position: -1,
  },
  {
    id: genRandomHash(5),
    mass: 3,
    price: 1,
    position: -1,
  },
  {
    id: genRandomHash(5),
    mass: 500,
    price: 2,
    position: -1,
  },
  {
    id: genRandomHash(5),
    mass: 500,
    price: 3,
    position: -1,
  },
];

export const MAX_ITEMS = 5;
export const COLOR = "indigo";

import { genRandomHash } from "@/utils";
import { Unit, UnitData } from "./types";

export const UNITS = {
  gr: {
    id: "gr",
    name: "1 гр",
    short: "гр",
    coef: 1,
    mass: "Вес (гр)",
    convertTo: ["gr", "gr100", "kg"],
    visible: true,
  },
  gr100: {
    id: "kg",
    name: "100 гр",
    short: "кг",
    coef: 100,
    mass: "Вес (кг)",
    convertTo: ["gr", "gr100", "kg"],
    visible: false,
  },
  kg: {
    id: "kg",
    name: "1 кг",
    short: "кг",
    coef: 1000,
    mass: "Вес (кг)",
    convertTo: ["gr", "gr100", "kg"],
    visible: true,
  },
  ml: {
    id: "ml",
    name: "1 мл",
    short: "мл",
    coef: 1,
    mass: "Объём (мл)",
    convertTo: ["ml", "ml100", "l"],
    visible: true,
  },
  ml100: {
    id: "ml",
    name: "100 мл",
    short: "мл",
    coef: 100,
    mass: "Объём (мл)",
    convertTo: ["ml", "ml100", "l"],
    visible: false,
  },
  l: {
    id: "l",
    name: "1 литр",
    short: "л",
    coef: 1000,
    mass: "Объём (л)",
    convertTo: ["ml", "ml100", "l"],
    visible: true,
  },
  piece: {
    id: "piece",
    name: "штуку",
    short: "шт",
    coef: 1,
    mass: "Количество",
    convertTo: ["piece"],
    visible: true,
  },
} as Record<Unit, UnitData>;

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
    position: 0,
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

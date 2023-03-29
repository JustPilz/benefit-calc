export type Unit = "gr" | "gr100" | "kg" | "ml" | "ml100" | "l" | "piece";
export type UnitData = {
  id: Unit;
  name: string;
  short: string;
  coef: number;
  mass: string;
  convertTo: Unit[];
  visible: boolean;
};
export type ItemRow = {
  id: string;
  mass: number;
  price: number;
  position: number;
};

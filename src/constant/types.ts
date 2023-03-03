export type Unit = "gr" | "kg" | "ml" | "l" | "piece";

export type ItemRow = {
  id: string;
  mass: number;
  price: number;
  position: number;
};

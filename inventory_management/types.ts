export interface Option {
  value: string;
  label: string;
}

export type Categories = "Sidewalk Shed" | "Scaffold" | "Shoring";

export interface Item {
  id: number;
  name: string;
  status: string;
  categories: Categories[];
}

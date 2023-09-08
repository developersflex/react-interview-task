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

export interface Category {
  id: string;
  item: string;
  quantity: string;
  description: string;
  notes: string;
}

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

export type CategoryItem = {
  id: number;
  item: string;
  quantity: string;
  description: string;
  notes: string;
};

export type Category = {
  id: number;
  name: string;
  items: CategoryItem[];
};

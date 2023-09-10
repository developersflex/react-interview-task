export interface Option {
  value: string;
  label: string;
}

export type Status = "Completed" | "In Progress" | "On Road" | "On Hold";

export type Categories = "Sidewalk Shed" | "Scaffold" | "Shoring";

export interface Jobsite {
  name: string;
  status: string;
}

export type CategoryItem = {
  item: string;
  quantity: string;
  description: string;
  notes: string;
  category: Categories;
};

export type Category = {
  id: number;
  name: string;
  items: CategoryItem[];
};

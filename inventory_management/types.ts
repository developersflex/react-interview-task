export interface Option {
  value: string;
  label: string;
}

export type Status = "Completed" | "In Progress" | "On Road" | "On Hold";

export type Categories = "Sidewalk Shed" | "Scaffold" | "Shoring";

export interface Jobsite {
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
  category: Categories;
};

export type Category = {
  id: number;
  name: string;
  items: CategoryItem[];
};

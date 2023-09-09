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

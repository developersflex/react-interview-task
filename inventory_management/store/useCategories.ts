import { Category } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  categories: Category[];
  category: Category | null;
  get: () => void;
  getById: (id: string) => void;
  add: (newJobSite: Category) => void; // Add the add function
};

const useCategories = create<customersStoreState>((set, get) => ({
  categories: [],
  category: null,

  get: async () => {
    try {
      const response = await fetch("http://localhost:3001/categories");
      const categories = await response.json();
      set({ categories });
    } catch (error) {
      set({ categories: [] });
    }
  },

  getById: async (id: string) => {
    try {
      const response = await fetch(`  http://localhost:3001/categories/${id}`);
      const category = await response.json();
      set({ category });
    } catch (error) {
      set({ category: null });
    }
  },

  add: (newCategory: Category) => {
    set((state) => ({
      categories: [...state.categories, newCategory],
    }));
    fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    });
  },
}));

export default useCategories;

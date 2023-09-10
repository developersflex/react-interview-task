import API_URL from "@/config/apiConfig";
import { Category, CategoryItem } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  categories: Category[];
  categoryItems: CategoryItem[] | [];
  get: () => void;
  getItems: (categoryName: string) => void;
  addCategoryItem: (newCategoryItem: CategoryItem) => void;
};

const useCategories = create<customersStoreState>((set, get) => ({
  categories: [],
  categoryItems: [],

  get: async () => {
    try {
      const response = await fetch(`${API_URL}/categories`);
      const categories = await response.json();
      set({ categories });
    } catch (error) {
      set({ categories: [] });
    }
  },

  addCategoryItem: async (newCategoryItem: CategoryItem) => {
    try {
      const response = await fetch(`${API_URL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategoryItem),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      set({ categoryItems: [...get().categoryItems, data] });

      alert(`Item added: ${data.item}`);
    } catch (error) {
      alert(`Fetch error: ${error}`);
    }
  },

  getItems: async (categoryName: string) => {
    try {
      const response = await fetch(`${API_URL}/items`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const filteredItems = data.filter(
        (item: CategoryItem) => item.category === categoryName
      );

      set({ categoryItems: filteredItems });
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  },
}));

export default useCategories;

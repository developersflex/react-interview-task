import API_URL from "@/config/apiConfig";
import { Category, CategoryItem } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  categories: Category[];
  categoryItems: CategoryItem[] | [];
  get: () => void;
  getItems: (categoryName: string) => void;
  addCategoryItem: (newCategoryItem: CategoryItem) => void;
  editCategoryItem: (editedCategoryItem: CategoryItem) => void;
  setCategoryItems: (items: []) => void;
};

const useCategories = create<customersStoreState>((set, get) => ({
  categories: [],
  categoryItems: [],

  setCategoryItems: (items: []) => set({ categoryItems: items }),

  get: async () => {
    try {
      const response = await fetch(`${API_URL}/items`);
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
  editCategoryItem: async (editedCategoryItem: CategoryItem) => {
    try {
      const response = await fetch(
        `${API_URL}/items/${editedCategoryItem.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedCategoryItem),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      set((prevState) => ({
        categoryItems: prevState.categoryItems.map((item) =>
          item.id === editedCategoryItem.id ? data : item
        ),
      }));

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

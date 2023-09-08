import { Categories, Category, CategoryItem } from "@/types";
import { findCategoryByName } from "@/utils/functions";
import { create } from "zustand";

type customersStoreState = {
  categories: Category[];
  category: Category | null;
  categoryItems: CategoryItem[] | [];
  get: () => void;
  getItems: (categoryName: string) => void;
  add: (categoryName: Categories, newCategoryItem: CategoryItem) => void;
};

const useCategories = create<customersStoreState>((set, get) => ({
  categories: [],
  category: null,
  categoryItems: [],

  get: async () => {
    try {
      const response = await fetch("http://localhost:3001/categories");
      const categories = await response.json();
      set({ categories });
    } catch (error) {
      set({ categories: [] });
    }
  },

  add: async (categoryName: string, newItem: CategoryItem) => {
    try {
      const categoryToUpdate = get().categories.find(
        (category) => category.name === categoryName
      );

      if (categoryToUpdate) {
        const nextId =
          categoryToUpdate.items.reduce(
            (maxId, item) => (item.id > maxId ? item.id : maxId),
            0
          ) + 1;

        newItem.id = nextId;
        const updatedCategory = {
          ...categoryToUpdate,
          items: [...categoryToUpdate.items, newItem],
        };
        const categoryIdToUpdate = categoryToUpdate.id;
        const response = await fetch(
          `http://localhost:3001/categories/${categoryIdToUpdate}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCategory),
          }
        );

        if (response.ok) {
          set((state) => {
            return {
              ...state,
              categories: state.categories.map((category) =>
                category.id === categoryIdToUpdate ? updatedCategory : category
              ),
            };
          });

          console.log("Item added successfully.");
        } else {
          console.error("Failed to update category.");
        }
      } else {
        console.error("Category not found.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getItems: (categoryName: string) => {
    const { categories } = get();
    const category = findCategoryByName(categories, categoryName);

    if (category) {
      set({ categoryItems: category.items });
    } else {
      return [];
    }
  },
}));

export default useCategories;

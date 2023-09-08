import { Category } from "@/types";

export function getStatusClassName(status: string) {
  switch (status) {
    case "Completed":
      return "bg-brand-green-1000";
    case "On Hold":
      return "bg-brand-red-1000";
    case "On Road":
      return "bg-brand-yellow-1000";
    case "In Progress":
      return "bg-brand-green-1001";
    default:
      return "";
  }
}
export function getCategoryClassName(category: string) {
  switch (category) {
    case "Sidewalk Shed":
      return "bg-brand-green-1002";
    case "Scaffold":
      return "bg-brand-yellow-1001";
    default:
      return "bg-brand-purple-1000";
  }
}

export const findCategoryByName = (
  categories: Category[],
  categoryName: string
): Category | undefined => {
  return categories.find((category) => category.name === categoryName);
};

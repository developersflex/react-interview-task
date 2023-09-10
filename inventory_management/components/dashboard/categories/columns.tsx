import EditCategoryItem from "@/components/dashboard/categories/edit-category-item";
import { CategoryItem } from "@/types";

export const columns = [
  {
    header: "Nr.",
    key: "id",
    className: "md:text-left md:pl-5 pl-1 w-[50px] md:w-[350px]",
  },
  {
    header: "Item",
    key: "item",
    className: "md:text-left md:w-[300px]",
    render: (item: CategoryItem) => (
      <EditCategoryItem
        categoryName={item.category}
        data={item}
        text={item.item}
      />
    ),
  },
  {
    header: "Quantity",
    key: "quantity",
    className: "md:text-left md:w-[300px]",
    render: (item: CategoryItem) => (
      <EditCategoryItem
        categoryName={item.category}
        data={item}
        text={item.quantity}
      />
    ),
  },
  {
    header: "Description",
    key: "description",
    className: "md:text-left md:w-[800px]",
    render: (item: CategoryItem) => (
      <EditCategoryItem
        categoryName={item.category}
        data={item}
        text={item.description}
      />
    ),
  },
  {
    header: "Notes",
    key: "notes",
    className: "md:text-left pr-1",
    render: (item: CategoryItem) => (
      <EditCategoryItem
        categoryName={item.category}
        data={item}
        text={item.notes}
      />
    ),
  },
];

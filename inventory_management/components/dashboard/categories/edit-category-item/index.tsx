import React, { useState } from "react";
import EditItem from "./form";
import { Categories, CategoryItem } from "@/types";
import { Button } from "@/components/Button";

type Props = {
  categoryName: Categories;
  text: string;
  data: CategoryItem;
};

function index({ categoryName, text, data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className=" hover:text-blue-700 underline focus:outline-none"
        onDoubleClick={() => setIsOpen(true)}
      >
        {text}
      </button>
      <EditItem
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        categoryName={categoryName}
        data={data}
      />
    </>
  );
}

export default index;

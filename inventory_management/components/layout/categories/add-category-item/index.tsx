import Button from "@/components/Button";
import React, { useState } from "react";
import AddItem from "./Modal";
import { Categories } from "@/types";

type Props = {
  categoryName: Categories;
};

function index({ categoryName }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button text="Create" variant="create" onClick={() => setIsOpen(true)} />
      <AddItem
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        categoryName={categoryName}
      />
    </>
  );
}

export default index;

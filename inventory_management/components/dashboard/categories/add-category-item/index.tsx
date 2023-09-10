import React, { useState } from "react";
import AddItem from "./form";
import { Categories } from "@/types";
import { Button } from "@/components/Button";

type Props = {
  categoryName: Categories;
};

function index({ categoryName }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button text="Create" onClick={() => setIsOpen(true)} />
      <AddItem
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        categoryName={categoryName}
      />
    </>
  );
}

export default index;

import Button from "@/components/Button";
import React, { useState } from "react";
import AddCategory from "./Modal";

type Props = {};

function index({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        text="Create Category"
        variant="create"
        onClick={() => setIsOpen(true)}
      />
      <AddCategory isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
}

export default index;

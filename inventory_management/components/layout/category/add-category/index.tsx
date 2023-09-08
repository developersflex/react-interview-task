import Button from "@/components/Button";
import React, { useState } from "react";
import AddJob from "./Modal";

type Props = {};

function index({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        text="Create Jobsite"
        variant="create"
        onClick={() => setIsOpen(true)}
      />
      <AddJob isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
}

export default index;

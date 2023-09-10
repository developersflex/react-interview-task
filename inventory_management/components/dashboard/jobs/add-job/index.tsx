import { Button } from "@/components/Button";
import React, { useState } from "react";
import AddJob from "./form";

type Props = {};

function index({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Create" onClick={() => setIsOpen(true)} />
      <AddJob isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
}

export default index;

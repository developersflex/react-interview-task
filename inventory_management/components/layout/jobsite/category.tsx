import { Icons } from "@/components/Icons";
import { getCategoryClassName } from "@/utils/functions";
import React from "react";

type Props = {
  name: string;
  onClick?: () => void;
  isSelected?: boolean;
};

function Category({ name, onClick, isSelected }: Props) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`relative text-center font-semibold py-1 my-2 rounded-md ${
        isSelected
          ? `text-white ${getCategoryClassName(name)}`
          : "bg-brand-background-secondary"
      }`}
      onClick={handleClick}
    >
      {name}
      <Icons.check className="absolute right-2 top-2" />
    </div>
  );
}

export default Category;

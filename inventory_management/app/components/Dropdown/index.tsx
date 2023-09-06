"use client";

import React, { useState } from "react";
import { Icons } from "../Icons";
import { Option } from "@/types";
import MultipleDropdown from "./Multiple";

type DropdownProps = {
  options: Option[];
  label: string;
  multiple?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  multiple = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  if (multiple) {
    return <MultipleDropdown options={options} label="Category Included" />;
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-start w-full ml-2">{label}</label>
      <div
        className={`w-64 h-8 rounded flex items-center p-2 relative bg-[#F5F5F7]  ${
          isOpen && `rounded-b-none`
        }`}
      >
        <button
          className="flex w-full items-center justify-between"
          onClick={toggleDropdown}
        >
          {(selectedOption && (
            <div className="flex items-center gap-1">
              <div
                className={`rounded-full h-[10px] w-[10px] option-background-${selectedOption.value}`}
              />
              {selectedOption.label}
            </div>
          )) ||
            "Select"}
          {isOpen ? <Icons.arrow_up /> : <Icons.arrow_down />}
        </button>

        {isOpen && (
          <ul className="absolute left-0 top-8 w-full bg-white last:rounded-b  shadow-md">
            {options.map((option) => {
              const optionClassName = `cursor-pointer w-full border-b last:border-none px-2 py-1 last:rounded-b  option-bg-${option.value}`;
              return (
                <li
                  key={option.label}
                  onClick={() => handleOptionClick(option)}
                  className={optionClassName}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

import React, { useState } from "react";
import { Icons } from "./Icons";
import {
  circleDynamicBgStyles,
  getStatusClassName,
  hoverDynamicBgStyles,
} from "@/utils/functions";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
  label: string;
  placeholder: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedValue,
  onSelect,
  label,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <label className="ml-4 text-base font-semibold">{label}</label>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex items-center justify-between w-full px-2 h-8 py-2 text-[#323338] text-sm bg-brand-background-primary transition ${
            isOpen ? "rounded-t-md" : "rounded-md"
          }`}
          id="options-menu"
          aria-haspopup="listbox"
          placeholder="Select one"
        >
          {selectedValue ? (
            <div className="flex items-center gap-1.5">
              <Icons.dot className={circleDynamicBgStyles(selectedValue)} />
              {selectedValue}
            </div>
          ) : (
            <span className="text-[#E0E0E1]">{placeholder}</span>
          )}
          <Icons.arrow_down
            className={`transition ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute  w-full bg-white shadow-md rounded-b-md overflow-hidden"
          role="listbox"
          aria-labelledby="options-menu"
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              type="button"
              className={`block px-2 py-2 text-sm text-[#323338] w-full text-left  
              } border-t first:border-none hover:text-white
              ${hoverDynamicBgStyles[option.label]}
              ${
                option.value === selectedValue
                  ? `text-white bg-${getStatusClassName(option.label)}`
                  : ""
              }
              `}
              role="option"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

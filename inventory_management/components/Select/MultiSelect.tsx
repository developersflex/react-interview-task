import {
  circleDynamicBgStyles,
  getCategoryClassName,
  hoverDynamicBgStyles,
} from "@/utils/functions";
import { useField, useFormikContext } from "formik";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { Icons } from "../Icons";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  options: Option[];
  label: string;
  placeholder: string;
  name: string;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  label,
  placeholder,
  name,
  className,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const { setFieldValue } = useFormikContext();
  const areAllSelected = selectedOptions.length === options.length;

  const toggleOption = (option: Option) => {
    let updatedOptions;

    if (isSelected(option)) {
      updatedOptions = selectedOptions.filter(
        (item) => item.value !== option.value
      );
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    const updatedValues = updatedOptions.map((item) => item.value);
    setSelectedOptions(updatedOptions);
    setFieldValue(name, updatedValues);
  };

  const isSelected = (option: Option) => {
    return selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );
  };

  useEffect(() => {
    if (areAllSelected) setIsOpen(false);
  }, [areAllSelected]);

  const renderSelectedOptions = () => (
    <ul className="flex gap-5 mt-2">
      {selectedOptions.map((option) => (
        <div className="flex items-center gap-1.5" key={option.value}>
          <Icons.dot className={circleDynamicBgStyles(option.label)} />
          <li>{option.label}</li>
          <Icons.x
            onClick={() => toggleOption(option)}
            className="cursor-pointer bg-brand-red-1000 rounded"
          />
        </div>
      ))}
    </ul>
  );

  return (
    <div className={`relative inline-block text-left w-full mb-5 ${className}`}>
      <div className="relative flex flex-col">
        <label className="ml-4 text-base font-semibold">{label}</label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex items-center justify-between w-full px-2 h-8 py-2 text-[#323338] text-sm bg-brand-background-primary transition ${
            isOpen ? "rounded-t-md" : "rounded-md"
          }`}
          id="options-menu"
          aria-haspopup="listbox"
        >
          <p className="text-[#E0E0E1]">
            {areAllSelected ? "All of them selected" : placeholder}
          </p>
          <Icons.arrow_down
            className={`transition ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {hasError && (
          <p className="text-brand-red-1000 text-xs ml-2 absolute -bottom-5">
            {meta.error}
          </p>
        )}
      </div>

      {isOpen && (
        <div className="absolute  w-full bg-white shadow-md z-10 rounded-b-md overflow-hidden">
          {options.map((option) => {
            // Checking if the option is selected
            const isSelected = selectedOptions.some(
              (selectedOption) => selectedOption.value === option.value
            );
            return (
              <button
                type="button"
                key={option.value}
                onClick={() => toggleOption(option)}
                className={`flex items-center justify-between px-2 py-2 text-sm text-[#323338] w-full text-left  
        } border-t first:border-none hover:text-white
        ${hoverDynamicBgStyles[option.label]}
        ${isSelected ? `text-white ${getCategoryClassName(option.label)}` : ""}
        `}
              >
                {option.label}
                {isSelected && <Icons.check />}
              </button>
            );
          })}
        </div>
      )}
      {renderSelectedOptions()}
    </div>
  );
};

export default MultiSelect;

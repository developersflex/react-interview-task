import React, { useState } from "react";
import { Icons } from "../Icons";
import {
  circleDynamicBgStyles,
  getStatusClassName,
  hoverDynamicBgStyles,
} from "@/utils/functions";
import { useField, useFormikContext } from "formik";
import MultiSelect from "./MultiSelect";
import { Status } from "@/types";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  placeholder: string;
  name: string;
  isMulti?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  placeholder,
  name,
  isMulti = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const { setFieldValue } = useFormikContext();

  const handleSelect = (option: Option) => {
    setFieldValue(name, option.value);
    setIsOpen(false);
  };

  if (isMulti) {
    return (
      <MultiSelect
        options={options}
        label={label}
        placeholder={placeholder}
        name={name}
        className={className}
      />
    );
  }

  return (
    <div className={`relative mb-5 inline-block text-left w-full ${className}`}>
      <div className="relative">
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
          {typeof field.value === "string" &&
          (
            ["Completed", "In Progress", "On Road", "On Hold"] as Status[]
          ).includes(field.value as Status) ? (
            <div className="flex items-center gap-1.5">
              <Icons.dot className={circleDynamicBgStyles(field.value)} />
              {field.value}
            </div>
          ) : (
            <>
              {field.value || (
                <span className="text-[#E0E0E1]">{placeholder}</span>
              )}
            </>
          )}
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
        <div
          className="absolute  w-full bg-white shadow-md z-10 rounded-b-md overflow-hidden"
          role="listbox"
          aria-labelledby="options-menu"
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              type="button"
              className={`block px-2 py-2 text-sm text-[#323338] w-full text-left 
              } border-t first:border-none
              ${hoverDynamicBgStyles[option.label]}
              ${
                option.value === field.value
                  ? `bg-${getStatusClassName(option.label)}`
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

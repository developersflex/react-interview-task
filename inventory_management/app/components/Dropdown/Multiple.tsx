import React, { useState } from "react";
import { Option } from "@/types"; // Import your Option type
import { Icons } from "../Icons";

const MultipleDropdown: React.FC<{
  options: Option[];
  label: string;
}> = ({ options, label }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (option: Option) => {
    if (isSelected(option)) {
      deselectOption(option);
    } else {
      selectOption(option);
      if (selectedOptions.length === options.length - 1) {
        toggleDropdown();
      }
    }
  };

  const selectOption = (option: Option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const deselectOption = (option: Option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected.value !== option.value)
    );
  };

  const isSelected = (option: Option) => {
    return selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-start w-full ml-2">{label}</label>
      <div
        className={`w-[500px] h-8 flex item rounded p-2 relative bg-[#F5F5F7]  ${
          isOpen && "rounded-b-none"
        } `}
      >
        <button
          className="w-full text-left flex items-center justify-between transition-all"
          onClick={toggleDropdown}
        >
          {selectedOptions.length === options.length
            ? "All Selected"
            : "Select"}
          {isOpen ? <Icons.arrow_up /> : <Icons.arrow_down />}
        </button>

        {isOpen && (
          <ul className="absolute left-0 top-8 w-full bg-white last:rounded-b  shadow-md dropdown-open">
            {options.map((option) => {
              return (
                <li
                  key={option.label}
                  onClick={() => toggleOption(option)}
                  className={`flex items-center justify-between cursor-pointer w-full h-8 border-b last:border-none px-2 py-1 last:rounded-b  ${
                    isSelected(option)
                      ? `option-background-${option.value}`
                      : ""
                  }`}
                >
                  {option.label}
                  {isSelected(option) && <Icons.check />}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {!isOpen && selectedOptions.length > 0 && (
        <div className="flex items-center gap-6 mt-2 ml-3">
          {selectedOptions.map((option) => {
            return (
              <div className="flex items-center gap-2 text-xs">
                <div
                  className={`rounded-full h-[10px] w-[10px] option-background-${option.value}`}
                />
                <p>{option.label}</p>
                <Icons.delete
                  className="cursor-pointer"
                  onClick={() => deselectOption(option)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultipleDropdown;

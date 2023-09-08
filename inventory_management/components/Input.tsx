import React from "react";

type Props = {
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, label, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="ml-4 text-base font-semibold">{label}</label>
      <input
        type="text"
        id={label}
        name="name"
        placeholder={placeholder}
        required
        className="rounded-md bg-brand-background-primary h-8 px-2 py-1"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;

import React from "react";

type Props = {
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Add onChange prop
};

function Textarea({ placeholder, label, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="ml-4 text-base font-semibold">{label}</label>
      <textarea
        id={label}
        name="name"
        rows={5}
        placeholder={placeholder}
        required
        className="rounded-md bg-brand-background-primary px-2 py-1"
        onChange={onChange}
      />
    </div>
  );
}

export default Textarea;

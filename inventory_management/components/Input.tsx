import { useField } from "formik";
import React from "react";

type InputProps = {
  placeholder: string;
  label: string;
  name: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  name,
  className,
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className={`w-full mb-5 ${className}`}>
      <div className="relative flex flex-col gap-1">
        <label className="ml-4 text-base font-semibold">{label}</label>
        <input
          type="text"
          id={label}
          placeholder={placeholder}
          className="rounded-md bg-brand-background-primary placeholder-[#E0E0E1] h-8 px-2 py-1"
          {...field}
        />
        {hasError && (
          <p className="text-brand-red-1000 text-xs ml-2 absolute -bottom-5">
            {meta.error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;

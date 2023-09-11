import { useField } from "formik";
import React from "react";

type TextareaProps = {
  placeholder: string;
  label: string;
  name: string;
  className?: string;
  rows?: number;
  cols?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  label,
  name,
  rows = 5,
  cols = 5,
  className,
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className={`w-full mb-5 ${className}`}>
      <div className="relative flex flex-col gap-1">
        <label className="ml-4 text-base font-semibold">{label}</label>
        <textarea
          id={label}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          className="rounded-md bg-brand-background-primary px-2 py-1"
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

export default Textarea;

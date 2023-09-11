"use client";

import React, { FC, HTMLAttributes } from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "flex min-w-[150px] h-[32px] items-center justify-center rounded text-white relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-[#71CF48] hover:bg-[#68C142]",
        destructive: "bg-[#FE4C4A] hover:bg-[#EB4345]",
        link: "bg-[#1264A3] hover:bg-[#0F5C97]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const hrVariants = cva("border-r h-full", {
  variants: {
    variant: {
      default: "border-[#68C142] group-hover:border-[#71CF48]",
      destructive: "border-[#EB4345] group-hover:border-[#FE4C4A]",
      link: "border-[#0F5C97] group-hover:border-[#1264A3]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
  variant?: "default" | "destructive" | "link";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, variant, text, className }) => {
  let icon;

  if (variant === undefined) icon = <Icons.plus />;
  if (variant === "destructive") icon = <Icons.x />;
  if (variant === "link") icon = <Icons.arrow_left />;

  return (
    <>
      <button
        className={cn(buttonVariants({ variant, className }))}
        onClick={onClick}
        type="submit"
      >
        <div className="flex justify-center flex-1 p-2">{text}</div>
        <div className="flex items-center justify-start h-full mr-2 gap-2">
          <hr className={cn(hrVariants({ variant }))} />
          {icon}
        </div>
      </button>
    </>
  );
};

export { Button, buttonVariants };

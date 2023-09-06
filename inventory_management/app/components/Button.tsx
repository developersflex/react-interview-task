"use client";

import React from "react";
import { Icons } from "./Icons";

type Props = {
  variant?: "create" | "cancel-changes" | "save-changes" | "go-back";
  text: string;
  onClick?: () => void;
};

export default function Button({ variant = "create", onClick, text }: Props) {
  let buttonClass =
    "flex items-center justify-center rounded text-white relative overflow-hidden group h-[32px] min-w-[150px]";
  let icon;
  let hrBorderColor;

  if (variant === "create") {
    buttonClass += " bg-[#71CF48] hover:bg-[#68C142] ";
    icon = <Icons.plus />;
    hrBorderColor = " border-[#68C142] group-hover:border-[#71CF48]";
  } else if (variant === "save-changes") {
    buttonClass += " bg-[#71CF48] hover:bg-[#68C142]";
    icon = <Icons.check />;
    hrBorderColor = " border-[#68C142] group-hover:border-[#71CF48]";
  } else if (variant === "cancel-changes") {
    buttonClass += " bg-[#FE4C4A] hover:bg-[#EB4345]";
    icon = <Icons.x />;
    hrBorderColor = " border-[#EB4345] group-hover:border-[#FE4C4A]";
  } else if (variant === "go-back") {
    buttonClass += " bg-[#1264A3] hover:bg-[#0F5C97]";
    icon = <Icons.arrow_left />;
    hrBorderColor = " border-[#0F5C97] group-hover:border-[#1264A3]";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      <div className="flex justify-center flex-1 p-2">{text}</div>
      <div className="flex items-center justify-start h-full mr-2 gap-2">
        <hr className={`border-r h-full ${hrBorderColor}`} />
        {icon}
      </div>
    </button>
  );
}

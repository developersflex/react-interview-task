import { getStatusClassName } from "@/utils/functions";
import React from "react";

type Props = { text: string };

export default function Chip({ text }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`w-32 h-8 flex items-center justify-center rounded-md center text-white ${getStatusClassName(
          text
        )}`}
      >
        {text}
      </div>
    </div>
  );
}

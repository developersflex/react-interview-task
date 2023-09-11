import { Categories, Status } from "@/types";
import { getStatusClassName } from "@/utils/functions";
import React from "react";

type Props = { text: Status | string };

export default function Chip({ text }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`w-32 h-8 flex items-center justify-center rounded-md center text-white bg-${getStatusClassName(
          text
        )}`}
      >
        {text}
      </div>
    </div>
  );
}

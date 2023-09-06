import React from "react";

type Props = {
  onRoad: string;
  completed: string;
  onHold: string;
};

export default function Header({ onRoad, completed, onHold }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white rounded-lg p-2 w-full text-white text-3xl shadow-md">
      <div className="rounded-lg bg-brand-yellow h-28 flex items-center justify-center">
        {onRoad} On Road
      </div>
      <div className="rounded-lg bg-brand-green-main h-28 flex items-center justify-center">
        {completed} Completed
      </div>
      <div className="rounded-lg bg-brand-red h-28 flex items-center justify-center">
        {onHold} On Hold
      </div>
    </div>
  );
}

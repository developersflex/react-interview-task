import useJobsites from "@/store/useJobsites";
import React from "react";
import { HeaderCard } from "../HeaderCard";

export default function Header() {
  const { statuses } = useJobsites();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white rounded-lg p-2 w-full text-white text-3xl shadow-md">
      {statuses.map((status) => (
        <HeaderCard key={status.name} name={status.name} value={status.value} />
      ))}
    </div>
  );
}

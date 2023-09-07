"use client";

import React, { useState } from "react";
import Button from "../Button";
import Badge from "../Badge";
import { Icons } from "../Icons";
import AddJob from "../dashboard/add-job";

interface Item {
  id: string;
  title: string;
  status: string;
}

interface Props {
  data: Item[];
}

export default function Table({ data }: Props) {
  const [filter, setFilter] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = e.target.value.toLowerCase();
    setFilter(sanitizedInput);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(filter)
  );

  return (
    <div className="flex flex-col gap-5 w-full shadow-md rounded-lg   overflow-hidden">
      <div className="w-full  px-5 py-2 bg-gray-100">Title</div>
      <div className="w-full flex flex-col gap-5 px-4 md:flex-row md:justify-end">
        <div className="relative">
          <Icons.loop className="absolute bottom-2.5 left-2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            value={filter}
            onChange={handleInputChange}
            className="w-full md:w-96 h-8 pl-10 pr-4 py-2 rounded border flex items-center"
          />
        </div>
        <Button
          text="Create"
          variant="create"
          onClick={() => setIsModalOpen(true)}
        />
        <AddJob
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          onAddJob={() => alert("Job added successfully")}
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Jobsite Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr
              key={index}
              className={`text-center   ${
                index % 2 === 0 ? "bg-gray-100" : ""
              }`}
            >
              <td>{item.title}</td>
              <td>
                <Badge text={item.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

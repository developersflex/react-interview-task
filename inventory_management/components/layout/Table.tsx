"use client";

import React, { Suspense, useState } from "react";
import Button from "../Button";
import Badge from "../Badge";
import { Icons } from "../Icons";
import AddJob from "../dashboard/add-job";
import Link from "next/link";
import { Item } from "@/types";
import mockData from "@/mock-api/data.json";

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
    item.name?.toLowerCase().includes(filter)
  );

  return (
    <div className="flex flex-col gap-5 w-full shadow-md rounded-lg   overflow-hidden">
      <div className="w-full  px-5 py-2 bg-brand-background">Title</div>
      <div className="w-full flex flex-col gap-5 px-4 md:flex-row md:justify-end">
        <div className="relative">
          <Icons.loop className="absolute bottom-1.5 left-2 pointer-events-none" />
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
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center w-1/2">Jobsite Name</th>
            <th className="w-1/2">Status</th>
          </tr>
        </thead>

        <tbody>
          {data?.length === 0 ? (
            <>
              {Array.from({ length: mockData.jobsites?.length }).map(
                (_, index) => (
                  <tr
                    key={index}
                    className={`text-center animate-pulse  h-[34px] ${
                      index % 2 === 0 ? "bg-brand-background" : ""
                    }`}
                  >
                    <td></td>
                    <td></td>
                  </tr>
                )
              )}
            </>
          ) : filteredData?.length === 0 ? (
            <>
              <tr>
                <td className="text-center p-2 bg-brand-background" colSpan={2}>
                  No results found.
                </td>
              </tr>
            </>
          ) : (
            filteredData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`text-left ${
                    index % 2 === 0 ? "bg-brand-background" : ""
                  }`}
                >
                  <td className="pl-5 py-2 md:pl-[580px] md:py-0">
                    <Link
                      href={`/jobsites/${item.id}`}
                      className="text-[#1264A3] text-left  font-semibold whitespace-break-spaces"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td>
                    <Badge text={item.status} />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

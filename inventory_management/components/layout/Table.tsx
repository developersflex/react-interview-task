import React, { useState } from "react";
import ContainerHeader from "@/components/layout/container-header";
import Link from "next/link";
import mockData from "@/mock-api/data.json";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import AddCategory from "./jobsite/add-category";
import AddJobsite from "./jobsite/add-job";

interface Column {
  header: string;
  key: string;
  className?: string;
}

interface Props {
  data: any[];
  columns: Column[];
  placeholder: string;
  hasButton?: boolean;
}

export default function Table({
  data,
  columns,
  placeholder,
  hasButton = true,
}: Props) {
  const [filter, setFilter] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = e.target.value.toLowerCase();
    setFilter(sanitizedInput);
  };

  const filteredData = data?.filter((item) =>
    item.name?.toLowerCase().includes(filter)
  );

  return (
    <div className="flex flex-col gap-5 w-full shadow-md rounded-lg overflow-hidden bg-background">
      <ContainerHeader text="Jobsites List" />
      <div className="w-full flex flex-col gap-5 px-4 md:flex-row md:justify-end">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={filter}
            onChange={handleInputChange}
            className="w-full md:w-96 h-8 pl-10 pr-4 py-2 rounded-md border flex items-center bg-brand-background-secondary placeholder-[#EAEAEA]"
          />
        </div>
        {hasButton && (
          <>
            <AddJobsite />
            <AddCategory />
          </>
        )}
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.header}
              </th>
            ))}
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
                      index % 2 === 0 ? "bg-brand-background-secondary" : ""
                    }`}
                  >
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}></td>
                    ))}
                  </tr>
                )
              )}
            </>
          ) : filteredData?.length === 0 ? (
            <>
              <tr>
                <td
                  className="text-center p-2 bg-brand-background-secondary"
                  colSpan={columns.length}
                >
                  No results found.
                </td>
              </tr>
            </>
          ) : (
            filteredData?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`text-left h-[34px] ${
                    index % 2 === 0 ? "bg-brand-background-secondary" : ""
                  }`}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`pl-5 py-2 md:pl-[573px] md:py-0  ${column.className}`}
                    >
                      {column.key === "name" ? (
                        <Link
                          href={`/jobsites/${item.id}`}
                          className="text-[#1264A3] text-left  font-semibold whitespace-break-spaces"
                        >
                          {item[column.key]}
                        </Link>
                      ) : column.key === "status" ? (
                        <Chip text={item[column.key]} />
                      ) : (
                        item[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

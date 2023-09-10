import React, { useState } from "react";
import ContainerHeader from "@/components/layout/container-header";
import { Icons } from "@/components/Icons";

interface Column {
  header: string;
  key: string;
  className?: string;
  render?: (item: any) => React.ReactNode;
}

interface Props {
  data: any[];
  columns: Column[];
  placeholder: string;
  children?: React.ReactNode;
  isItem?: boolean;
  customFilter?: (item: any, filter: string) => boolean;
}

export default function Table({
  data,
  columns,
  placeholder,
  children,
  isItem = false,
  customFilter,
}: Props) {
  const [filter, setFilter] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = e.target.value.toLowerCase();
    setFilter(sanitizedInput);
  };

  const filteredData = filter
    ? data?.filter((item) =>
        customFilter
          ? customFilter(item, filter)
          : item.name?.toLowerCase().includes(filter)
      )
    : data;

  return (
    <div className="flex flex-col gap-5 w-full shadow-md rounded-lg overflow-hidden bg-background ">
      <ContainerHeader text="Jobsites List" />
      <div className="w-full flex flex-col gap-5 px-4 md:flex-row md:justify-end">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={filter}
            onChange={handleInputChange}
            className="w-full md:w-96 h-8 pl-10 pr-4 py-2 rounded-md border flex items-center bg-brand-background-secondary placeholder-bg-brand-background-secondary"
          />
        </div>
        {children}
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
              <tr>
                <td
                  className="p-2 text-base font-semibold border-t h-[450px]"
                  colSpan={columns.length}
                >
                  <div className="text-center">
                    <Icons.nodata className="w-full" />
                    {isItem ? (
                      <>
                        <p className="mt-5">No Service Selected</p>
                        <span className="font-normal">
                          Please select a service on your left to proceed.
                        </span>
                      </>
                    ) : (
                      <p className="m-5">No data.</p>
                    )}
                  </div>
                </td>
              </tr>
            </>
          ) : filteredData?.length === 0 ? (
            <>
              <tr>
                <td
                  className="text-center p-2 bg-brand-background-secondary"
                  colSpan={columns.length}
                >
                  <p>No results found for "{filter}".</p>
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
                    <td key={colIndex} className={`${column.className}`}>
                      {column.render ? column.render(item) : item[column.key]}
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

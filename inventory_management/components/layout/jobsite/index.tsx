"use client";

import React, { useEffect, useState } from "react";
import ContainerHeader from "../container-header";
import Button from "@/components/Button";
import Table from "../Table";
import { useRouter } from "next/navigation";
import Category from "./category";
import { columns } from "./columns";
import useJobsites from "@/store/useJobsites";
import { Categories } from "@/types";

type Props = {
  slug: string;
};

const index = ({ slug }: Props) => {
  const { getById, jobSite } = useJobsites();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    getById(slug);
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  console.log("selectedCategory", selectedCategory);

  return (
    <div className="flex gap-2.5">
      <div className="flex flex-col justify-between w-1/5 rounded-lg overflow-hidden bg-white shadow-md text-black">
        <ContainerHeader text={jobSite?.name} />
        <div className="flex flex-col justify-between px-2.5 pb-5 mt-2.5 h-full">
          {jobSite?.categories &&
            jobSite.categories.map((category: Categories) => (
              <Category
                key={category}
                name={category}
                onClick={() => handleCategoryClick(category)}
                isSelected={selectedCategory === category}
              />
            ))}
          <div className="w-full flex justify-center items-center">
            <Button
              variant="go-back"
              text="Go Back"
              onClick={() => router.back()}
            />
          </div>
        </div>
      </div>
      <Table
        placeholder="Search a driver..."
        data={[0]}
        hasButton={false}
        columns={columns}
      />
    </div>
  );
};

export default index;

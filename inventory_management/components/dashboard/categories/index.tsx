"use client";

import React, { useEffect, useState } from "react";
import ContainerHeader from "../../layout/container-header";
import Table from "../../layout/Table";
import { useRouter } from "next/navigation";
import Category from "./category-button";
import { columns } from "./columns";
import useJobsites from "@/store/useJobsites";
import { Categories } from "@/types";
import AddCategory from "@/components/dashboard/categories/add-category-item";
import useCategories from "@/store/useCategories";
import { Button } from "@/components/Button";

type Props = {
  slug: string;
};

const index = ({ slug }: Props) => {
  const { getById, jobSite } = useJobsites();
  const { get, getItems, categoryItems, setCategoryItems } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    getById(slug);
    get();

    return () => {
      setCategoryItems([]);
    };
  }, []);

  const handleCategoryClick = (category: Categories) => {
    setSelectedCategory(category);
    getItems(category);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2.5 min-h-[500px]">
      <div className="flex flex-col justify-between md:w-1/5 rounded-lg overflow-hidden  bg-white shadow-md text-black">
        <ContainerHeader text={jobSite?.name} />
        <div className="flex flex-col justify-between px-2.5 py-2.5 h-full">
          <div>
            {jobSite?.categories &&
              jobSite.categories.map((category: Categories) => (
                <Category
                  key={category}
                  name={category}
                  onClick={() => handleCategoryClick(category)}
                  isSelected={selectedCategory === category}
                />
              ))}
          </div>
          <div className="w-full flex justify-center ">
            <Button
              variant="link"
              text="Go Back"
              onClick={() => router.back()}
              className="w-full md:w-fit"
            />
          </div>
        </div>
      </div>
      <Table
        placeholder="Search a driver..."
        data={categoryItems}
        columns={columns}
        isItem
        customFilter={(item, filter) => {
          return item.item.toLowerCase().includes(filter);
        }}
      >
        {selectedCategory && <AddCategory categoryName={selectedCategory} />}
      </Table>
    </div>
  );
};

export default index;

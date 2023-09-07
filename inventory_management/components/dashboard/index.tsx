import React from "react";
import Table from "../layout/Table";
import { Item } from "@/types";

async function getData(): Promise<Item[]> {
  const res = await fetch("http://localhost:3001/jobsites");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function index() {
  const data = await getData();
  return <Table data={data} />;
}

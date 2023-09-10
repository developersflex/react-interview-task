"use client";

import React, { useEffect } from "react";
import Table from "../../layout/Table";
import useJobsites from "@/store/useJobsites";
import { columns } from "./columns";
import AddJob from "@/components/dashboard/jobs/add-job";

export default function index() {
  const { get, jobSites } = useJobsites();

  useEffect(() => {
    get();
  }, []);

  return (
    <Table placeholder="Search a driver..." data={jobSites} columns={columns}>
      <AddJob />
    </Table>
  );
}

import React from "react";
import Table from "../../layout/Table";
import useJobsites from "@/store/useJobsites";
import { columns } from "./columns";
import AddJob from "@/components/dashboard/jobs/add-job";

export default function index() {
  const { jobSites } = useJobsites();

  return (
    <Table placeholder="Search a driver..." data={jobSites} columns={columns}>
      <AddJob />
    </Table>
  );
}

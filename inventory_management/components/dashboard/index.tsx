"use client";

import React, { Suspense, useEffect } from "react";
import Table from "../layout/Table";
import useJobsites from "@/store/useJobsites";

export default function index() {
  const { get, jobSites } = useJobsites();

  useEffect(() => {
    get();
  }, []);

  return <Table data={jobSites} />;
}

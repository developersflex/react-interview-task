"use client";

import Dashboard from "@/components/dashboard/jobs";
import Header from "@/components/layout/Header";
import useJobsites from "@/store/useJobsites";
import { useEffect } from "react";

export default function Home() {
  const { get } = useJobsites();
  useEffect(() => {
    get();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-[10px] ">
      <Header />
      <Dashboard />
    </main>
  );
}

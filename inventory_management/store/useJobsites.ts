import { Jobsite } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  jobSites: Jobsite[];
  jobSite: Jobsite | null;
  get: () => void;
  getById: (id: string) => void;
  add: (newJobSite: Jobsite) => void;
};

const useJobsites = create<customersStoreState>((set, get) => ({
  jobSites: [],
  jobSite: null,

  get: async () => {
    try {
      const response = await fetch("http://localhost:3001/jobsites");
      const jobSites = await response.json();
      set({ jobSites });
    } catch (error) {
      set({ jobSites: [] });
    }
  },

  getById: async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/jobsites/${id}`);
      const jobSite = await response.json();
      set({ jobSite });
    } catch (error) {
      set({ jobSite: null });
    }
  },

  add: (newJobSite: Jobsite) => {
    set((state) => ({
      jobSites: [...state.jobSites, newJobSite],
    }));
    fetch("http://localhost:3001/jobsites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJobSite),
    });
  },
}));

export default useJobsites;

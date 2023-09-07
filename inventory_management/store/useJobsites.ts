import { Item } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  jobSites: Item[];
  get: () => void;
  add: (newJobSite: Item) => void; // Add the add function
};

const useJobsites = create<customersStoreState>((set, get) => ({
  jobSites: [],

  get: async () => {
    try {
      const response = await fetch("http://localhost:3001/jobsites");
      const jobSites = await response.json();
      set({ jobSites });
    } catch (error) {
      set({ jobSites: [] });
    }
  },

  add: (newJobSite: Item) => {
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

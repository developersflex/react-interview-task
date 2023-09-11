import { Jobsite } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  jobSites: Jobsite[];
  jobSite: Jobsite | null;
  get: () => void;
  getById: (id: string) => void;
  add: (newJobSite: Jobsite) => void;
  statuses: {
    name: string;
    value: number;
  }[];
};

const useJobsites = create<customersStoreState>((set, get) => ({
  jobSites: [],
  jobSite: null,
  statuses: [{ name: "", value: 0 }],

  get: async () => {
    try {
      const response = await fetch("http://localhost:3001/jobsites");
      const jobSites = await response.json();
      set({ jobSites });

      const onRoad: number = jobSites.filter(
        (site: Jobsite) => site.status === "On Road"
      ).length;
      const completed: number = jobSites.filter(
        (site: Jobsite) => site.status === "Completed"
      ).length;
      const onHold: number = jobSites.filter(
        (site: Jobsite) => site.status === "On Hold"
      ).length;

      const updatedStatuses = [
        { name: "On Road", value: onRoad },
        { name: "Completed", value: completed },
        { name: "On Hold", value: onHold },
      ];

      set({ statuses: updatedStatuses });
    } catch (error) {
      set({
        jobSites: [],
        statuses: [{ name: "", value: 0 }],
      });
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

  add: async (newJobSite: Jobsite) => {
    try {
      // Send a POST request to create the new job site
      const response = await fetch("http://localhost:3001/jobsites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJobSite),
      });

      if (!response.ok) {
        // Handle the case where the API request fails
        throw new Error("Failed to create the new job site.");
      }
      set((state) => ({
        jobSites: [...state.jobSites, newJobSite],
      }));
      get().get();
    } catch (error) {
      // Revert the local state in case of an error
      console.error(error);
    }
  },
}));

export default useJobsites;

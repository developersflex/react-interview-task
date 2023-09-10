import { Jobsite } from "@/types";
import { create } from "zustand";

type customersStoreState = {
  jobSites: Jobsite[];
  jobSite: Jobsite | null;
  get: () => void;
  getById: (id: string) => void;
  add: (newJobSite: Jobsite) => void;
  statuses: {
    onRoad: number;
    onHold: number;
    completed: number;
  };
};

const useJobsites = create<customersStoreState>((set, get) => ({
  jobSites: [],
  jobSite: null,
  statuses: {
    onRoad: 0,
    onHold: 0,
    completed: 0,
  },

  get: async () => {
    try {
      const response = await fetch("http://localhost:3001/jobsites");
      const jobSites = await response.json();
      set({ jobSites });

      const onRoad = jobSites.filter(
        (site: Jobsite) => site.status === "On Road"
      ).length;
      const completed = jobSites.filter(
        (site: Jobsite) => site.status === "Completed"
      ).length;
      const onHold = jobSites.filter(
        (site: Jobsite) => site.status === "On Hold"
      ).length;

      set({ statuses: { onRoad, completed, onHold } });
    } catch (error) {
      set({
        jobSites: [],
        statuses: { onRoad: 0, completed: 0, onHold: 0 },
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
    } catch (error) {
      // Revert the local state in case of an error
      console.error(error);
    }
  },
}));

export default useJobsites;

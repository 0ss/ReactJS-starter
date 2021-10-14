import create from "zustand";
import { ALL_TIME, LAST_6_MONTHS, LAST_MONTH, LAST_WEEK } from "../constants";

type ProjectTimeRange =
  | typeof ALL_TIME
  | typeof LAST_WEEK
  | typeof LAST_MONTH
  | typeof LAST_6_MONTHS;


export interface ProjectStore {
  projectTimeRange: ProjectTimeRange;
  changeProjectTimeRange: (p: ProjectTimeRange) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projectTimeRange: ALL_TIME,
  changeProjectTimeRange: (projectTimeRange: ProjectTimeRange) => {
    set({ projectTimeRange });
  },
}));

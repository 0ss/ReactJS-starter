import create from "zustand";
import {
  ALL_FEEDBACK,
  ALL_TIME,
  ISSUE,
  LAST_6_MONTHS,
  LAST_MONTH,
  LAST_WEEK,
  OTHER,
  IDEA,
} from "../constants";

export type ProjectTimeRange =
  | typeof ALL_TIME
  | typeof LAST_WEEK
  | typeof LAST_MONTH
  | typeof LAST_6_MONTHS;

export type ProjectFeedbackType =
  | typeof ALL_FEEDBACK
  | typeof ISSUE
  | typeof IDEA
  | typeof OTHER;

export interface ProjectStore {
  projectTimeRange: ProjectTimeRange;
  projectFeedbackType: ProjectFeedbackType;
  setProjectTimeRange: (p: ProjectTimeRange) => void;
  setProjectFeedbackType: (p: ProjectFeedbackType) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projectTimeRange: ALL_TIME,
  projectFeedbackType: ALL_FEEDBACK,
  setProjectTimeRange: (projectTimeRange: ProjectTimeRange) => {
    set({ projectTimeRange });
  },
  setProjectFeedbackType: (projectFeedbackType: ProjectFeedbackType) => {
    set({ projectFeedbackType });
  },
}));

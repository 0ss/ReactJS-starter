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

type ProjectTimeRange =
  | typeof ALL_TIME
  | typeof LAST_WEEK
  | typeof LAST_MONTH
  | typeof LAST_6_MONTHS;

type ProjectFeedbackType =
  | typeof ALL_FEEDBACK
  | typeof ISSUE
  | typeof IDEA
  | typeof OTHER;

export interface ProjectStore {
  projectTimeRange: ProjectTimeRange;
  projectFeedbackType: ProjectFeedbackType;
  changeProjectTimeRange: (p: ProjectTimeRange) => void;
  changeProjectFeedbackType: (p: ProjectFeedbackType) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projectTimeRange: ALL_TIME,
  projectFeedbackType: ALL_FEEDBACK,
  changeProjectTimeRange: (projectTimeRange: ProjectTimeRange) => {
    set({ projectTimeRange });
  },
  changeProjectFeedbackType: (projectFeedbackType: ProjectFeedbackType) => {
    set({ projectFeedbackType });
  },
}));


import { Badge, Box, Center } from "@chakra-ui/layout";
import React from "react";
import { COLOR_ISSUE, IDEA, ISSUE, OTHER } from "../../constants";

interface FeedbackTagsProps {
  type: typeof ISSUE | typeof IDEA | typeof OTHER;
}

export const FeedbackTags: React.FC<FeedbackTagsProps> = ({ type }) => {
  const colors = {
    issue: "red",
    idea: "yellow",
    other: "gray",
  };
  return <Badge colorScheme={colors[type]}>{type.toUpperCase()}</Badge>;
};

import { Badge, Box, Center } from "@chakra-ui/layout";
import React from "react";
import { COLOR_ISSUE } from "../constants";

interface FeedbackTagsProps {
  type: "issue" | "idea" | "other";
}

export const FeedbackTags: React.FC<FeedbackTagsProps> = ({ type }) => {
  const colors = {
    issue: "red",
    idea: "yellow",
    other: "gray",
  };
  console.log(colors[type!]);

  return <Badge colorScheme={colors[type!]}>{type.toUpperCase()}</Badge>;
};

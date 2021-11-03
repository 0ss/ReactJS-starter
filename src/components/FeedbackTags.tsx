import { Badge } from "@chakra-ui/layout";
import React from "react";
import { IDEA, ISSUE, OTHER } from "../constants";

interface FeedbackTagsProps {
  type: typeof ISSUE | typeof IDEA | typeof OTHER;
  size?: string;
  count?: number | string;
}

export const FeedbackTags: React.FC<FeedbackTagsProps> = ({
  type,
  size,
  count,
}) => {
  const colors = {
    issue: "red",
    idea: "yellow",
    other: "gray",
  };
  return (
    <Badge fontSize={size} colorScheme={colors[type]}>
      {type.toUpperCase()}
      {count ? `: ${ count }` : null}
    </Badge>
  );
};

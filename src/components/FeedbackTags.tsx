import { Badge } from "@chakra-ui/layout";
import React from "react";
import { IDEA, ISSUE, OTHER } from "../constants";

interface FeedbackTagsProps {
  type: typeof ISSUE | typeof IDEA | typeof OTHER;
  size?: string;
  count?: number | string;
  onClick: () => void
}

export const FeedbackTags: React.FC<FeedbackTagsProps> = ({
  type,
  size,
  count,
  onClick
}) => {
  const colors = {
    issue: "red",
    idea: "yellow",
    other: "gray",
  };
  return (
    <Badge fontSize={size} colorScheme={colors[type]} onClick={onClick}>
      {type.toUpperCase()}
      {count ? `: ${ count }` : null}
    </Badge>
  );
};

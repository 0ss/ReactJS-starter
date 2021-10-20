import { Stack } from "@chakra-ui/layout";
import React from "react";

interface FeedbackCardLineProps {
  mt?: string;
}

export const FeedbackCardLine: React.FC<FeedbackCardLineProps> = ({
  children,
  mt,
}) => {
  return (
    <Stack
      spacing={["1", "2", "16"]}
      direction={["column", "column", "row"]}
      mt={mt || "5"}
    >
      {children}
    </Stack>
  );
};

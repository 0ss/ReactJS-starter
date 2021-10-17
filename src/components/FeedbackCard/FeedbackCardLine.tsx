import { Button } from "@chakra-ui/button";
import { Stack, Spacer } from "@chakra-ui/layout";
import React, { Props } from "react";
import { COLOR_MAIN_MEDIUM_DARK } from "../../constants";

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

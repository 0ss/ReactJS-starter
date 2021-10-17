import React from "react";
import { Text } from "@chakra-ui/react";
interface FeedbackCardTextProps {}

export const FeedbackCardText: React.FC<FeedbackCardTextProps> = ({
  children,
}) => {
  return (
    <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
      {children}
    </Text>
  );
};

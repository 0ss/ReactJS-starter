import { HStack, Box } from "@chakra-ui/layout";
import React from "react";
import { COLOR_MAIN_DARK, COLOR_MAIN_LIGHT } from "../../constants";

interface FeedbackMetadataProps {
  metadata: Record<any, any>;
}

export const FeedbackMetadata: React.FC<FeedbackMetadataProps> = ({
  metadata,
}) => {
  const data = [];
  for (const key in metadata) {
    data.push(
      <HStack spacing={0}>
        <Box
          fontSize={"xs"}
          borderTopRadius={"md"}
          borderLeftRadius={"md"}
          borderBottomRadius={"md"}
          borderRightRadius={"none"}
          py={"1"}
          px={"2"}
          bgColor={COLOR_MAIN_DARK}
          color={"white"}
        >
          {key}
        </Box>
        <Box
          borderTopRadius={"md"}
          borderRightRadius={"md"}
          borderBottomRadius={"md"}
          borderLeftRadius={"none"}
          fontSize={"xs"}
          color={"pink.800"}
          py={"1"}
          px={"2"}
          bgColor={COLOR_MAIN_LIGHT}
        >
          {metadata[key]}
        </Box>
      </HStack>
    );
  }
  return <HStack fontSize={"sm"} spacing={'3'}>{data}</HStack>;
};

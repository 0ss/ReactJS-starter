import { HStack, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { COLOR_MAIN_DARK, COLOR_MAIN_LIGHT } from "../../constants";

interface FeedbackMetadataProps {
  metadata: any;
}

export const FeedbackMetadata: React.FC<FeedbackMetadataProps> = ({
  metadata,
}) => {
  return (
    <Flex fontSize={"sm"} spacing={"3"} flexWrap={"wrap"}>
      {Object.entries(metadata).map((key, value) => {
        return (
          <HStack key={Math.random()} my={"1.5"} mr={"2"} spacing={0}>
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
              {value}
            </Box>
          </HStack>
        );
      })}
    </Flex>
  );
};

import { HStack, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { COLOR_MAIN_DARK, COLOR_MAIN_LIGHT } from "../../constants";

interface FeedbackMetadataProps {
  metadata: any;
}

export const FeedbackMetadata: React.FC<FeedbackMetadataProps> = ({
  metadata,
}) => {
  console.log(Object.keys(metadata))
  return (
    <Flex fontSize={"sm"} spacing={"3"} flexWrap={"wrap"}>
      {Object.keys(metadata).map(key => {
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
              bgColor={COLOR_MAIN_LIGHT}
              color={"pink.800"}
            >
              {key}
            </Box>
            <Box
              borderTopRadius={"md"}
              borderRightRadius={"md"}
              borderBottomRadius={"md"}
              borderLeftRadius={"none"}
              fontSize={"xs"}
              color={"white"}
              py={"1"}
              px={"2"}
              bgColor={COLOR_MAIN_DARK}
            >
              {metadata[key]}
            </Box>
          </HStack>
        );
      })}
    </Flex>
  );
};

import { Box, Flex, Heading, VStack } from "@chakra-ui/layout";
import React from "react";

interface AnalyticsCardProps {
  heading: number | string;
  desc: string;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  heading,
  desc,
}) => {
  return (
    <VStack w={'72'} p={10} borderRadius={"lg"} bgColor={"white"}>
      <Heading size={"lg"}>{heading}</Heading>
      <Box>{desc}</Box>
    </VStack>
  );
};

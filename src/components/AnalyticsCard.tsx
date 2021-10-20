import { Box, Flex, Heading, VStack } from "@chakra-ui/layout";
import React from "react";

interface AnalyticsCardProps {
  heading: number | string;
  desc: string;
  m?: string | number;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  heading,
  desc,
  m,
}) => {
  return (
    <VStack m={m} w={"64"} p={10} borderRadius={"lg"} bgColor={"white"}>
      <Heading size={"lg"}>{heading}</Heading>
      <Box>{desc}</Box>
    </VStack>
  );
};

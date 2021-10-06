import { Heading, VStack, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";

interface ChartStatLabelProps {
  perc: string;
  label: string;
  color: string;
}

export const ChartStatLabel: React.FC<ChartStatLabelProps> = ({
  color,
  label,
  perc,
}) => {
  return (
    <VStack p={0} borderRadius={"lg"} bgColor={"white"}>
      <Heading size={"md"}>{perc}</Heading>
      <Flex alignItems={'center'}>
        <Box
          style={{
            backgroundColor: color,
          }}
          mx={'1'}
          height={'2'}
          width={'2'}
          borderRadius={'lg'}
        ></Box>
        <Text fontSize={"xs"}>{label}</Text>
      </Flex>
    </VStack>
  );
};

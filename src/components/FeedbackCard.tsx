import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";

interface FeedbackCardProps {}

export const FeedbackCard = ({}) => {
  return (
    <Flex flexDir="column" p={"3"}>
      <HStack w={"full"}>
        <span>Text</span>
        <Spacer />
        <span>2 months ago</span>
      </HStack>
      <HStack w={"full"}>
        <span>ADAsdokasdpoakpdokapodkaopdkpaodaopasd</span>
        <Spacer />
        <ChevronDownIcon />
      </HStack>
    </Flex>
  );
};

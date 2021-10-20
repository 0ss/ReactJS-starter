import { UseDisclosureProps, UseDisclosureReturn } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import React from "react";

interface FeedbackCardContainerProps extends Partial<UseDisclosureReturn> {}

export const FeedbackCardContainer: React.FC<FeedbackCardContainerProps> = ({
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <Flex
      cursor={!isOpen ? "pointer" : "default"}
      onClick={!isOpen ? onToggle : () => null}
      flexDir="column"
      transition={"all"}
      borderColor={"transparent"}
      shadow={isOpen ? "md" : "none"}
      w={"full"}
      _hover={{
        backgroundColor: !isOpen ? "gray.200" : "",
      }}
    >
      {children}
    </Flex>
  );
};

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Feedbackness } from "../svgs/Feedbackness";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";

interface ProjectSidebarProps {}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        pos="sticky"
        py={"12"}
        w={"230px"}
        flexDir="column"
        as={"aside"}
      >
        <Flex pos="sticky" top={12} flexDir="column" as="nav">
          <Box mb={20} as={"section"}>
            <HStack mb={3} ml={1} as={"figure"}>
              <Feedbackness width={120} />
              <Spacer />
              <IconButton
                size={"sm"}
                color={"gray.600"}
                mx={2}
                icon={<CloseIcon />}
                aria-label={"Close Menu"}
                display={{ md: "none" }}
                onClick={onClose}
              />
            </HStack>
            <ProjectHeaderSelect />
          </Box>
        </Flex>
        {children}
      </Flex>
      {!isOpen && (
        <IconButton
          size={"lg"}
          mx={2}
          icon={<HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={onOpen}
        />
      )}
    </>
  );
};

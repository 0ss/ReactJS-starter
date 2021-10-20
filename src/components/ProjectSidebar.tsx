import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Feedbackness } from "../svgs/Feedbackness";
import { FeedbacknessChar } from "../svgs/FeedbacknessChar";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";

interface ProjectSidebarProps {}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        pos={"sticky"}
        top={"2"}
        py={"4"}
        flexDir="column"
        as={"aside"}
        w={"230px"}
      >
        <Flex top={"3.5"} position="sticky" flexDir="column" as="nav">
          <Box mb={20} as={"section"}>
            <HStack mb={3} ml={1} as={"figure"}>
              <Box display={{ base: "none", md: "flex" }}>
                <Feedbackness width={120} />
              </Box>
              <Box display={{ base: "flex", md: "none" }}>
                <FeedbacknessChar width={18} />
              </Box>
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
          {children}
        </Flex>
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

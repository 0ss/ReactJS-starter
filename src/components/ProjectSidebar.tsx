import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Feedbackness } from "../svgs/Feedbackness";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";

interface ProjectSidebarProps {}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({children}) => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      pos="sticky"
      py={"12"}
      w={"230px"}
      flexDir="column"
      as={"aside"}
    >
      <Flex pos="sticky" top={12} flexDir="column" as="nav">
        <Box mb={20} as={"section"}>
          <Box mb={3} ml={1} as={"figure"}>
            <Feedbackness width={120} />
          </Box>
          <ProjectHeaderSelect />
        </Box>
      </Flex>
      {children}
    </Flex>
  );
};

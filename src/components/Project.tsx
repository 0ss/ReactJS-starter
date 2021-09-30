import { Box } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { ProjectHeader } from "./ProjectHeader";

interface ProjectProps {}

export const Project: React.FC<ProjectProps> = ({}) => {
  return (
    <Box>
      <Box mx={{ md: "20" }}>
        <ProjectHeader />
      </Box>
      <Box mx={20}>
        <h1>Hello world</h1>
      </Box>
    </Box>
  );
};

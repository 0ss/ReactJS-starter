import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { useProjectLocation } from "../hooks/useProjectLocation";
import { AnalyticsCard } from "./AnalyticsCard";
import { NavLink } from "./NavLink";
import { ProjectSidebar } from "./ProjectSidebar";

interface ProjectProps {}
export const Project: React.FC<ProjectProps> = ({}) => {
  const [authToken, setAuthToken] = useAuthToken();
  const location = useProjectLocation();
  return (
    <Flex mx={{ base: "3", md: "20" }} maxWidth={"max"}>
      <ProjectSidebar>
        <VStack spacing={5} align={"stretch"}>
          <NavLink
            name={"Dashboard"}
            url={`${location}/`}
            icon={<IoAnalyticsOutline size={18} />}
          />
          <NavLink
            name={"Team"}
            url={`${location}/team`}
            icon={<AiOutlineTeam size={18} />}
          />
          <NavLink
            name={"Settings"}
            url={`${location}/settings`}
            icon={<IoSettingsOutline size={18} />}
          />
        </VStack>
        <VStack mt={"48"} spacing={3} align={"stretch"}>
          <NavLink
            name={"Sign out"}
            icon={<VscSignOut size={18} />}
            url={ROUTES.HOME}
            onClick={() => setAuthToken("")}
          />
        </VStack>
      </ProjectSidebar>
      <Box p={'16'}  w={"max"}>
        <Heading mb={5}>Analytics Overview</Heading>
        <Stack spacing={8}
         direction={['column','column','row']}>
          <AnalyticsCard heading={"3422"} desc={"Total Feedbacks"} />
          <AnalyticsCard heading={"3422"} desc={"Total Feedbacks"} />
          <AnalyticsCard heading={"3422"} desc={"Total Feedbacks"} />
        </Stack>
      </Box>
    </Flex>
  );
};

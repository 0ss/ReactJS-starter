import { Box, Heading, VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { lazily } from "react-lazily";
import { useParams } from "react-router";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { useProjectLocation } from "../hooks/useProjectLocation";

const { ProjectSidebar } = lazily(() => import("./ProjectSidebar"));
const { NavLink } = lazily(() => import("./NavLink"));

interface TeamProps {}
export const Team: React.FC<TeamProps> = ({}) => {
  const location = useProjectLocation();
  const { id } = useParams<{ id: string }>();

  return (
    <Flex mx={{ base: "0", md: "14" }} maxWidth={"full"}>
      <ProjectSidebar projectLocation={location} />
      <Box p={"14"} maxWidth={"full"} alignItems={"center"}>
        <Heading mb={5}>Analytics Overview</Heading>
      </Box>
    </Flex>
  );
};

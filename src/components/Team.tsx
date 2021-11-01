import {
  Badge,
  Box,
  Divider,
  Heading,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { lazily } from "react-lazily";
import { useParams } from "react-router";
import { useProjectLocation } from "../hooks/useProjectLocation";
import { random } from "../utils/random";
import { InputField } from "./InputField";
import { TeamMember } from "./TeamMember";

const { ProjectSidebar } = lazily(() => import("./ProjectSidebar"));
const { NavLink } = lazily(() => import("./NavLink"));

interface TeamProps {}
export const Team: React.FC<TeamProps> = ({}) => {
  const location = useProjectLocation();
  const { id } = useParams<{ id: string }>();

  return (
    <Flex mx={{ base: "0", md: "14" }} maxWidth={"full"}>
      <ProjectSidebar projectLocation={location} />
      <Box p={"14"} width={"2xl"} alignItems={"center"}>
        <Heading mb={5}>Team</Heading>
        <Box borderRadius={"lg"} bg={"white"} alignItems={"start"} p={"5"}>
          <TeamMember
            email="salah@salah.com"
            role={random(["member", "admin"])}
          />
          <Divider />
          <TeamMember
            email="salah@salah.com"
            role={random(["member", "admin"])}
          />
          <Divider />
          <TeamMember
            email="salah@salah.com"
            role={random(["member", "admin"])}
          />
          <Divider />
          <Box mt={"5"}>
            <input />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

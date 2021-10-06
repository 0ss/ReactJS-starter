import {
  Box,
  Divider,
  Heading,
  Spacer,
  Stack,
  VStack,
  Text,
  HStack
} from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { COLOR_IDEA, COLOR_ISSUE, COLOR_OTHER, ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { useProjectLocation } from "../hooks/useProjectLocation";
import { AnalyticsCard } from "./AnalyticsCard";
import { NavLink } from "./NavLink";
import { ProjectSidebar } from "./ProjectSidebar";
import { VictoryPie } from "victory";
import { ArrowBackIcon, ArrowDownIcon } from "@chakra-ui/icons";
interface ProjectProps {}
export const Project: React.FC<ProjectProps> = ({}) => {
  const [authToken, setAuthToken] = useAuthToken();
  const location = useProjectLocation();
  return (
    <Flex mx={{ base: "0", md: "14" }} maxWidth={"full"}>
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
      <Box p={"14"} maxWidth={"full"} alignItems={"center"}>
        <Heading mb={5}>Analytics Overview</Heading>
        <Flex
          spacing={"auto"}
          flexDir={["column", "column", "row", "row"]}
          justifyContent={"space-between"}
          align={["center"]}
        >
          <AnalyticsCard heading={"3422"} desc={"Total Feedbacks"} />
          <AnalyticsCard m={"3"} heading={"3422"} desc={"Total Feedbacks"} />
          <AnalyticsCard heading={"3422"} desc={"Total Feedbacks"} />
        </Flex>
        <Box fontSize={"sm"}></Box>
        <Stack
          mt={"3"}
          spacing={8}
          direction={["column", "column", "column", "row"]}
        >
          <Box p={"2"} bg={"white"} borderRadius={"lg"} width={"full"}>
            <Flex justifyContent={'space-evenly'}>
            <VStack p={0} borderRadius={"lg"} bgColor={"white"}>
              <Heading size={"md"}>33%</Heading>
              <Text fontSize={'xs'}>Issue</Text>
            </VStack>
            <VStack p={0} borderRadius={"lg"} bgColor={"white"}>
              <Heading size={"md"}>33%</Heading>
              <Text fontSize={'xs'}>Idea</Text>
            </VStack><VStack p={0} borderRadius={"lg"} bgColor={"white"}>
              <Heading size={"md"}>33%</Heading>
              <Text fontSize={'xs'}>Other</Text>
            </VStack>
            </Flex >
            <Divider />
            <VictoryPie
              colorScale={[
                COLOR_ISSUE,
                COLOR_IDEA,
                COLOR_OTHER,
              ]}
              data={[
                { x: "Issue", y: 35 },
                { x: "Idea", y: 40 },
                { x: "Other", y: 55 },
              ]}
            />
          </Box>
          <Spacer />
          <Box width={"full"} bg={"white"} p={"2"} borderRadius={"lg"}>
            <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
              data={[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 },
              ]}
            />
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

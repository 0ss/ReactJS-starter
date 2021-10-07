import {
  Box,
  Divider,
  Heading,
  Spacer,
  Stack,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/layout";
import { Flex, Select } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import {
  COLOR_IDEA,
  COLOR_ISSUE,
  COLOR_MAIN_DARK,
  COLOR_OTHER,
  ROUTES,
} from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { useProjectLocation } from "../hooks/useProjectLocation";
import { AnalyticsCard } from "./AnalyticsCard";
import { NavLink } from "./NavLink";
import { ProjectSidebar } from "./ProjectSidebar";
import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryArea,
  VictoryTooltip,
} from "victory";
import { ArrowBackIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { ChartStatLabel } from "./ChartStatLabel";
import ReactFrappeChart from "react-frappe-charts";
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
          w={'auto'}
          direction={["column", "column", "column", "row"]}
        >
          <Box  p={"2"} bg={"white"} borderRadius={"lg"}>
            <Flex justifyContent={"space-evenly"}>
              <ChartStatLabel
                perc={"33%"}
                label={"issue"}
                color={COLOR_ISSUE}
              />
              <ChartStatLabel perc={"33%"} label={"idea"} color={COLOR_IDEA} />{" "}
              <ChartStatLabel
                perc={"33%"}
                label={"other"}
                color={COLOR_OTHER}
              />
            </Flex>
            <Divider />
            <VictoryPie
              colorScale={[COLOR_ISSUE, COLOR_IDEA, COLOR_OTHER]}
              data={[
                { x: "Issue", y: 35 },
                { x: "Idea", y: 40 },
                { x: "Other", y: 55 },
              ]}
            />
          </Box>
          <Box bg={"white"} p={"2"} borderRadius={"lg"}>
            <Select>
              <option>
                d
              </option>
            </Select>
            <VictoryChart domainPadding={20}>
              <VictoryBar
                style={{
                  data: {
                    fill: ({ datum }) =>
                      datum.x === "issue"
                        ? COLOR_ISSUE
                        : datum.x === "idea"
                        ? COLOR_IDEA
                        : COLOR_OTHER,
                  },
                }}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                labels={({ datum }) => `${datum.y}`}
                data={[
                  { x: "issue", y: 27, y0: 0 },
                  { x: "idea", y: 19, y0: 0 },
                  { x: "other", y: 37, y0: 0 },
                ]}
              />
            </VictoryChart>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

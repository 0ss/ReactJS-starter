import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/react";
import * as faker from "faker";
import React from "react";
import { lazily } from "react-lazily";
import { useParams } from "react-router-dom";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import {
  COLOR_IDEA,
  COLOR_ISSUE,
  COLOR_OTHER,
  IDEA,
  ISSUE,
  OTHER,
} from "../constants";
import { useProjectLocation } from "../hooks/useProjectLocation";
import { useProjectStore } from "../hooks/useStore";
import { useUserQuery } from "../queries/graphql";
import { random } from "../utils/random";
import { FeedbackCardProps } from "./FeedbackCard";

const { ProjectSidebar } = lazily(() => import("./ProjectSidebar"));
const { FeedbackTags } = lazily(() => import("./FeedbackCard/FeedbackTags"));
const { FeedbackCard } = lazily(() => import("./FeedbackCard"));
const { ChartStatLabel } = lazily(() => import("./ChartStatLabel"));
const { BarChartMenu } = lazily(() => import("./BarChartMenu"));
const { AnalyticsCard } = lazily(() => import("./AnalyticsCard"));

interface ProjectProps {}
export const Project: React.FC<ProjectProps> = ({}) => {
  const location = useProjectLocation();
  const { id } = useParams<{ id: string }>();
  const feedbackType = useProjectStore(state => state.projectFeedbackType)
  const { data, loading, error } = useUserQuery();
  console.log(
    "project",
    " data: ",
    data,
    "loading: ",
    loading,
    "error: ",
    error
  );

  const feedbacks: Array<FeedbackCardProps> = Array(40)
    .fill(null)
    .map(
      (e) =>
        ({
          type: random([ISSUE, OTHER, IDEA]),
          browser: random(["Edge", "FireFox", "Chrome", "Brave"]),
          country: faker.address.countryCode().toLowerCase(),
          content: faker.lorem.lines(2),
          date: faker.date.past().toString(),
          device: random(["smartphone", "desktop"]),
          image:
            "https://feedbackness.s3.us-east-2.amazonaws.com/Feedbackness-logo.jpg",
          os: random(["Mac OS", "WIndows 10", "Ubunto", "Cent OS"]),
          page: "/home",
          archived: random([true, false]),
          metadata: {
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            music: faker.music.genre(),
          },
        } as FeedbackCardProps)
    );
  return (
    <Flex mx={{ base: "0", md: "14" }} maxWidth={"full"}>
      <ProjectSidebar projectLocation={location} />
      <Box p={"14"} maxWidth={"full"} alignItems={"center"}>
        <Heading mb={5}>Analytics Overview</Heading>
        <Flex
          spacing={"auto"}
          flexDir={["column", "column", "row", "row"]}
          justifyContent={"space-between"}
          align={["center"]}
        >
          <AnalyticsCard heading={"3422"} desc={"Total Feedbacks"} />
          <AnalyticsCard m={"3"} heading={"3422"} desc={"Total Engagment"} />
          <AnalyticsCard m={"0"} heading={"3422"} desc={"Total Engagment"} />
        </Flex>
        <Box fontSize={"sm"}></Box>
        <Stack
          mt={"3"}
          justifyContent={"space-between"}
          direction={["column", "column", "column", "row"]}
        >
          <Box p={"2"} bg={"white"} borderRadius={"lg"}>
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
            <BarChartMenu />
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
        <HStack spacing={"8"} mt={"16"} mb={"4"}>
          <Text fontSize={"xs"}>FILTER BY TYPE</Text>
          <HStack>
            <FeedbackTags type={"issue"} size={"sm"} count={"243"} />
            <FeedbackTags type={"idea"} size={"sm"} />
            <FeedbackTags type={"other"} size={"sm"} />
          </HStack>
        </HStack>
        <VStack
          bgColor={"white"}
          // mt={"16"}
          h={"full"}
          spacing={0}
          borderRadius={"lg"}
          alignItems={"start"}
          width={"full"}
        >
          {feedbacks.map((e, i) => (
            <Box key={i * 10} w={"full"}>
              <FeedbackCard
                browser={e?.browser}
                content={e?.content}
                country={e?.country}
                date={e?.date}
                device={e?.device}
                type={e?.type}
                image={e?.image}
                metadata={e?.metadata}
                os={e?.os}
                page={e?.page}
                archived={e?.archived}
              />
              <Divider />
            </Box>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

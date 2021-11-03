import { Divider, Box } from "@chakra-ui/react";
import faker from "faker";
import React from "react";
import { ISSUE, OTHER, IDEA } from "../constants";
import { ProjectFeedbackType, ProjectTimeRange } from "../hooks/useProjectStore";
import { random } from "../utils/random";
import { FeedbackCard, FeedbackCardProps } from "./FeedbackCard";

interface ProjectFeedbackProps {
  projectTimeRange : ProjectTimeRange
  projectFeedbackType: ProjectFeedbackType
}

export const ProjectFeedback = ({}) => {
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
    <>
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
    </>
  );
};

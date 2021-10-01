import { Box, Heading, VStack } from "@chakra-ui/layout";
import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { Feedbackness } from "../svgs/Feedbackness";
import { NavLink } from "./NavLink";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";

interface ProjectProps {}

const Links: Array<{ name: string; url: string }> = [
  {
    name: "Help",
    url: "/help",
  },
  {
    name: "Team",
    url: "/team",
  },
];

export const Project: React.FC<ProjectProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authToken, setAuthToken] = useAuthToken();

  return (
    <Flex mx={20}>
      <Flex
        pos="sticky"
        py={"12"}
        bg={"gray.400"}
        w={"230px"}
        flexDir="column"
        as={"aside"}
      >
        <Flex pos="sticky" top={12} flexDir="column" as="nav">
          <Box mb={20} pos={"sticky"}>
            <Box mb={3}>
              <Feedbackness width={120} />
            </Box>
            <ProjectHeaderSelect />
          </Box>
          <VStack spacing={3} align={"stretch"}>
            {Links.map((arr, i) => (
              <NavLink key={i} name={arr.name} url={arr.url} />
            ))}
            <NavLink
              name={"Sign out"}
              url={ROUTES.HOME}
              onClick={() => setAuthToken("")}
            />
          </VStack>
        </Flex>
      </Flex>
      <Box>
        {Array(40)
          .fill(null)
          .map((e) => (
            <Heading>Hello world</Heading>
          ))}
      </Box>
    </Flex>
  );
};

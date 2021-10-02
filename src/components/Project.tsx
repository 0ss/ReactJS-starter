import { Box, Heading, VStack } from "@chakra-ui/layout";
import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { useLocation, useParams } from "react-router";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { Feedbackness } from "../svgs/Feedbackness";
import { NavLink } from "./NavLink";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";
import { VscSignOut } from "react-icons/vsc";
import { useProjectLocation } from "../hooks/useProjectLocation";
interface ProjectProps {}

export const Project: React.FC<ProjectProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authToken, setAuthToken] = useAuthToken();
  const location = useProjectLocation()
  return (
    <Flex mx={20}>
      <Flex pos="sticky" py={"12"} w={"230px"} flexDir="column" as={"aside"}>
        <Flex
          pos="sticky"
          top={12}
          flexDir="column"
          as="nav"
          display={{ base: "none", md: "flex" }}
        >
          <Box mb={20}>
            <Box mb={3} ml={1}>
              <Feedbackness width={120} />
            </Box>
            <ProjectHeaderSelect />
          </Box>
          <VStack spacing={3} align={"stretch"}>
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
          <VStack mt={20} spacing={3} align={"stretch"}>
            <NavLink
              name={"Sign out"}
              icon={<VscSignOut size={18} />}
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

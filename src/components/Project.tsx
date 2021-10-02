import { Box, Heading, VStack } from "@chakra-ui/layout";
import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useLocation, useParams } from "react-router";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { Feedbackness } from "../svgs/Feedbackness";
import { NavLink } from "./NavLink";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineTeam }  from 'react-icons/ai'
import { BsListNested} from 'react-icons/bs'
interface ProjectProps {}

// const Links: Array<{ name: string; url: string }> = [
//   {
//     name: "📈 Analytics",
//     url: "./analytics",
//   },
//   {
//     name: "🙋 Help",
//     url: "/help",
//   },
//   {
//     name: "👨‍👨‍👧‍👧 Team",
//     url: "/team",
//   },
// ];

export const Project: React.FC<ProjectProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authToken, setAuthToken] = useAuthToken();
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  return (
    <Flex mx={20}>
      <Flex
        pos="sticky"
        py={"12"}
        w={"230px"}
        flexDir="column"
        as={"aside"}
      >
        <Flex pos="sticky" top={12} flexDir="column" as="nav" display={{base:'none',md:'flex'}}>
          <Box mb={20} pos={"sticky"}>
            <Box mb={3}>
              <Feedbackness width={120} />
            </Box>
            <ProjectHeaderSelect />
          </Box>
          <VStack spacing={3} align={"stretch"}>
            <NavLink
              name={"Dashboard"}
              url={`${location.pathname}/analytics`}
              icon={<IoAnalyticsOutline size={25} />}
            />
            <NavLink
              name={"Team"}
              url={`${location.pathname}/team`}
              icon={<AiOutlineTeam size={25} />}
            />
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

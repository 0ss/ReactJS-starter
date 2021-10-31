import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoAnalyticsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { lazily } from "react-lazily";
import { NavLink } from "./NavLink";
import { ROUTES } from "../constants";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";
import { useAuthToken } from "../hooks/useAuthToken";

const { Feedbackness } = lazily(() => import("../svgs/Feedbackness"));
const { FeedbacknessChar } = lazily(() => import("../svgs/FeedbacknessChar"));
interface ProjectSidebarProps {
  projectLocation: string;
}
export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  projectLocation: location,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_, setAuthToken] = useAuthToken();

  return (
    <>
      <Flex
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        pos={"sticky"}
        top={"2"}
        py={"4"}
        flexDir="column"
        as={"aside"}
        w={"230px"}
      >
        <Flex top={"3.5"} position="sticky" flexDir="column" as="nav">
          <Box mb={20} as={"section"}>
            <HStack mb={3} ml={1} as={"figure"}>
              <Box display={{ base: "none", md: "flex" }}>
                <Feedbackness width={120} />
              </Box>
              <Box display={{ base: "flex", md: "none" }}>
                <FeedbacknessChar width={18} />
              </Box>
              <Spacer />
              <IconButton
                size={"sm"}
                color={"gray.600"}
                mx={2}
                icon={<CloseIcon />}
                aria-label={"Close Menu"}
                display={{ md: "none" }}
                onClick={onClose}
              />
            </HStack>
            <ProjectHeaderSelect />
          </Box>
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
        </Flex>
      </Flex>
      {!isOpen && (
        <IconButton
          size={"lg"}
          mx={2}
          icon={<HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={onOpen}
        />
      )}
    </>
  );
};

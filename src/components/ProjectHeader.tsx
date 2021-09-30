import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import { Feedbackness } from "../svgs/Feedbackness";
import FeedbacknessCharLogo from "../svgs/feedbackness-char.png";
import { FeedbacknessChar } from "../svgs/FeedbacknessChar";
import { NavLink } from "./NavLink";
import { ProjectHeaderSelect } from "./ProjectHeaderSelect";

interface ProjectHeaderProps {}

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

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authToken, setAuthToken] = useAuthToken();
  return (
    <>
      <Box pt={5}>
        <Flex h={16} alignItems={"center"} justifyContent={["space-between"]}>
          <HStack spacing={8} alignItems={"center"}>
            <Box display={{ base: "none", md: "flex" }}>
              <Feedbackness width={120} />
            </Box>
            <Box display={{ base: "flex", md: "none" }}>
              <FeedbacknessChar width={25} />
            </Box>
            <ProjectHeaderSelect />
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((arr, i) => (
              <NavLink key={i} name={arr.name} url={arr.url} />
            ))}
            <NavLink
              name={"Sign out"}
              url={ROUTES.HOME}
              onClick={() => setAuthToken("")}
            />
          </HStack>
          <IconButton
            size={"md"}
            mx={2}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Box shadow={"sm"} px={7} pb={5} mt={5} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((arr, i) => (
                <NavLink key={i} name={arr.name} url={arr.url} />
              ))}
              <NavLink
                name={"Sign out"}
                url={ROUTES.HOME}
                onClick={() => setAuthToken("")}
              />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { useAuthToken } from "../hooks/useAuthToken";
import FeedbacknessCharLogo from "../svgs/feedbackness-char.png";
import FeedbacknessLogo from "../svgs/feedbackness-logo.png";
import { CreateProjectModal } from "./CreateProjectModal";
import { NavLink } from "./NavLink";

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
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Box pt={5}>
        <Flex h={16} alignItems={"center"} justifyContent={["space-between"]}>
          <HStack spacing={8} alignItems={"center"}>
            <Box display={{ base: "none", md: "flex" }}>
              <Link to={ROUTES.HOME}>
                <img
                  width={220}
                  src={FeedbacknessLogo}
                  alt="feedbackness logo"
                />
              </Link>
            </Box>
            <Box display={{ base: "flex", md: "none" }}>
              <Link to={ROUTES.HOME}>
                <img
                  width={45}
                  src={FeedbacknessCharLogo}
                  alt="feedbackness logo"
                />
              </Link>
            </Box>
            <Select placeholder="Projects " bgColor="gray.200">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option3">Create Project ✨</option>
            </Select>
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
      <CreateProjectModal isOpen={isModalOpen} />
    </>
  );
};

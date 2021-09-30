import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import FeedbacknessCharLogo from "../svgs/feedbackness-char.png";
import FeedbacknessLogo from "../svgs/feedbackness-logo.png";
import { NavLink } from "./NavLink";

interface ProjectHeaderProps {}

const Links: Array<{ name: string; url: string }> = [
  {
    name: "Feedback",
    url: "/",
  },
  {
    name: "Help",
    url: "/help",
  },
  {
    name: "Team",
    url: "/team",
  },
  {
    name: "Signout",
    url: "/signout",
  },
];

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} pt={5} bg={'white'} shadow={'sm'}>
        <Flex
          h={16}
          mx={{ md: 16 }}
          alignItems={"center"}
          justifyContent={["space-between"]}
        >
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
            </Select>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((arr, i) => (
              <NavLink key={i} name={arr.name} url={arr.url} />
            ))}
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} mt={5} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((arr, i) => (
                <NavLink key={i} name={arr.name} url={arr.url} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

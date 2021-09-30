import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
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
      <Box px={4} mt={5} mx={2}>
        <Flex
          h={16}
          mx={{ md: 16 }}
          alignItems={"center"}
          justifyContent={["space-between"]}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img width={220} src={FeedbacknessLogo} loading="lazy" />
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
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((arr, i) => (
                <NavLink key={i} name={arr.name} url={arr.url} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box p={4}>Main Content Here</Box>
    </>
  );
};

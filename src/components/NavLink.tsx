import React, { ReactNode } from "react";
import { Box, Flex, Link, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  name: string;
  url: string;
  icon?: ReactNode;
  onClick?: () => void;
}
export const NavLink: React.FC<NavLinkProps> = ({
  name,
  url,
  icon,
  fontSize,
  fontFamily,
  onClick,
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={url}
    fontSize={fontSize || "sm"}
    fontWeight={fontFamily || "semibold"}
    onClick={onClick}
  >
    <Flex verticalAlign={"bottom"}>
      {icon}
      <Box ml={2}>{name}</Box>
    </Flex>
  </Link>
);

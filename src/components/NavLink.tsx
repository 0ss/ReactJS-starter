import React from "react";
import { Link } from "@chakra-ui/react";

interface NavLinkProps {
  name: string;
  url: string;
}
export const NavLink: React.FC<NavLinkProps> = ({ name, url }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={url}
  >
    {name}
  </Link>
);

import React from "react";
import { Link } from "@chakra-ui/react";

interface NavLinkProps {
  name: string;
  url: string;
  onClick? : () => void
}
export const NavLink: React.FC<NavLinkProps> = ({ name, url,onClick }) => (
  <Link
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    href={url}
    onClick={onClick}
  >
    {name}
  </Link>
);

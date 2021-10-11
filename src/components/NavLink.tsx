import React, { ReactNode } from "react";
import { Box, Center, Flex, HStack, Link, LinkProps } from "@chakra-ui/react";
import { useHistory } from "react-router";
interface NavLinkProps extends LinkProps {
  name: string;
  url: string;
  icon?: ReactNode;
}
export const NavLink: React.FC<NavLinkProps> = ({
  name,
  url,
  icon,
  fontSize,
  fontFamily,
}) => {
  const history = useHistory();
  const onClick = (e: any) => {
    e?.preventDefault();
    history.push(url);
  };
  return (
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
      <HStack>
        <Center>
          {icon}
          <Box ml={2}>{name}</Box>
        </Center>
      </HStack>
    </Link>
  );
};

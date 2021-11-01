import { Flex, Badge, Text, Box, HStack } from "@chakra-ui/layout";
import React from "react";

interface TeamMemberProps {
  email: string;
  role: "member" | "admin";
}

export const TeamMember: React.FC<TeamMemberProps> = ({ email, role }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} my={"3"}>
      <Text>{email}</Text>
      <HStack spacing={"3"}>
        {role !== "admin" ? (
          <Badge fontSize={"xx-small"} colorScheme={"red"}>
            REMOVE
          </Badge>
        ) : null}
        {role === "admin" ? (
          <Badge colorScheme={"orange"}>{role}</Badge>
        ) : (
          <Badge>{role}</Badge>
        )}
      </HStack>
    </Flex>
  );
};

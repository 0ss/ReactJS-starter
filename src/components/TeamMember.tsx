import { Flex, Badge, Text } from "@chakra-ui/layout";
import React from "react";

interface TeamMemberProps {
  email: string;
  role: "member" | "admin";
}

export const TeamMember: React.FC<TeamMemberProps> = ({ email, role }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} my={"3"}>
      <Text>{email}</Text>
      <Badge colorScheme={role === 'admin' ? 'red' : 'linkedin'}>{role}</Badge>
    </Flex>
  );
};

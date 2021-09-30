import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useAuthToken } from "../hooks/useAuthToken";
import FeedbacknessLogo from "../svgs/feedbackness-logo.png";

interface AuthFormProps extends React.HTMLProps<HTMLFormElement> {
  heading: string;
  bgSvg: ReactNode;
  bgColor: string;
  children?: ReactNode;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  bgColor,
  bgSvg,
  children,
  ...props
}) => {
  useAuthToken();
  return (
    <Center py={10} height={"100vh"} style={{ backgroundColor: bgColor }}>
      <Box
        maxW="400px"
        w="full"
        bg="white"
        boxShadow="2xl"
        rounded="lg"
        p="3"
        textAlign="center"
        zIndex="99"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (onSubmit) onSubmit(e);
          }}
        >
          <Center pb={6}>
            <img width={120} src={FeedbacknessLogo} loading="lazy" />
          </Center>
          <Divider />
          <Heading fontSize="2xl" py={3}>
            {props.heading}
          </Heading>
          {children}
        </form>
      </Box>
      <Box position="fixed" left="50%" display={{ base: "none", md: "flex" }}>
        {bgSvg}
      </Box>
    </Center>
  );
};

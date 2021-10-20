import { Box, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import {
  COLOR_MAIN_DARK,
  COLOR_MAIN_LIGHT,
  COLOR_MAIN_MEDIUM_DARK,
  ROUTES,
} from "../constants";
import { useResetPasswordMutation } from "../queries/graphql";
import PersonWithPhoneSvg from "../svgs/PersonWithPhoneSvg";
import { extractError } from "../utils/extractError";
import { AuthForm } from "./AuthForm";
import { AuthFormButton } from "./AuthFormButton";
import { InputField } from "./InputField";

interface ConfirmResetPasswordProps {}

const ConfirmResetPassword: React.FC<ConfirmResetPasswordProps> = ({}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const [resetPassword] = useResetPasswordMutation();
  const { token } = useParams<{ token: string }>();
  //   onChange={(e) => {
  //     setEmail((e.target as HTMLInputElement).value);
  //     console.log(email);
  //   }}
  return (
    <AuthForm
      bgSvg={
        <Box mt={"-20"}>
          <PersonWithPhoneSvg />
        </Box>
      }
      bgColor={COLOR_MAIN_DARK}
      heading={"Set Or Reset Your New Password"}
      onSubmit={async (e) => {
        try {
          console.log("hey");

          setIsSubmit(true);
          if (confirmPassword !== password) {
            toast.error("Passwords don't match ");
          }
          console.log("2222222222");

          setIsSubmit(false);
        } catch (e) {
          toast.error(extractError(e));
          setIsSubmit(false);
        }
      }}
    >
      <Box py={3}>
        <InputField
          name="password"
          placeholder="Enter your password"
          label="New Password"
          type="Password"
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        <Text color={"gray.500"} fontSize={"xs"} textAlign="left">
          5 characters minimum
        </Text>
      </Box>
      <Box py={3}>
        <InputField
          name="confirm-password"
          placeholder="Enter your password"
          label="Confirm New Password"
          type="Password"
          onChange={(e) =>
            setConfirmPassword((e.target as HTMLInputElement).value)
          }
        />
      </Box>
      <Box py={3}>
        <AuthFormButton type="submit" isSubmit={isSubmit}>
          <Text color="white">Reset Password</Text>
        </AuthFormButton>
      </Box>
    </AuthForm>
  );
};

export default ConfirmResetPassword;

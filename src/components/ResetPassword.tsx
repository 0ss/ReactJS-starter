import { Box, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { COLOR_MAIN_LIGHT, ROUTES } from "../constants";
import { useResetPasswordMutation } from "../queries/graphql";
import PersonWithPhoneSvg from "../svgs/PersonWithPhoneSvg";
import { extractError } from "../utils/extractError";
import { AuthForm } from "./AuthForm";
import { AuthFormButton } from "./AuthFormButton";
import { InputField } from "./InputField";

const PersonYogaSvg = React.lazy(() => import("../svgs/PersonYogaSvg"));
interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [resetPassword] = useResetPasswordMutation();
  const { token } = useParams<{ token: string }>();

  return (
    <AuthForm
      bgSvg={
        <Box mt={"-20"}>
          <PersonWithPhoneSvg />
        </Box>
      }
      bgColor={COLOR_MAIN_LIGHT}
      heading={"Reset Your Password"}
      onSubmit={async (e) => {
        try {
          setIsSubmit(true);
          await resetPassword({ variables: { email } });
          toast.success("Check your email to reset your password ");
          setIsSubmit(false);
        } catch (e) {
          toast.error(extractError(e));
          setIsSubmit(false);
        }
      }}
    >
      <Box py={3}>
        <InputField
          name="email"
          placeholder="Enter your email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail((e.target as HTMLInputElement).value);
            console.log(email);
          }}
        />
      </Box>
      <Box py={3}>
        <AuthFormButton type="submit" isSubmit={isSubmit}>
          <Text color="white">Reset Password</Text>
        </AuthFormButton>
      </Box>
      <Box py={3}>
        <Link to={ROUTES.SIGN_IN}>
          <Flex justifyContent="center">
            <Text>Found Your Password? </Text>
            <Text fontWeight="bold">&nbsp;Sign in</Text>
          </Flex>
        </Link>
      </Box>
    </AuthForm>
  );
};

export default ResetPassword;

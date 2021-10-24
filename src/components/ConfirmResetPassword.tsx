import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { COLOR_MAIN_DARK, ROUTES } from "../constants";
import { useConfirmResetPasswordMutation } from "../queries/graphql";
import { extractError } from "../utils/extractError";
import { InputField } from "./InputField";
import { useHistory } from "react-router-dom";
import { lazily } from "react-lazily";

const { AuthFormButton } = lazily(() => import("./AuthFormButton"));
const { AuthForm } = lazily(() => import("./AuthForm"));
const { PersonWithPhoneSvg } = lazily(
  () => import("../svgs/PersonWithPhoneSvg")
);
interface ConfirmResetPasswordProps {}
const ConfirmResetPassword: React.FC<ConfirmResetPasswordProps> = ({}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const [isSubmit, setIsSubmit] = useState(false);
  const [resetPassword] = useConfirmResetPasswordMutation();
  const { token } = useParams<{ token: string }>();
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
          setIsSubmit(true);
          if (confirmPassword !== password) {
            toast.error("Passwords don't match ");
            setIsSubmit(false);
            return;
          }
          const res = await resetPassword({
            variables: {
              confirmResetPasswordInput: {
                password,
                confirmPassword,
                token,
              },
            },
          });
          if (res?.data?.confirmResetPassword) {
            toast.success("New password has been set ✨");
            history.push(ROUTES.SIGN_IN);
          }
          setIsSubmit(false);
        } catch (e) {
          console.log(e);
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
          required
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
          required
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

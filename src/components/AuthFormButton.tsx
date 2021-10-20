import { Button, Spinner } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { COLOR_MAIN_DARK } from "../constants";

interface AuthFormButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isSubmit: boolean;
  children?: ReactNode;
}

export const AuthFormButton: React.FC<AuthFormButtonProps> = ({
  type,
  isSubmit,
  children,
}) => {
  const Children = () => <>{children}</>;
  return (
    <Button
      w={"full"}
      size={"sm"}
      type={type as any}
      disabled={isSubmit}
      style={{ backgroundColor: COLOR_MAIN_DARK }}
      _hover={{ opacity: 0.7 }}
      _focus={{ boxShadow: "none" }}
    >
      {isSubmit ? <Spinner /> : <Children />}
    </Button>
  );
};

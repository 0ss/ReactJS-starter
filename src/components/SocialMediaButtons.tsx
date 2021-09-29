import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { GoogleLogin } from "react-google-login"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { REACT_APP_GOOGLE_CALLBACK_URL, REACT_APP_GOOGLE_CLIENT_ID } from "../constants"

interface SocialMediaButtonsProps extends React.HTMLProps<HTMLButtonElement> {
    children?: ReactNode
}

export const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
    type,
    children,
}) => {
    const responseGoogle = (e : any) =>{
        console.log(',',e)
    } 
    
    return (
        <VStack spacing={3}>
            <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                redirectUri={REACT_APP_GOOGLE_CALLBACK_URL}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}

                render={({ onClick, disabled }) => (
                    <Button
                        w={"full"}
                        type={type as any}
                        borderColor={"black"}
                        borderWidth={1}
                        bgColor={"white"}
                        _focus={{ boxShadow: "none" }}
                        // disabled={disabled}
                        onClick={onClick}
                    >
                        <HStack spacing={2}>
                            <Box mb={-0.5}>
                                <FcGoogle fontSize={18} />
                            </Box>
                            <Text>Continue with Google</Text>
                        </HStack>
                    </Button>
                )}
            ></GoogleLogin>
            <Button
                w={"full"}
                type={type as any}
                borderColor={"black"}
                borderWidth={1}
                bgColor={"white"}
                _focus={{ boxShadow: "none" }}
            >
                <HStack spacing={2}>
                    <FaGithub fontSize={18} />
                    <Text>Continue with GitHub</Text>
                </HStack>
            </Button>
        </VStack>
    )
}

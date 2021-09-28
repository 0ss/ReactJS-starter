import { Box, Divider, HStack, Text } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { COLOR_MAIN_LIGHT, ROUTES } from "../constants"
import { AuthForm } from "./AuthForm"
import { AuthFormButton } from "./AuthFormButton"
import { InputField } from "./InputField"
import { SocialMediaButtons } from "./SocialMediaButtons"
import { toast } from 'react-hot-toast'

const PersonWalkingSvg = React.lazy(() => import("../svgs/PersonWalkingSvg"))

interface SignInProps {}
const SignIn: React.FC<SignInProps> = ({}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    return (
        <AuthForm
            heading={"Log in"}
            bgSvg={<PersonWalkingSvg />}
            bgColor={COLOR_MAIN_LIGHT}
            onSubmit={(e) => {
                setIsSubmit(true)
                toast.error('s')
            }}
        >
            <Box py={3}>
                <InputField
                    name="email"
                    placeholder="Enter your email"
                    label="Email address"
                    type="email"
                 />
            </Box>
            <Box py={3}>
                <InputField
                    name="password"
                    placeholder="Enter your password"
                    label="Password"
                    type="Password"
                 />
            </Box>
            <Box py={3}>
                <AuthFormButton type="submit" isSubmit={isSubmit}>
                    <Text color="white">Login</Text>
                </AuthFormButton>
            </Box>
            <HStack>
                <Divider />
                <Text color="gray.500" fontWeight="bold">
                    OR
                </Text>
                <Divider />
            </HStack>
            <Box py={3}>
                <SocialMediaButtons />
            </Box>
            <Box py={3}>
                <Link to={ROUTES.SIGN_UP}>
                    <Flex justifyContent="center">
                        <Text>Don't have an account? </Text>
                        <Text fontWeight="bold">&nbsp;Create one</Text>
                    </Flex>
                </Link>
            </Box>
            <Box>
                <Link to={ROUTES.RESET_PASSWORD}>
                    <Text>Forgot Your Password? </Text>
                </Link>
            </Box>
        </AuthForm>
    )
}
export default SignIn
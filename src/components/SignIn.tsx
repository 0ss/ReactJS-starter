import { Box, Divider, HStack, Text } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import {
    COLOR_MAIN_DARK,
    COLOR_MAIN_LIGHT,
    COLOR_MAIN_MEDIUM_DARK,
    ROUTES,
} from "../constants"
import { InputField } from "./InputField"
import { SocialMediaButtons } from "./SocialMediaButtons"
import { toast } from "react-hot-toast"
import { lazily } from "react-lazily"
import { useLoginMutation, useUserQuery } from "../queries/graphql"

const { PersonWithPhoneSvg } = lazily(
    () => import("../svgs/PersonWithPhoneSvg")
)
const { AuthFormButton } = lazily(() => import("./AuthFormButton"))
const { AuthForm } = lazily(() => import("./AuthForm"))

interface SignInProps {}
const SignIn: React.FC<SignInProps> = ({}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [login] = useLoginMutation()
    const [loginUserInput, setLoginUserInput] = useState({
        email: "",
        password: "",
    })
    const history = useHistory()
    return (
        <AuthForm
            heading={"Log in"}
            bgSvg={
                <Box mt={"-20"}>
                    <PersonWithPhoneSvg />
                </Box>
            }
            bgColor={COLOR_MAIN_MEDIUM_DARK}
            onSubmit={async (e) => {
                e.preventDefault()
                setIsSubmit(true)
                try {
                    const res = await login({
                        variables: {
                            loginUserInput: {
                                ...loginUserInput,
                            },
                        },
                    })
                    if (res.data?.login?.user) {
                        setIsSubmit(false)
                        setAuthToken(res.data?.login?.token)
                        history.push(
                            ROUTES.PROJECT.replace(
                                ":id",
                                res.data.login.user.userProject[0].project.id
                            )
                        )
                    }
                } catch (e: any) {
                    setIsSubmit(false)
                    const errs = e.message?.split(",")[0]
                    toast.error(errs)
                }
            }}
        >
            <Box py={3}>
                <InputField
                    name="email"
                    placeholder="Enter your email"
                    label="Email address"
                    type="email"
                    required
                />
            </Box>
            <Box py={3}>
                <InputField
                    name="password"
                    placeholder="Enter your password"
                    label="Password"
                    type="Password"
                    required
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
function setAuthToken(token: any) {
    throw new Error("Function not implemented.")
}

import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/layout"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { lazily } from "react-lazily"
import { Link, useHistory } from "react-router-dom"
import { COLOR_MAIN_MEDIUM_LIGHT, ROUTES } from "../constants"
import { useAuthToken } from "../hooks/useAuthToken"
import {
    UserDocument,
    useRegisterMutation,
    UserQuery,
} from "../queries/graphql"

const { InputField } = lazily(() => import("./InputField"))
const { SocialMediaButtons } = lazily(() => import("./SocialMediaButtons"))
const { AuthFormButton } = lazily(() => import("./AuthFormButton"))
const { AuthForm } = lazily(() => import("./AuthForm"))
const { PersonWithPhoneSvg } = lazily(
    () => import("../svgs/PersonWithPhoneSvg")
)

interface SignUpProps {}
const SignUp: React.FC<SignUpProps> = ({}) => {
    const history = useHistory()
    const [authToken, setAuthToken] = useAuthToken()
    const [signupUserInput, setSignupUserInput] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [isSubmit, setIsSubmit] = useState(false)
    const [register] = useRegisterMutation()
    const handleSignupUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setSignupUserInput({
            ...signupUserInput,
            [target.name]: target.value,
        })
    }

    return (
        <AuthForm
            bgSvg={
                <Box mt={"-20"}>
                    <PersonWithPhoneSvg />
                </Box>
            }
            bgColor={COLOR_MAIN_MEDIUM_LIGHT}
            heading={"Sign Up"}
            onSubmit={async (e) => {
                e.preventDefault()
                setIsSubmit(true)
                try {
                    const res = await register({
                        variables: {
                            registerUserInput: {
                                ...signupUserInput,
                            },
                        },
                    })
                    if (res.data?.register?.user) {
                        setIsSubmit(false)
                        setAuthToken(res.data?.register?.token)
                        history.push(ROUTES.PROJECT)
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
                    name="name"
                    placeholder="Enter your name ❤️"
                    label="Name"
                    type="text"
                    value={signupUserInput.name}
                    onChange={handleSignupUserInput}
                />
            </Box>
            <Box py={3}>
                <InputField
                    name="email"
                    placeholder="Enter your email"
                    label="Email address"
                    type="email"
                    value={signupUserInput.email}
                    onChange={handleSignupUserInput}
                    required={true}
                />
            </Box>
            <Box py={3}>
                <InputField
                    name="password"
                    placeholder="Enter your password"
                    label="Password"
                    type="Password"
                    value={signupUserInput.password}
                    onChange={handleSignupUserInput}
                    required={true}
                />
                <Text color={"gray.500"} fontSize={"xs"} textAlign="left">
                    5 characters minimum
                </Text>
            </Box>
            <Box py={3}>
                <AuthFormButton type="submit" isSubmit={isSubmit}>
                    <Text color="white">Sign up</Text>
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
                <Link to={ROUTES.SIGN_IN}>
                    <Flex justifyContent="center">
                        <Text>Have an account? </Text>
                        <Text fontWeight="bold">&nbsp;Sign In</Text>
                    </Flex>
                </Link>
            </Box>
        </AuthForm>
    )
}
export default SignUp

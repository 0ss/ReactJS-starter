import { Box, Center, Divider, Heading } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { lazily } from "react-lazily"
import { useHistory } from "react-router-dom"
import { ROUTES } from "../constants"
import { useAuthToken } from "../hooks/useAuthToken"
import { useUserQuery } from "../queries/graphql"

const { Feedbackness } = lazily(() => import("../svgs/Feedbackness"))
interface AuthFormProps extends React.HTMLProps<HTMLFormElement> {
    heading: string
    bgSvg: ReactNode
    bgColor: string
    children?: ReactNode
}

export const AuthForm: React.FC<AuthFormProps> = ({
    onSubmit,
    bgColor,
    bgSvg,
    children,
    ...props
}) => {
    const history = useHistory()
    const { data, loading, error } = useUserQuery()
    if (!loading && !!data?.user) {
        console.log(data.user.userProject[0].project)
        const randomProjectId = data.user.userProject[0].project.id
        history.push(ROUTES.PROJECT.replace(":id", randomProjectId))
    }
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
                        e.preventDefault()
                        if (onSubmit) onSubmit(e)
                    }}
                >
                    <Center pb={6}>
                        <Feedbackness width={120} />
                    </Center>
                    <Divider />
                    <Heading fontSize="2xl" py={3}>
                        {props.heading}
                    </Heading>
                    {children}
                </form>
            </Box>
            <Box
                position="fixed"
                left="50%"
                display={{ base: "none", md: "flex" }}
            >
                {bgSvg}
            </Box>
        </Center>
    )
}

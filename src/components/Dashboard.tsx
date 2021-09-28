import { Center, Heading } from '@chakra-ui/layout'
import React from 'react'

interface DashboardProps {
    
}

const Dashboard : React.FC<DashboardProps>= () => {
    return (
        <Center>
            <Heading>
                This is the dashboard
            </Heading>
        </Center>
    )
}
export default Dashboard

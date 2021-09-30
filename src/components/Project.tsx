import { Box } from '@chakra-ui/layout'
import React, { ReactElement } from 'react'
import { ProjectHeader } from './ProjectHeader'

interface ProjectProps {
    
}

export const Project : React.FC<ProjectProps> = ({}) => {
    return (
        <Box style={{backgroundColor:'var(--bg-color-main)'}}>
            <ProjectHeader />
        </Box>
    )
}

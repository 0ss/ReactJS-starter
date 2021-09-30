import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { COLOR_MAIN_DARK, COLOR_MAIN_MEDIUM_DARK,COLOR_MAIN_MEDIUM_LIGHT } from "../constants";

interface Page404Props {}
export const Page404: React.FC<Page404Props> = ({}) => {
  return (
    <Box style={{ backgroundColor: COLOR_MAIN_DARK }} h="100vh" color="white">
      <VStack pt={"44"} spacing={3}>
        <Heading size={'4xl'} as={'h1'}>404</Heading>
        <Heading as="h4" size="md" textAlign={'center'}>
          There's nothing here, there page does not exist
        </Heading>
        <Button
          style={{ backgroundColor: COLOR_MAIN_MEDIUM_LIGHT }}
          color={'gray.800'}
          as={'a'}
          fontSize={14}
          _hover={{opacity:0.7}}
          href="/"
        >
          Go to the homepage
        </Button>
      </VStack>
    </Box>
  );
};

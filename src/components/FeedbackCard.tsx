import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  HStack,
  Spacer,
  VStack,
  Box,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
//@ts-ignore
import ReactCountryFlag from "react-country-flag";
import { FeedbackTags } from "./FeedbackTags";

interface FeedbackCardProps {}

export const FeedbackCard = ({}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Flex
      cursor={"pointer"}
      flexDir="column"
      borderRadius={"lg"}
      border={"1px"}
      borderColor={"transparent"}
      p={"3"}
      w={"full"}
      shadow={"md"}
      _hover={{
        textDecoration: "none",
        border: "1px",
        borderColor: "gray.500",
      }}
    >
      <VStack spacing={"3"}>
        <Stack direction={["column", "column", "row"]} w={"full"}>
          <FeedbackTags type={"idea"} />
          <Spacer />
          <Text fontSize={"sm"} color={"gray"}>
            2 months ago
          </Text>
        </Stack>
        <Stack
          direction={["column", "column", "row"]}
          spacing={["1", "2", "16"]}
          wordBreak={"break-word"}
          w={"full"}
        >
          <span>
            adiojas ioasjdiosaj oijasdio jaoijdaios joiajdio ajiodoaijd ojiij
            dijjij ij ij
          </span>
          <Spacer />
          {isOpen ? (
            <ChevronUpIcon onClick={onClose} />
          ) : (
            <ChevronDownIcon onClick={onOpen} />
          )}
        </Stack>
      </VStack>
      {isOpen && (
        <Box mt={"5"}>
          <Stack
            direction={["column", "column", "row"]}
            spacing={["1", "2", "16"]}
          >
            <VStack spacing={"0"} alignItems={"left"}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
                PAGE
              </Text>
              <Link fontSize={"sm"}>https://www.google.com/hello/world</Link>
            </VStack>
            <VStack spacing={"0"} alignItems={"left"}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
                IMAGE
              </Text>
              <Text fontSize={"sm"}>SA</Text>
            </VStack>
            <VStack spacing={"0"} alignItems={"left"}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
                DEVICE
              </Text>
              <Text fontSize={"sm"}>Tablet </Text>
            </VStack>
          </Stack>
          <Stack
            spacing={["1", "2", "16"]}
            direction={["column", "column", "row"]}
            mt={"5"}
          >
            <VStack spacing={"0"} alignItems={"left"}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
                COUNTRY
              </Text>
              <Text fontSize={"sm"}>
                <img
                  src={`https://flagcdn.com/20x15/${"sa"}.png`}
                  loading="lazy"
                  alt="flag"
                />
                {/* <ReactCountryFlag countryCode="SA" /> */}
              </Text>
            </VStack>
            <VStack spacing={"0"} alignItems={"left"}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
                BROWSER
              </Text>
              <Text fontSize={"sm"}>Chrome 10</Text>
            </VStack>
            <VStack spacing={"0"} alignItems={"left"}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.500"}>
                OS
              </Text>
              <Text fontSize={"sm"}>Windows 10</Text>
            </VStack>
          </Stack>
        </Box>
      )}
    </Flex>
  );
};

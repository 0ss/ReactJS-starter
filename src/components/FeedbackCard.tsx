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
  ScaleFade,
  Button,
  Code,
} from "@chakra-ui/react";
import React from "react";
import {
  COLOR_MAIN_DARK,
  COLOR_MAIN_LIGHT,
  COLOR_MAIN_MEDIUM_DARK,
  IDEA,
  ISSUE,
  OTHER,
} from "../constants";
import { random } from "../utils/random";
import { FeedbackTags } from "./FeedbackTags";

interface FeedbackCardProps {}

export const FeedbackCard = ({}) => {
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      cursor={!isOpen ? "pointer" : "default"}
      onClick={!isOpen ? onToggle : () => null}
      flexDir="column"
      transition={"all"}
      borderColor={"transparent"}
      p={"3"}
      shadow={isOpen ? "md" : "none"}
      w={"full"}
      _hover={{
        backgroundColor: !isOpen ? "gray.200" : "",
      }}
    >
      <VStack spacing={"3"}>
        <Stack direction={["column", "column", "row"]} w={"full"}>
          <FeedbackTags type={random([ISSUE, IDEA, OTHER])} />
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
            <ChevronUpIcon cursor={"pointer"} onClick={onToggle} />
          ) : (
            <ChevronDownIcon cursor={"pointer"} onClick={onToggle} />
          )}
        </Stack>
      </VStack>
      {isOpen && (
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box mt={"5"}>
            <Stack
              direction={["column", "column", "row"]}
              spacing={["1", "2", "16"]}
            >
              <VStack spacing={"0"} alignItems={"left"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
                  PAGE
                </Text>
                <Link
                  href={"https://www.google.com/hello/world"}
                  as={"a"}
                  target={"_blank"}
                  fontSize={"sm"}
                >
                  https://www.google.com/hello/world
                </Link>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
                  IMAGE
                </Text>
                <Text fontSize={"sm"}>SA</Text>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
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
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
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
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
                  BROWSER
                </Text>
                <Text fontSize={"sm"}>Chrome 10</Text>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
                  OS
                </Text>
                <Text fontSize={"sm"}>Windows 10</Text>
              </VStack>
            </Stack>
            <Stack
              spacing={["1", "2", "16"]}
              direction={["column", "column", "row"]}
              mt={"5"}
            >
              <Spacer />
              <Button
                _hover={{
                  backgroundColor: COLOR_MAIN_MEDIUM_DARK,
                }}
                size={"sm"}
                bgColor={COLOR_MAIN_MEDIUM_DARK}
                color={"white"}
              >
                Archive
              </Button>
            </Stack>
            <Stack
              spacing={["1", "2", "16"]}
              direction={["column", "column", "row"]}
              mt={"5"}
            >
              <VStack spacing={"0"} alignItems={"left"}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
                  <code>METADATA</code>
                </Text>
                <Text fontSize={"sm"}>
                  <img
                    src={`https://flagcdn.com/20x15/${"sa"}.png`}
                    loading="lazy"
                    alt="flag"
                  />
                </Text>
              </VStack>
            </Stack>
          </Box>
        </ScaleFade>
      )}
    </Flex>
  );
};

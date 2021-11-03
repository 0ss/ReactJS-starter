import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button, Link,
  ScaleFade,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import {
  COLOR_MAIN_DARK,
  COLOR_MAIN_MEDIUM_DARK, IDEA,
  ISSUE,
  OTHER
} from "../../constants";
import { CountryImage } from "../CountryImage";
import { FeedbackCardContainer } from "./FeedbackCardContainer";
import { FeedbackCardLine } from "./FeedbackCardLine";
import { FeedbackCardText } from "./FeedbackCardText";
import { FeedbackImageDialog } from "./FeedbackImageDialog";
import { FeedbackMetadata } from "./FeedbackMetadata";
import { FeedbackTags } from "../FeedbackTags";
dayjs.extend(relativeTime);

export interface FeedbackCardProps {
  type: typeof ISSUE | typeof IDEA | typeof OTHER;
  content: string;
  date: string | Date;
  page: string;
  image: string;
  device: "tablet " | "smartphone" | "desktop";
  country: string;
  os: string;
  browser: string;
  metadata: Object;
  archived: boolean
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  type,
  content,
  date,
  page,
  image,
  device,
  country,
  os,
  browser,
  metadata,
  archived
}) => {
  const { isOpen: isOpenCard, onToggle: onToggleCard } = useDisclosure();
  const {
    onOpen: onOpenImage,
    onClose: onCloseImage,
    isOpen: isOpenImage,
  } = useDisclosure();
  const isMetadata = JSON.stringify(metadata) === JSON.stringify({});
  return (
    <FeedbackCardContainer isOpen={isOpenCard} onToggle={onToggleCard}>
      <VStack p={"3"} spacing={"3"}>
        <Stack direction={["column", "column", "row"]} w={"full"}>
          <FeedbackTags type={type} />
          <Spacer />
          <Text fontSize={"sm"} color={"gray"}>
            {dayjs(date).fromNow()}
          </Text>
        </Stack>
        <Stack
          direction={["column", "column", "row"]}
          spacing={["1", "2", "16"]}
          wordBreak={"break-word"}
          w={"full"}
        >
          <span>{content}</span>
          <Spacer />
          {isOpenCard ? (
            <ChevronUpIcon cursor={"pointer"} onClick={onToggleCard} />
          ) : (
            <ChevronDownIcon cursor={"pointer"} onClick={onToggleCard} />
          )}
        </Stack>
      </VStack>
      {isOpenCard && (
        <ScaleFade initialScale={0.9} in={isOpenCard}>
          <Box p={"3"} mt={"5"}>
            <Stack
              direction={["column", "column", "row"]}
              spacing={["1", "2", "16"]}
            >
              <VStack spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>PAGE</FeedbackCardText>
                <Link
                  href={"https://www.google.com/hello/world"}
                  as={"a"}
                  target={"_blank"}
                  fontSize={"sm"}
                >
                  {page}
                </Link>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>IMAGE</FeedbackCardText>
                <Box
                  size={"sm"}
                  width={"20"}
                  cursor="zoom-in"
                  _hover={{
                    borderRadius: "sm",
                  }}
                  onClick={onOpenImage}
                >
                  <img src={image} loading="lazy" alt="feedback image" />
                  <FeedbackImageDialog
                    onClose={onCloseImage}
                    isOpen={isOpenImage}
                  >
                    <img src={image} loading="lazy" alt="feedback image" />
                  </FeedbackImageDialog>
                </Box>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>DEVICE</FeedbackCardText>
                <Text fontSize={"sm"}>{device}</Text>
              </VStack>
            </Stack>
            <Stack
              spacing={["1", "2", "16"]}
              direction={["column", "column", "row"]}
              mt={"5"}
            >
              <VStack spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>COUNTRY</FeedbackCardText>
                <Box fontSize={"sm"} mt={10}>
                  <CountryImage code={country} />
                </Box>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>BROWSER</FeedbackCardText>
                <Text fontSize={"sm"}>{browser}</Text>
              </VStack>
              <VStack spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>OS</FeedbackCardText>
                <Text fontSize={"sm"}>{os}</Text>
              </VStack>
            </Stack>
            <FeedbackCardLine>
              <Spacer />
              <Button
                _hover={{
                  border:"2px solid gray"
                }}
                size={"sm"}
                bgColor={COLOR_MAIN_MEDIUM_DARK}
                color={"white"}
              >
                {
                  archived 
                  ? "Archive"
                  : "Unarchive"
                }
              </Button>
            </FeedbackCardLine>
            {!isMetadata ? (
              <VStack mt={"5"} spacing={"0"} alignItems={"left"}>
                <FeedbackCardText>METADATA</FeedbackCardText>
                <FeedbackMetadata metadata={metadata} />
              </VStack>
            ) : null}
          </Box>
        </ScaleFade>
      )}
    </FeedbackCardContainer>
  );
};

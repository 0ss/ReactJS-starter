import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsCalendar } from "react-icons/bs";
interface BarChartMenuProps {}

export const BarChartMenu = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu>
        <MenuButton
          shadow={"sm"}
          borderRadius={"lg"}
          border={"solid"}
          borderWidth={"thin"}
          borderColor={"gray.200"}
          fontWeight={"normal"}
          bg={"white"}
          textAlign={"left"}
          as={Button}
          fontSize={"sm"}
          w={"100%"}
          _hover={{
            backgroundColor: "white",
          }}
          _active={{
            backgroundColor: "white",
          }}
          rightIcon={<ChevronDownIcon />}
        >
          Today
        </MenuButton>
        <MenuList fontSize={"sm"}>
          <MenuItem>Today</MenuItem>
          <MenuItem>Last Week</MenuItem>
          <MenuItem>Last Month</MenuItem>
          <MenuItem>Last 6 Month</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

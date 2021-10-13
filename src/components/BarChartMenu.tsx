import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsCalendar } from "react-icons/bs";

interface BarChartMenuProps {}
export const BarChartMenu = ({}) => {
  return (
    <>
      <Select
        onChange={(e) => {
          console.log(e.target.value);
        }}
        size={"sm"}
        borderRadius={"lg"}
      >
        <option value="all" selected>
          All
        </option>
        <option value="today">Today</option>
        <option value="last_week">Last Week</option>
        <option value="last_month">Last Month</option>
        <option value="last_6_months">Last 6 Months</option>
      </Select>
    </>
  );
};

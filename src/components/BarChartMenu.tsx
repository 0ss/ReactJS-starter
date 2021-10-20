import { Select } from "@chakra-ui/react";
import React from "react";
import {
  ALL_TIME,
  LAST_6_MONTHS,
  LAST_MONTH,
  LAST_WEEK,
  TODAY,
} from "../constants";
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
        defaultValue={ALL_TIME}
      >
        <option value={ALL_TIME}>All Time</option>
        <option value={TODAY}>Today</option>
        <option value={LAST_WEEK}>Last Week</option>
        <option value={LAST_MONTH}>Last Month</option>
        <option value={LAST_6_MONTHS}>Last 6 Months</option>
      </Select>
    </>
  );
};

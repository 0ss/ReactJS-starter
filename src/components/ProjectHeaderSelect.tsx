import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  UseDisclosureProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { COLOR_MAIN_MEDIUM_LIGHT } from "../constants";
import { CreateProjectModal } from "./CreateProjectModal";

interface ProjectHeaderSelectProps {}
export const ProjectHeaderSelect: React.FC<ProjectHeaderSelectProps> = () => {
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
          w={"100%"}
          _hover={{
            backgroundColor: "white",
          }}
          _active={{
            backgroundColor: "white",
          }}
          rightIcon={<ChevronDownIcon />}
        >
          Projects
        </MenuButton>
        <MenuList>
          <MenuItem>Todo List</MenuItem>
          <MenuItem>Senior Project</MenuItem>
          <MenuDivider />
          <MenuItem fontWeight={"semibold"} onClick={onOpen}>
            💡 Create Project
          </MenuItem>
        </MenuList>
      </Menu>
      <CreateProjectModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

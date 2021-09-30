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
      <Menu >
        <MenuButton
          fontWeight={"normal"}
          bg={"gray.500"}
          as={Button}
          w={'100%'}
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

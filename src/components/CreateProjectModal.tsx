import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, UseDisclosureProps
} from "@chakra-ui/react";
import React from "react";
import { lazily } from "react-lazily";
import {
  COLOR_MAIN_MEDIUM_DARK
} from "../constants";

const { InputField } = lazily(() => import("./InputField"));
interface CreateProjectModalProps extends UseDisclosureProps {}
export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen!} onClose={onClose!}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Create Your Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputField label="Project Name" placeholder={"feedbackness.com"} />
          </ModalBody>

          <ModalFooter>
            <Button
              size={"sm"}
              fontWeight={"semibold"}
              mr={3}
              onClick={onClose}
              style={{
                backgroundColor: COLOR_MAIN_MEDIUM_DARK,
              }}
              _hover={{
                opacity: 0.8,
              }}
            >
              Create
            </Button>
            <Button
              onClick={onClose}
              size={"sm"}
              bg={"gray.200"}
              _hover={{
                opacity: 0.8,
              }}
            >
              Go back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

import { Button } from "@chakra-ui/button";
import { useDisclosure, UseDisclosureProps } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import React from "react";

interface FeedbackImageDialogProps extends UseDisclosureProps {}

export const FeedbackImageDialog: React.FC<FeedbackImageDialogProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen!} onClose={onClose!}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

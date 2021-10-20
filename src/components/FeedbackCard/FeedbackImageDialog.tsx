import { UseDisclosureProps } from "@chakra-ui/hooks";
import {
  Modal, ModalBody, ModalContent, ModalOverlay
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

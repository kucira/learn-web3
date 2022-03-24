import {
  Modal,
  ModalOverlay,
  ModalHeader,
  Box,
  Flex,
  ModalCloseButton,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  setOpen: any;
  children?: React.ReactChild | React.ReactChild[];
  title?: string;
};

const ModalComponent = ({
  isOpen = false,
  setOpen,
  children,
  title,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(!isOpen)}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalCloseButton bg="white" />
        <Flex h={"100vh"} alignItems="flex-end">
          <Box
            w="100%"
            h="65%"
            bg="white"
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
          >
            <ModalHeader>{title}</ModalHeader>
            <Flex justify="space-around">{children}</Flex>
          </Box>
        </Flex>
      </ModalOverlay>
    </Modal>
  );
};

export default ModalComponent;

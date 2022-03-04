import {
  Modal,
  ModalOverlay,
  ModalHeader,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  setOpen: any;
  children?: React.ReactElement;
};

const ModalComponent = ({ isOpen = false, setOpen, children }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(!isOpen)}
      closeOnOverlayClick
      motionPreset="slideInBottom"
    >
      <ModalOverlay onClick={() => setOpen(!isOpen)}>
        <Flex h={"100vh"} alignItems="flex-end">
          <Box
            w="100%"
            h="65%"
            bg="white"
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
          >
            <ModalHeader>Modal Title</ModalHeader>
            <Flex justify="space-around">
              <Button>b01</Button>
              <Button>b02</Button>
              <Button>b03</Button>
              {children}
            </Flex>
          </Box>
        </Flex>
      </ModalOverlay>
    </Modal>
  );
};

export default ModalComponent;

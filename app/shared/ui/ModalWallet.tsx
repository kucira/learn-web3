import { Image, Link, Text, Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import ModalContext from "../libs/ModalContext";
import ModalComponent from "./Modal";

const ModalWallet = () => {
  const modalContext = useContext(ModalContext);

  return (
    <ModalComponent
      title={"Info"}
      isOpen={modalContext.isShowModal}
      setOpen={modalContext.setIsShowModal}
    >
      <Box w="100%" textAlign="center">
        <Flex justify="center">
          <Image
            src="https://kimeowgee.com/wp-content/uploads/2018/09/metamask.png"
            w={250}
            h={250}
            alt="metamask"
          />
        </Flex>
        <Text>
          <Link target="_blank" href="https://metamask.io/download/">
            Please Install MetaMask
          </Link>
        </Text>
      </Box>
    </ModalComponent>
  );
};

export default ModalWallet;

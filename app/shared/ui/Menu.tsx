import { Box, Slide, Text } from "@chakra-ui/react";
import { Link } from "remix";
import { DASHBOARD, SELL_ASSET, HOME } from "../constants/routes";

type Props = {
  isOpen: boolean;
  setIsOpen: any;
};

const Menu = ({ isOpen = false, setIsOpen }: Props) => {
  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
      <Box as="nav" w="100%" h="100vh" bg="white" p={5}>
        <Link to={HOME} onClick={setIsOpen}>
          <Text as="p">Home</Text>
        </Link>
        <Link to={SELL_ASSET} onClick={setIsOpen}>
          <Text as="p">Sell Digital Asset</Text>
        </Link>
        <Link to={DASHBOARD}>
          <Text as="p">My Digital Asset</Text>
        </Link>
      </Box>
    </Slide>
  );
};

export default Menu;

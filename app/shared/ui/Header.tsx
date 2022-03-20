import { Box, Flex, Image, Container, useDisclosure } from "@chakra-ui/react";
import { Link } from "remix";
import CartMenu from "~/features/home/ui/components/CartMenu";
import menuIcon from "~/shared/assets/icon/menu-icon.svg";
import searchIcon from "~/shared/assets/icon/search-icon.svg";
import Menu from "~/shared/ui/Menu";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW="container.sm">
      <Flex py={4} flex={1} position="sticky" top={0} bg="white">
        <Box onClick={onToggle} cursor="pointer">
          <Image src={menuIcon} alt="menu-icon" w={"20px"} h={"20px"} />
        </Box>

        <Flex flex={1} justify="flex-end">
          <Link to="/" about="CartMenu">
            <CartMenu notification={0} />
          </Link>

          <Box onClick={() => {}} cursor="pointer">
            <Image src={searchIcon} alt="search-icon" w={"20px"} h={"20px"} />
          </Box>
        </Flex>
      </Flex>

      <Menu isOpen={isOpen} setIsOpen={onToggle} />
    </Container>
  );
};

export default Header;

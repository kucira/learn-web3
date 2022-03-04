import { Box, Flex, Image } from "@chakra-ui/react";
import menuIcon from "~/shared/assets/icon/menu-icon.svg";
import searchIcon from "~/shared/assets/icon/search-icon.svg";
import CartMenu from "./CartMenu";

type Props = {};

const Header = (props: Props) => {
    return (
        <Flex py={4} flex={1} position="sticky" top={0} bg="white">
            <Box>
                <Image src={menuIcon} alt="menu-icon" w={"20px"} h={"20px"} />
            </Box>

            <Flex flex={1} justify="flex-end">
                <CartMenu notification={0} />
                <Box>
                    <Image src={searchIcon} alt="search-icon" w={"20px"} h={"20px"} />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Header;

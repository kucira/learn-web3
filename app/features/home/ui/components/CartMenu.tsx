import { Box, Image, Text } from "@chakra-ui/react";
import cartIcon from "~/shared/assets/icon/cart-icon.svg";

type Props = {
    notification?: number;
};

const CartMenu = ({ notification = 0 }: Props) => {
    return (
        <Box mr={"12"}>
            <Image src={cartIcon} alt="cart-icon" w={"20px"} h={"20px"} />
            {notification > 0 && (
                <Box
                    border="1px solid black"
                    position="relative"
                    top="-22px"
                    left="13px"
                    fontWeight={"bold"}
                    fontSize={'x-small'}
                    textAlign={"center"}
                    borderRadius={"50%"}
                    color="white"
                    bg="#1DA154"
                    w="4"
                    h="4"
                >
                    <Text>{notification}</Text>
                </Box>
            )}
        </Box>
    );
};

export default CartMenu;

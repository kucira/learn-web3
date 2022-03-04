import { Box, Text, Image, Flex, Center } from "@chakra-ui/react";
import plant from "~/shared/assets/images/plant.jpg";

type Props = {
    title: string;
    subtitle: string;
    price: string;
    isLast?: boolean;
};

const Card = ({ title, subtitle, price, isLast = false }: Props) => {
    return (
        <Box
            w={"245px"}
            bg="#F1F4FB"
            borderRadius={"3xl"}
            px={8}
            pt={5}
            {...(!isLast && { mr: 8 })}
        >
            <Box>
                <Text fontSize="2xl" fontWeight="semibold">{title}</Text>
                <Text fontSize="sm" whiteSpace="break-spaces">
                    {subtitle}
                </Text>
            </Box>

            <Box w="210px" h="260px">
                <Image src={plant} alt="item-card" />
            </Box>

            <Flex flex={1} alignItems="center" justify="space-between">
                <Text fontSize="xl" fontWeight="extrabold">
                    {price} Matic
                </Text>
                <Box
                    as="button"
                    position="relative"
                    right="-30px"
                    h={20}
                    w={20}
                    bg="#1DA154"
                    color="white"
                    fontSize="3xl"
                    borderTopLeftRadius="20px"
                    borderBottomRightRadius="20px"
                >
                    <Center>
                        <Text>+</Text>
                    </Center>
                </Box>
            </Flex>
        </Box>
    );
};

export default Card;

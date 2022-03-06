import { Center, Flex } from "@chakra-ui/react";
import { NFT_TYPE } from "~/shared/types/nft-type";
import Card from "./Card";
import { Text } from "@chakra-ui/react";

type Props = {
  items: NFT_TYPE[];
};

const SectionItems = ({ items = [] }: Props) => {
  return (
    <Flex flex={1} whiteSpace="nowrap" overflow="auto">
      {items?.length > 0 &&
        items.map((i) => (
          <Card title={i.name} subtitle={i.description} price={i.price} />
        ))}

      {items?.length === 0 && (
        <Center w="100%">
          <Text as="h1"> No Items in Marketplace</Text>
        </Center>
      )}
    </Flex>
  );
};

export default SectionItems;

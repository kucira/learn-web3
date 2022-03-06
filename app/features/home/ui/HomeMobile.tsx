import Header from "./components/Header";
import Category from "./components/Category";
import ButtonFilter from "./components/ButtonFilter";
import Card from "./components/Card";

import { Flex, VStack } from "@chakra-ui/react";
import ModalComponent from "~/shared/ui/Modal";
import { useState } from "react";
import SectionItems from "./components/SectionItems";
import { NFT_TYPE } from "~/shared/types/nft-type";

type Props = {
  data: NFT_TYPE[];
};

const HomeMobile = ({ data = [] }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalComponent isOpen={isOpen} setOpen={setOpen} />
      <VStack pb={4} spacing={10} align="stretch">

        <Category currentMenu="concept" />

        <Flex flex={1} justify="end">
          <ButtonFilter
            onClick={() => {
              setOpen(true);
            }}
          />
        </Flex>

        <SectionItems items={data} />
      </VStack>
    </>
  );
};

export default HomeMobile;

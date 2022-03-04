import Header from "./components/Header";
import Category from "./components/Category";
import ButtonFilter from "./components/ButtonFilter";
import Card from "./components/Card";

import { Flex, VStack } from "@chakra-ui/react";
import ModalComponent from "~/shared/ui/Modal";
import { useState } from "react";

type Props = {};

const HomeMobile = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalComponent isOpen={isOpen} setOpen={setOpen} />
      <VStack pb={4} spacing={10} align="stretch">
        <Header />

        <Category currentMenu="concept" />

        <Flex flex={1} justify="end">
          <ButtonFilter onClick={() => {
            setOpen(true);
          }}/>
        </Flex>

        <Flex flex={1} whiteSpace="nowrap" overflow="auto">
          <Card
            title="Model 01"
            subtitle="Model 01 the best ever product!"
            price="100"
          />

          <Card
            title="Model 01"
            subtitle="Model 01 the best ever product!"
            price="100"
          />

          <Card
            title="Model 01"
            subtitle="Model 01 the best ever product!"
            price="100"
            isLast
          />
        </Flex>
      </VStack>
    </>
  );
};

export default HomeMobile;

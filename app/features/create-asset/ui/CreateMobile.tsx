import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Textarea,
} from "@chakra-ui/react";
import { Form, useTransition } from "remix";

export default function CreateMobile() {
  const transition = useTransition();
  return (
    <Container maxW="container.sm">
      <FormControl>
        <Form method="post" encType="multipart/form-data">
          <Input name="asset-name" placeholder="Asset Name" mb={5} />

          <Textarea name="asset-desc" placeholder="Asset Description" mb={5} />

          <NumberInput min={0} mb={5}>
            <NumberInputField name="asset-price" placeholder="Asset Price" />
          </NumberInput>

          <Input
            name="asset-file"
            placeholder="Asset File"
            mb={5}
            type="file"
          />

          <Box textAlign="center">
            <Button
              type="submit"
              isLoading={transition.submission ? true : false}
            >
              Create Asset Digital
            </Button>
          </Box>
        </Form>
      </FormControl>
    </Container>
  );
}

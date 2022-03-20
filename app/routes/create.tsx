import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "remix";

export default function FormCreate() {
  return (
    <Container maxW="container.sm">
      <Form>
        <FormControl>
          <Input id="asset-name" placeholder="Asset Name" mb={5} />

          <Textarea id="asset-desc" placeholder="Asset Description" mb={5} />

          <NumberInput min={0} mb={5}>
            <NumberInputField id="asset-price" placeholder="Asset Price" />
          </NumberInput>

          <Input id="asset-file" placeholder="Asset File" mb={5} type="file" />

          <Box textAlign="center">
            <Button>Create Asset Digital</Button>
          </Box>
        </FormControl>
      </Form>
    </Container>
  );
}

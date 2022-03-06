import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";
import { Form } from "remix";

export default function FormCreate() {
  return (
    <Container maxW="container.sm">
      <Form>
        <FormControl>
          <FormLabel htmlFor="asset-name">Asset Name</FormLabel>
          <Input id="asset-name" />

          <FormLabel htmlFor="asset-desc">Description</FormLabel>
          <Textarea id="asset-desc" />


        </FormControl>
      </Form>
    </Container>
  );
}

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
import useForm from "../hooks/useForm";

export default function CreateMobile() {
  const { handleSubmit, isLoading } = useForm();
  return (
    <Container maxW="container.sm">
      <FormControl>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <Input name="asset-name" placeholder="Asset Name" mb={5} />

          <Textarea name="asset-desc" placeholder="Asset Description" mb={5} />

          <NumberInput min={0} mb={5}>
            <NumberInputField name="asset-price" placeholder="Asset Price in Matic" />
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
              isLoading={isLoading}
            >
              Create Asset Digital
            </Button>
          </Box>
        </form>
      </FormControl>
    </Container>
  );
}

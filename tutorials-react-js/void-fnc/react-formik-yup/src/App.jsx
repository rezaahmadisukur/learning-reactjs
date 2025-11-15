import {
  Box,
  Button,
  Container,
  Field,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";

function App() {
  return (
    <Container py="10" width={480}>
      <Heading>Example Form</Heading>
      <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
        <form>
          <Stack
            spacing="3"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input />
            </Field.Root>
            <Button type="submit" colorScheme="teal">
              Register Account
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default App;

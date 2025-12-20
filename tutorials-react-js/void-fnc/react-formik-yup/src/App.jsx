import {
  Box,
  Button,
  Container,
  Field,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
  const registerUser = () => {
    // alert("Submit Form");
    alert(formik.values.password);
  };

  const formik = useFormik({
    // Initial Values ini harus saya dengna attribute "name" yang ada di tag input
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: registerUser,
    // Validation wajib di isi dengan semua property yang ada di initial values
    validationSchema: Yup.object().shape({
      username: Yup.string().required().min(3).max(10),
      email: Yup.string().required().email(),
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[0-9]).{8,}$/,
          "Password must be min 8 char with 1 lowercase, 1 number "
        )
    })
  });

  const handleForm = (event) => {
    // event.preventDefault();
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <Container py="10" width={480}>
      <Heading>Example Form</Heading>
      <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
        <form onSubmit={formik.handleSubmit}>
          <Stack
            spacing="3"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <Field.Root invalid={formik.errors.username}>
              <Field.Label>Username</Field.Label>
              <Input type="text" name="username" onChange={handleForm} />
              <Field.ErrorText>{formik.errors.username}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={formik.errors.email}>
              <Field.Label>Email</Field.Label>
              <Input type="email" name="email" onChange={handleForm} />
              <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
            </Field.Root>
            <Field.Root invalid={formik.errors.password}>
              <Field.Label>Password</Field.Label>
              <Input type="password" name="password" onChange={handleForm} />
              <Field.ErrorText>{formik.errors.password}</Field.ErrorText>
            </Field.Root>
            <Button type="submit" colorScheme="teal">
              Register Account
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default App;

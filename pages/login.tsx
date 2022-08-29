import {
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Router from "next/router";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

const initialFormData = Object.freeze({
  email: "",
  password: "",
});

const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    const encoded = Buffer.from(`${email}:${password}`).toString("base64");

    const { status } = await fetch("/api/auth", {
      method: "POST",
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    });

    if (status === 200) {
      return Router.replace("/dashboard");
    }

    setError("Wrong user or password");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "5% 10%",
        }}
      >
        <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "20vh",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardHeader title="Account area" />
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                label="Email"
                name="email"
                onChange={onChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                label="Password"
                name="password"
                onChange={onChange}
              />
            </FormControl>
            {error && (
              <FormControl fullWidth>
                <Typography variant="caption" color="red">
                  {error}
                </Typography>
              </FormControl>
            )}
            <Button type="submit" variant="contained">
              SignIn
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default LoginPage;

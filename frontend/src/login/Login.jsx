import React, { useState } from "react";
import {
  Button,
  Card,
  Center,
  PasswordInput,
  TextInput,
  Title,
  Text
} from "@mantine/core";
import { Lock } from "tabler-icons-react";
import { NavLink } from "react-router-dom"

const Login = ({setAdmin}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState(true);

  const validateEmail = () => {
    const pattern = /\S+@\S+\.\S+/;
    if (pattern.test(email)) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  };
  return (
    <>
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        style={{
          width: "400px",
          margin: "auto",
        }}
        withBorder
      >
        <Title
          order={2}
          size="h2"
          style={{ color: "blue", textAlign: "center" }}
        >
          Log in
        </Title>
        <TextInput
          error={errors ? "" : "Enter Valid Email id"}
          onBlur={validateEmail}
          placeholder="Email Id"
          size="xs"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label={"Email ID"}
          style={{ marginBottom: "10px" }}
          withAsterisk
        />

        <PasswordInput
          value={password}
          icon={<Lock size="1rem" />}
          placeholder="Password"
          size="xs"
          onChange={(e) => setPassword(e.target.value)}
          label={"Password"}
          style={{ marginBottom: "20px" }}
          withAsterisk
        />
        <Center>
          <Button
            variant="outline"
            style={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            Log in
          </Button>
        </Center>
        <Center style={{ marginTop: "10px" }}>
          <Text>
            if does'nt have Account ?
            <NavLink to="/register">
              <a href="#">
                Click Here
              </a>
            </NavLink>
          </Text>
        </Center>
        <Center className='Adminbtn'>
          <Button variant="outline" color="gray" uppercase onClick={(e)=>setAdmin(false)}>
            ADMIN LOGIN
          </Button>
        </Center>
      </Card>
    </>
  );
};

export default Login;

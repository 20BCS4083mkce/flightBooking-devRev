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
const Ad_Login = ({setAdmin}) => {
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
        <div>
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
                    ADMIN LOG IN
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
                <Center className='Adminbtn'>
                    <Button variant="outline" color="gray" uppercase onClick={(e)=>setAdmin(true)}>
                        USER LOGIN
                    </Button>
                </Center>
            </Card>
        </div>
    )
}

export default Ad_Login
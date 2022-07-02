import {
    Box,
    Button,
    FormControl,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    Stack,
    VStack,
    Center,
    Link,
    Flex,
} from "native-base";
import React from "react";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useMutation } from "react-query";
import { SignUp } from "../services/auth.service";
import { login } from "../store/user.slice";
import { useDispatch } from "react-redux";

export default function register() {
    const [formData, setData] = React.useState({});
    const dispatch = useDispatch();

    const finishMutation = useMutation(SignUp, {
        onSuccess: (data) => {
            // message.success("Successfully Registered!");
            console.log(data);
            dispatch(login(data));
            // navigate("/login", { replace: true });
            // queryClient.invalidateQueries("kyc-profile");
        },
        onError: (e) => {
            console.log("reached");

            console.log(e);

            // message.error("Registration Failed");
            // message.error(e.response.data.message);
        },
    });

    const onFinish = async () => {
        console.log(formData);
        // const data = {
        //     name: values.name,
        //     email: values.email,
        //     password: values.password,
        // };
        await finishMutation.mutateAsync(formData);
    };

    return (
        <>
            {/* <Navbar /> */}
            <Flex
                direction="row"
                alignItems={"center"}
                justifyContent="center"
                height={"100vh"}
            >
                {/* <HStack> */}
                <VStack
                    safeArea
                    // mt={150}
                    width={"30%"}
                    // shadow="6"
                    p={10}
                    borderRadius={12}
                >
                    <Heading size="lg" color="purple.800">
                        What are you waiting for? Sign up today!
                    </Heading>
                    <Heading color="muted.400" size="xs" fontWeight={400}>
                        Already have an account?{" "}
                        <Link href="/login">Login</Link>
                    </Heading>
                    <VStack space={2} mt={5}>
                        <FormControl>
                            <Input
                                placeholder="Name"
                                variant="filled"
                                size="xl"
                                borderRadius={6}
                                onChangeText={(value) =>
                                    setData({ ...formData, name: value })
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                placeholder="Email"
                                variant="filled"
                                size="xl"
                                borderRadius={6}
                                onChangeText={(value) =>
                                    setData({ ...formData, email: value })
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                type="password"
                                placeholder="Password"
                                variant="filled"
                                size="xl"
                                borderRadius={6}
                                //   backgroundColor={"white"}
                                onChangeText={(value) =>
                                    setData({ ...formData, password: value })
                                }
                            />
                        </FormControl>

                        <VStack space={2} mt={5}>
                            <Button
                                bg="#6E34B8"
                                _text={{
                                    color: "white",
                                }}
                                htmlType="submit"
                                onPress={onFinish}
                            >
                                Sign Up
                            </Button>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack
                    safeArea
                    width={"30%"}
                    bgColor={"#6E34B8"}
                    p={20}
                    borderRadius={"1rem"}
                >
                    <Image
                        src="/images/whitelogo.svg"
                        width={200}
                        height={200}
                    />
                </VStack>
                {/* </HStack> */}
            </Flex>
        </>
    );
}

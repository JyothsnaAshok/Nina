import React from "react";
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
import Image from "next/image";
import { useMutation } from "react-query";
import { SignIn } from "../services/auth.service";
import { login } from "../store/user.slice";
import { useDispatch } from "react-redux";

export default function loginPage() {
    const [formData, setData] = React.useState({});
    const dispatch = useDispatch();

    const finishMutation = useMutation(SignIn, {
        onSuccess: (data) => {
            console.log(data);
            dispatch(login(data));
        },
        onError: (e) => {
            console.log(e);
        },
    });

    const onFinish = async () => {
        console.log(formData);
        await finishMutation.mutateAsync(formData);
    };

    return (
        <Flex
            direction="row"
            alignItems={"center"}
            justifyContent="center"
            backgroundColor={"purple.50"}
            height={"100vh"}
        >
            {/* <HStack> */}
            <VStack
                safeArea
                // mt={150}
                width={"40%"}
                // shadow="6"
                p={10}
                borderRadius={12}
            >
                <Heading size="lg" color="purple.800">
                    Welcome Back
                </Heading>
                <Heading color="muted.400" size="xs">
                    Don't have an account?{" "}
                    <Link href="/register">Register</Link>
                </Heading>

                <VStack space={2} mt={5}>
                    <FormControl>
                        <Input
                            placeholder="Email"
                            //   variant="filled"
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
                            //   variant="filled"
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
                            colorScheme="purple"
                            _text={{
                                color: "white",
                            }}
                            htmlType="submit"
                            onPress={onFinish}
                        >
                            Sign In
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
            <VStack safeArea width={"40%"}>
                <Image src="/images/reg.svg" width={250} height={250} />
            </VStack>
            {/* </HStack> */}
        </Flex>
    );
}

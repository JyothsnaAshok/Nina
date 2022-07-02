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
    useToast,
} from "native-base";
import Image from "next/image";
import { useMutation } from "react-query";
import { SignIn } from "../services/auth.service";
import { login } from "../store/user.slice";
import { useDispatch } from "react-redux";

export default function loginPage() {
    const [formData, setData] = React.useState({});
    const dispatch = useDispatch();
    const toast = useToast();

    const finishMutation = useMutation(SignIn, {
        onSuccess: (data) => {
            console.log(data);
            dispatch(login(data));
            toast.show({
                description: "Logged in successfully",
            });
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
                    Missing us already? Log in to continue
                </Heading>
                <Heading color="muted.400" size="xs" fontWeight={400}>
                    Don't have an account?{" "}
                    <Link href="/register">Register</Link>
                </Heading>

                <VStack space={2} mt={5}>
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
                            Sign In
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
                <Image src="/images/whitelogo.svg" width={200} height={200} />
            </VStack>
            {/* </HStack> */}
        </Flex>
    );
}

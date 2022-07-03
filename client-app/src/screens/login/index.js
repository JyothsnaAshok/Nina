import React from "react";
import {
    NativeBaseProvider,
    Box,
    Center,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Text,
    Flex,
    Stack,
    Image,
    Icon,
    useToast,
} from "native-base";
import logo from "../../../assets/logo.png";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useMutation } from "react-query";
import { SignIn } from "../../services/auth.service";
import { login } from "../../store/user.slice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
    const [show, setShow] = React.useState(false);

    const [formData, setData] = React.useState({});
    const dispatch = useDispatch();
    const toast = useToast();

    const finishMutation = useMutation(SignIn, {
        onSuccess: async (data) => {
            dispatch(login(data));
            await AsyncStorage.setItem("token", data.token);
            toast.show({
                description: "Logged in successfully",
            });
        },
        onError: (e) => {
            console.log(e);
        },
    });

    const onFinish = async () => {
        await finishMutation.mutateAsync(formData);
    };

    return (
        <Center flex={1} px="3" bgColor={"#ffffff"}>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <VStack alignItems="center" mb={10}>
                        <Image
                            source={logo}
                            alt="logo"
                            // width={{ base: "155", lg: "250" }}
                            mb={"3"}
                        />
                        <Text
                            fontSize={"3xl"}
                            width={"80%"}
                            textAlign="center"
                            color="#6E34B8"
                        >
                            So glad to have you back!
                        </Text>
                    </VStack>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <Input
                                placeholder="Email"
                                onChangeText={(value) =>
                                    setData({ ...formData, email: value })
                                }
                                InputLeftElement={
                                    <Icon
                                        ml="3"
                                        as={<AntDesign name="user" />}
                                    />
                                }
                                borderRadius={10}
                                bg="#F2F2F2"
                                borderColor={"#F2F2F2"}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                borderRadius={10}
                                bg="#F2F2F2"
                                borderColor={"#F2F2F2"}
                                InputLeftElement={
                                    <Icon ml="3" as={<Feather name="key" />} />
                                }
                                InputRightElement={
                                    <Icon
                                        mr="3"
                                        onPress={() => setShow(!show)}
                                        as={
                                            <Feather
                                                name={show ? "eye" : "eye-off"}
                                            />
                                        }
                                    />
                                }
                                onChangeText={(value) =>
                                    setData({ ...formData, password: value })
                                }
                            />
                        </FormControl>

                        <Button
                            mt="2"
                            bg="violet.700"
                            borderRadius={10}
                            htmlType="submit"
                            onPress={onFinish}
                        >
                            Sign in
                        </Button>

                        <HStack mt="40" justifyContent="center">
                            <Text
                                fontSize="sm"
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                            >
                                New here?{" "}
                            </Text>
                            <Link
                                _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                }}
                                onPress={() => navigation.navigate("Signup")}
                            >
                                Sign Up
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </Center>
    );
}

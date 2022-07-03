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
import { useMutation } from "react-query";
import { SignUp } from "../../services/auth.service";
import { login } from "../../store/user.slice";
import logo from "../../../assets/logo.png";
import { useDispatch } from "react-redux";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function Signup({ navigation }) {
    const [formData, setData] = React.useState({});
    const dispatch = useDispatch();
    const toast = useToast();

    const finishMutation = useMutation(SignUp, {
        onSuccess: (data) => {
            console.log(data);
            toast.show({
                description: "Registered in successfully",
            });
            navigation.navigate("Login");
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

    const [show, setShow] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);
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
                            fontSize={"2xl"}
                            width={"90%"}
                            textAlign="center"
                            color="#6E34B8"
                        >
                            What are you waiting for? Sign up today!
                        </Text>
                    </VStack>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <Input
                                placeholder="Name"
                                onChangeText={(value) =>
                                    setData({ ...formData, name: value })
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
                                placeholder="Email"
                                InputLeftElement={
                                    <Icon
                                        ml="3"
                                        as={<AntDesign name="mail" />}
                                    />
                                }
                                onChangeText={(value) =>
                                    setData({ ...formData, email: value })
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
                                onChangeText={(value) =>
                                    setData({ ...formData, password: value })
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
                            />
                        </FormControl>
                        <Button
                            mt="2"
                            bg="violet.700"
                            borderRadius={10}
                            onPress={onFinish}
                        >
                            Sign up
                        </Button>

                        <HStack mt="40" justifyContent="center">
                            <Text
                                fontSize="sm"
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                            >
                                Already a user?{" "}
                            </Text>
                            <Link
                                _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Sign In
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </Center>
    );
}

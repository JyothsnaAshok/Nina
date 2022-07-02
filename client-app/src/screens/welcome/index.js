import React from "react";
import { Box, Image, Pressable, Text, VStack } from "native-base";
import logo from "../../../assets/logo.png";

export default function Welcome({ navigation }) {
    return (
        <Box flex="1" bgColor={"#ffffff"}>
            <VStack alignItems="center" flex="1" justifyContent="center">
                <Image
                    source={logo}
                    alt="logo"
                    // width={{ base: "155", lg: "250" }}
                    mb={"3"}
                />
                <Text
                    fontSize={"2xl"}
                    width={"70%"}
                    textAlign="center"
                    color="#6E34B8"
                    mt={{ base: "0", lg: "6" }}
                >
                    Feel the Support while investing
                </Text>
            </VStack>

            <Box mb="8" alignItems="center">
                <Pressable
                    bgColor="#6E34B8"
                    _pressed={{
                        bg: "trueGray.800",
                    }}
                    flexDir="row"
                    width="90%"
                    height={60}
                    p="3"
                    borderRadius={10}
                    alignItems="center"
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text
                        flex="1"
                        textAlign="center"
                        color="white"
                        fontSize="lg"
                        fontWeight="semibold"
                    >
                        Register
                    </Text>
                </Pressable>
            </Box>
            <Box mb="70" alignItems="center" borderColor="violet.500">
                <Pressable
                    _pressed={{
                        bg: "trueGray.800",
                    }}
                    flexDir="row"
                    width="90%"
                    height={60}
                    p="3"
                    borderWidth={"2"}
                    borderColor="#6E34B8"
                    borderRadius={10}
                    alignItems="center"
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text
                        flex="1"
                        textAlign="center"
                        color="#6E34B8"
                        fontSize="lg"
                        fontWeight="semibold"
                    >
                        Sign In
                    </Text>
                </Pressable>
            </Box>
        </Box>
    );
}

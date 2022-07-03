import React, { useState } from "react";
import {
    Box,
    Image,
    Pressable,
    Text,
    TextArea,
    VStack,
    Avatar,
    HStack,
    Flex,
    Icon,
    Button,
    Center,
    Heading,
    Divider,
    Link,
} from "native-base";
import logo from "../../../assets/logo.png";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SwipeablePanel } from "rn-swipeable-panel";
import { StyleSheet, ScrollView } from "react-native";

export default function Home({ navigation }) {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HStack alignItems={"center"}>
                    <Box px="4">
                        <Icon
                            as={<Ionicons name="arrow-back-outline" />}
                            size={"xl"}
                            color="#6E34B8"
                            onPress={() => navigation.goBack()}
                        />
                    </Box>
                    <Box alignItems="center">
                        <Flex
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <VStack mb={6}>
                                <Text
                                    fontSize={"3xl"}
                                    width={"100%"}
                                    color="#6E34B8"
                                    mt={10}
                                >
                                    Settings
                                </Text>
                                <Text
                                    width={"100%"}
                                    color="#828282"
                                    fontSize={"md"}
                                >
                                    Take control here!
                                </Text>
                            </VStack>
                        </Flex>
                    </Box>
                </HStack>
                <Box flex="1" px="4" mt={30} alignItems="center">
                    <Avatar
                        alignItems={"center"}
                        bg="green.500"
                        size={150}
                        source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                    >
                        AJ
                    </Avatar>
                    <Button
                        borderRadius={10}
                        bgColor="#6E34B8"
                        mt="3"
                        size={"sm"}
                    >
                        <HStack alignItems={"center"}>
                            <Text mr="2" color={"#fff"}>
                                Edit Profile Picture
                            </Text>
                            <Icon
                                as={<AntDesign name="edit" size={20} />}
                                color="#fff"
                            />
                        </HStack>
                    </Button>
                </Box>
                <Box mt={30} alignItems="center">
                    <Button
                        width={"80%"}
                        size="lg"
                        bgColor={"transparent"}
                        borderColor={"#6E34B8"}
                        borderWidth={1}
                        _text={{ color: "#6E34B8" }}
                    >
                        Edit Profile Details
                    </Button>
                    <Button
                        width={"80%"}
                        size="lg"
                        mt={5}
                        bgColor={"transparent"}
                        borderColor={"#6E34B8"}
                        borderWidth={1}
                        _text={{ color: "#6E34B8" }}
                    >
                        Change Password
                    </Button>
                    <Button
                        width={"80%"}
                        size="lg"
                        mt={5}
                        bgColor={"transparent"}
                        borderColor={"#6E34B8"}
                        borderWidth={1}
                        _text={{ color: "#6E34B8" }}
                    >
                        About Us
                    </Button>
                </Box>
            </ScrollView>
        </>
    );
}

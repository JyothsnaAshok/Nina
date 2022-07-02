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
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
    });
    const [isPanelActive, setIsPanelActive] = useState(false);

    const closePanel = () => {
        setIsPanelActive(false);
    };

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box flex="1" px="4" mt="20">
                    <Icon
                        as={<Ionicons name="arrow-back-outline" />}
                        size={"xl"}
                        color="#6E34B8"
                        onPress={() => navigation.goBack()}
                    />
                </Box>

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
                    <Heading
                        fontSize={"3xl"}
                        width={"100%"}
                        color="#6E34B8"
                        mt="4"
                        textAlign={"center"}
                    >
                        Jyothsna Ashok
                    </Heading>
                </Box>
                <Box
                    flex="1"
                    px="4"
                    mt={30}
                    alignItems="center"
                    justifyContent={"center"}
                >
                    <HStack alignItems={"center"}>
                        <Text mr={"2"}>Followed by</Text>
                        <Avatar.Group
                            _avatar={{
                                size: "10",
                            }}
                            max={3}
                        >
                            <Avatar
                                bg="green.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                }}
                            >
                                AJ
                            </Avatar>
                            <Avatar
                                bg="cyan.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                }}
                            >
                                TE
                            </Avatar>
                            <Avatar
                                bg="indigo.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                }}
                            >
                                JB
                            </Avatar>
                            <Avatar
                                bg="amber.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                }}
                            >
                                TS
                            </Avatar>
                            <Avatar
                                bg="green.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                }}
                            >
                                AJ
                            </Avatar>
                            <Avatar
                                bg="cyan.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                }}
                            >
                                TE
                            </Avatar>
                            <Avatar
                                bg="indigo.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                }}
                            >
                                JB
                            </Avatar>
                            <Avatar
                                bg="amber.500"
                                source={{
                                    uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                }}
                            >
                                TS
                            </Avatar>
                        </Avatar.Group>
                    </HStack>
                </Box>
                <Box mt="10">
                    <HStack alignSelf={"center"}>
                        <VStack alignItems={"center"} px="3">
                            <Text fontSize="3xl" mr={"2"}>
                                1K
                            </Text>
                            <Text fontSize="xl" mr={"2"}>
                                Followers
                            </Text>
                        </VStack>
                        <Divider orientation="vertical" />
                        <VStack alignItems={"center"} px="3">
                            <Text fontSize="3xl" mr={"2"}>
                                100
                            </Text>
                            <Text fontSize="xl" mr={"2"}>
                                Following
                            </Text>
                        </VStack>
                    </HStack>
                </Box>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#272246",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 0,
    },
});

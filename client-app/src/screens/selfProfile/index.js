import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    Avatar,
    HStack,
    Flex,
    Icon,
    Heading,
    Divider,
    Fab,
    Link,
} from "native-base";
import logo from "../../../assets/logo.png";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ScrollView } from "react-native";
import { UserData } from "../../services/auth.service";
import { GetAllStocks, SendStock } from "../../services/stocks.service";

export default function Home({ navigation }) {
    const queryClient = useQueryClient();

    // const [showModal, setShowModal] = useState(false);

    const { data: user } = useQuery("user", UserData);
    console.log(user, "user");

    const { data: portfolio } = useQuery("portfolio", GetSelfPortfolio);
    console.log(portfolio, "portfolio");
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box flex="1" px="4" mt="20">
                    <HStack alignItems={"center"}>
                        <Icon
                            as={<Ionicons name="arrow-back-outline" />}
                            size={"xl"}
                            color="#6E34B8"
                            onPress={() => navigation.goBack()}
                        />
                        <Text color="#6e34b8" fontSize={"xl"} ml="4" mr="65%">
                            My Profile
                        </Text>
                        <Icon
                            as={<AntDesign name="setting" />}
                            size={"xl"}
                            color="#6E34B8"
                            onPress={() => navigation.navigate("Settings")}
                        />
                    </HStack>
                </Box>

                <VStack>
                    <Box flex="1" px="4" mt={100} alignItems="center">
                        <Avatar
                            alignItems={"center"}
                            bg="green.500"
                            size={150}
                            source={{
                                uri:
                                    user?.avatar?.url ||
                                    "https://res.cloudinary.com/desoyd8gm/image/upload/v1656820924/default-avatar_jx9py0.jpg",
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
                            {user?.name}
                        </Heading>
                    </Box>
                </VStack>
                <VStack>
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
                                    {user?.followers.length}
                                </Text>
                                <Text fontSize="xl" mr={"2"}>
                                    Followers
                                </Text>
                            </VStack>
                            <Divider orientation="vertical" />
                            <VStack alignItems={"center"} px="3">
                                <Text fontSize="3xl" mr={"2"}>
                                    {user?.followers.length}
                                </Text>
                                <Text fontSize="xl" mr={"2"}>
                                    Following
                                </Text>
                            </VStack>
                        </HStack>
                        <Fab
                            onPress={() => {
                                navigation.navigate("CreatePortfolio");
                            }}
                            bgColor={"#6E34B8"}
                            shadow={2}
                            size="sm"
                            icon={
                                <Icon
                                    color="white"
                                    as={AntDesign}
                                    name="plus"
                                    size="sm"
                                />
                            }
                        />
                    </Box>
                </VStack>
                <VStack mt="10">
                    <Heading fontSize="xl" mb="2" textAlign={"center"}>
                        My Portfolios
                    </Heading>
                    <Box width={"90%"} p="4" _text={{ fontSize: 40 }}>
                        <Heading>Demo</Heading>
                        <Text>Description</Text>
                        <Link>View More</Link>
                    </Box>
                    {portfolio ? (
                        <Box>
                            <Heading>Demo</Heading>
                            <Text>Description</Text>
                            <Link>View More</Link>
                        </Box>
                    ) : (
                        <Text
                            textAlign={"center"}
                            fontSize={20}
                            fontWeight={300}
                            mt="10"
                        >
                            Uh Oh! We Couldnt find any Portfolios :/
                        </Text>
                    )}
                </VStack>
            </ScrollView>
        </>
    );
}

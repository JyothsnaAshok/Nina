import {
    Box,
    HStack,
    Icon,
    Text,
    VStack,
    ListItem,
    Container,
    Content,
    Header,
    Radio,
    Avatar,
    Button,
    Center,
    Image,
    Input,
} from "native-base";
import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";
import { BiImageAdd, BiSearch } from "react-icons/bi";

// import Image from "next/image";

export default function explore() {
    return (
        <>
            <Navbar />
            <HStack p={10}>
                <VStack m={5} w={"25rem"}>
                    <Box
                        // maxW="80"
                        // width="30%"
                        rounded="lg"
                        // overflow="hidden"
                        padding={4}
                        height={"100%"}
                    >
                        <Text
                            color="coolGray.500"
                            textDecoration={"underline 2px solid"}
                            textDecorationColor="coolGray.500"
                            py={6}
                        >
                            Sort
                            <Icon
                                m="5"
                                size="8"
                                color="coolGray.500"
                                as={
                                    <AiOutlineFire
                                        style={{ marginLeft: "0.5rem" }}
                                    />
                                }
                            />
                        </Text>
                    </Box>
                </VStack>
                <VStack w={"55rem"}>
                    <Container shadow={1} px={8} width="100%" borderRadius={12}>
                        <HStack
                            display={"flex"}
                            justifyContent="space-between"
                            alignItems={"center"}
                        >
                            <HStack
                                display={"flex"}
                                justifyContent="space-between"
                                alignItems={"center"}
                            >
                                <Avatar
                                    my={"1rem"}
                                    bg="indigo.500"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                    }}
                                    size="sm"
                                >
                                    JB
                                </Avatar>
                                <VStack>
                                    <Text bold px={4}>
                                        Username Gandhi
                                    </Text>
                                    <Text
                                        color={"#6E34B8"}
                                        px={4}
                                        fontSize={12}
                                    >
                                        by Username Gandhi
                                    </Text>
                                </VStack>
                            </HStack>
                        </HStack>
                        <Text px={"10"} py={"2"}>
                            🚀 A Penny Stock That Tripled Investors' Money In A
                            Year
                        </Text>
                        <HStack px={"10"} py={"2"}>
                            <Text color={"coolGray.400"}>
                                Followed by: 234325
                            </Text>
                        </HStack>
                    </Container>
                </VStack>
                <VStack m={5} w={"25rem"}>
                    <Box
                        borderColor="coolGray.200"
                        borderWidth="1"
                        padding={4}
                        rounded="lg"
                        height={"100%"}
                    >
                        <VStack width="100%" space={5} alignSelf="center">
                            <Text>Search</Text>
                            <Input
                                placeholder="Search Portfolios"
                                borderRadius="6"
                                InputLeftElement={
                                    <Icon
                                        m="5"
                                        size="6"
                                        color="gray.400"
                                        as={
                                            <BiSearch
                                                style={{ marginLeft: "1rem" }}
                                            />
                                        }
                                    />
                                }
                            />
                        </VStack>
                    </Box>
                </VStack>
            </HStack>
        </>
    );
}

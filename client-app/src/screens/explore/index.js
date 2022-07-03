import React from "react";
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
} from "native-base";
import logo from "../../../assets/logo.png";
import { AntDesign, Feather } from "@expo/vector-icons";
import { SwipeablePanel } from "rn-swipeable-panel";
import { StyleSheet, ScrollView } from "react-native";

export default function Explore({ navigation }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    return (
        <>
            {isDesktop ? (
                <>
                    <Navbar />
                    <HStack
                        p={10}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                    >
                        {/* <VStack m={5} w={"25rem"}>
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
                   </VStack> */}
                        <VStack w={"70%"}>
                            {portfolios?.map((portfolio) => (
                                <VStack
                                    // shadow={1}
                                    borderColor="coolGray.200"
                                    borderWidth="1"
                                    px={8}
                                    width="100%"
                                    borderRadius={12}
                                    m={5}
                                >
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
                                                    {portfolio.name ||
                                                        "My Portfolio"}
                                                </Text>
                                                <Text
                                                    color={"#6E34B8"}
                                                    px={4}
                                                    fontSize={12}
                                                >
                                                    by {portfolio.user.name}
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </HStack>
                                    <Text px={"10"} py={"2"}>
                                        {portfolio.description ||
                                            "🚀 A Penny Stock That Tripled Investors' Money In A Year"}
                                    </Text>
                                    <HStack px={"10"} py={"2"}>
                                        <Text color={"coolGray.400"}>
                                            Followed by:{" "}
                                            {portfolio.followers?.length ||
                                                "99+"}
                                        </Text>
                                    </HStack>
                                </VStack>
                            ))}
                        </VStack>
                        {/* <VStack w={"20%"}>
                       <Box
                           borderColor="coolGray.200"
                           borderWidth="1"
                           padding={4}
                           rounded="lg"
                           // height={"100%"}
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
                   </VStack> */}
                    </HStack>
                </>
            ) : (
                <>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Box flex="1" bgColor={"#ffffff"} px="4">
                            <Box pt="5">
                                <Flex
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <VStack mb={6}>
                                        <Text
                                            fontSize={"3xl"}
                                            width={"100%"}
                                            color="#6E34B8"
                                            mt={10}
                                        >
                                            Explore
                                        </Text>
                                        <Text
                                            width={"100%"}
                                            color="#828282"
                                            fontSize={"md"}
                                        >
                                            Look at Trending Portfolios
                                        </Text>
                                    </VStack>
                                    <Avatar
                                        bg="green.500"
                                        source={{
                                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                        }}
                                    >
                                        AJ
                                    </Avatar>
                                </Flex>
                            </Box>
                            <HStack alignItems={"center"} mt="4">
                                <Heading>Curated Pick</Heading>
                                <Icon
                                    as={<Feather name="refresh-ccw" />}
                                    ml="40"
                                />
                            </HStack>
                            <Box
                                bgColor={"#fff"}
                                mt="4"
                                p="4"
                                shadow={6}
                                borderRadius="10"
                                shadowRadius={12}
                            >
                                <HStack alignItems={"center"}>
                                    <Avatar
                                        bg="green.500"
                                        source={{
                                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                        }}
                                        size="sm"
                                    >
                                        AJ
                                    </Avatar>
                                    <VStack ml="3">
                                        <Text fontSize={"md"}>John Doe</Text>
                                        <Text fontSize={"xs"}>2 days ago</Text>
                                    </VStack>
                                    <Button bgColor={"#6E34B8"} ml="24">
                                        <HStack alignItems={"center"}>
                                            <Icon
                                                as={
                                                    <AntDesign
                                                        name="plus"
                                                        size={20}
                                                    />
                                                }
                                                color="#ffffff"
                                                mr="2"
                                            />
                                            <Text color={"#ffffff"}>
                                                Follow
                                            </Text>
                                        </HStack>
                                    </Button>
                                </HStack>
                                <Text mt="3">
                                    Hello this is a sample text. This is how a
                                    post will look like. It can also have
                                    multiple lines. Just like this
                                </Text>
                                <Center mt="4">
                                    <Image
                                        borderRadius={10}
                                        source={{
                                            uri: "https://picsum.photos/200",
                                        }}
                                        alt="Alternate Text"
                                        size="2xl"
                                    />
                                    <HStack alignItems={"center"} mt="4">
                                        <Icon
                                            as={
                                                <AntDesign
                                                    name="hearto"
                                                    size={20}
                                                />
                                            }
                                            color="#6E34B8"
                                            size={"lg"}
                                        />
                                        <Text fontSize={"md"} ml="3">
                                            100
                                        </Text>
                                    </HStack>
                                </Center>
                            </Box>
                        </Box>
                        <Box h={40} />
                    </ScrollView>
                </>
            )}
        </>
    );
}

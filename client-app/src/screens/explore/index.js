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
import moment from "moment";
import logo from "../../../assets/logo.png";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SwipeablePanel } from "rn-swipeable-panel";
import { StyleSheet, ScrollView } from "react-native";
import { GetTrendPosts } from "../../services/feed.service";

export default function Explore({ navigation }) {
    const { data: trends } = useQuery("trends", GetTrendPosts);
    console.log(trends, "trends");

    const getRandomPost = () => {
        const randomIndex = Math.floor(Math.random() * trends.length);
        return trends[randomIndex];
    };

    const [randomPost, setRandomPost] = React.useState(getRandomPost());
    console.log(randomPost, "randomPost");
    return (
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
                        size={"xl"}
                        onPress={() => setRandomPost(getRandomPost())}
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
                            <Text fontSize={"md"}>{randomPost.user.name}</Text>
                            <Text fontSize={"xs"}>
                                {moment(randomPost.createdAt).fromNow()}
                            </Text>
                        </VStack>
                        <Button bgColor={"#6E34B8"} ml="24">
                            <HStack alignItems={"center"}>
                                <Icon
                                    as={<AntDesign name="plus" size={20} />}
                                    color="#ffffff"
                                    mr="2"
                                />
                                <Text color={"#ffffff"}>Follow</Text>
                            </HStack>
                        </Button>
                    </HStack>
                    <Text mt="3">{randomPost.text}</Text>
                    <Center mt="4">
                        {randomPost.image && (
                            <Image
                                borderRadius={10}
                                source={{ uri: randomPost.image.url }}
                                alt="Alternate Text"
                                size="2xl"
                            />
                        )}
                        <HStack alignItems={"center"} mt="4">
                            <Icon
                                as={<AntDesign name="hearto" size={20} />}
                                color="#6E34B8"
                                size={"lg"}
                            />
                            <Text fontSize={"md"} ml="3">
                                {randomPost.likedBy.length}
                            </Text>
                        </HStack>
                    </Center>
                </Box>
            </Box>
            <Box h={40} />
        </ScrollView>
    );
}

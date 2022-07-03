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
    useToast,
    Button,
    Center,
    Heading,
} from "native-base";
import moment from "moment";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SwipeablePanel } from "rn-swipeable-panel";
import useMediaQuery from "../../hooks/useMediaQuery";
import { StyleSheet, ScrollView } from "react-native";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";
import {
    GetTrendPosts,
    UpdateFollow,
    UpdateUnfollow,
} from "../../services/feed.service";

export default function Explore({ navigation }) {
    const { data: trends } = useQuery("trends", GetTrendPosts);

    const [follow, setFollow] = React.useState({});

    const toast = useToast();

    const QueryClient = useQueryClient();

    const getRandomPost = () => {
        const randomIndex = Math.floor(Math.random() * trends.length);
        return trends[randomIndex];
    };

    const isDesktop = useMediaQuery("(min-width: 960px)");

    const [randomPost, setRandomPost] = React.useState(getRandomPost());

    const followMutation = useMutation(UpdateFollow, {
        onSuccess: (data) => {
            toast.show({
                description: "Followed",
            });
            QueryClient.invalidateQueries("posts");
        },
        onError: (e) => {
            toast.show({
                description:
                    e?.response.data.errors[0].message || "Some Error Occured",
            });
            console.log(e);
        },
    });

    const unfollowMutation = useMutation(UpdateUnfollow, {
        onSuccess: (data) => {
            console.log(data);
            toast.show({
                description: "Unfollowed",
            });
            QueryClient.invalidateQueries("posts");
        },
        onError: (e) => {
            toast.show({
                description:
                    e?.response.data.errors[0].message || "Some Error Occured",
            });
            console.log(e);
        },
    });
    const onFollow = async (id) => {
        await followMutation.mutateAsync(id);
    };

    const onUnfollow = async (id) => {
        await unfollowMutation.mutateAsync(id);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Box flex="1" bgColor={"#ffffff"} px="4" mt={isDesktop ? "10" : 0}>
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
                            <HStack>
                                <Button
                                    onPress={
                                        // () =>
                                        // onFollow(posts[index]?.user._id)
                                        randomPost?.followedByUser
                                            ? () => {
                                                  onUnfollow(
                                                      randomPost?.user._id
                                                  );
                                                  setFollow(false);
                                              }
                                            : () => {
                                                  onFollow(
                                                      randomPost?.user._id
                                                  );
                                                  setFollow(true);
                                              }
                                    }
                                    variant={"outline"}
                                    borderRadius="6"
                                    py={1}
                                    width={"8rem"}
                                    rightIcon={
                                        <Icon
                                            size="5"
                                            color="coolGray.500"
                                            as={
                                                <AiOutlinePlus
                                                    style={{
                                                        marginLeft: "0.5rem",
                                                        fontSize: "1rem",
                                                        color: "#1d1d1d",
                                                    }}
                                                />
                                            }
                                        />
                                    }
                                >
                                    <Text color="#1d1d1d">
                                        {randomPost?.followedByUser
                                            ? "Unfollow"
                                            : "Follow"}
                                        {/* {follow ? "Unfollow" : "Follow"} */}
                                    </Text>
                                </Button>
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

import React, { useState } from "react";
import {
    Flex,
    Button,
    Center,
    Image,
    HStack,
    Text,
    Heading,
    Box,
    VStack,
    TextArea,
    Avatar,
    Icon,
    FormControl,
    useToast,
    Skeleton,
} from "native-base";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { AntDesign, Feather } from "@expo/vector-icons";
import { SwipeablePanel } from "rn-swipeable-panel";
import { StyleSheet, ScrollView, Platform } from "react-native";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
    GetPosts,
    GetTrendPosts,
    SendPost,
    UpdateFollow,
    UpdateUnfollow,
    LikePost,
    UnlikePost,
} from "../../services/feed.service";
import DocumentPicker from "react-native-document-picker";
import { useMutation, useQuery, useQueryClient } from "react-query";
// import Navbar from "../../components/Navbar";
import { BsSuitHeartFill, BsChatLeftQuote } from "react-icons/bs";
import { BiImageAdd, BiSearch } from "react-icons/bi";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";

export default function Home({ navigation }) {
    //API calls for the web version of our home page
    const [formData, setData] = React.useState({});
    const [singleFile, setSingleFile] = useState(null);
    const [follow, setFollow] = React.useState({});
    const toast = useToast();
    const QueryClient = useQueryClient();

    const finishMutation = useMutation(SendPost, {
        onSuccess: (data) => {
            toast.show({
                description: "Post sent successfully",
            });
        },
        onError: (e) => {
            console.log(e);
        },
    });

    const onFinish = async () => {
        await finishMutation.mutateAsync(formData);
        closePanel();
        QueryClient.invalidateQueries("posts");
    };

    const { data: posts, isPostLoading } = useQuery("posts", GetPosts);

    if (isPostLoading) {
        return (
            <Center>
                <Skeleton />
            </Center>
        );
    }

    const { data: trends } = useQuery("trends", GetTrendPosts);

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

    const likeMutation = useMutation(LikePost, {
        onSuccess: (data) => {
            toast.show({
                description: "Liked",
            });
            QueryClient.invalidateQueries("posts");
        },
        onError: (e) => {
            console.log(e);
        },
    });

    const unlikeMutation = useMutation(UnlikePost, {
        onSuccess: (data) => {
            toast.show({
                description: "Unliked",
            });
            QueryClient.invalidateQueries("posts");
        },
        onError: (e) => {
            console.log(e);
        },
    });

    const onLike = async (id) => {
        await likeMutation.mutateAsync(id);
    };
    const onUnlike = async (id) => {
        await unlikeMutation.mutateAsync(id);
    };
    const onFollow = async (id) => {
        await followMutation.mutateAsync(id);
    };

    const onUnfollow = async (id) => {
        await unfollowMutation.mutateAsync(id);
    };
    //ends here

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

    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <>
            {isDesktop ? (
                <>
                    {/* <Navbar /> */}
                    <Box
                        pt="5"
                        bgColor={"#ffffff"}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mt={isDesktop ? "10" : 0}
                    >
                        <Flex
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            w={"90%"}
                        >
                            <VStack mb={6}>
                                <Text
                                    fontSize={"3xl"}
                                    width={"100%"}
                                    color="#6E34B8"
                                    mt={10}
                                >
                                    Your Feed
                                </Text>
                                <Text
                                    width={"100%"}
                                    color="#828282"
                                    fontSize={"md"}
                                >
                                    Get access to our community
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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <HStack p={10}>
                            <VStack m={5} w={"25rem"}>
                                <Box
                                    rounded="lg"
                                    borderColor="coolGray.200"
                                    borderWidth="1"
                                    padding={4}
                                    height={"100%"}
                                >
                                    <Text
                                        color="coolGray.500"
                                        textDecoration={"underline 2px solid"}
                                        textDecorationColor="coolGray.500"
                                        py={6}
                                    >
                                        Trending Posts
                                        <Icon
                                            m="5"
                                            size="8"
                                            color="coolGray.500"
                                            as={
                                                <AiOutlineFire
                                                    style={{
                                                        marginLeft: "0.5rem",
                                                    }}
                                                />
                                            }
                                        />
                                    </Text>
                                    {trends?.map((item, index) => (
                                        <HStack
                                            display={"flex"}
                                            justifyContent="space-between"
                                            alignItems={"center"}
                                            key={index}
                                        >
                                            <VStack pr={10} pb={5}>
                                                <Text color="black" bold>
                                                    {item?.text.slice(0, 40)}
                                                    {"...."}
                                                </Text>
                                                <Text color="coolGray.500">
                                                    by {item?.user.name}
                                                </Text>
                                            </VStack>
                                            <VStack>
                                                <BsSuitHeartFill />
                                            </VStack>
                                        </HStack>
                                    ))}
                                </Box>
                            </VStack>

                            <VStack m={5} w={"50rem"}>
                                <Box
                                    rounded="lg"
                                    borderColor="coolGray.200"
                                    borderWidth="1"
                                    p={12}
                                >
                                    <HStack justifyContent={"space-between"}>
                                        <Avatar
                                            bg="indigo.500"
                                            source={{
                                                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                            }}
                                        >
                                            JB
                                        </Avatar>
                                        <FormControl ml={5}>
                                            <TextArea
                                                variant={"filled"}
                                                w={"40rem"}
                                                borderRadius="6"
                                                placeholder="What's on your mind today?"
                                                onChangeText={(value) =>
                                                    setData({
                                                        ...formData,
                                                        text: value,
                                                    })
                                                }
                                            />
                                        </FormControl>
                                    </HStack>
                                    <HStack alignItems={"center"} ml={12}>
                                        <Button
                                            // rounded="3xl"
                                            borderRadius="6"
                                            bg={"#6E34B8"}
                                            w={"8rem"}
                                            my={5}
                                            // ml={"4rem"}
                                            onPress={onFinish}
                                        >
                                            Post
                                        </Button>
                                    </HStack>
                                </Box>

                                <Box
                                    // maxW="80"
                                    // width="30%"
                                    rounded="lg"
                                    // overflow="hidden"
                                    borderColor="coolGray.200"
                                    borderWidth="1"
                                    padding={4}
                                    my={10}
                                    height={"100%"}
                                >
                                    <Text
                                        color="coolGray.500"
                                        textDecoration={"underline 2px solid"}
                                        textDecorationColor="coolGray.500"
                                        py={6}
                                    >
                                        Feed
                                        <Icon
                                            m="5"
                                            size="8"
                                            color="coolGray.500"
                                            as={
                                                <BsChatLeftQuote
                                                    style={{
                                                        marginLeft: "0.5rem",
                                                    }}
                                                />
                                            }
                                        />
                                    </Text>
                                    {posts?.map((item, index) => (
                                        <VStack
                                            key={index}
                                            paddingBottom={5}
                                            borderBottomWidth={1}
                                            borderBottomColor="coolGray.200"
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
                                                    <Text bold px={4}>
                                                        {
                                                            posts[index]?.user
                                                                .name
                                                        }
                                                    </Text>
                                                </HStack>

                                                <HStack>
                                                    <Button
                                                        onPress={
                                                            // () =>
                                                            // onFollow(posts[index]?.user._id)
                                                            posts[index]
                                                                ?.followedByUser
                                                                ? () => {
                                                                      onUnfollow(
                                                                          posts[
                                                                              index
                                                                          ]
                                                                              ?.user
                                                                              ._id
                                                                      );
                                                                      setFollow(
                                                                          false
                                                                      );
                                                                  }
                                                                : () => {
                                                                      onFollow(
                                                                          posts[
                                                                              index
                                                                          ]
                                                                              ?.user
                                                                              ._id
                                                                      );
                                                                      setFollow(
                                                                          true
                                                                      );
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
                                                                            marginLeft:
                                                                                "0.5rem",
                                                                            fontSize:
                                                                                "1rem",
                                                                            color: "#1d1d1d",
                                                                        }}
                                                                    />
                                                                }
                                                            />
                                                        }
                                                    >
                                                        <Text color="#1d1d1d">
                                                            {posts[index]
                                                                ?.followedByUser
                                                                ? "Unfollow"
                                                                : "Follow"}
                                                            {/* {follow ? "Unfollow" : "Follow"} */}
                                                        </Text>
                                                    </Button>
                                                </HStack>
                                            </HStack>
                                            <Text px={"10"} py={"2"}>
                                                {posts[index]?.text}
                                            </Text>
                                            <Center py="5">
                                                <Image
                                                    width={"38rem"}
                                                    height={"10rem"}
                                                    source={{
                                                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                                                    }}
                                                    borderRadius="6"
                                                />
                                            </Center>
                                        </VStack>
                                    ))}
                                </Box>
                            </VStack>
                        </HStack>
                    </ScrollView>
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
                                            Your Feed
                                        </Text>
                                        <Text
                                            width={"100%"}
                                            color="#828282"
                                            fontSize={"md"}
                                        >
                                            Get access to our community
                                        </Text>
                                    </VStack>
                                    <VStack>
                                        <Button
                                            variant="unstyled"
                                            onPress={() =>
                                                navigation.navigate(
                                                    "SelfProfile"
                                                )
                                            }
                                            p={0}
                                        >
                                            <Avatar
                                                bg="green.500"
                                                source={{
                                                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                                }}
                                            >
                                                AJ
                                            </Avatar>
                                        </Button>
                                    </VStack>
                                </Flex>
                            </Box>

                            <Box>
                                <HStack alignItems="space-between">
                                    <Button
                                        bg="#6E34B8"
                                        borderRadius={10}
                                        w="100%"
                                        py="4"
                                        onPress={() => setIsPanelActive(true)}
                                    >
                                        What's on your mind today?
                                    </Button>
                                </HStack>
                            </Box>
                            <Heading mt="7">Latest Posts</Heading>
                            {posts?.length > 0 ? (
                                posts.map((post, index) => (
                                    <Box
                                        key={index}
                                        bgColor={"#fff"}
                                        mt="4"
                                        p="4"
                                        shadow={6}
                                        borderRadius="10"
                                        shadowRadius={12}
                                    >
                                        <HStack alignItems={"center"}>
                                            <Flex
                                                direction="row"
                                                justify="space-between"
                                                alignContent="center"
                                                width={"100%"}
                                            >
                                                <HStack alignItems={"center"}>
                                                    <Button
                                                        size={50}
                                                        variant="ghost"
                                                        onPress={() =>
                                                            navigation.navigate(
                                                                "Profile"
                                                            )
                                                        }
                                                    >
                                                        <Avatar
                                                            bg="green.500"
                                                            source={{
                                                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                                            }}
                                                            size="sm"
                                                        >
                                                            AJ
                                                        </Avatar>
                                                    </Button>

                                                    <VStack>
                                                        <Text
                                                            fontSize={"md"}
                                                            maxW={100}
                                                        >
                                                            {post.user.name}
                                                        </Text>
                                                        <Text fontSize={"xs"}>
                                                            {/* find when the post was creaated */}
                                                            {moment(
                                                                post.createdAt
                                                            ).fromNow()}
                                                        </Text>
                                                    </VStack>
                                                </HStack>
                                                <VStack>
                                                    <Button
                                                        bgColor={"#6E34B8"}
                                                        onPress={
                                                            post?.followedByUser
                                                                ? () => {
                                                                      console.log(
                                                                          "Follow"
                                                                      );
                                                                      onUnfollow(
                                                                          post
                                                                              ?.user
                                                                              ._id
                                                                      );
                                                                  }
                                                                : () => {
                                                                      onFollow(
                                                                          post
                                                                              ?.user
                                                                              ._id
                                                                      );
                                                                  }
                                                        }
                                                    >
                                                        <HStack
                                                            alignItems={
                                                                "center"
                                                            }
                                                        >
                                                            <Icon
                                                                as={
                                                                    <AntDesign
                                                                        name={
                                                                            post?.followedByUser
                                                                                ? "minus"
                                                                                : "plus"
                                                                        }
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                }
                                                                color="#ffffff"
                                                                mr="2"
                                                            />
                                                            <Text
                                                                color={
                                                                    "#ffffff"
                                                                }
                                                            >
                                                                {post?.followedByUser
                                                                    ? "Unfollow"
                                                                    : "Follow"}
                                                            </Text>
                                                        </HStack>
                                                    </Button>
                                                </VStack>
                                            </Flex>
                                        </HStack>
                                        <Text mt="3">{post.text}</Text>
                                        <Center mt="4">
                                            {post.image && (
                                                <Image
                                                    borderRadius={10}
                                                    source={{
                                                        uri: post.image.url,
                                                    }}
                                                    alt="Alternate Text"
                                                    size="2xl"
                                                />
                                            )}
                                            <HStack
                                                alignItems={"center"}
                                                mt="4"
                                            >
                                                {post.likedByUser ? (
                                                    <Button
                                                        variant="unstyled"
                                                        onPress={() => {
                                                            onUnlike(post._id);
                                                        }}
                                                    >
                                                        <Icon
                                                            as={
                                                                <AntDesign
                                                                    name="heart"
                                                                    size={20}
                                                                />
                                                            }
                                                            color="#6E34B8"
                                                            size={"lg"}
                                                        />
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="unstyled"
                                                        onPress={() => {
                                                            onLike(post._id);
                                                        }}
                                                    >
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
                                                    </Button>
                                                )}
                                                <Text fontSize={"md"} ml="3">
                                                    {post.likedBy.length}
                                                </Text>
                                            </HStack>
                                        </Center>
                                    </Box>
                                ))
                            ) : (
                                <Box
                                    bgColor={"#fff"}
                                    mt="4"
                                    p="4"
                                    shadow={6}
                                    borderRadius="10"
                                    shadowRadius={12}
                                >
                                    <Text fontSize={"md"}>No posts yet.</Text>
                                </Box>
                            )}
                        </Box>
                        <Box h={40} />
                    </ScrollView>
                    <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                        <Text ml="4" fontSize={"2xl"}>
                            Share your thoughts here
                        </Text>
                        <Box alignItems="center" w="100%" mt={10} px="10">
                            <TextArea
                                h={40}
                                placeholder="Post"
                                onChangeText={(value) =>
                                    setData({ ...formData, text: value })
                                }
                            />
                            <HStack mt="5">
                                {/* <Button
                                    bgColor={"#ffffff"}
                                    _text={{
                                        color: "#6E34B8",
                                    }}
                                    borderRadius={10}
                                    borderWidth={1}
                                    w="45%"
                                    mx="4"
                                    py="4"
                                    onPress={() => {
                                        DocumentPicker.pick({
                                            allowMultiSelection: true,
                                            type: [types.doc, types.docx],
                                        })
                                            .then(setResult)
                                            .catch(handleError);
                                    }}
                                >
                                    <HStack alignItems={"center"}>
                                        <Icon
                                            as={<AntDesign name="camera" />}
                                            mr="2"
                                        />
                                        <Text>Image</Text>
                                    </HStack>
                                </Button> */}
                                <Button
                                    bgColor={"#6E34B8"}
                                    borderRadius={10}
                                    w="45%"
                                    py="3"
                                    mx="4"
                                    onPress={onFinish}
                                >
                                    Post
                                </Button>
                            </HStack>
                        </Box>
                    </SwipeablePanel>
                </>
            )}
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

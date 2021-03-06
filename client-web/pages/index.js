import React from "react";
import {
    Center,
    useColorMode,
    Tooltip,
    IconButton,
    SunIcon,
    MoonIcon,
    Image,
    HStack,
    Text,
    Heading,
    Box,
    Link,
    VStack,
    Button,
    AspectRatio,
    TextArea,
    Avatar,
    Input,
    Icon,
    FormControl,
    useToast,
} from "native-base";
import Navbar from "../components/Navbar";
import { BsSuitHeartFill, BsChatLeftQuote } from "react-icons/bs";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";
import {
    GetPosts,
    GetTrendPosts,
    SendPost,
    UpdateFollow,
    UpdateUnfollow,
} from "../services/feed.service";
import { useMutation, useQuery } from "react-query";
// import { BsSuitHeartFill } from "react-icons/bs";

// Start editing here, save and see your changes.
export default function App() {
    const [formData, setData] = React.useState({});
    const [follow, setFollow] = React.useState({});
    const toast = useToast();

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
    };

    const { data: posts } = useQuery("posts", GetPosts);

    const { data: trends } = useQuery("trends", GetTrendPosts);

    const followMutation = useMutation(UpdateFollow, {
        onSuccess: (data) => {
            toast.show({
                description: "Followed",
            });
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
        <>
            <Navbar />
            <HStack p={10}>
                <VStack m={5} w={"25rem"}>
                    <Box
                        // maxW="80"
                        // width="30%"
                        rounded="lg"
                        // overflow="hidden"
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
                                        style={{ marginLeft: "0.5rem" }}
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
                                // borderBottomWidth={1}
                                // borderBottomColor="coolGray.200"
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
                                        setData({ ...formData, text: value })
                                    }
                                />
                            </FormControl>
                        </HStack>
                        <HStack alignItems={"center"} ml={12}>
                            {/* <Button
                                variant={"outline"}
                                borderRadius="6"
                                w={"8rem"}
                                mx={5}
                            > */}
                            {/* <input type="file">
                                <Text color="#1d1d1d">
                                Upload
                                </Text>
                            </input> */}
                            {/* <input type="file" id="leftbutton">
                                Upload Image
                            </input> */}
                            {/* </Button> */}
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
                                        style={{ marginLeft: "0.5rem" }}
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
                                            {posts[index]?.user.name}
                                        </Text>
                                    </HStack>

                                    <HStack>
                                        <Button
                                            onPress={
                                                // () =>
                                                // onFollow(posts[index]?.user._id)
                                                posts[index]?.followedByUser
                                                    ? () => {
                                                          onUnfollow(
                                                              posts[index]?.user
                                                                  ._id
                                                          );
                                                          setFollow(false);
                                                      }
                                                    : () => {
                                                          onFollow(
                                                              posts[index]?.user
                                                                  ._id
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
                                                {posts[index]?.followedByUser
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
                {/* <VStack m={5} w={"25rem"}>
                    <Box
                        borderColor="coolGray.200"
                        borderWidth="1"
                        padding={4}
                        rounded="lg"
                        height={"100%"}
                    >
                        <VStack w="100%" space={5} alignSelf="center">
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
    );
}
// Color Switch Component
function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Tooltip
            label={
                colorMode === "dark" ? "Enable light mode" : "Enable dark mode"
            }
            placement="bottom right"
            openDelay={300}
            closeOnClick={false}
        >
            <IconButton
                position="absolute"
                top={12}
                right={8}
                onPress={toggleColorMode}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                accessibilityLabel="Color Mode Switch"
            />
        </Tooltip>
    );
}

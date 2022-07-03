import React, { useState } from "react";
import {
    Box,
    Image,
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
import { StyleSheet, ScrollView, Platform } from "react-native";
import useMediaQuery from "../../hooks/useMediaQuery";

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

    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <>
            {isDesktop ? (
                "hello"
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
                            <Box
                                bgColor={"#fff"}
                                mt="4"
                                p="4"
                                shadow={6}
                                borderRadius="10"
                                shadowRadius={12}
                            >
                                <HStack alignItems={"center"}>
                                    <Button
                                        size={50}
                                        variant="ghost"
                                        onPress={() =>
                                            navigation.navigate("Profile")
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
                                        <Text fontSize={"md"}>John Doe</Text>
                                        <Text fontSize={"xs"}>2 days ago</Text>
                                    </VStack>
                                    <Button bgColor={"#6E34B8"} ml="20">
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
                    <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                        <Text ml="4" fontSize={"2xl"}>
                            Share your thoughts here
                        </Text>
                        <Box alignItems="center" w="100%" mt={10} px="10">
                            <TextArea h={40} placeholder="Post" />
                            <HStack mt="5">
                                <Button
                                    bgColor={"#ffffff"}
                                    _text={{
                                        color: "#6E34B8",
                                    }}
                                    borderRadius={10}
                                    borderWidth={1}
                                    w="45%"
                                    mx="4"
                                    py="4"
                                    onPress={() => closePanel()}
                                >
                                    <HStack alignItems={"center"}>
                                        <Icon
                                            as={<AntDesign name="camera" />}
                                            mr="2"
                                        />
                                        <Text>Image</Text>
                                    </HStack>
                                </Button>
                                <Button
                                    bgColor={"#6E34B8"}
                                    borderRadius={10}
                                    w="45%"
                                    py="3"
                                    mx="4"
                                    onPress={() => closePanel()}
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

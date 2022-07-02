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
    Fab,
    Icon,
    Button,
} from "native-base";
import logo from "../../../assets/logo.png";
import { AntDesign } from "@expo/vector-icons";
import { SwipeablePanel } from "rn-swipeable-panel";

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
                        <Text width={"100%"} color="#828282" fontSize={"md"}>
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
            <Box>
                <HStack alignItems="space-between">
                    <Button
                        bg="violet.700"
                        borderRadius={10}
                        w="100%"
                        py="4"
                        onPress={() => setIsPanelActive(true)}
                    >
                        What's on your mind today?
                    </Button>
                </HStack>
            </Box>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <Text ml="4" fontSize={"2xl"}>
                    Share your thoughts here
                </Text>
                <Box alignItems="center" w="100%" mt={10} px="10">
                    <TextArea h={20} placeholder="Post" />
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
                                <Icon as={<AntDesign name="camera" />} mr="2" />
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
        </Box>
    );
}

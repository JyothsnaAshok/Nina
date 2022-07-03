import React from "react";
import {
    Box,
    Image,
    Pressable,
    Text,
    VStack,
    Center,
    Button,
    Flex,
    HStack,
    Avatar,
} from "native-base";
import one from "../../../assets/1.jpg";

export function Screen1({ navigation }) {
    return (
        <>
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
                            News
                        </Text>
                        <Text width={"100%"} color="#828282" fontSize={"md"}>
                            Read the latest news
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
            <Flex
                bgColor={"#ffffff"}
                p={5}
                pt={8}
                h={"100vh"}
                alignItems="center"

                // style={{
                //     backgr
            >
                <Image
                    w={"90%"}
                    height={"100"}
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    borderRadius="12"
                    opacity={0.8}
                />
                <Text bold color="#6E34B8" fontSize={22} width={"90%"} my={2}>
                    EU Proposes 1 Billion Euros in Immediate Support for Ukraine
                </Text>
                <VStack>
                    <HStack>
                        <Text width={"90%"} fontSize={16} my={2} mx={2}>
                            The European Union proposed 1 billion euros ($1.04
                            billion) in short-term financial relief for Ukraine
                            to shore up the war-ravaged nation’s urgent cash
                            needs, as Germany continues to hold up talks on a
                            larger package, according to people familiar with
                            the matter.
                            <br />
                            <br />
                            <br />
                            Ursula von der Leyen, the European Commission
                            president, said the first part of an assistance plan
                            “will allow us to give an immediate answer to the
                            urgent needs of Ukraine.”
                        </Text>
                    </HStack>
                    <HStack>
                        <Button
                            bgColor={"#6E34B8"}
                            borderRadius={6}
                            // w={"4rem"}
                            // mt={"5rem"}
                            onPress={() => navigation.navigate("page2")}
                        >
                            Next
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
            {/* <Button bgColor={"#6E34B8"} borderRadius={6} w={"4rem"} mt={"5rem"}>
                Next
            </Button> */}
        </>
    );
}

export function Screen2({ navigation }) {
    return (
        <>
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
                            News
                        </Text>
                        <Text width={"100%"} color="#828282" fontSize={"md"}>
                            Read the latest news
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
            <Flex
                bgColor={"#ffffff"}
                p={5}
                pt={8}
                h={"100vh"}
                alignItems="center"

                // style={{
                //     backgr
            >
                <Image
                    w={"90%"}
                    height={"100"}
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    borderRadius="12"
                    opacity={0.8}
                />
                <Text bold color="#6E34B8" fontSize={22} width={"90%"} my={2}>
                    JPMorgan Sees ‘Stratospheric’ $380 Oil on Worst-Case Russian
                    Cut
                </Text>
                <VStack>
                    <HStack>
                        <Text width={"90%"} fontSize={16} my={2} mx={2}>
                            Global oil prices could reach a “stratospheric” $380
                            a barrel if US and European penalties prompt Russia
                            to inflict retaliatory crude-output cuts, JPMorgan
                            Chase & Co. analysts warned.
                            <br />
                            <br />
                            <br />
                            The Group of Seven nations are hammering out a
                            complicated mechanism to cap the price fetched by
                            Russian oil in a bid to tighten the screws on
                            Vladimir Putin’s war machine in Ukraine.
                        </Text>
                    </HStack>
                    <HStack>
                        <Button
                            bgColor={"#6E34B8"}
                            borderRadius={6}
                            // w={"4rem"}
                            // mt={"5rem"}
                            onPress={() => navigation.navigate("page3")}
                        >
                            Next
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
            {/* <Button bgColor={"#6E34B8"} borderRadius={6} w={"4rem"} mt={"5rem"}>
            Next
        </Button> */}
        </>
    );
}

export function Screen3({ navigation }) {
    return (
        <>
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
                            News
                        </Text>
                        <Text width={"100%"} color="#828282" fontSize={"md"}>
                            Read the latest news
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
            <Flex
                bgColor={"#ffffff"}
                p={5}
                pt={8}
                h={"100vh"}
                alignItems="center"

                // style={{
                //     backgr
            >
                <Image
                    w={"90%"}
                    height={"100"}
                    source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    borderRadius="12"
                    opacity={0.8}
                />
                <Text bold color="#6E34B8" fontSize={22} width={"90%"} my={2}>
                    EU Proposes 1 Billion Euros in Immediate Support for Ukraine
                </Text>
                <VStack>
                    <HStack>
                        <Text width={"90%"} fontSize={16} my={2} mx={2}>
                            The European Union proposed 1 billion euros ($1.04
                            billion) in short-term financial relief for Ukraine
                            to shore up the war-ravaged nation’s urgent cash
                            needs, as Germany continues to hold up talks on a
                            larger package, according to people familiar with
                            the matter.
                            <br />
                            <br />
                            <br />
                            Ursula von der Leyen, the European Commission
                            president, said the first part of an assistance plan
                            “will allow us to give an immediate answer to the
                            urgent needs of Ukraine.”
                        </Text>
                    </HStack>
                    <HStack>
                        <Button
                            bgColor={"#6E34B8"}
                            borderRadius={6}
                            // w={"4rem"}
                            // mt={"5rem"}
                            onPress={() => navigation.navigate("page1")}
                        >
                            Next
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
            {/* <Button bgColor={"#6E34B8"} borderRadius={6} w={"4rem"} mt={"5rem"}>
            Next
        </Button> */}
        </>
    );
}

import { Avatar, HStack, VStack, Text, Button, Link } from "native-base";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function profile() {
    return (
        <>
            <Navbar />
            <VStack
                p={15}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <VStack
                    p={15}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderColor="#6E34B8"
                    borderWidth="1.5px"
                    width={"50%"}
                    borderRadius={16}
                    // bg="#F68766"
                    // w={"8rem"}
                    // h={"8rem"}
                >
                    <Avatar
                        w={"8rem"}
                        h={"8rem"}
                        bg="green.500"
                        source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                    >
                        AJ
                    </Avatar>
                    <Text fontSize={16} color="coolGray.500" italic pt={6}>
                        @arushigandhi
                    </Text>
                    <Text fontSize={18} color="coolGray.700" pt={3}>
                        🚀 A Penny Stock That Tripled Investors' Money In A Year
                    </Text>

                    <HStack borderRadius={8} bg="coolGray.200" my={6}>
                        <Text fontSize={12} color="coolGray.500" italic p={6}>
                            <span style={{ color: "#000", fontSize: "20px" }}>
                                0
                            </span>{" "}
                            Followers
                        </Text>
                        <Text fontSize={12} color="coolGray.500" italic p={6}>
                            <span style={{ color: "#000", fontSize: "20px" }}>
                                0
                            </span>{" "}
                            Following
                        </Text>
                    </HStack>
                </VStack>

                <Button
                    // rounded="3xl"
                    borderRadius="6"
                    bg={"#6E34B8"}
                    w={"10rem"}
                    my={5}
                    // ml={"4rem"}
                    _text={{
                        color: "#6E34B8",
                    }}
                >
                    <Link href="/create-portfolio" isUnderlined={false}>
                        <Text color={"#fff"}>Create a Portfolio </Text>
                    </Link>
                </Button>
            </VStack>
        </>
    );
}

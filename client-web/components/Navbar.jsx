import { Avatar, Box, Button, Center, Icon, Link, Text } from "native-base";
import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import Image from "next/image";

export default function Navbar() {
    return (
        <Box
            // height={"5vh"}
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            shadow={1}
            p={5}
        >
            <Box px={8}>
                <Image src="/images/icon.svg" width={110} height={45} />
            </Box>
            <Box
                display="flex"
                flexDirection={"row"}
                justifyContent="space-between"
            >
                <Box
                    px={"3.5rem"}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    textAlign={"center"}
                >
                    <Center>
                        <AiFillHome size={24} />
                    </Center>
                    <Link href="/" p={0} isUnderlined={false}>
                        Home
                    </Link>
                </Box>
                <Box
                    px={"3.5rem"}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                >
                    <Center>
                        <MdTravelExplore size={24} />
                    </Center>
                    <Link href="/explore" p={0} isUnderlined={false}>
                        Explore
                    </Link>
                </Box>
                <Box
                    px={"3.5rem"}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                >
                    <Center>
                        <FaRegNewspaper size={24} />
                    </Center>
                    <Link href="/news" p={0} isUnderlined={false}>
                        News
                    </Link>
                </Box>
            </Box>
            <Box
                px={8}
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
            >
                <Link href="/profile">
                    <Avatar
                        mx={"1rem"}
                        source={{
                            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                        size="xs"
                    >
                        JB
                    </Avatar>
                    <Text bold color="#6E34B8" fontSize={"1rem"} p={0} m={0}>
                        VISIT PROFILE
                    </Text>
                </Link>
            </Box>
        </Box>
    );
}

import { Box, Button, Center, Icon, Text } from "native-base";
import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
    return (
        <Box
            // height={"5vh"}
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            shadow={1}
            p={3}
        >
            <Box px={8}>ICON</Box>
            <Box
                display="flex"
                flexDirection={"row"}
                justifyContent="space-between"
            >
                <Box
                    px={8}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    textAlign={"center"}
                >
                    <Center>
                        <AiFillHome size={24} />
                    </Center>
                    <Text p={0}>Home</Text>
                </Box>
                <Box
                    px={8}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                >
                    <Center>
                        <MdTravelExplore size={24} />
                    </Center>
                    <Text p={0}>Explore</Text>
                </Box>
                <Box
                    px={8}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                >
                    <Center>
                        <FaRegNewspaper size={24} />
                    </Center>
                    <Text p={0}>News</Text>
                </Box>
            </Box>
            <Box px={8}>
                {/* <Button iconLeft>
                    <Icon name="cog" /> */}
                <Text>Settings</Text>
                {/* </Button> */}
            </Box>
        </Box>
    );
}

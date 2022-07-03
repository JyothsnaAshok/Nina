import React from "react";
import { Box, Image, Pressable, Text, VStack } from "native-base";
import logo from "../../../assets/logo.png";

export function Screen1({ navigation }) {
    return (
        <Box flex="1" bgColor={"#ffffff"}>
            {/* <img src="../assets/1.jpg" /> */}
        </Box>
    );
}

export function Screen2({ navigation }) {
    return (
        <Box flex="1" bgColor={"#ffffff"}>
            News 2
        </Box>
    );
}

export function Screen3({ navigation }) {
    return (
        <Box flex="1" bgColor={"#ffffff"}>
            News 3
        </Box>
    );
}

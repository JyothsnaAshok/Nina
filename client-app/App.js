import "react-native-gesture-handler";
import React from "react";
import {
    NativeBaseProvider,
    Box,
    // Center,
    // Heading,
    // VStack,
    // FormControl,
    // Input,
    // Link,
    // Button,
    // HStack,
    // Text,
    // Flex,
    // Stack,
} from "native-base";
import Navigator from "./src/navigator/Navigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Box flex={1}>
                    <Navigator />
                </Box>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

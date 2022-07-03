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
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./src/store";

const persistor = persistStore(store);

export default function App() {
    const queryClient = new QueryClient();
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <QueryClientProvider client={queryClient}>
                            <Box flex={1}>
                                <Navigator />
                            </Box>
                        </QueryClientProvider>
                    </PersistGate>
                </Provider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

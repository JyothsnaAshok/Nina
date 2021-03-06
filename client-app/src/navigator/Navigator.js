import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Box, Flex, Icon } from "native-base";
import { AntDesign, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import Welcome from "../screens/welcome";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Home from "../screens/home";
import Explore from "../screens/explore";
import Profile from "../screens/profile";
import SelfProfile from "../screens/selfProfile";
import CreatePortfolio from "../screens/createPortfolio";
import Setting from "../screens/setting";
import { useSelector } from "react-redux";
import useMediaQuery from "../hooks/useMediaQuery";
import { Screen1, Screen2, Screen3 } from "../screens/news";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HomeTab = createBottomTabNavigator();

function NewsStackedScreen() {
    return (
        <NewsStack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
            backBehavior="order"
            gestureEnabled={true}
        >
            <NewsStack.Screen name="page1" component={Screen1} />
            <NewsStack.Screen name="page2" component={Screen2} />
            <NewsStack.Screen name="page3" component={Screen3} />
        </NewsStack.Navigator>
    );
}

function HomeTabs() {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    return (
        <Tab.Navigator
            initialRouteName="Homepage"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: !isDesktop && 20,
                    left: 20,
                    right: 20,
                    top: isDesktop && 6,
                    elevation: 0,
                    backgroundColor: "#2F1155",
                    borderRadius: 25,
                    height: 70,
                    ...styles.shadow,
                },
            }}
        >
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box
                            alignSelf="center"
                            p={2}
                            bgColor={focused ? "#fff" : "#2F1155"}
                            borderRadius={10}
                        >
                            <Flex justifyContent="center" alignItems="center">
                                <Icon
                                    as={<SimpleLineIcons name="fire" />}
                                    size="7"
                                    color={focused ? "#2F1155" : "#fff"}
                                />
                            </Flex>
                        </Box>
                    ),
                }}
            />
            <Tab.Screen
                name="Homepage"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box
                            alignSelf="center"
                            p={2}
                            bgColor={focused ? "#fff" : "#2F1155"}
                            borderRadius={10}
                        >
                            <Flex justifyContent="center" alignItems="center">
                                <Icon
                                    as={<AntDesign name="home" />}
                                    size="7"
                                    color={focused ? "#2F1155" : "#fff"}
                                />
                            </Flex>
                        </Box>
                    ),
                }}
            />
            <Tab.Screen
                name="News"
                component={NewsStackedScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box
                            alignSelf="center"
                            p={2}
                            bgColor={focused ? "#fff" : "#2F1155"}
                            color="#fff"
                            borderRadius={10}
                        >
                            <Flex justifyContent="center" alignItems="center">
                                <Icon
                                    as={<Entypo name="flash" />}
                                    size="7"
                                    color={focused ? "#2F1155" : "#fff"}
                                />
                            </Flex>
                        </Box>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigator() {
    const { isLoggedIn } = useSelector((state) => state.user);

    return (
        <>
            {!isLoggedIn ? (
                <Stack.Navigator
                    initialRouteName="Welcome"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeTabs} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Settings" component={Setting} />
                    <Stack.Screen name="SelfProfile" component={SelfProfile} />
                    <Stack.Screen
                        name="CreatePortfolio"
                        component={CreatePortfolio}
                    />
                </Stack.Navigator>
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

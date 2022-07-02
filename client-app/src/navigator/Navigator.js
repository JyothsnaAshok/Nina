import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../screens/welcome";
import Login from "../screens/login";
import Signup from "../screens/signup";

const Stack = createStackNavigator();

export default function Navigator() {
    return (
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
    );
}

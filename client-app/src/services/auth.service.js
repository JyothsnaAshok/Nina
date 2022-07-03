import { BACKEND_URL } from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignUp = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/api/user`, body);
    return response.data;
};

export const SignIn = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/api/auth/login`, body);
    return response.data;
};

export const SignOut = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/users/logout`, body);
    return response.data;
};

export const UserData = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api/auth`, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

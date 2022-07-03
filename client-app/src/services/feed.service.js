import { BACKEND_URL } from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SendPost = async (body) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.post(`${BACKEND_URL}/api/feed`, body, {
            headers: {
                "x-auth-token": token,
            },
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const GetPosts = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${BACKEND_URL}/api/feed`, {
            headers: {
                "x-auth-token": token,
            },
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const GetTrendPosts = async () => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(
            `${BACKEND_URL}/api/feed?filter=likes:desc`,
            {
                headers: {
                    "x-auth-token": token,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const UpdateFollow = async (id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.put(
            `${BACKEND_URL}/api/user/follow/${id}`,
            "hello",
            {
                headers: {
                    "x-auth-token": token,
                },
            }
        );
        return response.data;
    } catch (e) {
        throw e;
    }
};

export const UpdateUnfollow = async (id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.put(
            `${BACKEND_URL}/api/user/unfollow/${id}`,
            "helloarushi",
            {
                headers: {
                    "x-auth-token": token,
                },
            }
        );
        return response.data;
    } catch (e) {
        throw e;
    }
};

export const LikePost = async (id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.put(
            `${BACKEND_URL}/api/feed/like/${id}`,
            "helloarushi",
            {
                headers: {
                    "x-auth-token": token,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const UnlikePost = async (id) => {
    try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.put(
            `${BACKEND_URL}/api/feed/unlike/${id}`,
            "helloarushi",
            {
                headers: {
                    "x-auth-token": token,
                },
            }
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

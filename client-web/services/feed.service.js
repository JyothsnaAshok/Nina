import { BACKEND_URL } from "../constants";
import axios from "axios";

export const SendPost = async (body) => {
    try {
        let { user } = JSON.parse(localStorage.getItem("persist:root"));
        user = JSON.parse(user);
        const token = user.user.token;
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
        let { user } = JSON.parse(localStorage.getItem("persist:root"));
        user = JSON.parse(user);
        const token = user.user.token;
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
        let { user } = JSON.parse(localStorage.getItem("persist:root"));
        user = JSON.parse(user);
        const token = user.user.token;
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
        let { user } = JSON.parse(localStorage.getItem("persist:root"));
        user = JSON.parse(user);
        const token = user.user.token;
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
        console.log(e);
    }
};

export const UpdateUnfollow = async (id) => {
    try {
        let { user } = JSON.parse(localStorage.getItem("persist:root"));
        user = JSON.parse(user);
        const token = user.user.token;
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
        console.log(e);
    }
};

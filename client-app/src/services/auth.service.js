import { BACKEND_URL } from "../../constants";
import axios from "axios";

export const SignUp = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/api/user`, body);
    return response.data;
};

export const SignIn = async (body) => {
    console.log(body, "dfbsfbgsrtnb");
    const response = await axios.post(`${BACKEND_URL}/api/auth/login`, body);
    return response.data;
};

export const SignOut = async (body) => {
    const response = await axios.post(`${BACKEND_URL}/users/logout`, body);
    return response.data;
};

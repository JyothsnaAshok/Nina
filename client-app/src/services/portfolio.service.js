import { BACKEND_URL } from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetAllPortfolios = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api/portfolio`, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

export const EditPortfolio = async (body) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.put(`${BACKEND_URL}/api/portfolio`, body, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

export const GetSelfPortfolio = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${BACKEND_URL}/api/portfolio/myfolio`, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

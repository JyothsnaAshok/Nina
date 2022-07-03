import { BACKEND_URL } from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetAllStocks = async () => {
    const response = await axios.get(`${BACKEND_URL}/api/stocks`);
    return response.data;
};

export const SendStock = async (body) => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(
        `${BACKEND_URL}/api/portfolio`,
        {
            stock: { ...body },
        },
        {
            headers: {
                "x-auth-token": token,
            },
        }
    );
    return response.data;
};

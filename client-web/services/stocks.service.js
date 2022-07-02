import { BACKEND_URL } from "../constants";
import axios from "axios";

export const GetAllStocks = async () => {
    const response = await axios.get(`${BACKEND_URL}/api/stocks`);
    return response.data;
};

// export const GetAllStocks = async () => {
//     const response = await axios.get(`${BACKEND_URL}/api/stocks`);
//     return response.data;
// };

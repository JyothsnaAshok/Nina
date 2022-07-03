import { BACKEND_URL } from "../constants";
import axios from "axios";

export const GetAllPortfolios = async () => {
    let { user } = JSON.parse(localStorage.getItem("persist:root"));
    user = JSON.parse(user);
    const token = user.user.token;
    const response = await axios.get(`${BACKEND_URL}/api/portfolio`, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

export const EditPortfolio = async (body) => {
    let { user } = JSON.parse(localStorage.getItem("persist:root"));
    user = JSON.parse(user);
    const token = user.user.token;
    const response = await axios.put(`${BACKEND_URL}/api/portfolio`, body, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

export const GetSelfPortfolio = async () => {
    let { user } = JSON.parse(localStorage.getItem("persist:root"));
    user = JSON.parse(user);
    const token = user.user.token;
    const response = await axios.get(`${BACKEND_URL}/api/portfolio/myfolio`, {
        headers: {
            "x-auth-token": token,
        },
    });
    return response.data;
};

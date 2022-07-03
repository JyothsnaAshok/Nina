import { BACKEND_URL } from "../../constants";
import axios from "axios";

export const GetAllStocks = async () => {
    const response = await axios.get(`${BACKEND_URL}/api/stocks`);
    return response.data;
};

export const SendStock = async (body) => {
    let { user } = JSON.parse(localStorage.getItem("persist:root"));
    user = JSON.parse(user);
    const token = user.user.token;
    console.log(token, "token put in stock serv");
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

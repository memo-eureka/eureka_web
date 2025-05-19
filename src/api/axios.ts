import axios from "axios";
import type { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "https://devdoyen.com",
});

export const setAccessToken = (token: string) => {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default instance;
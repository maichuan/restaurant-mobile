import axios from "axios";

export const serverClient = axios.create({
    // baseURL: 'http://10.2.51.152:3000',
    // baseURL: "http://192.168.43.233:3000",
    baseURL: "http://192.168.2.47:3000",
});

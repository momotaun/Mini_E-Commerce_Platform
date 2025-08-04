import api from "./api";

export const fetchHello = async () => {
    const res = await api.get("/hello");
    return res.data;
}
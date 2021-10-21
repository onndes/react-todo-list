import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "80f91154-9634-44fc-a875-b81e7897c21e",
    },
});

export const todoAPI = {
    getTodoLists() {
        return instance.get("todo-lists").then((response) => response.data);
    },

    createTotoList(title) {
        return instance.post("todo-lists", { title });
    },
};

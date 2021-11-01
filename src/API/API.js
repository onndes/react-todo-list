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
    deleteTotoList(todoId) {
        return instance.delete(`todo-lists/${todoId}`);
    },
    renameTotoList(todoId, title) {
        return instance.put(`todo-lists/${todoId}`, { title });
    },
    reorderTodoList(todoId, afterTodo) {
        return instance.put(`todo-lists/${todoId}/reorder`, { putAfterItemId: afterTodo });
    },
};

export const taksksAPI = {
    getTasks(todoId, count = 100, page = 1) {
        return instance
            .get(`todo-lists/${todoId}/tasks?count=${count}&page=${page}`)
            .then((response) => response.data);
    },
    createTask(todoId, taskText) {
        return instance
            .post(`todo-lists/${todoId}/tasks`, { title: taskText })
            .then((response) => response.data);
    },
    deleteTaskList(todoId, taskId) {
        return instance.delete(`todo-lists/${todoId}/tasks/${taskId}`);
    },
    renameTaskList(todoId, taskId, title) {
        return instance.put(`todo-lists/${todoId}/tasks/${taskId}`, { title });
    },
};

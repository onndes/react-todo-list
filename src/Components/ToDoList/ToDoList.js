import React from "react";
import FormToDoList from "./FormToDoList/FormToDoList";
import ToDoItem from "./ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const TasksList = (props) => {
    const addTask = (data) => {
        props.createTodoList(data.bodyNewTask);
    };
    return (
        <div className={s.wrapper}>
            <FormToDoList handleSubmit={addTask} />
            <h1 className={s.title}>TO-DO LISTS</h1>
            <ToDoItem
                todoLists={props.todoLists}
                deleteTodoList={props.deleteTodoList}
                renameTodoList={props.renameTodoList}
            />
        </div>
    );
};

export default TasksList;

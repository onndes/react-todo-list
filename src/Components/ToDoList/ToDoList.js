import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";
import LoaderLine from "./../../Common/LoaderLine/LoaderLine";
import FormAddItem from "./../FormAddItem/FormAddItem";

const TasksList = (props) => {
    const addTask = (data) => {
        props.createTodoList(data.bodyInput);
    };

    return (
        <div className={s.wrapper}>
            <FormAddItem
                handleSubmit={addTask}
                maxLength='30'
                placeholder='Enter name new task list...'
            />
            <h1 className={s.title}>TASK LIST - CATEGORIES</h1>
            {props.isLoading ? (
                <LoaderLine color='rgba(128, 128, 128, 0.8)' />
            ) : (
                <ToDoItem
                    todoLists={props.todoLists}
                    deleteTodoList={props.deleteTodoList}
                    renameTodoList={props.renameTodoList}
                    setIdSelectedTodoList={props.setIdSelectedTodoList}
                    setSelectedToDoTitle={props.setSelectedToDoTitle}
                />
            )}
        </div>
    );
};

export default TasksList;

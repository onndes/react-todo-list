import React from "react";
import FormToDoList from "./FormToDoList/FormToDoList";
import ToDoItem from "./ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";
import LoaderLine from "./../../Common/LoaderLine/LoaderLine";

const TasksList = (props) => {
    const addTask = (data) => {
        props.createTodoList(data.bodyNewTask);
    };
    

    return (
        <div className={s.wrapper}>
            <FormToDoList handleSubmit={addTask}/>
            <h1 className={s.title}>TO-DO LISTS</h1>
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

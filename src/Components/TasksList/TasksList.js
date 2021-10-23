import React from "react";
import FromAddNewItem from "./FromAddNewItem/FromAddNewItem";
import TaskItem from "./TaskItem/TaskItem";
import s from "./TasksList.module.css";
import { NavLink } from "react-router-dom";
import LoaderLine from "../../Common/LoaderLine/LoaderLine";

const TasksList = (props) => {
    const addTask = (data) => {
        props.addTask(data.bodyNewTask);
    };

    return (
        <div className={s.wrapper}>
            <FromAddNewItem handleSubmit={addTask} />
            <div className={s.wrapperTitleBtn}>
                <NavLink to='/todo-list' className={s.btnBack}></NavLink>
                <h2 className={s.titleTwo}>
                    TO-DO LIST: <span>{props.selectedTodoTitle}</span>
                </h2>
                <h1 className={s.title}>TASKS</h1>
            </div>
            {props.isLoading ? (
                <LoaderLine color='rgba(128, 128, 128, 0.8)' />
            ) : (
                <TaskItem
                    tasksList={props.tasksList}
                    deleteTask={props.deleteTask}
                    renameTask={props.renameTask}
                />
            )}
        </div>
    );
};

export default TasksList;

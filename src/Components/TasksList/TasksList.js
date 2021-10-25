import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import s from "./TasksList.module.css";
import { NavLink } from "react-router-dom";
import LoaderLine from "../../Common/LoaderLine/LoaderLine";
import FormAddItem from "./../FormAddItem/FormAddItem";

const TasksList = (props) => {
    const addTask = (data) => {
        props.addTask(data.bodyInput);
    };

    return (
        <div className={s.wrapper}>
            <FormAddItem handleSubmit={addTask} maxLength='3' placeholder='Enter name new task...' />
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

import React from "react";
import FromAddNewItem from "./FromAddNewItem/FromAddNewItem";
import TaskItem from "./TaskItem/TaskItem";
import s from "./TasksList.module.css";

const TasksList = (props) => {
    const addTask = (data) => {
        props.addTask(data.bodyNewTask);
    };

    return (
        <div className={s.wrapper}>
            <FromAddNewItem handleSubmit={addTask} />
            <h1 className={s.title}>TASKS</h1>
            <TaskItem
                tasksList={props.tasksList}
                deleteTask={props.deleteTask}
                renameTask={props.renameTask}
            />
        </div>
    );
};

export default TasksList;

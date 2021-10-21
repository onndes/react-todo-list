import React from "react";
// import FromAddNewItem from "./FromAddNewItem/FromAddNewItem";
import TaskItem from "./TaskItem/TaskItem";
import s from "./TasksList.module.css";

const TasksList = () => {


    return (
        <div className={s.wrapper}>
            {/* <FromAddNewItem handleSubmit={addTask} /> */}
            <h1 className={s.title}>TASKS</h1>
            <TaskItem />
        </div>
    );
};

export default TasksList;

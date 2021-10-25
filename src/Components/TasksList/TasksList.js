import React, { useState } from "react";
import s from "./TasksList.module.css";
import { NavLink } from "react-router-dom";
import LoaderLine from "../../Common/LoaderLine/LoaderLine";
import FormAddItem from "./../FormAddItem/FormAddItem";
import Item from "./../Item/Item";

const TasksList = (props) => {
    const addTask = (data) => {
        props.addTask(data.bodyInput);
    };
    const [renameItem, setRenameItem] = useState(null);

    if (!props.tasksList) {
        return <LoaderLine />;
    }

    const handleDeleteItem = (id) => {
        if (window.confirm("Delete?")) props.deleteTask(id);
    };
    const handleRenameItem = (id) => {
        setRenameItem(id);
    };
    const handleSubmitRename = (data) => {
        props.renameTask(renameItem, data.bodyRenameTask);
        setRenameItem(null);
    };
    const handleNotSubmitRename = () => {
        setRenameItem(null);
    };

    return (
        <div className={s.wrapper}>
            <FormAddItem
                handleSubmit={addTask}
                maxLength='3'
                placeholder='Enter name new task...'
            />
            <div className={s.wrapperTitleBtn}>
                <NavLink to='/todo-list' className={s.btnBack}></NavLink>
                <h2 className={s.titleTwo}>
                    TASK LIST: <span>{props.selectedTodoTitle}</span>
                </h2>
                <h1 className={s.title}>TASKS</h1>
            </div>
            {props.isLoading ? (
                <LoaderLine color='rgba(128, 128, 128, 0.8)' />
            ) : (
                <Item
                    itemLists={props.tasksList}
                    handleDeleteItem={handleDeleteItem}
                    handleSubmitRename={handleSubmitRename}
                    handleRenameItem={handleRenameItem}
                    handleNotSubmitRename={handleNotSubmitRename}
                />
            )}
        </div>
    );
};

export default TasksList;

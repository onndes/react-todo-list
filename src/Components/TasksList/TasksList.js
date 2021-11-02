import React, { useState } from "react";
import s from "./TasksList.module.css";
import { NavLink } from "react-router-dom";
import LoaderLine from "../../Common/LoaderLine/LoaderLine";
import FormAddItem from "../FormAddItem/FormAddItem";
import Item from "./../Item/Item";

const TasksList = (props) => {
    const maxLength = 100;
    const maxCountLength = 100;

    const addTask = (data) => {
        if (data.bodyInput.length > 0 && data.bodyInput.length <= maxLength) {
            props.addTask(data.bodyInput);
        }
    };
    const [renameItem, setRenameItem] = useState(null);
    const [deleteItem, setDeleteItem] = useState(null);

    const handleSubmitRename = (data) => {
        props.renameTask(renameItem, data.bodyRename);
        setRenameItem(null);
    };
    if (!props.tasksList) {
        return <LoaderLine height='4px' />;
    }
    const addZiro = (num) => {
        let res = num;
        if (res < 100) {
            res = `0${res}`;
            if (res < 10) {
                res = `0${res}`;
            }
        }
        return res;
    };
    return (
        <div className={s.wrapper}>
            <FormAddItem
                handleSubmit={addTask}
                maxLength={maxLength}
                placeholder='Enter name new task...'
                lenghItems={props.tasksList && props.tasksList.length}
                maxCountLength={maxCountLength}
            />
            <div className={s.wrapperTitleBtn}>
                <NavLink to='/todo-list' className={s.btnBack}></NavLink>
                <h2 className={s.titleTwo}>
                    TASK LIST: <span>{props.selectedTodoTitle}</span>
                </h2>
                <div className={s.wrapperTitle}>
                    <h1 className={s.title}>TASKS</h1>
                    <p className={s.countItem}>
                        {props.tasksList ? addZiro(props.tasksList.length) : " "} / {props.maxTasks}
                    </p>
                </div>
            </div>
            {props.isLoading || !props.tasksList ? (
                <LoaderLine />
            ) : (
                <Item
                    itemLists={props.tasksList}
                    deleteSubmitItem={props.deleteTask}
                    handleSubmitRename={handleSubmitRename}
                    setRenameItem={setRenameItem}
                    renameItem={renameItem}
                    setDeleteItem={setDeleteItem}
                    deleteItem={deleteItem}
                />
            )}
        </div>
    );
};

export default TasksList;

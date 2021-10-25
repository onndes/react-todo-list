import React, { useState } from "react";
import s from "./TasksList.module.css";
import { NavLink } from "react-router-dom";
import LoaderLine from "../../Common/LoaderLine/LoaderLine";
import FormAddItem from "./../FormAddItem/FormAddItem";
import Item from "./../Item/Item";

const TasksList = (props) => {
    const addTask = (data) => {
        if (props.tasksList && props.tasksList.length <= 100) {
            props.addTask(data.bodyInput);
        }
    };
    const [renameItem, setRenameItem] = useState(null);

    const handleDeleteItem = (id) => {
        if (window.confirm("Delete?")) props.deleteTask(id);
    };
    const handleRenameItem = (id) => {
        setRenameItem(id);
    };
    const handleSubmitRename = (data) => {
        props.renameTask(renameItem, data.bodyRename);
        setRenameItem(null);
    };
    const handleNotSubmitRename = () => {
        setRenameItem(null);
    };

    return (
        <div className={s.wrapper}>
            <FormAddItem
                handleSubmit={addTask}
                maxLength='100'
                placeholder='Enter name new task...'
                lenghItems={props.tasksList && props.tasksList.length}
                maxCountLength='10'
            />
            <div className={s.wrapperTitleBtn}>
                <NavLink to='/todo-list' className={s.btnBack}></NavLink>
                <h2 className={s.titleTwo}>
                    TASK LIST: <span>{props.selectedTodoTitle}</span>
                </h2>
                <h1 className={s.title}>TASKS</h1>
            </div>
            {props.isLoading || !props.tasksList ? (
                <LoaderLine />
            ) : (
                <Item
                    itemLists={props.tasksList}
                    handleDeleteItem={handleDeleteItem}
                    handleSubmitRename={handleSubmitRename}
                    handleRenameItem={handleRenameItem}
                    handleNotSubmitRename={handleNotSubmitRename}
                    renameItem={renameItem}
                />
            )}
            {/* <p>Et nulla minim cupidatat consequat. Nisi excepteur cupidatat excepteur ut et excepteur est occaecat. Dolor laborum laborum veniam incididunt laborum laboris id nisi sunt pariatur anim. Qui magna mollit et ex ullamco et amet nulla pariatur ullamco. Aliqua labore consequat id deserunt nisi eiusmod cillum Lorem tempor ipsum velit ut. Magna sunt nostrud culpa officia veniam do reprehenderit laboris excepteur labore. Ut enim occaecat adipisicing eiusmod adipisicing consectetur consequat magna do sint elit do et.</p> */}
        </div>
    );
};

export default TasksList;

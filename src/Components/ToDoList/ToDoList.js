import React, { useState } from "react";
import s from "./ToDoList.module.css";
import LoaderLine from "./../../Common/LoaderLine/LoaderLine";
import FormAddItem from "../FormAddItem/FormAddItem";
import Item from "../Item/Item";

const TasksList = (props) => {
    const maxLength = 30;
    const maxCountLength = 10;

    const [renameItem, setRenameItem] = useState(null);
    const [deleteItem, setDeleteItem] = useState(false);

    const addTask = (data) => {
        props.createTodoList(data.bodyInput);
    };

    if (!props.todoLists) {
        return <LoaderLine height='4px' />;
    }

    const handleSubmitRename = (data) => {
        props.renameTodoList(renameItem, data.bodyRename);
        setRenameItem(null);
    };

    const handleClickToDo = (id, title) => {
        props.setIdSelectedTodoList(id, title);
        props.setSelectedToDoTitle(title);
    };

    const addZiro = (num) => {
        let res = num;
        if (res < 10) {
            res = `0${res}`;
        }
        return res;
    };

    return (
        <div className={s.wrapper}>
            <FormAddItem
                handleSubmit={addTask}
                maxLength={maxLength}
                placeholder='Enter name new task list...'
                lenghItems={props.todoLists.length}
                maxCountLength={maxCountLength}
                updateInitialValues={props.updateInitialValues}
                setUdateInitialValues={props.setUdateInitialValues}
            />
            <div className={s.wrapperTitle}>
                <h1 className={s.title}>TASK LIST - CATEGORIES</h1>
                <p className={s.countItem}>
                    {props.todoLists ? addZiro(props.todoLists.length) : " "} / {props.maxTodo}
                </p>
            </div>
            {props.isLoading ? (
                <LoaderLine />
            ) : (
                <Item
                    itemLists={props.todoLists}
                    deleteSubmitItem={props.deleteTodoList}
                    handleSubmitRename={handleSubmitRename}
                    handleClickToDo={handleClickToDo}
                    setRenameItem={setRenameItem}
                    renameItem={renameItem}
                    setDeleteItem={setDeleteItem}
                    deleteItem={deleteItem}
                    loadingId={props.loadingId}
                    isLoadingUpdate={props.isLoadingUpdate}
                />
            )}
        </div>
    );
};

export default TasksList;

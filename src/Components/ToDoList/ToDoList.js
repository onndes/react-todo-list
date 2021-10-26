import React, { useState } from "react";
import s from "./ToDoList.module.css";
import LoaderLine from "./../../Common/LoaderLine/LoaderLine";
import FormAddItem from "./../FormAddItem/FormAddItem";
import Item from "../Item/Item";

const TasksList = (props) => {
    const maxLength = 30;
    const maxCountLength = 10;
    const [isAddTask, setIsAddTask] = useState(false);
    const addTask = (data) => {
        if (data.bodyInput.length > 0 && data.bodyInput.length <= maxLength) {
            props.createTodoList(data.bodyInput);
            setIsAddTask(true);
        }
        
    };

    const [renameItem, setRenameItem] = useState(null);

    if (!props.todoLists) {
        return <LoaderLine height='4px' />;
    }
    const handleDeleteItem = (id) => {
        if (window.confirm("Delete?")) props.deleteTodoList(id);
    };
    const handleRenameItem = (id) => {
        setRenameItem(id);
    };
    const handleSubmitRename = (data) => {
        props.renameTodoList(renameItem, data.bodyRename);
        setRenameItem(null);
    };
    const handleNotSubmitRename = () => {
        setRenameItem(null);
    };

    const handleClickToDo = (id, title) => {
        props.setIdSelectedTodoList(id, title);
        props.setSelectedToDoTitle(title);
    };

    return (
        <div className={s.wrapper}>
            <FormAddItem
                handleSubmit={addTask}
                maxLength={maxLength}
                placeholder='Enter name new task list...'
                lenghItems={props.todoLists.length}
                maxCountLength={maxCountLength}
                initialValues={isAddTask}
            />
            <h1 className={s.title}>TASK LIST - CATEGORIES</h1>
            {props.isLoading ? (
                <LoaderLine />
            ) : (
                <Item
                    itemLists={props.todoLists}
                    handleDeleteItem={handleDeleteItem}
                    handleRenameItem={handleRenameItem}
                    handleSubmitRename={handleSubmitRename}
                    handleNotSubmitRename={handleNotSubmitRename}
                    handleClickToDo={handleClickToDo}
                    renameItem={renameItem}
                />
            )}
        </div>
    );
};

export default TasksList;

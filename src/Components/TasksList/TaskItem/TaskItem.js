import React, { useState } from "react";
import s from "./TaskItem.module.css";
import { Form, Field } from "react-final-form";
import { NavLink } from "react-router-dom";

const ToDoItem = (props) => {
    const [renameItem, setRenameItem] = useState(null);
    if (!props.tasksList) {
        return <p>No todo</p>;
    }
    const handleDeleteItem = (id) => {
      setRenameItem('s')
    };
    const handleRenameItem = (id) => {};
    const handleSubmitRename = (data) => {};
    const handleNotSubmitRename = () => {};

    const handleClickToDo = (id) => {};

    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {props.tasksList.map((todoItem) => {
                    if (renameItem === todoItem.id) {
                        return (
                            <FormRenameItem
                                initialValues={todoItem.title}
                                key={todoItem.id}
                                handleSubmit={handleSubmitRename}
                                handleNotSubmitRename={handleNotSubmitRename}
                            />
                        );
                    }
                    return (
                        <li key={todoItem.id} className={s.item}>
                            <NavLink
                                to={`/todo-list/${Math.abs(todoItem.order) + 1}`}
                                onClick={() => handleClickToDo(todoItem.id, todoItem.title)}
                                className={s.text}>
                                {todoItem.title}
                            </NavLink>
                            <div
                                onClick={() => handleRenameItem(todoItem.id)}
                                className={s.wrapperBtnRename + " " + s.wrapperBtn}></div>
                            <div
                                onClick={() => handleDeleteItem(todoItem.id)}
                                className={s.wrapperBtnDelete + " " + s.wrapperBtn}></div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const FormRenameItem = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            initialValues={{ bodyRenameTodo: props.initialValues }}
            render={({ handleSubmit, key }) => (
                <form key={key} onSubmit={handleSubmit} className={s.item + " " + s.itemForm}>
                    <Field
                        className={s.text + " " + s.textForm}
                        name='bodyRenameTodo'
                        component='input'
                    />

                    <button
                        type='submit'
                        className={s.wrapperBtnSubmitRename + " " + s.wrapperBtn}></button>
                    <div
                        onClick={props.handleNotSubmitRename}
                        className={s.wrapperBtnNotSubmitRename + " " + s.wrapperBtn}></div>
                </form>
            )}
        />
    );
};

export default ToDoItem;

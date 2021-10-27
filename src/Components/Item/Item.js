import React from "react";
import s from "./Item.module.css";
import { NavLink } from "react-router-dom";
import FormRenameItem from "./FormRenameItem/FormRenameItem";
import FormDeleteItem from "./FormDeleteItem/FormDeleteItem";

const Item = (props) => {
    if (props.itemLists.length === 0) {
        return <p className={s.noTasks}>List is empty :(</p>;
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {props.itemLists.map((i) => {
                    if (props.renameItem === i.id) {
                        return (
                            <FormRenameItem
                                initialValues={i.title}
                                key={i.id}
                                handleSubmit={props.handleSubmitRename}
                                setRenameItem={props.setRenameItem}
                                maxLength={!i.todoListId ? "30" : "100"}
                            />
                        );
                    }
                    if (props.deleteItem === i.id) {
                        return (
                            <FormDeleteItem
                                id={i.id}
                                key={i.id}
                                setDeleteItem={props.setDeleteItem}
                                deleteSubmitItem={props.deleteSubmitItem}
                            />
                        );
                    }
                    return (
                        <li key={i.id} className={s.item}>
                            {!i.todoListId ? (
                                <NavLink
                                    to={`/todo-list/${Math.abs(i.order) + 1}`}
                                    onClick={() => props.handleClickToDo(i.id, i.title)}
                                    className={s.text}>
                                    {i.title}
                                </NavLink>
                            ) : (
                                <p className={s.text}>{i.title}</p>
                            )}
                            <div
                                onClick={() => {
                                    props.setDeleteItem(null);
                                    props.setRenameItem(i.id);
                                }}
                                className={s.wrapperBtnRename + " " + s.wrapperBtn}></div>
                            <div
                                onClick={() => {
                                    props.setDeleteItem(i.id);
                                    props.setRenameItem(null);
                                }}
                                className={s.wrapperBtnDelete + " " + s.wrapperBtn}></div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Item;

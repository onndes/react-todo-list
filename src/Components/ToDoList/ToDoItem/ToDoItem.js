import React from "react";
import s from "./ToDoItem.module.css";

const ToDoItem = (props) => {
    if (!props.todoLists) {
        return <p>No todo</p>;
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {props.todoLists.map((todoItem) => {
                    return (
                        <li key={todoItem.id} className={s.item}>
                            {todoItem.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ToDoItem;

import ToDoItem from "./ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const ToDoList = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>TASKS</h1>
            <ToDoItem />
        </div>
    );
};

export default ToDoList;

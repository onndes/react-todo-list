import s from "./ToDoItem.module.css";

const ToDoItem = () => {
    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                <li className={s.item}>Test1</li>
                <li className={s.item}>Test1</li>
                <li className={s.item}>Test1</li>
                <li className={s.item}>Test1</li>
            </ul>
        </div>
    );
};

export default ToDoItem;

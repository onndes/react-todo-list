import s from "./Body.module.css";
import TasksList from "../TasksList/TasksList";

const Body = () => {
    return (
        <div className={s.wrapper}>
            <TasksList />
        </div>
    );
};

export default Body;

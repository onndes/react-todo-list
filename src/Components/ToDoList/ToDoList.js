import FormToDoList from "./FormToDoList/FormToDoList";
import ToDoItem from "./ToDoItem/ToDoItem";
import s from "./ToDoList.module.css";

const TasksList = () => {
    const addTask = (data) => {
        console.log(data);
    };

    return (
        <div className={s.wrapper}>
            <FormToDoList handleSubmit={addTask} />
            <h1 className={s.title}>TO-DO LISTS</h1>
            <ToDoItem />
        </div>
    );
};

export default TasksList;

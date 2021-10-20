import s from "./Body.module.css";
import TasksList from "../TasksList/TasksList";
import ToDoList from "./../ToDoList/ToDoList";
import { Route, Switch, Redirect } from "react-router-dom";

const Body = () => {
    return (
        <div className={s.wrapper}>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/todo-list' />} />
                <Route path='/todo-list' component={ToDoList} />
                <Route path='/tasks' component={TasksList} />
            </Switch>
        </div>
    );
};

export default Body;

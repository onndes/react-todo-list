import React from "react";
import s from "./Body.module.css";
import TasksList from "../TasksList/TasksList";
import ToDoListContainer from "./../ToDoList/ToDoListContainer";
import { Route, Switch, Redirect } from "react-router-dom";

const Body = () => {
    return (
        <div className={s.wrapper}>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/todo-list' />} />
                <Route path='/todo-list' component={ToDoListContainer} />
                <Route path='/tasks' component={TasksList} />
            </Switch>
        </div>
    );
};

export default Body;

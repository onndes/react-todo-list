import React from "react";
import s from "./Body.module.css";
import TasksListContainer from "../TasksList/TasksListContainer";
import ToDoListContainer from "./../ToDoList/ToDoListContainer";
import { Route, Switch, Redirect } from "react-router-dom";

const Body = () => {
    return (
        <div className={s.wrapper}>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/todo-list' />} />
                <Route exact path='/todo-list' component={ToDoListContainer} />
                <Route path='/todo-list/:order' component={TasksListContainer} />
            </Switch>
        </div>
    );
};

export default Body;

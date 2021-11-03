import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import ToDoList from "./ToDoList";
import {
    createTodoList,
    getTodoLists,
    deleteTodoList,
    renameTodoList,
    setIdSelectedTodoList,
} from "../../Store/Reducer/ToDoReducer";
import { setSelectedToDoTitle } from "../../Store/Reducer/TasksReducer";
import withAuthRedirect from "../../Common/AuthRedirect/withAuthRedirect";
class ToDoListContainer extends React.Component {
    componentDidMount() {
        this.props.getTodoLists();
    }

    render() {
        return <ToDoList {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        todoLists: state.todo.todoLists,
        isLoading: state.todo.isLoading,
        maxTodo: state.todo.maxTodo,
        loadingId: state.todo.loadingId,
        isLoadingUpdate: state.todo.isLoadingUpdate,
    };
};

export default compose(
    connect(mapStateToProps, {
        createTodoList,
        getTodoLists,
        deleteTodoList,
        renameTodoList,
        setIdSelectedTodoList,
        setSelectedToDoTitle,
    }),
    withAuthRedirect,
)(ToDoListContainer);

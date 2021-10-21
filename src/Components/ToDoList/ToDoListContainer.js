import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import ToDoList from "./ToDoList";
import { createTodoList, getTodoLists } from "../../Store/Reducer/ToDoReducer";
class ToDoListContainer extends React.Component {
    componentDidMount() {
        this.props.getTodoLists();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.props.getTodoLists();
        }
    }

    render() {
        return <ToDoList {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        todoLists: state.todo.todoLists,
    };
};

export default compose(connect(mapStateToProps, { createTodoList, getTodoLists }))(
    ToDoListContainer,
);

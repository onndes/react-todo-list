import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TasksList from "./TasksList";
import { getTasks, addTask, renameTask, deleteTask } from "../../Store/Reducer/TasksReducer";
import withAuthRedirect from "../../Common/AuthRedirect/withAuthRedirect";

class TasksListContainer extends React.Component {
    componentDidMount() {
        this.props.getTasks(this.props.match.params.order);
    }

    render() {
        return <TasksList {...this.props} />;
    }
}
const mapDispatchToProps = (state) => {
    return {
        tasksList: state.tasks.tasksList,
        selectedTodoTitle: state.tasks.selectedTodoTitle,
        isLoading: state.tasks.isLoading,
        maxTasks: state.tasks.maxTasks,
    };
};
export default compose(
    connect(mapDispatchToProps, { getTasks, addTask, deleteTask, renameTask }),
    withRouter,
    withAuthRedirect,
)(TasksListContainer);

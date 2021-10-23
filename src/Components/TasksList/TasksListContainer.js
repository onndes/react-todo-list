import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TasksList from "./TasksList";
import { getTasks, addTask, renameTask, deleteTask } from "../../Store/Reducer/TasksReducer";

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
    };
};
export default compose(
    connect(mapDispatchToProps, { getTasks, addTask, deleteTask, renameTask }),
    withRouter,
)(TasksListContainer);
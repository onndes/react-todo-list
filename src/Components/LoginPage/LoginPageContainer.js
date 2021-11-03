import React from "react";
import LoginPage from "./LoginPage";
import { connect } from "react-redux";
import { getAuthData, login } from "../../Store/Reducer/AuthReducer";
import { Redirect } from "react-router-dom";

class LoginPageContainer extends React.Component {
    componentDidMount() {
        // this.props.getAuth();
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/todo-list' />;
        }
        return <LoginPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { getAuthData, login })(LoginPageContainer);

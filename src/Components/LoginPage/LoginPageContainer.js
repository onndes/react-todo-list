import React from "react";
import LoginPage from "./LoginPage";
import { connect } from "react-redux";
import { getAuth } from "../../Store/Reducer/AuthReducer";

class LoginPageContainer extends React.Component {
    componentDidMount() {
        // this.props.getAuth();
    }

    render() {
        return <LoginPage {...this.porps} />;
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { getAuth })(LoginPageContainer);

import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuth } from "./../../Store/Reducer/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.getAuth();
    }

    render() {
        return <Header {...this.porps} />;
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { getAuth })(HeaderContainer);

import React from "react";
import "../../Common/Sanitize.css";
import "./App.css";
import HeaderContainer from "../Header/HeaderContainer";
import Body from "../Body/Body";
import { connect } from "react-redux";
import { getAuthData } from "./../../Store/Reducer/AuthReducer";

const App = (props) => {
    return (
        <div className='AppWrapper'>
            <div className='AppWrapperContent'>
                <HeaderContainer />
                <Body />
            </div>
        </div>
    );
};

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData();
    }

    render() {
        return <App {...this.porps} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { getAuthData })(AppContainer);

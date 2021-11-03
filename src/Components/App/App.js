import React from "react";
import "../../Common/Sanitize.css";
import "./App.css";
import HeaderContainer from "../Header/HeaderContainer";
import Body from "../Body/Body";
import { connect } from "react-redux";
import { initialApp } from "./../../Store/Reducer/AuthReducer";
import PreloaderApp from "../../Common/PreloaderApp/PreloaderApp";

const App = (props) => {
    if (!props.ifInitialApp) return <PreloaderApp />;
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
        this.props.initialApp();
    }

    render() {
        return <App {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        ifInitialApp: state.auth.ifInitialApp,
    };
};

export default connect(mapStateToProps, { initialApp })(AppContainer);

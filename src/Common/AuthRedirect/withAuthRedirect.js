import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};
const withAuthRedirect = (Component) => {
    const redirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />;
        return <Component {...props} />;
    };

    return connect(mapStateToProps, {})(redirectComponent);
};

export default withAuthRedirect;

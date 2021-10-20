import "../../Common/Sanitize.css";
import "./App.css";

import Header from "../Header/Header";
import Body from "../Body/Body";

const App = () => {
    return (
        <div className='AppWrapper'>
            <div className='AppWrapperContent'>
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default App;

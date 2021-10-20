import "../../Common/Sanitize.css";
import "./App.css";
import ToDoList from "../ToDoList/ToDoList";
import FromAddNewItem from "./../FromAddNewItem/FromAddNewItem";

const App = () => {
    const addTask = (data) => {
        console.log(data);
    };

    return (
        <div className='AppWrapper'>
            <div className='AppWrapperContent'>
                <FromAddNewItem handleSubmit={addTask} />
                <ToDoList />
            </div>
        </div>
    );
};

export default App;

import s from "./FormToDoList.module.css";
import { Field, reduxForm } from "redux-form";

const FormToDoList = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field
                className={s.inputText}
                name='bodyNewTask'
                placeholder='Name new to-do list...'
                component='input'
                type='text'
            />
            <button className={s.button}>ADD</button>
        </form>
    );
};

export default reduxForm({ form: "todo" })(FormToDoList);

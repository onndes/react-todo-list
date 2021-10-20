import s from "./FromAddNewItem.module.css";
import { Field, reduxForm } from "redux-form";

const FromAddNewItem = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field className={s.input} name='bodyNewTask' component='input' type='text' />
            <button className={s.button}>ADD</button>
        </form>
    );
};

export default reduxForm({ form: "task" })(FromAddNewItem);

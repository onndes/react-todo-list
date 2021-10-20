import s from "./FromAddNewItem.module.css";
import { Field, reduxForm } from "redux-form";

const FromAddNewItem = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field
                className={s.inputTitle}
                name='bodyTitleNewTask'
                placeholder='Enter the title'
                component='input'
                type='text'
            />

            <Field
                className={s.inputText}
                name='bodyNewTask'
                placeholder='Task...'
                component='input'
                type='text'
            />
            <button className={s.button}>ADD</button>
        </form>
    );
};

export default reduxForm({ form: "task" })(FromAddNewItem);

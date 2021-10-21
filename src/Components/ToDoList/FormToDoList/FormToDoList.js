import React from "react";
import s from "./FormToDoList.module.css";
import { Field, Form } from "react-final-form";

const FormToDoList = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    <Field
                        className={s.inputText}
                        name='bodyNewTask'
                        placeholder='Enter name new to-do list...'
                        component="input"
                    />
                    <button type='submit' className={s.button}>ADD</button>
                </form>
            )}
        />
    );
};

export default FormToDoList;

import React from "react";
import s from "./FromAddNewItem.module.css";
import { Field, Form } from "react-final-form";

const FromAddNewItem = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    <Field
                        className={s.inputText}
                        name='bodyNewTask'
                        placeholder='Enter new tasks...'
                        component='input'
                    />
                    <button type='submit' className={s.button}>
                        ADD
                    </button>
                </form>
            )}
        />
    );
};

export default FromAddNewItem;

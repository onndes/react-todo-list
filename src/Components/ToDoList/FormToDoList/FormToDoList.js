import React from "react";
import s from "./FormToDoList.module.css";
import { Field, Form } from "react-final-form";
import cn from "classnames";

const FormToDoList = (props) => {
    const validatorMaxLength = (data) => {
        const errors = {};
        if (data.bodyNewTask && data.bodyNewTask.length > 3) {
            errors.bodyNewTask = "Max length 30";
        }
        return errors;
    };

    let isError = false;

    return (
        <Form
            onSubmit={props.handleSubmit}
            validate={validatorMaxLength}
            render={({ handleSubmit }) => {
                return (
                    <div className={s.wrapper}>
                        <form
                            onSubmit={handleSubmit}
                            className={cn(s.form, { [s.error]: isError })}>
                            <Field
                                name='bodyNewTask'
                                render={({ input, meta }) => {
                                    !!meta.error === true ? (isError = true) : (isError = false);
                                    return (
                                        <>
                                            <input
                                                type='text'
                                                {...input}
                                                placeholder='Enter name new to-do list...'
                                                className={
                                                    s.inputText + " " + (meta.error && s.error)
                                                }
                                            />
                                        </>
                                    );
                                }}
                            />

                            <button type='submit' className={s.button}>
                                ADD
                            </button>
                        </form>
                        {isError && <p className={s.pError}>Max length 30</p>}
                    </div>
                );
            }}
        />
    );
};

export default FormToDoList;

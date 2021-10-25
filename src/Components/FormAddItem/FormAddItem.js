import React from "react";
import s from "./FormAddItem.module.css";
import { Field, Form } from "react-final-form";
import cn from "classnames";

const FormAddItem = (props) => {
    const validatorMaxLength = (data) => {
        const errors = {};
        if (data.bodyNewTask && data.bodyNewTask.length > props.maxLength) {
            errors.bodyNewTask = `Max length ${props.maxLength}`;
        }
        return errors;
    };

    return (
        <Form
            onSubmit={props.handleSubmit}
            validate={validatorMaxLength}
            placeholder={props.placeholder}
            render={(props) => {
                return (
                    <div className={s.wrapper}>
                        <form
                            onSubmit={props.handleSubmit}
                            className={cn(s.form, { [s.error]: props.errors.bodyNewTask })}>
                            <Field
                                name='bodyInput'
                                render={({ input, meta }) => {
                                    return (
                                        <>
                                            <input
                                                type='text'
                                                {...input}
                                                placeholder={props.placeholder}
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
                        {props.errors.bodyNewTask && (
                            <p className={s.pError}>{props.errors.bodyNewTask}</p>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default FormAddItem;

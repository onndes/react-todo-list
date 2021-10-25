import React from "react";
import s from "./FormAddItem.module.css";
import { Field, Form } from "react-final-form";
import cn from "classnames";

const FormAddItem = (props) => {
    const validatorMaxLength = (data) => {
        const errors = {};
        if (data.bodyInput && data.bodyInput.length > props.maxLength) {
            errors.bodyInput = `Max length name ${props.maxLength}`;
        }
        if (props.lenghItems >= props.maxCountLength) {
            errors.maxCountTask = `Max count task ${props.maxCountLength}`;
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
                            className={cn(s.form, {
                                [s.error]:
                                    props.errors.bodyInput ||
                                    (props.errors.maxCountTask && props.touched.bodyInput),
                            })}>
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

                            <button type='submit' className={cn(s.button, {
                                [s.error]:
                                    props.errors.bodyInput ||
                                    (props.errors.maxCountTask && props.touched.bodyInput),
                            })}>
                                ADD
                            </button>
                        </form>
                        {props.errors.bodyInput && (
                            <p className={s.pError}>{props.errors.bodyInput}</p>
                        )}
                        {props.errors.maxCountTask && props.touched.bodyInput && (
                            <p className={s.pError}>{props.errors.maxCountTask}</p>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default FormAddItem;

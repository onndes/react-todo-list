import React from "react";
import s from "./FormAddItem.module.css";
import { Field, Form } from "react-final-form";
import cn from "classnames";

const FormAddItem = (props) => {
    const validateMaxLength = (values, errors) => {
        if (values.bodyInput && values.bodyInput.length > props.maxLength) {
            errors.bodyInput = `Max length name ${props.maxLength}`;
        }

        return errors;
    };
    const validateMaxCounItems = (values, errors) => {
        if (props.lenghItems >= props.maxCountLength) {
            errors.maxCountTask = `Max count task ${props.maxCountLength}`;
        }
        return errors;
    };

    const lenghCountItems = props.lenghItems;
    return (
        <Form
            onSubmit={props.handleSubmit}
            validate={(values) => {
                const errors = {};
                validateMaxLength(values, errors);
                validateMaxCounItems(values, errors);
                return errors;
            }}
            placeholder={props.placeholder}
            render={(props) => {
                const isUsebodyInput =
                    props.errors.maxCountTask &&
                    props.modified.bodyInput &&
                    props.values.bodyInput &&
                    props.values.bodyInput.length >= 1;

                return (
                    <div className={s.wrapper}>
                        <form
                            onSubmit={(e) => {
                                props.handleSubmit(e);
                                if (lenghCountItems < 10) props.form.reset();
                            }}
                            className={cn(s.form, {
                                [s.error]: props.errors.bodyInput || isUsebodyInput,
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

                            <button
                                type='submit'
                                className={cn(s.button, {
                                    [s.error]: props.errors.bodyInput || isUsebodyInput,
                                })}>
                                ADD
                            </button>
                        </form>

                        {props.errors.bodyInput && (
                            <p className={s.pError}>{props.errors.bodyInput}</p>
                        )}
                        {isUsebodyInput && <p className={s.pError}>{props.errors.maxCountTask}</p>}
                    </div>
                );
            }}
        />
    );
};

export default FormAddItem;
